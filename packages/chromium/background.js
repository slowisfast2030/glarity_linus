"use strict";(()=>{var Tt=Object.create;var Ce=Object.defineProperty;var Pt=Object.getOwnPropertyDescriptor;var St=Object.getOwnPropertyNames;var kt=Object.getPrototypeOf,Ct=Object.prototype.hasOwnProperty;var V=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Et=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of St(t))!Ct.call(e,s)&&s!==r&&Ce(e,s,{get:()=>t[s],enumerable:!(o=Pt(t,s))||o.enumerable});return e};var z=(e,t,r)=>(r=e!=null?Tt(kt(e)):{},Et(t||!e||!e.__esModule?Ce(r,"default",{value:e,enumerable:!0}):r,e));var H=V((ge,Ee)=>{(function(e,t){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],t);else if(typeof ge<"u")t(Ee);else{var r={exports:{}};t(r),e.browser=r.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:ge,function(e){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let t="The message port closed before a response was received.",r=o=>{let s={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(s).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class d extends WeakMap{constructor(n,m=void 0){super(m),this.createItem=n}get(n){return this.has(n)||this.set(n,this.createItem(n)),super.get(n)}}let f=a=>a&&typeof a=="object"&&typeof a.then=="function",g=(a,n)=>(...m)=>{o.runtime.lastError?a.reject(new Error(o.runtime.lastError.message)):n.singleCallbackArg||m.length<=1&&n.singleCallbackArg!==!1?a.resolve(m[0]):a.resolve(m)},x=a=>a==1?"argument":"arguments",A=(a,n)=>function(l,...w){if(w.length<n.minArgs)throw new Error(`Expected at least ${n.minArgs} ${x(n.minArgs)} for ${a}(), got ${w.length}`);if(w.length>n.maxArgs)throw new Error(`Expected at most ${n.maxArgs} ${x(n.maxArgs)} for ${a}(), got ${w.length}`);return new Promise((E,j)=>{if(n.fallbackToNoCallback)try{l[a](...w,g({resolve:E,reject:j},n))}catch(i){console.warn(`${a} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,i),l[a](...w),n.fallbackToNoCallback=!1,n.noCallback=!0,E()}else n.noCallback?(l[a](...w),E()):l[a](...w,g({resolve:E,reject:j},n))})},k=(a,n,m)=>new Proxy(n,{apply(l,w,E){return m.call(w,a,...E)}}),T=Function.call.bind(Object.prototype.hasOwnProperty),b=(a,n={},m={})=>{let l=Object.create(null),w={has(j,i){return i in a||i in l},get(j,i,O){if(i in l)return l[i];if(!(i in a))return;let h=a[i];if(typeof h=="function")if(typeof n[i]=="function")h=k(a,a[i],n[i]);else if(T(m,i)){let D=A(i,m[i]);h=k(a,a[i],D)}else h=h.bind(a);else if(typeof h=="object"&&h!==null&&(T(n,i)||T(m,i)))h=b(h,n[i],m[i]);else if(T(m,"*"))h=b(h,n[i],m["*"]);else return Object.defineProperty(l,i,{configurable:!0,enumerable:!0,get(){return a[i]},set(D){a[i]=D}}),h;return l[i]=h,h},set(j,i,O,h){return i in l?l[i]=O:a[i]=O,!0},defineProperty(j,i,O){return Reflect.defineProperty(l,i,O)},deleteProperty(j,i){return Reflect.deleteProperty(l,i)}},E=Object.create(a);return new Proxy(E,w)},u=a=>({addListener(n,m,...l){n.addListener(a.get(m),...l)},hasListener(n,m){return n.hasListener(a.get(m))},removeListener(n,m){n.removeListener(a.get(m))}}),P=new d(a=>typeof a!="function"?a:function(m){let l=b(m,{},{getContent:{minArgs:0,maxArgs:0}});a(l)}),y=new d(a=>typeof a!="function"?a:function(m,l,w){let E=!1,j,i=new Promise($=>{j=function(R){E=!0,$(R)}}),O;try{O=a(m,l,j)}catch($){O=Promise.reject($)}let h=O!==!0&&f(O);if(O!==!0&&!h&&!E)return!1;let D=$=>{$.then(R=>{w(R)},R=>{let de;R&&(R instanceof Error||typeof R.message=="string")?de=R.message:de="An unexpected error occurred",w({__mozWebExtensionPolyfillReject__:!0,message:de})}).catch(R=>{console.error("Failed to send onMessage rejected reply",R)})};return D(h?O:i),!0}),M=({reject:a,resolve:n},m)=>{o.runtime.lastError?o.runtime.lastError.message===t?n():a(new Error(o.runtime.lastError.message)):m&&m.__mozWebExtensionPolyfillReject__?a(new Error(m.message)):n(m)},C=(a,n,m,...l)=>{if(l.length<n.minArgs)throw new Error(`Expected at least ${n.minArgs} ${x(n.minArgs)} for ${a}(), got ${l.length}`);if(l.length>n.maxArgs)throw new Error(`Expected at most ${n.maxArgs} ${x(n.maxArgs)} for ${a}(), got ${l.length}`);return new Promise((w,E)=>{let j=M.bind(null,{resolve:w,reject:E});l.push(j),m.sendMessage(...l)})},I={devtools:{network:{onRequestFinished:u(P)}},runtime:{onMessage:u(y),onMessageExternal:u(y),sendMessage:C.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:C.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},W={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return s.privacy={network:{"*":W},services:{"*":W},websites:{"*":W}},b(o,I,s)};e.exports=r(chrome)}else e.exports=globalThis.browser})});var mt=V((Ss,ft)=>{"use strict";ft.exports=()=>{let e={};return e.promise=new Promise((t,r)=>{e.resolve=t,e.reject=r}),e}});var ut=V((ks,lt)=>{"use strict";var vo=mt();function To(e,t="maxAge"){let r,o,s,d=async()=>{if(r!==void 0)return;let x=async A=>{s=vo();let k=A[1][t]-Date.now();if(k<=0){e.delete(A[0]),s.resolve();return}return r=A[0],o=setTimeout(()=>{e.delete(A[0]),s&&s.resolve()},k),typeof o.unref=="function"&&o.unref(),s.promise};try{for(let A of e)await x(A)}catch{}r=void 0},f=()=>{r=void 0,o!==void 0&&(clearTimeout(o),o=void 0),s!==void 0&&(s.reject(void 0),s=void 0)},g=e.set.bind(e);return e.set=(x,A)=>{e.has(x)&&e.delete(x);let k=g(x,A);return r&&r===x&&f(),d(),k},d(),e}lt.exports=To});var dt=V((Cs,pt)=>{"use strict";var Po=ut(),be=class{constructor(t,r){if(this.maxAge=t,this[Symbol.toStringTag]="Map",this.data=new Map,Po(this.data),r)for(let[o,s]of r)this.set(o,s)}get size(){return this.data.size}clear(){this.data.clear()}delete(t){return this.data.delete(t)}has(t){return this.data.has(t)}get(t){let r=this.data.get(t);if(r)return r.data}set(t,r){return this.data.set(t,{maxAge:Date.now()+this.maxAge,data:r}),this}values(){return this.createIterator(t=>t[1].data)}keys(){return this.data.keys()}entries(){return this.createIterator(t=>[t[0],t[1].data])}forEach(t,r){for(let[o,s]of this.entries())t.apply(r,[s,o,this])}[Symbol.iterator](){return this.entries()}*createIterator(t){for(let r of this.data.entries())yield t(r)}};pt.exports=be});var c=z(H());var jt=typeof global=="object"&&global&&global.Object===Object&&global,J=jt;var Ot=typeof self=="object"&&self&&self.Object===Object&&self,Mt=J||Ot||Function("return this")(),S=Mt;var It=S.Symbol,F=It;var je=Object.prototype,Rt=je.hasOwnProperty,Nt=je.toString,q=F?F.toStringTag:void 0;function Bt(e){var t=Rt.call(e,q),r=e[q];try{e[q]=void 0;var o=!0}catch{}var s=Nt.call(e);return o&&(t?e[q]=r:delete e[q]),s}var Oe=Bt;var _t=Object.prototype,Ut=_t.toString;function Lt(e){return Ut.call(e)}var Me=Lt;var Dt="[object Null]",Ft="[object Undefined]",Ie=F?F.toStringTag:void 0;function Gt(e){return e==null?e===void 0?Ft:Dt:Ie&&Ie in Object(e)?Oe(e):Me(e)}var B=Gt;function Wt(e){return e!=null&&typeof e=="object"}var G=Wt;var $t=Array.isArray,Re=$t;function qt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Z=qt;var Kt="[object AsyncFunction]",Vt="[object Function]",zt="[object GeneratorFunction]",Ht="[object Proxy]";function Jt(e){if(!Z(e))return!1;var t=B(e);return t==Vt||t==zt||t==Kt||t==Ht}var Y=Jt;var Zt=S["__core-js_shared__"],X=Zt;var Ne=function(){var e=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Yt(e){return!!Ne&&Ne in e}var Be=Yt;var Xt=Function.prototype,Qt=Xt.toString;function er(e){if(e!=null){try{return Qt.call(e)}catch{}try{return e+""}catch{}}return""}var _=er;var tr=/[\\^$.*+?()[\]{}|]/g,rr=/^\[object .+?Constructor\]$/,or=Function.prototype,ar=Object.prototype,sr=or.toString,nr=ar.hasOwnProperty,ir=RegExp("^"+sr.call(nr).replace(tr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function fr(e){if(!Z(e)||Be(e))return!1;var t=Y(e)?ir:rr;return t.test(_(e))}var _e=fr;function mr(e,t){return e?.[t]}var Ue=mr;function lr(e,t){var r=Ue(e,t);return _e(r)?r:void 0}var N=lr;var ur=N(S,"WeakMap"),Q=ur;var pr=9007199254740991;function dr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=pr}var ee=dr;function gr(e){return e!=null&&ee(e.length)&&!Y(e)}var Le=gr;var cr=Object.prototype;function xr(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||cr;return e===r}var te=xr;var Ar="[object Arguments]";function yr(e){return G(e)&&B(e)==Ar}var ce=yr;var De=Object.prototype,hr=De.hasOwnProperty,br=De.propertyIsEnumerable,wr=ce(function(){return arguments}())?ce:function(e){return G(e)&&hr.call(e,"callee")&&!br.call(e,"callee")},Fe=wr;function vr(){return!1}var Ge=vr;var qe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,We=qe&&typeof module=="object"&&module&&!module.nodeType&&module,Tr=We&&We.exports===qe,$e=Tr?S.Buffer:void 0,Pr=$e?$e.isBuffer:void 0,Sr=Pr||Ge,Ke=Sr;var kr="[object Arguments]",Cr="[object Array]",Er="[object Boolean]",jr="[object Date]",Or="[object Error]",Mr="[object Function]",Ir="[object Map]",Rr="[object Number]",Nr="[object Object]",Br="[object RegExp]",_r="[object Set]",Ur="[object String]",Lr="[object WeakMap]",Dr="[object ArrayBuffer]",Fr="[object DataView]",Gr="[object Float32Array]",Wr="[object Float64Array]",$r="[object Int8Array]",qr="[object Int16Array]",Kr="[object Int32Array]",Vr="[object Uint8Array]",zr="[object Uint8ClampedArray]",Hr="[object Uint16Array]",Jr="[object Uint32Array]",p={};p[Gr]=p[Wr]=p[$r]=p[qr]=p[Kr]=p[Vr]=p[zr]=p[Hr]=p[Jr]=!0;p[kr]=p[Cr]=p[Dr]=p[Er]=p[Fr]=p[jr]=p[Or]=p[Mr]=p[Ir]=p[Rr]=p[Nr]=p[Br]=p[_r]=p[Ur]=p[Lr]=!1;function Zr(e){return G(e)&&ee(e.length)&&!!p[B(e)]}var Ve=Zr;function Yr(e){return function(t){return e(t)}}var ze=Yr;var He=typeof exports=="object"&&exports&&!exports.nodeType&&exports,K=He&&typeof module=="object"&&module&&!module.nodeType&&module,Xr=K&&K.exports===He,xe=Xr&&J.process,Qr=function(){try{var e=K&&K.require&&K.require("util").types;return e||xe&&xe.binding&&xe.binding("util")}catch{}}(),Ae=Qr;var Je=Ae&&Ae.isTypedArray,eo=Je?ze(Je):Ve,Ze=eo;function to(e,t){return function(r){return e(t(r))}}var Ye=to;var ro=Ye(Object.keys,Object),Xe=ro;var oo=Object.prototype,ao=oo.hasOwnProperty;function so(e){if(!te(e))return Xe(e);var t=[];for(var r in Object(e))ao.call(e,r)&&r!="constructor"&&t.push(r);return t}var Qe=so;var no=N(S,"Map"),re=no;var io=N(S,"DataView"),oe=io;var fo=N(S,"Promise"),ae=fo;var mo=N(S,"Set"),se=mo;var et="[object Map]",lo="[object Object]",tt="[object Promise]",rt="[object Set]",ot="[object WeakMap]",at="[object DataView]",uo=_(oe),po=_(re),go=_(ae),co=_(se),xo=_(Q),L=B;(oe&&L(new oe(new ArrayBuffer(1)))!=at||re&&L(new re)!=et||ae&&L(ae.resolve())!=tt||se&&L(new se)!=rt||Q&&L(new Q)!=ot)&&(L=function(e){var t=B(e),r=t==lo?e.constructor:void 0,o=r?_(r):"";if(o)switch(o){case uo:return at;case po:return et;case go:return tt;case co:return rt;case xo:return ot}return t});var st=L;var Ao="[object Map]",yo="[object Set]",ho=Object.prototype,bo=ho.hasOwnProperty;function wo(e){if(e==null)return!0;if(Le(e)&&(Re(e)||typeof e=="string"||typeof e.splice=="function"||Ke(e)||Ze(e)||Fe(e)))return!e.length;var t=st(e);if(t==Ao||t==yo)return!e.size;if(te(e))return!Qe(e).length;for(var r in e)if(bo.call(e,r))return!1;return!0}var ye=wo;var he=z(H());async function ne(){let{provider:e="chatgpt"}=await he.default.storage.local.get("provider"),t="provider:gpt3",r=await he.default.storage.local.get(t);return{provider:e,configs:{["gpt3"]:r[t]}}}var U="https://chat.openai.com";var nt="gpt-3.5-turbo",it="api.openai.com";var yt=z(dt());var ie,So=new Uint8Array(16);function we(){if(!ie&&(ie=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ie))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ie(So)}var v=[];for(let e=0;e<256;++e)v.push((e+256).toString(16).slice(1));function gt(e,t=0){return v[e[t+0]]+v[e[t+1]]+v[e[t+2]]+v[e[t+3]]+"-"+v[e[t+4]]+v[e[t+5]]+"-"+v[e[t+6]]+v[e[t+7]]+"-"+v[e[t+8]]+v[e[t+9]]+"-"+v[e[t+10]]+v[e[t+11]]+v[e[t+12]]+v[e[t+13]]+v[e[t+14]]+v[e[t+15]]}var ko=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ve={randomUUID:ko};function Co(e,t,r){if(ve.randomUUID&&!t&&!e)return ve.randomUUID();e=e||{};let o=e.random||(e.rng||we)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){r=r||0;for(let s=0;s<16;++s)t[r+s]=o[s];return t}return gt(o)}var fe=Co;function ct(e){let t,r,o,s,d,f,g;return x(),{feed:A,reset:x};function x(){t=!0,r="",o=0,s=-1,d=void 0,f=void 0,g=""}function A(T){r=r?r+T:T,t&&Eo(r)&&(r=r.slice(xt.length)),t=!1;let b=r.length,u=0,P=!1;for(;u<b;){P&&(r[u]===`
`&&++u,P=!1);let y=-1,M=s,C;for(let I=o;y<0&&I<b;++I)C=r[I],C===":"&&M<0?M=I-u:C==="\r"?(P=!0,y=I-u):C===`
`&&(y=I-u);if(y<0){o=b-u,s=M;break}else o=0,s=-1;k(r,u,M,y),u+=y+1}u===b?r="":u>0&&(r=r.slice(u))}function k(T,b,u,P){if(P===0){g.length>0&&(e({type:"event",id:d,event:f||void 0,data:g.slice(0,-1)}),g="",d=void 0),f=void 0;return}let y=u<0,M=T.slice(b,b+(y?P:u)),C=0;y?C=P:T[b+u+1]===" "?C=u+2:C=u+1;let I=b+C,W=P-C,a=T.slice(I,I+W).toString();if(M==="data")g+=a?"".concat(a,`
`):`
`;else if(M==="event")f=a;else if(M==="id"&&!a.includes("\0"))d=a;else if(M==="retry"){let n=parseInt(a,10);Number.isNaN(n)||e({type:"reconnect-interval",value:n})}}}var xt=[239,187,191];function Eo(e){return xt.every((t,r)=>e.charCodeAt(r)===t)}async function*At(e){let t=e.getReader();try{for(;;){let{done:r,value:o}=await t.read();if(r)return;yield o}}finally{t.releaseLock()}}async function me(e,t){let{onMessage:r,...o}=t,s=await fetch(e,o);if(!s.ok){let f=await s.json().catch(()=>({}));throw new Error(ye(f)?`${s.status} ${s.statusText}`:JSON.stringify(f))}let d=ct(f=>{f.type==="event"&&r(f.data)});for await(let f of At(s.body)){let g=new TextDecoder().decode(f);d.feed(g)}}async function Se(e,t,r,o){return fetch(`${U}/backend-api${r}`,{method:t,headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:o===void 0?void 0:JSON.stringify(o)})}async function ht(e,t){await Se(e,"POST","/conversation/message_feedback",t)}async function jo(e,t,r){await Se(e,"PATCH",`/conversation/${t}`,r)}var Te="accessToken",Pe=new yt.default(10*1e3);async function ue(){if(Pe.get(Te))return Pe.get(Te);let e=await fetch(`${U}/api/auth/session`);if(e.status===403)throw new Error("CLOUDFLARE");let t=await e.json().catch(()=>({}));if(!t.accessToken)throw new Error("UNAUTHORIZED");return Pe.set(Te,t.accessToken),t.accessToken}var le=class{constructor(t){this.token=t;this.token=t}async fetchModels(){return(await Se(this.token,"GET","/models").then(r=>r.json())).models}async getModelName(){try{return(await this.fetchModels())[0].slug}catch(t){return console.error(t),"text-davinci-002-render-sha"}}async generateAnswer(t){let r,o=()=>{r&&jo(this.token,r,{is_visible:!0})},s=await this.getModelName();return await me(`${U}/backend-api/conversation`,{method:"POST",signal:t.signal,headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:JSON.stringify({action:"next",messages:[{id:fe(),role:"user",content:{content_type:"text",parts:[t.prompt]}}],model:s,parent_message_id:fe()}),onMessage(d){var x,A,k;if(console.debug("sse message",d),d==="[DONE]"){t.onEvent({type:"done"}),o();return}let f;try{f=JSON.parse(d)}catch(T){console.error(T);return}let g=(k=(A=(x=f.message)==null?void 0:x.content)==null?void 0:A.parts)==null?void 0:k[0];g&&(r=f.conversation_id,t.onEvent({type:"answer",data:{text:g,messageId:f.message.id,conversationId:f.conversation_id}}))}}),{cleanup:o}}};var pe=class{constructor(t,r){this.token=t;this.model=r;this.token=t,this.model=r}buildPrompt(t){return this.model.startsWith("text-chat-davinci")?`Respond conversationally.<|im_end|>

User: ${t}<|im_sep|>
ChatGPT:`:t}buildMessages(t){return[{role:"user",content:t}]}async generateAnswer(t){var A,k,T,b;let[r]=await Promise.all([ne()]),o=(k=(A=r.configs["gpt3"])==null?void 0:A.model)!=null?k:nt,s=((T=r.configs["gpt3"])==null?void 0:T.apiHost)||it,d=(b=r.configs["gpt3"])==null?void 0:b.apiPath,f="",g={model:this.model,stream:!0,max_tokens:800};o==="text-davinci-003"?(f=`https://${s}${d||"/v1/completions"}`,g={...g,prompt:this.buildPrompt(t.prompt)}):(f=`https://${s}${d||"/v1/chat/completions"}`,g={...g,messages:this.buildMessages(t.prompt)}),console.log(g);let x="";return await me(f,{method:"POST",signal:t.signal,headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:JSON.stringify(g),onMessage(u){if(console.debug("sse message",u),u==="[DONE]"){t.onEvent({type:"done"});return}let P;try{P=JSON.parse(u);let y=o==="text-davinci-003"?P.choices[0].text:P.choices[0].delta.content;if(y===void 0||y==="<|im_end|>"||y==="<|im_sep|>")return;x+=y,t.onEvent({type:"answer",data:{text:x,messageId:P.id,conversationId:P.id}})}catch(y){return}}}),console.log(x),{}}};var ke=z(H());var Xs=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),bt=navigator.userAgent.indexOf("Firefox")!=-1,Qs=/iPad|iPhone|iPod/.test(navigator.userAgent);function wt(e){let{id:t,url:r}=e;r.includes(`${U}/chat`)?ke.default.tabs.sendMessage(t,{type:"CHATGPT_TAB_CURRENT",data:{isLogin:!0}}).catch(()=>{}):ke.default.tabs.sendMessage(t,{type:"CHATGPT_TAB_CURRENT",data:{isLogin:!1}}).catch(()=>{})}async function Mo(e,t){let r=await ne(),o;if(r.provider==="chatgpt"){let f=await ue();o=new le(f)}else if(r.provider==="gpt3"){let{apiKey:f,model:g}=r.configs["gpt3"];o=new pe(f,g)}else throw new Error(`Unknown provider ${r.provider}`);let s=new AbortController;e.onDisconnect.addListener(()=>{s.abort(),d==null||d()});let{cleanup:d}=await o.generateAnswer({prompt:t,signal:s.signal,onEvent(f){if(f.type==="done"){e.postMessage({event:"DONE"});return}e.postMessage(f.data)}})}async function Io(e){c.default.tabs.query({currentWindow:!0,active:!0}).then(o=>{console.log("getCurrent",o);let s=o[0];s.id&&c.default.storage.local.set({glarityTabId:s.id})});let t=await c.default.storage.local.get("pinnedTabId"),r;if(t.pinnedTabId)try{r=await c.default.tabs.get(t.pinnedTabId),c.default.tabs.update(r.id,{active:!0,pinned:!0})}catch(o){console.error(o)}return r||(r=await c.default.tabs.create({url:e,pinned:!0,active:!0})),c.default.storage.local.set({pinnedTabId:r.id}),{pinnedTabId:r.id}}c.default.runtime.onConnect.addListener(async e=>{e.onMessage.addListener(async t=>{console.debug("received msg",t);try{await Mo(e,t.question)}catch(r){e.postMessage({error:r.message})}})});c.default.runtime.onMessage.addListener(async e=>{if(e.type==="FEEDBACK"){let t=await ue();await ht(t,e.data)}else if(e.type==="OPEN_OPTIONS_PAGE")c.default.runtime.openOptionsPage();else{if(e.type==="GET_ACCESS_TOKEN")return ue();if(e.type==="NEW_TAB")return Io(e.data.url);if(e.type==="GO_BACK"){let t=await c.default.storage.local.get("glarityTabId");t.glarityTabId?c.default.tabs.update(t.glarityTabId,{active:!0}).catch(()=>{c.default.tabs.create({url:"about:newtab",active:!0})}):c.default.tabs.create({url:"about:newtab",active:!0})}}});c.default.runtime.onInstalled.addListener(async e=>{e.reason==="install"&&c.default.runtime.openOptionsPage()});c.default.tabs.onUpdated.addListener(async(e,t)=>{let r=await c.default.storage.local.get("pinnedTabId");c.default.tabs.get(e).then(o=>{var s;(s=o.url)!=null&&s.includes(U)&&t.status==="complete"&&o.id&&r.pinnedTabId===o.id&&(console.log("onUpdated",r,o),wt(o))})});async function vt(e){let{id:t}=e;t&&c.default.tabs.sendMessage(t,{type:"OPEN_WEB_SUMMARY",data:{}}).catch(()=>{})}bt?c.default.browserAction.onClicked.addListener(async e=>{await vt(e)}):c.default.action.onClicked.addListener(async e=>{await vt(e)});})();
