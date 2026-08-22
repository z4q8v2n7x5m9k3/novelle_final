(()=>{function u(){function n(t,e,i){let r=document.createElement("a");r.href=t,r.target=i,r.rel=e,document.body.appendChild(r),r.click(),r.remove()}function o(t){if(this.dataset.hydrated){this.removeEventListener("click",o);return}t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");if(!e)return;if(/Mac|iPod|iPhone|iPad/u.test(navigator.userAgent)?t.metaKey:t.ctrlKey)return n(e,"","_blank");let r=this.getAttribute("rel")??"",c=this.getAttribute("target")??"";n(e,r,c)}function a(t){if(this.dataset.hydrated){this.removeEventListener("auxclick",o);return}t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");e&&n(e,"","_blank")}function s(t){if(this.dataset.hydrated){this.removeEventListener("keydown",s);return}if(t.key!=="Enter")return;t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");if(!e)return;let i=this.getAttribute("rel")??"",r=this.getAttribute("target")??"";n(e,i,r)}document.querySelectorAll("[data-nested-link]").forEach(t=>{t instanceof HTMLElement&&(t.addEventListener("click",o),t.addEventListener("auxclick",a),t.addEventListener("keydown",s))})}return u})()()

var animator=(()=>{var O=(e,r,t)=>t>r?r:t<e?e:t;var j=()=>{};function W(e){let r;return()=>(r===void 0&&(r=e()),r)}var q=e=>e;var v=e=>e*1e3,V=e=>e/1e3;function X(e,r){return r?e*(1e3/r):0}var Y=e=>Array.isArray(e)&&typeof e[0]=="number";var H={value:null,addProjectionMetrics:null};var Z={layout:0,mainThread:0,waapi:0};var L=(e,r,t=10)=>{let o="",s=Math.max(Math.round(r/t),2);for(let n=0;n<s;n++)o+=Math.round(e(n/(s-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`};function R(e){let r=0,t=50,o=e.next(r);for(;!o.done&&r<2e4;)r+=t,o=e.next(r);return r>=2e4?1/0:r}function fe(e,r=100,t){let o=t({...e,keyframes:[0,r]}),s=Math.min(R(o),2e4);return{type:"keyframes",ease:n=>o.next(s*n).value/r,duration:V(s)}}var Ee=5;function ce(e,r,t){let o=Math.max(r-Ee,0);return X(t-e(o),r-o)}var u={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};var _=.001;function le({duration:e=u.duration,bounce:r=u.bounce,velocity:t=u.velocity,mass:o=u.mass}){let s,n;j(e<=v(u.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let i=1-r;i=O(u.minDamping,u.maxDamping,i),e=O(u.minDuration,u.maxDuration,V(e)),i<1?(s=m=>{let p=m*i,c=p*e,l=p-t,x=z(m,i),g=Math.exp(-c);return _-l/x*g},n=m=>{let c=m*i*e,l=c*t+t,x=Math.pow(i,2)*Math.pow(m,2)*e,g=Math.exp(-c),y=z(Math.pow(m,2),i);return(-s(m)+_>0?-1:1)*((l-x)*g)/y}):(s=m=>{let p=Math.exp(-m*e),c=(m-t)*e+1;return-_+p*c},n=m=>{let p=Math.exp(-m*e),c=(t-m)*(e*e);return p*c});let f=5/e,a=Ce(s,n,f);if(e=v(e),isNaN(a))return{stiffness:u.stiffness,damping:u.damping,duration:e};{let m=Math.pow(a,2)*o;return{stiffness:m,damping:i*2*Math.sqrt(o*m),duration:e}}}var ke=12;function Ce(e,r,t){let o=t;for(let s=1;s<ke;s++)o=o-e(o)/r(o);return o}function z(e,r){return e*Math.sqrt(1-r*r)}var Be=["duration","bounce"],Ie=["stiffness","damping","mass"];function ue(e,r){return r.some(t=>e[t]!==void 0)}function Ke(e){let r={velocity:u.velocity,stiffness:u.stiffness,damping:u.damping,mass:u.mass,isResolvedFromDuration:!1,...e};if(!ue(e,Ie)&&ue(e,Be))if(r.velocity=0,e.visualDuration){let t=e.visualDuration,o=2*Math.PI/(t*1.2),s=o*o,n=2*O(.05,1,1-(e.bounce||0))*Math.sqrt(s);r={...r,mass:u.mass,stiffness:s,damping:n}}else{let t=le({...e,velocity:0});r={...r,...t,mass:u.mass},r.isResolvedFromDuration=!0}return r}function D(e=u.visualDuration,r=u.bounce){let t=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:r}:e,{restSpeed:o,restDelta:s}=t,n=t.keyframes[0],i=t.keyframes[t.keyframes.length-1],f={done:!1,value:n},{stiffness:a,damping:m,mass:p,duration:c,velocity:l,isResolvedFromDuration:x}=Ke({...t,velocity:-V(t.velocity||0)}),g=l||0,y=m/(2*Math.sqrt(a*p)),T=i-n,h=V(Math.sqrt(a/p)),K=Math.abs(T)<5;o||(o=K?u.restSpeed.granular:u.restSpeed.default),s||(s=K?u.restDelta.granular:u.restDelta.default);let S;if(y<1){let d=z(h,y);S=A=>{let b=Math.exp(-y*h*A);return i-b*((g+y*h*T)/d*Math.sin(d*A)+T*Math.cos(d*A))}}else if(y===1)S=d=>i-Math.exp(-h*d)*(T+(g+h*T)*d);else{let d=h*Math.sqrt(y*y-1);S=A=>{let b=Math.exp(-y*h*A),G=Math.min(d*A,300);return i-b*((g+y*h*T)*Math.sinh(G)+d*T*Math.cosh(G))/d}}let P={calculatedDuration:x&&c||null,next:d=>{let A=S(d);if(x)f.done=d>=c;else{let b=d===0?g:0;y<1&&(b=d===0?v(g):ce(S,d,A));let G=Math.abs(b)<=o,Oe=Math.abs(i-A)<=s;f.done=G&&Oe}return f.value=f.done?i:A,f},toString:()=>{let d=Math.min(R(P),2e4),A=L(b=>P.next(d*b).value,d,30);return d+"ms "+A},toTransition:()=>{}};return P}D.applyToOptions=e=>{let r=fe(e,100,D);return e.ease=r.ease,e.duration=v(r.duration),e.type="keyframes",e};var xe=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Q=new Set(xe);var de={};function ge(e,r){let t=W(e);return()=>de[r]??t()}var ye=ge(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");var w=([e,r,t,o])=>`cubic-bezier(${e}, ${r}, ${t}, ${o})`;var J={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:w([0,.65,.55,1]),circOut:w([.55,0,1,.45]),backIn:w([.31,.01,.66,-.59]),backOut:w([.33,1.53,.69,.99])};function ee(e,r){if(e)return typeof e=="function"?ye()?L(e,r):"ease-out":Y(e)?w(e):Array.isArray(e)?e.map(t=>ee(t,r)||J.easeOut):J[e]}function F(e,r,t,{delay:o=0,duration:s=300,repeat:n=0,repeatType:i="loop",ease:f="easeOut",times:a}={},m=void 0){let p={[r]:t};a&&(p.offset=a);let c=ee(f,s);Array.isArray(c)&&(p.easing=c),H.value&&Z.waapi++;let l={delay:o,duration:s,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:n+1,direction:i==="reverse"?"alternate":"normal"};m&&(l.pseudoElement=m);let x=e.animate(p,l);return H.value&&x.finished.finally(()=>{Z.waapi--}),x}function Ae(e){return e.replace(/([A-Z])/g,r=>`-${r.toLowerCase()}`)}var N="framerAppearId",re="data-"+Ae(N);function te(e){return e.props[re]}var M=new Map,E=new Map;var k=(e,r)=>{let t=Q.has(r)?"transform":r;return`${e}: ${t}`};function oe(e,r,t){let o=k(e,r),s=M.get(o);if(!s)return null;let{animation:n,startTime:i}=s;function f(){window.MotionCancelOptimisedAnimation?.(e,r,t)}return n.onfinish=f,i===null||window.MotionHandoffIsComplete?.(e)?(f(),null):i}var $,C,ne=new Set;function Ge(){ne.forEach(e=>{e.animation.play(),e.animation.startTime=e.startTime}),ne.clear()}function ie(e,r,t,o,s){if(window.MotionIsMounted)return;let n=e.dataset[N];if(!n)return;window.MotionHandoffAnimation=oe;let i=k(n,r);C||(C=F(e,r,[t[0],t[0]],{duration:1e4,ease:"linear"}),M.set(i,{animation:C,startTime:null}),window.MotionHandoffAnimation=oe,window.MotionHasOptimisedAnimation=(a,m)=>{if(!a)return!1;if(!m)return E.has(a);let p=k(a,m);return!!M.get(p)},window.MotionHandoffMarkAsComplete=a=>{E.has(a)&&E.set(a,!0)},window.MotionHandoffIsComplete=a=>E.get(a)===!0,window.MotionCancelOptimisedAnimation=(a,m,p,c)=>{let l=k(a,m),x=M.get(l);x&&(p&&c===void 0?p.postRender(()=>{p.postRender(()=>{x.animation.cancel()})}):x.animation.cancel(),p&&c?(ne.add(x),p.render(Ge)):(M.delete(l),M.size||(window.MotionCancelOptimisedAnimation=void 0)))},window.MotionCheckAppearSync=(a,m,p)=>{let c=te(a);if(!c)return;let l=window.MotionHasOptimisedAnimation?.(c,m),x=a.props.values?.[m];if(!l||!x)return;let g=p.on("change",y=>{x.get()!==y&&(window.MotionCancelOptimisedAnimation?.(c,m),g())});return g});let f=()=>{C.cancel();let a=F(e,r,t,o);$===void 0&&($=performance.now()),a.startTime=$,M.set(i,{animation:a,startTime:$}),s&&s(a)};E.set(n,!1),C.ready?C.ready.then(f).catch(q):f()}var ae=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Le={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Re={translateX:"px",translateY:"px",translateZ:"px",x:"px",y:"px",z:"px",perspective:"px",transformPerspective:"px",rotate:"deg",rotateX:"deg",rotateY:"deg"};function Te(e,r){let t=Re[e];return!t||typeof r=="string"&&r.endsWith(t)?r:`${r}${t}`}function se(e){return ae.includes(e)}var ze=(e,r)=>ae.indexOf(e)-ae.indexOf(r);function he({transform:e,transformKeys:r},t){let o={},s=!0,n="";r.sort(ze);for(let i of r){let f=e[i],a=!0;typeof f=="number"?a=f===(i.startsWith("scale")?1:0):a=parseFloat(f)===0,a||(s=!1,n+=`${Le[i]||i}(${e[i]}) `),t&&(o[i]=e[i])}return n=n.trim(),t?n=t(o,n):s&&(n="none"),n}function pe(e,r){let t=new Set(Object.keys(e));for(let o in r)t.add(o);return Array.from(t)}function me(e,r){let t=r-e.length;if(t<=0)return e;let o=new Array(t).fill(e[e.length-1]);return e.concat(o)}function B(e){return e*1e3}var be={duration:.001},I={opacity:1,scale:1,translateX:0,translateY:0,translateZ:0,x:0,y:0,z:0,rotate:0,rotateX:0,rotateY:0};function Ve(e,r,t,o,s){return t.delay&&(t.delay=B(t.delay)),t.type==="spring"?Ne(e,r,t,o,s):je(e,r,t,o,s)}function Fe(e,r,t){let o={},s=0,n=0;for(let i of pe(e,r)){let f=e[i]??I[i],a=r[i]??I[i];if(f===void 0||a===void 0||i!=="transformPerspective"&&f===a&&f===I[i])continue;i==="transformPerspective"&&(o[i]=[f,a]);let m=He(f,a,t),{duration:p,keyframes:c}=m;p===void 0||c===void 0||(p>s&&(s=p,n=c.length),o[i]=c)}return{keyframeValuesByProps:o,longestDuration:s,longestLength:n}}function Ne(e,r,t,o,s){let n={},{keyframeValuesByProps:i,longestDuration:f,longestLength:a}=Fe(e,r,t);if(!a)return n;let m={ease:"linear",duration:f,delay:t.delay},p=s?be:m,c={};for(let[x,g]of Object.entries(i))se(x)?c[x]=me(g,a):n[x]={keyframes:me(g,a),options:x==="opacity"?m:p};let l=De(c,o);return l&&(n.transform={keyframes:l,options:p}),n}function $e(e){let{type:r,duration:t,...o}=e;return{duration:B(t),...o}}function je(e,r,t,o,s){let n=$e(t);if(!n)return;let i={},f=s?be:n,a={};for(let p of pe(e,r)){let c=e[p]??I[p],l=r[p]??I[p];c===void 0||l===void 0||p!=="transformPerspective"&&c===l||(se(p)?a[p]=[c,l]:i[p]={keyframes:[c,l],options:p==="opacity"?n:f})}let m=De(a,o);return m&&(i.transform={keyframes:m,options:f}),i}var We=["duration","bounce"],qe=["stiffness","damping","mass"];function ve(e){return qe.some(r=>r in e)?!1:We.some(r=>r in e)}function Xe(e,r,t){return ve(t)?`${e}-${r}-${t.duration}-${t.bounce}`:`${e}-${r}-${t.damping}-${t.stiffness}-${t.mass}`}function Ye(e){return ve(e)?{...e,duration:B(e.duration)}:e}var Me=new Map,Se=10;function He(e,r,t){let o=Xe(e,r,t),s=Me.get(o);if(s)return s;let n=[e,r],i=D({...Ye(t),keyframes:n}),f={done:!1,value:n[0]},a=[],m=0;for(;!f.done&&m<B(10);)f=i.next(m),a.push(f.value),m+=Se;n=a;let p=m-Se,l={keyframes:n,duration:p,ease:"linear"};return Me.set(o,l),l}function De(e,r){let t=[],o=Object.values(e)[0]?.length;if(!o)return;let s=Object.keys(e);for(let n=0;n<o;n++){let i={};for(let[a,m]of Object.entries(e)){let p=m[n];p!==void 0&&(i[a]=Te(a,p))}let f=he({transform:i,transformKeys:s},r);t.push(f)}return t}function Ze(e,r){if(!r)for(let t in e){let o=e[t];return o?.legacy===!0?o:void 0}}function we(e,r,t,o,s,n){for(let[i,f]of Object.entries(e)){let a=n?f[n]:void 0;if(a===null||!a&&f.default===null)continue;let m=a??f.default??Ze(f,n);if(!m)continue;let{initial:p,animate:c,transformTemplate:l}=m;if(!p||!c)continue;let{transition:x,...g}=c,y=Ve(p,g,x,Ue(l,o),s);if(!y)continue;let T={},h={};for(let[S,P]of Object.entries(y))T[S]=P.keyframes,h[S]=P.options;let K=n?`:not(.hidden-${n}) `:"";r(`${K}[${t}="${i}"]`,T,h)}}function Ue(e,r){if(!(!e||!r))return(t,o)=>e.replace(r,o)}function Pe(e){return e?e.find(t=>t.mediaQuery?window.matchMedia(t.mediaQuery).matches===!0:!1)?.hash:void 0}var zt={animateAppearEffects:we,getActiveVariantHash:Pe,spring:D,startOptimizedAppearAnimation:ie};return zt})()

(()=>{function d(e){let t=Date.prototype.toLocaleString,o=Date.prototype.toLocaleDateString;t&&(Date.prototype.toLocaleString=function(r,n){let i=s(this,r,n);return u(e.current.Date.toLocaleString,i,()=>t.call(this,r,n))}),o&&(Date.prototype.toLocaleDateString=function(r,n){let i=s(this,r,n);return u(e.current.Date.toLocaleDateString,i,()=>o.call(this,r,n))});let a=Object.getOwnPropertyDescriptors(Intl.DateTimeFormat.prototype).format.get,c=Intl.DateTimeFormat.prototype.formatRange,b=Intl.DateTimeFormat.prototype.formatToParts,D=Intl.DateTimeFormat.prototype.formatRangeToParts;a&&Object.defineProperty(Intl.DateTimeFormat.prototype,"format",{get(){function m(r){let n=p(this),i=s(r,n);return u(e.current.DateTimeFormat.format,i,()=>a.call(this)(r))}return m.bind(this)}}),c&&(Intl.DateTimeFormat.prototype.formatRange=function(r,n){let i=p(this),l=s(r,n,i);return u(e.current.DateTimeFormat.formatRange,l,()=>c.call(this,r,n))}),b&&(Intl.DateTimeFormat.prototype.formatToParts=function(r){let n=p(this),i=s(r,n);return u(e.current.DateTimeFormat.formatToParts,i,()=>b.call(this,r)).map(g)}),D&&(Intl.DateTimeFormat.prototype.formatRangeToParts=function(r,n){let i=p(this),l=s(r,n,i);return u(e.current.DateTimeFormat.formatRangeToParts,l,()=>D.call(this,r,n)).map(g)});let y=Number.prototype.toLocaleString;y&&(Number.prototype.toLocaleString=function(r,n){let i=s(this,r,n);return u(e.current.Number.toLocaleString,i,()=>y.call(this,r,n))});let h=Object.getOwnPropertyDescriptors(Intl.NumberFormat.prototype).format.get,F=Intl.NumberFormat.prototype.formatRange,T=Intl.NumberFormat.prototype.formatToParts,I=Intl.NumberFormat.prototype.formatRangeToParts;h&&Object.defineProperty(Intl.NumberFormat.prototype,"format",{get(){function m(r){let n=f(this),i=s(r,n);return u(e.current.NumberFormat.format,i,()=>h.call(this)(r))}return m.bind(this)}}),F&&(Intl.NumberFormat.prototype.formatRange=function(r,n){let i=f(this),l=s(r,n,i);return u(e.current.NumberFormat.formatRange,l,()=>F.call(this,r,n))}),T&&(Intl.NumberFormat.prototype.formatToParts=function(r){let n=f(this),i=s(r,n);return u(e.current.NumberFormat.formatToParts,i,()=>T.call(this,r)).map(g)}),I&&(Intl.NumberFormat.prototype.formatRangeToParts=function(r,n){let i=f(this),l=s(r,n,i);return u(e.current.NumberFormat.formatRangeToParts,l,()=>I.call(this,r,n)).map(g)})}function P(e,t){return typeof t=="bigint"?`${t}n`:t instanceof Date?t.getTime():t}function s(...e){let t=JSON.stringify(e,P),o=0;for(let a=0;a<t.length;a++)o+=t.charCodeAt(a),o+=o<<10,o^=o>>6;return o+=o<<3,o^=o>>11,o+=o<<15,o>>>0}function u(e,t,o){let a=e[t];if(typeof a<"u")return a;let c=o();return e[t]=c,c}function g(e){return{...e}}function p(e){let t=e.resolvedOptions(),o={locale:t.locale,calendar:t.calendar,numberingSystem:t.numberingSystem,timeZone:t.timeZone,hour12:t.hour12,weekday:t.weekday,era:t.era,year:t.year,month:t.month,day:t.day,hour:t.hour,minute:t.minute,second:t.second,timeZoneName:t.timeZoneName};for(let a in t)a in o||(o[a]=t[a]);return o}function f(e){let t=e.resolvedOptions(),o={locale:t.locale,numberingSystem:t.numberingSystem,style:t.style,currency:t.currency,currencyDisplay:t.currencyDisplay,currencySign:t.currencySign,unit:t.unit,unitDisplay:t.unitDisplay,minimumIntegerDigits:t.minimumIntegerDigits,minimumFractionDigits:t.minimumFractionDigits,maximumFractionDigits:t.maximumFractionDigits,minimumSignificantDigits:t.minimumSignificantDigits,maximumSignificantDigits:t.maximumSignificantDigits,useGrouping:t.useGrouping===!0?"auto":t.useGrouping,notation:t.notation,compactDisplay:t.compactDisplay,signDisplay:t.signDisplay,roundingIncrement:t.roundingIncrement??1,roundingMode:t.roundingMode??"halfExpand",roundingPriority:t.roundingPriority??"auto",trailingZeroDisplay:t.trailingZeroDisplay??"auto"};for(let a in t)a in o||(o[a]=t[a]);return o}return d})()({current:{"Date":{"toLocaleString":{"122541432":"Mar 5, 2026","872003739":"Mar 4, 2026","2006906737":"Mar 1, 2026","4233774281":"Feb 27, 2026"},"toLocaleDateString":{}},"DateTimeFormat":{"format":{},"formatRange":{},"formatToParts":{},"formatRangeToParts":{}},"Number":{"toLocaleString":{}},"NumberFormat":{"format":{},"formatRange":{},"formatToParts":{},"formatRangeToParts":{}}}})

/**
 * Scroll Reveal Polyfill (Vanilla JS)
 *
 * Uses IntersectionObserver + element.animate() — zero dependencies.
 * Works from file:// protocol (no module imports, no CDN).
 *
 * Targets: [data-nce-scroll] elements tagged by page-processor Cheerio phase.
 * Also scans [style] at runtime for opacity:0 + transform elements
 * not caught by Cheerio (covers computed/cascaded styles).
 */
(function() {
  var fallbackStyle = document.querySelector('style[data-nce-scroll-fallback]');
  var observer;
  var mutationObserver;
  var mutationTimer = null;

  // Check API support — if missing, CSS fallback handles visibility
  if (typeof IntersectionObserver === 'undefined' || typeof Element.prototype.animate !== 'function') {
    return;
  }

  // Remove CSS fallback — JS will handle animation
  if (fallbackStyle) fallbackStyle.remove();

  var prefersReducedMotion = window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // IMPORTANT: Keep in sync with isCenteringTransform() in page-processor.ts
  function isCenteringTransform(transform) {
    var t = transform || '';
    return /translate\(\s*-50%\s*,\s*-50%\s*\)/.test(t)
      || /translateX\(\s*-50%\s*\)/.test(t)
      || /translateY\(\s*-50%\s*\)/.test(t);
  }

  function getInlineStyleTransform(el) {
    var styleAttr = el.getAttribute('style') || '';
    var match = styleAttr.match(/transform\s*:\s*([^;]+)/);
    return match ? match[1].trim() : '';
  }

  function getComputedTransform(el) {
    var computed = window.getComputedStyle ? window.getComputedStyle(el) : null;
    if (!computed) return '';
    return computed.transform || computed.webkitTransform || '';
  }

  function getInlineStyleFilter(el) {
    var styleAttr = el.getAttribute('style') || '';
    var match = styleAttr.match(/(?:^|;)\s*filter\s*:\s*([^;]+)/);
    if (match) return match[1].trim();
    match = styleAttr.match(/(?:^|;)\s*-webkit-filter\s*:\s*([^;]+)/);
    return match ? match[1].trim() : '';
  }

  // Keep in sync with isNoOpFilter() in page-processor.ts.
  // blur(0px), brightness(1), etc. are visually equivalent to `none` — Framer
  // emits them as GPU stacking-context hints on large fractions of a page, and
  // interpolating them as scroll-reveal keyframes is pure overhead.
  function isNoOpFilter(value) {
    if (!value) return true;
    var trimmed = (value + '').trim().toLowerCase();
    if (!trimmed || trimmed === 'none') return true;
    var pieces = trimmed
      .split(/\)\s+/)
      .map(function (p) { return p.charAt(p.length - 1) === ')' ? p : p + ')'; })
      .filter(Boolean);
    return pieces.every(function (piece) {
      var m = piece.match(/^([a-z-]+)\(([^)]*)\)$/);
      if (!m) return false;
      var fn = m[1];
      var args = m[2].trim();
      var num = parseFloat(args);
      switch (fn) {
        case 'blur':
        case 'grayscale':
        case 'sepia':
        case 'invert':
        case 'hue-rotate':
          return isFinite(num) && num === 0;
        case 'brightness':
        case 'contrast':
        case 'saturate':
        case 'opacity':
          return isFinite(num) && (num === 1 || args === '100%');
        case 'drop-shadow': {
          var nums = args.match(/-?\d+(?:\.\d+)?/g) || [];
          return nums.length >= 2 && nums.slice(0, Math.min(nums.length, 4)).every(function (n) { return parseFloat(n) === 0; });
        }
        default:
          return false;
      }
    });
  }

  function getComputedFilter(el) {
    var computed = window.getComputedStyle ? window.getComputedStyle(el) : null;
    if (!computed) return '';
    return computed.filter || computed.webkitFilter || '';
  }

  function getInitialTransform(el) {
    return el.getAttribute('data-nce-initial-transform')
      || getInlineStyleTransform(el)
      || getComputedTransform(el)
      || 'translateY(20px)';
  }

  function getInitialFilter(el) {
    var attr = el.getAttribute('data-nce-initial-filter');
    if (attr && !isNoOpFilter(attr)) return attr;
    var inline = getInlineStyleFilter(el);
    if (inline && !isNoOpFilter(inline)) return inline;
    var computed = getComputedFilter(el);
    if (computed && !isNoOpFilter(computed)) return computed;
    return 'none';
  }

  function getFinalFilter(el) {
    var explicitFinal = el.getAttribute('data-nce-scroll-final-filter');
    if (explicitFinal && !isNoOpFilter(explicitFinal)) return explicitFinal;

    var initialFilter = getInitialFilter(el);
    if (initialFilter && initialFilter !== 'none') {
      return 'none';
    }

    return 'none';
  }

  function tagRuntimeCandidates() {
    document.querySelectorAll('body *').forEach(function(el) {
      if (el.hasAttribute('data-nce-scroll')) return;

      var computed = window.getComputedStyle ? window.getComputedStyle(el) : null;
      if (!computed) return;
      if (computed.display === 'none' || computed.visibility === 'hidden') return;

      var rect = typeof el.getBoundingClientRect === 'function' ? el.getBoundingClientRect() : null;
      if (!rect || (rect.width === 0 && rect.height === 0)) return;

      var opacity = parseFloat(computed.opacity || '1');
      var transform = computed.transform || computed.webkitTransform || '';
      if (!(opacity <= 0.01) || !transform || transform === 'none') return;

      var inlineTransform = getInlineStyleTransform(el);
      // Centering transforms — skip entirely (not a scroll animation).
      // Don't force opacity:1 — these may be hover tooltips that should stay hidden.
      if (isCenteringTransform(inlineTransform)) return;

      el.setAttribute('data-nce-scroll', 'true');
      el.setAttribute('data-nce-initial-transform', inlineTransform || transform);
      var filter = getInlineStyleFilter(el) || getComputedFilter(el);
      if (filter && filter !== 'none' && !isNoOpFilter(filter)) {
        el.setAttribute('data-nce-initial-filter', filter);
        el.setAttribute('data-nce-scroll-final-filter', 'none');
      }
    });
  }

  function applyFinalStyles(el, finalTransform, finalFilter) {
    el.style.opacity = '1';
    el.style.transform = finalTransform;
    el.style.filter = finalFilter;
    el.style.webkitFilter = finalFilter;
    el.setAttribute('data-nce-scroll-revealed', 'true');
    el.removeAttribute('data-nce-scroll-observing');
  }

  function revealElement(el) {
    if (!el || el.hasAttribute('data-nce-scroll-revealed')) return;

    var initialTransform = getInitialTransform(el);

    // Skip centering transforms
    if (isCenteringTransform(initialTransform)) {
      el.style.opacity = '1';
      el.setAttribute('data-nce-scroll-revealed', 'true');
      el.removeAttribute('data-nce-scroll-observing');
      if (observer) observer.unobserve(el);
      return;
    }

    // Final transform: use explicit final if set (design transforms like rotate/skew),
    // otherwise strip entrance offsets, keep perspective
    var finalTransform = el.getAttribute('data-nce-scroll-final-transform');
    if (!finalTransform) {
      finalTransform = 'none';
      if (/perspective\([^)]+\)/.test(initialTransform)) {
        var p = initialTransform.match(/perspective\([^)]+\)/);
        finalTransform = p ? p[0] : 'none';
      }
    }
    var initialFilter = getInitialFilter(el);
    var finalFilter = getFinalFilter(el);

    var delayMs = parseInt(el.getAttribute('data-nce-scroll-delay') || '0', 10);
    if (!isFinite(delayMs) || delayMs < 0) delayMs = 0;
    // Clamp wildly large delays — Framer occasionally emits 2s+ stagger on
    // long pages which feels broken after export since we reveal on view.
    if (delayMs > 1500) delayMs = 1500;

    // Honor per-element duration extracted from Framer's appear config
    // (data-nce-scroll-duration). Clamp to the same band we use during capture.
    var durationMs = parseInt(el.getAttribute('data-nce-scroll-duration') || '0', 10);
    if (!isFinite(durationMs) || durationMs < 100 || durationMs > 3000) durationMs = 600;

    try {
      var animation = el.animate(
        [
          {
            opacity: 0,
            transform: initialTransform,
            filter: initialFilter,
            webkitFilter: initialFilter
          },
          {
            opacity: 1,
            transform: finalTransform,
            filter: finalFilter,
            webkitFilter: finalFilter
          }
        ],
        { duration: durationMs, delay: delayMs, easing: 'ease-out', fill: 'forwards' }
      );
      animation.onfinish = function() { applyFinalStyles(el, finalTransform, finalFilter); };
      animation.oncancel = function() { applyFinalStyles(el, finalTransform, finalFilter); };
    } catch {
      applyFinalStyles(el, finalTransform, finalFilter);
    }

    if (observer) observer.unobserve(el);
  }

  function revealImmediately(el) {
    if (!el || el.hasAttribute('data-nce-scroll-revealed')) return;

    var explicitFinal = el.getAttribute('data-nce-scroll-final-transform');
    if (explicitFinal) {
      el.style.transform = explicitFinal;
    } else {
      var t = getInitialTransform(el);
      if (/perspective\([^)]+\)/.test(t)) {
        el.style.transform = t.match(/perspective\([^)]+\)/)[0];
      } else {
        el.style.transform = 'none';
      }
    }
    var finalFilter = getFinalFilter(el);
    el.style.filter = finalFilter;
    el.style.webkitFilter = finalFilter;
    el.style.opacity = '1';
    el.setAttribute('data-nce-scroll-revealed', 'true');
    el.removeAttribute('data-nce-scroll-observing');
    if (observer) observer.unobserve(el);
  }

  function isWithinRevealBand(rect, topThreshold, bottomThreshold) {
    return rect.top <= topThreshold && rect.bottom >= bottomThreshold;
  }

  function hasEntranceOffset(transform) {
    return !!transform
      && transform !== 'none'
      && !isCenteringTransform(transform)
      && /translate(?:3d|X|Y)?\(/.test(transform);
  }

  function hasVisibleAncestor(el, viewportHeight, topThreshold, bottomThreshold) {
    var depth = 0;
    var cur = el ? el.parentElement : null;

    while (cur && cur !== document.body && depth < 5) {
      var computed = window.getComputedStyle ? window.getComputedStyle(cur) : null;
      if (computed && (computed.display === 'none' || computed.visibility === 'hidden')) {
        cur = cur.parentElement;
        depth++;
        continue;
      }

      var rect = typeof cur.getBoundingClientRect === 'function' ? cur.getBoundingClientRect() : null;
      if (rect && !(rect.width === 0 && rect.height === 0)) {
        if (isWithinRevealBand(rect, topThreshold, bottomThreshold)) return true;

        // If a nearby layout ancestor is clearly offscreen, don't keep walking up to
        // large root wrappers that would make every translated child look visible.
        if (rect.bottom <= 0 || rect.top >= viewportHeight) return false;
      }

      cur = cur.parentElement;
      depth++;
    }

    return false;
  }

  function observeTaggedElements() {
    if (!observer) return;
    document.querySelectorAll('[data-nce-scroll]:not([data-nce-scroll-revealed]):not([data-nce-scroll-observing])').forEach(function(el) {
      el.setAttribute('data-nce-scroll-observing', 'true');
      observer.observe(el);
    });
  }

  function revealVisibleElements() {
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    var topThreshold = Math.max(viewportHeight * 0.92, 120);
    var bottomThreshold = Math.max(viewportHeight * 0.08, 24);

    document.querySelectorAll('[data-nce-scroll]:not([data-nce-scroll-revealed])').forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if ((rect.width === 0 && rect.height === 0) || rect.bottom <= 0) return;
      if (isWithinRevealBand(rect, topThreshold, bottomThreshold)) {
        revealElement(el);
        return;
      }

      var initialTransform = getInitialTransform(el);
      if (hasEntranceOffset(initialTransform) && hasVisibleAncestor(el, viewportHeight, topThreshold, bottomThreshold)) {
        revealElement(el);
      }
    });
  }

  function queueVisibleCheck() {
    window.requestAnimationFrame(function() {
      window.requestAnimationFrame(revealVisibleElements);
    });
  }

  function runPass() {
    tagRuntimeCandidates();

    var els = document.querySelectorAll('[data-nce-scroll]:not([data-nce-scroll-revealed])');
    if (els.length === 0) return;

    if (prefersReducedMotion) {
      els.forEach(revealImmediately);
      return;
    }

    observeTaggedElements();
    queueVisibleCheck();
  }

  if (!prefersReducedMotion) {
    observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        revealElement(entry.target);
      });
    }, { threshold: 0.1 });
  }

  function scheduleMutationPass() {
    if (mutationTimer !== null) {
      window.clearTimeout(mutationTimer);
    }
    mutationTimer = window.setTimeout(function() {
      mutationTimer = null;
      runPass();
    }, 80);
  }

  runPass();
  window.addEventListener('load', runPass, { once: true });
  window.addEventListener('pageshow', runPass);
  window.addEventListener('resize', scheduleMutationPass, { passive: true });
  window.setTimeout(runPass, 250);
  window.setTimeout(runPass, 1000);
  window.setTimeout(runPass, 2500);

  if (typeof MutationObserver === 'function' && document.body) {
    mutationObserver = new MutationObserver(scheduleMutationPass);
    mutationObserver.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: [
        'style',
        'class',
        'data-nce-scroll',
        'data-nce-scroll-delay',
        'data-nce-scroll-duration',
        'data-nce-initial-transform',
        'data-nce-scroll-final-transform',
        'data-nce-initial-filter',
        'data-nce-scroll-final-filter'
      ]
    });
  }
})();


/**
 * Framer Mouse-Follow Polyfill
 *
 * Framer's `useMouse` / `useMousePosition` hooks drive element transforms
 * tied to cursor position — magnetic buttons, mouse-parallax photos,
 * spotlight gradients. The capture phase in page-processor.ts moves the
 * mouse to 4 viewport positions and samples inline styles. When the style
 * varies on an axis, it writes:
 *
 *   data-nce-mouse-follow="true"
 *   data-nce-mouse-x-from="<inline style at mouse X=0.2*vw>"
 *   data-nce-mouse-x-to="<inline style at mouse X=0.8*vw>"
 *   data-nce-mouse-y-from="<inline style at mouse Y=0.2*vh>"
 *   data-nce-mouse-y-to="<inline style at mouse Y=0.8*vh>"
 *
 * Transforms decomposed into per-function args interpolate smoothly;
 * missing functions on one side are padded with identity values.
 */
(function() {
  var nodes = [];
  var ticking = false;
  var mouseX = null;
  var mouseY = null;

  function parseDecl(decl) {
    var out = { opacity: null, transform: null };
    if (!decl) return out;
    decl.split(';').forEach(function(chunk) {
      var i = chunk.indexOf(':');
      if (i < 0) return;
      var prop = chunk.slice(0, i).trim().toLowerCase();
      var val = chunk.slice(i + 1).trim();
      if (prop === 'opacity') out.opacity = parseFloat(val);
      else if (prop === 'transform') out.transform = val;
    });
    return out;
  }

  function parseTransform(str) {
    var result = [];
    if (!str || str === 'none') return result;
    var re = /([a-zA-Z][a-zA-Z0-9]*)\(([^)]+)\)/g;
    var m;
    while ((m = re.exec(str)) !== null) {
      var args = m[2].split(',').map(function(s) { return s.trim(); });
      result.push({ fn: m[1], args: args });
    }
    return result;
  }

  function neutralForFn(fn) {
    if (/^scale/i.test(fn)) return '1';
    if (/^rotate/i.test(fn)) return '0deg';
    if (/^skew/i.test(fn)) return '0deg';
    if (/^perspective/i.test(fn)) return '1200px';
    return '0';
  }

  function splitUnit(value) {
    var m = String(value).match(/^(-?[\d.]+)([a-zA-Z%]*)$/);
    if (!m) return null;
    return { num: parseFloat(m[1]), unit: m[2] || '' };
  }

  function lerpArg(fromArg, toArg, p) {
    var f = splitUnit(fromArg);
    var t = splitUnit(toArg);
    if (!f || !t) return p < 0.5 ? fromArg : toArg;
    var num = f.num + (t.num - f.num) * p;
    var unit = f.unit || t.unit || '';
    return +num.toFixed(4) + unit;
  }

  function interpolateTransform(fromList, toList, p) {
    var fromByFn = Object.create(null);
    var toByFn = Object.create(null);
    fromList.forEach(function(item) { fromByFn[item.fn] = item; });
    toList.forEach(function(item) { toByFn[item.fn] = item; });
    var primary = fromList.length >= toList.length ? fromList : toList;
    var secondary = primary === fromList ? toList : fromList;
    var seen = Object.create(null);
    var order = [];
    primary.forEach(function(item) {
      if (!seen[item.fn]) { seen[item.fn] = true; order.push(item.fn); }
    });
    secondary.forEach(function(item) {
      if (!seen[item.fn]) { seen[item.fn] = true; order.push(item.fn); }
    });
    var out = [];
    order.forEach(function(fn) {
      var from = fromByFn[fn];
      var to = toByFn[fn];
      var fromArgs, toArgs;
      if (from && to) {
        fromArgs = from.args;
        toArgs = to.args;
      } else if (from && !to) {
        fromArgs = from.args;
        toArgs = fromArgs.map(function() { return neutralForFn(fn); });
      } else {
        toArgs = to.args;
        fromArgs = toArgs.map(function() { return neutralForFn(fn); });
      }
      var interped = fromArgs.map(function(fa, j) {
        var ta = toArgs[j] != null ? toArgs[j] : fa;
        return lerpArg(fa, ta, p);
      });
      out.push(fn + '(' + interped.join(', ') + ')');
    });
    return out.join(' ');
  }

  function blendXY(transformX, transformY, baseTransform) {
    // When both X and Y keyframes exist, average their interpolated transforms.
    // Otherwise use whichever axis is present, falling back to base.
    if (transformX && transformY) {
      // For each function present in both, average the args.
      var lx = parseTransform(transformX);
      var ly = parseTransform(transformY);
      var merged = Object.create(null);
      lx.forEach(function(item) { merged[item.fn] = { xArgs: item.args, yArgs: null }; });
      ly.forEach(function(item) {
        if (merged[item.fn]) merged[item.fn].yArgs = item.args;
        else merged[item.fn] = { xArgs: null, yArgs: item.args };
      });
      var out = [];
      Object.keys(merged).forEach(function(fn) {
        var m = merged[fn];
        if (m.xArgs && m.yArgs) {
          var args = m.xArgs.map(function(xa, i) {
            var ya = m.yArgs[i] != null ? m.yArgs[i] : xa;
            var fx = splitUnit(xa);
            var fy = splitUnit(ya);
            if (!fx || !fy) return xa;
            var unit = fx.unit || fy.unit || '';
            return +((fx.num + fy.num) / 2).toFixed(4) + unit;
          });
          out.push(fn + '(' + args.join(', ') + ')');
        } else if (m.xArgs) {
          out.push(fn + '(' + m.xArgs.join(', ') + ')');
        } else {
          out.push(fn + '(' + m.yArgs.join(', ') + ')');
        }
      });
      return out.join(' ');
    }
    return transformX || transformY || baseTransform || '';
  }

  function applyProgress(node) {
    var vw = window.innerWidth || document.documentElement.clientWidth || 1;
    var vh = window.innerHeight || document.documentElement.clientHeight || 1;
    // Framer samples at x=0.2*vw → from and x=0.8*vw → to, so normalize mouse
    // to that 0.2→0.8 range and clamp outside.
    var px = mouseX == null ? 0.5 : Math.max(0, Math.min(1, (mouseX - 0.2 * vw) / (0.6 * vw)));
    var py = mouseY == null ? 0.5 : Math.max(0, Math.min(1, (mouseY - 0.2 * vh) / (0.6 * vh)));

    var tX = null;
    var tY = null;
    var oX = null;
    var oY = null;

    if (node.xFromT || node.xToT) {
      tX = interpolateTransform(node.xFromT, node.xToT, px);
    }
    if (node.yFromT || node.yToT) {
      tY = interpolateTransform(node.yFromT, node.yToT, py);
    }
    if (node.xFrom.opacity != null && node.xTo.opacity != null) {
      oX = node.xFrom.opacity + (node.xTo.opacity - node.xFrom.opacity) * px;
    }
    if (node.yFrom.opacity != null && node.yTo.opacity != null) {
      oY = node.yFrom.opacity + (node.yTo.opacity - node.yFrom.opacity) * py;
    }

    var finalT = blendXY(tX, tY, '');
    if (finalT) node.el.style.transform = finalT;

    if (oX != null && oY != null) {
      node.el.style.opacity = +(((oX + oY) / 2)).toFixed(4);
    } else if (oX != null) {
      node.el.style.opacity = +oX.toFixed(4);
    } else if (oY != null) {
      node.el.style.opacity = +oY.toFixed(4);
    }
  }

  function update() {
    nodes.forEach(applyProgress);
  }

  function schedule() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function() {
      ticking = false;
      update();
    });
  }

  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    schedule();
  }

  function init() {
    var elements = document.querySelectorAll('[data-nce-mouse-follow]');
    if (elements.length === 0) return;

    elements.forEach(function(el) {
      var xFrom = parseDecl(el.getAttribute('data-nce-mouse-x-from') || '');
      var xTo = parseDecl(el.getAttribute('data-nce-mouse-x-to') || '');
      var yFrom = parseDecl(el.getAttribute('data-nce-mouse-y-from') || '');
      var yTo = parseDecl(el.getAttribute('data-nce-mouse-y-to') || '');
      nodes.push({
        el: el,
        xFrom: xFrom,
        xTo: xTo,
        yFrom: yFrom,
        yTo: yTo,
        xFromT: parseTransform(xFrom.transform || ''),
        xToT: parseTransform(xTo.transform || ''),
        yFromT: parseTransform(yFrom.transform || ''),
        yToT: parseTransform(yTo.transform || ''),
      });
    });

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('pointermove', onMouseMove, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();


/**
 * Nav Scroll Polyfill — Structural Detection Algorithm
 *
 * Adds scroll-based background transition for fixed navigation headers.
 * Frameworks like Framer Motion normally drive this via variant animations on scroll.
 *
 * ALGORITHM:
 *   1. PRE-TAGGED: Check for [data-nce-nav-scroll] (set by page-processor.ts
 *      during the Cheerio phase, which can inspect CSS rules for position:fixed).
 *   2. SELF-DETECT: If no pre-tagged elements found, scan for elements matching
 *      the fixed-transparent-nav heuristic:
 *        a. computedStyle position is "fixed" or "sticky"
 *        b. computedStyle top ≤ 5px (pinned to top)
 *        c. Background is transparent (rgba alpha ≈ 0, or "transparent")
 *        d. Contains ≥ 1 anchor link (navigation heuristic)
 *   3. SCROLL HANDLER: On scroll > 50px → apply dark bg + backdrop blur.
 *      On scroll ≤ 10px → revert. Hysteresis gap prevents flicker.
 *   4. TARGET BG: Read from data-nce-nav-scroll-bg if pre-tagged, else default
 *      to rgba(0,0,0,0.8).
 */
(function() {
    // ─── Detection ─────────────────────────────────────────────

    /** Check if a background-color string is transparent */
    function isTransparentBg(bg) {
        if (!bg || bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)') return true;
        var m = bg.match(/rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,?\s*([\d.]+)?\s*\)/);
        if (m && m[1] !== undefined) return parseFloat(m[1]) < 0.05;
        return false;
    }

    /** Pick a scroll background that contrasts with the nav's text color */
    function inferScrollBg(el) {
        var link = el.querySelector('a');
        var textColor = link ? getComputedStyle(link).color : getComputedStyle(el).color;
        var m = textColor.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
        if (m) {
            // Relative luminance approximation
            var lum = (parseInt(m[1]) * 299 + parseInt(m[2]) * 587 + parseInt(m[3]) * 114) / 1000;
            // Light text → dark bg, dark text → light bg
            if (lum > 140) return 'rgba(0,0,0,0.8)';
            return 'rgba(255,255,255,0.85)';
        }
        return 'rgba(0,0,0,0.8)';
    }

    /** Find nav elements that should get scroll behavior.
     *  Returns Array<{ el: Element, targetBg: string }> */
    function findNavs() {
        var results = [];

        // 1. Pre-tagged by page-processor
        document.querySelectorAll('[data-nce-nav-scroll]').forEach(function(el) {
            results.push({
                el: el,
                targetBg: el.getAttribute('data-nce-nav-scroll-bg') || inferScrollBg(el)
            });
        });

        if (results.length > 0) return results;

        // 2. Self-detect: scan <nav> and header-like elements
        var candidates = document.querySelectorAll('nav, header, [role="navigation"]');
        candidates.forEach(function(el) {
            var cs = getComputedStyle(el);

            // Also check the parent (Framer wraps nav in a -container div that
            // holds position:fixed while the <nav> itself has the bg color)
            var parent = el.parentElement;
            var pcs = parent ? getComputedStyle(parent) : null;

            var isFixed = cs.position === 'fixed' || cs.position === 'sticky'
                || (pcs && (pcs.position === 'fixed' || pcs.position === 'sticky'));
            var isTop = parseFloat(cs.top) <= 5
                || (pcs && parseFloat(pcs.top) <= 5);

            if (!isFixed || !isTop) return;
            if (!isTransparentBg(cs.backgroundColor)) return;
            if (el.querySelectorAll('a').length === 0) return;

            results.push({ el: el, targetBg: inferScrollBg(el) });
        });

        return results;
    }

    // ─── Scroll Handler ────────────────────────────────────────

    var navs = findNavs();
    if (!navs.length) return;

    navs.forEach(function(nav) {
        var el = nav.el;
        var targetBg = nav.targetBg;
        var originalBg = el.style.backgroundColor || getComputedStyle(el).backgroundColor;
        var originalBackdrop = el.style.backdropFilter || 'none';

        el.style.transition = 'background-color 0.3s ease, backdrop-filter 0.3s ease, -webkit-backdrop-filter 0.3s ease';

        var scrolled = false;
        var ticking = false;

        function onScroll() {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(function() {
                var y = window.pageYOffset || document.documentElement.scrollTop;
                if (y > 50 && !scrolled) {
                    scrolled = true;
                    el.style.backgroundColor = targetBg;
                    el.style.backdropFilter = 'blur(5px)';
                    el.style.webkitBackdropFilter = 'blur(5px)';
                } else if (y <= 10 && scrolled) {
                    scrolled = false;
                    el.style.backgroundColor = originalBg;
                    el.style.backdropFilter = originalBackdrop;
                    el.style.webkitBackdropFilter = originalBackdrop;
                }
                ticking = false;
            });
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    });
})();


(function() {
  function getPathname(urlBase) {
    var a = document.createElement('a');
    a.href = urlBase;
    return a.pathname.replace(/\/$/, '') || '/';
  }

  function matchesCurrent(href) {
    if (!href || href === '#' || href.startsWith('javascript:')) return false;

    var currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    var linkPath = getPathname(href);

    // Exact match
    if (currentPath === linkPath) return true;

    // Static export match (e.g. current is /about.html, link is /about or /about/)
    var currentStripped = currentPath.replace(/\.html$/, '');
    var linkStripped = linkPath.replace(/\.html$/, '');
    if (currentStripped === linkStripped) return true;

    // Index match
    if (currentStripped + '/index' === linkStripped) return true;
    if (linkStripped + '/index' === currentStripped) return true;

    return false;
  }

  function applyActiveState(el) {
    // Standard generic class
    el.classList.add('active', 'current', 'w--current');
    el.setAttribute('aria-current', 'page');
    
    // Framer Active / Hover Mocking
    // Some Framer sites use opacity for nav unselected, we force opacity 1.
    if (el.closest('[data-framer-name]')) {
      el.style.opacity = '1';
      // Attempt to find an internal text node and embolden it if that's a common pattern, 
      // though opacity is the safest cross-site Framer fallback if variants aren't loaded.
      var innerSpan = el.querySelector('span');
      if (innerSpan) {
        innerSpan.style.opacity = '1';
      }
    }
  }

  window.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav a, header a, [role="navigation"] a, .nav a, .navbar a');
    var foundActive = false;

    navLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      if (matchesCurrent(href)) {
        applyActiveState(link);
        foundActive = true;
      }
    });

    // If no direct 'a' match found, check for parents (like li) wrap
    if (!foundActive) {
      document.querySelectorAll('nav li, header li, .nav-item').forEach(function(li) {
        var a = li.querySelector('a');
        if (a && matchesCurrent(a.getAttribute('href'))) {
          applyActiveState(li);
          applyActiveState(a);
        }
      });
    }
  });
})();


/**
 * Hover Patterns Polyfill — Structural Detection (cross-platform)
 *
 * Adds hover effects to structurally-tagged elements:
 * - [data-nce-hover-nav]: nav links get opacity transition
 * - [data-nce-hover-card] + [data-nce-hover-card-img]: card links get
 *   image darkening overlay + arrow indicator on hover
 *
 * Tagged by page-processor.ts step 8d using structural detection
 * (nav containers, links with image+heading children).
 */
(function() {
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;

    var cssRules = [];

    // 1. Nav link hover — opacity transition
    if (document.querySelector('[data-nce-hover-nav]')) {
        cssRules.push(
            '[data-nce-hover-nav] {',
            '  transition: opacity 0.2s ease;',
            '}',
            '[data-nce-hover-nav]:hover {',
            '  opacity: 0.65;',
            '}'
        );
    }

    // 2. Card image hover — darken + arrow
    if (document.querySelector('[data-nce-hover-card]')) {
        cssRules.push(
            '[data-nce-hover-card-img] {',
            '  overflow: hidden;',
            '}',
            '[data-nce-hover-card-img]::before {',
            '  content: "";',
            '  position: absolute;',
            '  inset: 0;',
            '  background: rgba(0,0,0,0);',
            '  transition: background 0.3s ease;',
            '  border-radius: inherit;',
            '  pointer-events: none;',
            '  z-index: 2;',
            '}',
            '[data-nce-hover-card]:hover [data-nce-hover-card-img]::before {',
            '  background: rgba(0,0,0,0.18);',
            '}',
            '[data-nce-hover-card-img]::after {',
            '  content: "\\2192";',
            '  position: absolute;',
            '  top: 50%;',
            '  left: 50%;',
            '  transform: translate(-50%, -50%) scale(0.8);',
            '  font-size: 28px;',
            '  color: white;',
            '  opacity: 0;',
            '  transition: opacity 0.3s ease, transform 0.3s ease;',
            '  z-index: 3;',
            '  pointer-events: none;',
            '  width: 48px;',
            '  height: 48px;',
            '  line-height: 48px;',
            '  text-align: center;',
            '  border-radius: 50%;',
            '  background: rgba(0,0,0,0.4);',
            '}',
            '[data-nce-hover-card]:hover [data-nce-hover-card-img]::after {',
            '  opacity: 1;',
            '  transform: translate(-50%, -50%) scale(1);',
            '}',
            '[data-nce-hover-card] {',
            '  cursor: pointer;',
            '}'
        );
    }

    if (cssRules.length > 0) {
        var style = document.createElement('style');
        style.setAttribute('data-nce-hover-patterns', '');
        style.textContent = '@media (hover: hover) {\n' + cssRules.join('\n') + '\n}';
        document.head.appendChild(style);
    }
})();


/**
 * Accordion Polyfill — Structural Detection Algorithm
 *
 * Replaces framework AnimatePresence for accordion/FAQ components.
 * Instead of matching specific attribute names, this polyfill detects the
 * accordion *pattern* algorithmically:
 *
 * ALGORITHM:
 *   1. Find "accordion groups": containers with 3+ similar sibling children
 *      (same tag, ±1 child-element-count, all have [data-highlight] or [tabindex])
 *   2. For each item, identify the TRIGGER vs CONTENT regions:
 *      - CONTENT: a descendant whose computed height ≤ 2px, or whose first
 *        text-bearing child has opacity 0 (collapsed state signal)
 *      - TRIGGER: everything that is NOT the content region (the visible part)
 *   3. Find the ICON: an element containing an SVG with a transform style
 *      (Framer uses rotation to indicate open/closed state)
 *   4. Determine initial state: if icon has rotate() → open, else → closed
 *   5. Wire click handler: toggle content height + text opacity, rotate icon,
 *      close siblings (single-open per group)
 */
(function() {
    var styleId = 'nce-accordion-style';
    if (!document.getElementById(styleId)) {
        var s = document.createElement('style');
        s.id = styleId;
        s.textContent = [
            '.nce-acc-content { transition: height 0.35s ease !important; overflow: hidden !important; }',
            '.nce-acc-text { transition: opacity 0.3s ease !important; }',
            '.nce-acc-icon { transition: transform 0.3s ease !important; }',
            '.nce-acc-trigger { cursor: pointer; }'
        ].join('\n');
        document.head.appendChild(s);
    }

    // ─── Helpers ────────────────────────────────────────────────

    /** Structural fingerprint: tag + direct-child-count */
    function fingerprint(el) {
        return el.tagName + ':' + el.children.length;
    }

    function getOpacity(el) {
        var opacity = parseFloat(getComputedStyle(el).opacity);
        return isNaN(opacity) ? 1 : opacity;
    }

    function getOpacityString(el, fallback) {
        if (!el) return fallback;
        if (el.style && el.style.opacity !== '') return el.style.opacity;
        return String(getOpacity(el));
    }

    function getTransformValue(el) {
        if (!el) return '';
        if (el.style && el.style.transform) return el.style.transform;
        var style = el.getAttribute('style') || '';
        var match = style.match(/transform:\s*([^;]+)/);
        return match ? match[1].trim() : '';
    }

    function parseStateValue(value) {
        if (value == null) return null;
        var normalized = String(value).trim().toLowerCase();
        if (!normalized) return null;
        if (
            normalized === 'true' ||
            normalized === 'open' ||
            normalized === 'opened' ||
            normalized === 'expanded' ||
            normalized === 'active' ||
            normalized === 'visible'
        ) return true;
        if (
            normalized === 'false' ||
            normalized === 'closed' ||
            normalized === 'collapsed' ||
            normalized === 'inactive' ||
            normalized === 'hidden'
        ) return false;
        return null;
    }

    function getExplicitState(el) {
        if (!el) return null;
        if (el.tagName === 'DETAILS') return !!el.open;
        if (el.hasAttribute('hidden')) return false;

        var ariaExpanded = parseStateValue(el.getAttribute('aria-expanded'));
        if (ariaExpanded !== null) return ariaExpanded;

        var ariaHidden = parseStateValue(el.getAttribute('aria-hidden'));
        if (ariaHidden !== null) return !ariaHidden;

        var dataState = parseStateValue(el.getAttribute('data-state'));
        if (dataState !== null) return dataState;

        var dataExpanded = parseStateValue(el.getAttribute('data-expanded'));
        if (dataExpanded !== null) return dataExpanded;

        var dataOpen = parseStateValue(el.getAttribute('data-open'));
        if (dataOpen !== null) return dataOpen;

        var framerName = parseStateValue(el.getAttribute('data-framer-name'));
        if (framerName !== null) return framerName;

        return null;
    }

    function isElementHidden(el) {
        if (!el) return false;
        if (el.hasAttribute('hidden')) return true;
        if (el.getAttribute('aria-hidden') === 'true') return true;

        var cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.visibility === 'hidden') return true;
        if (getOpacity(el) === 0) return true;
        return false;
    }

    /** Is this element "collapsed"? height ≤ 2px with overflow hidden, the
     *  element itself is visually hidden, or a descendant visibility signal
     *  indicates collapse. */
    function isCollapsed(el) {
        if (!el) return false;
        var cs = getComputedStyle(el);
        // Height-based collapse (Framer uses height:1px + overflow:hidden)
        if (parseFloat(cs.height) <= 2 && (cs.overflow === 'hidden' || cs.overflowY === 'hidden' || cs.overflowX === 'hidden')) return true;
        if (isElementHidden(el)) return true;

        // Descendant-based collapse: a nested visibility toggle is hiding content
        var firstHidden = el.querySelector('[hidden], [aria-hidden="true"], [style*="opacity"]');
        if (firstHidden && isElementHidden(firstHidden)) return true;
        return false;
    }

    function isBarLike(el) {
        if (!el || el.children.length > 0) return false;
        if ((el.textContent || '').replace(/\s+/g, '') !== '') return false;
        var style = el.getAttribute('style') || '';
        return style.indexOf('background') !== -1 || style.indexOf('border-radius') !== -1 || style.indexOf('transform') !== -1;
    }

    function findBarIcon(triggerEl) {
        var descendants = Array.prototype.slice.call(triggerEl.querySelectorAll('*')).reverse();
        for (var i = 0; i < descendants.length; i++) {
            var candidate = descendants[i];
            if (!candidate || candidate.children.length < 2) continue;
            var bars = 0;
            for (var j = 0; j < candidate.children.length; j++) {
                if (isBarLike(candidate.children[j])) bars++;
            }
            if (bars >= 2) return candidate;
        }
        return null;
    }

    /** Find the deepest element containing an SVG with a transform style, or a
     *  plus/minus icon assembled from simple bar divs. */
    function findIcon(triggerEl) {
        var svgs = triggerEl.querySelectorAll('svg');
        for (var i = 0; i < svgs.length; i++) {
            // Walk up from svg to find the element with transform
            var p = svgs[i].parentElement;
            while (p && p !== triggerEl) {
                var t = p.getAttribute('style') || '';
                if (t.indexOf('transform') !== -1) return p;
                p = p.parentElement;
            }
        }
        return findBarIcon(triggerEl);
    }

    /** Detect the open-state rotation from the icon's current transform. */
    function getRotation(icon) {
        var t = getTransformValue(icon);
        var m = t.match(/rotate\(([^)]+)\)/);
        return m ? m[1] : null;
    }

    function getRotationDegrees(value) {
        if (!value) return null;
        var rotation = typeof value === 'string' ? value : getRotation(value);
        if (!rotation) return null;
        var match = String(rotation).match(/(-?[\d.]+)deg/);
        if (!match) return null;
        var deg = parseFloat(match[1]);
        if (isNaN(deg)) return null;
        deg = deg % 360;
        return deg < 0 ? deg + 360 : deg;
    }

    function isVerticalRotation(value) {
        var deg = getRotationDegrees(value);
        if (deg === null) return false;
        return Math.abs(deg - 90) < 1 || Math.abs(deg - 270) < 1;
    }

    function getBarSegments(icon) {
        if (!icon) return [];
        var bars = [];
        for (var i = 0; i < icon.children.length; i++) {
            if (isBarLike(icon.children[i])) bars.push(icon.children[i]);
        }
        return bars;
    }

    function inferBarState(bars) {
        if (!bars || bars.length < 2) return null;
        var visible = [];
        for (var i = 0; i < bars.length; i++) {
            if (!isElementHidden(bars[i])) visible.push(bars[i]);
        }
        if (visible.length === 0) return null;

        var verticalCount = 0;
        for (var j = 0; j < visible.length; j++) {
            if (isVerticalRotation(visible[j])) verticalCount++;
        }

        if (verticalCount > 0 && verticalCount < visible.length) return false;
        if (verticalCount === 0) return true;
        return null;
    }

    function synthesizeClosedBarTransforms(bars) {
        var transforms = [];
        for (var i = 0; i < bars.length; i++) {
            transforms.push(i === 0 ? 'rotate(90deg)' : 'none');
        }
        return transforms;
    }

    function synthesizeOpenBarTransforms(bars) {
        var transforms = [];
        for (var i = 0; i < bars.length; i++) {
            transforms.push('rotate(180deg)');
        }
        return transforms;
    }

    function createIconController(icon, isOpen) {
        if (!icon) return null;

        var bars = getBarSegments(icon);
        if (bars.length >= 2) {
            var currentTransforms = [];
            var hasVertical = false;
            for (var i = 0; i < bars.length; i++) {
                var current = getTransformValue(bars[i]) || 'none';
                currentTransforms.push(current);
                if (isVerticalRotation(current)) hasVertical = true;
            }

            return {
                type: 'bars',
                bars: bars,
                openTransforms: isOpen ? currentTransforms : synthesizeOpenBarTransforms(bars),
                closedTransforms: isOpen
                    ? synthesizeClosedBarTransforms(bars)
                    : (hasVertical ? currentTransforms : synthesizeClosedBarTransforms(bars))
            };
        }

        return {
            type: 'transform',
            element: icon
        };
    }

    function applyIconState(info, isOpen) {
        if (!info || !info.iconController) return;
        if (info.iconController.type === 'bars') {
            var transforms = isOpen ? info.iconController.openTransforms : info.iconController.closedTransforms;
            for (var i = 0; i < info.iconController.bars.length; i++) {
                info.iconController.bars[i].style.transform = transforms[i] || 'none';
            }
            return;
        }

        if (info.icon) {
            info.icon.style.transform = isOpen ? 'rotate(' + info.openRotation + ')' : 'none';
        }
    }

    // ─── Group Detection ───────────────────────────────────────

    /** Check if a group of items looks like a real accordion (FAQs, expandable
     *  sections) rather than a list of navigation links or buttons.
     *  Accordion items typically have:
     *   - A toggle button (button tag, or SVG icon element)
     *   - OR question-like text (containing "?")
     *   - AND substantial text content (not just one-liner link labels)
     *   Navigation links are rejected: <a> tags, short text, no buttons. */
    function isAccordionGroup(items) {
        // Quick reject: if most items are <a> tags, this is a nav list
        var linkCount = 0;
        for (var i = 0; i < items.length; i++) {
            if (items[i].tagName === 'A' || (items[i].children.length === 1 && items[i].firstElementChild && items[i].firstElementChild.tagName === 'A')) {
                linkCount++;
            }
        }
        if (linkCount > items.length / 2) return false;

        var buttonCount = 0;
        var questionCount = 0;
        var hasLongText = false;
        var multiRegionCount = 0;
        var sampleSize = Math.min(items.length, 4);

        for (var j = 0; j < sampleSize; j++) {
            var item = items[j];
            // Check for toggle buttons (Framer uses <button> with rotating bars)
            if (item.querySelector('button') || item.querySelector('[data-reset]')) buttonCount++;
            // Check for question-mark text
            if ((item.textContent || '').indexOf('?') !== -1) questionCount++;
            // Check for substantial text (answers are typically >50 chars)
            if ((item.textContent || '').length > 50) hasLongText = true;
            // Check for multi-region layout (heading + answer)
            var inner = item.children.length === 1 ? item.firstElementChild : item;
            if (inner && inner.children.length >= 2) {
                var tallChildren = 0;
                for (var k = 0; k < inner.children.length; k++) {
                    if (parseFloat(getComputedStyle(inner.children[k]).height) > 10) tallChildren++;
                }
                if (tallChildren >= 2) multiRegionCount++;
            }
        }
        // Must have either buttons or questions in at least half the sample,
        // AND have substantial text content or multi-region layout
        var hasSignals = (buttonCount >= sampleSize / 2) || (questionCount >= sampleSize / 2);
        var hasStructure = hasLongText || (multiRegionCount >= sampleSize / 2);
        return hasSignals && hasStructure;
    }

    /** Scan the DOM for accordion-shaped groups.
     *  Returns Array<{ group: Element, items: Element[] }> */
    function findAccordionGroups() {
        var results = [];
        // Candidates: elements that Framer marks as interactive
        var clickables = document.querySelectorAll('[data-highlight="true"][tabindex]');
        if (clickables.length < 2) return results;

        // Group candidate accordion items by ancestor depth so we can support
        // both flat FAQs and nested Framer wrappers.
        var candidateGroups = new Map();
        clickables.forEach(function(el) {
            var item = el.parentElement;
            var depth = 0;
            while (item && item !== document.body && depth < 4) {
                var host = item.parentElement;
                if (host) {
                    var list = candidateGroups.get(host);
                    if (!list) {
                        list = [];
                        candidateGroups.set(host, list);
                    }
                    if (list.indexOf(item) === -1) list.push(item);
                }
                item = item.parentElement;
                depth++;
            }
        });

        var bestByHost = new Map();
        candidateGroups.forEach(function(items, host) {
            if (items.length < 2) return;

            var fps = items.map(fingerprint);
            var majority = fps.sort()[Math.floor(fps.length / 2)];
            var similar = items.filter(function(el) { return fingerprint(el) === majority; });
            if (similar.length >= 2 && isAccordionGroup(similar)) {
                var prev = bestByHost.get(host);
                if (!prev || similar.length > prev.items.length) {
                    bestByHost.set(host, { group: host, items: similar, isNative: false });
                }
            }
        });

        bestByHost.forEach(function(group) {
            results.push(group);
        });

        // Native <details>/<summary> elements
        var detailsEls = document.querySelectorAll('details');
        if (detailsEls.length >= 2) {
            var detailsMap = new Map();
            Array.prototype.slice.call(detailsEls).forEach(function(el) {
                var parent = el.parentElement || document.body;
                var list = detailsMap.get(parent) || [];
                list.push(el);
                detailsMap.set(parent, list);
            });
            detailsMap.forEach(function(items, host) {
                if (items.length >= 2) {
                    results.push({ group: host, items: items, isNative: true });
                }
            });
        }

        return results;
    }

    // ─── Item Analysis ─────────────────────────────────────────

    /** For a single accordion item, find its trigger, content, icon, and state. */
    function analyzeItem(item) {
        var children = item.querySelectorAll(':scope > * > *'); // inner wrapper's children
        if (children.length === 0) children = item.children;

        var content = null;
        var trigger = null;

        // Walk children of the inner wrapper to find the collapsed content region
        // Framer structures items as: wrapper > inner > [heading, answer/content, divider]
        var inner = item.children.length === 1 ? item.firstElementChild : item;
        var candidates = inner.children;

        for (var i = 0; i < candidates.length; i++) {
            var child = candidates[i];
            // Skip very thin elements (dividers)
            var ch = parseFloat(getComputedStyle(child).height);
            if (ch <= 2 && child.children.length === 0) continue;

            if (!content && isCollapsed(child)) {
                content = child;
            } else if (!trigger && ch > 2) {
                trigger = child;
            }
        }

        // Deeper scan: content might be nested (wrapper > inner > heading-group > [heading, answer])
        if (!content) {
            var allDescendants = item.querySelectorAll('*');
            for (var j = 0; j < allDescendants.length; j++) {
                var d = allDescendants[j];
                if (d.children.length > 0 && isCollapsed(d)) {
                    content = d;
                    break;
                }
            }
        }

        // If still no content found, this item may be currently OPEN.
        // Use positional heuristic: content is the sibling after the trigger.
        if (!content && trigger) {
            for (var k = 0; k < candidates.length; k++) {
                var sib = candidates[k];
                if (sib === trigger) continue;
                var sh = parseFloat(getComputedStyle(sib).height);
                if (sh <= 2 && sib.children.length === 0) continue; // skip dividers
                // This non-trigger, non-divider sibling is likely the content
                content = sib;
                break;
            }
        }

        // ENHANCED: If NO collapsed content AND NO trigger identified yet,
        // use a button-based heuristic. In Sova-style FAQs, the trigger region
        // contains a <button> or [data-reset] (the plus/cross icon toggle).
        // The content region is the other tall sibling.
        if (!content && !trigger) {
            for (var m = 0; m < candidates.length; m++) {
                var cand = candidates[m];
                var ch2 = parseFloat(getComputedStyle(cand).height);
                if (ch2 <= 2 && cand.children.length === 0) continue;
                if (!trigger && (cand.querySelector('button') || cand.querySelector('[data-reset]') || cand.querySelector('svg'))) {
                    trigger = cand;
                } else if (!content && ch2 > 10) {
                    content = cand;
                }
            }
            // If we found a trigger but content ended up being the trigger, swap
            if (trigger && !content) {
                for (var n = 0; n < candidates.length; n++) {
                    var cand2 = candidates[n];
                    if (cand2 === trigger) continue;
                    var ch3 = parseFloat(getComputedStyle(cand2).height);
                    if (ch3 <= 2 && cand2.children.length === 0) continue;
                    content = cand2;
                    break;
                }
            }
        }

        if (!content) return null;

        // Find icon in the trigger area (or the whole item if no trigger isolated)
        var iconScope = trigger || item;
        var icon = findIcon(iconScope);

        // Also look for Framer plus/cross toggle buttons as icon substitutes
        if (!icon && iconScope) {
            var btn = iconScope.querySelector('button[data-reset]') || iconScope.querySelector('button');
            if (btn) icon = btn;
        }

        var textEl = content.querySelector('[style*="opacity"]') || content.firstElementChild;

        // Determine initial open state using explicit labels first, then
        // visibility, then icon geometry as a last resort.
        var openRotation = icon ? getRotation(icon) : null;
        var stateSource = 'fallback';
        var explicitState = getExplicitState(item);
        if (explicitState === null) explicitState = getExplicitState(trigger);
        if (explicitState === null) explicitState = getExplicitState(content);

        var isOpen = false;
        if (explicitState !== null) {
            isOpen = explicitState;
            stateSource = 'explicit';
        } else if (isElementHidden(content) || isCollapsed(content)) {
            isOpen = false;
            stateSource = 'visibility';
        } else if (parseFloat(getComputedStyle(content).height) > 2 && (!textEl || getOpacity(textEl) > 0)) {
            isOpen = true;
            stateSource = 'visibility';
        } else if (icon) {
            var barState = inferBarState(getBarSegments(icon));
            if (barState !== null) {
                isOpen = barState;
                stateSource = 'icon-bars';
            } else if (openRotation) {
                isOpen = true;
                stateSource = 'icon';
            }
        }

        var iconController = createIconController(icon, isOpen);
        var openContentOpacity = isOpen ? getOpacityString(content, '1') : '1';
        var closedContentOpacity = isOpen ? '0' : getOpacityString(content, '0');
        var openTextOpacity = textEl ? (isOpen ? getOpacityString(textEl, '1') : '0.7') : null;
        var closedTextOpacity = textEl ? '0' : null;

        return {
            wrapper: item,
            content: content,
            textEl: textEl,
            icon: icon,
            isOpen: isOpen,
            stateSource: stateSource,
            openRotation: openRotation || '45deg',
            iconController: iconController,
            openContentOpacity: openContentOpacity,
            closedContentOpacity: closedContentOpacity,
            openTextOpacity: openTextOpacity,
            closedTextOpacity: closedTextOpacity
        };
    }

    // ─── Initialization ────────────────────────────────────────

    function initNativeDetails(g) {
        g.items.forEach(function(details) {
            if (details.dataset.nceAccInit) return;
            details.dataset.nceAccInit = 'true';

            var content = details.querySelector('summary ~ *') || details;
            content.style.overflow = 'hidden';
            content.style.transition = 'opacity 0.35s ease';

            details.addEventListener('toggle', function() {
                if (details.open) {
                    content.style.opacity = '0';
                    requestAnimationFrame(function() { content.style.opacity = '1'; });
                }
            });
        });
    }

    function init() {
        var groups = findAccordionGroups();

        groups.forEach(function(g) {
            if (g.isNative) { initNativeDetails(g); return; }

            var analyzed = [];
            g.items.forEach(function(item) {
                if (item.dataset.nceAccInit) return;
                item.dataset.nceAccInit = 'true';
                var info = analyzeItem(item);
                if (info) analyzed.push(info);
            });

            if (analyzed.length === 0) return;

            // If ALL items are open, collapse all except the first one.
            // This handles the case where the framework exported items fully open
            // (e.g., Sova-style FAQs where React would have collapsed them on hydration).
            var allOpen = analyzed.every(function(a) { return a.isOpen; });
            var hasStrongState = analyzed.some(function(a) {
                return a.stateSource === 'explicit' || a.stateSource === 'visibility';
            });
            if (allOpen && analyzed.length > 1 && !hasStrongState) {
                for (var idx = 1; idx < analyzed.length; idx++) {
                    analyzed[idx].isOpen = false;
                }
            }

            // Apply CSS classes
            analyzed.forEach(function(a) {
                a.content.classList.add('nce-acc-content');
                a.wrapper.classList.add('nce-acc-trigger');
                if (a.textEl) a.textEl.classList.add('nce-acc-text');
                if (a.icon) a.icon.classList.add('nce-acc-icon');

                // Ensure initial state is applied
                if (!a.isOpen) {
                    a.content.style.height = '1px';
                    a.content.style.overflow = 'hidden';
                    a.content.style.opacity = a.closedContentOpacity;
                    if (a.textEl) a.textEl.style.opacity = a.closedTextOpacity;
                    applyIconState(a, false);
                } else {
                    a.content.style.height = 'auto';
                    a.content.style.opacity = a.openContentOpacity;
                    if (a.textEl) a.textEl.style.opacity = a.openTextOpacity;
                    applyIconState(a, true);
                }
            });

            // Wire click handlers with single-open-per-group behavior
            analyzed.forEach(function(a) {
                function toggle(e) {
                    if (e && e.target && e.target.closest('a')) return;
                    var open = a.content.style.height !== '1px';

                    if (!open) {
                        // Close siblings
                        analyzed.forEach(function(sib) {
                            if (sib === a) return;
                            sib.content.style.height = sib.content.scrollHeight + 'px';
                            void sib.content.offsetHeight;
                            sib.content.style.height = '1px';
                            sib.content.style.opacity = sib.closedContentOpacity;
                            if (sib.textEl) sib.textEl.style.opacity = sib.closedTextOpacity;
                            applyIconState(sib, false);
                        });

                        // Open this
                        a.content.style.height = 'auto';
                        var h = a.content.scrollHeight;
                        a.content.style.height = '1px';
                        void a.content.offsetHeight;
                        a.content.style.height = h + 'px';
                        a.content.style.opacity = a.openContentOpacity;
                        if (a.textEl) a.textEl.style.opacity = a.openTextOpacity;
                        applyIconState(a, true);
                        setTimeout(function() {
                            if (a.content.style.height !== '1px') a.content.style.height = 'auto';
                        }, 400);
                    } else {
                        // Close this
                        a.content.style.height = a.content.scrollHeight + 'px';
                        void a.content.offsetHeight;
                        a.content.style.height = '1px';
                        a.content.style.opacity = a.closedContentOpacity;
                        if (a.textEl) a.textEl.style.opacity = a.closedTextOpacity;
                        applyIconState(a, false);
                    }
                }

                a.wrapper.addEventListener('click', toggle);
                a.wrapper.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(e); }
                });
            });
        });
    }

    init();
    window.addEventListener('load', init);
})();


/**
 * Framer Hover Enhancement Polyfill (Framer-gated)
 *
 * Framer renders hover/pressed states via React variant swapping which is
 * lost in static export.  page-processor.ts extracts CSS :hover rules from
 * the Playwright session and injects them as a <style data-nce-hover> block.
 *
 * This lightweight polyfill adds a subtle default hover effect to Framer
 * buttons and links that lack explicit :hover CSS rules, ensuring the
 * exported site still feels interactive.
 *
 * Nav/card hover patterns are handled by the cross-platform hover-patterns.js.
 */
(function() {
    // Skip on touch-only devices where hover isn't meaningful
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;

    // Check if we already have injected hover CSS from Playwright extraction
    var hasExtractedHover = document.querySelector('style[data-nce-hover]');

    // Find Framer interactive elements
    var interactiveEls = document.querySelectorAll(
        '[data-framer-component-type*="Link"], ' +
        '[data-framer-component-type*="Button"], ' +
        'a[data-framer-name], ' +
        'button[data-framer-name]'
    );

    if (!interactiveEls.length) return;

    // Build a set of elements that already have :hover rules from extraction
    var coveredSelectors = new Set();
    if (hasExtractedHover) {
        var rules = hasExtractedHover.textContent || '';
        // Extract selectors from the hover CSS
        var matches = rules.match(/[^{}]+(?=\s*\{)/g);
        if (matches) {
            matches.forEach(function(sel) {
                coveredSelectors.add(sel.trim().replace(/:hover/g, '').trim());
            });
        }
    }

    // Inject default hover styles for uncovered elements
    var needsDefault = [];
    interactiveEls.forEach(function(el) {
        // Check if any extracted rule covers this element
        var isCovered = false;
        coveredSelectors.forEach(function(sel) {
            try { if (el.matches(sel)) isCovered = true; } catch {}
        });
        // Skip elements handled by the cross-platform hover-patterns polyfill
        if (el.hasAttribute('data-nce-hover-nav') || el.hasAttribute('data-nce-hover-card')) return;
        if (!isCovered) {
            el.setAttribute('data-nce-hover-default', 'true');
            needsDefault.push(el);
        }
    });

    if (needsDefault.length > 0) {
        var style = document.createElement('style');
        style.setAttribute('data-nce-hover-default', '');
        style.textContent = [
            '@media (hover: hover) {',
            '[data-nce-hover-default] {',
            '  transition: transform 0.15s ease, filter 0.15s ease;',
            '}',
            '[data-nce-hover-default]:hover {',
            '  transform: scale(1.02);',
            '  filter: brightness(1.05);',
            '}',
            '[data-nce-hover-default]:active {',
            '  transform: scale(0.98);',
            '}',
            '}'
        ].join('\n');
        document.head.appendChild(style);
    }
})();


/**
 * Framer Dialog Recovery Polyfill
 *
 * Replays dialog/modal content captured during the live Framer crawl.
 * Triggers are tagged with [data-nce-dialog-trigger] and templates live in
 * [data-nce-dialog-templates] to avoid shipping the full Framer runtime.
 */
(function() {
  var templateHost = document.querySelector('[data-nce-dialog-templates]');
  if (!templateHost || !document.body) {
    return;
  }

  var activeHost = null;
  var previousHtmlOverflow = '';
  var previousBodyOverflow = '';

  function getTemplate(dialogId) {
    return templateHost.querySelector('template[data-nce-dialog-template="' + dialogId + '"]');
  }

  function restoreScrollLock() {
    document.documentElement.style.overflow = previousHtmlOverflow;
    document.body.style.overflow = previousBodyOverflow;
  }

  function closeDialog() {
    if (!activeHost) return;

    activeHost.remove();
    activeHost = null;
    restoreScrollLock();
    document.removeEventListener('keydown', onKeyDown, true);
  }

  function onKeyDown(event) {
    if (event.key === 'Escape') {
      closeDialog();
    }
  }

  function createCloseButton() {
    var button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', 'Close dialog');
    button.setAttribute('data-nce-dialog-close', 'true');
    button.textContent = 'Close';
    button.style.position = 'fixed';
    button.style.top = '20px';
    button.style.right = '20px';
    button.style.zIndex = '2147483647';
    button.style.padding = '10px 14px';
    button.style.border = '1px solid rgba(128,128,128,0.3)';
    button.style.borderRadius = '999px';
    button.style.background = 'rgba(128,128,128,0.2)';
    button.style.backdropFilter = 'blur(16px)';
    button.style.webkitBackdropFilter = 'blur(16px)';
    button.style.color = '#fff';
    button.style.textShadow = '0 1px 3px rgba(0,0,0,0.5)';
    button.style.font = '600 14px/1 sans-serif';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    return button;
  }

  function openDialog(dialogId) {
    var template = getTemplate(dialogId);
    if (!template) {
      return;
    }

    closeDialog();

    previousHtmlOverflow = document.documentElement.style.overflow;
    previousBodyOverflow = document.body.style.overflow;

    var host = document.createElement('div');
    host.setAttribute('data-nce-dialog-host', dialogId);
    host.setAttribute('role', 'dialog');
    host.setAttribute('aria-modal', 'true');
    host.style.position = 'fixed';
    host.style.inset = '0';
    host.style.zIndex = '2147483640';
    host.style.background = 'transparent';

    var fragment = template.content
      ? template.content.cloneNode(true)
      : document.createRange().createContextualFragment(template.innerHTML);
    host.appendChild(fragment);

    var closeButton = createCloseButton();
    host.appendChild(closeButton);

    host.addEventListener('click', function(event) {
      if (event.target === host || event.target === closeButton) {
        closeDialog();
      }
    });

    host.querySelectorAll('[aria-label*="close" i], [data-framer-name*="Close" i]').forEach(function(node) {
      node.addEventListener('click', function() {
        closeDialog();
      });
    });

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.appendChild(host);
    activeHost = host;
    document.addEventListener('keydown', onKeyDown, true);
  }

  document.addEventListener('click', function(event) {
    var target = event.target;
    if (!(target instanceof Element)) return;

    var trigger = target.closest('[data-nce-dialog-trigger]');
    if (!trigger) return;

    var dialogId = trigger.getAttribute('data-nce-dialog-trigger');
    if (!dialogId) return;

    event.preventDefault();
    event.stopPropagation();
    openDialog(dialogId);
  }, true);
})();


