(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function LA(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var um={exports:{}},pu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function UA(){if(z0)return pu;z0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:h,ref:o!==void 0?o:null,props:u}}return pu.Fragment=e,pu.jsx=t,pu.jsxs=t,pu}var q0;function jA(){return q0||(q0=1,um.exports=UA()),um.exports}var T=jA(),cm={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function zA(){if(B0)return Ce;B0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),w=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,G={};function B(O,re,ae){this.props=O,this.context=re,this.refs=G,this.updater=ae||N}B.prototype.isReactComponent={},B.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ee(){}ee.prototype=B.prototype;function W(O,re,ae){this.props=O,this.context=re,this.refs=G,this.updater=ae||N}var ie=W.prototype=new ee;ie.constructor=W,U(ie,B.prototype),ie.isPureReactComponent=!0;var ce=Array.isArray,ue={H:null,A:null,T:null,S:null,V:null},de=Object.prototype.hasOwnProperty;function C(O,re,ae,se,ge,xe){return ae=xe.ref,{$$typeof:r,type:O,key:re,ref:ae!==void 0?ae:null,props:xe}}function R(O,re){return C(O.type,re,void 0,void 0,void 0,O.props)}function x(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function k(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return re[ae]})}var P=/\/+/g;function L(O,re){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):re.toString(36)}function D(){}function Dt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(D,D):(O.status="pending",O.then(function(re){O.status==="pending"&&(O.status="fulfilled",O.value=re)},function(re){O.status==="pending"&&(O.status="rejected",O.reason=re)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function at(O,re,ae,se,ge){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(xe){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case r:case e:ve=!0;break;case _:return ve=O._init,at(ve(O._payload),re,ae,se,ge)}}if(ve)return ge=ge(O),ve=se===""?"."+L(O,0):se,ce(ge)?(ae="",ve!=null&&(ae=ve.replace(P,"$&/")+"/"),at(ge,re,ae,"",function(Ut){return Ut})):ge!=null&&(x(ge)&&(ge=R(ge,ae+(ge.key==null||O&&O.key===ge.key?"":(""+ge.key).replace(P,"$&/")+"/")+ve)),re.push(ge)),1;ve=0;var ct=se===""?".":se+":";if(ce(O))for(var Be=0;Be<O.length;Be++)se=O[Be],xe=ct+L(se,Be),ve+=at(se,re,ae,xe,ge);else if(Be=S(O),typeof Be=="function")for(O=Be.call(O),Be=0;!(se=O.next()).done;)se=se.value,xe=ct+L(se,Be++),ve+=at(se,re,ae,xe,ge);else if(xe==="object"){if(typeof O.then=="function")return at(Dt(O),re,ae,se,ge);throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return ve}function K(O,re,ae){if(O==null)return O;var se=[],ge=0;return at(O,se,"","",function(xe){return re.call(ae,xe,ge++)}),se}function le(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var me=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ie(){}return Ce.Children={map:K,forEach:function(O,re,ae){K(O,function(){re.apply(this,arguments)},ae)},count:function(O){var re=0;return K(O,function(){re++}),re},toArray:function(O){return K(O,function(re){return re})||[]},only:function(O){if(!x(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ce.Component=B,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=W,Ce.StrictMode=s,Ce.Suspense=m,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ue,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(O){return ue.H.useMemoCache(O)}},Ce.cache=function(O){return function(){return O.apply(null,arguments)}},Ce.cloneElement=function(O,re,ae){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var se=U({},O.props),ge=O.key,xe=void 0;if(re!=null)for(ve in re.ref!==void 0&&(xe=void 0),re.key!==void 0&&(ge=""+re.key),re)!de.call(re,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&re.ref===void 0||(se[ve]=re[ve]);var ve=arguments.length-2;if(ve===1)se.children=ae;else if(1<ve){for(var ct=Array(ve),Be=0;Be<ve;Be++)ct[Be]=arguments[Be+2];se.children=ct}return C(O.type,ge,void 0,void 0,xe,se)},Ce.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},Ce.createElement=function(O,re,ae){var se,ge={},xe=null;if(re!=null)for(se in re.key!==void 0&&(xe=""+re.key),re)de.call(re,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ge[se]=re[se]);var ve=arguments.length-2;if(ve===1)ge.children=ae;else if(1<ve){for(var ct=Array(ve),Be=0;Be<ve;Be++)ct[Be]=arguments[Be+2];ge.children=ct}if(O&&O.defaultProps)for(se in ve=O.defaultProps,ve)ge[se]===void 0&&(ge[se]=ve[se]);return C(O,xe,void 0,void 0,null,ge)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(O){return{$$typeof:p,render:O}},Ce.isValidElement=x,Ce.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:le}},Ce.memo=function(O,re){return{$$typeof:g,type:O,compare:re===void 0?null:re}},Ce.startTransition=function(O){var re=ue.T,ae={};ue.T=ae;try{var se=O(),ge=ue.S;ge!==null&&ge(ae,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(Ie,me)}catch(xe){me(xe)}finally{ue.T=re}},Ce.unstable_useCacheRefresh=function(){return ue.H.useCacheRefresh()},Ce.use=function(O){return ue.H.use(O)},Ce.useActionState=function(O,re,ae){return ue.H.useActionState(O,re,ae)},Ce.useCallback=function(O,re){return ue.H.useCallback(O,re)},Ce.useContext=function(O){return ue.H.useContext(O)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(O,re){return ue.H.useDeferredValue(O,re)},Ce.useEffect=function(O,re,ae){var se=ue.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(O,re)},Ce.useId=function(){return ue.H.useId()},Ce.useImperativeHandle=function(O,re,ae){return ue.H.useImperativeHandle(O,re,ae)},Ce.useInsertionEffect=function(O,re){return ue.H.useInsertionEffect(O,re)},Ce.useLayoutEffect=function(O,re){return ue.H.useLayoutEffect(O,re)},Ce.useMemo=function(O,re){return ue.H.useMemo(O,re)},Ce.useOptimistic=function(O,re){return ue.H.useOptimistic(O,re)},Ce.useReducer=function(O,re,ae){return ue.H.useReducer(O,re,ae)},Ce.useRef=function(O){return ue.H.useRef(O)},Ce.useState=function(O){return ue.H.useState(O)},Ce.useSyncExternalStore=function(O,re,ae){return ue.H.useSyncExternalStore(O,re,ae)},Ce.useTransition=function(){return ue.H.useTransition()},Ce.version="19.1.0",Ce}var H0;function _g(){return H0||(H0=1,cm.exports=zA()),cm.exports}var F=_g();const ar=LA(F);var hm={exports:{}},mu={},fm={exports:{}},dm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function qA(){return F0||(F0=1,function(r){function e(K,le){var me=K.length;K.push(le);e:for(;0<me;){var Ie=me-1>>>1,O=K[Ie];if(0<o(O,le))K[Ie]=le,K[me]=O,me=Ie;else break e}}function t(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var le=K[0],me=K.pop();if(me!==le){K[0]=me;e:for(var Ie=0,O=K.length,re=O>>>1;Ie<re;){var ae=2*(Ie+1)-1,se=K[ae],ge=ae+1,xe=K[ge];if(0>o(se,me))ge<O&&0>o(xe,se)?(K[Ie]=xe,K[ge]=me,Ie=ge):(K[Ie]=se,K[ae]=me,Ie=ae);else if(ge<O&&0>o(xe,me))K[Ie]=xe,K[ge]=me,Ie=ge;else break e}}return le}function o(K,le){var me=K.sortIndex-le.sortIndex;return me!==0?me:K.id-le.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],g=[],_=1,w=null,S=3,N=!1,U=!1,G=!1,B=!1,ee=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;function ce(K){for(var le=t(g);le!==null;){if(le.callback===null)s(g);else if(le.startTime<=K)s(g),le.sortIndex=le.expirationTime,e(m,le);else break;le=t(g)}}function ue(K){if(G=!1,ce(K),!U)if(t(m)!==null)U=!0,de||(de=!0,L());else{var le=t(g);le!==null&&at(ue,le.startTime-K)}}var de=!1,C=-1,R=5,x=-1;function k(){return B?!0:!(r.unstable_now()-x<R)}function P(){if(B=!1,de){var K=r.unstable_now();x=K;var le=!0;try{e:{U=!1,G&&(G=!1,W(C),C=-1),N=!0;var me=S;try{t:{for(ce(K),w=t(m);w!==null&&!(w.expirationTime>K&&k());){var Ie=w.callback;if(typeof Ie=="function"){w.callback=null,S=w.priorityLevel;var O=Ie(w.expirationTime<=K);if(K=r.unstable_now(),typeof O=="function"){w.callback=O,ce(K),le=!0;break t}w===t(m)&&s(m),ce(K)}else s(m);w=t(m)}if(w!==null)le=!0;else{var re=t(g);re!==null&&at(ue,re.startTime-K),le=!1}}break e}finally{w=null,S=me,N=!1}le=void 0}}finally{le?L():de=!1}}}var L;if(typeof ie=="function")L=function(){ie(P)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,Dt=D.port2;D.port1.onmessage=P,L=function(){Dt.postMessage(null)}}else L=function(){ee(P,0)};function at(K,le){C=ee(function(){K(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(K){K.callback=null},r.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<K?Math.floor(1e3/K):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(K){switch(S){case 1:case 2:case 3:var le=3;break;default:le=S}var me=S;S=le;try{return K()}finally{S=me}},r.unstable_requestPaint=function(){B=!0},r.unstable_runWithPriority=function(K,le){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var me=S;S=K;try{return le()}finally{S=me}},r.unstable_scheduleCallback=function(K,le,me){var Ie=r.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Ie+me:Ie):me=Ie,K){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=me+O,K={id:_++,callback:le,priorityLevel:K,startTime:me,expirationTime:O,sortIndex:-1},me>Ie?(K.sortIndex=me,e(g,K),t(m)===null&&K===t(g)&&(G?(W(C),C=-1):G=!0,at(ue,me-Ie))):(K.sortIndex=O,e(m,K),U||N||(U=!0,de||(de=!0,L()))),K},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(K){var le=S;return function(){var me=S;S=le;try{return K.apply(this,arguments)}finally{S=me}}}}(dm)),dm}var $0;function BA(){return $0||($0=1,fm.exports=qA()),fm.exports}var pm={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function HA(){if(G0)return on;G0=1;var r=_g();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,_){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:m,containerInfo:g,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,on.createPortal=function(m,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,_)},on.flushSync=function(m){var g=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=g,s.p=_,s.d.f()}},on.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},on.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},on.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var _=g.as,w=p(_,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,N=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:S,fetchPriority:N}):_==="script"&&s.d.X(m,{crossOrigin:w,integrity:S,fetchPriority:N,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},on.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=p(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},on.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,w=p(_,g.crossOrigin);s.d.L(m,_,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},on.preloadModule=function(m,g){if(typeof m=="string")if(g){var _=p(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},on.requestFormReset=function(m){s.d.r(m)},on.unstable_batchedUpdates=function(m,g){return m(g)},on.useFormState=function(m,g,_){return h.H.useFormState(m,g,_)},on.useFormStatus=function(){return h.H.useHostTransitionStatus()},on.version="19.1.0",on}var Q0;function FA(){if(Q0)return pm.exports;Q0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pm.exports=HA(),pm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function $A(){if(Y0)return mu;Y0=1;var r=BA(),e=_g(),t=FA();function s(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function h(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(u(n)!==n)throw Error(s(188))}function m(n){var i=n.alternate;if(!i){if(i=u(n),i===null)throw Error(s(188));return i!==n?null:n}for(var a=n,l=i;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return p(f),n;if(d===l)return p(f),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=d;else{for(var E=!1,b=f.child;b;){if(b===a){E=!0,a=f,l=d;break}if(b===l){E=!0,l=f,a=d;break}b=b.sibling}if(!E){for(b=d.child;b;){if(b===a){E=!0,a=d,l=f;break}if(b===l){E=!0,l=d,a=f;break}b=b.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:i}function g(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=g(n),i!==null)return i;n=n.sibling}return null}var _=Object.assign,w=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),ee=Symbol.for("react.provider"),W=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function L(n){return n===null||typeof n!="object"?null:(n=P&&n[P]||n["@@iterator"],typeof n=="function"?n:null)}var D=Symbol.for("react.client.reference");function Dt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===D?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case B:return"Profiler";case G:return"StrictMode";case ue:return"Suspense";case de:return"SuspenseList";case x:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case N:return"Portal";case ie:return(n.displayName||"Context")+".Provider";case W:return(n._context.displayName||"Context")+".Consumer";case ce:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case C:return i=n.displayName||null,i!==null?i:Dt(n.type)||"Memo";case R:i=n._payload,n=n._init;try{return Dt(n(i))}catch{}}return null}var at=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Ie=[],O=-1;function re(n){return{current:n}}function ae(n){0>O||(n.current=Ie[O],Ie[O]=null,O--)}function se(n,i){O++,Ie[O]=n.current,n.current=i}var ge=re(null),xe=re(null),ve=re(null),ct=re(null);function Be(n,i){switch(se(ve,i),se(xe,n),se(ge,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?p0(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=p0(i),n=m0(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ae(ge),se(ge,n)}function Ut(){ae(ge),ae(xe),ae(ve)}function Pn(n){n.memoizedState!==null&&se(ct,n);var i=ge.current,a=m0(i,n.type);i!==a&&(se(xe,n),se(ge,a))}function yn(n){xe.current===n&&(ae(ge),ae(xe)),ct.current===n&&(ae(ct),uu._currentValue=me)}var rn=Object.prototype.hasOwnProperty,Cs=r.unstable_scheduleCallback,Ds=r.unstable_cancelCallback,al=r.unstable_shouldYield,ac=r.unstable_requestPaint,Vn=r.unstable_now,ud=r.unstable_getCurrentPriorityLevel,ol=r.unstable_ImmediatePriority,Oa=r.unstable_UserBlockingPriority,Ns=r.unstable_NormalPriority,cd=r.unstable_LowPriority,Ma=r.unstable_IdlePriority,ll=r.log,oc=r.unstable_setDisableYieldValue,dt=null,Ye=null;function bn(n){if(typeof ll=="function"&&oc(n),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(dt,n)}catch{}}var sn=Math.clz32?Math.clz32:Os,lc=Math.log,hd=Math.LN2;function Os(n){return n>>>=0,n===0?32:31-(lc(n)/hd|0)|0}var Ms=256,ks=4194304;function er(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ka(n,i,a){var l=n.pendingLanes;if(l===0)return 0;var f=0,d=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var b=l&134217727;return b!==0?(l=b&~d,l!==0?f=er(l):(E&=b,E!==0?f=er(E):a||(a=b&~n,a!==0&&(f=er(a))))):(b=l&~d,b!==0?f=er(b):E!==0?f=er(E):a||(a=l&~n,a!==0&&(f=er(a)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:f}function Ps(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function ul(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cl(){var n=Ms;return Ms<<=1,(Ms&4194048)===0&&(Ms=256),n}function hl(){var n=ks;return ks<<=1,(ks&62914560)===0&&(ks=4194304),n}function qr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Br(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function fl(n,i,a,l,f,d){var E=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var b=n.entanglements,I=n.expirationTimes,q=n.hiddenUpdates;for(a=E&~a;0<a;){var X=31-sn(a),te=1<<X;b[X]=0,I[X]=-1;var H=q[X];if(H!==null)for(q[X]=null,X=0;X<H.length;X++){var $=H[X];$!==null&&($.lane&=-536870913)}a&=~te}l!==0&&mr(n,l,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(E&~i))}function mr(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-sn(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function dl(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-sn(a),f=1<<l;f&i|n[l]&i&&(n[l]|=i),a&=~f}}function Ci(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Pa(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Di(){var n=le.p;return n!==0?n:(n=window.event,n===void 0?32:k0(n.type))}function uc(n,i){var a=le.p;try{return le.p=n,i()}finally{le.p=a}}var ot=Math.random().toString(36).slice(2),Nt="__reactFiber$"+ot,Tt="__reactProps$"+ot,Ln="__reactContainer$"+ot,pl="__reactEvents$"+ot,fd="__reactListeners$"+ot,Ni="__reactHandles$"+ot,cc="__reactResources$"+ot,Vs="__reactMarker$"+ot;function Oi(n){delete n[Nt],delete n[Tt],delete n[pl],delete n[fd],delete n[Ni]}function Hr(n){var i=n[Nt];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ln]||a[Nt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=v0(n);n!==null;){if(a=n[Nt])return a;n=v0(n)}return i}n=a,a=n.parentNode}return null}function gr(n){if(n=n[Nt]||n[Ln]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function yr(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(s(33))}function dn(n){var i=n[cc];return i||(i=n[cc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function yt(n){n[Vs]=!0}var ml=new Set,Va={};function tr(n,i){Fr(n,i),Fr(n+"Capture",i)}function Fr(n,i){for(Va[n]=i,n=0;n<i.length;n++)ml.add(i[n])}var hc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fc={},Ls={};function dc(n){return rn.call(Ls,n)?!0:rn.call(fc,n)?!1:hc.test(n)?Ls[n]=!0:(fc[n]=!0,!1)}function Mi(n,i,a){if(dc(i))if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+a)}}function _r(n,i,a){if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+a)}}function Qt(n,i,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(i,a,""+l)}}var Us,pc;function $r(n){if(Us===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Us=i&&i[1]||"",pc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Us+n+pc}var La=!1;function Ua(n,i){if(!n||La)return"";La=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch($){var H=$}Reflect.construct(n,[],te)}else{try{te.call()}catch($){H=$}n.call(te.prototype)}}else{try{throw Error()}catch($){H=$}(te=n())&&typeof te.catch=="function"&&te.catch(function(){})}}catch($){if($&&H&&typeof $.stack=="string")return[$.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],b=d[1];if(E&&b){var I=E.split(`
`),q=b.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===q.length)for(l=I.length-1,f=q.length-1;1<=l&&0<=f&&I[l]!==q[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==q[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==q[f]){var X=`
`+I[l].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=l&&0<=f);break}}}finally{La=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?$r(a):""}function gl(n){switch(n.tag){case 26:case 27:case 5:return $r(n.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 15:return Ua(n.type,!1);case 11:return Ua(n.type.render,!1);case 1:return Ua(n.type,!0);case 31:return $r("Activity");default:return""}}function ja(n){try{var i="";do i+=gl(n),n=n.return;while(n);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function yl(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function dd(n){var i=yl(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function za(n){n._valueTracker||(n._valueTracker=dd(n))}function _l(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return n&&(l=yl(n)?n.checked?"true":"false":n.value),n=l,n!==a?(i.setValue(n),!0):!1}function js(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var pd=/[\n"\\]/g;function wt(n){return n.replace(pd,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Sn(n,i,a,l,f,d,E,b){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),i!=null?E==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+pn(i)):n.value!==""+pn(i)&&(n.value=""+pn(i)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),i!=null?ki(n,E,pn(i)):a!=null?ki(n,E,pn(a)):l!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.name=""+pn(b):n.removeAttribute("name")}function zs(n,i,a,l,f,d,E,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+pn(a):"",i=i!=null?""+pn(i):a,b||i===n.value||(n.value=i),n.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=b?n.checked:!!l,n.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function ki(n,i,a){i==="number"&&js(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Gr(n,i,a,l){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+pn(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function We(n,i,a){if(i!=null&&(i=""+pn(i),i!==n.value&&(n.value=i),a==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=a!=null?""+pn(a):""}function qs(n,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(at(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=pn(i),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function Un(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Bs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mc(n,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,a):typeof a!="number"||a===0||Bs.has(i)?i==="float"?n.cssFloat=a:n[i]=(""+a).trim():n[i]=a+"px"}function vl(n,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&a[f]!==l&&mc(n,f,l)}else for(var d in i)i.hasOwnProperty(d)&&mc(n,d,i[d])}function El(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var md=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qa(n){return gd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Qr=null;function jn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Yr=null,Kr=null;function Tl(n){var i=gr(n);if(i&&(n=i.stateNode)){var a=n[Tt]||null;e:switch(n=i.stateNode,i.type){case"input":if(Sn(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==n&&l.form===n.form){var f=l[Tt]||null;if(!f)throw Error(s(90));Sn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===n.form&&_l(l)}break e;case"textarea":We(n,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Gr(n,!!a.multiple,i,!1)}}}var vr=!1;function gc(n,i,a){if(vr)return n(i,a);vr=!0;try{var l=n(i);return l}finally{if(vr=!1,(Yr!==null||Kr!==null)&&(uh(),Yr&&(i=Yr,n=Kr,Kr=Yr=null,Tl(i),n)))for(i=0;i<n.length;i++)Tl(n[i])}}function Hs(n,i){var a=n.stateNode;if(a===null)return null;var l=a[Tt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zn=!1;if(nr)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){zn=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{zn=!1}var Er=null,Pi=null,Xr=null;function wl(){if(Xr)return Xr;var n,i=Pi,a=i.length,l,f="value"in Er?Er.value:Er.textContent,d=f.length;for(n=0;n<a&&i[n]===f[n];n++);var E=a-n;for(l=1;l<=E&&i[a-l]===f[d-l];l++);return Xr=f.slice(n,1<l?1-l:void 0)}function Tr(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wr(){return!0}function bl(){return!1}function jt(n){function i(a,l,f,d,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var b in n)n.hasOwnProperty(b)&&(a=n[b],this[b]=a?a(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?wr:bl,this.isPropagationStopped=bl,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),i}var $e={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=jt($e),$s=_({},$e,{view:0,detail:0}),yc=jt($s),Ha,Fa,br,Gs=_({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ks,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==br&&(br&&n.type==="mousemove"?(Ha=n.screenX-br.screenX,Fa=n.screenY-br.screenY):Fa=Ha=0,br=n),Ha)},movementY:function(n){return"movementY"in n?n.movementY:Fa}}),qn=jt(Gs),_c=_({},Gs,{dataTransfer:0}),yd=jt(_c),Qs=_({},$s,{relatedTarget:0}),$a=jt(Qs),Sl=_({},$e,{animationName:0,elapsedTime:0,pseudoElement:0}),Ga=jt(Sl),vc=_({},$e,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Qa=jt(vc),_d=_({},$e,{data:0}),Al=jt(_d),Ys={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ec={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Tc[n])?!!i[n]:!1}function Ks(){return Rl}var wc=_({},$s,{key:function(n){if(n.key){var i=Ys[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Tr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ec[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ks,charCode:function(n){return n.type==="keypress"?Tr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Tr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ya=jt(wc),bc=_({},Gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xl=jt(bc),Wr=_({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ks}),Sc=jt(Wr),Ac=_({},$e,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rc=jt(Ac),xc=_({},Gs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ka=jt(xc),mn=_({},$e,{newState:0,oldState:0}),Ic=jt(mn),Cc=[9,13,27,32],Sr=nr&&"CompositionEvent"in window,c=null;nr&&"documentMode"in document&&(c=document.documentMode);var y=nr&&"TextEvent"in window&&!c,v=nr&&(!Sr||c&&8<c&&11>=c),A=" ",j=!1;function Y(n,i){switch(n){case"keyup":return Cc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ue=!1;function Ot(n,i){switch(n){case"compositionend":return oe(i);case"keypress":return i.which!==32?null:(j=!0,A);case"textInput":return n=i.data,n===A&&j?null:n;default:return null}}function je(n,i){if(Ue)return n==="compositionend"||!Sr&&Y(n,i)?(n=wl(),Xr=Pi=Er=null,Ue=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v&&i.locale!=="ko"?null:i.data;default:return null}}var zt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mt(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!zt[n.type]:i==="textarea"}function Zr(n,i,a,l){Yr?Kr?Kr.push(l):Kr=[l]:Yr=l,i=mh(i,"onChange"),0<i.length&&(a=new Ba("onChange","change",null,a,l),n.push({event:a,listeners:i}))}var Yt=null,Ar=null;function Il(n){u0(n,0)}function Dc(n){var i=yr(n);if(_l(i))return n}function Dy(n,i){if(n==="change")return i}var Ny=!1;if(nr){var vd;if(nr){var Ed="oninput"in document;if(!Ed){var Oy=document.createElement("div");Oy.setAttribute("oninput","return;"),Ed=typeof Oy.oninput=="function"}vd=Ed}else vd=!1;Ny=vd&&(!document.documentMode||9<document.documentMode)}function My(){Yt&&(Yt.detachEvent("onpropertychange",ky),Ar=Yt=null)}function ky(n){if(n.propertyName==="value"&&Dc(Ar)){var i=[];Zr(i,Ar,n,jn(n)),gc(Il,i)}}function dS(n,i,a){n==="focusin"?(My(),Yt=i,Ar=a,Yt.attachEvent("onpropertychange",ky)):n==="focusout"&&My()}function pS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Dc(Ar)}function mS(n,i){if(n==="click")return Dc(i)}function gS(n,i){if(n==="input"||n==="change")return Dc(i)}function yS(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var An=typeof Object.is=="function"?Object.is:yS;function Cl(n,i){if(An(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!rn.call(i,f)||!An(n[f],i[f]))return!1}return!0}function Py(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vy(n,i){var a=Py(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=i&&l>=i)return{node:a,offset:i-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Py(a)}}function Ly(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ly(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Uy(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=js(n.document);i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=js(n.document)}return i}function Td(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var _S=nr&&"documentMode"in document&&11>=document.documentMode,Xa=null,wd=null,Dl=null,bd=!1;function jy(n,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bd||Xa==null||Xa!==js(l)||(l=Xa,"selectionStart"in l&&Td(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Dl&&Cl(Dl,l)||(Dl=l,l=mh(wd,"onSelect"),0<l.length&&(i=new Ba("onSelect","select",null,i,a),n.push({event:i,listeners:l}),i.target=Xa)))}function Xs(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Wa={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionrun:Xs("Transition","TransitionRun"),transitionstart:Xs("Transition","TransitionStart"),transitioncancel:Xs("Transition","TransitionCancel"),transitionend:Xs("Transition","TransitionEnd")},Sd={},zy={};nr&&(zy=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function Ws(n){if(Sd[n])return Sd[n];if(!Wa[n])return n;var i=Wa[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in zy)return Sd[n]=i[a];return n}var qy=Ws("animationend"),By=Ws("animationiteration"),Hy=Ws("animationstart"),vS=Ws("transitionrun"),ES=Ws("transitionstart"),TS=Ws("transitioncancel"),Fy=Ws("transitionend"),$y=new Map,Ad="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ad.push("scrollEnd");function rr(n,i){$y.set(n,i),tr(i,[n])}var Gy=new WeakMap;function Bn(n,i){if(typeof n=="object"&&n!==null){var a=Gy.get(n);return a!==void 0?a:(i={value:n,source:i,stack:ja(i)},Gy.set(n,i),i)}return{value:n,source:i,stack:ja(i)}}var Hn=[],Za=0,Rd=0;function Nc(){for(var n=Za,i=Rd=Za=0;i<n;){var a=Hn[i];Hn[i++]=null;var l=Hn[i];Hn[i++]=null;var f=Hn[i];Hn[i++]=null;var d=Hn[i];if(Hn[i++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}d!==0&&Qy(a,f,d)}}function Oc(n,i,a,l){Hn[Za++]=n,Hn[Za++]=i,Hn[Za++]=a,Hn[Za++]=l,Rd|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function xd(n,i,a,l){return Oc(n,i,a,l),Mc(n)}function Ja(n,i){return Oc(n,null,null,i),Mc(n)}function Qy(n,i,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,d=n.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&i!==null&&(f=31-sn(a),n=d.hiddenUpdates,l=n[f],l===null?n[f]=[i]:l.push(i),i.lane=a|536870912),d):null}function Mc(n){if(50<tu)throw tu=0,Mp=null,Error(s(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var eo={};function wS(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(n,i,a,l){return new wS(n,i,a,l)}function Id(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Jr(n,i){var a=n.alternate;return a===null?(a=Rn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Yy(n,i){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function kc(n,i,a,l,f,d){var E=0;if(l=n,typeof n=="function")Id(n)&&(E=1);else if(typeof n=="string")E=SA(n,a,ge.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case x:return n=Rn(31,a,i,f),n.elementType=x,n.lanes=d,n;case U:return Zs(a.children,f,d,i);case G:E=8,f|=24;break;case B:return n=Rn(12,a,i,f|2),n.elementType=B,n.lanes=d,n;case ue:return n=Rn(13,a,i,f),n.elementType=ue,n.lanes=d,n;case de:return n=Rn(19,a,i,f),n.elementType=de,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ee:case ie:E=10;break e;case W:E=9;break e;case ce:E=11;break e;case C:E=14;break e;case R:E=16,l=null;break e}E=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return i=Rn(E,a,i,f),i.elementType=n,i.type=l,i.lanes=d,i}function Zs(n,i,a,l){return n=Rn(7,n,l,i),n.lanes=a,n}function Cd(n,i,a){return n=Rn(6,n,null,i),n.lanes=a,n}function Dd(n,i,a){return i=Rn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var to=[],no=0,Pc=null,Vc=0,Fn=[],$n=0,Js=null,ei=1,ti="";function ea(n,i){to[no++]=Vc,to[no++]=Pc,Pc=n,Vc=i}function Ky(n,i,a){Fn[$n++]=ei,Fn[$n++]=ti,Fn[$n++]=Js,Js=n;var l=ei;n=ti;var f=32-sn(l)-1;l&=~(1<<f),a+=1;var d=32-sn(i)+f;if(30<d){var E=f-f%5;d=(l&(1<<E)-1).toString(32),l>>=E,f-=E,ei=1<<32-sn(i)+f|a<<f|l,ti=d+n}else ei=1<<d|a<<f|l,ti=n}function Nd(n){n.return!==null&&(ea(n,1),Ky(n,1,0))}function Od(n){for(;n===Pc;)Pc=to[--no],to[no]=null,Vc=to[--no],to[no]=null;for(;n===Js;)Js=Fn[--$n],Fn[$n]=null,ti=Fn[--$n],Fn[$n]=null,ei=Fn[--$n],Fn[$n]=null}var gn=null,pt=null,Fe=!1,ta=null,Rr=!1,Md=Error(s(519));function na(n){var i=Error(s(418,""));throw Ml(Bn(i,n)),Md}function Xy(n){var i=n.stateNode,a=n.type,l=n.memoizedProps;switch(i[Nt]=n,i[Tt]=l,a){case"dialog":ke("cancel",i),ke("close",i);break;case"iframe":case"object":case"embed":ke("load",i);break;case"video":case"audio":for(a=0;a<ru.length;a++)ke(ru[a],i);break;case"source":ke("error",i);break;case"img":case"image":case"link":ke("error",i),ke("load",i);break;case"details":ke("toggle",i);break;case"input":ke("invalid",i),zs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),za(i);break;case"select":ke("invalid",i);break;case"textarea":ke("invalid",i),qs(i,l.value,l.defaultValue,l.children),za(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||d0(i.textContent,a)?(l.popover!=null&&(ke("beforetoggle",i),ke("toggle",i)),l.onScroll!=null&&ke("scroll",i),l.onScrollEnd!=null&&ke("scrollend",i),l.onClick!=null&&(i.onclick=gh),i=!0):i=!1,i||na(n)}function Wy(n){for(gn=n.return;gn;)switch(gn.tag){case 5:case 13:Rr=!1;return;case 27:case 3:Rr=!0;return;default:gn=gn.return}}function Nl(n){if(n!==gn)return!1;if(!Fe)return Wy(n),Fe=!0,!1;var i=n.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Kp(n.type,n.memoizedProps)),a=!a),a&&pt&&na(n),Wy(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(i===0){pt=sr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;n=n.nextSibling}pt=null}}else i===27?(i=pt,Wi(n.type)?(n=Jp,Jp=null,pt=n):pt=i):pt=gn?sr(n.stateNode.nextSibling):null;return!0}function Ol(){pt=gn=null,Fe=!1}function Zy(){var n=ta;return n!==null&&(En===null?En=n:En.push.apply(En,n),ta=null),n}function Ml(n){ta===null?ta=[n]:ta.push(n)}var kd=re(null),ra=null,ni=null;function Vi(n,i,a){se(kd,i._currentValue),i._currentValue=a}function ri(n){n._currentValue=kd.current,ae(kd)}function Pd(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function Vd(n,i,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var E=f.child;d=d.firstContext;e:for(;d!==null;){var b=d;d=f;for(var I=0;I<i.length;I++)if(b.context===i[I]){d.lanes|=a,b=d.alternate,b!==null&&(b.lanes|=a),Pd(d.return,a,n),l||(E=null);break e}d=b.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),Pd(E,a,n),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===n){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function kl(n,i,a,l){n=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var b=f.type;An(f.pendingProps.value,E.value)||(n!==null?n.push(b):n=[b])}}else if(f===ct.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(uu):n=[uu])}f=f.return}n!==null&&Vd(i,n,a,l),i.flags|=262144}function Lc(n){for(n=n.firstContext;n!==null;){if(!An(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ia(n){ra=n,ni=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function an(n){return Jy(ra,n)}function Uc(n,i){return ra===null&&ia(n),Jy(n,i)}function Jy(n,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ni===null){if(n===null)throw Error(s(308));ni=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else ni=ni.next=i;return a}var bS=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},SS=r.unstable_scheduleCallback,AS=r.unstable_NormalPriority,kt={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ld(){return{controller:new bS,data:new Map,refCount:0}}function Pl(n){n.refCount--,n.refCount===0&&SS(AS,function(){n.controller.abort()})}var Vl=null,Ud=0,ro=0,io=null;function RS(n,i){if(Vl===null){var a=Vl=[];Ud=0,ro=zp(),io={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ud++,i.then(e_,e_),i}function e_(){if(--Ud===0&&Vl!==null){io!==null&&(io.status="fulfilled");var n=Vl;Vl=null,ro=0,io=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function xS(n,i){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var t_=K.S;K.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&RS(n,i),t_!==null&&t_(n,i)};var sa=re(null);function jd(){var n=sa.current;return n!==null?n:rt.pooledCache}function jc(n,i){i===null?se(sa,sa.current):se(sa,i.pool)}function n_(){var n=jd();return n===null?null:{parent:kt._currentValue,pool:n}}var Ll=Error(s(460)),r_=Error(s(474)),zc=Error(s(542)),zd={then:function(){}};function i_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function qc(){}function s_(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(qc,qc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,o_(n),n;default:if(typeof i.status=="string")i.then(qc,qc);else{if(n=rt,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,o_(n),n}throw Ul=i,Ll}}var Ul=null;function a_(){if(Ul===null)throw Error(s(459));var n=Ul;return Ul=null,n}function o_(n){if(n===Ll||n===zc)throw Error(s(483))}var Li=!1;function qd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ui(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ji(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ke&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Mc(n),Qy(n,null,a),i}return Oc(n,l,i,a),Mc(n)}function jl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,dl(n,a)}}function Hd(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?f=d=i:d=d.next=i}else f=d=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}var Fd=!1;function zl(){if(Fd){var n=io;if(n!==null)throw n}}function ql(n,i,a,l){Fd=!1;var f=n.updateQueue;Li=!1;var d=f.firstBaseUpdate,E=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var I=b,q=I.next;I.next=null,E===null?d=q:E.next=q,E=I;var X=n.alternate;X!==null&&(X=X.updateQueue,b=X.lastBaseUpdate,b!==E&&(b===null?X.firstBaseUpdate=q:b.next=q,X.lastBaseUpdate=I))}if(d!==null){var te=f.baseState;E=0,X=q=I=null,b=d;do{var H=b.lane&-536870913,$=H!==b.lane;if($?(ze&H)===H:(l&H)===H){H!==0&&H===ro&&(Fd=!0),X!==null&&(X=X.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Se=n,Ee=b;H=i;var et=a;switch(Ee.tag){case 1:if(Se=Ee.payload,typeof Se=="function"){te=Se.call(et,te,H);break e}te=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=Ee.payload,H=typeof Se=="function"?Se.call(et,te,H):Se,H==null)break e;te=_({},te,H);break e;case 2:Li=!0}}H=b.callback,H!==null&&(n.flags|=64,$&&(n.flags|=8192),$=f.callbacks,$===null?f.callbacks=[H]:$.push(H))}else $={lane:H,tag:b.tag,payload:b.payload,callback:b.callback,next:null},X===null?(q=X=$,I=te):X=X.next=$,E|=H;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;$=b,b=$.next,$.next=null,f.lastBaseUpdate=$,f.shared.pending=null}}while(!0);X===null&&(I=te),f.baseState=I,f.firstBaseUpdate=q,f.lastBaseUpdate=X,d===null&&(f.shared.lanes=0),Qi|=E,n.lanes=E,n.memoizedState=te}}function l_(n,i){if(typeof n!="function")throw Error(s(191,n));n.call(i)}function u_(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)l_(a[n],i)}var so=re(null),Bc=re(0);function c_(n,i){n=ci,se(Bc,n),se(so,i),ci=n|i.baseLanes}function $d(){se(Bc,ci),se(so,so.current)}function Gd(){ci=Bc.current,ae(so),ae(Bc)}var zi=0,Ne=null,Ze=null,bt=null,Hc=!1,ao=!1,aa=!1,Fc=0,Bl=0,oo=null,IS=0;function _t(){throw Error(s(321))}function Qd(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!An(n[a],i[a]))return!1;return!0}function Yd(n,i,a,l,f,d){return zi=d,Ne=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,K.H=n===null||n.memoizedState===null?Q_:Y_,aa=!1,d=a(l,f),aa=!1,ao&&(d=f_(i,a,l,f)),h_(n),d}function h_(n){K.H=Xc;var i=Ze!==null&&Ze.next!==null;if(zi=0,bt=Ze=Ne=null,Hc=!1,Bl=0,oo=null,i)throw Error(s(300));n===null||qt||(n=n.dependencies,n!==null&&Lc(n)&&(qt=!0))}function f_(n,i,a,l){Ne=n;var f=0;do{if(ao&&(oo=null),Bl=0,ao=!1,25<=f)throw Error(s(301));if(f+=1,bt=Ze=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}K.H=PS,d=i(a,l)}while(ao);return d}function CS(){var n=K.H,i=n.useState()[0];return i=typeof i.then=="function"?Hl(i):i,n=n.useState()[0],(Ze!==null?Ze.memoizedState:null)!==n&&(Ne.flags|=1024),i}function Kd(){var n=Fc!==0;return Fc=0,n}function Xd(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function Wd(n){if(Hc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Hc=!1}zi=0,bt=Ze=Ne=null,ao=!1,Bl=Fc=0,oo=null}function _n(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?Ne.memoizedState=bt=n:bt=bt.next=n,bt}function St(){if(Ze===null){var n=Ne.alternate;n=n!==null?n.memoizedState:null}else n=Ze.next;var i=bt===null?Ne.memoizedState:bt.next;if(i!==null)bt=i,Ze=n;else{if(n===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));Ze=n,n={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},bt===null?Ne.memoizedState=bt=n:bt=bt.next=n}return bt}function Zd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hl(n){var i=Bl;return Bl+=1,oo===null&&(oo=[]),n=s_(oo,n,i),i=Ne,(bt===null?i.memoizedState:bt.next)===null&&(i=i.alternate,K.H=i===null||i.memoizedState===null?Q_:Y_),n}function $c(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Hl(n);if(n.$$typeof===ie)return an(n)}throw Error(s(438,String(n)))}function Jd(n){var i=null,a=Ne.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Zd(),Ne.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),l=0;l<n;l++)a[l]=k;return i.index++,a}function ii(n,i){return typeof i=="function"?i(n):i}function Gc(n){var i=St();return ep(i,Ze,n)}function ep(n,i,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=n.baseQueue,d=l.pending;if(d!==null){if(f!==null){var E=f.next;f.next=d.next,d.next=E}i.baseQueue=f=d,l.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{i=f.next;var b=E=null,I=null,q=i,X=!1;do{var te=q.lane&-536870913;if(te!==q.lane?(ze&te)===te:(zi&te)===te){var H=q.revertLane;if(H===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),te===ro&&(X=!0);else if((zi&H)===H){q=q.next,H===ro&&(X=!0);continue}else te={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(b=I=te,E=d):I=I.next=te,Ne.lanes|=H,Qi|=H;te=q.action,aa&&a(d,te),d=q.hasEagerState?q.eagerState:a(d,te)}else H={lane:te,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(b=I=H,E=d):I=I.next=H,Ne.lanes|=te,Qi|=te;q=q.next}while(q!==null&&q!==i);if(I===null?E=d:I.next=b,!An(d,n.memoizedState)&&(qt=!0,X&&(a=io,a!==null)))throw a;n.memoizedState=d,n.baseState=E,n.baseQueue=I,l.lastRenderedState=d}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function tp(n){var i=St(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,d=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do d=n(d,E.action),E=E.next;while(E!==f);An(d,i.memoizedState)||(qt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function d_(n,i,a){var l=Ne,f=St(),d=Fe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var E=!An((Ze||f).memoizedState,a);E&&(f.memoizedState=a,qt=!0),f=f.queue;var b=g_.bind(null,l,f,n);if(Fl(2048,8,b,[n]),f.getSnapshot!==i||E||bt!==null&&bt.memoizedState.tag&1){if(l.flags|=2048,lo(9,Qc(),m_.bind(null,l,f,a,i),null),rt===null)throw Error(s(349));d||(zi&124)!==0||p_(l,i,a)}return a}function p_(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ne.updateQueue,i===null?(i=Zd(),Ne.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function m_(n,i,a,l){i.value=a,i.getSnapshot=l,y_(i)&&__(n)}function g_(n,i,a){return a(function(){y_(i)&&__(n)})}function y_(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!An(n,a)}catch{return!0}}function __(n){var i=Ja(n,2);i!==null&&Nn(i,n,2)}function np(n){var i=_n();if(typeof n=="function"){var a=n;if(n=a(),aa){bn(!0);try{a()}finally{bn(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:n},i}function v_(n,i,a,l){return n.baseState=a,ep(n,Ze,typeof l=="function"?l:ii)}function DS(n,i,a,l,f){if(Kc(n))throw Error(s(485));if(n=i.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};K.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,E_(i,d)):(d.next=a.next,i.pending=a.next=d)}}function E_(n,i){var a=i.action,l=i.payload,f=n.state;if(i.isTransition){var d=K.T,E={};K.T=E;try{var b=a(f,l),I=K.S;I!==null&&I(E,b),T_(n,i,b)}catch(q){rp(n,i,q)}finally{K.T=d}}else try{d=a(f,l),T_(n,i,d)}catch(q){rp(n,i,q)}}function T_(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){w_(n,i,l)},function(l){return rp(n,i,l)}):w_(n,i,a)}function w_(n,i,a){i.status="fulfilled",i.value=a,b_(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,E_(n,a)))}function rp(n,i,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,b_(i),i=i.next;while(i!==l)}n.action=null}function b_(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function S_(n,i){return i}function A_(n,i){if(Fe){var a=rt.formState;if(a!==null){e:{var l=Ne;if(Fe){if(pt){t:{for(var f=pt,d=Rr;f.nodeType!==8;){if(!d){f=null;break t}if(f=sr(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){pt=sr(f.nextSibling),l=f.data==="F!";break e}}na(l)}l=!1}l&&(i=a[0])}}return a=_n(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:S_,lastRenderedState:i},a.queue=l,a=F_.bind(null,Ne,l),l.dispatch=a,l=np(!1),d=lp.bind(null,Ne,!1,l.queue),l=_n(),f={state:i,dispatch:null,action:n,pending:null},l.queue=f,a=DS.bind(null,Ne,f,d,a),f.dispatch=a,l.memoizedState=n,[i,a,!1]}function R_(n){var i=St();return x_(i,Ze,n)}function x_(n,i,a){if(i=ep(n,i,S_)[0],n=Gc(ii)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Hl(i)}catch(E){throw E===Ll?zc:E}else l=i;i=St();var f=i.queue,d=f.dispatch;return a!==i.memoizedState&&(Ne.flags|=2048,lo(9,Qc(),NS.bind(null,f,a),null)),[l,d,n]}function NS(n,i){n.action=i}function I_(n){var i=St(),a=Ze;if(a!==null)return x_(i,a,n);St(),i=i.memoizedState,a=St();var l=a.queue.dispatch;return a.memoizedState=n,[i,l,!1]}function lo(n,i,a,l){return n={tag:n,create:a,deps:l,inst:i,next:null},i=Ne.updateQueue,i===null&&(i=Zd(),Ne.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n),n}function Qc(){return{destroy:void 0,resource:void 0}}function C_(){return St().memoizedState}function Yc(n,i,a,l){var f=_n();l=l===void 0?null:l,Ne.flags|=n,f.memoizedState=lo(1|i,Qc(),a,l)}function Fl(n,i,a,l){var f=St();l=l===void 0?null:l;var d=f.memoizedState.inst;Ze!==null&&l!==null&&Qd(l,Ze.memoizedState.deps)?f.memoizedState=lo(i,d,a,l):(Ne.flags|=n,f.memoizedState=lo(1|i,d,a,l))}function D_(n,i){Yc(8390656,8,n,i)}function N_(n,i){Fl(2048,8,n,i)}function O_(n,i){return Fl(4,2,n,i)}function M_(n,i){return Fl(4,4,n,i)}function k_(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function P_(n,i,a){a=a!=null?a.concat([n]):null,Fl(4,4,k_.bind(null,i,n),a)}function ip(){}function V_(n,i){var a=St();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Qd(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function L_(n,i){var a=St();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Qd(i,l[1]))return l[0];if(l=n(),aa){bn(!0);try{n()}finally{bn(!1)}}return a.memoizedState=[l,i],l}function sp(n,i,a){return a===void 0||(zi&1073741824)!==0?n.memoizedState=i:(n.memoizedState=a,n=zv(),Ne.lanes|=n,Qi|=n,a)}function U_(n,i,a,l){return An(a,i)?a:so.current!==null?(n=sp(n,a,l),An(n,i)||(qt=!0),n):(zi&42)===0?(qt=!0,n.memoizedState=a):(n=zv(),Ne.lanes|=n,Qi|=n,i)}function j_(n,i,a,l,f){var d=le.p;le.p=d!==0&&8>d?d:8;var E=K.T,b={};K.T=b,lp(n,!1,i,a);try{var I=f(),q=K.S;if(q!==null&&q(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var X=xS(I,l);$l(n,i,X,Dn(n))}else $l(n,i,l,Dn(n))}catch(te){$l(n,i,{then:function(){},status:"rejected",reason:te},Dn())}finally{le.p=d,K.T=E}}function OS(){}function ap(n,i,a,l){if(n.tag!==5)throw Error(s(476));var f=z_(n).queue;j_(n,f,i,me,a===null?OS:function(){return q_(n),a(l)})}function z_(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:me},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function q_(n){var i=z_(n).next.queue;$l(n,i,{},Dn())}function op(){return an(uu)}function B_(){return St().memoizedState}function H_(){return St().memoizedState}function MS(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=Dn();n=Ui(a);var l=ji(i,n,a);l!==null&&(Nn(l,i,a),jl(l,i,a)),i={cache:Ld()},n.payload=i;return}i=i.return}}function kS(n,i,a){var l=Dn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Kc(n)?$_(i,a):(a=xd(n,i,a,l),a!==null&&(Nn(a,n,l),G_(a,i,l)))}function F_(n,i,a){var l=Dn();$l(n,i,a,l)}function $l(n,i,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Kc(n))$_(i,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,b=d(E,a);if(f.hasEagerState=!0,f.eagerState=b,An(b,E))return Oc(n,i,f,0),rt===null&&Nc(),!1}catch{}finally{}if(a=xd(n,i,f,l),a!==null)return Nn(a,n,l),G_(a,i,l),!0}return!1}function lp(n,i,a,l){if(l={lane:2,revertLane:zp(),action:l,hasEagerState:!1,eagerState:null,next:null},Kc(n)){if(i)throw Error(s(479))}else i=xd(n,a,l,2),i!==null&&Nn(i,n,2)}function Kc(n){var i=n.alternate;return n===Ne||i!==null&&i===Ne}function $_(n,i){ao=Hc=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function G_(n,i,a){if((a&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,dl(n,a)}}var Xc={readContext:an,use:$c,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t},Q_={readContext:an,use:$c,useCallback:function(n,i){return _n().memoizedState=[n,i===void 0?null:i],n},useContext:an,useEffect:D_,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,Yc(4194308,4,k_.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Yc(4194308,4,n,i)},useInsertionEffect:function(n,i){Yc(4,2,n,i)},useMemo:function(n,i){var a=_n();i=i===void 0?null:i;var l=n();if(aa){bn(!0);try{n()}finally{bn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(n,i,a){var l=_n();if(a!==void 0){var f=a(i);if(aa){bn(!0);try{a(i)}finally{bn(!1)}}}else f=i;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=kS.bind(null,Ne,n),[l.memoizedState,n]},useRef:function(n){var i=_n();return n={current:n},i.memoizedState=n},useState:function(n){n=np(n);var i=n.queue,a=F_.bind(null,Ne,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:ip,useDeferredValue:function(n,i){var a=_n();return sp(a,n,i)},useTransition:function(){var n=np(!1);return n=j_.bind(null,Ne,n.queue,!0,!1),_n().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var l=Ne,f=_n();if(Fe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),rt===null)throw Error(s(349));(ze&124)!==0||p_(l,i,a)}f.memoizedState=a;var d={value:a,getSnapshot:i};return f.queue=d,D_(g_.bind(null,l,d,n),[n]),l.flags|=2048,lo(9,Qc(),m_.bind(null,l,d,a,i),null),a},useId:function(){var n=_n(),i=rt.identifierPrefix;if(Fe){var a=ti,l=ei;a=(l&~(1<<32-sn(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Fc++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=IS++,i="«"+i+"r"+a.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:op,useFormState:A_,useActionState:A_,useOptimistic:function(n){var i=_n();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=lp.bind(null,Ne,!0,a),a.dispatch=i,[n,i]},useMemoCache:Jd,useCacheRefresh:function(){return _n().memoizedState=MS.bind(null,Ne)}},Y_={readContext:an,use:$c,useCallback:V_,useContext:an,useEffect:N_,useImperativeHandle:P_,useInsertionEffect:O_,useLayoutEffect:M_,useMemo:L_,useReducer:Gc,useRef:C_,useState:function(){return Gc(ii)},useDebugValue:ip,useDeferredValue:function(n,i){var a=St();return U_(a,Ze.memoizedState,n,i)},useTransition:function(){var n=Gc(ii)[0],i=St().memoizedState;return[typeof n=="boolean"?n:Hl(n),i]},useSyncExternalStore:d_,useId:B_,useHostTransitionStatus:op,useFormState:R_,useActionState:R_,useOptimistic:function(n,i){var a=St();return v_(a,Ze,n,i)},useMemoCache:Jd,useCacheRefresh:H_},PS={readContext:an,use:$c,useCallback:V_,useContext:an,useEffect:N_,useImperativeHandle:P_,useInsertionEffect:O_,useLayoutEffect:M_,useMemo:L_,useReducer:tp,useRef:C_,useState:function(){return tp(ii)},useDebugValue:ip,useDeferredValue:function(n,i){var a=St();return Ze===null?sp(a,n,i):U_(a,Ze.memoizedState,n,i)},useTransition:function(){var n=tp(ii)[0],i=St().memoizedState;return[typeof n=="boolean"?n:Hl(n),i]},useSyncExternalStore:d_,useId:B_,useHostTransitionStatus:op,useFormState:I_,useActionState:I_,useOptimistic:function(n,i){var a=St();return Ze!==null?v_(a,Ze,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Jd,useCacheRefresh:H_},uo=null,Gl=0;function Wc(n){var i=Gl;return Gl+=1,uo===null&&(uo=[]),s_(uo,n,i)}function Ql(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Zc(n,i){throw i.$$typeof===w?Error(s(525)):(n=Object.prototype.toString.call(i),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function K_(n){var i=n._init;return i(n._payload)}function X_(n){function i(V,M){if(n){var z=V.deletions;z===null?(V.deletions=[M],V.flags|=16):z.push(M)}}function a(V,M){if(!n)return null;for(;M!==null;)i(V,M),M=M.sibling;return null}function l(V){for(var M=new Map;V!==null;)V.key!==null?M.set(V.key,V):M.set(V.index,V),V=V.sibling;return M}function f(V,M){return V=Jr(V,M),V.index=0,V.sibling=null,V}function d(V,M,z){return V.index=z,n?(z=V.alternate,z!==null?(z=z.index,z<M?(V.flags|=67108866,M):z):(V.flags|=67108866,M)):(V.flags|=1048576,M)}function E(V){return n&&V.alternate===null&&(V.flags|=67108866),V}function b(V,M,z,Z){return M===null||M.tag!==6?(M=Cd(z,V.mode,Z),M.return=V,M):(M=f(M,z),M.return=V,M)}function I(V,M,z,Z){var pe=z.type;return pe===U?X(V,M,z.props.children,Z,z.key):M!==null&&(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===R&&K_(pe)===M.type)?(M=f(M,z.props),Ql(M,z),M.return=V,M):(M=kc(z.type,z.key,z.props,null,V.mode,Z),Ql(M,z),M.return=V,M)}function q(V,M,z,Z){return M===null||M.tag!==4||M.stateNode.containerInfo!==z.containerInfo||M.stateNode.implementation!==z.implementation?(M=Dd(z,V.mode,Z),M.return=V,M):(M=f(M,z.children||[]),M.return=V,M)}function X(V,M,z,Z,pe){return M===null||M.tag!==7?(M=Zs(z,V.mode,Z,pe),M.return=V,M):(M=f(M,z),M.return=V,M)}function te(V,M,z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Cd(""+M,V.mode,z),M.return=V,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return z=kc(M.type,M.key,M.props,null,V.mode,z),Ql(z,M),z.return=V,z;case N:return M=Dd(M,V.mode,z),M.return=V,M;case R:var Z=M._init;return M=Z(M._payload),te(V,M,z)}if(at(M)||L(M))return M=Zs(M,V.mode,z,null),M.return=V,M;if(typeof M.then=="function")return te(V,Wc(M),z);if(M.$$typeof===ie)return te(V,Uc(V,M),z);Zc(V,M)}return null}function H(V,M,z,Z){var pe=M!==null?M.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return pe!==null?null:b(V,M,""+z,Z);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===pe?I(V,M,z,Z):null;case N:return z.key===pe?q(V,M,z,Z):null;case R:return pe=z._init,z=pe(z._payload),H(V,M,z,Z)}if(at(z)||L(z))return pe!==null?null:X(V,M,z,Z,null);if(typeof z.then=="function")return H(V,M,Wc(z),Z);if(z.$$typeof===ie)return H(V,M,Uc(V,z),Z);Zc(V,z)}return null}function $(V,M,z,Z,pe){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return V=V.get(z)||null,b(M,V,""+Z,pe);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:return V=V.get(Z.key===null?z:Z.key)||null,I(M,V,Z,pe);case N:return V=V.get(Z.key===null?z:Z.key)||null,q(M,V,Z,pe);case R:var Oe=Z._init;return Z=Oe(Z._payload),$(V,M,z,Z,pe)}if(at(Z)||L(Z))return V=V.get(z)||null,X(M,V,Z,pe,null);if(typeof Z.then=="function")return $(V,M,z,Wc(Z),pe);if(Z.$$typeof===ie)return $(V,M,z,Uc(M,Z),pe);Zc(M,Z)}return null}function Se(V,M,z,Z){for(var pe=null,Oe=null,ye=M,Te=M=0,Ht=null;ye!==null&&Te<z.length;Te++){ye.index>Te?(Ht=ye,ye=null):Ht=ye.sibling;var He=H(V,ye,z[Te],Z);if(He===null){ye===null&&(ye=Ht);break}n&&ye&&He.alternate===null&&i(V,ye),M=d(He,M,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He,ye=Ht}if(Te===z.length)return a(V,ye),Fe&&ea(V,Te),pe;if(ye===null){for(;Te<z.length;Te++)ye=te(V,z[Te],Z),ye!==null&&(M=d(ye,M,Te),Oe===null?pe=ye:Oe.sibling=ye,Oe=ye);return Fe&&ea(V,Te),pe}for(ye=l(ye);Te<z.length;Te++)Ht=$(ye,V,Te,z[Te],Z),Ht!==null&&(n&&Ht.alternate!==null&&ye.delete(Ht.key===null?Te:Ht.key),M=d(Ht,M,Te),Oe===null?pe=Ht:Oe.sibling=Ht,Oe=Ht);return n&&ye.forEach(function(ns){return i(V,ns)}),Fe&&ea(V,Te),pe}function Ee(V,M,z,Z){if(z==null)throw Error(s(151));for(var pe=null,Oe=null,ye=M,Te=M=0,Ht=null,He=z.next();ye!==null&&!He.done;Te++,He=z.next()){ye.index>Te?(Ht=ye,ye=null):Ht=ye.sibling;var ns=H(V,ye,He.value,Z);if(ns===null){ye===null&&(ye=Ht);break}n&&ye&&ns.alternate===null&&i(V,ye),M=d(ns,M,Te),Oe===null?pe=ns:Oe.sibling=ns,Oe=ns,ye=Ht}if(He.done)return a(V,ye),Fe&&ea(V,Te),pe;if(ye===null){for(;!He.done;Te++,He=z.next())He=te(V,He.value,Z),He!==null&&(M=d(He,M,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He);return Fe&&ea(V,Te),pe}for(ye=l(ye);!He.done;Te++,He=z.next())He=$(ye,V,Te,He.value,Z),He!==null&&(n&&He.alternate!==null&&ye.delete(He.key===null?Te:He.key),M=d(He,M,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He);return n&&ye.forEach(function(VA){return i(V,VA)}),Fe&&ea(V,Te),pe}function et(V,M,z,Z){if(typeof z=="object"&&z!==null&&z.type===U&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var pe=z.key;M!==null;){if(M.key===pe){if(pe=z.type,pe===U){if(M.tag===7){a(V,M.sibling),Z=f(M,z.props.children),Z.return=V,V=Z;break e}}else if(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===R&&K_(pe)===M.type){a(V,M.sibling),Z=f(M,z.props),Ql(Z,z),Z.return=V,V=Z;break e}a(V,M);break}else i(V,M);M=M.sibling}z.type===U?(Z=Zs(z.props.children,V.mode,Z,z.key),Z.return=V,V=Z):(Z=kc(z.type,z.key,z.props,null,V.mode,Z),Ql(Z,z),Z.return=V,V=Z)}return E(V);case N:e:{for(pe=z.key;M!==null;){if(M.key===pe)if(M.tag===4&&M.stateNode.containerInfo===z.containerInfo&&M.stateNode.implementation===z.implementation){a(V,M.sibling),Z=f(M,z.children||[]),Z.return=V,V=Z;break e}else{a(V,M);break}else i(V,M);M=M.sibling}Z=Dd(z,V.mode,Z),Z.return=V,V=Z}return E(V);case R:return pe=z._init,z=pe(z._payload),et(V,M,z,Z)}if(at(z))return Se(V,M,z,Z);if(L(z)){if(pe=L(z),typeof pe!="function")throw Error(s(150));return z=pe.call(z),Ee(V,M,z,Z)}if(typeof z.then=="function")return et(V,M,Wc(z),Z);if(z.$$typeof===ie)return et(V,M,Uc(V,z),Z);Zc(V,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,M!==null&&M.tag===6?(a(V,M.sibling),Z=f(M,z),Z.return=V,V=Z):(a(V,M),Z=Cd(z,V.mode,Z),Z.return=V,V=Z),E(V)):a(V,M)}return function(V,M,z,Z){try{Gl=0;var pe=et(V,M,z,Z);return uo=null,pe}catch(ye){if(ye===Ll||ye===zc)throw ye;var Oe=Rn(29,ye,null,V.mode);return Oe.lanes=Z,Oe.return=V,Oe}finally{}}}var co=X_(!0),W_=X_(!1),Gn=re(null),xr=null;function qi(n){var i=n.alternate;se(Pt,Pt.current&1),se(Gn,n),xr===null&&(i===null||so.current!==null||i.memoizedState!==null)&&(xr=n)}function Z_(n){if(n.tag===22){if(se(Pt,Pt.current),se(Gn,n),xr===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(xr=n)}}else Bi()}function Bi(){se(Pt,Pt.current),se(Gn,Gn.current)}function si(n){ae(Gn),xr===n&&(xr=null),ae(Pt)}var Pt=re(0);function Jc(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Zp(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function up(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:_({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var cp={enqueueSetState:function(n,i,a){n=n._reactInternals;var l=Dn(),f=Ui(l);f.payload=i,a!=null&&(f.callback=a),i=ji(n,f,l),i!==null&&(Nn(i,n,l),jl(i,n,l))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=Dn(),f=Ui(l);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=ji(n,f,l),i!==null&&(Nn(i,n,l),jl(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Dn(),l=Ui(a);l.tag=2,i!=null&&(l.callback=i),i=ji(n,l,a),i!==null&&(Nn(i,n,a),jl(i,n,a))}};function J_(n,i,a,l,f,d,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!Cl(a,l)||!Cl(f,d):!0}function ev(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&cp.enqueueReplaceState(i,i.state,null)}function oa(n,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(n=n.defaultProps){a===i&&(a=_({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var eh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function tv(n){eh(n)}function nv(n){console.error(n)}function rv(n){eh(n)}function th(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function iv(n,i,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function hp(n,i,a){return a=Ui(a),a.tag=3,a.payload={element:null},a.callback=function(){th(n,i)},a}function sv(n){return n=Ui(n),n.tag=3,n}function av(n,i,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;n.payload=function(){return f(d)},n.callback=function(){iv(i,a,l)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){iv(i,a,l),typeof f!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function VS(n,i,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&kl(i,a,f,!0),a=Gn.current,a!==null){switch(a.tag){case 13:return xr===null?Pp():a.alternate===null&&mt===0&&(mt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===zd?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Lp(n,l,f)),!1;case 22:return a.flags|=65536,l===zd?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Lp(n,l,f)),!1}throw Error(s(435,a.tag))}return Lp(n,l,f),Pp(),!1}if(Fe)return i=Gn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Md&&(n=Error(s(422),{cause:l}),Ml(Bn(n,a)))):(l!==Md&&(i=Error(s(423),{cause:l}),Ml(Bn(i,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=Bn(l,a),f=hp(n.stateNode,l,f),Hd(n,f),mt!==4&&(mt=2)),!1;var d=Error(s(520),{cause:l});if(d=Bn(d,a),eu===null?eu=[d]:eu.push(d),mt!==4&&(mt=2),i===null)return!0;l=Bn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=hp(a.stateNode,l,n),Hd(a,n),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Yi===null||!Yi.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=sv(f),av(f,n,a,l),Hd(a,f),!1}a=a.return}while(a!==null);return!1}var ov=Error(s(461)),qt=!1;function Kt(n,i,a,l){i.child=n===null?W_(i,null,a,l):co(i,n.child,a,l)}function lv(n,i,a,l,f){a=a.render;var d=i.ref;if("ref"in l){var E={};for(var b in l)b!=="ref"&&(E[b]=l[b])}else E=l;return ia(i),l=Yd(n,i,a,E,d,f),b=Kd(),n!==null&&!qt?(Xd(n,i,f),ai(n,i,f)):(Fe&&b&&Nd(i),i.flags|=1,Kt(n,i,l,f),i.child)}function uv(n,i,a,l,f){if(n===null){var d=a.type;return typeof d=="function"&&!Id(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,cv(n,i,d,l,f)):(n=kc(a.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(d=n.child,!vp(n,f)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:Cl,a(E,l)&&n.ref===i.ref)return ai(n,i,f)}return i.flags|=1,n=Jr(d,l),n.ref=i.ref,n.return=i,i.child=n}function cv(n,i,a,l,f){if(n!==null){var d=n.memoizedProps;if(Cl(d,l)&&n.ref===i.ref)if(qt=!1,i.pendingProps=l=d,vp(n,f))(n.flags&131072)!==0&&(qt=!0);else return i.lanes=n.lanes,ai(n,i,f)}return fp(n,i,a,l,f)}function hv(n,i,a){var l=i.pendingProps,f=l.children,d=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,n!==null){for(f=i.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return fv(n,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&jc(i,d!==null?d.cachePool:null),d!==null?c_(i,d):$d(),Z_(i);else return i.lanes=i.childLanes=536870912,fv(n,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(jc(i,d.cachePool),c_(i,d),Bi(),i.memoizedState=null):(n!==null&&jc(i,null),$d(),Bi());return Kt(n,i,f,a),i.child}function fv(n,i,a,l){var f=jd();return f=f===null?null:{parent:kt._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},n!==null&&jc(i,null),$d(),Z_(i),n!==null&&kl(n,i,l,!0),null}function nh(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function fp(n,i,a,l,f){return ia(i),a=Yd(n,i,a,l,void 0,f),l=Kd(),n!==null&&!qt?(Xd(n,i,f),ai(n,i,f)):(Fe&&l&&Nd(i),i.flags|=1,Kt(n,i,a,f),i.child)}function dv(n,i,a,l,f,d){return ia(i),i.updateQueue=null,a=f_(i,l,a,f),h_(n),l=Kd(),n!==null&&!qt?(Xd(n,i,d),ai(n,i,d)):(Fe&&l&&Nd(i),i.flags|=1,Kt(n,i,a,d),i.child)}function pv(n,i,a,l,f){if(ia(i),i.stateNode===null){var d=eo,E=a.contextType;typeof E=="object"&&E!==null&&(d=an(E)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=cp,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},qd(i),E=a.contextType,d.context=typeof E=="object"&&E!==null?an(E):eo,d.state=i.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(up(i,a,E,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&cp.enqueueReplaceState(d,d.state,null),ql(i,l,d,f),zl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){d=i.stateNode;var b=i.memoizedProps,I=oa(a,b);d.props=I;var q=d.context,X=a.contextType;E=eo,typeof X=="object"&&X!==null&&(E=an(X));var te=a.getDerivedStateFromProps;X=typeof te=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,X||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||q!==E)&&ev(i,d,l,E),Li=!1;var H=i.memoizedState;d.state=H,ql(i,l,d,f),zl(),q=i.memoizedState,b||H!==q||Li?(typeof te=="function"&&(up(i,a,te,l),q=i.memoizedState),(I=Li||J_(i,a,I,l,H,q,E))?(X||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=q),d.props=l,d.state=q,d.context=E,l=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Bd(n,i),E=i.memoizedProps,X=oa(a,E),d.props=X,te=i.pendingProps,H=d.context,q=a.contextType,I=eo,typeof q=="object"&&q!==null&&(I=an(q)),b=a.getDerivedStateFromProps,(q=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==te||H!==I)&&ev(i,d,l,I),Li=!1,H=i.memoizedState,d.state=H,ql(i,l,d,f),zl();var $=i.memoizedState;E!==te||H!==$||Li||n!==null&&n.dependencies!==null&&Lc(n.dependencies)?(typeof b=="function"&&(up(i,a,b,l),$=i.memoizedState),(X=Li||J_(i,a,X,l,H,$,I)||n!==null&&n.dependencies!==null&&Lc(n.dependencies))?(q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,$,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,$,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=$),d.props=l,d.state=$,d.context=I,l=X):(typeof d.componentDidUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),l=!1)}return d=l,nh(n,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,n!==null&&l?(i.child=co(i,n.child,null,f),i.child=co(i,null,a,f)):Kt(n,i,a,f),i.memoizedState=d.state,n=i.child):n=ai(n,i,f),n}function mv(n,i,a,l){return Ol(),i.flags|=256,Kt(n,i,a,l),i.child}var dp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pp(n){return{baseLanes:n,cachePool:n_()}}function mp(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=Qn),n}function gv(n,i,a){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=n!==null&&n.memoizedState===null?!1:(Pt.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,n===null){if(Fe){if(f?qi(i):Bi(),Fe){var b=pt,I;if(I=b){e:{for(I=b,b=Rr;I.nodeType!==8;){if(!b){b=null;break e}if(I=sr(I.nextSibling),I===null){b=null;break e}}b=I}b!==null?(i.memoizedState={dehydrated:b,treeContext:Js!==null?{id:ei,overflow:ti}:null,retryLane:536870912,hydrationErrors:null},I=Rn(18,null,null,0),I.stateNode=b,I.return=i,i.child=I,gn=i,pt=null,I=!0):I=!1}I||na(i)}if(b=i.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Zp(b)?i.lanes=32:i.lanes=536870912,null;si(i)}return b=l.children,l=l.fallback,f?(Bi(),f=i.mode,b=rh({mode:"hidden",children:b},f),l=Zs(l,f,a,null),b.return=i,l.return=i,b.sibling=l,i.child=b,f=i.child,f.memoizedState=pp(a),f.childLanes=mp(n,E,a),i.memoizedState=dp,l):(qi(i),gp(i,b))}if(I=n.memoizedState,I!==null&&(b=I.dehydrated,b!==null)){if(d)i.flags&256?(qi(i),i.flags&=-257,i=yp(n,i,a)):i.memoizedState!==null?(Bi(),i.child=n.child,i.flags|=128,i=null):(Bi(),f=l.fallback,b=i.mode,l=rh({mode:"visible",children:l.children},b),f=Zs(f,b,a,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,co(i,n.child,null,a),l=i.child,l.memoizedState=pp(a),l.childLanes=mp(n,E,a),i.memoizedState=dp,i=f);else if(qi(i),Zp(b)){if(E=b.nextSibling&&b.nextSibling.dataset,E)var q=E.dgst;E=q,l=Error(s(419)),l.stack="",l.digest=E,Ml({value:l,source:null,stack:null}),i=yp(n,i,a)}else if(qt||kl(n,i,a,!1),E=(a&n.childLanes)!==0,qt||E){if(E=rt,E!==null&&(l=a&-a,l=(l&42)!==0?1:Ci(l),l=(l&(E.suspendedLanes|a))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,Ja(n,l),Nn(E,n,l),ov;b.data==="$?"||Pp(),i=yp(n,i,a)}else b.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=I.treeContext,pt=sr(b.nextSibling),gn=i,Fe=!0,ta=null,Rr=!1,n!==null&&(Fn[$n++]=ei,Fn[$n++]=ti,Fn[$n++]=Js,ei=n.id,ti=n.overflow,Js=i),i=gp(i,l.children),i.flags|=4096);return i}return f?(Bi(),f=l.fallback,b=i.mode,I=n.child,q=I.sibling,l=Jr(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,q!==null?f=Jr(q,f):(f=Zs(f,b,a,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,b=n.child.memoizedState,b===null?b=pp(a):(I=b.cachePool,I!==null?(q=kt._currentValue,I=I.parent!==q?{parent:q,pool:q}:I):I=n_(),b={baseLanes:b.baseLanes|a,cachePool:I}),f.memoizedState=b,f.childLanes=mp(n,E,a),i.memoizedState=dp,l):(qi(i),a=n.child,n=a.sibling,a=Jr(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,n!==null&&(E=i.deletions,E===null?(i.deletions=[n],i.flags|=16):E.push(n)),i.child=a,i.memoizedState=null,a)}function gp(n,i){return i=rh({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function rh(n,i){return n=Rn(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function yp(n,i,a){return co(i,n.child,null,a),n=gp(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function yv(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Pd(n.return,i,a)}function _p(n,i,a,l,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function _v(n,i,a){var l=i.pendingProps,f=l.revealOrder,d=l.tail;if(Kt(n,i,l.children,a),l=Pt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&yv(n,a,i);else if(n.tag===19)yv(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(se(Pt,l),f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Jc(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),_p(i,!1,f,a,d);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Jc(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}_p(i,!0,a,null,d);break;case"together":_p(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ai(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Qi|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(kl(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(s(153));if(i.child!==null){for(n=i.child,a=Jr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Jr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function vp(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Lc(n)))}function LS(n,i,a){switch(i.tag){case 3:Be(i,i.stateNode.containerInfo),Vi(i,kt,n.memoizedState.cache),Ol();break;case 27:case 5:Pn(i);break;case 4:Be(i,i.stateNode.containerInfo);break;case 10:Vi(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(qi(i),i.flags|=128,null):(a&i.child.childLanes)!==0?gv(n,i,a):(qi(i),n=ai(n,i,a),n!==null?n.sibling:null);qi(i);break;case 19:var f=(n.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(kl(n,i,a,!1),l=(a&i.childLanes)!==0),f){if(l)return _v(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Pt,Pt.current),l)break;return null;case 22:case 23:return i.lanes=0,hv(n,i,a);case 24:Vi(i,kt,n.memoizedState.cache)}return ai(n,i,a)}function vv(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)qt=!0;else{if(!vp(n,a)&&(i.flags&128)===0)return qt=!1,LS(n,i,a);qt=(n.flags&131072)!==0}else qt=!1,Fe&&(i.flags&1048576)!==0&&Ky(i,Vc,i.index);switch(i.lanes=0,i.tag){case 16:e:{n=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")Id(l)?(n=oa(l,n),i.tag=1,i=pv(null,i,l,n,a)):(i.tag=0,i=fp(null,i,l,n,a));else{if(l!=null){if(f=l.$$typeof,f===ce){i.tag=11,i=lv(null,i,l,n,a);break e}else if(f===C){i.tag=14,i=uv(null,i,l,n,a);break e}}throw i=Dt(l)||l,Error(s(306,i,""))}}return i;case 0:return fp(n,i,i.type,i.pendingProps,a);case 1:return l=i.type,f=oa(l,i.pendingProps),pv(n,i,l,f,a);case 3:e:{if(Be(i,i.stateNode.containerInfo),n===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Bd(n,i),ql(i,l,null,a);var E=i.memoizedState;if(l=E.cache,Vi(i,kt,l),l!==d.cache&&Vd(i,[kt],a,!0),zl(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=mv(n,i,l,a);break e}else if(l!==f){f=Bn(Error(s(424)),i),Ml(f),i=mv(n,i,l,a);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(pt=sr(n.firstChild),gn=i,Fe=!0,ta=null,Rr=!0,a=W_(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ol(),l===f){i=ai(n,i,a);break e}Kt(n,i,l,a)}i=i.child}return i;case 26:return nh(n,i),n===null?(a=b0(i.type,null,i.pendingProps,null))?i.memoizedState=a:Fe||(a=i.type,n=i.pendingProps,l=yh(ve.current).createElement(a),l[Nt]=i,l[Tt]=n,Wt(l,a,n),yt(l),i.stateNode=l):i.memoizedState=b0(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Pn(i),n===null&&Fe&&(l=i.stateNode=E0(i.type,i.pendingProps,ve.current),gn=i,Rr=!0,f=pt,Wi(i.type)?(Jp=f,pt=sr(l.firstChild)):pt=f),Kt(n,i,i.pendingProps.children,a),nh(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Fe&&((f=l=pt)&&(l=hA(l,i.type,i.pendingProps,Rr),l!==null?(i.stateNode=l,gn=i,pt=sr(l.firstChild),Rr=!1,f=!0):f=!1),f||na(i)),Pn(i),f=i.type,d=i.pendingProps,E=n!==null?n.memoizedProps:null,l=d.children,Kp(f,d)?l=null:E!==null&&Kp(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=Yd(n,i,CS,null,null,a),uu._currentValue=f),nh(n,i),Kt(n,i,l,a),i.child;case 6:return n===null&&Fe&&((n=a=pt)&&(a=fA(a,i.pendingProps,Rr),a!==null?(i.stateNode=a,gn=i,pt=null,n=!0):n=!1),n||na(i)),null;case 13:return gv(n,i,a);case 4:return Be(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=co(i,null,l,a):Kt(n,i,l,a),i.child;case 11:return lv(n,i,i.type,i.pendingProps,a);case 7:return Kt(n,i,i.pendingProps,a),i.child;case 8:return Kt(n,i,i.pendingProps.children,a),i.child;case 12:return Kt(n,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Vi(i,i.type,l.value),Kt(n,i,l.children,a),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,ia(i),f=an(f),l=l(f),i.flags|=1,Kt(n,i,l,a),i.child;case 14:return uv(n,i,i.type,i.pendingProps,a);case 15:return cv(n,i,i.type,i.pendingProps,a);case 19:return _v(n,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},n===null?(a=rh(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Jr(n.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return hv(n,i,a);case 24:return ia(i),l=an(kt),n===null?(f=jd(),f===null&&(f=rt,d=Ld(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),i.memoizedState={parent:l,cache:f},qd(i),Vi(i,kt,f)):((n.lanes&a)!==0&&(Bd(n,i),ql(i,null,null,a),zl()),f=n.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Vi(i,kt,l)):(l=d.cache,Vi(i,kt,l),l!==f.cache&&Vd(i,[kt],a,!0))),Kt(n,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function oi(n){n.flags|=4}function Ev(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!I0(i)){if(i=Gn.current,i!==null&&((ze&4194048)===ze?xr!==null:(ze&62914560)!==ze&&(ze&536870912)===0||i!==xr))throw Ul=zd,r_;n.flags|=8192}}function ih(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?hl():536870912,n.lanes|=i,mo|=i)}function Yl(n,i){if(!Fe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function ht(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function US(n,i,a){var l=i.pendingProps;switch(Od(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(i),null;case 1:return ht(i),null;case 3:return a=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ri(kt),Ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Nl(i)?oi(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Zy())),ht(i),null;case 26:return a=i.memoizedState,n===null?(oi(i),a!==null?(ht(i),Ev(i,a)):(ht(i),i.flags&=-16777217)):a?a!==n.memoizedState?(oi(i),ht(i),Ev(i,a)):(ht(i),i.flags&=-16777217):(n.memoizedProps!==l&&oi(i),ht(i),i.flags&=-16777217),null;case 27:yn(i),a=ve.current;var f=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==l&&oi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}n=ge.current,Nl(i)?Xy(i):(n=E0(f,l,a),i.stateNode=n,oi(i))}return ht(i),null;case 5:if(yn(i),a=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&oi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}if(n=ge.current,Nl(i))Xy(i);else{switch(f=yh(ve.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}n[Nt]=i,n[Tt]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=n;e:switch(Wt(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&oi(i)}}return ht(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&oi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(n=ve.current,Nl(i)){if(n=i.stateNode,a=i.memoizedProps,l=null,f=gn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[Nt]=i,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||d0(n.nodeValue,a)),n||na(i)}else n=yh(n).createTextNode(l),n[Nt]=i,i.stateNode=n}return ht(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Nl(i),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Nt]=i}else Ol(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ht(i),f=!1}else f=Zy(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(si(i),i):(si(i),null)}if(si(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return a!==n&&a&&(i.child.flags|=8192),ih(i,i.updateQueue),ht(i),null;case 4:return Ut(),n===null&&Fp(i.stateNode.containerInfo),ht(i),null;case 10:return ri(i.type),ht(i),null;case 19:if(ae(Pt),f=i.memoizedState,f===null)return ht(i),null;if(l=(i.flags&128)!==0,d=f.rendering,d===null)if(l)Yl(f,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(d=Jc(n),d!==null){for(i.flags|=128,Yl(f,!1),n=d.updateQueue,i.updateQueue=n,ih(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)Yy(a,n),a=a.sibling;return se(Pt,Pt.current&1|2),i.child}n=n.sibling}f.tail!==null&&Vn()>oh&&(i.flags|=128,l=!0,Yl(f,!1),i.lanes=4194304)}else{if(!l)if(n=Jc(d),n!==null){if(i.flags|=128,l=!0,n=n.updateQueue,i.updateQueue=n,ih(i,n),Yl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!Fe)return ht(i),null}else 2*Vn()-f.renderingStartTime>oh&&a!==536870912&&(i.flags|=128,l=!0,Yl(f,!1),i.lanes=4194304);f.isBackwards?(d.sibling=i.child,i.child=d):(n=f.last,n!==null?n.sibling=d:i.child=d,f.last=d)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Vn(),i.sibling=null,n=Pt.current,se(Pt,l?n&1|2:n&1),i):(ht(i),null);case 22:case 23:return si(i),Gd(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ht(i),i.subtreeFlags&6&&(i.flags|=8192)):ht(i),a=i.updateQueue,a!==null&&ih(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),n!==null&&ae(sa),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ri(kt),ht(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function jS(n,i){switch(Od(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ri(kt),Ut(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return yn(i),null;case 13:if(si(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Ol()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ae(Pt),null;case 4:return Ut(),null;case 10:return ri(i.type),null;case 22:case 23:return si(i),Gd(),n!==null&&ae(sa),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return ri(kt),null;case 25:return null;default:return null}}function Tv(n,i){switch(Od(i),i.tag){case 3:ri(kt),Ut();break;case 26:case 27:case 5:yn(i);break;case 4:Ut();break;case 13:si(i);break;case 19:ae(Pt);break;case 10:ri(i.type);break;case 22:case 23:si(i),Gd(),n!==null&&ae(sa);break;case 24:ri(kt)}}function Kl(n,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var d=a.create,E=a.inst;l=d(),E.destroy=l}a=a.next}while(a!==f)}}catch(b){tt(i,i.return,b)}}function Hi(n,i,a){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&n)===n){var E=l.inst,b=E.destroy;if(b!==void 0){E.destroy=void 0,f=i;var I=a,q=b;try{q()}catch(X){tt(f,I,X)}}}l=l.next}while(l!==d)}}catch(X){tt(i,i.return,X)}}function wv(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{u_(i,a)}catch(l){tt(n,n.return,l)}}}function bv(n,i,a){a.props=oa(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){tt(n,i,l)}}function Xl(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(f){tt(n,i,f)}}function Ir(n,i){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){tt(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){tt(n,i,f)}else a.current=null}function Sv(n){var i=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){tt(n,n.return,f)}}function Ep(n,i,a){try{var l=n.stateNode;aA(l,n.type,a,i),l[Tt]=i}catch(f){tt(n,n.return,f)}}function Av(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Wi(n.type)||n.tag===4}function Tp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Av(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Wi(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wp(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(n),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=gh));else if(l!==4&&(l===27&&Wi(n.type)&&(a=n.stateNode,i=null),n=n.child,n!==null))for(wp(n,i,a),n=n.sibling;n!==null;)wp(n,i,a),n=n.sibling}function sh(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(l!==4&&(l===27&&Wi(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(sh(n,i,a),n=n.sibling;n!==null;)sh(n,i,a),n=n.sibling}function Rv(n){var i=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Wt(i,l,a),i[Nt]=n,i[Tt]=a}catch(d){tt(n,n.return,d)}}var li=!1,vt=!1,bp=!1,xv=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function zS(n,i){if(n=n.containerInfo,Qp=bh,n=Uy(n),Td(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,b=-1,I=-1,q=0,X=0,te=n,H=null;t:for(;;){for(var $;te!==a||f!==0&&te.nodeType!==3||(b=E+f),te!==d||l!==0&&te.nodeType!==3||(I=E+l),te.nodeType===3&&(E+=te.nodeValue.length),($=te.firstChild)!==null;)H=te,te=$;for(;;){if(te===n)break t;if(H===a&&++q===f&&(b=E),H===d&&++X===l&&(I=E),($=te.nextSibling)!==null)break;te=H,H=te.parentNode}te=$}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yp={focusedElem:n,selectionRange:a},bh=!1,Bt=i;Bt!==null;)if(i=Bt,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,Bt=n;else for(;Bt!==null;){switch(i=Bt,d=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,a=i,f=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Se=oa(a.type,f,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(Se,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(Ee){tt(a,a.return,Ee)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,a=n.nodeType,a===9)Wp(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Wp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=i.sibling,n!==null){n.return=i.return,Bt=n;break}Bt=i.return}}function Iv(n,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(n,a),l&4&&Kl(5,a);break;case 1:if(Fi(n,a),l&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(E){tt(a,a.return,E)}else{var f=oa(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(E){tt(a,a.return,E)}}l&64&&wv(a),l&512&&Xl(a,a.return);break;case 3:if(Fi(n,a),l&64&&(n=a.updateQueue,n!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{u_(n,i)}catch(E){tt(a,a.return,E)}}break;case 27:i===null&&l&4&&Rv(a);case 26:case 5:Fi(n,a),i===null&&l&4&&Sv(a),l&512&&Xl(a,a.return);break;case 12:Fi(n,a);break;case 13:Fi(n,a),l&4&&Nv(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=KS.bind(null,a),dA(n,a))));break;case 22:if(l=a.memoizedState!==null||li,!l){i=i!==null&&i.memoizedState!==null||vt,f=li;var d=vt;li=l,(vt=i)&&!d?$i(n,a,(a.subtreeFlags&8772)!==0):Fi(n,a),li=f,vt=d}break;case 30:break;default:Fi(n,a)}}function Cv(n){var i=n.alternate;i!==null&&(n.alternate=null,Cv(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Oi(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var lt=null,vn=!1;function ui(n,i,a){for(a=a.child;a!==null;)Dv(n,i,a),a=a.sibling}function Dv(n,i,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:vt||Ir(a,i),ui(n,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vt||Ir(a,i);var l=lt,f=vn;Wi(a.type)&&(lt=a.stateNode,vn=!1),ui(n,i,a),su(a.stateNode),lt=l,vn=f;break;case 5:vt||Ir(a,i);case 6:if(l=lt,f=vn,lt=null,ui(n,i,a),lt=l,vn=f,lt!==null)if(vn)try{(lt.nodeType===9?lt.body:lt.nodeName==="HTML"?lt.ownerDocument.body:lt).removeChild(a.stateNode)}catch(d){tt(a,i,d)}else try{lt.removeChild(a.stateNode)}catch(d){tt(a,i,d)}break;case 18:lt!==null&&(vn?(n=lt,_0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),du(n)):_0(lt,a.stateNode));break;case 4:l=lt,f=vn,lt=a.stateNode.containerInfo,vn=!0,ui(n,i,a),lt=l,vn=f;break;case 0:case 11:case 14:case 15:vt||Hi(2,a,i),vt||Hi(4,a,i),ui(n,i,a);break;case 1:vt||(Ir(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&bv(a,i,l)),ui(n,i,a);break;case 21:ui(n,i,a);break;case 22:vt=(l=vt)||a.memoizedState!==null,ui(n,i,a),vt=l;break;default:ui(n,i,a)}}function Nv(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{du(n)}catch(a){tt(i,i.return,a)}}function qS(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new xv),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new xv),i;default:throw Error(s(435,n.tag))}}function Sp(n,i){var a=qS(n);i.forEach(function(l){var f=XS.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}function xn(n,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],d=n,E=i,b=E;e:for(;b!==null;){switch(b.tag){case 27:if(Wi(b.type)){lt=b.stateNode,vn=!1;break e}break;case 5:lt=b.stateNode,vn=!1;break e;case 3:case 4:lt=b.stateNode.containerInfo,vn=!0;break e}b=b.return}if(lt===null)throw Error(s(160));Dv(d,E,f),lt=null,vn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Ov(i,n),i=i.sibling}var ir=null;function Ov(n,i){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:xn(i,n),In(n),l&4&&(Hi(3,n,n.return),Kl(3,n),Hi(5,n,n.return));break;case 1:xn(i,n),In(n),l&512&&(vt||a===null||Ir(a,a.return)),l&64&&li&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=ir;if(xn(i,n),In(n),l&512&&(vt||a===null||Ir(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Vs]||d[Nt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Wt(d,l,a),d[Nt]=n,yt(d),l=d;break e;case"link":var E=R0("link","href",f).get(l+(a.href||""));if(E){for(var b=0;b<E.length;b++)if(d=E[b],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(b,1);break t}}d=f.createElement(l),Wt(d,l,a),f.head.appendChild(d);break;case"meta":if(E=R0("meta","content",f).get(l+(a.content||""))){for(b=0;b<E.length;b++)if(d=E[b],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(b,1);break t}}d=f.createElement(l),Wt(d,l,a),f.head.appendChild(d);break;default:throw Error(s(468,l))}d[Nt]=n,yt(d),l=d}n.stateNode=l}else x0(f,n.type,n.stateNode);else n.stateNode=A0(f,l,n.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?x0(f,n.type,n.stateNode):A0(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Ep(n,n.memoizedProps,a.memoizedProps)}break;case 27:xn(i,n),In(n),l&512&&(vt||a===null||Ir(a,a.return)),a!==null&&l&4&&Ep(n,n.memoizedProps,a.memoizedProps);break;case 5:if(xn(i,n),In(n),l&512&&(vt||a===null||Ir(a,a.return)),n.flags&32){f=n.stateNode;try{Un(f,"")}catch($){tt(n,n.return,$)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,Ep(n,f,a!==null?a.memoizedProps:f)),l&1024&&(bp=!0);break;case 6:if(xn(i,n),In(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch($){tt(n,n.return,$)}}break;case 3:if(Eh=null,f=ir,ir=_h(i.containerInfo),xn(i,n),ir=f,In(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{du(i.containerInfo)}catch($){tt(n,n.return,$)}bp&&(bp=!1,Mv(n));break;case 4:l=ir,ir=_h(n.stateNode.containerInfo),xn(i,n),In(n),ir=l;break;case 12:xn(i,n),In(n);break;case 13:xn(i,n),In(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dp=Vn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Sp(n,l)));break;case 22:f=n.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,q=li,X=vt;if(li=q||f,vt=X||I,xn(i,n),vt=X,li=q,In(n),l&8192)e:for(i=n.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||I||li||vt||la(n)),a=null,i=n;;){if(i.tag===5||i.tag===26){if(a===null){I=a=i;try{if(d=I.stateNode,f)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{b=I.stateNode;var te=I.memoizedProps.style,H=te!=null&&te.hasOwnProperty("display")?te.display:null;b.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch($){tt(I,I.return,$)}}}else if(i.tag===6){if(a===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch($){tt(I,I.return,$)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Sp(n,a))));break;case 19:xn(i,n),In(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Sp(n,l)));break;case 30:break;case 21:break;default:xn(i,n),In(n)}}function In(n){var i=n.flags;if(i&2){try{for(var a,l=n.return;l!==null;){if(Av(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,d=Tp(n);sh(n,d,f);break;case 5:var E=a.stateNode;a.flags&32&&(Un(E,""),a.flags&=-33);var b=Tp(n);sh(n,b,E);break;case 3:case 4:var I=a.stateNode.containerInfo,q=Tp(n);wp(n,q,I);break;default:throw Error(s(161))}}catch(X){tt(n,n.return,X)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Mv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Mv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Fi(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Iv(n,i.alternate,i),i=i.sibling}function la(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:Hi(4,i,i.return),la(i);break;case 1:Ir(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&bv(i,i.return,a),la(i);break;case 27:su(i.stateNode);case 26:case 5:Ir(i,i.return),la(i);break;case 22:i.memoizedState===null&&la(i);break;case 30:la(i);break;default:la(i)}n=n.sibling}}function $i(n,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=n,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:$i(f,d,a),Kl(4,d);break;case 1:if($i(f,d,a),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){tt(l,l.return,q)}if(l=d,f=l.updateQueue,f!==null){var b=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)l_(I[f],b)}catch(q){tt(l,l.return,q)}}a&&E&64&&wv(d),Xl(d,d.return);break;case 27:Rv(d);case 26:case 5:$i(f,d,a),a&&l===null&&E&4&&Sv(d),Xl(d,d.return);break;case 12:$i(f,d,a);break;case 13:$i(f,d,a),a&&E&4&&Nv(f,d);break;case 22:d.memoizedState===null&&$i(f,d,a),Xl(d,d.return);break;case 30:break;default:$i(f,d,a)}i=i.sibling}}function Ap(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Pl(a))}function Rp(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Pl(n))}function Cr(n,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)kv(n,i,a,l),i=i.sibling}function kv(n,i,a,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Cr(n,i,a,l),f&2048&&Kl(9,i);break;case 1:Cr(n,i,a,l);break;case 3:Cr(n,i,a,l),f&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Pl(n)));break;case 12:if(f&2048){Cr(n,i,a,l),n=i.stateNode;try{var d=i.memoizedProps,E=d.id,b=d.onPostCommit;typeof b=="function"&&b(E,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){tt(i,i.return,I)}}else Cr(n,i,a,l);break;case 13:Cr(n,i,a,l);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?Cr(n,i,a,l):Wl(n,i):d._visibility&2?Cr(n,i,a,l):(d._visibility|=2,ho(n,i,a,l,(i.subtreeFlags&10256)!==0)),f&2048&&Ap(E,i);break;case 24:Cr(n,i,a,l),f&2048&&Rp(i.alternate,i);break;default:Cr(n,i,a,l)}}function ho(n,i,a,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=n,E=i,b=a,I=l,q=E.flags;switch(E.tag){case 0:case 11:case 15:ho(d,E,b,I,f),Kl(8,E);break;case 23:break;case 22:var X=E.stateNode;E.memoizedState!==null?X._visibility&2?ho(d,E,b,I,f):Wl(d,E):(X._visibility|=2,ho(d,E,b,I,f)),f&&q&2048&&Ap(E.alternate,E);break;case 24:ho(d,E,b,I,f),f&&q&2048&&Rp(E.alternate,E);break;default:ho(d,E,b,I,f)}i=i.sibling}}function Wl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,l=i,f=l.flags;switch(l.tag){case 22:Wl(a,l),f&2048&&Ap(l.alternate,l);break;case 24:Wl(a,l),f&2048&&Rp(l.alternate,l);break;default:Wl(a,l)}i=i.sibling}}var Zl=8192;function fo(n){if(n.subtreeFlags&Zl)for(n=n.child;n!==null;)Pv(n),n=n.sibling}function Pv(n){switch(n.tag){case 26:fo(n),n.flags&Zl&&n.memoizedState!==null&&RA(ir,n.memoizedState,n.memoizedProps);break;case 5:fo(n);break;case 3:case 4:var i=ir;ir=_h(n.stateNode.containerInfo),fo(n),ir=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Zl,Zl=16777216,fo(n),Zl=i):fo(n));break;default:fo(n)}}function Vv(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Jl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Bt=l,Uv(l,n)}Vv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lv(n),n=n.sibling}function Lv(n){switch(n.tag){case 0:case 11:case 15:Jl(n),n.flags&2048&&Hi(9,n,n.return);break;case 3:Jl(n);break;case 12:Jl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,ah(n)):Jl(n);break;default:Jl(n)}}function ah(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Bt=l,Uv(l,n)}Vv(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:Hi(8,i,i.return),ah(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ah(i));break;default:ah(i)}n=n.sibling}}function Uv(n,i){for(;Bt!==null;){var a=Bt;switch(a.tag){case 0:case 11:case 15:Hi(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Pl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Bt=l;else e:for(a=n;Bt!==null;){l=Bt;var f=l.sibling,d=l.return;if(Cv(l),l===a){Bt=null;break e}if(f!==null){f.return=d,Bt=f;break e}Bt=d}}}var BS={getCacheForType:function(n){var i=an(kt),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a}},HS=typeof WeakMap=="function"?WeakMap:Map,Ke=0,rt=null,Me=null,ze=0,Xe=0,Cn=null,Gi=!1,po=!1,xp=!1,ci=0,mt=0,Qi=0,ua=0,Ip=0,Qn=0,mo=0,eu=null,En=null,Cp=!1,Dp=0,oh=1/0,lh=null,Yi=null,Xt=0,Ki=null,go=null,yo=0,Np=0,Op=null,jv=null,tu=0,Mp=null;function Dn(){if((Ke&2)!==0&&ze!==0)return ze&-ze;if(K.T!==null){var n=ro;return n!==0?n:zp()}return Di()}function zv(){Qn===0&&(Qn=(ze&536870912)===0||Fe?cl():536870912);var n=Gn.current;return n!==null&&(n.flags|=32),Qn}function Nn(n,i,a){(n===rt&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(_o(n,0),Xi(n,ze,Qn,!1)),Br(n,a),((Ke&2)===0||n!==rt)&&(n===rt&&((Ke&2)===0&&(ua|=a),mt===4&&Xi(n,ze,Qn,!1)),Dr(n))}function qv(n,i,a){if((Ke&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&n.expiredLanes)===0||Ps(n,i),f=l?GS(n,i):Vp(n,i,!0),d=l;do{if(f===0){po&&!l&&Xi(n,i,0,!1);break}else{if(a=n.current.alternate,d&&!FS(a)){f=Vp(n,i,!1),d=!1;continue}if(f===2){if(d=i,n.errorRecoveryDisabledLanes&d)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var b=n;f=eu;var I=b.current.memoizedState.isDehydrated;if(I&&(_o(b,E).flags|=256),E=Vp(b,E,!1),E!==2){if(xp&&!I){b.errorRecoveryDisabledLanes|=d,ua|=d,f=4;break e}d=En,En=f,d!==null&&(En===null?En=d:En.push.apply(En,d))}f=E}if(d=!1,f!==2)continue}}if(f===1){_o(n,0),Xi(n,i,0,!0);break}e:{switch(l=n,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Xi(l,i,Qn,!Gi);break e;case 2:En=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=Dp+300-Vn(),10<f)){if(Xi(l,i,Qn,!Gi),ka(l,0,!0)!==0)break e;l.timeoutHandle=g0(Bv.bind(null,l,a,En,lh,Cp,i,Qn,ua,mo,Gi,d,2,-0,0),f);break e}Bv(l,a,En,lh,Cp,i,Qn,ua,mo,Gi,d,0,-0,0)}}break}while(!0);Dr(n)}function Bv(n,i,a,l,f,d,E,b,I,q,X,te,H,$){if(n.timeoutHandle=-1,te=i.subtreeFlags,(te&8192||(te&16785408)===16785408)&&(lu={stylesheets:null,count:0,unsuspend:AA},Pv(i),te=xA(),te!==null)){n.cancelPendingCommit=te(Kv.bind(null,n,i,d,a,l,f,E,b,I,X,1,H,$)),Xi(n,d,E,!q);return}Kv(n,i,d,a,l,f,E,b,I)}function FS(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!An(d(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Xi(n,i,a,l){i&=~Ip,i&=~ua,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var f=i;0<f;){var d=31-sn(f),E=1<<d;l[d]=-1,f&=~E}a!==0&&mr(n,a,i)}function uh(){return(Ke&6)===0?(nu(0),!1):!0}function kp(){if(Me!==null){if(Xe===0)var n=Me.return;else n=Me,ni=ra=null,Wd(n),uo=null,Gl=0,n=Me;for(;n!==null;)Tv(n.alternate,n),n=n.return;Me=null}}function _o(n,i){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,lA(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),kp(),rt=n,Me=a=Jr(n.current,null),ze=i,Xe=0,Cn=null,Gi=!1,po=Ps(n,i),xp=!1,mo=Qn=Ip=ua=Qi=mt=0,En=eu=null,Cp=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var f=31-sn(l),d=1<<f;i|=n[f],l&=~d}return ci=i,Nc(),a}function Hv(n,i){Ne=null,K.H=Xc,i===Ll||i===zc?(i=a_(),Xe=3):i===r_?(i=a_(),Xe=4):Xe=i===ov?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Cn=i,Me===null&&(mt=1,th(n,Bn(i,n.current)))}function Fv(){var n=K.H;return K.H=Xc,n===null?Xc:n}function $v(){var n=K.A;return K.A=BS,n}function Pp(){mt=4,Gi||(ze&4194048)!==ze&&Gn.current!==null||(po=!0),(Qi&134217727)===0&&(ua&134217727)===0||rt===null||Xi(rt,ze,Qn,!1)}function Vp(n,i,a){var l=Ke;Ke|=2;var f=Fv(),d=$v();(rt!==n||ze!==i)&&(lh=null,_o(n,i)),i=!1;var E=mt;e:do try{if(Xe!==0&&Me!==null){var b=Me,I=Cn;switch(Xe){case 8:kp(),E=6;break e;case 3:case 2:case 9:case 6:Gn.current===null&&(i=!0);var q=Xe;if(Xe=0,Cn=null,vo(n,b,I,q),a&&po){E=0;break e}break;default:q=Xe,Xe=0,Cn=null,vo(n,b,I,q)}}$S(),E=mt;break}catch(X){Hv(n,X)}while(!0);return i&&n.shellSuspendCounter++,ni=ra=null,Ke=l,K.H=f,K.A=d,Me===null&&(rt=null,ze=0,Nc()),E}function $S(){for(;Me!==null;)Gv(Me)}function GS(n,i){var a=Ke;Ke|=2;var l=Fv(),f=$v();rt!==n||ze!==i?(lh=null,oh=Vn()+500,_o(n,i)):po=Ps(n,i);e:do try{if(Xe!==0&&Me!==null){i=Me;var d=Cn;t:switch(Xe){case 1:Xe=0,Cn=null,vo(n,i,d,1);break;case 2:case 9:if(i_(d)){Xe=0,Cn=null,Qv(i);break}i=function(){Xe!==2&&Xe!==9||rt!==n||(Xe=7),Dr(n)},d.then(i,i);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:i_(d)?(Xe=0,Cn=null,Qv(i)):(Xe=0,Cn=null,vo(n,i,d,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var b=Me;if(!E||I0(E)){Xe=0,Cn=null;var I=b.sibling;if(I!==null)Me=I;else{var q=b.return;q!==null?(Me=q,ch(q)):Me=null}break t}}Xe=0,Cn=null,vo(n,i,d,5);break;case 6:Xe=0,Cn=null,vo(n,i,d,6);break;case 8:kp(),mt=6;break e;default:throw Error(s(462))}}QS();break}catch(X){Hv(n,X)}while(!0);return ni=ra=null,K.H=l,K.A=f,Ke=a,Me!==null?0:(rt=null,ze=0,Nc(),mt)}function QS(){for(;Me!==null&&!al();)Gv(Me)}function Gv(n){var i=vv(n.alternate,n,ci);n.memoizedProps=n.pendingProps,i===null?ch(n):Me=i}function Qv(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=dv(a,i,i.pendingProps,i.type,void 0,ze);break;case 11:i=dv(a,i,i.pendingProps,i.type.render,i.ref,ze);break;case 5:Wd(i);default:Tv(a,i),i=Me=Yy(i,ci),i=vv(a,i,ci)}n.memoizedProps=n.pendingProps,i===null?ch(n):Me=i}function vo(n,i,a,l){ni=ra=null,Wd(i),uo=null,Gl=0;var f=i.return;try{if(VS(n,f,i,a,ze)){mt=1,th(n,Bn(a,n.current)),Me=null;return}}catch(d){if(f!==null)throw Me=f,d;mt=1,th(n,Bn(a,n.current)),Me=null;return}i.flags&32768?(Fe||l===1?n=!0:po||(ze&536870912)!==0?n=!1:(Gi=n=!0,(l===2||l===9||l===3||l===6)&&(l=Gn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Yv(i,n)):ch(i)}function ch(n){var i=n;do{if((i.flags&32768)!==0){Yv(i,Gi);return}n=i.return;var a=US(i.alternate,i,ci);if(a!==null){Me=a;return}if(i=i.sibling,i!==null){Me=i;return}Me=i=n}while(i!==null);mt===0&&(mt=5)}function Yv(n,i){do{var a=jS(n.alternate,n);if(a!==null){a.flags&=32767,Me=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){Me=n;return}Me=n=a}while(n!==null);mt=6,Me=null}function Kv(n,i,a,l,f,d,E,b,I){n.cancelPendingCommit=null;do hh();while(Xt!==0);if((Ke&6)!==0)throw Error(s(327));if(i!==null){if(i===n.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Rd,fl(n,a,d,E,b,I),n===rt&&(Me=rt=null,ze=0),go=i,Ki=n,yo=a,Np=d,Op=f,jv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,WS(Ns,function(){return e0(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=K.T,K.T=null,f=le.p,le.p=2,E=Ke,Ke|=4;try{zS(n,i,a)}finally{Ke=E,le.p=f,K.T=l}}Xt=1,Xv(),Wv(),Zv()}}function Xv(){if(Xt===1){Xt=0;var n=Ki,i=go,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=K.T,K.T=null;var l=le.p;le.p=2;var f=Ke;Ke|=4;try{Ov(i,n);var d=Yp,E=Uy(n.containerInfo),b=d.focusedElem,I=d.selectionRange;if(E!==b&&b&&b.ownerDocument&&Ly(b.ownerDocument.documentElement,b)){if(I!==null&&Td(b)){var q=I.start,X=I.end;if(X===void 0&&(X=q),"selectionStart"in b)b.selectionStart=q,b.selectionEnd=Math.min(X,b.value.length);else{var te=b.ownerDocument||document,H=te&&te.defaultView||window;if(H.getSelection){var $=H.getSelection(),Se=b.textContent.length,Ee=Math.min(I.start,Se),et=I.end===void 0?Ee:Math.min(I.end,Se);!$.extend&&Ee>et&&(E=et,et=Ee,Ee=E);var V=Vy(b,Ee),M=Vy(b,et);if(V&&M&&($.rangeCount!==1||$.anchorNode!==V.node||$.anchorOffset!==V.offset||$.focusNode!==M.node||$.focusOffset!==M.offset)){var z=te.createRange();z.setStart(V.node,V.offset),$.removeAllRanges(),Ee>et?($.addRange(z),$.extend(M.node,M.offset)):(z.setEnd(M.node,M.offset),$.addRange(z))}}}}for(te=[],$=b;$=$.parentNode;)$.nodeType===1&&te.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<te.length;b++){var Z=te[b];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}bh=!!Qp,Yp=Qp=null}finally{Ke=f,le.p=l,K.T=a}}n.current=i,Xt=2}}function Wv(){if(Xt===2){Xt=0;var n=Ki,i=go,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=K.T,K.T=null;var l=le.p;le.p=2;var f=Ke;Ke|=4;try{Iv(n,i.alternate,i)}finally{Ke=f,le.p=l,K.T=a}}Xt=3}}function Zv(){if(Xt===4||Xt===3){Xt=0,ac();var n=Ki,i=go,a=yo,l=jv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Xt=5:(Xt=0,go=Ki=null,Jv(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Yi=null),Pa(a),i=i.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=K.T,f=le.p,le.p=2,K.T=null;try{for(var d=n.onRecoverableError,E=0;E<l.length;E++){var b=l[E];d(b.value,{componentStack:b.stack})}}finally{K.T=i,le.p=f}}(yo&3)!==0&&hh(),Dr(n),f=n.pendingLanes,(a&4194090)!==0&&(f&42)!==0?n===Mp?tu++:(tu=0,Mp=n):tu=0,nu(0)}}function Jv(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Pl(i)))}function hh(n){return Xv(),Wv(),Zv(),e0()}function e0(){if(Xt!==5)return!1;var n=Ki,i=Np;Np=0;var a=Pa(yo),l=K.T,f=le.p;try{le.p=32>a?32:a,K.T=null,a=Op,Op=null;var d=Ki,E=yo;if(Xt=0,go=Ki=null,yo=0,(Ke&6)!==0)throw Error(s(331));var b=Ke;if(Ke|=4,Lv(d.current),kv(d,d.current,E,a),Ke=b,nu(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{le.p=f,K.T=l,Jv(n,i)}}function t0(n,i,a){i=Bn(a,i),i=hp(n.stateNode,i,2),n=ji(n,i,2),n!==null&&(Br(n,2),Dr(n))}function tt(n,i,a){if(n.tag===3)t0(n,n,a);else for(;i!==null;){if(i.tag===3){t0(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Yi===null||!Yi.has(l))){n=Bn(a,n),a=sv(2),l=ji(i,a,2),l!==null&&(av(a,l,i,n),Br(l,2),Dr(l));break}}i=i.return}}function Lp(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new HS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(xp=!0,f.add(a),n=YS.bind(null,n,i,a),i.then(n,n))}function YS(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,rt===n&&(ze&a)===a&&(mt===4||mt===3&&(ze&62914560)===ze&&300>Vn()-Dp?(Ke&2)===0&&_o(n,0):Ip|=a,mo===ze&&(mo=0)),Dr(n)}function n0(n,i){i===0&&(i=hl()),n=Ja(n,i),n!==null&&(Br(n,i),Dr(n))}function KS(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),n0(n,a)}function XS(n,i){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),n0(n,a)}function WS(n,i){return Cs(n,i)}var fh=null,Eo=null,Up=!1,dh=!1,jp=!1,ca=0;function Dr(n){n!==Eo&&n.next===null&&(Eo===null?fh=Eo=n:Eo=Eo.next=n),dh=!0,Up||(Up=!0,JS())}function nu(n,i){if(!jp&&dh){jp=!0;do for(var a=!1,l=fh;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var E=l.suspendedLanes,b=l.pingedLanes;d=(1<<31-sn(42|n)+1)-1,d&=f&~(E&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,a0(l,d))}else d=ze,d=ka(l,l===rt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ps(l,d)||(a=!0,a0(l,d));l=l.next}while(a);jp=!1}}function ZS(){r0()}function r0(){dh=Up=!1;var n=0;ca!==0&&(oA()&&(n=ca),ca=0);for(var i=Vn(),a=null,l=fh;l!==null;){var f=l.next,d=i0(l,i);d===0?(l.next=null,a===null?fh=f:a.next=f,f===null&&(Eo=a)):(a=l,(n!==0||(d&3)!==0)&&(dh=!0)),l=f}nu(n)}function i0(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var E=31-sn(d),b=1<<E,I=f[E];I===-1?((b&a)===0||(b&l)!==0)&&(f[E]=ul(b,i)):I<=i&&(n.expiredLanes|=b),d&=~b}if(i=rt,a=ze,a=ka(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===i&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Ds(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||Ps(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(l!==null&&Ds(l),Pa(a)){case 2:case 8:a=Oa;break;case 32:a=Ns;break;case 268435456:a=Ma;break;default:a=Ns}return l=s0.bind(null,n),a=Cs(a,l),n.callbackPriority=i,n.callbackNode=a,i}return l!==null&&l!==null&&Ds(l),n.callbackPriority=2,n.callbackNode=null,2}function s0(n,i){if(Xt!==0&&Xt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(hh()&&n.callbackNode!==a)return null;var l=ze;return l=ka(n,n===rt?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(qv(n,l,i),i0(n,Vn()),n.callbackNode!=null&&n.callbackNode===a?s0.bind(null,n):null)}function a0(n,i){if(hh())return null;qv(n,i,!0)}function JS(){uA(function(){(Ke&6)!==0?Cs(ol,ZS):r0()})}function zp(){return ca===0&&(ca=cl()),ca}function o0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:qa(""+n)}function l0(n,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,n.id&&a.setAttribute("form",n.id),i.parentNode.insertBefore(a,i),n=new FormData(n),a.parentNode.removeChild(a),n}function eA(n,i,a,l,f){if(i==="submit"&&a&&a.stateNode===f){var d=o0((f[Tt]||null).action),E=l.submitter;E&&(i=(i=E[Tt]||null)?o0(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var b=new Ba("action","action",null,l,f);n.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ca!==0){var I=E?l0(f,E):new FormData(f);ap(a,{pending:!0,data:I,method:f.method,action:d},null,I)}}else typeof d=="function"&&(b.preventDefault(),I=E?l0(f,E):new FormData(f),ap(a,{pending:!0,data:I,method:f.method,action:d},d,I))},currentTarget:f}]})}}for(var qp=0;qp<Ad.length;qp++){var Bp=Ad[qp],tA=Bp.toLowerCase(),nA=Bp[0].toUpperCase()+Bp.slice(1);rr(tA,"on"+nA)}rr(qy,"onAnimationEnd"),rr(By,"onAnimationIteration"),rr(Hy,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(vS,"onTransitionRun"),rr(ES,"onTransitionStart"),rr(TS,"onTransitionCancel"),rr(Fy,"onTransitionEnd"),Fr("onMouseEnter",["mouseout","mouseover"]),Fr("onMouseLeave",["mouseout","mouseover"]),Fr("onPointerEnter",["pointerout","pointerover"]),Fr("onPointerLeave",["pointerout","pointerover"]),tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tr("onBeforeInput",["compositionend","keypress","textInput","paste"]),tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ru));function u0(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var b=l[E],I=b.instance,q=b.currentTarget;if(b=b.listener,I!==d&&f.isPropagationStopped())break e;d=b,f.currentTarget=q;try{d(f)}catch(X){eh(X)}f.currentTarget=null,d=I}else for(E=0;E<l.length;E++){if(b=l[E],I=b.instance,q=b.currentTarget,b=b.listener,I!==d&&f.isPropagationStopped())break e;d=b,f.currentTarget=q;try{d(f)}catch(X){eh(X)}f.currentTarget=null,d=I}}}}function ke(n,i){var a=i[pl];a===void 0&&(a=i[pl]=new Set);var l=n+"__bubble";a.has(l)||(c0(i,n,2,!1),a.add(l))}function Hp(n,i,a){var l=0;i&&(l|=4),c0(a,n,l,i)}var ph="_reactListening"+Math.random().toString(36).slice(2);function Fp(n){if(!n[ph]){n[ph]=!0,ml.forEach(function(a){a!=="selectionchange"&&(rA.has(a)||Hp(a,!1,n),Hp(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ph]||(i[ph]=!0,Hp("selectionchange",!1,i))}}function c0(n,i,a,l){switch(k0(i)){case 2:var f=DA;break;case 8:f=NA;break;default:f=im}a=f.bind(null,i,a,n),f=void 0,!zn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function $p(n,i,a,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var b=l.stateNode.containerInfo;if(b===f)break;if(E===4)for(E=l.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;b!==null;){if(E=Hr(b),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){l=d=E;continue e}b=b.parentNode}}l=l.return}gc(function(){var q=d,X=jn(a),te=[];e:{var H=$y.get(n);if(H!==void 0){var $=Ba,Se=n;switch(n){case"keypress":if(Tr(a)===0)break e;case"keydown":case"keyup":$=Ya;break;case"focusin":Se="focus",$=$a;break;case"focusout":Se="blur",$=$a;break;case"beforeblur":case"afterblur":$=$a;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=qn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Sc;break;case qy:case By:case Hy:$=Ga;break;case Fy:$=Rc;break;case"scroll":case"scrollend":$=yc;break;case"wheel":$=Ka;break;case"copy":case"cut":case"paste":$=Qa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=xl;break;case"toggle":case"beforetoggle":$=Ic}var Ee=(i&4)!==0,et=!Ee&&(n==="scroll"||n==="scrollend"),V=Ee?H!==null?H+"Capture":null:H;Ee=[];for(var M=q,z;M!==null;){var Z=M;if(z=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||z===null||V===null||(Z=Hs(M,V),Z!=null&&Ee.push(iu(M,Z,z))),et)break;M=M.return}0<Ee.length&&(H=new $(H,Se,null,a,X),te.push({event:H,listeners:Ee}))}}if((i&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",$=n==="mouseout"||n==="pointerout",H&&a!==Qr&&(Se=a.relatedTarget||a.fromElement)&&(Hr(Se)||Se[Ln]))break e;if(($||H)&&(H=X.window===X?X:(H=X.ownerDocument)?H.defaultView||H.parentWindow:window,$?(Se=a.relatedTarget||a.toElement,$=q,Se=Se?Hr(Se):null,Se!==null&&(et=u(Se),Ee=Se.tag,Se!==et||Ee!==5&&Ee!==27&&Ee!==6)&&(Se=null)):($=null,Se=q),$!==Se)){if(Ee=qn,Z="onMouseLeave",V="onMouseEnter",M="mouse",(n==="pointerout"||n==="pointerover")&&(Ee=xl,Z="onPointerLeave",V="onPointerEnter",M="pointer"),et=$==null?H:yr($),z=Se==null?H:yr(Se),H=new Ee(Z,M+"leave",$,a,X),H.target=et,H.relatedTarget=z,Z=null,Hr(X)===q&&(Ee=new Ee(V,M+"enter",Se,a,X),Ee.target=z,Ee.relatedTarget=et,Z=Ee),et=Z,$&&Se)t:{for(Ee=$,V=Se,M=0,z=Ee;z;z=To(z))M++;for(z=0,Z=V;Z;Z=To(Z))z++;for(;0<M-z;)Ee=To(Ee),M--;for(;0<z-M;)V=To(V),z--;for(;M--;){if(Ee===V||V!==null&&Ee===V.alternate)break t;Ee=To(Ee),V=To(V)}Ee=null}else Ee=null;$!==null&&h0(te,H,$,Ee,!1),Se!==null&&et!==null&&h0(te,et,Se,Ee,!0)}}e:{if(H=q?yr(q):window,$=H.nodeName&&H.nodeName.toLowerCase(),$==="select"||$==="input"&&H.type==="file")var pe=Dy;else if(Mt(H))if(Ny)pe=gS;else{pe=pS;var Oe=dS}else $=H.nodeName,!$||$.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?q&&El(q.elementType)&&(pe=Dy):pe=mS;if(pe&&(pe=pe(n,q))){Zr(te,pe,a,X);break e}Oe&&Oe(n,H,q),n==="focusout"&&q&&H.type==="number"&&q.memoizedProps.value!=null&&ki(H,"number",H.value)}switch(Oe=q?yr(q):window,n){case"focusin":(Mt(Oe)||Oe.contentEditable==="true")&&(Xa=Oe,wd=q,Dl=null);break;case"focusout":Dl=wd=Xa=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,jy(te,a,X);break;case"selectionchange":if(_S)break;case"keydown":case"keyup":jy(te,a,X)}var ye;if(Sr)e:{switch(n){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Ue?Y(n,a)&&(Te="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(v&&a.locale!=="ko"&&(Ue||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ue&&(ye=wl()):(Er=X,Pi="value"in Er?Er.value:Er.textContent,Ue=!0)),Oe=mh(q,Te),0<Oe.length&&(Te=new Al(Te,n,null,a,X),te.push({event:Te,listeners:Oe}),ye?Te.data=ye:(ye=oe(a),ye!==null&&(Te.data=ye)))),(ye=y?Ot(n,a):je(n,a))&&(Te=mh(q,"onBeforeInput"),0<Te.length&&(Oe=new Al("onBeforeInput","beforeinput",null,a,X),te.push({event:Oe,listeners:Te}),Oe.data=ye)),eA(te,n,q,a,X)}u0(te,i)})}function iu(n,i,a){return{instance:n,listener:i,currentTarget:a}}function mh(n,i){for(var a=i+"Capture",l=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Hs(n,a),f!=null&&l.unshift(iu(n,f,d)),f=Hs(n,i),f!=null&&l.push(iu(n,f,d))),n.tag===3)return l;n=n.return}return[]}function To(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function h0(n,i,a,l,f){for(var d=i._reactName,E=[];a!==null&&a!==l;){var b=a,I=b.alternate,q=b.stateNode;if(b=b.tag,I!==null&&I===l)break;b!==5&&b!==26&&b!==27||q===null||(I=q,f?(q=Hs(a,d),q!=null&&E.unshift(iu(a,q,I))):f||(q=Hs(a,d),q!=null&&E.push(iu(a,q,I)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var iA=/\r\n?/g,sA=/\u0000|\uFFFD/g;function f0(n){return(typeof n=="string"?n:""+n).replace(iA,`
`).replace(sA,"")}function d0(n,i){return i=f0(i),f0(n)===i}function gh(){}function Je(n,i,a,l,f,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Un(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Un(n,""+l);break;case"className":_r(n,"class",l);break;case"tabIndex":_r(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":_r(n,a,l);break;case"style":vl(n,l,d);break;case"data":if(i!=="object"){_r(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=qa(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Je(n,i,"name",f.name,f,null),Je(n,i,"formEncType",f.formEncType,f,null),Je(n,i,"formMethod",f.formMethod,f,null),Je(n,i,"formTarget",f.formTarget,f,null)):(Je(n,i,"encType",f.encType,f,null),Je(n,i,"method",f.method,f,null),Je(n,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=qa(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=gh);break;case"onScroll":l!=null&&ke("scroll",n);break;case"onScrollEnd":l!=null&&ke("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=qa(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":ke("beforetoggle",n),ke("toggle",n),Mi(n,"popover",l);break;case"xlinkActuate":Qt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Mi(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=md.get(a)||a,Mi(n,a,l))}}function Gp(n,i,a,l,f,d){switch(a){case"style":vl(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?Un(n,l):(typeof l=="number"||typeof l=="bigint")&&Un(n,""+l);break;case"onScroll":l!=null&&ke("scroll",n);break;case"onScrollEnd":l!=null&&ke("scrollend",n);break;case"onClick":l!=null&&(n.onclick=gh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Va.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),d=n[Tt]||null,d=d!=null?d[a]:null,typeof d=="function"&&n.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,l,f);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):Mi(n,a,l)}}}function Wt(n,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",n),ke("load",n);var l=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Je(n,i,d,E,a,null)}}f&&Je(n,i,"srcSet",a.srcSet,a,null),l&&Je(n,i,"src",a.src,a,null);return;case"input":ke("invalid",n);var b=d=E=f=null,I=null,q=null;for(l in a)if(a.hasOwnProperty(l)){var X=a[l];if(X!=null)switch(l){case"name":f=X;break;case"type":E=X;break;case"checked":I=X;break;case"defaultChecked":q=X;break;case"value":d=X;break;case"defaultValue":b=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,i));break;default:Je(n,i,l,X,a,null)}}zs(n,d,b,I,q,E,f,!1),za(n);return;case"select":ke("invalid",n),l=E=d=null;for(f in a)if(a.hasOwnProperty(f)&&(b=a[f],b!=null))switch(f){case"value":d=b;break;case"defaultValue":E=b;break;case"multiple":l=b;default:Je(n,i,f,b,a,null)}i=d,a=E,n.multiple=!!l,i!=null?Gr(n,!!l,i,!1):a!=null&&Gr(n,!!l,a,!0);return;case"textarea":ke("invalid",n),d=f=l=null;for(E in a)if(a.hasOwnProperty(E)&&(b=a[E],b!=null))switch(E){case"value":l=b;break;case"defaultValue":f=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Je(n,i,E,b,a,null)}qs(n,l,f,d),za(n);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Je(n,i,I,l,a,null)}return;case"dialog":ke("beforetoggle",n),ke("toggle",n),ke("cancel",n),ke("close",n);break;case"iframe":case"object":ke("load",n);break;case"video":case"audio":for(l=0;l<ru.length;l++)ke(ru[l],n);break;case"image":ke("error",n),ke("load",n);break;case"details":ke("toggle",n);break;case"embed":case"source":case"link":ke("error",n),ke("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in a)if(a.hasOwnProperty(q)&&(l=a[q],l!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Je(n,i,q,l,a,null)}return;default:if(El(i)){for(X in a)a.hasOwnProperty(X)&&(l=a[X],l!==void 0&&Gp(n,i,X,l,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!=null&&Je(n,i,b,l,a,null))}function aA(n,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,E=null,b=null,I=null,q=null,X=null;for($ in a){var te=a[$];if(a.hasOwnProperty($)&&te!=null)switch($){case"checked":break;case"value":break;case"defaultValue":I=te;default:l.hasOwnProperty($)||Je(n,i,$,null,l,te)}}for(var H in l){var $=l[H];if(te=a[H],l.hasOwnProperty(H)&&($!=null||te!=null))switch(H){case"type":d=$;break;case"name":f=$;break;case"checked":q=$;break;case"defaultChecked":X=$;break;case"value":E=$;break;case"defaultValue":b=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,i));break;default:$!==te&&Je(n,i,H,$,l,te)}}Sn(n,E,b,I,q,X,d,f);return;case"select":$=E=b=H=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":$=I;default:l.hasOwnProperty(d)||Je(n,i,d,null,l,I)}for(f in l)if(d=l[f],I=a[f],l.hasOwnProperty(f)&&(d!=null||I!=null))switch(f){case"value":H=d;break;case"defaultValue":b=d;break;case"multiple":E=d;default:d!==I&&Je(n,i,f,d,l,I)}i=b,a=E,l=$,H!=null?Gr(n,!!a,H,!1):!!l!=!!a&&(i!=null?Gr(n,!!a,i,!0):Gr(n,!!a,a?[]:"",!1));return;case"textarea":$=H=null;for(b in a)if(f=a[b],a.hasOwnProperty(b)&&f!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Je(n,i,b,null,l,f)}for(E in l)if(f=l[E],d=a[E],l.hasOwnProperty(E)&&(f!=null||d!=null))switch(E){case"value":H=f;break;case"defaultValue":$=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&Je(n,i,E,f,l,d)}We(n,H,$);return;case"option":for(var Se in a)if(H=a[Se],a.hasOwnProperty(Se)&&H!=null&&!l.hasOwnProperty(Se))switch(Se){case"selected":n.selected=!1;break;default:Je(n,i,Se,null,l,H)}for(I in l)if(H=l[I],$=a[I],l.hasOwnProperty(I)&&H!==$&&(H!=null||$!=null))switch(I){case"selected":n.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Je(n,i,I,H,l,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in a)H=a[Ee],a.hasOwnProperty(Ee)&&H!=null&&!l.hasOwnProperty(Ee)&&Je(n,i,Ee,null,l,H);for(q in l)if(H=l[q],$=a[q],l.hasOwnProperty(q)&&H!==$&&(H!=null||$!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:Je(n,i,q,H,l,$)}return;default:if(El(i)){for(var et in a)H=a[et],a.hasOwnProperty(et)&&H!==void 0&&!l.hasOwnProperty(et)&&Gp(n,i,et,void 0,l,H);for(X in l)H=l[X],$=a[X],!l.hasOwnProperty(X)||H===$||H===void 0&&$===void 0||Gp(n,i,X,H,l,$);return}}for(var V in a)H=a[V],a.hasOwnProperty(V)&&H!=null&&!l.hasOwnProperty(V)&&Je(n,i,V,null,l,H);for(te in l)H=l[te],$=a[te],!l.hasOwnProperty(te)||H===$||H==null&&$==null||Je(n,i,te,H,l,$)}var Qp=null,Yp=null;function yh(n){return n.nodeType===9?n:n.ownerDocument}function p0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m0(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Kp(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xp=null;function oA(){var n=window.event;return n&&n.type==="popstate"?n===Xp?!1:(Xp=n,!0):(Xp=null,!1)}var g0=typeof setTimeout=="function"?setTimeout:void 0,lA=typeof clearTimeout=="function"?clearTimeout:void 0,y0=typeof Promise=="function"?Promise:void 0,uA=typeof queueMicrotask=="function"?queueMicrotask:typeof y0<"u"?function(n){return y0.resolve(null).then(n).catch(cA)}:g0;function cA(n){setTimeout(function(){throw n})}function Wi(n){return n==="head"}function _0(n,i){var a=i,l=0,f=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var E=n.ownerDocument;if(a&1&&su(E.documentElement),a&2&&su(E.body),a&4)for(a=E.head,su(a),E=a.firstChild;E;){var b=E.nextSibling,I=E.nodeName;E[Vs]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=b}}if(f===0){n.removeChild(d),du(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);du(i)}function Wp(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wp(a),Oi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function hA(n,i,a,l){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Vs])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=sr(n.nextSibling),n===null)break}return null}function fA(n,i,a){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=sr(n.nextSibling),n===null))return null;return n}function Zp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function dA(n,i){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function sr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Jp=null;function v0(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}function E0(n,i,a){switch(i=yh(a),n){case"html":if(n=i.documentElement,!n)throw Error(s(452));return n;case"head":if(n=i.head,!n)throw Error(s(453));return n;case"body":if(n=i.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function su(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Oi(n)}var Yn=new Map,T0=new Set;function _h(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var hi=le.d;le.d={f:pA,r:mA,D:gA,C:yA,L:_A,m:vA,X:TA,S:EA,M:wA};function pA(){var n=hi.f(),i=uh();return n||i}function mA(n){var i=gr(n);i!==null&&i.tag===5&&i.type==="form"?q_(i):hi.r(n)}var wo=typeof document>"u"?null:document;function w0(n,i,a){var l=wo;if(l&&typeof i=="string"&&i){var f=wt(i);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),T0.has(f)||(T0.add(f),n={rel:n,crossOrigin:a,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Wt(i,"link",n),yt(i),l.head.appendChild(i)))}}function gA(n){hi.D(n),w0("dns-prefetch",n,null)}function yA(n,i){hi.C(n,i),w0("preconnect",n,i)}function _A(n,i,a){hi.L(n,i,a);var l=wo;if(l&&n&&i){var f='link[rel="preload"][as="'+wt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+wt(a.imageSizes)+'"]')):f+='[href="'+wt(n)+'"]';var d=f;switch(i){case"style":d=bo(n);break;case"script":d=So(n)}Yn.has(d)||(n=_({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:n,as:i},a),Yn.set(d,n),l.querySelector(f)!==null||i==="style"&&l.querySelector(au(d))||i==="script"&&l.querySelector(ou(d))||(i=l.createElement("link"),Wt(i,"link",n),yt(i),l.head.appendChild(i)))}}function vA(n,i){hi.m(n,i);var a=wo;if(a&&n){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+wt(l)+'"][href="'+wt(n)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=So(n)}if(!Yn.has(d)&&(n=_({rel:"modulepreload",href:n},i),Yn.set(d,n),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ou(d)))return}l=a.createElement("link"),Wt(l,"link",n),yt(l),a.head.appendChild(l)}}}function EA(n,i,a){hi.S(n,i,a);var l=wo;if(l&&n){var f=dn(l).hoistableStyles,d=bo(n);i=i||"default";var E=f.get(d);if(!E){var b={loading:0,preload:null};if(E=l.querySelector(au(d)))b.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":i},a),(a=Yn.get(d))&&em(n,a);var I=E=l.createElement("link");yt(I),Wt(I,"link",n),I._p=new Promise(function(q,X){I.onload=q,I.onerror=X}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,vh(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:b},f.set(d,E)}}}function TA(n,i){hi.X(n,i);var a=wo;if(a&&n){var l=dn(a).hoistableScripts,f=So(n),d=l.get(f);d||(d=a.querySelector(ou(f)),d||(n=_({src:n,async:!0},i),(i=Yn.get(f))&&tm(n,i),d=a.createElement("script"),yt(d),Wt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function wA(n,i){hi.M(n,i);var a=wo;if(a&&n){var l=dn(a).hoistableScripts,f=So(n),d=l.get(f);d||(d=a.querySelector(ou(f)),d||(n=_({src:n,async:!0,type:"module"},i),(i=Yn.get(f))&&tm(n,i),d=a.createElement("script"),yt(d),Wt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function b0(n,i,a,l){var f=(f=ve.current)?_h(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=bo(a.href),a=dn(f).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=bo(a.href);var d=dn(f).hoistableStyles,E=d.get(n);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,E),(d=f.querySelector(au(n)))&&!d._p&&(E.instance=d,E.state.loading=5),Yn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Yn.set(n,a),d||bA(f,n,a,E.state))),i&&l===null)throw Error(s(528,""));return E}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=So(a),a=dn(f).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function bo(n){return'href="'+wt(n)+'"'}function au(n){return'link[rel="stylesheet"]['+n+"]"}function S0(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function bA(n,i,a,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Wt(i,"link",a),yt(i),n.head.appendChild(i))}function So(n){return'[src="'+wt(n)+'"]'}function ou(n){return"script[async]"+n}function A0(n,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+wt(a.href)+'"]');if(l)return i.instance=l,yt(l),l;var f=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),yt(l),Wt(l,"style",f),vh(l,a.precedence,n),i.instance=l;case"stylesheet":f=bo(a.href);var d=n.querySelector(au(f));if(d)return i.state.loading|=4,i.instance=d,yt(d),d;l=S0(a),(f=Yn.get(f))&&em(l,f),d=(n.ownerDocument||n).createElement("link"),yt(d);var E=d;return E._p=new Promise(function(b,I){E.onload=b,E.onerror=I}),Wt(d,"link",l),i.state.loading|=4,vh(d,a.precedence,n),i.instance=d;case"script":return d=So(a.src),(f=n.querySelector(ou(d)))?(i.instance=f,yt(f),f):(l=a,(f=Yn.get(d))&&(l=_({},a),tm(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),yt(f),Wt(f,"link",l),n.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,vh(l,a.precedence,n));return i.instance}function vh(n,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,E=0;E<l.length;E++){var b=l[E];if(b.dataset.precedence===i)d=b;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(n,i.firstChild))}function em(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function tm(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Eh=null;function R0(n,i,a){if(Eh===null){var l=new Map,f=Eh=new Map;f.set(a,l)}else f=Eh,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var d=a[f];if(!(d[Vs]||d[Nt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=n+E;var b=l.get(E);b?b.push(d):l.set(E,[d])}}return l}function x0(n,i,a){n=n.ownerDocument||n,n.head.insertBefore(a,i==="title"?n.querySelector("head > title"):null)}function SA(n,i,a){if(a===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function I0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var lu=null;function AA(){}function RA(n,i,a){if(lu===null)throw Error(s(475));var l=lu;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=bo(a.href),d=n.querySelector(au(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=Th.bind(l),n.then(l,l)),i.state.loading|=4,i.instance=d,yt(d);return}d=n.ownerDocument||n,a=S0(a),(f=Yn.get(f))&&em(a,f),d=d.createElement("link"),yt(d);var E=d;E._p=new Promise(function(b,I){E.onload=b,E.onerror=I}),Wt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Th.bind(l),n.addEventListener("load",i),n.addEventListener("error",i))}}function xA(){if(lu===null)throw Error(s(475));var n=lu;return n.stylesheets&&n.count===0&&nm(n,n.stylesheets),0<n.count?function(i){var a=setTimeout(function(){if(n.stylesheets&&nm(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(a)}}:null}function Th(){if(this.count--,this.count===0){if(this.stylesheets)nm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var wh=null;function nm(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,wh=new Map,i.forEach(IA,n),wh=null,Th.call(n))}function IA(n,i){if(!(i.state.loading&4)){var a=wh.get(n);if(a)var l=a.get(null);else{a=new Map,wh.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var E=f[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),l=E)}l&&a.set(null,l)}f=i.instance,E=f.getAttribute("data-precedence"),d=a.get(E)||l,d===l&&a.set(null,f),a.set(E,f),this.count++,l=Th.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),i.state.loading|=4}}var uu={$$typeof:ie,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function CA(n,i,a,l,f,d,E,b){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qr(0),this.hiddenUpdates=qr(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function C0(n,i,a,l,f,d,E,b,I,q,X,te){return n=new CA(n,i,a,E,b,I,q,te),i=1,d===!0&&(i|=24),d=Rn(3,null,null,i),n.current=d,d.stateNode=n,i=Ld(),i.refCount++,n.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},qd(d),n}function D0(n){return n?(n=eo,n):eo}function N0(n,i,a,l,f,d){f=D0(f),l.context===null?l.context=f:l.pendingContext=f,l=Ui(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=ji(n,l,i),a!==null&&(Nn(a,n,i),jl(a,n,i))}function O0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function rm(n,i){O0(n,i),(n=n.alternate)&&O0(n,i)}function M0(n){if(n.tag===13){var i=Ja(n,67108864);i!==null&&Nn(i,n,67108864),rm(n,67108864)}}var bh=!0;function DA(n,i,a,l){var f=K.T;K.T=null;var d=le.p;try{le.p=2,im(n,i,a,l)}finally{le.p=d,K.T=f}}function NA(n,i,a,l){var f=K.T;K.T=null;var d=le.p;try{le.p=8,im(n,i,a,l)}finally{le.p=d,K.T=f}}function im(n,i,a,l){if(bh){var f=sm(l);if(f===null)$p(n,i,l,Sh,a),P0(n,l);else if(MA(f,n,i,a,l))l.stopPropagation();else if(P0(n,l),i&4&&-1<OA.indexOf(n)){for(;f!==null;){var d=gr(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=er(d.pendingLanes);if(E!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;E;){var I=1<<31-sn(E);b.entanglements[1]|=I,E&=~I}Dr(d),(Ke&6)===0&&(oh=Vn()+500,nu(0))}}break;case 13:b=Ja(d,2),b!==null&&Nn(b,d,2),uh(),rm(d,2)}if(d=sm(l),d===null&&$p(n,i,l,Sh,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else $p(n,i,l,null,a)}}function sm(n){return n=jn(n),am(n)}var Sh=null;function am(n){if(Sh=null,n=Hr(n),n!==null){var i=u(n);if(i===null)n=null;else{var a=i.tag;if(a===13){if(n=h(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Sh=n,null}function k0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ud()){case ol:return 2;case Oa:return 8;case Ns:case cd:return 32;case Ma:return 268435456;default:return 32}default:return 32}}var om=!1,Zi=null,Ji=null,es=null,cu=new Map,hu=new Map,ts=[],OA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P0(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":cu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":hu.delete(i.pointerId)}}function fu(n,i,a,l,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=gr(i),i!==null&&M0(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function MA(n,i,a,l,f){switch(i){case"focusin":return Zi=fu(Zi,n,i,a,l,f),!0;case"dragenter":return Ji=fu(Ji,n,i,a,l,f),!0;case"mouseover":return es=fu(es,n,i,a,l,f),!0;case"pointerover":var d=f.pointerId;return cu.set(d,fu(cu.get(d)||null,n,i,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,hu.set(d,fu(hu.get(d)||null,n,i,a,l,f)),!0}return!1}function V0(n){var i=Hr(n.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){n.blockedOn=i,uc(n.priority,function(){if(a.tag===13){var l=Dn();l=Ci(l);var f=Ja(a,l);f!==null&&Nn(f,a,l),rm(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ah(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=sm(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Qr=l,a.target.dispatchEvent(l),Qr=null}else return i=gr(a),i!==null&&M0(i),n.blockedOn=a,!1;i.shift()}return!0}function L0(n,i,a){Ah(n)&&a.delete(i)}function kA(){om=!1,Zi!==null&&Ah(Zi)&&(Zi=null),Ji!==null&&Ah(Ji)&&(Ji=null),es!==null&&Ah(es)&&(es=null),cu.forEach(L0),hu.forEach(L0)}function Rh(n,i){n.blockedOn===i&&(n.blockedOn=null,om||(om=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,kA)))}var xh=null;function U0(n){xh!==n&&(xh=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xh===n&&(xh=null);for(var i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],f=n[i+2];if(typeof l!="function"){if(am(l||a)===null)continue;break}var d=gr(a);d!==null&&(n.splice(i,3),i-=3,ap(d,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function du(n){function i(I){return Rh(I,n)}Zi!==null&&Rh(Zi,n),Ji!==null&&Rh(Ji,n),es!==null&&Rh(es,n),cu.forEach(i),hu.forEach(i);for(var a=0;a<ts.length;a++){var l=ts[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<ts.length&&(a=ts[0],a.blockedOn===null);)V0(a),a.blockedOn===null&&ts.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],d=a[l+1],E=f[Tt]||null;if(typeof d=="function")E||U0(a);else if(E){var b=null;if(d&&d.hasAttribute("formAction")){if(f=d,E=d[Tt]||null)b=E.formAction;else if(am(f)!==null)continue}else b=E.action;typeof b=="function"?a[l+1]=b:(a.splice(l,3),l-=3),U0(a)}}}function lm(n){this._internalRoot=n}Ih.prototype.render=lm.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=Dn();N0(a,l,n,i,null,null)},Ih.prototype.unmount=lm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;N0(n.current,2,null,n,null,null),uh(),i[Ln]=null}};function Ih(n){this._internalRoot=n}Ih.prototype.unstable_scheduleHydration=function(n){if(n){var i=Di();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ts.length&&i!==0&&i<ts[a].priority;a++);ts.splice(a,0,n),a===0&&V0(n)}};var j0=e.version;if(j0!=="19.1.0")throw Error(s(527,j0,"19.1.0"));le.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=m(i),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var PA={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ch=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ch.isDisabled&&Ch.supportsFiber)try{dt=Ch.inject(PA),Ye=Ch}catch{}}return mu.createRoot=function(n,i){if(!o(n))throw Error(s(299));var a=!1,l="",f=tv,d=nv,E=rv,b=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(b=i.unstable_transitionCallbacks)),i=C0(n,1,!1,null,null,a,l,f,d,E,b,null),n[Ln]=i.current,Fp(n),new lm(i)},mu.hydrateRoot=function(n,i,a){if(!o(n))throw Error(s(299));var l=!1,f="",d=tv,E=nv,b=rv,I=null,q=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(q=a.formState)),i=C0(n,1,!0,i,a??null,l,f,d,E,b,I,q),i.context=D0(null),a=i.current,l=Dn(),l=Ci(l),f=Ui(l),f.callback=null,ji(a,f,l),a=l,i.current.lanes=a,Br(i,a),Dr(i),n[Ln]=i.current,Fp(n),new Ih(i)},mu.version="19.1.0",mu}var K0;function GA(){if(K0)return hm.exports;K0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hm.exports=$A(),hm.exports}var QA=GA();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var X0="popstate";function YA(r={}){function e(s,o){let{pathname:u,search:h,hash:p}=s.location;return km("",{pathname:u,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Nu(o)}return XA(e,t,null,r)}function ut(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function hr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KA(){return Math.random().toString(36).substring(2,10)}function W0(r,e){return{usr:r.state,key:r.key,idx:e}}function km(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Yo(e):e,state:t,key:e&&e.key||s||KA()}}function Nu({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Yo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function XA(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,p="POP",m=null,g=_();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function _(){return(h.state||{idx:null}).idx}function w(){p="POP";let B=_(),ee=B==null?null:B-g;g=B,m&&m({action:p,location:G.location,delta:ee})}function S(B,ee){p="PUSH";let W=km(G.location,B,ee);g=_()+1;let ie=W0(W,g),ce=G.createHref(W);try{h.pushState(ie,"",ce)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;o.location.assign(ce)}u&&m&&m({action:p,location:G.location,delta:1})}function N(B,ee){p="REPLACE";let W=km(G.location,B,ee);g=_();let ie=W0(W,g),ce=G.createHref(W);h.replaceState(ie,"",ce),u&&m&&m({action:p,location:G.location,delta:0})}function U(B){return WA(B)}let G={get action(){return p},get location(){return r(o,h)},listen(B){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(X0,w),m=B,()=>{o.removeEventListener(X0,w),m=null}},createHref(B){return e(o,B)},createURL:U,encodeLocation(B){let ee=U(B);return{pathname:ee.pathname,search:ee.search,hash:ee.hash}},push:S,replace:N,go(B){return h.go(B)}};return G}function WA(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),ut(t,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Nu(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function ZT(r,e,t="/"){return ZA(r,e,t,!1)}function ZA(r,e,t,s){let o=typeof e=="string"?Yo(e):e,u=wi(o.pathname||"/",t);if(u==null)return null;let h=JT(r);JA(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let g=cR(u);p=lR(h[m],g,s)}return p}function JT(r,e=[],t=[],s=""){let o=(u,h,p)=>{let m={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(ut(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=_i([s,m.relativePath]),_=t.concat(m);u.children&&u.children.length>0&&(ut(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),JT(u.children,e,_,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:aR(g,u.index),routesMeta:_})};return r.forEach((u,h)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))o(u,h);else for(let m of e1(u.path))o(u,h,m)}),e}function e1(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=e1(s.join("/")),p=[];return p.push(...h.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...h),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function JA(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:oR(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var eR=/^:[\w-]+$/,tR=3,nR=2,rR=1,iR=10,sR=-2,Z0=r=>r==="*";function aR(r,e){let t=r.split("/"),s=t.length;return t.some(Z0)&&(s+=sR),e&&(s+=nR),t.filter(o=>!Z0(o)).reduce((o,u)=>o+(eR.test(u)?tR:u===""?rR:iR),s)}function oR(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function lR(r,e,t=!1){let{routesMeta:s}=r,o={},u="/",h=[];for(let p=0;p<s.length;++p){let m=s[p],g=p===s.length-1,_=u==="/"?e:e.slice(u.length)||"/",w=rf({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},_),S=m.route;if(!w&&g&&t&&!s[s.length-1].route.index&&(w=rf({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!w)return null;Object.assign(o,w.params),h.push({params:o,pathname:_i([u,w.pathname]),pathnameBase:pR(_i([u,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(u=_i([u,w.pathnameBase]))}return h}function rf(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=uR(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((g,{paramName:_,isOptional:w},S)=>{if(_==="*"){let U=p[S]||"";h=u.slice(0,u.length-U.length).replace(/(.)\/+$/,"$1")}const N=p[S];return w&&!N?g[_]=void 0:g[_]=(N||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:r}}function uR(r,e=!1,t=!0){hr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function cR(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hr(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function wi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function hR(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Yo(r):r;return{pathname:t?t.startsWith("/")?t:fR(t,e):e,search:mR(s),hash:gR(o)}}function fR(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function mm(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dR(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function vg(r){let e=dR(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Eg(r,e,t,s=!1){let o;typeof r=="string"?o=Yo(r):(o={...r},ut(!o.pathname||!o.pathname.includes("?"),mm("?","pathname","search",o)),ut(!o.pathname||!o.pathname.includes("#"),mm("#","pathname","hash",o)),ut(!o.search||!o.search.includes("#"),mm("#","search","hash",o)));let u=r===""||o.pathname==="",h=u?"/":o.pathname,p;if(h==null)p=t;else{let w=e.length-1;if(!s&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),w-=1;o.pathname=S.join("/")}p=w>=0?e[w]:"/"}let m=hR(o,p),g=h&&h!=="/"&&h.endsWith("/"),_=(u||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||_)&&(m.pathname+="/"),m}var _i=r=>r.join("/").replace(/\/\/+/g,"/"),pR=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),mR=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,gR=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function yR(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var t1=["POST","PUT","PATCH","DELETE"];new Set(t1);var _R=["GET",...t1];new Set(_R);var Ko=F.createContext(null);Ko.displayName="DataRouter";var If=F.createContext(null);If.displayName="DataRouterState";F.createContext(!1);var n1=F.createContext({isTransitioning:!1});n1.displayName="ViewTransition";var vR=F.createContext(new Map);vR.displayName="Fetchers";var ER=F.createContext(null);ER.displayName="Await";var pr=F.createContext(null);pr.displayName="Navigation";var $u=F.createContext(null);$u.displayName="Location";var zr=F.createContext({outlet:null,matches:[],isDataRoute:!1});zr.displayName="Route";var Tg=F.createContext(null);Tg.displayName="RouteError";function TR(r,{relative:e}={}){ut(Xo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=F.useContext(pr),{hash:o,pathname:u,search:h}=Qu(r,{relative:e}),p=u;return t!=="/"&&(p=u==="/"?t:_i([t,u])),s.createHref({pathname:p,search:h,hash:o})}function Xo(){return F.useContext($u)!=null}function Ss(){return ut(Xo(),"useLocation() may be used only in the context of a <Router> component."),F.useContext($u).location}var r1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function i1(r){F.useContext(pr).static||F.useLayoutEffect(r)}function Gu(){let{isDataRoute:r}=F.useContext(zr);return r?kR():wR()}function wR(){ut(Xo(),"useNavigate() may be used only in the context of a <Router> component.");let r=F.useContext(Ko),{basename:e,navigator:t}=F.useContext(pr),{matches:s}=F.useContext(zr),{pathname:o}=Ss(),u=JSON.stringify(vg(s)),h=F.useRef(!1);return i1(()=>{h.current=!0}),F.useCallback((m,g={})=>{if(hr(h.current,r1),!h.current)return;if(typeof m=="number"){t.go(m);return}let _=Eg(m,JSON.parse(u),o,g.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:_i([e,_.pathname])),(g.replace?t.replace:t.push)(_,g.state,g)},[e,t,u,o,r])}F.createContext(null);function Qu(r,{relative:e}={}){let{matches:t}=F.useContext(zr),{pathname:s}=Ss(),o=JSON.stringify(vg(t));return F.useMemo(()=>Eg(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function bR(r,e){return s1(r,e)}function s1(r,e,t,s){var ee;ut(Xo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=F.useContext(pr),{matches:u}=F.useContext(zr),h=u[u.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",_=h&&h.route;{let W=_&&_.path||"";a1(m,!_||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let w=Ss(),S;if(e){let W=typeof e=="string"?Yo(e):e;ut(g==="/"||((ee=W.pathname)==null?void 0:ee.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${W.pathname}" was given in the \`location\` prop.`),S=W}else S=w;let N=S.pathname||"/",U=N;if(g!=="/"){let W=g.replace(/^\//,"").split("/");U="/"+N.replace(/^\//,"").split("/").slice(W.length).join("/")}let G=ZT(r,{pathname:U});hr(_||G!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),hr(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=IR(G&&G.map(W=>Object.assign({},W,{params:Object.assign({},p,W.params),pathname:_i([g,o.encodeLocation?o.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?g:_i([g,o.encodeLocation?o.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),u,t,s);return e&&B?F.createElement($u.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},B):B}function SR(){let r=MR(),e=yR(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:u},"ErrorBoundary")," or"," ",F.createElement("code",{style:u},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),t?F.createElement("pre",{style:o},t):null,h)}var AR=F.createElement(SR,null),RR=class extends F.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?F.createElement(zr.Provider,{value:this.props.routeContext},F.createElement(Tg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xR({routeContext:r,match:e,children:t}){let s=F.useContext(Ko);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(zr.Provider,{value:r},t)}function IR(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,u=t==null?void 0:t.errors;if(u!=null){let m=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);ut(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let h=!1,p=-1;if(t)for(let m=0;m<o.length;m++){let g=o[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:_,errors:w}=t,S=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!w||w[g.route.id]===void 0);if(g.route.lazy||S){h=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,g,_)=>{let w,S=!1,N=null,U=null;t&&(w=u&&g.route.id?u[g.route.id]:void 0,N=g.route.errorElement||AR,h&&(p<0&&_===0?(a1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,U=null):p===_&&(S=!0,U=g.route.hydrateFallbackElement||null)));let G=e.concat(o.slice(0,_+1)),B=()=>{let ee;return w?ee=N:S?ee=U:g.route.Component?ee=F.createElement(g.route.Component,null):g.route.element?ee=g.route.element:ee=m,F.createElement(xR,{match:g,routeContext:{outlet:m,matches:G,isDataRoute:t!=null},children:ee})};return t&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?F.createElement(RR,{location:t.location,revalidation:t.revalidation,component:N,error:w,children:B(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):B()},null)}function wg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function CR(r){let e=F.useContext(Ko);return ut(e,wg(r)),e}function DR(r){let e=F.useContext(If);return ut(e,wg(r)),e}function NR(r){let e=F.useContext(zr);return ut(e,wg(r)),e}function bg(r){let e=NR(r),t=e.matches[e.matches.length-1];return ut(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function OR(){return bg("useRouteId")}function MR(){var s;let r=F.useContext(Tg),e=DR("useRouteError"),t=bg("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function kR(){let{router:r}=CR("useNavigate"),e=bg("useNavigate"),t=F.useRef(!1);return i1(()=>{t.current=!0}),F.useCallback(async(o,u={})=>{hr(t.current,r1),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var J0={};function a1(r,e,t){!e&&!J0[r]&&(J0[r]=!0,hr(!1,t))}F.memo(PR);function PR({routes:r,future:e,state:t}){return s1(r,void 0,t,e)}function VR({to:r,replace:e,state:t,relative:s}){ut(Xo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=F.useContext(pr);hr(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=F.useContext(zr),{pathname:h}=Ss(),p=Gu(),m=Eg(r,vg(u),h,s==="path"),g=JSON.stringify(m);return F.useEffect(()=>{p(JSON.parse(g),{replace:e,state:t,relative:s})},[p,g,s,e,t]),null}function jh(r){ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function LR({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){ut(!Xo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=F.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=Yo(t));let{pathname:m="/",search:g="",hash:_="",state:w=null,key:S="default"}=t,N=F.useMemo(()=>{let U=wi(m,h);return U==null?null:{location:{pathname:U,search:g,hash:_,state:w,key:S},navigationType:s}},[h,m,g,_,w,S,s]);return hr(N!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:F.createElement(pr.Provider,{value:p},F.createElement($u.Provider,{children:e,value:N}))}function UR({children:r,location:e}){return bR(Pm(r),e)}function Pm(r,e=[]){let t=[];return F.Children.forEach(r,(s,o)=>{if(!F.isValidElement(s))return;let u=[...e,o];if(s.type===F.Fragment){t.push.apply(t,Pm(s.props.children,u));return}ut(s.type===jh,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ut(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Pm(s.props.children,u)),t.push(h)}),t}var zh="get",qh="application/x-www-form-urlencoded";function Cf(r){return r!=null&&typeof r.tagName=="string"}function jR(r){return Cf(r)&&r.tagName.toLowerCase()==="button"}function zR(r){return Cf(r)&&r.tagName.toLowerCase()==="form"}function qR(r){return Cf(r)&&r.tagName.toLowerCase()==="input"}function BR(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function HR(r,e){return r.button===0&&(!e||e==="_self")&&!BR(r)}var Dh=null;function FR(){if(Dh===null)try{new FormData(document.createElement("form"),0),Dh=!1}catch{Dh=!0}return Dh}var $R=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gm(r){return r!=null&&!$R.has(r)?(hr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qh}"`),null):r}function GR(r,e){let t,s,o,u,h;if(zR(r)){let p=r.getAttribute("action");s=p?wi(p,e):null,t=r.getAttribute("method")||zh,o=gm(r.getAttribute("enctype"))||qh,u=new FormData(r)}else if(jR(r)||qR(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?wi(m,e):null,t=r.getAttribute("formmethod")||p.getAttribute("method")||zh,o=gm(r.getAttribute("formenctype"))||gm(p.getAttribute("enctype"))||qh,u=new FormData(p,r),!FR()){let{name:g,type:_,value:w}=r;if(_==="image"){let S=g?`${g}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else g&&u.append(g,w)}}else{if(Cf(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=zh,s=null,o=qh,h=r}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sg(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function QR(r,e,t){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&wi(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function YR(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function KR(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function XR(r,e,t){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await YR(u,t);return h.links?h.links():[]}return[]}));return ex(s.flat(1).filter(KR).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function eE(r,e,t,s,o,u){let h=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,p=(m,g)=>{var _;return t[g].pathname!==m.pathname||((_=t[g].route.path)==null?void 0:_.endsWith("*"))&&t[g].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,g)=>h(m,g)||p(m,g)):u==="data"?e.filter((m,g)=>{var w;let _=s.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(h(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let S=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((w=t[0])==null?void 0:w.params)||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function WR(r,e,{includeHydrateFallback:t}={}){return ZR(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function ZR(r){return[...new Set(r)]}function JR(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function ex(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(JR(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}function o1(){let r=F.useContext(Ko);return Sg(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function tx(){let r=F.useContext(If);return Sg(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ag=F.createContext(void 0);Ag.displayName="FrameworkContext";function l1(){let r=F.useContext(Ag);return Sg(r,"You must render this element inside a <HydratedRouter> element"),r}function nx(r,e){let t=F.useContext(Ag),[s,o]=F.useState(!1),[u,h]=F.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:_,onTouchStart:w}=e,S=F.useRef(null);F.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let G=ee=>{ee.forEach(W=>{h(W.isIntersecting)})},B=new IntersectionObserver(G,{threshold:.5});return S.current&&B.observe(S.current),()=>{B.disconnect()}}},[r]),F.useEffect(()=>{if(s){let G=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(G)}}},[s]);let N=()=>{o(!0)},U=()=>{o(!1),h(!1)};return t?r!=="intent"?[u,S,{}]:[u,S,{onFocus:gu(p,N),onBlur:gu(m,U),onMouseEnter:gu(g,N),onMouseLeave:gu(_,U),onTouchStart:gu(w,N)}]:[!1,S,{}]}function gu(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function rx({page:r,...e}){let{router:t}=o1(),s=F.useMemo(()=>ZT(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?F.createElement(sx,{page:r,matches:s,...e}):null}function ix(r){let{manifest:e,routeModules:t}=l1(),[s,o]=F.useState([]);return F.useEffect(()=>{let u=!1;return XR(r,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[r,e,t]),s}function sx({page:r,matches:e,...t}){let s=Ss(),{manifest:o,routeModules:u}=l1(),{basename:h}=o1(),{loaderData:p,matches:m}=tx(),g=F.useMemo(()=>eE(r,e,m,o,s,"data"),[r,e,m,o,s]),_=F.useMemo(()=>eE(r,e,m,o,s,"assets"),[r,e,m,o,s]),w=F.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let U=new Set,G=!1;if(e.forEach(ee=>{var ie;let W=o.routes[ee.route.id];!W||!W.hasLoader||(!g.some(ce=>ce.route.id===ee.route.id)&&ee.route.id in p&&((ie=u[ee.route.id])!=null&&ie.shouldRevalidate)||W.hasClientLoader?G=!0:U.add(ee.route.id))}),U.size===0)return[];let B=QR(r,h,"data");return G&&U.size>0&&B.searchParams.set("_routes",e.filter(ee=>U.has(ee.route.id)).map(ee=>ee.route.id).join(",")),[B.pathname+B.search]},[h,p,s,o,g,e,r,u]),S=F.useMemo(()=>WR(_,o),[_,o]),N=ix(_);return F.createElement(F.Fragment,null,w.map(U=>F.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...t})),S.map(U=>F.createElement("link",{key:U,rel:"modulepreload",href:U,...t})),N.map(({key:U,link:G})=>F.createElement("link",{key:U,...G})))}function ax(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var u1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{u1&&(window.__reactRouterVersion="7.7.0")}catch{}function ox({basename:r,children:e,window:t}){let s=F.useRef();s.current==null&&(s.current=YA({window:t,v5Compat:!0}));let o=s.current,[u,h]=F.useState({action:o.action,location:o.location}),p=F.useCallback(m=>{F.startTransition(()=>h(m))},[h]);return F.useLayoutEffect(()=>o.listen(p),[o,p]),F.createElement(LR,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var c1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h1=F.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:p,target:m,to:g,preventScrollReset:_,viewTransition:w,...S},N){let{basename:U}=F.useContext(pr),G=typeof g=="string"&&c1.test(g),B,ee=!1;if(typeof g=="string"&&G&&(B=g,u1))try{let x=new URL(window.location.href),k=g.startsWith("//")?new URL(x.protocol+g):new URL(g),P=wi(k.pathname,U);k.origin===x.origin&&P!=null?g=P+k.search+k.hash:ee=!0}catch{hr(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let W=TR(g,{relative:o}),[ie,ce,ue]=nx(s,S),de=hx(g,{replace:h,state:p,target:m,preventScrollReset:_,relative:o,viewTransition:w});function C(x){e&&e(x),x.defaultPrevented||de(x)}let R=F.createElement("a",{...S,...ue,href:B||W,onClick:ee||u?e:C,ref:ax(N,ce),target:m,"data-discover":!G&&t==="render"?"true":void 0});return ie&&!G?F.createElement(F.Fragment,null,R,F.createElement(rx,{page:W})):R});h1.displayName="Link";var lx=F.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:p,children:m,...g},_){let w=Qu(h,{relative:g.relative}),S=Ss(),N=F.useContext(If),{navigator:U,basename:G}=F.useContext(pr),B=N!=null&&gx(w)&&p===!0,ee=U.encodeLocation?U.encodeLocation(w).pathname:w.pathname,W=S.pathname,ie=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(W=W.toLowerCase(),ie=ie?ie.toLowerCase():null,ee=ee.toLowerCase()),ie&&G&&(ie=wi(ie,G)||ie);const ce=ee!=="/"&&ee.endsWith("/")?ee.length-1:ee.length;let ue=W===ee||!o&&W.startsWith(ee)&&W.charAt(ce)==="/",de=ie!=null&&(ie===ee||!o&&ie.startsWith(ee)&&ie.charAt(ee.length)==="/"),C={isActive:ue,isPending:de,isTransitioning:B},R=ue?e:void 0,x;typeof s=="function"?x=s(C):x=[s,ue?"active":null,de?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let k=typeof u=="function"?u(C):u;return F.createElement(h1,{...g,"aria-current":R,className:x,ref:_,style:k,to:h,viewTransition:p},typeof m=="function"?m(C):m)});lx.displayName="NavLink";var ux=F.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=zh,action:p,onSubmit:m,relative:g,preventScrollReset:_,viewTransition:w,...S},N)=>{let U=px(),G=mx(p,{relative:g}),B=h.toLowerCase()==="get"?"get":"post",ee=typeof p=="string"&&c1.test(p),W=ie=>{if(m&&m(ie),ie.defaultPrevented)return;ie.preventDefault();let ce=ie.nativeEvent.submitter,ue=(ce==null?void 0:ce.getAttribute("formmethod"))||h;U(ce||ie.currentTarget,{fetcherKey:e,method:ue,navigate:t,replace:o,state:u,relative:g,preventScrollReset:_,viewTransition:w})};return F.createElement("form",{ref:N,method:B,action:G,onSubmit:s?m:W,...S,"data-discover":!ee&&r==="render"?"true":void 0})});ux.displayName="Form";function cx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function f1(r){let e=F.useContext(Ko);return ut(e,cx(r)),e}function hx(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let p=Gu(),m=Ss(),g=Qu(r,{relative:u});return F.useCallback(_=>{if(HR(_,e)){_.preventDefault();let w=t!==void 0?t:Nu(m)===Nu(g);p(r,{replace:w,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[m,p,g,t,s,e,r,o,u,h])}var fx=0,dx=()=>`__${String(++fx)}__`;function px(){let{router:r}=f1("useSubmit"),{basename:e}=F.useContext(pr),t=OR();return F.useCallback(async(s,o={})=>{let{action:u,method:h,encType:p,formData:m,body:g}=GR(s,e);if(o.navigate===!1){let _=o.fetcherKey||dx();await r.fetch(_,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function mx(r,{relative:e}={}){let{basename:t}=F.useContext(pr),s=F.useContext(zr);ut(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Qu(r||".",{relative:e})},h=Ss();if(r==null){u.search=h.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(_=>_==="")){p.delete("index"),m.filter(w=>w).forEach(w=>p.append("index",w));let _=p.toString();u.search=_?`?${_}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:_i([t,u.pathname])),Nu(u)}function gx(r,e={}){let t=F.useContext(n1);ut(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=f1("useViewTransitionState"),o=Qu(r,{relative:e.relative});if(!t.isTransitioning)return!1;let u=wi(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=wi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return rf(o.pathname,h)!=null||rf(o.pathname,u)!=null}var Gt=function(){return Gt=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},Gt.apply(this,arguments)};function Ou(r,e,t){if(t||arguments.length===2)for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return r.concat(u||Array.prototype.slice.call(e))}var st="-ms-",Su="-moz-",Ge="-webkit-",d1="comm",Df="rule",Rg="decl",yx="@import",p1="@keyframes",_x="@layer",m1=Math.abs,xg=String.fromCharCode,Vm=Object.assign;function vx(r,e){return $t(r,0)^45?(((e<<2^$t(r,0))<<2^$t(r,1))<<2^$t(r,2))<<2^$t(r,3):0}function g1(r){return r.trim()}function mi(r,e){return(r=e.exec(r))?r[0]:r}function De(r,e,t){return r.replace(e,t)}function Bh(r,e,t){return r.indexOf(e,t)}function $t(r,e){return r.charCodeAt(e)|0}function Vo(r,e,t){return r.slice(e,t)}function Or(r){return r.length}function y1(r){return r.length}function yu(r,e){return e.push(r),r}function Ex(r,e){return r.map(e).join("")}function tE(r,e){return r.filter(function(t){return!mi(t,e)})}var Nf=1,Lo=1,_1=0,Jn=0,Rt=0,Wo="";function Of(r,e,t,s,o,u,h,p){return{value:r,root:e,parent:t,type:s,props:o,children:u,line:Nf,column:Lo,length:h,return:"",siblings:p}}function ss(r,e){return Vm(Of("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function Ao(r){for(;r.root;)r=ss(r.root,{children:[r]});yu(r,r.siblings)}function Tx(){return Rt}function wx(){return Rt=Jn>0?$t(Wo,--Jn):0,Lo--,Rt===10&&(Lo=1,Nf--),Rt}function lr(){return Rt=Jn<_1?$t(Wo,Jn++):0,Lo++,Rt===10&&(Lo=1,Nf++),Rt}function pa(){return $t(Wo,Jn)}function Hh(){return Jn}function Mf(r,e){return Vo(Wo,r,e)}function Lm(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bx(r){return Nf=Lo=1,_1=Or(Wo=r),Jn=0,[]}function Sx(r){return Wo="",r}function ym(r){return g1(Mf(Jn-1,Um(r===91?r+2:r===40?r+1:r)))}function Ax(r){for(;(Rt=pa())&&Rt<33;)lr();return Lm(r)>2||Lm(Rt)>3?"":" "}function Rx(r,e){for(;--e&&lr()&&!(Rt<48||Rt>102||Rt>57&&Rt<65||Rt>70&&Rt<97););return Mf(r,Hh()+(e<6&&pa()==32&&lr()==32))}function Um(r){for(;lr();)switch(Rt){case r:return Jn;case 34:case 39:r!==34&&r!==39&&Um(Rt);break;case 40:r===41&&Um(r);break;case 92:lr();break}return Jn}function xx(r,e){for(;lr()&&r+Rt!==57;)if(r+Rt===84&&pa()===47)break;return"/*"+Mf(e,Jn-1)+"*"+xg(r===47?r:lr())}function Ix(r){for(;!Lm(pa());)lr();return Mf(r,Jn)}function Cx(r){return Sx(Fh("",null,null,null,[""],r=bx(r),0,[0],r))}function Fh(r,e,t,s,o,u,h,p,m){for(var g=0,_=0,w=h,S=0,N=0,U=0,G=1,B=1,ee=1,W=0,ie="",ce=o,ue=u,de=s,C=ie;B;)switch(U=W,W=lr()){case 40:if(U!=108&&$t(C,w-1)==58){Bh(C+=De(ym(W),"&","&\f"),"&\f",m1(g?p[g-1]:0))!=-1&&(ee=-1);break}case 34:case 39:case 91:C+=ym(W);break;case 9:case 10:case 13:case 32:C+=Ax(U);break;case 92:C+=Rx(Hh()-1,7);continue;case 47:switch(pa()){case 42:case 47:yu(Dx(xx(lr(),Hh()),e,t,m),m);break;default:C+="/"}break;case 123*G:p[g++]=Or(C)*ee;case 125*G:case 59:case 0:switch(W){case 0:case 125:B=0;case 59+_:ee==-1&&(C=De(C,/\f/g,"")),N>0&&Or(C)-w&&yu(N>32?rE(C+";",s,t,w-1,m):rE(De(C," ","")+";",s,t,w-2,m),m);break;case 59:C+=";";default:if(yu(de=nE(C,e,t,g,_,o,p,ie,ce=[],ue=[],w,u),u),W===123)if(_===0)Fh(C,e,de,de,ce,u,w,p,ue);else switch(S===99&&$t(C,3)===110?100:S){case 100:case 108:case 109:case 115:Fh(r,de,de,s&&yu(nE(r,de,de,0,0,o,p,ie,o,ce=[],w,ue),ue),o,ue,w,p,s?ce:ue);break;default:Fh(C,de,de,de,[""],ue,0,p,ue)}}g=_=N=0,G=ee=1,ie=C="",w=h;break;case 58:w=1+Or(C),N=U;default:if(G<1){if(W==123)--G;else if(W==125&&G++==0&&wx()==125)continue}switch(C+=xg(W),W*G){case 38:ee=_>0?1:(C+="\f",-1);break;case 44:p[g++]=(Or(C)-1)*ee,ee=1;break;case 64:pa()===45&&(C+=ym(lr())),S=pa(),_=w=Or(ie=C+=Ix(Hh())),W++;break;case 45:U===45&&Or(C)==2&&(G=0)}}return u}function nE(r,e,t,s,o,u,h,p,m,g,_,w){for(var S=o-1,N=o===0?u:[""],U=y1(N),G=0,B=0,ee=0;G<s;++G)for(var W=0,ie=Vo(r,S+1,S=m1(B=h[G])),ce=r;W<U;++W)(ce=g1(B>0?N[W]+" "+ie:De(ie,/&\f/g,N[W])))&&(m[ee++]=ce);return Of(r,e,t,o===0?Df:p,m,g,_,w)}function Dx(r,e,t,s){return Of(r,e,t,d1,xg(Tx()),Vo(r,2,-2),0,s)}function rE(r,e,t,s,o){return Of(r,e,t,Rg,Vo(r,0,s),Vo(r,s+1,-1),s,o)}function v1(r,e,t){switch(vx(r,e)){case 5103:return Ge+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ge+r+r;case 4789:return Su+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Ge+r+Su+r+st+r+r;case 5936:switch($t(r,e+11)){case 114:return Ge+r+st+De(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Ge+r+st+De(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Ge+r+st+De(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Ge+r+st+r+r;case 6165:return Ge+r+st+"flex-"+r+r;case 5187:return Ge+r+De(r,/(\w+).+(:[^]+)/,Ge+"box-$1$2"+st+"flex-$1$2")+r;case 5443:return Ge+r+st+"flex-item-"+De(r,/flex-|-self/g,"")+(mi(r,/flex-|baseline/)?"":st+"grid-row-"+De(r,/flex-|-self/g,""))+r;case 4675:return Ge+r+st+"flex-line-pack"+De(r,/align-content|flex-|-self/g,"")+r;case 5548:return Ge+r+st+De(r,"shrink","negative")+r;case 5292:return Ge+r+st+De(r,"basis","preferred-size")+r;case 6060:return Ge+"box-"+De(r,"-grow","")+Ge+r+st+De(r,"grow","positive")+r;case 4554:return Ge+De(r,/([^-])(transform)/g,"$1"+Ge+"$2")+r;case 6187:return De(De(De(r,/(zoom-|grab)/,Ge+"$1"),/(image-set)/,Ge+"$1"),r,"")+r;case 5495:case 3959:return De(r,/(image-set\([^]*)/,Ge+"$1$`$1");case 4968:return De(De(r,/(.+:)(flex-)?(.*)/,Ge+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ge+r+r;case 4200:if(!mi(r,/flex-|baseline/))return st+"grid-column-align"+Vo(r,e)+r;break;case 2592:case 3360:return st+De(r,"template-","")+r;case 4384:case 3616:return t&&t.some(function(s,o){return e=o,mi(s.props,/grid-\w+-end/)})?~Bh(r+(t=t[e].value),"span",0)?r:st+De(r,"-start","")+r+st+"grid-row-span:"+(~Bh(t,"span",0)?mi(t,/\d+/):+mi(t,/\d+/)-+mi(r,/\d+/))+";":st+De(r,"-start","")+r;case 4896:case 4128:return t&&t.some(function(s){return mi(s.props,/grid-\w+-start/)})?r:st+De(De(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return De(r,/(.+)-inline(.+)/,Ge+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Or(r)-1-e>6)switch($t(r,e+1)){case 109:if($t(r,e+4)!==45)break;case 102:return De(r,/(.+:)(.+)-([^]+)/,"$1"+Ge+"$2-$3$1"+Su+($t(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Bh(r,"stretch",0)?v1(De(r,"stretch","fill-available"),e,t)+r:r}break;case 5152:case 5920:return De(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,u,h,p,m,g){return st+o+":"+u+g+(h?st+o+"-span:"+(p?m:+m-+u)+g:"")+r});case 4949:if($t(r,e+6)===121)return De(r,":",":"+Ge)+r;break;case 6444:switch($t(r,$t(r,14)===45?18:11)){case 120:return De(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ge+($t(r,14)===45?"inline-":"")+"box$3$1"+Ge+"$2$3$1"+st+"$2box$3")+r;case 100:return De(r,":",":"+st)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return De(r,"scroll-","scroll-snap-")+r}return r}function sf(r,e){for(var t="",s=0;s<r.length;s++)t+=e(r[s],s,r,e)||"";return t}function Nx(r,e,t,s){switch(r.type){case _x:if(r.children.length)break;case yx:case Rg:return r.return=r.return||r.value;case d1:return"";case p1:return r.return=r.value+"{"+sf(r.children,s)+"}";case Df:if(!Or(r.value=r.props.join(",")))return""}return Or(t=sf(r.children,s))?r.return=r.value+"{"+t+"}":""}function Ox(r){var e=y1(r);return function(t,s,o,u){for(var h="",p=0;p<e;p++)h+=r[p](t,s,o,u)||"";return h}}function Mx(r){return function(e){e.root||(e=e.return)&&r(e)}}function kx(r,e,t,s){if(r.length>-1&&!r.return)switch(r.type){case Rg:r.return=v1(r.value,r.length,t);return;case p1:return sf([ss(r,{value:De(r.value,"@","@"+Ge)})],s);case Df:if(r.length)return Ex(t=r.props,function(o){switch(mi(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ao(ss(r,{props:[De(o,/:(read-\w+)/,":"+Su+"$1")]})),Ao(ss(r,{props:[o]})),Vm(r,{props:tE(t,s)});break;case"::placeholder":Ao(ss(r,{props:[De(o,/:(plac\w+)/,":"+Ge+"input-$1")]})),Ao(ss(r,{props:[De(o,/:(plac\w+)/,":"+Su+"$1")]})),Ao(ss(r,{props:[De(o,/:(plac\w+)/,st+"input-$1")]})),Ao(ss(r,{props:[o]})),Vm(r,{props:tE(t,s)});break}return""})}}var Px={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},On={},Uo=typeof process<"u"&&On!==void 0&&(On.REACT_APP_SC_ATTR||On.SC_ATTR)||"data-styled",E1="active",T1="data-styled-version",kf="6.1.19",Ig=`/*!sc*/
`,af=typeof window<"u"&&typeof document<"u",Vx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==""?On.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&On.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.SC_DISABLE_SPEEDY!==void 0&&On.SC_DISABLE_SPEEDY!==""&&On.SC_DISABLE_SPEEDY!=="false"&&On.SC_DISABLE_SPEEDY),Lx={},Pf=Object.freeze([]),jo=Object.freeze({});function w1(r,e,t){return t===void 0&&(t=jo),r.theme!==t.theme&&r.theme||e||t.theme}var b1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ux=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jx=/(^-|-$)/g;function iE(r){return r.replace(Ux,"-").replace(jx,"")}var zx=/(a)(d)/gi,Nh=52,sE=function(r){return String.fromCharCode(r+(r>25?39:97))};function jm(r){var e,t="";for(e=Math.abs(r);e>Nh;e=e/Nh|0)t=sE(e%Nh)+t;return(sE(e%Nh)+t).replace(zx,"$1-$2")}var _m,S1=5381,Do=function(r,e){for(var t=e.length;t;)r=33*r^e.charCodeAt(--t);return r},A1=function(r){return Do(S1,r)};function R1(r){return jm(A1(r)>>>0)}function qx(r){return r.displayName||r.name||"Component"}function vm(r){return typeof r=="string"&&!0}var x1=typeof Symbol=="function"&&Symbol.for,I1=x1?Symbol.for("react.memo"):60115,Bx=x1?Symbol.for("react.forward_ref"):60112,Hx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},C1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$x=((_m={})[Bx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_m[I1]=C1,_m);function aE(r){return("type"in(e=r)&&e.type.$$typeof)===I1?C1:"$$typeof"in r?$x[r.$$typeof]:Hx;var e}var Gx=Object.defineProperty,Qx=Object.getOwnPropertyNames,oE=Object.getOwnPropertySymbols,Yx=Object.getOwnPropertyDescriptor,Kx=Object.getPrototypeOf,lE=Object.prototype;function D1(r,e,t){if(typeof e!="string"){if(lE){var s=Kx(e);s&&s!==lE&&D1(r,s,t)}var o=Qx(e);oE&&(o=o.concat(oE(e)));for(var u=aE(r),h=aE(e),p=0;p<o.length;++p){var m=o[p];if(!(m in Fx||t&&t[m]||h&&m in h||u&&m in u)){var g=Yx(e,m);try{Gx(r,m,g)}catch{}}}}return r}function _a(r){return typeof r=="function"}function Cg(r){return typeof r=="object"&&"styledComponentId"in r}function fa(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function zm(r,e){if(r.length===0)return"";for(var t=r[0],s=1;s<r.length;s++)t+=r[s];return t}function Mu(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function qm(r,e,t){if(t===void 0&&(t=!1),!t&&!Mu(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)r[s]=qm(r[s],e[s]);else if(Mu(e))for(var s in e)r[s]=qm(r[s],e[s]);return r}function Dg(r,e){Object.defineProperty(r,"toString",{value:e})}function va(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Xx=function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},r.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,u=o;e>=u;)if((u<<=1)<0)throw va(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var h=o;h<u;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(e+1),m=(h=0,t.length);h<m;h++)this.tag.insertRule(p,t[h])&&(this.groupSizes[e]++,p++)},r.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),o=s+t;this.groupSizes[e]=0;for(var u=s;u<o;u++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),u=o+s,h=o;h<u;h++)t+="".concat(this.tag.getRule(h)).concat(Ig);return t},r}(),$h=new Map,of=new Map,Gh=1,Oh=function(r){if($h.has(r))return $h.get(r);for(;of.has(Gh);)Gh++;var e=Gh++;return $h.set(r,e),of.set(e,r),e},Wx=function(r,e){Gh=e+1,$h.set(r,e),of.set(e,r)},Zx="style[".concat(Uo,"][").concat(T1,'="').concat(kf,'"]'),Jx=new RegExp("^".concat(Uo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eI=function(r,e,t){for(var s,o=t.split(","),u=0,h=o.length;u<h;u++)(s=o[u])&&r.registerName(e,s)},tI=function(r,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(Ig),o=[],u=0,h=s.length;u<h;u++){var p=s[u].trim();if(p){var m=p.match(Jx);if(m){var g=0|parseInt(m[1],10),_=m[2];g!==0&&(Wx(_,g),eI(r,_,m[3]),r.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},uE=function(r){for(var e=document.querySelectorAll(Zx),t=0,s=e.length;t<s;t++){var o=e[t];o&&o.getAttribute(Uo)!==E1&&(tI(r,o),o.parentNode&&o.parentNode.removeChild(o))}};function nI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var N1=function(r){var e=document.head,t=r||e,s=document.createElement("style"),o=function(p){var m=Array.from(p.querySelectorAll("style[".concat(Uo,"]")));return m[m.length-1]}(t),u=o!==void 0?o.nextSibling:null;s.setAttribute(Uo,E1),s.setAttribute(T1,kf);var h=nI();return h&&s.setAttribute("nonce",h),t.insertBefore(s,u),s},rI=function(){function r(e){this.element=N1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,o=0,u=s.length;o<u;o++){var h=s[o];if(h.ownerNode===t)return h}throw va(17)}(this.element),this.length=0}return r.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},r}(),iI=function(){function r(e){this.element=N1(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r}(),sI=function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r}(),cE=af,aI={isServer:!af,useCSSOMInjection:!Vx},lf=function(){function r(e,t,s){e===void 0&&(e=jo),t===void 0&&(t={});var o=this;this.options=Gt(Gt({},aI),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&af&&cE&&(cE=!1,uE(this)),Dg(this,function(){return function(u){for(var h=u.getTag(),p=h.length,m="",g=function(w){var S=function(ee){return of.get(ee)}(w);if(S===void 0)return"continue";var N=u.names.get(S),U=h.getGroup(w);if(N===void 0||!N.size||U.length===0)return"continue";var G="".concat(Uo,".g").concat(w,'[id="').concat(S,'"]'),B="";N!==void 0&&N.forEach(function(ee){ee.length>0&&(B+="".concat(ee,","))}),m+="".concat(U).concat(G,'{content:"').concat(B,'"}').concat(Ig)},_=0;_<p;_++)g(_);return m}(o)})}return r.registerId=function(e){return Oh(e)},r.prototype.rehydrate=function(){!this.server&&af&&uE(this)},r.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new r(Gt(Gt({},this.options),e),this.gs,t&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,o=t.target;return t.isServer?new sI(o):s?new rI(o):new iI(o)}(this.options),new Xx(e)));var e},r.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},r.prototype.registerName=function(e,t){if(Oh(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},r.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(Oh(e),s)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(Oh(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r}(),oI=/&/g,lI=/^\s*\/\/.*$/gm;function O1(r,e){return r.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=O1(t.children,e)),t})}function uI(r){var e,t,s,o=jo,u=o.options,h=u===void 0?jo:u,p=o.plugins,m=p===void 0?Pf:p,g=function(S,N,U){return U.startsWith(t)&&U.endsWith(t)&&U.replaceAll(t,"").length>0?".".concat(e):S},_=m.slice();_.push(function(S){S.type===Df&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(oI,t).replace(s,g))}),h.prefix&&_.push(kx),_.push(Nx);var w=function(S,N,U,G){N===void 0&&(N=""),U===void 0&&(U=""),G===void 0&&(G="&"),e=G,t=N,s=new RegExp("\\".concat(t,"\\b"),"g");var B=S.replace(lI,""),ee=Cx(U||N?"".concat(U," ").concat(N," { ").concat(B," }"):B);h.namespace&&(ee=O1(ee,h.namespace));var W=[];return sf(ee,Ox(_.concat(Mx(function(ie){return W.push(ie)})))),W};return w.hash=m.length?m.reduce(function(S,N){return N.name||va(15),Do(S,N.name)},S1).toString():"",w}var cI=new lf,Bm=uI(),M1=ar.createContext({shouldForwardProp:void 0,styleSheet:cI,stylis:Bm});M1.Consumer;ar.createContext(void 0);function Hm(){return F.useContext(M1)}var hI=function(){function r(e,t){var s=this;this.inject=function(o,u){u===void 0&&(u=Bm);var h=s.name+u.hash;o.hasNameForId(s.id,h)||o.insertRules(s.id,h,u(s.rules,h,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Dg(this,function(){throw va(12,String(s.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=Bm),this.name+e.hash},r}(),fI=function(r){return r>="A"&&r<="Z"};function hE(r){for(var e="",t=0;t<r.length;t++){var s=r[t];if(t===1&&s==="-"&&r[0]==="-")return r;fI(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var k1=function(r){return r==null||r===!1||r===""},P1=function(r){var e,t,s=[];for(var o in r){var u=r[o];r.hasOwnProperty(o)&&!k1(u)&&(Array.isArray(u)&&u.isCss||_a(u)?s.push("".concat(hE(o),":"),u,";"):Mu(u)?s.push.apply(s,Ou(Ou(["".concat(o," {")],P1(u),!1),["}"],!1)):s.push("".concat(hE(o),": ").concat((e=o,(t=u)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Px||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function hs(r,e,t,s){if(k1(r))return[];if(Cg(r))return[".".concat(r.styledComponentId)];if(_a(r)){if(!_a(u=r)||u.prototype&&u.prototype.isReactComponent||!e)return[r];var o=r(e);return hs(o,e,t,s)}var u;return r instanceof hI?t?(r.inject(t,s),[r.getName(s)]):[r]:Mu(r)?P1(r):Array.isArray(r)?Array.prototype.concat.apply(Pf,r.map(function(h){return hs(h,e,t,s)})):[r.toString()]}function V1(r){for(var e=0;e<r.length;e+=1){var t=r[e];if(_a(t)&&!Cg(t))return!1}return!0}var dI=A1(kf),pI=function(){function r(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&V1(e),this.componentId=t,this.baseHash=Do(dI,t),this.baseStyle=s,lf.registerId(t)}return r.prototype.generateAndInjectStyles=function(e,t,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=fa(o,this.staticRulesId);else{var u=zm(hs(this.rules,e,t,s)),h=jm(Do(this.baseHash,u)>>>0);if(!t.hasNameForId(this.componentId,h)){var p=s(u,".".concat(h),void 0,this.componentId);t.insertRules(this.componentId,h,p)}o=fa(o,h),this.staticRulesId=h}else{for(var m=Do(this.baseHash,s.hash),g="",_=0;_<this.rules.length;_++){var w=this.rules[_];if(typeof w=="string")g+=w;else if(w){var S=zm(hs(w,e,t,s));m=Do(m,S+_),g+=S}}if(g){var N=jm(m>>>0);t.hasNameForId(this.componentId,N)||t.insertRules(this.componentId,N,s(g,".".concat(N),void 0,this.componentId)),o=fa(o,N)}}return o},r}(),ku=ar.createContext(void 0);ku.Consumer;function mI(r){var e=ar.useContext(ku),t=F.useMemo(function(){return function(s,o){if(!s)throw va(14);if(_a(s)){var u=s(o);return u}if(Array.isArray(s)||typeof s!="object")throw va(8);return o?Gt(Gt({},o),s):s}(r.theme,e)},[r.theme,e]);return r.children?ar.createElement(ku.Provider,{value:t},r.children):null}var Em={};function gI(r,e,t){var s=Cg(r),o=r,u=!vm(r),h=e.attrs,p=h===void 0?Pf:h,m=e.componentId,g=m===void 0?function(ce,ue){var de=typeof ce!="string"?"sc":iE(ce);Em[de]=(Em[de]||0)+1;var C="".concat(de,"-").concat(R1(kf+de+Em[de]));return ue?"".concat(ue,"-").concat(C):C}(e.displayName,e.parentComponentId):m,_=e.displayName,w=_===void 0?function(ce){return vm(ce)?"styled.".concat(ce):"Styled(".concat(qx(ce),")")}(r):_,S=e.displayName&&e.componentId?"".concat(iE(e.displayName),"-").concat(e.componentId):e.componentId||g,N=s&&o.attrs?o.attrs.concat(p).filter(Boolean):p,U=e.shouldForwardProp;if(s&&o.shouldForwardProp){var G=o.shouldForwardProp;if(e.shouldForwardProp){var B=e.shouldForwardProp;U=function(ce,ue){return G(ce,ue)&&B(ce,ue)}}else U=G}var ee=new pI(t,S,s?o.componentStyle:void 0);function W(ce,ue){return function(de,C,R){var x=de.attrs,k=de.componentStyle,P=de.defaultProps,L=de.foldedComponentIds,D=de.styledComponentId,Dt=de.target,at=ar.useContext(ku),K=Hm(),le=de.shouldForwardProp||K.shouldForwardProp,me=w1(C,at,P)||jo,Ie=function(xe,ve,ct){for(var Be,Ut=Gt(Gt({},ve),{className:void 0,theme:ct}),Pn=0;Pn<xe.length;Pn+=1){var yn=_a(Be=xe[Pn])?Be(Ut):Be;for(var rn in yn)Ut[rn]=rn==="className"?fa(Ut[rn],yn[rn]):rn==="style"?Gt(Gt({},Ut[rn]),yn[rn]):yn[rn]}return ve.className&&(Ut.className=fa(Ut.className,ve.className)),Ut}(x,C,me),O=Ie.as||Dt,re={};for(var ae in Ie)Ie[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&Ie.theme===me||(ae==="forwardedAs"?re.as=Ie.forwardedAs:le&&!le(ae,O)||(re[ae]=Ie[ae]));var se=function(xe,ve){var ct=Hm(),Be=xe.generateAndInjectStyles(ve,ct.styleSheet,ct.stylis);return Be}(k,Ie),ge=fa(L,D);return se&&(ge+=" "+se),Ie.className&&(ge+=" "+Ie.className),re[vm(O)&&!b1.has(O)?"class":"className"]=ge,R&&(re.ref=R),F.createElement(O,re)}(ie,ce,ue)}W.displayName=w;var ie=ar.forwardRef(W);return ie.attrs=N,ie.componentStyle=ee,ie.displayName=w,ie.shouldForwardProp=U,ie.foldedComponentIds=s?fa(o.foldedComponentIds,o.styledComponentId):"",ie.styledComponentId=S,ie.target=s?o.target:r,Object.defineProperty(ie,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ce){this._foldedDefaultProps=s?function(ue){for(var de=[],C=1;C<arguments.length;C++)de[C-1]=arguments[C];for(var R=0,x=de;R<x.length;R++)qm(ue,x[R],!0);return ue}({},o.defaultProps,ce):ce}}),Dg(ie,function(){return".".concat(ie.styledComponentId)}),u&&D1(ie,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ie}function fE(r,e){for(var t=[r[0]],s=0,o=e.length;s<o;s+=1)t.push(e[s],r[s+1]);return t}var dE=function(r){return Object.assign(r,{isCss:!0})};function L1(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(_a(r)||Mu(r))return dE(hs(fE(Pf,Ou([r],e,!0))));var s=r;return e.length===0&&s.length===1&&typeof s[0]=="string"?hs(s):dE(hs(fE(s,e)))}function Fm(r,e,t){if(t===void 0&&(t=jo),!e)throw va(1,e);var s=function(o){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return r(e,t,L1.apply(void 0,Ou([o],u,!1)))};return s.attrs=function(o){return Fm(r,e,Gt(Gt({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return Fm(r,e,Gt(Gt({},t),o))},s}var U1=function(r){return Fm(gI,r)},Q=U1;b1.forEach(function(r){Q[r]=U1(r)});var yI=function(){function r(e,t){this.rules=e,this.componentId=t,this.isStatic=V1(e),lf.registerId(this.componentId+1)}return r.prototype.createStyles=function(e,t,s,o){var u=o(zm(hs(this.rules,t,s,o)),""),h=this.componentId+e;s.insertRules(h,h,u)},r.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},r.prototype.renderStyles=function(e,t,s,o){e>2&&lf.registerId(this.componentId+e),this.removeStyles(e,s),this.createStyles(e,t,s,o)},r}();function _I(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var s=L1.apply(void 0,Ou([r],e,!1)),o="sc-global-".concat(R1(JSON.stringify(s))),u=new yI(s,o),h=function(m){var g=Hm(),_=ar.useContext(ku),w=ar.useRef(g.styleSheet.allocateGSInstance(o)).current;return g.styleSheet.server&&p(w,m,g.styleSheet,_,g.stylis),ar.useLayoutEffect(function(){if(!g.styleSheet.server)return p(w,m,g.styleSheet,_,g.stylis),function(){return u.removeStyles(w,g.styleSheet)}},[w,m,g.styleSheet,_,g.stylis]),null};function p(m,g,_,w,S){if(u.isStatic)u.renderStyles(m,Lx,_,S);else{var N=Gt(Gt({},g),{theme:w1(g,w,h.defaultProps)});u.renderStyles(m,N,_,S)}}return ar.memo(h)}/**
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
 */const vI=()=>{};var pE={};/**
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
 */const j1=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},EI=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],p=r[t++],m=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},z1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,p=h?r[o+1]:0,m=o+2<r.length,g=m?r[o+2]:0,_=u>>2,w=(u&3)<<4|p>>4;let S=(p&15)<<2|g>>6,N=g&63;m||(N=64,h||(S=64)),s.push(t[_],t[w],t[S],t[N])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(j1(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):EI(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const g=o<r.length?t[r.charAt(o)]:64;++o;const w=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||p==null||g==null||w==null)throw new TI;const S=u<<2|p>>4;if(s.push(S),g!==64){const N=p<<4&240|g>>2;if(s.push(N),w!==64){const U=g<<6&192|w;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class TI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wI=function(r){const e=j1(r);return z1.encodeByteArray(e,!0)},uf=function(r){return wI(r).replace(/\./g,"")},q1=function(r){try{return z1.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SI=()=>bI().__FIREBASE_DEFAULTS__,AI=()=>{if(typeof process>"u"||typeof pE>"u")return;const r=pE.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},RI=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&q1(r[1]);return e&&JSON.parse(e)},Vf=()=>{try{return vI()||SI()||AI()||RI()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},B1=r=>{var e,t;return(t=(e=Vf())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},xI=r=>{const e=B1(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},H1=()=>{var r;return(r=Vf())==null?void 0:r.config},F1=r=>{var e;return(e=Vf())==null?void 0:e[`_${r}`]};/**
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
 */class II{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Zo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $1(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function CI(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[uf(JSON.stringify(t)),uf(JSON.stringify(h)),""].join(".")}const Au={};function DI(){const r={prod:[],emulator:[]};for(const e of Object.keys(Au))Au[e]?r.emulator.push(e):r.prod.push(e);return r}function NI(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let mE=!1;function G1(r,e){if(typeof window>"u"||typeof document>"u"||!Zo(window.location.host)||Au[r]===e||Au[r]||mE)return;Au[r]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",u=DI().prod.length>0;function h(){const S=document.getElementById(s);S&&S.remove()}function p(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function m(S,N){S.setAttribute("width","24"),S.setAttribute("id",N),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{mE=!0,h()},S}function _(S,N){S.setAttribute("id",N),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function w(){const S=NI(s),N=t("text"),U=document.getElementById(N)||document.createElement("span"),G=t("learnmore"),B=document.getElementById(G)||document.createElement("a"),ee=t("preprendIcon"),W=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ie=S.element;p(ie),_(B,G);const ce=g();m(W,ee),ie.append(W,U,B,ce),document.body.appendChild(ie)}u?(U.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function MI(){var e;const r=(e=Vf())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function PI(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function VI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LI(){const r=fn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function UI(){return!MI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jI(){try{return typeof indexedDB=="object"}catch{return!1}}function zI(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const qI="FirebaseError";class xi extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=qI,Object.setPrototypeOf(this,xi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yu.prototype.create)}}class Yu{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?BI(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new xi(o,p,s)}}function BI(r,e){return r.replace(HI,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const HI=/\{\$([^}]+)}/g;function FI(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ea(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(gE(u)&&gE(h)){if(!Ea(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function gE(r){return r!==null&&typeof r=="object"}/**
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
 */function Ku(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _u(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function vu(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function $I(r,e){const t=new GI(r,e);return t.subscribe.bind(t)}class GI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");QI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Tm),o.error===void 0&&(o.error=Tm),o.complete===void 0&&(o.complete=Tm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QI(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Tm(){}/**
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
 */function Ct(r){return r&&r._delegate?r._delegate:r}class Ta{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ha="[DEFAULT]";/**
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
 */class YI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new II;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XI(e))try{this.getOrInitializeService({instanceIdentifier:ha})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ha){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ha){return this.instances.has(e)}getOptions(e=ha){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:KI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ha){return this.component?this.component.multipleInstances?e:ha:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KI(r){return r===ha?void 0:r}function XI(r){return r.instantiationMode==="EAGER"}/**
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
 */class WI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new YI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const ZI={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},JI=Pe.INFO,eC={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},tC=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=eC[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ng{constructor(e){this.name=e,this._logLevel=JI,this._logHandler=tC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const nC=(r,e)=>e.some(t=>r instanceof t);let yE,_E;function rC(){return yE||(yE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iC(){return _E||(_E=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q1=new WeakMap,$m=new WeakMap,Y1=new WeakMap,wm=new WeakMap,Og=new WeakMap;function sC(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(fs(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Q1.set(t,r)}).catch(()=>{}),Og.set(e,r),e}function aC(r){if($m.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});$m.set(r,e)}let Gm={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return $m.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Y1.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fs(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function oC(r){Gm=r(Gm)}function lC(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(bm(this),e,...t);return Y1.set(s,e.sort?e.sort():[e]),fs(s)}:iC().includes(r)?function(...e){return r.apply(bm(this),e),fs(Q1.get(this))}:function(...e){return fs(r.apply(bm(this),e))}}function uC(r){return typeof r=="function"?lC(r):(r instanceof IDBTransaction&&aC(r),nC(r,rC())?new Proxy(r,Gm):r)}function fs(r){if(r instanceof IDBRequest)return sC(r);if(wm.has(r))return wm.get(r);const e=uC(r);return e!==r&&(wm.set(r,e),Og.set(e,r)),e}const bm=r=>Og.get(r);function cC(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),p=fs(h);return s&&h.addEventListener("upgradeneeded",m=>{s(fs(h.result),m.oldVersion,m.newVersion,fs(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const hC=["get","getKey","getAll","getAllKeys","count"],fC=["put","add","delete","clear"],Sm=new Map;function vE(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Sm.get(e))return Sm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=fC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||hC.includes(t)))return;const u=async function(h,...p){const m=this.transaction(h,o?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(p.shift())),(await Promise.all([g[t](...p),o&&m.done]))[0]};return Sm.set(e,u),u}oC(r=>({...r,get:(e,t,s)=>vE(e,t)||r.get(e,t,s),has:(e,t)=>!!vE(e,t)||r.has(e,t)}));/**
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
 */class dC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function pC(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qm="@firebase/app",EE="0.14.0";/**
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
 */const bi=new Ng("@firebase/app"),mC="@firebase/app-compat",gC="@firebase/analytics-compat",yC="@firebase/analytics",_C="@firebase/app-check-compat",vC="@firebase/app-check",EC="@firebase/auth",TC="@firebase/auth-compat",wC="@firebase/database",bC="@firebase/data-connect",SC="@firebase/database-compat",AC="@firebase/functions",RC="@firebase/functions-compat",xC="@firebase/installations",IC="@firebase/installations-compat",CC="@firebase/messaging",DC="@firebase/messaging-compat",NC="@firebase/performance",OC="@firebase/performance-compat",MC="@firebase/remote-config",kC="@firebase/remote-config-compat",PC="@firebase/storage",VC="@firebase/storage-compat",LC="@firebase/firestore",UC="@firebase/ai",jC="@firebase/firestore-compat",zC="firebase",qC="12.0.0";/**
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
 */const Ym="[DEFAULT]",BC={[Qm]:"fire-core",[mC]:"fire-core-compat",[yC]:"fire-analytics",[gC]:"fire-analytics-compat",[vC]:"fire-app-check",[_C]:"fire-app-check-compat",[EC]:"fire-auth",[TC]:"fire-auth-compat",[wC]:"fire-rtdb",[bC]:"fire-data-connect",[SC]:"fire-rtdb-compat",[AC]:"fire-fn",[RC]:"fire-fn-compat",[xC]:"fire-iid",[IC]:"fire-iid-compat",[CC]:"fire-fcm",[DC]:"fire-fcm-compat",[NC]:"fire-perf",[OC]:"fire-perf-compat",[MC]:"fire-rc",[kC]:"fire-rc-compat",[PC]:"fire-gcs",[VC]:"fire-gcs-compat",[LC]:"fire-fst",[jC]:"fire-fst-compat",[UC]:"fire-vertex","fire-js":"fire-js",[zC]:"fire-js-all"};/**
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
 */const cf=new Map,HC=new Map,Km=new Map;function TE(r,e){try{r.container.addComponent(e)}catch(t){bi.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function zo(r){const e=r.name;if(Km.has(e))return bi.debug(`There were multiple attempts to register component ${e}.`),!1;Km.set(e,r);for(const t of cf.values())TE(t,r);for(const t of HC.values())TE(t,r);return!0}function Mg(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Wn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const FC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ds=new Yu("app","Firebase",FC);/**
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
 */class $C{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ta("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ds.create("app-deleted",{appName:this._name})}}/**
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
 */const Jo=qC;function K1(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Ym,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ds.create("bad-app-name",{appName:String(o)});if(t||(t=H1()),!t)throw ds.create("no-options");const u=cf.get(o);if(u){if(Ea(t,u.options)&&Ea(s,u.config))return u;throw ds.create("duplicate-app",{appName:o})}const h=new WI(o);for(const m of Km.values())h.addComponent(m);const p=new $C(t,s,h);return cf.set(o,p),p}function X1(r=Ym){const e=cf.get(r);if(!e&&r===Ym&&H1())return K1();if(!e)throw ds.create("no-app",{appName:r});return e}function ps(r,e,t){let s=BC[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bi.warn(h.join(" "));return}zo(new Ta(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const GC="firebase-heartbeat-database",QC=1,Pu="firebase-heartbeat-store";let Am=null;function W1(){return Am||(Am=cC(GC,QC,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Pu)}catch(t){console.warn(t)}}}}).catch(r=>{throw ds.create("idb-open",{originalErrorMessage:r.message})})),Am}async function YC(r){try{const t=(await W1()).transaction(Pu),s=await t.objectStore(Pu).get(Z1(r));return await t.done,s}catch(e){if(e instanceof xi)bi.warn(e.message);else{const t=ds.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bi.warn(t.message)}}}async function wE(r,e){try{const s=(await W1()).transaction(Pu,"readwrite");await s.objectStore(Pu).put(e,Z1(r)),await s.done}catch(t){if(t instanceof xi)bi.warn(t.message);else{const s=ds.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});bi.warn(s.message)}}}function Z1(r){return`${r.name}!${r.options.appId}`}/**
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
 */const KC=1024,XC=30;class WC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new JC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=bE();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>XC){const h=eD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){bi.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bE(),{heartbeatsToSend:s,unsentEntries:o}=ZC(this._heartbeatsCache.heartbeats),u=uf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return bi.warn(t),""}}}function bE(){return new Date().toISOString().substring(0,10)}function ZC(r,e=KC){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),SE(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),SE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class JC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jI()?zI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await YC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function SE(r){return uf(JSON.stringify({version:2,heartbeats:r})).length}function eD(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function tD(r){zo(new Ta("platform-logger",e=>new dC(e),"PRIVATE")),zo(new Ta("heartbeat",e=>new WC(e),"PRIVATE")),ps(Qm,EE,r),ps(Qm,EE,"esm2020"),ps("fire-js","")}tD("");function J1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nD=J1,ew=new Yu("auth","Firebase",J1());/**
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
 */const hf=new Ng("@firebase/auth");function rD(r,...e){hf.logLevel<=Pe.WARN&&hf.warn(`Auth (${Jo}): ${r}`,...e)}function Qh(r,...e){hf.logLevel<=Pe.ERROR&&hf.error(`Auth (${Jo}): ${r}`,...e)}/**
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
 */function fr(r,...e){throw kg(r,...e)}function Mr(r,...e){return kg(r,...e)}function tw(r,e,t){const s={...nD(),[e]:t};return new Yu("auth","Firebase",s).create(e,{appName:r.name})}function vi(r){return tw(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kg(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return ew.create(r,...e)}function we(r,e,...t){if(!r)throw kg(e,...t)}function gi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Qh(e),new Error(e)}function Si(r,e){r||gi(e)}/**
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
 */function Xm(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function iD(){return AE()==="http:"||AE()==="https:"}function AE(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function sD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iD()||PI()||"connection"in navigator)?navigator.onLine:!0}function aD(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Xu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Si(t>e,"Short delay should be less than long delay!"),this.isMobile=OI()||VI()}get(){return sD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pg(r,e){Si(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class nw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uD=new Xu(3e4,6e4);function As(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Ii(r,e,t,s,o={}){return rw(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=Ku({key:r.config.apiKey,...h}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:m,...u};return kI()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&Zo(r.emulatorConfig.host)&&(g.credentials="include"),nw.fetch()(await iw(r,r.config.apiHost,t,p),g)})}async function rw(r,e,t){r._canInitEmulator=!1;const s={...oD,...e};try{const o=new hD(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Mh(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mh(r,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Mh(r,"email-already-in-use",h);if(m==="USER_DISABLED")throw Mh(r,"user-disabled",h);const _=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw tw(r,_,g);fr(r,_)}}catch(o){if(o instanceof xi)throw o;fr(r,"network-request-failed",{message:String(o)})}}async function Wu(r,e,t,s,o={}){const u=await Ii(r,e,t,s,o);return"mfaPendingCredential"in u&&fr(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function iw(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?Pg(r.config,o):`${r.config.apiScheme}://${o}`;return lD.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function cD(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Mr(this.auth,"network-request-failed")),uD.get())})}}function Mh(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Mr(r,e,s);return o.customData._tokenResponse=t,o}function RE(r){return r!==void 0&&r.enterprise!==void 0}class fD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return cD(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function dD(r,e){return Ii(r,"GET","/v2/recaptchaConfig",As(r,e))}/**
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
 */async function pD(r,e){return Ii(r,"POST","/v1/accounts:delete",e)}async function ff(r,e){return Ii(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ru(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mD(r,e=!1){const t=Ct(r),s=await t.getIdToken(e),o=Vg(s);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ru(Rm(o.auth_time)),issuedAtTime:Ru(Rm(o.iat)),expirationTime:Ru(Rm(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Rm(r){return Number(r)*1e3}function Vg(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Qh("JWT malformed, contained fewer than 3 sections"),null;try{const o=q1(t);return o?JSON.parse(o):(Qh("Failed to decode base64 JWT payload"),null)}catch(o){return Qh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function xE(r){const e=Vg(r);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qo(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof xi&&gD(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function gD({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class yD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ru(this.lastLoginAt),this.creationTime=Ru(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function df(r){var w;const e=r.auth,t=await r.getIdToken(),s=await qo(r,ff(e,{idToken:t}));we(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(w=o.providerUserInfo)!=null&&w.length?sw(o.providerUserInfo):[],h=vD(r.providerData,u),p=r.isAnonymous,m=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),g=p?m:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Wm(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(r,_)}async function _D(r){const e=Ct(r);await df(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vD(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function sw(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function ED(r,e){const t=await rw(r,{},async()=>{const s=Ku({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await iw(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:s};return r.emulatorConfig&&Zo(r.emulatorConfig.host)&&(m.credentials="include"),nw.fetch()(h,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function TD(r,e){return Ii(r,"POST","/v2/accounts:revokeToken",As(r,e))}/**
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
 */class Oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=xE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await ED(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Oo;return s&&(we(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(we(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(we(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oo,this.toJSON())}_performRefresh(){return gi("not implemented")}}/**
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
 */function rs(r,e){we(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class or{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new yD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Wm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await qo(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mD(this,e)}reload(){return _D(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new or({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await df(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(vi(this.auth));const e=await this.getIdToken();return await qo(this,pD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,p=t.tenantId??void 0,m=t._redirectEventId??void 0,g=t.createdAt??void 0,_=t.lastLoginAt??void 0,{uid:w,emailVerified:S,isAnonymous:N,providerData:U,stsTokenManager:G}=t;we(w&&G,e,"internal-error");const B=Oo.fromJSON(this.name,G);we(typeof w=="string",e,"internal-error"),rs(s,e.name),rs(o,e.name),we(typeof S=="boolean",e,"internal-error"),we(typeof N=="boolean",e,"internal-error"),rs(u,e.name),rs(h,e.name),rs(p,e.name),rs(m,e.name),rs(g,e.name),rs(_,e.name);const ee=new or({uid:w,auth:e,email:o,emailVerified:S,displayName:s,isAnonymous:N,photoURL:h,phoneNumber:u,tenantId:p,stsTokenManager:B,createdAt:g,lastLoginAt:_});return U&&Array.isArray(U)&&(ee.providerData=U.map(W=>({...W}))),m&&(ee._redirectEventId=m),ee}static async _fromIdTokenResponse(e,t,s=!1){const o=new Oo;o.updateFromServerResponse(t);const u=new or({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await df(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];we(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?sw(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new Oo;p.updateFromIdToken(s);const m=new or({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Wm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
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
 */const IE=new Map;function yi(r){Si(r instanceof Function,"Expected a class definition");let e=IE.get(r);return e?(Si(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,IE.set(r,e),e)}/**
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
 */class aw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}aw.type="NONE";const CE=aw;/**
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
 */function Yh(r,e,t){return`firebase:${r}:${e}:${t}`}class Mo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Yh(this.userKey,o.apiKey,u),this.fullPersistenceKey=Yh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ff(this.auth,{idToken:e}).catch(()=>{});return t?or._fromGetAccountInfoResponse(this.auth,t,e):null}return or._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Mo(yi(CE),e,s);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||yi(CE);const h=Yh(s,e.config.apiKey,e.name);let p=null;for(const g of t)try{const _=await g._get(h);if(_){let w;if(typeof _=="string"){const S=await ff(e,{idToken:_}).catch(()=>{});if(!S)break;w=await or._fromGetAccountInfoResponse(e,S,_)}else w=or._fromJSON(e,_);g!==u&&(p=w),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new Mo(u,e,s):(u=m[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new Mo(u,e,s))}}/**
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
 */function DE(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ow(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fw(e))return"Blackberry";if(dw(e))return"Webos";if(lw(e))return"Safari";if((e.includes("chrome/")||uw(e))&&!e.includes("edge/"))return"Chrome";if(hw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ow(r=fn()){return/firefox\//i.test(r)}function lw(r=fn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uw(r=fn()){return/crios\//i.test(r)}function cw(r=fn()){return/iemobile/i.test(r)}function hw(r=fn()){return/android/i.test(r)}function fw(r=fn()){return/blackberry/i.test(r)}function dw(r=fn()){return/webos/i.test(r)}function Lg(r=fn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function wD(r=fn()){var e;return Lg(r)&&!!((e=window.navigator)!=null&&e.standalone)}function bD(){return LI()&&document.documentMode===10}function pw(r=fn()){return Lg(r)||hw(r)||dw(r)||fw(r)||/windows phone/i.test(r)||cw(r)}/**
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
 */function mw(r,e=[]){let t;switch(r){case"Browser":t=DE(fn());break;case"Worker":t=`${DE(fn())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Jo}/${s}`}/**
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
 */class SD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,p)=>{try{const m=e(u);h(m)}catch(m){p(m)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function AD(r,e={}){return Ii(r,"GET","/v2/passwordPolicy",As(r,e))}/**
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
 */const RD=6;class xD{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??RD,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class ID{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new NE(this),this.idTokenSubscription=new NE(this),this.beforeStateQueue=new SD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ew,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yi(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Mo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ff(this,{idToken:e}),s=await or._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Wn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,p=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===p)&&(m!=null&&m.user)&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await df(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wn(this.app))return Promise.reject(vi(this));const t=e?Ct(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wn(this.app)?Promise.reject(vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AD(this),t=new xD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Yu("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await TD(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yi(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Mo.create(this,[yi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&rD(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ca(r){return Ct(r)}class NE{constructor(e){this.auth=e,this.observer=null,this.addObserver=$I(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CD(r){Lf=r}function gw(r){return Lf.loadJS(r)}function DD(){return Lf.recaptchaEnterpriseScript}function ND(){return Lf.gapiScript}function OD(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class MD{constructor(){this.enterprise=new kD}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class kD{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const PD="recaptcha-enterprise",yw="NO_RECAPTCHA";class VD{constructor(e){this.type=PD,this.auth=Ca(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{dD(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new fD(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(m=>{p(m)})})}function o(u,h,p){const m=window.grecaptcha;RE(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(g=>{h(g)}).catch(()=>{h(yw)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new MD().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!t&&RE(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=DD();m.length!==0&&(m+=p),gw(m).then(()=>{o(p,u,h)}).catch(g=>{h(g)})}}).catch(p=>{h(p)})})}}async function OE(r,e,t,s=!1,o=!1){const u=new VD(r);let h;if(o)h=yw;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Zm(r,e,t,s,o){var u;if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await OE(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await OE(r,e,t,t==="getOobCode");return s(r,p)}else return Promise.reject(h)})}/**
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
 */function LD(r,e){const t=Mg(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Ea(u,e??{}))return o;fr(o,"already-initialized")}return t.initialize({options:e})}function UD(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(yi);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function jD(r,e,t){const s=Ca(r);we(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=_w(e),{host:h,port:p}=zD(e),m=p===null?"":`:${p}`,g={url:`${u}//${h}${m}/`},_=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){we(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),we(Ea(g,s.config.emulator)&&Ea(_,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=_,s.settings.appVerificationDisabledForTesting=!0,Zo(h)?($1(`${u}//${h}${m}`),G1("Auth",!0)):qD()}function _w(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function zD(r){const e=_w(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:ME(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:ME(h)}}}function ME(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function qD(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Ug{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gi("not implemented")}_getIdTokenResponse(e){return gi("not implemented")}_linkToIdToken(e,t){return gi("not implemented")}_getReauthenticationResolver(e){return gi("not implemented")}}async function BD(r,e){return Ii(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function HD(r,e){return Wu(r,"POST","/v1/accounts:signInWithPassword",As(r,e))}/**
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
 */async function FD(r,e){return Wu(r,"POST","/v1/accounts:signInWithEmailLink",As(r,e))}async function $D(r,e){return Wu(r,"POST","/v1/accounts:signInWithEmailLink",As(r,e))}/**
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
 */class Vu extends Ug{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Vu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Vu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zm(e,t,"signInWithPassword",HD);case"emailLink":return FD(e,{email:this._email,oobCode:this._password});default:fr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zm(e,s,"signUpPassword",BD);case"emailLink":return $D(e,{idToken:t,email:this._email,oobCode:this._password});default:fr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ko(r,e){return Wu(r,"POST","/v1/accounts:signInWithIdp",As(r,e))}/**
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
 */const GD="http://localhost";class wa extends Ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new wa(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ko(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ko(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ko(e,t)}buildRequest(){const e={requestUri:GD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ku(t)}return e}}/**
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
 */function QD(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YD(r){const e=_u(vu(r)).link,t=e?_u(vu(e)).deep_link_id:null,s=_u(vu(r)).deep_link_id;return(s?_u(vu(s)).link:null)||s||t||e||r}class jg{constructor(e){const t=_u(vu(e)),s=t.apiKey??null,o=t.oobCode??null,u=QD(t.mode??null);we(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=YD(e);try{return new jg(t)}catch{return null}}}/**
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
 */class el{constructor(){this.providerId=el.PROVIDER_ID}static credential(e,t){return Vu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=jg.parseLink(t);return we(s,"argument-error"),Vu._fromEmailAndCode(e,s.code,s.tenantId)}}el.PROVIDER_ID="password";el.EMAIL_PASSWORD_SIGN_IN_METHOD="password";el.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class vw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zu extends vw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class as extends Zu{constructor(){super("facebook.com")}static credential(e){return wa._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.FACEBOOK_SIGN_IN_METHOD="facebook.com";as.PROVIDER_ID="facebook.com";/**
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
 */class os extends Zu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wa._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return os.credential(t,s)}catch{return null}}}os.GOOGLE_SIGN_IN_METHOD="google.com";os.PROVIDER_ID="google.com";/**
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
 */class ls extends Zu{constructor(){super("github.com")}static credential(e){return wa._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ls.credential(e.oauthAccessToken)}catch{return null}}}ls.GITHUB_SIGN_IN_METHOD="github.com";ls.PROVIDER_ID="github.com";/**
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
 */class us extends Zu{constructor(){super("twitter.com")}static credential(e,t){return wa._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return us.credential(t,s)}catch{return null}}}us.TWITTER_SIGN_IN_METHOD="twitter.com";us.PROVIDER_ID="twitter.com";/**
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
 */async function KD(r,e){return Wu(r,"POST","/v1/accounts:signUp",As(r,e))}/**
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
 */class ba{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await or._fromIdTokenResponse(e,s,o),h=kE(s);return new ba({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=kE(s);return new ba({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function kE(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class pf extends xi{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,pf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new pf(e,t,s,o)}}function Ew(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?pf._fromErrorAndOperation(r,u,e,s):u})}async function XD(r,e,t=!1){const s=await qo(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ba._forOperation(r,"link",s)}/**
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
 */async function WD(r,e,t=!1){const{auth:s}=r;if(Wn(s.app))return Promise.reject(vi(s));const o="reauthenticate";try{const u=await qo(r,Ew(s,o,e,r),t);we(u.idToken,s,"internal-error");const h=Vg(u.idToken);we(h,s,"internal-error");const{sub:p}=h;return we(r.uid===p,s,"user-mismatch"),ba._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&fr(s,"user-mismatch"),u}}/**
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
 */async function Tw(r,e,t=!1){if(Wn(r.app))return Promise.reject(vi(r));const s="signIn",o=await Ew(r,s,e),u=await ba._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function ZD(r,e){return Tw(Ca(r),e)}/**
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
 */async function ww(r){const e=Ca(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JD(r,e,t){if(Wn(r.app))return Promise.reject(vi(r));const s=Ca(r),h=await Zm(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KD).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&ww(r),m}),p=await ba._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function e2(r,e,t){return Wn(r.app)?Promise.reject(vi(r)):ZD(Ct(r),el.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&ww(r),s})}/**
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
 */async function t2(r,e){return Ii(r,"POST","/v1/accounts:update",e)}/**
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
 */async function n2(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Ct(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await qo(s,t2(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const p=s.providerData.find(({providerId:m})=>m==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function r2(r,e,t,s){return Ct(r).onIdTokenChanged(e,t,s)}function i2(r,e,t){return Ct(r).beforeAuthStateChanged(e,t)}function Uf(r,e,t,s){return Ct(r).onAuthStateChanged(e,t,s)}function s2(r){return Ct(r).signOut()}const mf="__sak";/**
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
 */class bw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mf,"1"),this.storage.removeItem(mf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const a2=1e3,o2=10;class Sw extends bw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,m)=>{this.notifyListeners(h,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);bD()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,o2):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},a2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sw.type="LOCAL";const l2=Sw;/**
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
 */class Aw extends bw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Aw.type="SESSION";const Rw=Aw;/**
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
 */function u2(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class jf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new jf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async g=>g(t.origin,u)),m=await u2(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jf.receivers=[];/**
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
 */function zg(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class c2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,m)=>{const g=zg("",20);o.port1.start();const _=setTimeout(()=>{m(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(w){const S=w;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(_),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(S.data.response);break;default:clearTimeout(_),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function kr(){return window}function h2(r){kr().location.href=r}/**
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
 */function xw(){return typeof kr().WorkerGlobalScope<"u"&&typeof kr().importScripts=="function"}async function f2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function d2(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function p2(){return xw()?self:null}/**
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
 */const Iw="firebaseLocalStorageDb",m2=1,gf="firebaseLocalStorage",Cw="fbase_key";class Ju{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zf(r,e){return r.transaction([gf],e?"readwrite":"readonly").objectStore(gf)}function g2(){const r=indexedDB.deleteDatabase(Iw);return new Ju(r).toPromise()}function Jm(){const r=indexedDB.open(Iw,m2);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(gf,{keyPath:Cw})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(gf)?e(s):(s.close(),await g2(),e(await Jm()))})})}async function PE(r,e,t){const s=zf(r,!0).put({[Cw]:e,value:t});return new Ju(s).toPromise()}async function y2(r,e){const t=zf(r,!1).get(e),s=await new Ju(t).toPromise();return s===void 0?null:s.value}function VE(r,e){const t=zf(r,!0).delete(e);return new Ju(t).toPromise()}const _2=800,v2=3;class Dw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>v2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jf._getInstance(p2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await f2(),!this.activeServiceWorker)return;this.sender=new c2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||d2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jm();return await PE(e,mf,"1"),await VE(e,mf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>PE(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>y2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>VE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=zf(o,!1).getAll();return new Ju(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dw.type="LOCAL";const E2=Dw;new Xu(3e4,6e4);/**
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
 */function T2(r,e){return e?yi(e):(we(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class qg extends Ug{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ko(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ko(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function w2(r){return Tw(r.auth,new qg(r),r.bypassAuthState)}function b2(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),WD(t,new qg(r),r.bypassAuthState)}async function S2(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),XD(t,new qg(r),r.bypassAuthState)}/**
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
 */class Nw{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return w2;case"linkViaPopup":case"linkViaRedirect":return S2;case"reauthViaPopup":case"reauthViaRedirect":return b2;default:fr(this.auth,"internal-error")}}resolve(e){Si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const A2=new Xu(2e3,1e4);class No extends Nw{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,No.currentPopupAction&&No.currentPopupAction.cancel(),No.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Si(this.filter.length===1,"Popup operations only handle one event");const e=zg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,No.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,A2.get())};e()}}No.currentPopupAction=null;/**
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
 */const R2="pendingRedirect",Kh=new Map;class x2 extends Nw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Kh.get(this.auth._key());if(!e){try{const s=await I2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Kh.set(this.auth._key(),e)}return this.bypassAuthState||Kh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function I2(r,e){const t=N2(e),s=D2(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function C2(r,e){Kh.set(r._key(),e)}function D2(r){return yi(r._redirectPersistence)}function N2(r){return Yh(R2,r.config.apiKey,r.name)}async function O2(r,e,t=!1){if(Wn(r.app))return Promise.reject(vi(r));const s=Ca(r),o=T2(s,e),h=await new x2(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const M2=600*1e3;class k2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!P2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Ow(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Mr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=M2&&this.cachedEventUids.clear(),this.cachedEventUids.has(LE(e))}saveEventToCache(e){this.cachedEventUids.add(LE(e)),this.lastProcessedEventTime=Date.now()}}function LE(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Ow({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function P2(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ow(r);default:return!1}}/**
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
 */async function V2(r,e={}){return Ii(r,"GET","/v1/projects",e)}/**
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
 */const L2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U2=/^https?/;async function j2(r){if(r.config.emulator)return;const{authorizedDomains:e}=await V2(r);for(const t of e)try{if(z2(t))return}catch{}fr(r,"unauthorized-domain")}function z2(r){const e=Xm(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!U2.test(t))return!1;if(L2.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const q2=new Xu(3e4,6e4);function UE(){const r=kr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function B2(r){return new Promise((e,t)=>{var o,u,h;function s(){UE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{UE(),t(Mr(r,"network-request-failed"))},timeout:q2.get()})}if((u=(o=kr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=kr().gapi)!=null&&h.load)s();else{const p=OD("iframefcb");return kr()[p]=()=>{gapi.load?s():t(Mr(r,"network-request-failed"))},gw(`${ND()}?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw Xh=null,e})}let Xh=null;function H2(r){return Xh=Xh||B2(r),Xh}/**
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
 */const F2=new Xu(5e3,15e3),$2="__/auth/iframe",G2="emulator/auth/iframe",Q2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Y2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K2(r){const e=r.config;we(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Pg(e,G2):`https://${r.config.authDomain}/${$2}`,s={apiKey:e.apiKey,appName:r.name,v:Jo},o=Y2.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ku(s).slice(1)}`}async function X2(r){const e=await H2(r),t=kr().gapi;return we(t,r,"internal-error"),e.open({where:document.body,url:K2(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Q2,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Mr(r,"network-request-failed"),p=kr().setTimeout(()=>{u(h)},F2.get());function m(){kr().clearTimeout(p),o(s)}s.ping(m).then(m,()=>{u(h)})}))}/**
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
 */const W2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Z2=500,J2=600,eN="_blank",tN="http://localhost";class jE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nN(r,e,t,s=Z2,o=J2){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m={...W2,width:s.toString(),height:o.toString(),top:u,left:h},g=fn().toLowerCase();t&&(p=uw(g)?eN:t),ow(g)&&(e=e||tN,m.scrollbars="yes");const _=Object.entries(m).reduce((S,[N,U])=>`${S}${N}=${U},`,"");if(wD(g)&&p!=="_self")return rN(e||"",p),new jE(null);const w=window.open(e||"",p,_);we(w,r,"popup-blocked");try{w.focus()}catch{}return new jE(w)}function rN(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const iN="__/auth/handler",sN="emulator/auth/handler",aN=encodeURIComponent("fac");async function zE(r,e,t,s,o,u){we(r.config.authDomain,r,"auth-domain-config-required"),we(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Jo,eventId:o};if(e instanceof vw){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",FI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,w]of Object.entries({}))h[_]=w}if(e instanceof Zu){const _=e.getScopes().filter(w=>w!=="");_.length>0&&(h.scopes=_.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const _ of Object.keys(p))p[_]===void 0&&delete p[_];const m=await r._getAppCheckToken(),g=m?`#${aN}=${encodeURIComponent(m)}`:"";return`${oN(r)}?${Ku(p).slice(1)}${g}`}function oN({config:r}){return r.emulator?Pg(r,sN):`https://${r.authDomain}/${iN}`}/**
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
 */const xm="webStorageSupport";class lN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rw,this._completeRedirectFn=O2,this._overrideRedirectResult=C2}async _openPopup(e,t,s,o){var h;Si((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await zE(e,t,s,Xm(),o);return nN(e,u,zg())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await zE(e,t,s,Xm(),o);return h2(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Si(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await X2(e),s=new k2(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xm,{type:xm},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[xm];u!==void 0&&t(!!u),fr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=j2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pw()||lw()||Lg()}}const uN=lN;var qE="@firebase/auth",BE="1.11.0";/**
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
 */class cN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hN(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fN(r){zo(new Ta("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;we(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mw(r)},g=new ID(s,o,u,m);return UD(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),zo(new Ta("auth-internal",e=>{const t=Ca(e.getProvider("auth").getImmediate());return(s=>new cN(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ps(qE,BE,hN(r)),ps(qE,BE,"esm2020")}/**
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
 */const dN=300,pN=F1("authIdTokenMaxAge")||dN;let HE=null;const mN=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>pN)return;const o=t==null?void 0:t.token;HE!==o&&(HE=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function gN(r=X1()){const e=Mg(r,"auth");if(e.isInitialized())return e.getImmediate();const t=LD(r,{popupRedirectResolver:uN,persistence:[E2,l2,Rw]}),s=F1("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=mN(u.toString());i2(t,h,()=>h(t.currentUser)),r2(t,p=>h(p))}}const o=B1("auth");return o&&jD(t,`http://${o}`),t}function yN(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}CD({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Mr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",yN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fN("Browser");var _N="firebase",vN="12.0.0";/**
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
 */ps(_N,vN,"app");var FE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ms,Mw;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,R){function x(){}x.prototype=R.prototype,C.D=R.prototype,C.prototype=new x,C.prototype.constructor=C,C.C=function(k,P,L){for(var D=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)D[Dt-2]=arguments[Dt];return R.prototype[P].apply(k,D)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,R,x){x||(x=0);var k=Array(16);if(typeof R=="string")for(var P=0;16>P;++P)k[P]=R.charCodeAt(x++)|R.charCodeAt(x++)<<8|R.charCodeAt(x++)<<16|R.charCodeAt(x++)<<24;else for(P=0;16>P;++P)k[P]=R[x++]|R[x++]<<8|R[x++]<<16|R[x++]<<24;R=C.g[0],x=C.g[1],P=C.g[2];var L=C.g[3],D=R+(L^x&(P^L))+k[0]+3614090360&4294967295;R=x+(D<<7&4294967295|D>>>25),D=L+(P^R&(x^P))+k[1]+3905402710&4294967295,L=R+(D<<12&4294967295|D>>>20),D=P+(x^L&(R^x))+k[2]+606105819&4294967295,P=L+(D<<17&4294967295|D>>>15),D=x+(R^P&(L^R))+k[3]+3250441966&4294967295,x=P+(D<<22&4294967295|D>>>10),D=R+(L^x&(P^L))+k[4]+4118548399&4294967295,R=x+(D<<7&4294967295|D>>>25),D=L+(P^R&(x^P))+k[5]+1200080426&4294967295,L=R+(D<<12&4294967295|D>>>20),D=P+(x^L&(R^x))+k[6]+2821735955&4294967295,P=L+(D<<17&4294967295|D>>>15),D=x+(R^P&(L^R))+k[7]+4249261313&4294967295,x=P+(D<<22&4294967295|D>>>10),D=R+(L^x&(P^L))+k[8]+1770035416&4294967295,R=x+(D<<7&4294967295|D>>>25),D=L+(P^R&(x^P))+k[9]+2336552879&4294967295,L=R+(D<<12&4294967295|D>>>20),D=P+(x^L&(R^x))+k[10]+4294925233&4294967295,P=L+(D<<17&4294967295|D>>>15),D=x+(R^P&(L^R))+k[11]+2304563134&4294967295,x=P+(D<<22&4294967295|D>>>10),D=R+(L^x&(P^L))+k[12]+1804603682&4294967295,R=x+(D<<7&4294967295|D>>>25),D=L+(P^R&(x^P))+k[13]+4254626195&4294967295,L=R+(D<<12&4294967295|D>>>20),D=P+(x^L&(R^x))+k[14]+2792965006&4294967295,P=L+(D<<17&4294967295|D>>>15),D=x+(R^P&(L^R))+k[15]+1236535329&4294967295,x=P+(D<<22&4294967295|D>>>10),D=R+(P^L&(x^P))+k[1]+4129170786&4294967295,R=x+(D<<5&4294967295|D>>>27),D=L+(x^P&(R^x))+k[6]+3225465664&4294967295,L=R+(D<<9&4294967295|D>>>23),D=P+(R^x&(L^R))+k[11]+643717713&4294967295,P=L+(D<<14&4294967295|D>>>18),D=x+(L^R&(P^L))+k[0]+3921069994&4294967295,x=P+(D<<20&4294967295|D>>>12),D=R+(P^L&(x^P))+k[5]+3593408605&4294967295,R=x+(D<<5&4294967295|D>>>27),D=L+(x^P&(R^x))+k[10]+38016083&4294967295,L=R+(D<<9&4294967295|D>>>23),D=P+(R^x&(L^R))+k[15]+3634488961&4294967295,P=L+(D<<14&4294967295|D>>>18),D=x+(L^R&(P^L))+k[4]+3889429448&4294967295,x=P+(D<<20&4294967295|D>>>12),D=R+(P^L&(x^P))+k[9]+568446438&4294967295,R=x+(D<<5&4294967295|D>>>27),D=L+(x^P&(R^x))+k[14]+3275163606&4294967295,L=R+(D<<9&4294967295|D>>>23),D=P+(R^x&(L^R))+k[3]+4107603335&4294967295,P=L+(D<<14&4294967295|D>>>18),D=x+(L^R&(P^L))+k[8]+1163531501&4294967295,x=P+(D<<20&4294967295|D>>>12),D=R+(P^L&(x^P))+k[13]+2850285829&4294967295,R=x+(D<<5&4294967295|D>>>27),D=L+(x^P&(R^x))+k[2]+4243563512&4294967295,L=R+(D<<9&4294967295|D>>>23),D=P+(R^x&(L^R))+k[7]+1735328473&4294967295,P=L+(D<<14&4294967295|D>>>18),D=x+(L^R&(P^L))+k[12]+2368359562&4294967295,x=P+(D<<20&4294967295|D>>>12),D=R+(x^P^L)+k[5]+4294588738&4294967295,R=x+(D<<4&4294967295|D>>>28),D=L+(R^x^P)+k[8]+2272392833&4294967295,L=R+(D<<11&4294967295|D>>>21),D=P+(L^R^x)+k[11]+1839030562&4294967295,P=L+(D<<16&4294967295|D>>>16),D=x+(P^L^R)+k[14]+4259657740&4294967295,x=P+(D<<23&4294967295|D>>>9),D=R+(x^P^L)+k[1]+2763975236&4294967295,R=x+(D<<4&4294967295|D>>>28),D=L+(R^x^P)+k[4]+1272893353&4294967295,L=R+(D<<11&4294967295|D>>>21),D=P+(L^R^x)+k[7]+4139469664&4294967295,P=L+(D<<16&4294967295|D>>>16),D=x+(P^L^R)+k[10]+3200236656&4294967295,x=P+(D<<23&4294967295|D>>>9),D=R+(x^P^L)+k[13]+681279174&4294967295,R=x+(D<<4&4294967295|D>>>28),D=L+(R^x^P)+k[0]+3936430074&4294967295,L=R+(D<<11&4294967295|D>>>21),D=P+(L^R^x)+k[3]+3572445317&4294967295,P=L+(D<<16&4294967295|D>>>16),D=x+(P^L^R)+k[6]+76029189&4294967295,x=P+(D<<23&4294967295|D>>>9),D=R+(x^P^L)+k[9]+3654602809&4294967295,R=x+(D<<4&4294967295|D>>>28),D=L+(R^x^P)+k[12]+3873151461&4294967295,L=R+(D<<11&4294967295|D>>>21),D=P+(L^R^x)+k[15]+530742520&4294967295,P=L+(D<<16&4294967295|D>>>16),D=x+(P^L^R)+k[2]+3299628645&4294967295,x=P+(D<<23&4294967295|D>>>9),D=R+(P^(x|~L))+k[0]+4096336452&4294967295,R=x+(D<<6&4294967295|D>>>26),D=L+(x^(R|~P))+k[7]+1126891415&4294967295,L=R+(D<<10&4294967295|D>>>22),D=P+(R^(L|~x))+k[14]+2878612391&4294967295,P=L+(D<<15&4294967295|D>>>17),D=x+(L^(P|~R))+k[5]+4237533241&4294967295,x=P+(D<<21&4294967295|D>>>11),D=R+(P^(x|~L))+k[12]+1700485571&4294967295,R=x+(D<<6&4294967295|D>>>26),D=L+(x^(R|~P))+k[3]+2399980690&4294967295,L=R+(D<<10&4294967295|D>>>22),D=P+(R^(L|~x))+k[10]+4293915773&4294967295,P=L+(D<<15&4294967295|D>>>17),D=x+(L^(P|~R))+k[1]+2240044497&4294967295,x=P+(D<<21&4294967295|D>>>11),D=R+(P^(x|~L))+k[8]+1873313359&4294967295,R=x+(D<<6&4294967295|D>>>26),D=L+(x^(R|~P))+k[15]+4264355552&4294967295,L=R+(D<<10&4294967295|D>>>22),D=P+(R^(L|~x))+k[6]+2734768916&4294967295,P=L+(D<<15&4294967295|D>>>17),D=x+(L^(P|~R))+k[13]+1309151649&4294967295,x=P+(D<<21&4294967295|D>>>11),D=R+(P^(x|~L))+k[4]+4149444226&4294967295,R=x+(D<<6&4294967295|D>>>26),D=L+(x^(R|~P))+k[11]+3174756917&4294967295,L=R+(D<<10&4294967295|D>>>22),D=P+(R^(L|~x))+k[2]+718787259&4294967295,P=L+(D<<15&4294967295|D>>>17),D=x+(L^(P|~R))+k[9]+3951481745&4294967295,C.g[0]=C.g[0]+R&4294967295,C.g[1]=C.g[1]+(P+(D<<21&4294967295|D>>>11))&4294967295,C.g[2]=C.g[2]+P&4294967295,C.g[3]=C.g[3]+L&4294967295}s.prototype.u=function(C,R){R===void 0&&(R=C.length);for(var x=R-this.blockSize,k=this.B,P=this.h,L=0;L<R;){if(P==0)for(;L<=x;)o(this,C,L),L+=this.blockSize;if(typeof C=="string"){for(;L<R;)if(k[P++]=C.charCodeAt(L++),P==this.blockSize){o(this,k),P=0;break}}else for(;L<R;)if(k[P++]=C[L++],P==this.blockSize){o(this,k),P=0;break}}this.h=P,this.o+=R},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var R=1;R<C.length-8;++R)C[R]=0;var x=8*this.o;for(R=C.length-8;R<C.length;++R)C[R]=x&255,x/=256;for(this.u(C),C=Array(16),R=x=0;4>R;++R)for(var k=0;32>k;k+=8)C[x++]=this.g[R]>>>k&255;return C};function u(C,R){var x=p;return Object.prototype.hasOwnProperty.call(x,C)?x[C]:x[C]=R(C)}function h(C,R){this.h=R;for(var x=[],k=!0,P=C.length-1;0<=P;P--){var L=C[P]|0;k&&L==R||(x[P]=L,k=!1)}this.g=x}var p={};function m(C){return-128<=C&&128>C?u(C,function(R){return new h([R|0],0>R?-1:0)}):new h([C|0],0>C?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return w;if(0>C)return B(g(-C));for(var R=[],x=1,k=0;C>=x;k++)R[k]=C/x|0,x*=4294967296;return new h(R,0)}function _(C,R){if(C.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(C.charAt(0)=="-")return B(_(C.substring(1),R));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=g(Math.pow(R,8)),k=w,P=0;P<C.length;P+=8){var L=Math.min(8,C.length-P),D=parseInt(C.substring(P,P+L),R);8>L?(L=g(Math.pow(R,L)),k=k.j(L).add(g(D))):(k=k.j(x),k=k.add(g(D)))}return k}var w=m(0),S=m(1),N=m(16777216);r=h.prototype,r.m=function(){if(G(this))return-B(this).m();for(var C=0,R=1,x=0;x<this.g.length;x++){var k=this.i(x);C+=(0<=k?k:4294967296+k)*R,R*=4294967296}return C},r.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(U(this))return"0";if(G(this))return"-"+B(this).toString(C);for(var R=g(Math.pow(C,6)),x=this,k="";;){var P=ce(x,R).g;x=ee(x,P.j(R));var L=((0<x.g.length?x.g[0]:x.h)>>>0).toString(C);if(x=P,U(x))return L+k;for(;6>L.length;)L="0"+L;k=L+k}},r.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function U(C){if(C.h!=0)return!1;for(var R=0;R<C.g.length;R++)if(C.g[R]!=0)return!1;return!0}function G(C){return C.h==-1}r.l=function(C){return C=ee(this,C),G(C)?-1:U(C)?0:1};function B(C){for(var R=C.g.length,x=[],k=0;k<R;k++)x[k]=~C.g[k];return new h(x,~C.h).add(S)}r.abs=function(){return G(this)?B(this):this},r.add=function(C){for(var R=Math.max(this.g.length,C.g.length),x=[],k=0,P=0;P<=R;P++){var L=k+(this.i(P)&65535)+(C.i(P)&65535),D=(L>>>16)+(this.i(P)>>>16)+(C.i(P)>>>16);k=D>>>16,L&=65535,D&=65535,x[P]=D<<16|L}return new h(x,x[x.length-1]&-2147483648?-1:0)};function ee(C,R){return C.add(B(R))}r.j=function(C){if(U(this)||U(C))return w;if(G(this))return G(C)?B(this).j(B(C)):B(B(this).j(C));if(G(C))return B(this.j(B(C)));if(0>this.l(N)&&0>C.l(N))return g(this.m()*C.m());for(var R=this.g.length+C.g.length,x=[],k=0;k<2*R;k++)x[k]=0;for(k=0;k<this.g.length;k++)for(var P=0;P<C.g.length;P++){var L=this.i(k)>>>16,D=this.i(k)&65535,Dt=C.i(P)>>>16,at=C.i(P)&65535;x[2*k+2*P]+=D*at,W(x,2*k+2*P),x[2*k+2*P+1]+=L*at,W(x,2*k+2*P+1),x[2*k+2*P+1]+=D*Dt,W(x,2*k+2*P+1),x[2*k+2*P+2]+=L*Dt,W(x,2*k+2*P+2)}for(k=0;k<R;k++)x[k]=x[2*k+1]<<16|x[2*k];for(k=R;k<2*R;k++)x[k]=0;return new h(x,0)};function W(C,R){for(;(C[R]&65535)!=C[R];)C[R+1]+=C[R]>>>16,C[R]&=65535,R++}function ie(C,R){this.g=C,this.h=R}function ce(C,R){if(U(R))throw Error("division by zero");if(U(C))return new ie(w,w);if(G(C))return R=ce(B(C),R),new ie(B(R.g),B(R.h));if(G(R))return R=ce(C,B(R)),new ie(B(R.g),R.h);if(30<C.g.length){if(G(C)||G(R))throw Error("slowDivide_ only works with positive integers.");for(var x=S,k=R;0>=k.l(C);)x=ue(x),k=ue(k);var P=de(x,1),L=de(k,1);for(k=de(k,2),x=de(x,2);!U(k);){var D=L.add(k);0>=D.l(C)&&(P=P.add(x),L=D),k=de(k,1),x=de(x,1)}return R=ee(C,P.j(R)),new ie(P,R)}for(P=w;0<=C.l(R);){for(x=Math.max(1,Math.floor(C.m()/R.m())),k=Math.ceil(Math.log(x)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),L=g(x),D=L.j(R);G(D)||0<D.l(C);)x-=k,L=g(x),D=L.j(R);U(L)&&(L=S),P=P.add(L),C=ee(C,D)}return new ie(P,C)}r.A=function(C){return ce(this,C).h},r.and=function(C){for(var R=Math.max(this.g.length,C.g.length),x=[],k=0;k<R;k++)x[k]=this.i(k)&C.i(k);return new h(x,this.h&C.h)},r.or=function(C){for(var R=Math.max(this.g.length,C.g.length),x=[],k=0;k<R;k++)x[k]=this.i(k)|C.i(k);return new h(x,this.h|C.h)},r.xor=function(C){for(var R=Math.max(this.g.length,C.g.length),x=[],k=0;k<R;k++)x[k]=this.i(k)^C.i(k);return new h(x,this.h^C.h)};function ue(C){for(var R=C.g.length+1,x=[],k=0;k<R;k++)x[k]=C.i(k)<<1|C.i(k-1)>>>31;return new h(x,C.h)}function de(C,R){var x=R>>5;R%=32;for(var k=C.g.length-x,P=[],L=0;L<k;L++)P[L]=0<R?C.i(L+x)>>>R|C.i(L+x+1)<<32-R:C.i(L+x);return new h(P,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Mw=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=_,ms=h}).apply(typeof FE<"u"?FE:typeof self<"u"?self:typeof window<"u"?window:{});var kh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kw,Eu,Pw,Wh,eg,Vw,Lw,Uw;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,v){return c==Array.prototype||c==Object.prototype||(c[y]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof kh=="object"&&kh];for(var y=0;y<c.length;++y){var v=c[y];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function o(c,y){if(y)e:{var v=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var j=c[A];if(!(j in v))break e;v=v[j]}c=c[c.length-1],A=v[c],y=y(A),y!=A&&y!=null&&e(v,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var v=0,A=!1,j={next:function(){if(!A&&v<c.length){var Y=v++;return{value:y(Y,c[Y]),done:!1}}return A=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function m(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function _(c,y,v){return c.call.apply(c.bind,arguments)}function w(c,y,v){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,A),c.apply(y,j)}}return function(){return c.apply(y,arguments)}}function S(c,y,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,S.apply(null,arguments)}function N(c,y){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function U(c,y){function v(){}v.prototype=y.prototype,c.aa=y.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(A,j,Y){for(var oe=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)oe[Ue-2]=arguments[Ue];return y.prototype[j].apply(A,oe)}}function G(c){const y=c.length;if(0<y){const v=Array(y);for(let A=0;A<y;A++)v[A]=c[A];return v}return[]}function B(c,y){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(m(A)){const j=c.length||0,Y=A.length||0;c.length=j+Y;for(let oe=0;oe<Y;oe++)c[j+oe]=A[oe]}else c.push(A)}}class ee{constructor(y,v){this.i=y,this.j=v,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function W(c){return/^[\s\xa0]*$/.test(c)}function ie(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function ce(c){return ce[" "](c),c}ce[" "]=function(){};var ue=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function de(c,y,v){for(const A in c)y.call(v,c[A],A,c)}function C(c,y){for(const v in c)y.call(void 0,c[v],v,c)}function R(c){const y={};for(const v in c)y[v]=c[v];return y}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(c,y){let v,A;for(let j=1;j<arguments.length;j++){A=arguments[j];for(v in A)c[v]=A[v];for(let Y=0;Y<x.length;Y++)v=x[Y],Object.prototype.hasOwnProperty.call(A,v)&&(c[v]=A[v])}}function P(c){var y=1;c=c.split(":");const v=[];for(;0<y&&c.length;)v.push(c.shift()),y--;return c.length&&v.push(c.join(":")),v}function L(c){p.setTimeout(()=>{throw c},0)}function D(){var c=Ie;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Dt{constructor(){this.h=this.g=null}add(y,v){const A=at.get();A.set(y,v),this.h?this.h.next=A:this.g=A,this.h=A}}var at=new ee(()=>new K,c=>c.reset());class K{constructor(){this.next=this.g=this.h=null}set(y,v){this.h=y,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let le,me=!1,Ie=new Dt,O=()=>{const c=p.Promise.resolve(void 0);le=()=>{c.then(re)}};var re=()=>{for(var c;c=D();){try{c.h.call(c.g)}catch(v){L(v)}var y=at;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}me=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};p.addEventListener("test",v,y),p.removeEventListener("test",v,y)}catch{}return c}();function xe(c,y){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(ue){e:{try{ce(y.nodeName);var j=!0;break e}catch{}j=!1}j||(y=null)}}else v=="mouseover"?y=c.fromElement:v=="mouseout"&&(y=c.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&xe.aa.h.call(this)}}U(xe,se);var ve={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),Be=0;function Ut(c,y,v,A,j){this.listener=c,this.proxy=null,this.src=y,this.type=v,this.capture=!!A,this.ha=j,this.key=++Be,this.da=this.fa=!1}function Pn(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function yn(c){this.src=c,this.g={},this.h=0}yn.prototype.add=function(c,y,v,A,j){var Y=c.toString();c=this.g[Y],c||(c=this.g[Y]=[],this.h++);var oe=Cs(c,y,A,j);return-1<oe?(y=c[oe],v||(y.fa=!1)):(y=new Ut(y,this.src,Y,!!A,j),y.fa=v,c.push(y)),y};function rn(c,y){var v=y.type;if(v in c.g){var A=c.g[v],j=Array.prototype.indexOf.call(A,y,void 0),Y;(Y=0<=j)&&Array.prototype.splice.call(A,j,1),Y&&(Pn(y),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Cs(c,y,v,A){for(var j=0;j<c.length;++j){var Y=c[j];if(!Y.da&&Y.listener==y&&Y.capture==!!v&&Y.ha==A)return j}return-1}var Ds="closure_lm_"+(1e6*Math.random()|0),al={};function ac(c,y,v,A,j){if(Array.isArray(y)){for(var Y=0;Y<y.length;Y++)ac(c,y[Y],v,A,j);return null}return v=oc(v),c&&c[ct]?c.K(y,v,g(A)?!!A.capture:!1,j):Vn(c,y,v,!1,A,j)}function Vn(c,y,v,A,j,Y){if(!y)throw Error("Invalid event type");var oe=g(j)?!!j.capture:!!j,Ue=Ma(c);if(Ue||(c[Ds]=Ue=new yn(c)),v=Ue.add(y,v,A,oe,Y),v.proxy)return v;if(A=ud(),v.proxy=A,A.src=c,A.listener=v,c.addEventListener)ge||(j=oe),j===void 0&&(j=!1),c.addEventListener(y.toString(),A,j);else if(c.attachEvent)c.attachEvent(Ns(y.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ud(){function c(v){return y.call(c.src,c.listener,v)}const y=cd;return c}function ol(c,y,v,A,j){if(Array.isArray(y))for(var Y=0;Y<y.length;Y++)ol(c,y[Y],v,A,j);else A=g(A)?!!A.capture:!!A,v=oc(v),c&&c[ct]?(c=c.i,y=String(y).toString(),y in c.g&&(Y=c.g[y],v=Cs(Y,v,A,j),-1<v&&(Pn(Y[v]),Array.prototype.splice.call(Y,v,1),Y.length==0&&(delete c.g[y],c.h--)))):c&&(c=Ma(c))&&(y=c.g[y.toString()],c=-1,y&&(c=Cs(y,v,A,j)),(v=-1<c?y[c]:null)&&Oa(v))}function Oa(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[ct])rn(y.i,c);else{var v=c.type,A=c.proxy;y.removeEventListener?y.removeEventListener(v,A,c.capture):y.detachEvent?y.detachEvent(Ns(v),A):y.addListener&&y.removeListener&&y.removeListener(A),(v=Ma(y))?(rn(v,c),v.h==0&&(v.src=null,y[Ds]=null)):Pn(c)}}}function Ns(c){return c in al?al[c]:al[c]="on"+c}function cd(c,y){if(c.da)c=!0;else{y=new xe(y,this);var v=c.listener,A=c.ha||c.src;c.fa&&Oa(c),c=v.call(A,y)}return c}function Ma(c){return c=c[Ds],c instanceof yn?c:null}var ll="__closure_events_fn_"+(1e9*Math.random()>>>0);function oc(c){return typeof c=="function"?c:(c[ll]||(c[ll]=function(y){return c.handleEvent(y)}),c[ll])}function dt(){ae.call(this),this.i=new yn(this),this.M=this,this.F=null}U(dt,ae),dt.prototype[ct]=!0,dt.prototype.removeEventListener=function(c,y,v,A){ol(this,c,y,v,A)};function Ye(c,y){var v,A=c.F;if(A)for(v=[];A;A=A.F)v.push(A);if(c=c.M,A=y.type||y,typeof y=="string")y=new se(y,c);else if(y instanceof se)y.target=y.target||c;else{var j=y;y=new se(A,c),k(y,j)}if(j=!0,v)for(var Y=v.length-1;0<=Y;Y--){var oe=y.g=v[Y];j=bn(oe,A,!0,y)&&j}if(oe=y.g=c,j=bn(oe,A,!0,y)&&j,j=bn(oe,A,!1,y)&&j,v)for(Y=0;Y<v.length;Y++)oe=y.g=v[Y],j=bn(oe,A,!1,y)&&j}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var v=c.g[y],A=0;A<v.length;A++)Pn(v[A]);delete c.g[y],c.h--}}this.F=null},dt.prototype.K=function(c,y,v,A){return this.i.add(String(c),y,!1,v,A)},dt.prototype.L=function(c,y,v,A){return this.i.add(String(c),y,!0,v,A)};function bn(c,y,v,A){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var j=!0,Y=0;Y<y.length;++Y){var oe=y[Y];if(oe&&!oe.da&&oe.capture==v){var Ue=oe.listener,Ot=oe.ha||oe.src;oe.fa&&rn(c.i,oe),j=Ue.call(Ot,A)!==!1&&j}}return j&&!A.defaultPrevented}function sn(c,y,v){if(typeof c=="function")v&&(c=S(c,v));else if(c&&typeof c.handleEvent=="function")c=S(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:p.setTimeout(c,y||0)}function lc(c){c.g=sn(()=>{c.g=null,c.i&&(c.i=!1,lc(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class hd extends ae{constructor(y,v){super(),this.m=y,this.l=v,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:lc(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Os(c){ae.call(this),this.h=c,this.g={}}U(Os,ae);var Ms=[];function ks(c){de(c.g,function(y,v){this.g.hasOwnProperty(v)&&Oa(y)},c),c.g={}}Os.prototype.N=function(){Os.aa.N.call(this),ks(this)},Os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var er=p.JSON.stringify,ka=p.JSON.parse,Ps=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function ul(){}ul.prototype.h=null;function cl(c){return c.h||(c.h=c.i())}function hl(){}var qr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Br(){se.call(this,"d")}U(Br,se);function fl(){se.call(this,"c")}U(fl,se);var mr={},dl=null;function Ci(){return dl=dl||new dt}mr.La="serverreachability";function Pa(c){se.call(this,mr.La,c)}U(Pa,se);function Di(c){const y=Ci();Ye(y,new Pa(y))}mr.STAT_EVENT="statevent";function uc(c,y){se.call(this,mr.STAT_EVENT,c),this.stat=y}U(uc,se);function ot(c){const y=Ci();Ye(y,new uc(y,c))}mr.Ma="timingevent";function Nt(c,y){se.call(this,mr.Ma,c),this.size=y}U(Nt,se);function Tt(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},y)}function Ln(){this.g=!0}Ln.prototype.xa=function(){this.g=!1};function pl(c,y,v,A,j,Y){c.info(function(){if(c.g)if(Y)for(var oe="",Ue=Y.split("&"),Ot=0;Ot<Ue.length;Ot++){var je=Ue[Ot].split("=");if(1<je.length){var zt=je[0];je=je[1];var Mt=zt.split("_");oe=2<=Mt.length&&Mt[1]=="type"?oe+(zt+"="+je+"&"):oe+(zt+"=redacted&")}}else oe=null;else oe=Y;return"XMLHTTP REQ ("+A+") [attempt "+j+"]: "+y+`
`+v+`
`+oe})}function fd(c,y,v,A,j,Y,oe){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+j+"]: "+y+`
`+v+`
`+Y+" "+oe})}function Ni(c,y,v,A){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Vs(c,v)+(A?" "+A:"")})}function cc(c,y){c.info(function(){return"TIMEOUT: "+y})}Ln.prototype.info=function(){};function Vs(c,y){if(!c.g)return y;if(!y)return null;try{var v=JSON.parse(y);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var A=v[c];if(!(2>A.length)){var j=A[1];if(Array.isArray(j)&&!(1>j.length)){var Y=j[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var oe=1;oe<j.length;oe++)j[oe]=""}}}}return er(v)}catch{return y}}var Oi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gr;function yr(){}U(yr,ul),yr.prototype.g=function(){return new XMLHttpRequest},yr.prototype.i=function(){return{}},gr=new yr;function dn(c,y,v,A){this.j=c,this.i=y,this.l=v,this.R=A||1,this.U=new Os(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}var ml={},Va={};function tr(c,y,v){c.L=1,c.v=qs(Sn(y)),c.m=v,c.P=!0,Fr(c,null)}function Fr(c,y){c.F=Date.now(),Ls(c),c.A=Sn(c.v);var v=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Tl(v.i,"t",A),c.C=0,v=c.j.J,c.h=new yt,c.g=Rc(c.j,v?y:null,!c.m),0<c.O&&(c.M=new hd(S(c.Y,c,c.g),c.O)),y=c.U,v=c.g,A=c.ca;var j="readystatechange";Array.isArray(j)||(j&&(Ms[0]=j.toString()),j=Ms);for(var Y=0;Y<j.length;Y++){var oe=ac(v,j[Y],A||y.handleEvent,!1,y.h||y);if(!oe)break;y.g[oe.key]=oe}y=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),Di(),pl(c.i,c.u,c.A,c.l,c.R,c.m)}dn.prototype.ca=function(c){c=c.target;const y=this.M;y&&qn(c)==3?y.j():this.Y(c)},dn.prototype.Y=function(c){try{if(c==this.g)e:{const Mt=qn(this.g);var y=this.g.Ba();const Zr=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||_c(this.g)))){this.J||Mt!=4||y==7||(y==8||0>=Zr?Di(3):Di(2)),Mi(this);var v=this.g.Z();this.X=v;t:if(hc(this)){var A=_c(this.g);c="";var j=A.length,Y=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),_r(this);var oe="";break t}this.h.i=new p.TextDecoder}for(y=0;y<j;y++)this.h.h=!0,c+=this.h.i.decode(A[y],{stream:!(Y&&y==j-1)});A.length=0,this.h.g+=c,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=v==200,fd(this.i,this.u,this.A,this.l,this.R,Mt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,Ot=this.g;if((Ue=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(Ue)){var je=Ue;break t}}je=null}if(v=je)Ni(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Us(this,v);else{this.o=!1,this.s=3,ot(12),Qt(this),_r(this);break e}}if(this.P){v=!0;let Yt;for(;!this.J&&this.C<oe.length;)if(Yt=fc(this,oe),Yt==Va){Mt==4&&(this.s=4,ot(14),v=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==ml){this.s=4,ot(15),Ni(this.i,this.l,oe,"[Invalid Chunk]"),v=!1;break}else Ni(this.i,this.l,Yt,null),Us(this,Yt);if(hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||oe.length!=0||this.h.h||(this.s=1,ot(16),v=!1),this.o=this.o&&v,!v)Ni(this.i,this.l,oe,"[Invalid Chunked Response]"),Qt(this),_r(this);else if(0<oe.length&&!this.W){this.W=!0;var zt=this.j;zt.g==this&&zt.ba&&!zt.M&&(zt.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),Ks(zt),zt.M=!0,ot(11))}}else Ni(this.i,this.l,oe,null),Us(this,oe);Mt==4&&Qt(this),this.o&&!this.J&&(Mt==4?bc(this.j,this):(this.o=!1,Ls(this)))}else yd(this.g),v==400&&0<oe.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),Qt(this),_r(this)}}}catch{}finally{}};function hc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function fc(c,y){var v=c.C,A=y.indexOf(`
`,v);return A==-1?Va:(v=Number(y.substring(v,A)),isNaN(v)?ml:(A+=1,A+v>y.length?Va:(y=y.slice(A,A+v),c.C=A+v,y)))}dn.prototype.cancel=function(){this.J=!0,Qt(this)};function Ls(c){c.S=Date.now()+c.I,dc(c,c.I)}function dc(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Tt(S(c.ba,c),y)}function Mi(c){c.B&&(p.clearTimeout(c.B),c.B=null)}dn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(cc(this.i,this.A),this.L!=2&&(Di(),ot(17)),Qt(this),this.s=2,_r(this)):dc(this,this.S-c)};function _r(c){c.j.G==0||c.J||bc(c.j,c)}function Qt(c){Mi(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,ks(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function Us(c,y){try{var v=c.j;if(v.G!=0&&(v.g==c||gl(v.h,c))){if(!c.K&&gl(v.h,c)&&v.G==3){try{var A=v.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var j=A;if(j[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)Ya(v),Ga(v);else break e;Rl(v),ot(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=Tt(S(v.Za,v),6e3));if(1>=Ua(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Wr(v,11)}else if((c.K||v.g==c)&&Ya(v),!W(y))for(j=v.Da.g.parse(y),y=0;y<j.length;y++){let je=j[y];if(v.T=je[0],je=je[1],v.G==2)if(je[0]=="c"){v.K=je[1],v.ia=je[2];const zt=je[3];zt!=null&&(v.la=zt,v.j.info("VER="+v.la));const Mt=je[4];Mt!=null&&(v.Aa=Mt,v.j.info("SVER="+v.Aa));const Zr=je[5];Zr!=null&&typeof Zr=="number"&&0<Zr&&(A=1.5*Zr,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const Yt=c.g;if(Yt){const Ar=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ar){var Y=A.h;Y.g||Ar.indexOf("spdy")==-1&&Ar.indexOf("quic")==-1&&Ar.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(ja(Y,Y.h),Y.h=null))}if(A.D){const Il=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Il&&(A.ya=Il,We(A.I,A.D,Il))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var oe=c;if(A.qa=Ac(A,A.J?A.ia:null,A.W),oe.K){pn(A.h,oe);var Ue=oe,Ot=A.L;Ot&&(Ue.I=Ot),Ue.B&&(Mi(Ue),Ls(Ue)),A.g=oe}else Tc(A);0<v.i.length&&Qa(v)}else je[0]!="stop"&&je[0]!="close"||Wr(v,7);else v.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?Wr(v,7):Sl(v):je[0]!="noop"&&v.l&&v.l.ta(je),v.v=0)}}Di(4)}catch{}}var pc=class{constructor(c,y){this.g=c,this.map=y}};function $r(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function La(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ua(c){return c.h?1:c.g?c.g.size:0}function gl(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function ja(c,y){c.g?c.g.add(y):c.h=y}function pn(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}$r.prototype.cancel=function(){if(this.i=yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function yl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const v of c.g.values())y=y.concat(v.D);return y}return G(c.i)}function dd(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var y=[],v=c.length,A=0;A<v;A++)y.push(c[A]);return y}y=[],v=0;for(A in c)y[v++]=c[A];return y}function za(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var y=[];c=c.length;for(var v=0;v<c;v++)y.push(v);return y}y=[],v=0;for(const A in c)y[v++]=A;return y}}}function _l(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var v=za(c),A=dd(c),j=A.length,Y=0;Y<j;Y++)y.call(void 0,A[Y],v&&v[Y],c)}var js=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pd(c,y){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var A=c[v].indexOf("="),j=null;if(0<=A){var Y=c[v].substring(0,A);j=c[v].substring(A+1)}else Y=c[v];y(Y,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function wt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof wt){this.h=c.h,zs(this,c.j),this.o=c.o,this.g=c.g,ki(this,c.s),this.l=c.l;var y=c.i,v=new Qr;v.i=y.i,y.g&&(v.g=new Map(y.g),v.h=y.h),Gr(this,v),this.m=c.m}else c&&(y=String(c).match(js))?(this.h=!1,zs(this,y[1]||"",!0),this.o=Un(y[2]||""),this.g=Un(y[3]||"",!0),ki(this,y[4]),this.l=Un(y[5]||"",!0),Gr(this,y[6]||"",!0),this.m=Un(y[7]||"")):(this.h=!1,this.i=new Qr(null,this.h))}wt.prototype.toString=function(){var c=[],y=this.j;y&&c.push(Bs(y,vl,!0),":");var v=this.g;return(v||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Bs(y,vl,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Bs(v,v.charAt(0)=="/"?md:El,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Bs(v,qa)),c.join("")};function Sn(c){return new wt(c)}function zs(c,y,v){c.j=v?Un(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function ki(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function Gr(c,y,v){y instanceof Qr?(c.i=y,gc(c.i,c.h)):(v||(y=Bs(y,gd)),c.i=new Qr(y,c.h))}function We(c,y,v){c.i.set(y,v)}function qs(c){return We(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Un(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Bs(c,y,v){return typeof c=="string"?(c=encodeURI(c).replace(y,mc),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function mc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var vl=/[#\/\?@]/g,El=/[#\?:]/g,md=/[#\?]/g,gd=/[#\?@]/g,qa=/#/g;function Qr(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function jn(c){c.g||(c.g=new Map,c.h=0,c.i&&pd(c.i,function(y,v){c.add(decodeURIComponent(y.replace(/\+/g," ")),v)}))}r=Qr.prototype,r.add=function(c,y){jn(this),this.i=null,c=vr(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(y),this.h+=1,this};function Yr(c,y){jn(c),y=vr(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Kr(c,y){return jn(c),y=vr(c,y),c.g.has(y)}r.forEach=function(c,y){jn(this),this.g.forEach(function(v,A){v.forEach(function(j){c.call(y,j,A,this)},this)},this)},r.na=function(){jn(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),v=[];for(let A=0;A<y.length;A++){const j=c[A];for(let Y=0;Y<j.length;Y++)v.push(y[A])}return v},r.V=function(c){jn(this);let y=[];if(typeof c=="string")Kr(this,c)&&(y=y.concat(this.g.get(vr(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)y=y.concat(c[v])}return y},r.set=function(c,y){return jn(this),this.i=null,c=vr(this,c),Kr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},r.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function Tl(c,y,v){Yr(c,y),0<v.length&&(c.i=null,c.g.set(vr(c,y),G(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var v=0;v<y.length;v++){var A=y[v];const Y=encodeURIComponent(String(A)),oe=this.V(A);for(A=0;A<oe.length;A++){var j=Y;oe[A]!==""&&(j+="="+encodeURIComponent(String(oe[A]))),c.push(j)}}return this.i=c.join("&")};function vr(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function gc(c,y){y&&!c.j&&(jn(c),c.i=null,c.g.forEach(function(v,A){var j=A.toLowerCase();A!=j&&(Yr(this,A),Tl(this,j,v))},c)),c.j=y}function Hs(c,y){const v=new Ln;if(p.Image){const A=new Image;A.onload=N(zn,v,"TestLoadImage: loaded",!0,y,A),A.onerror=N(zn,v,"TestLoadImage: error",!1,y,A),A.onabort=N(zn,v,"TestLoadImage: abort",!1,y,A),A.ontimeout=N(zn,v,"TestLoadImage: timeout",!1,y,A),p.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else y(!1)}function nr(c,y){const v=new Ln,A=new AbortController,j=setTimeout(()=>{A.abort(),zn(v,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:A.signal}).then(Y=>{clearTimeout(j),Y.ok?zn(v,"TestPingServer: ok",!0,y):zn(v,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(j),zn(v,"TestPingServer: error",!1,y)})}function zn(c,y,v,A,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),A(v)}catch{}}function Fs(){this.g=new Ps}function Er(c,y,v){const A=v||"";try{_l(c,function(j,Y){let oe=j;g(j)&&(oe=er(j)),y.push(A+Y+"="+encodeURIComponent(oe))})}catch(j){throw y.push(A+"type="+encodeURIComponent("_badmap")),j}}function Pi(c){this.l=c.Ub||null,this.j=c.eb||!1}U(Pi,ul),Pi.prototype.g=function(){return new Xr(this.l,this.j)},Pi.prototype.i=function(c){return function(){return c}}({});function Xr(c,y){dt.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(Xr,dt),r=Xr.prototype,r.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,wr(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||p).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,wr(this)),this.g&&(this.readyState=3,wr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function wl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?Tr(this):wr(this),this.readyState==3&&wl(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Tr(this))},r.Qa=function(c){this.g&&(this.response=c,Tr(this))},r.ga=function(){this.g&&Tr(this)};function Tr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,wr(c)}r.setRequestHeader=function(c,y){this.u.append(c,y)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var v=y.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=y.next();return c.join(`\r
`)};function wr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function bl(c){let y="";return de(c,function(v,A){y+=A,y+=":",y+=v,y+=`\r
`}),y}function jt(c,y,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=bl(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):We(c,y,v))}function $e(c){dt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U($e,dt);var Ba=/^https?$/i,$s=["POST","PUT"];r=$e.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,y,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gr.g(),this.v=this.o?cl(this.o):cl(gr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(Y){yc(this,Y);return}if(c=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var j in A)v.set(j,A[j]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Y of A.keys())v.set(Y,A.get(Y));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(Y=>Y.toLowerCase()=="content-type"),j=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call($s,y,void 0))||A||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,oe]of v)this.g.setRequestHeader(Y,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gs(this),this.u=!0,this.g.send(c),this.u=!1}catch(Y){yc(this,Y)}};function yc(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,Ha(c),br(c)}function Ha(c){c.A||(c.A=!0,Ye(c,"complete"),Ye(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ye(this,"complete"),Ye(this,"abort"),br(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),br(this,!0)),$e.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Fa(this):this.bb())},r.bb=function(){Fa(this)};function Fa(c){if(c.h&&typeof h<"u"&&(!c.v[1]||qn(c)!=4||c.Z()!=2)){if(c.u&&qn(c)==4)sn(c.Ea,0,c);else if(Ye(c,"readystatechange"),qn(c)==4){c.h=!1;try{const oe=c.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var v;if(!(v=y)){var A;if(A=oe===0){var j=String(c.D).match(js)[1]||null;!j&&p.self&&p.self.location&&(j=p.self.location.protocol.slice(0,-1)),A=!Ba.test(j?j.toLowerCase():"")}v=A}if(v)Ye(c,"complete"),Ye(c,"success");else{c.m=6;try{var Y=2<qn(c)?c.g.statusText:""}catch{Y=""}c.l=Y+" ["+c.Z()+"]",Ha(c)}}finally{br(c)}}}}function br(c,y){if(c.g){Gs(c);const v=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Ye(c,"ready");try{v.onreadystatechange=A}catch{}}}function Gs(c){c.I&&(p.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function qn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),ka(y)}};function _c(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function yd(c){const y={};c=(c.g&&2<=qn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(W(c[A]))continue;var v=P(c[A]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Y=y[j]||[];y[j]=Y,Y.push(v)}C(y,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(c,y,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||y}function $a(c){this.Aa=0,this.i=[],this.j=new Ln,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,c),this.cb=Qs("retryDelaySeedMs",1e4,c),this.Wa=Qs("forwardChannelMaxRetries",2,c),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new $r(c&&c.concurrentRequestLimit),this.Da=new Fs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=$a.prototype,r.la=8,r.G=1,r.connect=function(c,y,v,A){ot(0),this.W=c,this.H=y||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=Ac(this,null,this.W),Qa(this)};function Sl(c){if(vc(c),c.G==3){var y=c.U++,v=Sn(c.I);if(We(v,"SID",c.K),We(v,"RID",y),We(v,"TYPE","terminate"),Ys(c,v),y=new dn(c,c.j,y),y.L=2,y.v=qs(Sn(v)),v=!1,p.navigator&&p.navigator.sendBeacon)try{v=p.navigator.sendBeacon(y.v.toString(),"")}catch{}!v&&p.Image&&(new Image().src=y.v,v=!0),v||(y.g=Rc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),Ls(y)}Sc(c)}function Ga(c){c.g&&(Ks(c),c.g.cancel(),c.g=null)}function vc(c){Ga(c),c.u&&(p.clearTimeout(c.u),c.u=null),Ya(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function Qa(c){if(!La(c.h)&&!c.s){c.s=!0;var y=c.Ga;le||O(),me||(le(),me=!0),Ie.add(y,c),c.B=0}}function _d(c,y){return Ua(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Tt(S(c.Ga,c,y),xl(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const j=new dn(this,this.j,c);let Y=this.o;if(this.S&&(Y?(Y=R(Y),k(Y,this.S)):Y=this.S),this.m!==null||this.O||(j.H=Y,Y=null),this.P)e:{for(var y=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=v;break e}if(y===4096||v===this.i.length-1){y=v+1;break e}}y=1e3}else y=1e3;y=Ec(this,j,y),v=Sn(this.I),We(v,"RID",c),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),Ys(this,v),Y&&(this.O?y="headers="+encodeURIComponent(String(bl(Y)))+"&"+y:this.m&&jt(v,this.m,Y)),ja(this.h,j),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",y),We(v,"SID","null"),j.T=!0,tr(j,v,null)):tr(j,v,y),this.G=2}}else this.G==3&&(c?Al(this,c):this.i.length==0||La(this.h)||Al(this))};function Al(c,y){var v;y?v=y.l:v=c.U++;const A=Sn(c.I);We(A,"SID",c.K),We(A,"RID",v),We(A,"AID",c.T),Ys(c,A),c.m&&c.o&&jt(A,c.m,c.o),v=new dn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),y&&(c.i=y.D.concat(c.i)),y=Ec(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ja(c.h,v),tr(v,A,y)}function Ys(c,y){c.H&&de(c.H,function(v,A){We(y,A,v)}),c.l&&_l({},function(v,A){We(y,A,v)})}function Ec(c,y,v){v=Math.min(c.i.length,v);var A=c.l?S(c.l.Na,c.l,c):null;e:{var j=c.i;let Y=-1;for(;;){const oe=["count="+v];Y==-1?0<v?(Y=j[0].g,oe.push("ofs="+Y)):Y=0:oe.push("ofs="+Y);let Ue=!0;for(let Ot=0;Ot<v;Ot++){let je=j[Ot].g;const zt=j[Ot].map;if(je-=Y,0>je)Y=Math.max(0,j[Ot].g-100),Ue=!1;else try{Er(zt,oe,"req"+je+"_")}catch{A&&A(zt)}}if(Ue){A=oe.join("&");break e}}}return c=c.i.splice(0,v),y.D=c,A}function Tc(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;le||O(),me||(le(),me=!0),Ie.add(y,c),c.v=0}}function Rl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Tt(S(c.Fa,c),xl(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,wc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Tt(S(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Ga(this),wc(this))};function Ks(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function wc(c){c.g=new dn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=Sn(c.qa);We(y,"RID","rpc"),We(y,"SID",c.K),We(y,"AID",c.T),We(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&We(y,"TO",c.ja),We(y,"TYPE","xmlhttp"),Ys(c,y),c.m&&c.o&&jt(y,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=qs(Sn(y)),v.m=null,v.P=!0,Fr(v,c)}r.Za=function(){this.C!=null&&(this.C=null,Ga(this),Rl(this),ot(19))};function Ya(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function bc(c,y){var v=null;if(c.g==y){Ya(c),Ks(c),c.g=null;var A=2}else if(gl(c.h,y))v=y.D,pn(c.h,y),A=1;else return;if(c.G!=0){if(y.o)if(A==1){v=y.m?y.m.length:0,y=Date.now()-y.F;var j=c.B;A=Ci(),Ye(A,new Nt(A,v)),Qa(c)}else Tc(c);else if(j=y.s,j==3||j==0&&0<y.X||!(A==1&&_d(c,y)||A==2&&Rl(c)))switch(v&&0<v.length&&(y=c.h,y.i=y.i.concat(v)),j){case 1:Wr(c,5);break;case 4:Wr(c,10);break;case 3:Wr(c,6);break;default:Wr(c,2)}}}function xl(c,y){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*y}function Wr(c,y){if(c.j.info("Error code "+y),y==2){var v=S(c.fb,c),A=c.Xa;const j=!A;A=new wt(A||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||zs(A,"https"),qs(A),j?Hs(A.toString(),v):nr(A.toString(),v)}else ot(2);c.G=0,c.l&&c.l.sa(y),Sc(c),vc(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Sc(c){if(c.G=0,c.ka=[],c.l){const y=yl(c.h);(y.length!=0||c.i.length!=0)&&(B(c.ka,y),B(c.ka,c.i),c.h.i.length=0,G(c.i),c.i.length=0),c.l.ra()}}function Ac(c,y,v){var A=v instanceof wt?Sn(v):new wt(v);if(A.g!="")y&&(A.g=y+"."+A.g),ki(A,A.s);else{var j=p.location;A=j.protocol,y=y?y+"."+j.hostname:j.hostname,j=+j.port;var Y=new wt(null);A&&zs(Y,A),y&&(Y.g=y),j&&ki(Y,j),v&&(Y.l=v),A=Y}return v=c.D,y=c.ya,v&&y&&We(A,v,y),We(A,"VER",c.la),Ys(c,A),A}function Rc(c,y,v){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new $e(new Pi({eb:v})):new $e(c.pa),y.Ha(c.J),y}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function xc(){}r=xc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ka(){}Ka.prototype.g=function(c,y){return new mn(c,y)};function mn(c,y){dt.call(this),this.g=new $a(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!W(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!W(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Sr(this)}U(mn,dt),mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Sl(this.g)},mn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=er(c),c=v);y.i.push(new pc(y.Ya++,c)),y.G==3&&Qa(y)},mn.prototype.N=function(){this.g.l=null,delete this.j,Sl(this.g),delete this.g,mn.aa.N.call(this)};function Ic(c){Br.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const v in y){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}U(Ic,Br);function Cc(){fl.call(this),this.status=1}U(Cc,fl);function Sr(c){this.g=c}U(Sr,xc),Sr.prototype.ua=function(){Ye(this.g,"a")},Sr.prototype.ta=function(c){Ye(this.g,new Ic(c))},Sr.prototype.sa=function(c){Ye(this.g,new Cc)},Sr.prototype.ra=function(){Ye(this.g,"b")},Ka.prototype.createWebChannel=Ka.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,Uw=function(){return new Ka},Lw=function(){return Ci()},Vw=mr,eg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,Wh=Oi,Hr.COMPLETE="complete",Pw=Hr,hl.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Eu=hl,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,kw=$e}).apply(typeof kh<"u"?kh:typeof self<"u"?self:typeof window<"u"?window:{});const $E="@firebase/firestore",GE="4.9.0";/**
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
 */let tl="12.0.0";/**
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
 */const Sa=new Ng("@firebase/firestore");function Ro(){return Sa.logLevel}function fe(r,...e){if(Sa.logLevel<=Pe.DEBUG){const t=e.map(Bg);Sa.debug(`Firestore (${tl}): ${r}`,...t)}}function Ai(r,...e){if(Sa.logLevel<=Pe.ERROR){const t=e.map(Bg);Sa.error(`Firestore (${tl}): ${r}`,...t)}}function Bo(r,...e){if(Sa.logLevel<=Pe.WARN){const t=e.map(Bg);Sa.warn(`Firestore (${tl}): ${r}`,...t)}}function Bg(r){if(typeof r=="string")return r;try{/**
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
 */function be(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,jw(r,s,t)}function jw(r,e,t){let s=`FIRESTORE (${tl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ai(s),new Error(s)}function Qe(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||jw(e,o,s)}function Re(r,e){return r}/**
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
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends xi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ei{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class zw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(cn.UNAUTHENTICATED))}shutdown(){}}class TN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class wN{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Qe(this.o===void 0,42304);let s=this.i;const o=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let u=new Ei;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ei,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=u;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},p=m=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ei)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qe(typeof s.accessToken=="string",31837,{l:s}),new zw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new cn(e)}}class bN{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class SN{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new bN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Qe(this.o===void 0,3512);const s=u=>{u.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,fe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new QE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new QE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function RN(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Hg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=RN(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ve(r,e){return r<e?-1:r>e?1:0}function tg(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return Im(o)===Im(u)?Ve(o,u):Im(o)?1:-1}return Ve(r.length,e.length)}const xN=55296,IN=57343;function Im(r){const e=r.charCodeAt(0);return e>=xN&&e<=IN}function Ho(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */const YE="__name__";class Nr{constructor(e,t,s){t===void 0?t=0:t>e.length&&be(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&be(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Nr?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Nr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ve(e.length,t.length)}static compareSegments(e,t){const s=Nr.isNumericId(e),o=Nr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Nr.extractNumericId(e).compare(Nr.extractNumericId(t)):tg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ms.fromString(e.substring(4,e.length-2))}}class it extends Nr{construct(e,t,s){return new it(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(J.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new it(t)}static emptyPath(){return new it([])}}const CN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tn extends Nr{construct(e,t,s){return new tn(e,t,s)}static isValidIdentifier(e){return CN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===YE}static keyField(){return new tn([YE])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new he(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new he(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new he(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new he(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tn(t)}static emptyPath(){return new tn([])}}/**
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
 */function qw(r,e,t){if(!t)throw new he(J.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function DN(r,e,t,s){if(e===!0&&s===!0)throw new he(J.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function KE(r){if(!_e.isDocumentKey(r))throw new he(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function XE(r){if(_e.isDocumentKey(r))throw new he(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Bw(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function qf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":be(12329,{type:typeof r})}function kn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new he(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qf(r);throw new he(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function It(r,e){const t={typeString:r};return e&&(t.value=e),t}function ec(r,e){if(!Bw(r))throw new he(J.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new he(J.INVALID_ARGUMENT,t);return!0}/**
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
 */const WE=-62135596800,ZE=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ZE);return new nt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<WE)throw new he(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ZE}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ec(e,nt._jsonSchema))return new nt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-WE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:It("string",nt._jsonSchemaVersion),seconds:It("number"),nanoseconds:It("number")};/**
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
 */const Lu=-1;function NN(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(s===1e9?new nt(t+1,0):new nt(t,s));return new ys(o,_e.empty(),e)}function ON(r){return new ys(r.readTime,r.key,Lu)}class ys{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ys(Ae.min(),_e.empty(),Lu)}static max(){return new ys(Ae.max(),_e.empty(),Lu)}}function MN(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(r.documentKey,e.documentKey),t!==0?t:Ve(r.largestBatchId,e.largestBatchId))}/**
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
 */const kN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function nl(r){if(r.code!==J.FAILED_PRECONDITION||r.message!==kN)throw r;fe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ne{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&be(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ne((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ne?t:ne.resolve(t)}catch(t){return ne.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ne.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ne.reject(t)}static resolve(e){return new ne((t,s)=>{t(e)})}static reject(e){return new ne((t,s)=>{s(e)})}static waitFor(e){return new ne((t,s)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&t()},m=>s(m))}),h=!0,u===o&&t()})}static or(e){let t=ne.resolve(!1);for(const s of e)t=t.next(o=>o?ne.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new ne((s,o)=>{const u=e.length,h=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;t(e[g]).next(_=>{h[g]=_,++p,p===u&&s(h)},_=>o(_))}})}static doWhile(e,t){return new ne((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function VN(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rl(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Bf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Bf.ce=-1;/**
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
 */const Fg=-1;function Hf(r){return r==null}function yf(r){return r===0&&1/r==-1/0}function LN(r){return typeof r=="number"&&Number.isInteger(r)&&!yf(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Hw="";function UN(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=JE(e)),e=jN(r.get(t),e);return JE(e)}function jN(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case Hw:t+="";break;default:t+=u}}return t}function JE(r){return r+Hw+""}/**
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
 */function eT(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Rs(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Fw(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ft{constructor(e,t){this.comparator=e,this.root=t||en.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,en.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,en.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ph(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ph(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ph(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ph(this.root,e,this.comparator,!0)}}class Ph{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class en{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??en.RED,this.left=o??en.EMPTY,this.right=u??en.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new en(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return en.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return en.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,en.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,en.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw be(43730,{key:this.key,value:this.value});if(this.right.isRed())throw be(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw be(27949);return e+(this.isRed()?0:1)}}en.EMPTY=null,en.RED=!0,en.BLACK=!1;en.EMPTY=new class{constructor(){this.size=0}get key(){throw be(57766)}get value(){throw be(16141)}get color(){throw be(16727)}get left(){throw be(29726)}get right(){throw be(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new en(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Lt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tT(this.data.getIterator())}getIteratorFrom(e){return new tT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Lt(this.comparator);return t.data=e,t}}class tT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mn{constructor(e){this.fields=e,e.sort(tn.comparator)}static empty(){return new Mn([])}unionWith(e){let t=new Lt(tn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ho(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class $w extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new $w("Invalid base64 string: "+u):u}}(e);return new nn(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new nn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const zN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _s(r){if(Qe(!!r,39018),typeof r=="string"){let e=0;const t=zN.exec(r);if(Qe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Et(r.seconds),nanos:Et(r.nanos)}}function Et(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function vs(r){return typeof r=="string"?nn.fromBase64String(r):nn.fromUint8Array(r)}/**
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
 */const Gw="server_timestamp",Qw="__type__",Yw="__previous_value__",Kw="__local_write_time__";function $g(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Qw])==null?void 0:s.stringValue)===Gw}function Ff(r){const e=r.mapValue.fields[Yw];return $g(e)?Ff(e):e}function Uu(r){const e=_s(r.mapValue.fields[Kw].timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class qN{constructor(e,t,s,o,u,h,p,m,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=_}}const _f="(default)";class ju{constructor(e,t){this.projectId=e,this.database=t||_f}static empty(){return new ju("","")}get isDefaultDatabase(){return this.database===_f}isEqual(e){return e instanceof ju&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Xw="__type__",BN="__max__",Vh={mapValue:{}},Ww="__vector__",vf="value";function Es(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?$g(r)?4:FN(r)?9007199254740991:HN(r)?10:11:be(28295,{value:r})}function jr(r,e){if(r===e)return!0;const t=Es(r);if(t!==Es(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Uu(r).isEqual(Uu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=_s(o.timestampValue),p=_s(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return vs(o.bytesValue).isEqual(vs(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return Et(o.geoPointValue.latitude)===Et(u.geoPointValue.latitude)&&Et(o.geoPointValue.longitude)===Et(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Et(o.integerValue)===Et(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=Et(o.doubleValue),p=Et(u.doubleValue);return h===p?yf(h)===yf(p):isNaN(h)&&isNaN(p)}return!1}(r,e);case 9:return Ho(r.arrayValue.values||[],e.arrayValue.values||[],jr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(eT(h)!==eT(p))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(p[m]===void 0||!jr(h[m],p[m])))return!1;return!0}(r,e);default:return be(52216,{left:r})}}function zu(r,e){return(r.values||[]).find(t=>jr(t,e))!==void 0}function Fo(r,e){if(r===e)return 0;const t=Es(r),s=Es(e);if(t!==s)return Ve(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(r.booleanValue,e.booleanValue);case 2:return function(u,h){const p=Et(u.integerValue||u.doubleValue),m=Et(h.integerValue||h.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(r,e);case 3:return nT(r.timestampValue,e.timestampValue);case 4:return nT(Uu(r),Uu(e));case 5:return tg(r.stringValue,e.stringValue);case 6:return function(u,h){const p=vs(u),m=vs(h);return p.compareTo(m)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),m=h.split("/");for(let g=0;g<p.length&&g<m.length;g++){const _=Ve(p[g],m[g]);if(_!==0)return _}return Ve(p.length,m.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const p=Ve(Et(u.latitude),Et(h.latitude));return p!==0?p:Ve(Et(u.longitude),Et(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return rT(r.arrayValue,e.arrayValue);case 10:return function(u,h){var S,N,U,G;const p=u.fields||{},m=h.fields||{},g=(S=p[vf])==null?void 0:S.arrayValue,_=(N=m[vf])==null?void 0:N.arrayValue,w=Ve(((U=g==null?void 0:g.values)==null?void 0:U.length)||0,((G=_==null?void 0:_.values)==null?void 0:G.length)||0);return w!==0?w:rT(g,_)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===Vh.mapValue&&h===Vh.mapValue)return 0;if(u===Vh.mapValue)return 1;if(h===Vh.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=h.fields||{},_=Object.keys(g);m.sort(),_.sort();for(let w=0;w<m.length&&w<_.length;++w){const S=tg(m[w],_[w]);if(S!==0)return S;const N=Fo(p[m[w]],g[_[w]]);if(N!==0)return N}return Ve(m.length,_.length)}(r.mapValue,e.mapValue);default:throw be(23264,{he:t})}}function nT(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ve(r,e);const t=_s(r),s=_s(e),o=Ve(t.seconds,s.seconds);return o!==0?o:Ve(t.nanos,s.nanos)}function rT(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Fo(t[o],s[o]);if(u)return u}return Ve(t.length,s.length)}function $o(r){return ng(r)}function ng(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=_s(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return vs(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return _e.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=ng(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${ng(t.fields[h])}`;return o+"}"}(r.mapValue):be(61005,{value:r})}function Zh(r){switch(Es(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ff(r);return e?16+Zh(e):16;case 5:return 2*r.stringValue.length;case 6:return vs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Zh(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Rs(s.fields,(u,h)=>{o+=u.length+Zh(h)}),o}(r.mapValue);default:throw be(13486,{value:r})}}function iT(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function rg(r){return!!r&&"integerValue"in r}function Gg(r){return!!r&&"arrayValue"in r}function sT(r){return!!r&&"nullValue"in r}function aT(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Jh(r){return!!r&&"mapValue"in r}function HN(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Xw])==null?void 0:s.stringValue)===Ww}function xu(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Rs(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=xu(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xu(r.arrayValue.values[t]);return e}return{...r}}function FN(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===BN}/**
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
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Jh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xu(t)}setAll(e){let t=tn.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=xu(h):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Jh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return jr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Jh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Rs(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new wn(xu(this.value))}}function Zw(r){const e=[];return Rs(r.fields,(t,s)=>{const o=new tn([t]);if(Jh(s)){const u=Zw(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Mn(e)}/**
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
 */class hn{constructor(e,t,s,o,u,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new hn(e,0,Ae.min(),Ae.min(),Ae.min(),wn.empty(),0)}static newFoundDocument(e,t,s,o){return new hn(e,1,t,Ae.min(),s,o,0)}static newNoDocument(e,t){return new hn(e,2,t,Ae.min(),Ae.min(),wn.empty(),0)}static newUnknownDocument(e,t){return new hn(e,3,t,Ae.min(),Ae.min(),wn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof hn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ef{constructor(e,t){this.position=e,this.inclusive=t}}function oT(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=_e.comparator(_e.fromName(h.referenceValue),t.key):s=Fo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function lT(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!jr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class qu{constructor(e,t="asc"){this.field=e,this.dir=t}}function $N(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Jw{}class xt extends Jw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new QN(e,t,s):t==="array-contains"?new XN(e,s):t==="in"?new WN(e,s):t==="not-in"?new ZN(e,s):t==="array-contains-any"?new JN(e,s):new xt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new YN(e,s):new KN(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Fo(t,this.value)):t!==null&&Es(this.value)===Es(t)&&this.matchesComparison(Fo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends Jw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new dr(e,t)}matches(e){return eb(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function eb(r){return r.op==="and"}function tb(r){return GN(r)&&eb(r)}function GN(r){for(const e of r.filters)if(e instanceof dr)return!1;return!0}function ig(r){if(r instanceof xt)return r.field.canonicalString()+r.op.toString()+$o(r.value);if(tb(r))return r.filters.map(e=>ig(e)).join(",");{const e=r.filters.map(t=>ig(t)).join(",");return`${r.op}(${e})`}}function nb(r,e){return r instanceof xt?function(s,o){return o instanceof xt&&s.op===o.op&&s.field.isEqual(o.field)&&jr(s.value,o.value)}(r,e):r instanceof dr?function(s,o){return o instanceof dr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&nb(h,o.filters[p]),!0):!1}(r,e):void be(19439)}function rb(r){return r instanceof xt?function(t){return`${t.field.canonicalString()} ${t.op} ${$o(t.value)}`}(r):r instanceof dr?function(t){return t.op.toString()+" {"+t.getFilters().map(rb).join(" ,")+"}"}(r):"Filter"}class QN extends xt{constructor(e,t,s){super(e,t,s),this.key=_e.fromName(s.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class YN extends xt{constructor(e,t){super(e,"in",t),this.keys=ib("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class KN extends xt{constructor(e,t){super(e,"not-in",t),this.keys=ib("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ib(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>_e.fromName(s.referenceValue))}class XN extends xt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gg(t)&&zu(t.arrayValue,this.value)}}class WN extends xt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zu(this.value.arrayValue,t)}}class ZN extends xt{constructor(e,t){super(e,"not-in",t)}matches(e){if(zu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!zu(this.value.arrayValue,t)}}class JN extends xt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>zu(this.value.arrayValue,s))}}/**
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
 */class eO{constructor(e,t=null,s=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.Te=null}}function uT(r,e=null,t=[],s=[],o=null,u=null,h=null){return new eO(r,e,t,s,o,u,h)}function Qg(r){const e=Re(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>ig(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Hf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>$o(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>$o(s)).join(",")),e.Te=t}return e.Te}function Yg(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!$N(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!nb(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!lT(r.startAt,e.startAt)&&lT(r.endAt,e.endAt)}function sg(r){return _e.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class il{constructor(e,t=null,s=[],o=[],u=null,h="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function tO(r,e,t,s,o,u,h,p){return new il(r,e,t,s,o,u,h,p)}function $f(r){return new il(r)}function cT(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function sb(r){return r.collectionGroup!==null}function Iu(r){const e=Re(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Lt(tn.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new qu(u,s))}),t.has(tn.keyField().canonicalString())||e.Ie.push(new qu(tn.keyField(),s))}return e.Ie}function Pr(r){const e=Re(r);return e.Ee||(e.Ee=nO(e,Iu(r))),e.Ee}function nO(r,e){if(r.limitType==="F")return uT(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new qu(o.field,u)});const t=r.endAt?new Ef(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Ef(r.startAt.position,r.startAt.inclusive):null;return uT(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function ag(r,e){const t=r.filters.concat([e]);return new il(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function og(r,e,t){return new il(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Gf(r,e){return Yg(Pr(r),Pr(e))&&r.limitType===e.limitType}function ab(r){return`${Qg(Pr(r))}|lt:${r.limitType}`}function xo(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>rb(o)).join(", ")}]`),Hf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>$o(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>$o(o)).join(",")),`Target(${s})`}(Pr(r))}; limitType=${r.limitType})`}function Qf(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):_e.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Iu(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,p,m){const g=oT(h,p,m);return h.inclusive?g<=0:g<0}(s.startAt,Iu(s),o)||s.endAt&&!function(h,p,m){const g=oT(h,p,m);return h.inclusive?g>=0:g>0}(s.endAt,Iu(s),o))}(r,e)}function rO(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ob(r){return(e,t)=>{let s=!1;for(const o of Iu(r)){const u=iO(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function iO(r,e,t){const s=r.field.isKeyField()?_e.comparator(e.key,t.key):function(u,h,p){const m=h.data.field(u),g=p.data.field(u);return m!==null&&g!==null?Fo(m,g):be(42886)}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return be(19790,{direction:r.dir})}}/**
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
 */class Da{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return Fw(this.inner)}size(){return this.innerSize}}/**
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
 */const sO=new ft(_e.comparator);function Ri(){return sO}const lb=new ft(_e.comparator);function Tu(...r){let e=lb;for(const t of r)e=e.insert(t.key,t);return e}function ub(r){let e=lb;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function da(){return Cu()}function cb(){return Cu()}function Cu(){return new Da(r=>r.toString(),(r,e)=>r.isEqual(e))}const aO=new ft(_e.comparator),oO=new Lt(_e.comparator);function Le(...r){let e=oO;for(const t of r)e=e.add(t);return e}const lO=new Lt(Ve);function uO(){return lO}/**
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
 */function Kg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yf(e)?"-0":e}}function hb(r){return{integerValue:""+r}}function cO(r,e){return LN(e)?hb(e):Kg(r,e)}/**
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
 */class Yf{constructor(){this._=void 0}}function hO(r,e,t){return r instanceof Bu?function(o,u){const h={fields:{[Qw]:{stringValue:Gw},[Kw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&$g(u)&&(u=Ff(u)),u&&(h.fields[Yw]=u),{mapValue:h}}(t,e):r instanceof Hu?db(r,e):r instanceof Fu?pb(r,e):function(o,u){const h=fb(o,u),p=hT(h)+hT(o.Ae);return rg(h)&&rg(o.Ae)?hb(p):Kg(o.serializer,p)}(r,e)}function fO(r,e,t){return r instanceof Hu?db(r,e):r instanceof Fu?pb(r,e):t}function fb(r,e){return r instanceof Tf?function(s){return rg(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Bu extends Yf{}class Hu extends Yf{constructor(e){super(),this.elements=e}}function db(r,e){const t=mb(e);for(const s of r.elements)t.some(o=>jr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Fu extends Yf{constructor(e){super(),this.elements=e}}function pb(r,e){let t=mb(e);for(const s of r.elements)t=t.filter(o=>!jr(o,s));return{arrayValue:{values:t}}}class Tf extends Yf{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function hT(r){return Et(r.integerValue||r.doubleValue)}function mb(r){return Gg(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class dO{constructor(e,t){this.field=e,this.transform=t}}function pO(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Hu&&o instanceof Hu||s instanceof Fu&&o instanceof Fu?Ho(s.elements,o.elements,jr):s instanceof Tf&&o instanceof Tf?jr(s.Ae,o.Ae):s instanceof Bu&&o instanceof Bu}(r.transform,e.transform)}class mO{constructor(e,t){this.version=e,this.transformResults=t}}class ur{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ur}static exists(e){return new ur(void 0,e)}static updateTime(e){return new ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ef(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Kf{}function gb(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new _b(r.key,ur.none()):new tc(r.key,r.data,ur.none());{const t=r.data,s=wn.empty();let o=new Lt(tn.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new xs(r.key,s,new Mn(o.toArray()),ur.none())}}function gO(r,e,t){r instanceof tc?function(o,u,h){const p=o.value.clone(),m=dT(o.fieldTransforms,u,h.transformResults);p.setAll(m),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(r,e,t):r instanceof xs?function(o,u,h){if(!ef(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=dT(o.fieldTransforms,u,h.transformResults),m=u.data;m.setAll(yb(o)),m.setAll(p),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Du(r,e,t,s){return r instanceof tc?function(u,h,p,m){if(!ef(u.precondition,h))return p;const g=u.value.clone(),_=pT(u.fieldTransforms,m,h);return g.setAll(_),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(r,e,t,s):r instanceof xs?function(u,h,p,m){if(!ef(u.precondition,h))return p;const g=pT(u.fieldTransforms,m,h),_=h.data;return _.setAll(yb(u)),_.setAll(g),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(w=>w.field))}(r,e,t,s):function(u,h,p){return ef(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(r,e,t)}function yO(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=fb(s.transform,o||null);u!=null&&(t===null&&(t=wn.empty()),t.set(s.field,u))}return t||null}function fT(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ho(s,o,(u,h)=>pO(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class tc extends Kf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class xs extends Kf{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function yb(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function dT(r,e,t){const s=new Map;Qe(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,p=e.data.field(u.field);s.set(u.field,fO(h,p,t[o]))}return s}function pT(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,hO(u,h,e))}return s}class _b extends Kf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _O extends Kf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vO{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&gO(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Du(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Du(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=cb();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const m=gb(h,p);m!==null&&s.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(Ae.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&Ho(this.mutations,e.mutations,(t,s)=>fT(t,s))&&Ho(this.baseMutations,e.baseMutations,(t,s)=>fT(t,s))}}class Xg{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Qe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return aO}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Xg(e,t,s,o)}}/**
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
 */class EO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class TO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var At,qe;function wO(r){switch(r){case J.OK:return be(64938);case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return be(15467,{code:r})}}function vb(r){if(r===void 0)return Ai("GRPC error has no .code"),J.UNKNOWN;switch(r){case At.OK:return J.OK;case At.CANCELLED:return J.CANCELLED;case At.UNKNOWN:return J.UNKNOWN;case At.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case At.INTERNAL:return J.INTERNAL;case At.UNAVAILABLE:return J.UNAVAILABLE;case At.UNAUTHENTICATED:return J.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case At.NOT_FOUND:return J.NOT_FOUND;case At.ALREADY_EXISTS:return J.ALREADY_EXISTS;case At.PERMISSION_DENIED:return J.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case At.ABORTED:return J.ABORTED;case At.OUT_OF_RANGE:return J.OUT_OF_RANGE;case At.UNIMPLEMENTED:return J.UNIMPLEMENTED;case At.DATA_LOSS:return J.DATA_LOSS;default:return be(39323,{code:r})}}(qe=At||(At={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bO(){return new TextEncoder}/**
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
 */const SO=new ms([4294967295,4294967295],0);function mT(r){const e=bO().encode(r),t=new Mw;return t.update(e),new Uint8Array(t.digest())}function gT(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ms([t,s],0),new ms([o,u],0)]}class Wg{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new wu(`Invalid padding: ${t}`);if(s<0)throw new wu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new wu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new wu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ms.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(ms.fromNumber(s)));return o.compare(SO)===1&&(o=new ms([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=mT(e),[s,o]=gT(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Wg(u,o,t);return s.forEach(p=>h.insert(p)),h}insert(e){if(this.ge===0)return;const t=mT(e),[s,o]=gT(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class wu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xf{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,nc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Xf(Ae.min(),o,new ft(Ve),Ri(),Le())}}class nc{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new nc(s,t,Le(),Le(),Le())}}/**
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
 */class tf{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Eb{constructor(e,t){this.targetId=e,this.Ce=t}}class Tb{constructor(e,t,s=nn.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class yT{constructor(){this.ve=0,this.Fe=_T(),this.Me=nn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),t=Le(),s=Le();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:be(38017,{changeType:u})}}),new nc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=_T()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Qe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class AO{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ri(),this.Je=Lh(),this.He=Lh(),this.Ye=new ft(Ve)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:be(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,o)=>{this.rt(o)&&t(o)})}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(sg(u))if(s===0){const h=new _e(u.path);this.et(t,h,hn.newNoDocument(h,Ae.min()))}else Qe(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const p=this.ut(e),m=p?this.ct(p,e,h):1;if(m!==0){this.it(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,p;try{h=vs(s).toUint8Array()}catch(m){if(m instanceof $w)return Bo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new Wg(h,o,u)}catch(m){return Bo(m instanceof wu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Ge.ht(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.et(t,u,null),o++)}),o}Tt(e){const t=new Map;this.ze.forEach((u,h)=>{const p=this.ot(h);if(p){if(u.current&&sg(p.target)){const m=new _e(p.target.path);this.It(m).has(h)||this.Et(h,m)||this.et(h,m,hn.newNoDocument(m,e))}u.Be&&(t.set(h,u.ke()),u.qe())}});let s=Le();this.He.forEach((u,h)=>{let p=!0;h.forEachWhile(m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.je.forEach((u,h)=>h.setReadTime(e));const o=new Xf(e,t,this.Ye,this.je,s);return this.je=Ri(),this.Je=Lh(),this.He=Lh(),this.Ye=new ft(Ve),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new yT,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Lt(Ve),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Lt(Ve),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new yT),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Lh(){return new ft(_e.comparator)}function _T(){return new ft(_e.comparator)}const RO={asc:"ASCENDING",desc:"DESCENDING"},xO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IO={and:"AND",or:"OR"};class CO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lg(r,e){return r.useProto3Json||Hf(e)?e:{value:e}}function wf(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wb(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function DO(r,e){return wf(r,e.toTimestamp())}function Vr(r){return Qe(!!r,49232),Ae.fromTimestamp(function(t){const s=_s(t);return new nt(s.seconds,s.nanos)}(r))}function Zg(r,e){return ug(r,e).canonicalString()}function ug(r,e){const t=function(o){return new it(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function bb(r){const e=it.fromString(r);return Qe(Ib(e),10190,{key:e.toString()}),e}function cg(r,e){return Zg(r.databaseId,e.path)}function Cm(r,e){const t=bb(e);if(t.get(1)!==r.databaseId.projectId)throw new he(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new he(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new _e(Ab(t))}function Sb(r,e){return Zg(r.databaseId,e)}function NO(r){const e=bb(r);return e.length===4?it.emptyPath():Ab(e)}function hg(r){return new it(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ab(r){return Qe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function vT(r,e,t){return{name:cg(r,e),fields:t.value.mapValue.fields}}function OO(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:be(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,_){return g.useProto3Json?(Qe(_===void 0||typeof _=="string",58123),nn.fromBase64String(_||"")):(Qe(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),nn.fromUint8Array(_||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&function(g){const _=g.code===void 0?J.UNKNOWN:vb(g.code);return new he(_,g.message||"")}(h);t=new Tb(s,o,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Cm(r,s.document.name),u=Vr(s.document.updateTime),h=s.document.createTime?Vr(s.document.createTime):Ae.min(),p=new wn({mapValue:{fields:s.document.fields}}),m=hn.newFoundDocument(o,u,h,p),g=s.targetIds||[],_=s.removedTargetIds||[];t=new tf(g,_,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Cm(r,s.document),u=s.readTime?Vr(s.readTime):Ae.min(),h=hn.newNoDocument(o,u),p=s.removedTargetIds||[];t=new tf([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Cm(r,s.document),u=s.removedTargetIds||[];t=new tf([],u,o,null)}else{if(!("filter"in e))return be(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new TO(o,u),p=s.targetId;t=new Eb(p,h)}}return t}function MO(r,e){let t;if(e instanceof tc)t={update:vT(r,e.key,e.value)};else if(e instanceof _b)t={delete:cg(r,e.key)};else if(e instanceof xs)t={update:vT(r,e.key,e.data),updateMask:BO(e.fieldMask)};else{if(!(e instanceof _O))return be(16599,{Vt:e.type});t={verify:cg(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof Bu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Hu)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Fu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Tf)return{fieldPath:h.field.canonicalString(),increment:p.Ae};throw be(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:DO(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:be(27497)}(r,e.precondition)),t}function kO(r,e){return r&&r.length>0?(Qe(e!==void 0,14353),r.map(t=>function(o,u){let h=o.updateTime?Vr(o.updateTime):Vr(u);return h.isEqual(Ae.min())&&(h=Vr(u)),new mO(h,o.transformResults||[])}(t,e))):[]}function PO(r,e){return{documents:[Sb(r,e.path)]}}function VO(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Sb(r,o);const u=function(g){if(g.length!==0)return xb(dr.create(g,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(g){if(g.length!==0)return g.map(_=>function(S){return{field:Io(S.field),direction:jO(S.dir)}}(_))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=lg(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:t,parent:o}}function LO(r){let e=NO(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Qe(s===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let u=[];t.where&&(u=function(w){const S=Rb(w);return S instanceof dr&&tb(S)?S.getFilters():[S]}(t.where));let h=[];t.orderBy&&(h=function(w){return w.map(S=>function(U){return new qu(Co(U.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(S))}(t.orderBy));let p=null;t.limit&&(p=function(w){let S;return S=typeof w=="object"?w.value:w,Hf(S)?null:S}(t.limit));let m=null;t.startAt&&(m=function(w){const S=!!w.before,N=w.values||[];return new Ef(N,S)}(t.startAt));let g=null;return t.endAt&&(g=function(w){const S=!w.before,N=w.values||[];return new Ef(N,S)}(t.endAt)),tO(e,o,h,u,p,"F",m,g)}function UO(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Rb(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Co(t.unaryFilter.field);return xt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Co(t.unaryFilter.field);return xt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Co(t.unaryFilter.field);return xt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Co(t.unaryFilter.field);return xt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return be(61313);default:return be(60726)}}(r):r.fieldFilter!==void 0?function(t){return xt.create(Co(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return be(58110);default:return be(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return dr.create(t.compositeFilter.filters.map(s=>Rb(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return be(1026)}}(t.compositeFilter.op))}(r):be(30097,{filter:r})}function jO(r){return RO[r]}function zO(r){return xO[r]}function qO(r){return IO[r]}function Io(r){return{fieldPath:r.canonicalString()}}function Co(r){return tn.fromServerFormat(r.fieldPath)}function xb(r){return r instanceof xt?function(t){if(t.op==="=="){if(aT(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NAN"}};if(sT(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(aT(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NOT_NAN"}};if(sT(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Io(t.field),op:zO(t.op),value:t.value}}}(r):r instanceof dr?function(t){const s=t.getFilters().map(o=>xb(o));return s.length===1?s[0]:{compositeFilter:{op:qO(t.op),filters:s}}}(r):be(54877,{filter:r})}function BO(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ib(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class cs{constructor(e,t,s,o,u=Ae.min(),h=Ae.min(),p=nn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class HO{constructor(e){this.yt=e}}function FO(r){const e=LO({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?og(e,e.limit,"L"):e}/**
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
 */class $O{constructor(){this.Cn=new GO}addToCollectionParentIndex(e,t){return this.Cn.add(t),ne.resolve()}getCollectionParents(e,t){return ne.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ne.resolve()}deleteFieldIndex(e,t){return ne.resolve()}deleteAllFieldIndexes(e){return ne.resolve()}createTargetIndexes(e,t){return ne.resolve()}getDocumentsMatchingTarget(e,t){return ne.resolve(null)}getIndexType(e,t){return ne.resolve(0)}getFieldIndexes(e,t){return ne.resolve([])}getNextCollectionGroupToUpdate(e){return ne.resolve(null)}getMinOffset(e,t){return ne.resolve(ys.min())}getMinOffsetFromCollectionGroup(e,t){return ne.resolve(ys.min())}updateCollectionGroup(e,t,s){return ne.resolve()}updateIndexEntries(e,t){return ne.resolve()}}class GO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Lt(it.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Lt(it.comparator)).toArray()}}/**
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
 */const ET={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Cb=41943040;class Tn{static withCacheSize(e){return new Tn(e,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Tn.DEFAULT_COLLECTION_PERCENTILE=10,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tn.DEFAULT=new Tn(Cb,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tn.DISABLED=new Tn(-1,0,0);/**
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
 */class Go{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Go(0)}static cr(){return new Go(-1)}}/**
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
 */const TT="LruGarbageCollector",QO=1048576;function wT([r,e],[t,s]){const o=Ve(r,t);return o===0?Ve(e,s):o}class YO{constructor(e){this.Ir=e,this.buffer=new Lt(wT),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();wT(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class KO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){fe(TT,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rl(t)?fe(TT,"Ignoring IndexedDB error during garbage collection: ",t):await nl(t)}await this.Vr(3e5)})}}class XO{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return ne.resolve(Bf.ce);const s=new YO(t);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),ne.resolve(ET)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ET):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,p,m,g;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,h=Date.now(),this.nthSequenceNumber(e,o))).next(w=>(s=w,p=Date.now(),this.removeTargets(e,s,t))).next(w=>(u=w,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(w=>(g=Date.now(),Ro()<=Pe.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-_}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${w} documents in `+(g-m)+`ms
Total Duration: ${g-_}ms`),ne.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w})))}}function WO(r,e){return new XO(r,e)}/**
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
 */class ZO{constructor(){this.changes=new Da(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,hn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ne.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class e4{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Du(s.mutation,o,Mn.empty(),nt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const o=da();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Tu();return u.forEach((p,m)=>{h=h.insert(p,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=da();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,o){let u=Ri();const h=Cu(),p=function(){return Cu()}();return t.forEach((m,g)=>{const _=s.get(g.key);o.has(g.key)&&(_===void 0||_.mutation instanceof xs)?u=u.insert(g.key,g):_!==void 0?(h.set(g.key,_.mutation.getFieldMask()),Du(_.mutation,g,_.mutation.getFieldMask(),nt.now())):h.set(g.key,Mn.empty())}),this.recalculateAndSaveOverlays(e,u).next(m=>(m.forEach((g,_)=>h.set(g,_)),t.forEach((g,_)=>p.set(g,new JO(_,h.get(g)??null))),p))}recalculateAndSaveOverlays(e,t){const s=Cu();let o=new ft((h,p)=>h-p),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let _=s.get(m)||Mn.empty();_=p.applyToLocalView(g,_),s.set(m,_);const w=(o.get(p.batchId)||Le()).add(m);o=o.insert(p.batchId,w)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,_=m.value,w=cb();_.forEach(S=>{if(!u.has(S)){const N=gb(t.get(S),s.get(S));N!==null&&w.set(S,N),u=u.add(S)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,w))}return ne.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return _e.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sb(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):ne.resolve(da());let p=Lu,m=u;return h.next(g=>ne.forEach(g,(_,w)=>(p<w.largestBatchId&&(p=w.largestBatchId),u.get(_)?ne.resolve():this.remoteDocumentCache.getEntry(e,_).next(S=>{m=m.insert(_,S)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,m,g,Le())).next(_=>({batchId:p,changes:ub(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(s=>{let o=Tu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Tu();return this.indexManager.getCollectionParents(e,u).next(p=>ne.forEach(p,m=>{const g=function(w,S){return new il(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(_=>{_.forEach((w,S)=>{h=h.insert(w,S)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((m,g)=>{const _=g.getKey();h.get(_)===null&&(h=h.insert(_,hn.newInvalidDocument(_)))});let p=Tu();return h.forEach((m,g)=>{const _=u.get(m);_!==void 0&&Du(_.mutation,g,Mn.empty(),nt.now()),Qf(t,g)&&(p=p.insert(m,g))}),p})}}/**
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
 */class t4{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return ne.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Vr(o.createTime)}}(t)),ne.resolve()}getNamedQuery(e,t){return ne.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(o){return{name:o.name,query:FO(o.bundledQuery),readTime:Vr(o.readTime)}}(t)),ne.resolve()}}/**
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
 */class n4{constructor(){this.overlays=new ft(_e.comparator),this.qr=new Map}getOverlay(e,t){return ne.resolve(this.overlays.get(t))}getOverlays(e,t){const s=da();return ne.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),ne.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),ne.resolve()}getOverlaysForCollection(e,t,s){const o=da(),u=t.length+1,h=new _e(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>s&&o.set(m.getKey(),m)}return ne.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new ft((g,_)=>g-_);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let _=u.get(g.largestBatchId);_===null&&(_=da(),u=u.insert(g.largestBatchId,_)),_.set(g.getKey(),g)}}const p=da(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,_)=>p.set(g,_)),!(p.size()>=o)););return ne.resolve(p)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new EO(t,s));let u=this.qr.get(t);u===void 0&&(u=Le(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class r4{constructor(){this.sessionToken=nn.EMPTY_BYTE_STRING}getSessionToken(e){return ne.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ne.resolve()}}/**
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
 */class Jg{constructor(){this.Qr=new Lt(Ft.$r),this.Ur=new Lt(Ft.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Ft(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new Ft(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new _e(new it([])),s=new Ft(t,e),o=new Ft(t,e+1),u=[];return this.Ur.forEachInRange([s,o],h=>{this.Gr(h),u.push(h.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new _e(new it([])),s=new Ft(t,e),o=new Ft(t,e+1);let u=Le();return this.Ur.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Ft(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ft{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return _e.comparator(e.key,t.key)||Ve(e.Yr,t.Yr)}static Kr(e,t){return Ve(e.Yr,t.Yr)||_e.comparator(e.key,t.key)}}/**
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
 */class i4{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Lt(Ft.$r)}checkEmpty(e){return ne.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new vO(u,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Zr=this.Zr.add(new Ft(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return ne.resolve(h)}lookupMutationBatch(e,t){return ne.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return ne.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return ne.resolve(this.mutationQueue.length===0?Fg:this.tr-1)}getAllMutationBatches(e){return ne.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ft(t,0),o=new Ft(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],h=>{const p=this.Xr(h.Yr);u.push(p)}),ne.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Lt(Ve);return t.forEach(o=>{const u=new Ft(o,0),h=new Ft(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],p=>{s=s.add(p.Yr)})}),ne.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;_e.isDocumentKey(u)||(u=u.child(""));const h=new Ft(new _e(u),0);let p=new Lt(Ve);return this.Zr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Yr)),!0)},h),ne.resolve(this.ti(p))}ti(e){const t=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Qe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ne.forEach(t.mutations,o=>{const u=new Ft(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new Ft(t,0),o=this.Zr.firstAfterOrEqual(s);return ne.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ne.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class s4{constructor(e){this.ri=e,this.docs=function(){return new ft(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ne.resolve(s?s.document.mutableCopy():hn.newInvalidDocument(t))}getEntries(e,t){let s=Ri();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():hn.newInvalidDocument(o))}),ne.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ri();const h=t.path,p=new _e(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:_}}=m.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||MN(ON(_),s)<=0||(o.has(_.key)||Qf(t,_))&&(u=u.insert(_.key,_.mutableCopy()))}return ne.resolve(u)}getAllFromCollectionGroup(e,t,s,o){be(9500)}ii(e,t){return ne.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new a4(this)}getSize(e){return ne.resolve(this.size)}}class a4 extends ZO{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),ne.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class o4{constructor(e){this.persistence=e,this.si=new Da(t=>Qg(t),Yg),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new Jg,this.targetCount=0,this.ai=Go.ur()}forEachTarget(e,t){return this.si.forEach((s,o)=>t(o)),ne.resolve()}getLastRemoteSnapshotVersion(e){return ne.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ne.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ne.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),ne.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Go(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,ne.resolve()}updateTargetData(e,t){return this.Pr(t),ne.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,ne.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),ne.waitFor(u).next(()=>o)}getTargetCount(e){return ne.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return ne.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),ne.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),ne.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),ne.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return ne.resolve(s)}containsKey(e,t){return ne.resolve(this._i.containsKey(t))}}/**
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
 */class Db{constructor(e,t){this.ui={},this.overlays={},this.ci=new Bf(0),this.li=!1,this.li=!0,this.hi=new r4,this.referenceDelegate=e(this),this.Pi=new o4(this),this.indexManager=new $O,this.remoteDocumentCache=function(o){return new s4(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new HO(t),this.Ii=new t4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new n4,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new i4(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){fe("MemoryPersistence","Starting transaction:",e);const o=new l4(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,t){return ne.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class l4 extends PN{constructor(e){super(),this.currentSequenceNumber=e}}class ey{constructor(e){this.persistence=e,this.Ri=new Jg,this.Vi=null}static mi(e){return new ey(e)}get fi(){if(this.Vi)return this.Vi;throw be(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),ne.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),ne.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),ne.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ne.forEach(this.fi,s=>{const o=_e.fromPath(s);return this.gi(e,o).next(u=>{u||t.removeEntry(o,Ae.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return ne.or([()=>ne.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class bf{constructor(e,t){this.persistence=e,this.pi=new Da(s=>UN(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=WO(this,t)}static mi(e,t){return new bf(e,t)}Ei(){}di(e){return ne.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return ne.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?ne.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,h=>this.br(e,h,t).next(p=>{p||(s++,u.removeEntry(h,Ae.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),ne.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ne.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ne.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),ne.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zh(e.data.value)),t}br(e,t,s){return ne.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return ne.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ty{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Le(),o=Le();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new ty(e,t.fromCache,s,o)}}/**
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
 */class u4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class c4{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return UI()?8:VN(fn())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ws(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new u4;return this.Ss(e,t,h).next(p=>{if(u.result=p,this.Vs)return this.bs(e,t,h,p.size)})}).next(()=>u.result)}bs(e,t,s,o){return s.documentReadCount<this.fs?(Ro()<=Pe.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",xo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ne.resolve()):(Ro()<=Pe.DEBUG&&fe("QueryEngine","Query:",xo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Ro()<=Pe.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",xo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pr(t))):ne.resolve())}ys(e,t){if(cT(t))return ne.resolve(null);let s=Pr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=og(t,null,"F"),s=Pr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Le(...u);return this.ps.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(m=>{const g=this.Ds(t,p);return this.Cs(t,g,h,m.readTime)?this.ys(e,og(t,null,"F")):this.vs(e,g,t,m)}))})))}ws(e,t,s,o){return cT(t)||o.isEqual(Ae.min())?ne.resolve(null):this.ps.getDocuments(e,s).next(u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?ne.resolve(null):(Ro()<=Pe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),xo(t)),this.vs(e,h,t,NN(o,Lu)).next(p=>p))})}Ds(e,t){let s=new Lt(ob(e));return t.forEach((o,u)=>{Qf(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return Ro()<=Pe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",xo(t)),this.ps.getDocumentsMatchingQuery(e,t,ys.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const ny="LocalStore",h4=3e8;class f4{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new ft(Ve),this.xs=new Da(u=>Qg(u),Yg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new e4(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function d4(r,e,t,s){return new f4(r,e,t,s)}async function Nb(r,e){const t=Re(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let m=Le();for(const g of o){h.push(g.batchId);for(const _ of g.mutations)m=m.add(_.key)}for(const g of u){p.push(g.batchId);for(const _ of g.mutations)m=m.add(_.key)}return t.localDocuments.getDocuments(s,m).next(g=>({Ls:g,removedBatchIds:h,addedBatchIds:p}))})})}function p4(r,e){const t=Re(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return function(p,m,g,_){const w=g.batch,S=w.keys();let N=ne.resolve();return S.forEach(U=>{N=N.next(()=>_.getEntry(m,U)).next(G=>{const B=g.docVersions.get(U);Qe(B!==null,48541),G.version.compareTo(B)<0&&(w.applyToRemoteDocument(G,g),G.isValidDocument()&&(G.setReadTime(g.commitVersion),_.addEntry(G)))})}),N.next(()=>p.mutationQueue.removeMutationBatch(m,w))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let m=Le();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Ob(r){const e=Re(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function m4(r,e){const t=Re(r),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const p=[];e.targetChanges.forEach((_,w)=>{const S=o.get(w);if(!S)return;p.push(t.Pi.removeMatchingKeys(u,_.removedDocuments,w).next(()=>t.Pi.addMatchingKeys(u,_.addedDocuments,w)));let N=S.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(w)!==null?N=N.withResumeToken(nn.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):_.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(_.resumeToken,s)),o=o.insert(w,N),function(G,B,ee){return G.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=h4?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0}(S,N,_)&&p.push(t.Pi.updateTargetData(u,N))});let m=Ri(),g=Le();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,_))}),p.push(g4(u,h,e.documentUpdates).next(_=>{m=_.ks,g=_.qs})),!s.isEqual(Ae.min())){const _=t.Pi.getLastRemoteSnapshotVersion(u).next(w=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(_)}return ne.waitFor(p).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,m,g)).next(()=>m)}).then(u=>(t.Ms=o,u))}function g4(r,e,t){let s=Le(),o=Le();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=Ri();return t.forEach((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(Ae.min())?(e.removeEntry(p,m.readTime),h=h.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),h=h.insert(p,m)):fe(ny,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)}),{ks:h,qs:o}})}function y4(r,e){const t=Re(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Fg),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function _4(r,e){const t=Re(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Pi.getTargetData(s,e).next(u=>u?(o=u,ne.resolve(o)):t.Pi.allocateTargetId(s).next(h=>(o=new cs(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function fg(r,e,t){const s=Re(r),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!rl(h))throw h;fe(ny,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function bT(r,e,t){const s=Re(r);let o=Ae.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",h=>function(m,g,_){const w=Re(m),S=w.xs.get(_);return S!==void 0?ne.resolve(w.Ms.get(S)):w.Pi.getTargetData(g,_)}(s,h,Pr(e)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,p.targetId).next(m=>{u=m})}).next(()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Ae.min(),t?u:Le())).next(p=>(v4(s,rO(e),p),{documents:p,Qs:u})))}function v4(r,e,t){let s=r.Os.get(e)||Ae.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Os.set(e,s)}class ST{constructor(){this.activeTargetIds=uO()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E4{constructor(){this.Mo=new ST,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ST,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class T4{Oo(e){}shutdown(){}}/**
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
 */const AT="ConnectivityMonitor";class RT{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){fe(AT,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){fe(AT,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Uh=null;function dg(){return Uh===null?Uh=function(){return 268435456+Math.round(2147483648*Math.random())}():Uh++,"0x"+Uh.toString(16)}/**
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
 */const Dm="RestConnection",w4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class b4{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===_f?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=dg(),p=this.zo(e,t.toUriEncodedString());fe(Dm,`Sending RPC '${e}' ${h}:`,p,s);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:g}=new URL(p),_=Zo(g);return this.Jo(e,p,m,s,_).then(w=>(fe(Dm,`Received RPC '${e}' ${h}: `,w),w),w=>{throw Bo(Dm,`RPC '${e}' ${h} failed with error: `,w,"url: ",p,"request:",s),w})}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,t){const s=w4[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class S4{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ln="WebChannelConnection";class A4 extends b4{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=dg();return new Promise((p,m)=>{const g=new kw;g.setWithCredentials(!0),g.listenOnce(Pw.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Wh.NO_ERROR:const w=g.getResponseJson();fe(ln,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(w)),p(w);break;case Wh.TIMEOUT:fe(ln,`RPC '${e}' ${h} timed out`),m(new he(J.DEADLINE_EXCEEDED,"Request time out"));break;case Wh.HTTP_ERROR:const S=g.getStatus();if(fe(ln,`RPC '${e}' ${h} failed with status:`,S,"response text:",g.getResponseText()),S>0){let N=g.getResponseJson();Array.isArray(N)&&(N=N[0]);const U=N==null?void 0:N.error;if(U&&U.status&&U.message){const G=function(ee){const W=ee.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(W)>=0?W:J.UNKNOWN}(U.status);m(new he(G,U.message))}else m(new he(J.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new he(J.UNAVAILABLE,"Connection failed."));break;default:be(9055,{l_:e,streamId:h,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{fe(ln,`RPC '${e}' ${h} completed.`)}});const _=JSON.stringify(o);fe(ln,`RPC '${e}' ${h} sending request:`,o),g.send(t,"POST",_,s,15)})}T_(e,t,s){const o=dg(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Uw(),p=Lw(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=u.join("");fe(ln,`Creating RPC '${e}' stream ${o}: ${_}`,m);const w=h.createWebChannel(_,m);this.I_(w);let S=!1,N=!1;const U=new S4({Yo:B=>{N?fe(ln,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(S||(fe(ln,`Opening RPC '${e}' stream ${o} transport.`),w.open(),S=!0),fe(ln,`RPC '${e}' stream ${o} sending:`,B),w.send(B))},Zo:()=>w.close()}),G=(B,ee,W)=>{B.listen(ee,ie=>{try{W(ie)}catch(ce){setTimeout(()=>{throw ce},0)}})};return G(w,Eu.EventType.OPEN,()=>{N||(fe(ln,`RPC '${e}' stream ${o} transport opened.`),U.o_())}),G(w,Eu.EventType.CLOSE,()=>{N||(N=!0,fe(ln,`RPC '${e}' stream ${o} transport closed`),U.a_(),this.E_(w))}),G(w,Eu.EventType.ERROR,B=>{N||(N=!0,Bo(ln,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),U.a_(new he(J.UNAVAILABLE,"The operation could not be completed")))}),G(w,Eu.EventType.MESSAGE,B=>{var ee;if(!N){const W=B.data[0];Qe(!!W,16349);const ie=W,ce=(ie==null?void 0:ie.error)||((ee=ie[0])==null?void 0:ee.error);if(ce){fe(ln,`RPC '${e}' stream ${o} received error:`,ce);const ue=ce.status;let de=function(x){const k=At[x];if(k!==void 0)return vb(k)}(ue),C=ce.message;de===void 0&&(de=J.INTERNAL,C="Unknown error status: "+ue+" with message "+ce.message),N=!0,U.a_(new he(de,C)),w.close()}else fe(ln,`RPC '${e}' stream ${o} received:`,W),U.u_(W)}}),G(p,Vw.STAT_EVENT,B=>{B.stat===eg.PROXY?fe(ln,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===eg.NOPROXY&&fe(ln,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{U.__()},0),U}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Nm(){return typeof document<"u"?document:null}/**
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
 */function Wf(r){return new CO(r,!0)}/**
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
 */class Mb{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const xT="PersistentStream";class kb{constructor(e,t,s,o,u,h,p,m){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Mb(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(Ai(t.toString()),Ai("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===t&&this.G_(s,o)},s=>{e(()=>{const o=new he(J.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return fe(xT,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(fe(xT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R4 extends kb{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=OO(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ae.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ae.min():h.readTime?Vr(h.readTime):Ae.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=hg(this.serializer),t.addTarget=function(u,h){let p;const m=h.target;if(p=sg(m)?{documents:PO(u,m)}:{query:VO(u,m).ft},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=wb(u,h.resumeToken);const g=lg(u,h.expectedCount);g!==null&&(p.expectedCount=g)}else if(h.snapshotVersion.compareTo(Ae.min())>0){p.readTime=wf(u,h.snapshotVersion.toTimestamp());const g=lg(u,h.expectedCount);g!==null&&(p.expectedCount=g)}return p}(this.serializer,e);const s=UO(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=hg(this.serializer),t.removeTarget=e,this.q_(t)}}class x4 extends kb{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=kO(e.writeResults,e.commitTime),s=Vr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=hg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>MO(this.serializer,s))};this.q_(t)}}/**
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
 */class I4{}class C4 extends I4{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new he(J.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Go(e,ug(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(J.UNKNOWN,u.toString())})}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Ho(e,ug(t,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new he(J.UNKNOWN,h.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class D4{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ai(t),this.aa=!1):fe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Aa="RemoteStore";class N4{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(h=>{s.enqueueAndForget(async()=>{Na(this)&&(fe(Aa,"Restarting streams for network reachability change."),await async function(m){const g=Re(m);g.Ea.add(4),await rc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Zf(g)}(this))})}),this.Ra=new D4(s,o)}}async function Zf(r){if(Na(r))for(const e of r.da)await e(!0)}async function rc(r){for(const e of r.da)await e(!1)}function Pb(r,e){const t=Re(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ay(t)?sy(t):sl(t).O_()&&iy(t,e))}function ry(r,e){const t=Re(r),s=sl(t);t.Ia.delete(e),s.O_()&&Vb(t,e),t.Ia.size===0&&(s.O_()?s.L_():Na(t)&&t.Ra.set("Unknown"))}function iy(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}sl(r).Y_(e)}function Vb(r,e){r.Va.Ue(e),sl(r).Z_(e)}function sy(r){r.Va=new AO({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),sl(r).start(),r.Ra.ua()}function ay(r){return Na(r)&&!sl(r).x_()&&r.Ia.size>0}function Na(r){return Re(r).Ea.size===0}function Lb(r){r.Va=void 0}async function O4(r){r.Ra.set("Online")}async function M4(r){r.Ia.forEach((e,t)=>{iy(r,e)})}async function k4(r,e){Lb(r),ay(r)?(r.Ra.ha(e),sy(r)):r.Ra.set("Unknown")}async function P4(r,e,t){if(r.Ra.set("Online"),e instanceof Tb&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ia.delete(p),o.Va.removeTarget(p))}(r,e)}catch(s){fe(Aa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Sf(r,s)}else if(e instanceof tf?r.Va.Ze(e):e instanceof Eb?r.Va.st(e):r.Va.tt(e),!t.isEqual(Ae.min()))try{const s=await Ob(r.localStore);t.compareTo(s)>=0&&await function(u,h){const p=u.Va.Tt(h);return p.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const _=u.Ia.get(g);_&&u.Ia.set(g,_.withResumeToken(m.resumeToken,h))}}),p.targetMismatches.forEach((m,g)=>{const _=u.Ia.get(m);if(!_)return;u.Ia.set(m,_.withResumeToken(nn.EMPTY_BYTE_STRING,_.snapshotVersion)),Vb(u,m);const w=new cs(_.target,m,g,_.sequenceNumber);iy(u,w)}),u.remoteSyncer.applyRemoteEvent(p)}(r,t)}catch(s){fe(Aa,"Failed to raise snapshot:",s),await Sf(r,s)}}async function Sf(r,e,t){if(!rl(e))throw e;r.Ea.add(1),await rc(r),r.Ra.set("Offline"),t||(t=()=>Ob(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{fe(Aa,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Zf(r)})}function Ub(r,e){return e().catch(t=>Sf(r,t,e))}async function Jf(r){const e=Re(r),t=Ts(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Fg;for(;V4(e);)try{const o=await y4(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,L4(e,o)}catch(o){await Sf(e,o)}jb(e)&&zb(e)}function V4(r){return Na(r)&&r.Ta.length<10}function L4(r,e){r.Ta.push(e);const t=Ts(r);t.O_()&&t.X_&&t.ea(e.mutations)}function jb(r){return Na(r)&&!Ts(r).x_()&&r.Ta.length>0}function zb(r){Ts(r).start()}async function U4(r){Ts(r).ra()}async function j4(r){const e=Ts(r);for(const t of r.Ta)e.ea(t.mutations)}async function z4(r,e,t){const s=r.Ta.shift(),o=Xg.from(s,e,t);await Ub(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Jf(r)}async function q4(r,e){e&&Ts(r).X_&&await async function(s,o){if(function(h){return wO(h)&&h!==J.ABORTED}(o.code)){const u=s.Ta.shift();Ts(s).B_(),await Ub(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Jf(s)}}(r,e),jb(r)&&zb(r)}async function IT(r,e){const t=Re(r);t.asyncQueue.verifyOperationInProgress(),fe(Aa,"RemoteStore received new credentials");const s=Na(t);t.Ea.add(3),await rc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Zf(t)}async function B4(r,e){const t=Re(r);e?(t.Ea.delete(2),await Zf(t)):e||(t.Ea.add(2),await rc(t),t.Ra.set("Unknown"))}function sl(r){return r.ma||(r.ma=function(t,s,o){const u=Re(t);return u.sa(),new R4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:O4.bind(null,r),t_:M4.bind(null,r),r_:k4.bind(null,r),H_:P4.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),ay(r)?sy(r):r.Ra.set("Unknown")):(await r.ma.stop(),Lb(r))})),r.ma}function Ts(r){return r.fa||(r.fa=function(t,s,o){const u=Re(t);return u.sa(),new x4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:U4.bind(null,r),r_:q4.bind(null,r),ta:j4.bind(null,r),na:z4.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await Jf(r)):(await r.fa.stop(),r.Ta.length>0&&(fe(Aa,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class oy{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,p=new oy(e,t,h,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ly(r,e){if(Ai("AsyncQueue",`${e}: ${r}`),rl(r))return new he(J.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Po{static emptySet(e){return new Po(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||_e.comparator(t.key,s.key):(t,s)=>_e.comparator(t.key,s.key),this.keyedMap=Tu(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Po)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Po;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class CT{constructor(){this.ga=new ft(_e.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):be(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class Qo{constructor(e,t,s,o,u,h,p,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(p=>{h.push({type:0,doc:p})}),new Qo(e,t,Po.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class H4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class F4{constructor(){this.queries=DT(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Re(t),u=o.queries;o.queries=DT(),u.forEach((h,p)=>{for(const m of p.Sa)m.onError(s)})})(this,new he(J.ABORTED,"Firestore shutting down"))}}function DT(){return new Da(r=>ab(r),Gf)}async function uy(r,e){const t=Re(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new H4,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=ly(h,`Initialization of query '${xo(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&hy(t)}async function cy(r,e){const t=Re(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function $4(r,e){const t=Re(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const p of h.Sa)p.Fa(o)&&(s=!0);h.wa=o}}s&&hy(t)}function G4(r,e,t){const s=Re(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function hy(r){r.Ca.forEach(e=>{e.next()})}var pg,NT;(NT=pg||(pg={})).Ma="default",NT.Cache="cache";class fy{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Qo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Qo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==pg.Cache}}/**
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
 */class qb{constructor(e){this.key=e}}class Bb{constructor(e){this.key=e}}class Q4{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Le(),this.mutatedKeys=Le(),this.eu=ob(e),this.tu=new Po(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new CT,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((_,w)=>{const S=o.get(_),N=Qf(this.query,w)?w:null,U=!!S&&this.mutatedKeys.has(S.key),G=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let B=!1;S&&N?S.data.isEqual(N.data)?U!==G&&(s.track({type:3,doc:N}),B=!0):this.su(S,N)||(s.track({type:2,doc:N}),B=!0,(m&&this.eu(N,m)>0||g&&this.eu(N,g)<0)&&(p=!0)):!S&&N?(s.track({type:0,doc:N}),B=!0):S&&!N&&(s.track({type:1,doc:S}),B=!0,(m||g)&&(p=!0)),B&&(N?(h=h.add(N),u=G?u.add(_):u.delete(_)):(h=h.delete(_),u=u.delete(_)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const _=this.query.limitType==="F"?h.last():h.first();h=h.delete(_.key),u=u.delete(_.key),s.track({type:1,doc:_})}return{tu:h,iu:s,Cs:p,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort((_,w)=>function(N,U){const G=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be(20277,{Rt:B})}};return G(N)-G(U)}(_.type,w.type)||this.eu(_.doc,w.doc)),this.ou(s),o=o??!1;const p=t&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,g=m!==this.Za;return this.Za=m,h.length!==0||g?{snapshot:new Qo(this.query,e.tu,u,h,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new CT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Le(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new Bb(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new qb(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=Le();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Qo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const dy="SyncEngine";class Y4{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class K4{constructor(e){this.key=e,this.hu=!1}}class X4{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Da(p=>ab(p),Gf),this.Iu=new Map,this.Eu=new Set,this.du=new ft(_e.comparator),this.Au=new Map,this.Ru=new Jg,this.Vu={},this.mu=new Map,this.fu=Go.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function W4(r,e,t=!0){const s=Yb(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Hb(s,e,t,!0),o}async function Z4(r,e){const t=Yb(r);await Hb(t,e,!0,!1)}async function Hb(r,e,t,s){const o=await _4(r.localStore,Pr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let p;return s&&(p=await J4(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Pb(r.remoteStore,o),p}async function J4(r,e,t,s,o){r.pu=(w,S,N)=>async function(G,B,ee,W){let ie=B.view.ru(ee);ie.Cs&&(ie=await bT(G.localStore,B.query,!1).then(({documents:C})=>B.view.ru(C,ie)));const ce=W&&W.targetChanges.get(B.targetId),ue=W&&W.targetMismatches.get(B.targetId)!=null,de=B.view.applyChanges(ie,G.isPrimaryClient,ce,ue);return MT(G,B.targetId,de.au),de.snapshot}(r,w,S,N);const u=await bT(r.localStore,e,!0),h=new Q4(e,u.Qs),p=h.ru(u.documents),m=nc.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),g=h.applyChanges(p,r.isPrimaryClient,m);MT(r,t,g.au);const _=new Y4(e,t,h);return r.Tu.set(e,_),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),g.snapshot}async function eM(r,e,t){const s=Re(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(h=>!Gf(h,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await fg(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&ry(s.remoteStore,o.targetId),mg(s,o.targetId)}).catch(nl)):(mg(s,o.targetId),await fg(s.localStore,o.targetId,!0))}async function tM(r,e){const t=Re(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ry(t.remoteStore,s.targetId))}async function nM(r,e,t){const s=uM(r);try{const o=await function(h,p){const m=Re(h),g=nt.now(),_=p.reduce((N,U)=>N.add(U.key),Le());let w,S;return m.persistence.runTransaction("Locally write mutations","readwrite",N=>{let U=Ri(),G=Le();return m.Ns.getEntries(N,_).next(B=>{U=B,U.forEach((ee,W)=>{W.isValidDocument()||(G=G.add(ee))})}).next(()=>m.localDocuments.getOverlayedDocuments(N,U)).next(B=>{w=B;const ee=[];for(const W of p){const ie=yO(W,w.get(W.key).overlayedDocument);ie!=null&&ee.push(new xs(W.key,ie,Zw(ie.value.mapValue),ur.exists(!0)))}return m.mutationQueue.addMutationBatch(N,g,ee,p)}).next(B=>{S=B;const ee=B.applyToLocalDocumentSet(w,G);return m.documentOverlayCache.saveOverlays(N,B.batchId,ee)})}).then(()=>({batchId:S.batchId,changes:ub(w)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,m){let g=h.Vu[h.currentUser.toKey()];g||(g=new ft(Ve)),g=g.insert(p,m),h.Vu[h.currentUser.toKey()]=g}(s,o.batchId,t),await ic(s,o.changes),await Jf(s.remoteStore)}catch(o){const u=ly(o,"Failed to persist write");t.reject(u)}}async function Fb(r,e){const t=Re(r);try{const s=await m4(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Au.get(u);h&&(Qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Qe(h.hu,14607):o.removedDocuments.size>0&&(Qe(h.hu,42227),h.hu=!1))}),await ic(t,s,e)}catch(s){await nl(s)}}function OT(r,e,t){const s=Re(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach((u,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const m=Re(h);m.onlineState=p;let g=!1;m.queries.forEach((_,w)=>{for(const S of w.Sa)S.va(p)&&(g=!0)}),g&&hy(m)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function rM(r,e,t){const s=Re(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new ft(_e.comparator);h=h.insert(u,hn.newNoDocument(u,Ae.min()));const p=Le().add(u),m=new Xf(Ae.min(),new Map,new ft(Ve),h,p);await Fb(s,m),s.du=s.du.remove(u),s.Au.delete(e),py(s)}else await fg(s.localStore,e,!1).then(()=>mg(s,e,t)).catch(nl)}async function iM(r,e){const t=Re(r),s=e.batch.batchId;try{const o=await p4(t.localStore,e);Gb(t,s,null),$b(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ic(t,o)}catch(o){await nl(o)}}async function sM(r,e,t){const s=Re(r);try{const o=await function(h,p){const m=Re(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let _;return m.mutationQueue.lookupMutationBatch(g,p).next(w=>(Qe(w!==null,37113),_=w.keys(),m.mutationQueue.removeMutationBatch(g,w))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,_,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_)).next(()=>m.localDocuments.getDocuments(g,_))})}(s.localStore,e);Gb(s,e,t),$b(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ic(s,o)}catch(o){await nl(o)}}function $b(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function Gb(r,e,t){const s=Re(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function mg(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(s=>{r.Ru.containsKey(s)||Qb(r,s)})}function Qb(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(ry(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),py(r))}function MT(r,e,t){for(const s of t)s instanceof qb?(r.Ru.addReference(s.key,e),aM(r,s)):s instanceof Bb?(fe(dy,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||Qb(r,s.key)):be(19791,{wu:s})}function aM(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Eu.has(s)||(fe(dy,"New document in limbo: "+t),r.Eu.add(s),py(r))}function py(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new _e(it.fromString(e)),s=r.fu.next();r.Au.set(s,new K4(t)),r.du=r.du.insert(t,s),Pb(r.remoteStore,new cs(Pr($f(t.path)),s,"TargetPurposeLimboResolution",Bf.ce))}}async function ic(r,e,t){const s=Re(r),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach((p,m)=>{h.push(s.pu(m,e,t).then(g=>{var _;if((g||t)&&s.isPrimaryClient){const w=g?!g.fromCache:(_=t==null?void 0:t.targetChanges.get(m.targetId))==null?void 0:_.current;s.sharedClientState.updateQueryState(m.targetId,w?"current":"not-current")}if(g){o.push(g);const w=ty.As(m.targetId,g);u.push(w)}}))}),await Promise.all(h),s.Pu.H_(o),await async function(m,g){const _=Re(m);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>ne.forEach(g,S=>ne.forEach(S.Es,N=>_.persistence.referenceDelegate.addReference(w,S.targetId,N)).next(()=>ne.forEach(S.ds,N=>_.persistence.referenceDelegate.removeReference(w,S.targetId,N)))))}catch(w){if(!rl(w))throw w;fe(ny,"Failed to update sequence numbers: "+w)}for(const w of g){const S=w.targetId;if(!w.fromCache){const N=_.Ms.get(S),U=N.snapshotVersion,G=N.withLastLimboFreeSnapshotVersion(U);_.Ms=_.Ms.insert(S,G)}}}(s.localStore,u))}async function oM(r,e){const t=Re(r);if(!t.currentUser.isEqual(e)){fe(dy,"User change. New user:",e.toKey());const s=await Nb(t.localStore,e);t.currentUser=e,function(u,h){u.mu.forEach(p=>{p.forEach(m=>{m.reject(new he(J.CANCELLED,h))})}),u.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ic(t,s.Ls)}}function lM(r,e){const t=Re(r),s=t.Au.get(e);if(s&&s.hu)return Le().add(s.key);{let o=Le();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const p=t.Tu.get(h);o=o.unionWith(p.view.nu)}return o}}function Yb(r){const e=Re(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rM.bind(null,e),e.Pu.H_=$4.bind(null,e.eventManager),e.Pu.yu=G4.bind(null,e.eventManager),e}function uM(r){const e=Re(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sM.bind(null,e),e}class Af{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return d4(this.persistence,new c4,e.initialUser,this.serializer)}Cu(e){return new Db(ey.mi,this.serializer)}Du(e){return new E4}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Af.provider={build:()=>new Af};class cM extends Af{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Qe(this.persistence.referenceDelegate instanceof bf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new KO(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Tn.withCacheSize(this.cacheSizeBytes):Tn.DEFAULT;return new Db(s=>bf.mi(s,t),this.serializer)}}class gg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>OT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=oM.bind(null,this.syncEngine),await B4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new F4}()}createDatastore(e){const t=Wf(e.databaseInfo.databaseId),s=function(u){return new A4(u)}(e.databaseInfo);return function(u,h,p,m){return new C4(u,h,p,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,p){return new N4(s,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>OT(this.syncEngine,t,0),function(){return RT.v()?new RT:new T4}())}createSyncEngine(e,t){return function(o,u,h,p,m,g,_){const w=new X4(o,u,h,p,m,g);return _&&(w.gu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Re(o);fe(Aa,"RemoteStore shutting down."),u.Ea.add(5),await rc(u),u.Aa.shutdown(),u.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}gg.provider={build:()=>new gg};/**
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
 */class my{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ai("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const ws="FirestoreClient";class hM{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=cn.UNAUTHENTICATED,this.clientId=Hg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{fe(ws,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(fe(ws,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ly(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Om(r,e){r.asyncQueue.verifyOperationInProgress(),fe(ws,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Nb(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function kT(r,e){r.asyncQueue.verifyOperationInProgress();const t=await fM(r);fe(ws,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>IT(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>IT(e.remoteStore,o)),r._onlineComponents=e}async function fM(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){fe(ws,"Using user provided OfflineComponentProvider");try{await Om(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===J.FAILED_PRECONDITION||o.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Bo("Error using user provided cache. Falling back to memory cache: "+t),await Om(r,new Af)}}else fe(ws,"Using default OfflineComponentProvider"),await Om(r,new cM(void 0));return r._offlineComponents}async function Kb(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(fe(ws,"Using user provided OnlineComponentProvider"),await kT(r,r._uninitializedComponentsProvider._online)):(fe(ws,"Using default OnlineComponentProvider"),await kT(r,new gg))),r._onlineComponents}function dM(r){return Kb(r).then(e=>e.syncEngine)}async function Rf(r){const e=await Kb(r),t=e.eventManager;return t.onListen=W4.bind(null,e.syncEngine),t.onUnlisten=eM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Z4.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tM.bind(null,e.syncEngine),t}function pM(r,e,t={}){const s=new Ei;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const _=new my({next:S=>{_.Nu(),h.enqueueAndForget(()=>cy(u,w));const N=S.docs.has(p);!N&&S.fromCache?g.reject(new he(J.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&S.fromCache&&m&&m.source==="server"?g.reject(new he(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),w=new fy($f(p.path),_,{includeMetadataChanges:!0,qa:!0});return uy(u,w)}(await Rf(r),r.asyncQueue,e,t,s)),s.promise}function mM(r,e,t={}){const s=new Ei;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const _=new my({next:S=>{_.Nu(),h.enqueueAndForget(()=>cy(u,w)),S.fromCache&&m.source==="server"?g.reject(new he(J.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),w=new fy(p,_,{includeMetadataChanges:!0,qa:!0});return uy(u,w)}(await Rf(r),r.asyncQueue,e,t,s)),s.promise}/**
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
 */function Xb(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const PT=new Map;/**
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
 */const Wb="firestore.googleapis.com",VT=!0;class LT{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wb,this.ssl=VT}else this.host=e.host,this.ssl=e.ssl??VT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Cb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QO)throw new he(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xb(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ed{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new LT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new LT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new EN;switch(s.type){case"firstParty":return new SN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=PT.get(t);s&&(fe("ComponentProvider","Removing Datastore"),PT.delete(t),s.terminate())}(this),Promise.resolve()}}function gM(r,e,t,s={}){var g;r=kn(r,ed);const o=Zo(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${t}`;o&&($1(`https://${p}`),G1("Firestore",!0)),u.host!==Wb&&u.host!==p&&Bo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:s};if(!Ea(m,h)&&(r._setSettings(m),s.mockUserToken)){let _,w;if(typeof s.mockUserToken=="string")_=s.mockUserToken,w=cn.MOCK_USER;else{_=CI(s.mockUserToken,(g=r._app)==null?void 0:g.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new he(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new cn(S)}r._authCredentials=new TN(new zw(_,w))}}/**
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
 */class Is{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Is(this.firestore,e,this._query)}}class gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ec(t,gt._jsonSchema))return new gt(e,s||null,new _e(it.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:It("string",gt._jsonSchemaVersion),referencePath:It("string")};class gs extends Is{constructor(e,t,s){super(e,t,$f(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new _e(e))}withConverter(e){return new gs(this.firestore,e,this._path)}}function Ti(r,e,...t){if(r=Ct(r),qw("collection","path",e),r instanceof ed){const s=it.fromString(e,...t);return XE(s),new gs(r,null,s)}{if(!(r instanceof gt||r instanceof gs))throw new he(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...t));return XE(s),new gs(r.firestore,null,s)}}function cr(r,e,...t){if(r=Ct(r),arguments.length===1&&(e=Hg.newId()),qw("doc","path",e),r instanceof ed){const s=it.fromString(e,...t);return KE(s),new gt(r,null,new _e(s))}{if(!(r instanceof gt||r instanceof gs))throw new he(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...t));return KE(s),new gt(r.firestore,r instanceof gs?r.converter:null,new _e(s))}}/**
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
 */const UT="AsyncQueue";class jT{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Mb(this,"async_queue_retry"),this._c=()=>{const s=Nm();s&&fe(UT,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Nm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Nm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Ei;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!rl(e))throw e;fe(UT,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Ai("INTERNAL UNHANDLED ERROR: ",zT(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=oy.createAndSchedule(this,e,t,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&be(47125,{Pc:zT(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function zT(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function qT(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class bs extends ed{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new jT,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jT(e),this._firestoreClient=void 0,await e}}}function Zb(r,e){const t=typeof r=="object"?r:X1(),s=typeof r=="string"?r:_f,o=Mg(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=xI("firestore");u&&gM(o,...u)}return o}function td(r){if(r._terminated)throw new he(J.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||yM(r),r._firestoreClient}function yM(r){var s,o,u;const e=r._freezeSettings(),t=function(p,m,g,_){return new qN(p,m,g,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Xb(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new hM(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(p){const m=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(m),_online:m}}(r._componentsProvider))}/**
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
 */class Zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zn(nn.fromBase64String(e))}catch(t){throw new he(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Zn(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Zn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ec(e,Zn._jsonSchema))return Zn.fromBase64String(e.bytes)}}Zn._jsonSchemaVersion="firestore/bytes/1.0",Zn._jsonSchema={type:It("string",Zn._jsonSchemaVersion),bytes:It("string")};/**
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
 */class nd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rd{constructor(e){this._methodName=e}}/**
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
 */class Lr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Lr._jsonSchemaVersion}}static fromJSON(e){if(ec(e,Lr._jsonSchema))return new Lr(e.latitude,e.longitude)}}Lr._jsonSchemaVersion="firestore/geoPoint/1.0",Lr._jsonSchema={type:It("string",Lr._jsonSchemaVersion),latitude:It("number"),longitude:It("number")};/**
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
 */class Ur{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ur._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ec(e,Ur._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ur(e.vectorValues);throw new he(J.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ur._jsonSchemaVersion="firestore/vectorValue/1.0",Ur._jsonSchema={type:It("string",Ur._jsonSchemaVersion),vectorValues:It("object")};/**
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
 */const _M=/^__.*__$/;class vM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new xs(e,this.data,this.fieldMask,t,this.fieldTransforms):new tc(e,this.data,t,this.fieldTransforms)}}class Jb{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new xs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function eS(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be(40011,{Ac:r})}}class gy{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new gy({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return xf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(eS(this.Ac)&&_M.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class EM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Wf(e)}Cc(e,t,s,o=!1){return new gy({Ac:e,methodName:t,Dc:s,path:tn.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function id(r){const e=r._freezeSettings(),t=Wf(r._databaseId);return new EM(r._databaseId,!!e.ignoreUndefinedProperties,t)}function tS(r,e,t,s,o,u={}){const h=r.Cc(u.merge||u.mergeFields?2:0,e,t,o);_y("Data must be an object, but it was:",h,s);const p=nS(s,h);let m,g;if(u.merge)m=new Mn(h.fieldMask),g=h.fieldTransforms;else if(u.mergeFields){const _=[];for(const w of u.mergeFields){const S=yg(e,w,t);if(!h.contains(S))throw new he(J.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);iS(_,S)||_.push(S)}m=new Mn(_),g=h.fieldTransforms.filter(w=>m.covers(w.field))}else m=null,g=h.fieldTransforms;return new vM(new wn(p),m,g)}class sd extends rd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sd}}class yy extends rd{_toFieldTransform(e){return new dO(e.path,new Bu)}isEqual(e){return e instanceof yy}}function TM(r,e,t,s){const o=r.Cc(1,e,t);_y("Data must be an object, but it was:",o,s);const u=[],h=wn.empty();Rs(s,(m,g)=>{const _=vy(e,m,t);g=Ct(g);const w=o.yc(_);if(g instanceof sd)u.push(_);else{const S=sc(g,w);S!=null&&(u.push(_),h.set(_,S))}});const p=new Mn(u);return new Jb(h,p,o.fieldTransforms)}function wM(r,e,t,s,o,u){const h=r.Cc(1,e,t),p=[yg(e,s,t)],m=[o];if(u.length%2!=0)throw new he(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<u.length;S+=2)p.push(yg(e,u[S])),m.push(u[S+1]);const g=[],_=wn.empty();for(let S=p.length-1;S>=0;--S)if(!iS(g,p[S])){const N=p[S];let U=m[S];U=Ct(U);const G=h.yc(N);if(U instanceof sd)g.push(N);else{const B=sc(U,G);B!=null&&(g.push(N),_.set(N,B))}}const w=new Mn(g);return new Jb(_,w,h.fieldTransforms)}function bM(r,e,t,s=!1){return sc(t,r.Cc(s?4:3,e))}function sc(r,e){if(rS(r=Ct(r)))return _y("Unsupported field value:",e,r),nS(r,e);if(r instanceof rd)return function(s,o){if(!eS(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let m=sc(p,o.wc(h));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=Ct(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return cO(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=nt.fromDate(s);return{timestampValue:wf(o.serializer,u)}}if(s instanceof nt){const u=new nt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:wf(o.serializer,u)}}if(s instanceof Lr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Zn)return{bytesValue:wb(o.serializer,s._byteString)};if(s instanceof gt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Zg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ur)return function(h,p){return{mapValue:{fields:{[Xw]:{stringValue:Ww},[vf]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return Kg(p.serializer,g)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${qf(s)}`)}(r,e)}function nS(r,e){const t={};return Fw(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(r,(s,o)=>{const u=sc(o,e.mc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function rS(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof nt||r instanceof Lr||r instanceof Zn||r instanceof gt||r instanceof rd||r instanceof Ur)}function _y(r,e,t){if(!rS(t)||!Bw(t)){const s=qf(t);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function yg(r,e,t){if((e=Ct(e))instanceof nd)return e._internalPath;if(typeof e=="string")return vy(r,e);throw xf("Field path arguments must be of type string or ",r,!1,void 0,t)}const SM=new RegExp("[~\\*/\\[\\]]");function vy(r,e,t){if(e.search(SM)>=0)throw xf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new nd(...e.split("."))._internalPath}catch{throw xf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function xf(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||h)&&(m+=" (found",u&&(m+=` in field ${s}`),h&&(m+=` in document ${o}`),m+=")"),new he(J.INVALID_ARGUMENT,p+r+m)}function iS(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class sS{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ad("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class AM extends sS{data(){return super.data()}}function ad(r,e){return typeof e=="string"?vy(r,e):e instanceof nd?e._internalPath:e._delegate._internalPath}/**
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
 */function aS(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new he(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ey{}class oS extends Ey{}function Ra(r,e,...t){let s=[];e instanceof Ey&&s.push(e),s=s.concat(t),function(u){const h=u.filter(m=>m instanceof Ty).length,p=u.filter(m=>m instanceof od).length;if(h>1||h>0&&p>0)throw new he(J.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class od extends oS{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new od(e,t,s)}_apply(e){const t=this._parse(e);return lS(e._query,t),new Is(e.firestore,e.converter,ag(e._query,t))}_parse(e){const t=id(e.firestore);return function(u,h,p,m,g,_,w){let S;if(g.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new he(J.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){HT(w,_);const U=[];for(const G of w)U.push(BT(m,u,G));S={arrayValue:{values:U}}}else S=BT(m,u,w)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||HT(w,_),S=bM(p,h,w,_==="in"||_==="not-in");return xt.create(g,_,S)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function xa(r,e,t){const s=e,o=ad("where",r);return od._create(o,s,t)}class Ty extends Ey{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ty(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:dr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const p=u.getFlattenedFilters();for(const m of p)lS(h,m),h=ag(h,m)}(e._query,t),new Is(e.firestore,e.converter,ag(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wy extends oS{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new wy(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new he(J.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new he(J.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qu(u,h)}(e._query,this._field,this._direction);return new Is(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new il(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function by(r,e="asc"){const t=e,s=ad("orderBy",r);return wy._create(s,t)}function BT(r,e,t){if(typeof(t=Ct(t))=="string"){if(t==="")throw new he(J.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sb(e)&&t.indexOf("/")!==-1)throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(it.fromString(t));if(!_e.isDocumentKey(s))throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return iT(r,new _e(s))}if(t instanceof gt)return iT(r,t._key);throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qf(t)}.`)}function HT(r,e){if(!Array.isArray(r)||r.length===0)throw new he(J.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lS(r,e){const t=function(o,u){for(const h of o)for(const p of h.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new he(J.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(J.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class RM{convertValue(e,t="none"){switch(Es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw be(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Rs(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[vf].arrayValue)==null?void 0:o.values)==null?void 0:u.map(h=>Et(h.doubleValue));return new Ur(t)}convertGeoPoint(e){return new Lr(Et(e.latitude),Et(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ff(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Uu(e));default:return null}}convertTimestamp(e){const t=_s(e);return new nt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=it.fromString(e);Qe(Ib(s),9688,{name:e});const o=new ju(s.get(1),s.get(3)),u=new _e(s.popFirst(5));return o.isEqual(t)||Ai(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function uS(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class bu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ma extends sS{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new nf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ad("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(J.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ma._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ma._jsonSchemaVersion="firestore/documentSnapshot/1.0",ma._jsonSchema={type:It("string",ma._jsonSchemaVersion),bundleSource:It("string","DocumentSnapshot"),bundleName:It("string"),bundle:It("string")};class nf extends ma{data(e={}){return super.data(e)}}class ga{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new bu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new nf(this._firestore,this._userDataWriter,s.key,s,new bu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(p=>{const m=new nf(o._firestore,o._userDataWriter,p.doc.key,p.doc,new bu(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const m=new nf(o._firestore,o._userDataWriter,p.doc.key,p.doc,new bu(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,_=-1;return p.type!==0&&(g=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),_=h.indexOf(p.doc.key)),{type:xM(p.type),doc:m,oldIndex:g,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(J.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ga._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function xM(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return be(61501,{type:r})}}/**
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
 */function Sy(r){r=kn(r,gt);const e=kn(r.firestore,bs);return pM(td(e),r._key).then(t=>hS(e,r,t))}ga._jsonSchemaVersion="firestore/querySnapshot/1.0",ga._jsonSchema={type:It("string",ga._jsonSchemaVersion),bundleSource:It("string","QuerySnapshot"),bundleName:It("string"),bundle:It("string")};class Ay extends RM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}function cS(r){r=kn(r,Is);const e=kn(r.firestore,bs),t=td(e),s=new Ay(e);return aS(r._query),mM(t,r._query).then(o=>new ga(e,s,r,o))}function IM(r,e,t){r=kn(r,gt);const s=kn(r.firestore,bs),o=uS(r.converter,e);return Ry(s,[tS(id(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,ur.none())])}function ya(r,e,t,...s){r=kn(r,gt);const o=kn(r.firestore,bs),u=id(o);let h;return h=typeof(e=Ct(e))=="string"||e instanceof nd?wM(u,"updateDoc",r._key,e,t,s):TM(u,"updateDoc",r._key,e),Ry(o,[h.toMutation(r._key,ur.exists(!0))])}function CM(r,e){const t=kn(r.firestore,bs),s=cr(r),o=uS(r.converter,e);return Ry(t,[tS(id(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,ur.exists(!1))]).then(()=>s)}function ld(r,...e){var m,g,_;r=Ct(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||qT(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(qT(e[s])){const w=e[s];e[s]=(m=w.next)==null?void 0:m.bind(w),e[s+1]=(g=w.error)==null?void 0:g.bind(w),e[s+2]=(_=w.complete)==null?void 0:_.bind(w)}let u,h,p;if(r instanceof gt)h=kn(r.firestore,bs),p=$f(r._key.path),u={next:w=>{e[s]&&e[s](hS(h,r,w))},error:e[s+1],complete:e[s+2]};else{const w=kn(r,Is);h=kn(w.firestore,bs),p=w._query;const S=new Ay(h);u={next:N=>{e[s]&&e[s](new ga(h,S,w,N))},error:e[s+1],complete:e[s+2]},aS(r._query)}return function(S,N,U,G){const B=new my(G),ee=new fy(N,B,U);return S.asyncQueue.enqueueAndForget(async()=>uy(await Rf(S),ee)),()=>{B.Nu(),S.asyncQueue.enqueueAndForget(async()=>cy(await Rf(S),ee))}}(td(h),p,o,u)}function Ry(r,e){return function(s,o){const u=new Ei;return s.asyncQueue.enqueueAndForget(async()=>nM(await dM(s),o,u)),u.promise}(td(r),e)}function hS(r,e,t){const s=t.docs.get(e._key),o=new Ay(r);return new ma(r,o,e._key,s,new bu(t.hasPendingWrites,t.fromCache),e.converter)}function FT(){return new yy("serverTimestamp")}(function(e,t=!0){(function(o){tl=o})(Jo),zo(new Ta("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new bs(new wN(s.getProvider("auth-internal")),new AN(h,s.getProvider("app-check-internal")),function(g,_){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new he(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ju(g.options.projectId,_)}(h,o),h);return u={useFetchStreams:t,...u},p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),ps($E,GE,e),ps($E,GE,"esm2020")})();const DM={apiKey:"AIzaSyB5aFUQbtG1rShW-1O88aZjCG7uErNxmgQ",authDomain:"pdms-test-8a5cc.firebaseapp.com",projectId:"pdms-test-8a5cc",storageBucket:"pdms-test-8a5cc.firebasestorage.app",messagingSenderId:"631678861167",appId:"1:631678861167:web:5cd775b77e53535700329a"},xy=K1(DM);Zb(xy);const Vt=Zb(xy),Ia=gN(xy);function NM({onLoginSuccess:r}){const[e,t]=F.useState(""),[s,o]=F.useState(""),u=Gu(),h=()=>{u("/signup")},p=()=>{e2(Ia,e,s).then(()=>{r(),u("/dashboard")}).catch(m=>{alert("로그인 실패: "+m.message)})};return T.jsxs(OM,{children:[T.jsxs(MM,{children:[T.jsxs(kM,{children:[T.jsx(PM,{children:"PDMS"}),T.jsx(VM,{children:"Pushcomz Design Management System"})]}),T.jsxs(LM,{children:[T.jsx(UM,{type:"text",value:e,onChange:m=>t(m.target.value),placeholder:"이메일을 입력해주세요."}),T.jsx(jM,{type:"password",value:s,onChange:m=>o(m.target.value),placeholder:"비밀번호를 입력해주세요."})]}),T.jsx(zM,{onClick:p,children:"로그인"}),T.jsxs(BM,{children:[T.jsx(HM,{children:"계정이 없습니까?"}),T.jsx(FM,{onClick:h,children:"등록하기"})]})]}),T.jsx(qM,{children:"© Pushcomz Corp."})]})}const OM=Q.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:r})=>r.colors.gray01};
`,MM=Q.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:r})=>r.colors.white01};
`,kM=Q.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,PM=Q.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.navy};
`,VM=Q.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,LM=Q.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
`,UM=Q.input`
  width: 460px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,jM=Q.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,zM=Q.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:r})=>r.colors.white01};
`,qM=Q.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`,BM=Q.div`
  
`,HM=Q.span`
  margin-right: 10px;
  font-size: 13px;
`,FM=Q.button`
  font-size: 13px;
  color: ${({theme:r})=>r.colors.navy};
`,fS="./assets/logo-NEcdCz8m.svg";function $M(){const[r,e]=F.useState(""),[t,s]=F.useState(null),o=Gu();F.useEffect(()=>{const p=Uf(Ia,async m=>{if(m){m.displayName&&e(m.displayName);const g=await Sy(cr(Vt,"users",m.uid));g.exists()?s(g.data().role):s(null)}else e(""),s(null)});return()=>p()},[]);const u=()=>{s2(Ia).then(()=>{o("/")}).catch(p=>{alert("로그아웃 중 오류가 발생했습니다: "+p.message)})},h=p=>{switch(p){case 1:return"요청자";case 2:return"디자이너";case 3:return"담당자";default:return"역할 없음"}};return T.jsxs(GM,{children:[T.jsx(QM,{src:fS}),T.jsxs(YM,{children:[T.jsxs(KM,{children:[T.jsx(XM,{children:r}),"님(",h(t),") 환영합니다."]}),T.jsx(WM,{onClick:u,children:"로그아웃"}),T.jsx(ZM,{})]})]})}const GM=Q.header`
  ${({theme:r})=>r.mixin.flex("center","space-between")};
  padding: 12px 48px;
  font-family: 'Pretendard';
  background-color: ${({theme:r})=>r.colors.black};
`,QM=Q.img``,YM=Q.div``,KM=Q.span`
  margin-right: 24px;
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`,XM=Q.span`
  font-weight: 700;
`,WM=Q.button`
  padding: 5px 10px;
  border: 1px solid ${({theme:r})=>r.colors.white01};
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`,ZM=Q.span`
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`,Iy="./assets/url-icon-DJKri2bW.svg";function JM({item:r,index:e,onReviewComplete:t,onCancel:s,onEditClick:o}){const u=h=>{if(!h)return"-";if(h.toDate){const p=h.toDate();return`${p.getMonth()+1}/${p.getDate()}`}return h};return T.jsxs(ek,{isCanceled:r.status==="취소",children:[T.jsx(Kn,{children:e}),T.jsx(Kn,{children:r.design_request_id}),T.jsx(Kn,{children:u(r.request_date)}),T.jsx(Kn,{children:r.requester}),T.jsx(tk,{children:u(r.completion_dt)}),T.jsx(nk,{children:u(r.open_dt)}),T.jsx(Kn,{children:r.task_form}),T.jsx(rk,{children:r.task_type}),T.jsx(ik,{children:T.jsxs(ak,{children:[r.emergency?T.jsx(lk,{children:"긴급"}):"",T.jsx(ok,{title:"자세히 보려면 클릭해주세요.",children:r.requirement})]})}),T.jsx(Kn,{children:T.jsx($T,{href:r.url,target:"_blank"})}),T.jsx(sk,{children:T.jsx(uk,{title:"자세히 보려면 클릭해주세요.",children:r.note||""})}),T.jsx(Kn,{children:T.jsx(ck,{status:r.status,children:r.status==="검수요청"?"진행중":r.status==="검수중"?"검수요청":r.status||"대기"})}),T.jsx(Kn,{children:r.assigned_designer||"미배정"}),T.jsx(Kn,{children:r.manager_review_status==="검수완료"&&r.result_url?T.jsx($T,{href:r.result_url,target:"_blank"}):""}),T.jsx(Kn,{children:r.manager_review_status==="검수완료"?r.status!=="완료"?T.jsx(hk,{onClick:()=>t(r.id),children:"검수완료"}):T.jsx(fk,{children:"검수완료"}):""}),T.jsx(Kn,{children:T.jsx(dk,{onClick:()=>o(r.id),children:"수정"})}),T.jsx(Kn,{children:T.jsx(pk,{onClick:()=>s(r.id),children:"취소"})})]})}const ek=Q.tr`
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
`,Kn=Q.td`
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
`,tk=Q.td`
  color: ${({theme:r})=>r.colors.red};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,nk=Q.td`
  color: ${({theme:r})=>r.colors.blue02};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,rk=Q.td`
  padding: 15px 12px;
  line-height: 15px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,ik=Q.td`
  line-height: 15px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,sk=Q.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  background-color: #fffff1;
`,ak=Q.div`
  ${({theme:r})=>r.mixin.flex("center")};
  padding: 0 12px;
`,ok=Q.span`
  position: relative;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
`,lk=Q.span`
  margin-right: 8px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
  white-space: nowrap;
`,$T=Q.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${Iy}) no-repeat center / contain;
`,uk=Q.span`
  position: relative;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
`,ck=Q.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:r,theme:e})=>{switch(r){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.blue02;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.black}}};
  background-color: ${({status:r,theme:e})=>{switch(r){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.lightpupple;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,hk=Q.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: ${({theme:r})=>r.colors.black};
`,fk=Q.span`
  color: green;
  font-weight: bold;
`,dk=Q.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: ${({theme:r})=>r.colors.black};
`,pk=Q.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: ${({theme:r})=>r.colors.black};
`;function mk({data:r,onReviewComplete:e,onCancel:t,onEditClick:s}){return T.jsx(gk,{children:T.jsxs(yk,{children:[T.jsx(_k,{children:"요청 리스트"}),T.jsxs("colgroup",{children:[T.jsx("col",{style:{width:"50px"}}),T.jsx("col",{style:{width:"100px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"120px"}}),T.jsx("col",{}),T.jsx("col",{style:{width:"90px"}}),T.jsx("col",{style:{width:"160px"}}),T.jsx("col",{style:{width:"100px"}}),T.jsx("col",{style:{width:"85px"}}),T.jsx("col",{style:{width:"90px"}}),T.jsx("col",{style:{width:"100px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"80px"}})]}),T.jsx("thead",{children:T.jsxs("tr",{children:[T.jsx(Zt,{children:"번호"}),T.jsx(Zt,{children:"문서번호"}),T.jsx(Zt,{children:"요청일"}),T.jsx(Zt,{children:"요청자"}),T.jsxs(Zt,{children:["완료",T.jsx("br",{}),"요청일"]}),T.jsx(Zt,{children:"오픈일"}),T.jsx(Zt,{children:"업무형태"}),T.jsx(Zt,{children:"업무타입"}),T.jsx(Zt,{children:"작업항목"}),T.jsx(Zt,{children:"요청서 URL"}),T.jsx(Zt,{children:"메모"}),T.jsx(Zt,{children:"진행상태"}),T.jsx(Zt,{children:"디자이너"}),T.jsx(Zt,{children:"산출물 URL"}),T.jsx(Zt,{children:"검수"}),T.jsx(Zt,{children:"수정"}),T.jsx(Zt,{children:"취소"})]})}),T.jsx("tbody",{children:r.length>0?r.map((o,u)=>T.jsx(JM,{index:u+1,item:o,onReviewComplete:e,onCancel:t,onEditClick:s},o.id)):T.jsx("tr",{children:T.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const gk=Q.div`
  padding: 0 48px;
`,yk=Q.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
  text-align: center;
`,_k=Q.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Zt=Q.th`
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
`;function Cy(){const r=new Date,e=r.getFullYear(),t=r.getMonth()+1,s=r.getDate();return T.jsx(vk,{children:T.jsxs(Ek,{children:[e,"년 ",t,"월 ",s,"일 디자인 편성 요청 스케줄"]})})}const vk=Q.div`
  padding: 30px 48px;
  background-color: ${({theme:r})=>r.colors.gray04};
`,Ek=Q.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`;function Tk({setIsDrawerOpen:r,setEditData:e}){const[t,s]=F.useState(""),[o,u]=F.useState([]);F.useEffect(()=>{const g=Uf(Ia,_=>{_&&_.displayName&&s(_.displayName)});return()=>g()},[]),F.useEffect(()=>{if(!t)return;const g=Ra(Ti(Vt,"design_request"),xa("requester","==",t),by("design_request_id","desc")),_=ld(g,w=>{const S=w.docs.map(N=>({id:N.id,...N.data()}));u(S)});return()=>_()},[t]);const h=async g=>{await ya(cr(Vt,"design_request",g),{status:"완료",requester_review_status:"검수완료"}),u(_=>_.map(w=>w.id===g?{...w,status:"완료",requester_review_status:"검수완료"}:w)),alert("완료 처리되었습니다.")},p=async g=>{const _=cr(Vt,"design_request",g);await ya(_,{requester_edit_state:!0});const w=await Sy(_);if(w.exists()){const S={id:w.id,...w.data()};e(S),r(!0)}},m=async g=>{await ya(cr(Vt,"design_request",g),{status:"취소"}),u(_=>_.map(w=>w.id===g?{...w,status:"취소"}:w))};return T.jsxs(T.Fragment,{children:[T.jsx(Cy,{}),T.jsx(mk,{data:o,onReviewComplete:h,onCancel:m,onEditClick:p})]})}function wk({index:r,item:e,onChange:t,onSave:s}){const o=u=>{if(!u)return"-";if(u.toDate){const h=u.toDate();return`${h.getMonth()+1}/${h.getDate()}`}return u};return T.jsxs(bk,{isCanceled:e.status==="취소",children:[T.jsx(fi,{children:r}),T.jsx(fi,{children:e.design_request_id}),T.jsx(fi,{children:o(e.request_date)}),T.jsx(fi,{children:e.requester}),T.jsx(Sk,{children:o(e.completion_dt)}),T.jsx(Ak,{children:o(e.open_dt)}),T.jsx(fi,{children:e.task_form}),T.jsx(Rk,{children:e.task_type}),T.jsx(xk,{children:T.jsxs(Ck,{children:[e.emergency?T.jsx(Dk,{children:"긴급"}):"",T.jsx(Nk,{children:e.requirement})]})}),T.jsx(fi,{children:T.jsx(Ok,{href:e.url,target:"_blank"})}),T.jsx(Ik,{children:T.jsx(Mk,{children:e.note||""})}),T.jsx(GT,{children:T.jsx(QT,{type:"date",onChange:u=>t(e.id,"start_dt",u.target.value),disabled:e.status==="취소"})}),T.jsx(GT,{children:T.jsx(QT,{type:"date",onChange:u=>t(e.id,"end_dt",u.target.value),disabled:e.status==="취소"})}),T.jsx(fi,{children:T.jsx(kk,{type:"text",placeholder:"산출물 URL을 입력해주세요.",onChange:u=>t(e.id,"result_url",u.target.value),disabled:e.status==="취소"})}),T.jsx(fi,{children:T.jsxs("select",{onChange:u=>t(e.id,"status",u.target.value),disabled:e.status==="취소",children:[T.jsx("option",{value:"대기중",children:"대기"}),T.jsx("option",{value:"진행중",children:"진행중"}),T.jsx("option",{value:"검수요청",children:"검수요청"})]})}),T.jsx(fi,{children:T.jsx(Pk,{onClick:()=>s(e.id),disabled:e.status==="취소",children:"저장"})})]})}const bk=Q.tr`
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
`,fi=Q.td`
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
`,Sk=Q.td`
  color: ${({theme:r})=>r.colors.red};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,Ak=Q.td`
  color: ${({theme:r})=>r.colors.blue02};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,Rk=Q.td`
  padding: 15px 12px;
  line-height: 15px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,xk=Q.td`
  line-height: 15px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,Ik=Q.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  background-color: #fffff1;
`,GT=Q.td`
  padding: 0 12px;
`,Ck=Q.div`
  ${({theme:r})=>r.mixin.flex("center")};
  padding: 0 12px;
`,Dk=Q.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
  white-space: nowrap;
`,Nk=Q.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
`,Ok=Q.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${Iy}) no-repeat center / contain;
`,Mk=Q.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
`,QT=Q.input.attrs({type:"date"})`
  width: 100%;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,kk=Q.input`
  width: 100%;
  padding: 0 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,Pk=Q.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
`;function Vk({requests:r,onChange:e,onSave:t}){return T.jsx(Lk,{children:T.jsxs(Uk,{children:[T.jsxs("colgroup",{children:[T.jsx("col",{style:{width:"50px"}}),T.jsx("col",{style:{width:"100px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"120px"}}),T.jsx("col",{}),T.jsx("col",{style:{width:"90px"}}),T.jsx("col",{style:{width:"160px"}}),T.jsx("col",{style:{width:"120px"}}),T.jsx("col",{style:{width:"120px"}}),T.jsx("col",{}),T.jsx("col",{style:{width:"100px"}}),T.jsx("col",{style:{width:"80px"}})]}),T.jsx("thead",{children:T.jsxs("tr",{children:[T.jsx(un,{children:"번호"}),T.jsx(un,{children:"문서번호"}),T.jsx(un,{children:"요청일"}),T.jsx(un,{children:"요청자"}),T.jsxs(un,{children:["완료",T.jsx("br",{}),"요청일"]}),T.jsx(un,{children:"오픈일"}),T.jsx(un,{children:"업무형태"}),T.jsx(un,{children:"업무타입"}),T.jsx(un,{children:"작업항목"}),T.jsx(un,{children:"요청서 URL"}),T.jsx(un,{children:"메모"}),T.jsx(un,{children:"디자인 시작일"}),T.jsx(un,{children:"디자인 종료일"}),T.jsx(un,{children:"산출물 링크"}),T.jsx(un,{children:"진행상태"}),T.jsx(un,{children:"저장"})]})}),T.jsx("tbody",{children:r.length>0?r.map((s,o)=>T.jsx(wk,{index:o+1,item:s,onChange:e,onSave:t},s.id)):T.jsx("tr",{children:T.jsx("td",{colSpan:16,style:{textAlign:"center"},children:"배정된 요청이 없습니다."})})})]})})}const Lk=Q.div`
  padding: 0 48px;
`,Uk=Q.table`
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
`,un=Q.th`
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
`;function jk(){const[r,e]=F.useState([]),[t,s]=F.useState(""),[o,u]=F.useState({});F.useEffect(()=>{const g=Uf(Ia,_=>{_&&_.displayName&&s(_.displayName)});return()=>g()},[]),F.useEffect(()=>{if(!t)return;const g=Ra(Ti(Vt,"design_request"),xa("assigned_designer","==",t),by("design_request_id","desc")),_=ld(g,w=>{const S=w.docs.map(N=>({id:N.id,...N.data()}));e(S)});return()=>_()},[t]);const h=(g,_,w)=>{u(S=>({...S,[g]:{...S[g],[_]:w}}))},p=g=>g?nt.fromDate(new Date(g)):null,m=async g=>{const _=cr(Vt,"design_request",g),w=o[g];if(!w){alert("변경된 내용이 없습니다.");return}await ya(_,{designer_start_date:p(w.start_dt),designer_end_date:p(w.end_dt),result_url:w.result_url||"",status:w.status}),alert("저장되었습니다.")};return T.jsxs(zk,{children:[T.jsx(Cy,{}),T.jsx(qk,{children:"디자이너 화면"}),T.jsx(Vk,{requests:r,formData:o,onChange:h,onSave:m})]})}const zk=Q.div``,qk=Q.h2`
  margin-bottom: 20px;
  padding: 0 48px;
`;function Bk({index:r,item:e,designerList:t,selectedDesigner:s,onDesignerSelect:o,onAssignDesigner:u,onSendToRequester:h}){const p=m=>{if(!m)return"-";if(m.toDate){const g=m.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return m};return T.jsxs(Hk,{isCanceled:e.status==="취소",children:[T.jsx(Xn,{children:r}),T.jsx(Xn,{children:e.design_request_id}),T.jsx(Xn,{children:p(e.request_date)}),T.jsx(Xn,{children:e.requester}),T.jsx(Fk,{children:p(e.completion_dt)}),T.jsx($k,{children:p(e.open_dt)}),T.jsx(Xn,{children:e.task_form}),T.jsx(Gk,{children:e.task_type}),T.jsx(Qk,{children:T.jsxs(Kk,{children:[e.emergency?T.jsx(Xk,{children:"긴급"}):"",T.jsx(Wk,{children:e.requirement})]})}),T.jsx(Xn,{children:T.jsx(YT,{href:e.url,target:"_blank"})}),T.jsx(Yk,{children:T.jsx(Zk,{children:e.note||""})}),T.jsx(Xn,{children:T.jsx(Jk,{status:e.status,children:e.status==="검수요청"?"검수중":e.status||"대기"})}),T.jsx(Xn,{children:e.result_url?T.jsx(YT,{href:e.result_url,target:"_blank"}):""}),T.jsx(Xn,{children:p(e.designer_start_date)}),T.jsx(Xn,{children:p(e.designer_end_date)}),T.jsxs(Xn,{children:[T.jsxs(tP,{value:s,onChange:m=>o(m.target.value),disabled:e.status==="취소",children:[T.jsx("option",{value:"",children:"디자이너 선택"}),t.map(m=>T.jsx("option",{value:m.name,children:m.name},m.id))]}),T.jsx(eP,{onClick:u,disabled:e.status==="취소",children:"배정"})]}),T.jsx(Xn,{children:e.status==="검수요청"&&e.manager_review_status!=="검수완료"?T.jsx(nP,{onClick:h,children:"검수완료"}):e.manager_review_status==="검수완료"?T.jsx(rP,{children:"검수완료"}):""})]})}const Hk=Q.tr`
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
`,Xn=Q.td`
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
`,Fk=Q.td`
  color: ${({theme:r})=>r.colors.red};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,$k=Q.td`
  color: ${({theme:r})=>r.colors.blue02};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,Gk=Q.td`
  padding: 15px 12px;
  line-height: 15px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,Qk=Q.td`
  line-height: 15px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,Yk=Q.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  background-color: #fffff1;
`,Kk=Q.div`
  ${({theme:r})=>r.mixin.flex("center")};
  padding: 0 12px;
`,Xk=Q.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
  white-space: nowrap;
`,Wk=Q.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
`,YT=Q.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${Iy}) no-repeat center / contain;
`,Zk=Q.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
`,Jk=Q.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:r,theme:e})=>{switch(r){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.red;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.black}}};
  background-color: ${({status:r,theme:e})=>{switch(r){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.pink03;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,eP=Q.button`
  margin: 6px 0 0 10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
`,tP=Q.select`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,nP=Q.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
`,rP=Q.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`;function iP({data:r,designerList:e,selectedDesigners:t,designerSelect:s,assignDesigner:o,sendToRequester:u}){return T.jsx(sP,{children:T.jsxs(aP,{children:[T.jsx(oP,{children:"매니저 요청 리스트"}),T.jsxs("colgroup",{children:[T.jsx("col",{style:{width:"50px"}}),T.jsx("col",{style:{width:"100px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"120px"}}),T.jsx("col",{}),T.jsx("col",{style:{width:"90px"}}),T.jsx("col",{style:{width:"160px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"85px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"180px"}}),T.jsx("col",{style:{width:"80px"}})]}),T.jsx("thead",{children:T.jsxs("tr",{children:[T.jsx(Jt,{children:"번호"}),T.jsx(Jt,{children:"문서번호"}),T.jsx(Jt,{children:"요청일"}),T.jsx(Jt,{children:"요청자"}),T.jsxs(Jt,{children:["완료",T.jsx("br",{}),"요청일"]}),T.jsx(Jt,{children:"오픈일"}),T.jsx(Jt,{children:"업무형태"}),T.jsx(Jt,{children:"업무타입"}),T.jsx(Jt,{children:"작업항목"}),T.jsx(Jt,{children:"요청서 URL"}),T.jsx(Jt,{children:"메모"}),T.jsx(Jt,{children:"진행상태"}),T.jsx(Jt,{children:"산출물 URL"}),T.jsxs(Jt,{children:["디자인",T.jsx("br",{}),"시작일"]}),T.jsxs(Jt,{children:["디자인",T.jsx("br",{}),"종료일"]}),T.jsx(Jt,{children:"배정"}),T.jsx(Jt,{children:"검수"})]})}),T.jsx("tbody",{children:r.length>0?r.map((h,p)=>T.jsx(Bk,{index:p+1,item:h,designerList:e,selectedDesigner:t[h.id]||"",onDesignerSelect:m=>s(h.id,m),onAssignDesigner:()=>o(h.id),onSendToRequester:()=>u(h.id)},h.id)):T.jsx("tr",{children:T.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const sP=Q.div`
  padding: 0 48px;
`,aP=Q.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
  text-align: center;
`,oP=Q.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Jt=Q.th`
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
`;function lP(){const[r,e]=F.useState([]),[t,s]=F.useState([]),[o,u]=F.useState({});F.useEffect(()=>{const g=Ra(Ti(Vt,"design_request"),by("design_request_id","desc")),_=ld(g,w=>{const S=w.docs.map(N=>({id:N.id,...N.data()}));e(S)});return()=>_()},[]),F.useEffect(()=>{(async()=>{const _=Ra(Ti(Vt,"users"),xa("role","==",2)),S=(await cS(_)).docs.map(N=>({id:N.id,...N.data()}));s(S)})()},[]);const h=(g,_)=>{u(w=>({...w,[g]:_}))},p=async g=>{const _=o[g];if(!_){alert("디자이너를 선택하세요.");return}const w=cr(Vt,"design_request",g);await ya(w,{assigned_designer:_}),alert("디자이너가 배정되었습니다!"),e(S=>S.map(N=>N.id===g?{...N,assigned_designer:_}:N))},m=async g=>{await ya(cr(Vt,"design_request",g),{manager_review_status:"검수완료",status:"검수중"}),e(_=>_.map(w=>w.id===g?{...w,manager_review_status:"검수완료",status:"검수중"}:w)),alert("요청자에게 전달되었습니다.")};return T.jsxs(uP,{children:[T.jsx(Cy,{}),T.jsx(cP,{children:"매니저 요청리스트"}),T.jsx(iP,{data:r,designerList:t,selectedDesigners:o,designerSelect:h,assignDesigner:p,sendToRequester:m})]})}const uP=Q.div``,cP=Q.h2`
  margin-bottom: 20px;
  padding: 0 48px;
`;function hP({userRole:r,setIsDrawerOpen:e,setEditData:t}){const s=()=>{if(r===1)return T.jsx(Tk,{setIsDrawerOpen:e,setEditData:t});if(r===2)return T.jsx(jk,{});if(r===3)return T.jsx(lP,{})};return T.jsx(fP,{children:s()})}const fP=Q.main``,dP="./assets/aside-logo-DoEwMgfJ.svg",pP="./assets/myrequest-icon-DhmqrZY6.svg";function mP({item:r}){return T.jsxs(gP,{status:r.status,children:[T.jsx(yP,{children:r.status}),T.jsx(_P,{status:r.status,children:r.count})]})}const gP=Q.li`
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
`,yP=Q.span`
  font-size: 16px;
  font-weight: 500;
`,_P=Q.span`
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
`;function vP({requests:r,role:e,userName:t,onRequestButtonClick:s}){const o=[{status:"대기중",count:r.filter(h=>h.status==="대기").length},{status:"작업중",count:r.filter(h=>h.status==="진행중").length},{status:"완료",count:r.filter(h=>h.status==="완료").length}],u=(h,p)=>{switch(h){case 1:return`${p}님의 요청`;case 2:return`${p}님의 작업 현황`;case 3:return"전체 요청 현황";default:return"요청 현황"}};return T.jsxs(EP,{children:[T.jsxs(TP,{children:[T.jsx(wP,{src:dP}),T.jsx(bP,{children:"업무 관리시스템"})]}),e===1&&T.jsx(SP,{children:T.jsx(AP,{onClick:s,children:"디자인 요청 등록"})}),T.jsxs(RP,{children:[T.jsxs(xP,{children:[T.jsx(IP,{src:pP}),T.jsx(CP,{children:u(e,t)})]}),T.jsx(DP,{children:o.map(h=>T.jsx(mP,{item:h},h.status))})]})]})}const EP=Q.aside`
  height: 100%;
  border-right: 1px solid ${({theme:r})=>r.colors.black};
`,TP=Q.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  padding: 19.5px 23px;
  border-bottom: 1px solid ${({theme:r})=>r.colors.gray02};
`,wP=Q.img`
  margin-right: 8px;
`,bP=Q.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
  white-space: nowrap;
`,SP=Q.div`
  padding: 32px 20px;
  border-bottom: 1px solid ${({theme:r})=>r.colors.gray02};
`,AP=Q.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
  white-space: nowrap;
`,RP=Q.div`
  padding: 0 24px;
`,xP=Q.div`
  ${({theme:r})=>r.mixin.flex("center")};
  gap: 12px;
  padding: 30px 0;
`,IP=Q.img``,CP=Q.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
`,DP=Q.ul`
  ${({theme:r})=>r.mixin.flex("center")};
  flex-direction: column;
`;function NP({isOpen:r,onClose:e,children:t}){return T.jsxs(T.Fragment,{children:[T.jsx(OP,{isVisible:r,onClick:e}),T.jsx(MP,{isVisible:r,onClick:s=>s.stopPropagation(),children:t})]})}const OP=Q.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({isVisible:r})=>r?1:0};
  pointer-events: ${({isVisible:r})=>r?"auto":"none"};
  transition: opacity 0.3s ease;
`,MP=Q.div`
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
`,kP="./assets/requestformexit-button-BcAG546a.svg",PP="./assets/checkbox-checked-eOVFoR8b.svg",VP="./assets/selectbox-arrow-BwC8UGU0.svg",Mm={completion_dt:"",open_dt:"",task_form:"GHS",task_type:"프론트테마",requirement:"",url:"",note:"",emergency:!1};function LP({userName:r,editData:e,isDrawerOpen:t,onClose:s}){const o=(e==null?void 0:e.requester_edit_state)===!0,[u,h]=F.useState(Mm),p=(w,S)=>{h(N=>({...N,[w]:S}))},m=w=>w?nt.fromDate(new Date(w)):null,g=async()=>{const w=new Date,S=w.getFullYear().toString().slice(2),N=(w.getMonth()+1).toString().padStart(2,"0"),U=Ra(Ti(Vt,"design_request"),xa("design_request_id",">=",`H${S}${N}000`),xa("design_request_id","<",`H${S}${N}999`)),B=(await cS(U)).size+1;return`H${S}${N}${B.toString().padStart(3,"0")}`},_=async w=>{if(w.preventDefault(),!u.requirement){alert("요청 내용을 입력하세요.");return}if(o&&(e!=null&&e.id)){await ya(cr(Vt,"design_request",e.id),{completion_dt:m(u.completion_dt),open_dt:m(u.open_dt),task_form:u.task_form,task_type:u.task_type,requirement:u.requirement,url:u.url,note:u.note,emergency:u.emergency,requester_edit_state:!1,updated_at:FT()}),alert("요청이 수정되었습니다!"),s();return}const S=new Date;CM(Ti(Vt,"design_request"),{design_request_id:await g(),request_date:m(S.toISOString()),requester:r,completion_dt:m(u.completion_dt),open_dt:m(u.open_dt),task_form:u.task_form,task_type:u.task_type,requirement:u.requirement,url:u.url,note:u.note,status:"대기",assigned_designer:"미배정",requester_review_status:"검수대기",manager_review_status:"",result_url:"",designer_start_date:null,designer_end_date:null,emergency:u.emergency,requester_edit_state:!1,designer_edit_state:!1,created_at:FT(),updated_at:null,delete_at:null,work_hour:""}).then(()=>{alert("요청이 등록되었습니다!"),h(Mm),s()}).catch(N=>{alert("등록 중 오류가 발생했습니다: "+N.message)})};return F.useEffect(()=>{o&&e&&h({completion_dt:e.completion_dt?e.completion_dt.toDate().toISOString().slice(0,10):"",open_dt:e.open_dt?e.open_dt.toDate().toISOString().slice(0,10):"",task_form:e.task_form??"GHS",task_type:e.task_type??"프론트테마",requirement:e.requirement??"",url:e.url??"",note:e.note??"",emergency:e.emergency??!1})},[o,e]),F.useEffect(()=>{!t||o||h(Mm)},[t]),T.jsxs(T.Fragment,{children:[T.jsxs(jP,{children:[T.jsx(zP,{children:o?"디자인 요청 수정":"디자인 요청 등록"}),T.jsx(qP,{type:"button",onClick:s})]}),T.jsxs(UP,{onSubmit:_,children:[T.jsxs(BP,{children:[T.jsx(HP,{children:"디자인 요청 등록"}),T.jsx("colgroup",{children:T.jsx("col",{style:{width:"120px"}})}),T.jsxs("tbody",{children:[T.jsxs("tr",{children:[T.jsx(di,{children:"문서번호"}),T.jsx(pi,{children:o?e==null?void 0:e.design_request_id:""})]}),T.jsxs("tr",{children:[T.jsx(di,{children:T.jsx(is,{htmlFor:"completion_dt",children:"완료 요청일"})}),T.jsx(pi,{children:T.jsx(KT,{type:"date",id:"completion_dt",value:u.completion_dt,onChange:w=>p("completion_dt",w.target.value)})})]}),T.jsxs("tr",{children:[T.jsx(di,{children:T.jsx(is,{htmlFor:"open_dt",children:"오픈일"})}),T.jsx(pi,{children:T.jsx(KT,{type:"date",id:"open_dt",value:u.open_dt,onChange:w=>p("open_dt",w.target.value)})})]}),T.jsxs("tr",{children:[T.jsx(di,{children:T.jsx(is,{htmlFor:"task_form",children:"업무 형태"})}),T.jsx(pi,{children:T.jsxs(WT,{id:"task_form",value:u.task_form,onChange:w=>p("task_form",w.target.value),children:[T.jsx("option",{value:"GHS",children:"GHS"}),T.jsx("option",{value:"MHC",children:"MHC"}),T.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),T.jsxs("tr",{children:[T.jsx(di,{children:T.jsx(is,{htmlFor:"task_type",children:"업무 유형"})}),T.jsx(pi,{children:T.jsxs(WT,{id:"task_type",value:u.task_type,onChange:w=>p("task_type",w.target.value),children:[T.jsx("option",{value:"프론트테마",children:"프론트테마"}),T.jsx("option",{value:"별도기획전",children:"별도기획전"}),T.jsx("option",{value:"일자별배너",children:"일자별배너"}),T.jsx("option",{value:"핫새배너",children:"핫새배너"}),T.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),T.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),T.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),T.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),T.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),T.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),T.jsx("option",{value:"상품상세",children:"상품상세"}),T.jsx("option",{value:"제휴",children:"제휴"}),T.jsx("option",{value:"클럽",children:"클럽"}),T.jsx("option",{value:"팝업",children:"팝업"}),T.jsx("option",{value:"푸시",children:"푸시"}),T.jsx("option",{value:"홈테마",children:"홈테마"}),T.jsx("option",{value:"즉시배송",children:"즉시배송"}),T.jsx("option",{value:"트레이딩",children:"트레이딩"}),T.jsx("option",{value:"이벤트",children:"이벤트"}),T.jsx("option",{value:"기타",children:"기타"})]})})]}),T.jsxs("tr",{children:[T.jsx(di,{children:T.jsx(is,{htmlFor:"requirement",children:"작업 항목"})}),T.jsx(pi,{children:T.jsx(XT,{type:"text",id:"requirement",value:u.requirement,onChange:w=>p("requirement",w.target.value),placeholder:"작업 항목을 입력하세요."})})]}),T.jsxs("tr",{children:[T.jsx(di,{children:T.jsx(is,{htmlFor:"emergency",children:"긴급 일정"})}),T.jsx(pi,{children:T.jsx($P,{children:T.jsxs(GP,{htmlFor:"emergency",children:[T.jsx(QP,{type:"checkbox",id:"emergency",checked:u.emergency,onChange:w=>p("emergency",w.target.checked)}),T.jsx(YP,{}),T.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),T.jsxs("tr",{children:[T.jsx(di,{children:T.jsx(is,{htmlFor:"url",children:"요청서 URL"})}),T.jsx(pi,{children:T.jsx(FP,{id:"url",value:u.url,onChange:w=>p("url",w.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),T.jsxs("tr",{children:[T.jsx(di,{children:T.jsx(is,{htmlFor:"note",children:"메모"})}),T.jsx(pi,{children:T.jsx(XT,{type:"input",id:"note",value:u.note,onChange:w=>p("note",w.target.value),placeholder:"메모를 입력하세요."})})]})]})]}),T.jsx(KP,{children:T.jsx(XP,{type:"submit",children:o?"수정 완료":"등록하기"})})]})]})}const UP=Q.form`
  font-family: 'Pretendard';
`,jP=Q.div`
  ${({theme:r})=>r.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,zP=Q.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
  letter-spacing: -0.48px;
`,qP=Q.button`
  width: 24px;
  height: 24px;
  background: url(${kP}) no-repeat center;
  background-size: contain;
`,BP=Q.table`
  width: 100%;
  color: ${({theme:r})=>r.colors.black};
  border-top: 1px solid ${({theme:r})=>r.colors.black};
`,HP=Q.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,di=Q.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-left: none;
  background-color: ${({theme:r})=>r.colors.gray04};
`,pi=Q.td`
  padding: 12px 24px;
  border-right: none;
`,is=Q.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`,KT=Q.input`
  width: 168px;
  padding: 6px 12px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,XT=Q.input`
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: #fffff1;
`,FP=Q.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,$P=Q.div`
  ${({theme:r})=>r.mixin.flex("center")};
  gap: 5px;
`,GP=Q.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,QP=Q.input`
  display: none;

  &:checked + span {
    background-color: ${({theme:r})=>r.colors.red};
    background-image: url(${PP}); // 체크 이미지 경로
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`,YP=Q.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 2px;
`,WT=Q.select`
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
  background-image: url(${VP}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:r})=>r.colors.black};
  }
`,KP=Q.div`
  text-align: center;
`,XP=Q.button`
  margin-top: 24px;
  padding: 12.5px 32px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 15px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
`;function WP(){const[r,e]=F.useState(0),[t,s]=F.useState([]),[o,u]=F.useState(""),[h,p]=F.useState(!1),[m,g]=F.useState();return F.useEffect(()=>{const _=Uf(Ia,async w=>{if(w){u(w.displayName||"");const S=await Sy(cr(Vt,"users",w.uid));if(S.exists()){const U=S.data().role,G=w.displayName;e(U);let B;U===1?B=Ra(Ti(Vt,"design_request"),xa("requester","==",G)):U===2?B=Ra(Ti(Vt,"design_request"),xa("assigned_designer","==",G)):B=Ti(Vt,"design_request"),ld(B,ee=>{const W=ee.docs.map(ie=>{const ce=ie.data();return{id:ie.id,status:ce.status??"대기중"}});s(W)})}}else e(0),u(""),s([])});return()=>_()},[]),T.jsxs(ZP,{children:[T.jsx(vP,{requests:t,userName:o,role:r,onRequestButtonClick:()=>p(!0)}),T.jsxs(JP,{children:[T.jsx($M,{}),T.jsx(hP,{userRole:r,setIsDrawerOpen:p,setEditData:g})]}),T.jsx(NP,{isOpen:h,onClose:()=>{g(void 0),p(!1)},children:T.jsx(LP,{userName:o,isDrawerOpen:h,onClose:()=>{g(void 0),p(!1)},editData:m})})]})}const ZP=Q.div`
  ${({theme:r})=>r.mixin.flex()};
  width: 100%;
  height: 100%;
`,JP=Q.div`
  flex: 1;
`;function eV(){const[r,e]=F.useState(""),[t,s]=F.useState(""),[o,u]=F.useState(""),[h,p]=F.useState(""),m=Gu(),g=async()=>{if(o!==h){alert("비밀번호가 일치하지 않습니다.");return}JD(Ia,t,o).then(async _=>{const w=_.user;await n2(w,{displayName:r}),await IM(cr(Vt,"users",w.uid),{name:r,role:2,createdAt:new Date})}).then(()=>{alert("회원가입이 완료되었습니다!"),m("/")}).catch(_=>{alert("회원가입 중 오류 발생: "+_.message)})};return T.jsx(tV,{children:T.jsxs(nV,{children:[T.jsxs(rV,{children:[T.jsx(iV,{children:"PDMS"}),T.jsx(sV,{children:"Pushcomz Design Management System"})]}),T.jsx(aV,{children:T.jsx(oV,{src:fS})}),T.jsxs(lV,{children:[T.jsx(uV,{type:"text",value:r,onChange:_=>e(_.target.value),placeholder:"이름을 입력해주세요."}),T.jsx(cV,{type:"text",value:t,onChange:_=>s(_.target.value),placeholder:"이메일을 입력해주세요."}),T.jsx(hV,{type:"password",value:o,onChange:_=>u(_.target.value),placeholder:"비밀번호를 입력해주세요."}),T.jsx(fV,{type:"password",value:h,onChange:_=>p(_.target.value),placeholder:"비밀번호 확인을 입력해주세요."})]}),T.jsx(dV,{onClick:g,children:"등록하기"})]})})}const tV=Q.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:r})=>r.colors.gray01};
`,nV=Q.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:r})=>r.colors.white01};
`,rV=Q.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,iV=Q.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.navy};
`,sV=Q.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,aV=Q.div`
  margin-right: auto;
`,oV=Q.img`
  
`,lV=Q.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  gap: 10px;
`,uV=Q.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,cV=Q.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,hV=Q.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,fV=Q.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,dV=Q.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:r})=>r.colors.white01};
`;function pV(){const[r,e]=F.useState(!1);return T.jsx(ox,{basename:"/pdms-test",children:T.jsxs(UR,{children:[T.jsx(jh,{path:"/",element:T.jsx(NM,{onLoginSuccess:()=>e(!0)})}),T.jsx(jh,{path:"/dashboard",element:r?T.jsx(WP,{}):T.jsx(VR,{to:"/"})}),T.jsx(jh,{path:"/signup",element:T.jsx(eV,{})})]})})}const mV="/assets/Pretendard-Bold-C0IAtCzs.woff2",gV="/assets/Pretendard-Medium-BCuOcOjL.woff2",yV="/assets/Pretendard-Regular-BnvhP503.woff2",_V=_I`
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
    src: url(${mV}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${gV}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${yV}) format('woff2');
    font-weight: 400;
  }

`,vV={white01:"#fff",white02:"#f4f4f4",red:"#eb193a",navy:"#073863",beige01:"#fff4ea",beige02:"#FFEEDE",orange:"#f88017",lightpupple:"#eaedfa",blue01:"#4f76ff",blue02:"#0B1ABF",gray01:"#ECEDF0",gray02:"#ccc",gray03:"#bdbdbd",gray04:"#f4f4f4",gray05:"#888",gray06:"#666",gray07:"#e5e2e2",black:"#212121",pink01:"#FFDDDD",pink02:"#F48193",pink03:"#FFEBEB"},EV={flex:(r="flex-start",e="flex-start")=>`
    display: flex;
    align-items: ${r};
    justify-content: ${e}
  `},TV={colors:vV,mixin:EV};QA.createRoot(document.getElementById("root")).render(T.jsx(F.StrictMode,{children:T.jsxs(mI,{theme:TV,children:[T.jsx(pV,{}),T.jsx(_V,{})]})}));
