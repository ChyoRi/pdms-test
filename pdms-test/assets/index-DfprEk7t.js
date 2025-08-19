(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function KA(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var pm={exports:{}},gu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function XA(){if(F0)return gu;F0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:h,ref:o!==void 0?o:null,props:u}}return gu.Fragment=e,gu.jsx=t,gu.jsxs=t,gu}var $0;function WA(){return $0||($0=1,pm.exports=XA()),pm.exports}var _=WA(),mm={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function ZA(){if(G0)return Ce;G0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function b(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,H={};function z(O,ie,ae){this.props=O,this.context=ie,this.refs=H,this.updater=ae||I}z.prototype.isReactComponent={},z.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},z.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function $(){}$.prototype=z.prototype;function q(O,ie,ae){this.props=O,this.context=ie,this.refs=H,this.updater=ae||I}var W=q.prototype=new $;W.constructor=q,P(W,z.prototype),W.isPureReactComponent=!0;var oe=Array.isArray,le={H:null,A:null,T:null,S:null,V:null},fe=Object.prototype.hasOwnProperty;function D(O,ie,ae,se,ge,xe){return ae=xe.ref,{$$typeof:r,type:O,key:ie,ref:ae!==void 0?ae:null,props:xe}}function R(O,ie){return D(O.type,ie,void 0,void 0,void 0,O.props)}function x(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function k(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return ie[ae]})}var V=/\/+/g;function j(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):ie.toString(36)}function N(){}function Dt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function at(O,ie,ae,se,ge){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(xe){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case r:case e:ve=!0;break;case E:return ve=O._init,at(ve(O._payload),ie,ae,se,ge)}}if(ve)return ge=ge(O),ve=se===""?"."+j(O,0):se,oe(ge)?(ae="",ve!=null&&(ae=ve.replace(V,"$&/")+"/"),at(ge,ie,ae,"",function(jt){return jt})):ge!=null&&(x(ge)&&(ge=R(ge,ae+(ge.key==null||O&&O.key===ge.key?"":(""+ge.key).replace(V,"$&/")+"/")+ve)),ie.push(ge)),1;ve=0;var ct=se===""?".":se+":";if(oe(O))for(var Be=0;Be<O.length;Be++)se=O[Be],xe=ct+j(se,Be),ve+=at(se,ie,ae,xe,ge);else if(Be=b(O),typeof Be=="function")for(O=Be.call(O),Be=0;!(se=O.next()).done;)se=se.value,xe=ct+j(se,Be++),ve+=at(se,ie,ae,xe,ge);else if(xe==="object"){if(typeof O.then=="function")return at(Dt(O),ie,ae,se,ge);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Z(O,ie,ae){if(O==null)return O;var se=[],ge=0;return at(O,se,"","",function(xe){return ie.call(ae,xe,ge++)}),se}function ce(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var me=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ie(){}return Ce.Children={map:Z,forEach:function(O,ie,ae){Z(O,function(){ie.apply(this,arguments)},ae)},count:function(O){var ie=0;return Z(O,function(){ie++}),ie},toArray:function(O){return Z(O,function(ie){return ie})||[]},only:function(O){if(!x(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ce.Component=z,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=q,Ce.StrictMode=s,Ce.Suspense=m,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(O){return le.H.useMemoCache(O)}},Ce.cache=function(O){return function(){return O.apply(null,arguments)}},Ce.cloneElement=function(O,ie,ae){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var se=P({},O.props),ge=O.key,xe=void 0;if(ie!=null)for(ve in ie.ref!==void 0&&(xe=void 0),ie.key!==void 0&&(ge=""+ie.key),ie)!fe.call(ie,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&ie.ref===void 0||(se[ve]=ie[ve]);var ve=arguments.length-2;if(ve===1)se.children=ae;else if(1<ve){for(var ct=Array(ve),Be=0;Be<ve;Be++)ct[Be]=arguments[Be+2];se.children=ct}return D(O.type,ge,void 0,void 0,xe,se)},Ce.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},Ce.createElement=function(O,ie,ae){var se,ge={},xe=null;if(ie!=null)for(se in ie.key!==void 0&&(xe=""+ie.key),ie)fe.call(ie,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ge[se]=ie[se]);var ve=arguments.length-2;if(ve===1)ge.children=ae;else if(1<ve){for(var ct=Array(ve),Be=0;Be<ve;Be++)ct[Be]=arguments[Be+2];ge.children=ct}if(O&&O.defaultProps)for(se in ve=O.defaultProps,ve)ge[se]===void 0&&(ge[se]=ve[se]);return D(O,xe,void 0,void 0,null,ge)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(O){return{$$typeof:p,render:O}},Ce.isValidElement=x,Ce.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:ce}},Ce.memo=function(O,ie){return{$$typeof:g,type:O,compare:ie===void 0?null:ie}},Ce.startTransition=function(O){var ie=le.T,ae={};le.T=ae;try{var se=O(),ge=le.S;ge!==null&&ge(ae,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(Ie,me)}catch(xe){me(xe)}finally{le.T=ie}},Ce.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},Ce.use=function(O){return le.H.use(O)},Ce.useActionState=function(O,ie,ae){return le.H.useActionState(O,ie,ae)},Ce.useCallback=function(O,ie){return le.H.useCallback(O,ie)},Ce.useContext=function(O){return le.H.useContext(O)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(O,ie){return le.H.useDeferredValue(O,ie)},Ce.useEffect=function(O,ie,ae){var se=le.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(O,ie)},Ce.useId=function(){return le.H.useId()},Ce.useImperativeHandle=function(O,ie,ae){return le.H.useImperativeHandle(O,ie,ae)},Ce.useInsertionEffect=function(O,ie){return le.H.useInsertionEffect(O,ie)},Ce.useLayoutEffect=function(O,ie){return le.H.useLayoutEffect(O,ie)},Ce.useMemo=function(O,ie){return le.H.useMemo(O,ie)},Ce.useOptimistic=function(O,ie){return le.H.useOptimistic(O,ie)},Ce.useReducer=function(O,ie,ae){return le.H.useReducer(O,ie,ae)},Ce.useRef=function(O){return le.H.useRef(O)},Ce.useState=function(O){return le.H.useState(O)},Ce.useSyncExternalStore=function(O,ie,ae){return le.H.useSyncExternalStore(O,ie,ae)},Ce.useTransition=function(){return le.H.useTransition()},Ce.version="19.1.0",Ce}var Y0;function bg(){return Y0||(Y0=1,mm.exports=ZA()),mm.exports}var Q=bg();const ur=KA(Q);var gm={exports:{}},yu={},ym={exports:{}},_m={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function JA(){return Q0||(Q0=1,function(r){function e(Z,ce){var me=Z.length;Z.push(ce);e:for(;0<me;){var Ie=me-1>>>1,O=Z[Ie];if(0<o(O,ce))Z[Ie]=ce,Z[me]=O,me=Ie;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ce=Z[0],me=Z.pop();if(me!==ce){Z[0]=me;e:for(var Ie=0,O=Z.length,ie=O>>>1;Ie<ie;){var ae=2*(Ie+1)-1,se=Z[ae],ge=ae+1,xe=Z[ge];if(0>o(se,me))ge<O&&0>o(xe,se)?(Z[Ie]=xe,Z[ge]=me,Ie=ge):(Z[Ie]=se,Z[ae]=me,Ie=ae);else if(ge<O&&0>o(xe,me))Z[Ie]=xe,Z[ge]=me,Ie=ge;else break e}}return ce}function o(Z,ce){var me=Z.sortIndex-ce.sortIndex;return me!==0?me:Z.id-ce.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],g=[],E=1,w=null,b=3,I=!1,P=!1,H=!1,z=!1,$=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function oe(Z){for(var ce=t(g);ce!==null;){if(ce.callback===null)s(g);else if(ce.startTime<=Z)s(g),ce.sortIndex=ce.expirationTime,e(m,ce);else break;ce=t(g)}}function le(Z){if(H=!1,oe(Z),!P)if(t(m)!==null)P=!0,fe||(fe=!0,j());else{var ce=t(g);ce!==null&&at(le,ce.startTime-Z)}}var fe=!1,D=-1,R=5,x=-1;function k(){return z?!0:!(r.unstable_now()-x<R)}function V(){if(z=!1,fe){var Z=r.unstable_now();x=Z;var ce=!0;try{e:{P=!1,H&&(H=!1,q(D),D=-1),I=!0;var me=b;try{t:{for(oe(Z),w=t(m);w!==null&&!(w.expirationTime>Z&&k());){var Ie=w.callback;if(typeof Ie=="function"){w.callback=null,b=w.priorityLevel;var O=Ie(w.expirationTime<=Z);if(Z=r.unstable_now(),typeof O=="function"){w.callback=O,oe(Z),ce=!0;break t}w===t(m)&&s(m),oe(Z)}else s(m);w=t(m)}if(w!==null)ce=!0;else{var ie=t(g);ie!==null&&at(le,ie.startTime-Z),ce=!1}}break e}finally{w=null,b=me,I=!1}ce=void 0}}finally{ce?j():fe=!1}}}var j;if(typeof W=="function")j=function(){W(V)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,Dt=N.port2;N.port1.onmessage=V,j=function(){Dt.postMessage(null)}}else j=function(){$(V,0)};function at(Z,ce){D=$(function(){Z(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_next=function(Z){switch(b){case 1:case 2:case 3:var ce=3;break;default:ce=b}var me=b;b=ce;try{return Z()}finally{b=me}},r.unstable_requestPaint=function(){z=!0},r.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var me=b;b=Z;try{return ce()}finally{b=me}},r.unstable_scheduleCallback=function(Z,ce,me){var Ie=r.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Ie+me:Ie):me=Ie,Z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=me+O,Z={id:E++,callback:ce,priorityLevel:Z,startTime:me,expirationTime:O,sortIndex:-1},me>Ie?(Z.sortIndex=me,e(g,Z),t(m)===null&&Z===t(g)&&(H?(q(D),D=-1):H=!0,at(le,me-Ie))):(Z.sortIndex=O,e(m,Z),P||I||(P=!0,fe||(fe=!0,j()))),Z},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(Z){var ce=b;return function(){var me=b;b=ce;try{return Z.apply(this,arguments)}finally{b=me}}}}(_m)),_m}var K0;function eR(){return K0||(K0=1,ym.exports=JA()),ym.exports}var vm={exports:{}},ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function tR(){if(X0)return ln;X0=1;var r=bg();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,E){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:m,containerInfo:g,implementation:E}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ln.createPortal=function(m,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,E)},ln.flushSync=function(m){var g=h.T,E=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=g,s.p=E,s.d.f()}},ln.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},ln.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var E=g.as,w=p(E,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,I=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:b,fetchPriority:I}):E==="script"&&s.d.X(m,{crossOrigin:w,integrity:b,fetchPriority:I,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ln.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=p(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},ln.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,w=p(E,g.crossOrigin);s.d.L(m,E,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ln.preloadModule=function(m,g){if(typeof m=="string")if(g){var E=p(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},ln.requestFormReset=function(m){s.d.r(m)},ln.unstable_batchedUpdates=function(m,g){return m(g)},ln.useFormState=function(m,g,E){return h.H.useFormState(m,g,E)},ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},ln.version="19.1.0",ln}var W0;function nR(){if(W0)return vm.exports;W0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),vm.exports=tR(),vm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function rR(){if(Z0)return yu;Z0=1;var r=eR(),e=bg(),t=nR();function s(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function h(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(u(n)!==n)throw Error(s(188))}function m(n){var i=n.alternate;if(!i){if(i=u(n),i===null)throw Error(s(188));return i!==n?null:n}for(var a=n,l=i;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return p(f),n;if(d===l)return p(f),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=d;else{for(var T=!1,S=f.child;S;){if(S===a){T=!0,a=f,l=d;break}if(S===l){T=!0,l=f,a=d;break}S=S.sibling}if(!T){for(S=d.child;S;){if(S===a){T=!0,a=d,l=f;break}if(S===l){T=!0,l=d,a=f;break}S=S.sibling}if(!T)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:i}function g(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=g(n),i!==null)return i;n=n.sibling}return null}var E=Object.assign,w=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),W=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function j(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var N=Symbol.for("react.client.reference");function Dt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===N?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case z:return"Profiler";case H:return"StrictMode";case le:return"Suspense";case fe:return"SuspenseList";case x:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case I:return"Portal";case W:return(n.displayName||"Context")+".Provider";case q:return(n._context.displayName||"Context")+".Consumer";case oe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case D:return i=n.displayName||null,i!==null?i:Dt(n.type)||"Memo";case R:i=n._payload,n=n._init;try{return Dt(n(i))}catch{}}return null}var at=Array.isArray,Z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Ie=[],O=-1;function ie(n){return{current:n}}function ae(n){0>O||(n.current=Ie[O],Ie[O]=null,O--)}function se(n,i){O++,Ie[O]=n.current,n.current=i}var ge=ie(null),xe=ie(null),ve=ie(null),ct=ie(null);function Be(n,i){switch(se(ve,i),se(xe,n),se(ge,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?_0(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=_0(i),n=v0(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ae(ge),se(ge,n)}function jt(){ae(ge),ae(xe),ae(ve)}function jn(n){n.memoizedState!==null&&se(ct,n);var i=ge.current,a=v0(i,n.type);i!==a&&(se(xe,n),se(ge,a))}function En(n){xe.current===n&&(ae(ge),ae(xe)),ct.current===n&&(ae(ct),hu._currentValue=me)}var sn=Object.prototype.hasOwnProperty,Ds=r.unstable_scheduleCallback,Ns=r.unstable_cancelCallback,ll=r.unstable_shouldYield,lc=r.unstable_requestPaint,Un=r.unstable_now,pd=r.unstable_getCurrentPriorityLevel,ul=r.unstable_ImmediatePriority,Ma=r.unstable_UserBlockingPriority,Os=r.unstable_NormalPriority,md=r.unstable_LowPriority,Pa=r.unstable_IdlePriority,cl=r.log,uc=r.unstable_setDisableYieldValue,dt=null,Qe=null;function Rn(n){if(typeof cl=="function"&&uc(n),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(dt,n)}catch{}}var an=Math.clz32?Math.clz32:ks,cc=Math.log,gd=Math.LN2;function ks(n){return n>>>=0,n===0?32:31-(cc(n)/gd|0)|0}var Ms=256,Ps=4194304;function nr(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Va(n,i,a){var l=n.pendingLanes;if(l===0)return 0;var f=0,d=n.suspendedLanes,T=n.pingedLanes;n=n.warmLanes;var S=l&134217727;return S!==0?(l=S&~d,l!==0?f=nr(l):(T&=S,T!==0?f=nr(T):a||(a=S&~n,a!==0&&(f=nr(a))))):(S=l&~d,S!==0?f=nr(S):T!==0?f=nr(T):a||(a=l&~n,a!==0&&(f=nr(a)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:f}function Vs(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function hl(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fl(){var n=Ms;return Ms<<=1,(Ms&4194048)===0&&(Ms=256),n}function dl(){var n=Ps;return Ps<<=1,(Ps&62914560)===0&&(Ps=4194304),n}function $r(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Gr(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function pl(n,i,a,l,f,d){var T=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var S=n.entanglements,C=n.expirationTimes,F=n.hiddenUpdates;for(a=T&~a;0<a;){var J=31-an(a),ne=1<<J;S[J]=0,C[J]=-1;var Y=F[J];if(Y!==null)for(F[J]=null,J=0;J<Y.length;J++){var K=Y[J];K!==null&&(K.lane&=-536870913)}a&=~ne}l!==0&&_r(n,l,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(T&~i))}function _r(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-an(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function ml(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-an(a),f=1<<l;f&i|n[l]&i&&(n[l]|=i),a&=~f}}function Ni(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function La(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Oi(){var n=ce.p;return n!==0?n:(n=window.event,n===void 0?32:j0(n.type))}function hc(n,i){var a=ce.p;try{return ce.p=n,i()}finally{ce.p=a}}var ot=Math.random().toString(36).slice(2),Nt="__reactFiber$"+ot,Tt="__reactProps$"+ot,zn="__reactContainer$"+ot,gl="__reactEvents$"+ot,yd="__reactListeners$"+ot,ki="__reactHandles$"+ot,fc="__reactResources$"+ot,Ls="__reactMarker$"+ot;function Mi(n){delete n[Nt],delete n[Tt],delete n[gl],delete n[yd],delete n[ki]}function Yr(n){var i=n[Nt];if(i)return i;for(var a=n.parentNode;a;){if(i=a[zn]||a[Nt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=w0(n);n!==null;){if(a=n[Nt])return a;n=w0(n)}return i}n=a,a=n.parentNode}return null}function vr(n){if(n=n[Nt]||n[zn]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function Er(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(s(33))}function gn(n){var i=n[fc];return i||(i=n[fc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function yt(n){n[Ls]=!0}var yl=new Set,ja={};function rr(n,i){Qr(n,i),Qr(n+"Capture",i)}function Qr(n,i){for(ja[n]=i,n=0;n<i.length;n++)yl.add(i[n])}var dc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pc={},js={};function mc(n){return sn.call(js,n)?!0:sn.call(pc,n)?!1:dc.test(n)?js[n]=!0:(pc[n]=!0,!1)}function Pi(n,i,a){if(mc(i))if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+a)}}function Tr(n,i,a){if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+a)}}function Kt(n,i,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(i,a,""+l)}}var Us,gc;function Kr(n){if(Us===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Us=i&&i[1]||"",gc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Us+n+gc}var Ua=!1;function za(n,i){if(!n||Ua)return"";Ua=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(K){var Y=K}Reflect.construct(n,[],ne)}else{try{ne.call()}catch(K){Y=K}n.call(ne.prototype)}}else{try{throw Error()}catch(K){Y=K}(ne=n())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(K){if(K&&Y&&typeof K.stack=="string")return[K.stack,Y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),T=d[0],S=d[1];if(T&&S){var C=T.split(`
`),F=S.split(`
`);for(f=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;f<F.length&&!F[f].includes("DetermineComponentFrameRoot");)f++;if(l===C.length||f===F.length)for(l=C.length-1,f=F.length-1;1<=l&&0<=f&&C[l]!==F[f];)f--;for(;1<=l&&0<=f;l--,f--)if(C[l]!==F[f]){if(l!==1||f!==1)do if(l--,f--,0>f||C[l]!==F[f]){var J=`
`+C[l].replace(" at new "," at ");return n.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",n.displayName)),J}while(1<=l&&0<=f);break}}}finally{Ua=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Kr(a):""}function _l(n){switch(n.tag){case 26:case 27:case 5:return Kr(n.type);case 16:return Kr("Lazy");case 13:return Kr("Suspense");case 19:return Kr("SuspenseList");case 0:case 15:return za(n.type,!1);case 11:return za(n.type.render,!1);case 1:return za(n.type,!0);case 31:return Kr("Activity");default:return""}}function qa(n){try{var i="";do i+=_l(n),n=n.return;while(n);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function yn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function vl(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _d(n){var i=vl(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){l=""+T,d.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(T){l=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ba(n){n._valueTracker||(n._valueTracker=_d(n))}function El(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return n&&(l=vl(n)?n.checked?"true":"false":n.value),n=l,n!==a?(i.setValue(n),!0):!1}function zs(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var vd=/[\n"\\]/g;function bt(n){return n.replace(vd,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function xn(n,i,a,l,f,d,T,S){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),i!=null?T==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+yn(i)):n.value!==""+yn(i)&&(n.value=""+yn(i)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),i!=null?Vi(n,T,yn(i)):a!=null?Vi(n,T,yn(a)):l!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?n.name=""+yn(S):n.removeAttribute("name")}function qs(n,i,a,l,f,d,T,S){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+yn(a):"",i=i!=null?""+yn(i):a,S||i===n.value||(n.value=i),n.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=S?n.checked:!!l,n.defaultChecked=!!l,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T)}function Vi(n,i,a){i==="number"&&zs(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Xr(n,i,a,l){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+yn(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function We(n,i,a){if(i!=null&&(i=""+yn(i),i!==n.value&&(n.value=i),a==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=a!=null?""+yn(a):""}function Bs(n,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(at(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=yn(i),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function qn(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Hs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yc(n,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,a):typeof a!="number"||a===0||Hs.has(i)?i==="float"?n.cssFloat=a:n[i]=(""+a).trim():n[i]=a+"px"}function Tl(n,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&a[f]!==l&&yc(n,f,l)}else for(var d in i)i.hasOwnProperty(d)&&yc(n,d,i[d])}function bl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ed=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Td=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ha(n){return Td.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Wr=null;function Bn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Zr=null,Jr=null;function wl(n){var i=vr(n);if(i&&(n=i.stateNode)){var a=n[Tt]||null;e:switch(n=i.stateNode,i.type){case"input":if(xn(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==n&&l.form===n.form){var f=l[Tt]||null;if(!f)throw Error(s(90));xn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===n.form&&El(l)}break e;case"textarea":We(n,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Xr(n,!!a.multiple,i,!1)}}}var br=!1;function _c(n,i,a){if(br)return n(i,a);br=!0;try{var l=n(i);return l}finally{if(br=!1,(Zr!==null||Jr!==null)&&(hh(),Zr&&(i=Zr,n=Jr,Jr=Zr=null,wl(i),n)))for(i=0;i<n.length;i++)wl(n[i])}}function Fs(n,i){var a=n.stateNode;if(a===null)return null;var l=a[Tt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hn=!1;if(ir)try{var $s={};Object.defineProperty($s,"passive",{get:function(){Hn=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{Hn=!1}var wr=null,Li=null,ei=null;function Sl(){if(ei)return ei;var n,i=Li,a=i.length,l,f="value"in wr?wr.value:wr.textContent,d=f.length;for(n=0;n<a&&i[n]===f[n];n++);var T=a-n;for(l=1;l<=T&&i[a-l]===f[d-l];l++);return ei=f.slice(n,1<l?1-l:void 0)}function Sr(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ar(){return!0}function Al(){return!1}function Ut(n){function i(a,l,f,d,T){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=T,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(d):d[S]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ar:Al,this.isPropagationStopped=Al,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),i}var $e={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fa=Ut($e),Gs=E({},$e,{view:0,detail:0}),vc=Ut(Gs),$a,Ga,Rr,Ys=E({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Rr&&(Rr&&n.type==="mousemove"?($a=n.screenX-Rr.screenX,Ga=n.screenY-Rr.screenY):Ga=$a=0,Rr=n),$a)},movementY:function(n){return"movementY"in n?n.movementY:Ga}}),Fn=Ut(Ys),Ec=E({},Ys,{dataTransfer:0}),bd=Ut(Ec),Qs=E({},Gs,{relatedTarget:0}),Ya=Ut(Qs),Rl=E({},$e,{animationName:0,elapsedTime:0,pseudoElement:0}),Qa=Ut(Rl),Tc=E({},$e,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ka=Ut(Tc),wd=E({},$e,{data:0}),xl=Ut(wd),Ks={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Il(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=wc[n])?!!i[n]:!1}function Xs(){return Il}var Sc=E({},Gs,{key:function(n){if(n.key){var i=Ks[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Sr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?bc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(n){return n.type==="keypress"?Sr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Sr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Xa=Ut(Sc),Ac=E({},Ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cl=Ut(Ac),ti=E({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),Rc=Ut(ti),xc=E({},$e,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ic=Ut(xc),Cc=E({},Ys,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Wa=Ut(Cc),_n=E({},$e,{newState:0,oldState:0}),Dc=Ut(_n),Nc=[9,13,27,32],xr=ir&&"CompositionEvent"in window,c=null;ir&&"documentMode"in document&&(c=document.documentMode);var y=ir&&"TextEvent"in window&&!c,v=ir&&(!xr||c&&8<c&&11>=c),A=" ",U=!1;function X(n,i){switch(n){case"keyup":return Nc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ue(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var je=!1;function Ot(n,i){switch(n){case"compositionend":return ue(i);case"keypress":return i.which!==32?null:(U=!0,A);case"textInput":return n=i.data,n===A&&U?null:n;default:return null}}function Ue(n,i){if(je)return n==="compositionend"||!xr&&X(n,i)?(n=Sl(),ei=Li=wr=null,je=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v&&i.locale!=="ko"?null:i.data;default:return null}}var zt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kt(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!zt[n.type]:i==="textarea"}function ni(n,i,a,l){Zr?Jr?Jr.push(l):Jr=[l]:Zr=l,i=yh(i,"onChange"),0<i.length&&(a=new Fa("onChange","change",null,a,l),n.push({event:a,listeners:i}))}var Xt=null,Ir=null;function Dl(n){d0(n,0)}function Oc(n){var i=Er(n);if(El(i))return n}function My(n,i){if(n==="change")return i}var Py=!1;if(ir){var Sd;if(ir){var Ad="oninput"in document;if(!Ad){var Vy=document.createElement("div");Vy.setAttribute("oninput","return;"),Ad=typeof Vy.oninput=="function"}Sd=Ad}else Sd=!1;Py=Sd&&(!document.documentMode||9<document.documentMode)}function Ly(){Xt&&(Xt.detachEvent("onpropertychange",jy),Ir=Xt=null)}function jy(n){if(n.propertyName==="value"&&Oc(Ir)){var i=[];ni(i,Ir,n,Bn(n)),_c(Dl,i)}}function AS(n,i,a){n==="focusin"?(Ly(),Xt=i,Ir=a,Xt.attachEvent("onpropertychange",jy)):n==="focusout"&&Ly()}function RS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oc(Ir)}function xS(n,i){if(n==="click")return Oc(i)}function IS(n,i){if(n==="input"||n==="change")return Oc(i)}function CS(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var In=typeof Object.is=="function"?Object.is:CS;function Nl(n,i){if(In(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!sn.call(i,f)||!In(n[f],i[f]))return!1}return!0}function Uy(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zy(n,i){var a=Uy(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=i&&l>=i)return{node:a,offset:i-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Uy(a)}}function qy(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?qy(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function By(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=zs(n.document);i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=zs(n.document)}return i}function Rd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var DS=ir&&"documentMode"in document&&11>=document.documentMode,Za=null,xd=null,Ol=null,Id=!1;function Hy(n,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Id||Za==null||Za!==zs(l)||(l=Za,"selectionStart"in l&&Rd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ol&&Nl(Ol,l)||(Ol=l,l=yh(xd,"onSelect"),0<l.length&&(i=new Fa("onSelect","select",null,i,a),n.push({event:i,listeners:l}),i.target=Za)))}function Ws(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ja={animationend:Ws("Animation","AnimationEnd"),animationiteration:Ws("Animation","AnimationIteration"),animationstart:Ws("Animation","AnimationStart"),transitionrun:Ws("Transition","TransitionRun"),transitionstart:Ws("Transition","TransitionStart"),transitioncancel:Ws("Transition","TransitionCancel"),transitionend:Ws("Transition","TransitionEnd")},Cd={},Fy={};ir&&(Fy=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function Zs(n){if(Cd[n])return Cd[n];if(!Ja[n])return n;var i=Ja[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Fy)return Cd[n]=i[a];return n}var $y=Zs("animationend"),Gy=Zs("animationiteration"),Yy=Zs("animationstart"),NS=Zs("transitionrun"),OS=Zs("transitionstart"),kS=Zs("transitioncancel"),Qy=Zs("transitionend"),Ky=new Map,Dd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dd.push("scrollEnd");function sr(n,i){Ky.set(n,i),rr(i,[n])}var Xy=new WeakMap;function $n(n,i){if(typeof n=="object"&&n!==null){var a=Xy.get(n);return a!==void 0?a:(i={value:n,source:i,stack:qa(i)},Xy.set(n,i),i)}return{value:n,source:i,stack:qa(i)}}var Gn=[],eo=0,Nd=0;function kc(){for(var n=eo,i=Nd=eo=0;i<n;){var a=Gn[i];Gn[i++]=null;var l=Gn[i];Gn[i++]=null;var f=Gn[i];Gn[i++]=null;var d=Gn[i];if(Gn[i++]=null,l!==null&&f!==null){var T=l.pending;T===null?f.next=f:(f.next=T.next,T.next=f),l.pending=f}d!==0&&Wy(a,f,d)}}function Mc(n,i,a,l){Gn[eo++]=n,Gn[eo++]=i,Gn[eo++]=a,Gn[eo++]=l,Nd|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Od(n,i,a,l){return Mc(n,i,a,l),Pc(n)}function to(n,i){return Mc(n,null,null,i),Pc(n)}function Wy(n,i,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,d=n.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&i!==null&&(f=31-an(a),n=d.hiddenUpdates,l=n[f],l===null?n[f]=[i]:l.push(i),i.lane=a|536870912),d):null}function Pc(n){if(50<ru)throw ru=0,jp=null,Error(s(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var no={};function MS(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(n,i,a,l){return new MS(n,i,a,l)}function kd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ri(n,i){var a=n.alternate;return a===null?(a=Cn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Zy(n,i){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Vc(n,i,a,l,f,d){var T=0;if(l=n,typeof n=="function")kd(n)&&(T=1);else if(typeof n=="string")T=VA(n,a,ge.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case x:return n=Cn(31,a,i,f),n.elementType=x,n.lanes=d,n;case P:return Js(a.children,f,d,i);case H:T=8,f|=24;break;case z:return n=Cn(12,a,i,f|2),n.elementType=z,n.lanes=d,n;case le:return n=Cn(13,a,i,f),n.elementType=le,n.lanes=d,n;case fe:return n=Cn(19,a,i,f),n.elementType=fe,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case $:case W:T=10;break e;case q:T=9;break e;case oe:T=11;break e;case D:T=14;break e;case R:T=16,l=null;break e}T=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return i=Cn(T,a,i,f),i.elementType=n,i.type=l,i.lanes=d,i}function Js(n,i,a,l){return n=Cn(7,n,l,i),n.lanes=a,n}function Md(n,i,a){return n=Cn(6,n,null,i),n.lanes=a,n}function Pd(n,i,a){return i=Cn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var ro=[],io=0,Lc=null,jc=0,Yn=[],Qn=0,ea=null,ii=1,si="";function ta(n,i){ro[io++]=jc,ro[io++]=Lc,Lc=n,jc=i}function Jy(n,i,a){Yn[Qn++]=ii,Yn[Qn++]=si,Yn[Qn++]=ea,ea=n;var l=ii;n=si;var f=32-an(l)-1;l&=~(1<<f),a+=1;var d=32-an(i)+f;if(30<d){var T=f-f%5;d=(l&(1<<T)-1).toString(32),l>>=T,f-=T,ii=1<<32-an(i)+f|a<<f|l,si=d+n}else ii=1<<d|a<<f|l,si=n}function Vd(n){n.return!==null&&(ta(n,1),Jy(n,1,0))}function Ld(n){for(;n===Lc;)Lc=ro[--io],ro[io]=null,jc=ro[--io],ro[io]=null;for(;n===ea;)ea=Yn[--Qn],Yn[Qn]=null,si=Yn[--Qn],Yn[Qn]=null,ii=Yn[--Qn],Yn[Qn]=null}var vn=null,pt=null,Fe=!1,na=null,Cr=!1,jd=Error(s(519));function ra(n){var i=Error(s(418,""));throw Pl($n(i,n)),jd}function e_(n){var i=n.stateNode,a=n.type,l=n.memoizedProps;switch(i[Nt]=n,i[Tt]=l,a){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(a=0;a<su.length;a++)Me(su[a],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),qs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ba(i);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),Bs(i,l.value,l.defaultValue,l.children),Ba(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||y0(i.textContent,a)?(l.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),l.onScroll!=null&&Me("scroll",i),l.onScrollEnd!=null&&Me("scrollend",i),l.onClick!=null&&(i.onclick=_h),i=!0):i=!1,i||ra(n)}function t_(n){for(vn=n.return;vn;)switch(vn.tag){case 5:case 13:Cr=!1;return;case 27:case 3:Cr=!0;return;default:vn=vn.return}}function kl(n){if(n!==vn)return!1;if(!Fe)return t_(n),Fe=!0,!1;var i=n.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||em(n.type,n.memoizedProps)),a=!a),a&&pt&&ra(n),t_(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(i===0){pt=or(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;n=n.nextSibling}pt=null}}else i===27?(i=pt,Ji(n.type)?(n=im,im=null,pt=n):pt=i):pt=vn?or(n.stateNode.nextSibling):null;return!0}function Ml(){pt=vn=null,Fe=!1}function n_(){var n=na;return n!==null&&(wn===null?wn=n:wn.push.apply(wn,n),na=null),n}function Pl(n){na===null?na=[n]:na.push(n)}var Ud=ie(null),ia=null,ai=null;function ji(n,i,a){se(Ud,i._currentValue),i._currentValue=a}function oi(n){n._currentValue=Ud.current,ae(Ud)}function zd(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function qd(n,i,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var T=f.child;d=d.firstContext;e:for(;d!==null;){var S=d;d=f;for(var C=0;C<i.length;C++)if(S.context===i[C]){d.lanes|=a,S=d.alternate,S!==null&&(S.lanes|=a),zd(d.return,a,n),l||(T=null);break e}d=S.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(s(341));T.lanes|=a,d=T.alternate,d!==null&&(d.lanes|=a),zd(T,a,n),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===n){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function Vl(n,i,a,l){n=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(s(387));if(T=T.memoizedProps,T!==null){var S=f.type;In(f.pendingProps.value,T.value)||(n!==null?n.push(S):n=[S])}}else if(f===ct.current){if(T=f.alternate,T===null)throw Error(s(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(hu):n=[hu])}f=f.return}n!==null&&qd(i,n,a,l),i.flags|=262144}function Uc(n){for(n=n.firstContext;n!==null;){if(!In(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function sa(n){ia=n,ai=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function on(n){return r_(ia,n)}function zc(n,i){return ia===null&&sa(n),r_(n,i)}function r_(n,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ai===null){if(n===null)throw Error(s(308));ai=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else ai=ai.next=i;return a}var PS=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},VS=r.unstable_scheduleCallback,LS=r.unstable_NormalPriority,Mt={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bd(){return{controller:new PS,data:new Map,refCount:0}}function Ll(n){n.refCount--,n.refCount===0&&VS(LS,function(){n.controller.abort()})}var jl=null,Hd=0,so=0,ao=null;function jS(n,i){if(jl===null){var a=jl=[];Hd=0,so=$p(),ao={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Hd++,i.then(i_,i_),i}function i_(){if(--Hd===0&&jl!==null){ao!==null&&(ao.status="fulfilled");var n=jl;jl=null,so=0,ao=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function US(n,i){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var s_=Z.S;Z.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&jS(n,i),s_!==null&&s_(n,i)};var aa=ie(null);function Fd(){var n=aa.current;return n!==null?n:rt.pooledCache}function qc(n,i){i===null?se(aa,aa.current):se(aa,i.pool)}function a_(){var n=Fd();return n===null?null:{parent:Mt._currentValue,pool:n}}var Ul=Error(s(460)),o_=Error(s(474)),Bc=Error(s(542)),$d={then:function(){}};function l_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Hc(){}function u_(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(Hc,Hc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,h_(n),n;default:if(typeof i.status=="string")i.then(Hc,Hc);else{if(n=rt,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,h_(n),n}throw zl=i,Ul}}var zl=null;function c_(){if(zl===null)throw Error(s(459));var n=zl;return zl=null,n}function h_(n){if(n===Ul||n===Bc)throw Error(s(483))}var Ui=!1;function Gd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function zi(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function qi(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ke&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Pc(n),Wy(n,null,a),i}return Mc(n,l,i,a),Pc(n)}function ql(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,ml(n,a)}}function Qd(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var T={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=T:d=d.next=T,a=a.next}while(a!==null);d===null?f=d=i:d=d.next=i}else f=d=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}var Kd=!1;function Bl(){if(Kd){var n=ao;if(n!==null)throw n}}function Hl(n,i,a,l){Kd=!1;var f=n.updateQueue;Ui=!1;var d=f.firstBaseUpdate,T=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var C=S,F=C.next;C.next=null,T===null?d=F:T.next=F,T=C;var J=n.alternate;J!==null&&(J=J.updateQueue,S=J.lastBaseUpdate,S!==T&&(S===null?J.firstBaseUpdate=F:S.next=F,J.lastBaseUpdate=C))}if(d!==null){var ne=f.baseState;T=0,J=F=C=null,S=d;do{var Y=S.lane&-536870913,K=Y!==S.lane;if(K?(ze&Y)===Y:(l&Y)===Y){Y!==0&&Y===so&&(Kd=!0),J!==null&&(J=J.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Se=n,Ee=S;Y=i;var et=a;switch(Ee.tag){case 1:if(Se=Ee.payload,typeof Se=="function"){ne=Se.call(et,ne,Y);break e}ne=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=Ee.payload,Y=typeof Se=="function"?Se.call(et,ne,Y):Se,Y==null)break e;ne=E({},ne,Y);break e;case 2:Ui=!0}}Y=S.callback,Y!==null&&(n.flags|=64,K&&(n.flags|=8192),K=f.callbacks,K===null?f.callbacks=[Y]:K.push(Y))}else K={lane:Y,tag:S.tag,payload:S.payload,callback:S.callback,next:null},J===null?(F=J=K,C=ne):J=J.next=K,T|=Y;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;K=S,S=K.next,K.next=null,f.lastBaseUpdate=K,f.shared.pending=null}}while(!0);J===null&&(C=ne),f.baseState=C,f.firstBaseUpdate=F,f.lastBaseUpdate=J,d===null&&(f.shared.lanes=0),Ki|=T,n.lanes=T,n.memoizedState=ne}}function f_(n,i){if(typeof n!="function")throw Error(s(191,n));n.call(i)}function d_(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)f_(a[n],i)}var oo=ie(null),Fc=ie(0);function p_(n,i){n=pi,se(Fc,n),se(oo,i),pi=n|i.baseLanes}function Xd(){se(Fc,pi),se(oo,oo.current)}function Wd(){pi=Fc.current,ae(oo),ae(Fc)}var Bi=0,Ne=null,Ze=null,wt=null,$c=!1,lo=!1,oa=!1,Gc=0,Fl=0,uo=null,zS=0;function _t(){throw Error(s(321))}function Zd(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!In(n[a],i[a]))return!1;return!0}function Jd(n,i,a,l,f,d){return Bi=d,Ne=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Z.H=n===null||n.memoizedState===null?W_:Z_,oa=!1,d=a(l,f),oa=!1,lo&&(d=g_(i,a,l,f)),m_(n),d}function m_(n){Z.H=Zc;var i=Ze!==null&&Ze.next!==null;if(Bi=0,wt=Ze=Ne=null,$c=!1,Fl=0,uo=null,i)throw Error(s(300));n===null||qt||(n=n.dependencies,n!==null&&Uc(n)&&(qt=!0))}function g_(n,i,a,l){Ne=n;var f=0;do{if(lo&&(uo=null),Fl=0,lo=!1,25<=f)throw Error(s(301));if(f+=1,wt=Ze=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Z.H=YS,d=i(a,l)}while(lo);return d}function qS(){var n=Z.H,i=n.useState()[0];return i=typeof i.then=="function"?$l(i):i,n=n.useState()[0],(Ze!==null?Ze.memoizedState:null)!==n&&(Ne.flags|=1024),i}function ep(){var n=Gc!==0;return Gc=0,n}function tp(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function np(n){if($c){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}$c=!1}Bi=0,wt=Ze=Ne=null,lo=!1,Fl=Gc=0,uo=null}function Tn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ne.memoizedState=wt=n:wt=wt.next=n,wt}function St(){if(Ze===null){var n=Ne.alternate;n=n!==null?n.memoizedState:null}else n=Ze.next;var i=wt===null?Ne.memoizedState:wt.next;if(i!==null)wt=i,Ze=n;else{if(n===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));Ze=n,n={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},wt===null?Ne.memoizedState=wt=n:wt=wt.next=n}return wt}function rp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $l(n){var i=Fl;return Fl+=1,uo===null&&(uo=[]),n=u_(uo,n,i),i=Ne,(wt===null?i.memoizedState:wt.next)===null&&(i=i.alternate,Z.H=i===null||i.memoizedState===null?W_:Z_),n}function Yc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return $l(n);if(n.$$typeof===W)return on(n)}throw Error(s(438,String(n)))}function ip(n){var i=null,a=Ne.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=rp(),Ne.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),l=0;l<n;l++)a[l]=k;return i.index++,a}function li(n,i){return typeof i=="function"?i(n):i}function Qc(n){var i=St();return sp(i,Ze,n)}function sp(n,i,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=n.baseQueue,d=l.pending;if(d!==null){if(f!==null){var T=f.next;f.next=d.next,d.next=T}i.baseQueue=f=d,l.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{i=f.next;var S=T=null,C=null,F=i,J=!1;do{var ne=F.lane&-536870913;if(ne!==F.lane?(ze&ne)===ne:(Bi&ne)===ne){var Y=F.revertLane;if(Y===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),ne===so&&(J=!0);else if((Bi&Y)===Y){F=F.next,Y===so&&(J=!0);continue}else ne={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},C===null?(S=C=ne,T=d):C=C.next=ne,Ne.lanes|=Y,Ki|=Y;ne=F.action,oa&&a(d,ne),d=F.hasEagerState?F.eagerState:a(d,ne)}else Y={lane:ne,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},C===null?(S=C=Y,T=d):C=C.next=Y,Ne.lanes|=ne,Ki|=ne;F=F.next}while(F!==null&&F!==i);if(C===null?T=d:C.next=S,!In(d,n.memoizedState)&&(qt=!0,J&&(a=ao,a!==null)))throw a;n.memoizedState=d,n.baseState=T,n.baseQueue=C,l.lastRenderedState=d}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function ap(n){var i=St(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,d=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do d=n(d,T.action),T=T.next;while(T!==f);In(d,i.memoizedState)||(qt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function y_(n,i,a){var l=Ne,f=St(),d=Fe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var T=!In((Ze||f).memoizedState,a);T&&(f.memoizedState=a,qt=!0),f=f.queue;var S=E_.bind(null,l,f,n);if(Gl(2048,8,S,[n]),f.getSnapshot!==i||T||wt!==null&&wt.memoizedState.tag&1){if(l.flags|=2048,co(9,Kc(),v_.bind(null,l,f,a,i),null),rt===null)throw Error(s(349));d||(Bi&124)!==0||__(l,i,a)}return a}function __(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ne.updateQueue,i===null?(i=rp(),Ne.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function v_(n,i,a,l){i.value=a,i.getSnapshot=l,T_(i)&&b_(n)}function E_(n,i,a){return a(function(){T_(i)&&b_(n)})}function T_(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!In(n,a)}catch{return!0}}function b_(n){var i=to(n,2);i!==null&&Mn(i,n,2)}function op(n){var i=Tn();if(typeof n=="function"){var a=n;if(n=a(),oa){Rn(!0);try{a()}finally{Rn(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:n},i}function w_(n,i,a,l){return n.baseState=a,sp(n,Ze,typeof l=="function"?l:li)}function BS(n,i,a,l,f){if(Wc(n))throw Error(s(485));if(n=i.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){d.listeners.push(T)}};Z.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,S_(i,d)):(d.next=a.next,i.pending=a.next=d)}}function S_(n,i){var a=i.action,l=i.payload,f=n.state;if(i.isTransition){var d=Z.T,T={};Z.T=T;try{var S=a(f,l),C=Z.S;C!==null&&C(T,S),A_(n,i,S)}catch(F){lp(n,i,F)}finally{Z.T=d}}else try{d=a(f,l),A_(n,i,d)}catch(F){lp(n,i,F)}}function A_(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){R_(n,i,l)},function(l){return lp(n,i,l)}):R_(n,i,a)}function R_(n,i,a){i.status="fulfilled",i.value=a,x_(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,S_(n,a)))}function lp(n,i,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,x_(i),i=i.next;while(i!==l)}n.action=null}function x_(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function I_(n,i){return i}function C_(n,i){if(Fe){var a=rt.formState;if(a!==null){e:{var l=Ne;if(Fe){if(pt){t:{for(var f=pt,d=Cr;f.nodeType!==8;){if(!d){f=null;break t}if(f=or(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){pt=or(f.nextSibling),l=f.data==="F!";break e}}ra(l)}l=!1}l&&(i=a[0])}}return a=Tn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:I_,lastRenderedState:i},a.queue=l,a=Q_.bind(null,Ne,l),l.dispatch=a,l=op(!1),d=dp.bind(null,Ne,!1,l.queue),l=Tn(),f={state:i,dispatch:null,action:n,pending:null},l.queue=f,a=BS.bind(null,Ne,f,d,a),f.dispatch=a,l.memoizedState=n,[i,a,!1]}function D_(n){var i=St();return N_(i,Ze,n)}function N_(n,i,a){if(i=sp(n,i,I_)[0],n=Qc(li)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=$l(i)}catch(T){throw T===Ul?Bc:T}else l=i;i=St();var f=i.queue,d=f.dispatch;return a!==i.memoizedState&&(Ne.flags|=2048,co(9,Kc(),HS.bind(null,f,a),null)),[l,d,n]}function HS(n,i){n.action=i}function O_(n){var i=St(),a=Ze;if(a!==null)return N_(i,a,n);St(),i=i.memoizedState,a=St();var l=a.queue.dispatch;return a.memoizedState=n,[i,l,!1]}function co(n,i,a,l){return n={tag:n,create:a,deps:l,inst:i,next:null},i=Ne.updateQueue,i===null&&(i=rp(),Ne.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n),n}function Kc(){return{destroy:void 0,resource:void 0}}function k_(){return St().memoizedState}function Xc(n,i,a,l){var f=Tn();l=l===void 0?null:l,Ne.flags|=n,f.memoizedState=co(1|i,Kc(),a,l)}function Gl(n,i,a,l){var f=St();l=l===void 0?null:l;var d=f.memoizedState.inst;Ze!==null&&l!==null&&Zd(l,Ze.memoizedState.deps)?f.memoizedState=co(i,d,a,l):(Ne.flags|=n,f.memoizedState=co(1|i,d,a,l))}function M_(n,i){Xc(8390656,8,n,i)}function P_(n,i){Gl(2048,8,n,i)}function V_(n,i){return Gl(4,2,n,i)}function L_(n,i){return Gl(4,4,n,i)}function j_(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function U_(n,i,a){a=a!=null?a.concat([n]):null,Gl(4,4,j_.bind(null,i,n),a)}function up(){}function z_(n,i){var a=St();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Zd(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function q_(n,i){var a=St();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Zd(i,l[1]))return l[0];if(l=n(),oa){Rn(!0);try{n()}finally{Rn(!1)}}return a.memoizedState=[l,i],l}function cp(n,i,a){return a===void 0||(Bi&1073741824)!==0?n.memoizedState=i:(n.memoizedState=a,n=Fv(),Ne.lanes|=n,Ki|=n,a)}function B_(n,i,a,l){return In(a,i)?a:oo.current!==null?(n=cp(n,a,l),In(n,i)||(qt=!0),n):(Bi&42)===0?(qt=!0,n.memoizedState=a):(n=Fv(),Ne.lanes|=n,Ki|=n,i)}function H_(n,i,a,l,f){var d=ce.p;ce.p=d!==0&&8>d?d:8;var T=Z.T,S={};Z.T=S,dp(n,!1,i,a);try{var C=f(),F=Z.S;if(F!==null&&F(S,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var J=US(C,l);Yl(n,i,J,kn(n))}else Yl(n,i,l,kn(n))}catch(ne){Yl(n,i,{then:function(){},status:"rejected",reason:ne},kn())}finally{ce.p=d,Z.T=T}}function FS(){}function hp(n,i,a,l){if(n.tag!==5)throw Error(s(476));var f=F_(n).queue;H_(n,f,i,me,a===null?FS:function(){return $_(n),a(l)})}function F_(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:me},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function $_(n){var i=F_(n).next.queue;Yl(n,i,{},kn())}function fp(){return on(hu)}function G_(){return St().memoizedState}function Y_(){return St().memoizedState}function $S(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=kn();n=zi(a);var l=qi(i,n,a);l!==null&&(Mn(l,i,a),ql(l,i,a)),i={cache:Bd()},n.payload=i;return}i=i.return}}function GS(n,i,a){var l=kn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Wc(n)?K_(i,a):(a=Od(n,i,a,l),a!==null&&(Mn(a,n,l),X_(a,i,l)))}function Q_(n,i,a){var l=kn();Yl(n,i,a,l)}function Yl(n,i,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wc(n))K_(i,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var T=i.lastRenderedState,S=d(T,a);if(f.hasEagerState=!0,f.eagerState=S,In(S,T))return Mc(n,i,f,0),rt===null&&kc(),!1}catch{}finally{}if(a=Od(n,i,f,l),a!==null)return Mn(a,n,l),X_(a,i,l),!0}return!1}function dp(n,i,a,l){if(l={lane:2,revertLane:$p(),action:l,hasEagerState:!1,eagerState:null,next:null},Wc(n)){if(i)throw Error(s(479))}else i=Od(n,a,l,2),i!==null&&Mn(i,n,2)}function Wc(n){var i=n.alternate;return n===Ne||i!==null&&i===Ne}function K_(n,i){lo=$c=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function X_(n,i,a){if((a&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,ml(n,a)}}var Zc={readContext:on,use:Yc,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t},W_={readContext:on,use:Yc,useCallback:function(n,i){return Tn().memoizedState=[n,i===void 0?null:i],n},useContext:on,useEffect:M_,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,Xc(4194308,4,j_.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Xc(4194308,4,n,i)},useInsertionEffect:function(n,i){Xc(4,2,n,i)},useMemo:function(n,i){var a=Tn();i=i===void 0?null:i;var l=n();if(oa){Rn(!0);try{n()}finally{Rn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(n,i,a){var l=Tn();if(a!==void 0){var f=a(i);if(oa){Rn(!0);try{a(i)}finally{Rn(!1)}}}else f=i;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=GS.bind(null,Ne,n),[l.memoizedState,n]},useRef:function(n){var i=Tn();return n={current:n},i.memoizedState=n},useState:function(n){n=op(n);var i=n.queue,a=Q_.bind(null,Ne,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:up,useDeferredValue:function(n,i){var a=Tn();return cp(a,n,i)},useTransition:function(){var n=op(!1);return n=H_.bind(null,Ne,n.queue,!0,!1),Tn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var l=Ne,f=Tn();if(Fe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),rt===null)throw Error(s(349));(ze&124)!==0||__(l,i,a)}f.memoizedState=a;var d={value:a,getSnapshot:i};return f.queue=d,M_(E_.bind(null,l,d,n),[n]),l.flags|=2048,co(9,Kc(),v_.bind(null,l,d,a,i),null),a},useId:function(){var n=Tn(),i=rt.identifierPrefix;if(Fe){var a=si,l=ii;a=(l&~(1<<32-an(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Gc++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=zS++,i="«"+i+"r"+a.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:fp,useFormState:C_,useActionState:C_,useOptimistic:function(n){var i=Tn();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=dp.bind(null,Ne,!0,a),a.dispatch=i,[n,i]},useMemoCache:ip,useCacheRefresh:function(){return Tn().memoizedState=$S.bind(null,Ne)}},Z_={readContext:on,use:Yc,useCallback:z_,useContext:on,useEffect:P_,useImperativeHandle:U_,useInsertionEffect:V_,useLayoutEffect:L_,useMemo:q_,useReducer:Qc,useRef:k_,useState:function(){return Qc(li)},useDebugValue:up,useDeferredValue:function(n,i){var a=St();return B_(a,Ze.memoizedState,n,i)},useTransition:function(){var n=Qc(li)[0],i=St().memoizedState;return[typeof n=="boolean"?n:$l(n),i]},useSyncExternalStore:y_,useId:G_,useHostTransitionStatus:fp,useFormState:D_,useActionState:D_,useOptimistic:function(n,i){var a=St();return w_(a,Ze,n,i)},useMemoCache:ip,useCacheRefresh:Y_},YS={readContext:on,use:Yc,useCallback:z_,useContext:on,useEffect:P_,useImperativeHandle:U_,useInsertionEffect:V_,useLayoutEffect:L_,useMemo:q_,useReducer:ap,useRef:k_,useState:function(){return ap(li)},useDebugValue:up,useDeferredValue:function(n,i){var a=St();return Ze===null?cp(a,n,i):B_(a,Ze.memoizedState,n,i)},useTransition:function(){var n=ap(li)[0],i=St().memoizedState;return[typeof n=="boolean"?n:$l(n),i]},useSyncExternalStore:y_,useId:G_,useHostTransitionStatus:fp,useFormState:O_,useActionState:O_,useOptimistic:function(n,i){var a=St();return Ze!==null?w_(a,Ze,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:ip,useCacheRefresh:Y_},ho=null,Ql=0;function Jc(n){var i=Ql;return Ql+=1,ho===null&&(ho=[]),u_(ho,n,i)}function Kl(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function eh(n,i){throw i.$$typeof===w?Error(s(525)):(n=Object.prototype.toString.call(i),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function J_(n){var i=n._init;return i(n._payload)}function ev(n){function i(L,M){if(n){var B=L.deletions;B===null?(L.deletions=[M],L.flags|=16):B.push(M)}}function a(L,M){if(!n)return null;for(;M!==null;)i(L,M),M=M.sibling;return null}function l(L){for(var M=new Map;L!==null;)L.key!==null?M.set(L.key,L):M.set(L.index,L),L=L.sibling;return M}function f(L,M){return L=ri(L,M),L.index=0,L.sibling=null,L}function d(L,M,B){return L.index=B,n?(B=L.alternate,B!==null?(B=B.index,B<M?(L.flags|=67108866,M):B):(L.flags|=67108866,M)):(L.flags|=1048576,M)}function T(L){return n&&L.alternate===null&&(L.flags|=67108866),L}function S(L,M,B,ee){return M===null||M.tag!==6?(M=Md(B,L.mode,ee),M.return=L,M):(M=f(M,B),M.return=L,M)}function C(L,M,B,ee){var pe=B.type;return pe===P?J(L,M,B.props.children,ee,B.key):M!==null&&(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===R&&J_(pe)===M.type)?(M=f(M,B.props),Kl(M,B),M.return=L,M):(M=Vc(B.type,B.key,B.props,null,L.mode,ee),Kl(M,B),M.return=L,M)}function F(L,M,B,ee){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=Pd(B,L.mode,ee),M.return=L,M):(M=f(M,B.children||[]),M.return=L,M)}function J(L,M,B,ee,pe){return M===null||M.tag!==7?(M=Js(B,L.mode,ee,pe),M.return=L,M):(M=f(M,B),M.return=L,M)}function ne(L,M,B){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Md(""+M,L.mode,B),M.return=L,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case b:return B=Vc(M.type,M.key,M.props,null,L.mode,B),Kl(B,M),B.return=L,B;case I:return M=Pd(M,L.mode,B),M.return=L,M;case R:var ee=M._init;return M=ee(M._payload),ne(L,M,B)}if(at(M)||j(M))return M=Js(M,L.mode,B,null),M.return=L,M;if(typeof M.then=="function")return ne(L,Jc(M),B);if(M.$$typeof===W)return ne(L,zc(L,M),B);eh(L,M)}return null}function Y(L,M,B,ee){var pe=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return pe!==null?null:S(L,M,""+B,ee);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case b:return B.key===pe?C(L,M,B,ee):null;case I:return B.key===pe?F(L,M,B,ee):null;case R:return pe=B._init,B=pe(B._payload),Y(L,M,B,ee)}if(at(B)||j(B))return pe!==null?null:J(L,M,B,ee,null);if(typeof B.then=="function")return Y(L,M,Jc(B),ee);if(B.$$typeof===W)return Y(L,M,zc(L,B),ee);eh(L,B)}return null}function K(L,M,B,ee,pe){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return L=L.get(B)||null,S(M,L,""+ee,pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case b:return L=L.get(ee.key===null?B:ee.key)||null,C(M,L,ee,pe);case I:return L=L.get(ee.key===null?B:ee.key)||null,F(M,L,ee,pe);case R:var Oe=ee._init;return ee=Oe(ee._payload),K(L,M,B,ee,pe)}if(at(ee)||j(ee))return L=L.get(B)||null,J(M,L,ee,pe,null);if(typeof ee.then=="function")return K(L,M,B,Jc(ee),pe);if(ee.$$typeof===W)return K(L,M,B,zc(M,ee),pe);eh(M,ee)}return null}function Se(L,M,B,ee){for(var pe=null,Oe=null,ye=M,Te=M=0,Ht=null;ye!==null&&Te<B.length;Te++){ye.index>Te?(Ht=ye,ye=null):Ht=ye.sibling;var He=Y(L,ye,B[Te],ee);if(He===null){ye===null&&(ye=Ht);break}n&&ye&&He.alternate===null&&i(L,ye),M=d(He,M,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He,ye=Ht}if(Te===B.length)return a(L,ye),Fe&&ta(L,Te),pe;if(ye===null){for(;Te<B.length;Te++)ye=ne(L,B[Te],ee),ye!==null&&(M=d(ye,M,Te),Oe===null?pe=ye:Oe.sibling=ye,Oe=ye);return Fe&&ta(L,Te),pe}for(ye=l(ye);Te<B.length;Te++)Ht=K(ye,L,Te,B[Te],ee),Ht!==null&&(n&&Ht.alternate!==null&&ye.delete(Ht.key===null?Te:Ht.key),M=d(Ht,M,Te),Oe===null?pe=Ht:Oe.sibling=Ht,Oe=Ht);return n&&ye.forEach(function(is){return i(L,is)}),Fe&&ta(L,Te),pe}function Ee(L,M,B,ee){if(B==null)throw Error(s(151));for(var pe=null,Oe=null,ye=M,Te=M=0,Ht=null,He=B.next();ye!==null&&!He.done;Te++,He=B.next()){ye.index>Te?(Ht=ye,ye=null):Ht=ye.sibling;var is=Y(L,ye,He.value,ee);if(is===null){ye===null&&(ye=Ht);break}n&&ye&&is.alternate===null&&i(L,ye),M=d(is,M,Te),Oe===null?pe=is:Oe.sibling=is,Oe=is,ye=Ht}if(He.done)return a(L,ye),Fe&&ta(L,Te),pe;if(ye===null){for(;!He.done;Te++,He=B.next())He=ne(L,He.value,ee),He!==null&&(M=d(He,M,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He);return Fe&&ta(L,Te),pe}for(ye=l(ye);!He.done;Te++,He=B.next())He=K(ye,L,Te,He.value,ee),He!==null&&(n&&He.alternate!==null&&ye.delete(He.key===null?Te:He.key),M=d(He,M,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He);return n&&ye.forEach(function(QA){return i(L,QA)}),Fe&&ta(L,Te),pe}function et(L,M,B,ee){if(typeof B=="object"&&B!==null&&B.type===P&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case b:e:{for(var pe=B.key;M!==null;){if(M.key===pe){if(pe=B.type,pe===P){if(M.tag===7){a(L,M.sibling),ee=f(M,B.props.children),ee.return=L,L=ee;break e}}else if(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===R&&J_(pe)===M.type){a(L,M.sibling),ee=f(M,B.props),Kl(ee,B),ee.return=L,L=ee;break e}a(L,M);break}else i(L,M);M=M.sibling}B.type===P?(ee=Js(B.props.children,L.mode,ee,B.key),ee.return=L,L=ee):(ee=Vc(B.type,B.key,B.props,null,L.mode,ee),Kl(ee,B),ee.return=L,L=ee)}return T(L);case I:e:{for(pe=B.key;M!==null;){if(M.key===pe)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){a(L,M.sibling),ee=f(M,B.children||[]),ee.return=L,L=ee;break e}else{a(L,M);break}else i(L,M);M=M.sibling}ee=Pd(B,L.mode,ee),ee.return=L,L=ee}return T(L);case R:return pe=B._init,B=pe(B._payload),et(L,M,B,ee)}if(at(B))return Se(L,M,B,ee);if(j(B)){if(pe=j(B),typeof pe!="function")throw Error(s(150));return B=pe.call(B),Ee(L,M,B,ee)}if(typeof B.then=="function")return et(L,M,Jc(B),ee);if(B.$$typeof===W)return et(L,M,zc(L,B),ee);eh(L,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,M!==null&&M.tag===6?(a(L,M.sibling),ee=f(M,B),ee.return=L,L=ee):(a(L,M),ee=Md(B,L.mode,ee),ee.return=L,L=ee),T(L)):a(L,M)}return function(L,M,B,ee){try{Ql=0;var pe=et(L,M,B,ee);return ho=null,pe}catch(ye){if(ye===Ul||ye===Bc)throw ye;var Oe=Cn(29,ye,null,L.mode);return Oe.lanes=ee,Oe.return=L,Oe}finally{}}}var fo=ev(!0),tv=ev(!1),Kn=ie(null),Dr=null;function Hi(n){var i=n.alternate;se(Pt,Pt.current&1),se(Kn,n),Dr===null&&(i===null||oo.current!==null||i.memoizedState!==null)&&(Dr=n)}function nv(n){if(n.tag===22){if(se(Pt,Pt.current),se(Kn,n),Dr===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Dr=n)}}else Fi()}function Fi(){se(Pt,Pt.current),se(Kn,Kn.current)}function ui(n){ae(Kn),Dr===n&&(Dr=null),ae(Pt)}var Pt=ie(0);function th(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||rm(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function pp(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var mp={enqueueSetState:function(n,i,a){n=n._reactInternals;var l=kn(),f=zi(l);f.payload=i,a!=null&&(f.callback=a),i=qi(n,f,l),i!==null&&(Mn(i,n,l),ql(i,n,l))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=kn(),f=zi(l);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=qi(n,f,l),i!==null&&(Mn(i,n,l),ql(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=kn(),l=zi(a);l.tag=2,i!=null&&(l.callback=i),i=qi(n,l,a),i!==null&&(Mn(i,n,a),ql(i,n,a))}};function rv(n,i,a,l,f,d,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,T):i.prototype&&i.prototype.isPureReactComponent?!Nl(a,l)||!Nl(f,d):!0}function iv(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&mp.enqueueReplaceState(i,i.state,null)}function la(n,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(n=n.defaultProps){a===i&&(a=E({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var nh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function sv(n){nh(n)}function av(n){console.error(n)}function ov(n){nh(n)}function rh(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function lv(n,i,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function gp(n,i,a){return a=zi(a),a.tag=3,a.payload={element:null},a.callback=function(){rh(n,i)},a}function uv(n){return n=zi(n),n.tag=3,n}function cv(n,i,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;n.payload=function(){return f(d)},n.callback=function(){lv(i,a,l)}}var T=a.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){lv(i,a,l),typeof f!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var S=l.stack;this.componentDidCatch(l.value,{componentStack:S!==null?S:""})})}function QS(n,i,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Vl(i,a,f,!0),a=Kn.current,a!==null){switch(a.tag){case 13:return Dr===null?zp():a.alternate===null&&mt===0&&(mt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===$d?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Bp(n,l,f)),!1;case 22:return a.flags|=65536,l===$d?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Bp(n,l,f)),!1}throw Error(s(435,a.tag))}return Bp(n,l,f),zp(),!1}if(Fe)return i=Kn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==jd&&(n=Error(s(422),{cause:l}),Pl($n(n,a)))):(l!==jd&&(i=Error(s(423),{cause:l}),Pl($n(i,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=$n(l,a),f=gp(n.stateNode,l,f),Qd(n,f),mt!==4&&(mt=2)),!1;var d=Error(s(520),{cause:l});if(d=$n(d,a),nu===null?nu=[d]:nu.push(d),mt!==4&&(mt=2),i===null)return!0;l=$n(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=gp(a.stateNode,l,n),Qd(a,n),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Xi===null||!Xi.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=uv(f),cv(f,n,a,l),Qd(a,f),!1}a=a.return}while(a!==null);return!1}var hv=Error(s(461)),qt=!1;function Wt(n,i,a,l){i.child=n===null?tv(i,null,a,l):fo(i,n.child,a,l)}function fv(n,i,a,l,f){a=a.render;var d=i.ref;if("ref"in l){var T={};for(var S in l)S!=="ref"&&(T[S]=l[S])}else T=l;return sa(i),l=Jd(n,i,a,T,d,f),S=ep(),n!==null&&!qt?(tp(n,i,f),ci(n,i,f)):(Fe&&S&&Vd(i),i.flags|=1,Wt(n,i,l,f),i.child)}function dv(n,i,a,l,f){if(n===null){var d=a.type;return typeof d=="function"&&!kd(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,pv(n,i,d,l,f)):(n=Vc(a.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(d=n.child,!Sp(n,f)){var T=d.memoizedProps;if(a=a.compare,a=a!==null?a:Nl,a(T,l)&&n.ref===i.ref)return ci(n,i,f)}return i.flags|=1,n=ri(d,l),n.ref=i.ref,n.return=i,i.child=n}function pv(n,i,a,l,f){if(n!==null){var d=n.memoizedProps;if(Nl(d,l)&&n.ref===i.ref)if(qt=!1,i.pendingProps=l=d,Sp(n,f))(n.flags&131072)!==0&&(qt=!0);else return i.lanes=n.lanes,ci(n,i,f)}return yp(n,i,a,l,f)}function mv(n,i,a){var l=i.pendingProps,f=l.children,d=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,n!==null){for(f=i.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return gv(n,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&qc(i,d!==null?d.cachePool:null),d!==null?p_(i,d):Xd(),nv(i);else return i.lanes=i.childLanes=536870912,gv(n,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(qc(i,d.cachePool),p_(i,d),Fi(),i.memoizedState=null):(n!==null&&qc(i,null),Xd(),Fi());return Wt(n,i,f,a),i.child}function gv(n,i,a,l){var f=Fd();return f=f===null?null:{parent:Mt._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},n!==null&&qc(i,null),Xd(),nv(i),n!==null&&Vl(n,i,l,!0),null}function ih(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function yp(n,i,a,l,f){return sa(i),a=Jd(n,i,a,l,void 0,f),l=ep(),n!==null&&!qt?(tp(n,i,f),ci(n,i,f)):(Fe&&l&&Vd(i),i.flags|=1,Wt(n,i,a,f),i.child)}function yv(n,i,a,l,f,d){return sa(i),i.updateQueue=null,a=g_(i,l,a,f),m_(n),l=ep(),n!==null&&!qt?(tp(n,i,d),ci(n,i,d)):(Fe&&l&&Vd(i),i.flags|=1,Wt(n,i,a,d),i.child)}function _v(n,i,a,l,f){if(sa(i),i.stateNode===null){var d=no,T=a.contextType;typeof T=="object"&&T!==null&&(d=on(T)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=mp,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Gd(i),T=a.contextType,d.context=typeof T=="object"&&T!==null?on(T):no,d.state=i.memoizedState,T=a.getDerivedStateFromProps,typeof T=="function"&&(pp(i,a,T,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(T=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),T!==d.state&&mp.enqueueReplaceState(d,d.state,null),Hl(i,l,d,f),Bl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){d=i.stateNode;var S=i.memoizedProps,C=la(a,S);d.props=C;var F=d.context,J=a.contextType;T=no,typeof J=="object"&&J!==null&&(T=on(J));var ne=a.getDerivedStateFromProps;J=typeof ne=="function"||typeof d.getSnapshotBeforeUpdate=="function",S=i.pendingProps!==S,J||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S||F!==T)&&iv(i,d,l,T),Ui=!1;var Y=i.memoizedState;d.state=Y,Hl(i,l,d,f),Bl(),F=i.memoizedState,S||Y!==F||Ui?(typeof ne=="function"&&(pp(i,a,ne,l),F=i.memoizedState),(C=Ui||rv(i,a,C,l,Y,F,T))?(J||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),d.props=l,d.state=F,d.context=T,l=C):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Yd(n,i),T=i.memoizedProps,J=la(a,T),d.props=J,ne=i.pendingProps,Y=d.context,F=a.contextType,C=no,typeof F=="object"&&F!==null&&(C=on(F)),S=a.getDerivedStateFromProps,(F=typeof S=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T!==ne||Y!==C)&&iv(i,d,l,C),Ui=!1,Y=i.memoizedState,d.state=Y,Hl(i,l,d,f),Bl();var K=i.memoizedState;T!==ne||Y!==K||Ui||n!==null&&n.dependencies!==null&&Uc(n.dependencies)?(typeof S=="function"&&(pp(i,a,S,l),K=i.memoizedState),(J=Ui||rv(i,a,J,l,Y,K,C)||n!==null&&n.dependencies!==null&&Uc(n.dependencies))?(F||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,K,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,K,C)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||T===n.memoizedProps&&Y===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&Y===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=K),d.props=l,d.state=K,d.context=C,l=J):(typeof d.componentDidUpdate!="function"||T===n.memoizedProps&&Y===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&Y===n.memoizedState||(i.flags|=1024),l=!1)}return d=l,ih(n,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,n!==null&&l?(i.child=fo(i,n.child,null,f),i.child=fo(i,null,a,f)):Wt(n,i,a,f),i.memoizedState=d.state,n=i.child):n=ci(n,i,f),n}function vv(n,i,a,l){return Ml(),i.flags|=256,Wt(n,i,a,l),i.child}var _p={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vp(n){return{baseLanes:n,cachePool:a_()}}function Ep(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=Xn),n}function Ev(n,i,a){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,T;if((T=d)||(T=n!==null&&n.memoizedState===null?!1:(Pt.current&2)!==0),T&&(f=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,n===null){if(Fe){if(f?Hi(i):Fi(),Fe){var S=pt,C;if(C=S){e:{for(C=S,S=Cr;C.nodeType!==8;){if(!S){S=null;break e}if(C=or(C.nextSibling),C===null){S=null;break e}}S=C}S!==null?(i.memoizedState={dehydrated:S,treeContext:ea!==null?{id:ii,overflow:si}:null,retryLane:536870912,hydrationErrors:null},C=Cn(18,null,null,0),C.stateNode=S,C.return=i,i.child=C,vn=i,pt=null,C=!0):C=!1}C||ra(i)}if(S=i.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return rm(S)?i.lanes=32:i.lanes=536870912,null;ui(i)}return S=l.children,l=l.fallback,f?(Fi(),f=i.mode,S=sh({mode:"hidden",children:S},f),l=Js(l,f,a,null),S.return=i,l.return=i,S.sibling=l,i.child=S,f=i.child,f.memoizedState=vp(a),f.childLanes=Ep(n,T,a),i.memoizedState=_p,l):(Hi(i),Tp(i,S))}if(C=n.memoizedState,C!==null&&(S=C.dehydrated,S!==null)){if(d)i.flags&256?(Hi(i),i.flags&=-257,i=bp(n,i,a)):i.memoizedState!==null?(Fi(),i.child=n.child,i.flags|=128,i=null):(Fi(),f=l.fallback,S=i.mode,l=sh({mode:"visible",children:l.children},S),f=Js(f,S,a,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,fo(i,n.child,null,a),l=i.child,l.memoizedState=vp(a),l.childLanes=Ep(n,T,a),i.memoizedState=_p,i=f);else if(Hi(i),rm(S)){if(T=S.nextSibling&&S.nextSibling.dataset,T)var F=T.dgst;T=F,l=Error(s(419)),l.stack="",l.digest=T,Pl({value:l,source:null,stack:null}),i=bp(n,i,a)}else if(qt||Vl(n,i,a,!1),T=(a&n.childLanes)!==0,qt||T){if(T=rt,T!==null&&(l=a&-a,l=(l&42)!==0?1:Ni(l),l=(l&(T.suspendedLanes|a))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,to(n,l),Mn(T,n,l),hv;S.data==="$?"||zp(),i=bp(n,i,a)}else S.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=C.treeContext,pt=or(S.nextSibling),vn=i,Fe=!0,na=null,Cr=!1,n!==null&&(Yn[Qn++]=ii,Yn[Qn++]=si,Yn[Qn++]=ea,ii=n.id,si=n.overflow,ea=i),i=Tp(i,l.children),i.flags|=4096);return i}return f?(Fi(),f=l.fallback,S=i.mode,C=n.child,F=C.sibling,l=ri(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,F!==null?f=ri(F,f):(f=Js(f,S,a,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,S=n.child.memoizedState,S===null?S=vp(a):(C=S.cachePool,C!==null?(F=Mt._currentValue,C=C.parent!==F?{parent:F,pool:F}:C):C=a_(),S={baseLanes:S.baseLanes|a,cachePool:C}),f.memoizedState=S,f.childLanes=Ep(n,T,a),i.memoizedState=_p,l):(Hi(i),a=n.child,n=a.sibling,a=ri(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,n!==null&&(T=i.deletions,T===null?(i.deletions=[n],i.flags|=16):T.push(n)),i.child=a,i.memoizedState=null,a)}function Tp(n,i){return i=sh({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function sh(n,i){return n=Cn(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function bp(n,i,a){return fo(i,n.child,null,a),n=Tp(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Tv(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),zd(n.return,i,a)}function wp(n,i,a,l,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function bv(n,i,a){var l=i.pendingProps,f=l.revealOrder,d=l.tail;if(Wt(n,i,l.children,a),l=Pt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Tv(n,a,i);else if(n.tag===19)Tv(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(se(Pt,l),f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&th(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),wp(i,!1,f,a,d);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&th(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}wp(i,!0,a,null,d);break;case"together":wp(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ci(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ki|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(Vl(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(s(153));if(i.child!==null){for(n=i.child,a=ri(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ri(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Sp(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Uc(n)))}function KS(n,i,a){switch(i.tag){case 3:Be(i,i.stateNode.containerInfo),ji(i,Mt,n.memoizedState.cache),Ml();break;case 27:case 5:jn(i);break;case 4:Be(i,i.stateNode.containerInfo);break;case 10:ji(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Hi(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Ev(n,i,a):(Hi(i),n=ci(n,i,a),n!==null?n.sibling:null);Hi(i);break;case 19:var f=(n.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Vl(n,i,a,!1),l=(a&i.childLanes)!==0),f){if(l)return bv(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Pt,Pt.current),l)break;return null;case 22:case 23:return i.lanes=0,mv(n,i,a);case 24:ji(i,Mt,n.memoizedState.cache)}return ci(n,i,a)}function wv(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)qt=!0;else{if(!Sp(n,a)&&(i.flags&128)===0)return qt=!1,KS(n,i,a);qt=(n.flags&131072)!==0}else qt=!1,Fe&&(i.flags&1048576)!==0&&Jy(i,jc,i.index);switch(i.lanes=0,i.tag){case 16:e:{n=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")kd(l)?(n=la(l,n),i.tag=1,i=_v(null,i,l,n,a)):(i.tag=0,i=yp(null,i,l,n,a));else{if(l!=null){if(f=l.$$typeof,f===oe){i.tag=11,i=fv(null,i,l,n,a);break e}else if(f===D){i.tag=14,i=dv(null,i,l,n,a);break e}}throw i=Dt(l)||l,Error(s(306,i,""))}}return i;case 0:return yp(n,i,i.type,i.pendingProps,a);case 1:return l=i.type,f=la(l,i.pendingProps),_v(n,i,l,f,a);case 3:e:{if(Be(i,i.stateNode.containerInfo),n===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Yd(n,i),Hl(i,l,null,a);var T=i.memoizedState;if(l=T.cache,ji(i,Mt,l),l!==d.cache&&qd(i,[Mt],a,!0),Bl(),l=T.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=vv(n,i,l,a);break e}else if(l!==f){f=$n(Error(s(424)),i),Pl(f),i=vv(n,i,l,a);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(pt=or(n.firstChild),vn=i,Fe=!0,na=null,Cr=!0,a=tv(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ml(),l===f){i=ci(n,i,a);break e}Wt(n,i,l,a)}i=i.child}return i;case 26:return ih(n,i),n===null?(a=x0(i.type,null,i.pendingProps,null))?i.memoizedState=a:Fe||(a=i.type,n=i.pendingProps,l=vh(ve.current).createElement(a),l[Nt]=i,l[Tt]=n,Jt(l,a,n),yt(l),i.stateNode=l):i.memoizedState=x0(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return jn(i),n===null&&Fe&&(l=i.stateNode=S0(i.type,i.pendingProps,ve.current),vn=i,Cr=!0,f=pt,Ji(i.type)?(im=f,pt=or(l.firstChild)):pt=f),Wt(n,i,i.pendingProps.children,a),ih(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Fe&&((f=l=pt)&&(l=wA(l,i.type,i.pendingProps,Cr),l!==null?(i.stateNode=l,vn=i,pt=or(l.firstChild),Cr=!1,f=!0):f=!1),f||ra(i)),jn(i),f=i.type,d=i.pendingProps,T=n!==null?n.memoizedProps:null,l=d.children,em(f,d)?l=null:T!==null&&em(f,T)&&(i.flags|=32),i.memoizedState!==null&&(f=Jd(n,i,qS,null,null,a),hu._currentValue=f),ih(n,i),Wt(n,i,l,a),i.child;case 6:return n===null&&Fe&&((n=a=pt)&&(a=SA(a,i.pendingProps,Cr),a!==null?(i.stateNode=a,vn=i,pt=null,n=!0):n=!1),n||ra(i)),null;case 13:return Ev(n,i,a);case 4:return Be(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=fo(i,null,l,a):Wt(n,i,l,a),i.child;case 11:return fv(n,i,i.type,i.pendingProps,a);case 7:return Wt(n,i,i.pendingProps,a),i.child;case 8:return Wt(n,i,i.pendingProps.children,a),i.child;case 12:return Wt(n,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,ji(i,i.type,l.value),Wt(n,i,l.children,a),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,sa(i),f=on(f),l=l(f),i.flags|=1,Wt(n,i,l,a),i.child;case 14:return dv(n,i,i.type,i.pendingProps,a);case 15:return pv(n,i,i.type,i.pendingProps,a);case 19:return bv(n,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},n===null?(a=sh(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=ri(n.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return mv(n,i,a);case 24:return sa(i),l=on(Mt),n===null?(f=Fd(),f===null&&(f=rt,d=Bd(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),i.memoizedState={parent:l,cache:f},Gd(i),ji(i,Mt,f)):((n.lanes&a)!==0&&(Yd(n,i),Hl(i,null,null,a),Bl()),f=n.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ji(i,Mt,l)):(l=d.cache,ji(i,Mt,l),l!==f.cache&&qd(i,[Mt],a,!0))),Wt(n,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function hi(n){n.flags|=4}function Sv(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!O0(i)){if(i=Kn.current,i!==null&&((ze&4194048)===ze?Dr!==null:(ze&62914560)!==ze&&(ze&536870912)===0||i!==Dr))throw zl=$d,o_;n.flags|=8192}}function ah(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?dl():536870912,n.lanes|=i,yo|=i)}function Xl(n,i){if(!Fe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function ht(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function XS(n,i,a){var l=i.pendingProps;switch(Ld(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(i),null;case 1:return ht(i),null;case 3:return a=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),oi(Mt),jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(kl(i)?hi(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,n_())),ht(i),null;case 26:return a=i.memoizedState,n===null?(hi(i),a!==null?(ht(i),Sv(i,a)):(ht(i),i.flags&=-16777217)):a?a!==n.memoizedState?(hi(i),ht(i),Sv(i,a)):(ht(i),i.flags&=-16777217):(n.memoizedProps!==l&&hi(i),ht(i),i.flags&=-16777217),null;case 27:En(i),a=ve.current;var f=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==l&&hi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}n=ge.current,kl(i)?e_(i):(n=S0(f,l,a),i.stateNode=n,hi(i))}return ht(i),null;case 5:if(En(i),a=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&hi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}if(n=ge.current,kl(i))e_(i);else{switch(f=vh(ve.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}n[Nt]=i,n[Tt]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=n;e:switch(Jt(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&hi(i)}}return ht(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&hi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(n=ve.current,kl(i)){if(n=i.stateNode,a=i.memoizedProps,l=null,f=vn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[Nt]=i,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||y0(n.nodeValue,a)),n||ra(i)}else n=vh(n).createTextNode(l),n[Nt]=i,i.stateNode=n}return ht(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=kl(i),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Nt]=i}else Ml(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ht(i),f=!1}else f=n_(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ui(i),i):(ui(i),null)}if(ui(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return a!==n&&a&&(i.child.flags|=8192),ah(i,i.updateQueue),ht(i),null;case 4:return jt(),n===null&&Kp(i.stateNode.containerInfo),ht(i),null;case 10:return oi(i.type),ht(i),null;case 19:if(ae(Pt),f=i.memoizedState,f===null)return ht(i),null;if(l=(i.flags&128)!==0,d=f.rendering,d===null)if(l)Xl(f,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(d=th(n),d!==null){for(i.flags|=128,Xl(f,!1),n=d.updateQueue,i.updateQueue=n,ah(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)Zy(a,n),a=a.sibling;return se(Pt,Pt.current&1|2),i.child}n=n.sibling}f.tail!==null&&Un()>uh&&(i.flags|=128,l=!0,Xl(f,!1),i.lanes=4194304)}else{if(!l)if(n=th(d),n!==null){if(i.flags|=128,l=!0,n=n.updateQueue,i.updateQueue=n,ah(i,n),Xl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!Fe)return ht(i),null}else 2*Un()-f.renderingStartTime>uh&&a!==536870912&&(i.flags|=128,l=!0,Xl(f,!1),i.lanes=4194304);f.isBackwards?(d.sibling=i.child,i.child=d):(n=f.last,n!==null?n.sibling=d:i.child=d,f.last=d)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Un(),i.sibling=null,n=Pt.current,se(Pt,l?n&1|2:n&1),i):(ht(i),null);case 22:case 23:return ui(i),Wd(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ht(i),i.subtreeFlags&6&&(i.flags|=8192)):ht(i),a=i.updateQueue,a!==null&&ah(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),n!==null&&ae(aa),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),oi(Mt),ht(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function WS(n,i){switch(Ld(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return oi(Mt),jt(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return En(i),null;case 13:if(ui(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Ml()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ae(Pt),null;case 4:return jt(),null;case 10:return oi(i.type),null;case 22:case 23:return ui(i),Wd(),n!==null&&ae(aa),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return oi(Mt),null;case 25:return null;default:return null}}function Av(n,i){switch(Ld(i),i.tag){case 3:oi(Mt),jt();break;case 26:case 27:case 5:En(i);break;case 4:jt();break;case 13:ui(i);break;case 19:ae(Pt);break;case 10:oi(i.type);break;case 22:case 23:ui(i),Wd(),n!==null&&ae(aa);break;case 24:oi(Mt)}}function Wl(n,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var d=a.create,T=a.inst;l=d(),T.destroy=l}a=a.next}while(a!==f)}}catch(S){tt(i,i.return,S)}}function $i(n,i,a){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&n)===n){var T=l.inst,S=T.destroy;if(S!==void 0){T.destroy=void 0,f=i;var C=a,F=S;try{F()}catch(J){tt(f,C,J)}}}l=l.next}while(l!==d)}}catch(J){tt(i,i.return,J)}}function Rv(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{d_(i,a)}catch(l){tt(n,n.return,l)}}}function xv(n,i,a){a.props=la(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){tt(n,i,l)}}function Zl(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(f){tt(n,i,f)}}function Nr(n,i){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){tt(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){tt(n,i,f)}else a.current=null}function Iv(n){var i=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){tt(n,n.return,f)}}function Ap(n,i,a){try{var l=n.stateNode;_A(l,n.type,a,i),l[Tt]=i}catch(f){tt(n,n.return,f)}}function Cv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ji(n.type)||n.tag===4}function Rp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ji(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xp(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(n),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=_h));else if(l!==4&&(l===27&&Ji(n.type)&&(a=n.stateNode,i=null),n=n.child,n!==null))for(xp(n,i,a),n=n.sibling;n!==null;)xp(n,i,a),n=n.sibling}function oh(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(l!==4&&(l===27&&Ji(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(oh(n,i,a),n=n.sibling;n!==null;)oh(n,i,a),n=n.sibling}function Dv(n){var i=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Jt(i,l,a),i[Nt]=n,i[Tt]=a}catch(d){tt(n,n.return,d)}}var fi=!1,vt=!1,Ip=!1,Nv=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function ZS(n,i){if(n=n.containerInfo,Zp=Ah,n=By(n),Rd(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var T=0,S=-1,C=-1,F=0,J=0,ne=n,Y=null;t:for(;;){for(var K;ne!==a||f!==0&&ne.nodeType!==3||(S=T+f),ne!==d||l!==0&&ne.nodeType!==3||(C=T+l),ne.nodeType===3&&(T+=ne.nodeValue.length),(K=ne.firstChild)!==null;)Y=ne,ne=K;for(;;){if(ne===n)break t;if(Y===a&&++F===f&&(S=T),Y===d&&++J===l&&(C=T),(K=ne.nextSibling)!==null)break;ne=Y,Y=ne.parentNode}ne=K}a=S===-1||C===-1?null:{start:S,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jp={focusedElem:n,selectionRange:a},Ah=!1,Bt=i;Bt!==null;)if(i=Bt,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,Bt=n;else for(;Bt!==null;){switch(i=Bt,d=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,a=i,f=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Se=la(a.type,f,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(Se,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(Ee){tt(a,a.return,Ee)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,a=n.nodeType,a===9)nm(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":nm(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=i.sibling,n!==null){n.return=i.return,Bt=n;break}Bt=i.return}}function Ov(n,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Gi(n,a),l&4&&Wl(5,a);break;case 1:if(Gi(n,a),l&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(T){tt(a,a.return,T)}else{var f=la(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(T){tt(a,a.return,T)}}l&64&&Rv(a),l&512&&Zl(a,a.return);break;case 3:if(Gi(n,a),l&64&&(n=a.updateQueue,n!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{d_(n,i)}catch(T){tt(a,a.return,T)}}break;case 27:i===null&&l&4&&Dv(a);case 26:case 5:Gi(n,a),i===null&&l&4&&Iv(a),l&512&&Zl(a,a.return);break;case 12:Gi(n,a);break;case 13:Gi(n,a),l&4&&Pv(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=oA.bind(null,a),AA(n,a))));break;case 22:if(l=a.memoizedState!==null||fi,!l){i=i!==null&&i.memoizedState!==null||vt,f=fi;var d=vt;fi=l,(vt=i)&&!d?Yi(n,a,(a.subtreeFlags&8772)!==0):Gi(n,a),fi=f,vt=d}break;case 30:break;default:Gi(n,a)}}function kv(n){var i=n.alternate;i!==null&&(n.alternate=null,kv(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Mi(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var lt=null,bn=!1;function di(n,i,a){for(a=a.child;a!==null;)Mv(n,i,a),a=a.sibling}function Mv(n,i,a){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:vt||Nr(a,i),di(n,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vt||Nr(a,i);var l=lt,f=bn;Ji(a.type)&&(lt=a.stateNode,bn=!1),di(n,i,a),ou(a.stateNode),lt=l,bn=f;break;case 5:vt||Nr(a,i);case 6:if(l=lt,f=bn,lt=null,di(n,i,a),lt=l,bn=f,lt!==null)if(bn)try{(lt.nodeType===9?lt.body:lt.nodeName==="HTML"?lt.ownerDocument.body:lt).removeChild(a.stateNode)}catch(d){tt(a,i,d)}else try{lt.removeChild(a.stateNode)}catch(d){tt(a,i,d)}break;case 18:lt!==null&&(bn?(n=lt,b0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),mu(n)):b0(lt,a.stateNode));break;case 4:l=lt,f=bn,lt=a.stateNode.containerInfo,bn=!0,di(n,i,a),lt=l,bn=f;break;case 0:case 11:case 14:case 15:vt||$i(2,a,i),vt||$i(4,a,i),di(n,i,a);break;case 1:vt||(Nr(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&xv(a,i,l)),di(n,i,a);break;case 21:di(n,i,a);break;case 22:vt=(l=vt)||a.memoizedState!==null,di(n,i,a),vt=l;break;default:di(n,i,a)}}function Pv(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{mu(n)}catch(a){tt(i,i.return,a)}}function JS(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Nv),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Nv),i;default:throw Error(s(435,n.tag))}}function Cp(n,i){var a=JS(n);i.forEach(function(l){var f=lA.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}function Dn(n,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],d=n,T=i,S=T;e:for(;S!==null;){switch(S.tag){case 27:if(Ji(S.type)){lt=S.stateNode,bn=!1;break e}break;case 5:lt=S.stateNode,bn=!1;break e;case 3:case 4:lt=S.stateNode.containerInfo,bn=!0;break e}S=S.return}if(lt===null)throw Error(s(160));Mv(d,T,f),lt=null,bn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Vv(i,n),i=i.sibling}var ar=null;function Vv(n,i){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Dn(i,n),Nn(n),l&4&&($i(3,n,n.return),Wl(3,n),$i(5,n,n.return));break;case 1:Dn(i,n),Nn(n),l&512&&(vt||a===null||Nr(a,a.return)),l&64&&fi&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=ar;if(Dn(i,n),Nn(n),l&512&&(vt||a===null||Nr(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Ls]||d[Nt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Jt(d,l,a),d[Nt]=n,yt(d),l=d;break e;case"link":var T=D0("link","href",f).get(l+(a.href||""));if(T){for(var S=0;S<T.length;S++)if(d=T[S],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){T.splice(S,1);break t}}d=f.createElement(l),Jt(d,l,a),f.head.appendChild(d);break;case"meta":if(T=D0("meta","content",f).get(l+(a.content||""))){for(S=0;S<T.length;S++)if(d=T[S],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){T.splice(S,1);break t}}d=f.createElement(l),Jt(d,l,a),f.head.appendChild(d);break;default:throw Error(s(468,l))}d[Nt]=n,yt(d),l=d}n.stateNode=l}else N0(f,n.type,n.stateNode);else n.stateNode=C0(f,l,n.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?N0(f,n.type,n.stateNode):C0(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Ap(n,n.memoizedProps,a.memoizedProps)}break;case 27:Dn(i,n),Nn(n),l&512&&(vt||a===null||Nr(a,a.return)),a!==null&&l&4&&Ap(n,n.memoizedProps,a.memoizedProps);break;case 5:if(Dn(i,n),Nn(n),l&512&&(vt||a===null||Nr(a,a.return)),n.flags&32){f=n.stateNode;try{qn(f,"")}catch(K){tt(n,n.return,K)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,Ap(n,f,a!==null?a.memoizedProps:f)),l&1024&&(Ip=!0);break;case 6:if(Dn(i,n),Nn(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(K){tt(n,n.return,K)}}break;case 3:if(bh=null,f=ar,ar=Eh(i.containerInfo),Dn(i,n),ar=f,Nn(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{mu(i.containerInfo)}catch(K){tt(n,n.return,K)}Ip&&(Ip=!1,Lv(n));break;case 4:l=ar,ar=Eh(n.stateNode.containerInfo),Dn(i,n),Nn(n),ar=l;break;case 12:Dn(i,n),Nn(n);break;case 13:Dn(i,n),Nn(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pp=Un()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Cp(n,l)));break;case 22:f=n.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,F=fi,J=vt;if(fi=F||f,vt=J||C,Dn(i,n),vt=J,fi=F,Nn(n),l&8192)e:for(i=n.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||C||fi||vt||ua(n)),a=null,i=n;;){if(i.tag===5||i.tag===26){if(a===null){C=a=i;try{if(d=C.stateNode,f)T=d.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{S=C.stateNode;var ne=C.memoizedProps.style,Y=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;S.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(K){tt(C,C.return,K)}}}else if(i.tag===6){if(a===null){C=i;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(K){tt(C,C.return,K)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Cp(n,a))));break;case 19:Dn(i,n),Nn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Cp(n,l)));break;case 30:break;case 21:break;default:Dn(i,n),Nn(n)}}function Nn(n){var i=n.flags;if(i&2){try{for(var a,l=n.return;l!==null;){if(Cv(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,d=Rp(n);oh(n,d,f);break;case 5:var T=a.stateNode;a.flags&32&&(qn(T,""),a.flags&=-33);var S=Rp(n);oh(n,S,T);break;case 3:case 4:var C=a.stateNode.containerInfo,F=Rp(n);xp(n,F,C);break;default:throw Error(s(161))}}catch(J){tt(n,n.return,J)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Lv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Lv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Gi(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ov(n,i.alternate,i),i=i.sibling}function ua(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:$i(4,i,i.return),ua(i);break;case 1:Nr(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&xv(i,i.return,a),ua(i);break;case 27:ou(i.stateNode);case 26:case 5:Nr(i,i.return),ua(i);break;case 22:i.memoizedState===null&&ua(i);break;case 30:ua(i);break;default:ua(i)}n=n.sibling}}function Yi(n,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=n,d=i,T=d.flags;switch(d.tag){case 0:case 11:case 15:Yi(f,d,a),Wl(4,d);break;case 1:if(Yi(f,d,a),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(F){tt(l,l.return,F)}if(l=d,f=l.updateQueue,f!==null){var S=l.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)f_(C[f],S)}catch(F){tt(l,l.return,F)}}a&&T&64&&Rv(d),Zl(d,d.return);break;case 27:Dv(d);case 26:case 5:Yi(f,d,a),a&&l===null&&T&4&&Iv(d),Zl(d,d.return);break;case 12:Yi(f,d,a);break;case 13:Yi(f,d,a),a&&T&4&&Pv(f,d);break;case 22:d.memoizedState===null&&Yi(f,d,a),Zl(d,d.return);break;case 30:break;default:Yi(f,d,a)}i=i.sibling}}function Dp(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Ll(a))}function Np(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ll(n))}function Or(n,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)jv(n,i,a,l),i=i.sibling}function jv(n,i,a,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Or(n,i,a,l),f&2048&&Wl(9,i);break;case 1:Or(n,i,a,l);break;case 3:Or(n,i,a,l),f&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ll(n)));break;case 12:if(f&2048){Or(n,i,a,l),n=i.stateNode;try{var d=i.memoizedProps,T=d.id,S=d.onPostCommit;typeof S=="function"&&S(T,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(C){tt(i,i.return,C)}}else Or(n,i,a,l);break;case 13:Or(n,i,a,l);break;case 23:break;case 22:d=i.stateNode,T=i.alternate,i.memoizedState!==null?d._visibility&2?Or(n,i,a,l):Jl(n,i):d._visibility&2?Or(n,i,a,l):(d._visibility|=2,po(n,i,a,l,(i.subtreeFlags&10256)!==0)),f&2048&&Dp(T,i);break;case 24:Or(n,i,a,l),f&2048&&Np(i.alternate,i);break;default:Or(n,i,a,l)}}function po(n,i,a,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=n,T=i,S=a,C=l,F=T.flags;switch(T.tag){case 0:case 11:case 15:po(d,T,S,C,f),Wl(8,T);break;case 23:break;case 22:var J=T.stateNode;T.memoizedState!==null?J._visibility&2?po(d,T,S,C,f):Jl(d,T):(J._visibility|=2,po(d,T,S,C,f)),f&&F&2048&&Dp(T.alternate,T);break;case 24:po(d,T,S,C,f),f&&F&2048&&Np(T.alternate,T);break;default:po(d,T,S,C,f)}i=i.sibling}}function Jl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,l=i,f=l.flags;switch(l.tag){case 22:Jl(a,l),f&2048&&Dp(l.alternate,l);break;case 24:Jl(a,l),f&2048&&Np(l.alternate,l);break;default:Jl(a,l)}i=i.sibling}}var eu=8192;function mo(n){if(n.subtreeFlags&eu)for(n=n.child;n!==null;)Uv(n),n=n.sibling}function Uv(n){switch(n.tag){case 26:mo(n),n.flags&eu&&n.memoizedState!==null&&jA(ar,n.memoizedState,n.memoizedProps);break;case 5:mo(n);break;case 3:case 4:var i=ar;ar=Eh(n.stateNode.containerInfo),mo(n),ar=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=eu,eu=16777216,mo(n),eu=i):mo(n));break;default:mo(n)}}function zv(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function tu(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Bt=l,Bv(l,n)}zv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qv(n),n=n.sibling}function qv(n){switch(n.tag){case 0:case 11:case 15:tu(n),n.flags&2048&&$i(9,n,n.return);break;case 3:tu(n);break;case 12:tu(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,lh(n)):tu(n);break;default:tu(n)}}function lh(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Bt=l,Bv(l,n)}zv(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:$i(8,i,i.return),lh(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,lh(i));break;default:lh(i)}n=n.sibling}}function Bv(n,i){for(;Bt!==null;){var a=Bt;switch(a.tag){case 0:case 11:case 15:$i(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ll(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Bt=l;else e:for(a=n;Bt!==null;){l=Bt;var f=l.sibling,d=l.return;if(kv(l),l===a){Bt=null;break e}if(f!==null){f.return=d,Bt=f;break e}Bt=d}}}var eA={getCacheForType:function(n){var i=on(Mt),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a}},tA=typeof WeakMap=="function"?WeakMap:Map,Ke=0,rt=null,ke=null,ze=0,Xe=0,On=null,Qi=!1,go=!1,Op=!1,pi=0,mt=0,Ki=0,ca=0,kp=0,Xn=0,yo=0,nu=null,wn=null,Mp=!1,Pp=0,uh=1/0,ch=null,Xi=null,Zt=0,Wi=null,_o=null,vo=0,Vp=0,Lp=null,Hv=null,ru=0,jp=null;function kn(){if((Ke&2)!==0&&ze!==0)return ze&-ze;if(Z.T!==null){var n=so;return n!==0?n:$p()}return Oi()}function Fv(){Xn===0&&(Xn=(ze&536870912)===0||Fe?fl():536870912);var n=Kn.current;return n!==null&&(n.flags|=32),Xn}function Mn(n,i,a){(n===rt&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(Eo(n,0),Zi(n,ze,Xn,!1)),Gr(n,a),((Ke&2)===0||n!==rt)&&(n===rt&&((Ke&2)===0&&(ca|=a),mt===4&&Zi(n,ze,Xn,!1)),kr(n))}function $v(n,i,a){if((Ke&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&n.expiredLanes)===0||Vs(n,i),f=l?iA(n,i):qp(n,i,!0),d=l;do{if(f===0){go&&!l&&Zi(n,i,0,!1);break}else{if(a=n.current.alternate,d&&!nA(a)){f=qp(n,i,!1),d=!1;continue}if(f===2){if(d=i,n.errorRecoveryDisabledLanes&d)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;e:{var S=n;f=nu;var C=S.current.memoizedState.isDehydrated;if(C&&(Eo(S,T).flags|=256),T=qp(S,T,!1),T!==2){if(Op&&!C){S.errorRecoveryDisabledLanes|=d,ca|=d,f=4;break e}d=wn,wn=f,d!==null&&(wn===null?wn=d:wn.push.apply(wn,d))}f=T}if(d=!1,f!==2)continue}}if(f===1){Eo(n,0),Zi(n,i,0,!0);break}e:{switch(l=n,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Zi(l,i,Xn,!Qi);break e;case 2:wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=Pp+300-Un(),10<f)){if(Zi(l,i,Xn,!Qi),Va(l,0,!0)!==0)break e;l.timeoutHandle=E0(Gv.bind(null,l,a,wn,ch,Mp,i,Xn,ca,yo,Qi,d,2,-0,0),f);break e}Gv(l,a,wn,ch,Mp,i,Xn,ca,yo,Qi,d,0,-0,0)}}break}while(!0);kr(n)}function Gv(n,i,a,l,f,d,T,S,C,F,J,ne,Y,K){if(n.timeoutHandle=-1,ne=i.subtreeFlags,(ne&8192||(ne&16785408)===16785408)&&(cu={stylesheets:null,count:0,unsuspend:LA},Uv(i),ne=UA(),ne!==null)){n.cancelPendingCommit=ne(Jv.bind(null,n,i,d,a,l,f,T,S,C,J,1,Y,K)),Zi(n,d,T,!F);return}Jv(n,i,d,a,l,f,T,S,C)}function nA(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!In(d(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Zi(n,i,a,l){i&=~kp,i&=~ca,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var f=i;0<f;){var d=31-an(f),T=1<<d;l[d]=-1,f&=~T}a!==0&&_r(n,a,i)}function hh(){return(Ke&6)===0?(iu(0),!1):!0}function Up(){if(ke!==null){if(Xe===0)var n=ke.return;else n=ke,ai=ia=null,np(n),ho=null,Ql=0,n=ke;for(;n!==null;)Av(n.alternate,n),n=n.return;ke=null}}function Eo(n,i){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,EA(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Up(),rt=n,ke=a=ri(n.current,null),ze=i,Xe=0,On=null,Qi=!1,go=Vs(n,i),Op=!1,yo=Xn=kp=ca=Ki=mt=0,wn=nu=null,Mp=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var f=31-an(l),d=1<<f;i|=n[f],l&=~d}return pi=i,kc(),a}function Yv(n,i){Ne=null,Z.H=Zc,i===Ul||i===Bc?(i=c_(),Xe=3):i===o_?(i=c_(),Xe=4):Xe=i===hv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,On=i,ke===null&&(mt=1,rh(n,$n(i,n.current)))}function Qv(){var n=Z.H;return Z.H=Zc,n===null?Zc:n}function Kv(){var n=Z.A;return Z.A=eA,n}function zp(){mt=4,Qi||(ze&4194048)!==ze&&Kn.current!==null||(go=!0),(Ki&134217727)===0&&(ca&134217727)===0||rt===null||Zi(rt,ze,Xn,!1)}function qp(n,i,a){var l=Ke;Ke|=2;var f=Qv(),d=Kv();(rt!==n||ze!==i)&&(ch=null,Eo(n,i)),i=!1;var T=mt;e:do try{if(Xe!==0&&ke!==null){var S=ke,C=On;switch(Xe){case 8:Up(),T=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(i=!0);var F=Xe;if(Xe=0,On=null,To(n,S,C,F),a&&go){T=0;break e}break;default:F=Xe,Xe=0,On=null,To(n,S,C,F)}}rA(),T=mt;break}catch(J){Yv(n,J)}while(!0);return i&&n.shellSuspendCounter++,ai=ia=null,Ke=l,Z.H=f,Z.A=d,ke===null&&(rt=null,ze=0,kc()),T}function rA(){for(;ke!==null;)Xv(ke)}function iA(n,i){var a=Ke;Ke|=2;var l=Qv(),f=Kv();rt!==n||ze!==i?(ch=null,uh=Un()+500,Eo(n,i)):go=Vs(n,i);e:do try{if(Xe!==0&&ke!==null){i=ke;var d=On;t:switch(Xe){case 1:Xe=0,On=null,To(n,i,d,1);break;case 2:case 9:if(l_(d)){Xe=0,On=null,Wv(i);break}i=function(){Xe!==2&&Xe!==9||rt!==n||(Xe=7),kr(n)},d.then(i,i);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:l_(d)?(Xe=0,On=null,Wv(i)):(Xe=0,On=null,To(n,i,d,7));break;case 5:var T=null;switch(ke.tag){case 26:T=ke.memoizedState;case 5:case 27:var S=ke;if(!T||O0(T)){Xe=0,On=null;var C=S.sibling;if(C!==null)ke=C;else{var F=S.return;F!==null?(ke=F,fh(F)):ke=null}break t}}Xe=0,On=null,To(n,i,d,5);break;case 6:Xe=0,On=null,To(n,i,d,6);break;case 8:Up(),mt=6;break e;default:throw Error(s(462))}}sA();break}catch(J){Yv(n,J)}while(!0);return ai=ia=null,Z.H=l,Z.A=f,Ke=a,ke!==null?0:(rt=null,ze=0,kc(),mt)}function sA(){for(;ke!==null&&!ll();)Xv(ke)}function Xv(n){var i=wv(n.alternate,n,pi);n.memoizedProps=n.pendingProps,i===null?fh(n):ke=i}function Wv(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=yv(a,i,i.pendingProps,i.type,void 0,ze);break;case 11:i=yv(a,i,i.pendingProps,i.type.render,i.ref,ze);break;case 5:np(i);default:Av(a,i),i=ke=Zy(i,pi),i=wv(a,i,pi)}n.memoizedProps=n.pendingProps,i===null?fh(n):ke=i}function To(n,i,a,l){ai=ia=null,np(i),ho=null,Ql=0;var f=i.return;try{if(QS(n,f,i,a,ze)){mt=1,rh(n,$n(a,n.current)),ke=null;return}}catch(d){if(f!==null)throw ke=f,d;mt=1,rh(n,$n(a,n.current)),ke=null;return}i.flags&32768?(Fe||l===1?n=!0:go||(ze&536870912)!==0?n=!1:(Qi=n=!0,(l===2||l===9||l===3||l===6)&&(l=Kn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Zv(i,n)):fh(i)}function fh(n){var i=n;do{if((i.flags&32768)!==0){Zv(i,Qi);return}n=i.return;var a=XS(i.alternate,i,pi);if(a!==null){ke=a;return}if(i=i.sibling,i!==null){ke=i;return}ke=i=n}while(i!==null);mt===0&&(mt=5)}function Zv(n,i){do{var a=WS(n.alternate,n);if(a!==null){a.flags&=32767,ke=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){ke=n;return}ke=n=a}while(n!==null);mt=6,ke=null}function Jv(n,i,a,l,f,d,T,S,C){n.cancelPendingCommit=null;do dh();while(Zt!==0);if((Ke&6)!==0)throw Error(s(327));if(i!==null){if(i===n.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Nd,pl(n,a,d,T,S,C),n===rt&&(ke=rt=null,ze=0),_o=i,Wi=n,vo=a,Vp=d,Lp=f,Hv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,uA(Os,function(){return i0(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Z.T,Z.T=null,f=ce.p,ce.p=2,T=Ke,Ke|=4;try{ZS(n,i,a)}finally{Ke=T,ce.p=f,Z.T=l}}Zt=1,e0(),t0(),n0()}}function e0(){if(Zt===1){Zt=0;var n=Wi,i=_o,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=Z.T,Z.T=null;var l=ce.p;ce.p=2;var f=Ke;Ke|=4;try{Vv(i,n);var d=Jp,T=By(n.containerInfo),S=d.focusedElem,C=d.selectionRange;if(T!==S&&S&&S.ownerDocument&&qy(S.ownerDocument.documentElement,S)){if(C!==null&&Rd(S)){var F=C.start,J=C.end;if(J===void 0&&(J=F),"selectionStart"in S)S.selectionStart=F,S.selectionEnd=Math.min(J,S.value.length);else{var ne=S.ownerDocument||document,Y=ne&&ne.defaultView||window;if(Y.getSelection){var K=Y.getSelection(),Se=S.textContent.length,Ee=Math.min(C.start,Se),et=C.end===void 0?Ee:Math.min(C.end,Se);!K.extend&&Ee>et&&(T=et,et=Ee,Ee=T);var L=zy(S,Ee),M=zy(S,et);if(L&&M&&(K.rangeCount!==1||K.anchorNode!==L.node||K.anchorOffset!==L.offset||K.focusNode!==M.node||K.focusOffset!==M.offset)){var B=ne.createRange();B.setStart(L.node,L.offset),K.removeAllRanges(),Ee>et?(K.addRange(B),K.extend(M.node,M.offset)):(B.setEnd(M.node,M.offset),K.addRange(B))}}}}for(ne=[],K=S;K=K.parentNode;)K.nodeType===1&&ne.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<ne.length;S++){var ee=ne[S];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}Ah=!!Zp,Jp=Zp=null}finally{Ke=f,ce.p=l,Z.T=a}}n.current=i,Zt=2}}function t0(){if(Zt===2){Zt=0;var n=Wi,i=_o,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=Z.T,Z.T=null;var l=ce.p;ce.p=2;var f=Ke;Ke|=4;try{Ov(n,i.alternate,i)}finally{Ke=f,ce.p=l,Z.T=a}}Zt=3}}function n0(){if(Zt===4||Zt===3){Zt=0,lc();var n=Wi,i=_o,a=vo,l=Hv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Zt=5:(Zt=0,_o=Wi=null,r0(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Xi=null),La(a),i=i.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Z.T,f=ce.p,ce.p=2,Z.T=null;try{for(var d=n.onRecoverableError,T=0;T<l.length;T++){var S=l[T];d(S.value,{componentStack:S.stack})}}finally{Z.T=i,ce.p=f}}(vo&3)!==0&&dh(),kr(n),f=n.pendingLanes,(a&4194090)!==0&&(f&42)!==0?n===jp?ru++:(ru=0,jp=n):ru=0,iu(0)}}function r0(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Ll(i)))}function dh(n){return e0(),t0(),n0(),i0()}function i0(){if(Zt!==5)return!1;var n=Wi,i=Vp;Vp=0;var a=La(vo),l=Z.T,f=ce.p;try{ce.p=32>a?32:a,Z.T=null,a=Lp,Lp=null;var d=Wi,T=vo;if(Zt=0,_o=Wi=null,vo=0,(Ke&6)!==0)throw Error(s(331));var S=Ke;if(Ke|=4,qv(d.current),jv(d,d.current,T,a),Ke=S,iu(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{ce.p=f,Z.T=l,r0(n,i)}}function s0(n,i,a){i=$n(a,i),i=gp(n.stateNode,i,2),n=qi(n,i,2),n!==null&&(Gr(n,2),kr(n))}function tt(n,i,a){if(n.tag===3)s0(n,n,a);else for(;i!==null;){if(i.tag===3){s0(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xi===null||!Xi.has(l))){n=$n(a,n),a=uv(2),l=qi(i,a,2),l!==null&&(cv(a,l,i,n),Gr(l,2),kr(l));break}}i=i.return}}function Bp(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new tA;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(Op=!0,f.add(a),n=aA.bind(null,n,i,a),i.then(n,n))}function aA(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,rt===n&&(ze&a)===a&&(mt===4||mt===3&&(ze&62914560)===ze&&300>Un()-Pp?(Ke&2)===0&&Eo(n,0):kp|=a,yo===ze&&(yo=0)),kr(n)}function a0(n,i){i===0&&(i=dl()),n=to(n,i),n!==null&&(Gr(n,i),kr(n))}function oA(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),a0(n,a)}function lA(n,i){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),a0(n,a)}function uA(n,i){return Ds(n,i)}var ph=null,bo=null,Hp=!1,mh=!1,Fp=!1,ha=0;function kr(n){n!==bo&&n.next===null&&(bo===null?ph=bo=n:bo=bo.next=n),mh=!0,Hp||(Hp=!0,hA())}function iu(n,i){if(!Fp&&mh){Fp=!0;do for(var a=!1,l=ph;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var T=l.suspendedLanes,S=l.pingedLanes;d=(1<<31-an(42|n)+1)-1,d&=f&~(T&~S),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,c0(l,d))}else d=ze,d=Va(l,l===rt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Vs(l,d)||(a=!0,c0(l,d));l=l.next}while(a);Fp=!1}}function cA(){o0()}function o0(){mh=Hp=!1;var n=0;ha!==0&&(vA()&&(n=ha),ha=0);for(var i=Un(),a=null,l=ph;l!==null;){var f=l.next,d=l0(l,i);d===0?(l.next=null,a===null?ph=f:a.next=f,f===null&&(bo=a)):(a=l,(n!==0||(d&3)!==0)&&(mh=!0)),l=f}iu(n)}function l0(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var T=31-an(d),S=1<<T,C=f[T];C===-1?((S&a)===0||(S&l)!==0)&&(f[T]=hl(S,i)):C<=i&&(n.expiredLanes|=S),d&=~S}if(i=rt,a=ze,a=Va(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===i&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Ns(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||Vs(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(l!==null&&Ns(l),La(a)){case 2:case 8:a=Ma;break;case 32:a=Os;break;case 268435456:a=Pa;break;default:a=Os}return l=u0.bind(null,n),a=Ds(a,l),n.callbackPriority=i,n.callbackNode=a,i}return l!==null&&l!==null&&Ns(l),n.callbackPriority=2,n.callbackNode=null,2}function u0(n,i){if(Zt!==0&&Zt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(dh()&&n.callbackNode!==a)return null;var l=ze;return l=Va(n,n===rt?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:($v(n,l,i),l0(n,Un()),n.callbackNode!=null&&n.callbackNode===a?u0.bind(null,n):null)}function c0(n,i){if(dh())return null;$v(n,i,!0)}function hA(){TA(function(){(Ke&6)!==0?Ds(ul,cA):o0()})}function $p(){return ha===0&&(ha=fl()),ha}function h0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ha(""+n)}function f0(n,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,n.id&&a.setAttribute("form",n.id),i.parentNode.insertBefore(a,i),n=new FormData(n),a.parentNode.removeChild(a),n}function fA(n,i,a,l,f){if(i==="submit"&&a&&a.stateNode===f){var d=h0((f[Tt]||null).action),T=l.submitter;T&&(i=(i=T[Tt]||null)?h0(i.formAction):T.getAttribute("formAction"),i!==null&&(d=i,T=null));var S=new Fa("action","action",null,l,f);n.push({event:S,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ha!==0){var C=T?f0(f,T):new FormData(f);hp(a,{pending:!0,data:C,method:f.method,action:d},null,C)}}else typeof d=="function"&&(S.preventDefault(),C=T?f0(f,T):new FormData(f),hp(a,{pending:!0,data:C,method:f.method,action:d},d,C))},currentTarget:f}]})}}for(var Gp=0;Gp<Dd.length;Gp++){var Yp=Dd[Gp],dA=Yp.toLowerCase(),pA=Yp[0].toUpperCase()+Yp.slice(1);sr(dA,"on"+pA)}sr($y,"onAnimationEnd"),sr(Gy,"onAnimationIteration"),sr(Yy,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(NS,"onTransitionRun"),sr(OS,"onTransitionStart"),sr(kS,"onTransitionCancel"),sr(Qy,"onTransitionEnd"),Qr("onMouseEnter",["mouseout","mouseover"]),Qr("onMouseLeave",["mouseout","mouseover"]),Qr("onPointerEnter",["pointerout","pointerover"]),Qr("onPointerLeave",["pointerout","pointerover"]),rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rr("onBeforeInput",["compositionend","keypress","textInput","paste"]),rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function d0(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var T=l.length-1;0<=T;T--){var S=l[T],C=S.instance,F=S.currentTarget;if(S=S.listener,C!==d&&f.isPropagationStopped())break e;d=S,f.currentTarget=F;try{d(f)}catch(J){nh(J)}f.currentTarget=null,d=C}else for(T=0;T<l.length;T++){if(S=l[T],C=S.instance,F=S.currentTarget,S=S.listener,C!==d&&f.isPropagationStopped())break e;d=S,f.currentTarget=F;try{d(f)}catch(J){nh(J)}f.currentTarget=null,d=C}}}}function Me(n,i){var a=i[gl];a===void 0&&(a=i[gl]=new Set);var l=n+"__bubble";a.has(l)||(p0(i,n,2,!1),a.add(l))}function Qp(n,i,a){var l=0;i&&(l|=4),p0(a,n,l,i)}var gh="_reactListening"+Math.random().toString(36).slice(2);function Kp(n){if(!n[gh]){n[gh]=!0,yl.forEach(function(a){a!=="selectionchange"&&(mA.has(a)||Qp(a,!1,n),Qp(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[gh]||(i[gh]=!0,Qp("selectionchange",!1,i))}}function p0(n,i,a,l){switch(j0(i)){case 2:var f=BA;break;case 8:f=HA;break;default:f=um}a=f.bind(null,i,a,n),f=void 0,!Hn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Xp(n,i,a,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var T=l.tag;if(T===3||T===4){var S=l.stateNode.containerInfo;if(S===f)break;if(T===4)for(T=l.return;T!==null;){var C=T.tag;if((C===3||C===4)&&T.stateNode.containerInfo===f)return;T=T.return}for(;S!==null;){if(T=Yr(S),T===null)return;if(C=T.tag,C===5||C===6||C===26||C===27){l=d=T;continue e}S=S.parentNode}}l=l.return}_c(function(){var F=d,J=Bn(a),ne=[];e:{var Y=Ky.get(n);if(Y!==void 0){var K=Fa,Se=n;switch(n){case"keypress":if(Sr(a)===0)break e;case"keydown":case"keyup":K=Xa;break;case"focusin":Se="focus",K=Ya;break;case"focusout":Se="blur",K=Ya;break;case"beforeblur":case"afterblur":K=Ya;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=bd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Rc;break;case $y:case Gy:case Yy:K=Qa;break;case Qy:K=Ic;break;case"scroll":case"scrollend":K=vc;break;case"wheel":K=Wa;break;case"copy":case"cut":case"paste":K=Ka;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Cl;break;case"toggle":case"beforetoggle":K=Dc}var Ee=(i&4)!==0,et=!Ee&&(n==="scroll"||n==="scrollend"),L=Ee?Y!==null?Y+"Capture":null:Y;Ee=[];for(var M=F,B;M!==null;){var ee=M;if(B=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||B===null||L===null||(ee=Fs(M,L),ee!=null&&Ee.push(au(M,ee,B))),et)break;M=M.return}0<Ee.length&&(Y=new K(Y,Se,null,a,J),ne.push({event:Y,listeners:Ee}))}}if((i&7)===0){e:{if(Y=n==="mouseover"||n==="pointerover",K=n==="mouseout"||n==="pointerout",Y&&a!==Wr&&(Se=a.relatedTarget||a.fromElement)&&(Yr(Se)||Se[zn]))break e;if((K||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,K?(Se=a.relatedTarget||a.toElement,K=F,Se=Se?Yr(Se):null,Se!==null&&(et=u(Se),Ee=Se.tag,Se!==et||Ee!==5&&Ee!==27&&Ee!==6)&&(Se=null)):(K=null,Se=F),K!==Se)){if(Ee=Fn,ee="onMouseLeave",L="onMouseEnter",M="mouse",(n==="pointerout"||n==="pointerover")&&(Ee=Cl,ee="onPointerLeave",L="onPointerEnter",M="pointer"),et=K==null?Y:Er(K),B=Se==null?Y:Er(Se),Y=new Ee(ee,M+"leave",K,a,J),Y.target=et,Y.relatedTarget=B,ee=null,Yr(J)===F&&(Ee=new Ee(L,M+"enter",Se,a,J),Ee.target=B,Ee.relatedTarget=et,ee=Ee),et=ee,K&&Se)t:{for(Ee=K,L=Se,M=0,B=Ee;B;B=wo(B))M++;for(B=0,ee=L;ee;ee=wo(ee))B++;for(;0<M-B;)Ee=wo(Ee),M--;for(;0<B-M;)L=wo(L),B--;for(;M--;){if(Ee===L||L!==null&&Ee===L.alternate)break t;Ee=wo(Ee),L=wo(L)}Ee=null}else Ee=null;K!==null&&m0(ne,Y,K,Ee,!1),Se!==null&&et!==null&&m0(ne,et,Se,Ee,!0)}}e:{if(Y=F?Er(F):window,K=Y.nodeName&&Y.nodeName.toLowerCase(),K==="select"||K==="input"&&Y.type==="file")var pe=My;else if(kt(Y))if(Py)pe=IS;else{pe=RS;var Oe=AS}else K=Y.nodeName,!K||K.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?F&&bl(F.elementType)&&(pe=My):pe=xS;if(pe&&(pe=pe(n,F))){ni(ne,pe,a,J);break e}Oe&&Oe(n,Y,F),n==="focusout"&&F&&Y.type==="number"&&F.memoizedProps.value!=null&&Vi(Y,"number",Y.value)}switch(Oe=F?Er(F):window,n){case"focusin":(kt(Oe)||Oe.contentEditable==="true")&&(Za=Oe,xd=F,Ol=null);break;case"focusout":Ol=xd=Za=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,Hy(ne,a,J);break;case"selectionchange":if(DS)break;case"keydown":case"keyup":Hy(ne,a,J)}var ye;if(xr)e:{switch(n){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else je?X(n,a)&&(Te="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(v&&a.locale!=="ko"&&(je||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&je&&(ye=Sl()):(wr=J,Li="value"in wr?wr.value:wr.textContent,je=!0)),Oe=yh(F,Te),0<Oe.length&&(Te=new xl(Te,n,null,a,J),ne.push({event:Te,listeners:Oe}),ye?Te.data=ye:(ye=ue(a),ye!==null&&(Te.data=ye)))),(ye=y?Ot(n,a):Ue(n,a))&&(Te=yh(F,"onBeforeInput"),0<Te.length&&(Oe=new xl("onBeforeInput","beforeinput",null,a,J),ne.push({event:Oe,listeners:Te}),Oe.data=ye)),fA(ne,n,F,a,J)}d0(ne,i)})}function au(n,i,a){return{instance:n,listener:i,currentTarget:a}}function yh(n,i){for(var a=i+"Capture",l=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Fs(n,a),f!=null&&l.unshift(au(n,f,d)),f=Fs(n,i),f!=null&&l.push(au(n,f,d))),n.tag===3)return l;n=n.return}return[]}function wo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function m0(n,i,a,l,f){for(var d=i._reactName,T=[];a!==null&&a!==l;){var S=a,C=S.alternate,F=S.stateNode;if(S=S.tag,C!==null&&C===l)break;S!==5&&S!==26&&S!==27||F===null||(C=F,f?(F=Fs(a,d),F!=null&&T.unshift(au(a,F,C))):f||(F=Fs(a,d),F!=null&&T.push(au(a,F,C)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var gA=/\r\n?/g,yA=/\u0000|\uFFFD/g;function g0(n){return(typeof n=="string"?n:""+n).replace(gA,`
`).replace(yA,"")}function y0(n,i){return i=g0(i),g0(n)===i}function _h(){}function Je(n,i,a,l,f,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||qn(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&qn(n,""+l);break;case"className":Tr(n,"class",l);break;case"tabIndex":Tr(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Tr(n,a,l);break;case"style":Tl(n,l,d);break;case"data":if(i!=="object"){Tr(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Ha(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Je(n,i,"name",f.name,f,null),Je(n,i,"formEncType",f.formEncType,f,null),Je(n,i,"formMethod",f.formMethod,f,null),Je(n,i,"formTarget",f.formTarget,f,null)):(Je(n,i,"encType",f.encType,f,null),Je(n,i,"method",f.method,f,null),Je(n,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Ha(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=_h);break;case"onScroll":l!=null&&Me("scroll",n);break;case"onScrollEnd":l!=null&&Me("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=Ha(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":Me("beforetoggle",n),Me("toggle",n),Pi(n,"popover",l);break;case"xlinkActuate":Kt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Kt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Kt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Kt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Kt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Kt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Kt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Kt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Kt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pi(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ed.get(a)||a,Pi(n,a,l))}}function Wp(n,i,a,l,f,d){switch(a){case"style":Tl(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?qn(n,l):(typeof l=="number"||typeof l=="bigint")&&qn(n,""+l);break;case"onScroll":l!=null&&Me("scroll",n);break;case"onScrollEnd":l!=null&&Me("scrollend",n);break;case"onClick":l!=null&&(n.onclick=_h);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ja.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),d=n[Tt]||null,d=d!=null?d[a]:null,typeof d=="function"&&n.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,l,f);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):Pi(n,a,l)}}}function Jt(n,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",n),Me("load",n);var l=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var T=a[d];if(T!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Je(n,i,d,T,a,null)}}f&&Je(n,i,"srcSet",a.srcSet,a,null),l&&Je(n,i,"src",a.src,a,null);return;case"input":Me("invalid",n);var S=d=T=f=null,C=null,F=null;for(l in a)if(a.hasOwnProperty(l)){var J=a[l];if(J!=null)switch(l){case"name":f=J;break;case"type":T=J;break;case"checked":C=J;break;case"defaultChecked":F=J;break;case"value":d=J;break;case"defaultValue":S=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(s(137,i));break;default:Je(n,i,l,J,a,null)}}qs(n,d,S,C,F,T,f,!1),Ba(n);return;case"select":Me("invalid",n),l=T=d=null;for(f in a)if(a.hasOwnProperty(f)&&(S=a[f],S!=null))switch(f){case"value":d=S;break;case"defaultValue":T=S;break;case"multiple":l=S;default:Je(n,i,f,S,a,null)}i=d,a=T,n.multiple=!!l,i!=null?Xr(n,!!l,i,!1):a!=null&&Xr(n,!!l,a,!0);return;case"textarea":Me("invalid",n),d=f=l=null;for(T in a)if(a.hasOwnProperty(T)&&(S=a[T],S!=null))switch(T){case"value":l=S;break;case"defaultValue":f=S;break;case"children":d=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:Je(n,i,T,S,a,null)}Bs(n,l,f,d),Ba(n);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Je(n,i,C,l,a,null)}return;case"dialog":Me("beforetoggle",n),Me("toggle",n),Me("cancel",n),Me("close",n);break;case"iframe":case"object":Me("load",n);break;case"video":case"audio":for(l=0;l<su.length;l++)Me(su[l],n);break;case"image":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"embed":case"source":case"link":Me("error",n),Me("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in a)if(a.hasOwnProperty(F)&&(l=a[F],l!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Je(n,i,F,l,a,null)}return;default:if(bl(i)){for(J in a)a.hasOwnProperty(J)&&(l=a[J],l!==void 0&&Wp(n,i,J,l,a,void 0));return}}for(S in a)a.hasOwnProperty(S)&&(l=a[S],l!=null&&Je(n,i,S,l,a,null))}function _A(n,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,T=null,S=null,C=null,F=null,J=null;for(K in a){var ne=a[K];if(a.hasOwnProperty(K)&&ne!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":C=ne;default:l.hasOwnProperty(K)||Je(n,i,K,null,l,ne)}}for(var Y in l){var K=l[Y];if(ne=a[Y],l.hasOwnProperty(Y)&&(K!=null||ne!=null))switch(Y){case"type":d=K;break;case"name":f=K;break;case"checked":F=K;break;case"defaultChecked":J=K;break;case"value":T=K;break;case"defaultValue":S=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:K!==ne&&Je(n,i,Y,K,l,ne)}}xn(n,T,S,C,F,J,d,f);return;case"select":K=T=S=Y=null;for(d in a)if(C=a[d],a.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":K=C;default:l.hasOwnProperty(d)||Je(n,i,d,null,l,C)}for(f in l)if(d=l[f],C=a[f],l.hasOwnProperty(f)&&(d!=null||C!=null))switch(f){case"value":Y=d;break;case"defaultValue":S=d;break;case"multiple":T=d;default:d!==C&&Je(n,i,f,d,l,C)}i=S,a=T,l=K,Y!=null?Xr(n,!!a,Y,!1):!!l!=!!a&&(i!=null?Xr(n,!!a,i,!0):Xr(n,!!a,a?[]:"",!1));return;case"textarea":K=Y=null;for(S in a)if(f=a[S],a.hasOwnProperty(S)&&f!=null&&!l.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Je(n,i,S,null,l,f)}for(T in l)if(f=l[T],d=a[T],l.hasOwnProperty(T)&&(f!=null||d!=null))switch(T){case"value":Y=f;break;case"defaultValue":K=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&Je(n,i,T,f,l,d)}We(n,Y,K);return;case"option":for(var Se in a)if(Y=a[Se],a.hasOwnProperty(Se)&&Y!=null&&!l.hasOwnProperty(Se))switch(Se){case"selected":n.selected=!1;break;default:Je(n,i,Se,null,l,Y)}for(C in l)if(Y=l[C],K=a[C],l.hasOwnProperty(C)&&Y!==K&&(Y!=null||K!=null))switch(C){case"selected":n.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Je(n,i,C,Y,l,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in a)Y=a[Ee],a.hasOwnProperty(Ee)&&Y!=null&&!l.hasOwnProperty(Ee)&&Je(n,i,Ee,null,l,Y);for(F in l)if(Y=l[F],K=a[F],l.hasOwnProperty(F)&&Y!==K&&(Y!=null||K!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,i));break;default:Je(n,i,F,Y,l,K)}return;default:if(bl(i)){for(var et in a)Y=a[et],a.hasOwnProperty(et)&&Y!==void 0&&!l.hasOwnProperty(et)&&Wp(n,i,et,void 0,l,Y);for(J in l)Y=l[J],K=a[J],!l.hasOwnProperty(J)||Y===K||Y===void 0&&K===void 0||Wp(n,i,J,Y,l,K);return}}for(var L in a)Y=a[L],a.hasOwnProperty(L)&&Y!=null&&!l.hasOwnProperty(L)&&Je(n,i,L,null,l,Y);for(ne in l)Y=l[ne],K=a[ne],!l.hasOwnProperty(ne)||Y===K||Y==null&&K==null||Je(n,i,ne,Y,l,K)}var Zp=null,Jp=null;function vh(n){return n.nodeType===9?n:n.ownerDocument}function _0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function v0(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function em(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tm=null;function vA(){var n=window.event;return n&&n.type==="popstate"?n===tm?!1:(tm=n,!0):(tm=null,!1)}var E0=typeof setTimeout=="function"?setTimeout:void 0,EA=typeof clearTimeout=="function"?clearTimeout:void 0,T0=typeof Promise=="function"?Promise:void 0,TA=typeof queueMicrotask=="function"?queueMicrotask:typeof T0<"u"?function(n){return T0.resolve(null).then(n).catch(bA)}:E0;function bA(n){setTimeout(function(){throw n})}function Ji(n){return n==="head"}function b0(n,i){var a=i,l=0,f=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var T=n.ownerDocument;if(a&1&&ou(T.documentElement),a&2&&ou(T.body),a&4)for(a=T.head,ou(a),T=a.firstChild;T;){var S=T.nextSibling,C=T.nodeName;T[Ls]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&T.rel.toLowerCase()==="stylesheet"||a.removeChild(T),T=S}}if(f===0){n.removeChild(d),mu(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);mu(i)}function nm(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nm(a),Mi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function wA(n,i,a,l){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Ls])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=or(n.nextSibling),n===null)break}return null}function SA(n,i,a){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=or(n.nextSibling),n===null))return null;return n}function rm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function AA(n,i){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function or(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var im=null;function w0(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}function S0(n,i,a){switch(i=vh(a),n){case"html":if(n=i.documentElement,!n)throw Error(s(452));return n;case"head":if(n=i.head,!n)throw Error(s(453));return n;case"body":if(n=i.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function ou(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Mi(n)}var Wn=new Map,A0=new Set;function Eh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var mi=ce.d;ce.d={f:RA,r:xA,D:IA,C:CA,L:DA,m:NA,X:kA,S:OA,M:MA};function RA(){var n=mi.f(),i=hh();return n||i}function xA(n){var i=vr(n);i!==null&&i.tag===5&&i.type==="form"?$_(i):mi.r(n)}var So=typeof document>"u"?null:document;function R0(n,i,a){var l=So;if(l&&typeof i=="string"&&i){var f=bt(i);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),A0.has(f)||(A0.add(f),n={rel:n,crossOrigin:a,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Jt(i,"link",n),yt(i),l.head.appendChild(i)))}}function IA(n){mi.D(n),R0("dns-prefetch",n,null)}function CA(n,i){mi.C(n,i),R0("preconnect",n,i)}function DA(n,i,a){mi.L(n,i,a);var l=So;if(l&&n&&i){var f='link[rel="preload"][as="'+bt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+bt(a.imageSizes)+'"]')):f+='[href="'+bt(n)+'"]';var d=f;switch(i){case"style":d=Ao(n);break;case"script":d=Ro(n)}Wn.has(d)||(n=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:n,as:i},a),Wn.set(d,n),l.querySelector(f)!==null||i==="style"&&l.querySelector(lu(d))||i==="script"&&l.querySelector(uu(d))||(i=l.createElement("link"),Jt(i,"link",n),yt(i),l.head.appendChild(i)))}}function NA(n,i){mi.m(n,i);var a=So;if(a&&n){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+bt(l)+'"][href="'+bt(n)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ro(n)}if(!Wn.has(d)&&(n=E({rel:"modulepreload",href:n},i),Wn.set(d,n),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(uu(d)))return}l=a.createElement("link"),Jt(l,"link",n),yt(l),a.head.appendChild(l)}}}function OA(n,i,a){mi.S(n,i,a);var l=So;if(l&&n){var f=gn(l).hoistableStyles,d=Ao(n);i=i||"default";var T=f.get(d);if(!T){var S={loading:0,preload:null};if(T=l.querySelector(lu(d)))S.loading=5;else{n=E({rel:"stylesheet",href:n,"data-precedence":i},a),(a=Wn.get(d))&&sm(n,a);var C=T=l.createElement("link");yt(C),Jt(C,"link",n),C._p=new Promise(function(F,J){C.onload=F,C.onerror=J}),C.addEventListener("load",function(){S.loading|=1}),C.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Th(T,i,l)}T={type:"stylesheet",instance:T,count:1,state:S},f.set(d,T)}}}function kA(n,i){mi.X(n,i);var a=So;if(a&&n){var l=gn(a).hoistableScripts,f=Ro(n),d=l.get(f);d||(d=a.querySelector(uu(f)),d||(n=E({src:n,async:!0},i),(i=Wn.get(f))&&am(n,i),d=a.createElement("script"),yt(d),Jt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function MA(n,i){mi.M(n,i);var a=So;if(a&&n){var l=gn(a).hoistableScripts,f=Ro(n),d=l.get(f);d||(d=a.querySelector(uu(f)),d||(n=E({src:n,async:!0,type:"module"},i),(i=Wn.get(f))&&am(n,i),d=a.createElement("script"),yt(d),Jt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function x0(n,i,a,l){var f=(f=ve.current)?Eh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ao(a.href),a=gn(f).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=Ao(a.href);var d=gn(f).hoistableStyles,T=d.get(n);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,T),(d=f.querySelector(lu(n)))&&!d._p&&(T.instance=d,T.state.loading=5),Wn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Wn.set(n,a),d||PA(f,n,a,T.state))),i&&l===null)throw Error(s(528,""));return T}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ro(a),a=gn(f).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Ao(n){return'href="'+bt(n)+'"'}function lu(n){return'link[rel="stylesheet"]['+n+"]"}function I0(n){return E({},n,{"data-precedence":n.precedence,precedence:null})}function PA(n,i,a,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Jt(i,"link",a),yt(i),n.head.appendChild(i))}function Ro(n){return'[src="'+bt(n)+'"]'}function uu(n){return"script[async]"+n}function C0(n,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+bt(a.href)+'"]');if(l)return i.instance=l,yt(l),l;var f=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),yt(l),Jt(l,"style",f),Th(l,a.precedence,n),i.instance=l;case"stylesheet":f=Ao(a.href);var d=n.querySelector(lu(f));if(d)return i.state.loading|=4,i.instance=d,yt(d),d;l=I0(a),(f=Wn.get(f))&&sm(l,f),d=(n.ownerDocument||n).createElement("link"),yt(d);var T=d;return T._p=new Promise(function(S,C){T.onload=S,T.onerror=C}),Jt(d,"link",l),i.state.loading|=4,Th(d,a.precedence,n),i.instance=d;case"script":return d=Ro(a.src),(f=n.querySelector(uu(d)))?(i.instance=f,yt(f),f):(l=a,(f=Wn.get(d))&&(l=E({},a),am(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),yt(f),Jt(f,"link",l),n.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Th(l,a.precedence,n));return i.instance}function Th(n,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,T=0;T<l.length;T++){var S=l[T];if(S.dataset.precedence===i)d=S;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(n,i.firstChild))}function sm(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function am(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var bh=null;function D0(n,i,a){if(bh===null){var l=new Map,f=bh=new Map;f.set(a,l)}else f=bh,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var d=a[f];if(!(d[Ls]||d[Nt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var T=d.getAttribute(i)||"";T=n+T;var S=l.get(T);S?S.push(d):l.set(T,[d])}}return l}function N0(n,i,a){n=n.ownerDocument||n,n.head.insertBefore(a,i==="title"?n.querySelector("head > title"):null)}function VA(n,i,a){if(a===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function O0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var cu=null;function LA(){}function jA(n,i,a){if(cu===null)throw Error(s(475));var l=cu;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Ao(a.href),d=n.querySelector(lu(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=wh.bind(l),n.then(l,l)),i.state.loading|=4,i.instance=d,yt(d);return}d=n.ownerDocument||n,a=I0(a),(f=Wn.get(f))&&sm(a,f),d=d.createElement("link"),yt(d);var T=d;T._p=new Promise(function(S,C){T.onload=S,T.onerror=C}),Jt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=wh.bind(l),n.addEventListener("load",i),n.addEventListener("error",i))}}function UA(){if(cu===null)throw Error(s(475));var n=cu;return n.stylesheets&&n.count===0&&om(n,n.stylesheets),0<n.count?function(i){var a=setTimeout(function(){if(n.stylesheets&&om(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(a)}}:null}function wh(){if(this.count--,this.count===0){if(this.stylesheets)om(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Sh=null;function om(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Sh=new Map,i.forEach(zA,n),Sh=null,wh.call(n))}function zA(n,i){if(!(i.state.loading&4)){var a=Sh.get(n);if(a)var l=a.get(null);else{a=new Map,Sh.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var T=f[d];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(a.set(T.dataset.precedence,T),l=T)}l&&a.set(null,l)}f=i.instance,T=f.getAttribute("data-precedence"),d=a.get(T)||l,d===l&&a.set(null,f),a.set(T,f),this.count++,l=wh.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),i.state.loading|=4}}var hu={$$typeof:W,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function qA(n,i,a,l,f,d,T,S){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$r(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.hiddenUpdates=$r(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function k0(n,i,a,l,f,d,T,S,C,F,J,ne){return n=new qA(n,i,a,T,S,C,F,ne),i=1,d===!0&&(i|=24),d=Cn(3,null,null,i),n.current=d,d.stateNode=n,i=Bd(),i.refCount++,n.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Gd(d),n}function M0(n){return n?(n=no,n):no}function P0(n,i,a,l,f,d){f=M0(f),l.context===null?l.context=f:l.pendingContext=f,l=zi(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=qi(n,l,i),a!==null&&(Mn(a,n,i),ql(a,n,i))}function V0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function lm(n,i){V0(n,i),(n=n.alternate)&&V0(n,i)}function L0(n){if(n.tag===13){var i=to(n,67108864);i!==null&&Mn(i,n,67108864),lm(n,67108864)}}var Ah=!0;function BA(n,i,a,l){var f=Z.T;Z.T=null;var d=ce.p;try{ce.p=2,um(n,i,a,l)}finally{ce.p=d,Z.T=f}}function HA(n,i,a,l){var f=Z.T;Z.T=null;var d=ce.p;try{ce.p=8,um(n,i,a,l)}finally{ce.p=d,Z.T=f}}function um(n,i,a,l){if(Ah){var f=cm(l);if(f===null)Xp(n,i,l,Rh,a),U0(n,l);else if($A(f,n,i,a,l))l.stopPropagation();else if(U0(n,l),i&4&&-1<FA.indexOf(n)){for(;f!==null;){var d=vr(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var T=nr(d.pendingLanes);if(T!==0){var S=d;for(S.pendingLanes|=2,S.entangledLanes|=2;T;){var C=1<<31-an(T);S.entanglements[1]|=C,T&=~C}kr(d),(Ke&6)===0&&(uh=Un()+500,iu(0))}}break;case 13:S=to(d,2),S!==null&&Mn(S,d,2),hh(),lm(d,2)}if(d=cm(l),d===null&&Xp(n,i,l,Rh,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else Xp(n,i,l,null,a)}}function cm(n){return n=Bn(n),hm(n)}var Rh=null;function hm(n){if(Rh=null,n=Yr(n),n!==null){var i=u(n);if(i===null)n=null;else{var a=i.tag;if(a===13){if(n=h(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Rh=n,null}function j0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pd()){case ul:return 2;case Ma:return 8;case Os:case md:return 32;case Pa:return 268435456;default:return 32}default:return 32}}var fm=!1,es=null,ts=null,ns=null,fu=new Map,du=new Map,rs=[],FA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U0(n,i){switch(n){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":fu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":du.delete(i.pointerId)}}function pu(n,i,a,l,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=vr(i),i!==null&&L0(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function $A(n,i,a,l,f){switch(i){case"focusin":return es=pu(es,n,i,a,l,f),!0;case"dragenter":return ts=pu(ts,n,i,a,l,f),!0;case"mouseover":return ns=pu(ns,n,i,a,l,f),!0;case"pointerover":var d=f.pointerId;return fu.set(d,pu(fu.get(d)||null,n,i,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,du.set(d,pu(du.get(d)||null,n,i,a,l,f)),!0}return!1}function z0(n){var i=Yr(n.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){n.blockedOn=i,hc(n.priority,function(){if(a.tag===13){var l=kn();l=Ni(l);var f=to(a,l);f!==null&&Mn(f,a,l),lm(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xh(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=cm(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Wr=l,a.target.dispatchEvent(l),Wr=null}else return i=vr(a),i!==null&&L0(i),n.blockedOn=a,!1;i.shift()}return!0}function q0(n,i,a){xh(n)&&a.delete(i)}function GA(){fm=!1,es!==null&&xh(es)&&(es=null),ts!==null&&xh(ts)&&(ts=null),ns!==null&&xh(ns)&&(ns=null),fu.forEach(q0),du.forEach(q0)}function Ih(n,i){n.blockedOn===i&&(n.blockedOn=null,fm||(fm=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,GA)))}var Ch=null;function B0(n){Ch!==n&&(Ch=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ch===n&&(Ch=null);for(var i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],f=n[i+2];if(typeof l!="function"){if(hm(l||a)===null)continue;break}var d=vr(a);d!==null&&(n.splice(i,3),i-=3,hp(d,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function mu(n){function i(C){return Ih(C,n)}es!==null&&Ih(es,n),ts!==null&&Ih(ts,n),ns!==null&&Ih(ns,n),fu.forEach(i),du.forEach(i);for(var a=0;a<rs.length;a++){var l=rs[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<rs.length&&(a=rs[0],a.blockedOn===null);)z0(a),a.blockedOn===null&&rs.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],d=a[l+1],T=f[Tt]||null;if(typeof d=="function")T||B0(a);else if(T){var S=null;if(d&&d.hasAttribute("formAction")){if(f=d,T=d[Tt]||null)S=T.formAction;else if(hm(f)!==null)continue}else S=T.action;typeof S=="function"?a[l+1]=S:(a.splice(l,3),l-=3),B0(a)}}}function dm(n){this._internalRoot=n}Dh.prototype.render=dm.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=kn();P0(a,l,n,i,null,null)},Dh.prototype.unmount=dm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;P0(n.current,2,null,n,null,null),hh(),i[zn]=null}};function Dh(n){this._internalRoot=n}Dh.prototype.unstable_scheduleHydration=function(n){if(n){var i=Oi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<rs.length&&i!==0&&i<rs[a].priority;a++);rs.splice(a,0,n),a===0&&z0(n)}};var H0=e.version;if(H0!=="19.1.0")throw Error(s(527,H0,"19.1.0"));ce.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=m(i),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var YA={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nh.isDisabled&&Nh.supportsFiber)try{dt=Nh.inject(YA),Qe=Nh}catch{}}return yu.createRoot=function(n,i){if(!o(n))throw Error(s(299));var a=!1,l="",f=sv,d=av,T=ov,S=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(S=i.unstable_transitionCallbacks)),i=k0(n,1,!1,null,null,a,l,f,d,T,S,null),n[zn]=i.current,Kp(n),new dm(i)},yu.hydrateRoot=function(n,i,a){if(!o(n))throw Error(s(299));var l=!1,f="",d=sv,T=av,S=ov,C=null,F=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(T=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(C=a.unstable_transitionCallbacks),a.formState!==void 0&&(F=a.formState)),i=k0(n,1,!0,i,a??null,l,f,d,T,S,C,F),i.context=M0(null),a=i.current,l=kn(),l=Ni(l),f=zi(l),f.callback=null,qi(a,f,l),a=l,i.current.lanes=a,Gr(i,a),kr(i),n[zn]=i.current,Kp(n),new Dh(i)},yu.version="19.1.0",yu}var J0;function iR(){if(J0)return gm.exports;J0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gm.exports=rR(),gm.exports}var sR=iR();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var eE="popstate";function aR(r={}){function e(s,o){let{pathname:u,search:h,hash:p}=s.location;return jm("",{pathname:u,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:ku(o)}return lR(e,t,null,r)}function ut(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function pr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oR(){return Math.random().toString(36).substring(2,10)}function tE(r,e){return{usr:r.state,key:r.key,idx:e}}function jm(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Xo(e):e,state:t,key:e&&e.key||s||oR()}}function ku({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Xo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function lR(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,p="POP",m=null,g=E();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function E(){return(h.state||{idx:null}).idx}function w(){p="POP";let z=E(),$=z==null?null:z-g;g=z,m&&m({action:p,location:H.location,delta:$})}function b(z,$){p="PUSH";let q=jm(H.location,z,$);g=E()+1;let W=tE(q,g),oe=H.createHref(q);try{h.pushState(W,"",oe)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;o.location.assign(oe)}u&&m&&m({action:p,location:H.location,delta:1})}function I(z,$){p="REPLACE";let q=jm(H.location,z,$);g=E();let W=tE(q,g),oe=H.createHref(q);h.replaceState(W,"",oe),u&&m&&m({action:p,location:H.location,delta:0})}function P(z){return uR(z)}let H={get action(){return p},get location(){return r(o,h)},listen(z){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(eE,w),m=z,()=>{o.removeEventListener(eE,w),m=null}},createHref(z){return e(o,z)},createURL:P,encodeLocation(z){let $=P(z);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:b,replace:I,go(z){return h.go(z)}};return H}function uR(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),ut(t,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:ku(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function u1(r,e,t="/"){return cR(r,e,t,!1)}function cR(r,e,t,s){let o=typeof e=="string"?Xo(e):e,u=Si(o.pathname||"/",t);if(u==null)return null;let h=c1(r);hR(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let g=bR(u);p=ER(h[m],g,s)}return p}function c1(r,e=[],t=[],s=""){let o=(u,h,p)=>{let m={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(ut(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=Ei([s,m.relativePath]),E=t.concat(m);u.children&&u.children.length>0&&(ut(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),c1(u.children,e,E,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:_R(g,u.index),routesMeta:E})};return r.forEach((u,h)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))o(u,h);else for(let m of h1(u.path))o(u,h,m)}),e}function h1(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=h1(s.join("/")),p=[];return p.push(...h.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...h),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function hR(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:vR(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var fR=/^:[\w-]+$/,dR=3,pR=2,mR=1,gR=10,yR=-2,nE=r=>r==="*";function _R(r,e){let t=r.split("/"),s=t.length;return t.some(nE)&&(s+=yR),e&&(s+=pR),t.filter(o=>!nE(o)).reduce((o,u)=>o+(fR.test(u)?dR:u===""?mR:gR),s)}function vR(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function ER(r,e,t=!1){let{routesMeta:s}=r,o={},u="/",h=[];for(let p=0;p<s.length;++p){let m=s[p],g=p===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",w=uf({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},E),b=m.route;if(!w&&g&&t&&!s[s.length-1].route.index&&(w=uf({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},E)),!w)return null;Object.assign(o,w.params),h.push({params:o,pathname:Ei([u,w.pathname]),pathnameBase:RR(Ei([u,w.pathnameBase])),route:b}),w.pathnameBase!=="/"&&(u=Ei([u,w.pathnameBase]))}return h}function uf(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=TR(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((g,{paramName:E,isOptional:w},b)=>{if(E==="*"){let P=p[b]||"";h=u.slice(0,u.length-P.length).replace(/(.)\/+$/,"$1")}const I=p[b];return w&&!I?g[E]=void 0:g[E]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:r}}function TR(r,e=!1,t=!0){pr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function bR(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return pr(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Si(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function wR(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Xo(r):r;return{pathname:t?t.startsWith("/")?t:SR(t,e):e,search:xR(s),hash:IR(o)}}function SR(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Em(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function AR(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function wg(r){let e=AR(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Sg(r,e,t,s=!1){let o;typeof r=="string"?o=Xo(r):(o={...r},ut(!o.pathname||!o.pathname.includes("?"),Em("?","pathname","search",o)),ut(!o.pathname||!o.pathname.includes("#"),Em("#","pathname","hash",o)),ut(!o.search||!o.search.includes("#"),Em("#","search","hash",o)));let u=r===""||o.pathname==="",h=u?"/":o.pathname,p;if(h==null)p=t;else{let w=e.length-1;if(!s&&h.startsWith("..")){let b=h.split("/");for(;b[0]==="..";)b.shift(),w-=1;o.pathname=b.join("/")}p=w>=0?e[w]:"/"}let m=wR(o,p),g=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||E)&&(m.pathname+="/"),m}var Ei=r=>r.join("/").replace(/\/\/+/g,"/"),RR=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),xR=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,IR=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function CR(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var f1=["POST","PUT","PATCH","DELETE"];new Set(f1);var DR=["GET",...f1];new Set(DR);var Wo=Q.createContext(null);Wo.displayName="DataRouter";var kf=Q.createContext(null);kf.displayName="DataRouterState";Q.createContext(!1);var d1=Q.createContext({isTransitioning:!1});d1.displayName="ViewTransition";var NR=Q.createContext(new Map);NR.displayName="Fetchers";var OR=Q.createContext(null);OR.displayName="Await";var yr=Q.createContext(null);yr.displayName="Navigation";var Yu=Q.createContext(null);Yu.displayName="Location";var Fr=Q.createContext({outlet:null,matches:[],isDataRoute:!1});Fr.displayName="Route";var Ag=Q.createContext(null);Ag.displayName="RouteError";function kR(r,{relative:e}={}){ut(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=Q.useContext(yr),{hash:o,pathname:u,search:h}=Ku(r,{relative:e}),p=u;return t!=="/"&&(p=u==="/"?t:Ei([t,u])),s.createHref({pathname:p,search:h,hash:o})}function Zo(){return Q.useContext(Yu)!=null}function As(){return ut(Zo(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(Yu).location}var p1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function m1(r){Q.useContext(yr).static||Q.useLayoutEffect(r)}function Qu(){let{isDataRoute:r}=Q.useContext(Fr);return r?GR():MR()}function MR(){ut(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let r=Q.useContext(Wo),{basename:e,navigator:t}=Q.useContext(yr),{matches:s}=Q.useContext(Fr),{pathname:o}=As(),u=JSON.stringify(wg(s)),h=Q.useRef(!1);return m1(()=>{h.current=!0}),Q.useCallback((m,g={})=>{if(pr(h.current,p1),!h.current)return;if(typeof m=="number"){t.go(m);return}let E=Sg(m,JSON.parse(u),o,g.relative==="path");r==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Ei([e,E.pathname])),(g.replace?t.replace:t.push)(E,g.state,g)},[e,t,u,o,r])}Q.createContext(null);function Ku(r,{relative:e}={}){let{matches:t}=Q.useContext(Fr),{pathname:s}=As(),o=JSON.stringify(wg(t));return Q.useMemo(()=>Sg(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function PR(r,e){return g1(r,e)}function g1(r,e,t,s){var $;ut(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=Q.useContext(yr),{matches:u}=Q.useContext(Fr),h=u[u.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",E=h&&h.route;{let q=E&&E.path||"";y1(m,!E||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let w=As(),b;if(e){let q=typeof e=="string"?Xo(e):e;ut(g==="/"||(($=q.pathname)==null?void 0:$.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${q.pathname}" was given in the \`location\` prop.`),b=q}else b=w;let I=b.pathname||"/",P=I;if(g!=="/"){let q=g.replace(/^\//,"").split("/");P="/"+I.replace(/^\//,"").split("/").slice(q.length).join("/")}let H=u1(r,{pathname:P});pr(E||H!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),pr(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=zR(H&&H.map(q=>Object.assign({},q,{params:Object.assign({},p,q.params),pathname:Ei([g,o.encodeLocation?o.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?g:Ei([g,o.encodeLocation?o.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),u,t,s);return e&&z?Q.createElement(Yu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},z):z}function VR(){let r=$R(),e=CR(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:u},"ErrorBoundary")," or"," ",Q.createElement("code",{style:u},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),t?Q.createElement("pre",{style:o},t):null,h)}var LR=Q.createElement(VR,null),jR=class extends Q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?Q.createElement(Fr.Provider,{value:this.props.routeContext},Q.createElement(Ag.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function UR({routeContext:r,match:e,children:t}){let s=Q.useContext(Wo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),Q.createElement(Fr.Provider,{value:r},t)}function zR(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,u=t==null?void 0:t.errors;if(u!=null){let m=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);ut(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let h=!1,p=-1;if(t)for(let m=0;m<o.length;m++){let g=o[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:E,errors:w}=t,b=g.route.loader&&!E.hasOwnProperty(g.route.id)&&(!w||w[g.route.id]===void 0);if(g.route.lazy||b){h=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,g,E)=>{let w,b=!1,I=null,P=null;t&&(w=u&&g.route.id?u[g.route.id]:void 0,I=g.route.errorElement||LR,h&&(p<0&&E===0?(y1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,P=null):p===E&&(b=!0,P=g.route.hydrateFallbackElement||null)));let H=e.concat(o.slice(0,E+1)),z=()=>{let $;return w?$=I:b?$=P:g.route.Component?$=Q.createElement(g.route.Component,null):g.route.element?$=g.route.element:$=m,Q.createElement(UR,{match:g,routeContext:{outlet:m,matches:H,isDataRoute:t!=null},children:$})};return t&&(g.route.ErrorBoundary||g.route.errorElement||E===0)?Q.createElement(jR,{location:t.location,revalidation:t.revalidation,component:I,error:w,children:z(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):z()},null)}function Rg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qR(r){let e=Q.useContext(Wo);return ut(e,Rg(r)),e}function BR(r){let e=Q.useContext(kf);return ut(e,Rg(r)),e}function HR(r){let e=Q.useContext(Fr);return ut(e,Rg(r)),e}function xg(r){let e=HR(r),t=e.matches[e.matches.length-1];return ut(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function FR(){return xg("useRouteId")}function $R(){var s;let r=Q.useContext(Ag),e=BR("useRouteError"),t=xg("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function GR(){let{router:r}=qR("useNavigate"),e=xg("useNavigate"),t=Q.useRef(!1);return m1(()=>{t.current=!0}),Q.useCallback(async(o,u={})=>{pr(t.current,p1),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var rE={};function y1(r,e,t){!e&&!rE[r]&&(rE[r]=!0,pr(!1,t))}Q.memo(YR);function YR({routes:r,future:e,state:t}){return g1(r,void 0,t,e)}function QR({to:r,replace:e,state:t,relative:s}){ut(Zo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=Q.useContext(yr);pr(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=Q.useContext(Fr),{pathname:h}=As(),p=Qu(),m=Sg(r,wg(u),h,s==="path"),g=JSON.stringify(m);return Q.useEffect(()=>{p(JSON.parse(g),{replace:e,state:t,relative:s})},[p,g,s,e,t]),null}function Fh(r){ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function KR({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){ut(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=Q.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=Xo(t));let{pathname:m="/",search:g="",hash:E="",state:w=null,key:b="default"}=t,I=Q.useMemo(()=>{let P=Si(m,h);return P==null?null:{location:{pathname:P,search:g,hash:E,state:w,key:b},navigationType:s}},[h,m,g,E,w,b,s]);return pr(I!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:Q.createElement(yr.Provider,{value:p},Q.createElement(Yu.Provider,{children:e,value:I}))}function XR({children:r,location:e}){return PR(Um(r),e)}function Um(r,e=[]){let t=[];return Q.Children.forEach(r,(s,o)=>{if(!Q.isValidElement(s))return;let u=[...e,o];if(s.type===Q.Fragment){t.push.apply(t,Um(s.props.children,u));return}ut(s.type===Fh,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ut(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Um(s.props.children,u)),t.push(h)}),t}var $h="get",Gh="application/x-www-form-urlencoded";function Mf(r){return r!=null&&typeof r.tagName=="string"}function WR(r){return Mf(r)&&r.tagName.toLowerCase()==="button"}function ZR(r){return Mf(r)&&r.tagName.toLowerCase()==="form"}function JR(r){return Mf(r)&&r.tagName.toLowerCase()==="input"}function ex(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function tx(r,e){return r.button===0&&(!e||e==="_self")&&!ex(r)}var Oh=null;function nx(){if(Oh===null)try{new FormData(document.createElement("form"),0),Oh=!1}catch{Oh=!0}return Oh}var rx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tm(r){return r!=null&&!rx.has(r)?(pr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gh}"`),null):r}function ix(r,e){let t,s,o,u,h;if(ZR(r)){let p=r.getAttribute("action");s=p?Si(p,e):null,t=r.getAttribute("method")||$h,o=Tm(r.getAttribute("enctype"))||Gh,u=new FormData(r)}else if(WR(r)||JR(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?Si(m,e):null,t=r.getAttribute("formmethod")||p.getAttribute("method")||$h,o=Tm(r.getAttribute("formenctype"))||Tm(p.getAttribute("enctype"))||Gh,u=new FormData(p,r),!nx()){let{name:g,type:E,value:w}=r;if(E==="image"){let b=g?`${g}.`:"";u.append(`${b}x`,"0"),u.append(`${b}y`,"0")}else g&&u.append(g,w)}}else{if(Mf(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=$h,s=null,o=Gh,h=r}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ig(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function sx(r,e,t){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&Si(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function ax(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ox(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function lx(r,e,t){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await ax(u,t);return h.links?h.links():[]}return[]}));return fx(s.flat(1).filter(ox).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function iE(r,e,t,s,o,u){let h=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,p=(m,g)=>{var E;return t[g].pathname!==m.pathname||((E=t[g].route.path)==null?void 0:E.endsWith("*"))&&t[g].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,g)=>h(m,g)||p(m,g)):u==="data"?e.filter((m,g)=>{var w;let E=s.routes[m.route.id];if(!E||!E.hasLoader)return!1;if(h(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let b=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((w=t[0])==null?void 0:w.params)||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function ux(r,e,{includeHydrateFallback:t}={}){return cx(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function cx(r){return[...new Set(r)]}function hx(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function fx(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(hx(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}function _1(){let r=Q.useContext(Wo);return Ig(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function dx(){let r=Q.useContext(kf);return Ig(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Cg=Q.createContext(void 0);Cg.displayName="FrameworkContext";function v1(){let r=Q.useContext(Cg);return Ig(r,"You must render this element inside a <HydratedRouter> element"),r}function px(r,e){let t=Q.useContext(Cg),[s,o]=Q.useState(!1),[u,h]=Q.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:E,onTouchStart:w}=e,b=Q.useRef(null);Q.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let H=$=>{$.forEach(q=>{h(q.isIntersecting)})},z=new IntersectionObserver(H,{threshold:.5});return b.current&&z.observe(b.current),()=>{z.disconnect()}}},[r]),Q.useEffect(()=>{if(s){let H=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(H)}}},[s]);let I=()=>{o(!0)},P=()=>{o(!1),h(!1)};return t?r!=="intent"?[u,b,{}]:[u,b,{onFocus:_u(p,I),onBlur:_u(m,P),onMouseEnter:_u(g,I),onMouseLeave:_u(E,P),onTouchStart:_u(w,I)}]:[!1,b,{}]}function _u(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function mx({page:r,...e}){let{router:t}=_1(),s=Q.useMemo(()=>u1(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?Q.createElement(yx,{page:r,matches:s,...e}):null}function gx(r){let{manifest:e,routeModules:t}=v1(),[s,o]=Q.useState([]);return Q.useEffect(()=>{let u=!1;return lx(r,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[r,e,t]),s}function yx({page:r,matches:e,...t}){let s=As(),{manifest:o,routeModules:u}=v1(),{basename:h}=_1(),{loaderData:p,matches:m}=dx(),g=Q.useMemo(()=>iE(r,e,m,o,s,"data"),[r,e,m,o,s]),E=Q.useMemo(()=>iE(r,e,m,o,s,"assets"),[r,e,m,o,s]),w=Q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let P=new Set,H=!1;if(e.forEach($=>{var W;let q=o.routes[$.route.id];!q||!q.hasLoader||(!g.some(oe=>oe.route.id===$.route.id)&&$.route.id in p&&((W=u[$.route.id])!=null&&W.shouldRevalidate)||q.hasClientLoader?H=!0:P.add($.route.id))}),P.size===0)return[];let z=sx(r,h,"data");return H&&P.size>0&&z.searchParams.set("_routes",e.filter($=>P.has($.route.id)).map($=>$.route.id).join(",")),[z.pathname+z.search]},[h,p,s,o,g,e,r,u]),b=Q.useMemo(()=>ux(E,o),[E,o]),I=gx(E);return Q.createElement(Q.Fragment,null,w.map(P=>Q.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...t})),b.map(P=>Q.createElement("link",{key:P,rel:"modulepreload",href:P,...t})),I.map(({key:P,link:H})=>Q.createElement("link",{key:P,...H})))}function _x(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var E1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{E1&&(window.__reactRouterVersion="7.7.0")}catch{}function vx({basename:r,children:e,window:t}){let s=Q.useRef();s.current==null&&(s.current=aR({window:t,v5Compat:!0}));let o=s.current,[u,h]=Q.useState({action:o.action,location:o.location}),p=Q.useCallback(m=>{Q.startTransition(()=>h(m))},[h]);return Q.useLayoutEffect(()=>o.listen(p),[o,p]),Q.createElement(KR,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var T1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,b1=Q.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:p,target:m,to:g,preventScrollReset:E,viewTransition:w,...b},I){let{basename:P}=Q.useContext(yr),H=typeof g=="string"&&T1.test(g),z,$=!1;if(typeof g=="string"&&H&&(z=g,E1))try{let x=new URL(window.location.href),k=g.startsWith("//")?new URL(x.protocol+g):new URL(g),V=Si(k.pathname,P);k.origin===x.origin&&V!=null?g=V+k.search+k.hash:$=!0}catch{pr(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=kR(g,{relative:o}),[W,oe,le]=px(s,b),fe=wx(g,{replace:h,state:p,target:m,preventScrollReset:E,relative:o,viewTransition:w});function D(x){e&&e(x),x.defaultPrevented||fe(x)}let R=Q.createElement("a",{...b,...le,href:z||q,onClick:$||u?e:D,ref:_x(I,oe),target:m,"data-discover":!H&&t==="render"?"true":void 0});return W&&!H?Q.createElement(Q.Fragment,null,R,Q.createElement(mx,{page:q})):R});b1.displayName="Link";var Ex=Q.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:p,children:m,...g},E){let w=Ku(h,{relative:g.relative}),b=As(),I=Q.useContext(kf),{navigator:P,basename:H}=Q.useContext(yr),z=I!=null&&Ix(w)&&p===!0,$=P.encodeLocation?P.encodeLocation(w).pathname:w.pathname,q=b.pathname,W=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;t||(q=q.toLowerCase(),W=W?W.toLowerCase():null,$=$.toLowerCase()),W&&H&&(W=Si(W,H)||W);const oe=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let le=q===$||!o&&q.startsWith($)&&q.charAt(oe)==="/",fe=W!=null&&(W===$||!o&&W.startsWith($)&&W.charAt($.length)==="/"),D={isActive:le,isPending:fe,isTransitioning:z},R=le?e:void 0,x;typeof s=="function"?x=s(D):x=[s,le?"active":null,fe?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let k=typeof u=="function"?u(D):u;return Q.createElement(b1,{...g,"aria-current":R,className:x,ref:E,style:k,to:h,viewTransition:p},typeof m=="function"?m(D):m)});Ex.displayName="NavLink";var Tx=Q.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=$h,action:p,onSubmit:m,relative:g,preventScrollReset:E,viewTransition:w,...b},I)=>{let P=Rx(),H=xx(p,{relative:g}),z=h.toLowerCase()==="get"?"get":"post",$=typeof p=="string"&&T1.test(p),q=W=>{if(m&&m(W),W.defaultPrevented)return;W.preventDefault();let oe=W.nativeEvent.submitter,le=(oe==null?void 0:oe.getAttribute("formmethod"))||h;P(oe||W.currentTarget,{fetcherKey:e,method:le,navigate:t,replace:o,state:u,relative:g,preventScrollReset:E,viewTransition:w})};return Q.createElement("form",{ref:I,method:z,action:H,onSubmit:s?m:q,...b,"data-discover":!$&&r==="render"?"true":void 0})});Tx.displayName="Form";function bx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function w1(r){let e=Q.useContext(Wo);return ut(e,bx(r)),e}function wx(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let p=Qu(),m=As(),g=Ku(r,{relative:u});return Q.useCallback(E=>{if(tx(E,e)){E.preventDefault();let w=t!==void 0?t:ku(m)===ku(g);p(r,{replace:w,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[m,p,g,t,s,e,r,o,u,h])}var Sx=0,Ax=()=>`__${String(++Sx)}__`;function Rx(){let{router:r}=w1("useSubmit"),{basename:e}=Q.useContext(yr),t=FR();return Q.useCallback(async(s,o={})=>{let{action:u,method:h,encType:p,formData:m,body:g}=ix(s,e);if(o.navigate===!1){let E=o.fetcherKey||Ax();await r.fetch(E,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function xx(r,{relative:e}={}){let{basename:t}=Q.useContext(yr),s=Q.useContext(Fr);ut(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Ku(r||".",{relative:e})},h=As();if(r==null){u.search=h.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(E=>E==="")){p.delete("index"),m.filter(w=>w).forEach(w=>p.append("index",w));let E=p.toString();u.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:Ei([t,u.pathname])),ku(u)}function Ix(r,e={}){let t=Q.useContext(d1);ut(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=w1("useViewTransitionState"),o=Ku(r,{relative:e.relative});if(!t.isTransitioning)return!1;let u=Si(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=Si(t.nextLocation.pathname,s)||t.nextLocation.pathname;return uf(o.pathname,h)!=null||uf(o.pathname,u)!=null}var Qt=function(){return Qt=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},Qt.apply(this,arguments)};function Mu(r,e,t){if(t||arguments.length===2)for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return r.concat(u||Array.prototype.slice.call(e))}var st="-ms-",Ru="-moz-",Ge="-webkit-",S1="comm",Pf="rule",Dg="decl",Cx="@import",A1="@keyframes",Dx="@layer",R1=Math.abs,Ng=String.fromCharCode,zm=Object.assign;function Nx(r,e){return Yt(r,0)^45?(((e<<2^Yt(r,0))<<2^Yt(r,1))<<2^Yt(r,2))<<2^Yt(r,3):0}function x1(r){return r.trim()}function yi(r,e){return(r=e.exec(r))?r[0]:r}function De(r,e,t){return r.replace(e,t)}function Yh(r,e,t){return r.indexOf(e,t)}function Yt(r,e){return r.charCodeAt(e)|0}function jo(r,e,t){return r.slice(e,t)}function Vr(r){return r.length}function I1(r){return r.length}function vu(r,e){return e.push(r),r}function Ox(r,e){return r.map(e).join("")}function sE(r,e){return r.filter(function(t){return!yi(t,e)})}var Vf=1,Uo=1,C1=0,tr=0,Rt=0,Jo="";function Lf(r,e,t,s,o,u,h,p){return{value:r,root:e,parent:t,type:s,props:o,children:u,line:Vf,column:Uo,length:h,return:"",siblings:p}}function as(r,e){return zm(Lf("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function xo(r){for(;r.root;)r=as(r.root,{children:[r]});vu(r,r.siblings)}function kx(){return Rt}function Mx(){return Rt=tr>0?Yt(Jo,--tr):0,Uo--,Rt===10&&(Uo=1,Vf--),Rt}function hr(){return Rt=tr<C1?Yt(Jo,tr++):0,Uo++,Rt===10&&(Uo=1,Vf++),Rt}function ga(){return Yt(Jo,tr)}function Qh(){return tr}function jf(r,e){return jo(Jo,r,e)}function qm(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Px(r){return Vf=Uo=1,C1=Vr(Jo=r),tr=0,[]}function Vx(r){return Jo="",r}function bm(r){return x1(jf(tr-1,Bm(r===91?r+2:r===40?r+1:r)))}function Lx(r){for(;(Rt=ga())&&Rt<33;)hr();return qm(r)>2||qm(Rt)>3?"":" "}function jx(r,e){for(;--e&&hr()&&!(Rt<48||Rt>102||Rt>57&&Rt<65||Rt>70&&Rt<97););return jf(r,Qh()+(e<6&&ga()==32&&hr()==32))}function Bm(r){for(;hr();)switch(Rt){case r:return tr;case 34:case 39:r!==34&&r!==39&&Bm(Rt);break;case 40:r===41&&Bm(r);break;case 92:hr();break}return tr}function Ux(r,e){for(;hr()&&r+Rt!==57;)if(r+Rt===84&&ga()===47)break;return"/*"+jf(e,tr-1)+"*"+Ng(r===47?r:hr())}function zx(r){for(;!qm(ga());)hr();return jf(r,tr)}function qx(r){return Vx(Kh("",null,null,null,[""],r=Px(r),0,[0],r))}function Kh(r,e,t,s,o,u,h,p,m){for(var g=0,E=0,w=h,b=0,I=0,P=0,H=1,z=1,$=1,q=0,W="",oe=o,le=u,fe=s,D=W;z;)switch(P=q,q=hr()){case 40:if(P!=108&&Yt(D,w-1)==58){Yh(D+=De(bm(q),"&","&\f"),"&\f",R1(g?p[g-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:D+=bm(q);break;case 9:case 10:case 13:case 32:D+=Lx(P);break;case 92:D+=jx(Qh()-1,7);continue;case 47:switch(ga()){case 42:case 47:vu(Bx(Ux(hr(),Qh()),e,t,m),m);break;default:D+="/"}break;case 123*H:p[g++]=Vr(D)*$;case 125*H:case 59:case 0:switch(q){case 0:case 125:z=0;case 59+E:$==-1&&(D=De(D,/\f/g,"")),I>0&&Vr(D)-w&&vu(I>32?oE(D+";",s,t,w-1,m):oE(De(D," ","")+";",s,t,w-2,m),m);break;case 59:D+=";";default:if(vu(fe=aE(D,e,t,g,E,o,p,W,oe=[],le=[],w,u),u),q===123)if(E===0)Kh(D,e,fe,fe,oe,u,w,p,le);else switch(b===99&&Yt(D,3)===110?100:b){case 100:case 108:case 109:case 115:Kh(r,fe,fe,s&&vu(aE(r,fe,fe,0,0,o,p,W,o,oe=[],w,le),le),o,le,w,p,s?oe:le);break;default:Kh(D,fe,fe,fe,[""],le,0,p,le)}}g=E=I=0,H=$=1,W=D="",w=h;break;case 58:w=1+Vr(D),I=P;default:if(H<1){if(q==123)--H;else if(q==125&&H++==0&&Mx()==125)continue}switch(D+=Ng(q),q*H){case 38:$=E>0?1:(D+="\f",-1);break;case 44:p[g++]=(Vr(D)-1)*$,$=1;break;case 64:ga()===45&&(D+=bm(hr())),b=ga(),E=w=Vr(W=D+=zx(Qh())),q++;break;case 45:P===45&&Vr(D)==2&&(H=0)}}return u}function aE(r,e,t,s,o,u,h,p,m,g,E,w){for(var b=o-1,I=o===0?u:[""],P=I1(I),H=0,z=0,$=0;H<s;++H)for(var q=0,W=jo(r,b+1,b=R1(z=h[H])),oe=r;q<P;++q)(oe=x1(z>0?I[q]+" "+W:De(W,/&\f/g,I[q])))&&(m[$++]=oe);return Lf(r,e,t,o===0?Pf:p,m,g,E,w)}function Bx(r,e,t,s){return Lf(r,e,t,S1,Ng(kx()),jo(r,2,-2),0,s)}function oE(r,e,t,s,o){return Lf(r,e,t,Dg,jo(r,0,s),jo(r,s+1,-1),s,o)}function D1(r,e,t){switch(Nx(r,e)){case 5103:return Ge+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ge+r+r;case 4789:return Ru+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Ge+r+Ru+r+st+r+r;case 5936:switch(Yt(r,e+11)){case 114:return Ge+r+st+De(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Ge+r+st+De(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Ge+r+st+De(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Ge+r+st+r+r;case 6165:return Ge+r+st+"flex-"+r+r;case 5187:return Ge+r+De(r,/(\w+).+(:[^]+)/,Ge+"box-$1$2"+st+"flex-$1$2")+r;case 5443:return Ge+r+st+"flex-item-"+De(r,/flex-|-self/g,"")+(yi(r,/flex-|baseline/)?"":st+"grid-row-"+De(r,/flex-|-self/g,""))+r;case 4675:return Ge+r+st+"flex-line-pack"+De(r,/align-content|flex-|-self/g,"")+r;case 5548:return Ge+r+st+De(r,"shrink","negative")+r;case 5292:return Ge+r+st+De(r,"basis","preferred-size")+r;case 6060:return Ge+"box-"+De(r,"-grow","")+Ge+r+st+De(r,"grow","positive")+r;case 4554:return Ge+De(r,/([^-])(transform)/g,"$1"+Ge+"$2")+r;case 6187:return De(De(De(r,/(zoom-|grab)/,Ge+"$1"),/(image-set)/,Ge+"$1"),r,"")+r;case 5495:case 3959:return De(r,/(image-set\([^]*)/,Ge+"$1$`$1");case 4968:return De(De(r,/(.+:)(flex-)?(.*)/,Ge+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ge+r+r;case 4200:if(!yi(r,/flex-|baseline/))return st+"grid-column-align"+jo(r,e)+r;break;case 2592:case 3360:return st+De(r,"template-","")+r;case 4384:case 3616:return t&&t.some(function(s,o){return e=o,yi(s.props,/grid-\w+-end/)})?~Yh(r+(t=t[e].value),"span",0)?r:st+De(r,"-start","")+r+st+"grid-row-span:"+(~Yh(t,"span",0)?yi(t,/\d+/):+yi(t,/\d+/)-+yi(r,/\d+/))+";":st+De(r,"-start","")+r;case 4896:case 4128:return t&&t.some(function(s){return yi(s.props,/grid-\w+-start/)})?r:st+De(De(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return De(r,/(.+)-inline(.+)/,Ge+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Vr(r)-1-e>6)switch(Yt(r,e+1)){case 109:if(Yt(r,e+4)!==45)break;case 102:return De(r,/(.+:)(.+)-([^]+)/,"$1"+Ge+"$2-$3$1"+Ru+(Yt(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Yh(r,"stretch",0)?D1(De(r,"stretch","fill-available"),e,t)+r:r}break;case 5152:case 5920:return De(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,u,h,p,m,g){return st+o+":"+u+g+(h?st+o+"-span:"+(p?m:+m-+u)+g:"")+r});case 4949:if(Yt(r,e+6)===121)return De(r,":",":"+Ge)+r;break;case 6444:switch(Yt(r,Yt(r,14)===45?18:11)){case 120:return De(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ge+(Yt(r,14)===45?"inline-":"")+"box$3$1"+Ge+"$2$3$1"+st+"$2box$3")+r;case 100:return De(r,":",":"+st)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return De(r,"scroll-","scroll-snap-")+r}return r}function cf(r,e){for(var t="",s=0;s<r.length;s++)t+=e(r[s],s,r,e)||"";return t}function Hx(r,e,t,s){switch(r.type){case Dx:if(r.children.length)break;case Cx:case Dg:return r.return=r.return||r.value;case S1:return"";case A1:return r.return=r.value+"{"+cf(r.children,s)+"}";case Pf:if(!Vr(r.value=r.props.join(",")))return""}return Vr(t=cf(r.children,s))?r.return=r.value+"{"+t+"}":""}function Fx(r){var e=I1(r);return function(t,s,o,u){for(var h="",p=0;p<e;p++)h+=r[p](t,s,o,u)||"";return h}}function $x(r){return function(e){e.root||(e=e.return)&&r(e)}}function Gx(r,e,t,s){if(r.length>-1&&!r.return)switch(r.type){case Dg:r.return=D1(r.value,r.length,t);return;case A1:return cf([as(r,{value:De(r.value,"@","@"+Ge)})],s);case Pf:if(r.length)return Ox(t=r.props,function(o){switch(yi(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xo(as(r,{props:[De(o,/:(read-\w+)/,":"+Ru+"$1")]})),xo(as(r,{props:[o]})),zm(r,{props:sE(t,s)});break;case"::placeholder":xo(as(r,{props:[De(o,/:(plac\w+)/,":"+Ge+"input-$1")]})),xo(as(r,{props:[De(o,/:(plac\w+)/,":"+Ru+"$1")]})),xo(as(r,{props:[De(o,/:(plac\w+)/,st+"input-$1")]})),xo(as(r,{props:[o]})),zm(r,{props:sE(t,s)});break}return""})}}var Yx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pn={},zo=typeof process<"u"&&Pn!==void 0&&(Pn.REACT_APP_SC_ATTR||Pn.SC_ATTR)||"data-styled",N1="active",O1="data-styled-version",Uf="6.1.19",Og=`/*!sc*/
`,hf=typeof window<"u"&&typeof document<"u",Qx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Pn!==void 0&&Pn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pn.REACT_APP_SC_DISABLE_SPEEDY!==""?Pn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Pn!==void 0&&Pn.SC_DISABLE_SPEEDY!==void 0&&Pn.SC_DISABLE_SPEEDY!==""&&Pn.SC_DISABLE_SPEEDY!=="false"&&Pn.SC_DISABLE_SPEEDY),Kx={},zf=Object.freeze([]),qo=Object.freeze({});function k1(r,e,t){return t===void 0&&(t=qo),r.theme!==t.theme&&r.theme||e||t.theme}var M1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Xx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wx=/(^-|-$)/g;function lE(r){return r.replace(Xx,"-").replace(Wx,"")}var Zx=/(a)(d)/gi,kh=52,uE=function(r){return String.fromCharCode(r+(r>25?39:97))};function Hm(r){var e,t="";for(e=Math.abs(r);e>kh;e=e/kh|0)t=uE(e%kh)+t;return(uE(e%kh)+t).replace(Zx,"$1-$2")}var wm,P1=5381,Oo=function(r,e){for(var t=e.length;t;)r=33*r^e.charCodeAt(--t);return r},V1=function(r){return Oo(P1,r)};function L1(r){return Hm(V1(r)>>>0)}function Jx(r){return r.displayName||r.name||"Component"}function Sm(r){return typeof r=="string"&&!0}var j1=typeof Symbol=="function"&&Symbol.for,U1=j1?Symbol.for("react.memo"):60115,eI=j1?Symbol.for("react.forward_ref"):60112,tI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},z1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rI=((wm={})[eI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wm[U1]=z1,wm);function cE(r){return("type"in(e=r)&&e.type.$$typeof)===U1?z1:"$$typeof"in r?rI[r.$$typeof]:tI;var e}var iI=Object.defineProperty,sI=Object.getOwnPropertyNames,hE=Object.getOwnPropertySymbols,aI=Object.getOwnPropertyDescriptor,oI=Object.getPrototypeOf,fE=Object.prototype;function q1(r,e,t){if(typeof e!="string"){if(fE){var s=oI(e);s&&s!==fE&&q1(r,s,t)}var o=sI(e);hE&&(o=o.concat(hE(e)));for(var u=cE(r),h=cE(e),p=0;p<o.length;++p){var m=o[p];if(!(m in nI||t&&t[m]||h&&m in h||u&&m in u)){var g=aI(e,m);try{iI(r,m,g)}catch{}}}}return r}function Ea(r){return typeof r=="function"}function kg(r){return typeof r=="object"&&"styledComponentId"in r}function pa(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function Fm(r,e){if(r.length===0)return"";for(var t=r[0],s=1;s<r.length;s++)t+=r[s];return t}function Pu(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function $m(r,e,t){if(t===void 0&&(t=!1),!t&&!Pu(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)r[s]=$m(r[s],e[s]);else if(Pu(e))for(var s in e)r[s]=$m(r[s],e[s]);return r}function Mg(r,e){Object.defineProperty(r,"toString",{value:e})}function Ta(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var lI=function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},r.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,u=o;e>=u;)if((u<<=1)<0)throw Ta(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var h=o;h<u;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(e+1),m=(h=0,t.length);h<m;h++)this.tag.insertRule(p,t[h])&&(this.groupSizes[e]++,p++)},r.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),o=s+t;this.groupSizes[e]=0;for(var u=s;u<o;u++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),u=o+s,h=o;h<u;h++)t+="".concat(this.tag.getRule(h)).concat(Og);return t},r}(),Xh=new Map,ff=new Map,Wh=1,Mh=function(r){if(Xh.has(r))return Xh.get(r);for(;ff.has(Wh);)Wh++;var e=Wh++;return Xh.set(r,e),ff.set(e,r),e},uI=function(r,e){Wh=e+1,Xh.set(r,e),ff.set(e,r)},cI="style[".concat(zo,"][").concat(O1,'="').concat(Uf,'"]'),hI=new RegExp("^".concat(zo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fI=function(r,e,t){for(var s,o=t.split(","),u=0,h=o.length;u<h;u++)(s=o[u])&&r.registerName(e,s)},dI=function(r,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(Og),o=[],u=0,h=s.length;u<h;u++){var p=s[u].trim();if(p){var m=p.match(hI);if(m){var g=0|parseInt(m[1],10),E=m[2];g!==0&&(uI(E,g),fI(r,E,m[3]),r.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},dE=function(r){for(var e=document.querySelectorAll(cI),t=0,s=e.length;t<s;t++){var o=e[t];o&&o.getAttribute(zo)!==N1&&(dI(r,o),o.parentNode&&o.parentNode.removeChild(o))}};function pI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var B1=function(r){var e=document.head,t=r||e,s=document.createElement("style"),o=function(p){var m=Array.from(p.querySelectorAll("style[".concat(zo,"]")));return m[m.length-1]}(t),u=o!==void 0?o.nextSibling:null;s.setAttribute(zo,N1),s.setAttribute(O1,Uf);var h=pI();return h&&s.setAttribute("nonce",h),t.insertBefore(s,u),s},mI=function(){function r(e){this.element=B1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,o=0,u=s.length;o<u;o++){var h=s[o];if(h.ownerNode===t)return h}throw Ta(17)}(this.element),this.length=0}return r.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},r}(),gI=function(){function r(e){this.element=B1(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r}(),yI=function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r}(),pE=hf,_I={isServer:!hf,useCSSOMInjection:!Qx},df=function(){function r(e,t,s){e===void 0&&(e=qo),t===void 0&&(t={});var o=this;this.options=Qt(Qt({},_I),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&hf&&pE&&(pE=!1,dE(this)),Mg(this,function(){return function(u){for(var h=u.getTag(),p=h.length,m="",g=function(w){var b=function($){return ff.get($)}(w);if(b===void 0)return"continue";var I=u.names.get(b),P=h.getGroup(w);if(I===void 0||!I.size||P.length===0)return"continue";var H="".concat(zo,".g").concat(w,'[id="').concat(b,'"]'),z="";I!==void 0&&I.forEach(function($){$.length>0&&(z+="".concat($,","))}),m+="".concat(P).concat(H,'{content:"').concat(z,'"}').concat(Og)},E=0;E<p;E++)g(E);return m}(o)})}return r.registerId=function(e){return Mh(e)},r.prototype.rehydrate=function(){!this.server&&hf&&dE(this)},r.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new r(Qt(Qt({},this.options),e),this.gs,t&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,o=t.target;return t.isServer?new yI(o):s?new mI(o):new gI(o)}(this.options),new lI(e)));var e},r.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},r.prototype.registerName=function(e,t){if(Mh(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},r.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(Mh(e),s)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(Mh(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r}(),vI=/&/g,EI=/^\s*\/\/.*$/gm;function H1(r,e){return r.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=H1(t.children,e)),t})}function TI(r){var e,t,s,o=qo,u=o.options,h=u===void 0?qo:u,p=o.plugins,m=p===void 0?zf:p,g=function(b,I,P){return P.startsWith(t)&&P.endsWith(t)&&P.replaceAll(t,"").length>0?".".concat(e):b},E=m.slice();E.push(function(b){b.type===Pf&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(vI,t).replace(s,g))}),h.prefix&&E.push(Gx),E.push(Hx);var w=function(b,I,P,H){I===void 0&&(I=""),P===void 0&&(P=""),H===void 0&&(H="&"),e=H,t=I,s=new RegExp("\\".concat(t,"\\b"),"g");var z=b.replace(EI,""),$=qx(P||I?"".concat(P," ").concat(I," { ").concat(z," }"):z);h.namespace&&($=H1($,h.namespace));var q=[];return cf($,Fx(E.concat($x(function(W){return q.push(W)})))),q};return w.hash=m.length?m.reduce(function(b,I){return I.name||Ta(15),Oo(b,I.name)},P1).toString():"",w}var bI=new df,Gm=TI(),F1=ur.createContext({shouldForwardProp:void 0,styleSheet:bI,stylis:Gm});F1.Consumer;ur.createContext(void 0);function Ym(){return Q.useContext(F1)}var wI=function(){function r(e,t){var s=this;this.inject=function(o,u){u===void 0&&(u=Gm);var h=s.name+u.hash;o.hasNameForId(s.id,h)||o.insertRules(s.id,h,u(s.rules,h,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Mg(this,function(){throw Ta(12,String(s.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=Gm),this.name+e.hash},r}(),SI=function(r){return r>="A"&&r<="Z"};function mE(r){for(var e="",t=0;t<r.length;t++){var s=r[t];if(t===1&&s==="-"&&r[0]==="-")return r;SI(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var $1=function(r){return r==null||r===!1||r===""},G1=function(r){var e,t,s=[];for(var o in r){var u=r[o];r.hasOwnProperty(o)&&!$1(u)&&(Array.isArray(u)&&u.isCss||Ea(u)?s.push("".concat(mE(o),":"),u,";"):Pu(u)?s.push.apply(s,Mu(Mu(["".concat(o," {")],G1(u),!1),["}"],!1)):s.push("".concat(mE(o),": ").concat((e=o,(t=u)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Yx||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function fs(r,e,t,s){if($1(r))return[];if(kg(r))return[".".concat(r.styledComponentId)];if(Ea(r)){if(!Ea(u=r)||u.prototype&&u.prototype.isReactComponent||!e)return[r];var o=r(e);return fs(o,e,t,s)}var u;return r instanceof wI?t?(r.inject(t,s),[r.getName(s)]):[r]:Pu(r)?G1(r):Array.isArray(r)?Array.prototype.concat.apply(zf,r.map(function(h){return fs(h,e,t,s)})):[r.toString()]}function Y1(r){for(var e=0;e<r.length;e+=1){var t=r[e];if(Ea(t)&&!kg(t))return!1}return!0}var AI=V1(Uf),RI=function(){function r(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Y1(e),this.componentId=t,this.baseHash=Oo(AI,t),this.baseStyle=s,df.registerId(t)}return r.prototype.generateAndInjectStyles=function(e,t,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=pa(o,this.staticRulesId);else{var u=Fm(fs(this.rules,e,t,s)),h=Hm(Oo(this.baseHash,u)>>>0);if(!t.hasNameForId(this.componentId,h)){var p=s(u,".".concat(h),void 0,this.componentId);t.insertRules(this.componentId,h,p)}o=pa(o,h),this.staticRulesId=h}else{for(var m=Oo(this.baseHash,s.hash),g="",E=0;E<this.rules.length;E++){var w=this.rules[E];if(typeof w=="string")g+=w;else if(w){var b=Fm(fs(w,e,t,s));m=Oo(m,b+E),g+=b}}if(g){var I=Hm(m>>>0);t.hasNameForId(this.componentId,I)||t.insertRules(this.componentId,I,s(g,".".concat(I),void 0,this.componentId)),o=pa(o,I)}}return o},r}(),Vu=ur.createContext(void 0);Vu.Consumer;function xI(r){var e=ur.useContext(Vu),t=Q.useMemo(function(){return function(s,o){if(!s)throw Ta(14);if(Ea(s)){var u=s(o);return u}if(Array.isArray(s)||typeof s!="object")throw Ta(8);return o?Qt(Qt({},o),s):s}(r.theme,e)},[r.theme,e]);return r.children?ur.createElement(Vu.Provider,{value:t},r.children):null}var Am={};function II(r,e,t){var s=kg(r),o=r,u=!Sm(r),h=e.attrs,p=h===void 0?zf:h,m=e.componentId,g=m===void 0?function(oe,le){var fe=typeof oe!="string"?"sc":lE(oe);Am[fe]=(Am[fe]||0)+1;var D="".concat(fe,"-").concat(L1(Uf+fe+Am[fe]));return le?"".concat(le,"-").concat(D):D}(e.displayName,e.parentComponentId):m,E=e.displayName,w=E===void 0?function(oe){return Sm(oe)?"styled.".concat(oe):"Styled(".concat(Jx(oe),")")}(r):E,b=e.displayName&&e.componentId?"".concat(lE(e.displayName),"-").concat(e.componentId):e.componentId||g,I=s&&o.attrs?o.attrs.concat(p).filter(Boolean):p,P=e.shouldForwardProp;if(s&&o.shouldForwardProp){var H=o.shouldForwardProp;if(e.shouldForwardProp){var z=e.shouldForwardProp;P=function(oe,le){return H(oe,le)&&z(oe,le)}}else P=H}var $=new RI(t,b,s?o.componentStyle:void 0);function q(oe,le){return function(fe,D,R){var x=fe.attrs,k=fe.componentStyle,V=fe.defaultProps,j=fe.foldedComponentIds,N=fe.styledComponentId,Dt=fe.target,at=ur.useContext(Vu),Z=Ym(),ce=fe.shouldForwardProp||Z.shouldForwardProp,me=k1(D,at,V)||qo,Ie=function(xe,ve,ct){for(var Be,jt=Qt(Qt({},ve),{className:void 0,theme:ct}),jn=0;jn<xe.length;jn+=1){var En=Ea(Be=xe[jn])?Be(jt):Be;for(var sn in En)jt[sn]=sn==="className"?pa(jt[sn],En[sn]):sn==="style"?Qt(Qt({},jt[sn]),En[sn]):En[sn]}return ve.className&&(jt.className=pa(jt.className,ve.className)),jt}(x,D,me),O=Ie.as||Dt,ie={};for(var ae in Ie)Ie[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&Ie.theme===me||(ae==="forwardedAs"?ie.as=Ie.forwardedAs:ce&&!ce(ae,O)||(ie[ae]=Ie[ae]));var se=function(xe,ve){var ct=Ym(),Be=xe.generateAndInjectStyles(ve,ct.styleSheet,ct.stylis);return Be}(k,Ie),ge=pa(j,N);return se&&(ge+=" "+se),Ie.className&&(ge+=" "+Ie.className),ie[Sm(O)&&!M1.has(O)?"class":"className"]=ge,R&&(ie.ref=R),Q.createElement(O,ie)}(W,oe,le)}q.displayName=w;var W=ur.forwardRef(q);return W.attrs=I,W.componentStyle=$,W.displayName=w,W.shouldForwardProp=P,W.foldedComponentIds=s?pa(o.foldedComponentIds,o.styledComponentId):"",W.styledComponentId=b,W.target=s?o.target:r,Object.defineProperty(W,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(oe){this._foldedDefaultProps=s?function(le){for(var fe=[],D=1;D<arguments.length;D++)fe[D-1]=arguments[D];for(var R=0,x=fe;R<x.length;R++)$m(le,x[R],!0);return le}({},o.defaultProps,oe):oe}}),Mg(W,function(){return".".concat(W.styledComponentId)}),u&&q1(W,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),W}function gE(r,e){for(var t=[r[0]],s=0,o=e.length;s<o;s+=1)t.push(e[s],r[s+1]);return t}var yE=function(r){return Object.assign(r,{isCss:!0})};function Q1(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Ea(r)||Pu(r))return yE(fs(gE(zf,Mu([r],e,!0))));var s=r;return e.length===0&&s.length===1&&typeof s[0]=="string"?fs(s):yE(fs(gE(s,e)))}function Qm(r,e,t){if(t===void 0&&(t=qo),!e)throw Ta(1,e);var s=function(o){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return r(e,t,Q1.apply(void 0,Mu([o],u,!1)))};return s.attrs=function(o){return Qm(r,e,Qt(Qt({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return Qm(r,e,Qt(Qt({},t),o))},s}var K1=function(r){return Qm(II,r)},G=K1;M1.forEach(function(r){G[r]=K1(r)});var CI=function(){function r(e,t){this.rules=e,this.componentId=t,this.isStatic=Y1(e),df.registerId(this.componentId+1)}return r.prototype.createStyles=function(e,t,s,o){var u=o(Fm(fs(this.rules,t,s,o)),""),h=this.componentId+e;s.insertRules(h,h,u)},r.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},r.prototype.renderStyles=function(e,t,s,o){e>2&&df.registerId(this.componentId+e),this.removeStyles(e,s),this.createStyles(e,t,s,o)},r}();function DI(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var s=Q1.apply(void 0,Mu([r],e,!1)),o="sc-global-".concat(L1(JSON.stringify(s))),u=new CI(s,o),h=function(m){var g=Ym(),E=ur.useContext(Vu),w=ur.useRef(g.styleSheet.allocateGSInstance(o)).current;return g.styleSheet.server&&p(w,m,g.styleSheet,E,g.stylis),ur.useLayoutEffect(function(){if(!g.styleSheet.server)return p(w,m,g.styleSheet,E,g.stylis),function(){return u.removeStyles(w,g.styleSheet)}},[w,m,g.styleSheet,E,g.stylis]),null};function p(m,g,E,w,b){if(u.isStatic)u.renderStyles(m,Kx,E,b);else{var I=Qt(Qt({},g),{theme:k1(g,w,h.defaultProps)});u.renderStyles(m,I,E,b)}}return ur.memo(h)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */const NI=()=>{};var _E={};/**
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
 */const X1=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},OI=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],p=r[t++],m=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},W1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,p=h?r[o+1]:0,m=o+2<r.length,g=m?r[o+2]:0,E=u>>2,w=(u&3)<<4|p>>4;let b=(p&15)<<2|g>>6,I=g&63;m||(I=64,h||(b=64)),s.push(t[E],t[w],t[b],t[I])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(X1(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):OI(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const g=o<r.length?t[r.charAt(o)]:64;++o;const w=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||p==null||g==null||w==null)throw new kI;const b=u<<2|p>>4;if(s.push(b),g!==64){const I=p<<4&240|g>>2;if(s.push(I),w!==64){const P=g<<6&192|w;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class kI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MI=function(r){const e=X1(r);return W1.encodeByteArray(e,!0)},pf=function(r){return MI(r).replace(/\./g,"")},Z1=function(r){try{return W1.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function PI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const VI=()=>PI().__FIREBASE_DEFAULTS__,LI=()=>{if(typeof process>"u"||typeof _E>"u")return;const r=_E.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},jI=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Z1(r[1]);return e&&JSON.parse(e)},qf=()=>{try{return NI()||VI()||LI()||jI()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},J1=r=>{var e,t;return(t=(e=qf())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},UI=r=>{const e=J1(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},eb=()=>{var r;return(r=qf())==null?void 0:r.config},tb=r=>{var e;return(e=qf())==null?void 0:e[`_${r}`]};/**
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
 */class zI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function el(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function nb(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function qI(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[pf(JSON.stringify(t)),pf(JSON.stringify(h)),""].join(".")}const xu={};function BI(){const r={prod:[],emulator:[]};for(const e of Object.keys(xu))xu[e]?r.emulator.push(e):r.prod.push(e);return r}function HI(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let vE=!1;function rb(r,e){if(typeof window>"u"||typeof document>"u"||!el(window.location.host)||xu[r]===e||xu[r]||vE)return;xu[r]=e;function t(b){return`__firebase__banner__${b}`}const s="__firebase__banner",u=BI().prod.length>0;function h(){const b=document.getElementById(s);b&&b.remove()}function p(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function m(b,I){b.setAttribute("width","24"),b.setAttribute("id",I),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function g(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{vE=!0,h()},b}function E(b,I){b.setAttribute("id",I),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function w(){const b=HI(s),I=t("text"),P=document.getElementById(I)||document.createElement("span"),H=t("learnmore"),z=document.getElementById(H)||document.createElement("a"),$=t("preprendIcon"),q=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const W=b.element;p(W),E(z,H);const oe=g();m(q,$),W.append(q,P,z,oe),document.body.appendChild(W)}u?(P.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function $I(){var e;const r=(e=qf())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YI(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function QI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KI(){const r=mn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function XI(){return!$I()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WI(){try{return typeof indexedDB=="object"}catch{return!1}}function ZI(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const JI="FirebaseError";class Ci extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=JI,Object.setPrototypeOf(this,Ci.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xu.prototype.create)}}class Xu{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?eC(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Ci(o,p,s)}}function eC(r,e){return r.replace(tC,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const tC=/\{\$([^}]+)}/g;function nC(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ba(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(EE(u)&&EE(h)){if(!ba(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function EE(r){return r!==null&&typeof r=="object"}/**
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
 */function Wu(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Eu(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Tu(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function rC(r,e){const t=new iC(r,e);return t.subscribe.bind(t)}class iC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");sC(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Rm),o.error===void 0&&(o.error=Rm),o.complete===void 0&&(o.complete=Rm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sC(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Rm(){}/**
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
 */function Ct(r){return r&&r._delegate?r._delegate:r}class wa{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const da="[DEFAULT]";/**
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
 */class aC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new zI;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lC(e))try{this.getOrInitializeService({instanceIdentifier:da})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=da){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=da){return this.instances.has(e)}getOptions(e=da){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:oC(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=da){return this.component?this.component.multipleInstances?e:da:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oC(r){return r===da?void 0:r}function lC(r){return r.instantiationMode==="EAGER"}/**
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
 */class uC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new aC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const cC={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},hC=Pe.INFO,fC={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},dC=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=fC[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pg{constructor(e){this.name=e,this._logLevel=hC,this._logHandler=dC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const pC=(r,e)=>e.some(t=>r instanceof t);let TE,bE;function mC(){return TE||(TE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gC(){return bE||(bE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ib=new WeakMap,Km=new WeakMap,sb=new WeakMap,xm=new WeakMap,Vg=new WeakMap;function yC(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(ds(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&ib.set(t,r)}).catch(()=>{}),Vg.set(e,r),e}function _C(r){if(Km.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Km.set(r,e)}let Xm={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Km.get(r);if(e==="objectStoreNames")return r.objectStoreNames||sb.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ds(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function vC(r){Xm=r(Xm)}function EC(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Im(this),e,...t);return sb.set(s,e.sort?e.sort():[e]),ds(s)}:gC().includes(r)?function(...e){return r.apply(Im(this),e),ds(ib.get(this))}:function(...e){return ds(r.apply(Im(this),e))}}function TC(r){return typeof r=="function"?EC(r):(r instanceof IDBTransaction&&_C(r),pC(r,mC())?new Proxy(r,Xm):r)}function ds(r){if(r instanceof IDBRequest)return yC(r);if(xm.has(r))return xm.get(r);const e=TC(r);return e!==r&&(xm.set(r,e),Vg.set(e,r)),e}const Im=r=>Vg.get(r);function bC(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),p=ds(h);return s&&h.addEventListener("upgradeneeded",m=>{s(ds(h.result),m.oldVersion,m.newVersion,ds(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const wC=["get","getKey","getAll","getAllKeys","count"],SC=["put","add","delete","clear"],Cm=new Map;function wE(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Cm.get(e))return Cm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=SC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||wC.includes(t)))return;const u=async function(h,...p){const m=this.transaction(h,o?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(p.shift())),(await Promise.all([g[t](...p),o&&m.done]))[0]};return Cm.set(e,u),u}vC(r=>({...r,get:(e,t,s)=>wE(e,t)||r.get(e,t,s),has:(e,t)=>!!wE(e,t)||r.has(e,t)}));/**
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
 */class AC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(RC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function RC(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wm="@firebase/app",SE="0.14.0";/**
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
 */const Ai=new Pg("@firebase/app"),xC="@firebase/app-compat",IC="@firebase/analytics-compat",CC="@firebase/analytics",DC="@firebase/app-check-compat",NC="@firebase/app-check",OC="@firebase/auth",kC="@firebase/auth-compat",MC="@firebase/database",PC="@firebase/data-connect",VC="@firebase/database-compat",LC="@firebase/functions",jC="@firebase/functions-compat",UC="@firebase/installations",zC="@firebase/installations-compat",qC="@firebase/messaging",BC="@firebase/messaging-compat",HC="@firebase/performance",FC="@firebase/performance-compat",$C="@firebase/remote-config",GC="@firebase/remote-config-compat",YC="@firebase/storage",QC="@firebase/storage-compat",KC="@firebase/firestore",XC="@firebase/ai",WC="@firebase/firestore-compat",ZC="firebase",JC="12.0.0";/**
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
 */const Zm="[DEFAULT]",eD={[Wm]:"fire-core",[xC]:"fire-core-compat",[CC]:"fire-analytics",[IC]:"fire-analytics-compat",[NC]:"fire-app-check",[DC]:"fire-app-check-compat",[OC]:"fire-auth",[kC]:"fire-auth-compat",[MC]:"fire-rtdb",[PC]:"fire-data-connect",[VC]:"fire-rtdb-compat",[LC]:"fire-fn",[jC]:"fire-fn-compat",[UC]:"fire-iid",[zC]:"fire-iid-compat",[qC]:"fire-fcm",[BC]:"fire-fcm-compat",[HC]:"fire-perf",[FC]:"fire-perf-compat",[$C]:"fire-rc",[GC]:"fire-rc-compat",[YC]:"fire-gcs",[QC]:"fire-gcs-compat",[KC]:"fire-fst",[WC]:"fire-fst-compat",[XC]:"fire-vertex","fire-js":"fire-js",[ZC]:"fire-js-all"};/**
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
 */const mf=new Map,tD=new Map,Jm=new Map;function AE(r,e){try{r.container.addComponent(e)}catch(t){Ai.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Bo(r){const e=r.name;if(Jm.has(e))return Ai.debug(`There were multiple attempts to register component ${e}.`),!1;Jm.set(e,r);for(const t of mf.values())AE(t,r);for(const t of tD.values())AE(t,r);return!0}function Lg(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Jn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const nD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ps=new Xu("app","Firebase",nD);/**
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
 */class rD{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wa("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ps.create("app-deleted",{appName:this._name})}}/**
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
 */const tl=JC;function ab(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Zm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ps.create("bad-app-name",{appName:String(o)});if(t||(t=eb()),!t)throw ps.create("no-options");const u=mf.get(o);if(u){if(ba(t,u.options)&&ba(s,u.config))return u;throw ps.create("duplicate-app",{appName:o})}const h=new uC(o);for(const m of Jm.values())h.addComponent(m);const p=new rD(t,s,h);return mf.set(o,p),p}function ob(r=Zm){const e=mf.get(r);if(!e&&r===Zm&&eb())return ab();if(!e)throw ps.create("no-app",{appName:r});return e}function ms(r,e,t){let s=eD[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ai.warn(h.join(" "));return}Bo(new wa(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const iD="firebase-heartbeat-database",sD=1,Lu="firebase-heartbeat-store";let Dm=null;function lb(){return Dm||(Dm=bC(iD,sD,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Lu)}catch(t){console.warn(t)}}}}).catch(r=>{throw ps.create("idb-open",{originalErrorMessage:r.message})})),Dm}async function aD(r){try{const t=(await lb()).transaction(Lu),s=await t.objectStore(Lu).get(ub(r));return await t.done,s}catch(e){if(e instanceof Ci)Ai.warn(e.message);else{const t=ps.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ai.warn(t.message)}}}async function RE(r,e){try{const s=(await lb()).transaction(Lu,"readwrite");await s.objectStore(Lu).put(e,ub(r)),await s.done}catch(t){if(t instanceof Ci)Ai.warn(t.message);else{const s=ps.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ai.warn(s.message)}}}function ub(r){return`${r.name}!${r.options.appId}`}/**
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
 */const oD=1024,lD=30;class uD{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hD(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=xE();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>lD){const h=fD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ai.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xE(),{heartbeatsToSend:s,unsentEntries:o}=cD(this._heartbeatsCache.heartbeats),u=pf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ai.warn(t),""}}}function xE(){return new Date().toISOString().substring(0,10)}function cD(r,e=oD){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),IE(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),IE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class hD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WI()?ZI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await aD(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return RE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return RE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function IE(r){return pf(JSON.stringify({version:2,heartbeats:r})).length}function fD(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function dD(r){Bo(new wa("platform-logger",e=>new AC(e),"PRIVATE")),Bo(new wa("heartbeat",e=>new uD(e),"PRIVATE")),ms(Wm,SE,r),ms(Wm,SE,"esm2020"),ms("fire-js","")}dD("");function cb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pD=cb,hb=new Xu("auth","Firebase",cb());/**
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
 */const gf=new Pg("@firebase/auth");function mD(r,...e){gf.logLevel<=Pe.WARN&&gf.warn(`Auth (${tl}): ${r}`,...e)}function Zh(r,...e){gf.logLevel<=Pe.ERROR&&gf.error(`Auth (${tl}): ${r}`,...e)}/**
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
 */function mr(r,...e){throw jg(r,...e)}function Lr(r,...e){return jg(r,...e)}function fb(r,e,t){const s={...pD(),[e]:t};return new Xu("auth","Firebase",s).create(e,{appName:r.name})}function Ti(r){return fb(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jg(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return hb.create(r,...e)}function be(r,e,...t){if(!r)throw jg(e,...t)}function _i(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Zh(e),new Error(e)}function Ri(r,e){r||_i(e)}/**
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
 */function eg(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function gD(){return CE()==="http:"||CE()==="https:"}function CE(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function yD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gD()||YI()||"connection"in navigator)?navigator.onLine:!0}function _D(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Zu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ri(t>e,"Short delay should be less than long delay!"),this.isMobile=FI()||QI()}get(){return yD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ug(r,e){Ri(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class db{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_i("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_i("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_i("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ED=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],TD=new Zu(3e4,6e4);function Rs(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Di(r,e,t,s,o={}){return pb(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=Wu({key:r.config.apiKey,...h}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:m,...u};return GI()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&el(r.emulatorConfig.host)&&(g.credentials="include"),db.fetch()(await mb(r,r.config.apiHost,t,p),g)})}async function pb(r,e,t){r._canInitEmulator=!1;const s={...vD,...e};try{const o=new wD(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Ph(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ph(r,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Ph(r,"email-already-in-use",h);if(m==="USER_DISABLED")throw Ph(r,"user-disabled",h);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw fb(r,E,g);mr(r,E)}}catch(o){if(o instanceof Ci)throw o;mr(r,"network-request-failed",{message:String(o)})}}async function Ju(r,e,t,s,o={}){const u=await Di(r,e,t,s,o);return"mfaPendingCredential"in u&&mr(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function mb(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?Ug(r.config,o):`${r.config.apiScheme}://${o}`;return ED.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function bD(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Lr(this.auth,"network-request-failed")),TD.get())})}}function Ph(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Lr(r,e,s);return o.customData._tokenResponse=t,o}function DE(r){return r!==void 0&&r.enterprise!==void 0}class SD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return bD(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function AD(r,e){return Di(r,"GET","/v2/recaptchaConfig",Rs(r,e))}/**
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
 */async function RD(r,e){return Di(r,"POST","/v1/accounts:delete",e)}async function yf(r,e){return Di(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Iu(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xD(r,e=!1){const t=Ct(r),s=await t.getIdToken(e),o=zg(s);be(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Iu(Nm(o.auth_time)),issuedAtTime:Iu(Nm(o.iat)),expirationTime:Iu(Nm(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Nm(r){return Number(r)*1e3}function zg(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Zh("JWT malformed, contained fewer than 3 sections"),null;try{const o=Z1(t);return o?JSON.parse(o):(Zh("Failed to decode base64 JWT payload"),null)}catch(o){return Zh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function NE(r){const e=zg(r);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ho(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ci&&ID(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function ID({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class CD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Iu(this.lastLoginAt),this.creationTime=Iu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _f(r){var w;const e=r.auth,t=await r.getIdToken(),s=await Ho(r,yf(e,{idToken:t}));be(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(w=o.providerUserInfo)!=null&&w.length?gb(o.providerUserInfo):[],h=ND(r.providerData,u),p=r.isAnonymous,m=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),g=p?m:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new tg(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(r,E)}async function DD(r){const e=Ct(r);await _f(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ND(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function gb(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function OD(r,e){const t=await pb(r,{},async()=>{const s=Wu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await mb(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:s};return r.emulatorConfig&&el(r.emulatorConfig.host)&&(m.credentials="include"),db.fetch()(h,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kD(r,e){return Di(r,"POST","/v2/accounts:revokeToken",Rs(r,e))}/**
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
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):NE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){be(e.length!==0,"internal-error");const t=NE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await OD(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Mo;return s&&(be(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(be(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(be(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return _i("not implemented")}}/**
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
 */function ss(r,e){be(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class cr{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new CD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new tg(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ho(this,this.stsTokenManager.getToken(this.auth,e));return be(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xD(this,e)}reload(){return DD(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new cr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await _f(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jn(this.auth.app))return Promise.reject(Ti(this.auth));const e=await this.getIdToken();return await Ho(this,RD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,p=t.tenantId??void 0,m=t._redirectEventId??void 0,g=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:w,emailVerified:b,isAnonymous:I,providerData:P,stsTokenManager:H}=t;be(w&&H,e,"internal-error");const z=Mo.fromJSON(this.name,H);be(typeof w=="string",e,"internal-error"),ss(s,e.name),ss(o,e.name),be(typeof b=="boolean",e,"internal-error"),be(typeof I=="boolean",e,"internal-error"),ss(u,e.name),ss(h,e.name),ss(p,e.name),ss(m,e.name),ss(g,e.name),ss(E,e.name);const $=new cr({uid:w,auth:e,email:o,emailVerified:b,displayName:s,isAnonymous:I,photoURL:h,phoneNumber:u,tenantId:p,stsTokenManager:z,createdAt:g,lastLoginAt:E});return P&&Array.isArray(P)&&($.providerData=P.map(q=>({...q}))),m&&($._redirectEventId=m),$}static async _fromIdTokenResponse(e,t,s=!1){const o=new Mo;o.updateFromServerResponse(t);const u=new cr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await _f(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];be(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?gb(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new Mo;p.updateFromIdToken(s);const m=new cr({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new tg(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
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
 */const OE=new Map;function vi(r){Ri(r instanceof Function,"Expected a class definition");let e=OE.get(r);return e?(Ri(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,OE.set(r,e),e)}/**
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
 */class yb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yb.type="NONE";const kE=yb;/**
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
 */function Jh(r,e,t){return`firebase:${r}:${e}:${t}`}class Po{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Jh(this.userKey,o.apiKey,u),this.fullPersistenceKey=Jh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await yf(this.auth,{idToken:e}).catch(()=>{});return t?cr._fromGetAccountInfoResponse(this.auth,t,e):null}return cr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Po(vi(kE),e,s);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||vi(kE);const h=Jh(s,e.config.apiKey,e.name);let p=null;for(const g of t)try{const E=await g._get(h);if(E){let w;if(typeof E=="string"){const b=await yf(e,{idToken:E}).catch(()=>{});if(!b)break;w=await cr._fromGetAccountInfoResponse(e,b,E)}else w=cr._fromJSON(e,E);g!==u&&(p=w),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new Po(u,e,s):(u=m[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new Po(u,e,s))}}/**
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
 */function ME(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_b(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wb(e))return"Blackberry";if(Sb(e))return"Webos";if(vb(e))return"Safari";if((e.includes("chrome/")||Eb(e))&&!e.includes("edge/"))return"Chrome";if(bb(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function _b(r=mn()){return/firefox\//i.test(r)}function vb(r=mn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Eb(r=mn()){return/crios\//i.test(r)}function Tb(r=mn()){return/iemobile/i.test(r)}function bb(r=mn()){return/android/i.test(r)}function wb(r=mn()){return/blackberry/i.test(r)}function Sb(r=mn()){return/webos/i.test(r)}function qg(r=mn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function MD(r=mn()){var e;return qg(r)&&!!((e=window.navigator)!=null&&e.standalone)}function PD(){return KI()&&document.documentMode===10}function Ab(r=mn()){return qg(r)||bb(r)||Sb(r)||wb(r)||/windows phone/i.test(r)||Tb(r)}/**
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
 */function Rb(r,e=[]){let t;switch(r){case"Browser":t=ME(mn());break;case"Worker":t=`${ME(mn())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${tl}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class VD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,p)=>{try{const m=e(u);h(m)}catch(m){p(m)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function LD(r,e={}){return Di(r,"GET","/v2/passwordPolicy",Rs(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const jD=6;class UD{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??jD,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class zD{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new PE(this),this.idTokenSubscription=new PE(this),this.beforeStateQueue=new VD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vi(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Po.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yf(this,{idToken:e}),s=await cr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Jn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,p=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===p)&&(m!=null&&m.user)&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _f(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_D()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jn(this.app))return Promise.reject(Ti(this));const t=e?Ct(e):null;return t&&be(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jn(this.app)?Promise.reject(Ti(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jn(this.app)?Promise.reject(Ti(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LD(this),t=new UD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xu("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await kD(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vi(e)||this._popupRedirectResolver;be(t,this,"argument-error"),this.redirectPersistenceManager=await Po.create(this,[vi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&mD(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Na(r){return Ct(r)}class PE{constructor(e){this.auth=e,this.observer=null,this.addObserver=rC(t=>this.observer=t)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qD(r){Bf=r}function xb(r){return Bf.loadJS(r)}function BD(){return Bf.recaptchaEnterpriseScript}function HD(){return Bf.gapiScript}function FD(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class $D{constructor(){this.enterprise=new GD}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class GD{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const YD="recaptcha-enterprise",Ib="NO_RECAPTCHA";class QD{constructor(e){this.type=YD,this.auth=Na(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{AD(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new SD(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(m=>{p(m)})})}function o(u,h,p){const m=window.grecaptcha;DE(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(g=>{h(g)}).catch(()=>{h(Ib)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $D().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!t&&DE(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=BD();m.length!==0&&(m+=p),xb(m).then(()=>{o(p,u,h)}).catch(g=>{h(g)})}}).catch(p=>{h(p)})})}}async function VE(r,e,t,s=!1,o=!1){const u=new QD(r);let h;if(o)h=Ib;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function ng(r,e,t,s,o){var u;if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await VE(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await VE(r,e,t,t==="getOobCode");return s(r,p)}else return Promise.reject(h)})}/**
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
 */function KD(r,e){const t=Lg(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ba(u,e??{}))return o;mr(o,"already-initialized")}return t.initialize({options:e})}function XD(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(vi);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function WD(r,e,t){const s=Na(r);be(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Cb(e),{host:h,port:p}=ZD(e),m=p===null?"":`:${p}`,g={url:`${u}//${h}${m}/`},E=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){be(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),be(ba(g,s.config.emulator)&&ba(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,el(h)?(nb(`${u}//${h}${m}`),rb("Auth",!0)):JD()}function Cb(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function ZD(r){const e=Cb(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:LE(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:LE(h)}}}function LE(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function JD(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Bg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _i("not implemented")}_getIdTokenResponse(e){return _i("not implemented")}_linkToIdToken(e,t){return _i("not implemented")}_getReauthenticationResolver(e){return _i("not implemented")}}async function e2(r,e){return Di(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function t2(r,e){return Ju(r,"POST","/v1/accounts:signInWithPassword",Rs(r,e))}/**
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
 */async function n2(r,e){return Ju(r,"POST","/v1/accounts:signInWithEmailLink",Rs(r,e))}async function r2(r,e){return Ju(r,"POST","/v1/accounts:signInWithEmailLink",Rs(r,e))}/**
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
 */class ju extends Bg{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ju(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ju(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ng(e,t,"signInWithPassword",t2);case"emailLink":return n2(e,{email:this._email,oobCode:this._password});default:mr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ng(e,s,"signUpPassword",e2);case"emailLink":return r2(e,{idToken:t,email:this._email,oobCode:this._password});default:mr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vo(r,e){return Ju(r,"POST","/v1/accounts:signInWithIdp",Rs(r,e))}/**
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
 */const i2="http://localhost";class Sa extends Bg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Sa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new Sa(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Vo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Vo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vo(e,t)}buildRequest(){const e={requestUri:i2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wu(t)}return e}}/**
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
 */function s2(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function a2(r){const e=Eu(Tu(r)).link,t=e?Eu(Tu(e)).deep_link_id:null,s=Eu(Tu(r)).deep_link_id;return(s?Eu(Tu(s)).link:null)||s||t||e||r}class Hg{constructor(e){const t=Eu(Tu(e)),s=t.apiKey??null,o=t.oobCode??null,u=s2(t.mode??null);be(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=a2(e);try{return new Hg(t)}catch{return null}}}/**
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
 */class nl{constructor(){this.providerId=nl.PROVIDER_ID}static credential(e,t){return ju._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Hg.parseLink(t);return be(s,"argument-error"),ju._fromEmailAndCode(e,s.code,s.tenantId)}}nl.PROVIDER_ID="password";nl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Db{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ec extends Db{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class os extends ec{constructor(){super("facebook.com")}static credential(e){return Sa._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return os.credential(e.oauthAccessToken)}catch{return null}}}os.FACEBOOK_SIGN_IN_METHOD="facebook.com";os.PROVIDER_ID="facebook.com";/**
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
 */class ls extends ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Sa._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ls.credential(t,s)}catch{return null}}}ls.GOOGLE_SIGN_IN_METHOD="google.com";ls.PROVIDER_ID="google.com";/**
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
 */class us extends ec{constructor(){super("github.com")}static credential(e){return Sa._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.GITHUB_SIGN_IN_METHOD="github.com";us.PROVIDER_ID="github.com";/**
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
 */class cs extends ec{constructor(){super("twitter.com")}static credential(e,t){return Sa._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return cs.credential(t,s)}catch{return null}}}cs.TWITTER_SIGN_IN_METHOD="twitter.com";cs.PROVIDER_ID="twitter.com";/**
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
 */async function o2(r,e){return Ju(r,"POST","/v1/accounts:signUp",Rs(r,e))}/**
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
 */class Aa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await cr._fromIdTokenResponse(e,s,o),h=jE(s);return new Aa({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=jE(s);return new Aa({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function jE(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class vf extends Ci{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,vf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new vf(e,t,s,o)}}function Nb(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?vf._fromErrorAndOperation(r,u,e,s):u})}async function l2(r,e,t=!1){const s=await Ho(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Aa._forOperation(r,"link",s)}/**
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
 */async function u2(r,e,t=!1){const{auth:s}=r;if(Jn(s.app))return Promise.reject(Ti(s));const o="reauthenticate";try{const u=await Ho(r,Nb(s,o,e,r),t);be(u.idToken,s,"internal-error");const h=zg(u.idToken);be(h,s,"internal-error");const{sub:p}=h;return be(r.uid===p,s,"user-mismatch"),Aa._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&mr(s,"user-mismatch"),u}}/**
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
 */async function Ob(r,e,t=!1){if(Jn(r.app))return Promise.reject(Ti(r));const s="signIn",o=await Nb(r,s,e),u=await Aa._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function c2(r,e){return Ob(Na(r),e)}/**
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
 */async function kb(r){const e=Na(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function h2(r,e,t){if(Jn(r.app))return Promise.reject(Ti(r));const s=Na(r),h=await ng(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",o2).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&kb(r),m}),p=await Aa._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function f2(r,e,t){return Jn(r.app)?Promise.reject(Ti(r)):c2(Ct(r),nl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&kb(r),s})}/**
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
 */async function d2(r,e){return Di(r,"POST","/v1/accounts:update",e)}/**
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
 */async function p2(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Ct(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await Ho(s,d2(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const p=s.providerData.find(({providerId:m})=>m==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function m2(r,e,t,s){return Ct(r).onIdTokenChanged(e,t,s)}function g2(r,e,t){return Ct(r).beforeAuthStateChanged(e,t)}function Hf(r,e,t,s){return Ct(r).onAuthStateChanged(e,t,s)}function y2(r){return Ct(r).signOut()}const Ef="__sak";/**
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
 */class Mb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ef,"1"),this.storage.removeItem(Ef),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _2=1e3,v2=10;class Pb extends Mb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ab(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,m)=>{this.notifyListeners(h,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);PD()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,v2):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},_2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pb.type="LOCAL";const E2=Pb;/**
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
 */class Vb extends Mb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vb.type="SESSION";const Lb=Vb;/**
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
 */function T2(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ff{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Ff(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async g=>g(t.origin,u)),m=await T2(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ff.receivers=[];/**
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
 */function Fg(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class b2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,m)=>{const g=Fg("",20);o.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(w){const b=w;if(b.data.eventId===g)switch(b.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(b.data.response);break;default:clearTimeout(E),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function jr(){return window}function w2(r){jr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function jb(){return typeof jr().WorkerGlobalScope<"u"&&typeof jr().importScripts=="function"}async function S2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function A2(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function R2(){return jb()?self:null}/**
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
 */const Ub="firebaseLocalStorageDb",x2=1,Tf="firebaseLocalStorage",zb="fbase_key";class tc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $f(r,e){return r.transaction([Tf],e?"readwrite":"readonly").objectStore(Tf)}function I2(){const r=indexedDB.deleteDatabase(Ub);return new tc(r).toPromise()}function rg(){const r=indexedDB.open(Ub,x2);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Tf,{keyPath:zb})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Tf)?e(s):(s.close(),await I2(),e(await rg()))})})}async function UE(r,e,t){const s=$f(r,!0).put({[zb]:e,value:t});return new tc(s).toPromise()}async function C2(r,e){const t=$f(r,!1).get(e),s=await new tc(t).toPromise();return s===void 0?null:s.value}function zE(r,e){const t=$f(r,!0).delete(e);return new tc(t).toPromise()}const D2=800,N2=3;class qb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>N2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ff._getInstance(R2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await S2(),!this.activeServiceWorker)return;this.sender=new b2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||A2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rg();return await UE(e,Ef,"1"),await zE(e,Ef),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>UE(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>C2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=$f(o,!1).getAll();return new tc(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qb.type="LOCAL";const O2=qb;new Zu(3e4,6e4);/**
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
 */function k2(r,e){return e?vi(e):(be(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class $g extends Bg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function M2(r){return Ob(r.auth,new $g(r),r.bypassAuthState)}function P2(r){const{auth:e,user:t}=r;return be(t,e,"internal-error"),u2(t,new $g(r),r.bypassAuthState)}async function V2(r){const{auth:e,user:t}=r;return be(t,e,"internal-error"),l2(t,new $g(r),r.bypassAuthState)}/**
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
 */class Bb{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M2;case"linkViaPopup":case"linkViaRedirect":return V2;case"reauthViaPopup":case"reauthViaRedirect":return P2;default:mr(this.auth,"internal-error")}}resolve(e){Ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const L2=new Zu(2e3,1e4);class ko extends Bb{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ko.currentPopupAction&&ko.currentPopupAction.cancel(),ko.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){Ri(this.filter.length===1,"Popup operations only handle one event");const e=Fg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Lr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Lr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ko.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,L2.get())};e()}}ko.currentPopupAction=null;/**
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
 */const j2="pendingRedirect",ef=new Map;class U2 extends Bb{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ef.get(this.auth._key());if(!e){try{const s=await z2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ef.set(this.auth._key(),e)}return this.bypassAuthState||ef.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z2(r,e){const t=H2(e),s=B2(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function q2(r,e){ef.set(r._key(),e)}function B2(r){return vi(r._redirectPersistence)}function H2(r){return Jh(j2,r.config.apiKey,r.name)}async function F2(r,e,t=!1){if(Jn(r.app))return Promise.reject(Ti(r));const s=Na(r),o=k2(s,e),h=await new U2(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const $2=600*1e3;class G2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Hb(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Lr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$2&&this.cachedEventUids.clear(),this.cachedEventUids.has(qE(e))}saveEventToCache(e){this.cachedEventUids.add(qE(e)),this.lastProcessedEventTime=Date.now()}}function qE(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Hb({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y2(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hb(r);default:return!1}}/**
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
 */async function Q2(r,e={}){return Di(r,"GET","/v1/projects",e)}/**
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
 */const K2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,X2=/^https?/;async function W2(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Q2(r);for(const t of e)try{if(Z2(t))return}catch{}mr(r,"unauthorized-domain")}function Z2(r){const e=eg(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!X2.test(t))return!1;if(K2.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const J2=new Zu(3e4,6e4);function BE(){const r=jr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function eN(r){return new Promise((e,t)=>{var o,u,h;function s(){BE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{BE(),t(Lr(r,"network-request-failed"))},timeout:J2.get()})}if((u=(o=jr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=jr().gapi)!=null&&h.load)s();else{const p=FD("iframefcb");return jr()[p]=()=>{gapi.load?s():t(Lr(r,"network-request-failed"))},xb(`${HD()}?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw tf=null,e})}let tf=null;function tN(r){return tf=tf||eN(r),tf}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const nN=new Zu(5e3,15e3),rN="__/auth/iframe",iN="emulator/auth/iframe",sN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oN(r){const e=r.config;be(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ug(e,iN):`https://${r.config.authDomain}/${rN}`,s={apiKey:e.apiKey,appName:r.name,v:tl},o=aN.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Wu(s).slice(1)}`}async function lN(r){const e=await tN(r),t=jr().gapi;return be(t,r,"internal-error"),e.open({where:document.body,url:oN(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sN,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Lr(r,"network-request-failed"),p=jr().setTimeout(()=>{u(h)},nN.get());function m(){jr().clearTimeout(p),o(s)}s.ping(m).then(m,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const uN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cN=500,hN=600,fN="_blank",dN="http://localhost";class HE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pN(r,e,t,s=cN,o=hN){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m={...uN,width:s.toString(),height:o.toString(),top:u,left:h},g=mn().toLowerCase();t&&(p=Eb(g)?fN:t),_b(g)&&(e=e||dN,m.scrollbars="yes");const E=Object.entries(m).reduce((b,[I,P])=>`${b}${I}=${P},`,"");if(MD(g)&&p!=="_self")return mN(e||"",p),new HE(null);const w=window.open(e||"",p,E);be(w,r,"popup-blocked");try{w.focus()}catch{}return new HE(w)}function mN(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const gN="__/auth/handler",yN="emulator/auth/handler",_N=encodeURIComponent("fac");async function FE(r,e,t,s,o,u){be(r.config.authDomain,r,"auth-domain-config-required"),be(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:tl,eventId:o};if(e instanceof Db){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",nC(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,w]of Object.entries({}))h[E]=w}if(e instanceof ec){const E=e.getScopes().filter(w=>w!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const m=await r._getAppCheckToken(),g=m?`#${_N}=${encodeURIComponent(m)}`:"";return`${vN(r)}?${Wu(p).slice(1)}${g}`}function vN({config:r}){return r.emulator?Ug(r,yN):`https://${r.authDomain}/${gN}`}/**
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
 */const Om="webStorageSupport";class EN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lb,this._completeRedirectFn=F2,this._overrideRedirectResult=q2}async _openPopup(e,t,s,o){var h;Ri((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await FE(e,t,s,eg(),o);return pN(e,u,Fg())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await FE(e,t,s,eg(),o);return w2(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ri(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await lN(e),s=new G2(e);return t.register("authEvent",o=>(be(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Om,{type:Om},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[Om];u!==void 0&&t(!!u),mr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=W2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ab()||vb()||qg()}}const TN=EN;var $E="@firebase/auth",GE="1.11.0";/**
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
 */class bN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wN(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SN(r){Bo(new wa("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;be(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rb(r)},g=new zD(s,o,u,m);return XD(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Bo(new wa("auth-internal",e=>{const t=Na(e.getProvider("auth").getImmediate());return(s=>new bN(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ms($E,GE,wN(r)),ms($E,GE,"esm2020")}/**
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
 */const AN=300,RN=tb("authIdTokenMaxAge")||AN;let YE=null;const xN=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>RN)return;const o=t==null?void 0:t.token;YE!==o&&(YE=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function IN(r=ob()){const e=Lg(r,"auth");if(e.isInitialized())return e.getImmediate();const t=KD(r,{popupRedirectResolver:TN,persistence:[O2,E2,Lb]}),s=tb("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=xN(u.toString());g2(t,h,()=>h(t.currentUser)),m2(t,p=>h(p))}}const o=J1("auth");return o&&WD(t,`http://${o}`),t}function CN(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}qD({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Lr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",CN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SN("Browser");var DN="firebase",NN="12.0.0";/**
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
 */ms(DN,NN,"app");var QE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gs,Fb;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function x(){}x.prototype=R.prototype,D.D=R.prototype,D.prototype=new x,D.prototype.constructor=D,D.C=function(k,V,j){for(var N=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)N[Dt-2]=arguments[Dt];return R.prototype[V].apply(k,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,R,x){x||(x=0);var k=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)k[V]=R.charCodeAt(x++)|R.charCodeAt(x++)<<8|R.charCodeAt(x++)<<16|R.charCodeAt(x++)<<24;else for(V=0;16>V;++V)k[V]=R[x++]|R[x++]<<8|R[x++]<<16|R[x++]<<24;R=D.g[0],x=D.g[1],V=D.g[2];var j=D.g[3],N=R+(j^x&(V^j))+k[0]+3614090360&4294967295;R=x+(N<<7&4294967295|N>>>25),N=j+(V^R&(x^V))+k[1]+3905402710&4294967295,j=R+(N<<12&4294967295|N>>>20),N=V+(x^j&(R^x))+k[2]+606105819&4294967295,V=j+(N<<17&4294967295|N>>>15),N=x+(R^V&(j^R))+k[3]+3250441966&4294967295,x=V+(N<<22&4294967295|N>>>10),N=R+(j^x&(V^j))+k[4]+4118548399&4294967295,R=x+(N<<7&4294967295|N>>>25),N=j+(V^R&(x^V))+k[5]+1200080426&4294967295,j=R+(N<<12&4294967295|N>>>20),N=V+(x^j&(R^x))+k[6]+2821735955&4294967295,V=j+(N<<17&4294967295|N>>>15),N=x+(R^V&(j^R))+k[7]+4249261313&4294967295,x=V+(N<<22&4294967295|N>>>10),N=R+(j^x&(V^j))+k[8]+1770035416&4294967295,R=x+(N<<7&4294967295|N>>>25),N=j+(V^R&(x^V))+k[9]+2336552879&4294967295,j=R+(N<<12&4294967295|N>>>20),N=V+(x^j&(R^x))+k[10]+4294925233&4294967295,V=j+(N<<17&4294967295|N>>>15),N=x+(R^V&(j^R))+k[11]+2304563134&4294967295,x=V+(N<<22&4294967295|N>>>10),N=R+(j^x&(V^j))+k[12]+1804603682&4294967295,R=x+(N<<7&4294967295|N>>>25),N=j+(V^R&(x^V))+k[13]+4254626195&4294967295,j=R+(N<<12&4294967295|N>>>20),N=V+(x^j&(R^x))+k[14]+2792965006&4294967295,V=j+(N<<17&4294967295|N>>>15),N=x+(R^V&(j^R))+k[15]+1236535329&4294967295,x=V+(N<<22&4294967295|N>>>10),N=R+(V^j&(x^V))+k[1]+4129170786&4294967295,R=x+(N<<5&4294967295|N>>>27),N=j+(x^V&(R^x))+k[6]+3225465664&4294967295,j=R+(N<<9&4294967295|N>>>23),N=V+(R^x&(j^R))+k[11]+643717713&4294967295,V=j+(N<<14&4294967295|N>>>18),N=x+(j^R&(V^j))+k[0]+3921069994&4294967295,x=V+(N<<20&4294967295|N>>>12),N=R+(V^j&(x^V))+k[5]+3593408605&4294967295,R=x+(N<<5&4294967295|N>>>27),N=j+(x^V&(R^x))+k[10]+38016083&4294967295,j=R+(N<<9&4294967295|N>>>23),N=V+(R^x&(j^R))+k[15]+3634488961&4294967295,V=j+(N<<14&4294967295|N>>>18),N=x+(j^R&(V^j))+k[4]+3889429448&4294967295,x=V+(N<<20&4294967295|N>>>12),N=R+(V^j&(x^V))+k[9]+568446438&4294967295,R=x+(N<<5&4294967295|N>>>27),N=j+(x^V&(R^x))+k[14]+3275163606&4294967295,j=R+(N<<9&4294967295|N>>>23),N=V+(R^x&(j^R))+k[3]+4107603335&4294967295,V=j+(N<<14&4294967295|N>>>18),N=x+(j^R&(V^j))+k[8]+1163531501&4294967295,x=V+(N<<20&4294967295|N>>>12),N=R+(V^j&(x^V))+k[13]+2850285829&4294967295,R=x+(N<<5&4294967295|N>>>27),N=j+(x^V&(R^x))+k[2]+4243563512&4294967295,j=R+(N<<9&4294967295|N>>>23),N=V+(R^x&(j^R))+k[7]+1735328473&4294967295,V=j+(N<<14&4294967295|N>>>18),N=x+(j^R&(V^j))+k[12]+2368359562&4294967295,x=V+(N<<20&4294967295|N>>>12),N=R+(x^V^j)+k[5]+4294588738&4294967295,R=x+(N<<4&4294967295|N>>>28),N=j+(R^x^V)+k[8]+2272392833&4294967295,j=R+(N<<11&4294967295|N>>>21),N=V+(j^R^x)+k[11]+1839030562&4294967295,V=j+(N<<16&4294967295|N>>>16),N=x+(V^j^R)+k[14]+4259657740&4294967295,x=V+(N<<23&4294967295|N>>>9),N=R+(x^V^j)+k[1]+2763975236&4294967295,R=x+(N<<4&4294967295|N>>>28),N=j+(R^x^V)+k[4]+1272893353&4294967295,j=R+(N<<11&4294967295|N>>>21),N=V+(j^R^x)+k[7]+4139469664&4294967295,V=j+(N<<16&4294967295|N>>>16),N=x+(V^j^R)+k[10]+3200236656&4294967295,x=V+(N<<23&4294967295|N>>>9),N=R+(x^V^j)+k[13]+681279174&4294967295,R=x+(N<<4&4294967295|N>>>28),N=j+(R^x^V)+k[0]+3936430074&4294967295,j=R+(N<<11&4294967295|N>>>21),N=V+(j^R^x)+k[3]+3572445317&4294967295,V=j+(N<<16&4294967295|N>>>16),N=x+(V^j^R)+k[6]+76029189&4294967295,x=V+(N<<23&4294967295|N>>>9),N=R+(x^V^j)+k[9]+3654602809&4294967295,R=x+(N<<4&4294967295|N>>>28),N=j+(R^x^V)+k[12]+3873151461&4294967295,j=R+(N<<11&4294967295|N>>>21),N=V+(j^R^x)+k[15]+530742520&4294967295,V=j+(N<<16&4294967295|N>>>16),N=x+(V^j^R)+k[2]+3299628645&4294967295,x=V+(N<<23&4294967295|N>>>9),N=R+(V^(x|~j))+k[0]+4096336452&4294967295,R=x+(N<<6&4294967295|N>>>26),N=j+(x^(R|~V))+k[7]+1126891415&4294967295,j=R+(N<<10&4294967295|N>>>22),N=V+(R^(j|~x))+k[14]+2878612391&4294967295,V=j+(N<<15&4294967295|N>>>17),N=x+(j^(V|~R))+k[5]+4237533241&4294967295,x=V+(N<<21&4294967295|N>>>11),N=R+(V^(x|~j))+k[12]+1700485571&4294967295,R=x+(N<<6&4294967295|N>>>26),N=j+(x^(R|~V))+k[3]+2399980690&4294967295,j=R+(N<<10&4294967295|N>>>22),N=V+(R^(j|~x))+k[10]+4293915773&4294967295,V=j+(N<<15&4294967295|N>>>17),N=x+(j^(V|~R))+k[1]+2240044497&4294967295,x=V+(N<<21&4294967295|N>>>11),N=R+(V^(x|~j))+k[8]+1873313359&4294967295,R=x+(N<<6&4294967295|N>>>26),N=j+(x^(R|~V))+k[15]+4264355552&4294967295,j=R+(N<<10&4294967295|N>>>22),N=V+(R^(j|~x))+k[6]+2734768916&4294967295,V=j+(N<<15&4294967295|N>>>17),N=x+(j^(V|~R))+k[13]+1309151649&4294967295,x=V+(N<<21&4294967295|N>>>11),N=R+(V^(x|~j))+k[4]+4149444226&4294967295,R=x+(N<<6&4294967295|N>>>26),N=j+(x^(R|~V))+k[11]+3174756917&4294967295,j=R+(N<<10&4294967295|N>>>22),N=V+(R^(j|~x))+k[2]+718787259&4294967295,V=j+(N<<15&4294967295|N>>>17),N=x+(j^(V|~R))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(V+(N<<21&4294967295|N>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+j&4294967295}s.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var x=R-this.blockSize,k=this.B,V=this.h,j=0;j<R;){if(V==0)for(;j<=x;)o(this,D,j),j+=this.blockSize;if(typeof D=="string"){for(;j<R;)if(k[V++]=D.charCodeAt(j++),V==this.blockSize){o(this,k),V=0;break}}else for(;j<R;)if(k[V++]=D[j++],V==this.blockSize){o(this,k),V=0;break}}this.h=V,this.o+=R},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var x=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=x&255,x/=256;for(this.u(D),D=Array(16),R=x=0;4>R;++R)for(var k=0;32>k;k+=8)D[x++]=this.g[R]>>>k&255;return D};function u(D,R){var x=p;return Object.prototype.hasOwnProperty.call(x,D)?x[D]:x[D]=R(D)}function h(D,R){this.h=R;for(var x=[],k=!0,V=D.length-1;0<=V;V--){var j=D[V]|0;k&&j==R||(x[V]=j,k=!1)}this.g=x}var p={};function m(D){return-128<=D&&128>D?u(D,function(R){return new h([R|0],0>R?-1:0)}):new h([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return w;if(0>D)return z(g(-D));for(var R=[],x=1,k=0;D>=x;k++)R[k]=D/x|0,x*=4294967296;return new h(R,0)}function E(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return z(E(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=g(Math.pow(R,8)),k=w,V=0;V<D.length;V+=8){var j=Math.min(8,D.length-V),N=parseInt(D.substring(V,V+j),R);8>j?(j=g(Math.pow(R,j)),k=k.j(j).add(g(N))):(k=k.j(x),k=k.add(g(N)))}return k}var w=m(0),b=m(1),I=m(16777216);r=h.prototype,r.m=function(){if(H(this))return-z(this).m();for(var D=0,R=1,x=0;x<this.g.length;x++){var k=this.i(x);D+=(0<=k?k:4294967296+k)*R,R*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(P(this))return"0";if(H(this))return"-"+z(this).toString(D);for(var R=g(Math.pow(D,6)),x=this,k="";;){var V=oe(x,R).g;x=$(x,V.j(R));var j=((0<x.g.length?x.g[0]:x.h)>>>0).toString(D);if(x=V,P(x))return j+k;for(;6>j.length;)j="0"+j;k=j+k}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function P(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function H(D){return D.h==-1}r.l=function(D){return D=$(this,D),H(D)?-1:P(D)?0:1};function z(D){for(var R=D.g.length,x=[],k=0;k<R;k++)x[k]=~D.g[k];return new h(x,~D.h).add(b)}r.abs=function(){return H(this)?z(this):this},r.add=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],k=0,V=0;V<=R;V++){var j=k+(this.i(V)&65535)+(D.i(V)&65535),N=(j>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);k=N>>>16,j&=65535,N&=65535,x[V]=N<<16|j}return new h(x,x[x.length-1]&-2147483648?-1:0)};function $(D,R){return D.add(z(R))}r.j=function(D){if(P(this)||P(D))return w;if(H(this))return H(D)?z(this).j(z(D)):z(z(this).j(D));if(H(D))return z(this.j(z(D)));if(0>this.l(I)&&0>D.l(I))return g(this.m()*D.m());for(var R=this.g.length+D.g.length,x=[],k=0;k<2*R;k++)x[k]=0;for(k=0;k<this.g.length;k++)for(var V=0;V<D.g.length;V++){var j=this.i(k)>>>16,N=this.i(k)&65535,Dt=D.i(V)>>>16,at=D.i(V)&65535;x[2*k+2*V]+=N*at,q(x,2*k+2*V),x[2*k+2*V+1]+=j*at,q(x,2*k+2*V+1),x[2*k+2*V+1]+=N*Dt,q(x,2*k+2*V+1),x[2*k+2*V+2]+=j*Dt,q(x,2*k+2*V+2)}for(k=0;k<R;k++)x[k]=x[2*k+1]<<16|x[2*k];for(k=R;k<2*R;k++)x[k]=0;return new h(x,0)};function q(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function W(D,R){this.g=D,this.h=R}function oe(D,R){if(P(R))throw Error("division by zero");if(P(D))return new W(w,w);if(H(D))return R=oe(z(D),R),new W(z(R.g),z(R.h));if(H(R))return R=oe(D,z(R)),new W(z(R.g),R.h);if(30<D.g.length){if(H(D)||H(R))throw Error("slowDivide_ only works with positive integers.");for(var x=b,k=R;0>=k.l(D);)x=le(x),k=le(k);var V=fe(x,1),j=fe(k,1);for(k=fe(k,2),x=fe(x,2);!P(k);){var N=j.add(k);0>=N.l(D)&&(V=V.add(x),j=N),k=fe(k,1),x=fe(x,1)}return R=$(D,V.j(R)),new W(V,R)}for(V=w;0<=D.l(R);){for(x=Math.max(1,Math.floor(D.m()/R.m())),k=Math.ceil(Math.log(x)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),j=g(x),N=j.j(R);H(N)||0<N.l(D);)x-=k,j=g(x),N=j.j(R);P(j)&&(j=b),V=V.add(j),D=$(D,N)}return new W(V,D)}r.A=function(D){return oe(this,D).h},r.and=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],k=0;k<R;k++)x[k]=this.i(k)&D.i(k);return new h(x,this.h&D.h)},r.or=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],k=0;k<R;k++)x[k]=this.i(k)|D.i(k);return new h(x,this.h|D.h)},r.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],k=0;k<R;k++)x[k]=this.i(k)^D.i(k);return new h(x,this.h^D.h)};function le(D){for(var R=D.g.length+1,x=[],k=0;k<R;k++)x[k]=D.i(k)<<1|D.i(k-1)>>>31;return new h(x,D.h)}function fe(D,R){var x=R>>5;R%=32;for(var k=D.g.length-x,V=[],j=0;j<k;j++)V[j]=0<R?D.i(j+x)>>>R|D.i(j+x+1)<<32-R:D.i(j+x);return new h(V,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Fb=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=E,gs=h}).apply(typeof QE<"u"?QE:typeof self<"u"?self:typeof window<"u"?window:{});var Vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $b,bu,Gb,nf,ig,Yb,Qb,Kb;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,v){return c==Array.prototype||c==Object.prototype||(c[y]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vh=="object"&&Vh];for(var y=0;y<c.length;++y){var v=c[y];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function o(c,y){if(y)e:{var v=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var U=c[A];if(!(U in v))break e;v=v[U]}c=c[c.length-1],A=v[c],y=y(A),y!=A&&y!=null&&e(v,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var v=0,A=!1,U={next:function(){if(!A&&v<c.length){var X=v++;return{value:y(X,c[X]),done:!1}}return A=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function m(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function E(c,y,v){return c.call.apply(c.bind,arguments)}function w(c,y,v){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,A),c.apply(y,U)}}return function(){return c.apply(y,arguments)}}function b(c,y,v){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:w,b.apply(null,arguments)}function I(c,y){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function P(c,y){function v(){}v.prototype=y.prototype,c.aa=y.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(A,U,X){for(var ue=Array(arguments.length-2),je=2;je<arguments.length;je++)ue[je-2]=arguments[je];return y.prototype[U].apply(A,ue)}}function H(c){const y=c.length;if(0<y){const v=Array(y);for(let A=0;A<y;A++)v[A]=c[A];return v}return[]}function z(c,y){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(m(A)){const U=c.length||0,X=A.length||0;c.length=U+X;for(let ue=0;ue<X;ue++)c[U+ue]=A[ue]}else c.push(A)}}class ${constructor(y,v){this.i=y,this.j=v,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function q(c){return/^[\s\xa0]*$/.test(c)}function W(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function oe(c){return oe[" "](c),c}oe[" "]=function(){};var le=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function fe(c,y,v){for(const A in c)y.call(v,c[A],A,c)}function D(c,y){for(const v in c)y.call(void 0,c[v],v,c)}function R(c){const y={};for(const v in c)y[v]=c[v];return y}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(c,y){let v,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(v in A)c[v]=A[v];for(let X=0;X<x.length;X++)v=x[X],Object.prototype.hasOwnProperty.call(A,v)&&(c[v]=A[v])}}function V(c){var y=1;c=c.split(":");const v=[];for(;0<y&&c.length;)v.push(c.shift()),y--;return c.length&&v.push(c.join(":")),v}function j(c){p.setTimeout(()=>{throw c},0)}function N(){var c=Ie;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Dt{constructor(){this.h=this.g=null}add(y,v){const A=at.get();A.set(y,v),this.h?this.h.next=A:this.g=A,this.h=A}}var at=new $(()=>new Z,c=>c.reset());class Z{constructor(){this.next=this.g=this.h=null}set(y,v){this.h=y,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,me=!1,Ie=new Dt,O=()=>{const c=p.Promise.resolve(void 0);ce=()=>{c.then(ie)}};var ie=()=>{for(var c;c=N();){try{c.h.call(c.g)}catch(v){j(v)}var y=at;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}me=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};p.addEventListener("test",v,y),p.removeEventListener("test",v,y)}catch{}return c}();function xe(c,y){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(le){e:{try{oe(y.nodeName);var U=!0;break e}catch{}U=!1}U||(y=null)}}else v=="mouseover"?y=c.fromElement:v=="mouseout"&&(y=c.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&xe.aa.h.call(this)}}P(xe,se);var ve={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),Be=0;function jt(c,y,v,A,U){this.listener=c,this.proxy=null,this.src=y,this.type=v,this.capture=!!A,this.ha=U,this.key=++Be,this.da=this.fa=!1}function jn(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function En(c){this.src=c,this.g={},this.h=0}En.prototype.add=function(c,y,v,A,U){var X=c.toString();c=this.g[X],c||(c=this.g[X]=[],this.h++);var ue=Ds(c,y,A,U);return-1<ue?(y=c[ue],v||(y.fa=!1)):(y=new jt(y,this.src,X,!!A,U),y.fa=v,c.push(y)),y};function sn(c,y){var v=y.type;if(v in c.g){var A=c.g[v],U=Array.prototype.indexOf.call(A,y,void 0),X;(X=0<=U)&&Array.prototype.splice.call(A,U,1),X&&(jn(y),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Ds(c,y,v,A){for(var U=0;U<c.length;++U){var X=c[U];if(!X.da&&X.listener==y&&X.capture==!!v&&X.ha==A)return U}return-1}var Ns="closure_lm_"+(1e6*Math.random()|0),ll={};function lc(c,y,v,A,U){if(Array.isArray(y)){for(var X=0;X<y.length;X++)lc(c,y[X],v,A,U);return null}return v=uc(v),c&&c[ct]?c.K(y,v,g(A)?!!A.capture:!1,U):Un(c,y,v,!1,A,U)}function Un(c,y,v,A,U,X){if(!y)throw Error("Invalid event type");var ue=g(U)?!!U.capture:!!U,je=Pa(c);if(je||(c[Ns]=je=new En(c)),v=je.add(y,v,A,ue,X),v.proxy)return v;if(A=pd(),v.proxy=A,A.src=c,A.listener=v,c.addEventListener)ge||(U=ue),U===void 0&&(U=!1),c.addEventListener(y.toString(),A,U);else if(c.attachEvent)c.attachEvent(Os(y.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function pd(){function c(v){return y.call(c.src,c.listener,v)}const y=md;return c}function ul(c,y,v,A,U){if(Array.isArray(y))for(var X=0;X<y.length;X++)ul(c,y[X],v,A,U);else A=g(A)?!!A.capture:!!A,v=uc(v),c&&c[ct]?(c=c.i,y=String(y).toString(),y in c.g&&(X=c.g[y],v=Ds(X,v,A,U),-1<v&&(jn(X[v]),Array.prototype.splice.call(X,v,1),X.length==0&&(delete c.g[y],c.h--)))):c&&(c=Pa(c))&&(y=c.g[y.toString()],c=-1,y&&(c=Ds(y,v,A,U)),(v=-1<c?y[c]:null)&&Ma(v))}function Ma(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[ct])sn(y.i,c);else{var v=c.type,A=c.proxy;y.removeEventListener?y.removeEventListener(v,A,c.capture):y.detachEvent?y.detachEvent(Os(v),A):y.addListener&&y.removeListener&&y.removeListener(A),(v=Pa(y))?(sn(v,c),v.h==0&&(v.src=null,y[Ns]=null)):jn(c)}}}function Os(c){return c in ll?ll[c]:ll[c]="on"+c}function md(c,y){if(c.da)c=!0;else{y=new xe(y,this);var v=c.listener,A=c.ha||c.src;c.fa&&Ma(c),c=v.call(A,y)}return c}function Pa(c){return c=c[Ns],c instanceof En?c:null}var cl="__closure_events_fn_"+(1e9*Math.random()>>>0);function uc(c){return typeof c=="function"?c:(c[cl]||(c[cl]=function(y){return c.handleEvent(y)}),c[cl])}function dt(){ae.call(this),this.i=new En(this),this.M=this,this.F=null}P(dt,ae),dt.prototype[ct]=!0,dt.prototype.removeEventListener=function(c,y,v,A){ul(this,c,y,v,A)};function Qe(c,y){var v,A=c.F;if(A)for(v=[];A;A=A.F)v.push(A);if(c=c.M,A=y.type||y,typeof y=="string")y=new se(y,c);else if(y instanceof se)y.target=y.target||c;else{var U=y;y=new se(A,c),k(y,U)}if(U=!0,v)for(var X=v.length-1;0<=X;X--){var ue=y.g=v[X];U=Rn(ue,A,!0,y)&&U}if(ue=y.g=c,U=Rn(ue,A,!0,y)&&U,U=Rn(ue,A,!1,y)&&U,v)for(X=0;X<v.length;X++)ue=y.g=v[X],U=Rn(ue,A,!1,y)&&U}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var v=c.g[y],A=0;A<v.length;A++)jn(v[A]);delete c.g[y],c.h--}}this.F=null},dt.prototype.K=function(c,y,v,A){return this.i.add(String(c),y,!1,v,A)},dt.prototype.L=function(c,y,v,A){return this.i.add(String(c),y,!0,v,A)};function Rn(c,y,v,A){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var U=!0,X=0;X<y.length;++X){var ue=y[X];if(ue&&!ue.da&&ue.capture==v){var je=ue.listener,Ot=ue.ha||ue.src;ue.fa&&sn(c.i,ue),U=je.call(Ot,A)!==!1&&U}}return U&&!A.defaultPrevented}function an(c,y,v){if(typeof c=="function")v&&(c=b(c,v));else if(c&&typeof c.handleEvent=="function")c=b(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:p.setTimeout(c,y||0)}function cc(c){c.g=an(()=>{c.g=null,c.i&&(c.i=!1,cc(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class gd extends ae{constructor(y,v){super(),this.m=y,this.l=v,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:cc(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ks(c){ae.call(this),this.h=c,this.g={}}P(ks,ae);var Ms=[];function Ps(c){fe(c.g,function(y,v){this.g.hasOwnProperty(v)&&Ma(y)},c),c.g={}}ks.prototype.N=function(){ks.aa.N.call(this),Ps(this)},ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nr=p.JSON.stringify,Va=p.JSON.parse,Vs=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function hl(){}hl.prototype.h=null;function fl(c){return c.h||(c.h=c.i())}function dl(){}var $r={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gr(){se.call(this,"d")}P(Gr,se);function pl(){se.call(this,"c")}P(pl,se);var _r={},ml=null;function Ni(){return ml=ml||new dt}_r.La="serverreachability";function La(c){se.call(this,_r.La,c)}P(La,se);function Oi(c){const y=Ni();Qe(y,new La(y))}_r.STAT_EVENT="statevent";function hc(c,y){se.call(this,_r.STAT_EVENT,c),this.stat=y}P(hc,se);function ot(c){const y=Ni();Qe(y,new hc(y,c))}_r.Ma="timingevent";function Nt(c,y){se.call(this,_r.Ma,c),this.size=y}P(Nt,se);function Tt(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},y)}function zn(){this.g=!0}zn.prototype.xa=function(){this.g=!1};function gl(c,y,v,A,U,X){c.info(function(){if(c.g)if(X)for(var ue="",je=X.split("&"),Ot=0;Ot<je.length;Ot++){var Ue=je[Ot].split("=");if(1<Ue.length){var zt=Ue[0];Ue=Ue[1];var kt=zt.split("_");ue=2<=kt.length&&kt[1]=="type"?ue+(zt+"="+Ue+"&"):ue+(zt+"=redacted&")}}else ue=null;else ue=X;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+y+`
`+v+`
`+ue})}function yd(c,y,v,A,U,X,ue){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+y+`
`+v+`
`+X+" "+ue})}function ki(c,y,v,A){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Ls(c,v)+(A?" "+A:"")})}function fc(c,y){c.info(function(){return"TIMEOUT: "+y})}zn.prototype.info=function(){};function Ls(c,y){if(!c.g)return y;if(!y)return null;try{var v=JSON.parse(y);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var A=v[c];if(!(2>A.length)){var U=A[1];if(Array.isArray(U)&&!(1>U.length)){var X=U[0];if(X!="noop"&&X!="stop"&&X!="close")for(var ue=1;ue<U.length;ue++)U[ue]=""}}}}return nr(v)}catch{return y}}var Mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vr;function Er(){}P(Er,hl),Er.prototype.g=function(){return new XMLHttpRequest},Er.prototype.i=function(){return{}},vr=new Er;function gn(c,y,v,A){this.j=c,this.i=y,this.l=v,this.R=A||1,this.U=new ks(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}var yl={},ja={};function rr(c,y,v){c.L=1,c.v=Bs(xn(y)),c.m=v,c.P=!0,Qr(c,null)}function Qr(c,y){c.F=Date.now(),js(c),c.A=xn(c.v);var v=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),wl(v.i,"t",A),c.C=0,v=c.j.J,c.h=new yt,c.g=Ic(c.j,v?y:null,!c.m),0<c.O&&(c.M=new gd(b(c.Y,c,c.g),c.O)),y=c.U,v=c.g,A=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(Ms[0]=U.toString()),U=Ms);for(var X=0;X<U.length;X++){var ue=lc(v,U[X],A||y.handleEvent,!1,y.h||y);if(!ue)break;y.g[ue.key]=ue}y=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),Oi(),gl(c.i,c.u,c.A,c.l,c.R,c.m)}gn.prototype.ca=function(c){c=c.target;const y=this.M;y&&Fn(c)==3?y.j():this.Y(c)},gn.prototype.Y=function(c){try{if(c==this.g)e:{const kt=Fn(this.g);var y=this.g.Ba();const ni=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||Ec(this.g)))){this.J||kt!=4||y==7||(y==8||0>=ni?Oi(3):Oi(2)),Pi(this);var v=this.g.Z();this.X=v;t:if(dc(this)){var A=Ec(this.g);c="";var U=A.length,X=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),Tr(this);var ue="";break t}this.h.i=new p.TextDecoder}for(y=0;y<U;y++)this.h.h=!0,c+=this.h.i.decode(A[y],{stream:!(X&&y==U-1)});A.length=0,this.h.g+=c,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=v==200,yd(this.i,this.u,this.A,this.l,this.R,kt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Ot=this.g;if((je=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(je)){var Ue=je;break t}}Ue=null}if(v=Ue)ki(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Us(this,v);else{this.o=!1,this.s=3,ot(12),Kt(this),Tr(this);break e}}if(this.P){v=!0;let Xt;for(;!this.J&&this.C<ue.length;)if(Xt=pc(this,ue),Xt==ja){kt==4&&(this.s=4,ot(14),v=!1),ki(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==yl){this.s=4,ot(15),ki(this.i,this.l,ue,"[Invalid Chunk]"),v=!1;break}else ki(this.i,this.l,Xt,null),Us(this,Xt);if(dc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||ue.length!=0||this.h.h||(this.s=1,ot(16),v=!1),this.o=this.o&&v,!v)ki(this.i,this.l,ue,"[Invalid Chunked Response]"),Kt(this),Tr(this);else if(0<ue.length&&!this.W){this.W=!0;var zt=this.j;zt.g==this&&zt.ba&&!zt.M&&(zt.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),Xs(zt),zt.M=!0,ot(11))}}else ki(this.i,this.l,ue,null),Us(this,ue);kt==4&&Kt(this),this.o&&!this.J&&(kt==4?Ac(this.j,this):(this.o=!1,js(this)))}else bd(this.g),v==400&&0<ue.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),Kt(this),Tr(this)}}}catch{}finally{}};function dc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function pc(c,y){var v=c.C,A=y.indexOf(`
`,v);return A==-1?ja:(v=Number(y.substring(v,A)),isNaN(v)?yl:(A+=1,A+v>y.length?ja:(y=y.slice(A,A+v),c.C=A+v,y)))}gn.prototype.cancel=function(){this.J=!0,Kt(this)};function js(c){c.S=Date.now()+c.I,mc(c,c.I)}function mc(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Tt(b(c.ba,c),y)}function Pi(c){c.B&&(p.clearTimeout(c.B),c.B=null)}gn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(fc(this.i,this.A),this.L!=2&&(Oi(),ot(17)),Kt(this),this.s=2,Tr(this)):mc(this,this.S-c)};function Tr(c){c.j.G==0||c.J||Ac(c.j,c)}function Kt(c){Pi(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,Ps(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function Us(c,y){try{var v=c.j;if(v.G!=0&&(v.g==c||_l(v.h,c))){if(!c.K&&_l(v.h,c)&&v.G==3){try{var A=v.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)Xa(v),Qa(v);else break e;Il(v),ot(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=Tt(b(v.Za,v),6e3));if(1>=za(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else ti(v,11)}else if((c.K||v.g==c)&&Xa(v),!q(y))for(U=v.Da.g.parse(y),y=0;y<U.length;y++){let Ue=U[y];if(v.T=Ue[0],Ue=Ue[1],v.G==2)if(Ue[0]=="c"){v.K=Ue[1],v.ia=Ue[2];const zt=Ue[3];zt!=null&&(v.la=zt,v.j.info("VER="+v.la));const kt=Ue[4];kt!=null&&(v.Aa=kt,v.j.info("SVER="+v.Aa));const ni=Ue[5];ni!=null&&typeof ni=="number"&&0<ni&&(A=1.5*ni,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const Xt=c.g;if(Xt){const Ir=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ir){var X=A.h;X.g||Ir.indexOf("spdy")==-1&&Ir.indexOf("quic")==-1&&Ir.indexOf("h2")==-1||(X.j=X.l,X.g=new Set,X.h&&(qa(X,X.h),X.h=null))}if(A.D){const Dl=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(A.ya=Dl,We(A.I,A.D,Dl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var ue=c;if(A.qa=xc(A,A.J?A.ia:null,A.W),ue.K){yn(A.h,ue);var je=ue,Ot=A.L;Ot&&(je.I=Ot),je.B&&(Pi(je),js(je)),A.g=ue}else wc(A);0<v.i.length&&Ka(v)}else Ue[0]!="stop"&&Ue[0]!="close"||ti(v,7);else v.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?ti(v,7):Rl(v):Ue[0]!="noop"&&v.l&&v.l.ta(Ue),v.v=0)}}Oi(4)}catch{}}var gc=class{constructor(c,y){this.g=c,this.map=y}};function Kr(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ua(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function za(c){return c.h?1:c.g?c.g.size:0}function _l(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function qa(c,y){c.g?c.g.add(y):c.h=y}function yn(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Kr.prototype.cancel=function(){if(this.i=vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function vl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const v of c.g.values())y=y.concat(v.D);return y}return H(c.i)}function _d(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var y=[],v=c.length,A=0;A<v;A++)y.push(c[A]);return y}y=[],v=0;for(A in c)y[v++]=c[A];return y}function Ba(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var y=[];c=c.length;for(var v=0;v<c;v++)y.push(v);return y}y=[],v=0;for(const A in c)y[v++]=A;return y}}}function El(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var v=Ba(c),A=_d(c),U=A.length,X=0;X<U;X++)y.call(void 0,A[X],v&&v[X],c)}var zs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vd(c,y){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var A=c[v].indexOf("="),U=null;if(0<=A){var X=c[v].substring(0,A);U=c[v].substring(A+1)}else X=c[v];y(X,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function bt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof bt){this.h=c.h,qs(this,c.j),this.o=c.o,this.g=c.g,Vi(this,c.s),this.l=c.l;var y=c.i,v=new Wr;v.i=y.i,y.g&&(v.g=new Map(y.g),v.h=y.h),Xr(this,v),this.m=c.m}else c&&(y=String(c).match(zs))?(this.h=!1,qs(this,y[1]||"",!0),this.o=qn(y[2]||""),this.g=qn(y[3]||"",!0),Vi(this,y[4]),this.l=qn(y[5]||"",!0),Xr(this,y[6]||"",!0),this.m=qn(y[7]||"")):(this.h=!1,this.i=new Wr(null,this.h))}bt.prototype.toString=function(){var c=[],y=this.j;y&&c.push(Hs(y,Tl,!0),":");var v=this.g;return(v||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Hs(y,Tl,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Hs(v,v.charAt(0)=="/"?Ed:bl,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Hs(v,Ha)),c.join("")};function xn(c){return new bt(c)}function qs(c,y,v){c.j=v?qn(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Vi(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function Xr(c,y,v){y instanceof Wr?(c.i=y,_c(c.i,c.h)):(v||(y=Hs(y,Td)),c.i=new Wr(y,c.h))}function We(c,y,v){c.i.set(y,v)}function Bs(c){return We(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function qn(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Hs(c,y,v){return typeof c=="string"?(c=encodeURI(c).replace(y,yc),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function yc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Tl=/[#\/\?@]/g,bl=/[#\?:]/g,Ed=/[#\?]/g,Td=/[#\?@]/g,Ha=/#/g;function Wr(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Bn(c){c.g||(c.g=new Map,c.h=0,c.i&&vd(c.i,function(y,v){c.add(decodeURIComponent(y.replace(/\+/g," ")),v)}))}r=Wr.prototype,r.add=function(c,y){Bn(this),this.i=null,c=br(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(y),this.h+=1,this};function Zr(c,y){Bn(c),y=br(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Jr(c,y){return Bn(c),y=br(c,y),c.g.has(y)}r.forEach=function(c,y){Bn(this),this.g.forEach(function(v,A){v.forEach(function(U){c.call(y,U,A,this)},this)},this)},r.na=function(){Bn(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),v=[];for(let A=0;A<y.length;A++){const U=c[A];for(let X=0;X<U.length;X++)v.push(y[A])}return v},r.V=function(c){Bn(this);let y=[];if(typeof c=="string")Jr(this,c)&&(y=y.concat(this.g.get(br(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)y=y.concat(c[v])}return y},r.set=function(c,y){return Bn(this),this.i=null,c=br(this,c),Jr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},r.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function wl(c,y,v){Zr(c,y),0<v.length&&(c.i=null,c.g.set(br(c,y),H(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var v=0;v<y.length;v++){var A=y[v];const X=encodeURIComponent(String(A)),ue=this.V(A);for(A=0;A<ue.length;A++){var U=X;ue[A]!==""&&(U+="="+encodeURIComponent(String(ue[A]))),c.push(U)}}return this.i=c.join("&")};function br(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function _c(c,y){y&&!c.j&&(Bn(c),c.i=null,c.g.forEach(function(v,A){var U=A.toLowerCase();A!=U&&(Zr(this,A),wl(this,U,v))},c)),c.j=y}function Fs(c,y){const v=new zn;if(p.Image){const A=new Image;A.onload=I(Hn,v,"TestLoadImage: loaded",!0,y,A),A.onerror=I(Hn,v,"TestLoadImage: error",!1,y,A),A.onabort=I(Hn,v,"TestLoadImage: abort",!1,y,A),A.ontimeout=I(Hn,v,"TestLoadImage: timeout",!1,y,A),p.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else y(!1)}function ir(c,y){const v=new zn,A=new AbortController,U=setTimeout(()=>{A.abort(),Hn(v,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:A.signal}).then(X=>{clearTimeout(U),X.ok?Hn(v,"TestPingServer: ok",!0,y):Hn(v,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(U),Hn(v,"TestPingServer: error",!1,y)})}function Hn(c,y,v,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(v)}catch{}}function $s(){this.g=new Vs}function wr(c,y,v){const A=v||"";try{El(c,function(U,X){let ue=U;g(U)&&(ue=nr(U)),y.push(A+X+"="+encodeURIComponent(ue))})}catch(U){throw y.push(A+"type="+encodeURIComponent("_badmap")),U}}function Li(c){this.l=c.Ub||null,this.j=c.eb||!1}P(Li,hl),Li.prototype.g=function(){return new ei(this.l,this.j)},Li.prototype.i=function(c){return function(){return c}}({});function ei(c,y){dt.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ei,dt),r=ei.prototype,r.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,Ar(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||p).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sr(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ar(this)),this.g&&(this.readyState=3,Ar(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?Sr(this):Ar(this),this.readyState==3&&Sl(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Sr(this))},r.Qa=function(c){this.g&&(this.response=c,Sr(this))},r.ga=function(){this.g&&Sr(this)};function Sr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Ar(c)}r.setRequestHeader=function(c,y){this.u.append(c,y)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var v=y.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=y.next();return c.join(`\r
`)};function Ar(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Al(c){let y="";return fe(c,function(v,A){y+=A,y+=":",y+=v,y+=`\r
`}),y}function Ut(c,y,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Al(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):We(c,y,v))}function $e(c){dt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P($e,dt);var Fa=/^https?$/i,Gs=["POST","PUT"];r=$e.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,y,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vr.g(),this.v=this.o?fl(this.o):fl(vr),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(X){vc(this,X);return}if(c=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)v.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const X of A.keys())v.set(X,A.get(X));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(X=>X.toLowerCase()=="content-type"),U=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Gs,y,void 0))||A||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[X,ue]of v)this.g.setRequestHeader(X,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ys(this),this.u=!0,this.g.send(c),this.u=!1}catch(X){vc(this,X)}};function vc(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,$a(c),Rr(c)}function $a(c){c.A||(c.A=!0,Qe(c,"complete"),Qe(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Qe(this,"complete"),Qe(this,"abort"),Rr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rr(this,!0)),$e.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ga(this):this.bb())},r.bb=function(){Ga(this)};function Ga(c){if(c.h&&typeof h<"u"&&(!c.v[1]||Fn(c)!=4||c.Z()!=2)){if(c.u&&Fn(c)==4)an(c.Ea,0,c);else if(Qe(c,"readystatechange"),Fn(c)==4){c.h=!1;try{const ue=c.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var v;if(!(v=y)){var A;if(A=ue===0){var U=String(c.D).match(zs)[1]||null;!U&&p.self&&p.self.location&&(U=p.self.location.protocol.slice(0,-1)),A=!Fa.test(U?U.toLowerCase():"")}v=A}if(v)Qe(c,"complete"),Qe(c,"success");else{c.m=6;try{var X=2<Fn(c)?c.g.statusText:""}catch{X=""}c.l=X+" ["+c.Z()+"]",$a(c)}}finally{Rr(c)}}}}function Rr(c,y){if(c.g){Ys(c);const v=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Qe(c,"ready");try{v.onreadystatechange=A}catch{}}}function Ys(c){c.I&&(p.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Fn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),Va(y)}};function Ec(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function bd(c){const y={};c=(c.g&&2<=Fn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(q(c[A]))continue;var v=V(c[A]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const X=y[U]||[];y[U]=X,X.push(v)}D(y,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(c,y,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||y}function Ya(c){this.Aa=0,this.i=[],this.j=new zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,c),this.cb=Qs("retryDelaySeedMs",1e4,c),this.Wa=Qs("forwardChannelMaxRetries",2,c),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Kr(c&&c.concurrentRequestLimit),this.Da=new $s,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ya.prototype,r.la=8,r.G=1,r.connect=function(c,y,v,A){ot(0),this.W=c,this.H=y||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=xc(this,null,this.W),Ka(this)};function Rl(c){if(Tc(c),c.G==3){var y=c.U++,v=xn(c.I);if(We(v,"SID",c.K),We(v,"RID",y),We(v,"TYPE","terminate"),Ks(c,v),y=new gn(c,c.j,y),y.L=2,y.v=Bs(xn(v)),v=!1,p.navigator&&p.navigator.sendBeacon)try{v=p.navigator.sendBeacon(y.v.toString(),"")}catch{}!v&&p.Image&&(new Image().src=y.v,v=!0),v||(y.g=Ic(y.j,null),y.g.ea(y.v)),y.F=Date.now(),js(y)}Rc(c)}function Qa(c){c.g&&(Xs(c),c.g.cancel(),c.g=null)}function Tc(c){Qa(c),c.u&&(p.clearTimeout(c.u),c.u=null),Xa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function Ka(c){if(!Ua(c.h)&&!c.s){c.s=!0;var y=c.Ga;ce||O(),me||(ce(),me=!0),Ie.add(y,c),c.B=0}}function wd(c,y){return za(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Tt(b(c.Ga,c,y),Cl(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new gn(this,this.j,c);let X=this.o;if(this.S&&(X?(X=R(X),k(X,this.S)):X=this.S),this.m!==null||this.O||(U.H=X,X=null),this.P)e:{for(var y=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=v;break e}if(y===4096||v===this.i.length-1){y=v+1;break e}}y=1e3}else y=1e3;y=bc(this,U,y),v=xn(this.I),We(v,"RID",c),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),Ks(this,v),X&&(this.O?y="headers="+encodeURIComponent(String(Al(X)))+"&"+y:this.m&&Ut(v,this.m,X)),qa(this.h,U),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",y),We(v,"SID","null"),U.T=!0,rr(U,v,null)):rr(U,v,y),this.G=2}}else this.G==3&&(c?xl(this,c):this.i.length==0||Ua(this.h)||xl(this))};function xl(c,y){var v;y?v=y.l:v=c.U++;const A=xn(c.I);We(A,"SID",c.K),We(A,"RID",v),We(A,"AID",c.T),Ks(c,A),c.m&&c.o&&Ut(A,c.m,c.o),v=new gn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),y&&(c.i=y.D.concat(c.i)),y=bc(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),qa(c.h,v),rr(v,A,y)}function Ks(c,y){c.H&&fe(c.H,function(v,A){We(y,A,v)}),c.l&&El({},function(v,A){We(y,A,v)})}function bc(c,y,v){v=Math.min(c.i.length,v);var A=c.l?b(c.l.Na,c.l,c):null;e:{var U=c.i;let X=-1;for(;;){const ue=["count="+v];X==-1?0<v?(X=U[0].g,ue.push("ofs="+X)):X=0:ue.push("ofs="+X);let je=!0;for(let Ot=0;Ot<v;Ot++){let Ue=U[Ot].g;const zt=U[Ot].map;if(Ue-=X,0>Ue)X=Math.max(0,U[Ot].g-100),je=!1;else try{wr(zt,ue,"req"+Ue+"_")}catch{A&&A(zt)}}if(je){A=ue.join("&");break e}}}return c=c.i.splice(0,v),y.D=c,A}function wc(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;ce||O(),me||(ce(),me=!0),Ie.add(y,c),c.v=0}}function Il(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Tt(b(c.Fa,c),Cl(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Sc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Tt(b(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Qa(this),Sc(this))};function Xs(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function Sc(c){c.g=new gn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=xn(c.qa);We(y,"RID","rpc"),We(y,"SID",c.K),We(y,"AID",c.T),We(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&We(y,"TO",c.ja),We(y,"TYPE","xmlhttp"),Ks(c,y),c.m&&c.o&&Ut(y,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Bs(xn(y)),v.m=null,v.P=!0,Qr(v,c)}r.Za=function(){this.C!=null&&(this.C=null,Qa(this),Il(this),ot(19))};function Xa(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function Ac(c,y){var v=null;if(c.g==y){Xa(c),Xs(c),c.g=null;var A=2}else if(_l(c.h,y))v=y.D,yn(c.h,y),A=1;else return;if(c.G!=0){if(y.o)if(A==1){v=y.m?y.m.length:0,y=Date.now()-y.F;var U=c.B;A=Ni(),Qe(A,new Nt(A,v)),Ka(c)}else wc(c);else if(U=y.s,U==3||U==0&&0<y.X||!(A==1&&wd(c,y)||A==2&&Il(c)))switch(v&&0<v.length&&(y=c.h,y.i=y.i.concat(v)),U){case 1:ti(c,5);break;case 4:ti(c,10);break;case 3:ti(c,6);break;default:ti(c,2)}}}function Cl(c,y){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*y}function ti(c,y){if(c.j.info("Error code "+y),y==2){var v=b(c.fb,c),A=c.Xa;const U=!A;A=new bt(A||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||qs(A,"https"),Bs(A),U?Fs(A.toString(),v):ir(A.toString(),v)}else ot(2);c.G=0,c.l&&c.l.sa(y),Rc(c),Tc(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Rc(c){if(c.G=0,c.ka=[],c.l){const y=vl(c.h);(y.length!=0||c.i.length!=0)&&(z(c.ka,y),z(c.ka,c.i),c.h.i.length=0,H(c.i),c.i.length=0),c.l.ra()}}function xc(c,y,v){var A=v instanceof bt?xn(v):new bt(v);if(A.g!="")y&&(A.g=y+"."+A.g),Vi(A,A.s);else{var U=p.location;A=U.protocol,y=y?y+"."+U.hostname:U.hostname,U=+U.port;var X=new bt(null);A&&qs(X,A),y&&(X.g=y),U&&Vi(X,U),v&&(X.l=v),A=X}return v=c.D,y=c.ya,v&&y&&We(A,v,y),We(A,"VER",c.la),Ks(c,A),A}function Ic(c,y,v){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new $e(new Li({eb:v})):new $e(c.pa),y.Ha(c.J),y}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cc(){}r=Cc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Wa(){}Wa.prototype.g=function(c,y){return new _n(c,y)};function _n(c,y){dt.call(this),this.g=new Ya(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!q(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!q(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new xr(this)}P(_n,dt),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){Rl(this.g)},_n.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=nr(c),c=v);y.i.push(new gc(y.Ya++,c)),y.G==3&&Ka(y)},_n.prototype.N=function(){this.g.l=null,delete this.j,Rl(this.g),delete this.g,_n.aa.N.call(this)};function Dc(c){Gr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const v in y){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}P(Dc,Gr);function Nc(){pl.call(this),this.status=1}P(Nc,pl);function xr(c){this.g=c}P(xr,Cc),xr.prototype.ua=function(){Qe(this.g,"a")},xr.prototype.ta=function(c){Qe(this.g,new Dc(c))},xr.prototype.sa=function(c){Qe(this.g,new Nc)},xr.prototype.ra=function(){Qe(this.g,"b")},Wa.prototype.createWebChannel=Wa.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,Kb=function(){return new Wa},Qb=function(){return Ni()},Yb=_r,ig={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mi.NO_ERROR=0,Mi.TIMEOUT=8,Mi.HTTP_ERROR=6,nf=Mi,Yr.COMPLETE="complete",Gb=Yr,dl.EventType=$r,$r.OPEN="a",$r.CLOSE="b",$r.ERROR="c",$r.MESSAGE="d",dt.prototype.listen=dt.prototype.K,bu=dl,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,$b=$e}).apply(typeof Vh<"u"?Vh:typeof self<"u"?self:typeof window<"u"?window:{});const KE="@firebase/firestore",XE="4.9.0";/**
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
 */class dn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dn.UNAUTHENTICATED=new dn(null),dn.GOOGLE_CREDENTIALS=new dn("google-credentials-uid"),dn.FIRST_PARTY=new dn("first-party-uid"),dn.MOCK_USER=new dn("mock-user");/**
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
 */let rl="12.0.0";/**
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
 */const Ra=new Pg("@firebase/firestore");function Io(){return Ra.logLevel}function de(r,...e){if(Ra.logLevel<=Pe.DEBUG){const t=e.map(Gg);Ra.debug(`Firestore (${rl}): ${r}`,...t)}}function xi(r,...e){if(Ra.logLevel<=Pe.ERROR){const t=e.map(Gg);Ra.error(`Firestore (${rl}): ${r}`,...t)}}function Fo(r,...e){if(Ra.logLevel<=Pe.WARN){const t=e.map(Gg);Ra.warn(`Firestore (${rl}): ${r}`,...t)}}function Gg(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function we(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Xb(r,s,t)}function Xb(r,e,t){let s=`FIRESTORE (${rl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw xi(s),new Error(s)}function Ye(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||Xb(e,o,s)}function Re(r,e){return r}/**
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
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Ci{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Wb{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ON{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(dn.UNAUTHENTICATED))}shutdown(){}}class kN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class MN{constructor(e){this.t=e,this.currentUser=dn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ye(this.o===void 0,42304);let s=this.i;const o=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let u=new bi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new bi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=u;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},p=m=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new bi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ye(typeof s.accessToken=="string",31837,{l:s}),new Wb(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string",2055,{h:e}),new dn(e)}}class PN{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=dn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class VN{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new PN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(dn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ye(this.o===void 0,3512);const s=u=>{u.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,de("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new WE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new WE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function jN(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Yg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=jN(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ve(r,e){return r<e?-1:r>e?1:0}function sg(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return km(o)===km(u)?Ve(o,u):km(o)?1:-1}return Ve(r.length,e.length)}const UN=55296,zN=57343;function km(r){const e=r.charCodeAt(0);return e>=UN&&e<=zN}function $o(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */const ZE="__name__";class Pr{constructor(e,t,s){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&we(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Pr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pr?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Pr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ve(e.length,t.length)}static compareSegments(e,t){const s=Pr.isNumericId(e),o=Pr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Pr.extractNumericId(e).compare(Pr.extractNumericId(t)):sg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gs.fromString(e.substring(4,e.length-2))}}class it extends Pr{construct(e,t,s){return new it(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new it(t)}static emptyPath(){return new it([])}}const qN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nn extends Pr{construct(e,t,s){return new nn(e,t,s)}static isValidIdentifier(e){return qN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ZE}static keyField(){return new nn([ZE])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new he(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new he(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new he(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new he(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nn(t)}static emptyPath(){return new nn([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(it.fromString(e))}static fromName(e){return new _e(it.fromString(e).popFirst(5))}static empty(){return new _e(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return it.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new it(e.slice()))}}/**
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
 */function Zb(r,e,t){if(!t)throw new he(te.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function BN(r,e,t,s){if(e===!0&&s===!0)throw new he(te.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function JE(r){if(!_e.isDocumentKey(r))throw new he(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function eT(r){if(_e.isDocumentKey(r))throw new he(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Jb(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Gf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":we(12329,{type:typeof r})}function Ln(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new he(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gf(r);throw new he(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function It(r,e){const t={typeString:r};return e&&(t.value=e),t}function nc(r,e){if(!Jb(r))throw new he(te.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new he(te.INVALID_ARGUMENT,t);return!0}/**
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
 */const tT=-62135596800,nT=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*nT);return new nt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<tT)throw new he(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/nT}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(nc(e,nt._jsonSchema))return new nt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-tT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:It("string",nt._jsonSchemaVersion),seconds:It("number"),nanoseconds:It("number")};/**
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
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new nt(0,0))}static max(){return new Ae(new nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Uu=-1;function HN(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(s===1e9?new nt(t+1,0):new nt(t,s));return new _s(o,_e.empty(),e)}function FN(r){return new _s(r.readTime,r.key,Uu)}class _s{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new _s(Ae.min(),_e.empty(),Uu)}static max(){return new _s(Ae.max(),_e.empty(),Uu)}}function $N(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(r.documentKey,e.documentKey),t!==0?t:Ve(r.largestBatchId,e.largestBatchId))}/**
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
 */const GN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function il(r){if(r.code!==te.FAILED_PRECONDITION||r.message!==GN)throw r;de("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class re{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new re((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof re?t:re.resolve(t)}catch(t){return re.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):re.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):re.reject(t)}static resolve(e){return new re((t,s)=>{t(e)})}static reject(e){return new re((t,s)=>{s(e)})}static waitFor(e){return new re((t,s)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&t()},m=>s(m))}),h=!0,u===o&&t()})}static or(e){let t=re.resolve(!1);for(const s of e)t=t.next(o=>o?re.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new re((s,o)=>{const u=e.length,h=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;t(e[g]).next(E=>{h[g]=E,++p,p===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new re((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function QN(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function sl(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Yf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Yf.ce=-1;/**
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
 */const Qg=-1;function Qf(r){return r==null}function bf(r){return r===0&&1/r==-1/0}function KN(r){return typeof r=="number"&&Number.isInteger(r)&&!bf(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const ew="";function XN(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=rT(e)),e=WN(r.get(t),e);return rT(e)}function WN(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case ew:t+="";break;default:t+=u}}return t}function rT(r){return r+ew+""}/**
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
 */function iT(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function xs(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function tw(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ft{constructor(e,t){this.comparator=e,this.root=t||tn.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lh(this.root,e,this.comparator,!0)}}class Lh{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tn{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??tn.RED,this.left=o??tn.EMPTY,this.right=u??tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new tn(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return tn.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new tn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Lt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sT(this.data.getIterator())}getIteratorFrom(e){return new sT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Lt(this.comparator);return t.data=e,t}}class sT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vn{constructor(e){this.fields=e,e.sort(nn.comparator)}static empty(){return new Vn([])}unionWith(e){let t=new Lt(nn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $o(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class nw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new nw("Invalid base64 string: "+u):u}}(e);return new rn(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new rn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rn.EMPTY_BYTE_STRING=new rn("");const ZN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vs(r){if(Ye(!!r,39018),typeof r=="string"){let e=0;const t=ZN.exec(r);if(Ye(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Et(r.seconds),nanos:Et(r.nanos)}}function Et(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Es(r){return typeof r=="string"?rn.fromBase64String(r):rn.fromUint8Array(r)}/**
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
 */const rw="server_timestamp",iw="__type__",sw="__previous_value__",aw="__local_write_time__";function Kg(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[iw])==null?void 0:s.stringValue)===rw}function Kf(r){const e=r.mapValue.fields[sw];return Kg(e)?Kf(e):e}function zu(r){const e=vs(r.mapValue.fields[aw].timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class JN{constructor(e,t,s,o,u,h,p,m,g,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=E}}const wf="(default)";class qu{constructor(e,t){this.projectId=e,this.database=t||wf}static empty(){return new qu("","")}get isDefaultDatabase(){return this.database===wf}isEqual(e){return e instanceof qu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ow="__type__",eO="__max__",jh={mapValue:{}},lw="__vector__",Sf="value";function Ts(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Kg(r)?4:nO(r)?9007199254740991:tO(r)?10:11:we(28295,{value:r})}function Hr(r,e){if(r===e)return!0;const t=Ts(r);if(t!==Ts(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return zu(r).isEqual(zu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=vs(o.timestampValue),p=vs(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return Es(o.bytesValue).isEqual(Es(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return Et(o.geoPointValue.latitude)===Et(u.geoPointValue.latitude)&&Et(o.geoPointValue.longitude)===Et(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Et(o.integerValue)===Et(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=Et(o.doubleValue),p=Et(u.doubleValue);return h===p?bf(h)===bf(p):isNaN(h)&&isNaN(p)}return!1}(r,e);case 9:return $o(r.arrayValue.values||[],e.arrayValue.values||[],Hr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(iT(h)!==iT(p))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(p[m]===void 0||!Hr(h[m],p[m])))return!1;return!0}(r,e);default:return we(52216,{left:r})}}function Bu(r,e){return(r.values||[]).find(t=>Hr(t,e))!==void 0}function Go(r,e){if(r===e)return 0;const t=Ts(r),s=Ts(e);if(t!==s)return Ve(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(r.booleanValue,e.booleanValue);case 2:return function(u,h){const p=Et(u.integerValue||u.doubleValue),m=Et(h.integerValue||h.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(r,e);case 3:return aT(r.timestampValue,e.timestampValue);case 4:return aT(zu(r),zu(e));case 5:return sg(r.stringValue,e.stringValue);case 6:return function(u,h){const p=Es(u),m=Es(h);return p.compareTo(m)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),m=h.split("/");for(let g=0;g<p.length&&g<m.length;g++){const E=Ve(p[g],m[g]);if(E!==0)return E}return Ve(p.length,m.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const p=Ve(Et(u.latitude),Et(h.latitude));return p!==0?p:Ve(Et(u.longitude),Et(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return oT(r.arrayValue,e.arrayValue);case 10:return function(u,h){var b,I,P,H;const p=u.fields||{},m=h.fields||{},g=(b=p[Sf])==null?void 0:b.arrayValue,E=(I=m[Sf])==null?void 0:I.arrayValue,w=Ve(((P=g==null?void 0:g.values)==null?void 0:P.length)||0,((H=E==null?void 0:E.values)==null?void 0:H.length)||0);return w!==0?w:oT(g,E)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===jh.mapValue&&h===jh.mapValue)return 0;if(u===jh.mapValue)return 1;if(h===jh.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=h.fields||{},E=Object.keys(g);m.sort(),E.sort();for(let w=0;w<m.length&&w<E.length;++w){const b=sg(m[w],E[w]);if(b!==0)return b;const I=Go(p[m[w]],g[E[w]]);if(I!==0)return I}return Ve(m.length,E.length)}(r.mapValue,e.mapValue);default:throw we(23264,{he:t})}}function aT(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ve(r,e);const t=vs(r),s=vs(e),o=Ve(t.seconds,s.seconds);return o!==0?o:Ve(t.nanos,s.nanos)}function oT(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Go(t[o],s[o]);if(u)return u}return Ve(t.length,s.length)}function Yo(r){return ag(r)}function ag(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=vs(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Es(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return _e.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=ag(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${ag(t.fields[h])}`;return o+"}"}(r.mapValue):we(61005,{value:r})}function rf(r){switch(Ts(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kf(r);return e?16+rf(e):16;case 5:return 2*r.stringValue.length;case 6:return Es(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+rf(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return xs(s.fields,(u,h)=>{o+=u.length+rf(h)}),o}(r.mapValue);default:throw we(13486,{value:r})}}function lT(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function og(r){return!!r&&"integerValue"in r}function Xg(r){return!!r&&"arrayValue"in r}function uT(r){return!!r&&"nullValue"in r}function cT(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function sf(r){return!!r&&"mapValue"in r}function tO(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[ow])==null?void 0:s.stringValue)===lw}function Cu(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return xs(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Cu(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Cu(r.arrayValue.values[t]);return e}return{...r}}function nO(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===eO}/**
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
 */class An{constructor(e){this.value=e}static empty(){return new An({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!sf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cu(t)}setAll(e){let t=nn.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=Cu(h):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());sf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];sf(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){xs(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new An(Cu(this.value))}}function uw(r){const e=[];return xs(r.fields,(t,s)=>{const o=new nn([t]);if(sf(s)){const u=uw(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Vn(e)}/**
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
 */class pn{constructor(e,t,s,o,u,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new pn(e,0,Ae.min(),Ae.min(),Ae.min(),An.empty(),0)}static newFoundDocument(e,t,s,o){return new pn(e,1,t,Ae.min(),s,o,0)}static newNoDocument(e,t){return new pn(e,2,t,Ae.min(),Ae.min(),An.empty(),0)}static newUnknownDocument(e,t){return new pn(e,3,t,Ae.min(),Ae.min(),An.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=An.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=An.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Af{constructor(e,t){this.position=e,this.inclusive=t}}function hT(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=_e.comparator(_e.fromName(h.referenceValue),t.key):s=Go(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function fT(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Hr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Hu{constructor(e,t="asc"){this.field=e,this.dir=t}}function rO(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class cw{}class xt extends cw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new sO(e,t,s):t==="array-contains"?new lO(e,s):t==="in"?new uO(e,s):t==="not-in"?new cO(e,s):t==="array-contains-any"?new hO(e,s):new xt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new aO(e,s):new oO(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Go(t,this.value)):t!==null&&Ts(this.value)===Ts(t)&&this.matchesComparison(Go(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gr extends cw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new gr(e,t)}matches(e){return hw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function hw(r){return r.op==="and"}function fw(r){return iO(r)&&hw(r)}function iO(r){for(const e of r.filters)if(e instanceof gr)return!1;return!0}function lg(r){if(r instanceof xt)return r.field.canonicalString()+r.op.toString()+Yo(r.value);if(fw(r))return r.filters.map(e=>lg(e)).join(",");{const e=r.filters.map(t=>lg(t)).join(",");return`${r.op}(${e})`}}function dw(r,e){return r instanceof xt?function(s,o){return o instanceof xt&&s.op===o.op&&s.field.isEqual(o.field)&&Hr(s.value,o.value)}(r,e):r instanceof gr?function(s,o){return o instanceof gr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&dw(h,o.filters[p]),!0):!1}(r,e):void we(19439)}function pw(r){return r instanceof xt?function(t){return`${t.field.canonicalString()} ${t.op} ${Yo(t.value)}`}(r):r instanceof gr?function(t){return t.op.toString()+" {"+t.getFilters().map(pw).join(" ,")+"}"}(r):"Filter"}class sO extends xt{constructor(e,t,s){super(e,t,s),this.key=_e.fromName(s.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class aO extends xt{constructor(e,t){super(e,"in",t),this.keys=mw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class oO extends xt{constructor(e,t){super(e,"not-in",t),this.keys=mw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function mw(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>_e.fromName(s.referenceValue))}class lO extends xt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xg(t)&&Bu(t.arrayValue,this.value)}}class uO extends xt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Bu(this.value.arrayValue,t)}}class cO extends xt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Bu(this.value.arrayValue,t)}}class hO extends xt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Bu(this.value.arrayValue,s))}}/**
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
 */class fO{constructor(e,t=null,s=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.Te=null}}function dT(r,e=null,t=[],s=[],o=null,u=null,h=null){return new fO(r,e,t,s,o,u,h)}function Wg(r){const e=Re(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>lg(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Qf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Yo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Yo(s)).join(",")),e.Te=t}return e.Te}function Zg(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!rO(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!dw(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!fT(r.startAt,e.startAt)&&fT(r.endAt,e.endAt)}function ug(r){return _e.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class al{constructor(e,t=null,s=[],o=[],u=null,h="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function dO(r,e,t,s,o,u,h,p){return new al(r,e,t,s,o,u,h,p)}function Xf(r){return new al(r)}function pT(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function gw(r){return r.collectionGroup!==null}function Du(r){const e=Re(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Lt(nn.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Hu(u,s))}),t.has(nn.keyField().canonicalString())||e.Ie.push(new Hu(nn.keyField(),s))}return e.Ie}function Ur(r){const e=Re(r);return e.Ee||(e.Ee=pO(e,Du(r))),e.Ee}function pO(r,e){if(r.limitType==="F")return dT(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Hu(o.field,u)});const t=r.endAt?new Af(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Af(r.startAt.position,r.startAt.inclusive):null;return dT(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function cg(r,e){const t=r.filters.concat([e]);return new al(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function hg(r,e,t){return new al(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Wf(r,e){return Zg(Ur(r),Ur(e))&&r.limitType===e.limitType}function yw(r){return`${Wg(Ur(r))}|lt:${r.limitType}`}function Co(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>pw(o)).join(", ")}]`),Qf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Yo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Yo(o)).join(",")),`Target(${s})`}(Ur(r))}; limitType=${r.limitType})`}function Zf(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):_e.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Du(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,p,m){const g=hT(h,p,m);return h.inclusive?g<=0:g<0}(s.startAt,Du(s),o)||s.endAt&&!function(h,p,m){const g=hT(h,p,m);return h.inclusive?g>=0:g>0}(s.endAt,Du(s),o))}(r,e)}function mO(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function _w(r){return(e,t)=>{let s=!1;for(const o of Du(r)){const u=gO(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function gO(r,e,t){const s=r.field.isKeyField()?_e.comparator(e.key,t.key):function(u,h,p){const m=h.data.field(u),g=p.data.field(u);return m!==null&&g!==null?Go(m,g):we(42886)}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return we(19790,{direction:r.dir})}}/**
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
 */class Oa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return tw(this.inner)}size(){return this.innerSize}}/**
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
 */const yO=new ft(_e.comparator);function Ii(){return yO}const vw=new ft(_e.comparator);function wu(...r){let e=vw;for(const t of r)e=e.insert(t.key,t);return e}function Ew(r){let e=vw;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ma(){return Nu()}function Tw(){return Nu()}function Nu(){return new Oa(r=>r.toString(),(r,e)=>r.isEqual(e))}const _O=new ft(_e.comparator),vO=new Lt(_e.comparator);function Le(...r){let e=vO;for(const t of r)e=e.add(t);return e}const EO=new Lt(Ve);function TO(){return EO}/**
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
 */function Jg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bf(e)?"-0":e}}function bw(r){return{integerValue:""+r}}function bO(r,e){return KN(e)?bw(e):Jg(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Jf{constructor(){this._=void 0}}function wO(r,e,t){return r instanceof Fu?function(o,u){const h={fields:{[iw]:{stringValue:rw},[aw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Kg(u)&&(u=Kf(u)),u&&(h.fields[sw]=u),{mapValue:h}}(t,e):r instanceof $u?Sw(r,e):r instanceof Gu?Aw(r,e):function(o,u){const h=ww(o,u),p=mT(h)+mT(o.Ae);return og(h)&&og(o.Ae)?bw(p):Jg(o.serializer,p)}(r,e)}function SO(r,e,t){return r instanceof $u?Sw(r,e):r instanceof Gu?Aw(r,e):t}function ww(r,e){return r instanceof Rf?function(s){return og(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Fu extends Jf{}class $u extends Jf{constructor(e){super(),this.elements=e}}function Sw(r,e){const t=Rw(e);for(const s of r.elements)t.some(o=>Hr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Gu extends Jf{constructor(e){super(),this.elements=e}}function Aw(r,e){let t=Rw(e);for(const s of r.elements)t=t.filter(o=>!Hr(o,s));return{arrayValue:{values:t}}}class Rf extends Jf{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function mT(r){return Et(r.integerValue||r.doubleValue)}function Rw(r){return Xg(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class AO{constructor(e,t){this.field=e,this.transform=t}}function RO(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof $u&&o instanceof $u||s instanceof Gu&&o instanceof Gu?$o(s.elements,o.elements,Hr):s instanceof Rf&&o instanceof Rf?Hr(s.Ae,o.Ae):s instanceof Fu&&o instanceof Fu}(r.transform,e.transform)}class xO{constructor(e,t){this.version=e,this.transformResults=t}}class fr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new fr}static exists(e){return new fr(void 0,e)}static updateTime(e){return new fr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function af(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class ed{}function xw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Cw(r.key,fr.none()):new rc(r.key,r.data,fr.none());{const t=r.data,s=An.empty();let o=new Lt(nn.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Is(r.key,s,new Vn(o.toArray()),fr.none())}}function IO(r,e,t){r instanceof rc?function(o,u,h){const p=o.value.clone(),m=yT(o.fieldTransforms,u,h.transformResults);p.setAll(m),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(r,e,t):r instanceof Is?function(o,u,h){if(!af(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=yT(o.fieldTransforms,u,h.transformResults),m=u.data;m.setAll(Iw(o)),m.setAll(p),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ou(r,e,t,s){return r instanceof rc?function(u,h,p,m){if(!af(u.precondition,h))return p;const g=u.value.clone(),E=_T(u.fieldTransforms,m,h);return g.setAll(E),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(r,e,t,s):r instanceof Is?function(u,h,p,m){if(!af(u.precondition,h))return p;const g=_T(u.fieldTransforms,m,h),E=h.data;return E.setAll(Iw(u)),E.setAll(g),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(w=>w.field))}(r,e,t,s):function(u,h,p){return af(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(r,e,t)}function CO(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=ww(s.transform,o||null);u!=null&&(t===null&&(t=An.empty()),t.set(s.field,u))}return t||null}function gT(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&$o(s,o,(u,h)=>RO(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class rc extends ed{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Is extends ed{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Iw(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function yT(r,e,t){const s=new Map;Ye(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,p=e.data.field(u.field);s.set(u.field,SO(h,p,t[o]))}return s}function _T(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,wO(u,h,e))}return s}class Cw extends ed{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DO extends ed{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class NO{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&IO(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ou(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ou(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Tw();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const m=xw(h,p);m!==null&&s.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(Ae.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&$o(this.mutations,e.mutations,(t,s)=>gT(t,s))&&$o(this.baseMutations,e.baseMutations,(t,s)=>gT(t,s))}}class ey{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ye(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return _O}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new ey(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class OO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class kO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var At,qe;function MO(r){switch(r){case te.OK:return we(64938);case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0;default:return we(15467,{code:r})}}function Dw(r){if(r===void 0)return xi("GRPC error has no .code"),te.UNKNOWN;switch(r){case At.OK:return te.OK;case At.CANCELLED:return te.CANCELLED;case At.UNKNOWN:return te.UNKNOWN;case At.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case At.INTERNAL:return te.INTERNAL;case At.UNAVAILABLE:return te.UNAVAILABLE;case At.UNAUTHENTICATED:return te.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case At.NOT_FOUND:return te.NOT_FOUND;case At.ALREADY_EXISTS:return te.ALREADY_EXISTS;case At.PERMISSION_DENIED:return te.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case At.ABORTED:return te.ABORTED;case At.OUT_OF_RANGE:return te.OUT_OF_RANGE;case At.UNIMPLEMENTED:return te.UNIMPLEMENTED;case At.DATA_LOSS:return te.DATA_LOSS;default:return we(39323,{code:r})}}(qe=At||(At={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function PO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const VO=new gs([4294967295,4294967295],0);function vT(r){const e=PO().encode(r),t=new Fb;return t.update(e),new Uint8Array(t.digest())}function ET(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new gs([t,s],0),new gs([o,u],0)]}class ty{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Su(`Invalid padding: ${t}`);if(s<0)throw new Su(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Su(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Su(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=gs.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(gs.fromNumber(s)));return o.compare(VO)===1&&(o=new gs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=vT(e),[s,o]=ET(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new ty(u,o,t);return s.forEach(p=>h.insert(p)),h}insert(e){if(this.ge===0)return;const t=vT(e),[s,o]=ET(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Su extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class td{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ic.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new td(Ae.min(),o,new ft(Ve),Ii(),Le())}}class ic{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ic(s,t,Le(),Le(),Le())}}/**
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
 */class of{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Nw{constructor(e,t){this.targetId=e,this.Ce=t}}class Ow{constructor(e,t,s=rn.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class TT{constructor(){this.ve=0,this.Fe=bT(),this.Me=rn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),t=Le(),s=Le();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:we(38017,{changeType:u})}}),new ic(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=bT()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ye(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class LO{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ii(),this.Je=Uh(),this.He=Uh(),this.Ye=new ft(Ve)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:we(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,o)=>{this.rt(o)&&t(o)})}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(ug(u))if(s===0){const h=new _e(u.path);this.et(t,h,pn.newNoDocument(h,Ae.min()))}else Ye(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const p=this.ut(e),m=p?this.ct(p,e,h):1;if(m!==0){this.it(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,p;try{h=Es(s).toUint8Array()}catch(m){if(m instanceof nw)return Fo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new ty(h,o,u)}catch(m){return Fo(m instanceof Su?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Ge.ht(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.et(t,u,null),o++)}),o}Tt(e){const t=new Map;this.ze.forEach((u,h)=>{const p=this.ot(h);if(p){if(u.current&&ug(p.target)){const m=new _e(p.target.path);this.It(m).has(h)||this.Et(h,m)||this.et(h,m,pn.newNoDocument(m,e))}u.Be&&(t.set(h,u.ke()),u.qe())}});let s=Le();this.He.forEach((u,h)=>{let p=!0;h.forEachWhile(m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.je.forEach((u,h)=>h.setReadTime(e));const o=new td(e,t,this.Ye,this.je,s);return this.je=Ii(),this.Je=Uh(),this.He=Uh(),this.Ye=new ft(Ve),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new TT,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Lt(Ve),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Lt(Ve),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||de("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new TT),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Uh(){return new ft(_e.comparator)}function bT(){return new ft(_e.comparator)}const jO={asc:"ASCENDING",desc:"DESCENDING"},UO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zO={and:"AND",or:"OR"};class qO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fg(r,e){return r.useProto3Json||Qf(e)?e:{value:e}}function xf(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function BO(r,e){return xf(r,e.toTimestamp())}function zr(r){return Ye(!!r,49232),Ae.fromTimestamp(function(t){const s=vs(t);return new nt(s.seconds,s.nanos)}(r))}function ny(r,e){return dg(r,e).canonicalString()}function dg(r,e){const t=function(o){return new it(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Mw(r){const e=it.fromString(r);return Ye(Uw(e),10190,{key:e.toString()}),e}function pg(r,e){return ny(r.databaseId,e.path)}function Mm(r,e){const t=Mw(e);if(t.get(1)!==r.databaseId.projectId)throw new he(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new he(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new _e(Vw(t))}function Pw(r,e){return ny(r.databaseId,e)}function HO(r){const e=Mw(r);return e.length===4?it.emptyPath():Vw(e)}function mg(r){return new it(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Vw(r){return Ye(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function wT(r,e,t){return{name:pg(r,e),fields:t.value.mapValue.fields}}function FO(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:we(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,E){return g.useProto3Json?(Ye(E===void 0||typeof E=="string",58123),rn.fromBase64String(E||"")):(Ye(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),rn.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&function(g){const E=g.code===void 0?te.UNKNOWN:Dw(g.code);return new he(E,g.message||"")}(h);t=new Ow(s,o,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Mm(r,s.document.name),u=zr(s.document.updateTime),h=s.document.createTime?zr(s.document.createTime):Ae.min(),p=new An({mapValue:{fields:s.document.fields}}),m=pn.newFoundDocument(o,u,h,p),g=s.targetIds||[],E=s.removedTargetIds||[];t=new of(g,E,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Mm(r,s.document),u=s.readTime?zr(s.readTime):Ae.min(),h=pn.newNoDocument(o,u),p=s.removedTargetIds||[];t=new of([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Mm(r,s.document),u=s.removedTargetIds||[];t=new of([],u,o,null)}else{if(!("filter"in e))return we(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new kO(o,u),p=s.targetId;t=new Nw(p,h)}}return t}function $O(r,e){let t;if(e instanceof rc)t={update:wT(r,e.key,e.value)};else if(e instanceof Cw)t={delete:pg(r,e.key)};else if(e instanceof Is)t={update:wT(r,e.key,e.data),updateMask:e4(e.fieldMask)};else{if(!(e instanceof DO))return we(16599,{Vt:e.type});t={verify:pg(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof Fu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof $u)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Gu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Rf)return{fieldPath:h.field.canonicalString(),increment:p.Ae};throw we(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:BO(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:we(27497)}(r,e.precondition)),t}function GO(r,e){return r&&r.length>0?(Ye(e!==void 0,14353),r.map(t=>function(o,u){let h=o.updateTime?zr(o.updateTime):zr(u);return h.isEqual(Ae.min())&&(h=zr(u)),new xO(h,o.transformResults||[])}(t,e))):[]}function YO(r,e){return{documents:[Pw(r,e.path)]}}function QO(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Pw(r,o);const u=function(g){if(g.length!==0)return jw(gr.create(g,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(g){if(g.length!==0)return g.map(E=>function(b){return{field:Do(b.field),direction:WO(b.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=fg(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:t,parent:o}}function KO(r){let e=HO(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ye(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(w){const b=Lw(w);return b instanceof gr&&fw(b)?b.getFilters():[b]}(t.where));let h=[];t.orderBy&&(h=function(w){return w.map(b=>function(P){return new Hu(No(P.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(b))}(t.orderBy));let p=null;t.limit&&(p=function(w){let b;return b=typeof w=="object"?w.value:w,Qf(b)?null:b}(t.limit));let m=null;t.startAt&&(m=function(w){const b=!!w.before,I=w.values||[];return new Af(I,b)}(t.startAt));let g=null;return t.endAt&&(g=function(w){const b=!w.before,I=w.values||[];return new Af(I,b)}(t.endAt)),dO(e,o,h,u,p,"F",m,g)}function XO(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lw(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=No(t.unaryFilter.field);return xt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=No(t.unaryFilter.field);return xt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=No(t.unaryFilter.field);return xt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=No(t.unaryFilter.field);return xt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}}(r):r.fieldFilter!==void 0?function(t){return xt.create(No(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return gr.create(t.compositeFilter.filters.map(s=>Lw(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}}(t.compositeFilter.op))}(r):we(30097,{filter:r})}function WO(r){return jO[r]}function ZO(r){return UO[r]}function JO(r){return zO[r]}function Do(r){return{fieldPath:r.canonicalString()}}function No(r){return nn.fromServerFormat(r.fieldPath)}function jw(r){return r instanceof xt?function(t){if(t.op==="=="){if(cT(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NAN"}};if(uT(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cT(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NAN"}};if(uT(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Do(t.field),op:ZO(t.op),value:t.value}}}(r):r instanceof gr?function(t){const s=t.getFilters().map(o=>jw(o));return s.length===1?s[0]:{compositeFilter:{op:JO(t.op),filters:s}}}(r):we(54877,{filter:r})}function e4(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Uw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class hs{constructor(e,t,s,o,u=Ae.min(),h=Ae.min(),p=rn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new hs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class t4{constructor(e){this.yt=e}}function n4(r){const e=KO({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?hg(e,e.limit,"L"):e}/**
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
 */class r4{constructor(){this.Cn=new i4}addToCollectionParentIndex(e,t){return this.Cn.add(t),re.resolve()}getCollectionParents(e,t){return re.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return re.resolve()}deleteFieldIndex(e,t){return re.resolve()}deleteAllFieldIndexes(e){return re.resolve()}createTargetIndexes(e,t){return re.resolve()}getDocumentsMatchingTarget(e,t){return re.resolve(null)}getIndexType(e,t){return re.resolve(0)}getFieldIndexes(e,t){return re.resolve([])}getNextCollectionGroupToUpdate(e){return re.resolve(null)}getMinOffset(e,t){return re.resolve(_s.min())}getMinOffsetFromCollectionGroup(e,t){return re.resolve(_s.min())}updateCollectionGroup(e,t,s){return re.resolve()}updateIndexEntries(e,t){return re.resolve()}}class i4{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Lt(it.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Lt(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const ST={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zw=41943040;class Sn{static withCacheSize(e){return new Sn(e,Sn.DEFAULT_COLLECTION_PERCENTILE,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Sn.DEFAULT_COLLECTION_PERCENTILE=10,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Sn.DEFAULT=new Sn(zw,Sn.DEFAULT_COLLECTION_PERCENTILE,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Sn.DISABLED=new Sn(-1,0,0);/**
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
 */class Qo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Qo(0)}static cr(){return new Qo(-1)}}/**
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
 */const AT="LruGarbageCollector",s4=1048576;function RT([r,e],[t,s]){const o=Ve(r,t);return o===0?Ve(e,s):o}class a4{constructor(e){this.Ir=e,this.buffer=new Lt(RT),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();RT(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class o4{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){de(AT,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){sl(t)?de(AT,"Ignoring IndexedDB error during garbage collection: ",t):await il(t)}await this.Vr(3e5)})}}class l4{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return re.resolve(Yf.ce);const s=new a4(t);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),re.resolve(ST)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ST):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,p,m,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,h=Date.now(),this.nthSequenceNumber(e,o))).next(w=>(s=w,p=Date.now(),this.removeTargets(e,s,t))).next(w=>(u=w,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(w=>(g=Date.now(),Io()<=Pe.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${w} documents in `+(g-m)+`ms
Total Duration: ${g-E}ms`),re.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w})))}}function u4(r,e){return new l4(r,e)}/**
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
 */class c4{constructor(){this.changes=new Oa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?re.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 * Copyright 2022 Google LLC
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
 */class h4{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class f4{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Ou(s.mutation,o,Vn.empty(),nt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const o=ma();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=wu();return u.forEach((p,m)=>{h=h.insert(p,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=ma();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,o){let u=Ii();const h=Nu(),p=function(){return Nu()}();return t.forEach((m,g)=>{const E=s.get(g.key);o.has(g.key)&&(E===void 0||E.mutation instanceof Is)?u=u.insert(g.key,g):E!==void 0?(h.set(g.key,E.mutation.getFieldMask()),Ou(E.mutation,g,E.mutation.getFieldMask(),nt.now())):h.set(g.key,Vn.empty())}),this.recalculateAndSaveOverlays(e,u).next(m=>(m.forEach((g,E)=>h.set(g,E)),t.forEach((g,E)=>p.set(g,new h4(E,h.get(g)??null))),p))}recalculateAndSaveOverlays(e,t){const s=Nu();let o=new ft((h,p)=>h-p),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let E=s.get(m)||Vn.empty();E=p.applyToLocalView(g,E),s.set(m,E);const w=(o.get(p.batchId)||Le()).add(m);o=o.insert(p.batchId,w)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,E=m.value,w=Tw();E.forEach(b=>{if(!u.has(b)){const I=xw(t.get(b),s.get(b));I!==null&&w.set(b,I),u=u.add(b)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,w))}return re.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return _e.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):re.resolve(ma());let p=Uu,m=u;return h.next(g=>re.forEach(g,(E,w)=>(p<w.largestBatchId&&(p=w.largestBatchId),u.get(E)?re.resolve():this.remoteDocumentCache.getEntry(e,E).next(b=>{m=m.insert(E,b)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,m,g,Le())).next(E=>({batchId:p,changes:Ew(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(s=>{let o=wu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=wu();return this.indexManager.getCollectionParents(e,u).next(p=>re.forEach(p,m=>{const g=function(w,b){return new al(b,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(E=>{E.forEach((w,b)=>{h=h.insert(w,b)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((m,g)=>{const E=g.getKey();h.get(E)===null&&(h=h.insert(E,pn.newInvalidDocument(E)))});let p=wu();return h.forEach((m,g)=>{const E=u.get(m);E!==void 0&&Ou(E.mutation,g,Vn.empty(),nt.now()),Zf(t,g)&&(p=p.insert(m,g))}),p})}}/**
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
 */class d4{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return re.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:zr(o.createTime)}}(t)),re.resolve()}getNamedQuery(e,t){return re.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(o){return{name:o.name,query:n4(o.bundledQuery),readTime:zr(o.readTime)}}(t)),re.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class p4{constructor(){this.overlays=new ft(_e.comparator),this.qr=new Map}getOverlay(e,t){return re.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ma();return re.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),re.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),re.resolve()}getOverlaysForCollection(e,t,s){const o=ma(),u=t.length+1,h=new _e(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>s&&o.set(m.getKey(),m)}return re.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new ft((g,E)=>g-E);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let E=u.get(g.largestBatchId);E===null&&(E=ma(),u=u.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const p=ma(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,E)=>p.set(g,E)),!(p.size()>=o)););return re.resolve(p)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new OO(t,s));let u=this.qr.get(t);u===void 0&&(u=Le(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class m4{constructor(){this.sessionToken=rn.EMPTY_BYTE_STRING}getSessionToken(e){return re.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,re.resolve()}}/**
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
 */class ry{constructor(){this.Qr=new Lt(Gt.$r),this.Ur=new Lt(Gt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Gt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new Gt(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new _e(new it([])),s=new Gt(t,e),o=new Gt(t,e+1),u=[];return this.Ur.forEachInRange([s,o],h=>{this.Gr(h),u.push(h.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new _e(new it([])),s=new Gt(t,e),o=new Gt(t,e+1);let u=Le();return this.Ur.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Gt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Gt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return _e.comparator(e.key,t.key)||Ve(e.Yr,t.Yr)}static Kr(e,t){return Ve(e.Yr,t.Yr)||_e.comparator(e.key,t.key)}}/**
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
 */class g4{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Lt(Gt.$r)}checkEmpty(e){return re.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new NO(u,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Zr=this.Zr.add(new Gt(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return re.resolve(h)}lookupMutationBatch(e,t){return re.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return re.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return re.resolve(this.mutationQueue.length===0?Qg:this.tr-1)}getAllMutationBatches(e){return re.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Gt(t,0),o=new Gt(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],h=>{const p=this.Xr(h.Yr);u.push(p)}),re.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Lt(Ve);return t.forEach(o=>{const u=new Gt(o,0),h=new Gt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],p=>{s=s.add(p.Yr)})}),re.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;_e.isDocumentKey(u)||(u=u.child(""));const h=new Gt(new _e(u),0);let p=new Lt(Ve);return this.Zr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Yr)),!0)},h),re.resolve(this.ti(p))}ti(e){const t=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ye(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return re.forEach(t.mutations,o=>{const u=new Gt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new Gt(t,0),o=this.Zr.firstAfterOrEqual(s);return re.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,re.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class y4{constructor(e){this.ri=e,this.docs=function(){return new ft(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return re.resolve(s?s.document.mutableCopy():pn.newInvalidDocument(t))}getEntries(e,t){let s=Ii();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():pn.newInvalidDocument(o))}),re.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ii();const h=t.path,p=new _e(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:E}}=m.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||$N(FN(E),s)<=0||(o.has(E.key)||Zf(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return re.resolve(u)}getAllFromCollectionGroup(e,t,s,o){we(9500)}ii(e,t){return re.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new _4(this)}getSize(e){return re.resolve(this.size)}}class _4 extends c4{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),re.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class v4{constructor(e){this.persistence=e,this.si=new Oa(t=>Wg(t),Zg),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new ry,this.targetCount=0,this.ai=Qo.ur()}forEachTarget(e,t){return this.si.forEach((s,o)=>t(o)),re.resolve()}getLastRemoteSnapshotVersion(e){return re.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return re.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),re.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),re.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Qo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,re.resolve()}updateTargetData(e,t){return this.Pr(t),re.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,re.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),re.waitFor(u).next(()=>o)}getTargetCount(e){return re.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return re.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),re.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),re.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),re.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return re.resolve(s)}containsKey(e,t){return re.resolve(this._i.containsKey(t))}}/**
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
 */class qw{constructor(e,t){this.ui={},this.overlays={},this.ci=new Yf(0),this.li=!1,this.li=!0,this.hi=new m4,this.referenceDelegate=e(this),this.Pi=new v4(this),this.indexManager=new r4,this.remoteDocumentCache=function(o){return new y4(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new t4(t),this.Ii=new d4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new p4,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new g4(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){de("MemoryPersistence","Starting transaction:",e);const o=new E4(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,t){return re.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class E4 extends YN{constructor(e){super(),this.currentSequenceNumber=e}}class iy{constructor(e){this.persistence=e,this.Ri=new ry,this.Vi=null}static mi(e){return new iy(e)}get fi(){if(this.Vi)return this.Vi;throw we(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),re.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),re.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),re.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return re.forEach(this.fi,s=>{const o=_e.fromPath(s);return this.gi(e,o).next(u=>{u||t.removeEntry(o,Ae.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return re.or([()=>re.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class If{constructor(e,t){this.persistence=e,this.pi=new Oa(s=>XN(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=u4(this,t)}static mi(e,t){return new If(e,t)}Ei(){}di(e){return re.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return re.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?re.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,h=>this.br(e,h,t).next(p=>{p||(s++,u.removeEntry(h,Ae.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),re.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),re.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),re.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),re.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=rf(e.data.value)),t}br(e,t,s){return re.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return re.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class sy{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Le(),o=Le();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new sy(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class T4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class b4{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return XI()?8:QN(mn())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ws(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new T4;return this.Ss(e,t,h).next(p=>{if(u.result=p,this.Vs)return this.bs(e,t,h,p.size)})}).next(()=>u.result)}bs(e,t,s,o){return s.documentReadCount<this.fs?(Io()<=Pe.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",Co(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),re.resolve()):(Io()<=Pe.DEBUG&&de("QueryEngine","Query:",Co(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Io()<=Pe.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",Co(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ur(t))):re.resolve())}ys(e,t){if(pT(t))return re.resolve(null);let s=Ur(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=hg(t,null,"F"),s=Ur(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Le(...u);return this.ps.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(m=>{const g=this.Ds(t,p);return this.Cs(t,g,h,m.readTime)?this.ys(e,hg(t,null,"F")):this.vs(e,g,t,m)}))})))}ws(e,t,s,o){return pT(t)||o.isEqual(Ae.min())?re.resolve(null):this.ps.getDocuments(e,s).next(u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?re.resolve(null):(Io()<=Pe.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Co(t)),this.vs(e,h,t,HN(o,Uu)).next(p=>p))})}Ds(e,t){let s=new Lt(_w(e));return t.forEach((o,u)=>{Zf(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return Io()<=Pe.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",Co(t)),this.ps.getDocumentsMatchingQuery(e,t,_s.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const ay="LocalStore",w4=3e8;class S4{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new ft(Ve),this.xs=new Oa(u=>Wg(u),Zg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new f4(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function A4(r,e,t,s){return new S4(r,e,t,s)}async function Bw(r,e){const t=Re(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let m=Le();for(const g of o){h.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}for(const g of u){p.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}return t.localDocuments.getDocuments(s,m).next(g=>({Ls:g,removedBatchIds:h,addedBatchIds:p}))})})}function R4(r,e){const t=Re(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return function(p,m,g,E){const w=g.batch,b=w.keys();let I=re.resolve();return b.forEach(P=>{I=I.next(()=>E.getEntry(m,P)).next(H=>{const z=g.docVersions.get(P);Ye(z!==null,48541),H.version.compareTo(z)<0&&(w.applyToRemoteDocument(H,g),H.isValidDocument()&&(H.setReadTime(g.commitVersion),E.addEntry(H)))})}),I.next(()=>p.mutationQueue.removeMutationBatch(m,w))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let m=Le();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Hw(r){const e=Re(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function x4(r,e){const t=Re(r),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const p=[];e.targetChanges.forEach((E,w)=>{const b=o.get(w);if(!b)return;p.push(t.Pi.removeMatchingKeys(u,E.removedDocuments,w).next(()=>t.Pi.addMatchingKeys(u,E.addedDocuments,w)));let I=b.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(w)!==null?I=I.withResumeToken(rn.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):E.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(E.resumeToken,s)),o=o.insert(w,I),function(H,z,$){return H.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=w4?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(b,I,E)&&p.push(t.Pi.updateTargetData(u,I))});let m=Ii(),g=Le();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))}),p.push(I4(u,h,e.documentUpdates).next(E=>{m=E.ks,g=E.qs})),!s.isEqual(Ae.min())){const E=t.Pi.getLastRemoteSnapshotVersion(u).next(w=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(E)}return re.waitFor(p).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,m,g)).next(()=>m)}).then(u=>(t.Ms=o,u))}function I4(r,e,t){let s=Le(),o=Le();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=Ii();return t.forEach((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(Ae.min())?(e.removeEntry(p,m.readTime),h=h.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),h=h.insert(p,m)):de(ay,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)}),{ks:h,qs:o}})}function C4(r,e){const t=Re(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Qg),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function D4(r,e){const t=Re(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Pi.getTargetData(s,e).next(u=>u?(o=u,re.resolve(o)):t.Pi.allocateTargetId(s).next(h=>(o=new hs(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function gg(r,e,t){const s=Re(r),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!sl(h))throw h;de(ay,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function xT(r,e,t){const s=Re(r);let o=Ae.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",h=>function(m,g,E){const w=Re(m),b=w.xs.get(E);return b!==void 0?re.resolve(w.Ms.get(b)):w.Pi.getTargetData(g,E)}(s,h,Ur(e)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,p.targetId).next(m=>{u=m})}).next(()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Ae.min(),t?u:Le())).next(p=>(N4(s,mO(e),p),{documents:p,Qs:u})))}function N4(r,e,t){let s=r.Os.get(e)||Ae.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Os.set(e,s)}class IT{constructor(){this.activeTargetIds=TO()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class O4{constructor(){this.Mo=new IT,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new IT,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class k4{Oo(e){}shutdown(){}}/**
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
 */const CT="ConnectivityMonitor";class DT{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){de(CT,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){de(CT,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let zh=null;function yg(){return zh===null?zh=function(){return 268435456+Math.round(2147483648*Math.random())}():zh++,"0x"+zh.toString(16)}/**
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
 */const Pm="RestConnection",M4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class P4{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===wf?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=yg(),p=this.zo(e,t.toUriEncodedString());de(Pm,`Sending RPC '${e}' ${h}:`,p,s);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:g}=new URL(p),E=el(g);return this.Jo(e,p,m,s,E).then(w=>(de(Pm,`Received RPC '${e}' ${h}: `,w),w),w=>{throw Fo(Pm,`RPC '${e}' ${h} failed with error: `,w,"url: ",p,"request:",s),w})}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,t){const s=M4[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class V4{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const un="WebChannelConnection";class L4 extends P4{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=yg();return new Promise((p,m)=>{const g=new $b;g.setWithCredentials(!0),g.listenOnce(Gb.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case nf.NO_ERROR:const w=g.getResponseJson();de(un,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(w)),p(w);break;case nf.TIMEOUT:de(un,`RPC '${e}' ${h} timed out`),m(new he(te.DEADLINE_EXCEEDED,"Request time out"));break;case nf.HTTP_ERROR:const b=g.getStatus();if(de(un,`RPC '${e}' ${h} failed with status:`,b,"response text:",g.getResponseText()),b>0){let I=g.getResponseJson();Array.isArray(I)&&(I=I[0]);const P=I==null?void 0:I.error;if(P&&P.status&&P.message){const H=function($){const q=$.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(q)>=0?q:te.UNKNOWN}(P.status);m(new he(H,P.message))}else m(new he(te.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new he(te.UNAVAILABLE,"Connection failed."));break;default:we(9055,{l_:e,streamId:h,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{de(un,`RPC '${e}' ${h} completed.`)}});const E=JSON.stringify(o);de(un,`RPC '${e}' ${h} sending request:`,o),g.send(t,"POST",E,s,15)})}T_(e,t,s){const o=yg(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Kb(),p=Qb(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const E=u.join("");de(un,`Creating RPC '${e}' stream ${o}: ${E}`,m);const w=h.createWebChannel(E,m);this.I_(w);let b=!1,I=!1;const P=new V4({Yo:z=>{I?de(un,`Not sending because RPC '${e}' stream ${o} is closed:`,z):(b||(de(un,`Opening RPC '${e}' stream ${o} transport.`),w.open(),b=!0),de(un,`RPC '${e}' stream ${o} sending:`,z),w.send(z))},Zo:()=>w.close()}),H=(z,$,q)=>{z.listen($,W=>{try{q(W)}catch(oe){setTimeout(()=>{throw oe},0)}})};return H(w,bu.EventType.OPEN,()=>{I||(de(un,`RPC '${e}' stream ${o} transport opened.`),P.o_())}),H(w,bu.EventType.CLOSE,()=>{I||(I=!0,de(un,`RPC '${e}' stream ${o} transport closed`),P.a_(),this.E_(w))}),H(w,bu.EventType.ERROR,z=>{I||(I=!0,Fo(un,`RPC '${e}' stream ${o} transport errored. Name:`,z.name,"Message:",z.message),P.a_(new he(te.UNAVAILABLE,"The operation could not be completed")))}),H(w,bu.EventType.MESSAGE,z=>{var $;if(!I){const q=z.data[0];Ye(!!q,16349);const W=q,oe=(W==null?void 0:W.error)||(($=W[0])==null?void 0:$.error);if(oe){de(un,`RPC '${e}' stream ${o} received error:`,oe);const le=oe.status;let fe=function(x){const k=At[x];if(k!==void 0)return Dw(k)}(le),D=oe.message;fe===void 0&&(fe=te.INTERNAL,D="Unknown error status: "+le+" with message "+oe.message),I=!0,P.a_(new he(fe,D)),w.close()}else de(un,`RPC '${e}' stream ${o} received:`,q),P.u_(q)}}),H(p,Yb.STAT_EVENT,z=>{z.stat===ig.PROXY?de(un,`RPC '${e}' stream ${o} detected buffering proxy`):z.stat===ig.NOPROXY&&de(un,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Vm(){return typeof document<"u"?document:null}/**
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
 */function nd(r){return new qO(r,!0)}/**
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
 */class Fw{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&de("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const NT="PersistentStream";class $w{constructor(e,t,s,o,u,h,p,m){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Fw(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===te.RESOURCE_EXHAUSTED?(xi(t.toString()),xi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===t&&this.G_(s,o)},s=>{e(()=>{const o=new he(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return de(NT,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(de(NT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class j4 extends $w{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=FO(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ae.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ae.min():h.readTime?zr(h.readTime):Ae.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=mg(this.serializer),t.addTarget=function(u,h){let p;const m=h.target;if(p=ug(m)?{documents:YO(u,m)}:{query:QO(u,m).ft},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=kw(u,h.resumeToken);const g=fg(u,h.expectedCount);g!==null&&(p.expectedCount=g)}else if(h.snapshotVersion.compareTo(Ae.min())>0){p.readTime=xf(u,h.snapshotVersion.toTimestamp());const g=fg(u,h.expectedCount);g!==null&&(p.expectedCount=g)}return p}(this.serializer,e);const s=XO(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=mg(this.serializer),t.removeTarget=e,this.q_(t)}}class U4 extends $w{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=GO(e.writeResults,e.commitTime),s=zr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=mg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>$O(this.serializer,s))};this.q_(t)}}/**
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
 */class z4{}class q4 extends z4{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new he(te.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Go(e,dg(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(te.UNKNOWN,u.toString())})}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Ho(e,dg(t,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new he(te.UNKNOWN,h.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class B4{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xi(t),this.aa=!1):de("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const xa="RemoteStore";class H4{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(h=>{s.enqueueAndForget(async()=>{ka(this)&&(de(xa,"Restarting streams for network reachability change."),await async function(m){const g=Re(m);g.Ea.add(4),await sc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await rd(g)}(this))})}),this.Ra=new B4(s,o)}}async function rd(r){if(ka(r))for(const e of r.da)await e(!0)}async function sc(r){for(const e of r.da)await e(!1)}function Gw(r,e){const t=Re(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),cy(t)?uy(t):ol(t).O_()&&ly(t,e))}function oy(r,e){const t=Re(r),s=ol(t);t.Ia.delete(e),s.O_()&&Yw(t,e),t.Ia.size===0&&(s.O_()?s.L_():ka(t)&&t.Ra.set("Unknown"))}function ly(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ol(r).Y_(e)}function Yw(r,e){r.Va.Ue(e),ol(r).Z_(e)}function uy(r){r.Va=new LO({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),ol(r).start(),r.Ra.ua()}function cy(r){return ka(r)&&!ol(r).x_()&&r.Ia.size>0}function ka(r){return Re(r).Ea.size===0}function Qw(r){r.Va=void 0}async function F4(r){r.Ra.set("Online")}async function $4(r){r.Ia.forEach((e,t)=>{ly(r,e)})}async function G4(r,e){Qw(r),cy(r)?(r.Ra.ha(e),uy(r)):r.Ra.set("Unknown")}async function Y4(r,e,t){if(r.Ra.set("Online"),e instanceof Ow&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ia.delete(p),o.Va.removeTarget(p))}(r,e)}catch(s){de(xa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Cf(r,s)}else if(e instanceof of?r.Va.Ze(e):e instanceof Nw?r.Va.st(e):r.Va.tt(e),!t.isEqual(Ae.min()))try{const s=await Hw(r.localStore);t.compareTo(s)>=0&&await function(u,h){const p=u.Va.Tt(h);return p.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const E=u.Ia.get(g);E&&u.Ia.set(g,E.withResumeToken(m.resumeToken,h))}}),p.targetMismatches.forEach((m,g)=>{const E=u.Ia.get(m);if(!E)return;u.Ia.set(m,E.withResumeToken(rn.EMPTY_BYTE_STRING,E.snapshotVersion)),Yw(u,m);const w=new hs(E.target,m,g,E.sequenceNumber);ly(u,w)}),u.remoteSyncer.applyRemoteEvent(p)}(r,t)}catch(s){de(xa,"Failed to raise snapshot:",s),await Cf(r,s)}}async function Cf(r,e,t){if(!sl(e))throw e;r.Ea.add(1),await sc(r),r.Ra.set("Offline"),t||(t=()=>Hw(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{de(xa,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await rd(r)})}function Kw(r,e){return e().catch(t=>Cf(r,t,e))}async function id(r){const e=Re(r),t=bs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Qg;for(;Q4(e);)try{const o=await C4(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,K4(e,o)}catch(o){await Cf(e,o)}Xw(e)&&Ww(e)}function Q4(r){return ka(r)&&r.Ta.length<10}function K4(r,e){r.Ta.push(e);const t=bs(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Xw(r){return ka(r)&&!bs(r).x_()&&r.Ta.length>0}function Ww(r){bs(r).start()}async function X4(r){bs(r).ra()}async function W4(r){const e=bs(r);for(const t of r.Ta)e.ea(t.mutations)}async function Z4(r,e,t){const s=r.Ta.shift(),o=ey.from(s,e,t);await Kw(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await id(r)}async function J4(r,e){e&&bs(r).X_&&await async function(s,o){if(function(h){return MO(h)&&h!==te.ABORTED}(o.code)){const u=s.Ta.shift();bs(s).B_(),await Kw(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await id(s)}}(r,e),Xw(r)&&Ww(r)}async function OT(r,e){const t=Re(r);t.asyncQueue.verifyOperationInProgress(),de(xa,"RemoteStore received new credentials");const s=ka(t);t.Ea.add(3),await sc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await rd(t)}async function ek(r,e){const t=Re(r);e?(t.Ea.delete(2),await rd(t)):e||(t.Ea.add(2),await sc(t),t.Ra.set("Unknown"))}function ol(r){return r.ma||(r.ma=function(t,s,o){const u=Re(t);return u.sa(),new j4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:F4.bind(null,r),t_:$4.bind(null,r),r_:G4.bind(null,r),H_:Y4.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),cy(r)?uy(r):r.Ra.set("Unknown")):(await r.ma.stop(),Qw(r))})),r.ma}function bs(r){return r.fa||(r.fa=function(t,s,o){const u=Re(t);return u.sa(),new U4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:X4.bind(null,r),r_:J4.bind(null,r),ta:W4.bind(null,r),na:Z4.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await id(r)):(await r.fa.stop(),r.Ta.length>0&&(de(xa,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class hy{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,p=new hy(e,t,h,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fy(r,e){if(xi("AsyncQueue",`${e}: ${r}`),sl(r))return new he(te.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Lo{static emptySet(e){return new Lo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||_e.comparator(t.key,s.key):(t,s)=>_e.comparator(t.key,s.key),this.keyedMap=wu(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Lo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Lo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class kT{constructor(){this.ga=new ft(_e.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):we(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class Ko{constructor(e,t,s,o,u,h,p,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(p=>{h.push({type:0,doc:p})}),new Ko(e,t,Lo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class tk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class nk{constructor(){this.queries=MT(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Re(t),u=o.queries;o.queries=MT(),u.forEach((h,p)=>{for(const m of p.Sa)m.onError(s)})})(this,new he(te.ABORTED,"Firestore shutting down"))}}function MT(){return new Oa(r=>yw(r),Wf)}async function dy(r,e){const t=Re(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new tk,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=fy(h,`Initialization of query '${Co(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&my(t)}async function py(r,e){const t=Re(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function rk(r,e){const t=Re(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const p of h.Sa)p.Fa(o)&&(s=!0);h.wa=o}}s&&my(t)}function ik(r,e,t){const s=Re(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function my(r){r.Ca.forEach(e=>{e.next()})}var _g,PT;(PT=_g||(_g={})).Ma="default",PT.Cache="cache";class gy{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Ko(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==_g.Cache}}/**
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
 */class Zw{constructor(e){this.key=e}}class Jw{constructor(e){this.key=e}}class sk{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Le(),this.mutatedKeys=Le(),this.eu=_w(e),this.tu=new Lo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new kT,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,w)=>{const b=o.get(E),I=Zf(this.query,w)?w:null,P=!!b&&this.mutatedKeys.has(b.key),H=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let z=!1;b&&I?b.data.isEqual(I.data)?P!==H&&(s.track({type:3,doc:I}),z=!0):this.su(b,I)||(s.track({type:2,doc:I}),z=!0,(m&&this.eu(I,m)>0||g&&this.eu(I,g)<0)&&(p=!0)):!b&&I?(s.track({type:0,doc:I}),z=!0):b&&!I&&(s.track({type:1,doc:b}),z=!0,(m||g)&&(p=!0)),z&&(I?(h=h.add(I),u=H?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Cs:p,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort((E,w)=>function(I,P){const H=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{Rt:z})}};return H(I)-H(P)}(E.type,w.type)||this.eu(E.doc,w.doc)),this.ou(s),o=o??!1;const p=t&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,g=m!==this.Za;return this.Za=m,h.length!==0||g?{snapshot:new Ko(this.query,e.tu,u,h,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new kT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Le(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new Jw(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new Zw(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=Le();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ko.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const yy="SyncEngine";class ak{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class ok{constructor(e){this.key=e,this.hu=!1}}class lk{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Oa(p=>yw(p),Wf),this.Iu=new Map,this.Eu=new Set,this.du=new ft(_e.comparator),this.Au=new Map,this.Ru=new ry,this.Vu={},this.mu=new Map,this.fu=Qo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function uk(r,e,t=!0){const s=sS(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await eS(s,e,t,!0),o}async function ck(r,e){const t=sS(r);await eS(t,e,!0,!1)}async function eS(r,e,t,s){const o=await D4(r.localStore,Ur(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let p;return s&&(p=await hk(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Gw(r.remoteStore,o),p}async function hk(r,e,t,s,o){r.pu=(w,b,I)=>async function(H,z,$,q){let W=z.view.ru($);W.Cs&&(W=await xT(H.localStore,z.query,!1).then(({documents:D})=>z.view.ru(D,W)));const oe=q&&q.targetChanges.get(z.targetId),le=q&&q.targetMismatches.get(z.targetId)!=null,fe=z.view.applyChanges(W,H.isPrimaryClient,oe,le);return LT(H,z.targetId,fe.au),fe.snapshot}(r,w,b,I);const u=await xT(r.localStore,e,!0),h=new sk(e,u.Qs),p=h.ru(u.documents),m=ic.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),g=h.applyChanges(p,r.isPrimaryClient,m);LT(r,t,g.au);const E=new ak(e,t,h);return r.Tu.set(e,E),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),g.snapshot}async function fk(r,e,t){const s=Re(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(h=>!Wf(h,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await gg(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&oy(s.remoteStore,o.targetId),vg(s,o.targetId)}).catch(il)):(vg(s,o.targetId),await gg(s.localStore,o.targetId,!0))}async function dk(r,e){const t=Re(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),oy(t.remoteStore,s.targetId))}async function pk(r,e,t){const s=Tk(r);try{const o=await function(h,p){const m=Re(h),g=nt.now(),E=p.reduce((I,P)=>I.add(P.key),Le());let w,b;return m.persistence.runTransaction("Locally write mutations","readwrite",I=>{let P=Ii(),H=Le();return m.Ns.getEntries(I,E).next(z=>{P=z,P.forEach(($,q)=>{q.isValidDocument()||(H=H.add($))})}).next(()=>m.localDocuments.getOverlayedDocuments(I,P)).next(z=>{w=z;const $=[];for(const q of p){const W=CO(q,w.get(q.key).overlayedDocument);W!=null&&$.push(new Is(q.key,W,uw(W.value.mapValue),fr.exists(!0)))}return m.mutationQueue.addMutationBatch(I,g,$,p)}).next(z=>{b=z;const $=z.applyToLocalDocumentSet(w,H);return m.documentOverlayCache.saveOverlays(I,z.batchId,$)})}).then(()=>({batchId:b.batchId,changes:Ew(w)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,m){let g=h.Vu[h.currentUser.toKey()];g||(g=new ft(Ve)),g=g.insert(p,m),h.Vu[h.currentUser.toKey()]=g}(s,o.batchId,t),await ac(s,o.changes),await id(s.remoteStore)}catch(o){const u=fy(o,"Failed to persist write");t.reject(u)}}async function tS(r,e){const t=Re(r);try{const s=await x4(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Au.get(u);h&&(Ye(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Ye(h.hu,14607):o.removedDocuments.size>0&&(Ye(h.hu,42227),h.hu=!1))}),await ac(t,s,e)}catch(s){await il(s)}}function VT(r,e,t){const s=Re(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach((u,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const m=Re(h);m.onlineState=p;let g=!1;m.queries.forEach((E,w)=>{for(const b of w.Sa)b.va(p)&&(g=!0)}),g&&my(m)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function mk(r,e,t){const s=Re(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new ft(_e.comparator);h=h.insert(u,pn.newNoDocument(u,Ae.min()));const p=Le().add(u),m=new td(Ae.min(),new Map,new ft(Ve),h,p);await tS(s,m),s.du=s.du.remove(u),s.Au.delete(e),_y(s)}else await gg(s.localStore,e,!1).then(()=>vg(s,e,t)).catch(il)}async function gk(r,e){const t=Re(r),s=e.batch.batchId;try{const o=await R4(t.localStore,e);rS(t,s,null),nS(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ac(t,o)}catch(o){await il(o)}}async function yk(r,e,t){const s=Re(r);try{const o=await function(h,p){const m=Re(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return m.mutationQueue.lookupMutationBatch(g,p).next(w=>(Ye(w!==null,37113),E=w.keys(),m.mutationQueue.removeMutationBatch(g,w))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,E,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>m.localDocuments.getDocuments(g,E))})}(s.localStore,e);rS(s,e,t),nS(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ac(s,o)}catch(o){await il(o)}}function nS(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function rS(r,e,t){const s=Re(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function vg(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(s=>{r.Ru.containsKey(s)||iS(r,s)})}function iS(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(oy(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),_y(r))}function LT(r,e,t){for(const s of t)s instanceof Zw?(r.Ru.addReference(s.key,e),_k(r,s)):s instanceof Jw?(de(yy,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||iS(r,s.key)):we(19791,{wu:s})}function _k(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Eu.has(s)||(de(yy,"New document in limbo: "+t),r.Eu.add(s),_y(r))}function _y(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new _e(it.fromString(e)),s=r.fu.next();r.Au.set(s,new ok(t)),r.du=r.du.insert(t,s),Gw(r.remoteStore,new hs(Ur(Xf(t.path)),s,"TargetPurposeLimboResolution",Yf.ce))}}async function ac(r,e,t){const s=Re(r),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach((p,m)=>{h.push(s.pu(m,e,t).then(g=>{var E;if((g||t)&&s.isPrimaryClient){const w=g?!g.fromCache:(E=t==null?void 0:t.targetChanges.get(m.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(m.targetId,w?"current":"not-current")}if(g){o.push(g);const w=sy.As(m.targetId,g);u.push(w)}}))}),await Promise.all(h),s.Pu.H_(o),await async function(m,g){const E=Re(m);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>re.forEach(g,b=>re.forEach(b.Es,I=>E.persistence.referenceDelegate.addReference(w,b.targetId,I)).next(()=>re.forEach(b.ds,I=>E.persistence.referenceDelegate.removeReference(w,b.targetId,I)))))}catch(w){if(!sl(w))throw w;de(ay,"Failed to update sequence numbers: "+w)}for(const w of g){const b=w.targetId;if(!w.fromCache){const I=E.Ms.get(b),P=I.snapshotVersion,H=I.withLastLimboFreeSnapshotVersion(P);E.Ms=E.Ms.insert(b,H)}}}(s.localStore,u))}async function vk(r,e){const t=Re(r);if(!t.currentUser.isEqual(e)){de(yy,"User change. New user:",e.toKey());const s=await Bw(t.localStore,e);t.currentUser=e,function(u,h){u.mu.forEach(p=>{p.forEach(m=>{m.reject(new he(te.CANCELLED,h))})}),u.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ac(t,s.Ls)}}function Ek(r,e){const t=Re(r),s=t.Au.get(e);if(s&&s.hu)return Le().add(s.key);{let o=Le();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const p=t.Tu.get(h);o=o.unionWith(p.view.nu)}return o}}function sS(r){const e=Re(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=tS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ek.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mk.bind(null,e),e.Pu.H_=rk.bind(null,e.eventManager),e.Pu.yu=ik.bind(null,e.eventManager),e}function Tk(r){const e=Re(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yk.bind(null,e),e}class Df{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return A4(this.persistence,new b4,e.initialUser,this.serializer)}Cu(e){return new qw(iy.mi,this.serializer)}Du(e){return new O4}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Df.provider={build:()=>new Df};class bk extends Df{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ye(this.persistence.referenceDelegate instanceof If,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new o4(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Sn.withCacheSize(this.cacheSizeBytes):Sn.DEFAULT;return new qw(s=>If.mi(s,t),this.serializer)}}class Eg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>VT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=vk.bind(null,this.syncEngine),await ek(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nk}()}createDatastore(e){const t=nd(e.databaseInfo.databaseId),s=function(u){return new L4(u)}(e.databaseInfo);return function(u,h,p,m){return new q4(u,h,p,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,p){return new H4(s,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>VT(this.syncEngine,t,0),function(){return DT.v()?new DT:new k4}())}createSyncEngine(e,t){return function(o,u,h,p,m,g,E){const w=new lk(o,u,h,p,m,g);return E&&(w.gu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Re(o);de(xa,"RemoteStore shutting down."),u.Ea.add(5),await sc(u),u.Aa.shutdown(),u.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Eg.provider={build:()=>new Eg};/**
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
 */class vy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xi("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const ws="FirestoreClient";class wk{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=dn.UNAUTHENTICATED,this.clientId=Yg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{de(ws,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(de(ws,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=fy(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Lm(r,e){r.asyncQueue.verifyOperationInProgress(),de(ws,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Bw(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function jT(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Sk(r);de(ws,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>OT(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>OT(e.remoteStore,o)),r._onlineComponents=e}async function Sk(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){de(ws,"Using user provided OfflineComponentProvider");try{await Lm(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===te.FAILED_PRECONDITION||o.code===te.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Fo("Error using user provided cache. Falling back to memory cache: "+t),await Lm(r,new Df)}}else de(ws,"Using default OfflineComponentProvider"),await Lm(r,new bk(void 0));return r._offlineComponents}async function aS(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(de(ws,"Using user provided OnlineComponentProvider"),await jT(r,r._uninitializedComponentsProvider._online)):(de(ws,"Using default OnlineComponentProvider"),await jT(r,new Eg))),r._onlineComponents}function Ak(r){return aS(r).then(e=>e.syncEngine)}async function Nf(r){const e=await aS(r),t=e.eventManager;return t.onListen=uk.bind(null,e.syncEngine),t.onUnlisten=fk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ck.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=dk.bind(null,e.syncEngine),t}function Rk(r,e,t={}){const s=new bi;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const E=new vy({next:b=>{E.Nu(),h.enqueueAndForget(()=>py(u,w));const I=b.docs.has(p);!I&&b.fromCache?g.reject(new he(te.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&b.fromCache&&m&&m.source==="server"?g.reject(new he(te.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(b)},error:b=>g.reject(b)}),w=new gy(Xf(p.path),E,{includeMetadataChanges:!0,qa:!0});return dy(u,w)}(await Nf(r),r.asyncQueue,e,t,s)),s.promise}function xk(r,e,t={}){const s=new bi;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const E=new vy({next:b=>{E.Nu(),h.enqueueAndForget(()=>py(u,w)),b.fromCache&&m.source==="server"?g.reject(new he(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(b)},error:b=>g.reject(b)}),w=new gy(p,E,{includeMetadataChanges:!0,qa:!0});return dy(u,w)}(await Nf(r),r.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function oS(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const UT=new Map;/**
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
 */const lS="firestore.googleapis.com",zT=!0;class qT{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lS,this.ssl=zT}else this.host=e.host,this.ssl=e.ssl??zT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<s4)throw new he(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oS(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sd{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ON;switch(s.type){case"firstParty":return new VN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=UT.get(t);s&&(de("ComponentProvider","Removing Datastore"),UT.delete(t),s.terminate())}(this),Promise.resolve()}}function Ik(r,e,t,s={}){var g;r=Ln(r,sd);const o=el(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${t}`;o&&(nb(`https://${p}`),rb("Firestore",!0)),u.host!==lS&&u.host!==p&&Fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:s};if(!ba(m,h)&&(r._setSettings(m),s.mockUserToken)){let E,w;if(typeof s.mockUserToken=="string")E=s.mockUserToken,w=dn.MOCK_USER;else{E=qI(s.mockUserToken,(g=r._app)==null?void 0:g.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new he(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new dn(b)}r._authCredentials=new kN(new Wb(E,w))}}/**
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
 */class Cs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Cs(this.firestore,e,this._query)}}class gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(nc(t,gt._jsonSchema))return new gt(e,s||null,new _e(it.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:It("string",gt._jsonSchemaVersion),referencePath:It("string")};class ys extends Cs{constructor(e,t,s){super(e,t,Xf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new _e(e))}withConverter(e){return new ys(this.firestore,e,this._path)}}function wi(r,e,...t){if(r=Ct(r),Zb("collection","path",e),r instanceof sd){const s=it.fromString(e,...t);return eT(s),new ys(r,null,s)}{if(!(r instanceof gt||r instanceof ys))throw new he(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...t));return eT(s),new ys(r.firestore,null,s)}}function dr(r,e,...t){if(r=Ct(r),arguments.length===1&&(e=Yg.newId()),Zb("doc","path",e),r instanceof sd){const s=it.fromString(e,...t);return JE(s),new gt(r,null,new _e(s))}{if(!(r instanceof gt||r instanceof ys))throw new he(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...t));return JE(s),new gt(r.firestore,r instanceof ys?r.converter:null,new _e(s))}}/**
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
 */const BT="AsyncQueue";class HT{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Fw(this,"async_queue_retry"),this._c=()=>{const s=Vm();s&&de(BT,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Vm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Vm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new bi;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!sl(e))throw e;de(BT,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,xi("INTERNAL UNHANDLED ERROR: ",FT(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=hy.createAndSchedule(this,e,t,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&we(47125,{Pc:FT(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function FT(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function $T(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class Ss extends sd{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new HT,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new HT(e),this._firestoreClient=void 0,await e}}}function uS(r,e){const t=typeof r=="object"?r:ob(),s=typeof r=="string"?r:wf,o=Lg(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=UI("firestore");u&&Ik(o,...u)}return o}function ad(r){if(r._terminated)throw new he(te.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ck(r),r._firestoreClient}function Ck(r){var s,o,u;const e=r._freezeSettings(),t=function(p,m,g,E){return new JN(p,m,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,oS(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new wk(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(p){const m=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(m),_online:m}}(r._componentsProvider))}/**
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
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(rn.fromBase64String(e))}catch(t){throw new he(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new er(rn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:er._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(nc(e,er._jsonSchema))return er.fromBase64String(e.bytes)}}er._jsonSchemaVersion="firestore/bytes/1.0",er._jsonSchema={type:It("string",er._jsonSchemaVersion),bytes:It("string")};/**
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
 */class od{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ld{constructor(e){this._methodName=e}}/**
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
 */class qr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:qr._jsonSchemaVersion}}static fromJSON(e){if(nc(e,qr._jsonSchema))return new qr(e.latitude,e.longitude)}}qr._jsonSchemaVersion="firestore/geoPoint/1.0",qr._jsonSchema={type:It("string",qr._jsonSchemaVersion),latitude:It("number"),longitude:It("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Br{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Br._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(nc(e,Br._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Br(e.vectorValues);throw new he(te.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Br._jsonSchemaVersion="firestore/vectorValue/1.0",Br._jsonSchema={type:It("string",Br._jsonSchemaVersion),vectorValues:It("object")};/**
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
 */const Dk=/^__.*__$/;class Nk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Is(e,this.data,this.fieldMask,t,this.fieldTransforms):new rc(e,this.data,t,this.fieldTransforms)}}class cS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Is(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hS(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ac:r})}}class Ey{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ey({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Of(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(hS(this.Ac)&&Dk.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Ok{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||nd(e)}Cc(e,t,s,o=!1){return new Ey({Ac:e,methodName:t,Dc:s,path:nn.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ud(r){const e=r._freezeSettings(),t=nd(r._databaseId);return new Ok(r._databaseId,!!e.ignoreUndefinedProperties,t)}function fS(r,e,t,s,o,u={}){const h=r.Cc(u.merge||u.mergeFields?2:0,e,t,o);by("Data must be an object, but it was:",h,s);const p=dS(s,h);let m,g;if(u.merge)m=new Vn(h.fieldMask),g=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const w of u.mergeFields){const b=Tg(e,w,t);if(!h.contains(b))throw new he(te.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);mS(E,b)||E.push(b)}m=new Vn(E),g=h.fieldTransforms.filter(w=>m.covers(w.field))}else m=null,g=h.fieldTransforms;return new Nk(new An(p),m,g)}class cd extends ld{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cd}}class Ty extends ld{_toFieldTransform(e){return new AO(e.path,new Fu)}isEqual(e){return e instanceof Ty}}function kk(r,e,t,s){const o=r.Cc(1,e,t);by("Data must be an object, but it was:",o,s);const u=[],h=An.empty();xs(s,(m,g)=>{const E=wy(e,m,t);g=Ct(g);const w=o.yc(E);if(g instanceof cd)u.push(E);else{const b=oc(g,w);b!=null&&(u.push(E),h.set(E,b))}});const p=new Vn(u);return new cS(h,p,o.fieldTransforms)}function Mk(r,e,t,s,o,u){const h=r.Cc(1,e,t),p=[Tg(e,s,t)],m=[o];if(u.length%2!=0)throw new he(te.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<u.length;b+=2)p.push(Tg(e,u[b])),m.push(u[b+1]);const g=[],E=An.empty();for(let b=p.length-1;b>=0;--b)if(!mS(g,p[b])){const I=p[b];let P=m[b];P=Ct(P);const H=h.yc(I);if(P instanceof cd)g.push(I);else{const z=oc(P,H);z!=null&&(g.push(I),E.set(I,z))}}const w=new Vn(g);return new cS(E,w,h.fieldTransforms)}function Pk(r,e,t,s=!1){return oc(t,r.Cc(s?4:3,e))}function oc(r,e){if(pS(r=Ct(r)))return by("Unsupported field value:",e,r),dS(r,e);if(r instanceof ld)return function(s,o){if(!hS(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let m=oc(p,o.wc(h));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=Ct(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return bO(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=nt.fromDate(s);return{timestampValue:xf(o.serializer,u)}}if(s instanceof nt){const u=new nt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:xf(o.serializer,u)}}if(s instanceof qr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof er)return{bytesValue:kw(o.serializer,s._byteString)};if(s instanceof gt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:ny(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Br)return function(h,p){return{mapValue:{fields:{[ow]:{stringValue:lw},[Sf]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return Jg(p.serializer,g)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${Gf(s)}`)}(r,e)}function dS(r,e){const t={};return tw(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(r,(s,o)=>{const u=oc(o,e.mc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function pS(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof nt||r instanceof qr||r instanceof er||r instanceof gt||r instanceof ld||r instanceof Br)}function by(r,e,t){if(!pS(t)||!Jb(t)){const s=Gf(t);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function Tg(r,e,t){if((e=Ct(e))instanceof od)return e._internalPath;if(typeof e=="string")return wy(r,e);throw Of("Field path arguments must be of type string or ",r,!1,void 0,t)}const Vk=new RegExp("[~\\*/\\[\\]]");function wy(r,e,t){if(e.search(Vk)>=0)throw Of(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new od(...e.split("."))._internalPath}catch{throw Of(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Of(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||h)&&(m+=" (found",u&&(m+=` in field ${s}`),h&&(m+=` in document ${o}`),m+=")"),new he(te.INVALID_ARGUMENT,p+r+m)}function mS(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class gS{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(hd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Lk extends gS{data(){return super.data()}}function hd(r,e){return typeof e=="string"?wy(r,e):e instanceof od?e._internalPath:e._delegate._internalPath}/**
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
 */function yS(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new he(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sy{}class _S extends Sy{}function Ia(r,e,...t){let s=[];e instanceof Sy&&s.push(e),s=s.concat(t),function(u){const h=u.filter(m=>m instanceof Ay).length,p=u.filter(m=>m instanceof fd).length;if(h>1||h>0&&p>0)throw new he(te.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class fd extends _S{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new fd(e,t,s)}_apply(e){const t=this._parse(e);return vS(e._query,t),new Cs(e.firestore,e.converter,cg(e._query,t))}_parse(e){const t=ud(e.firestore);return function(u,h,p,m,g,E,w){let b;if(g.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new he(te.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){YT(w,E);const P=[];for(const H of w)P.push(GT(m,u,H));b={arrayValue:{values:P}}}else b=GT(m,u,w)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||YT(w,E),b=Pk(p,h,w,E==="in"||E==="not-in");return xt.create(g,E,b)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ca(r,e,t){const s=e,o=hd("where",r);return fd._create(o,s,t)}class Ay extends Sy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ay(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:gr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const p=u.getFlattenedFilters();for(const m of p)vS(h,m),h=cg(h,m)}(e._query,t),new Cs(e.firestore,e.converter,cg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ry extends _S{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ry(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new he(te.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new he(te.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hu(u,h)}(e._query,this._field,this._direction);return new Cs(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new al(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function xy(r,e="asc"){const t=e,s=hd("orderBy",r);return Ry._create(s,t)}function GT(r,e,t){if(typeof(t=Ct(t))=="string"){if(t==="")throw new he(te.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gw(e)&&t.indexOf("/")!==-1)throw new he(te.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(it.fromString(t));if(!_e.isDocumentKey(s))throw new he(te.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return lT(r,new _e(s))}if(t instanceof gt)return lT(r,t._key);throw new he(te.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gf(t)}.`)}function YT(r,e){if(!Array.isArray(r)||r.length===0)throw new he(te.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vS(r,e){const t=function(o,u){for(const h of o)for(const p of h.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new he(te.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(te.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class jk{convertValue(e,t="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return xs(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Sf].arrayValue)==null?void 0:o.values)==null?void 0:u.map(h=>Et(h.doubleValue));return new Br(t)}convertGeoPoint(e){return new qr(Et(e.latitude),Et(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Kf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(zu(e));default:return null}}convertTimestamp(e){const t=vs(e);return new nt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=it.fromString(e);Ye(Uw(s),9688,{name:e});const o=new qu(s.get(1),s.get(3)),u=new _e(s.popFirst(5));return o.isEqual(t)||xi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function ES(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Au{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ya extends gS{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(hd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(te.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ya._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ya._jsonSchemaVersion="firestore/documentSnapshot/1.0",ya._jsonSchema={type:It("string",ya._jsonSchemaVersion),bundleSource:It("string","DocumentSnapshot"),bundleName:It("string"),bundle:It("string")};class lf extends ya{data(e={}){return super.data(e)}}class _a{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Au(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new lf(this._firestore,this._userDataWriter,s.key,s,new Au(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(p=>{const m=new lf(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Au(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const m=new lf(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Au(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,E=-1;return p.type!==0&&(g=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),E=h.indexOf(p.doc.key)),{type:Uk(p.type),doc:m,oldIndex:g,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(te.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_a._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Uk(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:r})}}/**
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
 */function Iy(r){r=Ln(r,gt);const e=Ln(r.firestore,Ss);return Rk(ad(e),r._key).then(t=>bS(e,r,t))}_a._jsonSchemaVersion="firestore/querySnapshot/1.0",_a._jsonSchema={type:It("string",_a._jsonSchemaVersion),bundleSource:It("string","QuerySnapshot"),bundleName:It("string"),bundle:It("string")};class Cy extends jk{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}function TS(r){r=Ln(r,Cs);const e=Ln(r.firestore,Ss),t=ad(e),s=new Cy(e);return yS(r._query),xk(t,r._query).then(o=>new _a(e,s,r,o))}function zk(r,e,t){r=Ln(r,gt);const s=Ln(r.firestore,Ss),o=ES(r.converter,e);return Dy(s,[fS(ud(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,fr.none())])}function va(r,e,t,...s){r=Ln(r,gt);const o=Ln(r.firestore,Ss),u=ud(o);let h;return h=typeof(e=Ct(e))=="string"||e instanceof od?Mk(u,"updateDoc",r._key,e,t,s):kk(u,"updateDoc",r._key,e),Dy(o,[h.toMutation(r._key,fr.exists(!0))])}function qk(r,e){const t=Ln(r.firestore,Ss),s=dr(r),o=ES(r.converter,e);return Dy(t,[fS(ud(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,fr.exists(!1))]).then(()=>s)}function dd(r,...e){var m,g,E;r=Ct(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||$T(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if($T(e[s])){const w=e[s];e[s]=(m=w.next)==null?void 0:m.bind(w),e[s+1]=(g=w.error)==null?void 0:g.bind(w),e[s+2]=(E=w.complete)==null?void 0:E.bind(w)}let u,h,p;if(r instanceof gt)h=Ln(r.firestore,Ss),p=Xf(r._key.path),u={next:w=>{e[s]&&e[s](bS(h,r,w))},error:e[s+1],complete:e[s+2]};else{const w=Ln(r,Cs);h=Ln(w.firestore,Ss),p=w._query;const b=new Cy(h);u={next:I=>{e[s]&&e[s](new _a(h,b,w,I))},error:e[s+1],complete:e[s+2]},yS(r._query)}return function(b,I,P,H){const z=new vy(H),$=new gy(I,z,P);return b.asyncQueue.enqueueAndForget(async()=>dy(await Nf(b),$)),()=>{z.Nu(),b.asyncQueue.enqueueAndForget(async()=>py(await Nf(b),$))}}(ad(h),p,o,u)}function Dy(r,e){return function(s,o){const u=new bi;return s.asyncQueue.enqueueAndForget(async()=>pk(await Ak(s),o,u)),u.promise}(ad(r),e)}function bS(r,e,t){const s=t.docs.get(e._key),o=new Cy(r);return new ya(r,o,e._key,s,new Au(t.hasPendingWrites,t.fromCache),e.converter)}function QT(){return new Ty("serverTimestamp")}(function(e,t=!0){(function(o){rl=o})(tl),Bo(new wa("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new Ss(new MN(s.getProvider("auth-internal")),new LN(h,s.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new he(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qu(g.options.projectId,E)}(h,o),h);return u={useFetchStreams:t,...u},p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),ms(KE,XE,e),ms(KE,XE,"esm2020")})();const Bk={apiKey:"AIzaSyB5aFUQbtG1rShW-1O88aZjCG7uErNxmgQ",authDomain:"pdms-test-8a5cc.firebaseapp.com",projectId:"pdms-test-8a5cc",storageBucket:"pdms-test-8a5cc.firebasestorage.app",messagingSenderId:"631678861167",appId:"1:631678861167:web:5cd775b77e53535700329a"},Ny=ab(Bk);uS(Ny);const Vt=uS(Ny),Da=IN(Ny);function Hk({onLoginSuccess:r}){const[e,t]=Q.useState(""),[s,o]=Q.useState(""),u=Qu(),h=()=>{u("/signup")},p=()=>{f2(Da,e,s).then(()=>{r(),u("/dashboard")}).catch(m=>{alert("로그인 실패: "+m.message)})};return _.jsxs(Fk,{children:[_.jsxs($k,{children:[_.jsxs(Gk,{children:[_.jsx(Yk,{children:"PDMS"}),_.jsx(Qk,{children:"Pushcomz Design Management System"})]}),_.jsxs(Kk,{children:[_.jsx(Xk,{type:"text",value:e,onChange:m=>t(m.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(Wk,{type:"password",value:s,onChange:m=>o(m.target.value),placeholder:"비밀번호를 입력해주세요."})]}),_.jsx(Zk,{onClick:p,children:"로그인"}),_.jsxs(eM,{children:[_.jsx(tM,{children:"계정이 없습니까?"}),_.jsx(nM,{onClick:h,children:"등록하기"})]})]}),_.jsx(Jk,{children:"© Pushcomz Corp."})]})}const Fk=G.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:r})=>r.colors.gray01};
`,$k=G.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:r})=>r.colors.white01};
`,Gk=G.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,Yk=G.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.navy};
`,Qk=G.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,Kk=G.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
`,Xk=G.input`
  width: 460px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,Wk=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,Zk=G.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:r})=>r.colors.white01};
`,Jk=G.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`,eM=G.div`
  
`,tM=G.span`
  margin-right: 10px;
  font-size: 13px;
`,nM=G.button`
  font-size: 13px;
  color: ${({theme:r})=>r.colors.navy};
`,wS="./assets/logo-NEcdCz8m.svg";function rM(){const[r,e]=Q.useState(""),[t,s]=Q.useState(null),o=Qu();Q.useEffect(()=>{const p=Hf(Da,async m=>{if(m){m.displayName&&e(m.displayName);const g=await Iy(dr(Vt,"users",m.uid));g.exists()?s(g.data().role):s(null)}else e(""),s(null)});return()=>p()},[]);const u=()=>{y2(Da).then(()=>{o("/")}).catch(p=>{alert("로그아웃 중 오류가 발생했습니다: "+p.message)})},h=p=>{switch(p){case 1:return"요청자";case 2:return"디자이너";case 3:return"담당자";default:return"역할 없음"}};return _.jsxs(iM,{children:[_.jsx(sM,{src:wS}),_.jsxs(aM,{children:[_.jsxs(oM,{children:[_.jsx(lM,{children:r}),"님(",h(t),") 환영합니다."]}),_.jsx(uM,{onClick:u,children:"로그아웃"}),_.jsx(cM,{})]})]})}const iM=G.header`
  ${({theme:r})=>r.mixin.flex("center","space-between")};
  padding: 12px 48px;
  font-family: 'Pretendard';
  background-color: ${({theme:r})=>r.colors.black};
`,sM=G.img``,aM=G.div``,oM=G.span`
  margin-right: 24px;
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`,lM=G.span`
  font-weight: 700;
`,uM=G.button`
  padding: 5px 10px;
  border: 1px solid ${({theme:r})=>r.colors.white01};
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`,cM=G.span`
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`,Oy="./assets/url-icon-DJKri2bW.svg";function hM({item:r,index:e,onReviewComplete:t,onCancel:s,onEditClick:o,onDetailClick:u}){const h=m=>{if(!m)return"-";if(m.toDate){const g=m.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return m},p=m=>{m.stopPropagation(),u(r)};return _.jsxs(fM,{isCanceled:r.status==="취소",children:[_.jsx(lr,{children:e}),_.jsx(lr,{children:r.design_request_id}),_.jsx(lr,{children:h(r.request_date)}),_.jsx(dM,{children:h(r.completion_dt)}),_.jsx(pM,{children:h(r.open_dt)}),_.jsx(lr,{children:r.task_form}),_.jsx(mM,{children:r.task_type}),_.jsx(gM,{children:_.jsxs(_M,{children:[r.emergency?_.jsx(EM,{children:"긴급"}):"",_.jsx(vM,{onClick:p,children:r.requirement})]})}),_.jsx(lr,{children:_.jsx(KT,{href:r.url,target:"_blank"})}),_.jsx(yM,{children:_.jsx(TM,{onClick:p,children:r.note||""})}),_.jsx(lr,{children:_.jsx(bM,{status:r.status,children:r.status==="검수요청"?"진행중":r.status==="검수중"?"검수요청":r.status||"대기"})}),_.jsx(lr,{children:r.assigned_designer||"미배정"}),_.jsx(lr,{children:r.manager_review_status==="검수완료"&&r.result_url?_.jsx(KT,{href:r.result_url,target:"_blank"}):""}),_.jsx(lr,{children:r.manager_review_status==="검수완료"?r.status!=="완료"?_.jsx(wM,{onClick:()=>t(r.id),children:"검수완료"}):_.jsx(SM,{children:"검수완료"}):""}),_.jsx(lr,{children:_.jsx(AM,{onClick:()=>o(r.id),disabled:r.status==="취소",children:"수정"})}),_.jsx(lr,{children:_.jsx(RM,{onClick:()=>s(r.id),children:"취소"})})]})}const fM=G.tr`
  ${({isCanceled:r})=>r&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  &:hover {
    td {
      background-color: ${({theme:r})=>r.colors.gray04}
    }
  }
`,lr=G.td`
  padding: 15px 0;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:r})=>r.colors.black};
  }
`,dM=G.td`
  color: ${({theme:r})=>r.colors.red};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,pM=G.td`
  color: ${({theme:r})=>r.colors.blue02};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,mM=G.td`
  padding: 15px 12px;
  line-height: 15px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,gM=G.td`
  line-height: 15px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,yM=G.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  background-color: #fffff1;
`,_M=G.div`
  ${({theme:r})=>r.mixin.flex("center")};
  padding: 0 12px;
`,vM=G.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`,EM=G.span`
  margin-right: 8px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
  white-space: nowrap;
`,KT=G.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${Oy}) no-repeat center / contain;
`,TM=G.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`,bM=G.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:r,theme:e})=>{switch(r){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.blue02;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.black}}};
  background-color: ${({status:r,theme:e})=>{switch(r){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.lightpupple;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,wM=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: green;
`,SM=G.span`
  color: green;
  font-weight: bold;
`,AM=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: ${({theme:r})=>r.colors.black};
`,RM=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: ${({theme:r})=>r.colors.black};
`;function xM({data:r,onReviewComplete:e,onCancel:t,onEditClick:s,onDetailClick:o}){return _.jsx(IM,{children:_.jsxs(CM,{children:[_.jsx(DM,{children:"요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"220px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(cn,{children:"번호"}),_.jsx(cn,{children:"문서번호"}),_.jsx(cn,{children:"요청일"}),_.jsxs(cn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(cn,{children:"오픈일"}),_.jsx(cn,{children:"업무형태"}),_.jsx(cn,{children:"업무타입"}),_.jsx(cn,{children:"작업항목"}),_.jsx(cn,{children:"요청서 URL"}),_.jsx(cn,{children:"메모"}),_.jsx(cn,{children:"진행상태"}),_.jsx(cn,{children:"디자이너"}),_.jsx(cn,{children:"산출물 URL"}),_.jsx(cn,{children:"검수"}),_.jsx(cn,{children:"수정"}),_.jsx(cn,{children:"취소"})]})}),_.jsx("tbody",{children:r.length>0?r.map((u,h)=>_.jsx(hM,{index:h+1,item:u,onReviewComplete:e,onCancel:t,onEditClick:s,onDetailClick:o},u.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:16,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const IM=G.div`
  padding: 0 48px;
`,CM=G.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
  text-align: center;
`,DM=G.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,cn=G.th`
  line-height: 16px;
  padding: 13px 0;
  border-bottom: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.white02};

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:r})=>r.colors.black};
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    border-right: 1px solid ${({theme:r})=>r.colors.pink02}
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17) {
    background-color: ${({theme:r})=>r.colors.pink01};
  }
`;function ky(){const r=new Date,e=r.getFullYear(),t=r.getMonth()+1,s=r.getDate();return _.jsx(NM,{children:_.jsxs(OM,{children:[e,"년 ",t,"월 ",s,"일 디자인 편성 요청 스케줄"]})})}const NM=G.div`
  padding: 30px 48px;
  background-color: ${({theme:r})=>r.colors.gray04};
`,OM=G.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`;function kM({setIsDrawerOpen:r,setEditData:e,setDetailData:t}){const[s,o]=Q.useState(""),[u,h]=Q.useState([]);Q.useEffect(()=>{const w=Hf(Da,b=>{b&&b.displayName&&o(b.displayName)});return()=>w()},[]),Q.useEffect(()=>{if(!s)return;const w=Ia(wi(Vt,"design_request"),Ca("requester","==",s),xy("design_request_id","desc")),b=dd(w,I=>{const P=I.docs.map(H=>({id:H.id,...H.data()}));h(P)});return()=>b()},[s]);const p=async w=>{await va(dr(Vt,"design_request",w),{status:"완료",requester_review_status:"검수완료"}),h(b=>b.map(I=>I.id===w?{...I,status:"완료",requester_review_status:"검수완료"}:I)),alert("완료 처리되었습니다.")},m=async w=>{const b=dr(Vt,"design_request",w);await va(b,{requester_edit_state:!0});const I=await Iy(b);if(I.exists()){const P={id:I.id,...I.data()};e(P),r(!0)}},g=w=>{t(w),r(!0)},E=async w=>{await va(dr(Vt,"design_request",w),{status:"취소"}),h(b=>b.map(I=>I.id===w?{...I,status:"취소"}:I))};return _.jsxs(_.Fragment,{children:[_.jsx(ky,{}),_.jsx(xM,{data:u,onReviewComplete:p,onCancel:E,onEditClick:m,onDetailClick:g})]})}function MM({index:r,item:e,onChange:t,onSave:s,onDetailClick:o}){const u=p=>{if(!p)return"-";if(p.toDate){const m=p.toDate();return`${m.getMonth()+1}/${m.getDate()}`}return p},h=p=>{p.stopPropagation(),o(e)};return _.jsxs(PM,{isCanceled:e.status==="취소",children:[_.jsx(gi,{children:r}),_.jsx(gi,{children:e.design_request_id}),_.jsx(gi,{children:u(e.request_date)}),_.jsx(gi,{children:e.requester}),_.jsx(VM,{children:u(e.completion_dt)}),_.jsx(LM,{children:u(e.open_dt)}),_.jsx(gi,{children:e.task_form}),_.jsx(jM,{children:e.task_type}),_.jsx(UM,{children:_.jsxs(qM,{children:[e.emergency?_.jsx(BM,{children:"긴급"}):"",_.jsx(HM,{onClick:h,children:e.requirement})]})}),_.jsx(gi,{children:_.jsx(FM,{href:e.url,target:"_blank"})}),_.jsx(zM,{children:_.jsx($M,{onClick:h,children:e.note||""})}),_.jsx(XT,{children:_.jsx(WT,{type:"date",onChange:p=>t(e.id,"start_dt",p.target.value),disabled:e.status==="취소"})}),_.jsx(XT,{children:_.jsx(WT,{type:"date",onChange:p=>t(e.id,"end_dt",p.target.value),disabled:e.status==="취소"})}),_.jsx(gi,{children:_.jsx(GM,{type:"text",placeholder:"산출물 URL을 입력해주세요.",onChange:p=>t(e.id,"result_url",p.target.value),disabled:e.status==="취소"})}),_.jsx(gi,{children:_.jsxs("select",{onChange:p=>t(e.id,"status",p.target.value),disabled:e.status==="취소",children:[_.jsx("option",{value:"대기중",children:"대기"}),_.jsx("option",{value:"진행중",children:"진행중"}),_.jsx("option",{value:"검수요청",children:"검수요청"})]})}),_.jsx(gi,{children:_.jsx(YM,{onClick:()=>s(e.id),disabled:e.status==="취소",children:"저장"})})]})}const PM=G.tr`
  ${({isCanceled:r})=>r&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  &:hover {
    td, input, select {
      background-color: ${({theme:r})=>r.colors.gray04}
    }
  }
`,gi=G.td`
  padding: 11px 0;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(11) {
    border-right: 1px solid ${({theme:r})=>r.colors.black};
  }
`,VM=G.td`
  color: ${({theme:r})=>r.colors.red};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,LM=G.td`
  color: ${({theme:r})=>r.colors.blue02};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,jM=G.td`
  padding: 15px 12px;
  line-height: 15px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,UM=G.td`
  line-height: 15px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,zM=G.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  background-color: #fffff1;
`,XT=G.td`
  padding: 0 6px;
`,qM=G.div`
  ${({theme:r})=>r.mixin.flex("center")};
  padding: 0 12px;
`,BM=G.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
  white-space: nowrap;
`,HM=G.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`,FM=G.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${Oy}) no-repeat center / contain;
`,$M=G.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`,WT=G.input.attrs({type:"date"})`
  width: 100%;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,GM=G.input`
  width: 100%;
  padding: 0 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,YM=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
`;function QM({requests:r,onChange:e,onSave:t,onDetailClick:s}){return _.jsx(KM,{children:_.jsxs(XM,{children:[_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(hn,{children:"번호"}),_.jsx(hn,{children:"문서번호"}),_.jsx(hn,{children:"요청일"}),_.jsx(hn,{children:"요청자"}),_.jsxs(hn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(hn,{children:"오픈일"}),_.jsx(hn,{children:"업무형태"}),_.jsx(hn,{children:"업무타입"}),_.jsx(hn,{children:"작업항목"}),_.jsx(hn,{children:"요청서 URL"}),_.jsx(hn,{children:"메모"}),_.jsx(hn,{children:"디자인 시작일"}),_.jsx(hn,{children:"디자인 종료일"}),_.jsx(hn,{children:"산출물 링크"}),_.jsx(hn,{children:"진행상태"}),_.jsx(hn,{children:"저장"})]})}),_.jsx("tbody",{children:r.length>0?r.map((o,u)=>_.jsx(MM,{index:u+1,item:o,onChange:e,onSave:t,onDetailClick:s},o.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:16,style:{textAlign:"center"},children:"배정된 요청이 없습니다."})})})]})})}const KM=G.div`
  padding: 0 48px;
`,XM=G.table`
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
`,hn=G.th`
  line-height: 16px;
  padding: 13px 0;
  border-bottom: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.white02};

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(11) {
    border-right: 1px solid ${({theme:r})=>r.colors.black};
  }

  &:nth-of-type(12), &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15) {
    border-right: 1px solid ${({theme:r})=>r.colors.pink02}
  }

  &:nth-of-type(12), &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    background-color: ${({theme:r})=>r.colors.pink01};
  }
`;function WM({setIsDrawerOpen:r,setDetailData:e}){const[t,s]=Q.useState([]),[o,u]=Q.useState(""),[h,p]=Q.useState({});Q.useEffect(()=>{const b=Hf(Da,I=>{I&&I.displayName&&u(I.displayName)});return()=>b()},[]),Q.useEffect(()=>{if(!o)return;const b=Ia(wi(Vt,"design_request"),Ca("assigned_designer","==",o),xy("design_request_id","desc")),I=dd(b,P=>{const H=P.docs.map(z=>({id:z.id,...z.data()}));s(H)});return()=>I()},[o]);const m=(b,I,P)=>{p(H=>({...H,[b]:{...H[b],[I]:P}}))},g=b=>b?nt.fromDate(new Date(b)):null,E=async b=>{const I=dr(Vt,"design_request",b),P=h[b];if(!P){alert("변경된 내용이 없습니다.");return}await va(I,{designer_start_date:g(P.start_dt),designer_end_date:g(P.end_dt),result_url:P.result_url||"",status:P.status}),alert("저장되었습니다.")},w=b=>{e(b),r(!0)};return _.jsxs(ZM,{children:[_.jsx(ky,{}),_.jsx(JM,{children:"디자이너 화면"}),_.jsx(QM,{requests:t,formData:h,onChange:m,onSave:E,onDetailClick:w})]})}const ZM=G.div``,JM=G.h2`
  margin-bottom: 20px;
  padding: 0 48px;
`;function eP({index:r,item:e,designerList:t,selectedDesigner:s,onDesignerSelect:o,onAssignDesigner:u,onSendToRequester:h,onDetailClick:p}){const m=E=>{if(!E)return"-";if(E.toDate){const w=E.toDate();return`${w.getMonth()+1}/${w.getDate()}`}return E},g=E=>{E.stopPropagation(),p(e)};return _.jsxs(tP,{isCanceled:e.status==="취소",children:[_.jsx(Zn,{children:r}),_.jsx(Zn,{children:e.design_request_id}),_.jsx(Zn,{children:m(e.request_date)}),_.jsx(Zn,{children:e.requester}),_.jsx(nP,{children:m(e.completion_dt)}),_.jsx(rP,{children:m(e.open_dt)}),_.jsx(Zn,{children:e.task_form}),_.jsx(iP,{children:e.task_type}),_.jsx(sP,{children:_.jsxs(oP,{children:[e.emergency?_.jsx(lP,{children:"긴급"}):"",_.jsx(uP,{onClick:g,children:e.requirement})]})}),_.jsx(Zn,{children:_.jsx(ZT,{href:e.url,target:"_blank"})}),_.jsx(aP,{children:_.jsx(cP,{onClick:g,children:e.note||""})}),_.jsx(Zn,{children:_.jsx(hP,{status:e.status,children:e.status==="검수요청"?"검수중":e.status||"대기"})}),_.jsx(Zn,{children:e.result_url?_.jsx(ZT,{href:e.result_url,target:"_blank"}):""}),_.jsx(Zn,{children:m(e.designer_start_date)}),_.jsx(Zn,{children:m(e.designer_end_date)}),_.jsxs(Zn,{children:[_.jsxs(dP,{value:s,onChange:E=>o(E.target.value),disabled:e.status==="취소",children:[_.jsx("option",{value:"",children:"디자이너 선택"}),t.map(E=>_.jsx("option",{value:E.name,children:E.name},E.id))]}),_.jsx(fP,{onClick:u,disabled:e.status==="취소",children:"배정"})]}),_.jsx(Zn,{children:e.status==="검수요청"&&e.manager_review_status!=="검수완료"?_.jsx(pP,{onClick:h,children:"검수완료"}):e.manager_review_status==="검수완료"?_.jsx(mP,{children:"검수완료"}):""})]})}const tP=G.tr`
  ${({isCanceled:r})=>r&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  &:hover {
    td {
      background-color: ${({theme:r})=>r.colors.gray04}
    }
  }
`,Zn=G.td`
  padding: 11px 0;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:r})=>r.colors.black};
  }
`,nP=G.td`
  color: ${({theme:r})=>r.colors.red};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,rP=G.td`
  color: ${({theme:r})=>r.colors.blue02};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,iP=G.td`
  padding: 15px 12px;
  line-height: 15px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,sP=G.td`
  line-height: 15px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,aP=G.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  background-color: #fffff1;
`,oP=G.div`
  ${({theme:r})=>r.mixin.flex("center")};
  padding: 0 12px;
`,lP=G.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
  white-space: nowrap;
`,uP=G.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`,ZT=G.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${Oy}) no-repeat center / contain;
`,cP=G.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`,hP=G.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:r,theme:e})=>{switch(r){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.red;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.black}}};
  background-color: ${({status:r,theme:e})=>{switch(r){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.pink03;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,fP=G.button`
  margin: 6px 0 0 10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
`,dP=G.select`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,pP=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
`,mP=G.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`;function gP({data:r,designerList:e,selectedDesigners:t,designerSelect:s,assignDesigner:o,sendToRequester:u,onDetailClick:h}){return _.jsx(yP,{children:_.jsxs(_P,{children:[_.jsx(vP,{children:"매니저 요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"180px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(en,{children:"번호"}),_.jsx(en,{children:"문서번호"}),_.jsx(en,{children:"요청일"}),_.jsx(en,{children:"요청자"}),_.jsxs(en,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(en,{children:"오픈일"}),_.jsx(en,{children:"업무형태"}),_.jsx(en,{children:"업무타입"}),_.jsx(en,{children:"작업항목"}),_.jsx(en,{children:"요청서 URL"}),_.jsx(en,{children:"메모"}),_.jsx(en,{children:"진행상태"}),_.jsx(en,{children:"산출물 URL"}),_.jsxs(en,{children:["디자인",_.jsx("br",{}),"시작일"]}),_.jsxs(en,{children:["디자인",_.jsx("br",{}),"종료일"]}),_.jsx(en,{children:"배정"}),_.jsx(en,{children:"검수"})]})}),_.jsx("tbody",{children:r.length>0?r.map((p,m)=>_.jsx(eP,{index:m+1,item:p,designerList:e,selectedDesigner:t[p.id]||"",onDesignerSelect:g=>s(p.id,g),onAssignDesigner:()=>o(p.id),onSendToRequester:()=>u(p.id),onDetailClick:h},p.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const yP=G.div`
  padding: 0 48px;
`,_P=G.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
  text-align: center;
`,vP=G.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,en=G.th`
  line-height: 16px;
  padding: 13px 0;
  border-bottom: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.white02};

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:r})=>r.colors.black};
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    border-right: 1px solid ${({theme:r})=>r.colors.pink02}
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17) {
    background-color: ${({theme:r})=>r.colors.pink01};
  }
`;function EP({setIsDrawerOpen:r,setDetailData:e}){const[t,s]=Q.useState([]),[o,u]=Q.useState([]),[h,p]=Q.useState({});Q.useEffect(()=>{const b=Ia(wi(Vt,"design_request"),xy("design_request_id","desc")),I=dd(b,P=>{const H=P.docs.map(z=>({id:z.id,...z.data()}));s(H)});return()=>I()},[]),Q.useEffect(()=>{(async()=>{const I=Ia(wi(Vt,"users"),Ca("role","==",2)),H=(await TS(I)).docs.map(z=>({id:z.id,...z.data()}));u(H)})()},[]);const m=(b,I)=>{p(P=>({...P,[b]:I}))},g=async b=>{const I=h[b];if(!I){alert("디자이너를 선택하세요.");return}const P=dr(Vt,"design_request",b);await va(P,{assigned_designer:I}),alert("디자이너가 배정되었습니다!"),s(H=>H.map(z=>z.id===b?{...z,assigned_designer:I}:z))},E=async b=>{await va(dr(Vt,"design_request",b),{manager_review_status:"검수완료",status:"검수중"}),s(I=>I.map(P=>P.id===b?{...P,manager_review_status:"검수완료",status:"검수중"}:P)),alert("요청자에게 전달되었습니다.")},w=b=>{e(b),r(!0)};return _.jsxs(TP,{children:[_.jsx(ky,{}),_.jsx(bP,{children:"매니저 요청리스트"}),_.jsx(gP,{data:t,designerList:o,selectedDesigners:h,designerSelect:m,assignDesigner:g,sendToRequester:E,onDetailClick:w})]})}const TP=G.div``,bP=G.h2`
  margin-bottom: 20px;
  padding: 0 48px;
`;function wP({userRole:r,setIsDrawerOpen:e,setEditData:t,setDetailData:s}){const o=()=>{if(r===1)return _.jsx(kM,{setIsDrawerOpen:e,setEditData:t,setDetailData:s});if(r===2)return _.jsx(WM,{setIsDrawerOpen:e,setDetailData:s});if(r===3)return _.jsx(EP,{setIsDrawerOpen:e,setDetailData:s})};return _.jsx(SP,{children:o()})}const SP=G.main``,AP="./assets/aside-logo-DoEwMgfJ.svg",RP="./assets/myrequest-icon-DhmqrZY6.svg";function xP({item:r}){return _.jsxs(IP,{status:r.status,children:[_.jsx(CP,{children:r.status}),_.jsx(DP,{status:r.status,children:r.count})]})}const IP=G.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20.5px 44px 20.5px 28px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-family: 'Pretendard';
  color: ${({theme:r})=>r.colors.black};

  background-color: ${({status:r,theme:e})=>{switch(r){case"대기중":return e.colors.beige01;case"작업중":return e.colors.lightpupple;case"완료":return e.colors.gray04;default:return"#f9f9f9"}}};
`,CP=G.span`
  font-size: 16px;
  font-weight: 500;
`,DP=G.span`
  position: relative;
  font-size: 14px;
  font-weight: 700;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -41px;
    display: block;
    width: 1px;
    height: 18px;
    transform: translateY(-50%);

    background-color: ${({status:r,theme:e})=>{switch(r){case"대기중":return e.colors.orange;case"작업중":return e.colors.blue01;case"완료":return e.colors.gray02;default:return e.colors.gray03}}};
  }
`;function NP({requests:r,role:e,userName:t,onRequestButtonClick:s}){const o=[{status:"대기중",count:r.filter(h=>h.status==="대기").length},{status:"작업중",count:r.filter(h=>h.status==="진행중").length},{status:"완료",count:r.filter(h=>h.status==="완료").length}],u=(h,p)=>{switch(h){case 1:return`${p}님의 요청`;case 2:return`${p}님의 작업 현황`;case 3:return"전체 요청 현황";default:return"요청 현황"}};return _.jsxs(OP,{children:[_.jsxs(kP,{children:[_.jsx(MP,{src:AP}),_.jsx(PP,{children:"업무 관리시스템"})]}),e===1&&_.jsx(VP,{children:_.jsx(LP,{onClick:s,children:"디자인 요청 등록"})}),_.jsxs(jP,{children:[_.jsxs(UP,{children:[_.jsx(zP,{src:RP}),_.jsx(qP,{children:u(e,t)})]}),_.jsx(BP,{children:o.map(h=>_.jsx(xP,{item:h},h.status))})]})]})}const OP=G.aside`
  height: 100%;
  border-right: 1px solid ${({theme:r})=>r.colors.black};
`,kP=G.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  padding: 19.5px 23px;
  border-bottom: 1px solid ${({theme:r})=>r.colors.gray02};
`,MP=G.img`
  margin-right: 8px;
`,PP=G.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
  white-space: nowrap;
`,VP=G.div`
  padding: 32px 20px;
  border-bottom: 1px solid ${({theme:r})=>r.colors.gray02};
`,LP=G.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
  white-space: nowrap;
`,jP=G.div`
  padding: 0 24px;
`,UP=G.div`
  ${({theme:r})=>r.mixin.flex("center")};
  gap: 12px;
  padding: 30px 0;
`,zP=G.img``,qP=G.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
`,BP=G.ul`
  ${({theme:r})=>r.mixin.flex("center")};
  flex-direction: column;
`;function HP({isOpen:r,onClose:e,children:t}){return _.jsxs(_.Fragment,{children:[_.jsx(FP,{isVisible:r,onClick:e}),_.jsx($P,{isVisible:r,onClick:s=>s.stopPropagation(),children:t})]})}const FP=G.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({isVisible:r})=>r?1:0};
  pointer-events: ${({isVisible:r})=>r?"auto":"none"};
  transition: opacity 0.3s ease;
`,$P=G.div`
  position: fixed;
  top: 64px;
  right: 0;
  width: 680px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  overflow-y: hidden;
  padding: 24px;
  transform: ${({isVisible:r})=>r?"translateX(0)":"translateX(100%)"};
  transition: transform 0.3s ease;
`,SS="./assets/requestformexit-button-BcAG546a.svg",GP="./assets/checkbox-checked-eOVFoR8b.svg",YP="./assets/selectbox-arrow-BwC8UGU0.svg",qh={completion_dt:"",open_dt:"",task_form:"GHS",task_type:"프론트테마",requirement:"",url:"",note:"",emergency:!1};function JT({userName:r,editData:e,isDrawerOpen:t,onClose:s}){const o=(e==null?void 0:e.requester_edit_state)===!0,[u,h]=Q.useState(qh),[p,m]=Q.useState([]),g=($,q)=>{h(W=>({...W,[$]:q}))},E=()=>m($=>[...$,{...qh}]),w=$=>m(q=>q.filter((W,oe)=>oe!==$)),b=($,q,W)=>m(oe=>{const le=[...oe];return le[$]={...le[$],[q]:W},le}),I=$=>$?nt.fromDate(new Date($)):null,P=async()=>{const $=new Date,q=$.getFullYear().toString().slice(2),W=($.getMonth()+1).toString().padStart(2,"0"),oe=Ia(wi(Vt,"design_request"),Ca("design_request_id",">=",`H${q}${W}000`),Ca("design_request_id","<",`H${q}${W}999`)),le=await TS(oe);return{year:q,month:W,base:le.size}},H=($,q,W)=>`H${$}${q}${W.toString().padStart(3,"0")}`,z=async $=>{if($.preventDefault(),!u.requirement){alert("요청 내용을 입력하세요.");return}if(o&&(e!=null&&e.id)){await va(dr(Vt,"design_request",e.id),{completion_dt:I(u.completion_dt),open_dt:I(u.open_dt),task_form:u.task_form,task_type:u.task_type,requirement:u.requirement,url:u.url,note:u.note,emergency:u.emergency,requester_edit_state:!1,updated_at:QT()}),alert("요청이 수정되었습니다!"),s();return}const q=[u,...p],W=q.findIndex(x=>!x.requirement);if(W!==-1){alert(`${W+1}번째 폼의 "작업 항목"을 입력하세요.`);return}const{year:oe,month:le,base:fe}=await P();let D=fe;const R=new Date;for(const x of q){D+=1;const k=H(oe,le,D);await qk(wi(Vt,"design_request"),{design_request_id:k,request_date:I(R.toISOString()),requester:r,completion_dt:I(x.completion_dt),open_dt:I(x.open_dt),task_form:x.task_form,task_type:x.task_type,requirement:x.requirement,url:x.url,note:x.note,status:"대기",assigned_designer:"미배정",requester_review_status:"검수대기",manager_review_status:"",result_url:"",designer_start_date:null,designer_end_date:null,emergency:x.emergency,requester_edit_state:!1,designer_edit_state:!1,created_at:QT(),updated_at:null,delete_at:null,work_hour:""})}alert(`${q.length}건이 등록되었습니다!`),m([]),h(qh),s()};return Q.useEffect(()=>{o&&e&&h({completion_dt:e.completion_dt?e.completion_dt.toDate().toISOString().slice(0,10):"",open_dt:e.open_dt?e.open_dt.toDate().toISOString().slice(0,10):"",task_form:e.task_form??"GHS",task_type:e.task_type??"프론트테마",requirement:e.requirement??"",url:e.url??"",note:e.note??"",emergency:e.emergency??!1})},[o,e]),Q.useEffect(()=>{!t||o||(h(qh),m([]))},[t]),_.jsxs(_.Fragment,{children:[_.jsxs(KP,{children:[_.jsx(XP,{children:o?"디자인 요청 수정":"디자인 요청 등록"}),_.jsx(WP,{type:"button",onClick:s})]}),_.jsxs(QP,{onSubmit:z,children:[_.jsxs(ZP,{children:[!o&&p.map(($,q)=>_.jsxs("div",{style:{marginBottom:24},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"8px 0 4px"},children:[_.jsxs("strong",{children:["추가 요청 ",q+1]}),_.jsx("button",{type:"button",onClick:()=>w(q),children:"삭제"})]}),_.jsxs(e1,{children:[_.jsx(t1,{children:"디자인 요청 추가 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Ft,{children:"문서번호"}),_.jsx($t,{})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:`completion_dt_ex_${q}`,children:"완료 요청일"})}),_.jsx($t,{children:_.jsx(Bh,{id:`completion_dt_ex_${q}`,type:"date",value:$.completion_dt||"",onChange:W=>b(q,"completion_dt",W.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:`open_dt_ex_${q}`,children:"오픈일"})}),_.jsx($t,{children:_.jsx(Bh,{id:`open_dt_ex_${q}`,type:"date",value:$.open_dt||"",onChange:W=>b(q,"open_dt",W.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:`task_form_ex_${q}`,children:"업무 형태"})}),_.jsx($t,{children:_.jsxs(Hh,{id:`task_form_ex_${q}`,value:$.task_form||"GHS",onChange:W=>b(q,"task_form",W.target.value),children:[_.jsx("option",{value:"GHS",children:"GHS"}),_.jsx("option",{value:"MHC",children:"MHC"}),_.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:`task_type_ex_${q}`,children:"업무 유형"})}),_.jsx($t,{children:_.jsxs(Hh,{id:`task_type_ex_${q}`,value:$.task_type||"프론트테마",onChange:W=>b(q,"task_type",W.target.value),children:[_.jsx("option",{value:"프론트테마",children:"프론트테마"}),_.jsx("option",{value:"별도기획전",children:"별도기획전"}),_.jsx("option",{value:"일자별배너",children:"일자별배너"}),_.jsx("option",{value:"핫새배너",children:"핫새배너"}),_.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),_.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),_.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),_.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),_.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),_.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),_.jsx("option",{value:"상품상세",children:"상품상세"}),_.jsx("option",{value:"제휴",children:"제휴"}),_.jsx("option",{value:"클럽",children:"클럽"}),_.jsx("option",{value:"팝업",children:"팝업"}),_.jsx("option",{value:"푸시",children:"푸시"}),_.jsx("option",{value:"홈테마",children:"홈테마"}),_.jsx("option",{value:"즉시배송",children:"즉시배송"}),_.jsx("option",{value:"트레이딩",children:"트레이딩"}),_.jsx("option",{value:"이벤트",children:"이벤트"}),_.jsx("option",{value:"기타",children:"기타"})]})})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:`requirement_ex_${q}`,children:"작업 항목"})}),_.jsx($t,{children:_.jsx(n1,{id:`requirement_ex_${q}`,type:"text",value:$.requirement||"",onChange:W=>b(q,"requirement",W.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:`emergency_ex_${q}`,children:"긴급 일정"})}),_.jsx($t,{children:_.jsx(s1,{children:_.jsxs(a1,{htmlFor:`emergency_ex_${q}`,children:[_.jsx(o1,{id:`emergency_ex_${q}`,type:"checkbox",checked:!!$.emergency,onChange:W=>b(q,"emergency",W.target.checked)}),_.jsx(l1,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:`url_ex_${q}`,children:"요청서 URL"})}),_.jsx($t,{children:_.jsx(r1,{id:`url_ex_${q}`,value:$.url||"",onChange:W=>b(q,"url",W.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:`note_ex_${q}`,children:"메모"})}),_.jsx($t,{children:_.jsx(i1,{id:`note_ex_${q}`,rows:4,value:$.note||"",onChange:W=>b(q,"note",W.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]},q)),_.jsxs(e1,{children:[_.jsx(t1,{children:"디자인 요청 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Ft,{children:"문서번호"}),_.jsx($t,{children:o?e==null?void 0:e.design_request_id:""})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:"completion_dt",children:"완료 요청일"})}),_.jsx($t,{children:_.jsx(Bh,{type:"date",id:"completion_dt",value:u.completion_dt,onChange:$=>g("completion_dt",$.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:"open_dt",children:"오픈일"})}),_.jsx($t,{children:_.jsx(Bh,{type:"date",id:"open_dt",value:u.open_dt,onChange:$=>g("open_dt",$.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:"task_form",children:"업무 형태"})}),_.jsx($t,{children:_.jsxs(Hh,{id:"task_form",value:u.task_form,onChange:$=>g("task_form",$.target.value),children:[_.jsx("option",{value:"GHS",children:"GHS"}),_.jsx("option",{value:"MHC",children:"MHC"}),_.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:"task_type",children:"업무 유형"})}),_.jsx($t,{children:_.jsxs(Hh,{id:"task_type",value:u.task_type,onChange:$=>g("task_type",$.target.value),children:[_.jsx("option",{value:"프론트테마",children:"프론트테마"}),_.jsx("option",{value:"별도기획전",children:"별도기획전"}),_.jsx("option",{value:"일자별배너",children:"일자별배너"}),_.jsx("option",{value:"핫새배너",children:"핫새배너"}),_.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),_.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),_.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),_.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),_.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),_.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),_.jsx("option",{value:"상품상세",children:"상품상세"}),_.jsx("option",{value:"제휴",children:"제휴"}),_.jsx("option",{value:"클럽",children:"클럽"}),_.jsx("option",{value:"팝업",children:"팝업"}),_.jsx("option",{value:"푸시",children:"푸시"}),_.jsx("option",{value:"홈테마",children:"홈테마"}),_.jsx("option",{value:"즉시배송",children:"즉시배송"}),_.jsx("option",{value:"트레이딩",children:"트레이딩"}),_.jsx("option",{value:"이벤트",children:"이벤트"}),_.jsx("option",{value:"기타",children:"기타"})]})})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:"requirement",children:"작업 항목"})}),_.jsx($t,{children:_.jsx(n1,{type:"text",id:"requirement",value:u.requirement,onChange:$=>g("requirement",$.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:"emergency",children:"긴급 일정"})}),_.jsx($t,{children:_.jsx(s1,{children:_.jsxs(a1,{htmlFor:"emergency",children:[_.jsx(o1,{type:"checkbox",id:"emergency",checked:u.emergency,onChange:$=>g("emergency",$.target.checked)}),_.jsx(l1,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:"url",children:"요청서 URL"})}),_.jsx($t,{children:_.jsx(r1,{id:"url",value:u.url,onChange:$=>g("url",$.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Ft,{children:_.jsx(fn,{htmlFor:"note",children:"메모"})}),_.jsx($t,{children:_.jsx(i1,{id:"note",rows:4,value:u.note,onChange:$=>g("note",$.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]}),_.jsxs(JP,{children:[_.jsx(eV,{type:"submit",children:o?"수정 완료":"등록하기"}),!o&&_.jsx(tV,{type:"button",onClick:E,children:"추가 등록하기"})]})]})]})}const QP=G.form`
  font-family: 'Pretendard';
`,KP=G.div`
  ${({theme:r})=>r.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,XP=G.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
  letter-spacing: -0.48px;
`,WP=G.button`
  width: 24px;
  height: 24px;
  background: url(${SS}) no-repeat center;
  background-size: contain;
`,e1=G.table`
  width: 100%;
  color: ${({theme:r})=>r.colors.black};
  border-top: 1px solid ${({theme:r})=>r.colors.black};
`,ZP=G.div`
  max-height: 690px;
  overflow: auto;
`,t1=G.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Ft=G.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-left: none;
  background-color: ${({theme:r})=>r.colors.gray04};
`,$t=G.td`
  padding: 12px 24px;
  border-right: none;
`,fn=G.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`,Bh=G.input`
  width: 168px;
  padding: 6px 12px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,n1=G.input`
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,r1=G.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,i1=G.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: #fffff1;
`,s1=G.div`
  ${({theme:r})=>r.mixin.flex("center")};
  gap: 5px;
`,a1=G.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,o1=G.input`
  display: none;

  &:checked + span {
    background-color: ${({theme:r})=>r.colors.red};
    background-image: url(${GP}); // 체크 이미지 경로
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`,l1=G.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 2px;
`,Hh=G.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 168px;
  padding: 7.5px 32px 7.5px 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:r})=>r.colors.white01};
  background-image: url(${YP}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:r})=>r.colors.black};
  }
`,JP=G.div`
  margin-top: 24px;
  text-align: center;
`,eV=G.button`
  margin-right: 12px;
  padding: 12.5px 32px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
`,tV=G.button`
  padding: 10.5px 31.5px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  border: 1px solid ${({theme:r})=>r.colors.black};
  background-color: ${({theme:r})=>r.colors.white01};
  color: ${({theme:r})=>r.colors.black};

  &:hover {
    border: 1px solid ${({theme:r})=>r.colors.black};
  }
`;function nV({data:r,onClose:e}){const t=s=>{if(!s)return"-";if(s.toDate){const o=s.toDate();return`${o.getMonth()+1}/${o.getDate()}`}return s};return _.jsxs(_.Fragment,{children:[_.jsxs(rV,{children:[_.jsx(iV,{children:"디자인 요청 상세"}),_.jsx(sV,{type:"button",onClick:e})]}),_.jsxs(aV,{children:[_.jsx(oV,{children:"디자인 요청 상세"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Mr,{children:"문서번호"}),_.jsx(fa,{children:r==null?void 0:r.design_request_id})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"요청일"}),_.jsx(fa,{children:t(r==null?void 0:r.request_date)})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"완료 요청일"}),_.jsx(lV,{children:t(r==null?void 0:r.completion_dt)})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"오픈일"}),_.jsx(uV,{children:t(r==null?void 0:r.open_dt)})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"업무 형태"}),_.jsx(fa,{children:r==null?void 0:r.task_form})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"업무 유형"}),_.jsx(fa,{children:r==null?void 0:r.task_type})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"작업 항목"}),_.jsx(fa,{children:r==null?void 0:r.requirement})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"긴급 일정"}),_.jsx(fa,{children:r!=null&&r.emergency?"긴급 일정으로 설정":"긴급 일정으로 설정 안함"})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"요청서 URL"}),_.jsx(fa,{children:r!=null&&r.url?_.jsx(hV,{href:r==null?void 0:r.url,target:"_blank",rel:"noreferrer",children:r==null?void 0:r.url}):"-"})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"메모"}),_.jsx(cV,{children:_.jsx(fV,{children:r.note})})]})]})]})]})}const rV=G.div`
  ${({theme:r})=>r.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,iV=G.h3`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
  letter-spacing: -0.48px;
`,sV=G.button`
  width: 24px;
  height: 24px;
  background: url(${SS}) no-repeat center;
  background-size: contain;
`,aV=G.table`
  width: 100%;
  border-top: 1px solid ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.black};
  font-family: 'Pretendard';
`,oV=G.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Mr=G.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-left: none;
  background-color: ${({theme:r})=>r.colors.gray04};
`,fa=G.td`
  padding: 12px 24px;
  border-right: none;
`,lV=G.td`
  padding: 12px 24px;
  color: ${({theme:r})=>r.colors.red};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,uV=G.td`
  padding: 12px 24px;
  color: ${({theme:r})=>r.colors.blue02};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,cV=G.td`
  padding: 12px 24px;
  background-color: #fffff1;
`,hV=G.a`
  display: -webkit-box;
  min-height: 70px;
  max-height: 70px;
  overflow-y: auto;
  -webkit-box-orient: vertical;
  word-break: break-word;
`,fV=G.p`
  min-height: 165px;
  max-height: 165px;
  overflow-y: auto;
  word-break: break-word;
`;function dV(){const[r,e]=Q.useState(0),[t,s]=Q.useState([]),[o,u]=Q.useState(""),[h,p]=Q.useState(!1),[m,g]=Q.useState(void 0),[E,w]=Q.useState(null);Q.useEffect(()=>{const P=Hf(Da,async H=>{if(H){u(H.displayName||"");const z=await Iy(dr(Vt,"users",H.uid));if(z.exists()){const q=z.data().role,W=H.displayName;e(q);let oe;q===1?oe=Ia(wi(Vt,"design_request"),Ca("requester","==",W)):q===2?oe=Ia(wi(Vt,"design_request"),Ca("assigned_designer","==",W)):oe=wi(Vt,"design_request"),dd(oe,le=>{const fe=le.docs.map(D=>{const R=D.data();return{id:D.id,status:R.status??"대기중"}});s(fe)})}}else e(0),u(""),s([])});return()=>P()},[]);const b=()=>{g(void 0),w("create"),p(!0)},I=()=>{p(!1),g(void 0)};return _.jsxs(pV,{children:[_.jsx(NP,{requests:t,userName:o,role:r,onRequestButtonClick:b}),_.jsxs(mV,{children:[_.jsx(rM,{}),_.jsx(wP,{userRole:r,setIsDrawerOpen:p,setEditData:P=>{g(P),w("edit")},setDetailData:P=>{g(P),w("detail")}})]}),_.jsxs(HP,{isOpen:h,onClose:I,children:[E==="create"&&_.jsx(JT,{userName:o,isDrawerOpen:h,onClose:I}),E==="edit"&&m&&_.jsx(JT,{userName:o,isDrawerOpen:h,editData:m,onClose:I}),E==="detail"&&m&&_.jsx(nV,{data:m,onClose:I})]})]})}const pV=G.div`
  ${({theme:r})=>r.mixin.flex()};
  width: 100%;
  height: 100%;
`,mV=G.div`
  flex: 1;
`;function gV(){const[r,e]=Q.useState(""),[t,s]=Q.useState(""),[o,u]=Q.useState(""),[h,p]=Q.useState(""),m=Qu(),g=async()=>{if(o!==h){alert("비밀번호가 일치하지 않습니다.");return}h2(Da,t,o).then(async E=>{const w=E.user;await p2(w,{displayName:r}),await zk(dr(Vt,"users",w.uid),{name:r,role:2,createdAt:new Date})}).then(()=>{alert("회원가입이 완료되었습니다!"),m("/")}).catch(E=>{alert("회원가입 중 오류 발생: "+E.message)})};return _.jsx(yV,{children:_.jsxs(_V,{children:[_.jsxs(vV,{children:[_.jsx(EV,{children:"PDMS"}),_.jsx(TV,{children:"Pushcomz Design Management System"})]}),_.jsx(bV,{children:_.jsx(wV,{src:wS})}),_.jsxs(SV,{children:[_.jsx(AV,{type:"text",value:r,onChange:E=>e(E.target.value),placeholder:"이름을 입력해주세요."}),_.jsx(RV,{type:"text",value:t,onChange:E=>s(E.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(xV,{type:"password",value:o,onChange:E=>u(E.target.value),placeholder:"비밀번호를 입력해주세요."}),_.jsx(IV,{type:"password",value:h,onChange:E=>p(E.target.value),placeholder:"비밀번호 확인을 입력해주세요."})]}),_.jsx(CV,{onClick:g,children:"등록하기"})]})})}const yV=G.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:r})=>r.colors.gray01};
`,_V=G.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:r})=>r.colors.white01};
`,vV=G.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,EV=G.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.navy};
`,TV=G.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,bV=G.div`
  margin-right: auto;
`,wV=G.img`
  
`,SV=G.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  gap: 10px;
`,AV=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,RV=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,xV=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,IV=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,CV=G.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:r})=>r.colors.white01};
`;function DV(){const[r,e]=Q.useState(!1);return _.jsx(vx,{basename:"pdms-test",children:_.jsxs(XR,{children:[_.jsx(Fh,{path:"/",element:_.jsx(Hk,{onLoginSuccess:()=>e(!0)})}),_.jsx(Fh,{path:"/dashboard",element:r?_.jsx(dV,{}):_.jsx(QR,{to:"/"})}),_.jsx(Fh,{path:"/signup",element:_.jsx(gV,{})})]})})}const NV="/assets/Pretendard-Bold-C0IAtCzs.woff2",OV="/assets/Pretendard-SemiBold-bHEaYlbJ.woff2",kV="/assets/Pretendard-Medium-BCuOcOjL.woff2",MV="/assets/Pretendard-Regular-BnvhP503.woff2",PV=DI`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
  }

  li {
    list-style: none;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  input {
    border: none;

    &:focus {
      outline: none;
    }
  }

  table {
    border-collapse: collapse;

    th, td {
      border: 1px solid #ccc;
    }
  }

  textarea {
    resize: none;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${NV}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${OV}) format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${kV}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${MV}) format('woff2');
    font-weight: 400;
  }

`,VV={white01:"#fff",white02:"#f4f4f4",red:"#eb193a",navy:"#073863",beige01:"#fff4ea",beige02:"#FFEEDE",orange:"#f88017",lightpupple:"#eaedfa",blue01:"#4f76ff",blue02:"#0B1ABF",gray01:"#ECEDF0",gray02:"#ccc",gray03:"#bdbdbd",gray04:"#f4f4f4",gray05:"#888",gray06:"#666",gray07:"#e5e2e2",black:"#212121",pink01:"#FFDDDD",pink02:"#F48193",pink03:"#FFEBEB"},LV={flex:(r="flex-start",e="flex-start")=>`
    display: flex;
    align-items: ${r};
    justify-content: ${e}
  `},jV={colors:VV,mixin:LV};sR.createRoot(document.getElementById("root")).render(_.jsx(Q.StrictMode,{children:_.jsxs(xI,{theme:jV,children:[_.jsx(DV,{}),_.jsx(PV,{})]})}));
