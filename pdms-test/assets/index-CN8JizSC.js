(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function BA(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var hm={exports:{}},gu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function HA(){if(B0)return gu;B0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:h,ref:o!==void 0?o:null,props:u}}return gu.Fragment=e,gu.jsx=t,gu.jsxs=t,gu}var H0;function FA(){return H0||(H0=1,hm.exports=HA()),hm.exports}var T=FA(),fm={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function $A(){if(F0)return Ce;F0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,$={};function B(O,re,ae){this.props=O,this.context=re,this.refs=$,this.updater=ae||I}B.prototype.isReactComponent={},B.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ee(){}ee.prototype=B.prototype;function W(O,re,ae){this.props=O,this.context=re,this.refs=$,this.updater=ae||I}var ie=W.prototype=new ee;ie.constructor=W,L(ie,B.prototype),ie.isPureReactComponent=!0;var ue=Array.isArray,ce={H:null,A:null,T:null,S:null,V:null},de=Object.prototype.hasOwnProperty;function D(O,re,ae,se,ge,xe){return ae=xe.ref,{$$typeof:r,type:O,key:re,ref:ae!==void 0?ae:null,props:xe}}function R(O,re){return D(O.type,re,void 0,void 0,void 0,O.props)}function x(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function M(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return re[ae]})}var P=/\/+/g;function U(O,re){return typeof O=="object"&&O!==null&&O.key!=null?M(""+O.key):re.toString(36)}function N(){}function Dt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(re){O.status==="pending"&&(O.status="fulfilled",O.value=re)},function(re){O.status==="pending"&&(O.status="rejected",O.reason=re)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function at(O,re,ae,se,ge){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(xe){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case r:case e:ve=!0;break;case v:return ve=O._init,at(ve(O._payload),re,ae,se,ge)}}if(ve)return ge=ge(O),ve=se===""?"."+U(O,0):se,ue(ge)?(ae="",ve!=null&&(ae=ve.replace(P,"$&/")+"/"),at(ge,re,ae,"",function(Ut){return Ut})):ge!=null&&(x(ge)&&(ge=R(ge,ae+(ge.key==null||O&&O.key===ge.key?"":(""+ge.key).replace(P,"$&/")+"/")+ve)),re.push(ge)),1;ve=0;var ct=se===""?".":se+":";if(ue(O))for(var Be=0;Be<O.length;Be++)se=O[Be],xe=ct+U(se,Be),ve+=at(se,re,ae,xe,ge);else if(Be=S(O),typeof Be=="function")for(O=Be.call(O),Be=0;!(se=O.next()).done;)se=se.value,xe=ct+U(se,Be++),ve+=at(se,re,ae,xe,ge);else if(xe==="object"){if(typeof O.then=="function")return at(Dt(O),re,ae,se,ge);throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return ve}function K(O,re,ae){if(O==null)return O;var se=[],ge=0;return at(O,se,"","",function(xe){return re.call(ae,xe,ge++)}),se}function le(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var me=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ie(){}return Ce.Children={map:K,forEach:function(O,re,ae){K(O,function(){re.apply(this,arguments)},ae)},count:function(O){var re=0;return K(O,function(){re++}),re},toArray:function(O){return K(O,function(re){return re})||[]},only:function(O){if(!x(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ce.Component=B,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=W,Ce.StrictMode=s,Ce.Suspense=m,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ce,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(O){return ce.H.useMemoCache(O)}},Ce.cache=function(O){return function(){return O.apply(null,arguments)}},Ce.cloneElement=function(O,re,ae){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var se=L({},O.props),ge=O.key,xe=void 0;if(re!=null)for(ve in re.ref!==void 0&&(xe=void 0),re.key!==void 0&&(ge=""+re.key),re)!de.call(re,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&re.ref===void 0||(se[ve]=re[ve]);var ve=arguments.length-2;if(ve===1)se.children=ae;else if(1<ve){for(var ct=Array(ve),Be=0;Be<ve;Be++)ct[Be]=arguments[Be+2];se.children=ct}return D(O.type,ge,void 0,void 0,xe,se)},Ce.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},Ce.createElement=function(O,re,ae){var se,ge={},xe=null;if(re!=null)for(se in re.key!==void 0&&(xe=""+re.key),re)de.call(re,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ge[se]=re[se]);var ve=arguments.length-2;if(ve===1)ge.children=ae;else if(1<ve){for(var ct=Array(ve),Be=0;Be<ve;Be++)ct[Be]=arguments[Be+2];ge.children=ct}if(O&&O.defaultProps)for(se in ve=O.defaultProps,ve)ge[se]===void 0&&(ge[se]=ve[se]);return D(O,xe,void 0,void 0,null,ge)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(O){return{$$typeof:p,render:O}},Ce.isValidElement=x,Ce.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:le}},Ce.memo=function(O,re){return{$$typeof:g,type:O,compare:re===void 0?null:re}},Ce.startTransition=function(O){var re=ce.T,ae={};ce.T=ae;try{var se=O(),ge=ce.S;ge!==null&&ge(ae,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(Ie,me)}catch(xe){me(xe)}finally{ce.T=re}},Ce.unstable_useCacheRefresh=function(){return ce.H.useCacheRefresh()},Ce.use=function(O){return ce.H.use(O)},Ce.useActionState=function(O,re,ae){return ce.H.useActionState(O,re,ae)},Ce.useCallback=function(O,re){return ce.H.useCallback(O,re)},Ce.useContext=function(O){return ce.H.useContext(O)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(O,re){return ce.H.useDeferredValue(O,re)},Ce.useEffect=function(O,re,ae){var se=ce.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(O,re)},Ce.useId=function(){return ce.H.useId()},Ce.useImperativeHandle=function(O,re,ae){return ce.H.useImperativeHandle(O,re,ae)},Ce.useInsertionEffect=function(O,re){return ce.H.useInsertionEffect(O,re)},Ce.useLayoutEffect=function(O,re){return ce.H.useLayoutEffect(O,re)},Ce.useMemo=function(O,re){return ce.H.useMemo(O,re)},Ce.useOptimistic=function(O,re){return ce.H.useOptimistic(O,re)},Ce.useReducer=function(O,re,ae){return ce.H.useReducer(O,re,ae)},Ce.useRef=function(O){return ce.H.useRef(O)},Ce.useState=function(O){return ce.H.useState(O)},Ce.useSyncExternalStore=function(O,re,ae){return ce.H.useSyncExternalStore(O,re,ae)},Ce.useTransition=function(){return ce.H.useTransition()},Ce.version="19.1.0",Ce}var $0;function Eg(){return $0||($0=1,fm.exports=$A()),fm.exports}var F=Eg();const ar=BA(F);var dm={exports:{}},yu={},pm={exports:{}},mm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function GA(){return G0||(G0=1,function(r){function e(K,le){var me=K.length;K.push(le);e:for(;0<me;){var Ie=me-1>>>1,O=K[Ie];if(0<o(O,le))K[Ie]=le,K[me]=O,me=Ie;else break e}}function t(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var le=K[0],me=K.pop();if(me!==le){K[0]=me;e:for(var Ie=0,O=K.length,re=O>>>1;Ie<re;){var ae=2*(Ie+1)-1,se=K[ae],ge=ae+1,xe=K[ge];if(0>o(se,me))ge<O&&0>o(xe,se)?(K[Ie]=xe,K[ge]=me,Ie=ge):(K[Ie]=se,K[ae]=me,Ie=ae);else if(ge<O&&0>o(xe,me))K[Ie]=xe,K[ge]=me,Ie=ge;else break e}}return le}function o(K,le){var me=K.sortIndex-le.sortIndex;return me!==0?me:K.id-le.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],g=[],v=1,b=null,S=3,I=!1,L=!1,$=!1,B=!1,ee=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;function ue(K){for(var le=t(g);le!==null;){if(le.callback===null)s(g);else if(le.startTime<=K)s(g),le.sortIndex=le.expirationTime,e(m,le);else break;le=t(g)}}function ce(K){if($=!1,ue(K),!L)if(t(m)!==null)L=!0,de||(de=!0,U());else{var le=t(g);le!==null&&at(ce,le.startTime-K)}}var de=!1,D=-1,R=5,x=-1;function M(){return B?!0:!(r.unstable_now()-x<R)}function P(){if(B=!1,de){var K=r.unstable_now();x=K;var le=!0;try{e:{L=!1,$&&($=!1,W(D),D=-1),I=!0;var me=S;try{t:{for(ue(K),b=t(m);b!==null&&!(b.expirationTime>K&&M());){var Ie=b.callback;if(typeof Ie=="function"){b.callback=null,S=b.priorityLevel;var O=Ie(b.expirationTime<=K);if(K=r.unstable_now(),typeof O=="function"){b.callback=O,ue(K),le=!0;break t}b===t(m)&&s(m),ue(K)}else s(m);b=t(m)}if(b!==null)le=!0;else{var re=t(g);re!==null&&at(ce,re.startTime-K),le=!1}}break e}finally{b=null,S=me,I=!1}le=void 0}}finally{le?U():de=!1}}}var U;if(typeof ie=="function")U=function(){ie(P)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,Dt=N.port2;N.port1.onmessage=P,U=function(){Dt.postMessage(null)}}else U=function(){ee(P,0)};function at(K,le){D=ee(function(){K(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(K){K.callback=null},r.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<K?Math.floor(1e3/K):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(K){switch(S){case 1:case 2:case 3:var le=3;break;default:le=S}var me=S;S=le;try{return K()}finally{S=me}},r.unstable_requestPaint=function(){B=!0},r.unstable_runWithPriority=function(K,le){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var me=S;S=K;try{return le()}finally{S=me}},r.unstable_scheduleCallback=function(K,le,me){var Ie=r.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Ie+me:Ie):me=Ie,K){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=me+O,K={id:v++,callback:le,priorityLevel:K,startTime:me,expirationTime:O,sortIndex:-1},me>Ie?(K.sortIndex=me,e(g,K),t(m)===null&&K===t(g)&&($?(W(D),D=-1):$=!0,at(ce,me-Ie))):(K.sortIndex=O,e(m,K),L||I||(L=!0,de||(de=!0,U()))),K},r.unstable_shouldYield=M,r.unstable_wrapCallback=function(K){var le=S;return function(){var me=S;S=le;try{return K.apply(this,arguments)}finally{S=me}}}}(mm)),mm}var Y0;function YA(){return Y0||(Y0=1,pm.exports=GA()),pm.exports}var gm={exports:{}},an={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function QA(){if(Q0)return an;Q0=1;var r=Eg();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:m,containerInfo:g,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return an.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,an.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,v)},an.flushSync=function(m){var g=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=g,s.p=v,s.d.f()}},an.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},an.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},an.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,b=p(v,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,I=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:I}):v==="script"&&s.d.X(m,{crossOrigin:b,integrity:S,fetchPriority:I,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},an.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},an.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,b=p(v,g.crossOrigin);s.d.L(m,v,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},an.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=p(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},an.requestFormReset=function(m){s.d.r(m)},an.unstable_batchedUpdates=function(m,g){return m(g)},an.useFormState=function(m,g,v){return h.H.useFormState(m,g,v)},an.useFormStatus=function(){return h.H.useHostTransitionStatus()},an.version="19.1.0",an}var K0;function KA(){if(K0)return gm.exports;K0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gm.exports=QA(),gm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function XA(){if(X0)return yu;X0=1;var r=YA(),e=Eg(),t=KA();function s(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function h(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(u(n)!==n)throw Error(s(188))}function m(n){var i=n.alternate;if(!i){if(i=u(n),i===null)throw Error(s(188));return i!==n?null:n}for(var a=n,l=i;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return p(f),n;if(d===l)return p(f),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=d;else{for(var E=!1,w=f.child;w;){if(w===a){E=!0,a=f,l=d;break}if(w===l){E=!0,l=f,a=d;break}w=w.sibling}if(!E){for(w=d.child;w;){if(w===a){E=!0,a=d,l=f;break}if(w===l){E=!0,l=d,a=f;break}w=w.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:i}function g(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=g(n),i!==null)return i;n=n.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),ee=Symbol.for("react.provider"),W=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function U(n){return n===null||typeof n!="object"?null:(n=P&&n[P]||n["@@iterator"],typeof n=="function"?n:null)}var N=Symbol.for("react.client.reference");function Dt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===N?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case L:return"Fragment";case B:return"Profiler";case $:return"StrictMode";case ce:return"Suspense";case de:return"SuspenseList";case x:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case I:return"Portal";case ie:return(n.displayName||"Context")+".Provider";case W:return(n._context.displayName||"Context")+".Consumer";case ue:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case D:return i=n.displayName||null,i!==null?i:Dt(n.type)||"Memo";case R:i=n._payload,n=n._init;try{return Dt(n(i))}catch{}}return null}var at=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Ie=[],O=-1;function re(n){return{current:n}}function ae(n){0>O||(n.current=Ie[O],Ie[O]=null,O--)}function se(n,i){O++,Ie[O]=n.current,n.current=i}var ge=re(null),xe=re(null),ve=re(null),ct=re(null);function Be(n,i){switch(se(ve,i),se(xe,n),se(ge,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?g0(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=g0(i),n=y0(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ae(ge),se(ge,n)}function Ut(){ae(ge),ae(xe),ae(ve)}function Pn(n){n.memoizedState!==null&&se(ct,n);var i=ge.current,a=y0(i,n.type);i!==a&&(se(xe,n),se(ge,a))}function yn(n){xe.current===n&&(ae(ge),ae(xe)),ct.current===n&&(ae(ct),hu._currentValue=me)}var nn=Object.prototype.hasOwnProperty,Ns=r.unstable_scheduleCallback,Os=r.unstable_cancelCallback,ll=r.unstable_shouldYield,lc=r.unstable_requestPaint,Vn=r.unstable_now,hd=r.unstable_getCurrentPriorityLevel,ul=r.unstable_ImmediatePriority,Ma=r.unstable_UserBlockingPriority,ks=r.unstable_NormalPriority,fd=r.unstable_LowPriority,Pa=r.unstable_IdlePriority,cl=r.log,uc=r.unstable_setDisableYieldValue,dt=null,Qe=null;function wn(n){if(typeof cl=="function"&&uc(n),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(dt,n)}catch{}}var rn=Math.clz32?Math.clz32:Ms,cc=Math.log,dd=Math.LN2;function Ms(n){return n>>>=0,n===0?32:31-(cc(n)/dd|0)|0}var Ps=256,Vs=4194304;function Jn(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Va(n,i,a){var l=n.pendingLanes;if(l===0)return 0;var f=0,d=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var w=l&134217727;return w!==0?(l=w&~d,l!==0?f=Jn(l):(E&=w,E!==0?f=Jn(E):a||(a=w&~n,a!==0&&(f=Jn(a))))):(w=l&~d,w!==0?f=Jn(w):E!==0?f=Jn(E):a||(a=l&~n,a!==0&&(f=Jn(a)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:f}function Ls(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function hl(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fl(){var n=Ps;return Ps<<=1,(Ps&4194048)===0&&(Ps=256),n}function dl(){var n=Vs;return Vs<<=1,(Vs&62914560)===0&&(Vs=4194304),n}function Hr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Fr(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function pl(n,i,a,l,f,d){var E=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var w=n.entanglements,C=n.expirationTimes,q=n.hiddenUpdates;for(a=E&~a;0<a;){var X=31-rn(a),te=1<<X;w[X]=0,C[X]=-1;var H=q[X];if(H!==null)for(q[X]=null,X=0;X<H.length;X++){var G=H[X];G!==null&&(G.lane&=-536870913)}a&=~te}l!==0&&mr(n,l,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(E&~i))}function mr(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-rn(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function ml(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-rn(a),f=1<<l;f&i|n[l]&i&&(n[l]|=i),a&=~f}}function Ni(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function La(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Oi(){var n=le.p;return n!==0?n:(n=window.event,n===void 0?32:V0(n.type))}function hc(n,i){var a=le.p;try{return le.p=n,i()}finally{le.p=a}}var ot=Math.random().toString(36).slice(2),Nt="__reactFiber$"+ot,Tt="__reactProps$"+ot,Ln="__reactContainer$"+ot,gl="__reactEvents$"+ot,pd="__reactListeners$"+ot,ki="__reactHandles$"+ot,fc="__reactResources$"+ot,Us="__reactMarker$"+ot;function Mi(n){delete n[Nt],delete n[Tt],delete n[gl],delete n[pd],delete n[ki]}function $r(n){var i=n[Nt];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ln]||a[Nt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=T0(n);n!==null;){if(a=n[Nt])return a;n=T0(n)}return i}n=a,a=n.parentNode}return null}function gr(n){if(n=n[Nt]||n[Ln]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function yr(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(s(33))}function dn(n){var i=n[fc];return i||(i=n[fc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function yt(n){n[Us]=!0}var yl=new Set,Ua={};function er(n,i){Gr(n,i),Gr(n+"Capture",i)}function Gr(n,i){for(Ua[n]=i,n=0;n<i.length;n++)yl.add(i[n])}var dc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pc={},js={};function mc(n){return nn.call(js,n)?!0:nn.call(pc,n)?!1:dc.test(n)?js[n]=!0:(pc[n]=!0,!1)}function Pi(n,i,a){if(mc(i))if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+a)}}function _r(n,i,a){if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+a)}}function Yt(n,i,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(i,a,""+l)}}var zs,gc;function Yr(n){if(zs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);zs=i&&i[1]||"",gc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zs+n+gc}var ja=!1;function za(n,i){if(!n||ja)return"";ja=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(G){var H=G}Reflect.construct(n,[],te)}else{try{te.call()}catch(G){H=G}n.call(te.prototype)}}else{try{throw Error()}catch(G){H=G}(te=n())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(G){if(G&&H&&typeof G.stack=="string")return[G.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],w=d[1];if(E&&w){var C=E.split(`
`),q=w.split(`
`);for(f=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(l===C.length||f===q.length)for(l=C.length-1,f=q.length-1;1<=l&&0<=f&&C[l]!==q[f];)f--;for(;1<=l&&0<=f;l--,f--)if(C[l]!==q[f]){if(l!==1||f!==1)do if(l--,f--,0>f||C[l]!==q[f]){var X=`
`+C[l].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=l&&0<=f);break}}}finally{ja=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Yr(a):""}function _l(n){switch(n.tag){case 26:case 27:case 5:return Yr(n.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 15:return za(n.type,!1);case 11:return za(n.type.render,!1);case 1:return za(n.type,!0);case 31:return Yr("Activity");default:return""}}function qa(n){try{var i="";do i+=_l(n),n=n.return;while(n);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function vl(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function md(n){var i=vl(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ba(n){n._valueTracker||(n._valueTracker=md(n))}function El(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return n&&(l=vl(n)?n.checked?"true":"false":n.value),n=l,n!==a?(i.setValue(n),!0):!1}function qs(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var gd=/[\n"\\]/g;function bt(n){return n.replace(gd,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Sn(n,i,a,l,f,d,E,w){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),i!=null?E==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+pn(i)):n.value!==""+pn(i)&&(n.value=""+pn(i)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),i!=null?Vi(n,E,pn(i)):a!=null?Vi(n,E,pn(a)):l!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+pn(w):n.removeAttribute("name")}function Bs(n,i,a,l,f,d,E,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+pn(a):"",i=i!=null?""+pn(i):a,w||i===n.value||(n.value=i),n.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=w?n.checked:!!l,n.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Vi(n,i,a){i==="number"&&qs(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Qr(n,i,a,l){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+pn(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function We(n,i,a){if(i!=null&&(i=""+pn(i),i!==n.value&&(n.value=i),a==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=a!=null?""+pn(a):""}function Hs(n,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(at(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=pn(i),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function Un(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Fs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yc(n,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,a):typeof a!="number"||a===0||Fs.has(i)?i==="float"?n.cssFloat=a:n[i]=(""+a).trim():n[i]=a+"px"}function Tl(n,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&a[f]!==l&&yc(n,f,l)}else for(var d in i)i.hasOwnProperty(d)&&yc(n,d,i[d])}function bl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_d=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ha(n){return _d.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Kr=null;function jn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Xr=null,Wr=null;function wl(n){var i=gr(n);if(i&&(n=i.stateNode)){var a=n[Tt]||null;e:switch(n=i.stateNode,i.type){case"input":if(Sn(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==n&&l.form===n.form){var f=l[Tt]||null;if(!f)throw Error(s(90));Sn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===n.form&&El(l)}break e;case"textarea":We(n,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Qr(n,!!a.multiple,i,!1)}}}var vr=!1;function _c(n,i,a){if(vr)return n(i,a);vr=!0;try{var l=n(i);return l}finally{if(vr=!1,(Xr!==null||Wr!==null)&&(hh(),Xr&&(i=Xr,n=Wr,Wr=Xr=null,wl(i),n)))for(i=0;i<n.length;i++)wl(n[i])}}function $s(n,i){var a=n.stateNode;if(a===null)return null;var l=a[Tt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zn=!1;if(tr)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){zn=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{zn=!1}var Er=null,Li=null,Zr=null;function Sl(){if(Zr)return Zr;var n,i=Li,a=i.length,l,f="value"in Er?Er.value:Er.textContent,d=f.length;for(n=0;n<a&&i[n]===f[n];n++);var E=a-n;for(l=1;l<=E&&i[a-l]===f[d-l];l++);return Zr=f.slice(n,1<l?1-l:void 0)}function Tr(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function br(){return!0}function Al(){return!1}function jt(n){function i(a,l,f,d,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(a=n[w],this[w]=a?a(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?br:Al,this.isPropagationStopped=Al,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),i}var $e={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fa=jt($e),Ys=v({},$e,{view:0,detail:0}),vc=jt(Ys),$a,Ga,wr,Qs=v({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wr&&(wr&&n.type==="mousemove"?($a=n.screenX-wr.screenX,Ga=n.screenY-wr.screenY):Ga=$a=0,wr=n),$a)},movementY:function(n){return"movementY"in n?n.movementY:Ga}}),qn=jt(Qs),Ec=v({},Qs,{dataTransfer:0}),vd=jt(Ec),Ks=v({},Ys,{relatedTarget:0}),Ya=jt(Ks),Rl=v({},$e,{animationName:0,elapsedTime:0,pseudoElement:0}),Qa=jt(Rl),Tc=v({},$e,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ka=jt(Tc),Ed=v({},$e,{data:0}),xl=jt(Ed),Xs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Il(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=wc[n])?!!i[n]:!1}function Ws(){return Il}var Sc=v({},Ys,{key:function(n){if(n.key){var i=Xs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Tr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?bc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(n){return n.type==="keypress"?Tr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Tr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Xa=jt(Sc),Ac=v({},Qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cl=jt(Ac),Jr=v({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),Rc=jt(Jr),xc=v({},$e,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ic=jt(xc),Cc=v({},Qs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Wa=jt(Cc),mn=v({},$e,{newState:0,oldState:0}),Dc=jt(mn),Nc=[9,13,27,32],Sr=tr&&"CompositionEvent"in window,c=null;tr&&"documentMode"in document&&(c=document.documentMode);var y=tr&&"TextEvent"in window&&!c,_=tr&&(!Sr||c&&8<c&&11>=c),A=" ",j=!1;function Q(n,i){switch(n){case"keyup":return Nc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ue=!1;function Ot(n,i){switch(n){case"compositionend":return oe(i);case"keypress":return i.which!==32?null:(j=!0,A);case"textInput":return n=i.data,n===A&&j?null:n;default:return null}}function je(n,i){if(Ue)return n==="compositionend"||!Sr&&Q(n,i)?(n=Sl(),Zr=Li=Er=null,Ue=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var zt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kt(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!zt[n.type]:i==="textarea"}function ei(n,i,a,l){Xr?Wr?Wr.push(l):Wr=[l]:Xr=l,i=yh(i,"onChange"),0<i.length&&(a=new Fa("onChange","change",null,a,l),n.push({event:a,listeners:i}))}var Qt=null,Ar=null;function Dl(n){h0(n,0)}function Oc(n){var i=yr(n);if(El(i))return n}function Oy(n,i){if(n==="change")return i}var ky=!1;if(tr){var Td;if(tr){var bd="oninput"in document;if(!bd){var My=document.createElement("div");My.setAttribute("oninput","return;"),bd=typeof My.oninput=="function"}Td=bd}else Td=!1;ky=Td&&(!document.documentMode||9<document.documentMode)}function Py(){Qt&&(Qt.detachEvent("onpropertychange",Vy),Ar=Qt=null)}function Vy(n){if(n.propertyName==="value"&&Oc(Ar)){var i=[];ei(i,Ar,n,jn(n)),_c(Dl,i)}}function _S(n,i,a){n==="focusin"?(Py(),Qt=i,Ar=a,Qt.attachEvent("onpropertychange",Vy)):n==="focusout"&&Py()}function vS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oc(Ar)}function ES(n,i){if(n==="click")return Oc(i)}function TS(n,i){if(n==="input"||n==="change")return Oc(i)}function bS(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var An=typeof Object.is=="function"?Object.is:bS;function Nl(n,i){if(An(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!nn.call(i,f)||!An(n[f],i[f]))return!1}return!0}function Ly(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Uy(n,i){var a=Ly(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=i&&l>=i)return{node:a,offset:i-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ly(a)}}function jy(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?jy(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function zy(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=qs(n.document);i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=qs(n.document)}return i}function wd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var wS=tr&&"documentMode"in document&&11>=document.documentMode,Za=null,Sd=null,Ol=null,Ad=!1;function qy(n,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ad||Za==null||Za!==qs(l)||(l=Za,"selectionStart"in l&&wd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ol&&Nl(Ol,l)||(Ol=l,l=yh(Sd,"onSelect"),0<l.length&&(i=new Fa("onSelect","select",null,i,a),n.push({event:i,listeners:l}),i.target=Za)))}function Zs(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ja={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionrun:Zs("Transition","TransitionRun"),transitionstart:Zs("Transition","TransitionStart"),transitioncancel:Zs("Transition","TransitionCancel"),transitionend:Zs("Transition","TransitionEnd")},Rd={},By={};tr&&(By=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function Js(n){if(Rd[n])return Rd[n];if(!Ja[n])return n;var i=Ja[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in By)return Rd[n]=i[a];return n}var Hy=Js("animationend"),Fy=Js("animationiteration"),$y=Js("animationstart"),SS=Js("transitionrun"),AS=Js("transitionstart"),RS=Js("transitioncancel"),Gy=Js("transitionend"),Yy=new Map,xd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xd.push("scrollEnd");function nr(n,i){Yy.set(n,i),er(i,[n])}var Qy=new WeakMap;function Bn(n,i){if(typeof n=="object"&&n!==null){var a=Qy.get(n);return a!==void 0?a:(i={value:n,source:i,stack:qa(i)},Qy.set(n,i),i)}return{value:n,source:i,stack:qa(i)}}var Hn=[],eo=0,Id=0;function kc(){for(var n=eo,i=Id=eo=0;i<n;){var a=Hn[i];Hn[i++]=null;var l=Hn[i];Hn[i++]=null;var f=Hn[i];Hn[i++]=null;var d=Hn[i];if(Hn[i++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}d!==0&&Ky(a,f,d)}}function Mc(n,i,a,l){Hn[eo++]=n,Hn[eo++]=i,Hn[eo++]=a,Hn[eo++]=l,Id|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Cd(n,i,a,l){return Mc(n,i,a,l),Pc(n)}function to(n,i){return Mc(n,null,null,i),Pc(n)}function Ky(n,i,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,d=n.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&i!==null&&(f=31-rn(a),n=d.hiddenUpdates,l=n[f],l===null?n[f]=[i]:l.push(i),i.lane=a|536870912),d):null}function Pc(n){if(50<ru)throw ru=0,Pp=null,Error(s(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var no={};function xS(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(n,i,a,l){return new xS(n,i,a,l)}function Dd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ti(n,i){var a=n.alternate;return a===null?(a=Rn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Xy(n,i){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Vc(n,i,a,l,f,d){var E=0;if(l=n,typeof n=="function")Dd(n)&&(E=1);else if(typeof n=="string")E=CA(n,a,ge.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case x:return n=Rn(31,a,i,f),n.elementType=x,n.lanes=d,n;case L:return ea(a.children,f,d,i);case $:E=8,f|=24;break;case B:return n=Rn(12,a,i,f|2),n.elementType=B,n.lanes=d,n;case ce:return n=Rn(13,a,i,f),n.elementType=ce,n.lanes=d,n;case de:return n=Rn(19,a,i,f),n.elementType=de,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ee:case ie:E=10;break e;case W:E=9;break e;case ue:E=11;break e;case D:E=14;break e;case R:E=16,l=null;break e}E=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return i=Rn(E,a,i,f),i.elementType=n,i.type=l,i.lanes=d,i}function ea(n,i,a,l){return n=Rn(7,n,l,i),n.lanes=a,n}function Nd(n,i,a){return n=Rn(6,n,null,i),n.lanes=a,n}function Od(n,i,a){return i=Rn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var ro=[],io=0,Lc=null,Uc=0,Fn=[],$n=0,ta=null,ni=1,ri="";function na(n,i){ro[io++]=Uc,ro[io++]=Lc,Lc=n,Uc=i}function Wy(n,i,a){Fn[$n++]=ni,Fn[$n++]=ri,Fn[$n++]=ta,ta=n;var l=ni;n=ri;var f=32-rn(l)-1;l&=~(1<<f),a+=1;var d=32-rn(i)+f;if(30<d){var E=f-f%5;d=(l&(1<<E)-1).toString(32),l>>=E,f-=E,ni=1<<32-rn(i)+f|a<<f|l,ri=d+n}else ni=1<<d|a<<f|l,ri=n}function kd(n){n.return!==null&&(na(n,1),Wy(n,1,0))}function Md(n){for(;n===Lc;)Lc=ro[--io],ro[io]=null,Uc=ro[--io],ro[io]=null;for(;n===ta;)ta=Fn[--$n],Fn[$n]=null,ri=Fn[--$n],Fn[$n]=null,ni=Fn[--$n],Fn[$n]=null}var gn=null,pt=null,Fe=!1,ra=null,Rr=!1,Pd=Error(s(519));function ia(n){var i=Error(s(418,""));throw Pl(Bn(i,n)),Pd}function Zy(n){var i=n.stateNode,a=n.type,l=n.memoizedProps;switch(i[Nt]=n,i[Tt]=l,a){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(a=0;a<su.length;a++)Me(su[a],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),Bs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ba(i);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),Hs(i,l.value,l.defaultValue,l.children),Ba(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||m0(i.textContent,a)?(l.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),l.onScroll!=null&&Me("scroll",i),l.onScrollEnd!=null&&Me("scrollend",i),l.onClick!=null&&(i.onclick=_h),i=!0):i=!1,i||ia(n)}function Jy(n){for(gn=n.return;gn;)switch(gn.tag){case 5:case 13:Rr=!1;return;case 27:case 3:Rr=!0;return;default:gn=gn.return}}function kl(n){if(n!==gn)return!1;if(!Fe)return Jy(n),Fe=!0,!1;var i=n.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Wp(n.type,n.memoizedProps)),a=!a),a&&pt&&ia(n),Jy(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(i===0){pt=ir(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;n=n.nextSibling}pt=null}}else i===27?(i=pt,Ji(n.type)?(n=tm,tm=null,pt=n):pt=i):pt=gn?ir(n.stateNode.nextSibling):null;return!0}function Ml(){pt=gn=null,Fe=!1}function e_(){var n=ra;return n!==null&&(En===null?En=n:En.push.apply(En,n),ra=null),n}function Pl(n){ra===null?ra=[n]:ra.push(n)}var Vd=re(null),sa=null,ii=null;function Ui(n,i,a){se(Vd,i._currentValue),i._currentValue=a}function si(n){n._currentValue=Vd.current,ae(Vd)}function Ld(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function Ud(n,i,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var E=f.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=f;for(var C=0;C<i.length;C++)if(w.context===i[C]){d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),Ld(d.return,a,n),l||(E=null);break e}d=w.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),Ld(E,a,n),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===n){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Vl(n,i,a,l){n=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var w=f.type;An(f.pendingProps.value,E.value)||(n!==null?n.push(w):n=[w])}}else if(f===ct.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(hu):n=[hu])}f=f.return}n!==null&&Ud(i,n,a,l),i.flags|=262144}function jc(n){for(n=n.firstContext;n!==null;){if(!An(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function aa(n){sa=n,ii=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function sn(n){return t_(sa,n)}function zc(n,i){return sa===null&&aa(n),t_(n,i)}function t_(n,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ii===null){if(n===null)throw Error(s(308));ii=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else ii=ii.next=i;return a}var IS=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},CS=r.unstable_scheduleCallback,DS=r.unstable_NormalPriority,Mt={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jd(){return{controller:new IS,data:new Map,refCount:0}}function Ll(n){n.refCount--,n.refCount===0&&CS(DS,function(){n.controller.abort()})}var Ul=null,zd=0,so=0,ao=null;function NS(n,i){if(Ul===null){var a=Ul=[];zd=0,so=Bp(),ao={status:"pending",value:void 0,then:function(l){a.push(l)}}}return zd++,i.then(n_,n_),i}function n_(){if(--zd===0&&Ul!==null){ao!==null&&(ao.status="fulfilled");var n=Ul;Ul=null,so=0,ao=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function OS(n,i){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var r_=K.S;K.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&NS(n,i),r_!==null&&r_(n,i)};var oa=re(null);function qd(){var n=oa.current;return n!==null?n:rt.pooledCache}function qc(n,i){i===null?se(oa,oa.current):se(oa,i.pool)}function i_(){var n=qd();return n===null?null:{parent:Mt._currentValue,pool:n}}var jl=Error(s(460)),s_=Error(s(474)),Bc=Error(s(542)),Bd={then:function(){}};function a_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Hc(){}function o_(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(Hc,Hc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,u_(n),n;default:if(typeof i.status=="string")i.then(Hc,Hc);else{if(n=rt,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,u_(n),n}throw zl=i,jl}}var zl=null;function l_(){if(zl===null)throw Error(s(459));var n=zl;return zl=null,n}function u_(n){if(n===jl||n===Bc)throw Error(s(483))}var ji=!1;function Hd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function zi(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function qi(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ke&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Pc(n),Ky(n,null,a),i}return Mc(n,l,i,a),Pc(n)}function ql(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,ml(n,a)}}function $d(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?f=d=i:d=d.next=i}else f=d=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}var Gd=!1;function Bl(){if(Gd){var n=ao;if(n!==null)throw n}}function Hl(n,i,a,l){Gd=!1;var f=n.updateQueue;ji=!1;var d=f.firstBaseUpdate,E=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var C=w,q=C.next;C.next=null,E===null?d=q:E.next=q,E=C;var X=n.alternate;X!==null&&(X=X.updateQueue,w=X.lastBaseUpdate,w!==E&&(w===null?X.firstBaseUpdate=q:w.next=q,X.lastBaseUpdate=C))}if(d!==null){var te=f.baseState;E=0,X=q=C=null,w=d;do{var H=w.lane&-536870913,G=H!==w.lane;if(G?(ze&H)===H:(l&H)===H){H!==0&&H===so&&(Gd=!0),X!==null&&(X=X.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Se=n,Ee=w;H=i;var et=a;switch(Ee.tag){case 1:if(Se=Ee.payload,typeof Se=="function"){te=Se.call(et,te,H);break e}te=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=Ee.payload,H=typeof Se=="function"?Se.call(et,te,H):Se,H==null)break e;te=v({},te,H);break e;case 2:ji=!0}}H=w.callback,H!==null&&(n.flags|=64,G&&(n.flags|=8192),G=f.callbacks,G===null?f.callbacks=[H]:G.push(H))}else G={lane:H,tag:w.tag,payload:w.payload,callback:w.callback,next:null},X===null?(q=X=G,C=te):X=X.next=G,E|=H;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;G=w,w=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);X===null&&(C=te),f.baseState=C,f.firstBaseUpdate=q,f.lastBaseUpdate=X,d===null&&(f.shared.lanes=0),Ki|=E,n.lanes=E,n.memoizedState=te}}function c_(n,i){if(typeof n!="function")throw Error(s(191,n));n.call(i)}function h_(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)c_(a[n],i)}var oo=re(null),Fc=re(0);function f_(n,i){n=fi,se(Fc,n),se(oo,i),fi=n|i.baseLanes}function Yd(){se(Fc,fi),se(oo,oo.current)}function Qd(){fi=Fc.current,ae(oo),ae(Fc)}var Bi=0,Ne=null,Ze=null,wt=null,$c=!1,lo=!1,la=!1,Gc=0,Fl=0,uo=null,kS=0;function _t(){throw Error(s(321))}function Kd(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!An(n[a],i[a]))return!1;return!0}function Xd(n,i,a,l,f,d){return Bi=d,Ne=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,K.H=n===null||n.memoizedState===null?K_:X_,la=!1,d=a(l,f),la=!1,lo&&(d=p_(i,a,l,f)),d_(n),d}function d_(n){K.H=Zc;var i=Ze!==null&&Ze.next!==null;if(Bi=0,wt=Ze=Ne=null,$c=!1,Fl=0,uo=null,i)throw Error(s(300));n===null||qt||(n=n.dependencies,n!==null&&jc(n)&&(qt=!0))}function p_(n,i,a,l){Ne=n;var f=0;do{if(lo&&(uo=null),Fl=0,lo=!1,25<=f)throw Error(s(301));if(f+=1,wt=Ze=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}K.H=zS,d=i(a,l)}while(lo);return d}function MS(){var n=K.H,i=n.useState()[0];return i=typeof i.then=="function"?$l(i):i,n=n.useState()[0],(Ze!==null?Ze.memoizedState:null)!==n&&(Ne.flags|=1024),i}function Wd(){var n=Gc!==0;return Gc=0,n}function Zd(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function Jd(n){if($c){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}$c=!1}Bi=0,wt=Ze=Ne=null,lo=!1,Fl=Gc=0,uo=null}function _n(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ne.memoizedState=wt=n:wt=wt.next=n,wt}function St(){if(Ze===null){var n=Ne.alternate;n=n!==null?n.memoizedState:null}else n=Ze.next;var i=wt===null?Ne.memoizedState:wt.next;if(i!==null)wt=i,Ze=n;else{if(n===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));Ze=n,n={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},wt===null?Ne.memoizedState=wt=n:wt=wt.next=n}return wt}function ep(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $l(n){var i=Fl;return Fl+=1,uo===null&&(uo=[]),n=o_(uo,n,i),i=Ne,(wt===null?i.memoizedState:wt.next)===null&&(i=i.alternate,K.H=i===null||i.memoizedState===null?K_:X_),n}function Yc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return $l(n);if(n.$$typeof===ie)return sn(n)}throw Error(s(438,String(n)))}function tp(n){var i=null,a=Ne.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=ep(),Ne.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),l=0;l<n;l++)a[l]=M;return i.index++,a}function ai(n,i){return typeof i=="function"?i(n):i}function Qc(n){var i=St();return np(i,Ze,n)}function np(n,i,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=n.baseQueue,d=l.pending;if(d!==null){if(f!==null){var E=f.next;f.next=d.next,d.next=E}i.baseQueue=f=d,l.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{i=f.next;var w=E=null,C=null,q=i,X=!1;do{var te=q.lane&-536870913;if(te!==q.lane?(ze&te)===te:(Bi&te)===te){var H=q.revertLane;if(H===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),te===so&&(X=!0);else if((Bi&H)===H){q=q.next,H===so&&(X=!0);continue}else te={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(w=C=te,E=d):C=C.next=te,Ne.lanes|=H,Ki|=H;te=q.action,la&&a(d,te),d=q.hasEagerState?q.eagerState:a(d,te)}else H={lane:te,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(w=C=H,E=d):C=C.next=H,Ne.lanes|=te,Ki|=te;q=q.next}while(q!==null&&q!==i);if(C===null?E=d:C.next=w,!An(d,n.memoizedState)&&(qt=!0,X&&(a=ao,a!==null)))throw a;n.memoizedState=d,n.baseState=E,n.baseQueue=C,l.lastRenderedState=d}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function rp(n){var i=St(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,d=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do d=n(d,E.action),E=E.next;while(E!==f);An(d,i.memoizedState)||(qt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function m_(n,i,a){var l=Ne,f=St(),d=Fe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var E=!An((Ze||f).memoizedState,a);E&&(f.memoizedState=a,qt=!0),f=f.queue;var w=__.bind(null,l,f,n);if(Gl(2048,8,w,[n]),f.getSnapshot!==i||E||wt!==null&&wt.memoizedState.tag&1){if(l.flags|=2048,co(9,Kc(),y_.bind(null,l,f,a,i),null),rt===null)throw Error(s(349));d||(Bi&124)!==0||g_(l,i,a)}return a}function g_(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ne.updateQueue,i===null?(i=ep(),Ne.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function y_(n,i,a,l){i.value=a,i.getSnapshot=l,v_(i)&&E_(n)}function __(n,i,a){return a(function(){v_(i)&&E_(n)})}function v_(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!An(n,a)}catch{return!0}}function E_(n){var i=to(n,2);i!==null&&Nn(i,n,2)}function ip(n){var i=_n();if(typeof n=="function"){var a=n;if(n=a(),la){wn(!0);try{a()}finally{wn(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:n},i}function T_(n,i,a,l){return n.baseState=a,np(n,Ze,typeof l=="function"?l:ai)}function PS(n,i,a,l,f){if(Wc(n))throw Error(s(485));if(n=i.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};K.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,b_(i,d)):(d.next=a.next,i.pending=a.next=d)}}function b_(n,i){var a=i.action,l=i.payload,f=n.state;if(i.isTransition){var d=K.T,E={};K.T=E;try{var w=a(f,l),C=K.S;C!==null&&C(E,w),w_(n,i,w)}catch(q){sp(n,i,q)}finally{K.T=d}}else try{d=a(f,l),w_(n,i,d)}catch(q){sp(n,i,q)}}function w_(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){S_(n,i,l)},function(l){return sp(n,i,l)}):S_(n,i,a)}function S_(n,i,a){i.status="fulfilled",i.value=a,A_(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,b_(n,a)))}function sp(n,i,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,A_(i),i=i.next;while(i!==l)}n.action=null}function A_(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function R_(n,i){return i}function x_(n,i){if(Fe){var a=rt.formState;if(a!==null){e:{var l=Ne;if(Fe){if(pt){t:{for(var f=pt,d=Rr;f.nodeType!==8;){if(!d){f=null;break t}if(f=ir(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){pt=ir(f.nextSibling),l=f.data==="F!";break e}}ia(l)}l=!1}l&&(i=a[0])}}return a=_n(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R_,lastRenderedState:i},a.queue=l,a=G_.bind(null,Ne,l),l.dispatch=a,l=ip(!1),d=cp.bind(null,Ne,!1,l.queue),l=_n(),f={state:i,dispatch:null,action:n,pending:null},l.queue=f,a=PS.bind(null,Ne,f,d,a),f.dispatch=a,l.memoizedState=n,[i,a,!1]}function I_(n){var i=St();return C_(i,Ze,n)}function C_(n,i,a){if(i=np(n,i,R_)[0],n=Qc(ai)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=$l(i)}catch(E){throw E===jl?Bc:E}else l=i;i=St();var f=i.queue,d=f.dispatch;return a!==i.memoizedState&&(Ne.flags|=2048,co(9,Kc(),VS.bind(null,f,a),null)),[l,d,n]}function VS(n,i){n.action=i}function D_(n){var i=St(),a=Ze;if(a!==null)return C_(i,a,n);St(),i=i.memoizedState,a=St();var l=a.queue.dispatch;return a.memoizedState=n,[i,l,!1]}function co(n,i,a,l){return n={tag:n,create:a,deps:l,inst:i,next:null},i=Ne.updateQueue,i===null&&(i=ep(),Ne.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n),n}function Kc(){return{destroy:void 0,resource:void 0}}function N_(){return St().memoizedState}function Xc(n,i,a,l){var f=_n();l=l===void 0?null:l,Ne.flags|=n,f.memoizedState=co(1|i,Kc(),a,l)}function Gl(n,i,a,l){var f=St();l=l===void 0?null:l;var d=f.memoizedState.inst;Ze!==null&&l!==null&&Kd(l,Ze.memoizedState.deps)?f.memoizedState=co(i,d,a,l):(Ne.flags|=n,f.memoizedState=co(1|i,d,a,l))}function O_(n,i){Xc(8390656,8,n,i)}function k_(n,i){Gl(2048,8,n,i)}function M_(n,i){return Gl(4,2,n,i)}function P_(n,i){return Gl(4,4,n,i)}function V_(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function L_(n,i,a){a=a!=null?a.concat([n]):null,Gl(4,4,V_.bind(null,i,n),a)}function ap(){}function U_(n,i){var a=St();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Kd(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function j_(n,i){var a=St();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Kd(i,l[1]))return l[0];if(l=n(),la){wn(!0);try{n()}finally{wn(!1)}}return a.memoizedState=[l,i],l}function op(n,i,a){return a===void 0||(Bi&1073741824)!==0?n.memoizedState=i:(n.memoizedState=a,n=Bv(),Ne.lanes|=n,Ki|=n,a)}function z_(n,i,a,l){return An(a,i)?a:oo.current!==null?(n=op(n,a,l),An(n,i)||(qt=!0),n):(Bi&42)===0?(qt=!0,n.memoizedState=a):(n=Bv(),Ne.lanes|=n,Ki|=n,i)}function q_(n,i,a,l,f){var d=le.p;le.p=d!==0&&8>d?d:8;var E=K.T,w={};K.T=w,cp(n,!1,i,a);try{var C=f(),q=K.S;if(q!==null&&q(w,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var X=OS(C,l);Yl(n,i,X,Dn(n))}else Yl(n,i,l,Dn(n))}catch(te){Yl(n,i,{then:function(){},status:"rejected",reason:te},Dn())}finally{le.p=d,K.T=E}}function LS(){}function lp(n,i,a,l){if(n.tag!==5)throw Error(s(476));var f=B_(n).queue;q_(n,f,i,me,a===null?LS:function(){return H_(n),a(l)})}function B_(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:me},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function H_(n){var i=B_(n).next.queue;Yl(n,i,{},Dn())}function up(){return sn(hu)}function F_(){return St().memoizedState}function $_(){return St().memoizedState}function US(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=Dn();n=zi(a);var l=qi(i,n,a);l!==null&&(Nn(l,i,a),ql(l,i,a)),i={cache:jd()},n.payload=i;return}i=i.return}}function jS(n,i,a){var l=Dn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Wc(n)?Y_(i,a):(a=Cd(n,i,a,l),a!==null&&(Nn(a,n,l),Q_(a,i,l)))}function G_(n,i,a){var l=Dn();Yl(n,i,a,l)}function Yl(n,i,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wc(n))Y_(i,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,w=d(E,a);if(f.hasEagerState=!0,f.eagerState=w,An(w,E))return Mc(n,i,f,0),rt===null&&kc(),!1}catch{}finally{}if(a=Cd(n,i,f,l),a!==null)return Nn(a,n,l),Q_(a,i,l),!0}return!1}function cp(n,i,a,l){if(l={lane:2,revertLane:Bp(),action:l,hasEagerState:!1,eagerState:null,next:null},Wc(n)){if(i)throw Error(s(479))}else i=Cd(n,a,l,2),i!==null&&Nn(i,n,2)}function Wc(n){var i=n.alternate;return n===Ne||i!==null&&i===Ne}function Y_(n,i){lo=$c=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Q_(n,i,a){if((a&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,ml(n,a)}}var Zc={readContext:sn,use:Yc,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t},K_={readContext:sn,use:Yc,useCallback:function(n,i){return _n().memoizedState=[n,i===void 0?null:i],n},useContext:sn,useEffect:O_,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,Xc(4194308,4,V_.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Xc(4194308,4,n,i)},useInsertionEffect:function(n,i){Xc(4,2,n,i)},useMemo:function(n,i){var a=_n();i=i===void 0?null:i;var l=n();if(la){wn(!0);try{n()}finally{wn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(n,i,a){var l=_n();if(a!==void 0){var f=a(i);if(la){wn(!0);try{a(i)}finally{wn(!1)}}}else f=i;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=jS.bind(null,Ne,n),[l.memoizedState,n]},useRef:function(n){var i=_n();return n={current:n},i.memoizedState=n},useState:function(n){n=ip(n);var i=n.queue,a=G_.bind(null,Ne,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:ap,useDeferredValue:function(n,i){var a=_n();return op(a,n,i)},useTransition:function(){var n=ip(!1);return n=q_.bind(null,Ne,n.queue,!0,!1),_n().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var l=Ne,f=_n();if(Fe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),rt===null)throw Error(s(349));(ze&124)!==0||g_(l,i,a)}f.memoizedState=a;var d={value:a,getSnapshot:i};return f.queue=d,O_(__.bind(null,l,d,n),[n]),l.flags|=2048,co(9,Kc(),y_.bind(null,l,d,a,i),null),a},useId:function(){var n=_n(),i=rt.identifierPrefix;if(Fe){var a=ri,l=ni;a=(l&~(1<<32-rn(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Gc++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=kS++,i="«"+i+"r"+a.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:up,useFormState:x_,useActionState:x_,useOptimistic:function(n){var i=_n();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=cp.bind(null,Ne,!0,a),a.dispatch=i,[n,i]},useMemoCache:tp,useCacheRefresh:function(){return _n().memoizedState=US.bind(null,Ne)}},X_={readContext:sn,use:Yc,useCallback:U_,useContext:sn,useEffect:k_,useImperativeHandle:L_,useInsertionEffect:M_,useLayoutEffect:P_,useMemo:j_,useReducer:Qc,useRef:N_,useState:function(){return Qc(ai)},useDebugValue:ap,useDeferredValue:function(n,i){var a=St();return z_(a,Ze.memoizedState,n,i)},useTransition:function(){var n=Qc(ai)[0],i=St().memoizedState;return[typeof n=="boolean"?n:$l(n),i]},useSyncExternalStore:m_,useId:F_,useHostTransitionStatus:up,useFormState:I_,useActionState:I_,useOptimistic:function(n,i){var a=St();return T_(a,Ze,n,i)},useMemoCache:tp,useCacheRefresh:$_},zS={readContext:sn,use:Yc,useCallback:U_,useContext:sn,useEffect:k_,useImperativeHandle:L_,useInsertionEffect:M_,useLayoutEffect:P_,useMemo:j_,useReducer:rp,useRef:N_,useState:function(){return rp(ai)},useDebugValue:ap,useDeferredValue:function(n,i){var a=St();return Ze===null?op(a,n,i):z_(a,Ze.memoizedState,n,i)},useTransition:function(){var n=rp(ai)[0],i=St().memoizedState;return[typeof n=="boolean"?n:$l(n),i]},useSyncExternalStore:m_,useId:F_,useHostTransitionStatus:up,useFormState:D_,useActionState:D_,useOptimistic:function(n,i){var a=St();return Ze!==null?T_(a,Ze,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:tp,useCacheRefresh:$_},ho=null,Ql=0;function Jc(n){var i=Ql;return Ql+=1,ho===null&&(ho=[]),o_(ho,n,i)}function Kl(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function eh(n,i){throw i.$$typeof===b?Error(s(525)):(n=Object.prototype.toString.call(i),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function W_(n){var i=n._init;return i(n._payload)}function Z_(n){function i(V,k){if(n){var z=V.deletions;z===null?(V.deletions=[k],V.flags|=16):z.push(k)}}function a(V,k){if(!n)return null;for(;k!==null;)i(V,k),k=k.sibling;return null}function l(V){for(var k=new Map;V!==null;)V.key!==null?k.set(V.key,V):k.set(V.index,V),V=V.sibling;return k}function f(V,k){return V=ti(V,k),V.index=0,V.sibling=null,V}function d(V,k,z){return V.index=z,n?(z=V.alternate,z!==null?(z=z.index,z<k?(V.flags|=67108866,k):z):(V.flags|=67108866,k)):(V.flags|=1048576,k)}function E(V){return n&&V.alternate===null&&(V.flags|=67108866),V}function w(V,k,z,Z){return k===null||k.tag!==6?(k=Nd(z,V.mode,Z),k.return=V,k):(k=f(k,z),k.return=V,k)}function C(V,k,z,Z){var pe=z.type;return pe===L?X(V,k,z.props.children,Z,z.key):k!==null&&(k.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===R&&W_(pe)===k.type)?(k=f(k,z.props),Kl(k,z),k.return=V,k):(k=Vc(z.type,z.key,z.props,null,V.mode,Z),Kl(k,z),k.return=V,k)}function q(V,k,z,Z){return k===null||k.tag!==4||k.stateNode.containerInfo!==z.containerInfo||k.stateNode.implementation!==z.implementation?(k=Od(z,V.mode,Z),k.return=V,k):(k=f(k,z.children||[]),k.return=V,k)}function X(V,k,z,Z,pe){return k===null||k.tag!==7?(k=ea(z,V.mode,Z,pe),k.return=V,k):(k=f(k,z),k.return=V,k)}function te(V,k,z){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Nd(""+k,V.mode,z),k.return=V,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return z=Vc(k.type,k.key,k.props,null,V.mode,z),Kl(z,k),z.return=V,z;case I:return k=Od(k,V.mode,z),k.return=V,k;case R:var Z=k._init;return k=Z(k._payload),te(V,k,z)}if(at(k)||U(k))return k=ea(k,V.mode,z,null),k.return=V,k;if(typeof k.then=="function")return te(V,Jc(k),z);if(k.$$typeof===ie)return te(V,zc(V,k),z);eh(V,k)}return null}function H(V,k,z,Z){var pe=k!==null?k.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return pe!==null?null:w(V,k,""+z,Z);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===pe?C(V,k,z,Z):null;case I:return z.key===pe?q(V,k,z,Z):null;case R:return pe=z._init,z=pe(z._payload),H(V,k,z,Z)}if(at(z)||U(z))return pe!==null?null:X(V,k,z,Z,null);if(typeof z.then=="function")return H(V,k,Jc(z),Z);if(z.$$typeof===ie)return H(V,k,zc(V,z),Z);eh(V,z)}return null}function G(V,k,z,Z,pe){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return V=V.get(z)||null,w(k,V,""+Z,pe);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:return V=V.get(Z.key===null?z:Z.key)||null,C(k,V,Z,pe);case I:return V=V.get(Z.key===null?z:Z.key)||null,q(k,V,Z,pe);case R:var Oe=Z._init;return Z=Oe(Z._payload),G(V,k,z,Z,pe)}if(at(Z)||U(Z))return V=V.get(z)||null,X(k,V,Z,pe,null);if(typeof Z.then=="function")return G(V,k,z,Jc(Z),pe);if(Z.$$typeof===ie)return G(V,k,z,zc(k,Z),pe);eh(k,Z)}return null}function Se(V,k,z,Z){for(var pe=null,Oe=null,ye=k,Te=k=0,Ht=null;ye!==null&&Te<z.length;Te++){ye.index>Te?(Ht=ye,ye=null):Ht=ye.sibling;var He=H(V,ye,z[Te],Z);if(He===null){ye===null&&(ye=Ht);break}n&&ye&&He.alternate===null&&i(V,ye),k=d(He,k,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He,ye=Ht}if(Te===z.length)return a(V,ye),Fe&&na(V,Te),pe;if(ye===null){for(;Te<z.length;Te++)ye=te(V,z[Te],Z),ye!==null&&(k=d(ye,k,Te),Oe===null?pe=ye:Oe.sibling=ye,Oe=ye);return Fe&&na(V,Te),pe}for(ye=l(ye);Te<z.length;Te++)Ht=G(ye,V,Te,z[Te],Z),Ht!==null&&(n&&Ht.alternate!==null&&ye.delete(Ht.key===null?Te:Ht.key),k=d(Ht,k,Te),Oe===null?pe=Ht:Oe.sibling=Ht,Oe=Ht);return n&&ye.forEach(function(is){return i(V,is)}),Fe&&na(V,Te),pe}function Ee(V,k,z,Z){if(z==null)throw Error(s(151));for(var pe=null,Oe=null,ye=k,Te=k=0,Ht=null,He=z.next();ye!==null&&!He.done;Te++,He=z.next()){ye.index>Te?(Ht=ye,ye=null):Ht=ye.sibling;var is=H(V,ye,He.value,Z);if(is===null){ye===null&&(ye=Ht);break}n&&ye&&is.alternate===null&&i(V,ye),k=d(is,k,Te),Oe===null?pe=is:Oe.sibling=is,Oe=is,ye=Ht}if(He.done)return a(V,ye),Fe&&na(V,Te),pe;if(ye===null){for(;!He.done;Te++,He=z.next())He=te(V,He.value,Z),He!==null&&(k=d(He,k,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He);return Fe&&na(V,Te),pe}for(ye=l(ye);!He.done;Te++,He=z.next())He=G(ye,V,Te,He.value,Z),He!==null&&(n&&He.alternate!==null&&ye.delete(He.key===null?Te:He.key),k=d(He,k,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He);return n&&ye.forEach(function(qA){return i(V,qA)}),Fe&&na(V,Te),pe}function et(V,k,z,Z){if(typeof z=="object"&&z!==null&&z.type===L&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var pe=z.key;k!==null;){if(k.key===pe){if(pe=z.type,pe===L){if(k.tag===7){a(V,k.sibling),Z=f(k,z.props.children),Z.return=V,V=Z;break e}}else if(k.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===R&&W_(pe)===k.type){a(V,k.sibling),Z=f(k,z.props),Kl(Z,z),Z.return=V,V=Z;break e}a(V,k);break}else i(V,k);k=k.sibling}z.type===L?(Z=ea(z.props.children,V.mode,Z,z.key),Z.return=V,V=Z):(Z=Vc(z.type,z.key,z.props,null,V.mode,Z),Kl(Z,z),Z.return=V,V=Z)}return E(V);case I:e:{for(pe=z.key;k!==null;){if(k.key===pe)if(k.tag===4&&k.stateNode.containerInfo===z.containerInfo&&k.stateNode.implementation===z.implementation){a(V,k.sibling),Z=f(k,z.children||[]),Z.return=V,V=Z;break e}else{a(V,k);break}else i(V,k);k=k.sibling}Z=Od(z,V.mode,Z),Z.return=V,V=Z}return E(V);case R:return pe=z._init,z=pe(z._payload),et(V,k,z,Z)}if(at(z))return Se(V,k,z,Z);if(U(z)){if(pe=U(z),typeof pe!="function")throw Error(s(150));return z=pe.call(z),Ee(V,k,z,Z)}if(typeof z.then=="function")return et(V,k,Jc(z),Z);if(z.$$typeof===ie)return et(V,k,zc(V,z),Z);eh(V,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,k!==null&&k.tag===6?(a(V,k.sibling),Z=f(k,z),Z.return=V,V=Z):(a(V,k),Z=Nd(z,V.mode,Z),Z.return=V,V=Z),E(V)):a(V,k)}return function(V,k,z,Z){try{Ql=0;var pe=et(V,k,z,Z);return ho=null,pe}catch(ye){if(ye===jl||ye===Bc)throw ye;var Oe=Rn(29,ye,null,V.mode);return Oe.lanes=Z,Oe.return=V,Oe}finally{}}}var fo=Z_(!0),J_=Z_(!1),Gn=re(null),xr=null;function Hi(n){var i=n.alternate;se(Pt,Pt.current&1),se(Gn,n),xr===null&&(i===null||oo.current!==null||i.memoizedState!==null)&&(xr=n)}function ev(n){if(n.tag===22){if(se(Pt,Pt.current),se(Gn,n),xr===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(xr=n)}}else Fi()}function Fi(){se(Pt,Pt.current),se(Gn,Gn.current)}function oi(n){ae(Gn),xr===n&&(xr=null),ae(Pt)}var Pt=re(0);function th(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||em(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function hp(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:v({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var fp={enqueueSetState:function(n,i,a){n=n._reactInternals;var l=Dn(),f=zi(l);f.payload=i,a!=null&&(f.callback=a),i=qi(n,f,l),i!==null&&(Nn(i,n,l),ql(i,n,l))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=Dn(),f=zi(l);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=qi(n,f,l),i!==null&&(Nn(i,n,l),ql(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Dn(),l=zi(a);l.tag=2,i!=null&&(l.callback=i),i=qi(n,l,a),i!==null&&(Nn(i,n,a),ql(i,n,a))}};function tv(n,i,a,l,f,d,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!Nl(a,l)||!Nl(f,d):!0}function nv(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&fp.enqueueReplaceState(i,i.state,null)}function ua(n,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(n=n.defaultProps){a===i&&(a=v({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var nh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function rv(n){nh(n)}function iv(n){console.error(n)}function sv(n){nh(n)}function rh(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function av(n,i,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function dp(n,i,a){return a=zi(a),a.tag=3,a.payload={element:null},a.callback=function(){rh(n,i)},a}function ov(n){return n=zi(n),n.tag=3,n}function lv(n,i,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;n.payload=function(){return f(d)},n.callback=function(){av(i,a,l)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){av(i,a,l),typeof f!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function qS(n,i,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Vl(i,a,f,!0),a=Gn.current,a!==null){switch(a.tag){case 13:return xr===null?Lp():a.alternate===null&&mt===0&&(mt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===Bd?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),jp(n,l,f)),!1;case 22:return a.flags|=65536,l===Bd?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),jp(n,l,f)),!1}throw Error(s(435,a.tag))}return jp(n,l,f),Lp(),!1}if(Fe)return i=Gn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Pd&&(n=Error(s(422),{cause:l}),Pl(Bn(n,a)))):(l!==Pd&&(i=Error(s(423),{cause:l}),Pl(Bn(i,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=Bn(l,a),f=dp(n.stateNode,l,f),$d(n,f),mt!==4&&(mt=2)),!1;var d=Error(s(520),{cause:l});if(d=Bn(d,a),nu===null?nu=[d]:nu.push(d),mt!==4&&(mt=2),i===null)return!0;l=Bn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=dp(a.stateNode,l,n),$d(a,n),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Xi===null||!Xi.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=ov(f),lv(f,n,a,l),$d(a,f),!1}a=a.return}while(a!==null);return!1}var uv=Error(s(461)),qt=!1;function Kt(n,i,a,l){i.child=n===null?J_(i,null,a,l):fo(i,n.child,a,l)}function cv(n,i,a,l,f){a=a.render;var d=i.ref;if("ref"in l){var E={};for(var w in l)w!=="ref"&&(E[w]=l[w])}else E=l;return aa(i),l=Xd(n,i,a,E,d,f),w=Wd(),n!==null&&!qt?(Zd(n,i,f),li(n,i,f)):(Fe&&w&&kd(i),i.flags|=1,Kt(n,i,l,f),i.child)}function hv(n,i,a,l,f){if(n===null){var d=a.type;return typeof d=="function"&&!Dd(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,fv(n,i,d,l,f)):(n=Vc(a.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(d=n.child,!Tp(n,f)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:Nl,a(E,l)&&n.ref===i.ref)return li(n,i,f)}return i.flags|=1,n=ti(d,l),n.ref=i.ref,n.return=i,i.child=n}function fv(n,i,a,l,f){if(n!==null){var d=n.memoizedProps;if(Nl(d,l)&&n.ref===i.ref)if(qt=!1,i.pendingProps=l=d,Tp(n,f))(n.flags&131072)!==0&&(qt=!0);else return i.lanes=n.lanes,li(n,i,f)}return pp(n,i,a,l,f)}function dv(n,i,a){var l=i.pendingProps,f=l.children,d=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,n!==null){for(f=i.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return pv(n,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&qc(i,d!==null?d.cachePool:null),d!==null?f_(i,d):Yd(),ev(i);else return i.lanes=i.childLanes=536870912,pv(n,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(qc(i,d.cachePool),f_(i,d),Fi(),i.memoizedState=null):(n!==null&&qc(i,null),Yd(),Fi());return Kt(n,i,f,a),i.child}function pv(n,i,a,l){var f=qd();return f=f===null?null:{parent:Mt._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},n!==null&&qc(i,null),Yd(),ev(i),n!==null&&Vl(n,i,l,!0),null}function ih(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function pp(n,i,a,l,f){return aa(i),a=Xd(n,i,a,l,void 0,f),l=Wd(),n!==null&&!qt?(Zd(n,i,f),li(n,i,f)):(Fe&&l&&kd(i),i.flags|=1,Kt(n,i,a,f),i.child)}function mv(n,i,a,l,f,d){return aa(i),i.updateQueue=null,a=p_(i,l,a,f),d_(n),l=Wd(),n!==null&&!qt?(Zd(n,i,d),li(n,i,d)):(Fe&&l&&kd(i),i.flags|=1,Kt(n,i,a,d),i.child)}function gv(n,i,a,l,f){if(aa(i),i.stateNode===null){var d=no,E=a.contextType;typeof E=="object"&&E!==null&&(d=sn(E)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=fp,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Hd(i),E=a.contextType,d.context=typeof E=="object"&&E!==null?sn(E):no,d.state=i.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(hp(i,a,E,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&fp.enqueueReplaceState(d,d.state,null),Hl(i,l,d,f),Bl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){d=i.stateNode;var w=i.memoizedProps,C=ua(a,w);d.props=C;var q=d.context,X=a.contextType;E=no,typeof X=="object"&&X!==null&&(E=sn(X));var te=a.getDerivedStateFromProps;X=typeof te=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,X||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||q!==E)&&nv(i,d,l,E),ji=!1;var H=i.memoizedState;d.state=H,Hl(i,l,d,f),Bl(),q=i.memoizedState,w||H!==q||ji?(typeof te=="function"&&(hp(i,a,te,l),q=i.memoizedState),(C=ji||tv(i,a,C,l,H,q,E))?(X||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=q),d.props=l,d.state=q,d.context=E,l=C):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Fd(n,i),E=i.memoizedProps,X=ua(a,E),d.props=X,te=i.pendingProps,H=d.context,q=a.contextType,C=no,typeof q=="object"&&q!==null&&(C=sn(q)),w=a.getDerivedStateFromProps,(q=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==te||H!==C)&&nv(i,d,l,C),ji=!1,H=i.memoizedState,d.state=H,Hl(i,l,d,f),Bl();var G=i.memoizedState;E!==te||H!==G||ji||n!==null&&n.dependencies!==null&&jc(n.dependencies)?(typeof w=="function"&&(hp(i,a,w,l),G=i.memoizedState),(X=ji||tv(i,a,X,l,H,G,C)||n!==null&&n.dependencies!==null&&jc(n.dependencies))?(q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,G,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,G,C)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=G),d.props=l,d.state=G,d.context=C,l=X):(typeof d.componentDidUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),l=!1)}return d=l,ih(n,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,n!==null&&l?(i.child=fo(i,n.child,null,f),i.child=fo(i,null,a,f)):Kt(n,i,a,f),i.memoizedState=d.state,n=i.child):n=li(n,i,f),n}function yv(n,i,a,l){return Ml(),i.flags|=256,Kt(n,i,a,l),i.child}var mp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gp(n){return{baseLanes:n,cachePool:i_()}}function yp(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=Yn),n}function _v(n,i,a){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=n!==null&&n.memoizedState===null?!1:(Pt.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,n===null){if(Fe){if(f?Hi(i):Fi(),Fe){var w=pt,C;if(C=w){e:{for(C=w,w=Rr;C.nodeType!==8;){if(!w){w=null;break e}if(C=ir(C.nextSibling),C===null){w=null;break e}}w=C}w!==null?(i.memoizedState={dehydrated:w,treeContext:ta!==null?{id:ni,overflow:ri}:null,retryLane:536870912,hydrationErrors:null},C=Rn(18,null,null,0),C.stateNode=w,C.return=i,i.child=C,gn=i,pt=null,C=!0):C=!1}C||ia(i)}if(w=i.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return em(w)?i.lanes=32:i.lanes=536870912,null;oi(i)}return w=l.children,l=l.fallback,f?(Fi(),f=i.mode,w=sh({mode:"hidden",children:w},f),l=ea(l,f,a,null),w.return=i,l.return=i,w.sibling=l,i.child=w,f=i.child,f.memoizedState=gp(a),f.childLanes=yp(n,E,a),i.memoizedState=mp,l):(Hi(i),_p(i,w))}if(C=n.memoizedState,C!==null&&(w=C.dehydrated,w!==null)){if(d)i.flags&256?(Hi(i),i.flags&=-257,i=vp(n,i,a)):i.memoizedState!==null?(Fi(),i.child=n.child,i.flags|=128,i=null):(Fi(),f=l.fallback,w=i.mode,l=sh({mode:"visible",children:l.children},w),f=ea(f,w,a,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,fo(i,n.child,null,a),l=i.child,l.memoizedState=gp(a),l.childLanes=yp(n,E,a),i.memoizedState=mp,i=f);else if(Hi(i),em(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var q=E.dgst;E=q,l=Error(s(419)),l.stack="",l.digest=E,Pl({value:l,source:null,stack:null}),i=vp(n,i,a)}else if(qt||Vl(n,i,a,!1),E=(a&n.childLanes)!==0,qt||E){if(E=rt,E!==null&&(l=a&-a,l=(l&42)!==0?1:Ni(l),l=(l&(E.suspendedLanes|a))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,to(n,l),Nn(E,n,l),uv;w.data==="$?"||Lp(),i=vp(n,i,a)}else w.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=C.treeContext,pt=ir(w.nextSibling),gn=i,Fe=!0,ra=null,Rr=!1,n!==null&&(Fn[$n++]=ni,Fn[$n++]=ri,Fn[$n++]=ta,ni=n.id,ri=n.overflow,ta=i),i=_p(i,l.children),i.flags|=4096);return i}return f?(Fi(),f=l.fallback,w=i.mode,C=n.child,q=C.sibling,l=ti(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,q!==null?f=ti(q,f):(f=ea(f,w,a,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,w=n.child.memoizedState,w===null?w=gp(a):(C=w.cachePool,C!==null?(q=Mt._currentValue,C=C.parent!==q?{parent:q,pool:q}:C):C=i_(),w={baseLanes:w.baseLanes|a,cachePool:C}),f.memoizedState=w,f.childLanes=yp(n,E,a),i.memoizedState=mp,l):(Hi(i),a=n.child,n=a.sibling,a=ti(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,n!==null&&(E=i.deletions,E===null?(i.deletions=[n],i.flags|=16):E.push(n)),i.child=a,i.memoizedState=null,a)}function _p(n,i){return i=sh({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function sh(n,i){return n=Rn(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function vp(n,i,a){return fo(i,n.child,null,a),n=_p(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function vv(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Ld(n.return,i,a)}function Ep(n,i,a,l,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function Ev(n,i,a){var l=i.pendingProps,f=l.revealOrder,d=l.tail;if(Kt(n,i,l.children,a),l=Pt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vv(n,a,i);else if(n.tag===19)vv(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(se(Pt,l),f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&th(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Ep(i,!1,f,a,d);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&th(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Ep(i,!0,a,null,d);break;case"together":Ep(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function li(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ki|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(Vl(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(s(153));if(i.child!==null){for(n=i.child,a=ti(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ti(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Tp(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&jc(n)))}function BS(n,i,a){switch(i.tag){case 3:Be(i,i.stateNode.containerInfo),Ui(i,Mt,n.memoizedState.cache),Ml();break;case 27:case 5:Pn(i);break;case 4:Be(i,i.stateNode.containerInfo);break;case 10:Ui(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Hi(i),i.flags|=128,null):(a&i.child.childLanes)!==0?_v(n,i,a):(Hi(i),n=li(n,i,a),n!==null?n.sibling:null);Hi(i);break;case 19:var f=(n.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Vl(n,i,a,!1),l=(a&i.childLanes)!==0),f){if(l)return Ev(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Pt,Pt.current),l)break;return null;case 22:case 23:return i.lanes=0,dv(n,i,a);case 24:Ui(i,Mt,n.memoizedState.cache)}return li(n,i,a)}function Tv(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)qt=!0;else{if(!Tp(n,a)&&(i.flags&128)===0)return qt=!1,BS(n,i,a);qt=(n.flags&131072)!==0}else qt=!1,Fe&&(i.flags&1048576)!==0&&Wy(i,Uc,i.index);switch(i.lanes=0,i.tag){case 16:e:{n=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")Dd(l)?(n=ua(l,n),i.tag=1,i=gv(null,i,l,n,a)):(i.tag=0,i=pp(null,i,l,n,a));else{if(l!=null){if(f=l.$$typeof,f===ue){i.tag=11,i=cv(null,i,l,n,a);break e}else if(f===D){i.tag=14,i=hv(null,i,l,n,a);break e}}throw i=Dt(l)||l,Error(s(306,i,""))}}return i;case 0:return pp(n,i,i.type,i.pendingProps,a);case 1:return l=i.type,f=ua(l,i.pendingProps),gv(n,i,l,f,a);case 3:e:{if(Be(i,i.stateNode.containerInfo),n===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Fd(n,i),Hl(i,l,null,a);var E=i.memoizedState;if(l=E.cache,Ui(i,Mt,l),l!==d.cache&&Ud(i,[Mt],a,!0),Bl(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=yv(n,i,l,a);break e}else if(l!==f){f=Bn(Error(s(424)),i),Pl(f),i=yv(n,i,l,a);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(pt=ir(n.firstChild),gn=i,Fe=!0,ra=null,Rr=!0,a=J_(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ml(),l===f){i=li(n,i,a);break e}Kt(n,i,l,a)}i=i.child}return i;case 26:return ih(n,i),n===null?(a=A0(i.type,null,i.pendingProps,null))?i.memoizedState=a:Fe||(a=i.type,n=i.pendingProps,l=vh(ve.current).createElement(a),l[Nt]=i,l[Tt]=n,Wt(l,a,n),yt(l),i.stateNode=l):i.memoizedState=A0(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Pn(i),n===null&&Fe&&(l=i.stateNode=b0(i.type,i.pendingProps,ve.current),gn=i,Rr=!0,f=pt,Ji(i.type)?(tm=f,pt=ir(l.firstChild)):pt=f),Kt(n,i,i.pendingProps.children,a),ih(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Fe&&((f=l=pt)&&(l=gA(l,i.type,i.pendingProps,Rr),l!==null?(i.stateNode=l,gn=i,pt=ir(l.firstChild),Rr=!1,f=!0):f=!1),f||ia(i)),Pn(i),f=i.type,d=i.pendingProps,E=n!==null?n.memoizedProps:null,l=d.children,Wp(f,d)?l=null:E!==null&&Wp(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=Xd(n,i,MS,null,null,a),hu._currentValue=f),ih(n,i),Kt(n,i,l,a),i.child;case 6:return n===null&&Fe&&((n=a=pt)&&(a=yA(a,i.pendingProps,Rr),a!==null?(i.stateNode=a,gn=i,pt=null,n=!0):n=!1),n||ia(i)),null;case 13:return _v(n,i,a);case 4:return Be(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=fo(i,null,l,a):Kt(n,i,l,a),i.child;case 11:return cv(n,i,i.type,i.pendingProps,a);case 7:return Kt(n,i,i.pendingProps,a),i.child;case 8:return Kt(n,i,i.pendingProps.children,a),i.child;case 12:return Kt(n,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Ui(i,i.type,l.value),Kt(n,i,l.children,a),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,aa(i),f=sn(f),l=l(f),i.flags|=1,Kt(n,i,l,a),i.child;case 14:return hv(n,i,i.type,i.pendingProps,a);case 15:return fv(n,i,i.type,i.pendingProps,a);case 19:return Ev(n,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},n===null?(a=sh(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=ti(n.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return dv(n,i,a);case 24:return aa(i),l=sn(Mt),n===null?(f=qd(),f===null&&(f=rt,d=jd(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),i.memoizedState={parent:l,cache:f},Hd(i),Ui(i,Mt,f)):((n.lanes&a)!==0&&(Fd(n,i),Hl(i,null,null,a),Bl()),f=n.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ui(i,Mt,l)):(l=d.cache,Ui(i,Mt,l),l!==f.cache&&Ud(i,[Mt],a,!0))),Kt(n,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function ui(n){n.flags|=4}function bv(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!D0(i)){if(i=Gn.current,i!==null&&((ze&4194048)===ze?xr!==null:(ze&62914560)!==ze&&(ze&536870912)===0||i!==xr))throw zl=Bd,s_;n.flags|=8192}}function ah(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?dl():536870912,n.lanes|=i,yo|=i)}function Xl(n,i){if(!Fe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function ht(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function HS(n,i,a){var l=i.pendingProps;switch(Md(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(i),null;case 1:return ht(i),null;case 3:return a=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),si(Mt),Ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(kl(i)?ui(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,e_())),ht(i),null;case 26:return a=i.memoizedState,n===null?(ui(i),a!==null?(ht(i),bv(i,a)):(ht(i),i.flags&=-16777217)):a?a!==n.memoizedState?(ui(i),ht(i),bv(i,a)):(ht(i),i.flags&=-16777217):(n.memoizedProps!==l&&ui(i),ht(i),i.flags&=-16777217),null;case 27:yn(i),a=ve.current;var f=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==l&&ui(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}n=ge.current,kl(i)?Zy(i):(n=b0(f,l,a),i.stateNode=n,ui(i))}return ht(i),null;case 5:if(yn(i),a=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&ui(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}if(n=ge.current,kl(i))Zy(i);else{switch(f=vh(ve.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}n[Nt]=i,n[Tt]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=n;e:switch(Wt(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ui(i)}}return ht(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&ui(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(n=ve.current,kl(i)){if(n=i.stateNode,a=i.memoizedProps,l=null,f=gn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[Nt]=i,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||m0(n.nodeValue,a)),n||ia(i)}else n=vh(n).createTextNode(l),n[Nt]=i,i.stateNode=n}return ht(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=kl(i),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Nt]=i}else Ml(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ht(i),f=!1}else f=e_(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(oi(i),i):(oi(i),null)}if(oi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return a!==n&&a&&(i.child.flags|=8192),ah(i,i.updateQueue),ht(i),null;case 4:return Ut(),n===null&&Gp(i.stateNode.containerInfo),ht(i),null;case 10:return si(i.type),ht(i),null;case 19:if(ae(Pt),f=i.memoizedState,f===null)return ht(i),null;if(l=(i.flags&128)!==0,d=f.rendering,d===null)if(l)Xl(f,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(d=th(n),d!==null){for(i.flags|=128,Xl(f,!1),n=d.updateQueue,i.updateQueue=n,ah(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)Xy(a,n),a=a.sibling;return se(Pt,Pt.current&1|2),i.child}n=n.sibling}f.tail!==null&&Vn()>uh&&(i.flags|=128,l=!0,Xl(f,!1),i.lanes=4194304)}else{if(!l)if(n=th(d),n!==null){if(i.flags|=128,l=!0,n=n.updateQueue,i.updateQueue=n,ah(i,n),Xl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!Fe)return ht(i),null}else 2*Vn()-f.renderingStartTime>uh&&a!==536870912&&(i.flags|=128,l=!0,Xl(f,!1),i.lanes=4194304);f.isBackwards?(d.sibling=i.child,i.child=d):(n=f.last,n!==null?n.sibling=d:i.child=d,f.last=d)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Vn(),i.sibling=null,n=Pt.current,se(Pt,l?n&1|2:n&1),i):(ht(i),null);case 22:case 23:return oi(i),Qd(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ht(i),i.subtreeFlags&6&&(i.flags|=8192)):ht(i),a=i.updateQueue,a!==null&&ah(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),n!==null&&ae(oa),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),si(Mt),ht(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function FS(n,i){switch(Md(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return si(Mt),Ut(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return yn(i),null;case 13:if(oi(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Ml()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ae(Pt),null;case 4:return Ut(),null;case 10:return si(i.type),null;case 22:case 23:return oi(i),Qd(),n!==null&&ae(oa),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return si(Mt),null;case 25:return null;default:return null}}function wv(n,i){switch(Md(i),i.tag){case 3:si(Mt),Ut();break;case 26:case 27:case 5:yn(i);break;case 4:Ut();break;case 13:oi(i);break;case 19:ae(Pt);break;case 10:si(i.type);break;case 22:case 23:oi(i),Qd(),n!==null&&ae(oa);break;case 24:si(Mt)}}function Wl(n,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var d=a.create,E=a.inst;l=d(),E.destroy=l}a=a.next}while(a!==f)}}catch(w){tt(i,i.return,w)}}function $i(n,i,a){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&n)===n){var E=l.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,f=i;var C=a,q=w;try{q()}catch(X){tt(f,C,X)}}}l=l.next}while(l!==d)}}catch(X){tt(i,i.return,X)}}function Sv(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{h_(i,a)}catch(l){tt(n,n.return,l)}}}function Av(n,i,a){a.props=ua(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){tt(n,i,l)}}function Zl(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(f){tt(n,i,f)}}function Ir(n,i){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){tt(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){tt(n,i,f)}else a.current=null}function Rv(n){var i=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){tt(n,n.return,f)}}function bp(n,i,a){try{var l=n.stateNode;hA(l,n.type,a,i),l[Tt]=i}catch(f){tt(n,n.return,f)}}function xv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ji(n.type)||n.tag===4}function wp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ji(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sp(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(n),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=_h));else if(l!==4&&(l===27&&Ji(n.type)&&(a=n.stateNode,i=null),n=n.child,n!==null))for(Sp(n,i,a),n=n.sibling;n!==null;)Sp(n,i,a),n=n.sibling}function oh(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(l!==4&&(l===27&&Ji(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(oh(n,i,a),n=n.sibling;n!==null;)oh(n,i,a),n=n.sibling}function Iv(n){var i=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Wt(i,l,a),i[Nt]=n,i[Tt]=a}catch(d){tt(n,n.return,d)}}var ci=!1,vt=!1,Ap=!1,Cv=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function $S(n,i){if(n=n.containerInfo,Kp=Ah,n=zy(n),wd(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,w=-1,C=-1,q=0,X=0,te=n,H=null;t:for(;;){for(var G;te!==a||f!==0&&te.nodeType!==3||(w=E+f),te!==d||l!==0&&te.nodeType!==3||(C=E+l),te.nodeType===3&&(E+=te.nodeValue.length),(G=te.firstChild)!==null;)H=te,te=G;for(;;){if(te===n)break t;if(H===a&&++q===f&&(w=E),H===d&&++X===l&&(C=E),(G=te.nextSibling)!==null)break;te=H,H=te.parentNode}te=G}a=w===-1||C===-1?null:{start:w,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xp={focusedElem:n,selectionRange:a},Ah=!1,Bt=i;Bt!==null;)if(i=Bt,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,Bt=n;else for(;Bt!==null;){switch(i=Bt,d=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,a=i,f=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Se=ua(a.type,f,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(Se,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(Ee){tt(a,a.return,Ee)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,a=n.nodeType,a===9)Jp(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Jp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=i.sibling,n!==null){n.return=i.return,Bt=n;break}Bt=i.return}}function Dv(n,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Gi(n,a),l&4&&Wl(5,a);break;case 1:if(Gi(n,a),l&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(E){tt(a,a.return,E)}else{var f=ua(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(E){tt(a,a.return,E)}}l&64&&Sv(a),l&512&&Zl(a,a.return);break;case 3:if(Gi(n,a),l&64&&(n=a.updateQueue,n!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{h_(n,i)}catch(E){tt(a,a.return,E)}}break;case 27:i===null&&l&4&&Iv(a);case 26:case 5:Gi(n,a),i===null&&l&4&&Rv(a),l&512&&Zl(a,a.return);break;case 12:Gi(n,a);break;case 13:Gi(n,a),l&4&&kv(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=eA.bind(null,a),_A(n,a))));break;case 22:if(l=a.memoizedState!==null||ci,!l){i=i!==null&&i.memoizedState!==null||vt,f=ci;var d=vt;ci=l,(vt=i)&&!d?Yi(n,a,(a.subtreeFlags&8772)!==0):Gi(n,a),ci=f,vt=d}break;case 30:break;default:Gi(n,a)}}function Nv(n){var i=n.alternate;i!==null&&(n.alternate=null,Nv(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Mi(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var lt=null,vn=!1;function hi(n,i,a){for(a=a.child;a!==null;)Ov(n,i,a),a=a.sibling}function Ov(n,i,a){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:vt||Ir(a,i),hi(n,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vt||Ir(a,i);var l=lt,f=vn;Ji(a.type)&&(lt=a.stateNode,vn=!1),hi(n,i,a),ou(a.stateNode),lt=l,vn=f;break;case 5:vt||Ir(a,i);case 6:if(l=lt,f=vn,lt=null,hi(n,i,a),lt=l,vn=f,lt!==null)if(vn)try{(lt.nodeType===9?lt.body:lt.nodeName==="HTML"?lt.ownerDocument.body:lt).removeChild(a.stateNode)}catch(d){tt(a,i,d)}else try{lt.removeChild(a.stateNode)}catch(d){tt(a,i,d)}break;case 18:lt!==null&&(vn?(n=lt,E0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),mu(n)):E0(lt,a.stateNode));break;case 4:l=lt,f=vn,lt=a.stateNode.containerInfo,vn=!0,hi(n,i,a),lt=l,vn=f;break;case 0:case 11:case 14:case 15:vt||$i(2,a,i),vt||$i(4,a,i),hi(n,i,a);break;case 1:vt||(Ir(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Av(a,i,l)),hi(n,i,a);break;case 21:hi(n,i,a);break;case 22:vt=(l=vt)||a.memoizedState!==null,hi(n,i,a),vt=l;break;default:hi(n,i,a)}}function kv(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{mu(n)}catch(a){tt(i,i.return,a)}}function GS(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Cv),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Cv),i;default:throw Error(s(435,n.tag))}}function Rp(n,i){var a=GS(n);i.forEach(function(l){var f=tA.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}function xn(n,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],d=n,E=i,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(Ji(w.type)){lt=w.stateNode,vn=!1;break e}break;case 5:lt=w.stateNode,vn=!1;break e;case 3:case 4:lt=w.stateNode.containerInfo,vn=!0;break e}w=w.return}if(lt===null)throw Error(s(160));Ov(d,E,f),lt=null,vn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Mv(i,n),i=i.sibling}var rr=null;function Mv(n,i){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:xn(i,n),In(n),l&4&&($i(3,n,n.return),Wl(3,n),$i(5,n,n.return));break;case 1:xn(i,n),In(n),l&512&&(vt||a===null||Ir(a,a.return)),l&64&&ci&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=rr;if(xn(i,n),In(n),l&512&&(vt||a===null||Ir(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Us]||d[Nt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Wt(d,l,a),d[Nt]=n,yt(d),l=d;break e;case"link":var E=I0("link","href",f).get(l+(a.href||""));if(E){for(var w=0;w<E.length;w++)if(d=E[w],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(w,1);break t}}d=f.createElement(l),Wt(d,l,a),f.head.appendChild(d);break;case"meta":if(E=I0("meta","content",f).get(l+(a.content||""))){for(w=0;w<E.length;w++)if(d=E[w],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(w,1);break t}}d=f.createElement(l),Wt(d,l,a),f.head.appendChild(d);break;default:throw Error(s(468,l))}d[Nt]=n,yt(d),l=d}n.stateNode=l}else C0(f,n.type,n.stateNode);else n.stateNode=x0(f,l,n.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?C0(f,n.type,n.stateNode):x0(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&bp(n,n.memoizedProps,a.memoizedProps)}break;case 27:xn(i,n),In(n),l&512&&(vt||a===null||Ir(a,a.return)),a!==null&&l&4&&bp(n,n.memoizedProps,a.memoizedProps);break;case 5:if(xn(i,n),In(n),l&512&&(vt||a===null||Ir(a,a.return)),n.flags&32){f=n.stateNode;try{Un(f,"")}catch(G){tt(n,n.return,G)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,bp(n,f,a!==null?a.memoizedProps:f)),l&1024&&(Ap=!0);break;case 6:if(xn(i,n),In(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(G){tt(n,n.return,G)}}break;case 3:if(bh=null,f=rr,rr=Eh(i.containerInfo),xn(i,n),rr=f,In(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{mu(i.containerInfo)}catch(G){tt(n,n.return,G)}Ap&&(Ap=!1,Pv(n));break;case 4:l=rr,rr=Eh(n.stateNode.containerInfo),xn(i,n),In(n),rr=l;break;case 12:xn(i,n),In(n);break;case 13:xn(i,n),In(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Op=Vn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Rp(n,l)));break;case 22:f=n.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,q=ci,X=vt;if(ci=q||f,vt=X||C,xn(i,n),vt=X,ci=q,In(n),l&8192)e:for(i=n.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||C||ci||vt||ca(n)),a=null,i=n;;){if(i.tag===5||i.tag===26){if(a===null){C=a=i;try{if(d=C.stateNode,f)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=C.stateNode;var te=C.memoizedProps.style,H=te!=null&&te.hasOwnProperty("display")?te.display:null;w.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(G){tt(C,C.return,G)}}}else if(i.tag===6){if(a===null){C=i;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(G){tt(C,C.return,G)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Rp(n,a))));break;case 19:xn(i,n),In(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Rp(n,l)));break;case 30:break;case 21:break;default:xn(i,n),In(n)}}function In(n){var i=n.flags;if(i&2){try{for(var a,l=n.return;l!==null;){if(xv(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,d=wp(n);oh(n,d,f);break;case 5:var E=a.stateNode;a.flags&32&&(Un(E,""),a.flags&=-33);var w=wp(n);oh(n,w,E);break;case 3:case 4:var C=a.stateNode.containerInfo,q=wp(n);Sp(n,q,C);break;default:throw Error(s(161))}}catch(X){tt(n,n.return,X)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Pv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Pv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Gi(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Dv(n,i.alternate,i),i=i.sibling}function ca(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:$i(4,i,i.return),ca(i);break;case 1:Ir(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Av(i,i.return,a),ca(i);break;case 27:ou(i.stateNode);case 26:case 5:Ir(i,i.return),ca(i);break;case 22:i.memoizedState===null&&ca(i);break;case 30:ca(i);break;default:ca(i)}n=n.sibling}}function Yi(n,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=n,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:Yi(f,d,a),Wl(4,d);break;case 1:if(Yi(f,d,a),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){tt(l,l.return,q)}if(l=d,f=l.updateQueue,f!==null){var w=l.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)c_(C[f],w)}catch(q){tt(l,l.return,q)}}a&&E&64&&Sv(d),Zl(d,d.return);break;case 27:Iv(d);case 26:case 5:Yi(f,d,a),a&&l===null&&E&4&&Rv(d),Zl(d,d.return);break;case 12:Yi(f,d,a);break;case 13:Yi(f,d,a),a&&E&4&&kv(f,d);break;case 22:d.memoizedState===null&&Yi(f,d,a),Zl(d,d.return);break;case 30:break;default:Yi(f,d,a)}i=i.sibling}}function xp(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Ll(a))}function Ip(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ll(n))}function Cr(n,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Vv(n,i,a,l),i=i.sibling}function Vv(n,i,a,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Cr(n,i,a,l),f&2048&&Wl(9,i);break;case 1:Cr(n,i,a,l);break;case 3:Cr(n,i,a,l),f&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ll(n)));break;case 12:if(f&2048){Cr(n,i,a,l),n=i.stateNode;try{var d=i.memoizedProps,E=d.id,w=d.onPostCommit;typeof w=="function"&&w(E,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(C){tt(i,i.return,C)}}else Cr(n,i,a,l);break;case 13:Cr(n,i,a,l);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?Cr(n,i,a,l):Jl(n,i):d._visibility&2?Cr(n,i,a,l):(d._visibility|=2,po(n,i,a,l,(i.subtreeFlags&10256)!==0)),f&2048&&xp(E,i);break;case 24:Cr(n,i,a,l),f&2048&&Ip(i.alternate,i);break;default:Cr(n,i,a,l)}}function po(n,i,a,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=n,E=i,w=a,C=l,q=E.flags;switch(E.tag){case 0:case 11:case 15:po(d,E,w,C,f),Wl(8,E);break;case 23:break;case 22:var X=E.stateNode;E.memoizedState!==null?X._visibility&2?po(d,E,w,C,f):Jl(d,E):(X._visibility|=2,po(d,E,w,C,f)),f&&q&2048&&xp(E.alternate,E);break;case 24:po(d,E,w,C,f),f&&q&2048&&Ip(E.alternate,E);break;default:po(d,E,w,C,f)}i=i.sibling}}function Jl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,l=i,f=l.flags;switch(l.tag){case 22:Jl(a,l),f&2048&&xp(l.alternate,l);break;case 24:Jl(a,l),f&2048&&Ip(l.alternate,l);break;default:Jl(a,l)}i=i.sibling}}var eu=8192;function mo(n){if(n.subtreeFlags&eu)for(n=n.child;n!==null;)Lv(n),n=n.sibling}function Lv(n){switch(n.tag){case 26:mo(n),n.flags&eu&&n.memoizedState!==null&&NA(rr,n.memoizedState,n.memoizedProps);break;case 5:mo(n);break;case 3:case 4:var i=rr;rr=Eh(n.stateNode.containerInfo),mo(n),rr=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=eu,eu=16777216,mo(n),eu=i):mo(n));break;default:mo(n)}}function Uv(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function tu(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Bt=l,zv(l,n)}Uv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jv(n),n=n.sibling}function jv(n){switch(n.tag){case 0:case 11:case 15:tu(n),n.flags&2048&&$i(9,n,n.return);break;case 3:tu(n);break;case 12:tu(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,lh(n)):tu(n);break;default:tu(n)}}function lh(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Bt=l,zv(l,n)}Uv(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:$i(8,i,i.return),lh(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,lh(i));break;default:lh(i)}n=n.sibling}}function zv(n,i){for(;Bt!==null;){var a=Bt;switch(a.tag){case 0:case 11:case 15:$i(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ll(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Bt=l;else e:for(a=n;Bt!==null;){l=Bt;var f=l.sibling,d=l.return;if(Nv(l),l===a){Bt=null;break e}if(f!==null){f.return=d,Bt=f;break e}Bt=d}}}var YS={getCacheForType:function(n){var i=sn(Mt),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a}},QS=typeof WeakMap=="function"?WeakMap:Map,Ke=0,rt=null,ke=null,ze=0,Xe=0,Cn=null,Qi=!1,go=!1,Cp=!1,fi=0,mt=0,Ki=0,ha=0,Dp=0,Yn=0,yo=0,nu=null,En=null,Np=!1,Op=0,uh=1/0,ch=null,Xi=null,Xt=0,Wi=null,_o=null,vo=0,kp=0,Mp=null,qv=null,ru=0,Pp=null;function Dn(){if((Ke&2)!==0&&ze!==0)return ze&-ze;if(K.T!==null){var n=so;return n!==0?n:Bp()}return Oi()}function Bv(){Yn===0&&(Yn=(ze&536870912)===0||Fe?fl():536870912);var n=Gn.current;return n!==null&&(n.flags|=32),Yn}function Nn(n,i,a){(n===rt&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(Eo(n,0),Zi(n,ze,Yn,!1)),Fr(n,a),((Ke&2)===0||n!==rt)&&(n===rt&&((Ke&2)===0&&(ha|=a),mt===4&&Zi(n,ze,Yn,!1)),Dr(n))}function Hv(n,i,a){if((Ke&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&n.expiredLanes)===0||Ls(n,i),f=l?WS(n,i):Up(n,i,!0),d=l;do{if(f===0){go&&!l&&Zi(n,i,0,!1);break}else{if(a=n.current.alternate,d&&!KS(a)){f=Up(n,i,!1),d=!1;continue}if(f===2){if(d=i,n.errorRecoveryDisabledLanes&d)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var w=n;f=nu;var C=w.current.memoizedState.isDehydrated;if(C&&(Eo(w,E).flags|=256),E=Up(w,E,!1),E!==2){if(Cp&&!C){w.errorRecoveryDisabledLanes|=d,ha|=d,f=4;break e}d=En,En=f,d!==null&&(En===null?En=d:En.push.apply(En,d))}f=E}if(d=!1,f!==2)continue}}if(f===1){Eo(n,0),Zi(n,i,0,!0);break}e:{switch(l=n,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Zi(l,i,Yn,!Qi);break e;case 2:En=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=Op+300-Vn(),10<f)){if(Zi(l,i,Yn,!Qi),Va(l,0,!0)!==0)break e;l.timeoutHandle=_0(Fv.bind(null,l,a,En,ch,Np,i,Yn,ha,yo,Qi,d,2,-0,0),f);break e}Fv(l,a,En,ch,Np,i,Yn,ha,yo,Qi,d,0,-0,0)}}break}while(!0);Dr(n)}function Fv(n,i,a,l,f,d,E,w,C,q,X,te,H,G){if(n.timeoutHandle=-1,te=i.subtreeFlags,(te&8192||(te&16785408)===16785408)&&(cu={stylesheets:null,count:0,unsuspend:DA},Lv(i),te=OA(),te!==null)){n.cancelPendingCommit=te(Wv.bind(null,n,i,d,a,l,f,E,w,C,X,1,H,G)),Zi(n,d,E,!q);return}Wv(n,i,d,a,l,f,E,w,C)}function KS(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!An(d(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Zi(n,i,a,l){i&=~Dp,i&=~ha,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var f=i;0<f;){var d=31-rn(f),E=1<<d;l[d]=-1,f&=~E}a!==0&&mr(n,a,i)}function hh(){return(Ke&6)===0?(iu(0),!1):!0}function Vp(){if(ke!==null){if(Xe===0)var n=ke.return;else n=ke,ii=sa=null,Jd(n),ho=null,Ql=0,n=ke;for(;n!==null;)wv(n.alternate,n),n=n.return;ke=null}}function Eo(n,i){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,dA(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Vp(),rt=n,ke=a=ti(n.current,null),ze=i,Xe=0,Cn=null,Qi=!1,go=Ls(n,i),Cp=!1,yo=Yn=Dp=ha=Ki=mt=0,En=nu=null,Np=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var f=31-rn(l),d=1<<f;i|=n[f],l&=~d}return fi=i,kc(),a}function $v(n,i){Ne=null,K.H=Zc,i===jl||i===Bc?(i=l_(),Xe=3):i===s_?(i=l_(),Xe=4):Xe=i===uv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Cn=i,ke===null&&(mt=1,rh(n,Bn(i,n.current)))}function Gv(){var n=K.H;return K.H=Zc,n===null?Zc:n}function Yv(){var n=K.A;return K.A=YS,n}function Lp(){mt=4,Qi||(ze&4194048)!==ze&&Gn.current!==null||(go=!0),(Ki&134217727)===0&&(ha&134217727)===0||rt===null||Zi(rt,ze,Yn,!1)}function Up(n,i,a){var l=Ke;Ke|=2;var f=Gv(),d=Yv();(rt!==n||ze!==i)&&(ch=null,Eo(n,i)),i=!1;var E=mt;e:do try{if(Xe!==0&&ke!==null){var w=ke,C=Cn;switch(Xe){case 8:Vp(),E=6;break e;case 3:case 2:case 9:case 6:Gn.current===null&&(i=!0);var q=Xe;if(Xe=0,Cn=null,To(n,w,C,q),a&&go){E=0;break e}break;default:q=Xe,Xe=0,Cn=null,To(n,w,C,q)}}XS(),E=mt;break}catch(X){$v(n,X)}while(!0);return i&&n.shellSuspendCounter++,ii=sa=null,Ke=l,K.H=f,K.A=d,ke===null&&(rt=null,ze=0,kc()),E}function XS(){for(;ke!==null;)Qv(ke)}function WS(n,i){var a=Ke;Ke|=2;var l=Gv(),f=Yv();rt!==n||ze!==i?(ch=null,uh=Vn()+500,Eo(n,i)):go=Ls(n,i);e:do try{if(Xe!==0&&ke!==null){i=ke;var d=Cn;t:switch(Xe){case 1:Xe=0,Cn=null,To(n,i,d,1);break;case 2:case 9:if(a_(d)){Xe=0,Cn=null,Kv(i);break}i=function(){Xe!==2&&Xe!==9||rt!==n||(Xe=7),Dr(n)},d.then(i,i);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:a_(d)?(Xe=0,Cn=null,Kv(i)):(Xe=0,Cn=null,To(n,i,d,7));break;case 5:var E=null;switch(ke.tag){case 26:E=ke.memoizedState;case 5:case 27:var w=ke;if(!E||D0(E)){Xe=0,Cn=null;var C=w.sibling;if(C!==null)ke=C;else{var q=w.return;q!==null?(ke=q,fh(q)):ke=null}break t}}Xe=0,Cn=null,To(n,i,d,5);break;case 6:Xe=0,Cn=null,To(n,i,d,6);break;case 8:Vp(),mt=6;break e;default:throw Error(s(462))}}ZS();break}catch(X){$v(n,X)}while(!0);return ii=sa=null,K.H=l,K.A=f,Ke=a,ke!==null?0:(rt=null,ze=0,kc(),mt)}function ZS(){for(;ke!==null&&!ll();)Qv(ke)}function Qv(n){var i=Tv(n.alternate,n,fi);n.memoizedProps=n.pendingProps,i===null?fh(n):ke=i}function Kv(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=mv(a,i,i.pendingProps,i.type,void 0,ze);break;case 11:i=mv(a,i,i.pendingProps,i.type.render,i.ref,ze);break;case 5:Jd(i);default:wv(a,i),i=ke=Xy(i,fi),i=Tv(a,i,fi)}n.memoizedProps=n.pendingProps,i===null?fh(n):ke=i}function To(n,i,a,l){ii=sa=null,Jd(i),ho=null,Ql=0;var f=i.return;try{if(qS(n,f,i,a,ze)){mt=1,rh(n,Bn(a,n.current)),ke=null;return}}catch(d){if(f!==null)throw ke=f,d;mt=1,rh(n,Bn(a,n.current)),ke=null;return}i.flags&32768?(Fe||l===1?n=!0:go||(ze&536870912)!==0?n=!1:(Qi=n=!0,(l===2||l===9||l===3||l===6)&&(l=Gn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Xv(i,n)):fh(i)}function fh(n){var i=n;do{if((i.flags&32768)!==0){Xv(i,Qi);return}n=i.return;var a=HS(i.alternate,i,fi);if(a!==null){ke=a;return}if(i=i.sibling,i!==null){ke=i;return}ke=i=n}while(i!==null);mt===0&&(mt=5)}function Xv(n,i){do{var a=FS(n.alternate,n);if(a!==null){a.flags&=32767,ke=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){ke=n;return}ke=n=a}while(n!==null);mt=6,ke=null}function Wv(n,i,a,l,f,d,E,w,C){n.cancelPendingCommit=null;do dh();while(Xt!==0);if((Ke&6)!==0)throw Error(s(327));if(i!==null){if(i===n.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Id,pl(n,a,d,E,w,C),n===rt&&(ke=rt=null,ze=0),_o=i,Wi=n,vo=a,kp=d,Mp=f,qv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,nA(ks,function(){return n0(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=K.T,K.T=null,f=le.p,le.p=2,E=Ke,Ke|=4;try{$S(n,i,a)}finally{Ke=E,le.p=f,K.T=l}}Xt=1,Zv(),Jv(),e0()}}function Zv(){if(Xt===1){Xt=0;var n=Wi,i=_o,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=K.T,K.T=null;var l=le.p;le.p=2;var f=Ke;Ke|=4;try{Mv(i,n);var d=Xp,E=zy(n.containerInfo),w=d.focusedElem,C=d.selectionRange;if(E!==w&&w&&w.ownerDocument&&jy(w.ownerDocument.documentElement,w)){if(C!==null&&wd(w)){var q=C.start,X=C.end;if(X===void 0&&(X=q),"selectionStart"in w)w.selectionStart=q,w.selectionEnd=Math.min(X,w.value.length);else{var te=w.ownerDocument||document,H=te&&te.defaultView||window;if(H.getSelection){var G=H.getSelection(),Se=w.textContent.length,Ee=Math.min(C.start,Se),et=C.end===void 0?Ee:Math.min(C.end,Se);!G.extend&&Ee>et&&(E=et,et=Ee,Ee=E);var V=Uy(w,Ee),k=Uy(w,et);if(V&&k&&(G.rangeCount!==1||G.anchorNode!==V.node||G.anchorOffset!==V.offset||G.focusNode!==k.node||G.focusOffset!==k.offset)){var z=te.createRange();z.setStart(V.node,V.offset),G.removeAllRanges(),Ee>et?(G.addRange(z),G.extend(k.node,k.offset)):(z.setEnd(k.node,k.offset),G.addRange(z))}}}}for(te=[],G=w;G=G.parentNode;)G.nodeType===1&&te.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<te.length;w++){var Z=te[w];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}Ah=!!Kp,Xp=Kp=null}finally{Ke=f,le.p=l,K.T=a}}n.current=i,Xt=2}}function Jv(){if(Xt===2){Xt=0;var n=Wi,i=_o,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=K.T,K.T=null;var l=le.p;le.p=2;var f=Ke;Ke|=4;try{Dv(n,i.alternate,i)}finally{Ke=f,le.p=l,K.T=a}}Xt=3}}function e0(){if(Xt===4||Xt===3){Xt=0,lc();var n=Wi,i=_o,a=vo,l=qv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Xt=5:(Xt=0,_o=Wi=null,t0(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Xi=null),La(a),i=i.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=K.T,f=le.p,le.p=2,K.T=null;try{for(var d=n.onRecoverableError,E=0;E<l.length;E++){var w=l[E];d(w.value,{componentStack:w.stack})}}finally{K.T=i,le.p=f}}(vo&3)!==0&&dh(),Dr(n),f=n.pendingLanes,(a&4194090)!==0&&(f&42)!==0?n===Pp?ru++:(ru=0,Pp=n):ru=0,iu(0)}}function t0(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Ll(i)))}function dh(n){return Zv(),Jv(),e0(),n0()}function n0(){if(Xt!==5)return!1;var n=Wi,i=kp;kp=0;var a=La(vo),l=K.T,f=le.p;try{le.p=32>a?32:a,K.T=null,a=Mp,Mp=null;var d=Wi,E=vo;if(Xt=0,_o=Wi=null,vo=0,(Ke&6)!==0)throw Error(s(331));var w=Ke;if(Ke|=4,jv(d.current),Vv(d,d.current,E,a),Ke=w,iu(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{le.p=f,K.T=l,t0(n,i)}}function r0(n,i,a){i=Bn(a,i),i=dp(n.stateNode,i,2),n=qi(n,i,2),n!==null&&(Fr(n,2),Dr(n))}function tt(n,i,a){if(n.tag===3)r0(n,n,a);else for(;i!==null;){if(i.tag===3){r0(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xi===null||!Xi.has(l))){n=Bn(a,n),a=ov(2),l=qi(i,a,2),l!==null&&(lv(a,l,i,n),Fr(l,2),Dr(l));break}}i=i.return}}function jp(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new QS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(Cp=!0,f.add(a),n=JS.bind(null,n,i,a),i.then(n,n))}function JS(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,rt===n&&(ze&a)===a&&(mt===4||mt===3&&(ze&62914560)===ze&&300>Vn()-Op?(Ke&2)===0&&Eo(n,0):Dp|=a,yo===ze&&(yo=0)),Dr(n)}function i0(n,i){i===0&&(i=dl()),n=to(n,i),n!==null&&(Fr(n,i),Dr(n))}function eA(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),i0(n,a)}function tA(n,i){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),i0(n,a)}function nA(n,i){return Ns(n,i)}var ph=null,bo=null,zp=!1,mh=!1,qp=!1,fa=0;function Dr(n){n!==bo&&n.next===null&&(bo===null?ph=bo=n:bo=bo.next=n),mh=!0,zp||(zp=!0,iA())}function iu(n,i){if(!qp&&mh){qp=!0;do for(var a=!1,l=ph;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var E=l.suspendedLanes,w=l.pingedLanes;d=(1<<31-rn(42|n)+1)-1,d&=f&~(E&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,l0(l,d))}else d=ze,d=Va(l,l===rt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ls(l,d)||(a=!0,l0(l,d));l=l.next}while(a);qp=!1}}function rA(){s0()}function s0(){mh=zp=!1;var n=0;fa!==0&&(fA()&&(n=fa),fa=0);for(var i=Vn(),a=null,l=ph;l!==null;){var f=l.next,d=a0(l,i);d===0?(l.next=null,a===null?ph=f:a.next=f,f===null&&(bo=a)):(a=l,(n!==0||(d&3)!==0)&&(mh=!0)),l=f}iu(n)}function a0(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var E=31-rn(d),w=1<<E,C=f[E];C===-1?((w&a)===0||(w&l)!==0)&&(f[E]=hl(w,i)):C<=i&&(n.expiredLanes|=w),d&=~w}if(i=rt,a=ze,a=Va(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===i&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Os(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||Ls(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(l!==null&&Os(l),La(a)){case 2:case 8:a=Ma;break;case 32:a=ks;break;case 268435456:a=Pa;break;default:a=ks}return l=o0.bind(null,n),a=Ns(a,l),n.callbackPriority=i,n.callbackNode=a,i}return l!==null&&l!==null&&Os(l),n.callbackPriority=2,n.callbackNode=null,2}function o0(n,i){if(Xt!==0&&Xt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(dh()&&n.callbackNode!==a)return null;var l=ze;return l=Va(n,n===rt?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Hv(n,l,i),a0(n,Vn()),n.callbackNode!=null&&n.callbackNode===a?o0.bind(null,n):null)}function l0(n,i){if(dh())return null;Hv(n,i,!0)}function iA(){pA(function(){(Ke&6)!==0?Ns(ul,rA):s0()})}function Bp(){return fa===0&&(fa=fl()),fa}function u0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ha(""+n)}function c0(n,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,n.id&&a.setAttribute("form",n.id),i.parentNode.insertBefore(a,i),n=new FormData(n),a.parentNode.removeChild(a),n}function sA(n,i,a,l,f){if(i==="submit"&&a&&a.stateNode===f){var d=u0((f[Tt]||null).action),E=l.submitter;E&&(i=(i=E[Tt]||null)?u0(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var w=new Fa("action","action",null,l,f);n.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(fa!==0){var C=E?c0(f,E):new FormData(f);lp(a,{pending:!0,data:C,method:f.method,action:d},null,C)}}else typeof d=="function"&&(w.preventDefault(),C=E?c0(f,E):new FormData(f),lp(a,{pending:!0,data:C,method:f.method,action:d},d,C))},currentTarget:f}]})}}for(var Hp=0;Hp<xd.length;Hp++){var Fp=xd[Hp],aA=Fp.toLowerCase(),oA=Fp[0].toUpperCase()+Fp.slice(1);nr(aA,"on"+oA)}nr(Hy,"onAnimationEnd"),nr(Fy,"onAnimationIteration"),nr($y,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(SS,"onTransitionRun"),nr(AS,"onTransitionStart"),nr(RS,"onTransitionCancel"),nr(Gy,"onTransitionEnd"),Gr("onMouseEnter",["mouseout","mouseover"]),Gr("onMouseLeave",["mouseout","mouseover"]),Gr("onPointerEnter",["pointerout","pointerover"]),Gr("onPointerLeave",["pointerout","pointerover"]),er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),er("onBeforeInput",["compositionend","keypress","textInput","paste"]),er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function h0(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var w=l[E],C=w.instance,q=w.currentTarget;if(w=w.listener,C!==d&&f.isPropagationStopped())break e;d=w,f.currentTarget=q;try{d(f)}catch(X){nh(X)}f.currentTarget=null,d=C}else for(E=0;E<l.length;E++){if(w=l[E],C=w.instance,q=w.currentTarget,w=w.listener,C!==d&&f.isPropagationStopped())break e;d=w,f.currentTarget=q;try{d(f)}catch(X){nh(X)}f.currentTarget=null,d=C}}}}function Me(n,i){var a=i[gl];a===void 0&&(a=i[gl]=new Set);var l=n+"__bubble";a.has(l)||(f0(i,n,2,!1),a.add(l))}function $p(n,i,a){var l=0;i&&(l|=4),f0(a,n,l,i)}var gh="_reactListening"+Math.random().toString(36).slice(2);function Gp(n){if(!n[gh]){n[gh]=!0,yl.forEach(function(a){a!=="selectionchange"&&(lA.has(a)||$p(a,!1,n),$p(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[gh]||(i[gh]=!0,$p("selectionchange",!1,i))}}function f0(n,i,a,l){switch(V0(i)){case 2:var f=PA;break;case 8:f=VA;break;default:f=am}a=f.bind(null,i,a,n),f=void 0,!zn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Yp(n,i,a,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var w=l.stateNode.containerInfo;if(w===f)break;if(E===4)for(E=l.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;w!==null;){if(E=$r(w),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){l=d=E;continue e}w=w.parentNode}}l=l.return}_c(function(){var q=d,X=jn(a),te=[];e:{var H=Yy.get(n);if(H!==void 0){var G=Fa,Se=n;switch(n){case"keypress":if(Tr(a)===0)break e;case"keydown":case"keyup":G=Xa;break;case"focusin":Se="focus",G=Ya;break;case"focusout":Se="blur",G=Ya;break;case"beforeblur":case"afterblur":G=Ya;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=qn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Rc;break;case Hy:case Fy:case $y:G=Qa;break;case Gy:G=Ic;break;case"scroll":case"scrollend":G=vc;break;case"wheel":G=Wa;break;case"copy":case"cut":case"paste":G=Ka;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Cl;break;case"toggle":case"beforetoggle":G=Dc}var Ee=(i&4)!==0,et=!Ee&&(n==="scroll"||n==="scrollend"),V=Ee?H!==null?H+"Capture":null:H;Ee=[];for(var k=q,z;k!==null;){var Z=k;if(z=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||z===null||V===null||(Z=$s(k,V),Z!=null&&Ee.push(au(k,Z,z))),et)break;k=k.return}0<Ee.length&&(H=new G(H,Se,null,a,X),te.push({event:H,listeners:Ee}))}}if((i&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",G=n==="mouseout"||n==="pointerout",H&&a!==Kr&&(Se=a.relatedTarget||a.fromElement)&&($r(Se)||Se[Ln]))break e;if((G||H)&&(H=X.window===X?X:(H=X.ownerDocument)?H.defaultView||H.parentWindow:window,G?(Se=a.relatedTarget||a.toElement,G=q,Se=Se?$r(Se):null,Se!==null&&(et=u(Se),Ee=Se.tag,Se!==et||Ee!==5&&Ee!==27&&Ee!==6)&&(Se=null)):(G=null,Se=q),G!==Se)){if(Ee=qn,Z="onMouseLeave",V="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(Ee=Cl,Z="onPointerLeave",V="onPointerEnter",k="pointer"),et=G==null?H:yr(G),z=Se==null?H:yr(Se),H=new Ee(Z,k+"leave",G,a,X),H.target=et,H.relatedTarget=z,Z=null,$r(X)===q&&(Ee=new Ee(V,k+"enter",Se,a,X),Ee.target=z,Ee.relatedTarget=et,Z=Ee),et=Z,G&&Se)t:{for(Ee=G,V=Se,k=0,z=Ee;z;z=wo(z))k++;for(z=0,Z=V;Z;Z=wo(Z))z++;for(;0<k-z;)Ee=wo(Ee),k--;for(;0<z-k;)V=wo(V),z--;for(;k--;){if(Ee===V||V!==null&&Ee===V.alternate)break t;Ee=wo(Ee),V=wo(V)}Ee=null}else Ee=null;G!==null&&d0(te,H,G,Ee,!1),Se!==null&&et!==null&&d0(te,et,Se,Ee,!0)}}e:{if(H=q?yr(q):window,G=H.nodeName&&H.nodeName.toLowerCase(),G==="select"||G==="input"&&H.type==="file")var pe=Oy;else if(kt(H))if(ky)pe=TS;else{pe=vS;var Oe=_S}else G=H.nodeName,!G||G.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?q&&bl(q.elementType)&&(pe=Oy):pe=ES;if(pe&&(pe=pe(n,q))){ei(te,pe,a,X);break e}Oe&&Oe(n,H,q),n==="focusout"&&q&&H.type==="number"&&q.memoizedProps.value!=null&&Vi(H,"number",H.value)}switch(Oe=q?yr(q):window,n){case"focusin":(kt(Oe)||Oe.contentEditable==="true")&&(Za=Oe,Sd=q,Ol=null);break;case"focusout":Ol=Sd=Za=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,qy(te,a,X);break;case"selectionchange":if(wS)break;case"keydown":case"keyup":qy(te,a,X)}var ye;if(Sr)e:{switch(n){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Ue?Q(n,a)&&(Te="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(_&&a.locale!=="ko"&&(Ue||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ue&&(ye=Sl()):(Er=X,Li="value"in Er?Er.value:Er.textContent,Ue=!0)),Oe=yh(q,Te),0<Oe.length&&(Te=new xl(Te,n,null,a,X),te.push({event:Te,listeners:Oe}),ye?Te.data=ye:(ye=oe(a),ye!==null&&(Te.data=ye)))),(ye=y?Ot(n,a):je(n,a))&&(Te=yh(q,"onBeforeInput"),0<Te.length&&(Oe=new xl("onBeforeInput","beforeinput",null,a,X),te.push({event:Oe,listeners:Te}),Oe.data=ye)),sA(te,n,q,a,X)}h0(te,i)})}function au(n,i,a){return{instance:n,listener:i,currentTarget:a}}function yh(n,i){for(var a=i+"Capture",l=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=$s(n,a),f!=null&&l.unshift(au(n,f,d)),f=$s(n,i),f!=null&&l.push(au(n,f,d))),n.tag===3)return l;n=n.return}return[]}function wo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function d0(n,i,a,l,f){for(var d=i._reactName,E=[];a!==null&&a!==l;){var w=a,C=w.alternate,q=w.stateNode;if(w=w.tag,C!==null&&C===l)break;w!==5&&w!==26&&w!==27||q===null||(C=q,f?(q=$s(a,d),q!=null&&E.unshift(au(a,q,C))):f||(q=$s(a,d),q!=null&&E.push(au(a,q,C)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var uA=/\r\n?/g,cA=/\u0000|\uFFFD/g;function p0(n){return(typeof n=="string"?n:""+n).replace(uA,`
`).replace(cA,"")}function m0(n,i){return i=p0(i),p0(n)===i}function _h(){}function Je(n,i,a,l,f,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Un(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Un(n,""+l);break;case"className":_r(n,"class",l);break;case"tabIndex":_r(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":_r(n,a,l);break;case"style":Tl(n,l,d);break;case"data":if(i!=="object"){_r(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Ha(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Je(n,i,"name",f.name,f,null),Je(n,i,"formEncType",f.formEncType,f,null),Je(n,i,"formMethod",f.formMethod,f,null),Je(n,i,"formTarget",f.formTarget,f,null)):(Je(n,i,"encType",f.encType,f,null),Je(n,i,"method",f.method,f,null),Je(n,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Ha(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=_h);break;case"onScroll":l!=null&&Me("scroll",n);break;case"onScrollEnd":l!=null&&Me("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=Ha(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":Me("beforetoggle",n),Me("toggle",n),Pi(n,"popover",l);break;case"xlinkActuate":Yt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pi(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=yd.get(a)||a,Pi(n,a,l))}}function Qp(n,i,a,l,f,d){switch(a){case"style":Tl(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?Un(n,l):(typeof l=="number"||typeof l=="bigint")&&Un(n,""+l);break;case"onScroll":l!=null&&Me("scroll",n);break;case"onScrollEnd":l!=null&&Me("scrollend",n);break;case"onClick":l!=null&&(n.onclick=_h);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ua.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),d=n[Tt]||null,d=d!=null?d[a]:null,typeof d=="function"&&n.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,l,f);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):Pi(n,a,l)}}}function Wt(n,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",n),Me("load",n);var l=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Je(n,i,d,E,a,null)}}f&&Je(n,i,"srcSet",a.srcSet,a,null),l&&Je(n,i,"src",a.src,a,null);return;case"input":Me("invalid",n);var w=d=E=f=null,C=null,q=null;for(l in a)if(a.hasOwnProperty(l)){var X=a[l];if(X!=null)switch(l){case"name":f=X;break;case"type":E=X;break;case"checked":C=X;break;case"defaultChecked":q=X;break;case"value":d=X;break;case"defaultValue":w=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,i));break;default:Je(n,i,l,X,a,null)}}Bs(n,d,w,C,q,E,f,!1),Ba(n);return;case"select":Me("invalid",n),l=E=d=null;for(f in a)if(a.hasOwnProperty(f)&&(w=a[f],w!=null))switch(f){case"value":d=w;break;case"defaultValue":E=w;break;case"multiple":l=w;default:Je(n,i,f,w,a,null)}i=d,a=E,n.multiple=!!l,i!=null?Qr(n,!!l,i,!1):a!=null&&Qr(n,!!l,a,!0);return;case"textarea":Me("invalid",n),d=f=l=null;for(E in a)if(a.hasOwnProperty(E)&&(w=a[E],w!=null))switch(E){case"value":l=w;break;case"defaultValue":f=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Je(n,i,E,w,a,null)}Hs(n,l,f,d),Ba(n);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Je(n,i,C,l,a,null)}return;case"dialog":Me("beforetoggle",n),Me("toggle",n),Me("cancel",n),Me("close",n);break;case"iframe":case"object":Me("load",n);break;case"video":case"audio":for(l=0;l<su.length;l++)Me(su[l],n);break;case"image":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"embed":case"source":case"link":Me("error",n),Me("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in a)if(a.hasOwnProperty(q)&&(l=a[q],l!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Je(n,i,q,l,a,null)}return;default:if(bl(i)){for(X in a)a.hasOwnProperty(X)&&(l=a[X],l!==void 0&&Qp(n,i,X,l,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(l=a[w],l!=null&&Je(n,i,w,l,a,null))}function hA(n,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,E=null,w=null,C=null,q=null,X=null;for(G in a){var te=a[G];if(a.hasOwnProperty(G)&&te!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":C=te;default:l.hasOwnProperty(G)||Je(n,i,G,null,l,te)}}for(var H in l){var G=l[H];if(te=a[H],l.hasOwnProperty(H)&&(G!=null||te!=null))switch(H){case"type":d=G;break;case"name":f=G;break;case"checked":q=G;break;case"defaultChecked":X=G;break;case"value":E=G;break;case"defaultValue":w=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:G!==te&&Je(n,i,H,G,l,te)}}Sn(n,E,w,C,q,X,d,f);return;case"select":G=E=w=H=null;for(d in a)if(C=a[d],a.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":G=C;default:l.hasOwnProperty(d)||Je(n,i,d,null,l,C)}for(f in l)if(d=l[f],C=a[f],l.hasOwnProperty(f)&&(d!=null||C!=null))switch(f){case"value":H=d;break;case"defaultValue":w=d;break;case"multiple":E=d;default:d!==C&&Je(n,i,f,d,l,C)}i=w,a=E,l=G,H!=null?Qr(n,!!a,H,!1):!!l!=!!a&&(i!=null?Qr(n,!!a,i,!0):Qr(n,!!a,a?[]:"",!1));return;case"textarea":G=H=null;for(w in a)if(f=a[w],a.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Je(n,i,w,null,l,f)}for(E in l)if(f=l[E],d=a[E],l.hasOwnProperty(E)&&(f!=null||d!=null))switch(E){case"value":H=f;break;case"defaultValue":G=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&Je(n,i,E,f,l,d)}We(n,H,G);return;case"option":for(var Se in a)if(H=a[Se],a.hasOwnProperty(Se)&&H!=null&&!l.hasOwnProperty(Se))switch(Se){case"selected":n.selected=!1;break;default:Je(n,i,Se,null,l,H)}for(C in l)if(H=l[C],G=a[C],l.hasOwnProperty(C)&&H!==G&&(H!=null||G!=null))switch(C){case"selected":n.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Je(n,i,C,H,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in a)H=a[Ee],a.hasOwnProperty(Ee)&&H!=null&&!l.hasOwnProperty(Ee)&&Je(n,i,Ee,null,l,H);for(q in l)if(H=l[q],G=a[q],l.hasOwnProperty(q)&&H!==G&&(H!=null||G!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:Je(n,i,q,H,l,G)}return;default:if(bl(i)){for(var et in a)H=a[et],a.hasOwnProperty(et)&&H!==void 0&&!l.hasOwnProperty(et)&&Qp(n,i,et,void 0,l,H);for(X in l)H=l[X],G=a[X],!l.hasOwnProperty(X)||H===G||H===void 0&&G===void 0||Qp(n,i,X,H,l,G);return}}for(var V in a)H=a[V],a.hasOwnProperty(V)&&H!=null&&!l.hasOwnProperty(V)&&Je(n,i,V,null,l,H);for(te in l)H=l[te],G=a[te],!l.hasOwnProperty(te)||H===G||H==null&&G==null||Je(n,i,te,H,l,G)}var Kp=null,Xp=null;function vh(n){return n.nodeType===9?n:n.ownerDocument}function g0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y0(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Wp(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Zp=null;function fA(){var n=window.event;return n&&n.type==="popstate"?n===Zp?!1:(Zp=n,!0):(Zp=null,!1)}var _0=typeof setTimeout=="function"?setTimeout:void 0,dA=typeof clearTimeout=="function"?clearTimeout:void 0,v0=typeof Promise=="function"?Promise:void 0,pA=typeof queueMicrotask=="function"?queueMicrotask:typeof v0<"u"?function(n){return v0.resolve(null).then(n).catch(mA)}:_0;function mA(n){setTimeout(function(){throw n})}function Ji(n){return n==="head"}function E0(n,i){var a=i,l=0,f=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var E=n.ownerDocument;if(a&1&&ou(E.documentElement),a&2&&ou(E.body),a&4)for(a=E.head,ou(a),E=a.firstChild;E;){var w=E.nextSibling,C=E.nodeName;E[Us]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=w}}if(f===0){n.removeChild(d),mu(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);mu(i)}function Jp(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jp(a),Mi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function gA(n,i,a,l){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Us])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=ir(n.nextSibling),n===null)break}return null}function yA(n,i,a){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=ir(n.nextSibling),n===null))return null;return n}function em(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function _A(n,i){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var tm=null;function T0(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}function b0(n,i,a){switch(i=vh(a),n){case"html":if(n=i.documentElement,!n)throw Error(s(452));return n;case"head":if(n=i.head,!n)throw Error(s(453));return n;case"body":if(n=i.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function ou(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Mi(n)}var Qn=new Map,w0=new Set;function Eh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var di=le.d;le.d={f:vA,r:EA,D:TA,C:bA,L:wA,m:SA,X:RA,S:AA,M:xA};function vA(){var n=di.f(),i=hh();return n||i}function EA(n){var i=gr(n);i!==null&&i.tag===5&&i.type==="form"?H_(i):di.r(n)}var So=typeof document>"u"?null:document;function S0(n,i,a){var l=So;if(l&&typeof i=="string"&&i){var f=bt(i);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),w0.has(f)||(w0.add(f),n={rel:n,crossOrigin:a,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Wt(i,"link",n),yt(i),l.head.appendChild(i)))}}function TA(n){di.D(n),S0("dns-prefetch",n,null)}function bA(n,i){di.C(n,i),S0("preconnect",n,i)}function wA(n,i,a){di.L(n,i,a);var l=So;if(l&&n&&i){var f='link[rel="preload"][as="'+bt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+bt(a.imageSizes)+'"]')):f+='[href="'+bt(n)+'"]';var d=f;switch(i){case"style":d=Ao(n);break;case"script":d=Ro(n)}Qn.has(d)||(n=v({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:n,as:i},a),Qn.set(d,n),l.querySelector(f)!==null||i==="style"&&l.querySelector(lu(d))||i==="script"&&l.querySelector(uu(d))||(i=l.createElement("link"),Wt(i,"link",n),yt(i),l.head.appendChild(i)))}}function SA(n,i){di.m(n,i);var a=So;if(a&&n){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+bt(l)+'"][href="'+bt(n)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ro(n)}if(!Qn.has(d)&&(n=v({rel:"modulepreload",href:n},i),Qn.set(d,n),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(uu(d)))return}l=a.createElement("link"),Wt(l,"link",n),yt(l),a.head.appendChild(l)}}}function AA(n,i,a){di.S(n,i,a);var l=So;if(l&&n){var f=dn(l).hoistableStyles,d=Ao(n);i=i||"default";var E=f.get(d);if(!E){var w={loading:0,preload:null};if(E=l.querySelector(lu(d)))w.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":i},a),(a=Qn.get(d))&&nm(n,a);var C=E=l.createElement("link");yt(C),Wt(C,"link",n),C._p=new Promise(function(q,X){C.onload=q,C.onerror=X}),C.addEventListener("load",function(){w.loading|=1}),C.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Th(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:w},f.set(d,E)}}}function RA(n,i){di.X(n,i);var a=So;if(a&&n){var l=dn(a).hoistableScripts,f=Ro(n),d=l.get(f);d||(d=a.querySelector(uu(f)),d||(n=v({src:n,async:!0},i),(i=Qn.get(f))&&rm(n,i),d=a.createElement("script"),yt(d),Wt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function xA(n,i){di.M(n,i);var a=So;if(a&&n){var l=dn(a).hoistableScripts,f=Ro(n),d=l.get(f);d||(d=a.querySelector(uu(f)),d||(n=v({src:n,async:!0,type:"module"},i),(i=Qn.get(f))&&rm(n,i),d=a.createElement("script"),yt(d),Wt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function A0(n,i,a,l){var f=(f=ve.current)?Eh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ao(a.href),a=dn(f).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=Ao(a.href);var d=dn(f).hoistableStyles,E=d.get(n);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,E),(d=f.querySelector(lu(n)))&&!d._p&&(E.instance=d,E.state.loading=5),Qn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qn.set(n,a),d||IA(f,n,a,E.state))),i&&l===null)throw Error(s(528,""));return E}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ro(a),a=dn(f).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Ao(n){return'href="'+bt(n)+'"'}function lu(n){return'link[rel="stylesheet"]['+n+"]"}function R0(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function IA(n,i,a,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Wt(i,"link",a),yt(i),n.head.appendChild(i))}function Ro(n){return'[src="'+bt(n)+'"]'}function uu(n){return"script[async]"+n}function x0(n,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+bt(a.href)+'"]');if(l)return i.instance=l,yt(l),l;var f=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),yt(l),Wt(l,"style",f),Th(l,a.precedence,n),i.instance=l;case"stylesheet":f=Ao(a.href);var d=n.querySelector(lu(f));if(d)return i.state.loading|=4,i.instance=d,yt(d),d;l=R0(a),(f=Qn.get(f))&&nm(l,f),d=(n.ownerDocument||n).createElement("link"),yt(d);var E=d;return E._p=new Promise(function(w,C){E.onload=w,E.onerror=C}),Wt(d,"link",l),i.state.loading|=4,Th(d,a.precedence,n),i.instance=d;case"script":return d=Ro(a.src),(f=n.querySelector(uu(d)))?(i.instance=f,yt(f),f):(l=a,(f=Qn.get(d))&&(l=v({},a),rm(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),yt(f),Wt(f,"link",l),n.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Th(l,a.precedence,n));return i.instance}function Th(n,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,E=0;E<l.length;E++){var w=l[E];if(w.dataset.precedence===i)d=w;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(n,i.firstChild))}function nm(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function rm(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var bh=null;function I0(n,i,a){if(bh===null){var l=new Map,f=bh=new Map;f.set(a,l)}else f=bh,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var d=a[f];if(!(d[Us]||d[Nt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=n+E;var w=l.get(E);w?w.push(d):l.set(E,[d])}}return l}function C0(n,i,a){n=n.ownerDocument||n,n.head.insertBefore(a,i==="title"?n.querySelector("head > title"):null)}function CA(n,i,a){if(a===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function D0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var cu=null;function DA(){}function NA(n,i,a){if(cu===null)throw Error(s(475));var l=cu;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Ao(a.href),d=n.querySelector(lu(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=wh.bind(l),n.then(l,l)),i.state.loading|=4,i.instance=d,yt(d);return}d=n.ownerDocument||n,a=R0(a),(f=Qn.get(f))&&nm(a,f),d=d.createElement("link"),yt(d);var E=d;E._p=new Promise(function(w,C){E.onload=w,E.onerror=C}),Wt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=wh.bind(l),n.addEventListener("load",i),n.addEventListener("error",i))}}function OA(){if(cu===null)throw Error(s(475));var n=cu;return n.stylesheets&&n.count===0&&im(n,n.stylesheets),0<n.count?function(i){var a=setTimeout(function(){if(n.stylesheets&&im(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(a)}}:null}function wh(){if(this.count--,this.count===0){if(this.stylesheets)im(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Sh=null;function im(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Sh=new Map,i.forEach(kA,n),Sh=null,wh.call(n))}function kA(n,i){if(!(i.state.loading&4)){var a=Sh.get(n);if(a)var l=a.get(null);else{a=new Map,Sh.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var E=f[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),l=E)}l&&a.set(null,l)}f=i.instance,E=f.getAttribute("data-precedence"),d=a.get(E)||l,d===l&&a.set(null,f),a.set(E,f),this.count++,l=wh.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),i.state.loading|=4}}var hu={$$typeof:ie,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function MA(n,i,a,l,f,d,E,w){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Hr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hr(0),this.hiddenUpdates=Hr(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function N0(n,i,a,l,f,d,E,w,C,q,X,te){return n=new MA(n,i,a,E,w,C,q,te),i=1,d===!0&&(i|=24),d=Rn(3,null,null,i),n.current=d,d.stateNode=n,i=jd(),i.refCount++,n.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Hd(d),n}function O0(n){return n?(n=no,n):no}function k0(n,i,a,l,f,d){f=O0(f),l.context===null?l.context=f:l.pendingContext=f,l=zi(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=qi(n,l,i),a!==null&&(Nn(a,n,i),ql(a,n,i))}function M0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function sm(n,i){M0(n,i),(n=n.alternate)&&M0(n,i)}function P0(n){if(n.tag===13){var i=to(n,67108864);i!==null&&Nn(i,n,67108864),sm(n,67108864)}}var Ah=!0;function PA(n,i,a,l){var f=K.T;K.T=null;var d=le.p;try{le.p=2,am(n,i,a,l)}finally{le.p=d,K.T=f}}function VA(n,i,a,l){var f=K.T;K.T=null;var d=le.p;try{le.p=8,am(n,i,a,l)}finally{le.p=d,K.T=f}}function am(n,i,a,l){if(Ah){var f=om(l);if(f===null)Yp(n,i,l,Rh,a),L0(n,l);else if(UA(f,n,i,a,l))l.stopPropagation();else if(L0(n,l),i&4&&-1<LA.indexOf(n)){for(;f!==null;){var d=gr(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Jn(d.pendingLanes);if(E!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var C=1<<31-rn(E);w.entanglements[1]|=C,E&=~C}Dr(d),(Ke&6)===0&&(uh=Vn()+500,iu(0))}}break;case 13:w=to(d,2),w!==null&&Nn(w,d,2),hh(),sm(d,2)}if(d=om(l),d===null&&Yp(n,i,l,Rh,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else Yp(n,i,l,null,a)}}function om(n){return n=jn(n),lm(n)}var Rh=null;function lm(n){if(Rh=null,n=$r(n),n!==null){var i=u(n);if(i===null)n=null;else{var a=i.tag;if(a===13){if(n=h(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Rh=n,null}function V0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(hd()){case ul:return 2;case Ma:return 8;case ks:case fd:return 32;case Pa:return 268435456;default:return 32}default:return 32}}var um=!1,es=null,ts=null,ns=null,fu=new Map,du=new Map,rs=[],LA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function L0(n,i){switch(n){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":fu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":du.delete(i.pointerId)}}function pu(n,i,a,l,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=gr(i),i!==null&&P0(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function UA(n,i,a,l,f){switch(i){case"focusin":return es=pu(es,n,i,a,l,f),!0;case"dragenter":return ts=pu(ts,n,i,a,l,f),!0;case"mouseover":return ns=pu(ns,n,i,a,l,f),!0;case"pointerover":var d=f.pointerId;return fu.set(d,pu(fu.get(d)||null,n,i,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,du.set(d,pu(du.get(d)||null,n,i,a,l,f)),!0}return!1}function U0(n){var i=$r(n.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){n.blockedOn=i,hc(n.priority,function(){if(a.tag===13){var l=Dn();l=Ni(l);var f=to(a,l);f!==null&&Nn(f,a,l),sm(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xh(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=om(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Kr=l,a.target.dispatchEvent(l),Kr=null}else return i=gr(a),i!==null&&P0(i),n.blockedOn=a,!1;i.shift()}return!0}function j0(n,i,a){xh(n)&&a.delete(i)}function jA(){um=!1,es!==null&&xh(es)&&(es=null),ts!==null&&xh(ts)&&(ts=null),ns!==null&&xh(ns)&&(ns=null),fu.forEach(j0),du.forEach(j0)}function Ih(n,i){n.blockedOn===i&&(n.blockedOn=null,um||(um=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jA)))}var Ch=null;function z0(n){Ch!==n&&(Ch=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ch===n&&(Ch=null);for(var i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],f=n[i+2];if(typeof l!="function"){if(lm(l||a)===null)continue;break}var d=gr(a);d!==null&&(n.splice(i,3),i-=3,lp(d,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function mu(n){function i(C){return Ih(C,n)}es!==null&&Ih(es,n),ts!==null&&Ih(ts,n),ns!==null&&Ih(ns,n),fu.forEach(i),du.forEach(i);for(var a=0;a<rs.length;a++){var l=rs[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<rs.length&&(a=rs[0],a.blockedOn===null);)U0(a),a.blockedOn===null&&rs.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],d=a[l+1],E=f[Tt]||null;if(typeof d=="function")E||z0(a);else if(E){var w=null;if(d&&d.hasAttribute("formAction")){if(f=d,E=d[Tt]||null)w=E.formAction;else if(lm(f)!==null)continue}else w=E.action;typeof w=="function"?a[l+1]=w:(a.splice(l,3),l-=3),z0(a)}}}function cm(n){this._internalRoot=n}Dh.prototype.render=cm.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=Dn();k0(a,l,n,i,null,null)},Dh.prototype.unmount=cm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;k0(n.current,2,null,n,null,null),hh(),i[Ln]=null}};function Dh(n){this._internalRoot=n}Dh.prototype.unstable_scheduleHydration=function(n){if(n){var i=Oi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<rs.length&&i!==0&&i<rs[a].priority;a++);rs.splice(a,0,n),a===0&&U0(n)}};var q0=e.version;if(q0!=="19.1.0")throw Error(s(527,q0,"19.1.0"));le.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=m(i),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var zA={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nh.isDisabled&&Nh.supportsFiber)try{dt=Nh.inject(zA),Qe=Nh}catch{}}return yu.createRoot=function(n,i){if(!o(n))throw Error(s(299));var a=!1,l="",f=rv,d=iv,E=sv,w=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks)),i=N0(n,1,!1,null,null,a,l,f,d,E,w,null),n[Ln]=i.current,Gp(n),new cm(i)},yu.hydrateRoot=function(n,i,a){if(!o(n))throw Error(s(299));var l=!1,f="",d=rv,E=iv,w=sv,C=null,q=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(C=a.unstable_transitionCallbacks),a.formState!==void 0&&(q=a.formState)),i=N0(n,1,!0,i,a??null,l,f,d,E,w,C,q),i.context=O0(null),a=i.current,l=Dn(),l=Ni(l),f=zi(l),f.callback=null,qi(a,f,l),a=l,i.current.lanes=a,Fr(i,a),Dr(i),n[Ln]=i.current,Gp(n),new Dh(i)},yu.version="19.1.0",yu}var W0;function WA(){if(W0)return dm.exports;W0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),dm.exports=XA(),dm.exports}var ZA=WA();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Z0="popstate";function JA(r={}){function e(s,o){let{pathname:u,search:h,hash:p}=s.location;return Vm("",{pathname:u,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:ku(o)}return tR(e,t,null,r)}function ut(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function hr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function eR(){return Math.random().toString(36).substring(2,10)}function J0(r,e){return{usr:r.state,key:r.key,idx:e}}function Vm(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Xo(e):e,state:t,key:e&&e.key||s||eR()}}function ku({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Xo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function tR(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,p="POP",m=null,g=v();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function v(){return(h.state||{idx:null}).idx}function b(){p="POP";let B=v(),ee=B==null?null:B-g;g=B,m&&m({action:p,location:$.location,delta:ee})}function S(B,ee){p="PUSH";let W=Vm($.location,B,ee);g=v()+1;let ie=J0(W,g),ue=$.createHref(W);try{h.pushState(ie,"",ue)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;o.location.assign(ue)}u&&m&&m({action:p,location:$.location,delta:1})}function I(B,ee){p="REPLACE";let W=Vm($.location,B,ee);g=v();let ie=J0(W,g),ue=$.createHref(W);h.replaceState(ie,"",ue),u&&m&&m({action:p,location:$.location,delta:0})}function L(B){return nR(B)}let $={get action(){return p},get location(){return r(o,h)},listen(B){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Z0,b),m=B,()=>{o.removeEventListener(Z0,b),m=null}},createHref(B){return e(o,B)},createURL:L,encodeLocation(B){let ee=L(B);return{pathname:ee.pathname,search:ee.search,hash:ee.hash}},push:S,replace:I,go(B){return h.go(B)}};return $}function nR(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),ut(t,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:ku(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function n1(r,e,t="/"){return rR(r,e,t,!1)}function rR(r,e,t,s){let o=typeof e=="string"?Xo(e):e,u=Si(o.pathname||"/",t);if(u==null)return null;let h=r1(r);iR(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let g=mR(u);p=dR(h[m],g,s)}return p}function r1(r,e=[],t=[],s=""){let o=(u,h,p)=>{let m={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(ut(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=Ei([s,m.relativePath]),v=t.concat(m);u.children&&u.children.length>0&&(ut(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),r1(u.children,e,v,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:hR(g,u.index),routesMeta:v})};return r.forEach((u,h)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))o(u,h);else for(let m of i1(u.path))o(u,h,m)}),e}function i1(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=i1(s.join("/")),p=[];return p.push(...h.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...h),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function iR(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:fR(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var sR=/^:[\w-]+$/,aR=3,oR=2,lR=1,uR=10,cR=-2,eE=r=>r==="*";function hR(r,e){let t=r.split("/"),s=t.length;return t.some(eE)&&(s+=cR),e&&(s+=oR),t.filter(o=>!eE(o)).reduce((o,u)=>o+(sR.test(u)?aR:u===""?lR:uR),s)}function fR(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function dR(r,e,t=!1){let{routesMeta:s}=r,o={},u="/",h=[];for(let p=0;p<s.length;++p){let m=s[p],g=p===s.length-1,v=u==="/"?e:e.slice(u.length)||"/",b=af({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},v),S=m.route;if(!b&&g&&t&&!s[s.length-1].route.index&&(b=af({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!b)return null;Object.assign(o,b.params),h.push({params:o,pathname:Ei([u,b.pathname]),pathnameBase:vR(Ei([u,b.pathnameBase])),route:S}),b.pathnameBase!=="/"&&(u=Ei([u,b.pathnameBase]))}return h}function af(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=pR(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((g,{paramName:v,isOptional:b},S)=>{if(v==="*"){let L=p[S]||"";h=u.slice(0,u.length-L.length).replace(/(.)\/+$/,"$1")}const I=p[S];return b&&!I?g[v]=void 0:g[v]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:r}}function pR(r,e=!1,t=!0){hr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function mR(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hr(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Si(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function gR(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Xo(r):r;return{pathname:t?t.startsWith("/")?t:yR(t,e):e,search:ER(s),hash:TR(o)}}function yR(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ym(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _R(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Tg(r){let e=_R(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function bg(r,e,t,s=!1){let o;typeof r=="string"?o=Xo(r):(o={...r},ut(!o.pathname||!o.pathname.includes("?"),ym("?","pathname","search",o)),ut(!o.pathname||!o.pathname.includes("#"),ym("#","pathname","hash",o)),ut(!o.search||!o.search.includes("#"),ym("#","search","hash",o)));let u=r===""||o.pathname==="",h=u?"/":o.pathname,p;if(h==null)p=t;else{let b=e.length-1;if(!s&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),b-=1;o.pathname=S.join("/")}p=b>=0?e[b]:"/"}let m=gR(o,p),g=h&&h!=="/"&&h.endsWith("/"),v=(u||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||v)&&(m.pathname+="/"),m}var Ei=r=>r.join("/").replace(/\/\/+/g,"/"),vR=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),ER=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,TR=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function bR(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var s1=["POST","PUT","PATCH","DELETE"];new Set(s1);var wR=["GET",...s1];new Set(wR);var Wo=F.createContext(null);Wo.displayName="DataRouter";var Df=F.createContext(null);Df.displayName="DataRouterState";F.createContext(!1);var a1=F.createContext({isTransitioning:!1});a1.displayName="ViewTransition";var SR=F.createContext(new Map);SR.displayName="Fetchers";var AR=F.createContext(null);AR.displayName="Await";var pr=F.createContext(null);pr.displayName="Navigation";var Yu=F.createContext(null);Yu.displayName="Location";var Br=F.createContext({outlet:null,matches:[],isDataRoute:!1});Br.displayName="Route";var wg=F.createContext(null);wg.displayName="RouteError";function RR(r,{relative:e}={}){ut(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=F.useContext(pr),{hash:o,pathname:u,search:h}=Ku(r,{relative:e}),p=u;return t!=="/"&&(p=u==="/"?t:Ei([t,u])),s.createHref({pathname:p,search:h,hash:o})}function Zo(){return F.useContext(Yu)!=null}function Rs(){return ut(Zo(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(Yu).location}var o1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function l1(r){F.useContext(pr).static||F.useLayoutEffect(r)}function Qu(){let{isDataRoute:r}=F.useContext(Br);return r?jR():xR()}function xR(){ut(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let r=F.useContext(Wo),{basename:e,navigator:t}=F.useContext(pr),{matches:s}=F.useContext(Br),{pathname:o}=Rs(),u=JSON.stringify(Tg(s)),h=F.useRef(!1);return l1(()=>{h.current=!0}),F.useCallback((m,g={})=>{if(hr(h.current,o1),!h.current)return;if(typeof m=="number"){t.go(m);return}let v=bg(m,JSON.parse(u),o,g.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Ei([e,v.pathname])),(g.replace?t.replace:t.push)(v,g.state,g)},[e,t,u,o,r])}F.createContext(null);function Ku(r,{relative:e}={}){let{matches:t}=F.useContext(Br),{pathname:s}=Rs(),o=JSON.stringify(Tg(t));return F.useMemo(()=>bg(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function IR(r,e){return u1(r,e)}function u1(r,e,t,s){var ee;ut(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=F.useContext(pr),{matches:u}=F.useContext(Br),h=u[u.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",v=h&&h.route;{let W=v&&v.path||"";c1(m,!v||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let b=Rs(),S;if(e){let W=typeof e=="string"?Xo(e):e;ut(g==="/"||((ee=W.pathname)==null?void 0:ee.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${W.pathname}" was given in the \`location\` prop.`),S=W}else S=b;let I=S.pathname||"/",L=I;if(g!=="/"){let W=g.replace(/^\//,"").split("/");L="/"+I.replace(/^\//,"").split("/").slice(W.length).join("/")}let $=n1(r,{pathname:L});hr(v||$!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),hr($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=kR($&&$.map(W=>Object.assign({},W,{params:Object.assign({},p,W.params),pathname:Ei([g,o.encodeLocation?o.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?g:Ei([g,o.encodeLocation?o.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),u,t,s);return e&&B?F.createElement(Yu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},B):B}function CR(){let r=UR(),e=bR(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:u},"ErrorBoundary")," or"," ",F.createElement("code",{style:u},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),t?F.createElement("pre",{style:o},t):null,h)}var DR=F.createElement(CR,null),NR=class extends F.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?F.createElement(Br.Provider,{value:this.props.routeContext},F.createElement(wg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function OR({routeContext:r,match:e,children:t}){let s=F.useContext(Wo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(Br.Provider,{value:r},t)}function kR(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,u=t==null?void 0:t.errors;if(u!=null){let m=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);ut(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let h=!1,p=-1;if(t)for(let m=0;m<o.length;m++){let g=o[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:v,errors:b}=t,S=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||S){h=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,g,v)=>{let b,S=!1,I=null,L=null;t&&(b=u&&g.route.id?u[g.route.id]:void 0,I=g.route.errorElement||DR,h&&(p<0&&v===0?(c1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,L=null):p===v&&(S=!0,L=g.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,v+1)),B=()=>{let ee;return b?ee=I:S?ee=L:g.route.Component?ee=F.createElement(g.route.Component,null):g.route.element?ee=g.route.element:ee=m,F.createElement(OR,{match:g,routeContext:{outlet:m,matches:$,isDataRoute:t!=null},children:ee})};return t&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?F.createElement(NR,{location:t.location,revalidation:t.revalidation,component:I,error:b,children:B(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):B()},null)}function Sg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function MR(r){let e=F.useContext(Wo);return ut(e,Sg(r)),e}function PR(r){let e=F.useContext(Df);return ut(e,Sg(r)),e}function VR(r){let e=F.useContext(Br);return ut(e,Sg(r)),e}function Ag(r){let e=VR(r),t=e.matches[e.matches.length-1];return ut(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function LR(){return Ag("useRouteId")}function UR(){var s;let r=F.useContext(wg),e=PR("useRouteError"),t=Ag("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function jR(){let{router:r}=MR("useNavigate"),e=Ag("useNavigate"),t=F.useRef(!1);return l1(()=>{t.current=!0}),F.useCallback(async(o,u={})=>{hr(t.current,o1),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var tE={};function c1(r,e,t){!e&&!tE[r]&&(tE[r]=!0,hr(!1,t))}F.memo(zR);function zR({routes:r,future:e,state:t}){return u1(r,void 0,t,e)}function qR({to:r,replace:e,state:t,relative:s}){ut(Zo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=F.useContext(pr);hr(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=F.useContext(Br),{pathname:h}=Rs(),p=Qu(),m=bg(r,Tg(u),h,s==="path"),g=JSON.stringify(m);return F.useEffect(()=>{p(JSON.parse(g),{replace:e,state:t,relative:s})},[p,g,s,e,t]),null}function qh(r){ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function BR({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){ut(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=F.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=Xo(t));let{pathname:m="/",search:g="",hash:v="",state:b=null,key:S="default"}=t,I=F.useMemo(()=>{let L=Si(m,h);return L==null?null:{location:{pathname:L,search:g,hash:v,state:b,key:S},navigationType:s}},[h,m,g,v,b,S,s]);return hr(I!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:F.createElement(pr.Provider,{value:p},F.createElement(Yu.Provider,{children:e,value:I}))}function HR({children:r,location:e}){return IR(Lm(r),e)}function Lm(r,e=[]){let t=[];return F.Children.forEach(r,(s,o)=>{if(!F.isValidElement(s))return;let u=[...e,o];if(s.type===F.Fragment){t.push.apply(t,Lm(s.props.children,u));return}ut(s.type===qh,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ut(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Lm(s.props.children,u)),t.push(h)}),t}var Bh="get",Hh="application/x-www-form-urlencoded";function Nf(r){return r!=null&&typeof r.tagName=="string"}function FR(r){return Nf(r)&&r.tagName.toLowerCase()==="button"}function $R(r){return Nf(r)&&r.tagName.toLowerCase()==="form"}function GR(r){return Nf(r)&&r.tagName.toLowerCase()==="input"}function YR(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function QR(r,e){return r.button===0&&(!e||e==="_self")&&!YR(r)}var Oh=null;function KR(){if(Oh===null)try{new FormData(document.createElement("form"),0),Oh=!1}catch{Oh=!0}return Oh}var XR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _m(r){return r!=null&&!XR.has(r)?(hr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hh}"`),null):r}function WR(r,e){let t,s,o,u,h;if($R(r)){let p=r.getAttribute("action");s=p?Si(p,e):null,t=r.getAttribute("method")||Bh,o=_m(r.getAttribute("enctype"))||Hh,u=new FormData(r)}else if(FR(r)||GR(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?Si(m,e):null,t=r.getAttribute("formmethod")||p.getAttribute("method")||Bh,o=_m(r.getAttribute("formenctype"))||_m(p.getAttribute("enctype"))||Hh,u=new FormData(p,r),!KR()){let{name:g,type:v,value:b}=r;if(v==="image"){let S=g?`${g}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else g&&u.append(g,b)}}else{if(Nf(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Bh,s=null,o=Hh,h=r}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Rg(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ZR(r,e,t){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&Si(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function JR(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ex(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function tx(r,e,t){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await JR(u,t);return h.links?h.links():[]}return[]}));return sx(s.flat(1).filter(ex).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function nE(r,e,t,s,o,u){let h=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,p=(m,g)=>{var v;return t[g].pathname!==m.pathname||((v=t[g].route.path)==null?void 0:v.endsWith("*"))&&t[g].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,g)=>h(m,g)||p(m,g)):u==="data"?e.filter((m,g)=>{var b;let v=s.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(h(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let S=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((b=t[0])==null?void 0:b.params)||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function nx(r,e,{includeHydrateFallback:t}={}){return rx(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function rx(r){return[...new Set(r)]}function ix(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function sx(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(ix(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}function h1(){let r=F.useContext(Wo);return Rg(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function ax(){let r=F.useContext(Df);return Rg(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var xg=F.createContext(void 0);xg.displayName="FrameworkContext";function f1(){let r=F.useContext(xg);return Rg(r,"You must render this element inside a <HydratedRouter> element"),r}function ox(r,e){let t=F.useContext(xg),[s,o]=F.useState(!1),[u,h]=F.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:v,onTouchStart:b}=e,S=F.useRef(null);F.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let $=ee=>{ee.forEach(W=>{h(W.isIntersecting)})},B=new IntersectionObserver($,{threshold:.5});return S.current&&B.observe(S.current),()=>{B.disconnect()}}},[r]),F.useEffect(()=>{if(s){let $=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout($)}}},[s]);let I=()=>{o(!0)},L=()=>{o(!1),h(!1)};return t?r!=="intent"?[u,S,{}]:[u,S,{onFocus:_u(p,I),onBlur:_u(m,L),onMouseEnter:_u(g,I),onMouseLeave:_u(v,L),onTouchStart:_u(b,I)}]:[!1,S,{}]}function _u(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function lx({page:r,...e}){let{router:t}=h1(),s=F.useMemo(()=>n1(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?F.createElement(cx,{page:r,matches:s,...e}):null}function ux(r){let{manifest:e,routeModules:t}=f1(),[s,o]=F.useState([]);return F.useEffect(()=>{let u=!1;return tx(r,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[r,e,t]),s}function cx({page:r,matches:e,...t}){let s=Rs(),{manifest:o,routeModules:u}=f1(),{basename:h}=h1(),{loaderData:p,matches:m}=ax(),g=F.useMemo(()=>nE(r,e,m,o,s,"data"),[r,e,m,o,s]),v=F.useMemo(()=>nE(r,e,m,o,s,"assets"),[r,e,m,o,s]),b=F.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let L=new Set,$=!1;if(e.forEach(ee=>{var ie;let W=o.routes[ee.route.id];!W||!W.hasLoader||(!g.some(ue=>ue.route.id===ee.route.id)&&ee.route.id in p&&((ie=u[ee.route.id])!=null&&ie.shouldRevalidate)||W.hasClientLoader?$=!0:L.add(ee.route.id))}),L.size===0)return[];let B=ZR(r,h,"data");return $&&L.size>0&&B.searchParams.set("_routes",e.filter(ee=>L.has(ee.route.id)).map(ee=>ee.route.id).join(",")),[B.pathname+B.search]},[h,p,s,o,g,e,r,u]),S=F.useMemo(()=>nx(v,o),[v,o]),I=ux(v);return F.createElement(F.Fragment,null,b.map(L=>F.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...t})),S.map(L=>F.createElement("link",{key:L,rel:"modulepreload",href:L,...t})),I.map(({key:L,link:$})=>F.createElement("link",{key:L,...$})))}function hx(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var d1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{d1&&(window.__reactRouterVersion="7.7.0")}catch{}function fx({basename:r,children:e,window:t}){let s=F.useRef();s.current==null&&(s.current=JA({window:t,v5Compat:!0}));let o=s.current,[u,h]=F.useState({action:o.action,location:o.location}),p=F.useCallback(m=>{F.startTransition(()=>h(m))},[h]);return F.useLayoutEffect(()=>o.listen(p),[o,p]),F.createElement(BR,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var p1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,m1=F.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:p,target:m,to:g,preventScrollReset:v,viewTransition:b,...S},I){let{basename:L}=F.useContext(pr),$=typeof g=="string"&&p1.test(g),B,ee=!1;if(typeof g=="string"&&$&&(B=g,d1))try{let x=new URL(window.location.href),M=g.startsWith("//")?new URL(x.protocol+g):new URL(g),P=Si(M.pathname,L);M.origin===x.origin&&P!=null?g=P+M.search+M.hash:ee=!0}catch{hr(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let W=RR(g,{relative:o}),[ie,ue,ce]=ox(s,S),de=gx(g,{replace:h,state:p,target:m,preventScrollReset:v,relative:o,viewTransition:b});function D(x){e&&e(x),x.defaultPrevented||de(x)}let R=F.createElement("a",{...S,...ce,href:B||W,onClick:ee||u?e:D,ref:hx(I,ue),target:m,"data-discover":!$&&t==="render"?"true":void 0});return ie&&!$?F.createElement(F.Fragment,null,R,F.createElement(lx,{page:W})):R});m1.displayName="Link";var dx=F.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:p,children:m,...g},v){let b=Ku(h,{relative:g.relative}),S=Rs(),I=F.useContext(Df),{navigator:L,basename:$}=F.useContext(pr),B=I!=null&&Tx(b)&&p===!0,ee=L.encodeLocation?L.encodeLocation(b).pathname:b.pathname,W=S.pathname,ie=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;t||(W=W.toLowerCase(),ie=ie?ie.toLowerCase():null,ee=ee.toLowerCase()),ie&&$&&(ie=Si(ie,$)||ie);const ue=ee!=="/"&&ee.endsWith("/")?ee.length-1:ee.length;let ce=W===ee||!o&&W.startsWith(ee)&&W.charAt(ue)==="/",de=ie!=null&&(ie===ee||!o&&ie.startsWith(ee)&&ie.charAt(ee.length)==="/"),D={isActive:ce,isPending:de,isTransitioning:B},R=ce?e:void 0,x;typeof s=="function"?x=s(D):x=[s,ce?"active":null,de?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let M=typeof u=="function"?u(D):u;return F.createElement(m1,{...g,"aria-current":R,className:x,ref:v,style:M,to:h,viewTransition:p},typeof m=="function"?m(D):m)});dx.displayName="NavLink";var px=F.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=Bh,action:p,onSubmit:m,relative:g,preventScrollReset:v,viewTransition:b,...S},I)=>{let L=vx(),$=Ex(p,{relative:g}),B=h.toLowerCase()==="get"?"get":"post",ee=typeof p=="string"&&p1.test(p),W=ie=>{if(m&&m(ie),ie.defaultPrevented)return;ie.preventDefault();let ue=ie.nativeEvent.submitter,ce=(ue==null?void 0:ue.getAttribute("formmethod"))||h;L(ue||ie.currentTarget,{fetcherKey:e,method:ce,navigate:t,replace:o,state:u,relative:g,preventScrollReset:v,viewTransition:b})};return F.createElement("form",{ref:I,method:B,action:$,onSubmit:s?m:W,...S,"data-discover":!ee&&r==="render"?"true":void 0})});px.displayName="Form";function mx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function g1(r){let e=F.useContext(Wo);return ut(e,mx(r)),e}function gx(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let p=Qu(),m=Rs(),g=Ku(r,{relative:u});return F.useCallback(v=>{if(QR(v,e)){v.preventDefault();let b=t!==void 0?t:ku(m)===ku(g);p(r,{replace:b,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[m,p,g,t,s,e,r,o,u,h])}var yx=0,_x=()=>`__${String(++yx)}__`;function vx(){let{router:r}=g1("useSubmit"),{basename:e}=F.useContext(pr),t=LR();return F.useCallback(async(s,o={})=>{let{action:u,method:h,encType:p,formData:m,body:g}=WR(s,e);if(o.navigate===!1){let v=o.fetcherKey||_x();await r.fetch(v,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function Ex(r,{relative:e}={}){let{basename:t}=F.useContext(pr),s=F.useContext(Br);ut(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Ku(r||".",{relative:e})},h=Rs();if(r==null){u.search=h.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(v=>v==="")){p.delete("index"),m.filter(b=>b).forEach(b=>p.append("index",b));let v=p.toString();u.search=v?`?${v}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:Ei([t,u.pathname])),ku(u)}function Tx(r,e={}){let t=F.useContext(a1);ut(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=g1("useViewTransitionState"),o=Ku(r,{relative:e.relative});if(!t.isTransitioning)return!1;let u=Si(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=Si(t.nextLocation.pathname,s)||t.nextLocation.pathname;return af(o.pathname,h)!=null||af(o.pathname,u)!=null}var Gt=function(){return Gt=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},Gt.apply(this,arguments)};function Mu(r,e,t){if(t||arguments.length===2)for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return r.concat(u||Array.prototype.slice.call(e))}var st="-ms-",Ru="-moz-",Ge="-webkit-",y1="comm",Of="rule",Ig="decl",bx="@import",_1="@keyframes",wx="@layer",v1=Math.abs,Cg=String.fromCharCode,Um=Object.assign;function Sx(r,e){return $t(r,0)^45?(((e<<2^$t(r,0))<<2^$t(r,1))<<2^$t(r,2))<<2^$t(r,3):0}function E1(r){return r.trim()}function yi(r,e){return(r=e.exec(r))?r[0]:r}function De(r,e,t){return r.replace(e,t)}function Fh(r,e,t){return r.indexOf(e,t)}function $t(r,e){return r.charCodeAt(e)|0}function Uo(r,e,t){return r.slice(e,t)}function Mr(r){return r.length}function T1(r){return r.length}function vu(r,e){return e.push(r),r}function Ax(r,e){return r.map(e).join("")}function rE(r,e){return r.filter(function(t){return!yi(t,e)})}var kf=1,jo=1,b1=0,Zn=0,Rt=0,Jo="";function Mf(r,e,t,s,o,u,h,p){return{value:r,root:e,parent:t,type:s,props:o,children:u,line:kf,column:jo,length:h,return:"",siblings:p}}function os(r,e){return Um(Mf("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function xo(r){for(;r.root;)r=os(r.root,{children:[r]});vu(r,r.siblings)}function Rx(){return Rt}function xx(){return Rt=Zn>0?$t(Jo,--Zn):0,jo--,Rt===10&&(jo=1,kf--),Rt}function lr(){return Rt=Zn<b1?$t(Jo,Zn++):0,jo++,Rt===10&&(jo=1,kf++),Rt}function ga(){return $t(Jo,Zn)}function $h(){return Zn}function Pf(r,e){return Uo(Jo,r,e)}function jm(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ix(r){return kf=jo=1,b1=Mr(Jo=r),Zn=0,[]}function Cx(r){return Jo="",r}function vm(r){return E1(Pf(Zn-1,zm(r===91?r+2:r===40?r+1:r)))}function Dx(r){for(;(Rt=ga())&&Rt<33;)lr();return jm(r)>2||jm(Rt)>3?"":" "}function Nx(r,e){for(;--e&&lr()&&!(Rt<48||Rt>102||Rt>57&&Rt<65||Rt>70&&Rt<97););return Pf(r,$h()+(e<6&&ga()==32&&lr()==32))}function zm(r){for(;lr();)switch(Rt){case r:return Zn;case 34:case 39:r!==34&&r!==39&&zm(Rt);break;case 40:r===41&&zm(r);break;case 92:lr();break}return Zn}function Ox(r,e){for(;lr()&&r+Rt!==57;)if(r+Rt===84&&ga()===47)break;return"/*"+Pf(e,Zn-1)+"*"+Cg(r===47?r:lr())}function kx(r){for(;!jm(ga());)lr();return Pf(r,Zn)}function Mx(r){return Cx(Gh("",null,null,null,[""],r=Ix(r),0,[0],r))}function Gh(r,e,t,s,o,u,h,p,m){for(var g=0,v=0,b=h,S=0,I=0,L=0,$=1,B=1,ee=1,W=0,ie="",ue=o,ce=u,de=s,D=ie;B;)switch(L=W,W=lr()){case 40:if(L!=108&&$t(D,b-1)==58){Fh(D+=De(vm(W),"&","&\f"),"&\f",v1(g?p[g-1]:0))!=-1&&(ee=-1);break}case 34:case 39:case 91:D+=vm(W);break;case 9:case 10:case 13:case 32:D+=Dx(L);break;case 92:D+=Nx($h()-1,7);continue;case 47:switch(ga()){case 42:case 47:vu(Px(Ox(lr(),$h()),e,t,m),m);break;default:D+="/"}break;case 123*$:p[g++]=Mr(D)*ee;case 125*$:case 59:case 0:switch(W){case 0:case 125:B=0;case 59+v:ee==-1&&(D=De(D,/\f/g,"")),I>0&&Mr(D)-b&&vu(I>32?sE(D+";",s,t,b-1,m):sE(De(D," ","")+";",s,t,b-2,m),m);break;case 59:D+=";";default:if(vu(de=iE(D,e,t,g,v,o,p,ie,ue=[],ce=[],b,u),u),W===123)if(v===0)Gh(D,e,de,de,ue,u,b,p,ce);else switch(S===99&&$t(D,3)===110?100:S){case 100:case 108:case 109:case 115:Gh(r,de,de,s&&vu(iE(r,de,de,0,0,o,p,ie,o,ue=[],b,ce),ce),o,ce,b,p,s?ue:ce);break;default:Gh(D,de,de,de,[""],ce,0,p,ce)}}g=v=I=0,$=ee=1,ie=D="",b=h;break;case 58:b=1+Mr(D),I=L;default:if($<1){if(W==123)--$;else if(W==125&&$++==0&&xx()==125)continue}switch(D+=Cg(W),W*$){case 38:ee=v>0?1:(D+="\f",-1);break;case 44:p[g++]=(Mr(D)-1)*ee,ee=1;break;case 64:ga()===45&&(D+=vm(lr())),S=ga(),v=b=Mr(ie=D+=kx($h())),W++;break;case 45:L===45&&Mr(D)==2&&($=0)}}return u}function iE(r,e,t,s,o,u,h,p,m,g,v,b){for(var S=o-1,I=o===0?u:[""],L=T1(I),$=0,B=0,ee=0;$<s;++$)for(var W=0,ie=Uo(r,S+1,S=v1(B=h[$])),ue=r;W<L;++W)(ue=E1(B>0?I[W]+" "+ie:De(ie,/&\f/g,I[W])))&&(m[ee++]=ue);return Mf(r,e,t,o===0?Of:p,m,g,v,b)}function Px(r,e,t,s){return Mf(r,e,t,y1,Cg(Rx()),Uo(r,2,-2),0,s)}function sE(r,e,t,s,o){return Mf(r,e,t,Ig,Uo(r,0,s),Uo(r,s+1,-1),s,o)}function w1(r,e,t){switch(Sx(r,e)){case 5103:return Ge+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ge+r+r;case 4789:return Ru+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Ge+r+Ru+r+st+r+r;case 5936:switch($t(r,e+11)){case 114:return Ge+r+st+De(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Ge+r+st+De(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Ge+r+st+De(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Ge+r+st+r+r;case 6165:return Ge+r+st+"flex-"+r+r;case 5187:return Ge+r+De(r,/(\w+).+(:[^]+)/,Ge+"box-$1$2"+st+"flex-$1$2")+r;case 5443:return Ge+r+st+"flex-item-"+De(r,/flex-|-self/g,"")+(yi(r,/flex-|baseline/)?"":st+"grid-row-"+De(r,/flex-|-self/g,""))+r;case 4675:return Ge+r+st+"flex-line-pack"+De(r,/align-content|flex-|-self/g,"")+r;case 5548:return Ge+r+st+De(r,"shrink","negative")+r;case 5292:return Ge+r+st+De(r,"basis","preferred-size")+r;case 6060:return Ge+"box-"+De(r,"-grow","")+Ge+r+st+De(r,"grow","positive")+r;case 4554:return Ge+De(r,/([^-])(transform)/g,"$1"+Ge+"$2")+r;case 6187:return De(De(De(r,/(zoom-|grab)/,Ge+"$1"),/(image-set)/,Ge+"$1"),r,"")+r;case 5495:case 3959:return De(r,/(image-set\([^]*)/,Ge+"$1$`$1");case 4968:return De(De(r,/(.+:)(flex-)?(.*)/,Ge+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ge+r+r;case 4200:if(!yi(r,/flex-|baseline/))return st+"grid-column-align"+Uo(r,e)+r;break;case 2592:case 3360:return st+De(r,"template-","")+r;case 4384:case 3616:return t&&t.some(function(s,o){return e=o,yi(s.props,/grid-\w+-end/)})?~Fh(r+(t=t[e].value),"span",0)?r:st+De(r,"-start","")+r+st+"grid-row-span:"+(~Fh(t,"span",0)?yi(t,/\d+/):+yi(t,/\d+/)-+yi(r,/\d+/))+";":st+De(r,"-start","")+r;case 4896:case 4128:return t&&t.some(function(s){return yi(s.props,/grid-\w+-start/)})?r:st+De(De(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return De(r,/(.+)-inline(.+)/,Ge+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mr(r)-1-e>6)switch($t(r,e+1)){case 109:if($t(r,e+4)!==45)break;case 102:return De(r,/(.+:)(.+)-([^]+)/,"$1"+Ge+"$2-$3$1"+Ru+($t(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Fh(r,"stretch",0)?w1(De(r,"stretch","fill-available"),e,t)+r:r}break;case 5152:case 5920:return De(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,u,h,p,m,g){return st+o+":"+u+g+(h?st+o+"-span:"+(p?m:+m-+u)+g:"")+r});case 4949:if($t(r,e+6)===121)return De(r,":",":"+Ge)+r;break;case 6444:switch($t(r,$t(r,14)===45?18:11)){case 120:return De(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ge+($t(r,14)===45?"inline-":"")+"box$3$1"+Ge+"$2$3$1"+st+"$2box$3")+r;case 100:return De(r,":",":"+st)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return De(r,"scroll-","scroll-snap-")+r}return r}function of(r,e){for(var t="",s=0;s<r.length;s++)t+=e(r[s],s,r,e)||"";return t}function Vx(r,e,t,s){switch(r.type){case wx:if(r.children.length)break;case bx:case Ig:return r.return=r.return||r.value;case y1:return"";case _1:return r.return=r.value+"{"+of(r.children,s)+"}";case Of:if(!Mr(r.value=r.props.join(",")))return""}return Mr(t=of(r.children,s))?r.return=r.value+"{"+t+"}":""}function Lx(r){var e=T1(r);return function(t,s,o,u){for(var h="",p=0;p<e;p++)h+=r[p](t,s,o,u)||"";return h}}function Ux(r){return function(e){e.root||(e=e.return)&&r(e)}}function jx(r,e,t,s){if(r.length>-1&&!r.return)switch(r.type){case Ig:r.return=w1(r.value,r.length,t);return;case _1:return of([os(r,{value:De(r.value,"@","@"+Ge)})],s);case Of:if(r.length)return Ax(t=r.props,function(o){switch(yi(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xo(os(r,{props:[De(o,/:(read-\w+)/,":"+Ru+"$1")]})),xo(os(r,{props:[o]})),Um(r,{props:rE(t,s)});break;case"::placeholder":xo(os(r,{props:[De(o,/:(plac\w+)/,":"+Ge+"input-$1")]})),xo(os(r,{props:[De(o,/:(plac\w+)/,":"+Ru+"$1")]})),xo(os(r,{props:[De(o,/:(plac\w+)/,st+"input-$1")]})),xo(os(r,{props:[o]})),Um(r,{props:rE(t,s)});break}return""})}}var zx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},On={},zo=typeof process<"u"&&On!==void 0&&(On.REACT_APP_SC_ATTR||On.SC_ATTR)||"data-styled",S1="active",A1="data-styled-version",Vf="6.1.19",Dg=`/*!sc*/
`,lf=typeof window<"u"&&typeof document<"u",qx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==""?On.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&On.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.SC_DISABLE_SPEEDY!==void 0&&On.SC_DISABLE_SPEEDY!==""&&On.SC_DISABLE_SPEEDY!=="false"&&On.SC_DISABLE_SPEEDY),Bx={},Lf=Object.freeze([]),qo=Object.freeze({});function R1(r,e,t){return t===void 0&&(t=qo),r.theme!==t.theme&&r.theme||e||t.theme}var x1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Hx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Fx=/(^-|-$)/g;function aE(r){return r.replace(Hx,"-").replace(Fx,"")}var $x=/(a)(d)/gi,kh=52,oE=function(r){return String.fromCharCode(r+(r>25?39:97))};function qm(r){var e,t="";for(e=Math.abs(r);e>kh;e=e/kh|0)t=oE(e%kh)+t;return(oE(e%kh)+t).replace($x,"$1-$2")}var Em,I1=5381,Oo=function(r,e){for(var t=e.length;t;)r=33*r^e.charCodeAt(--t);return r},C1=function(r){return Oo(I1,r)};function D1(r){return qm(C1(r)>>>0)}function Gx(r){return r.displayName||r.name||"Component"}function Tm(r){return typeof r=="string"&&!0}var N1=typeof Symbol=="function"&&Symbol.for,O1=N1?Symbol.for("react.memo"):60115,Yx=N1?Symbol.for("react.forward_ref"):60112,Qx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Kx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},k1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xx=((Em={})[Yx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Em[O1]=k1,Em);function lE(r){return("type"in(e=r)&&e.type.$$typeof)===O1?k1:"$$typeof"in r?Xx[r.$$typeof]:Qx;var e}var Wx=Object.defineProperty,Zx=Object.getOwnPropertyNames,uE=Object.getOwnPropertySymbols,Jx=Object.getOwnPropertyDescriptor,eI=Object.getPrototypeOf,cE=Object.prototype;function M1(r,e,t){if(typeof e!="string"){if(cE){var s=eI(e);s&&s!==cE&&M1(r,s,t)}var o=Zx(e);uE&&(o=o.concat(uE(e)));for(var u=lE(r),h=lE(e),p=0;p<o.length;++p){var m=o[p];if(!(m in Kx||t&&t[m]||h&&m in h||u&&m in u)){var g=Jx(e,m);try{Wx(r,m,g)}catch{}}}}return r}function Ea(r){return typeof r=="function"}function Ng(r){return typeof r=="object"&&"styledComponentId"in r}function pa(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function Bm(r,e){if(r.length===0)return"";for(var t=r[0],s=1;s<r.length;s++)t+=r[s];return t}function Pu(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Hm(r,e,t){if(t===void 0&&(t=!1),!t&&!Pu(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)r[s]=Hm(r[s],e[s]);else if(Pu(e))for(var s in e)r[s]=Hm(r[s],e[s]);return r}function Og(r,e){Object.defineProperty(r,"toString",{value:e})}function Ta(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var tI=function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},r.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,u=o;e>=u;)if((u<<=1)<0)throw Ta(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var h=o;h<u;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(e+1),m=(h=0,t.length);h<m;h++)this.tag.insertRule(p,t[h])&&(this.groupSizes[e]++,p++)},r.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),o=s+t;this.groupSizes[e]=0;for(var u=s;u<o;u++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),u=o+s,h=o;h<u;h++)t+="".concat(this.tag.getRule(h)).concat(Dg);return t},r}(),Yh=new Map,uf=new Map,Qh=1,Mh=function(r){if(Yh.has(r))return Yh.get(r);for(;uf.has(Qh);)Qh++;var e=Qh++;return Yh.set(r,e),uf.set(e,r),e},nI=function(r,e){Qh=e+1,Yh.set(r,e),uf.set(e,r)},rI="style[".concat(zo,"][").concat(A1,'="').concat(Vf,'"]'),iI=new RegExp("^".concat(zo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sI=function(r,e,t){for(var s,o=t.split(","),u=0,h=o.length;u<h;u++)(s=o[u])&&r.registerName(e,s)},aI=function(r,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(Dg),o=[],u=0,h=s.length;u<h;u++){var p=s[u].trim();if(p){var m=p.match(iI);if(m){var g=0|parseInt(m[1],10),v=m[2];g!==0&&(nI(v,g),sI(r,v,m[3]),r.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},hE=function(r){for(var e=document.querySelectorAll(rI),t=0,s=e.length;t<s;t++){var o=e[t];o&&o.getAttribute(zo)!==S1&&(aI(r,o),o.parentNode&&o.parentNode.removeChild(o))}};function oI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var P1=function(r){var e=document.head,t=r||e,s=document.createElement("style"),o=function(p){var m=Array.from(p.querySelectorAll("style[".concat(zo,"]")));return m[m.length-1]}(t),u=o!==void 0?o.nextSibling:null;s.setAttribute(zo,S1),s.setAttribute(A1,Vf);var h=oI();return h&&s.setAttribute("nonce",h),t.insertBefore(s,u),s},lI=function(){function r(e){this.element=P1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,o=0,u=s.length;o<u;o++){var h=s[o];if(h.ownerNode===t)return h}throw Ta(17)}(this.element),this.length=0}return r.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},r}(),uI=function(){function r(e){this.element=P1(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r}(),cI=function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r}(),fE=lf,hI={isServer:!lf,useCSSOMInjection:!qx},cf=function(){function r(e,t,s){e===void 0&&(e=qo),t===void 0&&(t={});var o=this;this.options=Gt(Gt({},hI),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&lf&&fE&&(fE=!1,hE(this)),Og(this,function(){return function(u){for(var h=u.getTag(),p=h.length,m="",g=function(b){var S=function(ee){return uf.get(ee)}(b);if(S===void 0)return"continue";var I=u.names.get(S),L=h.getGroup(b);if(I===void 0||!I.size||L.length===0)return"continue";var $="".concat(zo,".g").concat(b,'[id="').concat(S,'"]'),B="";I!==void 0&&I.forEach(function(ee){ee.length>0&&(B+="".concat(ee,","))}),m+="".concat(L).concat($,'{content:"').concat(B,'"}').concat(Dg)},v=0;v<p;v++)g(v);return m}(o)})}return r.registerId=function(e){return Mh(e)},r.prototype.rehydrate=function(){!this.server&&lf&&hE(this)},r.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new r(Gt(Gt({},this.options),e),this.gs,t&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,o=t.target;return t.isServer?new cI(o):s?new lI(o):new uI(o)}(this.options),new tI(e)));var e},r.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},r.prototype.registerName=function(e,t){if(Mh(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},r.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(Mh(e),s)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(Mh(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r}(),fI=/&/g,dI=/^\s*\/\/.*$/gm;function V1(r,e){return r.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=V1(t.children,e)),t})}function pI(r){var e,t,s,o=qo,u=o.options,h=u===void 0?qo:u,p=o.plugins,m=p===void 0?Lf:p,g=function(S,I,L){return L.startsWith(t)&&L.endsWith(t)&&L.replaceAll(t,"").length>0?".".concat(e):S},v=m.slice();v.push(function(S){S.type===Of&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(fI,t).replace(s,g))}),h.prefix&&v.push(jx),v.push(Vx);var b=function(S,I,L,$){I===void 0&&(I=""),L===void 0&&(L=""),$===void 0&&($="&"),e=$,t=I,s=new RegExp("\\".concat(t,"\\b"),"g");var B=S.replace(dI,""),ee=Mx(L||I?"".concat(L," ").concat(I," { ").concat(B," }"):B);h.namespace&&(ee=V1(ee,h.namespace));var W=[];return of(ee,Lx(v.concat(Ux(function(ie){return W.push(ie)})))),W};return b.hash=m.length?m.reduce(function(S,I){return I.name||Ta(15),Oo(S,I.name)},I1).toString():"",b}var mI=new cf,Fm=pI(),L1=ar.createContext({shouldForwardProp:void 0,styleSheet:mI,stylis:Fm});L1.Consumer;ar.createContext(void 0);function $m(){return F.useContext(L1)}var gI=function(){function r(e,t){var s=this;this.inject=function(o,u){u===void 0&&(u=Fm);var h=s.name+u.hash;o.hasNameForId(s.id,h)||o.insertRules(s.id,h,u(s.rules,h,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Og(this,function(){throw Ta(12,String(s.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=Fm),this.name+e.hash},r}(),yI=function(r){return r>="A"&&r<="Z"};function dE(r){for(var e="",t=0;t<r.length;t++){var s=r[t];if(t===1&&s==="-"&&r[0]==="-")return r;yI(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var U1=function(r){return r==null||r===!1||r===""},j1=function(r){var e,t,s=[];for(var o in r){var u=r[o];r.hasOwnProperty(o)&&!U1(u)&&(Array.isArray(u)&&u.isCss||Ea(u)?s.push("".concat(dE(o),":"),u,";"):Pu(u)?s.push.apply(s,Mu(Mu(["".concat(o," {")],j1(u),!1),["}"],!1)):s.push("".concat(dE(o),": ").concat((e=o,(t=u)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in zx||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function ds(r,e,t,s){if(U1(r))return[];if(Ng(r))return[".".concat(r.styledComponentId)];if(Ea(r)){if(!Ea(u=r)||u.prototype&&u.prototype.isReactComponent||!e)return[r];var o=r(e);return ds(o,e,t,s)}var u;return r instanceof gI?t?(r.inject(t,s),[r.getName(s)]):[r]:Pu(r)?j1(r):Array.isArray(r)?Array.prototype.concat.apply(Lf,r.map(function(h){return ds(h,e,t,s)})):[r.toString()]}function z1(r){for(var e=0;e<r.length;e+=1){var t=r[e];if(Ea(t)&&!Ng(t))return!1}return!0}var _I=C1(Vf),vI=function(){function r(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&z1(e),this.componentId=t,this.baseHash=Oo(_I,t),this.baseStyle=s,cf.registerId(t)}return r.prototype.generateAndInjectStyles=function(e,t,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=pa(o,this.staticRulesId);else{var u=Bm(ds(this.rules,e,t,s)),h=qm(Oo(this.baseHash,u)>>>0);if(!t.hasNameForId(this.componentId,h)){var p=s(u,".".concat(h),void 0,this.componentId);t.insertRules(this.componentId,h,p)}o=pa(o,h),this.staticRulesId=h}else{for(var m=Oo(this.baseHash,s.hash),g="",v=0;v<this.rules.length;v++){var b=this.rules[v];if(typeof b=="string")g+=b;else if(b){var S=Bm(ds(b,e,t,s));m=Oo(m,S+v),g+=S}}if(g){var I=qm(m>>>0);t.hasNameForId(this.componentId,I)||t.insertRules(this.componentId,I,s(g,".".concat(I),void 0,this.componentId)),o=pa(o,I)}}return o},r}(),Vu=ar.createContext(void 0);Vu.Consumer;function EI(r){var e=ar.useContext(Vu),t=F.useMemo(function(){return function(s,o){if(!s)throw Ta(14);if(Ea(s)){var u=s(o);return u}if(Array.isArray(s)||typeof s!="object")throw Ta(8);return o?Gt(Gt({},o),s):s}(r.theme,e)},[r.theme,e]);return r.children?ar.createElement(Vu.Provider,{value:t},r.children):null}var bm={};function TI(r,e,t){var s=Ng(r),o=r,u=!Tm(r),h=e.attrs,p=h===void 0?Lf:h,m=e.componentId,g=m===void 0?function(ue,ce){var de=typeof ue!="string"?"sc":aE(ue);bm[de]=(bm[de]||0)+1;var D="".concat(de,"-").concat(D1(Vf+de+bm[de]));return ce?"".concat(ce,"-").concat(D):D}(e.displayName,e.parentComponentId):m,v=e.displayName,b=v===void 0?function(ue){return Tm(ue)?"styled.".concat(ue):"Styled(".concat(Gx(ue),")")}(r):v,S=e.displayName&&e.componentId?"".concat(aE(e.displayName),"-").concat(e.componentId):e.componentId||g,I=s&&o.attrs?o.attrs.concat(p).filter(Boolean):p,L=e.shouldForwardProp;if(s&&o.shouldForwardProp){var $=o.shouldForwardProp;if(e.shouldForwardProp){var B=e.shouldForwardProp;L=function(ue,ce){return $(ue,ce)&&B(ue,ce)}}else L=$}var ee=new vI(t,S,s?o.componentStyle:void 0);function W(ue,ce){return function(de,D,R){var x=de.attrs,M=de.componentStyle,P=de.defaultProps,U=de.foldedComponentIds,N=de.styledComponentId,Dt=de.target,at=ar.useContext(Vu),K=$m(),le=de.shouldForwardProp||K.shouldForwardProp,me=R1(D,at,P)||qo,Ie=function(xe,ve,ct){for(var Be,Ut=Gt(Gt({},ve),{className:void 0,theme:ct}),Pn=0;Pn<xe.length;Pn+=1){var yn=Ea(Be=xe[Pn])?Be(Ut):Be;for(var nn in yn)Ut[nn]=nn==="className"?pa(Ut[nn],yn[nn]):nn==="style"?Gt(Gt({},Ut[nn]),yn[nn]):yn[nn]}return ve.className&&(Ut.className=pa(Ut.className,ve.className)),Ut}(x,D,me),O=Ie.as||Dt,re={};for(var ae in Ie)Ie[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&Ie.theme===me||(ae==="forwardedAs"?re.as=Ie.forwardedAs:le&&!le(ae,O)||(re[ae]=Ie[ae]));var se=function(xe,ve){var ct=$m(),Be=xe.generateAndInjectStyles(ve,ct.styleSheet,ct.stylis);return Be}(M,Ie),ge=pa(U,N);return se&&(ge+=" "+se),Ie.className&&(ge+=" "+Ie.className),re[Tm(O)&&!x1.has(O)?"class":"className"]=ge,R&&(re.ref=R),F.createElement(O,re)}(ie,ue,ce)}W.displayName=b;var ie=ar.forwardRef(W);return ie.attrs=I,ie.componentStyle=ee,ie.displayName=b,ie.shouldForwardProp=L,ie.foldedComponentIds=s?pa(o.foldedComponentIds,o.styledComponentId):"",ie.styledComponentId=S,ie.target=s?o.target:r,Object.defineProperty(ie,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ue){this._foldedDefaultProps=s?function(ce){for(var de=[],D=1;D<arguments.length;D++)de[D-1]=arguments[D];for(var R=0,x=de;R<x.length;R++)Hm(ce,x[R],!0);return ce}({},o.defaultProps,ue):ue}}),Og(ie,function(){return".".concat(ie.styledComponentId)}),u&&M1(ie,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ie}function pE(r,e){for(var t=[r[0]],s=0,o=e.length;s<o;s+=1)t.push(e[s],r[s+1]);return t}var mE=function(r){return Object.assign(r,{isCss:!0})};function q1(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Ea(r)||Pu(r))return mE(ds(pE(Lf,Mu([r],e,!0))));var s=r;return e.length===0&&s.length===1&&typeof s[0]=="string"?ds(s):mE(ds(pE(s,e)))}function Gm(r,e,t){if(t===void 0&&(t=qo),!e)throw Ta(1,e);var s=function(o){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return r(e,t,q1.apply(void 0,Mu([o],u,!1)))};return s.attrs=function(o){return Gm(r,e,Gt(Gt({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return Gm(r,e,Gt(Gt({},t),o))},s}var B1=function(r){return Gm(TI,r)},Y=B1;x1.forEach(function(r){Y[r]=B1(r)});var bI=function(){function r(e,t){this.rules=e,this.componentId=t,this.isStatic=z1(e),cf.registerId(this.componentId+1)}return r.prototype.createStyles=function(e,t,s,o){var u=o(Bm(ds(this.rules,t,s,o)),""),h=this.componentId+e;s.insertRules(h,h,u)},r.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},r.prototype.renderStyles=function(e,t,s,o){e>2&&cf.registerId(this.componentId+e),this.removeStyles(e,s),this.createStyles(e,t,s,o)},r}();function wI(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var s=q1.apply(void 0,Mu([r],e,!1)),o="sc-global-".concat(D1(JSON.stringify(s))),u=new bI(s,o),h=function(m){var g=$m(),v=ar.useContext(Vu),b=ar.useRef(g.styleSheet.allocateGSInstance(o)).current;return g.styleSheet.server&&p(b,m,g.styleSheet,v,g.stylis),ar.useLayoutEffect(function(){if(!g.styleSheet.server)return p(b,m,g.styleSheet,v,g.stylis),function(){return u.removeStyles(b,g.styleSheet)}},[b,m,g.styleSheet,v,g.stylis]),null};function p(m,g,v,b,S){if(u.isStatic)u.renderStyles(m,Bx,v,S);else{var I=Gt(Gt({},g),{theme:R1(g,b,h.defaultProps)});u.renderStyles(m,I,v,S)}}return ar.memo(h)}/**
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
 */const SI=()=>{};var gE={};/**
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
 */const H1=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},AI=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],p=r[t++],m=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},F1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,p=h?r[o+1]:0,m=o+2<r.length,g=m?r[o+2]:0,v=u>>2,b=(u&3)<<4|p>>4;let S=(p&15)<<2|g>>6,I=g&63;m||(I=64,h||(S=64)),s.push(t[v],t[b],t[S],t[I])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(H1(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):AI(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const g=o<r.length?t[r.charAt(o)]:64;++o;const b=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||p==null||g==null||b==null)throw new RI;const S=u<<2|p>>4;if(s.push(S),g!==64){const I=p<<4&240|g>>2;if(s.push(I),b!==64){const L=g<<6&192|b;s.push(L)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class RI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xI=function(r){const e=H1(r);return F1.encodeByteArray(e,!0)},hf=function(r){return xI(r).replace(/\./g,"")},$1=function(r){try{return F1.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function II(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const CI=()=>II().__FIREBASE_DEFAULTS__,DI=()=>{if(typeof process>"u"||typeof gE>"u")return;const r=gE.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},NI=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&$1(r[1]);return e&&JSON.parse(e)},Uf=()=>{try{return SI()||CI()||DI()||NI()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},G1=r=>{var e,t;return(t=(e=Uf())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},OI=r=>{const e=G1(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Y1=()=>{var r;return(r=Uf())==null?void 0:r.config},Q1=r=>{var e;return(e=Uf())==null?void 0:e[`_${r}`]};/**
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
 */class kI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function el(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function K1(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function MI(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[hf(JSON.stringify(t)),hf(JSON.stringify(h)),""].join(".")}const xu={};function PI(){const r={prod:[],emulator:[]};for(const e of Object.keys(xu))xu[e]?r.emulator.push(e):r.prod.push(e);return r}function VI(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let yE=!1;function X1(r,e){if(typeof window>"u"||typeof document>"u"||!el(window.location.host)||xu[r]===e||xu[r]||yE)return;xu[r]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",u=PI().prod.length>0;function h(){const S=document.getElementById(s);S&&S.remove()}function p(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function m(S,I){S.setAttribute("width","24"),S.setAttribute("id",I),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{yE=!0,h()},S}function v(S,I){S.setAttribute("id",I),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function b(){const S=VI(s),I=t("text"),L=document.getElementById(I)||document.createElement("span"),$=t("learnmore"),B=document.getElementById($)||document.createElement("a"),ee=t("preprendIcon"),W=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ie=S.element;p(ie),v(B,$);const ue=g();m(W,ee),ie.append(W,L,B,ue),document.body.appendChild(ie)}u?(L.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
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
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function UI(){var e;const r=(e=Uf())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zI(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function qI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BI(){const r=fn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function HI(){return!UI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function FI(){try{return typeof indexedDB=="object"}catch{return!1}}function $I(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const GI="FirebaseError";class Ci extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=GI,Object.setPrototypeOf(this,Ci.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xu.prototype.create)}}class Xu{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?YI(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Ci(o,p,s)}}function YI(r,e){return r.replace(QI,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const QI=/\{\$([^}]+)}/g;function KI(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ba(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(_E(u)&&_E(h)){if(!ba(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function _E(r){return r!==null&&typeof r=="object"}/**
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
 */function Wu(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Eu(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Tu(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function XI(r,e){const t=new WI(r,e);return t.subscribe.bind(t)}class WI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ZI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=wm),o.error===void 0&&(o.error=wm),o.complete===void 0&&(o.complete=wm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZI(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function wm(){}/**
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
 */class JI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new kI;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tC(e))try{this.getOrInitializeService({instanceIdentifier:da})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=da){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=da){return this.instances.has(e)}getOptions(e=da){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:eC(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=da){return this.component?this.component.multipleInstances?e:da:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eC(r){return r===da?void 0:r}function tC(r){return r.instantiationMode==="EAGER"}/**
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
 */class nC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new JI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const rC={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},iC=Pe.INFO,sC={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},aC=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=sC[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kg{constructor(e){this.name=e,this._logLevel=iC,this._logHandler=aC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const oC=(r,e)=>e.some(t=>r instanceof t);let vE,EE;function lC(){return vE||(vE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uC(){return EE||(EE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const W1=new WeakMap,Ym=new WeakMap,Z1=new WeakMap,Sm=new WeakMap,Mg=new WeakMap;function cC(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(ps(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&W1.set(t,r)}).catch(()=>{}),Mg.set(e,r),e}function hC(r){if(Ym.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Ym.set(r,e)}let Qm={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ym.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Z1.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ps(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function fC(r){Qm=r(Qm)}function dC(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Am(this),e,...t);return Z1.set(s,e.sort?e.sort():[e]),ps(s)}:uC().includes(r)?function(...e){return r.apply(Am(this),e),ps(W1.get(this))}:function(...e){return ps(r.apply(Am(this),e))}}function pC(r){return typeof r=="function"?dC(r):(r instanceof IDBTransaction&&hC(r),oC(r,lC())?new Proxy(r,Qm):r)}function ps(r){if(r instanceof IDBRequest)return cC(r);if(Sm.has(r))return Sm.get(r);const e=pC(r);return e!==r&&(Sm.set(r,e),Mg.set(e,r)),e}const Am=r=>Mg.get(r);function mC(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),p=ps(h);return s&&h.addEventListener("upgradeneeded",m=>{s(ps(h.result),m.oldVersion,m.newVersion,ps(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const gC=["get","getKey","getAll","getAllKeys","count"],yC=["put","add","delete","clear"],Rm=new Map;function TE(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Rm.get(e))return Rm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=yC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||gC.includes(t)))return;const u=async function(h,...p){const m=this.transaction(h,o?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(p.shift())),(await Promise.all([g[t](...p),o&&m.done]))[0]};return Rm.set(e,u),u}fC(r=>({...r,get:(e,t,s)=>TE(e,t)||r.get(e,t,s),has:(e,t)=>!!TE(e,t)||r.has(e,t)}));/**
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
 */class _C{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function vC(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Km="@firebase/app",bE="0.14.0";/**
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
 */const Ai=new kg("@firebase/app"),EC="@firebase/app-compat",TC="@firebase/analytics-compat",bC="@firebase/analytics",wC="@firebase/app-check-compat",SC="@firebase/app-check",AC="@firebase/auth",RC="@firebase/auth-compat",xC="@firebase/database",IC="@firebase/data-connect",CC="@firebase/database-compat",DC="@firebase/functions",NC="@firebase/functions-compat",OC="@firebase/installations",kC="@firebase/installations-compat",MC="@firebase/messaging",PC="@firebase/messaging-compat",VC="@firebase/performance",LC="@firebase/performance-compat",UC="@firebase/remote-config",jC="@firebase/remote-config-compat",zC="@firebase/storage",qC="@firebase/storage-compat",BC="@firebase/firestore",HC="@firebase/ai",FC="@firebase/firestore-compat",$C="firebase",GC="12.0.0";/**
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
 */const Xm="[DEFAULT]",YC={[Km]:"fire-core",[EC]:"fire-core-compat",[bC]:"fire-analytics",[TC]:"fire-analytics-compat",[SC]:"fire-app-check",[wC]:"fire-app-check-compat",[AC]:"fire-auth",[RC]:"fire-auth-compat",[xC]:"fire-rtdb",[IC]:"fire-data-connect",[CC]:"fire-rtdb-compat",[DC]:"fire-fn",[NC]:"fire-fn-compat",[OC]:"fire-iid",[kC]:"fire-iid-compat",[MC]:"fire-fcm",[PC]:"fire-fcm-compat",[VC]:"fire-perf",[LC]:"fire-perf-compat",[UC]:"fire-rc",[jC]:"fire-rc-compat",[zC]:"fire-gcs",[qC]:"fire-gcs-compat",[BC]:"fire-fst",[FC]:"fire-fst-compat",[HC]:"fire-vertex","fire-js":"fire-js",[$C]:"fire-js-all"};/**
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
 */const ff=new Map,QC=new Map,Wm=new Map;function wE(r,e){try{r.container.addComponent(e)}catch(t){Ai.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Bo(r){const e=r.name;if(Wm.has(e))return Ai.debug(`There were multiple attempts to register component ${e}.`),!1;Wm.set(e,r);for(const t of ff.values())wE(t,r);for(const t of QC.values())wE(t,r);return!0}function Pg(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Xn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const KC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ms=new Xu("app","Firebase",KC);/**
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
 */class XC{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wa("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
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
 */const tl=GC;function J1(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Xm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ms.create("bad-app-name",{appName:String(o)});if(t||(t=Y1()),!t)throw ms.create("no-options");const u=ff.get(o);if(u){if(ba(t,u.options)&&ba(s,u.config))return u;throw ms.create("duplicate-app",{appName:o})}const h=new nC(o);for(const m of Wm.values())h.addComponent(m);const p=new XC(t,s,h);return ff.set(o,p),p}function eb(r=Xm){const e=ff.get(r);if(!e&&r===Xm&&Y1())return J1();if(!e)throw ms.create("no-app",{appName:r});return e}function gs(r,e,t){let s=YC[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ai.warn(h.join(" "));return}Bo(new wa(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const WC="firebase-heartbeat-database",ZC=1,Lu="firebase-heartbeat-store";let xm=null;function tb(){return xm||(xm=mC(WC,ZC,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Lu)}catch(t){console.warn(t)}}}}).catch(r=>{throw ms.create("idb-open",{originalErrorMessage:r.message})})),xm}async function JC(r){try{const t=(await tb()).transaction(Lu),s=await t.objectStore(Lu).get(nb(r));return await t.done,s}catch(e){if(e instanceof Ci)Ai.warn(e.message);else{const t=ms.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ai.warn(t.message)}}}async function SE(r,e){try{const s=(await tb()).transaction(Lu,"readwrite");await s.objectStore(Lu).put(e,nb(r)),await s.done}catch(t){if(t instanceof Ci)Ai.warn(t.message);else{const s=ms.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ai.warn(s.message)}}}function nb(r){return`${r.name}!${r.options.appId}`}/**
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
 */const eD=1024,tD=30;class nD{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new iD(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=AE();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>tD){const h=sD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ai.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=AE(),{heartbeatsToSend:s,unsentEntries:o}=rD(this._heartbeatsCache.heartbeats),u=hf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ai.warn(t),""}}}function AE(){return new Date().toISOString().substring(0,10)}function rD(r,e=eD){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),RE(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),RE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class iD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return FI()?$I().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await JC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return SE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return SE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function RE(r){return hf(JSON.stringify({version:2,heartbeats:r})).length}function sD(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function aD(r){Bo(new wa("platform-logger",e=>new _C(e),"PRIVATE")),Bo(new wa("heartbeat",e=>new nD(e),"PRIVATE")),gs(Km,bE,r),gs(Km,bE,"esm2020"),gs("fire-js","")}aD("");function rb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oD=rb,ib=new Xu("auth","Firebase",rb());/**
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
 */const df=new kg("@firebase/auth");function lD(r,...e){df.logLevel<=Pe.WARN&&df.warn(`Auth (${tl}): ${r}`,...e)}function Kh(r,...e){df.logLevel<=Pe.ERROR&&df.error(`Auth (${tl}): ${r}`,...e)}/**
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
 */function fr(r,...e){throw Vg(r,...e)}function Pr(r,...e){return Vg(r,...e)}function sb(r,e,t){const s={...oD(),[e]:t};return new Xu("auth","Firebase",s).create(e,{appName:r.name})}function Ti(r){return sb(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vg(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return ib.create(r,...e)}function be(r,e,...t){if(!r)throw Vg(e,...t)}function _i(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Kh(e),new Error(e)}function Ri(r,e){r||_i(e)}/**
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
 */function Zm(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function uD(){return xE()==="http:"||xE()==="https:"}function xE(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function cD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uD()||zI()||"connection"in navigator)?navigator.onLine:!0}function hD(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Zu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ri(t>e,"Short delay should be less than long delay!"),this.isMobile=LI()||qI()}get(){return cD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lg(r,e){Ri(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ab{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_i("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_i("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_i("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pD=new Zu(3e4,6e4);function xs(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Di(r,e,t,s,o={}){return ob(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=Wu({key:r.config.apiKey,...h}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:m,...u};return jI()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&el(r.emulatorConfig.host)&&(g.credentials="include"),ab.fetch()(await lb(r,r.config.apiHost,t,p),g)})}async function ob(r,e,t){r._canInitEmulator=!1;const s={...fD,...e};try{const o=new gD(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Ph(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ph(r,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Ph(r,"email-already-in-use",h);if(m==="USER_DISABLED")throw Ph(r,"user-disabled",h);const v=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw sb(r,v,g);fr(r,v)}}catch(o){if(o instanceof Ci)throw o;fr(r,"network-request-failed",{message:String(o)})}}async function Ju(r,e,t,s,o={}){const u=await Di(r,e,t,s,o);return"mfaPendingCredential"in u&&fr(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function lb(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?Lg(r.config,o):`${r.config.apiScheme}://${o}`;return dD.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function mD(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Pr(this.auth,"network-request-failed")),pD.get())})}}function Ph(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Pr(r,e,s);return o.customData._tokenResponse=t,o}function IE(r){return r!==void 0&&r.enterprise!==void 0}class yD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mD(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _D(r,e){return Di(r,"GET","/v2/recaptchaConfig",xs(r,e))}/**
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
 */async function vD(r,e){return Di(r,"POST","/v1/accounts:delete",e)}async function pf(r,e){return Di(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Iu(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ED(r,e=!1){const t=Ct(r),s=await t.getIdToken(e),o=Ug(s);be(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Iu(Im(o.auth_time)),issuedAtTime:Iu(Im(o.iat)),expirationTime:Iu(Im(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Im(r){return Number(r)*1e3}function Ug(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Kh("JWT malformed, contained fewer than 3 sections"),null;try{const o=$1(t);return o?JSON.parse(o):(Kh("Failed to decode base64 JWT payload"),null)}catch(o){return Kh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function CE(r){const e=Ug(r);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ho(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ci&&TD(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function TD({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class bD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Jm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Iu(this.lastLoginAt),this.creationTime=Iu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mf(r){var b;const e=r.auth,t=await r.getIdToken(),s=await Ho(r,pf(e,{idToken:t}));be(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(b=o.providerUserInfo)!=null&&b.length?ub(o.providerUserInfo):[],h=SD(r.providerData,u),p=r.isAnonymous,m=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),g=p?m:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Jm(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(r,v)}async function wD(r){const e=Ct(r);await mf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SD(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function ub(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function AD(r,e){const t=await ob(r,{},async()=>{const s=Wu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await lb(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:s};return r.emulatorConfig&&el(r.emulatorConfig.host)&&(m.credentials="include"),ab.fetch()(h,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function RD(r,e){return Di(r,"POST","/v2/accounts:revokeToken",xs(r,e))}/**
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
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):CE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){be(e.length!==0,"internal-error");const t=CE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await AD(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Mo;return s&&(be(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(be(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(be(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return _i("not implemented")}}/**
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
 */function ss(r,e){be(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class or{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new bD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Jm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ho(this,this.stsTokenManager.getToken(this.auth,e));return be(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ED(this,e)}reload(){return wD(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new or({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await mf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(Ti(this.auth));const e=await this.getIdToken();return await Ho(this,vD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,p=t.tenantId??void 0,m=t._redirectEventId??void 0,g=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:b,emailVerified:S,isAnonymous:I,providerData:L,stsTokenManager:$}=t;be(b&&$,e,"internal-error");const B=Mo.fromJSON(this.name,$);be(typeof b=="string",e,"internal-error"),ss(s,e.name),ss(o,e.name),be(typeof S=="boolean",e,"internal-error"),be(typeof I=="boolean",e,"internal-error"),ss(u,e.name),ss(h,e.name),ss(p,e.name),ss(m,e.name),ss(g,e.name),ss(v,e.name);const ee=new or({uid:b,auth:e,email:o,emailVerified:S,displayName:s,isAnonymous:I,photoURL:h,phoneNumber:u,tenantId:p,stsTokenManager:B,createdAt:g,lastLoginAt:v});return L&&Array.isArray(L)&&(ee.providerData=L.map(W=>({...W}))),m&&(ee._redirectEventId=m),ee}static async _fromIdTokenResponse(e,t,s=!1){const o=new Mo;o.updateFromServerResponse(t);const u=new or({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await mf(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];be(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?ub(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new Mo;p.updateFromIdToken(s);const m=new or({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Jm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
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
 */const DE=new Map;function vi(r){Ri(r instanceof Function,"Expected a class definition");let e=DE.get(r);return e?(Ri(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,DE.set(r,e),e)}/**
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
 */class cb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cb.type="NONE";const NE=cb;/**
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
 */function Xh(r,e,t){return`firebase:${r}:${e}:${t}`}class Po{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Xh(this.userKey,o.apiKey,u),this.fullPersistenceKey=Xh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await pf(this.auth,{idToken:e}).catch(()=>{});return t?or._fromGetAccountInfoResponse(this.auth,t,e):null}return or._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Po(vi(NE),e,s);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||vi(NE);const h=Xh(s,e.config.apiKey,e.name);let p=null;for(const g of t)try{const v=await g._get(h);if(v){let b;if(typeof v=="string"){const S=await pf(e,{idToken:v}).catch(()=>{});if(!S)break;b=await or._fromGetAccountInfoResponse(e,S,v)}else b=or._fromJSON(e,v);g!==u&&(p=b),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new Po(u,e,s):(u=m[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new Po(u,e,s))}}/**
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
 */function OE(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gb(e))return"Blackberry";if(yb(e))return"Webos";if(fb(e))return"Safari";if((e.includes("chrome/")||db(e))&&!e.includes("edge/"))return"Chrome";if(mb(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function hb(r=fn()){return/firefox\//i.test(r)}function fb(r=fn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function db(r=fn()){return/crios\//i.test(r)}function pb(r=fn()){return/iemobile/i.test(r)}function mb(r=fn()){return/android/i.test(r)}function gb(r=fn()){return/blackberry/i.test(r)}function yb(r=fn()){return/webos/i.test(r)}function jg(r=fn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function xD(r=fn()){var e;return jg(r)&&!!((e=window.navigator)!=null&&e.standalone)}function ID(){return BI()&&document.documentMode===10}function _b(r=fn()){return jg(r)||mb(r)||yb(r)||gb(r)||/windows phone/i.test(r)||pb(r)}/**
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
 */function vb(r,e=[]){let t;switch(r){case"Browser":t=OE(fn());break;case"Worker":t=`${OE(fn())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${tl}/${s}`}/**
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
 */class CD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,p)=>{try{const m=e(u);h(m)}catch(m){p(m)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function DD(r,e={}){return Di(r,"GET","/v2/passwordPolicy",xs(r,e))}/**
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
 */const ND=6;class OD{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ND,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class kD{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kE(this),this.idTokenSubscription=new kE(this),this.beforeStateQueue=new CD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ib,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vi(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Po.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await pf(this,{idToken:e}),s=await or._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Xn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,p=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===p)&&(m!=null&&m.user)&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await mf(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(Ti(this));const t=e?Ct(e):null;return t&&be(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(Ti(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(Ti(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DD(this),t=new OD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xu("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await RD(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vi(e)||this._popupRedirectResolver;be(t,this,"argument-error"),this.redirectPersistenceManager=await Po.create(this,[vi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&lD(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Na(r){return Ct(r)}class kE{constructor(e){this.auth=e,this.observer=null,this.addObserver=XI(t=>this.observer=t)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let jf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MD(r){jf=r}function Eb(r){return jf.loadJS(r)}function PD(){return jf.recaptchaEnterpriseScript}function VD(){return jf.gapiScript}function LD(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class UD{constructor(){this.enterprise=new jD}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class jD{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const zD="recaptcha-enterprise",Tb="NO_RECAPTCHA";class qD{constructor(e){this.type=zD,this.auth=Na(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{_D(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new yD(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(m=>{p(m)})})}function o(u,h,p){const m=window.grecaptcha;IE(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(g=>{h(g)}).catch(()=>{h(Tb)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new UD().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!t&&IE(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=PD();m.length!==0&&(m+=p),Eb(m).then(()=>{o(p,u,h)}).catch(g=>{h(g)})}}).catch(p=>{h(p)})})}}async function ME(r,e,t,s=!1,o=!1){const u=new qD(r);let h;if(o)h=Tb;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function eg(r,e,t,s,o){var u;if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await ME(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await ME(r,e,t,t==="getOobCode");return s(r,p)}else return Promise.reject(h)})}/**
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
 */function BD(r,e){const t=Pg(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ba(u,e??{}))return o;fr(o,"already-initialized")}return t.initialize({options:e})}function HD(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(vi);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function FD(r,e,t){const s=Na(r);be(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=bb(e),{host:h,port:p}=$D(e),m=p===null?"":`:${p}`,g={url:`${u}//${h}${m}/`},v=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){be(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),be(ba(g,s.config.emulator)&&ba(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,el(h)?(K1(`${u}//${h}${m}`),X1("Auth",!0)):GD()}function bb(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function $D(r){const e=bb(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:PE(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:PE(h)}}}function PE(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function GD(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class zg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _i("not implemented")}_getIdTokenResponse(e){return _i("not implemented")}_linkToIdToken(e,t){return _i("not implemented")}_getReauthenticationResolver(e){return _i("not implemented")}}async function YD(r,e){return Di(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function QD(r,e){return Ju(r,"POST","/v1/accounts:signInWithPassword",xs(r,e))}/**
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
 */async function KD(r,e){return Ju(r,"POST","/v1/accounts:signInWithEmailLink",xs(r,e))}async function XD(r,e){return Ju(r,"POST","/v1/accounts:signInWithEmailLink",xs(r,e))}/**
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
 */class Uu extends zg{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Uu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Uu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eg(e,t,"signInWithPassword",QD);case"emailLink":return KD(e,{email:this._email,oobCode:this._password});default:fr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eg(e,s,"signUpPassword",YD);case"emailLink":return XD(e,{idToken:t,email:this._email,oobCode:this._password});default:fr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vo(r,e){return Ju(r,"POST","/v1/accounts:signInWithIdp",xs(r,e))}/**
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
 */const WD="http://localhost";class Sa extends zg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Sa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new Sa(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Vo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Vo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vo(e,t)}buildRequest(){const e={requestUri:WD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wu(t)}return e}}/**
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
 */function ZD(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JD(r){const e=Eu(Tu(r)).link,t=e?Eu(Tu(e)).deep_link_id:null,s=Eu(Tu(r)).deep_link_id;return(s?Eu(Tu(s)).link:null)||s||t||e||r}class qg{constructor(e){const t=Eu(Tu(e)),s=t.apiKey??null,o=t.oobCode??null,u=ZD(t.mode??null);be(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=JD(e);try{return new qg(t)}catch{return null}}}/**
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
 */class nl{constructor(){this.providerId=nl.PROVIDER_ID}static credential(e,t){return Uu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=qg.parseLink(t);return be(s,"argument-error"),Uu._fromEmailAndCode(e,s.code,s.tenantId)}}nl.PROVIDER_ID="password";nl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ec extends wb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ls extends ec{constructor(){super("facebook.com")}static credential(e){return Sa._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ls.credential(e.oauthAccessToken)}catch{return null}}}ls.FACEBOOK_SIGN_IN_METHOD="facebook.com";ls.PROVIDER_ID="facebook.com";/**
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
 */class us extends ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Sa._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return us.credential(t,s)}catch{return null}}}us.GOOGLE_SIGN_IN_METHOD="google.com";us.PROVIDER_ID="google.com";/**
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
 */class cs extends ec{constructor(){super("github.com")}static credential(e){return Sa._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cs.credential(e.oauthAccessToken)}catch{return null}}}cs.GITHUB_SIGN_IN_METHOD="github.com";cs.PROVIDER_ID="github.com";/**
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
 */class hs extends ec{constructor(){super("twitter.com")}static credential(e,t){return Sa._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return hs.credential(t,s)}catch{return null}}}hs.TWITTER_SIGN_IN_METHOD="twitter.com";hs.PROVIDER_ID="twitter.com";/**
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
 */async function e2(r,e){return Ju(r,"POST","/v1/accounts:signUp",xs(r,e))}/**
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
 */class Aa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await or._fromIdTokenResponse(e,s,o),h=VE(s);return new Aa({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=VE(s);return new Aa({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function VE(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class gf extends Ci{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,gf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new gf(e,t,s,o)}}function Sb(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?gf._fromErrorAndOperation(r,u,e,s):u})}async function t2(r,e,t=!1){const s=await Ho(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Aa._forOperation(r,"link",s)}/**
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
 */async function n2(r,e,t=!1){const{auth:s}=r;if(Xn(s.app))return Promise.reject(Ti(s));const o="reauthenticate";try{const u=await Ho(r,Sb(s,o,e,r),t);be(u.idToken,s,"internal-error");const h=Ug(u.idToken);be(h,s,"internal-error");const{sub:p}=h;return be(r.uid===p,s,"user-mismatch"),Aa._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&fr(s,"user-mismatch"),u}}/**
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
 */async function Ab(r,e,t=!1){if(Xn(r.app))return Promise.reject(Ti(r));const s="signIn",o=await Sb(r,s,e),u=await Aa._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function r2(r,e){return Ab(Na(r),e)}/**
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
 */async function Rb(r){const e=Na(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function i2(r,e,t){if(Xn(r.app))return Promise.reject(Ti(r));const s=Na(r),h=await eg(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",e2).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Rb(r),m}),p=await Aa._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function s2(r,e,t){return Xn(r.app)?Promise.reject(Ti(r)):r2(Ct(r),nl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Rb(r),s})}/**
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
 */async function a2(r,e){return Di(r,"POST","/v1/accounts:update",e)}/**
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
 */async function o2(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Ct(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await Ho(s,a2(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const p=s.providerData.find(({providerId:m})=>m==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function l2(r,e,t,s){return Ct(r).onIdTokenChanged(e,t,s)}function u2(r,e,t){return Ct(r).beforeAuthStateChanged(e,t)}function zf(r,e,t,s){return Ct(r).onAuthStateChanged(e,t,s)}function c2(r){return Ct(r).signOut()}const yf="__sak";/**
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
 */class xb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yf,"1"),this.storage.removeItem(yf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const h2=1e3,f2=10;class Ib extends xb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_b(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,m)=>{this.notifyListeners(h,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);ID()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,f2):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},h2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ib.type="LOCAL";const d2=Ib;/**
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
 */class Cb extends xb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Cb.type="SESSION";const Db=Cb;/**
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
 */function p2(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class qf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new qf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async g=>g(t.origin,u)),m=await p2(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qf.receivers=[];/**
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
 */function Bg(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class m2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,m)=>{const g=Bg("",20);o.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(b){const S=b;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(S.data.response);break;default:clearTimeout(v),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Vr(){return window}function g2(r){Vr().location.href=r}/**
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
 */function Nb(){return typeof Vr().WorkerGlobalScope<"u"&&typeof Vr().importScripts=="function"}async function y2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _2(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function v2(){return Nb()?self:null}/**
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
 */const Ob="firebaseLocalStorageDb",E2=1,_f="firebaseLocalStorage",kb="fbase_key";class tc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bf(r,e){return r.transaction([_f],e?"readwrite":"readonly").objectStore(_f)}function T2(){const r=indexedDB.deleteDatabase(Ob);return new tc(r).toPromise()}function tg(){const r=indexedDB.open(Ob,E2);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(_f,{keyPath:kb})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(_f)?e(s):(s.close(),await T2(),e(await tg()))})})}async function LE(r,e,t){const s=Bf(r,!0).put({[kb]:e,value:t});return new tc(s).toPromise()}async function b2(r,e){const t=Bf(r,!1).get(e),s=await new tc(t).toPromise();return s===void 0?null:s.value}function UE(r,e){const t=Bf(r,!0).delete(e);return new tc(t).toPromise()}const w2=800,S2=3;class Mb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>S2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qf._getInstance(v2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await y2(),!this.activeServiceWorker)return;this.sender=new m2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tg();return await LE(e,yf,"1"),await UE(e,yf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>LE(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>b2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>UE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Bf(o,!1).getAll();return new tc(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mb.type="LOCAL";const A2=Mb;new Zu(3e4,6e4);/**
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
 */function R2(r,e){return e?vi(e):(be(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Hg extends zg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function x2(r){return Ab(r.auth,new Hg(r),r.bypassAuthState)}function I2(r){const{auth:e,user:t}=r;return be(t,e,"internal-error"),n2(t,new Hg(r),r.bypassAuthState)}async function C2(r){const{auth:e,user:t}=r;return be(t,e,"internal-error"),t2(t,new Hg(r),r.bypassAuthState)}/**
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
 */class Pb{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return x2;case"linkViaPopup":case"linkViaRedirect":return C2;case"reauthViaPopup":case"reauthViaRedirect":return I2;default:fr(this.auth,"internal-error")}}resolve(e){Ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const D2=new Zu(2e3,1e4);class ko extends Pb{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ko.currentPopupAction&&ko.currentPopupAction.cancel(),ko.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){Ri(this.filter.length===1,"Popup operations only handle one event");const e=Bg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Pr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Pr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ko.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,D2.get())};e()}}ko.currentPopupAction=null;/**
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
 */const N2="pendingRedirect",Wh=new Map;class O2 extends Pb{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Wh.get(this.auth._key());if(!e){try{const s=await k2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Wh.set(this.auth._key(),e)}return this.bypassAuthState||Wh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function k2(r,e){const t=V2(e),s=P2(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function M2(r,e){Wh.set(r._key(),e)}function P2(r){return vi(r._redirectPersistence)}function V2(r){return Xh(N2,r.config.apiKey,r.name)}async function L2(r,e,t=!1){if(Xn(r.app))return Promise.reject(Ti(r));const s=Na(r),o=R2(s,e),h=await new O2(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const U2=600*1e3;class j2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Vb(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Pr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U2&&this.cachedEventUids.clear(),this.cachedEventUids.has(jE(e))}saveEventToCache(e){this.cachedEventUids.add(jE(e)),this.lastProcessedEventTime=Date.now()}}function jE(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Vb({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z2(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vb(r);default:return!1}}/**
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
 */async function q2(r,e={}){return Di(r,"GET","/v1/projects",e)}/**
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
 */const B2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H2=/^https?/;async function F2(r){if(r.config.emulator)return;const{authorizedDomains:e}=await q2(r);for(const t of e)try{if($2(t))return}catch{}fr(r,"unauthorized-domain")}function $2(r){const e=Zm(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!H2.test(t))return!1;if(B2.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const G2=new Zu(3e4,6e4);function zE(){const r=Vr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Y2(r){return new Promise((e,t)=>{var o,u,h;function s(){zE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zE(),t(Pr(r,"network-request-failed"))},timeout:G2.get()})}if((u=(o=Vr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=Vr().gapi)!=null&&h.load)s();else{const p=LD("iframefcb");return Vr()[p]=()=>{gapi.load?s():t(Pr(r,"network-request-failed"))},Eb(`${VD()}?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw Zh=null,e})}let Zh=null;function Q2(r){return Zh=Zh||Y2(r),Zh}/**
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
 */const K2=new Zu(5e3,15e3),X2="__/auth/iframe",W2="emulator/auth/iframe",Z2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},J2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eN(r){const e=r.config;be(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Lg(e,W2):`https://${r.config.authDomain}/${X2}`,s={apiKey:e.apiKey,appName:r.name,v:tl},o=J2.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Wu(s).slice(1)}`}async function tN(r){const e=await Q2(r),t=Vr().gapi;return be(t,r,"internal-error"),e.open({where:document.body,url:eN(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z2,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Pr(r,"network-request-failed"),p=Vr().setTimeout(()=>{u(h)},K2.get());function m(){Vr().clearTimeout(p),o(s)}s.ping(m).then(m,()=>{u(h)})}))}/**
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
 */const nN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rN=500,iN=600,sN="_blank",aN="http://localhost";class qE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oN(r,e,t,s=rN,o=iN){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m={...nN,width:s.toString(),height:o.toString(),top:u,left:h},g=fn().toLowerCase();t&&(p=db(g)?sN:t),hb(g)&&(e=e||aN,m.scrollbars="yes");const v=Object.entries(m).reduce((S,[I,L])=>`${S}${I}=${L},`,"");if(xD(g)&&p!=="_self")return lN(e||"",p),new qE(null);const b=window.open(e||"",p,v);be(b,r,"popup-blocked");try{b.focus()}catch{}return new qE(b)}function lN(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const uN="__/auth/handler",cN="emulator/auth/handler",hN=encodeURIComponent("fac");async function BE(r,e,t,s,o,u){be(r.config.authDomain,r,"auth-domain-config-required"),be(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:tl,eventId:o};if(e instanceof wb){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",KI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,b]of Object.entries({}))h[v]=b}if(e instanceof ec){const v=e.getScopes().filter(b=>b!=="");v.length>0&&(h.scopes=v.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const v of Object.keys(p))p[v]===void 0&&delete p[v];const m=await r._getAppCheckToken(),g=m?`#${hN}=${encodeURIComponent(m)}`:"";return`${fN(r)}?${Wu(p).slice(1)}${g}`}function fN({config:r}){return r.emulator?Lg(r,cN):`https://${r.authDomain}/${uN}`}/**
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
 */const Cm="webStorageSupport";class dN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Db,this._completeRedirectFn=L2,this._overrideRedirectResult=M2}async _openPopup(e,t,s,o){var h;Ri((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await BE(e,t,s,Zm(),o);return oN(e,u,Bg())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await BE(e,t,s,Zm(),o);return g2(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ri(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await tN(e),s=new j2(e);return t.register("authEvent",o=>(be(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cm,{type:Cm},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[Cm];u!==void 0&&t(!!u),fr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=F2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _b()||fb()||jg()}}const pN=dN;var HE="@firebase/auth",FE="1.11.0";/**
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
 */class mN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gN(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yN(r){Bo(new wa("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;be(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vb(r)},g=new kD(s,o,u,m);return HD(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Bo(new wa("auth-internal",e=>{const t=Na(e.getProvider("auth").getImmediate());return(s=>new mN(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gs(HE,FE,gN(r)),gs(HE,FE,"esm2020")}/**
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
 */const _N=300,vN=Q1("authIdTokenMaxAge")||_N;let $E=null;const EN=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>vN)return;const o=t==null?void 0:t.token;$E!==o&&($E=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function TN(r=eb()){const e=Pg(r,"auth");if(e.isInitialized())return e.getImmediate();const t=BD(r,{popupRedirectResolver:pN,persistence:[A2,d2,Db]}),s=Q1("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=EN(u.toString());u2(t,h,()=>h(t.currentUser)),l2(t,p=>h(p))}}const o=G1("auth");return o&&FD(t,`http://${o}`),t}function bN(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}MD({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Pr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",bN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yN("Browser");var wN="firebase",SN="12.0.0";/**
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
 */gs(wN,SN,"app");var GE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ys,Lb;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function x(){}x.prototype=R.prototype,D.D=R.prototype,D.prototype=new x,D.prototype.constructor=D,D.C=function(M,P,U){for(var N=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)N[Dt-2]=arguments[Dt];return R.prototype[P].apply(M,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,R,x){x||(x=0);var M=Array(16);if(typeof R=="string")for(var P=0;16>P;++P)M[P]=R.charCodeAt(x++)|R.charCodeAt(x++)<<8|R.charCodeAt(x++)<<16|R.charCodeAt(x++)<<24;else for(P=0;16>P;++P)M[P]=R[x++]|R[x++]<<8|R[x++]<<16|R[x++]<<24;R=D.g[0],x=D.g[1],P=D.g[2];var U=D.g[3],N=R+(U^x&(P^U))+M[0]+3614090360&4294967295;R=x+(N<<7&4294967295|N>>>25),N=U+(P^R&(x^P))+M[1]+3905402710&4294967295,U=R+(N<<12&4294967295|N>>>20),N=P+(x^U&(R^x))+M[2]+606105819&4294967295,P=U+(N<<17&4294967295|N>>>15),N=x+(R^P&(U^R))+M[3]+3250441966&4294967295,x=P+(N<<22&4294967295|N>>>10),N=R+(U^x&(P^U))+M[4]+4118548399&4294967295,R=x+(N<<7&4294967295|N>>>25),N=U+(P^R&(x^P))+M[5]+1200080426&4294967295,U=R+(N<<12&4294967295|N>>>20),N=P+(x^U&(R^x))+M[6]+2821735955&4294967295,P=U+(N<<17&4294967295|N>>>15),N=x+(R^P&(U^R))+M[7]+4249261313&4294967295,x=P+(N<<22&4294967295|N>>>10),N=R+(U^x&(P^U))+M[8]+1770035416&4294967295,R=x+(N<<7&4294967295|N>>>25),N=U+(P^R&(x^P))+M[9]+2336552879&4294967295,U=R+(N<<12&4294967295|N>>>20),N=P+(x^U&(R^x))+M[10]+4294925233&4294967295,P=U+(N<<17&4294967295|N>>>15),N=x+(R^P&(U^R))+M[11]+2304563134&4294967295,x=P+(N<<22&4294967295|N>>>10),N=R+(U^x&(P^U))+M[12]+1804603682&4294967295,R=x+(N<<7&4294967295|N>>>25),N=U+(P^R&(x^P))+M[13]+4254626195&4294967295,U=R+(N<<12&4294967295|N>>>20),N=P+(x^U&(R^x))+M[14]+2792965006&4294967295,P=U+(N<<17&4294967295|N>>>15),N=x+(R^P&(U^R))+M[15]+1236535329&4294967295,x=P+(N<<22&4294967295|N>>>10),N=R+(P^U&(x^P))+M[1]+4129170786&4294967295,R=x+(N<<5&4294967295|N>>>27),N=U+(x^P&(R^x))+M[6]+3225465664&4294967295,U=R+(N<<9&4294967295|N>>>23),N=P+(R^x&(U^R))+M[11]+643717713&4294967295,P=U+(N<<14&4294967295|N>>>18),N=x+(U^R&(P^U))+M[0]+3921069994&4294967295,x=P+(N<<20&4294967295|N>>>12),N=R+(P^U&(x^P))+M[5]+3593408605&4294967295,R=x+(N<<5&4294967295|N>>>27),N=U+(x^P&(R^x))+M[10]+38016083&4294967295,U=R+(N<<9&4294967295|N>>>23),N=P+(R^x&(U^R))+M[15]+3634488961&4294967295,P=U+(N<<14&4294967295|N>>>18),N=x+(U^R&(P^U))+M[4]+3889429448&4294967295,x=P+(N<<20&4294967295|N>>>12),N=R+(P^U&(x^P))+M[9]+568446438&4294967295,R=x+(N<<5&4294967295|N>>>27),N=U+(x^P&(R^x))+M[14]+3275163606&4294967295,U=R+(N<<9&4294967295|N>>>23),N=P+(R^x&(U^R))+M[3]+4107603335&4294967295,P=U+(N<<14&4294967295|N>>>18),N=x+(U^R&(P^U))+M[8]+1163531501&4294967295,x=P+(N<<20&4294967295|N>>>12),N=R+(P^U&(x^P))+M[13]+2850285829&4294967295,R=x+(N<<5&4294967295|N>>>27),N=U+(x^P&(R^x))+M[2]+4243563512&4294967295,U=R+(N<<9&4294967295|N>>>23),N=P+(R^x&(U^R))+M[7]+1735328473&4294967295,P=U+(N<<14&4294967295|N>>>18),N=x+(U^R&(P^U))+M[12]+2368359562&4294967295,x=P+(N<<20&4294967295|N>>>12),N=R+(x^P^U)+M[5]+4294588738&4294967295,R=x+(N<<4&4294967295|N>>>28),N=U+(R^x^P)+M[8]+2272392833&4294967295,U=R+(N<<11&4294967295|N>>>21),N=P+(U^R^x)+M[11]+1839030562&4294967295,P=U+(N<<16&4294967295|N>>>16),N=x+(P^U^R)+M[14]+4259657740&4294967295,x=P+(N<<23&4294967295|N>>>9),N=R+(x^P^U)+M[1]+2763975236&4294967295,R=x+(N<<4&4294967295|N>>>28),N=U+(R^x^P)+M[4]+1272893353&4294967295,U=R+(N<<11&4294967295|N>>>21),N=P+(U^R^x)+M[7]+4139469664&4294967295,P=U+(N<<16&4294967295|N>>>16),N=x+(P^U^R)+M[10]+3200236656&4294967295,x=P+(N<<23&4294967295|N>>>9),N=R+(x^P^U)+M[13]+681279174&4294967295,R=x+(N<<4&4294967295|N>>>28),N=U+(R^x^P)+M[0]+3936430074&4294967295,U=R+(N<<11&4294967295|N>>>21),N=P+(U^R^x)+M[3]+3572445317&4294967295,P=U+(N<<16&4294967295|N>>>16),N=x+(P^U^R)+M[6]+76029189&4294967295,x=P+(N<<23&4294967295|N>>>9),N=R+(x^P^U)+M[9]+3654602809&4294967295,R=x+(N<<4&4294967295|N>>>28),N=U+(R^x^P)+M[12]+3873151461&4294967295,U=R+(N<<11&4294967295|N>>>21),N=P+(U^R^x)+M[15]+530742520&4294967295,P=U+(N<<16&4294967295|N>>>16),N=x+(P^U^R)+M[2]+3299628645&4294967295,x=P+(N<<23&4294967295|N>>>9),N=R+(P^(x|~U))+M[0]+4096336452&4294967295,R=x+(N<<6&4294967295|N>>>26),N=U+(x^(R|~P))+M[7]+1126891415&4294967295,U=R+(N<<10&4294967295|N>>>22),N=P+(R^(U|~x))+M[14]+2878612391&4294967295,P=U+(N<<15&4294967295|N>>>17),N=x+(U^(P|~R))+M[5]+4237533241&4294967295,x=P+(N<<21&4294967295|N>>>11),N=R+(P^(x|~U))+M[12]+1700485571&4294967295,R=x+(N<<6&4294967295|N>>>26),N=U+(x^(R|~P))+M[3]+2399980690&4294967295,U=R+(N<<10&4294967295|N>>>22),N=P+(R^(U|~x))+M[10]+4293915773&4294967295,P=U+(N<<15&4294967295|N>>>17),N=x+(U^(P|~R))+M[1]+2240044497&4294967295,x=P+(N<<21&4294967295|N>>>11),N=R+(P^(x|~U))+M[8]+1873313359&4294967295,R=x+(N<<6&4294967295|N>>>26),N=U+(x^(R|~P))+M[15]+4264355552&4294967295,U=R+(N<<10&4294967295|N>>>22),N=P+(R^(U|~x))+M[6]+2734768916&4294967295,P=U+(N<<15&4294967295|N>>>17),N=x+(U^(P|~R))+M[13]+1309151649&4294967295,x=P+(N<<21&4294967295|N>>>11),N=R+(P^(x|~U))+M[4]+4149444226&4294967295,R=x+(N<<6&4294967295|N>>>26),N=U+(x^(R|~P))+M[11]+3174756917&4294967295,U=R+(N<<10&4294967295|N>>>22),N=P+(R^(U|~x))+M[2]+718787259&4294967295,P=U+(N<<15&4294967295|N>>>17),N=x+(U^(P|~R))+M[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(P+(N<<21&4294967295|N>>>11))&4294967295,D.g[2]=D.g[2]+P&4294967295,D.g[3]=D.g[3]+U&4294967295}s.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var x=R-this.blockSize,M=this.B,P=this.h,U=0;U<R;){if(P==0)for(;U<=x;)o(this,D,U),U+=this.blockSize;if(typeof D=="string"){for(;U<R;)if(M[P++]=D.charCodeAt(U++),P==this.blockSize){o(this,M),P=0;break}}else for(;U<R;)if(M[P++]=D[U++],P==this.blockSize){o(this,M),P=0;break}}this.h=P,this.o+=R},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var x=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=x&255,x/=256;for(this.u(D),D=Array(16),R=x=0;4>R;++R)for(var M=0;32>M;M+=8)D[x++]=this.g[R]>>>M&255;return D};function u(D,R){var x=p;return Object.prototype.hasOwnProperty.call(x,D)?x[D]:x[D]=R(D)}function h(D,R){this.h=R;for(var x=[],M=!0,P=D.length-1;0<=P;P--){var U=D[P]|0;M&&U==R||(x[P]=U,M=!1)}this.g=x}var p={};function m(D){return-128<=D&&128>D?u(D,function(R){return new h([R|0],0>R?-1:0)}):new h([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return b;if(0>D)return B(g(-D));for(var R=[],x=1,M=0;D>=x;M++)R[M]=D/x|0,x*=4294967296;return new h(R,0)}function v(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return B(v(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=g(Math.pow(R,8)),M=b,P=0;P<D.length;P+=8){var U=Math.min(8,D.length-P),N=parseInt(D.substring(P,P+U),R);8>U?(U=g(Math.pow(R,U)),M=M.j(U).add(g(N))):(M=M.j(x),M=M.add(g(N)))}return M}var b=m(0),S=m(1),I=m(16777216);r=h.prototype,r.m=function(){if($(this))return-B(this).m();for(var D=0,R=1,x=0;x<this.g.length;x++){var M=this.i(x);D+=(0<=M?M:4294967296+M)*R,R*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(L(this))return"0";if($(this))return"-"+B(this).toString(D);for(var R=g(Math.pow(D,6)),x=this,M="";;){var P=ue(x,R).g;x=ee(x,P.j(R));var U=((0<x.g.length?x.g[0]:x.h)>>>0).toString(D);if(x=P,L(x))return U+M;for(;6>U.length;)U="0"+U;M=U+M}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function L(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function $(D){return D.h==-1}r.l=function(D){return D=ee(this,D),$(D)?-1:L(D)?0:1};function B(D){for(var R=D.g.length,x=[],M=0;M<R;M++)x[M]=~D.g[M];return new h(x,~D.h).add(S)}r.abs=function(){return $(this)?B(this):this},r.add=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],M=0,P=0;P<=R;P++){var U=M+(this.i(P)&65535)+(D.i(P)&65535),N=(U>>>16)+(this.i(P)>>>16)+(D.i(P)>>>16);M=N>>>16,U&=65535,N&=65535,x[P]=N<<16|U}return new h(x,x[x.length-1]&-2147483648?-1:0)};function ee(D,R){return D.add(B(R))}r.j=function(D){if(L(this)||L(D))return b;if($(this))return $(D)?B(this).j(B(D)):B(B(this).j(D));if($(D))return B(this.j(B(D)));if(0>this.l(I)&&0>D.l(I))return g(this.m()*D.m());for(var R=this.g.length+D.g.length,x=[],M=0;M<2*R;M++)x[M]=0;for(M=0;M<this.g.length;M++)for(var P=0;P<D.g.length;P++){var U=this.i(M)>>>16,N=this.i(M)&65535,Dt=D.i(P)>>>16,at=D.i(P)&65535;x[2*M+2*P]+=N*at,W(x,2*M+2*P),x[2*M+2*P+1]+=U*at,W(x,2*M+2*P+1),x[2*M+2*P+1]+=N*Dt,W(x,2*M+2*P+1),x[2*M+2*P+2]+=U*Dt,W(x,2*M+2*P+2)}for(M=0;M<R;M++)x[M]=x[2*M+1]<<16|x[2*M];for(M=R;M<2*R;M++)x[M]=0;return new h(x,0)};function W(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function ie(D,R){this.g=D,this.h=R}function ue(D,R){if(L(R))throw Error("division by zero");if(L(D))return new ie(b,b);if($(D))return R=ue(B(D),R),new ie(B(R.g),B(R.h));if($(R))return R=ue(D,B(R)),new ie(B(R.g),R.h);if(30<D.g.length){if($(D)||$(R))throw Error("slowDivide_ only works with positive integers.");for(var x=S,M=R;0>=M.l(D);)x=ce(x),M=ce(M);var P=de(x,1),U=de(M,1);for(M=de(M,2),x=de(x,2);!L(M);){var N=U.add(M);0>=N.l(D)&&(P=P.add(x),U=N),M=de(M,1),x=de(x,1)}return R=ee(D,P.j(R)),new ie(P,R)}for(P=b;0<=D.l(R);){for(x=Math.max(1,Math.floor(D.m()/R.m())),M=Math.ceil(Math.log(x)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),U=g(x),N=U.j(R);$(N)||0<N.l(D);)x-=M,U=g(x),N=U.j(R);L(U)&&(U=S),P=P.add(U),D=ee(D,N)}return new ie(P,D)}r.A=function(D){return ue(this,D).h},r.and=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],M=0;M<R;M++)x[M]=this.i(M)&D.i(M);return new h(x,this.h&D.h)},r.or=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],M=0;M<R;M++)x[M]=this.i(M)|D.i(M);return new h(x,this.h|D.h)},r.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],M=0;M<R;M++)x[M]=this.i(M)^D.i(M);return new h(x,this.h^D.h)};function ce(D){for(var R=D.g.length+1,x=[],M=0;M<R;M++)x[M]=D.i(M)<<1|D.i(M-1)>>>31;return new h(x,D.h)}function de(D,R){var x=R>>5;R%=32;for(var M=D.g.length-x,P=[],U=0;U<M;U++)P[U]=0<R?D.i(U+x)>>>R|D.i(U+x+1)<<32-R:D.i(U+x);return new h(P,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Lb=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=v,ys=h}).apply(typeof GE<"u"?GE:typeof self<"u"?self:typeof window<"u"?window:{});var Vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ub,bu,jb,Jh,ng,zb,qb,Bb;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,_){return c==Array.prototype||c==Object.prototype||(c[y]=_.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vh=="object"&&Vh];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(c,y){if(y)e:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var j=c[A];if(!(j in _))break e;_=_[j]}c=c[c.length-1],A=_[c],y=y(A),y!=A&&y!=null&&e(_,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var _=0,A=!1,j={next:function(){if(!A&&_<c.length){var Q=_++;return{value:y(Q,c[Q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function m(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function v(c,y,_){return c.call.apply(c.bind,arguments)}function b(c,y,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,A),c.apply(y,j)}}return function(){return c.apply(y,arguments)}}function S(c,y,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:b,S.apply(null,arguments)}function I(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function L(c,y){function _(){}_.prototype=y.prototype,c.aa=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,j,Q){for(var oe=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)oe[Ue-2]=arguments[Ue];return y.prototype[j].apply(A,oe)}}function $(c){const y=c.length;if(0<y){const _=Array(y);for(let A=0;A<y;A++)_[A]=c[A];return _}return[]}function B(c,y){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(m(A)){const j=c.length||0,Q=A.length||0;c.length=j+Q;for(let oe=0;oe<Q;oe++)c[j+oe]=A[oe]}else c.push(A)}}class ee{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function W(c){return/^[\s\xa0]*$/.test(c)}function ie(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function ue(c){return ue[" "](c),c}ue[" "]=function(){};var ce=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function de(c,y,_){for(const A in c)y.call(_,c[A],A,c)}function D(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function R(c){const y={};for(const _ in c)y[_]=c[_];return y}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(c,y){let _,A;for(let j=1;j<arguments.length;j++){A=arguments[j];for(_ in A)c[_]=A[_];for(let Q=0;Q<x.length;Q++)_=x[Q],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function P(c){var y=1;c=c.split(":");const _=[];for(;0<y&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function U(c){p.setTimeout(()=>{throw c},0)}function N(){var c=Ie;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Dt{constructor(){this.h=this.g=null}add(y,_){const A=at.get();A.set(y,_),this.h?this.h.next=A:this.g=A,this.h=A}}var at=new ee(()=>new K,c=>c.reset());class K{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let le,me=!1,Ie=new Dt,O=()=>{const c=p.Promise.resolve(void 0);le=()=>{c.then(re)}};var re=()=>{for(var c;c=N();){try{c.h.call(c.g)}catch(_){U(_)}var y=at;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}me=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};p.addEventListener("test",_,y),p.removeEventListener("test",_,y)}catch{}return c}();function xe(c,y){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(ce){e:{try{ue(y.nodeName);var j=!0;break e}catch{}j=!1}j||(y=null)}}else _=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&xe.aa.h.call(this)}}L(xe,se);var ve={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),Be=0;function Ut(c,y,_,A,j){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!A,this.ha=j,this.key=++Be,this.da=this.fa=!1}function Pn(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function yn(c){this.src=c,this.g={},this.h=0}yn.prototype.add=function(c,y,_,A,j){var Q=c.toString();c=this.g[Q],c||(c=this.g[Q]=[],this.h++);var oe=Ns(c,y,A,j);return-1<oe?(y=c[oe],_||(y.fa=!1)):(y=new Ut(y,this.src,Q,!!A,j),y.fa=_,c.push(y)),y};function nn(c,y){var _=y.type;if(_ in c.g){var A=c.g[_],j=Array.prototype.indexOf.call(A,y,void 0),Q;(Q=0<=j)&&Array.prototype.splice.call(A,j,1),Q&&(Pn(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Ns(c,y,_,A){for(var j=0;j<c.length;++j){var Q=c[j];if(!Q.da&&Q.listener==y&&Q.capture==!!_&&Q.ha==A)return j}return-1}var Os="closure_lm_"+(1e6*Math.random()|0),ll={};function lc(c,y,_,A,j){if(Array.isArray(y)){for(var Q=0;Q<y.length;Q++)lc(c,y[Q],_,A,j);return null}return _=uc(_),c&&c[ct]?c.K(y,_,g(A)?!!A.capture:!1,j):Vn(c,y,_,!1,A,j)}function Vn(c,y,_,A,j,Q){if(!y)throw Error("Invalid event type");var oe=g(j)?!!j.capture:!!j,Ue=Pa(c);if(Ue||(c[Os]=Ue=new yn(c)),_=Ue.add(y,_,A,oe,Q),_.proxy)return _;if(A=hd(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)ge||(j=oe),j===void 0&&(j=!1),c.addEventListener(y.toString(),A,j);else if(c.attachEvent)c.attachEvent(ks(y.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function hd(){function c(_){return y.call(c.src,c.listener,_)}const y=fd;return c}function ul(c,y,_,A,j){if(Array.isArray(y))for(var Q=0;Q<y.length;Q++)ul(c,y[Q],_,A,j);else A=g(A)?!!A.capture:!!A,_=uc(_),c&&c[ct]?(c=c.i,y=String(y).toString(),y in c.g&&(Q=c.g[y],_=Ns(Q,_,A,j),-1<_&&(Pn(Q[_]),Array.prototype.splice.call(Q,_,1),Q.length==0&&(delete c.g[y],c.h--)))):c&&(c=Pa(c))&&(y=c.g[y.toString()],c=-1,y&&(c=Ns(y,_,A,j)),(_=-1<c?y[c]:null)&&Ma(_))}function Ma(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[ct])nn(y.i,c);else{var _=c.type,A=c.proxy;y.removeEventListener?y.removeEventListener(_,A,c.capture):y.detachEvent?y.detachEvent(ks(_),A):y.addListener&&y.removeListener&&y.removeListener(A),(_=Pa(y))?(nn(_,c),_.h==0&&(_.src=null,y[Os]=null)):Pn(c)}}}function ks(c){return c in ll?ll[c]:ll[c]="on"+c}function fd(c,y){if(c.da)c=!0;else{y=new xe(y,this);var _=c.listener,A=c.ha||c.src;c.fa&&Ma(c),c=_.call(A,y)}return c}function Pa(c){return c=c[Os],c instanceof yn?c:null}var cl="__closure_events_fn_"+(1e9*Math.random()>>>0);function uc(c){return typeof c=="function"?c:(c[cl]||(c[cl]=function(y){return c.handleEvent(y)}),c[cl])}function dt(){ae.call(this),this.i=new yn(this),this.M=this,this.F=null}L(dt,ae),dt.prototype[ct]=!0,dt.prototype.removeEventListener=function(c,y,_,A){ul(this,c,y,_,A)};function Qe(c,y){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=y.type||y,typeof y=="string")y=new se(y,c);else if(y instanceof se)y.target=y.target||c;else{var j=y;y=new se(A,c),M(y,j)}if(j=!0,_)for(var Q=_.length-1;0<=Q;Q--){var oe=y.g=_[Q];j=wn(oe,A,!0,y)&&j}if(oe=y.g=c,j=wn(oe,A,!0,y)&&j,j=wn(oe,A,!1,y)&&j,_)for(Q=0;Q<_.length;Q++)oe=y.g=_[Q],j=wn(oe,A,!1,y)&&j}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var _=c.g[y],A=0;A<_.length;A++)Pn(_[A]);delete c.g[y],c.h--}}this.F=null},dt.prototype.K=function(c,y,_,A){return this.i.add(String(c),y,!1,_,A)},dt.prototype.L=function(c,y,_,A){return this.i.add(String(c),y,!0,_,A)};function wn(c,y,_,A){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var j=!0,Q=0;Q<y.length;++Q){var oe=y[Q];if(oe&&!oe.da&&oe.capture==_){var Ue=oe.listener,Ot=oe.ha||oe.src;oe.fa&&nn(c.i,oe),j=Ue.call(Ot,A)!==!1&&j}}return j&&!A.defaultPrevented}function rn(c,y,_){if(typeof c=="function")_&&(c=S(c,_));else if(c&&typeof c.handleEvent=="function")c=S(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:p.setTimeout(c,y||0)}function cc(c){c.g=rn(()=>{c.g=null,c.i&&(c.i=!1,cc(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class dd extends ae{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:cc(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ms(c){ae.call(this),this.h=c,this.g={}}L(Ms,ae);var Ps=[];function Vs(c){de(c.g,function(y,_){this.g.hasOwnProperty(_)&&Ma(y)},c),c.g={}}Ms.prototype.N=function(){Ms.aa.N.call(this),Vs(this)},Ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jn=p.JSON.stringify,Va=p.JSON.parse,Ls=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function hl(){}hl.prototype.h=null;function fl(c){return c.h||(c.h=c.i())}function dl(){}var Hr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fr(){se.call(this,"d")}L(Fr,se);function pl(){se.call(this,"c")}L(pl,se);var mr={},ml=null;function Ni(){return ml=ml||new dt}mr.La="serverreachability";function La(c){se.call(this,mr.La,c)}L(La,se);function Oi(c){const y=Ni();Qe(y,new La(y))}mr.STAT_EVENT="statevent";function hc(c,y){se.call(this,mr.STAT_EVENT,c),this.stat=y}L(hc,se);function ot(c){const y=Ni();Qe(y,new hc(y,c))}mr.Ma="timingevent";function Nt(c,y){se.call(this,mr.Ma,c),this.size=y}L(Nt,se);function Tt(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},y)}function Ln(){this.g=!0}Ln.prototype.xa=function(){this.g=!1};function gl(c,y,_,A,j,Q){c.info(function(){if(c.g)if(Q)for(var oe="",Ue=Q.split("&"),Ot=0;Ot<Ue.length;Ot++){var je=Ue[Ot].split("=");if(1<je.length){var zt=je[0];je=je[1];var kt=zt.split("_");oe=2<=kt.length&&kt[1]=="type"?oe+(zt+"="+je+"&"):oe+(zt+"=redacted&")}}else oe=null;else oe=Q;return"XMLHTTP REQ ("+A+") [attempt "+j+"]: "+y+`
`+_+`
`+oe})}function pd(c,y,_,A,j,Q,oe){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+j+"]: "+y+`
`+_+`
`+Q+" "+oe})}function ki(c,y,_,A){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Us(c,_)+(A?" "+A:"")})}function fc(c,y){c.info(function(){return"TIMEOUT: "+y})}Ln.prototype.info=function(){};function Us(c,y){if(!c.g)return y;if(!y)return null;try{var _=JSON.parse(y);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var j=A[1];if(Array.isArray(j)&&!(1>j.length)){var Q=j[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var oe=1;oe<j.length;oe++)j[oe]=""}}}}return Jn(_)}catch{return y}}var Mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$r={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gr;function yr(){}L(yr,hl),yr.prototype.g=function(){return new XMLHttpRequest},yr.prototype.i=function(){return{}},gr=new yr;function dn(c,y,_,A){this.j=c,this.i=y,this.l=_,this.R=A||1,this.U=new Ms(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}var yl={},Ua={};function er(c,y,_){c.L=1,c.v=Hs(Sn(y)),c.m=_,c.P=!0,Gr(c,null)}function Gr(c,y){c.F=Date.now(),js(c),c.A=Sn(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),wl(_.i,"t",A),c.C=0,_=c.j.J,c.h=new yt,c.g=Ic(c.j,_?y:null,!c.m),0<c.O&&(c.M=new dd(S(c.Y,c,c.g),c.O)),y=c.U,_=c.g,A=c.ca;var j="readystatechange";Array.isArray(j)||(j&&(Ps[0]=j.toString()),j=Ps);for(var Q=0;Q<j.length;Q++){var oe=lc(_,j[Q],A||y.handleEvent,!1,y.h||y);if(!oe)break;y.g[oe.key]=oe}y=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),Oi(),gl(c.i,c.u,c.A,c.l,c.R,c.m)}dn.prototype.ca=function(c){c=c.target;const y=this.M;y&&qn(c)==3?y.j():this.Y(c)},dn.prototype.Y=function(c){try{if(c==this.g)e:{const kt=qn(this.g);var y=this.g.Ba();const ei=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||Ec(this.g)))){this.J||kt!=4||y==7||(y==8||0>=ei?Oi(3):Oi(2)),Pi(this);var _=this.g.Z();this.X=_;t:if(dc(this)){var A=Ec(this.g);c="";var j=A.length,Q=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),_r(this);var oe="";break t}this.h.i=new p.TextDecoder}for(y=0;y<j;y++)this.h.h=!0,c+=this.h.i.decode(A[y],{stream:!(Q&&y==j-1)});A.length=0,this.h.g+=c,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=_==200,pd(this.i,this.u,this.A,this.l,this.R,kt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,Ot=this.g;if((Ue=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(Ue)){var je=Ue;break t}}je=null}if(_=je)ki(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zs(this,_);else{this.o=!1,this.s=3,ot(12),Yt(this),_r(this);break e}}if(this.P){_=!0;let Qt;for(;!this.J&&this.C<oe.length;)if(Qt=pc(this,oe),Qt==Ua){kt==4&&(this.s=4,ot(14),_=!1),ki(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==yl){this.s=4,ot(15),ki(this.i,this.l,oe,"[Invalid Chunk]"),_=!1;break}else ki(this.i,this.l,Qt,null),zs(this,Qt);if(dc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||oe.length!=0||this.h.h||(this.s=1,ot(16),_=!1),this.o=this.o&&_,!_)ki(this.i,this.l,oe,"[Invalid Chunked Response]"),Yt(this),_r(this);else if(0<oe.length&&!this.W){this.W=!0;var zt=this.j;zt.g==this&&zt.ba&&!zt.M&&(zt.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),Ws(zt),zt.M=!0,ot(11))}}else ki(this.i,this.l,oe,null),zs(this,oe);kt==4&&Yt(this),this.o&&!this.J&&(kt==4?Ac(this.j,this):(this.o=!1,js(this)))}else vd(this.g),_==400&&0<oe.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),Yt(this),_r(this)}}}catch{}finally{}};function dc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function pc(c,y){var _=c.C,A=y.indexOf(`
`,_);return A==-1?Ua:(_=Number(y.substring(_,A)),isNaN(_)?yl:(A+=1,A+_>y.length?Ua:(y=y.slice(A,A+_),c.C=A+_,y)))}dn.prototype.cancel=function(){this.J=!0,Yt(this)};function js(c){c.S=Date.now()+c.I,mc(c,c.I)}function mc(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Tt(S(c.ba,c),y)}function Pi(c){c.B&&(p.clearTimeout(c.B),c.B=null)}dn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(fc(this.i,this.A),this.L!=2&&(Oi(),ot(17)),Yt(this),this.s=2,_r(this)):mc(this,this.S-c)};function _r(c){c.j.G==0||c.J||Ac(c.j,c)}function Yt(c){Pi(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,Vs(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function zs(c,y){try{var _=c.j;if(_.G!=0&&(_.g==c||_l(_.h,c))){if(!c.K&&_l(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var j=A;if(j[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Xa(_),Qa(_);else break e;Il(_),ot(18)}}else _.za=j[1],0<_.za-_.T&&37500>j[2]&&_.F&&_.v==0&&!_.C&&(_.C=Tt(S(_.Za,_),6e3));if(1>=za(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Jr(_,11)}else if((c.K||_.g==c)&&Xa(_),!W(y))for(j=_.Da.g.parse(y),y=0;y<j.length;y++){let je=j[y];if(_.T=je[0],je=je[1],_.G==2)if(je[0]=="c"){_.K=je[1],_.ia=je[2];const zt=je[3];zt!=null&&(_.la=zt,_.j.info("VER="+_.la));const kt=je[4];kt!=null&&(_.Aa=kt,_.j.info("SVER="+_.Aa));const ei=je[5];ei!=null&&typeof ei=="number"&&0<ei&&(A=1.5*ei,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Qt=c.g;if(Qt){const Ar=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ar){var Q=A.h;Q.g||Ar.indexOf("spdy")==-1&&Ar.indexOf("quic")==-1&&Ar.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(qa(Q,Q.h),Q.h=null))}if(A.D){const Dl=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(A.ya=Dl,We(A.I,A.D,Dl))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var oe=c;if(A.qa=xc(A,A.J?A.ia:null,A.W),oe.K){pn(A.h,oe);var Ue=oe,Ot=A.L;Ot&&(Ue.I=Ot),Ue.B&&(Pi(Ue),js(Ue)),A.g=oe}else wc(A);0<_.i.length&&Ka(_)}else je[0]!="stop"&&je[0]!="close"||Jr(_,7);else _.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?Jr(_,7):Rl(_):je[0]!="noop"&&_.l&&_.l.ta(je),_.v=0)}}Oi(4)}catch{}}var gc=class{constructor(c,y){this.g=c,this.map=y}};function Yr(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ja(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function za(c){return c.h?1:c.g?c.g.size:0}function _l(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function qa(c,y){c.g?c.g.add(y):c.h=y}function pn(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Yr.prototype.cancel=function(){if(this.i=vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function vl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.D);return y}return $(c.i)}function md(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var y=[],_=c.length,A=0;A<_;A++)y.push(c[A]);return y}y=[],_=0;for(A in c)y[_++]=c[A];return y}function Ba(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var y=[];c=c.length;for(var _=0;_<c;_++)y.push(_);return y}y=[],_=0;for(const A in c)y[_++]=A;return y}}}function El(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var _=Ba(c),A=md(c),j=A.length,Q=0;Q<j;Q++)y.call(void 0,A[Q],_&&_[Q],c)}var qs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gd(c,y){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),j=null;if(0<=A){var Q=c[_].substring(0,A);j=c[_].substring(A+1)}else Q=c[_];y(Q,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function bt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof bt){this.h=c.h,Bs(this,c.j),this.o=c.o,this.g=c.g,Vi(this,c.s),this.l=c.l;var y=c.i,_=new Kr;_.i=y.i,y.g&&(_.g=new Map(y.g),_.h=y.h),Qr(this,_),this.m=c.m}else c&&(y=String(c).match(qs))?(this.h=!1,Bs(this,y[1]||"",!0),this.o=Un(y[2]||""),this.g=Un(y[3]||"",!0),Vi(this,y[4]),this.l=Un(y[5]||"",!0),Qr(this,y[6]||"",!0),this.m=Un(y[7]||"")):(this.h=!1,this.i=new Kr(null,this.h))}bt.prototype.toString=function(){var c=[],y=this.j;y&&c.push(Fs(y,Tl,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Fs(y,Tl,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Fs(_,_.charAt(0)=="/"?yd:bl,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Fs(_,Ha)),c.join("")};function Sn(c){return new bt(c)}function Bs(c,y,_){c.j=_?Un(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Vi(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function Qr(c,y,_){y instanceof Kr?(c.i=y,_c(c.i,c.h)):(_||(y=Fs(y,_d)),c.i=new Kr(y,c.h))}function We(c,y,_){c.i.set(y,_)}function Hs(c){return We(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Un(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Fs(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,yc),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function yc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Tl=/[#\/\?@]/g,bl=/[#\?:]/g,yd=/[#\?]/g,_d=/[#\?@]/g,Ha=/#/g;function Kr(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function jn(c){c.g||(c.g=new Map,c.h=0,c.i&&gd(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}r=Kr.prototype,r.add=function(c,y){jn(this),this.i=null,c=vr(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function Xr(c,y){jn(c),y=vr(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Wr(c,y){return jn(c),y=vr(c,y),c.g.has(y)}r.forEach=function(c,y){jn(this),this.g.forEach(function(_,A){_.forEach(function(j){c.call(y,j,A,this)},this)},this)},r.na=function(){jn(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),_=[];for(let A=0;A<y.length;A++){const j=c[A];for(let Q=0;Q<j.length;Q++)_.push(y[A])}return _},r.V=function(c){jn(this);let y=[];if(typeof c=="string")Wr(this,c)&&(y=y.concat(this.g.get(vr(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)y=y.concat(c[_])}return y},r.set=function(c,y){return jn(this),this.i=null,c=vr(this,c),Wr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},r.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function wl(c,y,_){Xr(c,y),0<_.length&&(c.i=null,c.g.set(vr(c,y),$(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var _=0;_<y.length;_++){var A=y[_];const Q=encodeURIComponent(String(A)),oe=this.V(A);for(A=0;A<oe.length;A++){var j=Q;oe[A]!==""&&(j+="="+encodeURIComponent(String(oe[A]))),c.push(j)}}return this.i=c.join("&")};function vr(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function _c(c,y){y&&!c.j&&(jn(c),c.i=null,c.g.forEach(function(_,A){var j=A.toLowerCase();A!=j&&(Xr(this,A),wl(this,j,_))},c)),c.j=y}function $s(c,y){const _=new Ln;if(p.Image){const A=new Image;A.onload=I(zn,_,"TestLoadImage: loaded",!0,y,A),A.onerror=I(zn,_,"TestLoadImage: error",!1,y,A),A.onabort=I(zn,_,"TestLoadImage: abort",!1,y,A),A.ontimeout=I(zn,_,"TestLoadImage: timeout",!1,y,A),p.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else y(!1)}function tr(c,y){const _=new Ln,A=new AbortController,j=setTimeout(()=>{A.abort(),zn(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:A.signal}).then(Q=>{clearTimeout(j),Q.ok?zn(_,"TestPingServer: ok",!0,y):zn(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(j),zn(_,"TestPingServer: error",!1,y)})}function zn(c,y,_,A,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),A(_)}catch{}}function Gs(){this.g=new Ls}function Er(c,y,_){const A=_||"";try{El(c,function(j,Q){let oe=j;g(j)&&(oe=Jn(j)),y.push(A+Q+"="+encodeURIComponent(oe))})}catch(j){throw y.push(A+"type="+encodeURIComponent("_badmap")),j}}function Li(c){this.l=c.Ub||null,this.j=c.eb||!1}L(Li,hl),Li.prototype.g=function(){return new Zr(this.l,this.j)},Li.prototype.i=function(c){return function(){return c}}({});function Zr(c,y){dt.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(Zr,dt),r=Zr.prototype,r.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,br(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||p).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?Tr(this):br(this),this.readyState==3&&Sl(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Tr(this))},r.Qa=function(c){this.g&&(this.response=c,Tr(this))},r.ga=function(){this.g&&Tr(this)};function Tr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,br(c)}r.setRequestHeader=function(c,y){this.u.append(c,y)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function br(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Al(c){let y="";return de(c,function(_,A){y+=A,y+=":",y+=_,y+=`\r
`}),y}function jt(c,y,_){e:{for(A in _){var A=!1;break e}A=!0}A||(_=Al(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):We(c,y,_))}function $e(c){dt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L($e,dt);var Fa=/^https?$/i,Ys=["POST","PUT"];r=$e.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,y,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gr.g(),this.v=this.o?fl(this.o):fl(gr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(Q){vc(this,Q);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var j in A)_.set(j,A[j]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Q of A.keys())_.set(Q,A.get(Q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(Q=>Q.toLowerCase()=="content-type"),j=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Ys,y,void 0))||A||j||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,oe]of _)this.g.setRequestHeader(Q,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qs(this),this.u=!0,this.g.send(c),this.u=!1}catch(Q){vc(this,Q)}};function vc(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,$a(c),wr(c)}function $a(c){c.A||(c.A=!0,Qe(c,"complete"),Qe(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Qe(this,"complete"),Qe(this,"abort"),wr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wr(this,!0)),$e.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ga(this):this.bb())},r.bb=function(){Ga(this)};function Ga(c){if(c.h&&typeof h<"u"&&(!c.v[1]||qn(c)!=4||c.Z()!=2)){if(c.u&&qn(c)==4)rn(c.Ea,0,c);else if(Qe(c,"readystatechange"),qn(c)==4){c.h=!1;try{const oe=c.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var _;if(!(_=y)){var A;if(A=oe===0){var j=String(c.D).match(qs)[1]||null;!j&&p.self&&p.self.location&&(j=p.self.location.protocol.slice(0,-1)),A=!Fa.test(j?j.toLowerCase():"")}_=A}if(_)Qe(c,"complete"),Qe(c,"success");else{c.m=6;try{var Q=2<qn(c)?c.g.statusText:""}catch{Q=""}c.l=Q+" ["+c.Z()+"]",$a(c)}}finally{wr(c)}}}}function wr(c,y){if(c.g){Qs(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Qe(c,"ready");try{_.onreadystatechange=A}catch{}}}function Qs(c){c.I&&(p.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function qn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),Va(y)}};function Ec(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function vd(c){const y={};c=(c.g&&2<=qn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(W(c[A]))continue;var _=P(c[A]);const j=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const Q=y[j]||[];y[j]=Q,Q.push(_)}D(y,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ks(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function Ya(c){this.Aa=0,this.i=[],this.j=new Ln,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ks("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ks("baseRetryDelayMs",5e3,c),this.cb=Ks("retryDelaySeedMs",1e4,c),this.Wa=Ks("forwardChannelMaxRetries",2,c),this.wa=Ks("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Yr(c&&c.concurrentRequestLimit),this.Da=new Gs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ya.prototype,r.la=8,r.G=1,r.connect=function(c,y,_,A){ot(0),this.W=c,this.H=y||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=xc(this,null,this.W),Ka(this)};function Rl(c){if(Tc(c),c.G==3){var y=c.U++,_=Sn(c.I);if(We(_,"SID",c.K),We(_,"RID",y),We(_,"TYPE","terminate"),Xs(c,_),y=new dn(c,c.j,y),y.L=2,y.v=Hs(Sn(_)),_=!1,p.navigator&&p.navigator.sendBeacon)try{_=p.navigator.sendBeacon(y.v.toString(),"")}catch{}!_&&p.Image&&(new Image().src=y.v,_=!0),_||(y.g=Ic(y.j,null),y.g.ea(y.v)),y.F=Date.now(),js(y)}Rc(c)}function Qa(c){c.g&&(Ws(c),c.g.cancel(),c.g=null)}function Tc(c){Qa(c),c.u&&(p.clearTimeout(c.u),c.u=null),Xa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function Ka(c){if(!ja(c.h)&&!c.s){c.s=!0;var y=c.Ga;le||O(),me||(le(),me=!0),Ie.add(y,c),c.B=0}}function Ed(c,y){return za(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Tt(S(c.Ga,c,y),Cl(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const j=new dn(this,this.j,c);let Q=this.o;if(this.S&&(Q?(Q=R(Q),M(Q,this.S)):Q=this.S),this.m!==null||this.O||(j.H=Q,Q=null),this.P)e:{for(var y=0,_=0;_<this.i.length;_++){t:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=_;break e}if(y===4096||_===this.i.length-1){y=_+1;break e}}y=1e3}else y=1e3;y=bc(this,j,y),_=Sn(this.I),We(_,"RID",c),We(_,"CVER",22),this.D&&We(_,"X-HTTP-Session-Id",this.D),Xs(this,_),Q&&(this.O?y="headers="+encodeURIComponent(String(Al(Q)))+"&"+y:this.m&&jt(_,this.m,Q)),qa(this.h,j),this.Ua&&We(_,"TYPE","init"),this.P?(We(_,"$req",y),We(_,"SID","null"),j.T=!0,er(j,_,null)):er(j,_,y),this.G=2}}else this.G==3&&(c?xl(this,c):this.i.length==0||ja(this.h)||xl(this))};function xl(c,y){var _;y?_=y.l:_=c.U++;const A=Sn(c.I);We(A,"SID",c.K),We(A,"RID",_),We(A,"AID",c.T),Xs(c,A),c.m&&c.o&&jt(A,c.m,c.o),_=new dn(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),y&&(c.i=y.D.concat(c.i)),y=bc(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),qa(c.h,_),er(_,A,y)}function Xs(c,y){c.H&&de(c.H,function(_,A){We(y,A,_)}),c.l&&El({},function(_,A){We(y,A,_)})}function bc(c,y,_){_=Math.min(c.i.length,_);var A=c.l?S(c.l.Na,c.l,c):null;e:{var j=c.i;let Q=-1;for(;;){const oe=["count="+_];Q==-1?0<_?(Q=j[0].g,oe.push("ofs="+Q)):Q=0:oe.push("ofs="+Q);let Ue=!0;for(let Ot=0;Ot<_;Ot++){let je=j[Ot].g;const zt=j[Ot].map;if(je-=Q,0>je)Q=Math.max(0,j[Ot].g-100),Ue=!1;else try{Er(zt,oe,"req"+je+"_")}catch{A&&A(zt)}}if(Ue){A=oe.join("&");break e}}}return c=c.i.splice(0,_),y.D=c,A}function wc(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;le||O(),me||(le(),me=!0),Ie.add(y,c),c.v=0}}function Il(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Tt(S(c.Fa,c),Cl(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Sc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Tt(S(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Qa(this),Sc(this))};function Ws(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function Sc(c){c.g=new dn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=Sn(c.qa);We(y,"RID","rpc"),We(y,"SID",c.K),We(y,"AID",c.T),We(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&We(y,"TO",c.ja),We(y,"TYPE","xmlhttp"),Xs(c,y),c.m&&c.o&&jt(y,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Hs(Sn(y)),_.m=null,_.P=!0,Gr(_,c)}r.Za=function(){this.C!=null&&(this.C=null,Qa(this),Il(this),ot(19))};function Xa(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function Ac(c,y){var _=null;if(c.g==y){Xa(c),Ws(c),c.g=null;var A=2}else if(_l(c.h,y))_=y.D,pn(c.h,y),A=1;else return;if(c.G!=0){if(y.o)if(A==1){_=y.m?y.m.length:0,y=Date.now()-y.F;var j=c.B;A=Ni(),Qe(A,new Nt(A,_)),Ka(c)}else wc(c);else if(j=y.s,j==3||j==0&&0<y.X||!(A==1&&Ed(c,y)||A==2&&Il(c)))switch(_&&0<_.length&&(y=c.h,y.i=y.i.concat(_)),j){case 1:Jr(c,5);break;case 4:Jr(c,10);break;case 3:Jr(c,6);break;default:Jr(c,2)}}}function Cl(c,y){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*y}function Jr(c,y){if(c.j.info("Error code "+y),y==2){var _=S(c.fb,c),A=c.Xa;const j=!A;A=new bt(A||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Bs(A,"https"),Hs(A),j?$s(A.toString(),_):tr(A.toString(),_)}else ot(2);c.G=0,c.l&&c.l.sa(y),Rc(c),Tc(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Rc(c){if(c.G=0,c.ka=[],c.l){const y=vl(c.h);(y.length!=0||c.i.length!=0)&&(B(c.ka,y),B(c.ka,c.i),c.h.i.length=0,$(c.i),c.i.length=0),c.l.ra()}}function xc(c,y,_){var A=_ instanceof bt?Sn(_):new bt(_);if(A.g!="")y&&(A.g=y+"."+A.g),Vi(A,A.s);else{var j=p.location;A=j.protocol,y=y?y+"."+j.hostname:j.hostname,j=+j.port;var Q=new bt(null);A&&Bs(Q,A),y&&(Q.g=y),j&&Vi(Q,j),_&&(Q.l=_),A=Q}return _=c.D,y=c.ya,_&&y&&We(A,_,y),We(A,"VER",c.la),Xs(c,A),A}function Ic(c,y,_){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new $e(new Li({eb:_})):new $e(c.pa),y.Ha(c.J),y}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cc(){}r=Cc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Wa(){}Wa.prototype.g=function(c,y){return new mn(c,y)};function mn(c,y){dt.call(this),this.g=new Ya(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!W(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!W(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Sr(this)}L(mn,dt),mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Rl(this.g)},mn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Jn(c),c=_);y.i.push(new gc(y.Ya++,c)),y.G==3&&Ka(y)},mn.prototype.N=function(){this.g.l=null,delete this.j,Rl(this.g),delete this.g,mn.aa.N.call(this)};function Dc(c){Fr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const _ in y){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}L(Dc,Fr);function Nc(){pl.call(this),this.status=1}L(Nc,pl);function Sr(c){this.g=c}L(Sr,Cc),Sr.prototype.ua=function(){Qe(this.g,"a")},Sr.prototype.ta=function(c){Qe(this.g,new Dc(c))},Sr.prototype.sa=function(c){Qe(this.g,new Nc)},Sr.prototype.ra=function(){Qe(this.g,"b")},Wa.prototype.createWebChannel=Wa.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,Bb=function(){return new Wa},qb=function(){return Ni()},zb=mr,ng={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mi.NO_ERROR=0,Mi.TIMEOUT=8,Mi.HTTP_ERROR=6,Jh=Mi,$r.COMPLETE="complete",jb=$r,dl.EventType=Hr,Hr.OPEN="a",Hr.CLOSE="b",Hr.ERROR="c",Hr.MESSAGE="d",dt.prototype.listen=dt.prototype.K,bu=dl,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,Ub=$e}).apply(typeof Vh<"u"?Vh:typeof self<"u"?self:typeof window<"u"?window:{});const YE="@firebase/firestore",QE="4.9.0";/**
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
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
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
 */const Ra=new kg("@firebase/firestore");function Io(){return Ra.logLevel}function fe(r,...e){if(Ra.logLevel<=Pe.DEBUG){const t=e.map(Fg);Ra.debug(`Firestore (${rl}): ${r}`,...t)}}function xi(r,...e){if(Ra.logLevel<=Pe.ERROR){const t=e.map(Fg);Ra.error(`Firestore (${rl}): ${r}`,...t)}}function Fo(r,...e){if(Ra.logLevel<=Pe.WARN){const t=e.map(Fg);Ra.warn(`Firestore (${rl}): ${r}`,...t)}}function Fg(r){if(typeof r=="string")return r;try{/**
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
 */function we(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Hb(r,s,t)}function Hb(r,e,t){let s=`FIRESTORE (${rl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw xi(s),new Error(s)}function Ye(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||Hb(e,o,s)}function Re(r,e){return r}/**
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
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Ci{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fb{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(cn.UNAUTHENTICATED))}shutdown(){}}class RN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xN{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ye(this.o===void 0,42304);let s=this.i;const o=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let u=new bi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new bi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=u;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},p=m=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new bi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ye(typeof s.accessToken=="string",31837,{l:s}),new Fb(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string",2055,{h:e}),new cn(e)}}class IN{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class CN{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new IN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class KE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ye(this.o===void 0,3512);const s=u=>{u.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,fe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new KE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new KE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function NN(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class $g{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=NN(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ve(r,e){return r<e?-1:r>e?1:0}function rg(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return Dm(o)===Dm(u)?Ve(o,u):Dm(o)?1:-1}return Ve(r.length,e.length)}const ON=55296,kN=57343;function Dm(r){const e=r.charCodeAt(0);return e>=ON&&e<=kN}function $o(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */const XE="__name__";class kr{constructor(e,t,s){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&we(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return kr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=kr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ve(e.length,t.length)}static compareSegments(e,t){const s=kr.isNumericId(e),o=kr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?kr.extractNumericId(e).compare(kr.extractNumericId(t)):rg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ys.fromString(e.substring(4,e.length-2))}}class it extends kr{construct(e,t,s){return new it(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(J.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new it(t)}static emptyPath(){return new it([])}}const MN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class en extends kr{construct(e,t,s){return new en(e,t,s)}static isValidIdentifier(e){return MN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),en.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===XE}static keyField(){return new en([XE])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new he(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new he(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new he(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new he(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new en(t)}static emptyPath(){return new en([])}}/**
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
 */function $b(r,e,t){if(!t)throw new he(J.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function PN(r,e,t,s){if(e===!0&&s===!0)throw new he(J.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function WE(r){if(!_e.isDocumentKey(r))throw new he(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ZE(r){if(_e.isDocumentKey(r))throw new he(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Gb(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Hf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":we(12329,{type:typeof r})}function Mn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new he(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hf(r);throw new he(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function It(r,e){const t={typeString:r};return e&&(t.value=e),t}function nc(r,e){if(!Gb(r))throw new he(J.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new he(J.INVALID_ARGUMENT,t);return!0}/**
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
 */const JE=-62135596800,eT=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*eT);return new nt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<JE)throw new he(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/eT}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(nc(e,nt._jsonSchema))return new nt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-JE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:It("string",nt._jsonSchemaVersion),seconds:It("number"),nanoseconds:It("number")};/**
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
 */const ju=-1;function VN(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(s===1e9?new nt(t+1,0):new nt(t,s));return new vs(o,_e.empty(),e)}function LN(r){return new vs(r.readTime,r.key,ju)}class vs{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new vs(Ae.min(),_e.empty(),ju)}static max(){return new vs(Ae.max(),_e.empty(),ju)}}function UN(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(r.documentKey,e.documentKey),t!==0?t:Ve(r.largestBatchId,e.largestBatchId))}/**
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
 */const jN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function il(r){if(r.code!==J.FAILED_PRECONDITION||r.message!==jN)throw r;fe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ne{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ne((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ne?t:ne.resolve(t)}catch(t){return ne.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ne.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ne.reject(t)}static resolve(e){return new ne((t,s)=>{t(e)})}static reject(e){return new ne((t,s)=>{s(e)})}static waitFor(e){return new ne((t,s)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&t()},m=>s(m))}),h=!0,u===o&&t()})}static or(e){let t=ne.resolve(!1);for(const s of e)t=t.next(o=>o?ne.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new ne((s,o)=>{const u=e.length,h=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;t(e[g]).next(v=>{h[g]=v,++p,p===u&&s(h)},v=>o(v))}})}static doWhile(e,t){return new ne((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function qN(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function sl(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Ff{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ff.ce=-1;/**
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
 */const Gg=-1;function $f(r){return r==null}function vf(r){return r===0&&1/r==-1/0}function BN(r){return typeof r=="number"&&Number.isInteger(r)&&!vf(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Yb="";function HN(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=tT(e)),e=FN(r.get(t),e);return tT(e)}function FN(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case Yb:t+="";break;default:t+=u}}return t}function tT(r){return r+Yb+""}/**
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
 */function nT(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Is(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Qb(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ft{constructor(e,t){this.comparator=e,this.root=t||Jt.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lh(this.root,e,this.comparator,!0)}}class Lh{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Jt.RED,this.left=o??Jt.EMPTY,this.right=u??Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Jt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Jt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1;Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Jt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Lt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rT(this.data.getIterator())}getIteratorFrom(e){return new rT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Lt(this.comparator);return t.data=e,t}}class rT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kn{constructor(e){this.fields=e,e.sort(en.comparator)}static empty(){return new kn([])}unionWith(e){let t=new Lt(en.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new kn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $o(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Kb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Kb("Invalid base64 string: "+u):u}}(e);return new tn(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new tn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tn.EMPTY_BYTE_STRING=new tn("");const $N=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Es(r){if(Ye(!!r,39018),typeof r=="string"){let e=0;const t=$N.exec(r);if(Ye(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Et(r.seconds),nanos:Et(r.nanos)}}function Et(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ts(r){return typeof r=="string"?tn.fromBase64String(r):tn.fromUint8Array(r)}/**
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
 */const Xb="server_timestamp",Wb="__type__",Zb="__previous_value__",Jb="__local_write_time__";function Yg(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Wb])==null?void 0:s.stringValue)===Xb}function Gf(r){const e=r.mapValue.fields[Zb];return Yg(e)?Gf(e):e}function zu(r){const e=Es(r.mapValue.fields[Jb].timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class GN{constructor(e,t,s,o,u,h,p,m,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=v}}const Ef="(default)";class qu{constructor(e,t){this.projectId=e,this.database=t||Ef}static empty(){return new qu("","")}get isDefaultDatabase(){return this.database===Ef}isEqual(e){return e instanceof qu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ew="__type__",YN="__max__",Uh={mapValue:{}},tw="__vector__",Tf="value";function bs(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Yg(r)?4:KN(r)?9007199254740991:QN(r)?10:11:we(28295,{value:r})}function qr(r,e){if(r===e)return!0;const t=bs(r);if(t!==bs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return zu(r).isEqual(zu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Es(o.timestampValue),p=Es(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return Ts(o.bytesValue).isEqual(Ts(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return Et(o.geoPointValue.latitude)===Et(u.geoPointValue.latitude)&&Et(o.geoPointValue.longitude)===Et(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Et(o.integerValue)===Et(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=Et(o.doubleValue),p=Et(u.doubleValue);return h===p?vf(h)===vf(p):isNaN(h)&&isNaN(p)}return!1}(r,e);case 9:return $o(r.arrayValue.values||[],e.arrayValue.values||[],qr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(nT(h)!==nT(p))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(p[m]===void 0||!qr(h[m],p[m])))return!1;return!0}(r,e);default:return we(52216,{left:r})}}function Bu(r,e){return(r.values||[]).find(t=>qr(t,e))!==void 0}function Go(r,e){if(r===e)return 0;const t=bs(r),s=bs(e);if(t!==s)return Ve(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(r.booleanValue,e.booleanValue);case 2:return function(u,h){const p=Et(u.integerValue||u.doubleValue),m=Et(h.integerValue||h.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(r,e);case 3:return iT(r.timestampValue,e.timestampValue);case 4:return iT(zu(r),zu(e));case 5:return rg(r.stringValue,e.stringValue);case 6:return function(u,h){const p=Ts(u),m=Ts(h);return p.compareTo(m)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),m=h.split("/");for(let g=0;g<p.length&&g<m.length;g++){const v=Ve(p[g],m[g]);if(v!==0)return v}return Ve(p.length,m.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const p=Ve(Et(u.latitude),Et(h.latitude));return p!==0?p:Ve(Et(u.longitude),Et(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return sT(r.arrayValue,e.arrayValue);case 10:return function(u,h){var S,I,L,$;const p=u.fields||{},m=h.fields||{},g=(S=p[Tf])==null?void 0:S.arrayValue,v=(I=m[Tf])==null?void 0:I.arrayValue,b=Ve(((L=g==null?void 0:g.values)==null?void 0:L.length)||0,(($=v==null?void 0:v.values)==null?void 0:$.length)||0);return b!==0?b:sT(g,v)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===Uh.mapValue&&h===Uh.mapValue)return 0;if(u===Uh.mapValue)return 1;if(h===Uh.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=h.fields||{},v=Object.keys(g);m.sort(),v.sort();for(let b=0;b<m.length&&b<v.length;++b){const S=rg(m[b],v[b]);if(S!==0)return S;const I=Go(p[m[b]],g[v[b]]);if(I!==0)return I}return Ve(m.length,v.length)}(r.mapValue,e.mapValue);default:throw we(23264,{he:t})}}function iT(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ve(r,e);const t=Es(r),s=Es(e),o=Ve(t.seconds,s.seconds);return o!==0?o:Ve(t.nanos,s.nanos)}function sT(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Go(t[o],s[o]);if(u)return u}return Ve(t.length,s.length)}function Yo(r){return ig(r)}function ig(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=Es(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ts(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return _e.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=ig(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${ig(t.fields[h])}`;return o+"}"}(r.mapValue):we(61005,{value:r})}function ef(r){switch(bs(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gf(r);return e?16+ef(e):16;case 5:return 2*r.stringValue.length;case 6:return Ts(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+ef(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Is(s.fields,(u,h)=>{o+=u.length+ef(h)}),o}(r.mapValue);default:throw we(13486,{value:r})}}function aT(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function sg(r){return!!r&&"integerValue"in r}function Qg(r){return!!r&&"arrayValue"in r}function oT(r){return!!r&&"nullValue"in r}function lT(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function tf(r){return!!r&&"mapValue"in r}function QN(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[ew])==null?void 0:s.stringValue)===tw}function Cu(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Is(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Cu(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Cu(r.arrayValue.values[t]);return e}return{...r}}function KN(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===YN}/**
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
 */class bn{constructor(e){this.value=e}static empty(){return new bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!tf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cu(t)}setAll(e){let t=en.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=Cu(h):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());tf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];tf(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Is(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new bn(Cu(this.value))}}function nw(r){const e=[];return Is(r.fields,(t,s)=>{const o=new en([t]);if(tf(s)){const u=nw(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new kn(e)}/**
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
 */class hn{constructor(e,t,s,o,u,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new hn(e,0,Ae.min(),Ae.min(),Ae.min(),bn.empty(),0)}static newFoundDocument(e,t,s,o){return new hn(e,1,t,Ae.min(),s,o,0)}static newNoDocument(e,t){return new hn(e,2,t,Ae.min(),Ae.min(),bn.empty(),0)}static newUnknownDocument(e,t){return new hn(e,3,t,Ae.min(),Ae.min(),bn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof hn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bf{constructor(e,t){this.position=e,this.inclusive=t}}function uT(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=_e.comparator(_e.fromName(h.referenceValue),t.key):s=Go(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function cT(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!qr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Hu{constructor(e,t="asc"){this.field=e,this.dir=t}}function XN(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class rw{}class xt extends rw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new ZN(e,t,s):t==="array-contains"?new tO(e,s):t==="in"?new nO(e,s):t==="not-in"?new rO(e,s):t==="array-contains-any"?new iO(e,s):new xt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new JN(e,s):new eO(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Go(t,this.value)):t!==null&&bs(this.value)===bs(t)&&this.matchesComparison(Go(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends rw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new dr(e,t)}matches(e){return iw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function iw(r){return r.op==="and"}function sw(r){return WN(r)&&iw(r)}function WN(r){for(const e of r.filters)if(e instanceof dr)return!1;return!0}function ag(r){if(r instanceof xt)return r.field.canonicalString()+r.op.toString()+Yo(r.value);if(sw(r))return r.filters.map(e=>ag(e)).join(",");{const e=r.filters.map(t=>ag(t)).join(",");return`${r.op}(${e})`}}function aw(r,e){return r instanceof xt?function(s,o){return o instanceof xt&&s.op===o.op&&s.field.isEqual(o.field)&&qr(s.value,o.value)}(r,e):r instanceof dr?function(s,o){return o instanceof dr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&aw(h,o.filters[p]),!0):!1}(r,e):void we(19439)}function ow(r){return r instanceof xt?function(t){return`${t.field.canonicalString()} ${t.op} ${Yo(t.value)}`}(r):r instanceof dr?function(t){return t.op.toString()+" {"+t.getFilters().map(ow).join(" ,")+"}"}(r):"Filter"}class ZN extends xt{constructor(e,t,s){super(e,t,s),this.key=_e.fromName(s.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class JN extends xt{constructor(e,t){super(e,"in",t),this.keys=lw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eO extends xt{constructor(e,t){super(e,"not-in",t),this.keys=lw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function lw(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>_e.fromName(s.referenceValue))}class tO extends xt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qg(t)&&Bu(t.arrayValue,this.value)}}class nO extends xt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Bu(this.value.arrayValue,t)}}class rO extends xt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Bu(this.value.arrayValue,t)}}class iO extends xt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Bu(this.value.arrayValue,s))}}/**
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
 */class sO{constructor(e,t=null,s=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.Te=null}}function hT(r,e=null,t=[],s=[],o=null,u=null,h=null){return new sO(r,e,t,s,o,u,h)}function Kg(r){const e=Re(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>ag(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),$f(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Yo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Yo(s)).join(",")),e.Te=t}return e.Te}function Xg(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!XN(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!aw(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!cT(r.startAt,e.startAt)&&cT(r.endAt,e.endAt)}function og(r){return _e.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class al{constructor(e,t=null,s=[],o=[],u=null,h="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function aO(r,e,t,s,o,u,h,p){return new al(r,e,t,s,o,u,h,p)}function Yf(r){return new al(r)}function fT(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function uw(r){return r.collectionGroup!==null}function Du(r){const e=Re(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Lt(en.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Hu(u,s))}),t.has(en.keyField().canonicalString())||e.Ie.push(new Hu(en.keyField(),s))}return e.Ie}function Lr(r){const e=Re(r);return e.Ee||(e.Ee=oO(e,Du(r))),e.Ee}function oO(r,e){if(r.limitType==="F")return hT(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Hu(o.field,u)});const t=r.endAt?new bf(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new bf(r.startAt.position,r.startAt.inclusive):null;return hT(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function lg(r,e){const t=r.filters.concat([e]);return new al(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function ug(r,e,t){return new al(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Qf(r,e){return Xg(Lr(r),Lr(e))&&r.limitType===e.limitType}function cw(r){return`${Kg(Lr(r))}|lt:${r.limitType}`}function Co(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>ow(o)).join(", ")}]`),$f(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Yo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Yo(o)).join(",")),`Target(${s})`}(Lr(r))}; limitType=${r.limitType})`}function Kf(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):_e.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Du(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,p,m){const g=uT(h,p,m);return h.inclusive?g<=0:g<0}(s.startAt,Du(s),o)||s.endAt&&!function(h,p,m){const g=uT(h,p,m);return h.inclusive?g>=0:g>0}(s.endAt,Du(s),o))}(r,e)}function lO(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function hw(r){return(e,t)=>{let s=!1;for(const o of Du(r)){const u=uO(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function uO(r,e,t){const s=r.field.isKeyField()?_e.comparator(e.key,t.key):function(u,h,p){const m=h.data.field(u),g=p.data.field(u);return m!==null&&g!==null?Go(m,g):we(42886)}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return we(19790,{direction:r.dir})}}/**
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
 */class Oa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return Qb(this.inner)}size(){return this.innerSize}}/**
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
 */const cO=new ft(_e.comparator);function Ii(){return cO}const fw=new ft(_e.comparator);function wu(...r){let e=fw;for(const t of r)e=e.insert(t.key,t);return e}function dw(r){let e=fw;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ma(){return Nu()}function pw(){return Nu()}function Nu(){return new Oa(r=>r.toString(),(r,e)=>r.isEqual(e))}const hO=new ft(_e.comparator),fO=new Lt(_e.comparator);function Le(...r){let e=fO;for(const t of r)e=e.add(t);return e}const dO=new Lt(Ve);function pO(){return dO}/**
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
 */function Wg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vf(e)?"-0":e}}function mw(r){return{integerValue:""+r}}function mO(r,e){return BN(e)?mw(e):Wg(r,e)}/**
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
 */class Xf{constructor(){this._=void 0}}function gO(r,e,t){return r instanceof Fu?function(o,u){const h={fields:{[Wb]:{stringValue:Xb},[Jb]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Yg(u)&&(u=Gf(u)),u&&(h.fields[Zb]=u),{mapValue:h}}(t,e):r instanceof $u?yw(r,e):r instanceof Gu?_w(r,e):function(o,u){const h=gw(o,u),p=dT(h)+dT(o.Ae);return sg(h)&&sg(o.Ae)?mw(p):Wg(o.serializer,p)}(r,e)}function yO(r,e,t){return r instanceof $u?yw(r,e):r instanceof Gu?_w(r,e):t}function gw(r,e){return r instanceof wf?function(s){return sg(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Fu extends Xf{}class $u extends Xf{constructor(e){super(),this.elements=e}}function yw(r,e){const t=vw(e);for(const s of r.elements)t.some(o=>qr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Gu extends Xf{constructor(e){super(),this.elements=e}}function _w(r,e){let t=vw(e);for(const s of r.elements)t=t.filter(o=>!qr(o,s));return{arrayValue:{values:t}}}class wf extends Xf{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function dT(r){return Et(r.integerValue||r.doubleValue)}function vw(r){return Qg(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class _O{constructor(e,t){this.field=e,this.transform=t}}function vO(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof $u&&o instanceof $u||s instanceof Gu&&o instanceof Gu?$o(s.elements,o.elements,qr):s instanceof wf&&o instanceof wf?qr(s.Ae,o.Ae):s instanceof Fu&&o instanceof Fu}(r.transform,e.transform)}class EO{constructor(e,t){this.version=e,this.transformResults=t}}class ur{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ur}static exists(e){return new ur(void 0,e)}static updateTime(e){return new ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nf(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Wf{}function Ew(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new bw(r.key,ur.none()):new rc(r.key,r.data,ur.none());{const t=r.data,s=bn.empty();let o=new Lt(en.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Cs(r.key,s,new kn(o.toArray()),ur.none())}}function TO(r,e,t){r instanceof rc?function(o,u,h){const p=o.value.clone(),m=mT(o.fieldTransforms,u,h.transformResults);p.setAll(m),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(r,e,t):r instanceof Cs?function(o,u,h){if(!nf(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=mT(o.fieldTransforms,u,h.transformResults),m=u.data;m.setAll(Tw(o)),m.setAll(p),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ou(r,e,t,s){return r instanceof rc?function(u,h,p,m){if(!nf(u.precondition,h))return p;const g=u.value.clone(),v=gT(u.fieldTransforms,m,h);return g.setAll(v),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(r,e,t,s):r instanceof Cs?function(u,h,p,m){if(!nf(u.precondition,h))return p;const g=gT(u.fieldTransforms,m,h),v=h.data;return v.setAll(Tw(u)),v.setAll(g),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(b=>b.field))}(r,e,t,s):function(u,h,p){return nf(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(r,e,t)}function bO(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=gw(s.transform,o||null);u!=null&&(t===null&&(t=bn.empty()),t.set(s.field,u))}return t||null}function pT(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&$o(s,o,(u,h)=>vO(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class rc extends Wf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Cs extends Wf{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Tw(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function mT(r,e,t){const s=new Map;Ye(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,p=e.data.field(u.field);s.set(u.field,yO(h,p,t[o]))}return s}function gT(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,gO(u,h,e))}return s}class bw extends Wf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wO extends Wf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class SO{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&TO(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ou(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ou(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=pw();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const m=Ew(h,p);m!==null&&s.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(Ae.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&$o(this.mutations,e.mutations,(t,s)=>pT(t,s))&&$o(this.baseMutations,e.baseMutations,(t,s)=>pT(t,s))}}class Zg{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ye(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return hO}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Zg(e,t,s,o)}}/**
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
 */class AO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class RO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var At,qe;function xO(r){switch(r){case J.OK:return we(64938);case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return we(15467,{code:r})}}function ww(r){if(r===void 0)return xi("GRPC error has no .code"),J.UNKNOWN;switch(r){case At.OK:return J.OK;case At.CANCELLED:return J.CANCELLED;case At.UNKNOWN:return J.UNKNOWN;case At.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case At.INTERNAL:return J.INTERNAL;case At.UNAVAILABLE:return J.UNAVAILABLE;case At.UNAUTHENTICATED:return J.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case At.NOT_FOUND:return J.NOT_FOUND;case At.ALREADY_EXISTS:return J.ALREADY_EXISTS;case At.PERMISSION_DENIED:return J.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case At.ABORTED:return J.ABORTED;case At.OUT_OF_RANGE:return J.OUT_OF_RANGE;case At.UNIMPLEMENTED:return J.UNIMPLEMENTED;case At.DATA_LOSS:return J.DATA_LOSS;default:return we(39323,{code:r})}}(qe=At||(At={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function IO(){return new TextEncoder}/**
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
 */const CO=new ys([4294967295,4294967295],0);function yT(r){const e=IO().encode(r),t=new Lb;return t.update(e),new Uint8Array(t.digest())}function _T(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ys([t,s],0),new ys([o,u],0)]}class Jg{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Su(`Invalid padding: ${t}`);if(s<0)throw new Su(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Su(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Su(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ys.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(ys.fromNumber(s)));return o.compare(CO)===1&&(o=new ys([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=yT(e),[s,o]=_T(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Jg(u,o,t);return s.forEach(p=>h.insert(p)),h}insert(e){if(this.ge===0)return;const t=yT(e),[s,o]=_T(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Su extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zf{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ic.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Zf(Ae.min(),o,new ft(Ve),Ii(),Le())}}class ic{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ic(s,t,Le(),Le(),Le())}}/**
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
 */class rf{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Sw{constructor(e,t){this.targetId=e,this.Ce=t}}class Aw{constructor(e,t,s=tn.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class vT{constructor(){this.ve=0,this.Fe=ET(),this.Me=tn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),t=Le(),s=Le();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:we(38017,{changeType:u})}}),new ic(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=ET()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ye(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class DO{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ii(),this.Je=jh(),this.He=jh(),this.Ye=new ft(Ve)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:we(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,o)=>{this.rt(o)&&t(o)})}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(og(u))if(s===0){const h=new _e(u.path);this.et(t,h,hn.newNoDocument(h,Ae.min()))}else Ye(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const p=this.ut(e),m=p?this.ct(p,e,h):1;if(m!==0){this.it(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,p;try{h=Ts(s).toUint8Array()}catch(m){if(m instanceof Kb)return Fo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new Jg(h,o,u)}catch(m){return Fo(m instanceof Su?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Ge.ht(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.et(t,u,null),o++)}),o}Tt(e){const t=new Map;this.ze.forEach((u,h)=>{const p=this.ot(h);if(p){if(u.current&&og(p.target)){const m=new _e(p.target.path);this.It(m).has(h)||this.Et(h,m)||this.et(h,m,hn.newNoDocument(m,e))}u.Be&&(t.set(h,u.ke()),u.qe())}});let s=Le();this.He.forEach((u,h)=>{let p=!0;h.forEachWhile(m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.je.forEach((u,h)=>h.setReadTime(e));const o=new Zf(e,t,this.Ye,this.je,s);return this.je=Ii(),this.Je=jh(),this.He=jh(),this.Ye=new ft(Ve),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new vT,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Lt(Ve),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Lt(Ve),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new vT),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function jh(){return new ft(_e.comparator)}function ET(){return new ft(_e.comparator)}const NO={asc:"ASCENDING",desc:"DESCENDING"},OO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kO={and:"AND",or:"OR"};class MO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function cg(r,e){return r.useProto3Json||$f(e)?e:{value:e}}function Sf(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function PO(r,e){return Sf(r,e.toTimestamp())}function Ur(r){return Ye(!!r,49232),Ae.fromTimestamp(function(t){const s=Es(t);return new nt(s.seconds,s.nanos)}(r))}function ey(r,e){return hg(r,e).canonicalString()}function hg(r,e){const t=function(o){return new it(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function xw(r){const e=it.fromString(r);return Ye(Ow(e),10190,{key:e.toString()}),e}function fg(r,e){return ey(r.databaseId,e.path)}function Nm(r,e){const t=xw(e);if(t.get(1)!==r.databaseId.projectId)throw new he(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new he(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new _e(Cw(t))}function Iw(r,e){return ey(r.databaseId,e)}function VO(r){const e=xw(r);return e.length===4?it.emptyPath():Cw(e)}function dg(r){return new it(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Cw(r){return Ye(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function TT(r,e,t){return{name:fg(r,e),fields:t.value.mapValue.fields}}function LO(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:we(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,v){return g.useProto3Json?(Ye(v===void 0||typeof v=="string",58123),tn.fromBase64String(v||"")):(Ye(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),tn.fromUint8Array(v||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&function(g){const v=g.code===void 0?J.UNKNOWN:ww(g.code);return new he(v,g.message||"")}(h);t=new Aw(s,o,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Nm(r,s.document.name),u=Ur(s.document.updateTime),h=s.document.createTime?Ur(s.document.createTime):Ae.min(),p=new bn({mapValue:{fields:s.document.fields}}),m=hn.newFoundDocument(o,u,h,p),g=s.targetIds||[],v=s.removedTargetIds||[];t=new rf(g,v,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Nm(r,s.document),u=s.readTime?Ur(s.readTime):Ae.min(),h=hn.newNoDocument(o,u),p=s.removedTargetIds||[];t=new rf([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Nm(r,s.document),u=s.removedTargetIds||[];t=new rf([],u,o,null)}else{if(!("filter"in e))return we(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new RO(o,u),p=s.targetId;t=new Sw(p,h)}}return t}function UO(r,e){let t;if(e instanceof rc)t={update:TT(r,e.key,e.value)};else if(e instanceof bw)t={delete:fg(r,e.key)};else if(e instanceof Cs)t={update:TT(r,e.key,e.data),updateMask:YO(e.fieldMask)};else{if(!(e instanceof wO))return we(16599,{Vt:e.type});t={verify:fg(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof Fu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof $u)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Gu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof wf)return{fieldPath:h.field.canonicalString(),increment:p.Ae};throw we(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:PO(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:we(27497)}(r,e.precondition)),t}function jO(r,e){return r&&r.length>0?(Ye(e!==void 0,14353),r.map(t=>function(o,u){let h=o.updateTime?Ur(o.updateTime):Ur(u);return h.isEqual(Ae.min())&&(h=Ur(u)),new EO(h,o.transformResults||[])}(t,e))):[]}function zO(r,e){return{documents:[Iw(r,e.path)]}}function qO(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Iw(r,o);const u=function(g){if(g.length!==0)return Nw(dr.create(g,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(g){if(g.length!==0)return g.map(v=>function(S){return{field:Do(S.field),direction:FO(S.dir)}}(v))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=cg(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:t,parent:o}}function BO(r){let e=VO(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ye(s===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let u=[];t.where&&(u=function(b){const S=Dw(b);return S instanceof dr&&sw(S)?S.getFilters():[S]}(t.where));let h=[];t.orderBy&&(h=function(b){return b.map(S=>function(L){return new Hu(No(L.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(S))}(t.orderBy));let p=null;t.limit&&(p=function(b){let S;return S=typeof b=="object"?b.value:b,$f(S)?null:S}(t.limit));let m=null;t.startAt&&(m=function(b){const S=!!b.before,I=b.values||[];return new bf(I,S)}(t.startAt));let g=null;return t.endAt&&(g=function(b){const S=!b.before,I=b.values||[];return new bf(I,S)}(t.endAt)),aO(e,o,h,u,p,"F",m,g)}function HO(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Dw(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=No(t.unaryFilter.field);return xt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=No(t.unaryFilter.field);return xt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=No(t.unaryFilter.field);return xt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=No(t.unaryFilter.field);return xt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}}(r):r.fieldFilter!==void 0?function(t){return xt.create(No(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return dr.create(t.compositeFilter.filters.map(s=>Dw(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}}(t.compositeFilter.op))}(r):we(30097,{filter:r})}function FO(r){return NO[r]}function $O(r){return OO[r]}function GO(r){return kO[r]}function Do(r){return{fieldPath:r.canonicalString()}}function No(r){return en.fromServerFormat(r.fieldPath)}function Nw(r){return r instanceof xt?function(t){if(t.op==="=="){if(lT(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NAN"}};if(oT(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(lT(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NAN"}};if(oT(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Do(t.field),op:$O(t.op),value:t.value}}}(r):r instanceof dr?function(t){const s=t.getFilters().map(o=>Nw(o));return s.length===1?s[0]:{compositeFilter:{op:GO(t.op),filters:s}}}(r):we(54877,{filter:r})}function YO(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ow(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class fs{constructor(e,t,s,o,u=Ae.min(),h=Ae.min(),p=tn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new fs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new fs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class QO{constructor(e){this.yt=e}}function KO(r){const e=BO({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ug(e,e.limit,"L"):e}/**
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
 */class XO{constructor(){this.Cn=new WO}addToCollectionParentIndex(e,t){return this.Cn.add(t),ne.resolve()}getCollectionParents(e,t){return ne.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ne.resolve()}deleteFieldIndex(e,t){return ne.resolve()}deleteAllFieldIndexes(e){return ne.resolve()}createTargetIndexes(e,t){return ne.resolve()}getDocumentsMatchingTarget(e,t){return ne.resolve(null)}getIndexType(e,t){return ne.resolve(0)}getFieldIndexes(e,t){return ne.resolve([])}getNextCollectionGroupToUpdate(e){return ne.resolve(null)}getMinOffset(e,t){return ne.resolve(vs.min())}getMinOffsetFromCollectionGroup(e,t){return ne.resolve(vs.min())}updateCollectionGroup(e,t,s){return ne.resolve()}updateIndexEntries(e,t){return ne.resolve()}}class WO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Lt(it.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Lt(it.comparator)).toArray()}}/**
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
 */const bT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kw=41943040;class Tn{static withCacheSize(e){return new Tn(e,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Tn.DEFAULT_COLLECTION_PERCENTILE=10,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tn.DEFAULT=new Tn(kw,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tn.DISABLED=new Tn(-1,0,0);/**
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
 */const wT="LruGarbageCollector",ZO=1048576;function ST([r,e],[t,s]){const o=Ve(r,t);return o===0?Ve(e,s):o}class JO{constructor(e){this.Ir=e,this.buffer=new Lt(ST),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ST(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class e4{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){fe(wT,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){sl(t)?fe(wT,"Ignoring IndexedDB error during garbage collection: ",t):await il(t)}await this.Vr(3e5)})}}class t4{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return ne.resolve(Ff.ce);const s=new JO(t);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),ne.resolve(bT)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bT):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,p,m,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,h=Date.now(),this.nthSequenceNumber(e,o))).next(b=>(s=b,p=Date.now(),this.removeTargets(e,s,t))).next(b=>(u=b,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(b=>(g=Date.now(),Io()<=Pe.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-v}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${b} documents in `+(g-m)+`ms
Total Duration: ${g-v}ms`),ne.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b})))}}function n4(r,e){return new t4(r,e)}/**
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
 */class r4{constructor(){this.changes=new Oa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,hn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ne.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class i4{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class s4{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Ou(s.mutation,o,kn.empty(),nt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const o=ma();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=wu();return u.forEach((p,m)=>{h=h.insert(p,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=ma();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,o){let u=Ii();const h=Nu(),p=function(){return Nu()}();return t.forEach((m,g)=>{const v=s.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof Cs)?u=u.insert(g.key,g):v!==void 0?(h.set(g.key,v.mutation.getFieldMask()),Ou(v.mutation,g,v.mutation.getFieldMask(),nt.now())):h.set(g.key,kn.empty())}),this.recalculateAndSaveOverlays(e,u).next(m=>(m.forEach((g,v)=>h.set(g,v)),t.forEach((g,v)=>p.set(g,new i4(v,h.get(g)??null))),p))}recalculateAndSaveOverlays(e,t){const s=Nu();let o=new ft((h,p)=>h-p),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let v=s.get(m)||kn.empty();v=p.applyToLocalView(g,v),s.set(m,v);const b=(o.get(p.batchId)||Le()).add(m);o=o.insert(p.batchId,b)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,v=m.value,b=pw();v.forEach(S=>{if(!u.has(S)){const I=Ew(t.get(S),s.get(S));I!==null&&b.set(S,I),u=u.add(S)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,b))}return ne.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return _e.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):uw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):ne.resolve(ma());let p=ju,m=u;return h.next(g=>ne.forEach(g,(v,b)=>(p<b.largestBatchId&&(p=b.largestBatchId),u.get(v)?ne.resolve():this.remoteDocumentCache.getEntry(e,v).next(S=>{m=m.insert(v,S)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,m,g,Le())).next(v=>({batchId:p,changes:dw(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(s=>{let o=wu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=wu();return this.indexManager.getCollectionParents(e,u).next(p=>ne.forEach(p,m=>{const g=function(b,S){return new al(S,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(t,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(v=>{v.forEach((b,S)=>{h=h.insert(b,S)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((m,g)=>{const v=g.getKey();h.get(v)===null&&(h=h.insert(v,hn.newInvalidDocument(v)))});let p=wu();return h.forEach((m,g)=>{const v=u.get(m);v!==void 0&&Ou(v.mutation,g,kn.empty(),nt.now()),Kf(t,g)&&(p=p.insert(m,g))}),p})}}/**
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
 */class a4{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return ne.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Ur(o.createTime)}}(t)),ne.resolve()}getNamedQuery(e,t){return ne.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(o){return{name:o.name,query:KO(o.bundledQuery),readTime:Ur(o.readTime)}}(t)),ne.resolve()}}/**
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
 */class o4{constructor(){this.overlays=new ft(_e.comparator),this.qr=new Map}getOverlay(e,t){return ne.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ma();return ne.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),ne.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),ne.resolve()}getOverlaysForCollection(e,t,s){const o=ma(),u=t.length+1,h=new _e(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>s&&o.set(m.getKey(),m)}return ne.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new ft((g,v)=>g-v);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let v=u.get(g.largestBatchId);v===null&&(v=ma(),u=u.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const p=ma(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,v)=>p.set(g,v)),!(p.size()>=o)););return ne.resolve(p)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new AO(t,s));let u=this.qr.get(t);u===void 0&&(u=Le(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class l4{constructor(){this.sessionToken=tn.EMPTY_BYTE_STRING}getSessionToken(e){return ne.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ne.resolve()}}/**
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
 */class ty{constructor(){this.Qr=new Lt(Ft.$r),this.Ur=new Lt(Ft.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Ft(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new Ft(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new _e(new it([])),s=new Ft(t,e),o=new Ft(t,e+1),u=[];return this.Ur.forEachInRange([s,o],h=>{this.Gr(h),u.push(h.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new _e(new it([])),s=new Ft(t,e),o=new Ft(t,e+1);let u=Le();return this.Ur.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Ft(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ft{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return _e.comparator(e.key,t.key)||Ve(e.Yr,t.Yr)}static Kr(e,t){return Ve(e.Yr,t.Yr)||_e.comparator(e.key,t.key)}}/**
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
 */class u4{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Lt(Ft.$r)}checkEmpty(e){return ne.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new SO(u,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Zr=this.Zr.add(new Ft(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return ne.resolve(h)}lookupMutationBatch(e,t){return ne.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return ne.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return ne.resolve(this.mutationQueue.length===0?Gg:this.tr-1)}getAllMutationBatches(e){return ne.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ft(t,0),o=new Ft(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],h=>{const p=this.Xr(h.Yr);u.push(p)}),ne.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Lt(Ve);return t.forEach(o=>{const u=new Ft(o,0),h=new Ft(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],p=>{s=s.add(p.Yr)})}),ne.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;_e.isDocumentKey(u)||(u=u.child(""));const h=new Ft(new _e(u),0);let p=new Lt(Ve);return this.Zr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Yr)),!0)},h),ne.resolve(this.ti(p))}ti(e){const t=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ye(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ne.forEach(t.mutations,o=>{const u=new Ft(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new Ft(t,0),o=this.Zr.firstAfterOrEqual(s);return ne.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ne.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class c4{constructor(e){this.ri=e,this.docs=function(){return new ft(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ne.resolve(s?s.document.mutableCopy():hn.newInvalidDocument(t))}getEntries(e,t){let s=Ii();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():hn.newInvalidDocument(o))}),ne.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ii();const h=t.path,p=new _e(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:v}}=m.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||UN(LN(v),s)<=0||(o.has(v.key)||Kf(t,v))&&(u=u.insert(v.key,v.mutableCopy()))}return ne.resolve(u)}getAllFromCollectionGroup(e,t,s,o){we(9500)}ii(e,t){return ne.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new h4(this)}getSize(e){return ne.resolve(this.size)}}class h4 extends r4{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),ne.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class f4{constructor(e){this.persistence=e,this.si=new Oa(t=>Kg(t),Xg),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new ty,this.targetCount=0,this.ai=Qo.ur()}forEachTarget(e,t){return this.si.forEach((s,o)=>t(o)),ne.resolve()}getLastRemoteSnapshotVersion(e){return ne.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ne.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ne.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),ne.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Qo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,ne.resolve()}updateTargetData(e,t){return this.Pr(t),ne.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,ne.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),ne.waitFor(u).next(()=>o)}getTargetCount(e){return ne.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return ne.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),ne.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),ne.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),ne.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return ne.resolve(s)}containsKey(e,t){return ne.resolve(this._i.containsKey(t))}}/**
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
 */class Mw{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ff(0),this.li=!1,this.li=!0,this.hi=new l4,this.referenceDelegate=e(this),this.Pi=new f4(this),this.indexManager=new XO,this.remoteDocumentCache=function(o){return new c4(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new QO(t),this.Ii=new a4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new o4,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new u4(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){fe("MemoryPersistence","Starting transaction:",e);const o=new d4(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,t){return ne.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class d4 extends zN{constructor(e){super(),this.currentSequenceNumber=e}}class ny{constructor(e){this.persistence=e,this.Ri=new ty,this.Vi=null}static mi(e){return new ny(e)}get fi(){if(this.Vi)return this.Vi;throw we(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),ne.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),ne.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),ne.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ne.forEach(this.fi,s=>{const o=_e.fromPath(s);return this.gi(e,o).next(u=>{u||t.removeEntry(o,Ae.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return ne.or([()=>ne.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Af{constructor(e,t){this.persistence=e,this.pi=new Oa(s=>HN(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=n4(this,t)}static mi(e,t){return new Af(e,t)}Ei(){}di(e){return ne.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return ne.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?ne.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,h=>this.br(e,h,t).next(p=>{p||(s++,u.removeEntry(h,Ae.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),ne.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ne.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ne.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),ne.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ef(e.data.value)),t}br(e,t,s){return ne.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return ne.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ry{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Le(),o=Le();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new ry(e,t.fromCache,s,o)}}/**
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
 */class p4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class m4{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return HI()?8:qN(fn())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ws(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new p4;return this.Ss(e,t,h).next(p=>{if(u.result=p,this.Vs)return this.bs(e,t,h,p.size)})}).next(()=>u.result)}bs(e,t,s,o){return s.documentReadCount<this.fs?(Io()<=Pe.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",Co(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ne.resolve()):(Io()<=Pe.DEBUG&&fe("QueryEngine","Query:",Co(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Io()<=Pe.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",Co(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Lr(t))):ne.resolve())}ys(e,t){if(fT(t))return ne.resolve(null);let s=Lr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=ug(t,null,"F"),s=Lr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Le(...u);return this.ps.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(m=>{const g=this.Ds(t,p);return this.Cs(t,g,h,m.readTime)?this.ys(e,ug(t,null,"F")):this.vs(e,g,t,m)}))})))}ws(e,t,s,o){return fT(t)||o.isEqual(Ae.min())?ne.resolve(null):this.ps.getDocuments(e,s).next(u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?ne.resolve(null):(Io()<=Pe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Co(t)),this.vs(e,h,t,VN(o,ju)).next(p=>p))})}Ds(e,t){let s=new Lt(hw(e));return t.forEach((o,u)=>{Kf(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return Io()<=Pe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Co(t)),this.ps.getDocumentsMatchingQuery(e,t,vs.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const iy="LocalStore",g4=3e8;class y4{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new ft(Ve),this.xs=new Oa(u=>Kg(u),Xg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new s4(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function _4(r,e,t,s){return new y4(r,e,t,s)}async function Pw(r,e){const t=Re(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let m=Le();for(const g of o){h.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}for(const g of u){p.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}return t.localDocuments.getDocuments(s,m).next(g=>({Ls:g,removedBatchIds:h,addedBatchIds:p}))})})}function v4(r,e){const t=Re(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return function(p,m,g,v){const b=g.batch,S=b.keys();let I=ne.resolve();return S.forEach(L=>{I=I.next(()=>v.getEntry(m,L)).next($=>{const B=g.docVersions.get(L);Ye(B!==null,48541),$.version.compareTo(B)<0&&(b.applyToRemoteDocument($,g),$.isValidDocument()&&($.setReadTime(g.commitVersion),v.addEntry($)))})}),I.next(()=>p.mutationQueue.removeMutationBatch(m,b))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let m=Le();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Vw(r){const e=Re(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function E4(r,e){const t=Re(r),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const p=[];e.targetChanges.forEach((v,b)=>{const S=o.get(b);if(!S)return;p.push(t.Pi.removeMatchingKeys(u,v.removedDocuments,b).next(()=>t.Pi.addMatchingKeys(u,v.addedDocuments,b)));let I=S.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(b)!==null?I=I.withResumeToken(tn.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):v.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(v.resumeToken,s)),o=o.insert(b,I),function($,B,ee){return $.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=g4?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0}(S,I,v)&&p.push(t.Pi.updateTargetData(u,I))});let m=Ii(),g=Le();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,v))}),p.push(T4(u,h,e.documentUpdates).next(v=>{m=v.ks,g=v.qs})),!s.isEqual(Ae.min())){const v=t.Pi.getLastRemoteSnapshotVersion(u).next(b=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(v)}return ne.waitFor(p).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,m,g)).next(()=>m)}).then(u=>(t.Ms=o,u))}function T4(r,e,t){let s=Le(),o=Le();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=Ii();return t.forEach((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(Ae.min())?(e.removeEntry(p,m.readTime),h=h.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),h=h.insert(p,m)):fe(iy,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)}),{ks:h,qs:o}})}function b4(r,e){const t=Re(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Gg),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function w4(r,e){const t=Re(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Pi.getTargetData(s,e).next(u=>u?(o=u,ne.resolve(o)):t.Pi.allocateTargetId(s).next(h=>(o=new fs(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function pg(r,e,t){const s=Re(r),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!sl(h))throw h;fe(iy,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function AT(r,e,t){const s=Re(r);let o=Ae.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",h=>function(m,g,v){const b=Re(m),S=b.xs.get(v);return S!==void 0?ne.resolve(b.Ms.get(S)):b.Pi.getTargetData(g,v)}(s,h,Lr(e)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,p.targetId).next(m=>{u=m})}).next(()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Ae.min(),t?u:Le())).next(p=>(S4(s,lO(e),p),{documents:p,Qs:u})))}function S4(r,e,t){let s=r.Os.get(e)||Ae.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Os.set(e,s)}class RT{constructor(){this.activeTargetIds=pO()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class A4{constructor(){this.Mo=new RT,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new RT,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class R4{Oo(e){}shutdown(){}}/**
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
 */const xT="ConnectivityMonitor";class IT{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){fe(xT,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){fe(xT,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zh=null;function mg(){return zh===null?zh=function(){return 268435456+Math.round(2147483648*Math.random())}():zh++,"0x"+zh.toString(16)}/**
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
 */const Om="RestConnection",x4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class I4{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Ef?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=mg(),p=this.zo(e,t.toUriEncodedString());fe(Om,`Sending RPC '${e}' ${h}:`,p,s);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:g}=new URL(p),v=el(g);return this.Jo(e,p,m,s,v).then(b=>(fe(Om,`Received RPC '${e}' ${h}: `,b),b),b=>{throw Fo(Om,`RPC '${e}' ${h} failed with error: `,b,"url: ",p,"request:",s),b})}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,t){const s=x4[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class C4{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const on="WebChannelConnection";class D4 extends I4{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=mg();return new Promise((p,m)=>{const g=new Ub;g.setWithCredentials(!0),g.listenOnce(jb.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Jh.NO_ERROR:const b=g.getResponseJson();fe(on,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(b)),p(b);break;case Jh.TIMEOUT:fe(on,`RPC '${e}' ${h} timed out`),m(new he(J.DEADLINE_EXCEEDED,"Request time out"));break;case Jh.HTTP_ERROR:const S=g.getStatus();if(fe(on,`RPC '${e}' ${h} failed with status:`,S,"response text:",g.getResponseText()),S>0){let I=g.getResponseJson();Array.isArray(I)&&(I=I[0]);const L=I==null?void 0:I.error;if(L&&L.status&&L.message){const $=function(ee){const W=ee.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(W)>=0?W:J.UNKNOWN}(L.status);m(new he($,L.message))}else m(new he(J.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new he(J.UNAVAILABLE,"Connection failed."));break;default:we(9055,{l_:e,streamId:h,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{fe(on,`RPC '${e}' ${h} completed.`)}});const v=JSON.stringify(o);fe(on,`RPC '${e}' ${h} sending request:`,o),g.send(t,"POST",v,s,15)})}T_(e,t,s){const o=mg(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Bb(),p=qb(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const v=u.join("");fe(on,`Creating RPC '${e}' stream ${o}: ${v}`,m);const b=h.createWebChannel(v,m);this.I_(b);let S=!1,I=!1;const L=new C4({Yo:B=>{I?fe(on,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(S||(fe(on,`Opening RPC '${e}' stream ${o} transport.`),b.open(),S=!0),fe(on,`RPC '${e}' stream ${o} sending:`,B),b.send(B))},Zo:()=>b.close()}),$=(B,ee,W)=>{B.listen(ee,ie=>{try{W(ie)}catch(ue){setTimeout(()=>{throw ue},0)}})};return $(b,bu.EventType.OPEN,()=>{I||(fe(on,`RPC '${e}' stream ${o} transport opened.`),L.o_())}),$(b,bu.EventType.CLOSE,()=>{I||(I=!0,fe(on,`RPC '${e}' stream ${o} transport closed`),L.a_(),this.E_(b))}),$(b,bu.EventType.ERROR,B=>{I||(I=!0,Fo(on,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),L.a_(new he(J.UNAVAILABLE,"The operation could not be completed")))}),$(b,bu.EventType.MESSAGE,B=>{var ee;if(!I){const W=B.data[0];Ye(!!W,16349);const ie=W,ue=(ie==null?void 0:ie.error)||((ee=ie[0])==null?void 0:ee.error);if(ue){fe(on,`RPC '${e}' stream ${o} received error:`,ue);const ce=ue.status;let de=function(x){const M=At[x];if(M!==void 0)return ww(M)}(ce),D=ue.message;de===void 0&&(de=J.INTERNAL,D="Unknown error status: "+ce+" with message "+ue.message),I=!0,L.a_(new he(de,D)),b.close()}else fe(on,`RPC '${e}' stream ${o} received:`,W),L.u_(W)}}),$(p,zb.STAT_EVENT,B=>{B.stat===ng.PROXY?fe(on,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===ng.NOPROXY&&fe(on,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{L.__()},0),L}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function km(){return typeof document<"u"?document:null}/**
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
 */function Jf(r){return new MO(r,!0)}/**
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
 */class Lw{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const CT="PersistentStream";class Uw{constructor(e,t,s,o,u,h,p,m){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Lw(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(xi(t.toString()),xi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===t&&this.G_(s,o)},s=>{e(()=>{const o=new he(J.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return fe(CT,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(fe(CT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class N4 extends Uw{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=LO(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ae.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ae.min():h.readTime?Ur(h.readTime):Ae.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=dg(this.serializer),t.addTarget=function(u,h){let p;const m=h.target;if(p=og(m)?{documents:zO(u,m)}:{query:qO(u,m).ft},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=Rw(u,h.resumeToken);const g=cg(u,h.expectedCount);g!==null&&(p.expectedCount=g)}else if(h.snapshotVersion.compareTo(Ae.min())>0){p.readTime=Sf(u,h.snapshotVersion.toTimestamp());const g=cg(u,h.expectedCount);g!==null&&(p.expectedCount=g)}return p}(this.serializer,e);const s=HO(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=dg(this.serializer),t.removeTarget=e,this.q_(t)}}class O4 extends Uw{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=jO(e.writeResults,e.commitTime),s=Ur(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=dg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>UO(this.serializer,s))};this.q_(t)}}/**
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
 */class k4{}class M4 extends k4{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new he(J.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Go(e,hg(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(J.UNKNOWN,u.toString())})}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Ho(e,hg(t,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new he(J.UNKNOWN,h.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class P4{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xi(t),this.aa=!1):fe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const xa="RemoteStore";class V4{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(h=>{s.enqueueAndForget(async()=>{ka(this)&&(fe(xa,"Restarting streams for network reachability change."),await async function(m){const g=Re(m);g.Ea.add(4),await sc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await ed(g)}(this))})}),this.Ra=new P4(s,o)}}async function ed(r){if(ka(r))for(const e of r.da)await e(!0)}async function sc(r){for(const e of r.da)await e(!1)}function jw(r,e){const t=Re(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ly(t)?oy(t):ol(t).O_()&&ay(t,e))}function sy(r,e){const t=Re(r),s=ol(t);t.Ia.delete(e),s.O_()&&zw(t,e),t.Ia.size===0&&(s.O_()?s.L_():ka(t)&&t.Ra.set("Unknown"))}function ay(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ol(r).Y_(e)}function zw(r,e){r.Va.Ue(e),ol(r).Z_(e)}function oy(r){r.Va=new DO({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),ol(r).start(),r.Ra.ua()}function ly(r){return ka(r)&&!ol(r).x_()&&r.Ia.size>0}function ka(r){return Re(r).Ea.size===0}function qw(r){r.Va=void 0}async function L4(r){r.Ra.set("Online")}async function U4(r){r.Ia.forEach((e,t)=>{ay(r,e)})}async function j4(r,e){qw(r),ly(r)?(r.Ra.ha(e),oy(r)):r.Ra.set("Unknown")}async function z4(r,e,t){if(r.Ra.set("Online"),e instanceof Aw&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ia.delete(p),o.Va.removeTarget(p))}(r,e)}catch(s){fe(xa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Rf(r,s)}else if(e instanceof rf?r.Va.Ze(e):e instanceof Sw?r.Va.st(e):r.Va.tt(e),!t.isEqual(Ae.min()))try{const s=await Vw(r.localStore);t.compareTo(s)>=0&&await function(u,h){const p=u.Va.Tt(h);return p.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const v=u.Ia.get(g);v&&u.Ia.set(g,v.withResumeToken(m.resumeToken,h))}}),p.targetMismatches.forEach((m,g)=>{const v=u.Ia.get(m);if(!v)return;u.Ia.set(m,v.withResumeToken(tn.EMPTY_BYTE_STRING,v.snapshotVersion)),zw(u,m);const b=new fs(v.target,m,g,v.sequenceNumber);ay(u,b)}),u.remoteSyncer.applyRemoteEvent(p)}(r,t)}catch(s){fe(xa,"Failed to raise snapshot:",s),await Rf(r,s)}}async function Rf(r,e,t){if(!sl(e))throw e;r.Ea.add(1),await sc(r),r.Ra.set("Offline"),t||(t=()=>Vw(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{fe(xa,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await ed(r)})}function Bw(r,e){return e().catch(t=>Rf(r,t,e))}async function td(r){const e=Re(r),t=ws(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Gg;for(;q4(e);)try{const o=await b4(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,B4(e,o)}catch(o){await Rf(e,o)}Hw(e)&&Fw(e)}function q4(r){return ka(r)&&r.Ta.length<10}function B4(r,e){r.Ta.push(e);const t=ws(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Hw(r){return ka(r)&&!ws(r).x_()&&r.Ta.length>0}function Fw(r){ws(r).start()}async function H4(r){ws(r).ra()}async function F4(r){const e=ws(r);for(const t of r.Ta)e.ea(t.mutations)}async function $4(r,e,t){const s=r.Ta.shift(),o=Zg.from(s,e,t);await Bw(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await td(r)}async function G4(r,e){e&&ws(r).X_&&await async function(s,o){if(function(h){return xO(h)&&h!==J.ABORTED}(o.code)){const u=s.Ta.shift();ws(s).B_(),await Bw(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await td(s)}}(r,e),Hw(r)&&Fw(r)}async function DT(r,e){const t=Re(r);t.asyncQueue.verifyOperationInProgress(),fe(xa,"RemoteStore received new credentials");const s=ka(t);t.Ea.add(3),await sc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ed(t)}async function Y4(r,e){const t=Re(r);e?(t.Ea.delete(2),await ed(t)):e||(t.Ea.add(2),await sc(t),t.Ra.set("Unknown"))}function ol(r){return r.ma||(r.ma=function(t,s,o){const u=Re(t);return u.sa(),new N4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:L4.bind(null,r),t_:U4.bind(null,r),r_:j4.bind(null,r),H_:z4.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),ly(r)?oy(r):r.Ra.set("Unknown")):(await r.ma.stop(),qw(r))})),r.ma}function ws(r){return r.fa||(r.fa=function(t,s,o){const u=Re(t);return u.sa(),new O4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:H4.bind(null,r),r_:G4.bind(null,r),ta:F4.bind(null,r),na:$4.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await td(r)):(await r.fa.stop(),r.Ta.length>0&&(fe(xa,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class uy{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,p=new uy(e,t,h,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cy(r,e){if(xi("AsyncQueue",`${e}: ${r}`),sl(r))return new he(J.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class NT{constructor(){this.ga=new ft(_e.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):we(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class Ko{constructor(e,t,s,o,u,h,p,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(p=>{h.push({type:0,doc:p})}),new Ko(e,t,Lo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class Q4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class K4{constructor(){this.queries=OT(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Re(t),u=o.queries;o.queries=OT(),u.forEach((h,p)=>{for(const m of p.Sa)m.onError(s)})})(this,new he(J.ABORTED,"Firestore shutting down"))}}function OT(){return new Oa(r=>cw(r),Qf)}async function hy(r,e){const t=Re(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new Q4,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=cy(h,`Initialization of query '${Co(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&dy(t)}async function fy(r,e){const t=Re(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function X4(r,e){const t=Re(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const p of h.Sa)p.Fa(o)&&(s=!0);h.wa=o}}s&&dy(t)}function W4(r,e,t){const s=Re(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function dy(r){r.Ca.forEach(e=>{e.next()})}var gg,kT;(kT=gg||(gg={})).Ma="default",kT.Cache="cache";class py{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Ko(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==gg.Cache}}/**
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
 */class $w{constructor(e){this.key=e}}class Gw{constructor(e){this.key=e}}class Z4{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Le(),this.mutatedKeys=Le(),this.eu=hw(e),this.tu=new Lo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new NT,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,b)=>{const S=o.get(v),I=Kf(this.query,b)?b:null,L=!!S&&this.mutatedKeys.has(S.key),$=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let B=!1;S&&I?S.data.isEqual(I.data)?L!==$&&(s.track({type:3,doc:I}),B=!0):this.su(S,I)||(s.track({type:2,doc:I}),B=!0,(m&&this.eu(I,m)>0||g&&this.eu(I,g)<0)&&(p=!0)):!S&&I?(s.track({type:0,doc:I}),B=!0):S&&!I&&(s.track({type:1,doc:S}),B=!0,(m||g)&&(p=!0)),B&&(I?(h=h.add(I),u=$?u.add(v):u.delete(v)):(h=h.delete(v),u=u.delete(v)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const v=this.query.limitType==="F"?h.last():h.first();h=h.delete(v.key),u=u.delete(v.key),s.track({type:1,doc:v})}return{tu:h,iu:s,Cs:p,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort((v,b)=>function(I,L){const $=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{Rt:B})}};return $(I)-$(L)}(v.type,b.type)||this.eu(v.doc,b.doc)),this.ou(s),o=o??!1;const p=t&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,g=m!==this.Za;return this.Za=m,h.length!==0||g?{snapshot:new Ko(this.query,e.tu,u,h,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new NT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Le(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new Gw(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new $w(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=Le();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ko.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const my="SyncEngine";class J4{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class ek{constructor(e){this.key=e,this.hu=!1}}class tk{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Oa(p=>cw(p),Qf),this.Iu=new Map,this.Eu=new Set,this.du=new ft(_e.comparator),this.Au=new Map,this.Ru=new ty,this.Vu={},this.mu=new Map,this.fu=Qo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function nk(r,e,t=!0){const s=Zw(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Yw(s,e,t,!0),o}async function rk(r,e){const t=Zw(r);await Yw(t,e,!0,!1)}async function Yw(r,e,t,s){const o=await w4(r.localStore,Lr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let p;return s&&(p=await ik(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&jw(r.remoteStore,o),p}async function ik(r,e,t,s,o){r.pu=(b,S,I)=>async function($,B,ee,W){let ie=B.view.ru(ee);ie.Cs&&(ie=await AT($.localStore,B.query,!1).then(({documents:D})=>B.view.ru(D,ie)));const ue=W&&W.targetChanges.get(B.targetId),ce=W&&W.targetMismatches.get(B.targetId)!=null,de=B.view.applyChanges(ie,$.isPrimaryClient,ue,ce);return PT($,B.targetId,de.au),de.snapshot}(r,b,S,I);const u=await AT(r.localStore,e,!0),h=new Z4(e,u.Qs),p=h.ru(u.documents),m=ic.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),g=h.applyChanges(p,r.isPrimaryClient,m);PT(r,t,g.au);const v=new J4(e,t,h);return r.Tu.set(e,v),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),g.snapshot}async function sk(r,e,t){const s=Re(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(h=>!Qf(h,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await pg(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&sy(s.remoteStore,o.targetId),yg(s,o.targetId)}).catch(il)):(yg(s,o.targetId),await pg(s.localStore,o.targetId,!0))}async function ak(r,e){const t=Re(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),sy(t.remoteStore,s.targetId))}async function ok(r,e,t){const s=pk(r);try{const o=await function(h,p){const m=Re(h),g=nt.now(),v=p.reduce((I,L)=>I.add(L.key),Le());let b,S;return m.persistence.runTransaction("Locally write mutations","readwrite",I=>{let L=Ii(),$=Le();return m.Ns.getEntries(I,v).next(B=>{L=B,L.forEach((ee,W)=>{W.isValidDocument()||($=$.add(ee))})}).next(()=>m.localDocuments.getOverlayedDocuments(I,L)).next(B=>{b=B;const ee=[];for(const W of p){const ie=bO(W,b.get(W.key).overlayedDocument);ie!=null&&ee.push(new Cs(W.key,ie,nw(ie.value.mapValue),ur.exists(!0)))}return m.mutationQueue.addMutationBatch(I,g,ee,p)}).next(B=>{S=B;const ee=B.applyToLocalDocumentSet(b,$);return m.documentOverlayCache.saveOverlays(I,B.batchId,ee)})}).then(()=>({batchId:S.batchId,changes:dw(b)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,m){let g=h.Vu[h.currentUser.toKey()];g||(g=new ft(Ve)),g=g.insert(p,m),h.Vu[h.currentUser.toKey()]=g}(s,o.batchId,t),await ac(s,o.changes),await td(s.remoteStore)}catch(o){const u=cy(o,"Failed to persist write");t.reject(u)}}async function Qw(r,e){const t=Re(r);try{const s=await E4(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Au.get(u);h&&(Ye(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Ye(h.hu,14607):o.removedDocuments.size>0&&(Ye(h.hu,42227),h.hu=!1))}),await ac(t,s,e)}catch(s){await il(s)}}function MT(r,e,t){const s=Re(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach((u,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const m=Re(h);m.onlineState=p;let g=!1;m.queries.forEach((v,b)=>{for(const S of b.Sa)S.va(p)&&(g=!0)}),g&&dy(m)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function lk(r,e,t){const s=Re(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new ft(_e.comparator);h=h.insert(u,hn.newNoDocument(u,Ae.min()));const p=Le().add(u),m=new Zf(Ae.min(),new Map,new ft(Ve),h,p);await Qw(s,m),s.du=s.du.remove(u),s.Au.delete(e),gy(s)}else await pg(s.localStore,e,!1).then(()=>yg(s,e,t)).catch(il)}async function uk(r,e){const t=Re(r),s=e.batch.batchId;try{const o=await v4(t.localStore,e);Xw(t,s,null),Kw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ac(t,o)}catch(o){await il(o)}}async function ck(r,e,t){const s=Re(r);try{const o=await function(h,p){const m=Re(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return m.mutationQueue.lookupMutationBatch(g,p).next(b=>(Ye(b!==null,37113),v=b.keys(),m.mutationQueue.removeMutationBatch(g,b))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,v,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>m.localDocuments.getDocuments(g,v))})}(s.localStore,e);Xw(s,e,t),Kw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ac(s,o)}catch(o){await il(o)}}function Kw(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function Xw(r,e,t){const s=Re(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function yg(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(s=>{r.Ru.containsKey(s)||Ww(r,s)})}function Ww(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(sy(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),gy(r))}function PT(r,e,t){for(const s of t)s instanceof $w?(r.Ru.addReference(s.key,e),hk(r,s)):s instanceof Gw?(fe(my,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||Ww(r,s.key)):we(19791,{wu:s})}function hk(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Eu.has(s)||(fe(my,"New document in limbo: "+t),r.Eu.add(s),gy(r))}function gy(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new _e(it.fromString(e)),s=r.fu.next();r.Au.set(s,new ek(t)),r.du=r.du.insert(t,s),jw(r.remoteStore,new fs(Lr(Yf(t.path)),s,"TargetPurposeLimboResolution",Ff.ce))}}async function ac(r,e,t){const s=Re(r),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach((p,m)=>{h.push(s.pu(m,e,t).then(g=>{var v;if((g||t)&&s.isPrimaryClient){const b=g?!g.fromCache:(v=t==null?void 0:t.targetChanges.get(m.targetId))==null?void 0:v.current;s.sharedClientState.updateQueryState(m.targetId,b?"current":"not-current")}if(g){o.push(g);const b=ry.As(m.targetId,g);u.push(b)}}))}),await Promise.all(h),s.Pu.H_(o),await async function(m,g){const v=Re(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>ne.forEach(g,S=>ne.forEach(S.Es,I=>v.persistence.referenceDelegate.addReference(b,S.targetId,I)).next(()=>ne.forEach(S.ds,I=>v.persistence.referenceDelegate.removeReference(b,S.targetId,I)))))}catch(b){if(!sl(b))throw b;fe(iy,"Failed to update sequence numbers: "+b)}for(const b of g){const S=b.targetId;if(!b.fromCache){const I=v.Ms.get(S),L=I.snapshotVersion,$=I.withLastLimboFreeSnapshotVersion(L);v.Ms=v.Ms.insert(S,$)}}}(s.localStore,u))}async function fk(r,e){const t=Re(r);if(!t.currentUser.isEqual(e)){fe(my,"User change. New user:",e.toKey());const s=await Pw(t.localStore,e);t.currentUser=e,function(u,h){u.mu.forEach(p=>{p.forEach(m=>{m.reject(new he(J.CANCELLED,h))})}),u.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ac(t,s.Ls)}}function dk(r,e){const t=Re(r),s=t.Au.get(e);if(s&&s.hu)return Le().add(s.key);{let o=Le();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const p=t.Tu.get(h);o=o.unionWith(p.view.nu)}return o}}function Zw(r){const e=Re(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lk.bind(null,e),e.Pu.H_=X4.bind(null,e.eventManager),e.Pu.yu=W4.bind(null,e.eventManager),e}function pk(r){const e=Re(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ck.bind(null,e),e}class xf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return _4(this.persistence,new m4,e.initialUser,this.serializer)}Cu(e){return new Mw(ny.mi,this.serializer)}Du(e){return new A4}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xf.provider={build:()=>new xf};class mk extends xf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ye(this.persistence.referenceDelegate instanceof Af,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new e4(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Tn.withCacheSize(this.cacheSizeBytes):Tn.DEFAULT;return new Mw(s=>Af.mi(s,t),this.serializer)}}class _g{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>MT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=fk.bind(null,this.syncEngine),await Y4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new K4}()}createDatastore(e){const t=Jf(e.databaseInfo.databaseId),s=function(u){return new D4(u)}(e.databaseInfo);return function(u,h,p,m){return new M4(u,h,p,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,p){return new V4(s,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>MT(this.syncEngine,t,0),function(){return IT.v()?new IT:new R4}())}createSyncEngine(e,t){return function(o,u,h,p,m,g,v){const b=new tk(o,u,h,p,m,g);return v&&(b.gu=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Re(o);fe(xa,"RemoteStore shutting down."),u.Ea.add(5),await sc(u),u.Aa.shutdown(),u.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}_g.provider={build:()=>new _g};/**
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
 */class yy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xi("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Ss="FirestoreClient";class gk{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=cn.UNAUTHENTICATED,this.clientId=$g.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{fe(Ss,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(fe(Ss,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=cy(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Mm(r,e){r.asyncQueue.verifyOperationInProgress(),fe(Ss,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Pw(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function VT(r,e){r.asyncQueue.verifyOperationInProgress();const t=await yk(r);fe(Ss,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>DT(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>DT(e.remoteStore,o)),r._onlineComponents=e}async function yk(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){fe(Ss,"Using user provided OfflineComponentProvider");try{await Mm(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===J.FAILED_PRECONDITION||o.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Fo("Error using user provided cache. Falling back to memory cache: "+t),await Mm(r,new xf)}}else fe(Ss,"Using default OfflineComponentProvider"),await Mm(r,new mk(void 0));return r._offlineComponents}async function Jw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(fe(Ss,"Using user provided OnlineComponentProvider"),await VT(r,r._uninitializedComponentsProvider._online)):(fe(Ss,"Using default OnlineComponentProvider"),await VT(r,new _g))),r._onlineComponents}function _k(r){return Jw(r).then(e=>e.syncEngine)}async function If(r){const e=await Jw(r),t=e.eventManager;return t.onListen=nk.bind(null,e.syncEngine),t.onUnlisten=sk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ak.bind(null,e.syncEngine),t}function vk(r,e,t={}){const s=new bi;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const v=new yy({next:S=>{v.Nu(),h.enqueueAndForget(()=>fy(u,b));const I=S.docs.has(p);!I&&S.fromCache?g.reject(new he(J.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&S.fromCache&&m&&m.source==="server"?g.reject(new he(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),b=new py(Yf(p.path),v,{includeMetadataChanges:!0,qa:!0});return hy(u,b)}(await If(r),r.asyncQueue,e,t,s)),s.promise}function Ek(r,e,t={}){const s=new bi;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const v=new yy({next:S=>{v.Nu(),h.enqueueAndForget(()=>fy(u,b)),S.fromCache&&m.source==="server"?g.reject(new he(J.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),b=new py(p,v,{includeMetadataChanges:!0,qa:!0});return hy(u,b)}(await If(r),r.asyncQueue,e,t,s)),s.promise}/**
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
 */function eS(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const LT=new Map;/**
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
 */const tS="firestore.googleapis.com",UT=!0;class jT{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tS,this.ssl=UT}else this.host=e.host,this.ssl=e.ssl??UT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ZO)throw new he(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eS(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nd{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new AN;switch(s.type){case"firstParty":return new CN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=LT.get(t);s&&(fe("ComponentProvider","Removing Datastore"),LT.delete(t),s.terminate())}(this),Promise.resolve()}}function Tk(r,e,t,s={}){var g;r=Mn(r,nd);const o=el(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${t}`;o&&(K1(`https://${p}`),X1("Firestore",!0)),u.host!==tS&&u.host!==p&&Fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:s};if(!ba(m,h)&&(r._setSettings(m),s.mockUserToken)){let v,b;if(typeof s.mockUserToken=="string")v=s.mockUserToken,b=cn.MOCK_USER;else{v=MI(s.mockUserToken,(g=r._app)==null?void 0:g.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new he(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new cn(S)}r._authCredentials=new RN(new Fb(v,b))}}/**
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
 */class Ds{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ds(this.firestore,e,this._query)}}class gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _s(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(nc(t,gt._jsonSchema))return new gt(e,s||null,new _e(it.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:It("string",gt._jsonSchemaVersion),referencePath:It("string")};class _s extends Ds{constructor(e,t,s){super(e,t,Yf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new _e(e))}withConverter(e){return new _s(this.firestore,e,this._path)}}function wi(r,e,...t){if(r=Ct(r),$b("collection","path",e),r instanceof nd){const s=it.fromString(e,...t);return ZE(s),new _s(r,null,s)}{if(!(r instanceof gt||r instanceof _s))throw new he(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...t));return ZE(s),new _s(r.firestore,null,s)}}function cr(r,e,...t){if(r=Ct(r),arguments.length===1&&(e=$g.newId()),$b("doc","path",e),r instanceof nd){const s=it.fromString(e,...t);return WE(s),new gt(r,null,new _e(s))}{if(!(r instanceof gt||r instanceof _s))throw new he(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...t));return WE(s),new gt(r.firestore,r instanceof _s?r.converter:null,new _e(s))}}/**
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
 */const zT="AsyncQueue";class qT{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Lw(this,"async_queue_retry"),this._c=()=>{const s=km();s&&fe(zT,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=km();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=km();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new bi;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!sl(e))throw e;fe(zT,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,xi("INTERNAL UNHANDLED ERROR: ",BT(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=uy.createAndSchedule(this,e,t,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&we(47125,{Pc:BT(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function BT(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function HT(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class As extends nd{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new qT,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qT(e),this._firestoreClient=void 0,await e}}}function nS(r,e){const t=typeof r=="object"?r:eb(),s=typeof r=="string"?r:Ef,o=Pg(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=OI("firestore");u&&Tk(o,...u)}return o}function rd(r){if(r._terminated)throw new he(J.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||bk(r),r._firestoreClient}function bk(r){var s,o,u;const e=r._freezeSettings(),t=function(p,m,g,v){return new GN(p,m,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,eS(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new gk(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(p){const m=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(m),_online:m}}(r._componentsProvider))}/**
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
 */class Wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wn(tn.fromBase64String(e))}catch(t){throw new he(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Wn(tn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(nc(e,Wn._jsonSchema))return Wn.fromBase64String(e.bytes)}}Wn._jsonSchemaVersion="firestore/bytes/1.0",Wn._jsonSchema={type:It("string",Wn._jsonSchemaVersion),bytes:It("string")};/**
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
 */class id{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new en(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sd{constructor(e){this._methodName=e}}/**
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
 */class jr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:jr._jsonSchemaVersion}}static fromJSON(e){if(nc(e,jr._jsonSchema))return new jr(e.latitude,e.longitude)}}jr._jsonSchemaVersion="firestore/geoPoint/1.0",jr._jsonSchema={type:It("string",jr._jsonSchemaVersion),latitude:It("number"),longitude:It("number")};/**
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
 */class zr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:zr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(nc(e,zr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new zr(e.vectorValues);throw new he(J.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}zr._jsonSchemaVersion="firestore/vectorValue/1.0",zr._jsonSchema={type:It("string",zr._jsonSchemaVersion),vectorValues:It("object")};/**
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
 */const wk=/^__.*__$/;class Sk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Cs(e,this.data,this.fieldMask,t,this.fieldTransforms):new rc(e,this.data,t,this.fieldTransforms)}}class rS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Cs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function iS(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ac:r})}}class _y{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new _y({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Cf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(iS(this.Ac)&&wk.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Ak{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Jf(e)}Cc(e,t,s,o=!1){return new _y({Ac:e,methodName:t,Dc:s,path:en.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ad(r){const e=r._freezeSettings(),t=Jf(r._databaseId);return new Ak(r._databaseId,!!e.ignoreUndefinedProperties,t)}function sS(r,e,t,s,o,u={}){const h=r.Cc(u.merge||u.mergeFields?2:0,e,t,o);Ey("Data must be an object, but it was:",h,s);const p=aS(s,h);let m,g;if(u.merge)m=new kn(h.fieldMask),g=h.fieldTransforms;else if(u.mergeFields){const v=[];for(const b of u.mergeFields){const S=vg(e,b,t);if(!h.contains(S))throw new he(J.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);lS(v,S)||v.push(S)}m=new kn(v),g=h.fieldTransforms.filter(b=>m.covers(b.field))}else m=null,g=h.fieldTransforms;return new Sk(new bn(p),m,g)}class od extends sd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof od}}class vy extends sd{_toFieldTransform(e){return new _O(e.path,new Fu)}isEqual(e){return e instanceof vy}}function Rk(r,e,t,s){const o=r.Cc(1,e,t);Ey("Data must be an object, but it was:",o,s);const u=[],h=bn.empty();Is(s,(m,g)=>{const v=Ty(e,m,t);g=Ct(g);const b=o.yc(v);if(g instanceof od)u.push(v);else{const S=oc(g,b);S!=null&&(u.push(v),h.set(v,S))}});const p=new kn(u);return new rS(h,p,o.fieldTransforms)}function xk(r,e,t,s,o,u){const h=r.Cc(1,e,t),p=[vg(e,s,t)],m=[o];if(u.length%2!=0)throw new he(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<u.length;S+=2)p.push(vg(e,u[S])),m.push(u[S+1]);const g=[],v=bn.empty();for(let S=p.length-1;S>=0;--S)if(!lS(g,p[S])){const I=p[S];let L=m[S];L=Ct(L);const $=h.yc(I);if(L instanceof od)g.push(I);else{const B=oc(L,$);B!=null&&(g.push(I),v.set(I,B))}}const b=new kn(g);return new rS(v,b,h.fieldTransforms)}function Ik(r,e,t,s=!1){return oc(t,r.Cc(s?4:3,e))}function oc(r,e){if(oS(r=Ct(r)))return Ey("Unsupported field value:",e,r),aS(r,e);if(r instanceof sd)return function(s,o){if(!iS(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let m=oc(p,o.wc(h));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=Ct(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return mO(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=nt.fromDate(s);return{timestampValue:Sf(o.serializer,u)}}if(s instanceof nt){const u=new nt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Sf(o.serializer,u)}}if(s instanceof jr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Wn)return{bytesValue:Rw(o.serializer,s._byteString)};if(s instanceof gt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:ey(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof zr)return function(h,p){return{mapValue:{fields:{[ew]:{stringValue:tw},[Tf]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return Wg(p.serializer,g)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${Hf(s)}`)}(r,e)}function aS(r,e){const t={};return Qb(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(r,(s,o)=>{const u=oc(o,e.mc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function oS(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof nt||r instanceof jr||r instanceof Wn||r instanceof gt||r instanceof sd||r instanceof zr)}function Ey(r,e,t){if(!oS(t)||!Gb(t)){const s=Hf(t);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function vg(r,e,t){if((e=Ct(e))instanceof id)return e._internalPath;if(typeof e=="string")return Ty(r,e);throw Cf("Field path arguments must be of type string or ",r,!1,void 0,t)}const Ck=new RegExp("[~\\*/\\[\\]]");function Ty(r,e,t){if(e.search(Ck)>=0)throw Cf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new id(...e.split("."))._internalPath}catch{throw Cf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Cf(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||h)&&(m+=" (found",u&&(m+=` in field ${s}`),h&&(m+=` in document ${o}`),m+=")"),new he(J.INVALID_ARGUMENT,p+r+m)}function lS(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class uS{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ld("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Dk extends uS{data(){return super.data()}}function ld(r,e){return typeof e=="string"?Ty(r,e):e instanceof id?e._internalPath:e._delegate._internalPath}/**
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
 */function cS(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new he(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class by{}class hS extends by{}function Ia(r,e,...t){let s=[];e instanceof by&&s.push(e),s=s.concat(t),function(u){const h=u.filter(m=>m instanceof wy).length,p=u.filter(m=>m instanceof ud).length;if(h>1||h>0&&p>0)throw new he(J.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class ud extends hS{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ud(e,t,s)}_apply(e){const t=this._parse(e);return fS(e._query,t),new Ds(e.firestore,e.converter,lg(e._query,t))}_parse(e){const t=ad(e.firestore);return function(u,h,p,m,g,v,b){let S;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new he(J.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){$T(b,v);const L=[];for(const $ of b)L.push(FT(m,u,$));S={arrayValue:{values:L}}}else S=FT(m,u,b)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||$T(b,v),S=Ik(p,h,b,v==="in"||v==="not-in");return xt.create(g,v,S)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ca(r,e,t){const s=e,o=ld("where",r);return ud._create(o,s,t)}class wy extends by{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new wy(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:dr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const p=u.getFlattenedFilters();for(const m of p)fS(h,m),h=lg(h,m)}(e._query,t),new Ds(e.firestore,e.converter,lg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sy extends hS{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Sy(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new he(J.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new he(J.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hu(u,h)}(e._query,this._field,this._direction);return new Ds(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new al(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function Ay(r,e="asc"){const t=e,s=ld("orderBy",r);return Sy._create(s,t)}function FT(r,e,t){if(typeof(t=Ct(t))=="string"){if(t==="")throw new he(J.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uw(e)&&t.indexOf("/")!==-1)throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(it.fromString(t));if(!_e.isDocumentKey(s))throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return aT(r,new _e(s))}if(t instanceof gt)return aT(r,t._key);throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hf(t)}.`)}function $T(r,e){if(!Array.isArray(r)||r.length===0)throw new he(J.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fS(r,e){const t=function(o,u){for(const h of o)for(const p of h.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new he(J.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(J.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Nk{convertValue(e,t="none"){switch(bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Is(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Tf].arrayValue)==null?void 0:o.values)==null?void 0:u.map(h=>Et(h.doubleValue));return new zr(t)}convertGeoPoint(e){return new jr(Et(e.latitude),Et(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Gf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(zu(e));default:return null}}convertTimestamp(e){const t=Es(e);return new nt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=it.fromString(e);Ye(Ow(s),9688,{name:e});const o=new qu(s.get(1),s.get(3)),u=new _e(s.popFirst(5));return o.isEqual(t)||xi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function dS(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Au{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ya extends uS{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ld("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(J.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ya._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ya._jsonSchemaVersion="firestore/documentSnapshot/1.0",ya._jsonSchema={type:It("string",ya._jsonSchemaVersion),bundleSource:It("string","DocumentSnapshot"),bundleName:It("string"),bundle:It("string")};class sf extends ya{data(e={}){return super.data(e)}}class _a{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Au(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new sf(this._firestore,this._userDataWriter,s.key,s,new Au(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(p=>{const m=new sf(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Au(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const m=new sf(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Au(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return p.type!==0&&(g=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),v=h.indexOf(p.doc.key)),{type:Ok(p.type),doc:m,oldIndex:g,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(J.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_a._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$g.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ok(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:r})}}/**
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
 */function Ry(r){r=Mn(r,gt);const e=Mn(r.firestore,As);return vk(rd(e),r._key).then(t=>mS(e,r,t))}_a._jsonSchemaVersion="firestore/querySnapshot/1.0",_a._jsonSchema={type:It("string",_a._jsonSchemaVersion),bundleSource:It("string","QuerySnapshot"),bundleName:It("string"),bundle:It("string")};class xy extends Nk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}function pS(r){r=Mn(r,Ds);const e=Mn(r.firestore,As),t=rd(e),s=new xy(e);return cS(r._query),Ek(t,r._query).then(o=>new _a(e,s,r,o))}function kk(r,e,t){r=Mn(r,gt);const s=Mn(r.firestore,As),o=dS(r.converter,e);return Iy(s,[sS(ad(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,ur.none())])}function va(r,e,t,...s){r=Mn(r,gt);const o=Mn(r.firestore,As),u=ad(o);let h;return h=typeof(e=Ct(e))=="string"||e instanceof id?xk(u,"updateDoc",r._key,e,t,s):Rk(u,"updateDoc",r._key,e),Iy(o,[h.toMutation(r._key,ur.exists(!0))])}function Mk(r,e){const t=Mn(r.firestore,As),s=cr(r),o=dS(r.converter,e);return Iy(t,[sS(ad(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,ur.exists(!1))]).then(()=>s)}function cd(r,...e){var m,g,v;r=Ct(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||HT(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(HT(e[s])){const b=e[s];e[s]=(m=b.next)==null?void 0:m.bind(b),e[s+1]=(g=b.error)==null?void 0:g.bind(b),e[s+2]=(v=b.complete)==null?void 0:v.bind(b)}let u,h,p;if(r instanceof gt)h=Mn(r.firestore,As),p=Yf(r._key.path),u={next:b=>{e[s]&&e[s](mS(h,r,b))},error:e[s+1],complete:e[s+2]};else{const b=Mn(r,Ds);h=Mn(b.firestore,As),p=b._query;const S=new xy(h);u={next:I=>{e[s]&&e[s](new _a(h,S,b,I))},error:e[s+1],complete:e[s+2]},cS(r._query)}return function(S,I,L,$){const B=new yy($),ee=new py(I,B,L);return S.asyncQueue.enqueueAndForget(async()=>hy(await If(S),ee)),()=>{B.Nu(),S.asyncQueue.enqueueAndForget(async()=>fy(await If(S),ee))}}(rd(h),p,o,u)}function Iy(r,e){return function(s,o){const u=new bi;return s.asyncQueue.enqueueAndForget(async()=>ok(await _k(s),o,u)),u.promise}(rd(r),e)}function mS(r,e,t){const s=t.docs.get(e._key),o=new xy(r);return new ya(r,o,e._key,s,new Au(t.hasPendingWrites,t.fromCache),e.converter)}function GT(){return new vy("serverTimestamp")}(function(e,t=!0){(function(o){rl=o})(tl),Bo(new wa("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new As(new xN(s.getProvider("auth-internal")),new DN(h,s.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new he(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qu(g.options.projectId,v)}(h,o),h);return u={useFetchStreams:t,...u},p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),gs(YE,QE,e),gs(YE,QE,"esm2020")})();const Pk={apiKey:"AIzaSyB5aFUQbtG1rShW-1O88aZjCG7uErNxmgQ",authDomain:"pdms-test-8a5cc.firebaseapp.com",projectId:"pdms-test-8a5cc",storageBucket:"pdms-test-8a5cc.firebasestorage.app",messagingSenderId:"631678861167",appId:"1:631678861167:web:5cd775b77e53535700329a"},Cy=J1(Pk);nS(Cy);const Vt=nS(Cy),Da=TN(Cy);function Vk({onLoginSuccess:r}){const[e,t]=F.useState(""),[s,o]=F.useState(""),u=Qu(),h=()=>{u("/signup")},p=()=>{s2(Da,e,s).then(()=>{r(),u("/dashboard")}).catch(m=>{alert("로그인 실패: "+m.message)})};return T.jsxs(Lk,{children:[T.jsxs(Uk,{children:[T.jsxs(jk,{children:[T.jsx(zk,{children:"PDMS"}),T.jsx(qk,{children:"Pushcomz Design Management System"})]}),T.jsxs(Bk,{children:[T.jsx(Hk,{type:"text",value:e,onChange:m=>t(m.target.value),placeholder:"이메일을 입력해주세요."}),T.jsx(Fk,{type:"password",value:s,onChange:m=>o(m.target.value),placeholder:"비밀번호를 입력해주세요."})]}),T.jsx($k,{onClick:p,children:"로그인"}),T.jsxs(Yk,{children:[T.jsx(Qk,{children:"계정이 없습니까?"}),T.jsx(Kk,{onClick:h,children:"등록하기"})]})]}),T.jsx(Gk,{children:"© Pushcomz Corp."})]})}const Lk=Y.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:r})=>r.colors.gray01};
`,Uk=Y.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:r})=>r.colors.white01};
`,jk=Y.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,zk=Y.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.navy};
`,qk=Y.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,Bk=Y.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
`,Hk=Y.input`
  width: 460px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,Fk=Y.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,$k=Y.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:r})=>r.colors.white01};
`,Gk=Y.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`,Yk=Y.div`
  
`,Qk=Y.span`
  margin-right: 10px;
  font-size: 13px;
`,Kk=Y.button`
  font-size: 13px;
  color: ${({theme:r})=>r.colors.navy};
`,gS="./assets/logo-NEcdCz8m.svg";function Xk(){const[r,e]=F.useState(""),[t,s]=F.useState(null),o=Qu();F.useEffect(()=>{const p=zf(Da,async m=>{if(m){m.displayName&&e(m.displayName);const g=await Ry(cr(Vt,"users",m.uid));g.exists()?s(g.data().role):s(null)}else e(""),s(null)});return()=>p()},[]);const u=()=>{c2(Da).then(()=>{o("/")}).catch(p=>{alert("로그아웃 중 오류가 발생했습니다: "+p.message)})},h=p=>{switch(p){case 1:return"요청자";case 2:return"디자이너";case 3:return"담당자";default:return"역할 없음"}};return T.jsxs(Wk,{children:[T.jsx(Zk,{src:gS}),T.jsxs(Jk,{children:[T.jsxs(eM,{children:[T.jsx(tM,{children:r}),"님(",h(t),") 환영합니다."]}),T.jsx(nM,{onClick:u,children:"로그아웃"}),T.jsx(rM,{})]})]})}const Wk=Y.header`
  ${({theme:r})=>r.mixin.flex("center","space-between")};
  padding: 12px 48px;
  font-family: 'Pretendard';
  background-color: ${({theme:r})=>r.colors.black};
`,Zk=Y.img``,Jk=Y.div``,eM=Y.span`
  margin-right: 24px;
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`,tM=Y.span`
  font-weight: 700;
`,nM=Y.button`
  padding: 5px 10px;
  border: 1px solid ${({theme:r})=>r.colors.white01};
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`,rM=Y.span`
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`,Dy="./assets/url-icon-DJKri2bW.svg";function iM({item:r,index:e,onReviewComplete:t,onCancel:s,onEditClick:o,onDetailClick:u}){const h=m=>{if(!m)return"-";if(m.toDate){const g=m.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return m},p=m=>{m.stopPropagation(),u(r)};return T.jsxs(sM,{isCanceled:r.status==="취소",children:[T.jsx(sr,{children:e}),T.jsx(sr,{children:r.design_request_id}),T.jsx(sr,{children:h(r.request_date)}),T.jsx(aM,{children:h(r.completion_dt)}),T.jsx(oM,{children:h(r.open_dt)}),T.jsx(sr,{children:r.task_form}),T.jsx(lM,{children:r.task_type}),T.jsx(uM,{children:T.jsxs(hM,{children:[r.emergency?T.jsx(dM,{children:"긴급"}):"",T.jsx(fM,{onClick:p,children:r.requirement})]})}),T.jsx(sr,{children:T.jsx(YT,{href:r.url,target:"_blank"})}),T.jsx(cM,{children:T.jsx(pM,{onClick:p,children:r.note||""})}),T.jsx(sr,{children:T.jsx(mM,{status:r.status,children:r.status==="검수요청"?"진행중":r.status==="검수중"?"검수요청":r.status||"대기"})}),T.jsx(sr,{children:r.assigned_designer||"미배정"}),T.jsx(sr,{children:r.manager_review_status==="검수완료"&&r.result_url?T.jsx(YT,{href:r.result_url,target:"_blank"}):""}),T.jsx(sr,{children:r.manager_review_status==="검수완료"?r.status!=="완료"?T.jsx(gM,{onClick:()=>t(r.id),children:"검수완료"}):T.jsx(yM,{children:"검수완료"}):""}),T.jsx(sr,{children:T.jsx(_M,{onClick:()=>o(r.id),children:"수정"})}),T.jsx(sr,{children:T.jsx(vM,{onClick:()=>s(r.id),children:"취소"})})]})}const sM=Y.tr`
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
`,sr=Y.td`
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
`,aM=Y.td`
  color: ${({theme:r})=>r.colors.red};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,oM=Y.td`
  color: ${({theme:r})=>r.colors.blue02};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,lM=Y.td`
  padding: 15px 12px;
  line-height: 15px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,uM=Y.td`
  line-height: 15px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,cM=Y.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  background-color: #fffff1;
`,hM=Y.div`
  ${({theme:r})=>r.mixin.flex("center")};
  padding: 0 12px;
`,fM=Y.span`
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
`,dM=Y.span`
  margin-right: 8px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
  white-space: nowrap;
`,YT=Y.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${Dy}) no-repeat center / contain;
`,pM=Y.span`
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
`,mM=Y.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:r,theme:e})=>{switch(r){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.blue02;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.black}}};
  background-color: ${({status:r,theme:e})=>{switch(r){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.lightpupple;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,gM=Y.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: ${({theme:r})=>r.colors.black};
`,yM=Y.span`
  color: green;
  font-weight: bold;
`,_M=Y.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: ${({theme:r})=>r.colors.black};
`,vM=Y.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: ${({theme:r})=>r.colors.black};
`;function EM({data:r,onReviewComplete:e,onCancel:t,onEditClick:s,onDetailClick:o}){return T.jsx(TM,{children:T.jsxs(bM,{children:[T.jsx(wM,{children:"요청 리스트"}),T.jsxs("colgroup",{children:[T.jsx("col",{style:{width:"50px"}}),T.jsx("col",{style:{width:"100px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"120px"}}),T.jsx("col",{}),T.jsx("col",{style:{width:"90px"}}),T.jsx("col",{style:{width:"220px"}}),T.jsx("col",{style:{width:"100px"}}),T.jsx("col",{style:{width:"85px"}}),T.jsx("col",{style:{width:"90px"}}),T.jsx("col",{style:{width:"100px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"80px"}})]}),T.jsx("thead",{children:T.jsxs("tr",{children:[T.jsx(ln,{children:"번호"}),T.jsx(ln,{children:"문서번호"}),T.jsx(ln,{children:"요청일"}),T.jsxs(ln,{children:["완료",T.jsx("br",{}),"요청일"]}),T.jsx(ln,{children:"오픈일"}),T.jsx(ln,{children:"업무형태"}),T.jsx(ln,{children:"업무타입"}),T.jsx(ln,{children:"작업항목"}),T.jsx(ln,{children:"요청서 URL"}),T.jsx(ln,{children:"메모"}),T.jsx(ln,{children:"진행상태"}),T.jsx(ln,{children:"디자이너"}),T.jsx(ln,{children:"산출물 URL"}),T.jsx(ln,{children:"검수"}),T.jsx(ln,{children:"수정"}),T.jsx(ln,{children:"취소"})]})}),T.jsx("tbody",{children:r.length>0?r.map((u,h)=>T.jsx(iM,{index:h+1,item:u,onReviewComplete:e,onCancel:t,onEditClick:s,onDetailClick:o},u.id)):T.jsx("tr",{children:T.jsx("td",{colSpan:16,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const TM=Y.div`
  padding: 0 48px;
`,bM=Y.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
  text-align: center;
`,wM=Y.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,ln=Y.th`
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
`;function Ny(){const r=new Date,e=r.getFullYear(),t=r.getMonth()+1,s=r.getDate();return T.jsx(SM,{children:T.jsxs(AM,{children:[e,"년 ",t,"월 ",s,"일 디자인 편성 요청 스케줄"]})})}const SM=Y.div`
  padding: 30px 48px;
  background-color: ${({theme:r})=>r.colors.gray04};
`,AM=Y.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`;function RM({setIsDrawerOpen:r,setEditData:e,setDetailData:t}){const[s,o]=F.useState(""),[u,h]=F.useState([]);F.useEffect(()=>{const b=zf(Da,S=>{S&&S.displayName&&o(S.displayName)});return()=>b()},[]),F.useEffect(()=>{if(!s)return;const b=Ia(wi(Vt,"design_request"),Ca("requester","==",s),Ay("design_request_id","desc")),S=cd(b,I=>{const L=I.docs.map($=>({id:$.id,...$.data()}));h(L)});return()=>S()},[s]);const p=async b=>{await va(cr(Vt,"design_request",b),{status:"완료",requester_review_status:"검수완료"}),h(S=>S.map(I=>I.id===b?{...I,status:"완료",requester_review_status:"검수완료"}:I)),alert("완료 처리되었습니다.")},m=async b=>{const S=cr(Vt,"design_request",b);await va(S,{requester_edit_state:!0});const I=await Ry(S);if(I.exists()){const L={id:I.id,...I.data()};e(L),r(!0)}},g=b=>{t(b),r(!0)},v=async b=>{await va(cr(Vt,"design_request",b),{status:"취소"}),h(S=>S.map(I=>I.id===b?{...I,status:"취소"}:I))};return T.jsxs(T.Fragment,{children:[T.jsx(Ny,{}),T.jsx(EM,{data:u,onReviewComplete:p,onCancel:v,onEditClick:m,onDetailClick:g})]})}function xM({index:r,item:e,onChange:t,onSave:s}){const o=u=>{if(!u)return"-";if(u.toDate){const h=u.toDate();return`${h.getMonth()+1}/${h.getDate()}`}return u};return T.jsxs(IM,{isCanceled:e.status==="취소",children:[T.jsx(pi,{children:r}),T.jsx(pi,{children:e.design_request_id}),T.jsx(pi,{children:o(e.request_date)}),T.jsx(pi,{children:e.requester}),T.jsx(CM,{children:o(e.completion_dt)}),T.jsx(DM,{children:o(e.open_dt)}),T.jsx(pi,{children:e.task_form}),T.jsx(NM,{children:e.task_type}),T.jsx(OM,{children:T.jsxs(MM,{children:[e.emergency?T.jsx(PM,{children:"긴급"}):"",T.jsx(VM,{children:e.requirement})]})}),T.jsx(pi,{children:T.jsx(LM,{href:e.url,target:"_blank"})}),T.jsx(kM,{children:T.jsx(UM,{children:e.note||""})}),T.jsx(QT,{children:T.jsx(KT,{type:"date",onChange:u=>t(e.id,"start_dt",u.target.value),disabled:e.status==="취소"})}),T.jsx(QT,{children:T.jsx(KT,{type:"date",onChange:u=>t(e.id,"end_dt",u.target.value),disabled:e.status==="취소"})}),T.jsx(pi,{children:T.jsx(jM,{type:"text",placeholder:"산출물 URL을 입력해주세요.",onChange:u=>t(e.id,"result_url",u.target.value),disabled:e.status==="취소"})}),T.jsx(pi,{children:T.jsxs("select",{onChange:u=>t(e.id,"status",u.target.value),disabled:e.status==="취소",children:[T.jsx("option",{value:"대기중",children:"대기"}),T.jsx("option",{value:"진행중",children:"진행중"}),T.jsx("option",{value:"검수요청",children:"검수요청"})]})}),T.jsx(pi,{children:T.jsx(zM,{onClick:()=>s(e.id),disabled:e.status==="취소",children:"저장"})})]})}const IM=Y.tr`
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
`,pi=Y.td`
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
`,CM=Y.td`
  color: ${({theme:r})=>r.colors.red};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,DM=Y.td`
  color: ${({theme:r})=>r.colors.blue02};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,NM=Y.td`
  padding: 15px 12px;
  line-height: 15px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,OM=Y.td`
  line-height: 15px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,kM=Y.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  background-color: #fffff1;
`,QT=Y.td`
  padding: 0 12px;
`,MM=Y.div`
  ${({theme:r})=>r.mixin.flex("center")};
  padding: 0 12px;
`,PM=Y.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
  white-space: nowrap;
`,VM=Y.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
`,LM=Y.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${Dy}) no-repeat center / contain;
`,UM=Y.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
`,KT=Y.input.attrs({type:"date"})`
  width: 100%;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,jM=Y.input`
  width: 100%;
  padding: 0 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,zM=Y.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
`;function qM({requests:r,onChange:e,onSave:t}){return T.jsx(BM,{children:T.jsxs(HM,{children:[T.jsxs("colgroup",{children:[T.jsx("col",{style:{width:"50px"}}),T.jsx("col",{style:{width:"100px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"120px"}}),T.jsx("col",{}),T.jsx("col",{style:{width:"90px"}}),T.jsx("col",{style:{width:"160px"}}),T.jsx("col",{style:{width:"120px"}}),T.jsx("col",{style:{width:"120px"}}),T.jsx("col",{}),T.jsx("col",{style:{width:"100px"}}),T.jsx("col",{style:{width:"80px"}})]}),T.jsx("thead",{children:T.jsxs("tr",{children:[T.jsx(un,{children:"번호"}),T.jsx(un,{children:"문서번호"}),T.jsx(un,{children:"요청일"}),T.jsx(un,{children:"요청자"}),T.jsxs(un,{children:["완료",T.jsx("br",{}),"요청일"]}),T.jsx(un,{children:"오픈일"}),T.jsx(un,{children:"업무형태"}),T.jsx(un,{children:"업무타입"}),T.jsx(un,{children:"작업항목"}),T.jsx(un,{children:"요청서 URL"}),T.jsx(un,{children:"메모"}),T.jsx(un,{children:"디자인 시작일"}),T.jsx(un,{children:"디자인 종료일"}),T.jsx(un,{children:"산출물 링크"}),T.jsx(un,{children:"진행상태"}),T.jsx(un,{children:"저장"})]})}),T.jsx("tbody",{children:r.length>0?r.map((s,o)=>T.jsx(xM,{index:o+1,item:s,onChange:e,onSave:t},s.id)):T.jsx("tr",{children:T.jsx("td",{colSpan:16,style:{textAlign:"center"},children:"배정된 요청이 없습니다."})})})]})})}const BM=Y.div`
  padding: 0 48px;
`,HM=Y.table`
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
`,un=Y.th`
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
`;function FM(){const[r,e]=F.useState([]),[t,s]=F.useState(""),[o,u]=F.useState({});F.useEffect(()=>{const g=zf(Da,v=>{v&&v.displayName&&s(v.displayName)});return()=>g()},[]),F.useEffect(()=>{if(!t)return;const g=Ia(wi(Vt,"design_request"),Ca("assigned_designer","==",t),Ay("design_request_id","desc")),v=cd(g,b=>{const S=b.docs.map(I=>({id:I.id,...I.data()}));e(S)});return()=>v()},[t]);const h=(g,v,b)=>{u(S=>({...S,[g]:{...S[g],[v]:b}}))},p=g=>g?nt.fromDate(new Date(g)):null,m=async g=>{const v=cr(Vt,"design_request",g),b=o[g];if(!b){alert("변경된 내용이 없습니다.");return}await va(v,{designer_start_date:p(b.start_dt),designer_end_date:p(b.end_dt),result_url:b.result_url||"",status:b.status}),alert("저장되었습니다.")};return T.jsxs($M,{children:[T.jsx(Ny,{}),T.jsx(GM,{children:"디자이너 화면"}),T.jsx(qM,{requests:r,formData:o,onChange:h,onSave:m})]})}const $M=Y.div``,GM=Y.h2`
  margin-bottom: 20px;
  padding: 0 48px;
`;function YM({index:r,item:e,designerList:t,selectedDesigner:s,onDesignerSelect:o,onAssignDesigner:u,onSendToRequester:h}){const p=m=>{if(!m)return"-";if(m.toDate){const g=m.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return m};return T.jsxs(QM,{isCanceled:e.status==="취소",children:[T.jsx(Kn,{children:r}),T.jsx(Kn,{children:e.design_request_id}),T.jsx(Kn,{children:p(e.request_date)}),T.jsx(Kn,{children:e.requester}),T.jsx(KM,{children:p(e.completion_dt)}),T.jsx(XM,{children:p(e.open_dt)}),T.jsx(Kn,{children:e.task_form}),T.jsx(WM,{children:e.task_type}),T.jsx(ZM,{children:T.jsxs(eP,{children:[e.emergency?T.jsx(tP,{children:"긴급"}):"",T.jsx(nP,{children:e.requirement})]})}),T.jsx(Kn,{children:T.jsx(XT,{href:e.url,target:"_blank"})}),T.jsx(JM,{children:T.jsx(rP,{children:e.note||""})}),T.jsx(Kn,{children:T.jsx(iP,{status:e.status,children:e.status==="검수요청"?"검수중":e.status||"대기"})}),T.jsx(Kn,{children:e.result_url?T.jsx(XT,{href:e.result_url,target:"_blank"}):""}),T.jsx(Kn,{children:p(e.designer_start_date)}),T.jsx(Kn,{children:p(e.designer_end_date)}),T.jsxs(Kn,{children:[T.jsxs(aP,{value:s,onChange:m=>o(m.target.value),disabled:e.status==="취소",children:[T.jsx("option",{value:"",children:"디자이너 선택"}),t.map(m=>T.jsx("option",{value:m.name,children:m.name},m.id))]}),T.jsx(sP,{onClick:u,disabled:e.status==="취소",children:"배정"})]}),T.jsx(Kn,{children:e.status==="검수요청"&&e.manager_review_status!=="검수완료"?T.jsx(oP,{onClick:h,children:"검수완료"}):e.manager_review_status==="검수완료"?T.jsx(lP,{children:"검수완료"}):""})]})}const QM=Y.tr`
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
`,Kn=Y.td`
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
`,KM=Y.td`
  color: ${({theme:r})=>r.colors.red};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,XM=Y.td`
  color: ${({theme:r})=>r.colors.blue02};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,WM=Y.td`
  padding: 15px 12px;
  line-height: 15px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,ZM=Y.td`
  line-height: 15px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,JM=Y.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  background-color: #fffff1;
`,eP=Y.div`
  ${({theme:r})=>r.mixin.flex("center")};
  padding: 0 12px;
`,tP=Y.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
  white-space: nowrap;
`,nP=Y.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
`,XT=Y.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${Dy}) no-repeat center / contain;
`,rP=Y.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
`,iP=Y.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:r,theme:e})=>{switch(r){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.red;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.black}}};
  background-color: ${({status:r,theme:e})=>{switch(r){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.pink03;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,sP=Y.button`
  margin: 6px 0 0 10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
`,aP=Y.select`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,oP=Y.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
`,lP=Y.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`;function uP({data:r,designerList:e,selectedDesigners:t,designerSelect:s,assignDesigner:o,sendToRequester:u}){return T.jsx(cP,{children:T.jsxs(hP,{children:[T.jsx(fP,{children:"매니저 요청 리스트"}),T.jsxs("colgroup",{children:[T.jsx("col",{style:{width:"50px"}}),T.jsx("col",{style:{width:"100px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"120px"}}),T.jsx("col",{}),T.jsx("col",{style:{width:"90px"}}),T.jsx("col",{style:{width:"160px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"85px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"180px"}}),T.jsx("col",{style:{width:"80px"}})]}),T.jsx("thead",{children:T.jsxs("tr",{children:[T.jsx(Zt,{children:"번호"}),T.jsx(Zt,{children:"문서번호"}),T.jsx(Zt,{children:"요청일"}),T.jsx(Zt,{children:"요청자"}),T.jsxs(Zt,{children:["완료",T.jsx("br",{}),"요청일"]}),T.jsx(Zt,{children:"오픈일"}),T.jsx(Zt,{children:"업무형태"}),T.jsx(Zt,{children:"업무타입"}),T.jsx(Zt,{children:"작업항목"}),T.jsx(Zt,{children:"요청서 URL"}),T.jsx(Zt,{children:"메모"}),T.jsx(Zt,{children:"진행상태"}),T.jsx(Zt,{children:"산출물 URL"}),T.jsxs(Zt,{children:["디자인",T.jsx("br",{}),"시작일"]}),T.jsxs(Zt,{children:["디자인",T.jsx("br",{}),"종료일"]}),T.jsx(Zt,{children:"배정"}),T.jsx(Zt,{children:"검수"})]})}),T.jsx("tbody",{children:r.length>0?r.map((h,p)=>T.jsx(YM,{index:p+1,item:h,designerList:e,selectedDesigner:t[h.id]||"",onDesignerSelect:m=>s(h.id,m),onAssignDesigner:()=>o(h.id),onSendToRequester:()=>u(h.id)},h.id)):T.jsx("tr",{children:T.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const cP=Y.div`
  padding: 0 48px;
`,hP=Y.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
  text-align: center;
`,fP=Y.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Zt=Y.th`
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
`;function dP(){const[r,e]=F.useState([]),[t,s]=F.useState([]),[o,u]=F.useState({});F.useEffect(()=>{const g=Ia(wi(Vt,"design_request"),Ay("design_request_id","desc")),v=cd(g,b=>{const S=b.docs.map(I=>({id:I.id,...I.data()}));e(S)});return()=>v()},[]),F.useEffect(()=>{(async()=>{const v=Ia(wi(Vt,"users"),Ca("role","==",2)),S=(await pS(v)).docs.map(I=>({id:I.id,...I.data()}));s(S)})()},[]);const h=(g,v)=>{u(b=>({...b,[g]:v}))},p=async g=>{const v=o[g];if(!v){alert("디자이너를 선택하세요.");return}const b=cr(Vt,"design_request",g);await va(b,{assigned_designer:v}),alert("디자이너가 배정되었습니다!"),e(S=>S.map(I=>I.id===g?{...I,assigned_designer:v}:I))},m=async g=>{await va(cr(Vt,"design_request",g),{manager_review_status:"검수완료",status:"검수중"}),e(v=>v.map(b=>b.id===g?{...b,manager_review_status:"검수완료",status:"검수중"}:b)),alert("요청자에게 전달되었습니다.")};return T.jsxs(pP,{children:[T.jsx(Ny,{}),T.jsx(mP,{children:"매니저 요청리스트"}),T.jsx(uP,{data:r,designerList:t,selectedDesigners:o,designerSelect:h,assignDesigner:p,sendToRequester:m})]})}const pP=Y.div``,mP=Y.h2`
  margin-bottom: 20px;
  padding: 0 48px;
`;function gP({userRole:r,setIsDrawerOpen:e,setEditData:t,setDetailData:s}){const o=()=>{if(r===1)return T.jsx(RM,{setIsDrawerOpen:e,setEditData:t,setDetailData:s});if(r===2)return T.jsx(FM,{});if(r===3)return T.jsx(dP,{})};return T.jsx(yP,{children:o()})}const yP=Y.main``,_P="./assets/aside-logo-DoEwMgfJ.svg",vP="./assets/myrequest-icon-DhmqrZY6.svg";function EP({item:r}){return T.jsxs(TP,{status:r.status,children:[T.jsx(bP,{children:r.status}),T.jsx(wP,{status:r.status,children:r.count})]})}const TP=Y.li`
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
`,bP=Y.span`
  font-size: 16px;
  font-weight: 500;
`,wP=Y.span`
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
`;function SP({requests:r,role:e,userName:t,onRequestButtonClick:s}){const o=[{status:"대기중",count:r.filter(h=>h.status==="대기").length},{status:"작업중",count:r.filter(h=>h.status==="진행중").length},{status:"완료",count:r.filter(h=>h.status==="완료").length}],u=(h,p)=>{switch(h){case 1:return`${p}님의 요청`;case 2:return`${p}님의 작업 현황`;case 3:return"전체 요청 현황";default:return"요청 현황"}};return T.jsxs(AP,{children:[T.jsxs(RP,{children:[T.jsx(xP,{src:_P}),T.jsx(IP,{children:"업무 관리시스템"})]}),e===1&&T.jsx(CP,{children:T.jsx(DP,{onClick:s,children:"디자인 요청 등록"})}),T.jsxs(NP,{children:[T.jsxs(OP,{children:[T.jsx(kP,{src:vP}),T.jsx(MP,{children:u(e,t)})]}),T.jsx(PP,{children:o.map(h=>T.jsx(EP,{item:h},h.status))})]})]})}const AP=Y.aside`
  height: 100%;
  border-right: 1px solid ${({theme:r})=>r.colors.black};
`,RP=Y.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  padding: 19.5px 23px;
  border-bottom: 1px solid ${({theme:r})=>r.colors.gray02};
`,xP=Y.img`
  margin-right: 8px;
`,IP=Y.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
  white-space: nowrap;
`,CP=Y.div`
  padding: 32px 20px;
  border-bottom: 1px solid ${({theme:r})=>r.colors.gray02};
`,DP=Y.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
  white-space: nowrap;
`,NP=Y.div`
  padding: 0 24px;
`,OP=Y.div`
  ${({theme:r})=>r.mixin.flex("center")};
  gap: 12px;
  padding: 30px 0;
`,kP=Y.img``,MP=Y.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
`,PP=Y.ul`
  ${({theme:r})=>r.mixin.flex("center")};
  flex-direction: column;
`;function VP({isOpen:r,onClose:e,children:t}){return T.jsxs(T.Fragment,{children:[T.jsx(LP,{isVisible:r,onClick:e}),T.jsx(UP,{isVisible:r,onClick:s=>s.stopPropagation(),children:t})]})}const LP=Y.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({isVisible:r})=>r?1:0};
  pointer-events: ${({isVisible:r})=>r?"auto":"none"};
  transition: opacity 0.3s ease;
`,UP=Y.div`
  position: fixed;
  top: 64px;
  right: 0;
  width: 680px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  overflow-y: auto;
  padding: 24px;
  transform: ${({isVisible:r})=>r?"translateX(0)":"translateX(100%)"};
  transition: transform 0.3s ease;
`,yS="/assets/requestformexit-button-BcAG546a.svg",jP="./assets/checkbox-checked-eOVFoR8b.svg",zP="./assets/selectbox-arrow-BwC8UGU0.svg",Pm={completion_dt:"",open_dt:"",task_form:"GHS",task_type:"프론트테마",requirement:"",url:"",note:"",emergency:!1};function WT({userName:r,editData:e,isDrawerOpen:t,onClose:s}){const o=(e==null?void 0:e.requester_edit_state)===!0,[u,h]=F.useState(Pm),p=(b,S)=>{h(I=>({...I,[b]:S}))},m=b=>b?nt.fromDate(new Date(b)):null,g=async()=>{const b=new Date,S=b.getFullYear().toString().slice(2),I=(b.getMonth()+1).toString().padStart(2,"0"),L=Ia(wi(Vt,"design_request"),Ca("design_request_id",">=",`H${S}${I}000`),Ca("design_request_id","<",`H${S}${I}999`)),B=(await pS(L)).size+1;return`H${S}${I}${B.toString().padStart(3,"0")}`},v=async b=>{if(b.preventDefault(),!u.requirement){alert("요청 내용을 입력하세요.");return}if(o&&(e!=null&&e.id)){await va(cr(Vt,"design_request",e.id),{completion_dt:m(u.completion_dt),open_dt:m(u.open_dt),task_form:u.task_form,task_type:u.task_type,requirement:u.requirement,url:u.url,note:u.note,emergency:u.emergency,requester_edit_state:!1,updated_at:GT()}),alert("요청이 수정되었습니다!"),s();return}const S=new Date;Mk(wi(Vt,"design_request"),{design_request_id:await g(),request_date:m(S.toISOString()),requester:r,completion_dt:m(u.completion_dt),open_dt:m(u.open_dt),task_form:u.task_form,task_type:u.task_type,requirement:u.requirement,url:u.url,note:u.note,status:"대기",assigned_designer:"미배정",requester_review_status:"검수대기",manager_review_status:"",result_url:"",designer_start_date:null,designer_end_date:null,emergency:u.emergency,requester_edit_state:!1,designer_edit_state:!1,created_at:GT(),updated_at:null,delete_at:null,work_hour:""}).then(()=>{alert("요청이 등록되었습니다!"),h(Pm),s()}).catch(I=>{alert("등록 중 오류가 발생했습니다: "+I.message)})};return F.useEffect(()=>{o&&e&&h({completion_dt:e.completion_dt?e.completion_dt.toDate().toISOString().slice(0,10):"",open_dt:e.open_dt?e.open_dt.toDate().toISOString().slice(0,10):"",task_form:e.task_form??"GHS",task_type:e.task_type??"프론트테마",requirement:e.requirement??"",url:e.url??"",note:e.note??"",emergency:e.emergency??!1})},[o,e]),F.useEffect(()=>{!t||o||h(Pm)},[t]),T.jsxs(T.Fragment,{children:[T.jsxs(BP,{children:[T.jsx(HP,{children:o?"디자인 요청 수정":"디자인 요청 등록"}),T.jsx(FP,{type:"button",onClick:s})]}),T.jsxs(qP,{onSubmit:v,children:[T.jsxs($P,{children:[T.jsx(GP,{children:"디자인 요청 등록"}),T.jsx("colgroup",{children:T.jsx("col",{style:{width:"120px"}})}),T.jsxs("tbody",{children:[T.jsxs("tr",{children:[T.jsx(mi,{children:"문서번호"}),T.jsx(gi,{children:o?e==null?void 0:e.design_request_id:""})]}),T.jsxs("tr",{children:[T.jsx(mi,{children:T.jsx(as,{htmlFor:"completion_dt",children:"완료 요청일"})}),T.jsx(gi,{children:T.jsx(ZT,{type:"date",id:"completion_dt",value:u.completion_dt,onChange:b=>p("completion_dt",b.target.value)})})]}),T.jsxs("tr",{children:[T.jsx(mi,{children:T.jsx(as,{htmlFor:"open_dt",children:"오픈일"})}),T.jsx(gi,{children:T.jsx(ZT,{type:"date",id:"open_dt",value:u.open_dt,onChange:b=>p("open_dt",b.target.value)})})]}),T.jsxs("tr",{children:[T.jsx(mi,{children:T.jsx(as,{htmlFor:"task_form",children:"업무 형태"})}),T.jsx(gi,{children:T.jsxs(e1,{id:"task_form",value:u.task_form,onChange:b=>p("task_form",b.target.value),children:[T.jsx("option",{value:"GHS",children:"GHS"}),T.jsx("option",{value:"MHC",children:"MHC"}),T.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),T.jsxs("tr",{children:[T.jsx(mi,{children:T.jsx(as,{htmlFor:"task_type",children:"업무 유형"})}),T.jsx(gi,{children:T.jsxs(e1,{id:"task_type",value:u.task_type,onChange:b=>p("task_type",b.target.value),children:[T.jsx("option",{value:"프론트테마",children:"프론트테마"}),T.jsx("option",{value:"별도기획전",children:"별도기획전"}),T.jsx("option",{value:"일자별배너",children:"일자별배너"}),T.jsx("option",{value:"핫새배너",children:"핫새배너"}),T.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),T.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),T.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),T.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),T.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),T.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),T.jsx("option",{value:"상품상세",children:"상품상세"}),T.jsx("option",{value:"제휴",children:"제휴"}),T.jsx("option",{value:"클럽",children:"클럽"}),T.jsx("option",{value:"팝업",children:"팝업"}),T.jsx("option",{value:"푸시",children:"푸시"}),T.jsx("option",{value:"홈테마",children:"홈테마"}),T.jsx("option",{value:"즉시배송",children:"즉시배송"}),T.jsx("option",{value:"트레이딩",children:"트레이딩"}),T.jsx("option",{value:"이벤트",children:"이벤트"}),T.jsx("option",{value:"기타",children:"기타"})]})})]}),T.jsxs("tr",{children:[T.jsx(mi,{children:T.jsx(as,{htmlFor:"requirement",children:"작업 항목"})}),T.jsx(gi,{children:T.jsx(YP,{type:"text",id:"requirement",value:u.requirement,onChange:b=>p("requirement",b.target.value),placeholder:"작업 항목을 입력하세요."})})]}),T.jsxs("tr",{children:[T.jsx(mi,{children:T.jsx(as,{htmlFor:"emergency",children:"긴급 일정"})}),T.jsx(gi,{children:T.jsx(QP,{children:T.jsxs(KP,{htmlFor:"emergency",children:[T.jsx(XP,{type:"checkbox",id:"emergency",checked:u.emergency,onChange:b=>p("emergency",b.target.checked)}),T.jsx(WP,{}),T.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),T.jsxs("tr",{children:[T.jsx(mi,{children:T.jsx(as,{htmlFor:"url",children:"요청서 URL"})}),T.jsx(gi,{children:T.jsx(JT,{id:"url",value:u.url,onChange:b=>p("url",b.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),T.jsxs("tr",{children:[T.jsx(mi,{children:T.jsx(as,{htmlFor:"note",children:"메모"})}),T.jsx(gi,{children:T.jsx(JT,{id:"note",value:u.note,onChange:b=>p("note",b.target.value),placeholder:"메모를 입력하세요."})})]})]})]}),T.jsx(ZP,{children:T.jsx(JP,{type:"submit",children:o?"수정 완료":"등록하기"})})]})]})}const qP=Y.form`
  font-family: 'Pretendard';
`,BP=Y.div`
  ${({theme:r})=>r.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,HP=Y.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
  letter-spacing: -0.48px;
`,FP=Y.button`
  width: 24px;
  height: 24px;
  background: url(${yS}) no-repeat center;
  background-size: contain;
`,$P=Y.table`
  width: 100%;
  color: ${({theme:r})=>r.colors.black};
  border-top: 1px solid ${({theme:r})=>r.colors.black};
`,GP=Y.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,mi=Y.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-left: none;
  background-color: ${({theme:r})=>r.colors.gray04};
`,gi=Y.td`
  padding: 12px 24px;
  border-right: none;
`,as=Y.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`,ZT=Y.input`
  width: 168px;
  padding: 6px 12px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,YP=Y.input`
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: #fffff1;
`,JT=Y.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,QP=Y.div`
  ${({theme:r})=>r.mixin.flex("center")};
  gap: 5px;
`,KP=Y.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,XP=Y.input`
  display: none;

  &:checked + span {
    background-color: ${({theme:r})=>r.colors.red};
    background-image: url(${jP}); // 체크 이미지 경로
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`,WP=Y.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 2px;
`,e1=Y.select`
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
  background-image: url(${zP}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:r})=>r.colors.black};
  }
`,ZP=Y.div`
  text-align: center;
`,JP=Y.button`
  margin-top: 24px;
  padding: 12.5px 32px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 15px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
`;function eV({data:r,onClose:e}){const t=s=>{if(!s)return"-";if(s.toDate){const o=s.toDate();return`${o.getMonth()+1}/${o.getDate()}`}return s};return T.jsxs(T.Fragment,{children:[T.jsxs(tV,{children:[T.jsx(nV,{children:"디자인 요청 상세"}),T.jsx(rV,{type:"button",onClick:e})]}),T.jsxs(iV,{children:[T.jsx(sV,{children:"디자인 요청 상세"}),T.jsx("colgroup",{children:T.jsx("col",{style:{width:"120px"}})}),T.jsxs("tbody",{children:[T.jsxs("tr",{children:[T.jsx(Nr,{children:"문서번호"}),T.jsx(Or,{children:r==null?void 0:r.design_request_id})]}),T.jsxs("tr",{children:[T.jsx(Nr,{children:"요청일"}),T.jsx(Or,{children:t(r==null?void 0:r.request_date)})]}),T.jsxs("tr",{children:[T.jsx(Nr,{children:"완료 요청일"}),T.jsx(Or,{children:t(r==null?void 0:r.completion_dt)})]}),T.jsxs("tr",{children:[T.jsx(Nr,{children:"오픈일"}),T.jsx(Or,{children:t(r==null?void 0:r.open_dt)})]}),T.jsxs("tr",{children:[T.jsx(Nr,{children:"업무 형태"}),T.jsx(Or,{children:r==null?void 0:r.task_form})]}),T.jsxs("tr",{children:[T.jsx(Nr,{children:"업무 유형"}),T.jsx(Or,{children:r==null?void 0:r.task_type})]}),T.jsxs("tr",{children:[T.jsx(Nr,{children:"작업 항목"}),T.jsx(Or,{children:r==null?void 0:r.requirement})]}),T.jsxs("tr",{children:[T.jsx(Nr,{children:"긴급 일정"}),T.jsx(Or,{children:r!=null&&r.emergency?"예":"아니오"})]}),T.jsxs("tr",{children:[T.jsx(Nr,{children:"요청서 URL"}),T.jsx(Or,{children:r!=null&&r.url?T.jsx(t1,{href:r==null?void 0:r.url,target:"_blank",rel:"noreferrer",children:r==null?void 0:r.url}):"-"})]}),T.jsxs("tr",{children:[T.jsx(Nr,{children:"메모"}),T.jsx(Or,{children:r!=null&&r.note?r.note.startsWith("http://")||r.note.startsWith("https://")?T.jsx(t1,{href:r.note,target:"_blank",children:r.note}):T.jsx(aV,{children:r.note}):"-"})]})]})]})]})}const tV=Y.div`
  ${({theme:r})=>r.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,nV=Y.h3`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
  letter-spacing: -0.48px;
`,rV=Y.button`
  width: 24px;
  height: 24px;
  background: url(${yS}) no-repeat center;
  background-size: contain;
`,iV=Y.table`
  width: 100%;
  border-top: 1px solid ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.black};
  font-family: 'Pretendard';
`,sV=Y.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Nr=Y.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-left: none;
  background-color: ${({theme:r})=>r.colors.gray04};
`,Or=Y.td`
  padding: 12px 24px;
  border-right: none;
`,t1=Y.a`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-word;
`,aV=Y.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;function oV(){const[r,e]=F.useState(0),[t,s]=F.useState([]),[o,u]=F.useState(""),[h,p]=F.useState(!1),[m,g]=F.useState(void 0),[v,b]=F.useState(null);F.useEffect(()=>{const L=zf(Da,async $=>{if($){u($.displayName||"");const B=await Ry(cr(Vt,"users",$.uid));if(B.exists()){const W=B.data().role,ie=$.displayName;e(W);let ue;W===1?ue=Ia(wi(Vt,"design_request"),Ca("requester","==",ie)):W===2?ue=Ia(wi(Vt,"design_request"),Ca("assigned_designer","==",ie)):ue=wi(Vt,"design_request"),cd(ue,ce=>{const de=ce.docs.map(D=>{const R=D.data();return{id:D.id,status:R.status??"대기중"}});s(de)})}}else e(0),u(""),s([])});return()=>L()},[]);const S=()=>{g(void 0),b("create"),p(!0)},I=()=>{p(!1),g(void 0)};return T.jsxs(lV,{children:[T.jsx(SP,{requests:t,userName:o,role:r,onRequestButtonClick:S}),T.jsxs(uV,{children:[T.jsx(Xk,{}),T.jsx(gP,{userRole:r,setIsDrawerOpen:p,setEditData:L=>{g(L),b("edit")},setDetailData:L=>{g(L),b("detail")}})]}),T.jsxs(VP,{isOpen:h,onClose:I,children:[v==="create"&&T.jsx(WT,{userName:o,isDrawerOpen:h,onClose:I}),v==="edit"&&m&&T.jsx(WT,{userName:o,isDrawerOpen:h,editData:m,onClose:I}),v==="detail"&&m&&T.jsx(eV,{data:m,onClose:I})]})]})}const lV=Y.div`
  ${({theme:r})=>r.mixin.flex()};
  width: 100%;
  height: 100%;
`,uV=Y.div`
  flex: 1;
`;function cV(){const[r,e]=F.useState(""),[t,s]=F.useState(""),[o,u]=F.useState(""),[h,p]=F.useState(""),m=Qu(),g=async()=>{if(o!==h){alert("비밀번호가 일치하지 않습니다.");return}i2(Da,t,o).then(async v=>{const b=v.user;await o2(b,{displayName:r}),await kk(cr(Vt,"users",b.uid),{name:r,role:2,createdAt:new Date})}).then(()=>{alert("회원가입이 완료되었습니다!"),m("/")}).catch(v=>{alert("회원가입 중 오류 발생: "+v.message)})};return T.jsx(hV,{children:T.jsxs(fV,{children:[T.jsxs(dV,{children:[T.jsx(pV,{children:"PDMS"}),T.jsx(mV,{children:"Pushcomz Design Management System"})]}),T.jsx(gV,{children:T.jsx(yV,{src:gS})}),T.jsxs(_V,{children:[T.jsx(vV,{type:"text",value:r,onChange:v=>e(v.target.value),placeholder:"이름을 입력해주세요."}),T.jsx(EV,{type:"text",value:t,onChange:v=>s(v.target.value),placeholder:"이메일을 입력해주세요."}),T.jsx(TV,{type:"password",value:o,onChange:v=>u(v.target.value),placeholder:"비밀번호를 입력해주세요."}),T.jsx(bV,{type:"password",value:h,onChange:v=>p(v.target.value),placeholder:"비밀번호 확인을 입력해주세요."})]}),T.jsx(wV,{onClick:g,children:"등록하기"})]})})}const hV=Y.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:r})=>r.colors.gray01};
`,fV=Y.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:r})=>r.colors.white01};
`,dV=Y.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,pV=Y.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.navy};
`,mV=Y.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,gV=Y.div`
  margin-right: auto;
`,yV=Y.img`
  
`,_V=Y.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  gap: 10px;
`,vV=Y.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,EV=Y.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,TV=Y.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,bV=Y.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,wV=Y.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:r})=>r.colors.white01};
`;function SV(){const[r,e]=F.useState(!1);return T.jsx(fx,{basename:"/pdms-test",children:T.jsxs(HR,{children:[T.jsx(qh,{path:"/",element:T.jsx(Vk,{onLoginSuccess:()=>e(!0)})}),T.jsx(qh,{path:"/dashboard",element:r?T.jsx(oV,{}):T.jsx(qR,{to:"/"})}),T.jsx(qh,{path:"/signup",element:T.jsx(cV,{})})]})})}const AV="/assets/Pretendard-Bold-C0IAtCzs.woff2",RV="/assets/Pretendard-SemiBold-bHEaYlbJ.woff2",xV="/assets/Pretendard-Medium-BCuOcOjL.woff2",IV="/assets/Pretendard-Regular-BnvhP503.woff2",CV=wI`
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
    src: url(${AV}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${RV}) format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${xV}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${IV}) format('woff2');
    font-weight: 400;
  }

`,DV={white01:"#fff",white02:"#f4f4f4",red:"#eb193a",navy:"#073863",beige01:"#fff4ea",beige02:"#FFEEDE",orange:"#f88017",lightpupple:"#eaedfa",blue01:"#4f76ff",blue02:"#0B1ABF",gray01:"#ECEDF0",gray02:"#ccc",gray03:"#bdbdbd",gray04:"#f4f4f4",gray05:"#888",gray06:"#666",gray07:"#e5e2e2",black:"#212121",pink01:"#FFDDDD",pink02:"#F48193",pink03:"#FFEBEB"},NV={flex:(r="flex-start",e="flex-start")=>`
    display: flex;
    align-items: ${r};
    justify-content: ${e}
  `},OV={colors:DV,mixin:NV};ZA.createRoot(document.getElementById("root")).render(T.jsx(F.StrictMode,{children:T.jsxs(EI,{theme:OV,children:[T.jsx(SV,{}),T.jsx(CV,{})]})}));
