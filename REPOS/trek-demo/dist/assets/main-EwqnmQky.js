import"./style-B6Tcu_hK.js";import{t as An,r as ql,s as Yo}from"./data-BOrmzx4T.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="170",Xl=0,Ga=1,Yl=2,Jo=1,Jl=2,rn=3,Tn=0,xe=1,sn=2,En=0,ui=1,Wa=2,Ba=3,ka=4,Kl=5,On=100,jl=101,Ql=102,$l=103,tc=104,ec=200,nc=201,ic=202,rc=203,Ms=204,ys=205,sc=206,ac=207,oc=208,lc=209,cc=210,uc=211,hc=212,dc=213,fc=214,Es=0,_s=1,bs=2,pi=3,Ts=4,Rs=5,As=6,Cs=7,Ko=0,pc=1,mc=2,_n=0,gc=1,vc=2,xc=3,Sc=4,Mc=5,yc=6,Ec=7,jo=300,mi=301,gi=302,ws=303,Us=304,Ir=306,Ls=1e3,Gn=1001,Is=1002,ke=1003,_c=1004,Ki=1005,Xe=1006,Wr=1007,Wn=1008,cn=1009,Qo=1010,$o=1011,Bi=1012,ga=1013,zn=1014,an=1015,Zi=1016,va=1017,xa=1018,vi=1020,tl=35902,el=1021,nl=1022,Be=1023,il=1024,rl=1025,hi=1026,xi=1027,sl=1028,Sa=1029,al=1030,Ma=1031,ya=1033,yr=33776,Er=33777,_r=33778,br=33779,Ns=35840,Ps=35841,Fs=35842,Ds=35843,Os=36196,Vs=37492,Gs=37496,Ws=37808,Bs=37809,ks=37810,zs=37811,Zs=37812,Hs=37813,qs=37814,Xs=37815,Ys=37816,Js=37817,Ks=37818,js=37819,Qs=37820,$s=37821,Tr=36492,ta=36494,ea=36495,ol=36283,na=36284,ia=36285,ra=36286,bc=3200,Tc=3201,Rc=0,Ac=1,Mn="",Ue="srgb",yi="srgb-linear",Nr="linear",Xt="srgb",Xn=7680,za=519,Cc=512,wc=513,Uc=514,ll=515,Lc=516,Ic=517,Nc=518,Pc=519,Za=35044,Ha="300 es",on=2e3,Cr=2001;class Ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Br=Math.PI/180,sa=180/Math.PI;function Hi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function Fc(i,t){return(i%t+t)%t}function kr(i,t,e){return(1-e)*i+e*t}function Ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,r,s,a,o,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],m=n[5],g=n[8],x=r[0],p=r[3],u=r[6],b=r[1],_=r[4],M=r[7],F=r[2],R=r[5],A=r[8];return s[0]=a*x+o*b+l*F,s[3]=a*p+o*_+l*R,s[6]=a*u+o*M+l*A,s[1]=c*x+h*b+f*F,s[4]=c*p+h*_+f*R,s[7]=c*u+h*M+f*A,s[2]=d*x+m*b+g*F,s[5]=d*p+m*_+g*R,s[8]=d*u+m*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*s,m=c*s-a*l,g=e*f+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(r*c-h*n)*x,t[2]=(o*n-r*a)*x,t[3]=d*x,t[4]=(h*e-r*l)*x,t[5]=(r*s-o*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(zr.makeScale(t,e)),this}rotate(t){return this.premultiply(zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new Ut;function cl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dc(){const i=wr("canvas");return i.style.display="block",i}const qa={};function Pi(i){i in qa||(qa[i]=!0,console.warn(i))}function Oc(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Vc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Bt={enabled:!0,workingColorSpace:yi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Xt&&(i.r=ln(i.r),i.g=ln(i.g),i.b=ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Xt&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mn?Nr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xa=[.64,.33,.3,.6,.15,.06],Ya=[.2126,.7152,.0722],Ja=[.3127,.329],Ka=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ja=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Bt.define({[yi]:{primaries:Xa,whitePoint:Ja,transfer:Nr,toXYZ:Ka,fromXYZ:ja,luminanceCoefficients:Ya,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:Xa,whitePoint:Ja,transfer:Xt,toXYZ:Ka,fromXYZ:ja,luminanceCoefficients:Ya,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});let Yn;class Wc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yn===void 0&&(Yn=wr("canvas")),Yn.width=t.width,Yn.height=t.height;const n=Yn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ln(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ln(e[n]/255)*255):e[n]=ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bc=0;class ul{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Zr(r[a].image)):s.push(Zr(r[a]))}else s=Zr(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kc=0;class ye extends Ei{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,n=Gn,r=Gn,s=Xe,a=Wn,o=Be,l=cn,c=ye.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Hi(),this.name="",this.source=new ul(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ls:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case Is:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ls:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case Is:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=jo;ye.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,r=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],g=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,M=(m+1)/2,F=(u+1)/2,R=(h+d)/4,A=(f+x)/4,U=(g+p)/4;return _>M&&_>F?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=R/n,s=A/n):M>F?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=R/r,s=U/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=A/s,r=U/s),this.set(n,r,s,e),this}let b=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zc extends Ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ye(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ul(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends zc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class hl extends ye{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zc extends ye{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==d||c!==m||h!==g){let p=1-o;const u=l*d+c*m+h*g+f*x,b=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const F=Math.sqrt(_),R=Math.atan2(F,u*b);p=Math.sin(p*R)/F,o=Math.sin(o*R)/F}const M=o*b;if(l=l*p+d*M,c=c*p+m*M,h=h*p+g*M,f=f*p+x*M,p===1-o){const F=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=F,c*=F,h*=F,f*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+h*f+l*m-c*d,t[e+1]=l*g+h*d+c*f-o*m,t[e+2]=c*g+h*m+o*d-l*f,t[e+3]=h*g-o*f-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),f=o(s/2),d=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"YZX":this._x=d*h*f+c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f-d*m*g;break;case"XZY":this._x=d*h*f-c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),h=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new C,Qa=new qi;class _i{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fe):Fe.fromBufferAttribute(s,a),Fe.applyMatrix4(t.matrixWorld),this.expandByPoint(Fe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(t.matrixWorld),this.union(ji)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fe),Fe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wi),Qi.subVectors(this.max,wi),Jn.subVectors(t.a,wi),Kn.subVectors(t.b,wi),jn.subVectors(t.c,wi),pn.subVectors(Kn,Jn),mn.subVectors(jn,Kn),wn.subVectors(Jn,jn);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-wn.z,wn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,wn.z,0,-wn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-wn.y,wn.x,0];return!qr(e,Jn,Kn,jn,Qi)||(e=[1,0,0,0,1,0,0,0,1],!qr(e,Jn,Kn,jn,Qi))?!1:($i.crossVectors(pn,mn),e=[$i.x,$i.y,$i.z],qr(e,Jn,Kn,jn,Qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new C,new C,new C,new C,new C,new C,new C,new C],Fe=new C,ji=new _i,Jn=new C,Kn=new C,jn=new C,pn=new C,mn=new C,wn=new C,wi=new C,Qi=new C,$i=new C,Un=new C;function qr(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Un.fromArray(i,s);const o=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),l=t.dot(Un),c=e.dot(Un),h=n.dot(Un);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Hc=new _i,Ui=new C,Xr=new C;class Ea{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hc.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ui,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(Xr)),this.expandByPoint(Ui.copy(t.center).sub(Xr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $e=new C,Yr=new C,tr=new C,gn=new C,Jr=new C,er=new C,Kr=new C;class qc{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$e)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$e.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($e.copy(this.origin).addScaledVector(this.direction,e),$e.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Yr.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(Yr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(tr),o=gn.dot(this.direction),l=-gn.dot(tr),c=gn.lengthSq(),h=Math.abs(1-a*a);let f,d,m,g;if(h>0)if(f=a*l-o,d=a*o-l,g=s*h,f>=0)if(d>=-g)if(d<=g){const x=1/h;f*=x,d*=x,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Yr).addScaledVector(tr,d),m}intersectSphere(t,e){$e.subVectors(t.center,this.origin);const n=$e.dot(this.direction),r=$e.dot($e)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,$e)!==null}intersectTriangle(t,e,n,r,s){Jr.subVectors(e,t),er.subVectors(n,t),Kr.crossVectors(Jr,er);let a=this.direction.dot(Kr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gn.subVectors(this.origin,t);const l=o*this.direction.dot(er.crossVectors(gn,er));if(l<0)return null;const c=o*this.direction.dot(Jr.cross(gn));if(c<0||l+c>a)return null;const h=-o*gn.dot(Kr);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,r,s,a,o,l,c,h,f,d,m,g,x,p){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,h,f,d,m,g,x,p)}set(t,e,n,r,s,a,o,l,c,h,f,d,m,g,x,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=g,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Qn.setFromMatrixColumn(t,0).length(),s=1/Qn.setFromMatrixColumn(t,1).length(),a=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*h,m=a*f,g=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,m=l*f,g=c*h,x=c*f;e[0]=d+x*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,m=l*f,g=c*h,x=c*f;e[0]=d-x*o,e[4]=-a*f,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,m=a*f,g=o*h,x=o*f;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+x,e[1]=l*f,e[5]=x*c+d,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*f,e[8]=g*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*f+g,e[10]=d-x*f}else if(t.order==="XZY"){const d=a*l,m=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+x,e[5]=a*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=o*h,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xc,t,Yc)}lookAt(t,e,n){const r=this.elements;return _e.subVectors(t,e),_e.lengthSq()===0&&(_e.z=1),_e.normalize(),vn.crossVectors(n,_e),vn.lengthSq()===0&&(Math.abs(n.z)===1?_e.x+=1e-4:_e.z+=1e-4,_e.normalize(),vn.crossVectors(n,_e)),vn.normalize(),nr.crossVectors(_e,vn),r[0]=vn.x,r[4]=nr.x,r[8]=_e.x,r[1]=vn.y,r[5]=nr.y,r[9]=_e.y,r[2]=vn.z,r[6]=nr.z,r[10]=_e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],m=n[13],g=n[2],x=n[6],p=n[10],u=n[14],b=n[3],_=n[7],M=n[11],F=n[15],R=r[0],A=r[4],U=r[8],E=r[12],S=r[1],w=r[5],W=r[9],G=r[13],z=r[2],J=r[6],Z=r[10],$=r[14],k=r[3],it=r[7],ct=r[11],St=r[15];return s[0]=a*R+o*S+l*z+c*k,s[4]=a*A+o*w+l*J+c*it,s[8]=a*U+o*W+l*Z+c*ct,s[12]=a*E+o*G+l*$+c*St,s[1]=h*R+f*S+d*z+m*k,s[5]=h*A+f*w+d*J+m*it,s[9]=h*U+f*W+d*Z+m*ct,s[13]=h*E+f*G+d*$+m*St,s[2]=g*R+x*S+p*z+u*k,s[6]=g*A+x*w+p*J+u*it,s[10]=g*U+x*W+p*Z+u*ct,s[14]=g*E+x*G+p*$+u*St,s[3]=b*R+_*S+M*z+F*k,s[7]=b*A+_*w+M*J+F*it,s[11]=b*U+_*W+M*Z+F*ct,s[15]=b*E+_*G+M*$+F*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],m=t[14],g=t[3],x=t[7],p=t[11],u=t[15];return g*(+s*l*f-r*c*f-s*o*d+n*c*d+r*o*m-n*l*m)+x*(+e*l*m-e*c*d+s*a*d-r*a*m+r*c*h-s*l*h)+p*(+e*c*f-e*o*m-s*a*f+n*a*m+s*o*h-n*c*h)+u*(-r*o*h-e*l*f+e*o*d+r*a*f-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],m=t[11],g=t[12],x=t[13],p=t[14],u=t[15],b=f*p*c-x*d*c+x*l*m-o*p*m-f*l*u+o*d*u,_=g*d*c-h*p*c-g*l*m+a*p*m+h*l*u-a*d*u,M=h*x*c-g*f*c+g*o*m-a*x*m-h*o*u+a*f*u,F=g*f*l-h*x*l-g*o*d+a*x*d+h*o*p-a*f*p,R=e*b+n*_+r*M+s*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=b*A,t[1]=(x*d*s-f*p*s-x*r*m+n*p*m+f*r*u-n*d*u)*A,t[2]=(o*p*s-x*l*s+x*r*c-n*p*c-o*r*u+n*l*u)*A,t[3]=(f*l*s-o*d*s-f*r*c+n*d*c+o*r*m-n*l*m)*A,t[4]=_*A,t[5]=(h*p*s-g*d*s+g*r*m-e*p*m-h*r*u+e*d*u)*A,t[6]=(g*l*s-a*p*s-g*r*c+e*p*c+a*r*u-e*l*u)*A,t[7]=(a*d*s-h*l*s+h*r*c-e*d*c-a*r*m+e*l*m)*A,t[8]=M*A,t[9]=(g*f*s-h*x*s-g*n*m+e*x*m+h*n*u-e*f*u)*A,t[10]=(a*x*s-g*o*s+g*n*c-e*x*c-a*n*u+e*o*u)*A,t[11]=(h*o*s-a*f*s-h*n*c+e*f*c+a*n*m-e*o*m)*A,t[12]=F*A,t[13]=(h*x*r-g*f*r+g*n*d-e*x*d-h*n*p+e*f*p)*A,t[14]=(g*o*r-a*x*r-g*n*l+e*x*l+a*n*p-e*o*p)*A,t[15]=(a*f*r-h*o*r+h*n*l-e*f*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,f=o+o,d=s*c,m=s*h,g=s*f,x=a*h,p=a*f,u=o*f,b=l*c,_=l*h,M=l*f,F=n.x,R=n.y,A=n.z;return r[0]=(1-(x+u))*F,r[1]=(m+M)*F,r[2]=(g-_)*F,r[3]=0,r[4]=(m-M)*R,r[5]=(1-(d+u))*R,r[6]=(p+b)*R,r[7]=0,r[8]=(g+_)*A,r[9]=(p-b)*A,r[10]=(1-(d+x))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Qn.set(r[0],r[1],r[2]).length();const a=Qn.set(r[4],r[5],r[6]).length(),o=Qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],De.copy(this);const c=1/s,h=1/a,f=1/o;return De.elements[0]*=c,De.elements[1]*=c,De.elements[2]*=c,De.elements[4]*=h,De.elements[5]*=h,De.elements[6]*=h,De.elements[8]*=f,De.elements[9]*=f,De.elements[10]*=f,e.setFromRotationMatrix(De),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=on){const l=this.elements,c=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let m,g;if(o===on)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Cr)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=on){const l=this.elements,c=1/(e-t),h=1/(n-r),f=1/(a-s),d=(e+t)*c,m=(n+r)*h;let g,x;if(o===on)g=(a+s)*f,x=-2*f;else if(o===Cr)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new C,De=new re,Xc=new C(0,0,0),Yc=new C(1,1,1),vn=new C,nr=new C,_e=new C,$a=new re,to=new qi;class un{constructor(t=0,e=0,n=0,r=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $a.makeRotationFromQuaternion(t),this.setFromRotationMatrix($a,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return to.setFromEuler(this),this.setFromQuaternion(to,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jc=0;const eo=new C,$n=new qi,tn=new re,ir=new C,Li=new C,Kc=new C,jc=new qi,no=new C(1,0,0),io=new C(0,1,0),ro=new C(0,0,1),so={type:"added"},Qc={type:"removed"},ti={type:"childadded",child:null},jr={type:"childremoved",child:null};class Te extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new C,e=new un,n=new qi,r=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new re},normalMatrix:{value:new Ut}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(no,t)}rotateY(t){return this.rotateOnAxis(io,t)}rotateZ(t){return this.rotateOnAxis(ro,t)}translateOnAxis(t,e){return eo.copy(t).applyQuaternion(this.quaternion),this.position.add(eo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(no,t)}translateY(t){return this.translateOnAxis(io,t)}translateZ(t){return this.translateOnAxis(ro,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ir.copy(t):ir.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Li,ir,this.up):tn.lookAt(ir,Li,this.up),this.quaternion.setFromRotationMatrix(tn),r&&(tn.extractRotation(r.matrixWorld),$n.setFromRotationMatrix(tn),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(so),ti.child=t,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qc),jr.child=t,this.dispatchEvent(jr),jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(so),ti.child=t,this.dispatchEvent(ti),ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,t,Kc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,jc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Te.DEFAULT_UP=new C(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oe=new C,en=new C,Qr=new C,nn=new C,ei=new C,ni=new C,ao=new C,$r=new C,ts=new C,es=new C,ns=new ie,is=new ie,rs=new ie;class Ge{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Oe.subVectors(t,e),r.cross(Oe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Oe.subVectors(r,e),en.subVectors(n,e),Qr.subVectors(t,e);const a=Oe.dot(Oe),o=Oe.dot(en),l=Oe.dot(Qr),c=en.dot(en),h=en.dot(Qr),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,nn.x),l.addScaledVector(a,nn.y),l.addScaledVector(o,nn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return ns.setScalar(0),is.setScalar(0),rs.setScalar(0),ns.fromBufferAttribute(t,e),is.fromBufferAttribute(t,n),rs.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ns,s.x),a.addScaledVector(is,s.y),a.addScaledVector(rs,s.z),a}static isFrontFacing(t,e,n,r){return Oe.subVectors(n,e),en.subVectors(t,e),Oe.cross(en).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oe.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Oe.cross(en).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ge.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ge.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ge.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ge.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ge.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;ei.subVectors(r,n),ni.subVectors(s,n),$r.subVectors(t,n);const l=ei.dot($r),c=ni.dot($r);if(l<=0&&c<=0)return e.copy(n);ts.subVectors(t,r);const h=ei.dot(ts),f=ni.dot(ts);if(h>=0&&f<=h)return e.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ei,a);es.subVectors(t,s);const m=ei.dot(es),g=ni.dot(es);if(g>=0&&m<=g)return e.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ni,o);const p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return ao.subVectors(s,r),o=(f-h)/(f-h+(m-g)),e.copy(r).addScaledVector(ao,o);const u=1/(p+x+d);return a=x*u,o=d*u,e.copy(n).addScaledVector(ei,a).addScaledVector(ni,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},rr={h:0,s:0,l:0};function ss(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Bt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Bt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Bt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Bt.workingColorSpace){if(t=Fc(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ss(a,s,t+1/3),this.g=ss(a,s,t),this.b=ss(a,s,t-1/3)}return Bt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ue){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=fl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Bt.fromWorkingColorSpace(me.copy(this),t),Math.round(ge(me.r*255,0,255))*65536+Math.round(ge(me.g*255,0,255))*256+Math.round(ge(me.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Bt.workingColorSpace){Bt.fromWorkingColorSpace(me.copy(this),e);const n=me.r,r=me.g,s=me.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=Ue){Bt.fromWorkingColorSpace(me.copy(this),t);const e=me.r,n=me.g,r=me.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(rr);const n=kr(xn.h,rr.h,e),r=kr(xn.s,rr.s,e),s=kr(xn.l,rr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const me=new zt;zt.NAMES=fl;let $c=0;class Pr extends Ei{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Hi(),this.name="",this.blending=ui,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ms,this.blendDst=ys,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ms&&(n.blendSrc=this.blendSrc),this.blendDst!==ys&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==za&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kn extends Pr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new C,sr=new Et;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Za,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),r=Me(r,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Za&&(t.usage=this.usage),t}}class pl extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ml extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let tu=0;const Ce=new re,as=new Te,ii=new C,be=new _i,Ii=new _i,he=new C;class Ze extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cl(t)?ml:pl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ut().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ce.makeRotationFromQuaternion(t),this.applyMatrix4(Ce),this}rotateX(t){return Ce.makeRotationX(t),this.applyMatrix4(Ce),this}rotateY(t){return Ce.makeRotationY(t),this.applyMatrix4(Ce),this}rotateZ(t){return Ce.makeRotationZ(t),this.applyMatrix4(Ce),this}translate(t,e,n){return Ce.makeTranslation(t,e,n),this.applyMatrix4(Ce),this}scale(t,e,n){return Ce.makeScale(t,e,n),this.applyMatrix4(Ce),this}lookAt(t){return as.lookAt(t),as.updateMatrix(),this.applyMatrix4(as.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];be.setFromBufferAttribute(s),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,be.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,be.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(be.min),this.boundingBox.expandByPoint(be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(be.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(he.addVectors(be.min,Ii.min),be.expandByPoint(he),he.addVectors(be.max,Ii.max),be.expandByPoint(he)):(be.expandByPoint(Ii.min),be.expandByPoint(Ii.max))}be.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)he.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(he));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)he.fromBufferAttribute(o,c),l&&(ii.fromBufferAttribute(t,c),he.add(ii)),r=Math.max(r,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new C,l[U]=new C;const c=new C,h=new C,f=new C,d=new Et,m=new Et,g=new Et,x=new C,p=new C;function u(U,E,S){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,S),d.fromBufferAttribute(s,U),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),h.sub(c),f.sub(c),m.sub(d),g.sub(d);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(w),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(w),o[U].add(x),o[E].add(x),o[S].add(x),l[U].add(p),l[E].add(p),l[S].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,E=b.length;U<E;++U){const S=b[U],w=S.start,W=S.count;for(let G=w,z=w+W;G<z;G+=3)u(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const _=new C,M=new C,F=new C,R=new C;function A(U){F.fromBufferAttribute(r,U),R.copy(F);const E=o[U];_.copy(E),_.sub(F.multiplyScalar(F.dot(E))).normalize(),M.crossVectors(R,E);const w=M.dot(l[U])<0?-1:1;a.setXYZW(U,_.x,_.y,_.z,w)}for(let U=0,E=b.length;U<E;++U){const S=b[U],w=S.start,W=S.count;for(let G=w,z=w+W;G<z;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,f=new C;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let u=0;u<h;u++)d[g++]=c[m++]}return new Ye(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oo=new re,Ln=new qc,ar=new Ea,lo=new C,or=new C,lr=new C,cr=new C,os=new C,ur=new C,co=new C,hr=new C;class de extends Te{constructor(t=new Ze,e=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ur.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(os.fromBufferAttribute(f,t),a?ur.addScaledVector(os,h):ur.addScaledVector(os.sub(e),h))}e.add(ur)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),Ln.copy(t.ray).recast(t.near),!(ar.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(ar,lo)===null||Ln.origin.distanceToSquared(lo)>(t.far-t.near)**2))&&(oo.copy(s).invert(),Ln.copy(t.ray).applyMatrix4(oo),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const p=d[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,F=_;M<F;M+=3){const R=o.getX(M),A=o.getX(M+1),U=o.getX(M+2);r=dr(this,u,t,n,c,h,f,R,A,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){const b=o.getX(p),_=o.getX(p+1),M=o.getX(p+2);r=dr(this,a,t,n,c,h,f,b,_,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const p=d[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,F=_;M<F;M+=3){const R=M,A=M+1,U=M+2;r=dr(this,u,t,n,c,h,f,R,A,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){const b=p,_=p+1,M=p+2;r=dr(this,a,t,n,c,h,f,b,_,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function eu(i,t,e,n,r,s,a,o){let l;if(t.side===xe?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Tn,o),l===null)return null;hr.copy(o),hr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(hr);return c<e.near||c>e.far?null:{distance:c,point:hr.clone(),object:i}}function dr(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,or),i.getVertexPosition(l,lr),i.getVertexPosition(c,cr);const h=eu(i,t,e,n,or,lr,cr,co);if(h){const f=new C;Ge.getBarycoord(co,or,lr,cr,f),r&&(h.uv=Ge.getInterpolatedAttribute(r,o,l,c,f,new Et)),s&&(h.uv1=Ge.getInterpolatedAttribute(s,o,l,c,f,new Et)),a&&(h.normal=Ge.getInterpolatedAttribute(a,o,l,c,f,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};Ge.getNormal(or,lr,cr,d.normal),h.face=d,h.barycoord=f}return h}class Xi extends Ze{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(f,2));function g(x,p,u,b,_,M,F,R,A,U,E){const S=M/A,w=F/U,W=M/2,G=F/2,z=R/2,J=A+1,Z=U+1;let $=0,k=0;const it=new C;for(let ct=0;ct<Z;ct++){const St=ct*w-G;for(let Nt=0;Nt<J;Nt++){const Yt=Nt*S-W;it[x]=Yt*b,it[p]=St*_,it[u]=z,c.push(it.x,it.y,it.z),it[x]=0,it[p]=0,it[u]=R>0?1:-1,h.push(it.x,it.y,it.z),f.push(Nt/A),f.push(1-ct/U),$+=1}}for(let ct=0;ct<U;ct++)for(let St=0;St<A;St++){const Nt=d+St+J*ct,Yt=d+St+J*(ct+1),q=d+(St+1)+J*(ct+1),tt=d+(St+1)+J*ct;l.push(Nt,Yt,tt),l.push(Yt,q,tt),k+=6}o.addGroup(m,k,E),m+=k,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Si(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ve(i){const t={};for(let e=0;e<i.length;e++){const n=Si(i[e]);for(const r in n)t[r]=n[r]}return t}function nu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}const iu={clone:Si,merge:ve};var ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ie extends Pr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ru,this.fragmentShader=su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=nu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vl extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=on}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new C,uo=new Et,ho=new Et;class Le extends vl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z)}getViewSize(t,e){return this.getViewBounds(t,uo,ho),e.subVectors(ho,uo)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Br*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ri=-90,si=1;class au extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Le(ri,si,t,e);r.layers=this.layers,this.add(r);const s=new Le(ri,si,t,e);s.layers=this.layers,this.add(s);const a=new Le(ri,si,t,e);a.layers=this.layers,this.add(a);const o=new Le(ri,si,t,e);o.layers=this.layers,this.add(o);const l=new Le(ri,si,t,e);l.layers=this.layers,this.add(l);const c=new Le(ri,si,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xl extends ye{constructor(t,e,n,r,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:mi,super(t,e,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ou extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new xl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xi(5,5,5),s=new Ie({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xe,blending:En});s.uniforms.tEquirect.value=e;const a=new de(r,s),o=e.minFilter;return e.minFilter===Wn&&(e.minFilter=Xe),new au(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const ls=new C,lu=new C,cu=new Ut;class Fn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ls.subVectors(n,e).cross(lu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ls),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||cu.getNormalMatrix(t),r=this.coplanarPoint(ls).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Ea,fr=new C;class Sl{constructor(t=new Fn,e=new Fn,n=new Fn,r=new Fn,s=new Fn,a=new Fn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],m=r[8],g=r[9],x=r[10],p=r[11],u=r[12],b=r[13],_=r[14],M=r[15];if(n[0].setComponents(l-s,d-c,p-m,M-u).normalize(),n[1].setComponents(l+s,d+c,p+m,M+u).normalize(),n[2].setComponents(l+a,d+h,p+g,M+b).normalize(),n[3].setComponents(l-a,d-h,p-g,M-b).normalize(),n[4].setComponents(l-o,d-f,p-x,M-_).normalize(),e===on)n[5].setComponents(l+o,d+f,p+x,M+_).normalize();else if(e===Cr)n[5].setComponents(o,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(fr.x=r.normal.x>0?t.max.x:t.min.x,fr.y=r.normal.y>0?t.max.y:t.min.y,fr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ml(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function uu(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],x=f[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const x=f[m];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Hn extends Ze{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,f=t/o,d=e/l,m=[],g=[],x=[],p=[];for(let u=0;u<h;u++){const b=u*d-a;for(let _=0;_<c;_++){const M=_*f-s;g.push(M,-b,0),x.push(0,0,1),p.push(_/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){const _=b+c*u,M=b+c*(u+1),F=b+1+c*(u+1),R=b+1+c*u;m.push(_,M,R),m.push(M,F,R)}this.setIndex(m),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.widthSegments,t.heightSegments)}}var hu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,du=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Su=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_u=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Du=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ku=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ju=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ju=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,th=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ih=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ah=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ch=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ph=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_h=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Th=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ah=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ch=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ih=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ph=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$h=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,td=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,id=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,md=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ed=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_d=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Td=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ad=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ld=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Id=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Od=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:hu,alphahash_pars_fragment:du,alphamap_fragment:fu,alphamap_pars_fragment:pu,alphatest_fragment:mu,alphatest_pars_fragment:gu,aomap_fragment:vu,aomap_pars_fragment:xu,batching_pars_vertex:Su,batching_vertex:Mu,begin_vertex:yu,beginnormal_vertex:Eu,bsdfs:_u,iridescence_fragment:bu,bumpmap_pars_fragment:Tu,clipping_planes_fragment:Ru,clipping_planes_pars_fragment:Au,clipping_planes_pars_vertex:Cu,clipping_planes_vertex:wu,color_fragment:Uu,color_pars_fragment:Lu,color_pars_vertex:Iu,color_vertex:Nu,common:Pu,cube_uv_reflection_fragment:Fu,defaultnormal_vertex:Du,displacementmap_pars_vertex:Ou,displacementmap_vertex:Vu,emissivemap_fragment:Gu,emissivemap_pars_fragment:Wu,colorspace_fragment:Bu,colorspace_pars_fragment:ku,envmap_fragment:zu,envmap_common_pars_fragment:Zu,envmap_pars_fragment:Hu,envmap_pars_vertex:qu,envmap_physical_pars_fragment:ih,envmap_vertex:Xu,fog_vertex:Yu,fog_pars_vertex:Ju,fog_fragment:Ku,fog_pars_fragment:ju,gradientmap_pars_fragment:Qu,lightmap_pars_fragment:$u,lights_lambert_fragment:th,lights_lambert_pars_fragment:eh,lights_pars_begin:nh,lights_toon_fragment:rh,lights_toon_pars_fragment:sh,lights_phong_fragment:ah,lights_phong_pars_fragment:oh,lights_physical_fragment:lh,lights_physical_pars_fragment:ch,lights_fragment_begin:uh,lights_fragment_maps:hh,lights_fragment_end:dh,logdepthbuf_fragment:fh,logdepthbuf_pars_fragment:ph,logdepthbuf_pars_vertex:mh,logdepthbuf_vertex:gh,map_fragment:vh,map_pars_fragment:xh,map_particle_fragment:Sh,map_particle_pars_fragment:Mh,metalnessmap_fragment:yh,metalnessmap_pars_fragment:Eh,morphinstance_vertex:_h,morphcolor_vertex:bh,morphnormal_vertex:Th,morphtarget_pars_vertex:Rh,morphtarget_vertex:Ah,normal_fragment_begin:Ch,normal_fragment_maps:wh,normal_pars_fragment:Uh,normal_pars_vertex:Lh,normal_vertex:Ih,normalmap_pars_fragment:Nh,clearcoat_normal_fragment_begin:Ph,clearcoat_normal_fragment_maps:Fh,clearcoat_pars_fragment:Dh,iridescence_pars_fragment:Oh,opaque_fragment:Vh,packing:Gh,premultiplied_alpha_fragment:Wh,project_vertex:Bh,dithering_fragment:kh,dithering_pars_fragment:zh,roughnessmap_fragment:Zh,roughnessmap_pars_fragment:Hh,shadowmap_pars_fragment:qh,shadowmap_pars_vertex:Xh,shadowmap_vertex:Yh,shadowmask_pars_fragment:Jh,skinbase_vertex:Kh,skinning_pars_vertex:jh,skinning_vertex:Qh,skinnormal_vertex:$h,specularmap_fragment:td,specularmap_pars_fragment:ed,tonemapping_fragment:nd,tonemapping_pars_fragment:id,transmission_fragment:rd,transmission_pars_fragment:sd,uv_pars_fragment:ad,uv_pars_vertex:od,uv_vertex:ld,worldpos_vertex:cd,background_vert:ud,background_frag:hd,backgroundCube_vert:dd,backgroundCube_frag:fd,cube_vert:pd,cube_frag:md,depth_vert:gd,depth_frag:vd,distanceRGBA_vert:xd,distanceRGBA_frag:Sd,equirect_vert:Md,equirect_frag:yd,linedashed_vert:Ed,linedashed_frag:_d,meshbasic_vert:bd,meshbasic_frag:Td,meshlambert_vert:Rd,meshlambert_frag:Ad,meshmatcap_vert:Cd,meshmatcap_frag:wd,meshnormal_vert:Ud,meshnormal_frag:Ld,meshphong_vert:Id,meshphong_frag:Nd,meshphysical_vert:Pd,meshphysical_frag:Fd,meshtoon_vert:Dd,meshtoon_frag:Od,points_vert:Vd,points_frag:Gd,shadow_vert:Wd,shadow_frag:Bd,sprite_vert:kd,sprite_frag:zd},et={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},qe={basic:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new zt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:ve([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:ve([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new zt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:ve([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:ve([et.points,et.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:ve([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:ve([et.common,et.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:ve([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:ve([et.sprite,et.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:ve([et.common,et.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:ve([et.lights,et.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};qe.physical={uniforms:ve([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const pr={r:0,b:0,g:0},Nn=new un,Zd=new re;function Hd(i,t,e,n,r,s,a){const o=new zt(0);let l=s===!0?0:1,c,h,f=null,d=0,m=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?e:t).get(_)),_}function x(b){let _=!1;const M=g(b);M===null?u(o,l):M&&M.isColor&&(u(M,1),_=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===Ir)?(h===void 0&&(h=new de(new Xi(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:Si(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Nn.copy(_.backgroundRotation),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(Nn)),h.material.toneMapped=Bt.getTransfer(M.colorSpace)!==Xt,(f!==M||d!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=M,d=M.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new de(new Hn(2,2),new Ie({name:"BackgroundMaterial",uniforms:Si(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(M.colorSpace)!==Xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,_){b.getRGB(pr,gl(i)),n.buffers.color.setClear(pr.r,pr.g,pr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(b,_=1){o.set(b),l=_,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(o,l)},render:x,addToRenderList:p}}function qd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(S,w,W,G,z){let J=!1;const Z=f(G,W,w);s!==Z&&(s=Z,c(s.object)),J=m(S,G,W,z),J&&g(S,G,W,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(S,w,W,G),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function f(S,w,W){const G=W.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let J=z[w.id];J===void 0&&(J={},z[w.id]=J);let Z=J[G];return Z===void 0&&(Z=d(l()),J[G]=Z),Z}function d(S){const w=[],W=[],G=[];for(let z=0;z<e;z++)w[z]=0,W[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:G,object:S,attributes:{},index:null}}function m(S,w,W,G){const z=s.attributes,J=w.attributes;let Z=0;const $=W.getAttributes();for(const k in $)if($[k].location>=0){const ct=z[k];let St=J[k];if(St===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(St=S.instanceColor)),ct===void 0||ct.attribute!==St||St&&ct.data!==St.data)return!0;Z++}return s.attributesNum!==Z||s.index!==G}function g(S,w,W,G){const z={},J=w.attributes;let Z=0;const $=W.getAttributes();for(const k in $)if($[k].location>=0){let ct=J[k];ct===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor));const St={};St.attribute=ct,ct&&ct.data&&(St.data=ct.data),z[k]=St,Z++}s.attributes=z,s.attributesNum=Z,s.index=G}function x(){const S=s.newAttributes;for(let w=0,W=S.length;w<W;w++)S[w]=0}function p(S){u(S,0)}function u(S,w){const W=s.newAttributes,G=s.enabledAttributes,z=s.attributeDivisors;W[S]=1,G[S]===0&&(i.enableVertexAttribArray(S),G[S]=1),z[S]!==w&&(i.vertexAttribDivisor(S,w),z[S]=w)}function b(){const S=s.newAttributes,w=s.enabledAttributes;for(let W=0,G=w.length;W<G;W++)w[W]!==S[W]&&(i.disableVertexAttribArray(W),w[W]=0)}function _(S,w,W,G,z,J,Z){Z===!0?i.vertexAttribIPointer(S,w,W,z,J):i.vertexAttribPointer(S,w,W,G,z,J)}function M(S,w,W,G){x();const z=G.attributes,J=W.getAttributes(),Z=w.defaultAttributeValues;for(const $ in J){const k=J[$];if(k.location>=0){let it=z[$];if(it===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){const ct=it.normalized,St=it.itemSize,Nt=t.get(it);if(Nt===void 0)continue;const Yt=Nt.buffer,q=Nt.type,tt=Nt.bytesPerElement,gt=q===i.INT||q===i.UNSIGNED_INT||it.gpuType===ga;if(it.isInterleavedBufferAttribute){const rt=it.data,bt=rt.stride,At=it.offset;if(rt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<k.locationSize;Pt++)u(k.location+Pt,rt.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Pt=0;Pt<k.locationSize;Pt++)p(k.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Pt=0;Pt<k.locationSize;Pt++)_(k.location+Pt,St/k.locationSize,q,ct,bt*tt,(At+St/k.locationSize*Pt)*tt,gt)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<k.locationSize;rt++)u(k.location+rt,it.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<k.locationSize;rt++)p(k.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let rt=0;rt<k.locationSize;rt++)_(k.location+rt,St/k.locationSize,q,ct,St*tt,St/k.locationSize*rt*tt,gt)}}else if(Z!==void 0){const ct=Z[$];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(k.location,ct);break;case 3:i.vertexAttrib3fv(k.location,ct);break;case 4:i.vertexAttrib4fv(k.location,ct);break;default:i.vertexAttrib1fv(k.location,ct)}}}}b()}function F(){U();for(const S in n){const w=n[S];for(const W in w){const G=w[W];for(const z in G)h(G[z].object),delete G[z];delete w[W]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const w=n[S.id];for(const W in w){const G=w[W];for(const z in G)h(G[z].object),delete G[z];delete w[W]}delete n[S.id]}function A(S){for(const w in n){const W=n[w];if(W[S.id]===void 0)continue;const G=W[S.id];for(const z in G)h(G[z].object),delete G[z];delete W[S.id]}}function U(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function Xd(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];e.update(m,n,1)}function l(c,h,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Yd(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Be&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const U=A===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==an&&!U)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:F,maxSamples:R}}function Jd(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Fn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const b=s?0:n,_=b*4;let M=u.clippingState||null;l.value=M,M=h(g,d,_,m);for(let F=0;F!==_;++F)M[F]=e[F];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,m,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const u=m+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let _=0,M=m;_!==x;++_,M+=4)a.copy(f[_]).applyMatrix4(b,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Kd(i){let t=new WeakMap;function e(a,o){return o===ws?a.mapping=mi:o===Us&&(a.mapping=gi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ws||o===Us)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ou(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class jd extends vl{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const li=4,fo=[.125,.215,.35,.446,.526,.582],Vn=20,cs=new jd,po=new zt;let us=null,hs=0,ds=0,fs=!1;const Dn=(1+Math.sqrt(5))/2,ai=1/Dn,mo=[new C(-Dn,ai,0),new C(Dn,ai,0),new C(-ai,0,Dn),new C(ai,0,Dn),new C(0,Dn,-ai),new C(0,Dn,ai),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class go{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){us=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),ds=this._renderer.getActiveMipmapLevel(),fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=So(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(us,hs,ds),this._renderer.xr.enabled=fs,t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),us=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),ds=this._renderer.getActiveMipmapLevel(),fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Zi,format:Be,colorSpace:yi,depthBuffer:!1},r=vo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qd(s)),this._blurMaterial=$d(s,t,e)}return r}_compileMaterial(t){const e=new de(this._lodPlanes[0],t);this._renderer.compile(e,cs)}_sceneToCubeUV(t,e,n,r){const o=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(po),h.toneMapping=_n,h.autoClear=!1;const m=new kn({name:"PMREM.Background",side:xe,depthWrite:!1,depthTest:!1}),g=new de(new Xi,m);let x=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(po),x=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):b===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const _=this._cubeSize;mr(r,b*_,u>2?_:0,_,_),h.setRenderTarget(r),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===mi||t.mapping===gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=So()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;mr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,cs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=mo[(r-s-1)%mo.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new de(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Vn-1),x=s/g,p=isFinite(s)?1+Math.floor(h*x):Vn;p>Vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vn}`);const u=[];let b=0;for(let A=0;A<Vn;++A){const U=A/x,E=Math.exp(-U*U/2);u.push(E),A===0?b+=E:A<p&&(b+=2*E)}for(let A=0;A<u.length;A++)u[A]=u[A]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const M=this._sizeLods[r],F=3*M*(r>_-li?r-_+li:0),R=4*(this._cubeSize-M);mr(e,F,R,3*M,2*M),l.setRenderTarget(e),l.render(f,cs)}}function Qd(i){const t=[],e=[],n=[];let r=i;const s=i-li+1+fo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-li?l=fo[a-i+li-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,x=3,p=2,u=1,b=new Float32Array(x*g*m),_=new Float32Array(p*g*m),M=new Float32Array(u*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,U=R>2?0:-1,E=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];b.set(E,x*g*R),_.set(d,p*g*R);const S=[R,R,R,R,R,R];M.set(S,u*g*R)}const F=new Ze;F.setAttribute("position",new Ye(b,x)),F.setAttribute("uv",new Ye(_,p)),F.setAttribute("faceIndex",new Ye(M,u)),t.push(F),r>li&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vo(i,t,e){const n=new Zn(i,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function $d(i,t,e){const n=new Float32Array(Vn),r=new C(0,1,0);return new Ie({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function xo(){return new Ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function So(){return new Ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function _a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ws||l===Us,h=l===mi||l===gi;if(c||h){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new go(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new go(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ef(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Pi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function nf(i,t,e,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let p=0,u=x.length;p<u;p++)t.remove(x[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const x=m[g];for(let p=0,u=x.length;p<u;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let _=0,M=b.length;_<M;_+=3){const F=b[_+0],R=b[_+1],A=b[_+2];d.push(F,R,R,A,A,F)}}else if(g!==void 0){const b=g.array;x=g.version;for(let _=0,M=b.length/3-1;_<M;_+=3){const F=_+0,R=_+1,A=_+2;d.push(F,R,R,A,A,F)}}else return;const p=new(cl(d)?ml:pl)(d,1);p.version=x;const u=s.get(f);u&&t.remove(u),s.set(f,p)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function rf(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*a),e.update(m,n,1)}function c(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,d*a,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,n,1)}function f(d,m,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/a,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,x,0,g);let u=0;for(let b=0;b<g;b++)u+=m[b]*x[b];e.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function sf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function af(i,t,e){const n=new WeakMap,r=new ie;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let M=o.attributes.position.count*_,F=1;M>t.maxTextureSize&&(F=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const R=new Float32Array(M*F*4*f),A=new hl(R,M,F,f);A.type=an,A.needsUpdate=!0;const U=_*4;for(let S=0;S<f;S++){const w=p[S],W=u[S],G=b[S],z=M*F*4*S;for(let J=0;J<w.count;J++){const Z=J*U;m===!0&&(r.fromBufferAttribute(w,J),R[z+Z+0]=r.x,R[z+Z+1]=r.y,R[z+Z+2]=r.z,R[z+Z+3]=0),g===!0&&(r.fromBufferAttribute(W,J),R[z+Z+4]=r.x,R[z+Z+5]=r.y,R[z+Z+6]=r.z,R[z+Z+7]=0),x===!0&&(r.fromBufferAttribute(G,J),R[z+Z+8]=r.x,R[z+Z+9]=r.y,R[z+Z+10]=r.z,R[z+Z+11]=G.itemSize===4?r.w:1)}}d={count:f,texture:A,size:new Et(M,F)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function of(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class yl extends ye{constructor(t,e,n,r,s,a,o,l,c,h=hi){if(h!==hi&&h!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hi&&(n=zn),n===void 0&&h===xi&&(n=vi),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const El=new ye,Mo=new yl(1,1),_l=new hl,bl=new Zc,Tl=new xl,yo=[],Eo=[],_o=new Float32Array(16),bo=new Float32Array(9),To=new Float32Array(4);function bi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=yo[r];if(s===void 0&&(s=new Float32Array(r),yo[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fr(i,t){let e=Eo[t];e===void 0&&(e=new Int32Array(t),Eo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2fv(this.addr,t),ue(e,t)}}function uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;i.uniform3fv(this.addr,t),ue(e,t)}}function hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4fv(this.addr,t),ue(e,t)}}function df(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(ce(e,n))return;To.set(n),i.uniformMatrix2fv(this.addr,!1,To),ue(e,n)}}function ff(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(ce(e,n))return;bo.set(n),i.uniformMatrix3fv(this.addr,!1,bo),ue(e,n)}}function pf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(ce(e,n))return;_o.set(n),i.uniformMatrix4fv(this.addr,!1,_o),ue(e,n)}}function mf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2iv(this.addr,t),ue(e,t)}}function vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3iv(this.addr,t),ue(e,t)}}function xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4iv(this.addr,t),ue(e,t)}}function Sf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2uiv(this.addr,t),ue(e,t)}}function yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3uiv(this.addr,t),ue(e,t)}}function Ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4uiv(this.addr,t),ue(e,t)}}function _f(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Mo.compareFunction=ll,s=Mo):s=El,e.setTexture2D(t||s,r)}function bf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||bl,r)}function Tf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Tl,r)}function Rf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||_l,r)}function Af(i){switch(i){case 5126:return lf;case 35664:return cf;case 35665:return uf;case 35666:return hf;case 35674:return df;case 35675:return ff;case 35676:return pf;case 5124:case 35670:return mf;case 35667:case 35671:return gf;case 35668:case 35672:return vf;case 35669:case 35673:return xf;case 5125:return Sf;case 36294:return Mf;case 36295:return yf;case 36296:return Ef;case 35678:case 36198:case 36298:case 36306:case 35682:return _f;case 35679:case 36299:case 36307:return bf;case 35680:case 36300:case 36308:case 36293:return Tf;case 36289:case 36303:case 36311:case 36292:return Rf}}function Cf(i,t){i.uniform1fv(this.addr,t)}function wf(i,t){const e=bi(t,this.size,2);i.uniform2fv(this.addr,e)}function Uf(i,t){const e=bi(t,this.size,3);i.uniform3fv(this.addr,e)}function Lf(i,t){const e=bi(t,this.size,4);i.uniform4fv(this.addr,e)}function If(i,t){const e=bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Nf(i,t){const e=bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pf(i,t){const e=bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ff(i,t){i.uniform1iv(this.addr,t)}function Df(i,t){i.uniform2iv(this.addr,t)}function Of(i,t){i.uniform3iv(this.addr,t)}function Vf(i,t){i.uniform4iv(this.addr,t)}function Gf(i,t){i.uniform1uiv(this.addr,t)}function Wf(i,t){i.uniform2uiv(this.addr,t)}function Bf(i,t){i.uniform3uiv(this.addr,t)}function kf(i,t){i.uniform4uiv(this.addr,t)}function zf(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||El,s[a])}function Zf(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||bl,s[a])}function Hf(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Tl,s[a])}function qf(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);ce(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||_l,s[a])}function Xf(i){switch(i){case 5126:return Cf;case 35664:return wf;case 35665:return Uf;case 35666:return Lf;case 35674:return If;case 35675:return Nf;case 35676:return Pf;case 5124:case 35670:return Ff;case 35667:case 35671:return Df;case 35668:case 35672:return Of;case 35669:case 35673:return Vf;case 5125:return Gf;case 36294:return Wf;case 36295:return Bf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return zf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return Hf;case 36289:case 36303:case 36311:case 36292:return qf}}class Yf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Af(e.type)}}class Jf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xf(e.type)}}class Kf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const ps=/(\w+)(\])?(\[|\.)?/g;function Ro(i,t){i.seq.push(t),i.map[t.id]=t}function jf(i,t,e){const n=i.name,r=n.length;for(ps.lastIndex=0;;){const s=ps.exec(n),a=ps.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ro(e,c===void 0?new Yf(o,i,t):new Jf(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Kf(o),Ro(e,f)),e=f}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);jf(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Ao(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qf=37297;let $f=0;function tp(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Co=new Ut;function ep(i){Bt._getMatrix(Co,Bt.workingColorSpace,i);const t=`mat3( ${Co.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(i)){case Nr:return[t,"LinearTransferOETF"];case Xt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+tp(i.getShaderSource(t),a)}else return r}function np(i,t){const e=ep(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ip(i,t){let e;switch(t){case gc:e="Linear";break;case vc:e="Reinhard";break;case xc:e="Cineon";break;case Sc:e="ACESFilmic";break;case yc:e="AgX";break;case Ec:e="Neutral";break;case Mc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const gr=new C;function rp(){Bt.getLuminanceCoefficients(gr);const i=gr.x.toFixed(4),t=gr.y.toFixed(4),e=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fi).join(`
`)}function ap(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function op(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Fi(i){return i!==""}function Uo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(i){return i.replace(lp,up)}const cp=new Map;function up(i,t){let e=It[t];if(e===void 0){const n=cp.get(t);if(n!==void 0)e=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return aa(e)}const hp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Io(i){return i.replace(hp,dp)}function dp(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function No(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function fp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rn&&(t="SHADOWMAP_TYPE_VSM"),t}function pp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mi:case gi:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gi:t="ENVMAP_MODE_REFRACTION";break}return t}function gp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ko:t="ENVMAP_BLENDING_MULTIPLY";break;case pc:t="ENVMAP_BLENDING_MIX";break;case mc:t="ENVMAP_BLENDING_ADD";break}return t}function vp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xp(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=fp(e),c=pp(e),h=mp(e),f=gp(e),d=vp(e),m=sp(e),g=ap(s),x=r.createProgram();let p,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fi).join(`
`),u.length>0&&(u+=`
`)):(p=[No(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),u=[No(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_n?"#define TONE_MAPPING":"",e.toneMapping!==_n?It.tonemapping_pars_fragment:"",e.toneMapping!==_n?ip("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,np("linearToOutputTexel",e.outputColorSpace),rp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fi).join(`
`)),a=aa(a),a=Uo(a,e),a=Lo(a,e),o=aa(o),o=Uo(o,e),o=Lo(o,e),a=Io(a),o=Io(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=b+p+a,M=b+u+o,F=Ao(r,r.VERTEX_SHADER,_),R=Ao(r,r.FRAGMENT_SHADER,M);r.attachShader(x,F),r.attachShader(x,R),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(w){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(x).trim(),G=r.getShaderInfoLog(F).trim(),z=r.getShaderInfoLog(R).trim();let J=!0,Z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,F,R);else{const $=wo(r,F,"vertex"),k=wo(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+$+`
`+k)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||z==="")&&(Z=!1);Z&&(w.diagnostics={runnable:J,programLog:W,vertexShader:{log:G,prefix:p},fragmentShader:{log:z,prefix:u}})}r.deleteShader(F),r.deleteShader(R),U=new Rr(r,x),E=op(r,x)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,Qf)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$f++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=R,this}let Sp=0;class Mp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yp(t),e.set(t,n)),n}}class yp{constructor(t){this.id=Sp++,this.code=t,this.usedTimes=0}}function Ep(i,t,e,n,r,s,a){const o=new dl,l=new Mp,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,S,w,W,G){const z=W.fog,J=G.geometry,Z=E.isMeshStandardMaterial?W.environment:null,$=(E.isMeshStandardMaterial?e:t).get(E.envMap||Z),k=$&&$.mapping===Ir?$.image.height:null,it=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ct=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,St=ct!==void 0?ct.length:0;let Nt=0;J.morphAttributes.position!==void 0&&(Nt=1),J.morphAttributes.normal!==void 0&&(Nt=2),J.morphAttributes.color!==void 0&&(Nt=3);let Yt,q,tt,gt;if(it){const qt=qe[it];Yt=qt.vertexShader,q=qt.fragmentShader}else Yt=E.vertexShader,q=E.fragmentShader,l.update(E),tt=l.getVertexShaderID(E),gt=l.getFragmentShaderID(E);const rt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),At=G.isInstancedMesh===!0,Pt=G.isBatchedMesh===!0,te=!!E.map,Gt=!!E.matcap,ne=!!$,P=!!E.aoMap,Re=!!E.lightMap,Dt=!!E.bumpMap,Ot=!!E.normalMap,yt=!!E.displacementMap,jt=!!E.emissiveMap,Mt=!!E.metalnessMap,T=!!E.roughnessMap,v=E.anisotropy>0,D=E.clearcoat>0,X=E.dispersion>0,K=E.iridescence>0,H=E.sheen>0,vt=E.transmission>0,st=v&&!!E.anisotropyMap,ut=D&&!!E.clearcoatMap,Wt=D&&!!E.clearcoatNormalMap,j=D&&!!E.clearcoatRoughnessMap,ht=K&&!!E.iridescenceMap,_t=K&&!!E.iridescenceThicknessMap,Tt=H&&!!E.sheenColorMap,dt=H&&!!E.sheenRoughnessMap,Vt=!!E.specularMap,Lt=!!E.specularColorMap,Jt=!!E.specularIntensityMap,L=vt&&!!E.transmissionMap,nt=vt&&!!E.thicknessMap,B=!!E.gradientMap,Y=!!E.alphaMap,lt=E.alphaTest>0,at=!!E.alphaHash,Ct=!!E.extensions;let ee=_n;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ee=i.toneMapping);const fe={shaderID:it,shaderType:E.type,shaderName:E.name,vertexShader:Yt,fragmentShader:q,defines:E.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Pt,batchingColor:Pt&&G._colorsTexture!==null,instancing:At,instancingColor:At&&G.instanceColor!==null,instancingMorph:At&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:yi,alphaToCoverage:!!E.alphaToCoverage,map:te,matcap:Gt,envMap:ne,envMapMode:ne&&$.mapping,envMapCubeUVHeight:k,aoMap:P,lightMap:Re,bumpMap:Dt,normalMap:Ot,displacementMap:d&&yt,emissiveMap:jt,normalMapObjectSpace:Ot&&E.normalMapType===Ac,normalMapTangentSpace:Ot&&E.normalMapType===Rc,metalnessMap:Mt,roughnessMap:T,anisotropy:v,anisotropyMap:st,clearcoat:D,clearcoatMap:ut,clearcoatNormalMap:Wt,clearcoatRoughnessMap:j,dispersion:X,iridescence:K,iridescenceMap:ht,iridescenceThicknessMap:_t,sheen:H,sheenColorMap:Tt,sheenRoughnessMap:dt,specularMap:Vt,specularColorMap:Lt,specularIntensityMap:Jt,transmission:vt,transmissionMap:L,thicknessMap:nt,gradientMap:B,opaque:E.transparent===!1&&E.blending===ui&&E.alphaToCoverage===!1,alphaMap:Y,alphaTest:lt,alphaHash:at,combine:E.combine,mapUv:te&&x(E.map.channel),aoMapUv:P&&x(E.aoMap.channel),lightMapUv:Re&&x(E.lightMap.channel),bumpMapUv:Dt&&x(E.bumpMap.channel),normalMapUv:Ot&&x(E.normalMap.channel),displacementMapUv:yt&&x(E.displacementMap.channel),emissiveMapUv:jt&&x(E.emissiveMap.channel),metalnessMapUv:Mt&&x(E.metalnessMap.channel),roughnessMapUv:T&&x(E.roughnessMap.channel),anisotropyMapUv:st&&x(E.anisotropyMap.channel),clearcoatMapUv:ut&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&x(E.sheenRoughnessMap.channel),specularMapUv:Vt&&x(E.specularMap.channel),specularColorMapUv:Lt&&x(E.specularColorMap.channel),specularIntensityMapUv:Jt&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:nt&&x(E.thicknessMap.channel),alphaMapUv:Y&&x(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ot||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(te||Y),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:bt,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:te&&E.map.isVideoTexture===!0&&Bt.getTransfer(E.map.colorSpace)===Xt,decodeVideoTextureEmissive:jt&&E.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(E.emissiveMap.colorSpace)===Xt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===sn,flipSided:E.side===xe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ct&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&E.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function u(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)S.push(w),S.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(b(S,E),_(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function b(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function _(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){const S=g[E.type];let w;if(S){const W=qe[S];w=iu.clone(W.uniforms)}else w=E.uniforms;return w}function F(E,S){let w;for(let W=0,G=h.length;W<G;W++){const z=h[W];if(z.cacheKey===S){w=z,++w.usedTimes;break}}return w===void 0&&(w=new xp(i,S,E,s),h.push(w)),w}function R(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:M,acquireProgram:F,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:U}}function _p(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function bp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Po(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fo(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,d,m,g,x,p){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},i[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=x,u.group=p),t++,u}function o(f,d,m,g,x,p){const u=a(f,d,m,g,x,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):e.push(u)}function l(f,d,m,g,x,p){const u=a(f,d,m,g,x,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):e.unshift(u)}function c(f,d){e.length>1&&e.sort(f||bp),n.length>1&&n.sort(d||Po),r.length>1&&r.sort(d||Po)}function h(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Tp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Fo,i.set(n,[a])):r>=s.length?(a=new Fo,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Rp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new zt};break;case"SpotLight":e={position:new C,direction:new C,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Ap(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cp=0;function wp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Up(i){const t=new Rp,e=Ap(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const r=new C,s=new re,a=new re;function o(c){let h=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,x=0,p=0,u=0,b=0,_=0,M=0,F=0,R=0,A=0;c.sort(wp);for(let E=0,S=c.length;E<S;E++){const w=c[E],W=w.color,G=w.intensity,z=w.distance,J=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=W.r*G,f+=W.g*G,d+=W.b*G;else if(w.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(w.sh.coefficients[Z],G);A++}else if(w.isDirectionalLight){const Z=t.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const $=w.shadow,k=e.get(w);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=w.shadow.matrix,b++}n.directional[m]=Z,m++}else if(w.isSpotLight){const Z=t.get(w);Z.position.setFromMatrixPosition(w.matrixWorld),Z.color.copy(W).multiplyScalar(G),Z.distance=z,Z.coneCos=Math.cos(w.angle),Z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Z.decay=w.decay,n.spot[x]=Z;const $=w.shadow;if(w.map&&(n.spotLightMap[F]=w.map,F++,$.updateMatrices(w),w.castShadow&&R++),n.spotLightMatrix[x]=$.matrix,w.castShadow){const k=e.get(w);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=J,M++}x++}else if(w.isRectAreaLight){const Z=t.get(w);Z.color.copy(W).multiplyScalar(G),Z.halfWidth.set(w.width*.5,0,0),Z.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=Z,p++}else if(w.isPointLight){const Z=t.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),Z.distance=w.distance,Z.decay=w.decay,w.castShadow){const $=w.shadow,k=e.get(w);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=w.shadow.matrix,_++}n.point[g]=Z,g++}else if(w.isHemisphereLight){const Z=t.get(w);Z.skyColor.copy(w.color).multiplyScalar(G),Z.groundColor.copy(w.groundColor).multiplyScalar(G),n.hemi[u]=Z,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==p||U.hemiLength!==u||U.numDirectionalShadows!==b||U.numPointShadows!==_||U.numSpotShadows!==M||U.numSpotMaps!==F||U.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+F-R,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,U.directionalLength=m,U.pointLength=g,U.spotLength=x,U.rectAreaLength=p,U.hemiLength=u,U.numDirectionalShadows=b,U.numPointShadows=_,U.numSpotShadows=M,U.numSpotMaps=F,U.numLightProbes=A,n.version=Cp++)}function l(c,h){let f=0,d=0,m=0,g=0,x=0;const p=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const _=c[u];if(_.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(_.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(_.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function Do(i){const t=new Up(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Lp(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Do(i),t.set(r,[o])):s>=a.length?(o=new Do(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ip extends Pr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Np extends Pr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dp(i,t,e){let n=new Sl;const r=new Et,s=new Et,a=new ie,o=new Ip({depthPacking:Tc}),l=new Np,c={},h=e.maxTextureSize,f={[Tn]:xe,[xe]:Tn,[sn]:sn},d=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Pp,fragmentShader:Fp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ze;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new de(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let u=this.type;this.render=function(R,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),W=i.state;W.setBlending(En),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const G=u!==rn&&this.type===rn,z=u===rn&&this.type!==rn;for(let J=0,Z=R.length;J<Z;J++){const $=R[J],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const it=k.getFrameExtents();if(r.multiply(it),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/it.x),r.x=s.x*it.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/it.y),r.y=s.y*it.y,k.mapSize.y=s.y)),k.map===null||G===!0||z===!0){const St=this.type!==rn?{minFilter:ke,magFilter:ke}:{};k.map!==null&&k.map.dispose(),k.map=new Zn(r.x,r.y,St),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ct=k.getViewportCount();for(let St=0;St<ct;St++){const Nt=k.getViewport(St);a.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),W.viewport(a),k.updateMatrices($,St),n=k.getFrustum(),M(A,U,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===rn&&b(k,U),k.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(E,S,w)};function b(R,A){const U=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zn(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,U,d,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,U,m,x,null)}function _(R,A,U,E){let S=null;const w=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)S=w;else if(S=U.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=S.uuid,G=A.uuid;let z=c[W];z===void 0&&(z={},c[W]=z);let J=z[G];J===void 0&&(J=S.clone(),z[G]=J,A.addEventListener("dispose",F)),S=J}if(S.visible=A.visible,S.wireframe=A.wireframe,E===rn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=i.properties.get(S);W.light=U}return S}function M(R,A,U,E,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===rn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const G=t.update(R),z=R.material;if(Array.isArray(z)){const J=G.groups;for(let Z=0,$=J.length;Z<$;Z++){const k=J[Z],it=z[k.materialIndex];if(it&&it.visible){const ct=_(R,it,E,S);R.onBeforeShadow(i,R,A,U,G,ct,k),i.renderBufferDirect(U,null,G,ct,R,k),R.onAfterShadow(i,R,A,U,G,ct,k)}}}else if(z.visible){const J=_(R,z,E,S);R.onBeforeShadow(i,R,A,U,G,J,null),i.renderBufferDirect(U,null,G,J,R,null),R.onAfterShadow(i,R,A,U,G,J,null)}}const W=R.children;for(let G=0,z=W.length;G<z;G++)M(W[G],A,U,E,S)}function F(R){R.target.removeEventListener("dispose",F);for(const U in c){const E=c[U],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Op={[Es]:_s,[bs]:As,[Ts]:Cs,[pi]:Rs,[_s]:Es,[As]:bs,[Cs]:Ts,[Rs]:pi};function Vp(i,t){function e(){let L=!1;const nt=new ie;let B=null;const Y=new ie(0,0,0,0);return{setMask:function(lt){B!==lt&&!L&&(i.colorMask(lt,lt,lt,lt),B=lt)},setLocked:function(lt){L=lt},setClear:function(lt,at,Ct,ee,fe){fe===!0&&(lt*=ee,at*=ee,Ct*=ee),nt.set(lt,at,Ct,ee),Y.equals(nt)===!1&&(i.clearColor(lt,at,Ct,ee),Y.copy(nt))},reset:function(){L=!1,B=null,Y.set(-1,0,0,0)}}}function n(){let L=!1,nt=!1,B=null,Y=null,lt=null;return{setReversed:function(at){if(nt!==at){const Ct=t.get("EXT_clip_control");nt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT);const ee=lt;lt=null,this.setClear(ee)}nt=at},getReversed:function(){return nt},setTest:function(at){at?rt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(at){B!==at&&!L&&(i.depthMask(at),B=at)},setFunc:function(at){if(nt&&(at=Op[at]),Y!==at){switch(at){case Es:i.depthFunc(i.NEVER);break;case _s:i.depthFunc(i.ALWAYS);break;case bs:i.depthFunc(i.LESS);break;case pi:i.depthFunc(i.LEQUAL);break;case Ts:i.depthFunc(i.EQUAL);break;case Rs:i.depthFunc(i.GEQUAL);break;case As:i.depthFunc(i.GREATER);break;case Cs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=at}},setLocked:function(at){L=at},setClear:function(at){lt!==at&&(nt&&(at=1-at),i.clearDepth(at),lt=at)},reset:function(){L=!1,B=null,Y=null,lt=null,nt=!1}}}function r(){let L=!1,nt=null,B=null,Y=null,lt=null,at=null,Ct=null,ee=null,fe=null;return{setTest:function(qt){L||(qt?rt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(qt){nt!==qt&&!L&&(i.stencilMask(qt),nt=qt)},setFunc:function(qt,Ne,Ke){(B!==qt||Y!==Ne||lt!==Ke)&&(i.stencilFunc(qt,Ne,Ke),B=qt,Y=Ne,lt=Ke)},setOp:function(qt,Ne,Ke){(at!==qt||Ct!==Ne||ee!==Ke)&&(i.stencilOp(qt,Ne,Ke),at=qt,Ct=Ne,ee=Ke)},setLocked:function(qt){L=qt},setClear:function(qt){fe!==qt&&(i.clearStencil(qt),fe=qt)},reset:function(){L=!1,nt=null,B=null,Y=null,lt=null,at=null,Ct=null,ee=null,fe=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,m=[],g=null,x=!1,p=null,u=null,b=null,_=null,M=null,F=null,R=null,A=new zt(0,0,0),U=0,E=!1,S=null,w=null,W=null,G=null,z=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,$=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),Z=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Z=$>=2);let it=null,ct={};const St=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Yt=new ie().fromArray(St),q=new ie().fromArray(Nt);function tt(L,nt,B,Y){const lt=new Uint8Array(4),at=i.createTexture();i.bindTexture(L,at),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<B;Ct++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(nt+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return at}const gt={};gt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(pi),Dt(!1),Ot(Ga),rt(i.CULL_FACE),P(En);function rt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function bt(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function At(L,nt){return f[L]!==nt?(i.bindFramebuffer(L,nt),f[L]=nt,L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=nt),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Pt(L,nt){let B=m,Y=!1;if(L){B=d.get(nt),B===void 0&&(B=[],d.set(nt,B));const lt=L.textures;if(B.length!==lt.length||B[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ct=lt.length;at<Ct;at++)B[at]=i.COLOR_ATTACHMENT0+at;B.length=lt.length,Y=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,Y=!0);Y&&i.drawBuffers(B)}function te(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const Gt={[On]:i.FUNC_ADD,[jl]:i.FUNC_SUBTRACT,[Ql]:i.FUNC_REVERSE_SUBTRACT};Gt[$l]=i.MIN,Gt[tc]=i.MAX;const ne={[ec]:i.ZERO,[nc]:i.ONE,[ic]:i.SRC_COLOR,[Ms]:i.SRC_ALPHA,[cc]:i.SRC_ALPHA_SATURATE,[oc]:i.DST_COLOR,[sc]:i.DST_ALPHA,[rc]:i.ONE_MINUS_SRC_COLOR,[ys]:i.ONE_MINUS_SRC_ALPHA,[lc]:i.ONE_MINUS_DST_COLOR,[ac]:i.ONE_MINUS_DST_ALPHA,[uc]:i.CONSTANT_COLOR,[hc]:i.ONE_MINUS_CONSTANT_COLOR,[dc]:i.CONSTANT_ALPHA,[fc]:i.ONE_MINUS_CONSTANT_ALPHA};function P(L,nt,B,Y,lt,at,Ct,ee,fe,qt){if(L===En){x===!0&&(bt(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),L!==Kl){if(L!==p||qt!==E){if((u!==On||M!==On)&&(i.blendEquation(i.FUNC_ADD),u=On,M=On),qt)switch(L){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.ONE,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ka:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ka:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,_=null,F=null,R=null,A.set(0,0,0),U=0,p=L,E=qt}return}lt=lt||nt,at=at||B,Ct=Ct||Y,(nt!==u||lt!==M)&&(i.blendEquationSeparate(Gt[nt],Gt[lt]),u=nt,M=lt),(B!==b||Y!==_||at!==F||Ct!==R)&&(i.blendFuncSeparate(ne[B],ne[Y],ne[at],ne[Ct]),b=B,_=Y,F=at,R=Ct),(ee.equals(A)===!1||fe!==U)&&(i.blendColor(ee.r,ee.g,ee.b,fe),A.copy(ee),U=fe),p=L,E=!1}function Re(L,nt){L.side===sn?bt(i.CULL_FACE):rt(i.CULL_FACE);let B=L.side===xe;nt&&(B=!B),Dt(B),L.blending===ui&&L.transparent===!1?P(En):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const Y=L.stencilWrite;o.setTest(Y),Y&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),jt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(L){S!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),S=L)}function Ot(L){L!==Xl?(rt(i.CULL_FACE),L!==w&&(L===Ga?i.cullFace(i.BACK):L===Yl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),w=L}function yt(L){L!==W&&(Z&&i.lineWidth(L),W=L)}function jt(L,nt,B){L?(rt(i.POLYGON_OFFSET_FILL),(G!==nt||z!==B)&&(i.polygonOffset(nt,B),G=nt,z=B)):bt(i.POLYGON_OFFSET_FILL)}function Mt(L){L?rt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+J-1),it!==L&&(i.activeTexture(L),it=L)}function v(L,nt,B){B===void 0&&(it===null?B=i.TEXTURE0+J-1:B=it);let Y=ct[B];Y===void 0&&(Y={type:void 0,texture:void 0},ct[B]=Y),(Y.type!==L||Y.texture!==nt)&&(it!==B&&(i.activeTexture(B),it=B),i.bindTexture(L,nt||gt[L]),Y.type=L,Y.texture=nt)}function D(){const L=ct[it];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(L){Yt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Yt.copy(L))}function dt(L){q.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function Vt(L,nt){let B=c.get(nt);B===void 0&&(B=new WeakMap,c.set(nt,B));let Y=B.get(L);Y===void 0&&(Y=i.getUniformBlockIndex(nt,L.name),B.set(L,Y))}function Lt(L,nt){const Y=c.get(nt).get(L);l.get(nt)!==Y&&(i.uniformBlockBinding(nt,Y,L.__bindingPointIndex),l.set(nt,Y))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,ct={},f={},d=new WeakMap,m=[],g=null,x=!1,p=null,u=null,b=null,_=null,M=null,F=null,R=null,A=new zt(0,0,0),U=0,E=!1,S=null,w=null,W=null,G=null,z=null,Yt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:rt,disable:bt,bindFramebuffer:At,drawBuffers:Pt,useProgram:te,setBlending:P,setMaterial:Re,setFlipSided:Dt,setCullFace:Ot,setLineWidth:yt,setPolygonOffset:jt,setScissorTest:Mt,activeTexture:T,bindTexture:v,unbindTexture:D,compressedTexImage2D:X,compressedTexImage3D:K,texImage2D:ht,texImage3D:_t,updateUBOMapping:Vt,uniformBlockBinding:Lt,texStorage2D:Wt,texStorage3D:j,texSubImage2D:H,texSubImage3D:vt,compressedTexSubImage2D:st,compressedTexSubImage3D:ut,scissor:Tt,viewport:dt,reset:Jt}}function Oo(i,t,e,n){const r=Gp(n);switch(e){case el:return i*t;case il:return i*t;case rl:return i*t*2;case sl:return i*t/r.components*r.byteLength;case Sa:return i*t/r.components*r.byteLength;case al:return i*t*2/r.components*r.byteLength;case Ma:return i*t*2/r.components*r.byteLength;case nl:return i*t*3/r.components*r.byteLength;case Be:return i*t*4/r.components*r.byteLength;case ya:return i*t*4/r.components*r.byteLength;case yr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _r:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ps:case Ds:return Math.max(i,16)*Math.max(t,8)/4;case Ns:case Fs:return Math.max(i,8)*Math.max(t,8)/2;case Os:case Vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ks:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zs:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zs:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Hs:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xs:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ys:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Js:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ks:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case js:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qs:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $s:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tr:case ta:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ol:case na:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ia:case ra:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gp(i){switch(i){case cn:case Qo:return{byteLength:1,components:1};case Bi:case $o:case Zi:return{byteLength:2,components:1};case va:case xa:return{byteLength:2,components:4};case zn:case ga:case an:return{byteLength:4,components:1};case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Wp(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return m?new OffscreenCanvas(T,v):wr("canvas")}function x(T,v,D){let X=1;const K=Mt(T);if((K.width>D||K.height>D)&&(X=D/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const H=Math.floor(X*K.width),vt=Math.floor(X*K.height);f===void 0&&(f=g(H,vt));const st=v?g(H,vt):f;return st.width=H,st.height=vt,st.getContext("2d").drawImage(T,0,0,H,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+H+"x"+vt+")."),st}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function p(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(T,v,D,X,K=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let H=v;if(v===i.RED&&(D===i.FLOAT&&(H=i.R32F),D===i.HALF_FLOAT&&(H=i.R16F),D===i.UNSIGNED_BYTE&&(H=i.R8)),v===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.R8UI),D===i.UNSIGNED_SHORT&&(H=i.R16UI),D===i.UNSIGNED_INT&&(H=i.R32UI),D===i.BYTE&&(H=i.R8I),D===i.SHORT&&(H=i.R16I),D===i.INT&&(H=i.R32I)),v===i.RG&&(D===i.FLOAT&&(H=i.RG32F),D===i.HALF_FLOAT&&(H=i.RG16F),D===i.UNSIGNED_BYTE&&(H=i.RG8)),v===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RG8UI),D===i.UNSIGNED_SHORT&&(H=i.RG16UI),D===i.UNSIGNED_INT&&(H=i.RG32UI),D===i.BYTE&&(H=i.RG8I),D===i.SHORT&&(H=i.RG16I),D===i.INT&&(H=i.RG32I)),v===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RGB8UI),D===i.UNSIGNED_SHORT&&(H=i.RGB16UI),D===i.UNSIGNED_INT&&(H=i.RGB32UI),D===i.BYTE&&(H=i.RGB8I),D===i.SHORT&&(H=i.RGB16I),D===i.INT&&(H=i.RGB32I)),v===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),D===i.UNSIGNED_INT&&(H=i.RGBA32UI),D===i.BYTE&&(H=i.RGBA8I),D===i.SHORT&&(H=i.RGBA16I),D===i.INT&&(H=i.RGBA32I)),v===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),v===i.RGBA){const vt=K?Nr:Bt.getTransfer(X);D===i.FLOAT&&(H=i.RGBA32F),D===i.HALF_FLOAT&&(H=i.RGBA16F),D===i.UNSIGNED_BYTE&&(H=vt===Xt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function M(T,v){let D;return T?v===null||v===zn||v===vi?D=i.DEPTH24_STENCIL8:v===an?D=i.DEPTH32F_STENCIL8:v===Bi&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===zn||v===vi?D=i.DEPTH_COMPONENT24:v===an?D=i.DEPTH_COMPONENT32F:v===Bi&&(D=i.DEPTH_COMPONENT16),D}function F(T,v){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==ke&&T.minFilter!==Xe?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function R(T){const v=T.target;v.removeEventListener("dispose",R),U(v),v.isVideoTexture&&h.delete(v)}function A(T){const v=T.target;v.removeEventListener("dispose",A),S(v)}function U(T){const v=n.get(T);if(v.__webglInit===void 0)return;const D=T.source,X=d.get(D);if(X){const K=X[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(T),Object.keys(X).length===0&&d.delete(D)}n.remove(T)}function E(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const D=T.source,X=d.get(D);delete X[v.__cacheKey],a.memory.textures--}function S(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let K=0;K<v.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[X][K]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=T.textures;for(let X=0,K=D.length;X<K;X++){const H=n.get(D[X]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(D[X])}n.remove(T)}let w=0;function W(){w=0}function G(){const T=w;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),w+=1,T}function z(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function J(T,v){const D=n.get(T);if(T.isVideoTexture&&yt(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(D,T,v);return}}e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+v)}function Z(T,v){const D=n.get(T);if(T.version>0&&D.__version!==T.version){q(D,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+v)}function $(T,v){const D=n.get(T);if(T.version>0&&D.__version!==T.version){q(D,T,v);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+v)}function k(T,v){const D=n.get(T);if(T.version>0&&D.__version!==T.version){tt(D,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+v)}const it={[Ls]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[Is]:i.MIRRORED_REPEAT},ct={[ke]:i.NEAREST,[_c]:i.NEAREST_MIPMAP_NEAREST,[Ki]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},St={[Cc]:i.NEVER,[Pc]:i.ALWAYS,[wc]:i.LESS,[ll]:i.LEQUAL,[Uc]:i.EQUAL,[Nc]:i.GEQUAL,[Lc]:i.GREATER,[Ic]:i.NOTEQUAL};function Nt(T,v){if(v.type===an&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Xe||v.magFilter===Wr||v.magFilter===Ki||v.magFilter===Wn||v.minFilter===Xe||v.minFilter===Wr||v.minFilter===Ki||v.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,it[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,it[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,it[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ct[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ct[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ke||v.minFilter!==Ki&&v.minFilter!==Wn||v.type===an&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Yt(T,v){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",R));const X=v.source;let K=d.get(X);K===void 0&&(K={},d.set(X,K));const H=z(v);if(H!==T.__cacheKey){K[H]===void 0&&(K[H]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[H].usedTimes++;const vt=K[T.__cacheKey];vt!==void 0&&(K[T.__cacheKey].usedTimes--,vt.usedTimes===0&&E(v)),T.__cacheKey=H,T.__webglTexture=K[H].texture}return D}function q(T,v,D){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);const K=Yt(T,v),H=v.source;e.bindTexture(X,T.__webglTexture,i.TEXTURE0+D);const vt=n.get(H);if(H.version!==vt.__version||K===!0){e.activeTexture(i.TEXTURE0+D);const st=Bt.getPrimaries(Bt.workingColorSpace),ut=v.colorSpace===Mn?null:Bt.getPrimaries(v.colorSpace),Wt=v.colorSpace===Mn||st===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let j=x(v.image,!1,r.maxTextureSize);j=jt(v,j);const ht=s.convert(v.format,v.colorSpace),_t=s.convert(v.type);let Tt=_(v.internalFormat,ht,_t,v.colorSpace,v.isVideoTexture);Nt(X,v);let dt;const Vt=v.mipmaps,Lt=v.isVideoTexture!==!0,Jt=vt.__version===void 0||K===!0,L=H.dataReady,nt=F(v,j);if(v.isDepthTexture)Tt=M(v.format===xi,v.type),Jt&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Tt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Tt,j.width,j.height,0,ht,_t,null));else if(v.isDataTexture)if(Vt.length>0){Lt&&Jt&&e.texStorage2D(i.TEXTURE_2D,nt,Tt,Vt[0].width,Vt[0].height);for(let B=0,Y=Vt.length;B<Y;B++)dt=Vt[B],Lt?L&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,dt.width,dt.height,ht,_t,dt.data):e.texImage2D(i.TEXTURE_2D,B,Tt,dt.width,dt.height,0,ht,_t,dt.data);v.generateMipmaps=!1}else Lt?(Jt&&e.texStorage2D(i.TEXTURE_2D,nt,Tt,j.width,j.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,ht,_t,j.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,j.width,j.height,0,ht,_t,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Lt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Tt,Vt[0].width,Vt[0].height,j.depth);for(let B=0,Y=Vt.length;B<Y;B++)if(dt=Vt[B],v.format!==Be)if(ht!==null)if(Lt){if(L)if(v.layerUpdates.size>0){const lt=Oo(dt.width,dt.height,v.format,v.type);for(const at of v.layerUpdates){const Ct=dt.data.subarray(at*lt/dt.data.BYTES_PER_ELEMENT,(at+1)*lt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,at,dt.width,dt.height,1,ht,Ct)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,dt.width,dt.height,j.depth,ht,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,Tt,dt.width,dt.height,j.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,dt.width,dt.height,j.depth,ht,_t,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,B,Tt,dt.width,dt.height,j.depth,0,ht,_t,dt.data)}else{Lt&&Jt&&e.texStorage2D(i.TEXTURE_2D,nt,Tt,Vt[0].width,Vt[0].height);for(let B=0,Y=Vt.length;B<Y;B++)dt=Vt[B],v.format!==Be?ht!==null?Lt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,dt.width,dt.height,ht,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,B,Tt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?L&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,dt.width,dt.height,ht,_t,dt.data):e.texImage2D(i.TEXTURE_2D,B,Tt,dt.width,dt.height,0,ht,_t,dt.data)}else if(v.isDataArrayTexture)if(Lt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Tt,j.width,j.height,j.depth),L)if(v.layerUpdates.size>0){const B=Oo(j.width,j.height,v.format,v.type);for(const Y of v.layerUpdates){const lt=j.data.subarray(Y*B/j.data.BYTES_PER_ELEMENT,(Y+1)*B/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,j.width,j.height,1,ht,_t,lt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ht,_t,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,j.width,j.height,j.depth,0,ht,_t,j.data);else if(v.isData3DTexture)Lt?(Jt&&e.texStorage3D(i.TEXTURE_3D,nt,Tt,j.width,j.height,j.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ht,_t,j.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,j.width,j.height,j.depth,0,ht,_t,j.data);else if(v.isFramebufferTexture){if(Jt)if(Lt)e.texStorage2D(i.TEXTURE_2D,nt,Tt,j.width,j.height);else{let B=j.width,Y=j.height;for(let lt=0;lt<nt;lt++)e.texImage2D(i.TEXTURE_2D,lt,Tt,B,Y,0,ht,_t,null),B>>=1,Y>>=1}}else if(Vt.length>0){if(Lt&&Jt){const B=Mt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,nt,Tt,B.width,B.height)}for(let B=0,Y=Vt.length;B<Y;B++)dt=Vt[B],Lt?L&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,ht,_t,dt):e.texImage2D(i.TEXTURE_2D,B,Tt,ht,_t,dt);v.generateMipmaps=!1}else if(Lt){if(Jt){const B=Mt(j);e.texStorage2D(i.TEXTURE_2D,nt,Tt,B.width,B.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,_t,j)}else e.texImage2D(i.TEXTURE_2D,0,Tt,ht,_t,j);p(v)&&u(X),vt.__version=H.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function tt(T,v,D){if(v.image.length!==6)return;const X=Yt(T,v),K=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+D);const H=n.get(K);if(K.version!==H.__version||X===!0){e.activeTexture(i.TEXTURE0+D);const vt=Bt.getPrimaries(Bt.workingColorSpace),st=v.colorSpace===Mn?null:Bt.getPrimaries(v.colorSpace),ut=v.colorSpace===Mn||vt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Wt=v.isCompressedTexture||v.image[0].isCompressedTexture,j=v.image[0]&&v.image[0].isDataTexture,ht=[];for(let Y=0;Y<6;Y++)!Wt&&!j?ht[Y]=x(v.image[Y],!0,r.maxCubemapSize):ht[Y]=j?v.image[Y].image:v.image[Y],ht[Y]=jt(v,ht[Y]);const _t=ht[0],Tt=s.convert(v.format,v.colorSpace),dt=s.convert(v.type),Vt=_(v.internalFormat,Tt,dt,v.colorSpace),Lt=v.isVideoTexture!==!0,Jt=H.__version===void 0||X===!0,L=K.dataReady;let nt=F(v,_t);Nt(i.TEXTURE_CUBE_MAP,v);let B;if(Wt){Lt&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Vt,_t.width,_t.height);for(let Y=0;Y<6;Y++){B=ht[Y].mipmaps;for(let lt=0;lt<B.length;lt++){const at=B[lt];v.format!==Be?Tt!==null?Lt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,lt,0,0,at.width,at.height,Tt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,lt,Vt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,lt,0,0,at.width,at.height,Tt,dt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,lt,Vt,at.width,at.height,0,Tt,dt,at.data)}}}else{if(B=v.mipmaps,Lt&&Jt){B.length>0&&nt++;const Y=Mt(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Vt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(j){Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ht[Y].width,ht[Y].height,Tt,dt,ht[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Vt,ht[Y].width,ht[Y].height,0,Tt,dt,ht[Y].data);for(let lt=0;lt<B.length;lt++){const Ct=B[lt].image[Y].image;Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,lt+1,0,0,Ct.width,Ct.height,Tt,dt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,lt+1,Vt,Ct.width,Ct.height,0,Tt,dt,Ct.data)}}else{Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Tt,dt,ht[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Vt,Tt,dt,ht[Y]);for(let lt=0;lt<B.length;lt++){const at=B[lt];Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,lt+1,0,0,Tt,dt,at.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,lt+1,Vt,Tt,dt,at.image[Y])}}}p(v)&&u(i.TEXTURE_CUBE_MAP),H.__version=K.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function gt(T,v,D,X,K,H){const vt=s.convert(D.format,D.colorSpace),st=s.convert(D.type),ut=_(D.internalFormat,vt,st,D.colorSpace),Wt=n.get(v),j=n.get(D);if(j.__renderTarget=v,!Wt.__hasExternalTextures){const ht=Math.max(1,v.width>>H),_t=Math.max(1,v.height>>H);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,H,ut,ht,_t,v.depth,0,vt,st,null):e.texImage2D(K,H,ut,ht,_t,0,vt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,j.__webglTexture,0,Dt(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,j.__webglTexture,H),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(T,v,D){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const X=v.depthTexture,K=X&&X.isDepthTexture?X.type:null,H=M(v.stencilBuffer,K),vt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=Dt(v);Ot(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,H,v.width,v.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,H,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,H,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,T)}else{const X=v.textures;for(let K=0;K<X.length;K++){const H=X[K],vt=s.convert(H.format,H.colorSpace),st=s.convert(H.type),ut=_(H.internalFormat,vt,st,H.colorSpace),Wt=Dt(v);D&&Ot(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ut,v.width,v.height):Ot(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const K=X.__webglTexture,H=Dt(v);if(v.depthTexture.format===hi)Ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(v.depthTexture.format===xi)Ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function At(T){const v=n.get(T),D=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=X}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");bt(v.__webglFramebuffer,T)}else if(D){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[X],T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,H)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(T,v,D){const X=n.get(T);v!==void 0&&gt(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&At(T)}function te(T){const v=T.texture,D=n.get(T),X=n.get(v);T.addEventListener("dispose",A);const K=T.textures,H=T.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,a.memory.textures++),H){D.__webglFramebuffer=[];for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[st]=[];for(let ut=0;ut<v.mipmaps.length;ut++)D.__webglFramebuffer[st][ut]=i.createFramebuffer()}else D.__webglFramebuffer[st]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let st=0;st<v.mipmaps.length;st++)D.__webglFramebuffer[st]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(vt)for(let st=0,ut=K.length;st<ut;st++){const Wt=n.get(K[st]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ot(T)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let st=0;st<K.length;st++){const ut=K[st];D.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[st]);const Wt=s.convert(ut.format,ut.colorSpace),j=s.convert(ut.type),ht=_(ut.internalFormat,Wt,j,ut.colorSpace,T.isXRRenderTarget===!0),_t=Dt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,ht,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,D.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(D.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,v);for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)gt(D.__webglFramebuffer[st][ut],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut);else gt(D.__webglFramebuffer[st],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(v)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let st=0,ut=K.length;st<ut;st++){const Wt=K[st],j=n.get(Wt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),Nt(i.TEXTURE_2D,Wt),gt(D.__webglFramebuffer,T,Wt,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),p(Wt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(st=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,X.__webglTexture),Nt(st,v),v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)gt(D.__webglFramebuffer[ut],T,v,i.COLOR_ATTACHMENT0,st,ut);else gt(D.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,st,0);p(v)&&u(st),e.unbindTexture()}T.depthBuffer&&At(T)}function Gt(T){const v=T.textures;for(let D=0,X=v.length;D<X;D++){const K=v[D];if(p(K)){const H=b(T),vt=n.get(K).__webglTexture;e.bindTexture(H,vt),u(H),e.unbindTexture()}}}const ne=[],P=[];function Re(T){if(T.samples>0){if(Ot(T)===!1){const v=T.textures,D=T.width,X=T.height;let K=i.COLOR_BUFFER_BIT;const H=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(T),st=v.length>1;if(st)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const Wt=n.get(v[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,D,X,0,0,D,X,K,i.NEAREST),l===!0&&(ne.length=0,P.length=0,ne.push(i.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ne.push(H),P.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const Wt=n.get(v[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Dt(T){return Math.min(r.maxSamples,T.samples)}function Ot(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function yt(T){const v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function jt(T,v){const D=T.colorSpace,X=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==yi&&D!==Mn&&(Bt.getTransfer(D)===Xt?(X!==Be||K!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}function Mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=k,this.rebindTextures=Pt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ot}function Bp(i,t){function e(n,r=Mn){let s;const a=Bt.getTransfer(r);if(n===cn)return i.UNSIGNED_BYTE;if(n===va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qo)return i.BYTE;if(n===$o)return i.SHORT;if(n===Bi)return i.UNSIGNED_SHORT;if(n===ga)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===Zi)return i.HALF_FLOAT;if(n===el)return i.ALPHA;if(n===nl)return i.RGB;if(n===Be)return i.RGBA;if(n===il)return i.LUMINANCE;if(n===rl)return i.LUMINANCE_ALPHA;if(n===hi)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===Sa)return i.RED_INTEGER;if(n===al)return i.RG;if(n===Ma)return i.RG_INTEGER;if(n===ya)return i.RGBA_INTEGER;if(n===yr||n===Er||n===_r||n===br)if(a===Xt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ns||n===Ps||n===Fs||n===Ds)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ns)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ps)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ds)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Os||n===Vs||n===Gs)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Os||n===Vs)return a===Xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Gs)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ws||n===Bs||n===ks||n===zs||n===Zs||n===Hs||n===qs||n===Xs||n===Ys||n===Js||n===Ks||n===js||n===Qs||n===$s)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ws)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bs)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ks)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zs)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zs)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hs)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qs)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xs)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ys)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Js)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ks)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===js)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qs)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$s)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tr||n===ta||n===ea)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Tr)return a===Xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ea)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===na||n===ia||n===ra)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Tr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===na)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ra)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class kp extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ci extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zp={type:"move"};class ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ci;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new ye,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ie({vertexShader:Zp,fragmentShader:Hp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xp extends Ei{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,g=null;const x=new qp,p=e.getContextAttributes();let u=null,b=null;const _=[],M=[],F=new Et;let R=null;const A=new Le;A.viewport=new ie;const U=new Le;U.viewport=new ie;const E=[A,U],S=new kp;let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=_[q];return tt===void 0&&(tt=new ms,_[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=_[q];return tt===void 0&&(tt=new ms,_[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=_[q];return tt===void 0&&(tt=new ms,_[q]=tt),tt.getHandSpace()};function G(q){const tt=M.indexOf(q.inputSource);if(tt===-1)return;const gt=_[tt];gt!==void 0&&(gt.update(q.inputSource,q.frame,c||a),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",J);for(let q=0;q<_.length;q++){const tt=M[q];tt!==null&&(M[q]=null,_[q].disconnect(tt))}w=null,W=null,x.reset(),t.setRenderTarget(u),m=null,d=null,f=null,r=null,b=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(u=t.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",z),r.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(F),r.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Zn(m.framebufferWidth,m.framebufferHeight,{format:Be,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,gt=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?xi:hi,gt=p.stencil?vi:zn);const bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(bt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Zn(d.textureWidth,d.textureHeight,{format:Be,type:cn,depthTexture:new yl(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Yt.setContext(r),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(q){for(let tt=0;tt<q.removed.length;tt++){const gt=q.removed[tt],rt=M.indexOf(gt);rt>=0&&(M[rt]=null,_[rt].disconnect(gt))}for(let tt=0;tt<q.added.length;tt++){const gt=q.added[tt];let rt=M.indexOf(gt);if(rt===-1){for(let At=0;At<_.length;At++)if(At>=M.length){M.push(gt),rt=At;break}else if(M[At]===null){M[At]=gt,rt=At;break}if(rt===-1)break}const bt=_[rt];bt&&bt.connect(gt)}}const Z=new C,$=new C;function k(q,tt,gt){Z.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(gt.matrixWorld);const rt=Z.distanceTo($),bt=tt.projectionMatrix.elements,At=gt.projectionMatrix.elements,Pt=bt[14]/(bt[10]-1),te=bt[14]/(bt[10]+1),Gt=(bt[9]+1)/bt[5],ne=(bt[9]-1)/bt[5],P=(bt[8]-1)/bt[0],Re=(At[8]+1)/At[0],Dt=Pt*P,Ot=Pt*Re,yt=rt/(-P+Re),jt=yt*-P;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(jt),q.translateZ(yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),bt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Mt=Pt+yt,T=te+yt,v=Dt-jt,D=Ot+(rt-jt),X=Gt*te/T*Mt,K=ne*te/T*Mt;q.projectionMatrix.makePerspective(v,D,X,K,Mt,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let tt=q.near,gt=q.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),S.near=U.near=A.near=tt,S.far=U.far=A.far=gt,(w!==S.near||W!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,W=S.far),A.layers.mask=q.layers.mask|2,U.layers.mask=q.layers.mask|4,S.layers.mask=A.layers.mask|U.layers.mask;const rt=q.parent,bt=S.cameras;it(S,rt);for(let At=0;At<bt.length;At++)it(bt[At],rt);bt.length===2?k(S,A,U):S.projectionMatrix.copy(A.projectionMatrix),ct(q,S,rt)};function ct(q,tt,gt){gt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=sa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let St=null;function Nt(q,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){const gt=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let rt=!1;gt.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let At=0;At<gt.length;At++){const Pt=gt[At];let te=null;if(m!==null)te=m.getViewport(Pt);else{const ne=f.getViewSubImage(d,Pt);te=ne.viewport,At===0&&(t.setRenderTargetTextures(b,ne.colorTexture,d.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(b))}let Gt=E[At];Gt===void 0&&(Gt=new Le,Gt.layers.enable(At),Gt.viewport=new ie,E[At]=Gt),Gt.matrix.fromArray(Pt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Pt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(te.x,te.y,te.width,te.height),At===0&&(S.matrix.copy(Gt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(Gt)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const At=f.getDepthInformation(gt[0]);At&&At.isValid&&At.texture&&x.init(t,At,r.renderState)}}for(let gt=0;gt<_.length;gt++){const rt=M[gt],bt=_[gt];rt!==null&&bt!==void 0&&bt.update(rt,tt,c||a)}St&&St(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Yt=new Ml;Yt.setAnimationLoop(Nt),this.setAnimationLoop=function(q){St=q},this.dispose=function(){}}}const Pn=new un,Yp=new re;function Jp(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,gl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,b,_,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,b,_):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===xe&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===xe&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=t.get(u),_=b.envMap,M=b.envMapRotation;_&&(p.envMap.value=_,Pn.copy(M),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),p.envMapRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(Pn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,_){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=_*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===xe&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Kp(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){const M=_.program;n.uniformBlockBinding(b,M)}function c(b,_){let M=r[b.id];M===void 0&&(g(b),M=h(b),r[b.id]=M,b.addEventListener("dispose",p));const F=_.program;n.updateUBOMapping(b,F);const R=t.render.frame;s[b.id]!==R&&(d(b),s[b.id]=R)}function h(b){const _=f();b.__bindingPointIndex=_;const M=i.createBuffer(),F=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,F,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const _=r[b.id],M=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let R=0,A=M.length;R<A;R++){const U=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,S=U.length;E<S;E++){const w=U[E];if(m(w,R,E,F)===!0){const W=w.__offset,G=Array.isArray(w.value)?w.value:[w.value];let z=0;for(let J=0;J<G.length;J++){const Z=G[J],$=x(Z);typeof Z=="number"||typeof Z=="boolean"?(w.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,W+z,w.__data)):Z.isMatrix3?(w.__data[0]=Z.elements[0],w.__data[1]=Z.elements[1],w.__data[2]=Z.elements[2],w.__data[3]=0,w.__data[4]=Z.elements[3],w.__data[5]=Z.elements[4],w.__data[6]=Z.elements[5],w.__data[7]=0,w.__data[8]=Z.elements[6],w.__data[9]=Z.elements[7],w.__data[10]=Z.elements[8],w.__data[11]=0):(Z.toArray(w.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,_,M,F){const R=b.value,A=_+"_"+M;if(F[A]===void 0)return typeof R=="number"||typeof R=="boolean"?F[A]=R:F[A]=R.clone(),!0;{const U=F[A];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return F[A]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(b){const _=b.uniforms;let M=0;const F=16;for(let A=0,U=_.length;A<U;A++){const E=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,w=E.length;S<w;S++){const W=E[S],G=Array.isArray(W.value)?W.value:[W.value];for(let z=0,J=G.length;z<J;z++){const Z=G[z],$=x(Z),k=M%F,it=k%$.boundary,ct=k+it;M+=it,ct!==0&&F-ct<$.storage&&(M+=F-ct),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=$.storage}}}const R=M%F;return R>0&&(M+=F-R),b.__size=M,b.__cache={},this}function x(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function p(b){const _=b.target;_.removeEventListener("dispose",p);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class jp{constructor(t={}){const{canvas:e=Dc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,u=null;const b=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=_n,this.toneMappingExposure=1;const M=this;let F=!1,R=0,A=0,U=null,E=-1,S=null;const w=new ie,W=new ie;let G=null;const z=new zt(0);let J=0,Z=e.width,$=e.height,k=1,it=null,ct=null;const St=new ie(0,0,Z,$),Nt=new ie(0,0,Z,$);let Yt=!1;const q=new Sl;let tt=!1,gt=!1;const rt=new re,bt=new re,At=new C,Pt=new ie,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function ne(){return U===null?k:1}let P=n;function Re(y,I){return e.getContext(y,I)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ma}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",at,!1),P===null){const I="webgl2";if(P=Re(I,y),P===null)throw Re(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Dt,Ot,yt,jt,Mt,T,v,D,X,K,H,vt,st,ut,Wt,j,ht,_t,Tt,dt,Vt,Lt,Jt,L;function nt(){Dt=new ef(P),Dt.init(),Lt=new Bp(P,Dt),Ot=new Yd(P,Dt,t,Lt),yt=new Vp(P,Dt),Ot.reverseDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),jt=new sf(P),Mt=new _p,T=new Wp(P,Dt,yt,Mt,Ot,Lt,jt),v=new Kd(M),D=new tf(M),X=new uu(P),Jt=new qd(P,X),K=new nf(P,X,jt,Jt),H=new of(P,K,X,jt),Tt=new af(P,Ot,T),j=new Jd(Mt),vt=new Ep(M,v,D,Dt,Ot,Jt,j),st=new Jp(M,Mt),ut=new Tp,Wt=new Lp(Dt),_t=new Hd(M,v,D,yt,H,m,l),ht=new Dp(M,H,Ot),L=new Kp(P,jt,Ot,yt),dt=new Xd(P,Dt,jt),Vt=new rf(P,Dt,jt),jt.programs=vt.programs,M.capabilities=Ot,M.extensions=Dt,M.properties=Mt,M.renderLists=ut,M.shadowMap=ht,M.state=yt,M.info=jt}nt();const B=new Xp(M,P);this.xr=B,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Dt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Dt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(Z,$,!1))},this.getSize=function(y){return y.set(Z,$)},this.setSize=function(y,I,O=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,$=I,e.width=Math.floor(y*k),e.height=Math.floor(I*k),O===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(Z*k,$*k).floor()},this.setDrawingBufferSize=function(y,I,O){Z=y,$=I,k=O,e.width=Math.floor(y*O),e.height=Math.floor(I*O),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(St)},this.setViewport=function(y,I,O,V){y.isVector4?St.set(y.x,y.y,y.z,y.w):St.set(y,I,O,V),yt.viewport(w.copy(St).multiplyScalar(k).round())},this.getScissor=function(y){return y.copy(Nt)},this.setScissor=function(y,I,O,V){y.isVector4?Nt.set(y.x,y.y,y.z,y.w):Nt.set(y,I,O,V),yt.scissor(W.copy(Nt).multiplyScalar(k).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(y){yt.setScissorTest(Yt=y)},this.setOpaqueSort=function(y){it=y},this.setTransparentSort=function(y){ct=y},this.getClearColor=function(y){return y.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(y=!0,I=!0,O=!0){let V=0;if(y){let N=!1;if(U!==null){const Q=U.texture.format;N=Q===ya||Q===Ma||Q===Sa}if(N){const Q=U.texture.type,ot=Q===cn||Q===zn||Q===Bi||Q===vi||Q===va||Q===xa,ft=_t.getClearColor(),pt=_t.getClearAlpha(),Rt=ft.r,wt=ft.g,mt=ft.b;ot?(g[0]=Rt,g[1]=wt,g[2]=mt,g[3]=pt,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=Rt,x[1]=wt,x[2]=mt,x[3]=pt,P.clearBufferiv(P.COLOR,0,x))}else V|=P.COLOR_BUFFER_BIT}I&&(V|=P.DEPTH_BUFFER_BIT),O&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),Wt.dispose(),Mt.dispose(),v.dispose(),D.dispose(),H.dispose(),Jt.dispose(),L.dispose(),vt.dispose(),B.dispose(),B.removeEventListener("sessionstart",La),B.removeEventListener("sessionend",Ia),Cn.stop()};function Y(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const y=jt.autoReset,I=ht.enabled,O=ht.autoUpdate,V=ht.needsUpdate,N=ht.type;nt(),jt.autoReset=y,ht.enabled=I,ht.autoUpdate=O,ht.needsUpdate=V,ht.type=N}function at(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ct(y){const I=y.target;I.removeEventListener("dispose",Ct),ee(I)}function ee(y){fe(y),Mt.remove(y)}function fe(y){const I=Mt.get(y).programs;I!==void 0&&(I.forEach(function(O){vt.releaseProgram(O)}),y.isShaderMaterial&&vt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,O,V,N,Q){I===null&&(I=te);const ot=N.isMesh&&N.matrixWorld.determinant()<0,ft=zl(y,I,O,V,N);yt.setMaterial(V,ot);let pt=O.index,Rt=1;if(V.wireframe===!0){if(pt=K.getWireframeAttribute(O),pt===void 0)return;Rt=2}const wt=O.drawRange,mt=O.attributes.position;let kt=wt.start*Rt,Kt=(wt.start+wt.count)*Rt;Q!==null&&(kt=Math.max(kt,Q.start*Rt),Kt=Math.min(Kt,(Q.start+Q.count)*Rt)),pt!==null?(kt=Math.max(kt,0),Kt=Math.min(Kt,pt.count)):mt!=null&&(kt=Math.max(kt,0),Kt=Math.min(Kt,mt.count));const Qt=Kt-kt;if(Qt<0||Qt===1/0)return;Jt.setup(N,V,ft,O,pt);let Se,Zt=dt;if(pt!==null&&(Se=X.get(pt),Zt=Vt,Zt.setIndex(Se)),N.isMesh)V.wireframe===!0?(yt.setLineWidth(V.wireframeLinewidth*ne()),Zt.setMode(P.LINES)):Zt.setMode(P.TRIANGLES);else if(N.isLine){let xt=V.linewidth;xt===void 0&&(xt=1),yt.setLineWidth(xt*ne()),N.isLineSegments?Zt.setMode(P.LINES):N.isLineLoop?Zt.setMode(P.LINE_LOOP):Zt.setMode(P.LINE_STRIP)}else N.isPoints?Zt.setMode(P.POINTS):N.isSprite&&Zt.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const xt=N._multiDrawStarts,je=N._multiDrawCounts,Ht=N._multiDrawCount,Pe=pt?X.get(pt).bytesPerElement:1,qn=Mt.get(V).currentProgram.getUniforms();for(let Ee=0;Ee<Ht;Ee++)qn.setValue(P,"_gl_DrawID",Ee),Zt.render(xt[Ee]/Pe,je[Ee])}else if(N.isInstancedMesh)Zt.renderInstances(kt,Qt,N.count);else if(O.isInstancedBufferGeometry){const xt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,je=Math.min(O.instanceCount,xt);Zt.renderInstances(kt,Qt,je)}else Zt.render(kt,Qt)};function qt(y,I,O){y.transparent===!0&&y.side===sn&&y.forceSinglePass===!1?(y.side=xe,y.needsUpdate=!0,Ji(y,I,O),y.side=Tn,y.needsUpdate=!0,Ji(y,I,O),y.side=sn):Ji(y,I,O)}this.compile=function(y,I,O=null){O===null&&(O=y),u=Wt.get(O),u.init(I),_.push(u),O.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),y!==O&&y.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const V=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let ot=0;ot<Q.length;ot++){const ft=Q[ot];qt(ft,O,N),V.add(ft)}else qt(Q,O,N),V.add(Q)}),_.pop(),u=null,V},this.compileAsync=function(y,I,O=null){const V=this.compile(y,I,O);return new Promise(N=>{function Q(){if(V.forEach(function(ot){Mt.get(ot).currentProgram.isReady()&&V.delete(ot)}),V.size===0){N(y);return}setTimeout(Q,10)}Dt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ne=null;function Ke(y){Ne&&Ne(y)}function La(){Cn.stop()}function Ia(){Cn.start()}const Cn=new Ml;Cn.setAnimationLoop(Ke),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(y){Ne=y,B.setAnimationLoop(y),y===null?Cn.stop():Cn.start()},B.addEventListener("sessionstart",La),B.addEventListener("sessionend",Ia),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(I),I=B.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,I,U),u=Wt.get(y,_.length),u.init(I),_.push(u),bt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(bt),gt=this.localClippingEnabled,tt=j.init(this.clippingPlanes,gt),p=ut.get(y,b.length),p.init(),b.push(p),B.enabled===!0&&B.isPresenting===!0){const Q=M.xr.getDepthSensingMesh();Q!==null&&Gr(Q,I,-1/0,M.sortObjects)}Gr(y,I,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(it,ct),Gt=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Gt&&_t.addToRenderList(p,y),this.info.render.frame++,tt===!0&&j.beginShadows();const O=u.state.shadowsArray;ht.render(O,y,I),tt===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,N=p.transmissive;if(u.setupLights(),I.isArrayCamera){const Q=I.cameras;if(N.length>0)for(let ot=0,ft=Q.length;ot<ft;ot++){const pt=Q[ot];Pa(V,N,y,pt)}Gt&&_t.render(y);for(let ot=0,ft=Q.length;ot<ft;ot++){const pt=Q[ot];Na(p,y,pt,pt.viewport)}}else N.length>0&&Pa(V,N,y,I),Gt&&_t.render(y),Na(p,y,I);U!==null&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(M,y,I),Jt.resetDefaultState(),E=-1,S=null,_.pop(),_.length>0?(u=_[_.length-1],tt===!0&&j.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Gr(y,I,O,V){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){V&&Pt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(bt);const ot=H.update(y),ft=y.material;ft.visible&&p.push(y,ot,ft,O,Pt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const ot=H.update(y),ft=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pt.copy(y.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Pt.copy(ot.boundingSphere.center)),Pt.applyMatrix4(y.matrixWorld).applyMatrix4(bt)),Array.isArray(ft)){const pt=ot.groups;for(let Rt=0,wt=pt.length;Rt<wt;Rt++){const mt=pt[Rt],kt=ft[mt.materialIndex];kt&&kt.visible&&p.push(y,ot,kt,O,Pt.z,mt)}}else ft.visible&&p.push(y,ot,ft,O,Pt.z,null)}}const Q=y.children;for(let ot=0,ft=Q.length;ot<ft;ot++)Gr(Q[ot],I,O,V)}function Na(y,I,O,V){const N=y.opaque,Q=y.transmissive,ot=y.transparent;u.setupLightsView(O),tt===!0&&j.setGlobalState(M.clippingPlanes,O),V&&yt.viewport(w.copy(V)),N.length>0&&Yi(N,I,O),Q.length>0&&Yi(Q,I,O),ot.length>0&&Yi(ot,I,O),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Pa(y,I,O,V){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new Zn(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?Zi:cn,minFilter:Wn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace}));const Q=u.state.transmissionRenderTarget[V.id],ot=V.viewport||w;Q.setSize(ot.z,ot.w);const ft=M.getRenderTarget();M.setRenderTarget(Q),M.getClearColor(z),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),Gt&&_t.render(O);const pt=M.toneMapping;M.toneMapping=_n;const Rt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),tt===!0&&j.setGlobalState(M.clippingPlanes,V),Yi(y,O,V),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let mt=0,kt=I.length;mt<kt;mt++){const Kt=I[mt],Qt=Kt.object,Se=Kt.geometry,Zt=Kt.material,xt=Kt.group;if(Zt.side===sn&&Qt.layers.test(V.layers)){const je=Zt.side;Zt.side=xe,Zt.needsUpdate=!0,Fa(Qt,O,V,Se,Zt,xt),Zt.side=je,Zt.needsUpdate=!0,wt=!0}}wt===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}M.setRenderTarget(ft),M.setClearColor(z,J),Rt!==void 0&&(V.viewport=Rt),M.toneMapping=pt}function Yi(y,I,O){const V=I.isScene===!0?I.overrideMaterial:null;for(let N=0,Q=y.length;N<Q;N++){const ot=y[N],ft=ot.object,pt=ot.geometry,Rt=V===null?ot.material:V,wt=ot.group;ft.layers.test(O.layers)&&Fa(ft,I,O,pt,Rt,wt)}}function Fa(y,I,O,V,N,Q){y.onBeforeRender(M,I,O,V,N,Q),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(M,I,O,V,y,Q),N.transparent===!0&&N.side===sn&&N.forceSinglePass===!1?(N.side=xe,N.needsUpdate=!0,M.renderBufferDirect(O,I,V,N,y,Q),N.side=Tn,N.needsUpdate=!0,M.renderBufferDirect(O,I,V,N,y,Q),N.side=sn):M.renderBufferDirect(O,I,V,N,y,Q),y.onAfterRender(M,I,O,V,N,Q)}function Ji(y,I,O){I.isScene!==!0&&(I=te);const V=Mt.get(y),N=u.state.lights,Q=u.state.shadowsArray,ot=N.state.version,ft=vt.getParameters(y,N.state,Q,I,O),pt=vt.getProgramCacheKey(ft);let Rt=V.programs;V.environment=y.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(y.isMeshStandardMaterial?D:v).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Rt===void 0&&(y.addEventListener("dispose",Ct),Rt=new Map,V.programs=Rt);let wt=Rt.get(pt);if(wt!==void 0){if(V.currentProgram===wt&&V.lightsStateVersion===ot)return Oa(y,ft),wt}else ft.uniforms=vt.getUniforms(y),y.onBeforeCompile(ft,M),wt=vt.acquireProgram(ft,pt),Rt.set(pt,wt),V.uniforms=ft.uniforms;const mt=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(mt.clippingPlanes=j.uniform),Oa(y,ft),V.needsLights=Hl(y),V.lightsStateVersion=ot,V.needsLights&&(mt.ambientLightColor.value=N.state.ambient,mt.lightProbe.value=N.state.probe,mt.directionalLights.value=N.state.directional,mt.directionalLightShadows.value=N.state.directionalShadow,mt.spotLights.value=N.state.spot,mt.spotLightShadows.value=N.state.spotShadow,mt.rectAreaLights.value=N.state.rectArea,mt.ltc_1.value=N.state.rectAreaLTC1,mt.ltc_2.value=N.state.rectAreaLTC2,mt.pointLights.value=N.state.point,mt.pointLightShadows.value=N.state.pointShadow,mt.hemisphereLights.value=N.state.hemi,mt.directionalShadowMap.value=N.state.directionalShadowMap,mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,mt.spotShadowMap.value=N.state.spotShadowMap,mt.spotLightMatrix.value=N.state.spotLightMatrix,mt.spotLightMap.value=N.state.spotLightMap,mt.pointShadowMap.value=N.state.pointShadowMap,mt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=wt,V.uniformsList=null,wt}function Da(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Rr.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Oa(y,I){const O=Mt.get(y);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function zl(y,I,O,V,N){I.isScene!==!0&&(I=te),T.resetTextureUnits();const Q=I.fog,ot=V.isMeshStandardMaterial?I.environment:null,ft=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:yi,pt=(V.isMeshStandardMaterial?D:v).get(V.envMap||ot),Rt=V.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,wt=!!O.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),mt=!!O.morphAttributes.position,kt=!!O.morphAttributes.normal,Kt=!!O.morphAttributes.color;let Qt=_n;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Qt=M.toneMapping);const Se=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Zt=Se!==void 0?Se.length:0,xt=Mt.get(V),je=u.state.lights;if(tt===!0&&(gt===!0||y!==S)){const Ae=y===S&&V.id===E;j.setState(V,y,Ae)}let Ht=!1;V.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==je.state.version||xt.outputColorSpace!==ft||N.isBatchedMesh&&xt.batching===!1||!N.isBatchedMesh&&xt.batching===!0||N.isBatchedMesh&&xt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&xt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&xt.instancing===!1||!N.isInstancedMesh&&xt.instancing===!0||N.isSkinnedMesh&&xt.skinning===!1||!N.isSkinnedMesh&&xt.skinning===!0||N.isInstancedMesh&&xt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&xt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&xt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&xt.instancingMorph===!1&&N.morphTexture!==null||xt.envMap!==pt||V.fog===!0&&xt.fog!==Q||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==j.numPlanes||xt.numIntersection!==j.numIntersection)||xt.vertexAlphas!==Rt||xt.vertexTangents!==wt||xt.morphTargets!==mt||xt.morphNormals!==kt||xt.morphColors!==Kt||xt.toneMapping!==Qt||xt.morphTargetsCount!==Zt)&&(Ht=!0):(Ht=!0,xt.__version=V.version);let Pe=xt.currentProgram;Ht===!0&&(Pe=Ji(V,I,N));let qn=!1,Ee=!1,Ri=!1;const $t=Pe.getUniforms(),He=xt.uniforms;if(yt.useProgram(Pe.program)&&(qn=!0,Ee=!0,Ri=!0),V.id!==E&&(E=V.id,Ee=!0),qn||S!==y){yt.buffers.depth.getReversed()?(rt.copy(y.projectionMatrix),Vc(rt),Gc(rt),$t.setValue(P,"projectionMatrix",rt)):$t.setValue(P,"projectionMatrix",y.projectionMatrix),$t.setValue(P,"viewMatrix",y.matrixWorldInverse);const dn=$t.map.cameraPosition;dn!==void 0&&dn.setValue(P,At.setFromMatrixPosition(y.matrixWorld)),Ot.logarithmicDepthBuffer&&$t.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&$t.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Ee=!0,Ri=!0)}if(N.isSkinnedMesh){$t.setOptional(P,N,"bindMatrix"),$t.setOptional(P,N,"bindMatrixInverse");const Ae=N.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),$t.setValue(P,"boneTexture",Ae.boneTexture,T))}N.isBatchedMesh&&($t.setOptional(P,N,"batchingTexture"),$t.setValue(P,"batchingTexture",N._matricesTexture,T),$t.setOptional(P,N,"batchingIdTexture"),$t.setValue(P,"batchingIdTexture",N._indirectTexture,T),$t.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&$t.setValue(P,"batchingColorTexture",N._colorsTexture,T));const Ai=O.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&Tt.update(N,O,Pe),(Ee||xt.receiveShadow!==N.receiveShadow)&&(xt.receiveShadow=N.receiveShadow,$t.setValue(P,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(He.envMap.value=pt,He.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(He.envMapIntensity.value=I.environmentIntensity),Ee&&($t.setValue(P,"toneMappingExposure",M.toneMappingExposure),xt.needsLights&&Zl(He,Ri),Q&&V.fog===!0&&st.refreshFogUniforms(He,Q),st.refreshMaterialUniforms(He,V,k,$,u.state.transmissionRenderTarget[y.id]),Rr.upload(P,Da(xt),He,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Rr.upload(P,Da(xt),He,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&$t.setValue(P,"center",N.center),$t.setValue(P,"modelViewMatrix",N.modelViewMatrix),$t.setValue(P,"normalMatrix",N.normalMatrix),$t.setValue(P,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ae=V.uniformsGroups;for(let dn=0,fn=Ae.length;dn<fn;dn++){const Va=Ae[dn];L.update(Va,Pe),L.bind(Va,Pe)}}return Pe}function Zl(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Hl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,I,O){Mt.get(y.texture).__webglTexture=I,Mt.get(y.depthTexture).__webglTexture=O;const V=Mt.get(y);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=O===void 0,V.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const O=Mt.get(y);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,O=0){U=y,R=I,A=O;let V=!0,N=null,Q=!1,ot=!1;if(y){const pt=Mt.get(y);if(pt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(pt.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(pt.__hasExternalTextures)T.rebindTextures(y,Mt.get(y.texture).__webglTexture,Mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const mt=y.depthTexture;if(pt.__boundDepthTexture!==mt){if(mt!==null&&Mt.has(mt)&&(y.width!==mt.image.width||y.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const Rt=y.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ot=!0);const wt=Mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?N=wt[I][O]:N=wt[I],Q=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?N=Mt.get(y).__webglMultisampledFramebuffer:Array.isArray(wt)?N=wt[O]:N=wt,w.copy(y.viewport),W.copy(y.scissor),G=y.scissorTest}else w.copy(St).multiplyScalar(k).floor(),W.copy(Nt).multiplyScalar(k).floor(),G=Yt;if(yt.bindFramebuffer(P.FRAMEBUFFER,N)&&V&&yt.drawBuffers(y,N),yt.viewport(w),yt.scissor(W),yt.setScissorTest(G),Q){const pt=Mt.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,pt.__webglTexture,O)}else if(ot){const pt=Mt.get(y.texture),Rt=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,pt.__webglTexture,O||0,Rt)}E=-1},this.readRenderTargetPixels=function(y,I,O,V,N,Q,ot){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){yt.bindFramebuffer(P.FRAMEBUFFER,ft);try{const pt=y.texture,Rt=pt.format,wt=pt.type;if(!Ot.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-V&&O>=0&&O<=y.height-N&&P.readPixels(I,O,V,N,Lt.convert(Rt),Lt.convert(wt),Q)}finally{const pt=U!==null?Mt.get(U).__webglFramebuffer:null;yt.bindFramebuffer(P.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(y,I,O,V,N,Q,ot){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){const pt=y.texture,Rt=pt.format,wt=pt.type;if(!Ot.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-V&&O>=0&&O<=y.height-N){yt.bindFramebuffer(P.FRAMEBUFFER,ft);const mt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,mt),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),P.readPixels(I,O,V,N,Lt.convert(Rt),Lt.convert(wt),0);const kt=U!==null?Mt.get(U).__webglFramebuffer:null;yt.bindFramebuffer(P.FRAMEBUFFER,kt);const Kt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Oc(P,Kt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,mt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(mt),P.deleteSync(Kt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,O=0){y.isTexture!==!0&&(Pi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const V=Math.pow(2,-O),N=Math.floor(y.image.width*V),Q=Math.floor(y.image.height*V),ot=I!==null?I.x:0,ft=I!==null?I.y:0;T.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,ot,ft,N,Q),yt.unbindTexture()},this.copyTextureToTexture=function(y,I,O=null,V=null,N=0){y.isTexture!==!0&&(Pi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1],I=arguments[2],N=arguments[3]||0,O=null);let Q,ot,ft,pt,Rt,wt,mt,kt,Kt;const Qt=y.isCompressedTexture?y.mipmaps[N]:y.image;O!==null?(Q=O.max.x-O.min.x,ot=O.max.y-O.min.y,ft=O.isBox3?O.max.z-O.min.z:1,pt=O.min.x,Rt=O.min.y,wt=O.isBox3?O.min.z:0):(Q=Qt.width,ot=Qt.height,ft=Qt.depth||1,pt=0,Rt=0,wt=0),V!==null?(mt=V.x,kt=V.y,Kt=V.z):(mt=0,kt=0,Kt=0);const Se=Lt.convert(I.format),Zt=Lt.convert(I.type);let xt;I.isData3DTexture?(T.setTexture3D(I,0),xt=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(T.setTexture2DArray(I,0),xt=P.TEXTURE_2D_ARRAY):(T.setTexture2D(I,0),xt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const je=P.getParameter(P.UNPACK_ROW_LENGTH),Ht=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Pe=P.getParameter(P.UNPACK_SKIP_PIXELS),qn=P.getParameter(P.UNPACK_SKIP_ROWS),Ee=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Qt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Rt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wt);const Ri=y.isDataArrayTexture||y.isData3DTexture,$t=I.isDataArrayTexture||I.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const He=Mt.get(y),Ai=Mt.get(I),Ae=Mt.get(He.__renderTarget),dn=Mt.get(Ai.__renderTarget);yt.bindFramebuffer(P.READ_FRAMEBUFFER,Ae.__webglFramebuffer),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,dn.__webglFramebuffer);for(let fn=0;fn<ft;fn++)Ri&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.get(y).__webglTexture,N,wt+fn),y.isDepthTexture?($t&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.get(I).__webglTexture,N,Kt+fn),P.blitFramebuffer(pt,Rt,Q,ot,mt,kt,Q,ot,P.DEPTH_BUFFER_BIT,P.NEAREST)):$t?P.copyTexSubImage3D(xt,N,mt,kt,Kt+fn,pt,Rt,Q,ot):P.copyTexSubImage2D(xt,N,mt,kt,Kt+fn,pt,Rt,Q,ot);yt.bindFramebuffer(P.READ_FRAMEBUFFER,null),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else $t?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(xt,N,mt,kt,Kt,Q,ot,ft,Se,Zt,Qt.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(xt,N,mt,kt,Kt,Q,ot,ft,Se,Qt.data):P.texSubImage3D(xt,N,mt,kt,Kt,Q,ot,ft,Se,Zt,Qt):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,mt,kt,Q,ot,Se,Zt,Qt.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,mt,kt,Qt.width,Qt.height,Se,Qt.data):P.texSubImage2D(P.TEXTURE_2D,N,mt,kt,Q,ot,Se,Zt,Qt);P.pixelStorei(P.UNPACK_ROW_LENGTH,je),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ht),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pe),P.pixelStorei(P.UNPACK_SKIP_ROWS,qn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ee),N===0&&I.generateMipmaps&&P.generateMipmap(xt),yt.unbindTexture()},this.copyTextureToTexture3D=function(y,I,O=null,V=null,N=0){return y.isTexture!==!0&&(Pi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,V=arguments[1]||null,y=arguments[2],I=arguments[3],N=arguments[4]||0),Pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,O,V,N)},this.initRenderTarget=function(y){Mt.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),yt.unbindTexture()},this.resetState=function(){R=0,A=0,U=null,yt.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Bt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Bt._getUnpackColorSpace()}}class Qp extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const h=n[r],d=n[r+1]-h,m=(a-h)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new Et:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,r=[],s=[],a=[],o=new C,l=new re;for(let m=0;m<=t;m++){const g=m/t;r[m]=this.getTangentAt(g,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ge(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(ge(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Rl extends hn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Et){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*f+this.aX,c=d*f+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $p extends Rl{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ba(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,f){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,m*=h,r(a,o,d,m)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const vr=new C,gs=new ba,vs=new ba,xs=new ba;class oa extends hn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new C){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(vr.subVectors(r[0],r[1]).add(r[0]),c=vr);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(vr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=vr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),m),x=Math.pow(f.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),gs.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,x,p),vs.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,x,p),xs.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(gs.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),vs.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),xs.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(gs.calc(l),vs.calc(l),xs.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new C().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vo(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function tm(i,t){const e=1-i;return e*e*t}function em(i,t){return 2*(1-i)*i*t}function nm(i,t){return i*i*t}function Vi(i,t,e,n){return tm(i,t)+em(i,e)+nm(i,n)}function im(i,t){const e=1-i;return e*e*e*t}function rm(i,t){const e=1-i;return 3*e*e*i*t}function sm(i,t){return 3*(1-i)*i*i*t}function am(i,t){return i*i*i*t}function Gi(i,t,e,n,r){return im(i,t)+rm(i,e)+sm(i,n)+am(i,r)}class om extends hn{constructor(t=new Et,e=new Et,n=new Et,r=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Et){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Gi(t,r.x,s.x,a.x,o.x),Gi(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lm extends hn{constructor(t=new C,e=new C,n=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new C){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Gi(t,r.x,s.x,a.x,o.x),Gi(t,r.y,s.y,a.y,o.y),Gi(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cm extends hn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class um extends hn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hm extends hn{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Vi(t,r.x,s.x,a.x),Vi(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Al extends hn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Vi(t,r.x,s.x,a.x),Vi(t,r.y,s.y,a.y),Vi(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dm extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Vo(o,l.x,c.x,h.x,f.x),Vo(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Et().fromArray(r))}return this}}var fm=Object.freeze({__proto__:null,ArcCurve:$p,CatmullRomCurve3:oa,CubicBezierCurve:om,CubicBezierCurve3:lm,EllipseCurve:Rl,LineCurve:cm,LineCurve3:um,QuadraticBezierCurve:hm,QuadraticBezierCurve3:Al,SplineCurve:dm});class Ta extends Ze{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],m=[];let g=0;const x=[],p=n/2;let u=0;b(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(m,2));function b(){const M=new C,F=new C;let R=0;const A=(e-t)/n;for(let U=0;U<=s;U++){const E=[],S=U/s,w=S*(e-t)+t;for(let W=0;W<=r;W++){const G=W/r,z=G*l+o,J=Math.sin(z),Z=Math.cos(z);F.x=w*J,F.y=-S*n+p,F.z=w*Z,f.push(F.x,F.y,F.z),M.set(J,A,Z).normalize(),d.push(M.x,M.y,M.z),m.push(G,1-S),E.push(g++)}x.push(E)}for(let U=0;U<r;U++)for(let E=0;E<s;E++){const S=x[E][U],w=x[E+1][U],W=x[E+1][U+1],G=x[E][U+1];(t>0||E!==0)&&(h.push(S,w,G),R+=3),(e>0||E!==s-1)&&(h.push(w,W,G),R+=3)}c.addGroup(u,R,0),u+=R}function _(M){const F=g,R=new Et,A=new C;let U=0;const E=M===!0?t:e,S=M===!0?1:-1;for(let W=1;W<=r;W++)f.push(0,p*S,0),d.push(0,S,0),m.push(.5,.5),g++;const w=g;for(let W=0;W<=r;W++){const z=W/r*l+o,J=Math.cos(z),Z=Math.sin(z);A.x=E*Z,A.y=p*S,A.z=E*J,f.push(A.x,A.y,A.z),d.push(0,S,0),R.x=J*.5+.5,R.y=Z*.5*S+.5,m.push(R.x,R.y),g++}for(let W=0;W<r;W++){const G=F+W,z=w+W;M===!0?h.push(z,z+1,G):h.push(z+1,z,G),U+=3}c.addGroup(u,U,M===!0?1:2),u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ra extends Ta{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ra(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Aa extends Ze{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),c(n),h(),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(s.slice(),3)),this.setAttribute("uv",new le(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const _=new C,M=new C,F=new C;for(let R=0;R<e.length;R+=3)m(e[R+0],_),m(e[R+1],M),m(e[R+2],F),l(_,M,F,b)}function l(b,_,M,F){const R=F+1,A=[];for(let U=0;U<=R;U++){A[U]=[];const E=b.clone().lerp(M,U/R),S=_.clone().lerp(M,U/R),w=R-U;for(let W=0;W<=w;W++)W===0&&U===R?A[U][W]=E:A[U][W]=E.clone().lerp(S,W/w)}for(let U=0;U<R;U++)for(let E=0;E<2*(R-U)-1;E++){const S=Math.floor(E/2);E%2===0?(d(A[U][S+1]),d(A[U+1][S]),d(A[U][S])):(d(A[U][S+1]),d(A[U+1][S+1]),d(A[U+1][S]))}}function c(b){const _=new C;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(b),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function h(){const b=new C;for(let _=0;_<s.length;_+=3){b.x=s[_+0],b.y=s[_+1],b.z=s[_+2];const M=p(b)/2/Math.PI+.5,F=u(b)/Math.PI+.5;a.push(M,1-F)}g(),f()}function f(){for(let b=0;b<a.length;b+=6){const _=a[b+0],M=a[b+2],F=a[b+4],R=Math.max(_,M,F),A=Math.min(_,M,F);R>.9&&A<.1&&(_<.2&&(a[b+0]+=1),M<.2&&(a[b+2]+=1),F<.2&&(a[b+4]+=1))}}function d(b){s.push(b.x,b.y,b.z)}function m(b,_){const M=b*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){const b=new C,_=new C,M=new C,F=new C,R=new Et,A=new Et,U=new Et;for(let E=0,S=0;E<s.length;E+=9,S+=6){b.set(s[E+0],s[E+1],s[E+2]),_.set(s[E+3],s[E+4],s[E+5]),M.set(s[E+6],s[E+7],s[E+8]),R.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),U.set(a[S+4],a[S+5]),F.copy(b).add(_).add(M).divideScalar(3);const w=p(F);x(R,S+0,b,w),x(A,S+2,_,w),x(U,S+4,M,w)}}function x(b,_,M,F){F<0&&b.x===1&&(a[_]=b.x-1),M.x===0&&M.z===0&&(a[_]=F/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.vertices,t.indices,t.radius,t.details)}}class Ca extends Aa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ca(t.radius,t.detail)}}class Dr extends Ze{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new C,d=new C,m=[],g=[],x=[],p=[];for(let u=0;u<=n;u++){const b=[],_=u/n;let M=0;u===0&&a===0?M=.5/e:u===n&&l===Math.PI&&(M=-.5/e);for(let F=0;F<=e;F++){const R=F/e;f.x=-t*Math.cos(r+R*s)*Math.sin(a+_*o),f.y=t*Math.cos(a+_*o),f.z=t*Math.sin(r+R*s)*Math.sin(a+_*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),p.push(R+M,1-_),b.push(c++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<e;b++){const _=h[u][b+1],M=h[u][b],F=h[u+1][b],R=h[u+1][b+1];(u!==0||a>0)&&m.push(_,M,R),(u!==n-1||l<Math.PI)&&m.push(M,F,R)}this.setIndex(m),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ur extends Ze{constructor(t=new Al(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new Et;let h=new C;const f=[],d=[],m=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(m,2));function x(){for(let _=0;_<e;_++)p(_);p(s===!1?e:0),b(),u()}function p(_){h=t.getPointAt(_/e,h);const M=a.normals[_],F=a.binormals[_];for(let R=0;R<=r;R++){const A=R/r*Math.PI*2,U=Math.sin(A),E=-Math.cos(A);l.x=E*M.x+U*F.x,l.y=E*M.y+U*F.y,l.z=E*M.z+U*F.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function u(){for(let _=1;_<=e;_++)for(let M=1;M<=r;M++){const F=(r+1)*(_-1)+(M-1),R=(r+1)*_+(M-1),A=(r+1)*_+M,U=(r+1)*(_-1)+M;g.push(F,R,U),g.push(R,A,U)}}function b(){for(let _=0;_<=e;_++)for(let M=0;M<=r;M++)c.x=_/e,c.y=M/r,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ur(new fm[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class pm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Go(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Go();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Go(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);const ae=128,la={langtang:{minM:2476,maxM:7201,peakGrid:[63,39],b64:"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KVykWp1ZH1dHVf1Xe1qcV/1MpUTkRexG10ehSX9KLk6lTxBVCliQWwtlGXDDdo98YYG5iX+QDZfJmGWUnZRamEyYHY5SiieIlIQ5g02CtoNFgbh8SXyTd7JyM25LaIxgdFt9UwZQWVAbUYpRW1Q1Wsldy2F6ZRBt4XojgieI143MkdOS6ZPilHuVdZY3lzCYaJiRmMOZxJtenhOh7KTaqSitMbC9p2ObnYk7h8+K/35yb7RpSmZdYwpjh2NXZDVlBWbxZvhnn2jobj51cXgEfLh8/nxEf32B7YNlhz2LN4yYjN6MYo6EjcKMs4pLi9yKV0zPUeVStlUDV0hX9ljIW95eK2CtXQVbFF0lYQhfOF6aVUlMuExBS41KuEzpTf9QoFKaVTVaIl2aYJJqenCec4567IHNiMWSu5hGmR2b6aAboteYpZU8lKqSlJFpj1yP6oolhKx+VXhZcwNvimlWYm5cA1cHUiNSdlKSUn1T4VciXd9gzWXVcUl8FIDThaWKRo55kUqUbZVnlimX65cwmK2YfZnDmYWaopy4n+uiQKdDqzCu2qnHrACvXI+6i8Z8nnN6cEtogmY8ZrJlwGVRZVhmYGf4Z61oU2nSbRRzJXkleQN6ZXxLfg6B/IVXhxmIPIl7imKOJI8OjAaL8Yl0ieNDxEr+TmlUX1o2XOtc0F4eYldkGGOOZNZoYWlSZ99g3FrRU3hW4lnSVTdRtFF2UstWnVm6W2lf4GI3aRhuPHHJdbJ9cYW8jWyTn5gKniOl+6ZYoV6e2ZxqnHeaaJjUlCqOJ4hbgmR6/3P1blloLGI/X3RbY1V9U7VT31OTVC1X8VtbX9xnUXIzed1/XIS4hzCLCI80k1mWN5cjmPmX5ZgcmaeZ+pl3mvubgJ2RowqpGq2Oqrujj6wOvFWbnIdDfQJ4QXmdcclqaGrkaJ9os2caZ4lng2jIaKZphGokbBFvrHOFd9l5BHy6fuyBQIS3hVeHPYsCkE+RaI1DiB6Fc4ftPeE/tEY8TqFUJlgMWn1eCmOXZ+VqCm6jcGxwFGi2YM9co1gFW95eFl98XKRa9lgaWshbRl4YY2ZmwmkCbapvwHJCex2DuYlwji+WSJ1YoXCmJKeEpQGm+KI7n0idUpfakXuKlYa6fip2jW26aOJkEGKnXl9aVlfuVU9W0lU0WORdXWNia/Bxhnl1gDSGSonCjF2R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oqkYqS6shLB/s822nrkkvTO/YMW9yvLRqdjX08rIesOUv8O8irr4uJy1VbNGsfKu/qy+qXShJp7smbaQ94jghW+Bb3YRb39ttm0KboZuO2+Ab+9vUHAgcT1zFXXPdJh0OHbSeMNIgU4ZTUtQMlThV8Bau13tYHRmn2gebV5wIXP7eCOC8Ykqji6UaZqVnsCgV59Llp2Jz3/GfF57EXrddHpwSnFmcatx4nFFdBd5X31FgYSN5JainAqpT7RSugO1e62LpFSZEpTpk62YQZz1nMGX2I8ZiGqEaIApf2yIBou6iyWcDKA2ooymWqOMpiSnWKx7rXyv0bGSsKavI7Dkrm+vR7Nstqy5k73vwC7CE8TkxibMZ9G91cnTGc6sxL2/ab3/uTW4PLfNtrm3druLvOm2AbFXqqGn2ad/qLqWB420jDmDWnUocklvvm7obnJvuG+4b6NwIHGrcRRzwHKsc2B0oXeMSIpRTVQeVWpW8FndXGJgc2SlZ9FrSW89c+t0mXaWfUiFNoqdlPqZE6HWoyaex5TxiYuBDoE+gIF8vHelcuJxx3GrcUNy3HJMdYZ54nwLiIKWM5yVqTKy3Ljbtt+xBqPemcqaUJ5zn8uc+5sqmXGQq4l6iO6F24jakbSXo56hpyKux6zzsJGuZ651rni0GbZltyi4j7ectXi007UouO2+LMCqwpfFwsdUyfTKV83y0czXINonzqHK8sZIwJS/DrzOuLG2VrURtZ23Qb+qwnC+A7Wmr3WuAbFWqKaXXpOmjNCBqXrXdS5x72/hbxlwNHC/cIFxc3EMctxyZ3Pxc3Z1Mkk3UedWBVvIW/9bI1+3YihnwmkYboFxKXQOdth3NHtEf2qEfo7ilAygTKPgmzyUn4vuhbCGc4cdg7h8RnZ7cvBxx3Ftcllz5HPCdE95aYIBjsGX3qTkrtS3WLeusBWlj58hobOib6R1oxOhgZ/3k5iMTo/TknWWFppRoB6oq6zwt4q6LbW+tAa5RboAvAi9Fr3Svl3BgMD1v1DBYMUdyWnIVMmRxj3EfMWDxh3Jx88N0oXV8M+by67Iz8XUwvu+6rjFtee0orRPtLm3IMIHyLjCG7rMtA+xuq58oiGWtpCsi0eDgHoNdFhxEnHbcOlwLnFKcUpxNnJZc/FzbnQjdcZM+VEtV7Nct2JcYSxi8GQGaFxsxW97cnx0+XR3d5t66n1TgcaHaI3XmFihopzHlMmN1YmKjLyN1YmGhP9+xHiecwxyiXIGc2505XUQeCKA8YnAlaClMK4buky7FrJ/qK6ltqZUpramvKXQpJeiG6InoMGiu6NHpiyoLqxOsl62Mb2vv5m8Mb13vbfAh8F0xETFW8gsy+7Lt8uby8vKysgTxK+/wbpYt2y2bbiavi/EpsegyF7OC84GxrPF8MIDwM642rQXtF20M7S3tcG6OsA3x+zHM78huRe0nKqxnpGYqpLbiLp+Fnfkc0Nyx3HicVhx1XGJcoNz3XTldbV2cXhUU5pVIVthXqpk+GelZ1pqHWubbW1yinT5dOt0KnbSeOJ8i4EehbOK4ZKinEmftZnvkqeOOpB6k2uR3IrFhYyDAoX1eXty8XMjdVx5ZHpEf4qMb5mwqSC3fbxjvuq4rrAirtWsSqz3q4ep76pJqkqsArPvtWOz4bUEt926y7+kwxTGc8KHwc7DQ8Nvx6jJH81mz8jRpdC+zFTJ68UZw8S+srictVSxgqyOqvGshrQauIW9ZMDCx3LNWcZExdTCor/wt1200rMJtPyz/LPNtvG5lL8HyELBbrqXuPOwfqYSn2CXwoyog3R+y3ladepysnIocvBxUXLrdIV3CXlPebN/vlYMWj5d0WBzZK1oQGy/cL9wc3FgdJN3hXc+dVp1w3bvem5/OYO6i6KRI5iPn5WekZi5lNyVK5sNl+CQn4uRi6OTFY2xe3h5OnqWfV99xYVBkdKbjajBut++A8Alv+y83brNtnO3ZbfHt1G4ubfcuHu4m8DAw/W/UcMyyvzLbM56zqzEnsTfyfbMYdLm1aLXhtd+1DrLDcVdwTm+8ruPt+CzTLCkq9mncKZOp3Ss66++tGC608CLx/TK5MZmxBe/nbdPtOCzjbN/szmzcbNWtRO5GMGGv/K7L7kkshipX6A+mGKOH4dig25/hnnXdd10bnQUc1N0Anj1eUR/woH8heFXaF3eXnJizWU+aEdtPnVUdpJ1d3fteGR6CHfddEx1K3jqfRWClohhjCCUTpw7nwqe/J3NniGhM5xFlwSUTJi9nAeYeoiQfpB+i4HohkaZUaB5qYC1or+4wqzE48TiwqPBjcD1v06/2b9CwYnFr8oixmLJEc2czSfOkdHK1bbWktMeyyvJS9Eo2+vd3t/X3vbZDdKfxtm/P72muii4bLbgsw2vgKr7psmjPqOEpfyo5K69shq4Cb+gyO7LkshXws64QbRxsx6zvbKvsiSyabKUtOW7UMErvuq4ArNcp3Ofi5mNkJ+L94h3ggR8OnrSeEB3onkNf62AfYFrhj2L3479V3VdhmEnZShn7Gm2bXZ1ZHrSeEh6NHs8fDN5KnZMdbZ4IX4OgYaEQ4hdkbuY9ZxgopKlaaWMpuWl2p6jnqOeFKPQmUGG4IVchJWGE5b9qh2xzrg7wv7CqsLex2LJ7MfKyFTJBsYFxFjEP8hBzBrQntGK0lTUadXg1iXXiduP2hDWgc+J0P/couL25Hnkdt5418DQjMnUwjO/Wrs8txG1aLAZq/umN6TpoCCfGaA2otGmc6pasBq4K745yZzNU8eLvOG1cbO9slyyCLJisSqxMrLFtfu+0r7btiOwJqkvoaKcpZXukDeM84L+fI98eXtQe6V/f4V7ipiMVZDWlhecgVmtXXljYGdvae1rO28pdCZ7eXtzfPB8X315e5t6gHqIfTCAyoLFhduIhI2jk2ObfaR6q22tg67xrH+ozKl4p06n6aBvjJGYQpPjiZiXi7G5t3u40LzmvaK/Z8bozO/N8M9Z0cfPQMqFyknN/c2X0F3X59ct2BfXe9vx3BTefN1s2Q3djeOR6XXpIunn4jXbMtX40L3KbsXTwGG8SLVnrqqqAaZmoRKfsJwJnBecH53NnrujBKqEsM220r61yXDJm8BtuF20k7LRsTix87CusCqx0bGBtzC7tbHWro+sOaayoKGaZZTJjR2Dsn3OfQx9W4LuhfiKMo9flcOZl6JxqFJc2WGrZhtp32vobpdyrXUSfON+KX/jfvF+IX6yfc9/CIKUhF2GeojPitCMbZWAncOmu7DhtU+0P7ANr0+0/LOdrOuvrKFsq2Ooc5Rpmt6vo7b1tP63z7r6vNbGls4q1P3YDNvV3B/Yjthk2B/YV9pZ3G7dLto72Jjd3+Er4Tnh3t/l69PwuPDG8K3pheCj2bvTgM3sxzbFhr+zulWznKqupZCh/J1vmRWYMJhgl7uYK5s6nbujT6kHsGS1fr4HyAbGOLzTteayVLE/sN6v3q/er5KwcbPbtuSuG68jsPWnu6MKni+WhI2GhIOAs3/Bf7+IQ5VHm0WXJp7epLCpw7FwYM9nRmvzaiVusnKtddh3iH0jghWC3oHkgEyA638Igq+ESYediZ+L0Ix+jiCU4Z22pkWveLRRuO+1cLGwtJ65lLTWuQiy0K+FshenvKVwseayqrUbuuy8h8G9yqvP/dgl4mbnAOqQ5xnmc+VK58DmJuSU4gHhr+IE5bLm9uRr5LnnC/G69Ev0UfMa6Lve09im0svKgsSvvy+5crW6rmOofaRJn+WYpZVllLiS/ZL3k0WX1pYXnGGkt6j+rIe2g8bRySzArLlxsw+xfK83r1OvKa+KrzixxLN+sTysV6pwpq2ja558l+WNJ4ich8yGc4ftji6fg6NSotGm1awjsBu6smXtazRwEW+Pca11w3YfetV+AoWHhqmFeIQVgpmBMoR5humIDozljUCPY5Alka2YZ6N5qbqugbdFui+5aLv5upO90r6qtUqssKlKrH+z27YXtL+2Hb7iwvrHQs4/08Db0+N47ULxa+/L7WPut+6a7KDrYeop6iXvO/D07VTsoOtx7qb1mfe09drvnOU+3qjWUtAjyPW/WbkJtMKvgKoqpM2eOZtllGuRp44VjWKOAY5VkCaTPJSNnbOiV6ratATC+sdXwoW9sLS0r7qug67IrpGuIq7yroqvyK4TrHGokqXyoy6f4Ju5lGKOVZAKkU+R+JVCngCkvqnWrlyy+LhDw/dlP2qAb3Nxz3SoeJV7pH3ygOCFyIvcituINIZchJuFsojPigeNFo9BkbiS95NflUGc0KSIq7WxX7igvV3BoL1wvhHAvrQHsAmnl61guuW73LiRu2bEkshyzabS4dgc3yfmXO3R7Prql+g859rkUeat6Tns0u6d8g315PTO8zH2tfeG+gj4RPMi6SzjfN1i1EjL/sKEu/SyIq4LqzSpYKK1mV+VM5H5jLmJv4irifeIYIrejKeOkJZzn+6oKrFvvMfEDcXnv461Wa6zrQauMK7OrRqtdKxQq46qeqvyroepSKgrptygqJv5l5mZvZzOldaWsqAorYSwsrg+u7HBecxuXPtg1WaMawRxmXY1fWGB2YR0iRaP0pC8jfKLkIkZiLmJYYxUjvyQIJQvlnyXz5ckmnmei6SPrKq1vL23wIDA57/Svqy5l7i3tWG87b6xwSDCGsURzZ3PtdR/1ordj+WD6eLl3+Ht4YPeS9xt2+PcW+At5THrQvGY9WP5+/lK/TX+7vmr8sLqouKD3kHXEc2Iw6C9c7fkroankaNao/CfyZgRkmGMNYiNhdmEr4TZhCaGXohhjBGSXJx2peSuNLZou4y+fr5KtxuvNq1ErVKtuazNq5yqh6k6qB6omK8ftfmvWKweqEyj/6Eoot6kPaHpoGupf7NCtly/FcixzoXV5FC+VkxdSGIbaehuunPAfYeGP41+jkmSiJPgkO2Oro0Vjd+OJZEmk7qWI5gAmfSahpwmnsCgh6n6sXa7vb+uvfzAesNWwMS+YMXZynbIuc+s0W3QY9Zl2iDaz91y4y/nm+PG2uDWf9YP1MjR8tF31YHa0N815lztXvEN9e/7//+C/6b17ex44lLd59cU0ZjHR76XuJOy/aqto2WfHJkvlqOTYo7NiJqDmYEOgUyArYAcgYSCdIntjgCZn6NmrBuvcbPvtc+6Ibl2sPGsx6w8rLKr1KqwqRCoD6aapo6q4LMStxCzFK6drDWry6ddqWasIKzXsBG1RbrxxGfRd9Wk279N+VEKWIpcamGtaB9v7HbHfvyFeoiZjhqVS5bNk0KT75LNk1iUQ5Wml8mYP5qamyydEp/HoXGo+a+6uXnBmr6bwHPCCsGPwqLMktMI1UHXXdc02Q7fmd8/4BHjJ+ZA4rfYFNFBzO7LtcnCxwbGXcyo1hPcF+IN6N/s/fDl9nn8Zf3y9G7o+t8E2sPUwNDrxQ26xLP3q5qmbaBbmpWTRo50iWuG34Olf6x+X30SfGt7BHxtfVyEPYvWlmueMKPMqZetdrDptoq6k7LxrDys26sZqzuq7qiapuykrqU6qJethrTxuQu2i7FasACvY7PBulq7Vb4uwqbH285+1NLW29m6UCNSsFY1WopcVmKYaSdw+naQfreFKo7hksCV15h9mQia7ZtcnAiaAJnlmGmajJtyneie8qMZq7uwIbnMwfHEwcV8xePEP8hyzTLVw9SZ1HjXFN4P4U3glOLL4hfiudqdz5HGj8JXwjTBk71bvVnG89PU2m7dauKf6aLvzvMW+BD5ifMa6H/j4toq1KXQqsLNtrqufqakoHGbUZWokBSLvYSLgZB+nXxCe9l5p3YjdWh15nf5f4CHH5JSl9OdpKAUo0mqHrPOuFa15K4TrBmrgKqiqa+n+qQcpDekOaZrqeSuSrdMu4K5p7xMu06/nsT4xRfKC86D0YTT89MB1M7Q31MWVOdWo1jiWbtdf2KmaQxyt3qZgVmLVpKPlEyYopw9oWGkaaXdorGe+5txmwOdO5/joamoB7BCtjC7ZcJ+yQrMJsz6x9bG7ssH02HSyNGw1/jbiduH2dvZPNoY2ZLTkMR9vMG6l7gEt6O2B7uexFLQA9hD2wDfquUr7LHxfPX691jyI+vb5nTcmdQuzxe/MrLgqPCftZnvklSOYYzih8qCun7Nexd50XbxcwtwA2/bcGdzBX7Dg1OMv5PPl8OZj59qp8iuMbDtsdGxwa2qqqKpqaiMplOkraNno8mjYqZBqbSvXrYCvpfF5MbsxxfKhcrhzcbNXMrCx3DJ2sxNyB9XUFhRWopcUlz/W3dfuGQkbDh26n06hXyMiJPQmRieg6O2puenjqrfplOkDqR9pCumlamKr/C3ab1ywKbHH83wz3TPzMxAyhnOutFh0tDS2NVV1nDUnc9S0D/TtNI1ztK+gLWitDKyHbEssxO5nMKFytfT4dgT3B3he+iv7XvzG/UZ8afs6uj63+/Ys9AxvcGtnqHJmCWR1Yn2hnGF0IHjfgp7vHdUdkNyQW4IbOVqXGzpcFd8yYDMhoSNY5CrlFadR6ZWqAmn6KnHrHSspKu+qQKo5aV9pFqjl6IooviiaaWOqimvSrdBv1/DucQwxi/ENsWPwjm+fbzmvczBxcCsW7JaMF0jXytgvF85YEJjkGaGbtN6s3/uhVqNUJNSlyubSJ3Fne2mZqxeq6qqBKrcrSqx1LfnvwXERsnjzzHTcNTz0wfTANKE0wfT6tC4zdTNH82vyg7HTcikzo7NTMZ2ux2xwa0grFis37H1tLO6/MBPzDjU9ddu3UnlHOor7Afr8+v66tXnG90m2ZjS5r3oqdOdGZO0jJaIa4ZUg4OAzn3Fepl2Z3OUblpqBmh7Z1NpJW61dvd9K4OwhnWLQZF9mZagNaCIoLmhMKNppSSnr6fZpwGmKqRuohOhlqDcoJ+jjqoUriyzX7jit9S36rjwt6S4PbkftfSy+rGqtYC1Rl4jX8pfoWE6Ymtj/GJdY4JmAGl7cjN5DX+UhDWI142+kduTUpfZnGOogKo0qY2o+rFzt0e++MXtyXXR09j92LDXcdb61HDUutGkztjIX8PHxNvD9sHEvvW/U8e0x0LBGrjHrO6orqUyp3utoLDntDe66MGOzTLVC9lv36rlSeUK5Pzj8OWF4ITT69LhzZS/JKfzmNiPRIqOhzqFTYJSf7h8LHr5dI5vHWvxZi9mZmYwaK5qwHJCewaAD4MEhziO1JTDmfmXUpcImlWbjJsDnQSfYKJMo4KhgZ/angSfJ6BSou6oKrFWtR+1TLAwriit46xLrjCuJqmopsOmsKmNqNBeuGRPY1dkGWWIZS9m6WUUaHBr2m66cyV5UHulf5WG3IqSjY6S1pYunwCk5aWoppGuWLf8wBDLuM301UTd29nJ0zbQ1M0fzXDJSsSMvvm6ALx2u5e4VrUMuOe/CsHBut+xHqifoxmg1aFNpdSqcbPOuEe++se5zyPTlNdS3f/cDd0b3QDfGtsN0mvMDsdHviOlnZQIj9uIf4UrgyKAe33Fend3GnLuba5q92XbZSFmE2ZgZ7hvaXfZeVF9p4GjhvKLmY4PjlOMaY9PkdOS95MVmO2b6J5Cng+bjJtknVGg1aHSqEaxQLLxrOipw6ZFpPKjWqPxoeKfEp+Bn/CfzqDfYP9mbmeJZ/hnn2gpaRtpB2osbXpwBnN2dbx3SXyMgy6JtIynjrCRgpb7m9Whs6Ikp2u0R74yytzQldnU2sLSocpZxkPDh8G2vs+69raUtEezvrTfsSmvR7MTuQS3AbFsq2ahmpsWmtmc3KDLpwewnbdVvrnE5MavyurQ0dTD1FvV/Na/2ajWS9GoydvDPbnSqLiSwozvh8uE0IGefuh7T3k4duJx0m28alhmiGUTZmxlzWW1az1z13WTd7F7WoB4hPyF/IUYhl2G1IfkizqQsZMNl+yZmJdllGCXhpzUn9aj2qm+qZKlI6XJo0OgzZ4XnPqZFpqnmaGa0JkImr2cLWQBa8tsd2yaawFr32sIbHds9W6QczB1fHTedi58aYJDiHaN9I8Rkv6UFZhWnT6jV6pxsyK7PcSWzszXJNWHzMHFm8B8uvi4Erf8s66wD7GJrcesxqpPqW+v9LLVrIanX6BamDaVPZaam/egy6emr9q0+br6vMu/rMRcypXM4c2rz+TRu9Mk1avPmsmbwPC3sKkMlRWNC4gQhdCBwH0serx3B3XwcU9uTWq5ZgtlzWVDZQtlFGjtay5x/3Mcdtl5ln3/fp5+DX9ogNGD74d1i1mLTY0lkYWPXI+4kt6ZgZ99pNil/p8znBieF5zKmvqZE5ZDlbmUQ5V1lkuWRZcymp1mcW1YcV9yXnAKbqJuT27abpZw5HNgdBV1FndQe5GACob4irWOnJIVmPSaTpy5oSerQLINupzCAsvz0xXTY8sTxGi7VrXtsQaut6jaqQqptKRhpCGh3KBIqJyqkaOpnSOYJZFxkBCQ3JXDmcmjX61wsZuz2rTrunnB/8TyxsjG3sdcyszMe9DGze3J6MHwtzKn85h3j8eJ2oYPg219eHmFd/l0e3JCcH9tTWp6ZWVkuGRlZLJl8mgybFdvj3GYdIt2OHY4dpR5DH0qgTmDK4MehUiF/Yd7ip+LyY0vlsWd2p7gm8CV6pWClnuVDJXbkx+S/JD8kI6SlZPpk/6UdpihbBlwpnQWd3Vz1XGXcnNx23D9bxpy3XS1dix6e31agK+EuIdLi1CTrZjSm7ed96DZp/OwTLufxtrMutHbzjnJIMJRuPitvqm7o52fv54Cm5iXn5ihmruYcZvin1uaZZSNkGGMiozjif6J9I/7mzGlzKkurFKtabLrupvAO8JCwWq/ecGsxCLGAck5yV/Dl7hrqQqe4JCfi/aG7IEvfmt7Vnp/eGh1X3Ifb8lqdGZCYxJklWNPY3plRGfCaVVt729scFBwEnFidnJ6m3rUfD1+1X6RgB2DlYaqhwWJaY9nlp+Yo5PLj7aQH5JPkQqRk49GjqCN346okAqRhpERki+WsnKecyR3a3vmd8J0pnRudM5yPHGrcf9zoXfUfK2AYYFOhDWIBouGkWiY55wnoDekv6uFsrW8W8iAzcvKrsgixr2/07WOqhSjopzDmeKUa5FVkMuPEpQ2lRKUBpYMleaP5Iv9h/yF9YT8hc+Kc5TUn9ajD6YYqVislLTUt8C4X7hRuEW6DbqEu1u9IMLhwDW48awMoKqSwoxJh9iC+X/wfM17M3l9dhRzuG9ia1JnH2TuYl1jHmKNYuhjLWR7Z5JqTWqMa2psSnH5dKxzhXeaeJR5a3vPf1uC5oJqhAuIuYmKjFOMz4pvjHaNwoygjfmMZ4spjD+NtY5Oj/SPhpFYlPVuwHIreIp/V3yud5l2w3bPdIly+HKSdZp4wH2Egr2EGIbHiWeLmIwply+hHqi5rMqykLnnvzbF1ML1v/DCW725t+6zbKvVoaibfJfFkk6Pro3ljVWQ0pBjkAKQtpAbjEOIjIPdf4OAmYGpheCQ4JubnRmg8qMYqQew17A/sO2xHbGTskywb68es9O1wLgztAytUqKllVWQZomugjCANn9tfWp5VHaQc45vamx7Z2xlCmObYqli52FOYR5it2JJZHNkdGZ1aOZs9W6AbwRxwHKYdKZ0lHmPfHt9S35MgCKAU4EJhE+GC4jNiL+IdIkTif6JMIvki1qNRo61jjqQZJLeaeFvOXhpgkR/lHnYdwJ4aXcHdfFzw3aVe4J+jIOAh1iJyIvXjU2NN5eKotSqyrLcuAK+2b8iu1a1o7YHu3i0u7ClrU6n9p59mRKUd49ojQ6MYYzXjYSNvI0jjZiMPImEgsZ8NHsSfHt9639SiviVdpgrmwSfKqQnq5yqjKZdqaKpYqbRppKlc6p0rLquIq7Lp26idpgKkXqIMoTQgbN/S35eex14mHSIcMts5GhDZeJkZGKUYWphD2BNXx1g32BqYRhjQ2W6aKBqw2sQbR9v93CIcG1y+nY5eDl4anmxe9x9IoBNgoyDr4RWhamF9oZeiDyJe4pniwCM3oxwjlWQ3mnNcKh4DoHcfal6XHl/eHd313XddG92BX6Mg3+FkImKjNGOxJD8kBuXgqGAqg+xSredt760B7D3qyCswq+Kr16r+6Zno7GeKZcekNCMN4wAjEuLuoufiwyKpIiwhmmC6HvKd0B35nfYd5t6U4EOjLCRQ5WtmIGfy6e8pROhAKTrojufO59QnsafU6Q0qdqpKqSNnV+V141miQqGD4N1gJB+nXz1eT51j3HEbU1qWGbGZPZj52HEYNhffV4qXm9eK2BqYRBi8GTjZvhn+WmaawJtm23Fb/hyRXT/c6Z0rnfLeTx8WH6RgNiC84J+g8WF2oYLiL+I94gaijCLWo0kjzxmCGzldQV+DH3Ne2R6CXl9diN1+XTDdrh8CYSzip+Lp44lkdqRqpKXlamdHaZYrLqu8q4fqvyoyqV9pBCof6jKpaqfxZ1Qnp+YCpFUjjeMn4vqiomKUopRiL2ETIBJfHh5WnVFdKZ0wnQCeLh8qIMOjNKQ6ZMdm1qjpKD1nMafsZ4Cm6aXgpbHlK6a8qO0pP+hypqIk0aORIqjhiuDyYA2f85903ocdihyeW6Ma/JoBWaVY11jeGG8XzhedV18XOtchV9NX/Nf2WGjY+ll+GfkaKBqcW07b+9vXnBfcqZ07HZceYF8PoAxgsKB+oGMg/WE4IWVhleHv4hgim+MHY40Y51m4W/teNx9x36xe3d3u3U+det0p3Zkesd+x4ntjjORXpNsk4+UPZZ3moqiZaq3qAKoMaUNotqey5zTnQqejJs9ltSUOJnKmiGWsJGSjUuLs4rViViJ74eog+p9Onpbd+Rz6nLAcnVz2He6foSCeohOj6OTHZt0oXicYJccmXaY8JRdkZmOMY0QkFSZ2p4NohGdwZfvkhuMeYZ+gyqBrYBgfxh7tXZncydwtm1+aylpXmU0Y71hOWDeXvlculsvW7NcfV51XRxeR2BPYy1k6WWDaNdqQGyhbBhuv3AGc2h1rneVe6x+YH9EfwaAU4HYgmSFXYZPhguIbYopjKCNjmSKaS1vn3XUfJd/73rednZ1FXUBdjl4Vnr+fA+Db4yxk6WVZ5aml/mXcp0jpcOmPaEgnwqetZkMlUOVQ5Xpk6KRQI/Yj6qSz5eylcSQAY4pjG2K94gZiEGGp4Gxe1x5dnUacuJxq3GPceV1bX0/go6H7Y48lOyZM5zBlzuSR5DYj8mNBosFibKIGortjmCXgJ3antiadZa2kIiIlIQ/gruABoBJfB14MHUaci1vOm1NaihnXmWxY5pgtF7yXSFbzlp7WnVdaF2YXLReMmHRYNpjdGY+aG9pHWtVbZxvIHFLc2J2ZHrTes17UHvGfGZ+hIKjhtqGvoYuidyKdYuKjENlvGr3cDh2bX2RgDx8vHfXdRV1oXdre0N9E35NguKH5o+elkaZHZuwnHyiaaVtoHaYNpUSlJuQXI/8kIWPWo18jMKMD46gjV2RJZGEjTeMZ4vqigWJf4WSgm5/GHvEeHx0lnC4bxlw02/Wc6N7u4Afh9GOZJISlEKTApBhjDaKeogmhh6Ft4X8hUOINopGjiGWhZrSm7SX9ZF1i5WGQIQIghyBbX1PebV2G3RKcYZu+2uKaaVnNmdCY/peFF2sWwxaxllZW2hdG1xTXtBefV6hYbFjuGSrZjdpvGrmbNNvWXM4dux2tXbteHd3F3l7fdCBlISwhuiGxodmibmJ8oswaMNro3Ayd55+P4KWfZR5mnhVeId7933jfkyAP4IEh4qMIJQ/mmueX6AFoc6gOZsMlZyScZBwjjiOcI7ejGCKv4jjiWeL3IpFjMiL/onViZ2J6Yi4h36DYYEpf3l7K3gHddNvY21dbnluWHGBfG+B4ocwizCLdo0HjdWJuIcLiO2DAIE4gVOBAYNdhl6IjodUjkOV15iQlumTF5GCiQqG+4PegfF+Qnt/eKd2z3SjcBhuXGz7a4ppXmWMYP9bZltJWaNYxll8XONbKl44Xs9cU17RYNNiGWWrZn1pEG3Fb5dyl3KdcVN0I3U3dKF3gXyRgLyCEIW9hMWFH4cFiWGMcW0ucTZyCnsigAGD+X9ffb971HxSf/qBD4MBgx2DJoYAjEGRYJftm5mZaJjvnTKa6pXpk2OQw44djimM/om4h2uGlYaqh46HLYdzhy6JBYmdiRmIsIaogwaApH0sejJ3N3RPbkBsY20ebe9vtnjVfiWE34Pfg9qGjodAhAiCXIQVgoF8X30TfiKA84Jig8WFQYbDjkKTDJUjmNaW/JCKjM+KXYYxgg1/j3yAeiR3dXM0cF1uf21Ga9tlamFLW1FabFi3VwRZrFsFW6xbn13dXNddjGD8YuBiLWR7ZzFq+2tVbUdtLW+dcQRxNnKndlB7pX8qgXeC84KvhBCFO4eJirZtwnSTd+p99YSch9iCTIAGgGmCoIKpheCFtoPRg8yGz4pHkG2VDZcElCaTtZlqnIqXgZS2kIyOiowuiQSHHoXfgx2DK4N3goSCToQ2ikSKdIm4h2uGy4Slf+96aXc3dGxwamwPaxZsfmv0bLJy2HeHe0l8e33df5KCpX9RfRSADH3geNl5Onroe9R8BX59gVSDjoeKjIaR4pRRlbKVzZNijrOKGYgXhEWBin+WfQN6tHRQcFxsAGlsZTlgnVmPWUhXhlYmWKRa4lk1WoJb3VwAXotehV9iYFxhGGOyZc9nrWgda6ltJW4lblhxDnbTep5+in/ygGGBW4IxgpqDzIZHbRV1onnVfumIFIubheaCcIOhhFyEZYdBhheE7oULiDyJaI0mk0qUQZFkkqyWMpocmfCUY5DrjEqJh4btg02CdYBgf3R+6n3Ofd6B94i4h+eEHYNUg9GDs3/GfGl3enBxbU1q8mjkaMhodWjzalBw5HNodYx4t3pmfmR6hXcfet52THU4drt1VHZHeHh5zXtTgbaDjYVtijeMvI3EkBCQk49GjgKQYYyWiOiGaoSQfvt4DXS+bjFqL2ZNX49Z21hPVsRV9VadWfZYGlovWzZcwVy7Xexeyl/EYK9hJmPwZHRmN2mEagFrcW3NcKZ0F3nGfFh+z3/WgCKA638OgTKEd2zPdKN7Zn4thymMEodqhDKEmoN/hduIE4kZiC6JiYoii5mOJZEPjsOOO5LIll+V+JU8lMuPz4o0hnCDwX9LfiB8qXqGeQl5eHn3fQGDyYANf5Z9DoGXfy58ZHodeDRwHWsUaOlluGRlZOhj6GOuajNuNnIHdcN2T3nPdMBynnMMcoFxv3ALcC5xX3IbdAJ4E35vgbaDa4Zzh0mHgIc7hzaK3Ir0jy2SHY41iO6FZn7mdzJ3x3G1a/FmP19eWF5YcVX0VKhVJlhkV4FZyFv/WxRd110xX3BghmEQYkJjqmT3ZW5nb2nLbCdwIXNUdud5SXxffdx9rH4hfhN+RH+0gftr6nKxe91/XIRvjL+I/IUeha+EV4eKjNGOB42YjOCQJZElke2OGorQjHGQcZCnjpmOMo+6i9SHCYTkgI98lHnKd+V163RgdHZ1VnqyfaN7eHnEeDR7Vnq7dYp083WWcHds3GejY6FhmmCuX+xejWKYaZtt/W82cjd0jm/ubYZuGG7mbKFsHWvlaoVsvm7rdKl6e30wgLaD2IIGgLN/OIFNgqOGg4vgkHCOgom3hW19onkQePdwhWzxZs9ct1cKWIVUmVP0VIBX0lXvVw1cU14dYMthvmMnZSFm6WWIZVhmZ2iSaixt6XBFdIV3sHnFenl7j3xzfBJ86HuBfG19pX8lbkNyR3gZfWKDrIvjiXOHsIbMhkuL0pBCk/yQJZGVk4aR9I83jHOHE4k3jAaLLonMhiyF84LygJ+AkH5kegd1g3MacgtwSW88ca11jHgcdshz1nNNd591jm9yb75uK2toaolnEGJaXRtc91pfWs5a/GIMZ59od2zEbRVq+GfkaKBqBmj/ZsBluGR6ZStrl3Jidlx5ln01fcp3b3YWdx96931TgfWEH4dsiJeKsIbVfu14B3Wwbrpo5l8uWe9XxVcIVNdS2FQfV9hUXVYFW2JgbGVhaclq7Wu2bRBtAWsBazptV29Rcp91anlyekF5QXkDev164XpIesV6GHv2ey9+m22PcXZ1XHn/fl2GkIleiBKHSomTj0qUmJfWlm6XIJSSjS6JQISLgYaEQ4i/iBiGnn4gfP16xHhker55tXYZcIZuf23XahVq2WwZcD1zLW8sbc1wWnVmcd9rvGqrZitgi17RYCpe/Vf7VQlW4FVHVXRbAWDnYQtldGY8ZvZjo2PBZ5Zlr2HEYAhfU142Z1BwQ3IpdJl2l3Ieba9s7m02ciR3vnmyfZ18q3yZgbaDE36Fd3Vzm20FZoNdIFmAV3JXYlN2UnFVsFb6U39VPVvTYqVnvWyxcKNwv3Cqb4Bv23DAcqZ0fXZVeBF6JXlpd013vHdjePR35ndxeIZ5/Xo1feZs6G4Mcsl1xXrygDSGSoncivWR1pbmmrCcH51jm4GUYYybhSF+a3vGfLSB2II1fSp2FHMMcttw+HJ1cxt0cGspaT5oSmbbZfhn32s4a1JnN2l/bcxu42YeYkNloWGcVzlVQVZdVj5S/1D5Uc9R/1BwUwNXDFr5XBxe32A5YFNe6GNCYz5dwFr2WI9ZHmKYaWtuSW9ObMlq8WZKZpdn0GkDb/hy3naZdkx1tXajewR8CHfHcQJtE2YxX1ZX+1UXVjhTPlKaVfRUrVK8VGZbT2OzZ9ls93DabtlsxG2jcPhykHMGc9xy/3MpdBt0U3RgdDd0RXTxc1p1TXfZeYd7e313bB9vKHKKdNJ46n3egf2HtY60lx+dA52nmT6YgZTJjUmHkYDteIt2JHdee/d9tnidcctshGr5aRZsH2/Fb2doNWWbYu1gJWGUYcBlCmPMY/BkkGZ5Yz1bwFrcWmVZqFVKTtVOwE/GTN9IJEkKS0FLqUouTilRu1JwU5RWZFc6V2Bcg13gVQdSilEyVDZc0WBdY/FmUmd5Y2JgVWA6YoFks2doatJtlnADb9VxRnbYd6d2WHFObKRlIl3KVH1TTVStUkxS5lRaUs9RVVWkWgFgIWY4a/RsaGrWaDhr4G1dbjNu5mz0bCVuJW6ibrhv029Jb79wG3RAd5R5eXudfCF+XGzpcM90HHZ/eLh8yYAmhsKMEpSfmNuTTo/JjfiKCobkgAl51nM2ctxyaHUyd+pytm3yaAVmXmWrZj9qRmuJZ6FhyV1ZW89cn12fXQ5eTmHeXsJeZVlGU5lTfFGQUOFMTUdcSWJI40N/P3I/BEFKQ5dEg0UJSSxKlEtYTo9OWE42TyhPf0oCSjtM2021U+FXNFhZW8pfI18FW51Zz1w5YANiGGNYZg5pTWrFb51xpXI9cwtwI2oYY/5ZQFR8UXBTPlI+UrVTyFBhUYxVpFpNX1FlZ2jBZ9tlNmflahVq5GiRaJdnFGjWaBRoU2nXahZsA289cxZ3JXn1ec17e33Bf5RuWHHldR96NHsZffKA6Ibtjs2TLpR2jf2H54Qrg0iFOIGwef5xk2wKblFyFHOIcLBuyGh/YvNfF2FDZdRklWMOXjVaxVcEWcZZ9lgnWupa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"},annapurna:{minM:-385,maxM:7496,peakGrid:[103,24],b64:"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O2ceZRliVF5sXRBdPlvMW49e7F/DaQZqcmrkbWZxa3TGdFZ2g3hQfBaBvYbPh3KGdoj0iZCJc4vBjc2Pu5NxmGyaT5xxmHOLnJSDlJOGFI6hl4+bXZsjm4CcmJuelQKbuaAhoy6m16fiqXeuC656q4WoxKZppn2ozqICm5+fkqHMoXmh0Z9AndCaQ5pkmteZhZVjh6WLDZPokPKRmJJjkDORz5DcjsOOuY0IjBWKJInBiFaJ1YoHi9iHpIZyhn+EQYKIdlFvB2+ZctF6S35mfyN6vnSZcjR2733UgDqH/oUgguaBV4BJfc95BHe2efF5Enp2etF1HXJQbhBr0mhrZuJjU2LLX95cOFwEW2Zafl5dYy9lFWnnaiRthXCEdKB2cngjekR6P3zrf5KF04lgiu6KCIwIjJaM/Y4Lko+Wr5pPnNWd2pv4kFOVwpe8iquKY5UHmTeYy5d1mtCaBpSbmO6dZJ+LohylI6kTrneuAa0MqsymTKQYowKg9ZyRnF+chJ4anxiewZs5mcSY5ZiDmY+bRI3/gfeGSX28fGmKrpCgjVaJs4o5i++Lo4qIiW+Ed4R8gmaEooWDeIN4QIEngQSASX2vdXZxvXiMfSF+132BdwVzWnTxeSt/gIDrf1N+nn7Bf/N/n3rUd0J5P3xQfA99731pc/hvTGyzaepntGXiY+xfMV1yXMpaRVptXqtgvGX6Z+VpmW1ib+Zz1HfHeS58D32cfSt/ioF/hB6KXY00jTSN6402ju6PJpM9lw+ZtZmUmTqaTpf5lS2Xj5ZqlHyVK5ZElj2XOZmxm3eXTpfBm96dTJ8tpeupi6vNq4CqE6lHpjqj26AxnpGc+pq+mWSaI5sbm7WZb5faluqWC5e1mXSVn4NGgFJ0x2t8dJV5I3+TgReGx4criO6K9IT/c2ZxRHGicnd2sGyLavh0X3t+ejJ+Z4Agfdh+QX0VfFh8rHhvdh94I3qzfFx+iHu4epR9lH1sfkx6gXdMesh+RH9/f0CBFnMIcBxtdGu7aRFnDGSVXYlbcFsJWZdeK2NBYZFkd2gwb2xwuXEkdsl6F308f/t/cIAogoaDJ4bsifqMw45AjzGQVJGYkueUI5YSltqWx5WoloaWvZR5kxKWKZUVk2CTMZW4lv2XapmAl7iWtZnim5ib9aGNqEOolKd5phSlCKN5oWSfkZx2m+eZ5ZgumB6Y9JcLl+iVpJTtkwSTQJQAlWWIMIYMgI9xrGX6YqtpFXcegfqDE4QfhqN8XGcKY4djQWaQaNFnrGpGcpp36HndfOiCtoLegd99n3qoevV3aHe2eY96dHlfe8d5Bniad0Z7LnwufBJ6m3yqgCCCY4L6g7tybHDTbQhrXGdmYyteC1qWWUpY6Vk4YR1kemVFaIVrnG8QdPh0bHl7fah/+IINhamE0oSQieeL4o0OjwGRb5L0kqSUjZVAlE2SJJL6ka+RoJKOkZ2Q1Y/okHqPj40djnqPRZIGlDGVCJXglf2XdpvUnNugeKXbpbCkCqScoqmgMZ7Sm/GaXJqDmauYJphnlwOX2JW7k2aSfZHejx2OPI0TjbGNYY/IjMSFhXCNcNN74X7ogjGC7IDLgPdzvGU3Zc9mXGegaDZ3533xfm5/2H5kg3V+bH43fON21HdFdrRzBXMEculwr3BkcPZuAnH0dqx4Gno/fCt/Y4KphIGFSYY="},gokyo:{minM:4858,maxM:8159,peakGrid:[0,43],b64:"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m11AYcNnF2o4ZylpF2ovbG9uJHAmcZN2TYREiVKGJXpCdQh2MHZYdn113HPscV9wW27ObC9svG3QbWlrhmbcYPpbM1vQWgxbMVp8WD9XFVYnVXRUwVO/UoJRMFDfTmdOt05ATmdOBk9WT71RA1esXE1ehVxJXF1c/l3aXxhhfWK7Yw1lK2oWc5B+T4XshDWCQ3/neLl1GHTacuF1FXw9fNV59XV1cahteGmTY51es1/wYIletlfrVMNUA1dTV05VmlMPU9FRSFKpUX1P8k7sS2tGSkBAO0c13jG0MKIxsi+2MXk6SkABQzNIt07yTpBF02XYXl1cIVw1XNRcS13+XTlei1/1Yphl6WYTaDtoQ2w5cT5z8nScekCHhox7hzt7pXVWdS51GnVUdAJzdXHob4FtV2zzaytqhmZIZblinV78XPpbvluDW1laG1m2VwFWTlXXVOlTSFJaUURQGk/fTstOt07LTs1Pf1CnUA9TeFbxV3xYMVrSW3NdAF/aX2dh0WRpa3lzdHovf8eFWImVioCJdYSSf0x6cHjZe35/yHwDfY59vXeJcaZsO2g0ZR5kpWIkXcpXyFYFWLFe3GCxXiZeXVzkWuJZL1nKV61Tn0zKRM89wjekMlUyuDK0MOQ0tztgQW1HiUuTUEZR/koxR6ZsNGU8X8BchVwkXa9dxF5PX3dfyWAyZL9l+2VeZhtsGnU2edl7+oHVjLCNLoigfBx2o3QYdI1zKnNhcW9uCW0Zaytq22lMZ5VkHGPcYBRf1l0QXV1cIVzkWllaM1sMW2lYelcDVz1W71YpVphSCFBqTwZPpU9/UONQMlHlUSdV21bgWLxaDlw3XRRfLmIRZ6htVnWee557dnukfsCCoYYKinKMaoi+gWt/VX5yec11vXfvfBV8q3i1c75uymrDZ1xln181XL5bdV69ZGRpAWnDZ15mCmQuYuxepFi7UPpIO0KPO4M1azPiM34zRzXjPe9Db0hqTylWtFYGT9ZKUk2Nc7hrgmQ8X3NdX10mXihfx18WYI1guWIKZFpkYGcdbVp3gYCxhCCLLZGKjvKHtHz1ddpyd3LYcf5w+m64a3pq2WjDZ61mNGUKZFZiZWCLXwBfOV5fXV1cSVy1YPdjf2PcYBZgT185Xtpf/l0VVpVRWlFEULtQWlFGUdFR51K0VnxYWVohXOxe4WKtZmlrwnBGd8h8sHpIeIR4hnk9fJSAs4X5ikSJ0IBOe+V3VHTLdJF143Ywdhx2ZXP+cDVv+G1+bFBpdmjXZ7RpqG3mbh9uW25Jb/NrXGUmXmRWBk/4RzhBszlbNdA0qDTANlw/U0TES0ZRPVY1XAVYvVGtU+9WIHhzcMZoGmLHX7Fe2F6fXxZgeWChYKNhzWL3Y05o+m5KeZ2E6YwzlB2TUI8qhiB4Z3SdcZlv1G/6brxtGWu0addn1WbTZQ1lCmRWYixh3GBSYChfsV7uX4Jk22kFaytqPWl0Z5pmcmatZhhhB1leU1xSblFGUb1RIFI0UvtSP1eWW8lg+WRkaeJsm3AaddV5pn+2fYJ3bnepd/l3I3kVfFuBKIU3g8x+E3u3dHlzBHR5cyhydXEAcptw0m7Qbc5sL2wdbcBvsXGLcgByvG1XbG1tDm9+bCJm/l1QVhpP+EeGQBQ5Djb6NZk2FDmMQzlLglEpVjddeWBHW+RakllOVb13n3Kka0ZkfWJnYWVgjWDJYI1gyWBAYRpilWRkaSZxeHxShlWR9ZuzmH6S5YqMfLl1FHLmbuZuDG5FbUFrsmgTaGBnXmYNZQpk4WIuYsthGGE+YGVgvWRpazVvhW/uchZzS3Bxb3FvLWvPY0VaiFTTUlxSDVINUoRShFLnUp5Vqlt9YopoomobbDlxbHZTfb6BFXxGdx53z3aCdzR4rXlVfoGAun8Ffph4i3Kfcp9yxHH8b5tw/nDob29ukmxpa2ZqZGk/ar5u8HPob7ZqempBa7ZqOGelYptdP1elT6hH+z/YOHE26DZzN3c5A0TJTbJVDFunY5NjyWA1XIZTPk3Jc19wpGvTZeNjf2NCYlRhj2FAYUBhZ2HhYkhlempUdFuBp4nqljuhpZsvkjSLS4MVfDlx0m4zboFtpmzxaqBpKWliaHRnv2W7Y/ViamLLYUBhBGG3Yb9lB2w8cuV3ZHwneyV6IHivcHZoyWB8WDtVhlMPU6tSv1IPU/tSNlMlVOBYPF97YRxjWGOOatxzUHzxfSd793YIdrl1RHZEduF1w3q2fRt/4n/NdYlxiXHCcIVvR25HbltuqG26bEFrP2qMaYpoEWdiaIVvvm5kae1o/2dyZo9h6FzkWu1VLk/QR0g/OThxNrE4dTihOrZEKEyaU4VcRmRKZtpffFhcUkRQ8HPCcIxpvWS9ZEZkbGMaYhpit2GPYS5i+WSGZmRpkXW+gf+Np5wro7eaepAKioGAYns8coNulG26bBtsympTaoxpAWnZaNdnq2XjY7liamLLYd9hkWLTZX5sLnUXfdl753gKdwR0CW3TZeZbfFjbVohUhlOGU4ZThlOGU4ZT6VPIVh9bW1tLXbdhFWmhcyV6intud490j3TydFZ1pXUudc92dHrgfsSEtHx5czdwmW8fboFtpmwtawNqFWlOaDto12fVZudlNGW2ahBwQWsnaA9mp2OzX/xca1k4VFZPb0j7P8I31jcCOhQ5bj5ZRwJNylccY7BnsGfJYHNdN13AXFR0DG77ZZVkqWTRZApk4WJCYnthLmJ/Y/1mnmhmaqN0RYDtjnahR6eLmCmPt4cbf6t4s3Jxb7xtMW18a7ZqP2rIaY5qLWtTasZo/2c4Z6lkMmTlZIJkdGfob+V3vXcGdSpzIW/2bIxptWAdWpJZkFjZVWBUOFQRVNVTXlNKU2BUnlWQWNJbVmLDZx9u7nL1dTZ5GHTscQJzQHQGdVZ1QnWjdH92oHyvg9aD63pjcr5u0G1+bJBrP2qyaGBn52WEZW5kp2PjY/dj6WZxb8BveGlGZFRhTV5pWPtSuU+1TTVJ+z8SOMc5jTpPOZU+wkq7UC9ZPmBKZnhpnGduZI9hDFvHcgNqSmblZL1k+WQeZAhjGmK3YadjhmYVafFqgW1qdYWCupKOo1au45yDlHSNloEReh53zXUAcl1va2x+bOJs4GvibJRtpmzeaqBpPWmGZtVm62fDZ9Bt4XVWdV9w0m4JbaBpmmbhYg5cMVqBWkVapFjIVp5VE1WcVEpTwVOIVHZVolfWXThnQ2xFbYFtKHJCdXdyJnGdcYtyLHRUdBh0tXPHclp39n/YhL6Bcnk5cZJsLWs/au1o/2f9Zudl5WRsYxxjzWLNYkZkuGuxcapuJ2jfYSRduFgnVSBS3E0zSOU+sznJOkA7oTpyQKxJ8k6cVFtbFmCVZMNnfWI3Xe9WEHAZaxNo1Wa/ZflkRmRsY/Viu2OrZbRpumxbbmNyXnmliHWXM6cls8ykVpsOlfWIbYDbfEx6p3aLcmNysXHWcL5ub24Ob9RvwG8MbuJsvG2UbSRwKHLhdUZ3YXGUbS1rTmirZUJijWA5Xr5b0lsMWzFa81h6V2RWxlViVWJVnlUBVj9XrFxqYmJosGfGaMBvjXMScdZwwnBNcdpyoXONcypzAHI+c2B6IYIEh0mCrXmvcN5qZGmKaJxncmaEZUZk9WK5YvJhVGEaYv9nwG/cc3FvFWn1YiZezlmwVI9OWUdaPqM7GjwGPLk8QUWWSF1Jf1CgVjFaYV4KZARhbVrrVJZujmqgaZ5o6WY2ZudlvWTlZCJmsGcZazlxfXX9eaiAeI+pnfCsBbc5qnSgu5yIjZ2E9n8rfXJ5cHiKe713GHSxcdZwEnGzcvBzZ3Sndpx6xnv/emB6HnfqcH5sGWt2aJhlWGNCYixhsV7UXF1cb1u8WrpZuFiiV7hY4FhTV9tW71bKV4NbYV4EYWxjdGebcMdywG8QcCRwr3DEcZ1x7HEocolxc3Dwc8Z7mYI8hTOB53iZbylpiGeaZtNlgmQcYxpit2G1YAJg7l+pZC1rT3KLcqZshGUAX5BYcFLsS3pEWj7NPBw9zTyrP3NKs0xfSqFNvVHXVC9ZKmDJYBlYNlN+bN5qjmrbaWRpxmiKaMNnE2jxarxt2HH7eAd/1oPRikmVjqNKsoW7hLHqqZygb5QjjGWGqoGkfgV+xnuYeKV1VHTucmVzBnVYdrB6W4HYhMCCkn+ifd90QWt2aExn52XlZJVkz2MuYk9f6FwhXINbDFttWvZZWVpbW5RapFiiV3xYuFjkWnNddV7LYWRpnXFLcDVvSW8ObyFvr3BfcNRvr3BfcF1vIW8EdJp5aX6Hg7yAXHj8b3hpXmZaZLlie2GjYaFgY19jX+xe3GDtaCFvqm4ras9jEF2gVuFP0kjrQUY+Cj5uPvc9ikLuTJhSblG9USVU71a6WcdfamKqWxtZzGuka5BrQWtBa45qomrObOhv3HOndtd6vICNhvuLWZOYnlauMbnJvwm5/bL4poafOZcIiTeDcYJVfgF8YnteeW53WHandr94snu8gGWGzYh5hoWCaX6hcxlr7WjBZr9lmGWrZTRl42PfYXdf1FxvW1tbDFuqW8BcmVxbW0NZG1kJWh1a4lmFXD5gD2YMbk9ylm5vbkduDG4xbbxtvm6+bvpuDm+qbuRt/G/JcxN7vIA5hLyAOHpUdKhtcmbLYQJgoWCfX9he2F7qXf5dhmYHbHpq6WZ7YbxaEVR3TGlFrUBIP3A/XD82QKZGjU12VfpbcVzsXsthz2N0Z2RpcmaCZGtsQ2wvbENszmx+bCFv4XVeeT99HYBfg/WIKY/Qk6Oa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SJ7HmAmTio6Yi/mKboocic2IX4OYeFh29XUIdrt2XHjVebB6TnuSf+yEWooPjE2EvIBvgYmEhItKjCeO8ZDqlmajPqy1v1K/TrTWqfecaZEwifN+5XeTdmVz1G8fbkVtuGuKaEpm+2VIZTJkbGPhYghjhGWGZulm/2dOaHhp+G25dSd7H4HahYCJ143/jWqIX4O8gG2Afn/KfUN/HYCUgCaEEY1jmDuOhYIIdhtsSmbyYXth3GA+YJ9fiV7oXORa81hTV7JVmlP11NbPws/Y0NDMMsNmtnerpKQOlRyJm4NmfTh673wZfu17OHrpeTt7fn9Lg6eJYo5blFabcJ5BpFCie5o1lcONCIm5iAaIyYafhbZ9RHZCdQZ1kXVEdkh4hnn9ecp9/II1gg6CCYApfFB84H5xgtiEoYariyeOJJY/oyytOr3kuTKw6KjjnJiLlICaefJ0x3JNcRBwIW+BbRdq1WbnZb9lIGWCZBxjy2EsYbVg8GBaZEpmNmYRZ6hti3JEdsZ7gYD+gyyHWop9iBCDkn/Mfut6bneYeEx6KXyBgJyNBJrIj02EIHhDbL9lamIGYo9hVGECYHNdSVwfW85ZpFg/VxVWqMx0xvnDbMJzvMi1za4vpSCe5JO1hgd/13qCd/d2sHoRegp3lXeteT99H4FjhWqIYo4DkLqS056woI2Z4pKRiKGGyYaLhf6DhYLte+F1y3RUdLd0CHZad0h4I3lXf1uBtn10elx4CHZsdrB6W4HogiaEHIlwi/yV76Jsr6i587dqrtmh6JU5hG533HPHcuxxTXGbcJlv0G14aV5mNmarZflkMmS5Yo9hyWAWYChfZWBEY+Fi9WLrZ7hr6G+Rdf96L39HgdSCX4P4gBd9iHqTdmx2lXf7eEF+AoZVkWOYM5S3h2J7T3IpaUhl42MeZG5kbGPNYt9hd1+ZXA5ch13hYlPJLMAFt+exj63Sp2CgKplblGaQPoa8gDh6fXUqc1R0QnW1c5F1mHjGezGA+oEkgwKGBogrkMeYyZlLltWMeYbYhImEh4MhggmAE3vfdI1zoXO1c/J0kXVad9F3hnkBfCN5VnWNcypzjXOlde98vIAMgaGGhow5l+Klua6EsdGwwKgcnJCR6IJadxZz2HF1cSZxX3CZb9BteGnBZl5mmGWpZApkpWJAYVJgd1+xXq9diV48XypghGUnaHxrdXEwdud4/3oTe615cHhud311e3QGdfV15XegfCyHypBVkXyRhItFgIR4IW8/apxnOGeyaH5scW8dbQ9md18IY4ZmJHCPwIy1Qq4vpTuhk5y6kjSLhIt7hw6CQX5ceJ9yrG9fcEtw1G8Ucm53iHqMfOB+CYDUgrOFEY0DkKKQF5Cri5+FhYLmgQyBCYCifTZ5QHQAcotyx3Jlc9xzpXVGdx53gnffdBZzT3JPctpyZXPTeN59pH4mhP2MN5YnodSoYarUqFunmJ6Skh+BanWzcthxiXHqcBBw+m66bBVp/WZyZtNl+WTPY49hPmCzXxRfsV43XUlcDlw8XzJksGcZa/pu1G91cYty6nCobeZu6nDscQJzoXN9ddN4J3uUgJiLZI9ci42GDIFmfRp1+m7kbUNsOXEKd8N6Hndlc0Fr3mptbc11jLV3qxulHJxvlFCPCIkShAmAK339eZh4fXU3cC9skGuialVr+m6PdFx4JXonewN9pH7QgJ+FUoYWhgaIu4nqg1uBCYDzfnx+eHytebl1iXF1cYlxYXHEcT5zBnXfdKN0AnOJcWFxTXEocmNyCHY7e4x8loGRiG6Ka5JSmWSi9qWDp+2h748Zftxzs3KLcsRx/nAQcEduV2x6atlosGdeZtNlWGOhYBRfKF/EXk1erFyWW29bwFyNYOVkoGkZaylpFWkXagFp72lXbHFvTXGfcgJzkXURemJ7jn3jie2OdYTxfYR4hnn/ekR2zXX3dgF8WYDYhGqIcYINeCpzd3JqdWOr3qOnnPqU04uLhaiAE3sGdZ1xPnOhc9hxtmoKZCxhamLpZgds7HEyd1x4NHjVeet6KXwFfqB8A33efYeD0oEdgKZ/kH7KfYx8cnlsdp1xrG8QcHFvwG/CcNpyFHIhb75umW/CcBJx2HFPco90mHgPeSB4iHone/yCJ46ZlYSenqE9ou+Pc4PTeHt0BHTucsRxh3Bbbmts82tpa9tpJ2j9Zg1lGGEoXzxfYV5fXeZb5FrQWoFam13NYjZmq2W7Y/lkJWd2aO1ofGtxbzlxPHKLch533n24fnGCqYpairh+RnfydKFzmnm6fw6COYTwhuOJeI+gj4uFXnkadVJzsXGkpJWdIZX5iqqBO3ureLd0bW10Z2Bnq2UlZypgLVjiWepdu2P9ZtRvpXUIdgZ1VnWldfd25XdEdo90f3bxfW2A8358fgV+yn3Ge3B4anXCcDNug24zbpZucW+Fb5JsLWu6bFtumW+vcP5wxHGhcwR0PHI5cT5zkXVceNKBMImMj7GXzZuZlZGIbYBceAh2t3Rlc3dy6nAzbpJsB2wZa8hp/2dgZ3BloWBNXnNdXVyoWuJZCVqSWYFax1/wYLVgkWJGZEpm12fGaC1r5m6vcLFxpXVbgUCHAIUhgkeBR4Hld8t0LHQ8cqFzxnv+g3KMkJGFlXqQiYT7eHFv8Wq2arRpJ6H8lb+LsYTBeXdyh3AFawpknV5FWpxUoFYPU4RSslVdXBhh92NVa9hxPnPscSRwiXF3chRyKHIScRRy03iMfE57O3vKfcp9THrPdqFzDm9DbDFtHW2UbTNuQ2y0adtpfGtZbR9uSW9fcJtwN3CobR9urG+zclR033T1dQF85IBYicqQ5JM8hcCCB3/reh538nQEdPBztXN3codw/G/CcNhxs3Jdb4RlKF8hXL5bMVriWZJZzFjMWDVc7F4+YKNhQmINZThnTmhVa1tu/G9qddCAborfh6iAcHiLcsdytXMWcxJxh3CJcZN2835Ah2uS7JdEiWl+JHB2aJNjy2GhYDKdD4z8glB8AnPObB5k9ln9UyBSj05xSdRJtU3fTlpRklnWXXth/Wa8bZlvb25FbfhtkmzObIFt9mxFbZ9ybne9d+17kn8XfZp5ZXOWbmlromqka+BrB2zObN5qAWmKaNtpB2zObDNuIW/6bgltL2zgawltrG8UcvBzPHKfcnt0OHqsgvKHn4XWg+qDIYLKfXR6NHgydx53IHgjeYh673xVftCAXnk0ZX1i/FxZWkVaV1m4WPFX8VfQWhRfoWC1YGdhCmTTZcNneGlXbJ1xyHz3iZyNAoYXfct09mzxakVtN3BtbVltSW9lc3Z7m4MrkDmXfYjXeqJqgmQsYQJgc12DlK+DYnthcZxnsV4VVgZP1EnzRZ5Cw0GQRQ5Jc0rwTSlWIVyLX6djBWt+bHpq22myaIhndmiOahVpP2qFb09yMHYpfFV+yHyEePNrsGd0Zz1pF2qMabRpQWsBaYhnOGcTaLRpzGvObINuDG64a0FrempBa6htFHKPdF9wJHCvcChymHhxgkuD836ifdl7P33if35/5IBVfgV+V3/Agk+FGIduiit9nmggZXlgulnOWQdZolfvVttWzFhzXU9fi1+hYBxjbmStZk5oV2wwdpmCXoz9jPCGUHxSc1ds2WhgZwVrF2pkaWlrc3DRd6iAyI/HmISLAXxjcuBrgmSNYBJe641Xf7l1GWvUXClW01JSTc5GDT97O0Q910GMQ6RFXUk2U9BadV4yZCtqP2rGaK1mD2ZcZWxjDWXjY1pktmrMaxBwOHoFfut6JHBGZG5k52XrZ05osGclZ3JmSGXTZedlrWZMZ7Rpa2z6blNqPWnIachpoGlFbaV1HnckcINuqm5fcB53w3qrePJ0zXW7dpV3AXxJguWKcoyEizSLw42ejlOQiI3xfV1v22mlYkVapFgZWLRWeFZQVvFXH1tfXWFetWBEYwpkhmbKaupwUHxlhjKKwoMrfWp1lG0TaDZmD2bDZydoNmbVZqRre3Rrf7uJP5BGiluBHYCGedZwjmoRZ2OFdHoocoZmkFggUuxLokRwP+w46jdPOWo8vT7XQWtGak9vW51eIGX/Z9losGc0ZVpkRGPJYK9dTV4oX1xlcmaWbu17en1sdilpbGO7Y1xlSmb7ZdFkHmR9Yo9hHGMwYx5kmmYta11v8WrRZDZmnGeeaNlouGvcc3lzgW3zawVrqG0EdHdyWW3MazFtn3I+c311WYBIi/iTJJaokwGPp4kciTKKqoEudTFtRGOoWj9XdlUTVWJVO1U/V85ZvlshXBZgHGMPZhlrNW9CdWt/fYiAiYx8nXGOar9lkWLjY1pkwWbTZb1kRmT/Z7d0VX4xgNKBa387ext/DIE/fTZ5kXXrert21G9aZDtVAk3ZQqU86jeUNPg0NTZfN9o5vT60QxZNgVpNXuFiq2UlZ5pm9WJnYY1g7F4fW6pbwl0aYtFk5m5Wde5ylG0PZn1izWL1YuFie2GdXhBdwFz8XBRfKmB/Yz9qEHCmbFpkk2OpZOVkD2bpZhdq+G1iaE5onmh0Z4poemo/ak5oPWlTaqht1G8Wc0N/6Yxtk2uSiI3ogut6ZHxJgpSAMndDbKNhfll0VDZTclPpUxFUslVrWUVaXVxqYl5m4GvWcFZ1dnsmhBOObImteXFvdGfaXzxfPmAYYcthZ2FWYqVi02V9dZp5WHZUdPxv/G8Ccw14K31Xf9l703iPdClpi1/lUehJ5T51OM4zUzFBMn4zMTRdNtw6nEF1S3ZVSVzyYTJkIGUPZsth/l2sXPhaL1nkWsJdi1+YZcpqpGvVZqdj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"}},Rn=560;new C(.82,.26,-.5).normalize();const xr={};let Or="langtang";function wa(i){if(xr[i])return xr[i];const t=la[i]||la.langtang,e=atob(t.b64),n=new Uint8Array(e.length);for(let g=0;g<e.length;g++)n[g]=e.charCodeAt(g);const r=new Uint16Array(n.buffer),s=new Float32Array(ae*ae),a=Math.max(1200,t.minM),o=Math.max(1,t.maxM-t.minM);let l=1/0,c=-1/0;for(let g=0;g<r.length;g++){let x=t.minM+r[g]/65535*o;x<a&&(x=a),s[g]=x,x<l&&(l=x),x>c&&(c=x)}const h=new Float32Array(ae*ae),f=Math.max(1,c-l);for(let g=0;g<ae;g++){const x=g/(ae-1)*2-1;for(let p=0;p<ae;p++){const u=p/(ae-1)*2-1,b=1-.35*Math.pow(Math.min(1,Math.hypot(u,x)/1.15),2.2),_=(s[g*ae+p]-l)/f;h[g*ae+p]=Math.pow(_,1.18)*148*b-8}}const d=(t.peakGrid[0]/(ae-1)-.5)*Rn,m=(t.peakGrid[1]/(ae-1)-.5)*Rn;return xr[i]={norm:h,realLo:l,realHi:c,peakWorldX:d,peakWorldZ:m},xr[i]}["langtang","annapurna","gokyo"].forEach(wa);function mm(i,t,e){const n=Math.min(1,Math.max(0,t/Rn+.5))*(ae-1),r=Math.min(1,Math.max(0,e/Rn+.5))*(ae-1),s=Math.floor(n),a=Math.floor(r),o=Math.min(ae-1,s+1),l=Math.min(ae-1,a+1),c=n-s,h=r-a,f=i[a*ae+s]*(1-c)+i[a*ae+o]*c,d=i[l*ae+s]*(1-c)+i[l*ae+o]*c,m=f*(1-h)+d*h,g=Math.sin(t*.17+e*.11)*Math.cos(e*.19-t*.07)*1.35*Math.max(0,m/110);return m+g}function gm(i){la[i]&&(Or=i)}function vm(){return wa(Or)}function Mi(i,t,e=Or){const n=wa(e);return mm(n.norm,i,t)}const Vr=`
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1,0)), f.x), mix(h21(i + vec2(0,1)), h21(i + vec2(1,1)), f.x), f.y);
}
float fbm(vec2 p){ float a = 0.5, s = 0.0; for(int i = 0; i < 4; i++){ s += a * vnoise(p); p *= 2.03; a *= 0.5; } return s; }
`,Cl=`
uniform vec3 uFog; uniform vec3 uSunFog; uniform vec3 uSunDir; uniform float uFogDen;
vec3 applyFog(vec3 c, vec3 wpos){
  float d = distance(wpos, cameraPosition);
  vec3 vd = normalize(wpos - cameraPosition);
  float f = 1.0 - exp(-d * d * uFogDen * uFogDen);
  vec3 fc = mix(uFog, uSunFog, pow(max(dot(vd, uSunDir), 0.0), 5.0));
  return mix(c, fc, clamp(f, 0.0, 1.0));
}
`,ca={dawn:{sunDir:new C(.82,.25,-.5).normalize(),sunCol:"#ffc08a",skyAmb:"#3f5a92",groundAmb:"#1d1a22",fog:"#b48b80",sunFog:"#f6ab6c",fogDen:.0028},noon:{sunDir:new C(.38,.78,-.48).normalize(),sunCol:"#fff3e2",skyAmb:"#5878a8",groundAmb:"#282b2e",fog:"#8fa6bd",sunFog:"#cfe0f0",fogDen:.0022},starlight:{sunDir:new C(-.6,.35,-.7).normalize(),sunCol:"#7ca2db",skyAmb:"#1d2d4e",groundAmb:"#0c111b",fog:"#141f33",sunFog:"#283d62",fogDen:.0026}};function xm(){const i=e=>new zt(e),t=ca.dawn;return{uSunDir:{value:t.sunDir.clone()},uSunCol:{value:i(t.sunCol)},uSkyAmb:{value:i(t.skyAmb)},uGroundAmb:{value:i(t.groundAmb)},uFog:{value:i(t.fog)},uSunFog:{value:i(t.sunFog)},uFogDen:{value:t.fogDen},uTime:{value:0}}}function Sm(i,t,e){const n=ca[e]||ca.dawn;i.uSunDir.value.copy(n.sunDir),i.uSunCol.value.set(n.sunCol),i.uSkyAmb.value.set(n.skyAmb),i.uGroundAmb.value.set(n.groundAmb),i.uFog.value.set(n.fog),i.uSunFog.value.set(n.sunFog),i.uFogDen.value=n.fogDen,t.background.set(n.fog)}function Mm(i){const e=new Hn(Rn,Rn,256,256);e.rotateX(-Math.PI/2);const n=e.attributes.position,r=[];for(let f=0;f<n.count;f++){const d=Mi(n.getX(f),n.getZ(f));n.setY(f,d),f%13===0&&r.push(d)}e.computeVertexNormals(),r.sort((f,d)=>f-d);const s=r[Math.floor(r.length*.1)],a=r[r.length-1],o={...i,uWater:{value:s},uSnow:{value:s+(a-s)*.41}},l=new Ie({uniforms:o,vertexShader:`
      varying float vH; varying vec3 vN; varying vec3 vW;
      void main(){
        vH = position.y; vN = normal;
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform float uWater; uniform float uSnow;
      uniform vec3 uSunCol; uniform vec3 uSkyAmb; uniform vec3 uGroundAmb;
      varying float vH; varying vec3 vN; varying vec3 vW;
      ${Vr}
      ${Cl}
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
      }`}),c=new de(e,l);function h(f){gm(f);const d=e.attributes.position;let m=1/0,g=-1/0;for(let x=0;x<d.count;x++){const p=Mi(d.getX(x),d.getZ(x),f);d.setY(x,p),p<m&&(m=p),p>g&&(g=p)}d.needsUpdate=!0,e.computeVertexNormals(),o.uSnow.value=m+(g-m)*.41}return{mesh:c,waterY:s,maxH:a,updateDemGeometry:h}}function ym(i,t){const e=new Hn(Rn,Rn,1,1);e.rotateX(-Math.PI/2);const n=new Ie({uniforms:{...i},vertexShader:`
      varying vec3 vW;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      uniform float uTime; uniform vec3 uSunCol;
      varying vec3 vW;
      ${Vr}
      ${Cl}
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
      }`}),r=new de(e,n);return r.position.y=t,r}function Em(i){const t=new Ie({uniforms:{...i},side:xe,depthWrite:!1,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform vec3 uSunDir; uniform vec3 uSunCol; uniform vec3 uFog; uniform vec3 uSunFog;
      varying vec3 vDir;
      ${Vr}
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
      }`}),e=new de(new Dr(900,32,16),t);return e.renderOrder=-10,e.frustumCulled=!1,e}function _m(i,t){const e=new ci;return[{y:t+26,op:.5,scale:.012,speed:.012,col:"#ffd9c2"},{y:t+62,op:.36,scale:.008,speed:.008,col:"#f3c4b0"},{y:t+105,op:.26,scale:.006,speed:.005,col:"#ffe0cc"}].forEach((r,s)=>{const a=new Hn(1400,1400,1,1);a.rotateX(-Math.PI/2);const o=new Ie({uniforms:{...i,uCol:{value:new zt(r.col)},uOp:{value:r.op},uScale:{value:r.scale},uSpeed:{value:r.speed},uSeed:{value:s*13.7}},transparent:!0,depthWrite:!1,vertexShader:`
        varying vec3 vW;
        void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
        uniform float uTime; uniform vec3 uCol; uniform float uOp; uniform float uScale; uniform float uSpeed; uniform float uSeed;
        varying vec3 vW;
        ${Vr}
        void main(){
          vec2 p = vW.xz * uScale + vec2(uTime * uSpeed, uSeed);
          float f = fbm(p) * 0.65 + fbm(p * 2.3 + 4.0) * 0.35;
          float a = smoothstep(0.5, 0.78, f) * uOp;
          float d = distance(vW, cameraPosition);
          a *= smoothstep(28.0, 110.0, d) * (1.0 - smoothstep(420.0, 700.0, d));
          gl_FragColor = vec4(uCol, a);
          #include <colorspace_fragment>
        }`}),l=new de(a,o);l.position.y=r.y,l.renderOrder=5+s,e.add(l)}),e}function bm(i,t){return i.map((e,n)=>{let r=0,s=0;for(let a=-t;a<=t;a++){const o=i[n+a];o!==void 0&&(r+=o,s++)}return r/s})}function Tm(i,t=Or){const r=new oa(i.map(([o,l])=>new C(o,0,l)),!1,"centripetal").getSpacedPoints(200),s=bm(r.map(o=>Mi(o.x,o.z,t)),5),a=r.map((o,l)=>new C(o.x,Math.max(s[l],Mi(o.x,o.z,t)-.3)+1.1,o.z));return new oa(a,!1,"centripetal")}const fi=matchMedia("(prefers-reduced-motion: reduce)").matches,Ft=i=>document.getElementById(i),ze=i=>i.toLocaleString("en-US"),Rm=Ft("scene"),Wi=new jp({canvas:Rm,antialias:!0,powerPreference:"high-performance"});let Di=Math.min(devicePixelRatio,1.5);Wi.setPixelRatio(Di);const Je=new Qp;Je.background=new zt("#b48b80");const We=new Le(50,1,.5,1800),Ti=xm(),{mesh:Am,waterY:ki,maxH:Cm,updateDemGeometry:wm}=Mm(Ti);Je.add(Am);Je.add(ym(Ti,ki));const wl=Em(Ti);Je.add(wl);const Um=_m(Ti,ki+(Cm-ki)*.18);Je.add(Um);const Ar=new ci;Je.add(Ar);const ua=new de(new Dr(.95,16,12),new kn({color:"#ff5a1f"}));Je.add(ua);const ha=new de(new Ra(1.4,3.6,4),new kn({color:"#ff5a1f"}));Je.add(ha);let bn=0,oe=null;const da=420,fa=5;function Lm(i){i.children.slice().forEach(t=>{var e,n;(e=t.geometry)==null||e.dispose(),(n=t.material)==null||n.dispose(),i.remove(t)})}function Ul(i){Lm(Ar);const t=An[i];wm(t.id);const e=vm(),n=Mi(e.peakWorldX,e.peakWorldZ,t.id);ha.position.set(e.peakWorldX,n+2.4,e.peakWorldZ),ha.rotation.y=Math.PI/4;const r=Tm(t.ctrl,t.id),s=new de(new Ur(r,da,.28,fa,!1),new kn({color:"#e8e2d2",transparent:!0,opacity:.6})),a=new de(new Ur(r,da,.52,fa,!1),new kn({color:"#ff5a1f"}));a.geometry.setDrawRange(0,0),Ar.add(s,a);const o=r.getSpacedPoints(200);let l=1/0,c=-1/0;o.forEach(p=>{l=Math.min(l,p.y),c=Math.max(c,p.y)});const h=p=>t.startAlt+(p-l)/Math.max(.1,c-l)*(t.maxAlt-t.startAlt),f=new _i().setFromPoints(o),d=f.getCenter(new C),m=f.getSize(new C),g=Yo.map((p,u)=>{const b=r.getPointAt(p),_=new de(new Ca(.95),new kn({color:"#e8e2d2"}));return _.position.copy(b),Ar.add(_),{u:p,p:b,alt:t.stages[u][2]||Math.round(h(b.y)/10)*10,name:t.stages[u][0]}}),x={p:new C(e.peakWorldX,n+4.2,e.peakWorldZ),name:`▲ ${t.summitName} · ${ze(t.summitAlt)} m`,isSummit:!0};oe={curve:r,walked:a,samples:o,toAlt:h,center:d,size:m,marks:g,lo:l,hi:c,summitMark:x},Im(),Nm()}const Ss=Ft("labels");let Ll=[],Bn=null;function Im(){Ss.innerHTML="",Ll=oe.marks.map((i,t)=>{const e=document.createElement("div");return e.className="wp",e.textContent=`${String(t+1).padStart(2,"0")} ${i.name}`,Ss.appendChild(e),e}),Bn=document.createElement("div"),Bn.className="wp wp-summit",Bn.textContent=oe.summitMark.name,Ss.appendChild(Bn)}const we=new C;function Wo(i,t,e=!0){if(Ll.forEach((n,r)=>{we.copy(oe.marks[r].p).project(We);const s=i&&we.z<1&&Math.abs(we.x)<1.05&&Math.abs(we.y)<1.05;n.classList.toggle("on",s),n.classList.toggle("cur",r===t),s&&(n.style.transform=`translate(${(we.x*.5+.5)*innerWidth}px, ${(-we.y*.5+.5)*innerHeight}px) translate(-50%, -140%)`)}),Bn){we.copy(oe.summitMark.p).project(We);const n=e&&we.z<1&&Math.abs(we.x)<.95&&Math.abs(we.y)<.92;Bn.classList.toggle("on",n),n&&(Bn.style.transform=`translate(${(we.x*.5+.5)*innerWidth}px, ${(-we.y*.5+.5)*innerHeight}px) translate(-50%, -150%)`)}}document.querySelectorAll("[data-light]").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll("[data-light]").forEach(t=>t.setAttribute("aria-pressed",String(t===i))),Sm(Ti,Je,i.dataset.light)})});const Il=Ft("rows");An.forEach((i,t)=>{const e=document.createElement("button");e.className="row",e.type="button",e.innerHTML=`<span class="n mono">0${t+1}</span><span class="t">${i.name}</span><span class="p"><b>$${ze(i.price)}</b>${i.days} days</span><span class="m">${i.region} · ${i.grade} · Summit view ${ze(i.summitAlt)} m</span>`,e.addEventListener("click",()=>Pm(t)),Il.appendChild(e)});const zi=Ft("f-trek");An.forEach((i,t)=>zi.add(new Option(`${i.name} (${i.days} days)`,t)));function Nm(){const i=Ft("profile"),t=An[bn],e=520,n=190,r=46,s=28,a=14,o=12,l=e-r-o,c=n-a-s,h=oe.samples.map((x,p)=>{const u=r+p/(oe.samples.length-1)*l,b=a+c-(oe.toAlt(x.y)-t.startAlt)/(t.maxAlt-t.startAlt)*c;return[u,b]}),f=h.map(([x,p],u)=>`${u?"L":"M"}${x.toFixed(1)} ${p.toFixed(1)}`).join(" "),d=`${f} L${r+l} ${a+c} L${r} ${a+c}Z`,m=[0,.5,1].map(x=>{const p=Math.round((t.startAlt+(t.maxAlt-t.startAlt)*x)/10)*10,u=a+c-x*c;return`<line x1="${r}" x2="${e-o}" y1="${u}" y2="${u}" stroke="#0e1512" stroke-opacity=".18"/><text x="${r-6}" y="${u+4}" text-anchor="end" font-family="IBM Plex Mono" font-size="10" fill="#0e1512">${ze(p)}</text>`}).join(""),g=oe.marks.map((x,p)=>{const u=Math.round(x.u*(h.length-1)),[b,_]=h[u];return`<line x1="${b}" x2="${b}" y1="${_}" y2="${a+c}" stroke="#0e1512" stroke-opacity=".35" stroke-dasharray="2 3"/><circle cx="${b}" cy="${_}" r="3.5" fill="#ff5a1f" stroke="#0e1512" stroke-width="1"/><text x="${b}" y="${n-10}" text-anchor="middle" font-family="IBM Plex Mono" font-size="10" fill="#0e1512">${p+1}</text>`}).join("");i.innerHTML=`<title id="profile-t">Elevation profile of ${t.name}, from ${ze(t.startAlt)} to ${ze(t.maxAlt)} metres</title>${m}<path d="${d}" fill="#0e1512" fill-opacity=".1"/><path d="${f}" fill="none" stroke="#0e1512" stroke-width="2"/>${g}<text x="6" y="12" font-family="IBM Plex Mono" font-size="9" fill="#0e1512">METRES</text>`}function Nl(){const i=An[bn];Ft("d-region").textContent=`${i.code} · ${i.region}`,Ft("d-name").textContent=i.name,Ft("d-summary").textContent=i.summary;const t=Ft("d-photo");t.src=i.photo,t.alt=i.photoAlt,Ft("d-summit").textContent=`${i.summitName} · ${ze(i.summitAlt)} m`,Ft("hud-dem").textContent=`SRTM DEM · ${i.summitName} (${ze(i.summitAlt)} m)`,Ft("hud-gps").textContent=`${i.gps} · Real NASA SRTM elevation mesh`,Ft("d-facts").innerHTML=[["Duration",`${i.days} days (${i.distanceKm} km)`],["Max sleeping / pass",`${ze(i.maxAlt)} m`],["Grade & hours",`${i.grade} · ${i.dailyHours}`],["Lead guide",i.leadGuide]].map(([e,n])=>`<li><span>${e}</span><b>${n}</b></li>`).join(""),Ft("s-trek").textContent=`${i.name} · ${i.days} days`,[...Il.children].forEach((e,n)=>e.setAttribute("aria-pressed",String(n===bn))),zi.value=bn}function Pm(i){bn=i,Ul(i),Nl(),pa=-1,Ve=0}Ft("d-book").addEventListener("click",()=>zi.value=bn);const Bo=Ft("home-reviews");Bo&&(Bo.innerHTML=ql.slice(0,3).map(i=>`
    <article class="review-card reveal">
      <div class="review-top mono">
        <span>${i.route}</span>
        <span class="review-spo2">SpO2 ${i.spo2}</span>
      </div>
      <h3>“${i.headline}”</h3>
      <p>${i.body}</p>
      <footer class="review-foot mono">
        <span>${i.author} · ${i.city}</span>
        <span>${i.month} · Guide: ${i.guide}</span>
      </footer>
    </article>
  `).join(""));const Ua=new C(-42,ki+62,158),Pl=new C(24,ki+72,-68),oi=Ua.clone(),ko=Pl.clone(),Ni=new C,Sr=new C,Lr={x:0,y:0};addEventListener("pointermove",i=>{Lr.x=(i.clientX/innerWidth-.5)*2,Lr.y=(i.clientY/innerHeight-.5)*2});let Ve=0,pa=-1;const yn={idx:Ft("s-idx"),title:Ft("s-title"),alt:Ft("s-alt"),text:Ft("s-text"),bar:Ft("s-bar"),hint:Ft("s-hint"),live:Ft("s-live"),pct:Ft("s-pct")};function Fm(i){if(i===pa)return;pa=i;const t=An[bn];yn.idx.textContent=String(i+1).padStart(2,"0"),yn.title.textContent=t.stages[i][0],yn.alt.textContent=ze(oe.marks[i].alt),yn.text.textContent=t.stages[i][1]}const Dm=Ft("treks"),Fl=Ft("route"),zo=new pm;let Mr=.016;function Dl(){requestAnimationFrame(Dl);const i=Math.min(zo.getDelta(),.05),t=innerHeight,e=Fl.getBoundingClientRect();if(e.bottom<0){Wo(!1,-1,!1);return}const n=Dm.getBoundingClientRect(),r=e.top<=t*.35,s=n.top>t*.55,a=zo.elapsedTime,o=Math.min(1,Math.max(0,-e.top/(e.height-t))),l=fi?1:1-Math.exp(-i*5);if(Ve+=(o-Ve)*l,r){const d=Ve,m=oe.curve.getPointAt(Math.min(1,d+.04)),g=oe.curve.getPointAt(d),x=oe.curve.getPointAt(Math.max(0,d-.07)),p=new C().subVectors(m,x).setY(0).normalize();Ni.copy(g).addScaledVector(p,-20).add(new C(0,12,0)).add(new C(-p.z*8,0,p.x*8)),Sr.copy(m).add(new C(0,3,0))}else if(s)Ni.copy(Ua),fi||Ni.add(new C(Math.sin(a*.12)*14+Lr.x*6,Lr.y*-3,Math.cos(a*.1)*5)),Sr.copy(Pl);else{const d=oe.center,m=Math.max(oe.size.x,oe.size.z);Ni.set(d.x,d.y+42+m*.78,d.z+32+m*.95),Sr.set(d.x,d.y-4,d.z)}const c=fi?1:1-Math.exp(-i*(r?3.2:2.2));oi.lerp(Ni,c),ko.lerp(Sr,c),oi.y=Math.max(oi.y,Mi(oi.x,oi.z)+7.5),We.position.copy(oi),We.lookAt(ko),We.updateMatrixWorld(),wl.position.copy(We.position),Ti.uTime.value=a;const h=r?Ve:0;oe.walked.geometry.setDrawRange(0,Math.floor(h*da)*fa*6),ua.visible=r,r&&(ua.position.copy(oe.curve.getPointAt(Ve)).y+=.25);let f=0;Yo.forEach((d,m)=>{Ve>=d-.1&&(f=m)}),Ve>.97&&(f=4),Fm(f),yn.bar.style.height=`${Ve*100}%`,yn.hint.style.opacity=o>.03?0:1,yn.live.textContent=ze(Math.round(oe.toAlt(oe.curve.getPointAt(Ve).y)/10)*10),yn.pct.textContent=Math.round(Ve*100),Wo(!s,r?f:-1,!0),Wi.render(Je,We),Mr=Mr*.95+i*.05,Mr>.026&&Di>1&&(Di=Math.max(1,Di-.25),Wi.setPixelRatio(Di),Wi.setSize(innerWidth,innerHeight,!1),Mr=.016)}function Ol(){const i=innerWidth,t=innerHeight;Wi.setSize(i,t,!1),We.aspect=i/t,We.fov=i<700?62:50,We.updateProjectionMatrix()}addEventListener("resize",Ol);const Zo=Ft("form");Zo.addEventListener("submit",i=>{i.preventDefault();const t=Ft("f-name"),e=Ft("f-email"),n=Ft("f-size"),r=(h,f,d)=>(Ft(f).textContent=d,h.setAttribute("aria-invalid",d?"true":"false"),d?h.setAttribute("aria-describedby",f):h.removeAttribute("aria-describedby"),!d),s=r(t,"e-name",t.value.trim().length<2?"Enter your full name.":""),a=r(e,"e-email",/^\S+@\S+\.\S+$/.test(e.value)?"":"Enter an email like name@example.com."),o=Number(n.value),l=r(n,"e-size",o>=1&&o<=12?"":"Groups are 1 to 12 people.");if(!(s&&a&&l)){(s?a?n:e:t).focus();return}const c=An[zi.value];Ft("ok").textContent=`Thanks ${t.value.trim().split(" ")[0]}. Lead guide ${c.leadGuide} will reply about ${c.name} in ${Ft("f-month").value} within two working days. (Demo: nothing was sent.)`,Zo.reset(),zi.value=bn});Ol();Ul(0);Nl();We.position.copy(Ua);requestAnimationFrame(Dl);const Om=Ft("progress"),Vm=document.querySelector(".nav");function Vl(){const i=document.documentElement.scrollHeight-innerHeight;Om.style.transform=`scaleX(${i>0?scrollY/i:0})`,Vm.classList.toggle("solid",scrollY>innerHeight*.85&&Fl.getBoundingClientRect().bottom<80)}addEventListener("scroll",Vl,{passive:!0});Vl();const Ho=document.querySelector(".hero h1");if(Ho&&!fi){let i=0;const t=e=>{[...e.childNodes].forEach(n=>{if(n.nodeType===3){const r=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(s=>{if(!s.trim()){r.append(s);return}const a=document.createElement("span");a.className="w",a.style.setProperty("--i",i++),a.textContent=s,r.append(a)}),n.replaceWith(r)}else n.nodeType===1&&t(n)})};t(Ho)}const Gl=new IntersectionObserver(i=>{i.forEach(t=>{t.isIntersecting&&(t.target.classList.add("in"),Gl.unobserve(t.target))})},{threshold:.12,rootMargin:"0px 0px -6% 0px"});document.querySelectorAll(".reveal").forEach(i=>{fi?i.classList.add("in"):Gl.observe(i)});const Wl=new IntersectionObserver(i=>{i.forEach(t=>{if(!t.isIntersecting)return;Wl.unobserve(t.target);const e=t.target,n=Number(e.dataset.count),r=performance.now();if(fi){e.textContent=n;return}const s=a=>{const o=Math.min(1,(a-r)/1100);e.textContent=Math.round(n*(1-Math.pow(1-o,3))),o<1&&requestAnimationFrame(s)};requestAnimationFrame(s)})},{threshold:.6});document.querySelectorAll("[data-count]").forEach(i=>Wl.observe(i));const qo=["J","F","M","A","M","J","J","A","S","O","N","D"],Xo=["January","February","March","April","May","June","July","August","September","October","November","December"],Gm=Ft("calendar");Gm.innerHTML=`<div class="cal-head" aria-hidden="true"><span></span>${qo.map(i=>`<span>${i}</span>`).join("")}</div>`+An.map(i=>`<div class="cal-row" role="group" aria-label="${i.name} seasons"><span class="cal-name">${i.name}</span>${qo.map((t,e)=>{const n=i.best.includes(e)?"best":i.ok.includes(e)?"ok":"off",r={best:"prime window",ok:"shoulder",off:"monsoon or deep winter"}[n];return`<i class="cal-cell ${n}" title="${Xo[e]}: ${r}"><span class="sr">${Xo[e]}: ${r}</span></i>`}).join("")}</div>`).join("");const Bl="kharka-gear",Wm=new Set(JSON.parse(localStorage.getItem(Bl)||"[]")),Oi=[...document.querySelectorAll("#gear input[type=checkbox]")],Bm=Ft("gear-count"),km=Ft("gear-bar");function kl(){const i=Oi.filter(t=>t.checked).length;Bm.textContent=`${i} of ${Oi.length} essential items packed`,km.style.transform=`scaleX(${i/Oi.length})`,localStorage.setItem(Bl,JSON.stringify(Oi.filter(t=>t.checked).map(t=>t.id)))}Oi.forEach(i=>{i.checked=Wm.has(i.id),i.addEventListener("change",kl)});kl();
