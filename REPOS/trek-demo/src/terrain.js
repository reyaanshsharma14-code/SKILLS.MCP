import * as THREE from 'three';
import { DEM_N, REAL_DEMS } from './real-dem.js';

export const SIZE = 560;
export const SUN = new THREE.Vector3(0.82, 0.26, -0.5).normalize();

/* ---------- Decode real SRTM satellite elevation grids ---------- */
const decodedGrids = {};
let activeDemKey = 'langtang';

function decodeDem(key) {
  if (decodedGrids[key]) return decodedGrids[key];
  const entry = REAL_DEMS[key] || REAL_DEMS.langtang;
  const bin = atob(entry.b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  const u16 = new Uint16Array(bytes.buffer);
  const f32 = new Float32Array(DEM_N * DEM_N);

  // Clamp SRTM radar shadow voids (<1100m) to valid valley floor
  const validMin = Math.max(1200, entry.minM);
  const span = Math.max(1, entry.maxM - entry.minM);
  let realLo = Infinity, realHi = -Infinity;

  for (let i = 0; i < u16.length; i++) {
    let elevM = entry.minM + (u16[i] / 65535) * span;
    if (elevM < validMin) elevM = validMin;
    f32[i] = elevM;
    if (elevM < realLo) realLo = elevM;
    if (elevM > realHi) realHi = elevM;
  }

  // Convert real-world elevation in metres into scene vertical units (0 .. 155)
  const norm = new Float32Array(DEM_N * DEM_N);
  const mSpan = Math.max(1, realHi - realLo);
  for (let gz = 0; gz < DEM_N; gz++) {
    const ez = (gz / (DEM_N - 1)) * 2 - 1;
    for (let gx = 0; gx < DEM_N; gx++) {
      const ex = (gx / (DEM_N - 1)) * 2 - 1;
      const edgeFade = 1 - 0.35 * Math.pow(Math.min(1, Math.hypot(ex, ez) / 1.15), 2.2);
      const t = (f32[gz * DEM_N + gx] - realLo) / mSpan;
      // Emphasise high Himalayan ridges while preserving real valley geometry
      norm[gz * DEM_N + gx] = (Math.pow(t, 1.18) * 148 * edgeFade) - 8;
    }
  }

  const peakWorldX = ((entry.peakGrid[0] / (DEM_N - 1)) - 0.5) * SIZE;
  const peakWorldZ = ((entry.peakGrid[1] / (DEM_N - 1)) - 0.5) * SIZE;

  decodedGrids[key] = { norm, realLo, realHi, peakWorldX, peakWorldZ };
  return decodedGrids[key];
}

// Pre-decode all 3 real Himalayan SRTM grids
['langtang', 'annapurna', 'gokyo'].forEach(decodeDem);

/* ---------- Bilinear sample of real SRTM grid + subtle rock micro-detail ---------- */
function sampleGrid(grid, x, z) {
  const u = Math.min(1, Math.max(0, (x / SIZE) + 0.5)) * (DEM_N - 1);
  const v = Math.min(1, Math.max(0, (z / SIZE) + 0.5)) * (DEM_N - 1);
  const x0 = Math.floor(u), z0 = Math.floor(v);
  const x1 = Math.min(DEM_N - 1, x0 + 1), z1 = Math.min(DEM_N - 1, z0 + 1);
  const fx = u - x0, fz = v - z0;
  const a = grid[z0 * DEM_N + x0] * (1 - fx) + grid[z0 * DEM_N + x1] * fx;
  const b = grid[z1 * DEM_N + x0] * (1 - fx) + grid[z1 * DEM_N + x1] * fx;
  const base = a * (1 - fz) + b * fz;
  // Subtle high-frequency crag detail on steep upper slopes
  const crag = Math.sin(x * 0.17 + z * 0.11) * Math.cos(z * 0.19 - x * 0.07) * 1.35 * Math.max(0, base / 110);
  return base + crag;
}

export function setActiveDem(key) {
  if (REAL_DEMS[key]) activeDemKey = key;
}

export function getActiveDemInfo() {
  return decodeDem(activeDemKey);
}

export function heightAt(x, z, key = activeDemKey) {
  const d = decodeDem(key);
  return sampleGrid(d.norm, x, z);
}

/* shared GLSL */
const NOISE = /* glsl */ `
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1,0)), f.x), mix(h21(i + vec2(0,1)), h21(i + vec2(1,1)), f.x), f.y);
}
float fbm(vec2 p){ float a = 0.5, s = 0.0; for(int i = 0; i < 4; i++){ s += a * vnoise(p); p *= 2.03; a *= 0.5; } return s; }
`;
const FOG = /* glsl */ `
uniform vec3 uFog; uniform vec3 uSunFog; uniform vec3 uSunDir; uniform float uFogDen;
vec3 applyFog(vec3 c, vec3 wpos){
  float d = distance(wpos, cameraPosition);
  vec3 vd = normalize(wpos - cameraPosition);
  float f = 1.0 - exp(-d * d * uFogDen * uFogDen);
  vec3 fc = mix(uFog, uSunFog, pow(max(dot(vd, uSunDir), 0.0), 5.0));
  return mix(c, fc, clamp(f, 0.0, 1.0));
}
`;

export const LIGHT_PRESETS = {
  dawn: {
    sunDir: new THREE.Vector3(0.82, 0.25, -0.5).normalize(),
    sunCol: '#ffc08a',
    skyAmb: '#3f5a92',
    groundAmb: '#1d1a22',
    fog: '#b48b80',
    sunFog: '#f6ab6c',
    fogDen: 0.0028,
  },
  noon: {
    sunDir: new THREE.Vector3(0.38, 0.78, -0.48).normalize(),
    sunCol: '#fff3e2',
    skyAmb: '#5878a8',
    groundAmb: '#282b2e',
    fog: '#8fa6bd',
    sunFog: '#cfe0f0',
    fogDen: 0.0022,
  },
  starlight: {
    sunDir: new THREE.Vector3(-0.6, 0.35, -0.7).normalize(),
    sunCol: '#7ca2db',
    skyAmb: '#1d2d4e',
    groundAmb: '#0c111b',
    fog: '#141f33',
    sunFog: '#283d62',
    fogDen: 0.0026,
  },
};

export function makeSharedUniforms() {
  const c = (h) => new THREE.Color(h);
  const p = LIGHT_PRESETS.dawn;
  return {
    uSunDir: { value: p.sunDir.clone() },
    uSunCol: { value: c(p.sunCol) },
    uSkyAmb: { value: c(p.skyAmb) },
    uGroundAmb: { value: c(p.groundAmb) },
    uFog: { value: c(p.fog) },
    uSunFog: { value: c(p.sunFog) },
    uFogDen: { value: p.fogDen },
    uTime: { value: 0 },
  };
}

export function applyLightPreset(shared, scene, presetName) {
  const p = LIGHT_PRESETS[presetName] || LIGHT_PRESETS.dawn;
  shared.uSunDir.value.copy(p.sunDir);
  shared.uSunCol.value.set(p.sunCol);
  shared.uSkyAmb.value.set(p.skyAmb);
  shared.uGroundAmb.value.set(p.groundAmb);
  shared.uFog.value.set(p.fog);
  shared.uSunFog.value.set(p.sunFog);
  shared.uFogDen.value = p.fogDen;
  scene.background.set(p.fog);
}

/* ---------- terrain ---------- */
export function buildTerrain(shared) {
  const seg = 256;
  const geo = new THREE.PlaneGeometry(SIZE, SIZE, seg, seg);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const hs = [];
  for (let i = 0; i < pos.count; i++) {
    const h = heightAt(pos.getX(i), pos.getZ(i));
    pos.setY(i, h);
    if (i % 13 === 0) hs.push(h);
  }
  geo.computeVertexNormals();
  hs.sort((a, b) => a - b);
  const waterY = hs[Math.floor(hs.length * 0.1)];
  const maxH = hs[hs.length - 1];

  const uniforms = {
    ...shared,
    uWater: { value: waterY },
    uSnow: { value: waterY + (maxH - waterY) * 0.41 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: /* glsl */ `
      varying float vH; varying vec3 vN; varying vec3 vW;
      void main(){
        vH = position.y; vN = normal;
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uWater; uniform float uSnow;
      uniform vec3 uSunCol; uniform vec3 uSkyAmb; uniform vec3 uGroundAmb;
      varying float vH; varying vec3 vN; varying vec3 vW;
      ${NOISE}
      ${FOG}
      float line(float v, float w){
        float f = abs(fract(v - 0.5) - 0.5) / fwidth(v);
        return 1.0 - clamp(f / w, 0.0, 1.0);
      }
      void main(){
        vec3 n = normalize(vN);
        float slope = 1.0 - n.y;
        float nz = fbm(vW.xz * 0.33);
        float nz2 = fbm(vW.xz * 0.035 + 11.0);
        float alt = vH;

        vec3 grassLow  = vec3(0.045, 0.085, 0.038);
        vec3 grassHigh = vec3(0.18, 0.15, 0.085);
        vec3 rockDark  = vec3(0.072, 0.064, 0.06);
        vec3 rockLight = vec3(0.22, 0.185, 0.16);
        vec3 snowC     = vec3(0.90, 0.93, 0.99);

        vec3 ground = mix(grassLow, grassHigh, smoothstep(uWater, uWater + 55.0, alt + nz2 * 22.0));
        ground *= 0.72 + 0.56 * nz;
        float rockAmt = smoothstep(0.15, 0.38, slope + (nz - 0.5) * 0.28);
        vec3 col = mix(ground, mix(rockDark, rockLight, nz), rockAmt);

        float line0 = uSnow + (nz2 - 0.5) * 30.0 + (nz - 0.5) * 9.0;
        float sn = smoothstep(line0, line0 + 15.0, alt) * (1.0 - smoothstep(0.36, 0.66, slope + (nz - 0.5) * 0.14));
        col = mix(col, snowC, sn);

        float dif = clamp(dot(n, uSunDir), 0.0, 1.0);
        float wrap = clamp(dot(n, uSunDir) * 0.5 + 0.5, 0.0, 1.0);
        vec3 amb = mix(uGroundAmb, uSkyAmb, n.y * 0.5 + 0.5);
        vec3 lit = col * (uSunCol * (dif * 1.72 + wrap * 0.16) + amb * 0.76);

        float cl = line(vH / 12.0, 1.0) * 0.045;
        lit += vec3(1.0, 0.82, 0.62) * cl * (1.0 - sn * 0.6) * 0.48;

        gl_FragColor = vec4(applyFog(lit, vW), 1.0);
        #include <colorspace_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat);

  function updateDemGeometry(demKey) {
    setActiveDem(demKey);
    const p = geo.attributes.position;
    let lo = Infinity, hi = -Infinity;
    for (let i = 0; i < p.count; i++) {
      const h = heightAt(p.getX(i), p.getZ(i), demKey);
      p.setY(i, h);
      if (h < lo) lo = h;
      if (h > hi) hi = h;
    }
    p.needsUpdate = true;
    geo.computeVertexNormals();
    uniforms.uSnow.value = lo + (hi - lo) * 0.41;
  }

  return { mesh, waterY, maxH, updateDemGeometry };
}

/* ---------- water ---------- */
export function buildWater(shared, waterY) {
  const geo = new THREE.PlaneGeometry(SIZE, SIZE, 1, 1);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.ShaderMaterial({
    uniforms: { ...shared },
    vertexShader: /* glsl */ `
      varying vec3 vW;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `
      uniform float uTime; uniform vec3 uSunCol;
      varying vec3 vW;
      ${NOISE}
      ${FOG}
      void main(){
        vec2 p = vW.xz * 0.5;
        float a = fbm(p + vec2(uTime * 0.05, 0.0));
        float b = fbm(p + vec2(0.0, uTime * 0.04) + 5.0);
        vec3 n = normalize(vec3((a - 0.5) * 0.35, 1.0, (b - 0.5) * 0.35));
        vec3 vd = normalize(vW - cameraPosition);
        float fres = pow(1.0 - clamp(dot(-vd, n), 0.0, 1.0), 3.0);
        vec3 deep = vec3(0.01, 0.045, 0.065);
        vec3 sky = mix(uFog, vec3(0.22, 0.36, 0.52), 0.55);
        vec3 col = mix(deep, sky, clamp(0.15 + fres * 0.85, 0.0, 1.0));
        float glint = pow(max(dot(reflect(vd, n), uSunDir), 0.0), 220.0);
        col += uSunCol * glint * 2.5;
        gl_FragColor = vec4(applyFog(col, vW), 1.0);
        #include <colorspace_fragment>
      }`,
  });
  const m = new THREE.Mesh(geo, mat);
  m.position.y = waterY;
  return m;
}

/* ---------- sky dome ---------- */
export function buildSky(shared) {
  const mat = new THREE.ShaderMaterial({
    uniforms: { ...shared },
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uSunDir; uniform vec3 uSunCol; uniform vec3 uFog; uniform vec3 uSunFog;
      varying vec3 vDir;
      ${NOISE}
      void main(){
        vec3 d = normalize(vDir);
        float t = clamp(d.y, 0.0, 1.0);
        vec3 horizon = mix(uFog, uSunFog, pow(max(dot(d, uSunDir), 0.0), 3.0));
        vec3 mid = vec3(0.12, 0.17, 0.33);
        vec3 top = vec3(0.012, 0.024, 0.07);
        vec3 col = mix(horizon, mid, smoothstep(0.0, 0.28, t));
        col = mix(col, top, smoothstep(0.18, 0.85, t));
        float s = max(dot(d, uSunDir), 0.0);
        col += uSunCol * (pow(s, 900.0) * 6.0 + pow(s, 40.0) * 0.5 + pow(s, 6.0) * 0.18);
        float st = step(0.9965, h21(floor(d.xz / max(d.y, 0.2) * 220.0))) * smoothstep(0.35, 0.8, t);
        col += vec3(st) * 0.65;
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), mat);
  sky.renderOrder = -10;
  sky.frustumCulled = false;
  return sky;
}

/* ---------- cloud / mist layers ---------- */
export function buildClouds(shared, baseY) {
  const group = new THREE.Group();
  const layers = [
    { y: baseY + 26, op: 0.5, scale: 0.012, speed: 0.012, col: '#ffd9c2' },
    { y: baseY + 62, op: 0.36, scale: 0.008, speed: 0.008, col: '#f3c4b0' },
    { y: baseY + 105, op: 0.26, scale: 0.006, speed: 0.005, col: '#ffe0cc' },
  ];
  layers.forEach((L, i) => {
    const geo = new THREE.PlaneGeometry(1400, 1400, 1, 1);
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.ShaderMaterial({
      uniforms: { ...shared, uCol: { value: new THREE.Color(L.col) }, uOp: { value: L.op }, uScale: { value: L.scale }, uSpeed: { value: L.speed }, uSeed: { value: i * 13.7 } },
      transparent: true,
      depthWrite: false,
      vertexShader: /* glsl */ `
        varying vec3 vW;
        void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: /* glsl */ `
        uniform float uTime; uniform vec3 uCol; uniform float uOp; uniform float uScale; uniform float uSpeed; uniform float uSeed;
        varying vec3 vW;
        ${NOISE}
        void main(){
          vec2 p = vW.xz * uScale + vec2(uTime * uSpeed, uSeed);
          float f = fbm(p) * 0.65 + fbm(p * 2.3 + 4.0) * 0.35;
          float a = smoothstep(0.5, 0.78, f) * uOp;
          float d = distance(vW, cameraPosition);
          a *= smoothstep(28.0, 110.0, d) * (1.0 - smoothstep(420.0, 700.0, d));
          gl_FragColor = vec4(uCol, a);
          #include <colorspace_fragment>
        }`,
    });
    const m = new THREE.Mesh(geo, mat);
    m.position.y = L.y;
    m.renderOrder = 5 + i;
    group.add(m);
  });
  return group;
}

/* ---------- trails ---------- */
function smooth(arr, k) {
  return arr.map((_, i) => {
    let s = 0, c = 0;
    for (let j = -k; j <= k; j++) {
      const v = arr[i + j];
      if (v !== undefined) { s += v; c++; }
    }
    return s / c;
  });
}

export function buildTrailCurve(ctrl, demKey = activeDemKey) {
  const flat = new THREE.CatmullRomCurve3(ctrl.map(([x, z]) => new THREE.Vector3(x, 0, z)), false, 'centripetal');
  const N = 200;
  const pts = flat.getSpacedPoints(N);
  const hs = smooth(pts.map((p) => heightAt(p.x, p.z, demKey)), 5);
  const out = pts.map((p, i) => new THREE.Vector3(p.x, Math.max(hs[i], heightAt(p.x, p.z, demKey) - 0.3) + 1.1, p.z));
  return new THREE.CatmullRomCurve3(out, false, 'centripetal');
}
