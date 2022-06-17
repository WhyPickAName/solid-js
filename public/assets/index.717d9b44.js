const Bn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Bn();const C={};function he(e){C.context=e}const Mn=(e,t)=>e===t,Nn=Symbol("solid-proxy"),kn=Symbol("solid-track"),me={equals:Mn};let Ln=Nt;const Z={},J=1,be=2,Pt={owned:null,cleanups:null,context:null,owner:null},[Fn,go]=M(!1);var I=null;let le=null,w=null,re=null,_=null,k=null,Ge=0;function se(e,t){const n=w,r=I,s=e.length===0,i=s?Pt:{owned:null,cleanups:null,context:null,owner:t||r},o=s?e:()=>e(()=>et(i));I=i,w=null;try{return _e(o,!0)}finally{w=n,I=r}}function M(e,t){t=t?Object.assign({},me,t):me;const n={value:e,observers:null,observerSlots:null,pending:Z,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.pending!==Z?n.pending:n.value)),Qe(n,s));return[Bt.bind(n),r]}function je(e,t,n){const r=Ze(e,t,!0,J);ue(r)}function ye(e,t,n){const r=Ze(e,t,!1,J);ue(r)}function S(e,t,n){n=n?Object.assign({},me,n):me;const r=Ze(e,t,!0,0);return r.pending=Z,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,ue(r),Bt.bind(r)}function jn(e,t,n){arguments.length===2?typeof t=="object"&&(n=t,t=e,e=!0):arguments.length===1&&(t=e,e=!0),n||(n={});const r=new Set,[s,i]=M(n.initialValue),[o,a]=M(void 0,{equals:!1}),[c,l]=M(!1),[u,h]=M();let f,d=null,p=null,D=null,T=!1,$="initialValue"in n,E=typeof e=="function"&&S(e);C.context&&(D=`${C.context.id}${C.context.count++}`,C.load&&(p=C.load(D)));function A(g,m,b,v){return d===g&&(d=null,$=!0,p&&(g===p||m===p)&&n.onHydrated&&queueMicrotask(()=>n.onHydrated(v,{value:m})),p=null,h(f=b),R(m)),m}function R(g){we(()=>{i(()=>g),l(!1);for(const m of r.keys())m.decrement();r.clear()})}function P(){const g=zn,m=s();if(f)throw f;return w&&!w.user&&g&&je(()=>{o(),d&&(g.resolved||r.has(g)||(g.increment(),r.add(g)))}),m}function H(g=!0){if(g&&T)return;T=!1,h(f=void 0);const m=E?E():e;if(m==null||m===!1){A(d,N(s));return}const b=p||N(()=>t(m,{value:s(),refetching:g}));return typeof b!="object"||!("then"in b)?(A(d,b),b):(d=b,T=!0,queueMicrotask(()=>T=!1),we(()=>{l(!0),a()}),b.then(v=>A(b,v,void 0,m),v=>A(b,v,v)))}return Object.defineProperties(P,{loading:{get(){return c()}},error:{get(){return u()}},latest:{get(){if(!$)return P();if(f)throw f;return s()}}}),E?je(()=>H(!1)):H(!1),[P,{refetch:H,mutate:i}]}function we(e){if(re)return e();let t;const n=re=[];try{t=e()}finally{re=null}return _e(()=>{for(let r=0;r<n.length;r+=1){const s=n[r];if(s.pending!==Z){const i=s.pending;s.pending=Z,Qe(s,i)}}},!1),t}function N(e){let t,n=w;return w=null,t=e(),w=n,t}function xt(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return o=>{let a;if(r){a=Array(e.length);for(let l=0;l<e.length;l++)a[l]=e[l]()}else a=e();if(i){i=!1;return}const c=N(()=>t(a,s,o));return s=a,c}}function Ye(e){return I===null||(I.cleanups===null?I.cleanups=[e]:I.cleanups.push(e)),e}function mo(){return w}function Hn(){return I}function Vn(e,t){const n=I;I=e;try{return _e(t,!0)}finally{I=n}}function Un(e){const t=w,n=I;return Promise.resolve().then(()=>{w=t,I=n;let r;return we(e),w=I=null,r?r.done:void 0})}function qn(){return[Fn,Un]}function $t(e){const t=Symbol("context");return{id:t,Provider:Gn(t),defaultValue:e}}function Je(e){let t;return(t=Ft(I,e.id))!==void 0?t:e.defaultValue}function Xe(e){const t=S(e);return S(()=>He(t()))}let zn;function Bt(){const e=le;if(this.sources&&(this.state||e)){const t=_;_=null,this.state===J||e?ue(this):Ie(this),_=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function Qe(e,t,n){if(re)return e.pending===Z&&re.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&_e(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s];r&&le.disposed.has(i),(r&&!i.tState||!r&&!i.state)&&(i.pure?_.push(i):k.push(i),i.observers&&kt(i)),r||(i.state=J)}if(_.length>1e6)throw _=[],new Error},!1),t}function ue(e){if(!e.fn)return;et(e);const t=I,n=w,r=Ge;w=I=e,Wn(e,e.value,r),w=n,I=t}function Wn(e,t,n){let r;try{r=e.fn(t)}catch(s){Lt(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?Qe(e,r):e.value=r,e.updatedAt=n)}function Ze(e,t,n,r=J,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:I,context:null,pure:n};return I===null||I!==Pt&&(I.owned?I.owned.push(i):I.owned=[i]),i}function Mt(e){const t=le;if(e.state===0||t)return;if(e.state===be||t)return Ie(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ge);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===J||t)ue(e);else if(e.state===be||t){const s=_;_=null,Ie(e,n[0]),_=s}}function _e(e,t){if(_)return e();let n=!1;t||(_=[]),k?n=!0:k=[],Ge++;try{const r=e();return Kn(n),r}catch(r){Lt(r)}finally{_=null,n||(k=null)}}function Kn(e){_&&(Nt(_),_=null),!e&&(k.length?we(()=>{Ln(k),k=null}):k=null)}function Nt(e){for(let t=0;t<e.length;t++)Mt(e[t])}function Ie(e,t){const n=le;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===J||n?s!==t&&Mt(s):(s.state===be||n)&&Ie(s,t))}}function kt(e){const t=le;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=be,r.pure?_.push(r):k.push(r),r.observers&&kt(r))}}function et(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),o=n.observerSlots.pop();r<s.length&&(i.sourceSlots[o]=r,s[r]=i,n.observerSlots[r]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)et(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Lt(e){throw e}function Ft(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Ft(e.owner,t):void 0}function He(e){if(typeof e=="function"&&!e.length)return He(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=He(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Gn(e){return function(n){let r;return je(()=>r=N(()=>(I.context={[e]:n.value},Xe(()=>n.children)))),r}}const Yn=Symbol("fallback");function lt(e){for(let t=0;t<e.length;t++)e[t]()}function Jn(e,t,n={}){let r=[],s=[],i=[],o=0,a=t.length>1?[]:null;return Ye(()=>lt(i)),()=>{let c=e()||[],l,u;return c[kn],N(()=>{let f=c.length,d,p,D,T,$,E,A,R,P;if(f===0)o!==0&&(lt(i),i=[],r=[],s=[],o=0,a&&(a=[])),n.fallback&&(r=[Yn],s[0]=se(H=>(i[0]=H,n.fallback())),o=1);else if(o===0){for(s=new Array(f),u=0;u<f;u++)r[u]=c[u],s[u]=se(h);o=f}else{for(D=new Array(f),T=new Array(f),a&&($=new Array(f)),E=0,A=Math.min(o,f);E<A&&r[E]===c[E];E++);for(A=o-1,R=f-1;A>=E&&R>=E&&r[A]===c[R];A--,R--)D[R]=s[A],T[R]=i[A],a&&($[R]=a[A]);for(d=new Map,p=new Array(R+1),u=R;u>=E;u--)P=c[u],l=d.get(P),p[u]=l===void 0?-1:l,d.set(P,u);for(l=E;l<=A;l++)P=r[l],u=d.get(P),u!==void 0&&u!==-1?(D[u]=s[l],T[u]=i[l],a&&($[u]=a[l]),u=p[u],d.set(P,u)):i[l]();for(u=E;u<f;u++)u in D?(s[u]=D[u],i[u]=T[u],a&&(a[u]=$[u],a[u](u))):s[u]=se(h);s=s.slice(0,o=f),r=c.slice(0)}return s});function h(f){if(i[u]=f,a){const[d,p]=M(u);return a[u]=p,t(c[u],d)}return t(c[u])}}}function O(e,t){return N(()=>e(t||{}))}function pe(){return!0}const Xn={get(e,t,n){return t===Nn?n:e.get(t)},has(e,t){return e.has(t)},set:pe,deleteProperty:pe,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:pe,deleteProperty:pe}},ownKeys(e){return e.keys()}};function xe(e){return(e=typeof e=="function"?e():e)==null?{}:e}function Qn(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=xe(e[n])[t];if(r!==void 0)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in xe(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(xe(e[n])));return[...new Set(t)]}},Xn)}function jt(e){let t,n;const r=s=>{const i=C.context;if(i){const[a,c]=M();(n||(n=e())).then(l=>{he(i),c(()=>l.default),he()}),t=a}else if(t){const a=t();if(a)return a(s)}else{const[a]=jn(()=>(n||(n=e())).then(c=>c.default));t=a}let o;return S(()=>(o=t())&&N(()=>{if(!i)return o(s);const a=C.context;he(i);const c=o(s);return he(a),c}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}function bo(e){const t="fallback"in e&&{fallback:()=>e.fallback};return S(Jn(()=>e.each,e.children,t||void 0))}function Ht(e){let t=!1;const n=S(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return S(()=>{const r=n();if(r){const s=e.children;return(t=typeof s=="function"&&s.length>0)?N(()=>s(r)):s}return e.fallback})}function Zn(e,t,n){let r=n.length,s=t.length,i=r,o=0,a=0,c=t[s-1].nextSibling,l=null;for(;o<s||a<i;){if(t[o]===n[a]){o++,a++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===o){const u=i<r?a?n[a-1].nextSibling:n[i-a]:c;for(;a<i;)e.insertBefore(n[a++],u)}else if(i===a)for(;o<s;)(!l||!l.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[a]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[a++],t[o++].nextSibling),e.insertBefore(n[--i],u),t[s]=n[i]}else{if(!l){l=new Map;let h=a;for(;h<i;)l.set(n[h],h++)}const u=l.get(t[o]);if(u!=null)if(a<u&&u<i){let h=o,f=1,d;for(;++h<s&&h<i&&!((d=l.get(t[h]))==null||d!==u+f);)f++;if(f>u-a){const p=t[o];for(;a<u;)e.insertBefore(n[a++],p)}else e.replaceChild(n[a++],t[o++])}else o++;else t[o++].remove()}}}const ut="_$DX_DELEGATE";function er(e,t,n){let r;return se(s=>{r=s,t===document?e():tr(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function yo(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function wo(e,t=window.document){const n=t[ut]||(t[ut]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,nr))}}function Io(e,t){t==null?e.removeAttribute("class"):e.className=t}function tr(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Ee(e,t,r,n);ye(s=>Ee(e,t(),s,n),r)}function nr(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),C.registry&&!C.done&&(C.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function Ee(e,t,n,r,s){for(C.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(C.context)return n;if(i==="number"&&(t=t.toString()),o){let a=n[0];a&&a.nodeType===3?a.data=t:a=document.createTextNode(t),n=X(e,n,r,a)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(C.context)return n;n=X(e,n,r)}else{if(i==="function")return ye(()=>{let a=t();for(;typeof a=="function";)a=a();n=Ee(e,a,n,r)}),()=>n;if(Array.isArray(t)){const a=[];if(Ve(a,t,s))return ye(()=>n=Ee(e,a,n,r,!0)),()=>n;if(C.context){for(let c=0;c<a.length;c++)if(a[c].parentNode)return n=a}if(a.length===0){if(n=X(e,n,r),o)return n}else Array.isArray(n)?n.length===0?ft(e,a,r):Zn(e,n,a):(n&&X(e),ft(e,a));n=a}else if(t instanceof Node){if(C.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=X(e,n,r,t);X(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ve(e,t,n){let r=!1;for(let s=0,i=t.length;s<i;s++){let o=t[s],a;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))r=Ve(e,o)||r;else if((a=typeof o)=="string")e.push(document.createTextNode(o));else if(a==="function")if(n){for(;typeof o=="function";)o=o();r=Ve(e,Array.isArray(o)?o:[o])||r}else e.push(o),r=!0;else e.push(document.createTextNode(o.toString()))}return r}function ft(e,t,n){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function X(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const a=t[o];if(s!==a){const c=a.parentNode===e;!i&&!o?c?e.replaceChild(s,a):e.insertBefore(s,n):c&&a.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const rr="modulepreload",dt={},sr="/",Vt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${sr}${r}`,r in dt)return;dt[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":rr,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};function ir(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function or([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function ar(e){try{return document.querySelector(e)}catch{return null}}function cr(e,t){const n=ar(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function lr(e,t,n,r){let s=!1;const i=a=>typeof a=="string"?{value:a}:a,o=or(M(i(e()),{equals:(a,c)=>a.value===c.value}),void 0,a=>(!s&&t(a),a));return n&&Ye(n((a=e())=>{s=!0,o[1](i(a)),s=!1})),{signal:o,utils:r}}function ur(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:M({value:""})};return e}function fr(){return lr(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),cr(window.location.hash.slice(1),n)},e=>ir(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const dr=/^(?:[a-z0-9]+:)?\/\//i,hr=/^\/+|\/+$/g;function ie(e,t=!1){const n=e.replace(hr,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ge(e,t,n){if(dr.test(t))return;const r=ie(e),s=n&&ie(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+ie(t,!i)}function pr(e,t){if(e==null)throw new Error(t);return e}function Ut(e,t){return ie(e).replace(/\/*(\*.*)?$/g,"")+ie(t)}function gr(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Q(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function mr(e,t){const[n,r]=e.split("/*",2),s=n.split("/").filter(Boolean),i=s.length;return o=>{const a=o.split("/").filter(Boolean),c=a.length-i;if(c<0||c>0&&r===void 0&&!t)return null;const l={path:i?"":"/",params:{}};for(let u=0;u<i;u++){const h=s[u],f=a[u];if(h[0]===":")l.params[h.slice(1)]=f;else if(h.localeCompare(f,void 0,{sensitivity:"base"})!==0)return null;l.path+=`/${f}`}return r&&(l.params[r]=c?a.slice(-c).join("/"):""),l}}function br(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function qt(e){const t=new Map,n=Hn();return new Proxy({},{get(r,s){return t.has(s)||Vn(n,()=>t.set(s,S(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function zt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return zt(r).reduce((i,o)=>[...i,...s.map(a=>a+o)],[])}const yr=100,Wt=$t(),Te=$t(),Kt=()=>pr(Je(Wt),"Make sure your app is wrapped in a <Router />");let ae;const Gt=()=>ae||Je(Te)||Kt().base;function wr(e,t="",n){const{component:r,data:s,children:i}=e,o=!i||Array.isArray(i)&&!i.length,a={key:e,element:r?()=>O(r,{}):()=>{const{element:c}=e;return c===void 0&&n?O(n,{}):c},preload:e.component?r.preload:e.preload,data:s};return Yt(e.path).reduce((c,l)=>{for(const u of zt(l)){const h=Ut(t,u),f=o?h:h.split("/*",1)[0];c.push({...a,originalPath:u,pattern:f,matcher:mr(f,!o)})}return c},[])}function Ir(e,t=0){return{routes:e,score:br(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],o=i.matcher(n);if(!o)return null;r.unshift({...o,route:i})}return r}}}function Yt(e){return Array.isArray(e)?e:[e]}function Jt(e,t="",n,r=[],s=[]){const i=Yt(e);for(let o=0,a=i.length;o<a;o++){const c=i[o];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const l=wr(c,t,n);for(const u of l){if(r.push(u),c.children)Jt(c.children,u.pattern,n,r,s);else{const h=Ir([...r],s.length);s.push(h)}r.pop()}}}return r.length?s:s.sort((o,a)=>a.score-o.score)}function Er(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Ar(e,t){const n=new URL("http://sar"),r=S(c=>{const l=e();try{return new URL(l,n)}catch{return console.error(`Invalid path ${l}`),c}},n,{equals:(c,l)=>c.href===l.href}),s=S(()=>Q(r().pathname)),i=S(()=>Q(r().search,!0)),o=S(()=>Q(r().hash)),a=S(()=>"");return{get pathname(){return s()},get search(){return i()},get hash(){return o()},get state(){return t()},get key(){return a()},query:qt(xt(i,()=>gr(r())))}}function vr(e,t="",n,r){const{signal:[s,i],utils:o={}}=ur(e),a=o.parsePath||(g=>g),c=o.renderPath||(g=>g),l=ge("",t),u=void 0;if(l===void 0)throw new Error(`${l} is not a valid base path`);l&&!s().value&&i({value:l,replace:!0,scroll:!1});const[h,f]=qn(),[d,p]=M(s().value),[D,T]=M(s().state),$=Ar(d,D),E=[],A={pattern:l,params:{},path:()=>l,outlet:()=>null,resolvePath(g){return ge(l,g)}};if(n)try{ae=A,A.data=n({data:void 0,params:{},location:$,navigate:P(A)})}finally{ae=void 0}function R(g,m,b){N(()=>{if(typeof m=="number"){m&&(o.go?o.go(m):console.warn("Router integration does not support relative routing"));return}const{replace:v,resolve:ee,scroll:te,state:de}={replace:!1,resolve:!0,scroll:!0,...b},V=ee?g.resolvePath(m):ge("",m);if(V===void 0)throw new Error(`Path '${m}' is not a routable path`);if(E.length>=yr)throw new Error("Too many redirects");const U=d();if(V!==U||de!==D()){const ne=E.push({value:U,replace:v,scroll:te,state:D()});f(()=>{p(V),T(de)}).then(()=>{E.length===ne&&H({value:V,state:de})})}})}function P(g){return g=g||Je(Te)||A,(m,b)=>R(g,m,b)}function H(g){const m=E[0];m&&((g.value!==m.value||g.state!==m.state)&&i({...g,replace:m.replace,scroll:m.scroll}),E.length=0)}ye(()=>{const{value:g,state:m}=s();N(()=>{g!==d()&&f(()=>{p(g),T(m)})})});{let g=function(b){return b.namespaceURI==="http://www.w3.org/2000/svg"},m=function(b){if(b.defaultPrevented||b.button!==0||b.metaKey||b.altKey||b.ctrlKey||b.shiftKey)return;const v=b.composedPath().find(ct=>ct instanceof Node&&ct.nodeName.toUpperCase()==="A");if(!v)return;const ee=g(v),te=ee?v.href.baseVal:v.href;if((ee?v.target.baseVal:v.target)||!te&&!v.hasAttribute("state"))return;const V=(v.getAttribute("rel")||"").split(/\s+/);if(v.hasAttribute("download")||V&&V.includes("external"))return;const U=ee?new URL(te,document.baseURI):new URL(te),ne=Q(U.pathname);if(U.origin!==window.location.origin||l&&ne&&!ne.toLowerCase().startsWith(l.toLowerCase()))return;const $n=a(ne+Q(U.search,!0)+Q(U.hash)),at=v.getAttribute("state");b.preventDefault(),R(A,$n,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:at&&JSON.parse(at)})};document.addEventListener("click",m),Ye(()=>document.removeEventListener("click",m))}return{base:A,out:u,location:$,isRouting:h,renderPath:c,parsePath:a,navigatorFactory:P}}function Sr(e,t,n,r){const{base:s,location:i,navigatorFactory:o}=e,{pattern:a,element:c,preload:l,data:u}=r().route,h=S(()=>r().path),f=qt(()=>r().params);l&&l();const d={parent:t,pattern:a,get child(){return n()},path:h,params:f,data:t.data,outlet:c,resolvePath(p){return ge(s.path(),p,h())}};if(u)try{ae=d,d.data=u({data:t.data,params:f,location:i,navigate:o(d)})}finally{ae=void 0}return d}const Cr=e=>{const{source:t,url:n,base:r,data:s,out:i}=e,o=t||fr(),a=vr(o,r,s);return O(Wt.Provider,{value:a,get children(){return e.children}})},_r=e=>{const t=Kt(),n=Gt(),r=Xe(()=>e.children),s=S(()=>Jt(r(),Ut(n.pattern,e.base||""),Tr)),i=S(()=>Er(s(),t.location.pathname));t.out&&t.out.matches.push(i().map(({route:l,path:u,params:h})=>({originalPath:l.originalPath,pattern:l.pattern,path:u,params:h})));const o=[];let a;const c=S(xt(i,(l,u,h)=>{let f=u&&l.length===u.length;const d=[];for(let p=0,D=l.length;p<D;p++){const T=u&&u[p],$=l[p];h&&T&&$.route.key===T.route.key?d[p]=h[p]:(f=!1,o[p]&&o[p](),se(E=>{o[p]=E,d[p]=Sr(t,d[p-1]||n,()=>c()[p+1],()=>i()[p])}))}return o.splice(l.length).forEach(p=>p()),h&&f?h:(a=d[0],d)}));return O(Ht,{get when(){return c()&&a},children:l=>O(Te.Provider,{value:l,get children(){return l.outlet()}})})},ht=e=>{const t=Xe(()=>e.children);return Qn(e,{get children(){return t()}})},Tr=()=>{const e=Gt();return O(Ht,{get when(){return e.child},children:t=>O(Te.Provider,{value:t,get children(){return t.outlet()}})})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Dr=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Rr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Xt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Dr(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),l!==64){const d=a<<4&240|l>>2;if(r.push(d),h!==64){const p=l<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Or=function(e){const t=Xt(e);return Rr.encodeByteArray(t,!0)},Qt=function(e){return Or(e).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function xr(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Zt(){return typeof indexedDB=="object"}function en(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function $r(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="FirebaseError";class fe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Br,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,De.prototype.create)}}class De{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Mr(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new fe(s,a,r)}}function Mr(e,t){return e.replace(Nr,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Nr=/\{\$([^}]+)}/g;function Ae(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(pt(i)&&pt(o)){if(!Ae(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function pt(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=1e3,Lr=2,Fr=4*60*60*1e3,jr=.5;function gt(e,t=kr,n=Lr){const r=t*Math.pow(n,e),s=Math.round(jr*r*(Math.random()-.5)*2);return Math.min(Fr,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(e){return e&&e._delegate?e._delegate:e}class j{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Pr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ur(t))try{this.getOrInitializeService({instanceIdentifier:q})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=q){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=q){return this.instances.has(t)}getOptions(t=q){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vr(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=q){return this.component?this.component.multipleInstances?t:q:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vr(e){return e===q?void 0:e}function Ur(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Hr(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(y||(y={}));const zr={debug:y.DEBUG,verbose:y.VERBOSE,info:y.INFO,warn:y.WARN,error:y.ERROR,silent:y.SILENT},Wr=y.INFO,Kr={[y.DEBUG]:"log",[y.VERBOSE]:"log",[y.INFO]:"info",[y.WARN]:"warn",[y.ERROR]:"error"},Gr=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Kr[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class nn{constructor(t){this.name=t,this._logLevel=Wr,this._logHandler=Gr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zr[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,y.DEBUG,...t),this._logHandler(this,y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,y.VERBOSE,...t),this._logHandler(this,y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,y.INFO,...t),this._logHandler(this,y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,y.WARN,...t),this._logHandler(this,y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,y.ERROR,...t),this._logHandler(this,y.ERROR,...t)}}const Yr=(e,t)=>t.some(n=>e instanceof n);let mt,bt;function Jr(){return mt||(mt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xr(){return bt||(bt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rn=new WeakMap,Ue=new WeakMap,sn=new WeakMap,$e=new WeakMap,tt=new WeakMap;function Qr(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(L(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&rn.set(n,e)}).catch(()=>{}),tt.set(t,e),t}function Zr(e){if(Ue.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ue.set(e,t)}let qe={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ue.get(e);if(t==="objectStoreNames")return e.objectStoreNames||sn.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return L(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function es(e){qe=e(qe)}function ts(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Be(this),t,...n);return sn.set(r,t.sort?t.sort():[t]),L(r)}:Xr().includes(e)?function(...t){return e.apply(Be(this),t),L(rn.get(this))}:function(...t){return L(e.apply(Be(this),t))}}function ns(e){return typeof e=="function"?ts(e):(e instanceof IDBTransaction&&Zr(e),Yr(e,Jr())?new Proxy(e,qe):e)}function L(e){if(e instanceof IDBRequest)return Qr(e);if($e.has(e))return $e.get(e);const t=ns(e);return t!==e&&($e.set(e,t),tt.set(t,e)),t}const Be=e=>tt.get(e);function on(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=L(o);return r&&o.addEventListener("upgradeneeded",c=>{r(L(o.result),c.oldVersion,c.newVersion,L(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const rs=["get","getKey","getAll","getAllKeys","count"],ss=["put","add","delete","clear"],Me=new Map;function yt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Me.get(t))return Me.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=ss.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rs.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Me.set(t,i),i}es(e=>({...e,get:(t,n,r)=>yt(t,n)||e.get(t,n,r),has:(t,n)=>!!yt(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(os(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function os(e){const t=e.getComponent();return t?.type==="VERSION"}const ze="@firebase/app",wt="0.7.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=new nn("@firebase/app"),as="@firebase/app-compat",cs="@firebase/analytics-compat",ls="@firebase/analytics",us="@firebase/app-check-compat",fs="@firebase/app-check",ds="@firebase/auth",hs="@firebase/auth-compat",ps="@firebase/database",gs="@firebase/database-compat",ms="@firebase/functions",bs="@firebase/functions-compat",ys="@firebase/installations",ws="@firebase/installations-compat",Is="@firebase/messaging",Es="@firebase/messaging-compat",As="@firebase/performance",vs="@firebase/performance-compat",Ss="@firebase/remote-config",Cs="@firebase/remote-config-compat",_s="@firebase/storage",Ts="@firebase/storage-compat",Ds="@firebase/firestore",Rs="@firebase/firestore-compat",Os="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="[DEFAULT]",Ps={[ze]:"fire-core",[as]:"fire-core-compat",[ls]:"fire-analytics",[cs]:"fire-analytics-compat",[fs]:"fire-app-check",[us]:"fire-app-check-compat",[ds]:"fire-auth",[hs]:"fire-auth-compat",[ps]:"fire-rtdb",[gs]:"fire-rtdb-compat",[ms]:"fire-fn",[bs]:"fire-fn-compat",[ys]:"fire-iid",[ws]:"fire-iid-compat",[Is]:"fire-fcm",[Es]:"fire-fcm-compat",[As]:"fire-perf",[vs]:"fire-perf-compat",[Ss]:"fire-rc",[Cs]:"fire-rc-compat",[_s]:"fire-gcs",[Ts]:"fire-gcs-compat",[Ds]:"fire-fst",[Rs]:"fire-fst-compat","fire-js":"fire-js",[Os]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=new Map,We=new Map;function xs(e,t){try{e.container.addComponent(t)}catch(n){nt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function W(e){const t=e.name;if(We.has(t))return nt.debug(`There were multiple attempts to register component ${t}.`),!1;We.set(t,e);for(const n of ve.values())xs(n,e);return!0}function Re(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},K=new De("app","Firebase",$s);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new j("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}function Ms(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:an,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw K.create("bad-app-name",{appName:String(r)});const s=ve.get(r);if(s){if(Ae(e,s.options)&&Ae(n,s.config))return s;throw K.create("duplicate-app",{appName:r})}const i=new qr(r);for(const a of We.values())i.addComponent(a);const o=new Bs(e,n,i);return ve.set(r,o),o}function Ns(e=an){const t=ve.get(e);if(!t)throw K.create("no-app",{appName:e});return t}function F(e,t,n){var r;let s=(r=Ps[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),nt.warn(a.join(" "));return}W(new j(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="firebase-heartbeat-database",Ls=1,ce="firebase-heartbeat-store";let Ne=null;function cn(){return Ne||(Ne=on(ks,Ls,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ce)}}}).catch(e=>{throw K.create("storage-open",{originalErrorMessage:e.message})})),Ne}async function Fs(e){var t;try{return(await cn()).transaction(ce).objectStore(ce).get(ln(e))}catch(n){throw K.create("storage-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message})}}async function It(e,t){var n;try{const s=(await cn()).transaction(ce,"readwrite");return await s.objectStore(ce).put(t,ln(e)),s.done}catch(r){throw K.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function ln(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=1024,Hs=30*24*60*60*1e3;class Vs{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qs(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Et();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Hs}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Et(),{heartbeatsToSend:n,unsentEntries:r}=Us(this._heartbeatsCache.heartbeats),s=Qt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Et(){return new Date().toISOString().substring(0,10)}function Us(e,t=js){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),At(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),At(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qs{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zt()?en().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Fs(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return It(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return It(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function At(e){return Qt(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(e){W(new j("platform-logger",t=>new is(t),"PRIVATE")),W(new j("heartbeat",t=>new Vs(t),"PRIVATE")),F(ze,wt,e),F(ze,wt,"esm2017"),F("fire-js","")}zs("");var Ws="firebase",Ks="9.8.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */F(Ws,Ks,"app");const un="@firebase/installations",rt="0.5.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=1e4,dn=`w:${rt}`,hn="FIS_v2",Gs="https://firebaseinstallations.googleapis.com/v1",Ys=60*60*1e3,Js="installations",Xs="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},G=new De(Js,Xs,Qs);function pn(e){return e instanceof fe&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn({projectId:e}){return`${Gs}/projects/${e}/installations`}function mn(e){return{token:e.token,requestStatus:2,expiresIn:ei(e.expiresIn),creationTime:Date.now()}}async function bn(e,t){const r=(await t.json()).error;return G.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function yn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Zs(e,{refreshToken:t}){const n=yn(e);return n.append("Authorization",ti(t)),n}async function wn(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ei(e){return Number(e.replace("s","000"))}function ti(e){return`${hn} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=gn(e),s=yn(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:hn,appId:e.appId,sdkVersion:dn},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await wn(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:mn(l.authToken)}}else throw await bn("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=/^[cdef][\w-]{21}$/,Ke="";function ii(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=oi(e);return si.test(n)?n:Ke}catch{return Ke}}function oi(e){return ri(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new Map;function An(e,t){const n=Oe(e);vn(n,t),ai(n,t)}function vn(e,t){const n=En.get(e);if(!!n)for(const r of n)r(t)}function ai(e,t){const n=ci();n&&n.postMessage({key:e,fid:t}),li()}let z=null;function ci(){return!z&&"BroadcastChannel"in self&&(z=new BroadcastChannel("[Firebase] FID Change"),z.onmessage=e=>{vn(e.data.key,e.data.fid)}),z}function li(){En.size===0&&z&&(z.close(),z=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="firebase-installations-database",fi=1,Y="firebase-installations-store";let ke=null;function st(){return ke||(ke=on(ui,fi,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Y)}}})),ke}async function Se(e,t){const n=Oe(e),s=(await st()).transaction(Y,"readwrite"),i=s.objectStore(Y),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&An(e,t.fid),t}async function Sn(e){const t=Oe(e),r=(await st()).transaction(Y,"readwrite");await r.objectStore(Y).delete(t),await r.done}async function Pe(e,t){const n=Oe(e),s=(await st()).transaction(Y,"readwrite"),i=s.objectStore(Y),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&An(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e){let t;const n=await Pe(e.appConfig,r=>{const s=di(r),i=hi(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Ke?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function di(e){const t=e||{fid:ii(),registrationStatus:0};return Cn(t)}function hi(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(G.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=pi(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:gi(e)}:{installationEntry:t}}async function pi(e,t){try{const n=await ni(e,t);return Se(e.appConfig,n)}catch(n){throw pn(n)&&n.customData.serverCode===409?await Sn(e.appConfig):await Se(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function gi(e){let t=await vt(e.appConfig);for(;t.registrationStatus===1;)await In(100),t=await vt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await it(e);return r||n}return t}function vt(e){return Pe(e,t=>{if(!t)throw G.create("installation-not-found");return Cn(t)})}function Cn(e){return mi(e)?{fid:e.fid,registrationStatus:0}:e}function mi(e){return e.registrationStatus===1&&e.registrationTime+fn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi({appConfig:e,heartbeatServiceProvider:t},n){const r=yi(e,n),s=Zs(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:dn,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await wn(()=>fetch(r,a));if(c.ok){const l=await c.json();return mn(l)}else throw await bn("Generate Auth Token",c)}function yi(e,{fid:t}){return`${gn(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t=!1){let n;const r=await Pe(e.appConfig,i=>{if(!_n(i))throw G.create("not-registered");const o=i.authToken;if(!t&&Ei(o))return i;if(o.requestStatus===1)return n=wi(e,t),i;{if(!navigator.onLine)throw G.create("app-offline");const a=vi(i);return n=Ii(e,a),a}});return n?await n:r.authToken}async function wi(e,t){let n=await St(e.appConfig);for(;n.authToken.requestStatus===1;)await In(100),n=await St(e.appConfig);const r=n.authToken;return r.requestStatus===0?ot(e,t):r}function St(e){return Pe(e,t=>{if(!_n(t))throw G.create("not-registered");const n=t.authToken;return Si(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ii(e,t){try{const n=await bi(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Se(e.appConfig,r),n}catch(n){if(pn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Sn(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Se(e.appConfig,r)}throw n}}function _n(e){return e!==void 0&&e.registrationStatus===2}function Ei(e){return e.requestStatus===2&&!Ai(e)}function Ai(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ys}function vi(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Si(e){return e.requestStatus===1&&e.requestTime+fn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(e){const t=e,{installationEntry:n,registrationPromise:r}=await it(t);return r?r.catch(console.error):ot(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(e,t=!1){const n=e;return await Ti(n),(await ot(n,t)).token}async function Ti(e){const{registrationPromise:t}=await it(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(e){if(!e||!e.options)throw Le("App Configuration");if(!e.name)throw Le("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Le(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Le(e){return G.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="installations",Ri="installations-internal",Oi=e=>{const t=e.getProvider("app").getImmediate(),n=Di(t),r=Re(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Pi=e=>{const t=e.getProvider("app").getImmediate(),n=Re(t,Tn).getImmediate();return{getId:()=>Ci(n),getToken:s=>_i(n,s)}};function xi(){W(new j(Tn,Oi,"PUBLIC")),W(new j(Ri,Pi,"PRIVATE"))}xi();F(un,rt);F(un,rt,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="analytics",$i="firebase_id",Bi="origin",Mi=60*1e3,Ni="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dn="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=new nn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ki(e,t){const n=document.createElement("script");n.src=`${Dn}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Li(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Fi(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Rn(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){x.error(a)}e("config",s,i)}async function ji(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Rn(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){x.error(i)}}function Hi(e,t,n,r){async function s(i,o,a){try{i==="event"?await ji(e,t,n,o,a):i==="config"?await Fi(e,t,n,r,o,a):e("set",o)}catch(c){x.error(c)}}return s}function Vi(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Hi(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function Ui(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Dn))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},B=new De("analytics","Analytics",qi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=30,Wi=1e3;class Ki{constructor(t={},n=Wi){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const On=new Ki;function Gi(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Yi(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Gi(r)},i=Ni.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw B.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Ji(e,t=On,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw B.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw B.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Zi;return setTimeout(async()=>{a.abort()},n!==void 0?n:Mi),Pn({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Pn(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=On){const{appId:i,measurementId:o}=e;try{await Xi(r,t)}catch(a){if(o)return x.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}try{const a=await Yi(e);return s.deleteThrottleMetadata(i),a}catch(a){if(!Qi(a)){if(s.deleteThrottleMetadata(i),o)return x.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}const c=Number(a.customData.httpStatus)===503?gt(n,s.intervalMillis,zi):gt(n,s.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return s.setThrottleMetadata(i,l),x.debug(`Calling attemptFetch again in ${c} millis`),Pn(e,l,r,s)}}function Xi(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(B.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Qi(e){if(!(e instanceof fe)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Zi{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(){if(Zt())try{await en()}catch(e){return x.warn(B.create("indexeddb-unavailable",{errorInfo:e}).message),!1}else return x.warn(B.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function to(e,t,n,r,s,i,o){var a;const c=Ji(e);c.then(d=>{n[d.measurementId]=d.appId,e.options.measurementId&&d.measurementId!==e.options.measurementId&&x.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>x.error(d)),t.push(c);const l=eo().then(d=>{if(d)return r.getId()}),[u,h]=await Promise.all([c,l]);Ui()||ki(i,u.measurementId),s("js",new Date);const f=(a=o?.config)!==null&&a!==void 0?a:{};return f[Bi]="firebase",f.update=!0,h!=null&&(f[$i]=h),s("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t){this.app=t}_delete(){return delete oe[this.app.options.appId],Promise.resolve()}}let oe={},Ct=[];const _t={};let Fe="dataLayer",ro="gtag",Tt,xn,Dt=!1;function so(){const e=[];if(xr()&&e.push("This is a browser extension environment."),$r()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=B.create("invalid-analytics-context",{errorInfo:t});x.warn(n.message)}}function io(e,t,n){so();const r=e.options.appId;if(!r)throw B.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)x.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw B.create("no-api-key");if(oe[r]!=null)throw B.create("already-exists",{id:r});if(!Dt){Li(Fe);const{wrappedGtag:i,gtagCore:o}=Vi(oe,Ct,_t,Fe,ro);xn=i,Tt=o,Dt=!0}return oe[r]=to(e,Ct,_t,t,Tt,Fe,n),new no(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}function ao(e=Ns()){e=tn(e);const t=Re(e,Ce);return t.isInitialized()?t.getImmediate():co(e)}function co(e,t={}){const n=Re(e,Ce);if(n.isInitialized()){const s=n.getImmediate();if(Ae(t,n.getOptions()))return s;throw B.create("already-initialized")}return n.initialize({options:t})}function lo(e,t,n,r){e=tn(e),oo(xn,oe[e.app.options.appId],t,n,r).catch(s=>x.error(s))}const Rt="@firebase/analytics",Ot="0.7.10";function uo(){W(new j(Ce,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return io(r,s,n)},"PUBLIC")),W(new j("analytics-internal",e,"PRIVATE")),F(Rt,Ot),F(Rt,Ot,"esm2017");function e(t){try{const n=t.getProvider(Ce).getImmediate();return{logEvent:(r,s,i)=>lo(n,r,s,i)}}catch(n){throw B.create("interop-component-reg-failed",{reason:n})}}}uo();const fo=jt(()=>Vt(()=>import("./Login.888be216.js"),[])),ho=jt(()=>Vt(()=>import("./Form.fc0276dd.js"),["assets/Form.fc0276dd.js","assets/Form.df5db385.css"])),po=()=>{const t=Ms({apiKey:"AIzaSyDiriWdr70s6D9DkO_P8Ych5mf5eYwBvNc",authDomain:"solid-js.firebaseapp.com",projectId:"solid-js",storageBucket:"solid-js.appspot.com",messagingSenderId:"851376742980",appId:"1:851376742980:web:4f5882ee800a9a1ca75211",measurementId:"G-FQ5CCCYWR2"});return ao(t),O(_r,{get children(){return[O(ht,{path:"/",get element(){return O(fo,{})}}),O(ht,{path:"/form",get element(){return O(ho,{})}})]}})};er(()=>O(Cr,{get children(){return O(po,{})}}),document.getElementById("root"));export{Nn as $,bo as F,kn as a,we as b,M as c,O as d,ye as e,Io as f,mo as g,wo as h,tr as i,yo as t};
