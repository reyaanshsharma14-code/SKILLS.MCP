import * as THREE from 'three';
import {
  buildTerrain,
  buildWater,
  buildSky,
  buildClouds,
  buildTrailCurve,
  makeSharedUniforms,
  applyLightPreset,
  getActiveDemInfo,
  heightAt,
} from './terrain.js';
import { treks, stageFractions, reviews } from './data.js';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (id) => document.getElementById(id);
const fmt = (n) => n.toLocaleString('en-US');

/* ---------------- three scene ---------------- */
const canvas = $('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
let dpr = Math.min(devicePixelRatio, 1.5);
renderer.setPixelRatio(dpr);
const scene = new THREE.Scene();
scene.background = new THREE.Color('#b48b80');
const camera = new THREE.PerspectiveCamera(50, 1, 0.5, 1800);

const shared = makeSharedUniforms();
const { mesh: terrain, waterY, maxH, updateDemGeometry } = buildTerrain(shared);
scene.add(terrain);
scene.add(buildWater(shared, waterY));
const sky = buildSky(shared);
scene.add(sky);
const clouds = buildClouds(shared, waterY + (maxH - waterY) * 0.18);
scene.add(clouds);

const trailGroup = new THREE.Group();
scene.add(trailGroup);
const walker = new THREE.Mesh(
  new THREE.SphereGeometry(0.95, 16, 12),
  new THREE.MeshBasicMaterial({ color: '#ff5a1f' })
);
scene.add(walker);

// 3D Summit Beacon on the true SRTM peak coordinate
const summitPin = new THREE.Mesh(
  new THREE.ConeGeometry(1.4, 3.6, 4),
  new THREE.MeshBasicMaterial({ color: '#ff5a1f' })
);
scene.add(summitPin);

let current = 0;
let trail = null;

const TUBE_SEGS = 420, RADIAL = 5;

function disposeGroup(g) {
  g.children.slice().forEach((c) => {
    c.geometry?.dispose();
    c.material?.dispose();
    g.remove(c);
  });
}

function buildTrail(i) {
  disposeGroup(trailGroup);
  const t = treks[i];
  updateDemGeometry(t.id);
  const demInfo = getActiveDemInfo();

  const peakY = heightAt(demInfo.peakWorldX, demInfo.peakWorldZ, t.id);
  summitPin.position.set(demInfo.peakWorldX, peakY + 2.4, demInfo.peakWorldZ);
  summitPin.rotation.y = Math.PI / 4;

  const curve = buildTrailCurve(t.ctrl, t.id);
  const base = new THREE.Mesh(
    new THREE.TubeGeometry(curve, TUBE_SEGS, 0.28, RADIAL, false),
    new THREE.MeshBasicMaterial({ color: '#e8e2d2', transparent: true, opacity: 0.6 })
  );
  const walked = new THREE.Mesh(
    new THREE.TubeGeometry(curve, TUBE_SEGS, 0.52, RADIAL, false),
    new THREE.MeshBasicMaterial({ color: '#ff5a1f' })
  );
  walked.geometry.setDrawRange(0, 0);
  trailGroup.add(base, walked);

  const samples = curve.getSpacedPoints(200);
  let lo = Infinity, hi = -Infinity;
  samples.forEach((p) => { lo = Math.min(lo, p.y); hi = Math.max(hi, p.y); });
  const toAlt = (y) => t.startAlt + ((y - lo) / Math.max(0.1, hi - lo)) * (t.maxAlt - t.startAlt);

  const box = new THREE.Box3().setFromPoints(samples);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());

  const marks = stageFractions.map((u, k) => {
    const p = curve.getPointAt(u);
    const m = new THREE.Mesh(new THREE.OctahedronGeometry(0.95), new THREE.MeshBasicMaterial({ color: '#e8e2d2' }));
    m.position.copy(p);
    trailGroup.add(m);
    return { u, p, alt: t.stages[k][2] || Math.round(toAlt(p.y) / 10) * 10, name: t.stages[k][0] };
  });

  const summitMark = {
    p: new THREE.Vector3(demInfo.peakWorldX, peakY + 4.2, demInfo.peakWorldZ),
    name: `▲ ${t.summitName} · ${fmt(t.summitAlt)} m`,
    isSummit: true,
  };

  trail = { curve, walked, samples, toAlt, center, size, marks, lo, hi, summitMark };
  buildLabels();
  buildProfile();
}

/* ---------------- DOM labels ---------------- */
const labelsEl = $('labels');
let labelEls = [];
let summitLabelEl = null;

function buildLabels() {
  labelsEl.innerHTML = '';
  labelEls = trail.marks.map((m, k) => {
    const el = document.createElement('div');
    el.className = 'wp';
    el.textContent = `${String(k + 1).padStart(2, '0')} ${m.name}`;
    labelsEl.appendChild(el);
    return el;
  });
  summitLabelEl = document.createElement('div');
  summitLabelEl.className = 'wp wp-summit';
  summitLabelEl.textContent = trail.summitMark.name;
  labelsEl.appendChild(summitLabelEl);
}

const tmp = new THREE.Vector3();
function updateLabels(showStages, activeIdx, showSummit = true) {
  labelEls.forEach((el, k) => {
    tmp.copy(trail.marks[k].p).project(camera);
    const vis = showStages && tmp.z < 1 && Math.abs(tmp.x) < 1.05 && Math.abs(tmp.y) < 1.05;
    el.classList.toggle('on', vis);
    el.classList.toggle('cur', k === activeIdx);
    if (vis) el.style.transform = `translate(${(tmp.x * 0.5 + 0.5) * innerWidth}px, ${(-tmp.y * 0.5 + 0.5) * innerHeight}px) translate(-50%, -140%)`;
  });
  if (summitLabelEl) {
    tmp.copy(trail.summitMark.p).project(camera);
    const vis = showSummit && tmp.z < 1 && Math.abs(tmp.x) < 0.95 && Math.abs(tmp.y) < 0.92;
    summitLabelEl.classList.toggle('on', vis);
    if (vis) summitLabelEl.style.transform = `translate(${(tmp.x * 0.5 + 0.5) * innerWidth}px, ${(-tmp.y * 0.5 + 0.5) * innerHeight}px) translate(-50%, -150%)`;
  }
}

/* ---------------- Atmosphere switcher ---------------- */
document.querySelectorAll('[data-light]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-light]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    applyLightPreset(shared, scene, btn.dataset.light);
  });
});

/* ---------------- trek list + detail ---------------- */
const rowsEl = $('rows');
treks.forEach((t, i) => {
  const b = document.createElement('button');
  b.className = 'row';
  b.type = 'button';
  b.innerHTML = `<span class="n mono">0${i + 1}</span><span class="t">${t.name}</span><span class="p"><b>$${fmt(t.price)}</b>${t.days} days</span><span class="m">${t.region} · ${t.grade} · Summit view ${fmt(t.summitAlt)} m</span>`;
  b.addEventListener('click', () => selectTrek(i));
  rowsEl.appendChild(b);
});

const trekSel = $('f-trek');
treks.forEach((t, i) => trekSel.add(new Option(`${t.name} (${t.days} days)`, i)));

function buildProfile() {
  const svg = $('profile');
  const t = treks[current];
  const W = 520, H = 190, padL = 46, padB = 28, padT = 14, padR = 12;
  const iw = W - padL - padR, ih = H - padT - padB;
  const pts = trail.samples.map((p, i) => {
    const x = padL + (i / (trail.samples.length - 1)) * iw;
    const y = padT + ih - ((trail.toAlt(p.y) - t.startAlt) / (t.maxAlt - t.startAlt)) * ih;
    return [x, y];
  });
  const line = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  const area = `${line} L${padL + iw} ${padT + ih} L${padL} ${padT + ih}Z`;
  const ticks = [0, 0.5, 1].map((f) => {
    const alt = Math.round((t.startAlt + (t.maxAlt - t.startAlt) * f) / 10) * 10;
    const y = padT + ih - f * ih;
    return `<line x1="${padL}" x2="${W - padR}" y1="${y}" y2="${y}" stroke="#0e1512" stroke-opacity=".18"/><text x="${padL - 6}" y="${y + 4}" text-anchor="end" font-family="IBM Plex Mono" font-size="10" fill="#0e1512">${fmt(alt)}</text>`;
  }).join('');
  const marks = trail.marks.map((m, k) => {
    const idx = Math.round(m.u * (pts.length - 1));
    const [x, y] = pts[idx];
    return `<line x1="${x}" x2="${x}" y1="${y}" y2="${padT + ih}" stroke="#0e1512" stroke-opacity=".35" stroke-dasharray="2 3"/><circle cx="${x}" cy="${y}" r="3.5" fill="#ff5a1f" stroke="#0e1512" stroke-width="1"/><text x="${x}" y="${H - 10}" text-anchor="middle" font-family="IBM Plex Mono" font-size="10" fill="#0e1512">${k + 1}</text>`;
  }).join('');
  svg.innerHTML = `<title id="profile-t">Elevation profile of ${t.name}, from ${fmt(t.startAlt)} to ${fmt(t.maxAlt)} metres</title>${ticks}<path d="${area}" fill="#0e1512" fill-opacity=".1"/><path d="${line}" fill="none" stroke="#0e1512" stroke-width="2"/>${marks}<text x="6" y="12" font-family="IBM Plex Mono" font-size="9" fill="#0e1512">METRES</text>`;
}

function renderDetail() {
  const t = treks[current];
  $('d-region').textContent = `${t.code} · ${t.region}`;
  $('d-name').textContent = t.name;
  $('d-summary').textContent = t.summary;
  const img = $('d-photo');
  img.src = t.photo;
  img.alt = t.photoAlt;
  $('d-summit').textContent = `${t.summitName} · ${fmt(t.summitAlt)} m`;
  $('hud-dem').textContent = `SRTM DEM · ${t.summitName} (${fmt(t.summitAlt)} m)`;
  $('hud-gps').textContent = `${t.gps} · Real NASA SRTM elevation mesh`;
  $('d-facts').innerHTML = [
    ['Duration', `${t.days} days (${t.distanceKm} km)`],
    ['Max sleeping / pass', `${fmt(t.maxAlt)} m`],
    ['Grade & hours', `${t.grade} · ${t.dailyHours}`],
    ['Lead guide', t.leadGuide],
  ].map(([k, v]) => `<li><span>${k}</span><b>${v}</b></li>`).join('');
  $('s-trek').textContent = `${t.name} · ${t.days} days`;
  [...rowsEl.children].forEach((r, i) => r.setAttribute('aria-pressed', String(i === current)));
  trekSel.value = current;
}

function selectTrek(i) {
  current = i;
  buildTrail(i);
  renderDetail();
  lastStage = -1;
  storyP = 0;
}
$('d-book').addEventListener('click', () => (trekSel.value = current));

/* ---------------- Home Reviews ---------------- */
const homeReviewsEl = $('home-reviews');
if (homeReviewsEl) {
  homeReviewsEl.innerHTML = reviews.slice(0, 3).map((r) => `
    <article class="review-card reveal">
      <div class="review-top mono">
        <span>${r.route}</span>
        <span class="review-spo2">SpO2 ${r.spo2}</span>
      </div>
      <h3>“${r.headline}”</h3>
      <p>${r.body}</p>
      <footer class="review-foot mono">
        <span>${r.author} · ${r.city}</span>
        <span>${r.month} · Guide: ${r.guide}</span>
      </footer>
    </article>
  `).join('');
}

/* ---------------- camera poses ---------------- */
const heroPos = new THREE.Vector3(-42, waterY + 62, 158);
const heroLook = new THREE.Vector3(24, waterY + 72, -68);
const camPos = heroPos.clone(), camLook = heroLook.clone();
const dPos = new THREE.Vector3(), dLook = new THREE.Vector3();
const mouse = { x: 0, y: 0 };
addEventListener('pointermove', (e) => {
  mouse.x = (e.clientX / innerWidth - 0.5) * 2;
  mouse.y = (e.clientY / innerHeight - 0.5) * 2;
});

let storyP = 0, lastStage = -1;
const sEls = { idx: $('s-idx'), title: $('s-title'), alt: $('s-alt'), text: $('s-text'), bar: $('s-bar'), hint: $('s-hint'), live: $('s-live'), pct: $('s-pct') };

function setStage(k) {
  if (k === lastStage) return;
  lastStage = k;
  const t = treks[current];
  sEls.idx.textContent = String(k + 1).padStart(2, '0');
  sEls.title.textContent = t.stages[k][0];
  sEls.alt.textContent = fmt(trail.marks[k].alt);
  sEls.text.textContent = t.stages[k][1];
}

const trekSec = $('treks'), storySec = $('route');

const clock = new THREE.Clock();
let frameAvg = 0.016;

function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), 0.05);
  const vh = innerHeight;
  const sr = storySec.getBoundingClientRect();
  if (sr.bottom < 0) { updateLabels(false, -1, false); return; }

  const tr = trekSec.getBoundingClientRect();
  const storyActive = sr.top <= vh * 0.35;
  const heroZone = tr.top > vh * 0.55;
  const time = clock.elapsedTime;

  const rawP = Math.min(1, Math.max(0, -sr.top / (sr.height - vh)));
  const k = reduced ? 1 : 1 - Math.exp(-dt * 5);
  storyP += (rawP - storyP) * k;

  if (storyActive) {
    const u = storyP;
    const ahead = trail.curve.getPointAt(Math.min(1, u + 0.04));
    const here = trail.curve.getPointAt(u);
    const back = trail.curve.getPointAt(Math.max(0, u - 0.07));
    const dir = new THREE.Vector3().subVectors(ahead, back).setY(0).normalize();
    dPos.copy(here).addScaledVector(dir, -20).add(new THREE.Vector3(0, 12, 0)).add(new THREE.Vector3(-dir.z * 8, 0, dir.x * 8));
    dLook.copy(ahead).add(new THREE.Vector3(0, 3, 0));
  } else if (heroZone) {
    dPos.copy(heroPos);
    if (!reduced) dPos.add(new THREE.Vector3(Math.sin(time * 0.12) * 14 + mouse.x * 6, mouse.y * -3, Math.cos(time * 0.1) * 5));
    dLook.copy(heroLook);
  } else {
    const c = trail.center, s = Math.max(trail.size.x, trail.size.z);
    dPos.set(c.x, c.y + 42 + s * 0.78, c.z + 32 + s * 0.95);
    dLook.set(c.x, c.y - 4, c.z);
  }

  const kc = reduced ? 1 : 1 - Math.exp(-dt * (storyActive ? 3.2 : 2.2));
  camPos.lerp(dPos, kc);
  camLook.lerp(dLook, kc);
  camPos.y = Math.max(camPos.y, heightAt(camPos.x, camPos.z) + 7.5);
  camera.position.copy(camPos);
  camera.lookAt(camLook);
  camera.updateMatrixWorld();
  sky.position.copy(camera.position);
  shared.uTime.value = time;

  const shown = storyActive ? storyP : 0;
  trail.walked.geometry.setDrawRange(0, Math.floor(shown * TUBE_SEGS) * RADIAL * 6);
  walker.visible = storyActive;
  if (storyActive) walker.position.copy(trail.curve.getPointAt(storyP)).y += 0.25;

  let stageIdx = 0;
  stageFractions.forEach((f, i) => { if (storyP >= f - 0.1) stageIdx = i; });
  if (storyP > 0.97) stageIdx = 4;
  setStage(stageIdx);
  sEls.bar.style.height = `${storyP * 100}%`;
  sEls.hint.style.opacity = rawP > 0.03 ? 0 : 1;
  sEls.live.textContent = fmt(Math.round(trail.toAlt(trail.curve.getPointAt(storyP).y) / 10) * 10);
  sEls.pct.textContent = Math.round(storyP * 100);

  updateLabels(!heroZone, storyActive ? stageIdx : -1, true);
  renderer.render(scene, camera);

  frameAvg = frameAvg * 0.95 + dt * 0.05;
  if (frameAvg > 0.026 && dpr > 1) {
    dpr = Math.max(1, dpr - 0.25);
    renderer.setPixelRatio(dpr);
    renderer.setSize(innerWidth, innerHeight, false);
    frameAvg = 0.016;
  }
}

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.fov = w < 700 ? 62 : 50;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);

/* ---------------- booking form ---------------- */
const form = $('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('f-name'), email = $('f-email'), size = $('f-size');
  const set = (input, id, msg) => {
    $(id).textContent = msg;
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (msg) input.setAttribute('aria-describedby', id); else input.removeAttribute('aria-describedby');
    return !msg;
  };
  const a = set(name, 'e-name', name.value.trim().length < 2 ? 'Enter your full name.' : '');
  const b = set(email, 'e-email', /^\S+@\S+\.\S+$/.test(email.value) ? '' : 'Enter an email like name@example.com.');
  const n = Number(size.value);
  const c = set(size, 'e-size', n >= 1 && n <= 12 ? '' : 'Groups are 1 to 12 people.');
  if (!(a && b && c)) { (!a ? name : !b ? email : size).focus(); return; }
  const t = treks[trekSel.value];
  $('ok').textContent = `Thanks ${name.value.trim().split(' ')[0]}. Lead guide ${t.leadGuide} will reply about ${t.name} in ${$('f-month').value} within two working days. (Demo: nothing was sent.)`;
  form.reset();
  trekSel.value = current;
});

/* ---------------- init ---------------- */
resize();
buildTrail(0);
renderDetail();
camera.position.copy(heroPos);
requestAnimationFrame(frame);

/* ---------------- polish: progress, reveal, counters, season, gear ---------------- */
const progress = $('progress');
const nav = document.querySelector('.nav');
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  nav.classList.toggle('solid', scrollY > innerHeight * 0.85 && storySec.getBoundingClientRect().bottom < 80);
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

const h1 = document.querySelector('.hero h1');
if (h1 && !reduced) {
  let i = 0;
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((w) => {
          if (!w.trim()) { frag.append(w); return; }
          const s = document.createElement('span');
          s.className = 'w';
          s.style.setProperty('--i', i++);
          s.textContent = w;
          frag.append(s);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
  };
  walk(h1);
}

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
document.querySelectorAll('.reveal').forEach((el) => {
  if (reduced) el.classList.add('in');
  else io.observe(el);
});

const cio = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    cio.unobserve(e.target);
    const el = e.target, end = Number(el.dataset.count), t0 = performance.now();
    if (reduced) { el.textContent = end; return; }
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / 1100);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}, { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach((el) => cio.observe(el));

const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
const MNAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const cal = $('calendar');
cal.innerHTML = `<div class="cal-head" aria-hidden="true"><span></span>${MONTHS.map((m) => `<span>${m}</span>`).join('')}</div>` +
  treks.map((t) => `<div class="cal-row" role="group" aria-label="${t.name} seasons"><span class="cal-name">${t.name}</span>${MONTHS.map((_, m) => {
    const s = t.best.includes(m) ? 'best' : t.ok.includes(m) ? 'ok' : 'off';
    const label = { best: 'prime window', ok: 'shoulder', off: 'monsoon or deep winter' }[s];
    return `<i class="cal-cell ${s}" title="${MNAMES[m]}: ${label}"><span class="sr">${MNAMES[m]}: ${label}</span></i>`;
  }).join('')}</div>`).join('');

const gearKey = 'kharka-gear';
const saved = new Set(JSON.parse(localStorage.getItem(gearKey) || '[]'));
const gearBoxes = [...document.querySelectorAll('#gear input[type=checkbox]')];
const gearCount = $('gear-count'), gearBar = $('gear-bar');
function updateGear() {
  const n = gearBoxes.filter((b) => b.checked).length;
  gearCount.textContent = `${n} of ${gearBoxes.length} essential items packed`;
  gearBar.style.transform = `scaleX(${n / gearBoxes.length})`;
  localStorage.setItem(gearKey, JSON.stringify(gearBoxes.filter((b) => b.checked).map((b) => b.id)));
}
gearBoxes.forEach((b) => { b.checked = saved.has(b.id); b.addEventListener('change', updateGear); });
updateGear();
