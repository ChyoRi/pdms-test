(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Nb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var um={exports:{}},pu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UE;function Ob(){if(UE)return pu;UE=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return pu.Fragment=e,pu.jsx=t,pu.jsxs=t,pu}var jE;function Mb(){return jE||(jE=1,um.exports=Ob()),um.exports}var S=Mb(),cm={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zE;function Vb(){if(zE)return Ce;zE=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),T=Symbol.iterator;function A(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,$={};function B(O,ne,ae){this.props=O,this.context=ne,this.refs=$,this.updater=ae||N}B.prototype.isReactComponent={},B.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function J(){}J.prototype=B.prototype;function X(O,ne,ae){this.props=O,this.context=ne,this.refs=$,this.updater=ae||N}var re=X.prototype=new J;re.constructor=X,U(re,B.prototype),re.isPureReactComponent=!0;var he=Array.isArray,ue={H:null,A:null,T:null,S:null,V:null},de=Object.prototype.hasOwnProperty;function C(O,ne,ae,se,ge,Ie){return ae=Ie.ref,{$$typeof:r,type:O,key:ne,ref:ae!==void 0?ae:null,props:Ie}}function R(O,ne){return C(O.type,ne,void 0,void 0,void 0,O.props)}function I(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function V(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return ne[ae]})}var P=/\/+/g;function L(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):ne.toString(36)}function D(){}function Dt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(D,D):(O.status="pending",O.then(function(ne){O.status==="pending"&&(O.status="fulfilled",O.value=ne)},function(ne){O.status==="pending"&&(O.status="rejected",O.reason=ne)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function at(O,ne,ae,se,ge){var Ie=typeof O;(Ie==="undefined"||Ie==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(Ie){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case r:case e:ve=!0;break;case _:return ve=O._init,at(ve(O._payload),ne,ae,se,ge)}}if(ve)return ge=ge(O),ve=se===""?"."+L(O,0):se,he(ge)?(ae="",ve!=null&&(ae=ve.replace(P,"$&/")+"/"),at(ge,ne,ae,"",function(Ut){return Ut})):ge!=null&&(I(ge)&&(ge=R(ge,ae+(ge.key==null||O&&O.key===ge.key?"":(""+ge.key).replace(P,"$&/")+"/")+ve)),ne.push(ge)),1;ve=0;var ct=se===""?".":se+":";if(he(O))for(var Be=0;Be<O.length;Be++)se=O[Be],Ie=ct+L(se,Be),ve+=at(se,ne,ae,Ie,ge);else if(Be=A(O),typeof Be=="function")for(O=Be.call(O),Be=0;!(se=O.next()).done;)se=se.value,Ie=ct+L(se,Be++),ve+=at(se,ne,ae,Ie,ge);else if(Ie==="object"){if(typeof O.then=="function")return at(Dt(O),ne,ae,se,ge);throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Y(O,ne,ae){if(O==null)return O;var se=[],ge=0;return at(O,se,"","",function(Ie){return ne.call(ae,Ie,ge++)}),se}function le(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var me=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function xe(){}return Ce.Children={map:Y,forEach:function(O,ne,ae){Y(O,function(){ne.apply(this,arguments)},ae)},count:function(O){var ne=0;return Y(O,function(){ne++}),ne},toArray:function(O){return Y(O,function(ne){return ne})||[]},only:function(O){if(!I(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ce.Component=B,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=X,Ce.StrictMode=s,Ce.Suspense=m,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ue,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(O){return ue.H.useMemoCache(O)}},Ce.cache=function(O){return function(){return O.apply(null,arguments)}},Ce.cloneElement=function(O,ne,ae){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var se=U({},O.props),ge=O.key,Ie=void 0;if(ne!=null)for(ve in ne.ref!==void 0&&(Ie=void 0),ne.key!==void 0&&(ge=""+ne.key),ne)!de.call(ne,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&ne.ref===void 0||(se[ve]=ne[ve]);var ve=arguments.length-2;if(ve===1)se.children=ae;else if(1<ve){for(var ct=Array(ve),Be=0;Be<ve;Be++)ct[Be]=arguments[Be+2];se.children=ct}return C(O.type,ge,void 0,void 0,Ie,se)},Ce.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},Ce.createElement=function(O,ne,ae){var se,ge={},Ie=null;if(ne!=null)for(se in ne.key!==void 0&&(Ie=""+ne.key),ne)de.call(ne,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ge[se]=ne[se]);var ve=arguments.length-2;if(ve===1)ge.children=ae;else if(1<ve){for(var ct=Array(ve),Be=0;Be<ve;Be++)ct[Be]=arguments[Be+2];ge.children=ct}if(O&&O.defaultProps)for(se in ve=O.defaultProps,ve)ge[se]===void 0&&(ge[se]=ve[se]);return C(O,Ie,void 0,void 0,null,ge)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(O){return{$$typeof:p,render:O}},Ce.isValidElement=I,Ce.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:le}},Ce.memo=function(O,ne){return{$$typeof:g,type:O,compare:ne===void 0?null:ne}},Ce.startTransition=function(O){var ne=ue.T,ae={};ue.T=ae;try{var se=O(),ge=ue.S;ge!==null&&ge(ae,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(xe,me)}catch(Ie){me(Ie)}finally{ue.T=ne}},Ce.unstable_useCacheRefresh=function(){return ue.H.useCacheRefresh()},Ce.use=function(O){return ue.H.use(O)},Ce.useActionState=function(O,ne,ae){return ue.H.useActionState(O,ne,ae)},Ce.useCallback=function(O,ne){return ue.H.useCallback(O,ne)},Ce.useContext=function(O){return ue.H.useContext(O)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(O,ne){return ue.H.useDeferredValue(O,ne)},Ce.useEffect=function(O,ne,ae){var se=ue.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(O,ne)},Ce.useId=function(){return ue.H.useId()},Ce.useImperativeHandle=function(O,ne,ae){return ue.H.useImperativeHandle(O,ne,ae)},Ce.useInsertionEffect=function(O,ne){return ue.H.useInsertionEffect(O,ne)},Ce.useLayoutEffect=function(O,ne){return ue.H.useLayoutEffect(O,ne)},Ce.useMemo=function(O,ne){return ue.H.useMemo(O,ne)},Ce.useOptimistic=function(O,ne){return ue.H.useOptimistic(O,ne)},Ce.useReducer=function(O,ne,ae){return ue.H.useReducer(O,ne,ae)},Ce.useRef=function(O){return ue.H.useRef(O)},Ce.useState=function(O){return ue.H.useState(O)},Ce.useSyncExternalStore=function(O,ne,ae){return ue.H.useSyncExternalStore(O,ne,ae)},Ce.useTransition=function(){return ue.H.useTransition()},Ce.version="19.1.0",Ce}var qE;function _g(){return qE||(qE=1,cm.exports=Vb()),cm.exports}var F=_g();const or=Nb(F);var hm={exports:{}},mu={},fm={exports:{}},dm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BE;function Pb(){return BE||(BE=1,function(r){function e(Y,le){var me=Y.length;Y.push(le);e:for(;0<me;){var xe=me-1>>>1,O=Y[xe];if(0<o(O,le))Y[xe]=le,Y[me]=O,me=xe;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var le=Y[0],me=Y.pop();if(me!==le){Y[0]=me;e:for(var xe=0,O=Y.length,ne=O>>>1;xe<ne;){var ae=2*(xe+1)-1,se=Y[ae],ge=ae+1,Ie=Y[ge];if(0>o(se,me))ge<O&&0>o(Ie,se)?(Y[xe]=Ie,Y[ge]=me,xe=ge):(Y[xe]=se,Y[ae]=me,xe=ae);else if(ge<O&&0>o(Ie,me))Y[xe]=Ie,Y[ge]=me,xe=ge;else break e}}return le}function o(Y,le){var me=Y.sortIndex-le.sortIndex;return me!==0?me:Y.id-le.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],g=[],_=1,T=null,A=3,N=!1,U=!1,$=!1,B=!1,J=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function he(Y){for(var le=t(g);le!==null;){if(le.callback===null)s(g);else if(le.startTime<=Y)s(g),le.sortIndex=le.expirationTime,e(m,le);else break;le=t(g)}}function ue(Y){if($=!1,he(Y),!U)if(t(m)!==null)U=!0,de||(de=!0,L());else{var le=t(g);le!==null&&at(ue,le.startTime-Y)}}var de=!1,C=-1,R=5,I=-1;function V(){return B?!0:!(r.unstable_now()-I<R)}function P(){if(B=!1,de){var Y=r.unstable_now();I=Y;var le=!0;try{e:{U=!1,$&&($=!1,X(C),C=-1),N=!0;var me=A;try{t:{for(he(Y),T=t(m);T!==null&&!(T.expirationTime>Y&&V());){var xe=T.callback;if(typeof xe=="function"){T.callback=null,A=T.priorityLevel;var O=xe(T.expirationTime<=Y);if(Y=r.unstable_now(),typeof O=="function"){T.callback=O,he(Y),le=!0;break t}T===t(m)&&s(m),he(Y)}else s(m);T=t(m)}if(T!==null)le=!0;else{var ne=t(g);ne!==null&&at(ue,ne.startTime-Y),le=!1}}break e}finally{T=null,A=me,N=!1}le=void 0}}finally{le?L():de=!1}}}var L;if(typeof re=="function")L=function(){re(P)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,Dt=D.port2;D.port1.onmessage=P,L=function(){Dt.postMessage(null)}}else L=function(){J(P,0)};function at(Y,le){C=J(function(){Y(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_next=function(Y){switch(A){case 1:case 2:case 3:var le=3;break;default:le=A}var me=A;A=le;try{return Y()}finally{A=me}},r.unstable_requestPaint=function(){B=!0},r.unstable_runWithPriority=function(Y,le){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var me=A;A=Y;try{return le()}finally{A=me}},r.unstable_scheduleCallback=function(Y,le,me){var xe=r.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?xe+me:xe):me=xe,Y){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=me+O,Y={id:_++,callback:le,priorityLevel:Y,startTime:me,expirationTime:O,sortIndex:-1},me>xe?(Y.sortIndex=me,e(g,Y),t(m)===null&&Y===t(g)&&($?(X(C),C=-1):$=!0,at(ue,me-xe))):(Y.sortIndex=O,e(m,Y),U||N||(U=!0,de||(de=!0,L()))),Y},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(Y){var le=A;return function(){var me=A;A=le;try{return Y.apply(this,arguments)}finally{A=me}}}}(dm)),dm}var HE;function kb(){return HE||(HE=1,fm.exports=Pb()),fm.exports}var pm={exports:{}},un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FE;function Lb(){if(FE)return un;FE=1;var r=_g();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,_){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:T==null?null:""+T,children:m,containerInfo:g,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,un.createPortal=function(m,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,_)},un.flushSync=function(m){var g=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=g,s.p=_,s.d.f()}},un.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},un.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var _=g.as,T=p(_,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,N=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:A,fetchPriority:N}):_==="script"&&s.d.X(m,{crossOrigin:T,integrity:A,fetchPriority:N,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},un.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=p(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},un.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,T=p(_,g.crossOrigin);s.d.L(m,_,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},un.preloadModule=function(m,g){if(typeof m=="string")if(g){var _=p(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},un.requestFormReset=function(m){s.d.r(m)},un.unstable_batchedUpdates=function(m,g){return m(g)},un.useFormState=function(m,g,_){return f.H.useFormState(m,g,_)},un.useFormStatus=function(){return f.H.useHostTransitionStatus()},un.version="19.1.0",un}var GE;function Ub(){if(GE)return pm.exports;GE=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pm.exports=Lb(),pm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $E;function jb(){if($E)return mu;$E=1;var r=kb(),e=_g(),t=Ub();function s(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function f(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(u(n)!==n)throw Error(s(188))}function m(n){var i=n.alternate;if(!i){if(i=u(n),i===null)throw Error(s(188));return i!==n?null:n}for(var a=n,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return p(h),n;if(d===l)return p(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var E=!1,w=h.child;w;){if(w===a){E=!0,a=h,l=d;break}if(w===l){E=!0,l=h,a=d;break}w=w.sibling}if(!E){for(w=d.child;w;){if(w===a){E=!0,a=d,l=h;break}if(w===l){E=!0,l=d,a=h;break}w=w.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:i}function g(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=g(n),i!==null)return i;n=n.sibling}return null}var _=Object.assign,T=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),re=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function L(n){return n===null||typeof n!="object"?null:(n=P&&n[P]||n["@@iterator"],typeof n=="function"?n:null)}var D=Symbol.for("react.client.reference");function Dt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===D?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case B:return"Profiler";case $:return"StrictMode";case ue:return"Suspense";case de:return"SuspenseList";case I:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case N:return"Portal";case re:return(n.displayName||"Context")+".Provider";case X:return(n._context.displayName||"Context")+".Consumer";case he:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case C:return i=n.displayName||null,i!==null?i:Dt(n.type)||"Memo";case R:i=n._payload,n=n._init;try{return Dt(n(i))}catch{}}return null}var at=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},xe=[],O=-1;function ne(n){return{current:n}}function ae(n){0>O||(n.current=xe[O],xe[O]=null,O--)}function se(n,i){O++,xe[O]=n.current,n.current=i}var ge=ne(null),Ie=ne(null),ve=ne(null),ct=ne(null);function Be(n,i){switch(se(ve,i),se(Ie,n),se(ge,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?fE(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=fE(i),n=dE(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ae(ge),se(ge,n)}function Ut(){ae(ge),ae(Ie),ae(ve)}function Un(n){n.memoizedState!==null&&se(ct,n);var i=ge.current,a=dE(i,n.type);i!==a&&(se(Ie,n),se(ge,a))}function En(n){Ie.current===n&&(ae(ge),ae(Ie)),ct.current===n&&(ae(ct),uu._currentValue=me)}var an=Object.prototype.hasOwnProperty,Cs=r.unstable_scheduleCallback,Ds=r.unstable_cancelCallback,al=r.unstable_shouldYield,ac=r.unstable_requestPaint,jn=r.unstable_now,ud=r.unstable_getCurrentPriorityLevel,ol=r.unstable_ImmediatePriority,Oa=r.unstable_UserBlockingPriority,Ns=r.unstable_NormalPriority,cd=r.unstable_LowPriority,Ma=r.unstable_IdlePriority,ll=r.log,oc=r.unstable_setDisableYieldValue,dt=null,Ye=null;function Rn(n){if(typeof ll=="function"&&oc(n),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(dt,n)}catch{}}var on=Math.clz32?Math.clz32:Os,lc=Math.log,hd=Math.LN2;function Os(n){return n>>>=0,n===0?32:31-(lc(n)/hd|0)|0}var Ms=256,Vs=4194304;function tr(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Va(n,i,a){var l=n.pendingLanes;if(l===0)return 0;var h=0,d=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var w=l&134217727;return w!==0?(l=w&~d,l!==0?h=tr(l):(E&=w,E!==0?h=tr(E):a||(a=w&~n,a!==0&&(h=tr(a))))):(w=l&~d,w!==0?h=tr(w):E!==0?h=tr(E):a||(a=l&~n,a!==0&&(h=tr(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function Ps(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function ul(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cl(){var n=Ms;return Ms<<=1,(Ms&4194048)===0&&(Ms=256),n}function hl(){var n=Vs;return Vs<<=1,(Vs&62914560)===0&&(Vs=4194304),n}function Br(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Hr(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function fl(n,i,a,l,h,d){var E=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var w=n.entanglements,x=n.expirationTimes,q=n.hiddenUpdates;for(a=E&~a;0<a;){var K=31-on(a),ee=1<<K;w[K]=0,x[K]=-1;var H=q[K];if(H!==null)for(q[K]=null,K=0;K<H.length;K++){var G=H[K];G!==null&&(G.lane&=-536870913)}a&=~ee}l!==0&&gr(n,l,0),d!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=d&~(E&~i))}function gr(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-on(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function dl(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-on(a),h=1<<l;h&i|n[l]&i&&(n[l]|=i),a&=~h}}function Ci(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Pa(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Di(){var n=le.p;return n!==0?n:(n=window.event,n===void 0?32:OE(n.type))}function uc(n,i){var a=le.p;try{return le.p=n,i()}finally{le.p=a}}var ot=Math.random().toString(36).slice(2),Nt="__reactFiber$"+ot,Tt="__reactProps$"+ot,zn="__reactContainer$"+ot,pl="__reactEvents$"+ot,fd="__reactListeners$"+ot,Ni="__reactHandles$"+ot,cc="__reactResources$"+ot,ks="__reactMarker$"+ot;function Oi(n){delete n[Nt],delete n[Tt],delete n[pl],delete n[fd],delete n[Ni]}function Fr(n){var i=n[Nt];if(i)return i;for(var a=n.parentNode;a;){if(i=a[zn]||a[Nt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=yE(n);n!==null;){if(a=n[Nt])return a;n=yE(n)}return i}n=a,a=n.parentNode}return null}function yr(n){if(n=n[Nt]||n[zn]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function _r(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(s(33))}function gn(n){var i=n[cc];return i||(i=n[cc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function yt(n){n[ks]=!0}var ml=new Set,ka={};function nr(n,i){Gr(n,i),Gr(n+"Capture",i)}function Gr(n,i){for(ka[n]=i,n=0;n<i.length;n++)ml.add(i[n])}var hc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fc={},Ls={};function dc(n){return an.call(Ls,n)?!0:an.call(fc,n)?!1:hc.test(n)?Ls[n]=!0:(fc[n]=!0,!1)}function Mi(n,i,a){if(dc(i))if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+a)}}function vr(n,i,a){if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+a)}}function Qt(n,i,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(i,a,""+l)}}var Us,pc;function $r(n){if(Us===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Us=i&&i[1]||"",pc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Us+n+pc}var La=!1;function Ua(n,i){if(!n||La)return"";La=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(G){var H=G}Reflect.construct(n,[],ee)}else{try{ee.call()}catch(G){H=G}n.call(ee.prototype)}}else{try{throw Error()}catch(G){H=G}(ee=n())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(G){if(G&&H&&typeof G.stack=="string")return[G.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],w=d[1];if(E&&w){var x=E.split(`
`),q=w.split(`
`);for(h=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;h<q.length&&!q[h].includes("DetermineComponentFrameRoot");)h++;if(l===x.length||h===q.length)for(l=x.length-1,h=q.length-1;1<=l&&0<=h&&x[l]!==q[h];)h--;for(;1<=l&&0<=h;l--,h--)if(x[l]!==q[h]){if(l!==1||h!==1)do if(l--,h--,0>h||x[l]!==q[h]){var K=`
`+x[l].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=l&&0<=h);break}}}finally{La=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?$r(a):""}function gl(n){switch(n.tag){case 26:case 27:case 5:return $r(n.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 15:return Ua(n.type,!1);case 11:return Ua(n.type.render,!1);case 1:return Ua(n.type,!0);case 31:return $r("Activity");default:return""}}function ja(n){try{var i="";do i+=gl(n),n=n.return;while(n);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function yn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function yl(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function dd(n){var i=yl(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function za(n){n._valueTracker||(n._valueTracker=dd(n))}function _l(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return n&&(l=yl(n)?n.checked?"true":"false":n.value),n=l,n!==a?(i.setValue(n),!0):!1}function js(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var pd=/[\n"\\]/g;function St(n){return n.replace(pd,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function In(n,i,a,l,h,d,E,w){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),i!=null?E==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+yn(i)):n.value!==""+yn(i)&&(n.value=""+yn(i)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),i!=null?Vi(n,E,yn(i)):a!=null?Vi(n,E,yn(a)):l!=null&&n.removeAttribute("value"),h==null&&d!=null&&(n.defaultChecked=!!d),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+yn(w):n.removeAttribute("name")}function zs(n,i,a,l,h,d,E,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+yn(a):"",i=i!=null?""+yn(i):a,w||i===n.value||(n.value=i),n.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=w?n.checked:!!l,n.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Vi(n,i,a){i==="number"&&js(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Qr(n,i,a,l){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&l&&(n[a].defaultSelected=!0)}else{for(a=""+yn(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,l&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function We(n,i,a){if(i!=null&&(i=""+yn(i),i!==n.value&&(n.value=i),a==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=a!=null?""+yn(a):""}function qs(n,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(at(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=yn(i),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function qn(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Bs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mc(n,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,a):typeof a!="number"||a===0||Bs.has(i)?i==="float"?n.cssFloat=a:n[i]=(""+a).trim():n[i]=a+"px"}function vl(n,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&mc(n,h,l)}else for(var d in i)i.hasOwnProperty(d)&&mc(n,d,i[d])}function El(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var md=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qa(n){return gd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Yr=null;function Bn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Kr=null,Xr=null;function Tl(n){var i=yr(n);if(i&&(n=i.stateNode)){var a=n[Tt]||null;e:switch(n=i.stateNode,i.type){case"input":if(In(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+St(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==n&&l.form===n.form){var h=l[Tt]||null;if(!h)throw Error(s(90));In(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===n.form&&_l(l)}break e;case"textarea":We(n,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Qr(n,!!a.multiple,i,!1)}}}var Er=!1;function gc(n,i,a){if(Er)return n(i,a);Er=!0;try{var l=n(i);return l}finally{if(Er=!1,(Kr!==null||Xr!==null)&&(uh(),Kr&&(i=Kr,n=Xr,Xr=Kr=null,Tl(i),n)))for(i=0;i<n.length;i++)Tl(n[i])}}function Hs(n,i){var a=n.stateNode;if(a===null)return null;var l=a[Tt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hn=!1;if(rr)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){Hn=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{Hn=!1}var Tr=null,Pi=null,Wr=null;function Sl(){if(Wr)return Wr;var n,i=Pi,a=i.length,l,h="value"in Tr?Tr.value:Tr.textContent,d=h.length;for(n=0;n<a&&i[n]===h[n];n++);var E=a-n;for(l=1;l<=E&&i[a-l]===h[d-l];l++);return Wr=h.slice(n,1<l?1-l:void 0)}function Sr(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wr(){return!0}function wl(){return!1}function jt(n){function i(a,l,h,d,E){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(a=n[w],this[w]=a?a(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?wr:wl,this.isPropagationStopped=wl,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),i}var Ge={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=jt(Ge),Gs=_({},Ge,{view:0,detail:0}),yc=jt(Gs),Ha,Fa,Ar,$s=_({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ks,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ar&&(Ar&&n.type==="mousemove"?(Ha=n.screenX-Ar.screenX,Fa=n.screenY-Ar.screenY):Fa=Ha=0,Ar=n),Ha)},movementY:function(n){return"movementY"in n?n.movementY:Fa}}),Fn=jt($s),_c=_({},$s,{dataTransfer:0}),yd=jt(_c),Qs=_({},Gs,{relatedTarget:0}),Ga=jt(Qs),Al=_({},Ge,{animationName:0,elapsedTime:0,pseudoElement:0}),$a=jt(Al),vc=_({},Ge,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Qa=jt(vc),_d=_({},Ge,{data:0}),bl=jt(_d),Ys={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ec={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Tc[n])?!!i[n]:!1}function Ks(){return Rl}var Sc=_({},Gs,{key:function(n){if(n.key){var i=Ys[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Sr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ec[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ks,charCode:function(n){return n.type==="keypress"?Sr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Sr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ya=jt(Sc),wc=_({},$s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Il=jt(wc),Zr=_({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ks}),Ac=jt(Zr),bc=_({},Ge,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rc=jt(bc),Ic=_({},$s,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ka=jt(Ic),_n=_({},Ge,{newState:0,oldState:0}),xc=jt(_n),Cc=[9,13,27,32],br=rr&&"CompositionEvent"in window,c=null;rr&&"documentMode"in document&&(c=document.documentMode);var y=rr&&"TextEvent"in window&&!c,v=rr&&(!br||c&&8<c&&11>=c),b=" ",j=!1;function Q(n,i){switch(n){case"keyup":return Cc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ue=!1;function Ot(n,i){switch(n){case"compositionend":return oe(i);case"keypress":return i.which!==32?null:(j=!0,b);case"textInput":return n=i.data,n===b&&j?null:n;default:return null}}function je(n,i){if(Ue)return n==="compositionend"||!br&&Q(n,i)?(n=Sl(),Wr=Pi=Tr=null,Ue=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v&&i.locale!=="ko"?null:i.data;default:return null}}var zt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mt(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!zt[n.type]:i==="textarea"}function Jr(n,i,a,l){Kr?Xr?Xr.push(l):Xr=[l]:Kr=l,i=mh(i,"onChange"),0<i.length&&(a=new Ba("onChange","change",null,a,l),n.push({event:a,listeners:i}))}var Yt=null,Rr=null;function xl(n){oE(n,0)}function Dc(n){var i=_r(n);if(_l(i))return n}function xy(n,i){if(n==="change")return i}var Cy=!1;if(rr){var vd;if(rr){var Ed="oninput"in document;if(!Ed){var Dy=document.createElement("div");Dy.setAttribute("oninput","return;"),Ed=typeof Dy.oninput=="function"}vd=Ed}else vd=!1;Cy=vd&&(!document.documentMode||9<document.documentMode)}function Ny(){Yt&&(Yt.detachEvent("onpropertychange",Oy),Rr=Yt=null)}function Oy(n){if(n.propertyName==="value"&&Dc(Rr)){var i=[];Jr(i,Rr,n,Bn(n)),gc(xl,i)}}function oA(n,i,a){n==="focusin"?(Ny(),Yt=i,Rr=a,Yt.attachEvent("onpropertychange",Oy)):n==="focusout"&&Ny()}function lA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Dc(Rr)}function uA(n,i){if(n==="click")return Dc(i)}function cA(n,i){if(n==="input"||n==="change")return Dc(i)}function hA(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var xn=typeof Object.is=="function"?Object.is:hA;function Cl(n,i){if(xn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!an.call(i,h)||!xn(n[h],i[h]))return!1}return!0}function My(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vy(n,i){var a=My(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=i&&l>=i)return{node:a,offset:i-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=My(a)}}function Py(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Py(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ky(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=js(n.document);i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=js(n.document)}return i}function Td(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var fA=rr&&"documentMode"in document&&11>=document.documentMode,Xa=null,Sd=null,Dl=null,wd=!1;function Ly(n,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wd||Xa==null||Xa!==js(l)||(l=Xa,"selectionStart"in l&&Td(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Dl&&Cl(Dl,l)||(Dl=l,l=mh(Sd,"onSelect"),0<l.length&&(i=new Ba("onSelect","select",null,i,a),n.push({event:i,listeners:l}),i.target=Xa)))}function Xs(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Wa={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionrun:Xs("Transition","TransitionRun"),transitionstart:Xs("Transition","TransitionStart"),transitioncancel:Xs("Transition","TransitionCancel"),transitionend:Xs("Transition","TransitionEnd")},Ad={},Uy={};rr&&(Uy=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function Ws(n){if(Ad[n])return Ad[n];if(!Wa[n])return n;var i=Wa[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Uy)return Ad[n]=i[a];return n}var jy=Ws("animationend"),zy=Ws("animationiteration"),qy=Ws("animationstart"),dA=Ws("transitionrun"),pA=Ws("transitionstart"),mA=Ws("transitioncancel"),By=Ws("transitionend"),Hy=new Map,bd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bd.push("scrollEnd");function ir(n,i){Hy.set(n,i),nr(i,[n])}var Fy=new WeakMap;function Gn(n,i){if(typeof n=="object"&&n!==null){var a=Fy.get(n);return a!==void 0?a:(i={value:n,source:i,stack:ja(i)},Fy.set(n,i),i)}return{value:n,source:i,stack:ja(i)}}var $n=[],Za=0,Rd=0;function Nc(){for(var n=Za,i=Rd=Za=0;i<n;){var a=$n[i];$n[i++]=null;var l=$n[i];$n[i++]=null;var h=$n[i];$n[i++]=null;var d=$n[i];if($n[i++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}d!==0&&Gy(a,h,d)}}function Oc(n,i,a,l){$n[Za++]=n,$n[Za++]=i,$n[Za++]=a,$n[Za++]=l,Rd|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Id(n,i,a,l){return Oc(n,i,a,l),Mc(n)}function Ja(n,i){return Oc(n,null,null,i),Mc(n)}function Gy(n,i,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=n.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(h=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,h&&i!==null&&(h=31-on(a),n=d.hiddenUpdates,l=n[h],l===null?n[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Mc(n){if(50<tu)throw tu=0,Mp=null,Error(s(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var eo={};function gA(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(n,i,a,l){return new gA(n,i,a,l)}function xd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ei(n,i){var a=n.alternate;return a===null?(a=Cn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function $y(n,i){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Vc(n,i,a,l,h,d){var E=0;if(l=n,typeof n=="function")xd(n)&&(E=1);else if(typeof n=="string")E=_b(n,a,ge.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case I:return n=Cn(31,a,i,h),n.elementType=I,n.lanes=d,n;case U:return Zs(a.children,h,d,i);case $:E=8,h|=24;break;case B:return n=Cn(12,a,i,h|2),n.elementType=B,n.lanes=d,n;case ue:return n=Cn(13,a,i,h),n.elementType=ue,n.lanes=d,n;case de:return n=Cn(19,a,i,h),n.elementType=de,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case J:case re:E=10;break e;case X:E=9;break e;case he:E=11;break e;case C:E=14;break e;case R:E=16,l=null;break e}E=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return i=Cn(E,a,i,h),i.elementType=n,i.type=l,i.lanes=d,i}function Zs(n,i,a,l){return n=Cn(7,n,l,i),n.lanes=a,n}function Cd(n,i,a){return n=Cn(6,n,null,i),n.lanes=a,n}function Dd(n,i,a){return i=Cn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var to=[],no=0,Pc=null,kc=0,Qn=[],Yn=0,Js=null,ti=1,ni="";function ea(n,i){to[no++]=kc,to[no++]=Pc,Pc=n,kc=i}function Qy(n,i,a){Qn[Yn++]=ti,Qn[Yn++]=ni,Qn[Yn++]=Js,Js=n;var l=ti;n=ni;var h=32-on(l)-1;l&=~(1<<h),a+=1;var d=32-on(i)+h;if(30<d){var E=h-h%5;d=(l&(1<<E)-1).toString(32),l>>=E,h-=E,ti=1<<32-on(i)+h|a<<h|l,ni=d+n}else ti=1<<d|a<<h|l,ni=n}function Nd(n){n.return!==null&&(ea(n,1),Qy(n,1,0))}function Od(n){for(;n===Pc;)Pc=to[--no],to[no]=null,kc=to[--no],to[no]=null;for(;n===Js;)Js=Qn[--Yn],Qn[Yn]=null,ni=Qn[--Yn],Qn[Yn]=null,ti=Qn[--Yn],Qn[Yn]=null}var vn=null,pt=null,Fe=!1,ta=null,Ir=!1,Md=Error(s(519));function na(n){var i=Error(s(418,""));throw Ml(Gn(i,n)),Md}function Yy(n){var i=n.stateNode,a=n.type,l=n.memoizedProps;switch(i[Nt]=n,i[Tt]=l,a){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(a=0;a<ru.length;a++)Ve(ru[a],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":Ve("invalid",i),zs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),za(i);break;case"select":Ve("invalid",i);break;case"textarea":Ve("invalid",i),qs(i,l.value,l.defaultValue,l.children),za(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||hE(i.textContent,a)?(l.popover!=null&&(Ve("beforetoggle",i),Ve("toggle",i)),l.onScroll!=null&&Ve("scroll",i),l.onScrollEnd!=null&&Ve("scrollend",i),l.onClick!=null&&(i.onclick=gh),i=!0):i=!1,i||na(n)}function Ky(n){for(vn=n.return;vn;)switch(vn.tag){case 5:case 13:Ir=!1;return;case 27:case 3:Ir=!0;return;default:vn=vn.return}}function Nl(n){if(n!==vn)return!1;if(!Fe)return Ky(n),Fe=!0,!1;var i=n.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Kp(n.type,n.memoizedProps)),a=!a),a&&pt&&na(n),Ky(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(i===0){pt=ar(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;n=n.nextSibling}pt=null}}else i===27?(i=pt,Wi(n.type)?(n=Jp,Jp=null,pt=n):pt=i):pt=vn?ar(n.stateNode.nextSibling):null;return!0}function Ol(){pt=vn=null,Fe=!1}function Xy(){var n=ta;return n!==null&&(wn===null?wn=n:wn.push.apply(wn,n),ta=null),n}function Ml(n){ta===null?ta=[n]:ta.push(n)}var Vd=ne(null),ra=null,ri=null;function ki(n,i,a){se(Vd,i._currentValue),i._currentValue=a}function ii(n){n._currentValue=Vd.current,ae(Vd)}function Pd(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function kd(n,i,a,l){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var d=h.dependencies;if(d!==null){var E=h.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=h;for(var x=0;x<i.length;x++)if(w.context===i[x]){d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),Pd(d.return,a,n),l||(E=null);break e}d=w.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),Pd(E,a,n),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===n){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Vl(n,i,a,l){n=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var w=h.type;xn(h.pendingProps.value,E.value)||(n!==null?n.push(w):n=[w])}}else if(h===ct.current){if(E=h.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(uu):n=[uu])}h=h.return}n!==null&&kd(i,n,a,l),i.flags|=262144}function Lc(n){for(n=n.firstContext;n!==null;){if(!xn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ia(n){ra=n,ri=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ln(n){return Wy(ra,n)}function Uc(n,i){return ra===null&&ia(n),Wy(n,i)}function Wy(n,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ri===null){if(n===null)throw Error(s(308));ri=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else ri=ri.next=i;return a}var yA=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},_A=r.unstable_scheduleCallback,vA=r.unstable_NormalPriority,Vt={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ld(){return{controller:new yA,data:new Map,refCount:0}}function Pl(n){n.refCount--,n.refCount===0&&_A(vA,function(){n.controller.abort()})}var kl=null,Ud=0,ro=0,io=null;function EA(n,i){if(kl===null){var a=kl=[];Ud=0,ro=zp(),io={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ud++,i.then(Zy,Zy),i}function Zy(){if(--Ud===0&&kl!==null){io!==null&&(io.status="fulfilled");var n=kl;kl=null,ro=0,io=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function TA(n,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Jy=Y.S;Y.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&EA(n,i),Jy!==null&&Jy(n,i)};var sa=ne(null);function jd(){var n=sa.current;return n!==null?n:rt.pooledCache}function jc(n,i){i===null?se(sa,sa.current):se(sa,i.pool)}function e_(){var n=jd();return n===null?null:{parent:Vt._currentValue,pool:n}}var Ll=Error(s(460)),t_=Error(s(474)),zc=Error(s(542)),zd={then:function(){}};function n_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function qc(){}function r_(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(qc,qc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,s_(n),n;default:if(typeof i.status=="string")i.then(qc,qc);else{if(n=rt,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,s_(n),n}throw Ul=i,Ll}}var Ul=null;function i_(){if(Ul===null)throw Error(s(459));var n=Ul;return Ul=null,n}function s_(n){if(n===Ll||n===zc)throw Error(s(483))}var Li=!1;function qd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ui(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ji(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ke&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Mc(n),Gy(n,null,a),i}return Oc(n,l,i,a),Mc(n)}function jl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,dl(n,a)}}function Hd(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}var Fd=!1;function zl(){if(Fd){var n=io;if(n!==null)throw n}}function ql(n,i,a,l){Fd=!1;var h=n.updateQueue;Li=!1;var d=h.firstBaseUpdate,E=h.lastBaseUpdate,w=h.shared.pending;if(w!==null){h.shared.pending=null;var x=w,q=x.next;x.next=null,E===null?d=q:E.next=q,E=x;var K=n.alternate;K!==null&&(K=K.updateQueue,w=K.lastBaseUpdate,w!==E&&(w===null?K.firstBaseUpdate=q:w.next=q,K.lastBaseUpdate=x))}if(d!==null){var ee=h.baseState;E=0,K=q=x=null,w=d;do{var H=w.lane&-536870913,G=H!==w.lane;if(G?(ze&H)===H:(l&H)===H){H!==0&&H===ro&&(Fd=!0),K!==null&&(K=K.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ae=n,Ee=w;H=i;var et=a;switch(Ee.tag){case 1:if(Ae=Ee.payload,typeof Ae=="function"){ee=Ae.call(et,ee,H);break e}ee=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=Ee.payload,H=typeof Ae=="function"?Ae.call(et,ee,H):Ae,H==null)break e;ee=_({},ee,H);break e;case 2:Li=!0}}H=w.callback,H!==null&&(n.flags|=64,G&&(n.flags|=8192),G=h.callbacks,G===null?h.callbacks=[H]:G.push(H))}else G={lane:H,tag:w.tag,payload:w.payload,callback:w.callback,next:null},K===null?(q=K=G,x=ee):K=K.next=G,E|=H;if(w=w.next,w===null){if(w=h.shared.pending,w===null)break;G=w,w=G.next,G.next=null,h.lastBaseUpdate=G,h.shared.pending=null}}while(!0);K===null&&(x=ee),h.baseState=x,h.firstBaseUpdate=q,h.lastBaseUpdate=K,d===null&&(h.shared.lanes=0),Qi|=E,n.lanes=E,n.memoizedState=ee}}function a_(n,i){if(typeof n!="function")throw Error(s(191,n));n.call(i)}function o_(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)a_(a[n],i)}var so=ne(null),Bc=ne(0);function l_(n,i){n=hi,se(Bc,n),se(so,i),hi=n|i.baseLanes}function Gd(){se(Bc,hi),se(so,so.current)}function $d(){hi=Bc.current,ae(so),ae(Bc)}var zi=0,Ne=null,Ze=null,wt=null,Hc=!1,ao=!1,aa=!1,Fc=0,Bl=0,oo=null,SA=0;function _t(){throw Error(s(321))}function Qd(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!xn(n[a],i[a]))return!1;return!0}function Yd(n,i,a,l,h,d){return zi=d,Ne=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Y.H=n===null||n.memoizedState===null?G_:$_,aa=!1,d=a(l,h),aa=!1,ao&&(d=c_(i,a,l,h)),u_(n),d}function u_(n){Y.H=Xc;var i=Ze!==null&&Ze.next!==null;if(zi=0,wt=Ze=Ne=null,Hc=!1,Bl=0,oo=null,i)throw Error(s(300));n===null||qt||(n=n.dependencies,n!==null&&Lc(n)&&(qt=!0))}function c_(n,i,a,l){Ne=n;var h=0;do{if(ao&&(oo=null),Bl=0,ao=!1,25<=h)throw Error(s(301));if(h+=1,wt=Ze=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Y.H=CA,d=i(a,l)}while(ao);return d}function wA(){var n=Y.H,i=n.useState()[0];return i=typeof i.then=="function"?Hl(i):i,n=n.useState()[0],(Ze!==null?Ze.memoizedState:null)!==n&&(Ne.flags|=1024),i}function Kd(){var n=Fc!==0;return Fc=0,n}function Xd(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function Wd(n){if(Hc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Hc=!1}zi=0,wt=Ze=Ne=null,ao=!1,Bl=Fc=0,oo=null}function Tn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ne.memoizedState=wt=n:wt=wt.next=n,wt}function At(){if(Ze===null){var n=Ne.alternate;n=n!==null?n.memoizedState:null}else n=Ze.next;var i=wt===null?Ne.memoizedState:wt.next;if(i!==null)wt=i,Ze=n;else{if(n===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));Ze=n,n={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},wt===null?Ne.memoizedState=wt=n:wt=wt.next=n}return wt}function Zd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hl(n){var i=Bl;return Bl+=1,oo===null&&(oo=[]),n=r_(oo,n,i),i=Ne,(wt===null?i.memoizedState:wt.next)===null&&(i=i.alternate,Y.H=i===null||i.memoizedState===null?G_:$_),n}function Gc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Hl(n);if(n.$$typeof===re)return ln(n)}throw Error(s(438,String(n)))}function Jd(n){var i=null,a=Ne.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Zd(),Ne.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),l=0;l<n;l++)a[l]=V;return i.index++,a}function si(n,i){return typeof i=="function"?i(n):i}function $c(n){var i=At();return ep(i,Ze,n)}function ep(n,i,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=n.baseQueue,d=l.pending;if(d!==null){if(h!==null){var E=h.next;h.next=d.next,d.next=E}i.baseQueue=h=d,l.pending=null}if(d=n.baseState,h===null)n.memoizedState=d;else{i=h.next;var w=E=null,x=null,q=i,K=!1;do{var ee=q.lane&-536870913;if(ee!==q.lane?(ze&ee)===ee:(zi&ee)===ee){var H=q.revertLane;if(H===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),ee===ro&&(K=!0);else if((zi&H)===H){q=q.next,H===ro&&(K=!0);continue}else ee={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},x===null?(w=x=ee,E=d):x=x.next=ee,Ne.lanes|=H,Qi|=H;ee=q.action,aa&&a(d,ee),d=q.hasEagerState?q.eagerState:a(d,ee)}else H={lane:ee,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},x===null?(w=x=H,E=d):x=x.next=H,Ne.lanes|=ee,Qi|=ee;q=q.next}while(q!==null&&q!==i);if(x===null?E=d:x.next=w,!xn(d,n.memoizedState)&&(qt=!0,K&&(a=io,a!==null)))throw a;n.memoizedState=d,n.baseState=E,n.baseQueue=x,l.lastRenderedState=d}return h===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function tp(n){var i=At(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do d=n(d,E.action),E=E.next;while(E!==h);xn(d,i.memoizedState)||(qt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function h_(n,i,a){var l=Ne,h=At(),d=Fe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var E=!xn((Ze||h).memoizedState,a);E&&(h.memoizedState=a,qt=!0),h=h.queue;var w=p_.bind(null,l,h,n);if(Fl(2048,8,w,[n]),h.getSnapshot!==i||E||wt!==null&&wt.memoizedState.tag&1){if(l.flags|=2048,lo(9,Qc(),d_.bind(null,l,h,a,i),null),rt===null)throw Error(s(349));d||(zi&124)!==0||f_(l,i,a)}return a}function f_(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ne.updateQueue,i===null?(i=Zd(),Ne.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function d_(n,i,a,l){i.value=a,i.getSnapshot=l,m_(i)&&g_(n)}function p_(n,i,a){return a(function(){m_(i)&&g_(n)})}function m_(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!xn(n,a)}catch{return!0}}function g_(n){var i=Ja(n,2);i!==null&&Vn(i,n,2)}function np(n){var i=Tn();if(typeof n=="function"){var a=n;if(n=a(),aa){Rn(!0);try{a()}finally{Rn(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:n},i}function y_(n,i,a,l){return n.baseState=a,ep(n,Ze,typeof l=="function"?l:si)}function AA(n,i,a,l,h){if(Kc(n))throw Error(s(485));if(n=i.action,n!==null){var d={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};Y.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,__(i,d)):(d.next=a.next,i.pending=a.next=d)}}function __(n,i){var a=i.action,l=i.payload,h=n.state;if(i.isTransition){var d=Y.T,E={};Y.T=E;try{var w=a(h,l),x=Y.S;x!==null&&x(E,w),v_(n,i,w)}catch(q){rp(n,i,q)}finally{Y.T=d}}else try{d=a(h,l),v_(n,i,d)}catch(q){rp(n,i,q)}}function v_(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){E_(n,i,l)},function(l){return rp(n,i,l)}):E_(n,i,a)}function E_(n,i,a){i.status="fulfilled",i.value=a,T_(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,__(n,a)))}function rp(n,i,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,T_(i),i=i.next;while(i!==l)}n.action=null}function T_(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function S_(n,i){return i}function w_(n,i){if(Fe){var a=rt.formState;if(a!==null){e:{var l=Ne;if(Fe){if(pt){t:{for(var h=pt,d=Ir;h.nodeType!==8;){if(!d){h=null;break t}if(h=ar(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){pt=ar(h.nextSibling),l=h.data==="F!";break e}}na(l)}l=!1}l&&(i=a[0])}}return a=Tn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:S_,lastRenderedState:i},a.queue=l,a=B_.bind(null,Ne,l),l.dispatch=a,l=np(!1),d=lp.bind(null,Ne,!1,l.queue),l=Tn(),h={state:i,dispatch:null,action:n,pending:null},l.queue=h,a=AA.bind(null,Ne,h,d,a),h.dispatch=a,l.memoizedState=n,[i,a,!1]}function A_(n){var i=At();return b_(i,Ze,n)}function b_(n,i,a){if(i=ep(n,i,S_)[0],n=$c(si)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Hl(i)}catch(E){throw E===Ll?zc:E}else l=i;i=At();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Ne.flags|=2048,lo(9,Qc(),bA.bind(null,h,a),null)),[l,d,n]}function bA(n,i){n.action=i}function R_(n){var i=At(),a=Ze;if(a!==null)return b_(i,a,n);At(),i=i.memoizedState,a=At();var l=a.queue.dispatch;return a.memoizedState=n,[i,l,!1]}function lo(n,i,a,l){return n={tag:n,create:a,deps:l,inst:i,next:null},i=Ne.updateQueue,i===null&&(i=Zd(),Ne.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n),n}function Qc(){return{destroy:void 0,resource:void 0}}function I_(){return At().memoizedState}function Yc(n,i,a,l){var h=Tn();l=l===void 0?null:l,Ne.flags|=n,h.memoizedState=lo(1|i,Qc(),a,l)}function Fl(n,i,a,l){var h=At();l=l===void 0?null:l;var d=h.memoizedState.inst;Ze!==null&&l!==null&&Qd(l,Ze.memoizedState.deps)?h.memoizedState=lo(i,d,a,l):(Ne.flags|=n,h.memoizedState=lo(1|i,d,a,l))}function x_(n,i){Yc(8390656,8,n,i)}function C_(n,i){Fl(2048,8,n,i)}function D_(n,i){return Fl(4,2,n,i)}function N_(n,i){return Fl(4,4,n,i)}function O_(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function M_(n,i,a){a=a!=null?a.concat([n]):null,Fl(4,4,O_.bind(null,i,n),a)}function ip(){}function V_(n,i){var a=At();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Qd(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function P_(n,i){var a=At();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Qd(i,l[1]))return l[0];if(l=n(),aa){Rn(!0);try{n()}finally{Rn(!1)}}return a.memoizedState=[l,i],l}function sp(n,i,a){return a===void 0||(zi&1073741824)!==0?n.memoizedState=i:(n.memoizedState=a,n=Uv(),Ne.lanes|=n,Qi|=n,a)}function k_(n,i,a,l){return xn(a,i)?a:so.current!==null?(n=sp(n,a,l),xn(n,i)||(qt=!0),n):(zi&42)===0?(qt=!0,n.memoizedState=a):(n=Uv(),Ne.lanes|=n,Qi|=n,i)}function L_(n,i,a,l,h){var d=le.p;le.p=d!==0&&8>d?d:8;var E=Y.T,w={};Y.T=w,lp(n,!1,i,a);try{var x=h(),q=Y.S;if(q!==null&&q(w,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var K=TA(x,l);Gl(n,i,K,Mn(n))}else Gl(n,i,l,Mn(n))}catch(ee){Gl(n,i,{then:function(){},status:"rejected",reason:ee},Mn())}finally{le.p=d,Y.T=E}}function RA(){}function ap(n,i,a,l){if(n.tag!==5)throw Error(s(476));var h=U_(n).queue;L_(n,h,i,me,a===null?RA:function(){return j_(n),a(l)})}function U_(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:me},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function j_(n){var i=U_(n).next.queue;Gl(n,i,{},Mn())}function op(){return ln(uu)}function z_(){return At().memoizedState}function q_(){return At().memoizedState}function IA(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=Mn();n=Ui(a);var l=ji(i,n,a);l!==null&&(Vn(l,i,a),jl(l,i,a)),i={cache:Ld()},n.payload=i;return}i=i.return}}function xA(n,i,a){var l=Mn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Kc(n)?H_(i,a):(a=Id(n,i,a,l),a!==null&&(Vn(a,n,l),F_(a,i,l)))}function B_(n,i,a){var l=Mn();Gl(n,i,a,l)}function Gl(n,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Kc(n))H_(i,h);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,w=d(E,a);if(h.hasEagerState=!0,h.eagerState=w,xn(w,E))return Oc(n,i,h,0),rt===null&&Nc(),!1}catch{}finally{}if(a=Id(n,i,h,l),a!==null)return Vn(a,n,l),F_(a,i,l),!0}return!1}function lp(n,i,a,l){if(l={lane:2,revertLane:zp(),action:l,hasEagerState:!1,eagerState:null,next:null},Kc(n)){if(i)throw Error(s(479))}else i=Id(n,a,l,2),i!==null&&Vn(i,n,2)}function Kc(n){var i=n.alternate;return n===Ne||i!==null&&i===Ne}function H_(n,i){ao=Hc=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function F_(n,i,a){if((a&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,dl(n,a)}}var Xc={readContext:ln,use:Gc,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t},G_={readContext:ln,use:Gc,useCallback:function(n,i){return Tn().memoizedState=[n,i===void 0?null:i],n},useContext:ln,useEffect:x_,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,Yc(4194308,4,O_.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Yc(4194308,4,n,i)},useInsertionEffect:function(n,i){Yc(4,2,n,i)},useMemo:function(n,i){var a=Tn();i=i===void 0?null:i;var l=n();if(aa){Rn(!0);try{n()}finally{Rn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(n,i,a){var l=Tn();if(a!==void 0){var h=a(i);if(aa){Rn(!0);try{a(i)}finally{Rn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},l.queue=n,n=n.dispatch=xA.bind(null,Ne,n),[l.memoizedState,n]},useRef:function(n){var i=Tn();return n={current:n},i.memoizedState=n},useState:function(n){n=np(n);var i=n.queue,a=B_.bind(null,Ne,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:ip,useDeferredValue:function(n,i){var a=Tn();return sp(a,n,i)},useTransition:function(){var n=np(!1);return n=L_.bind(null,Ne,n.queue,!0,!1),Tn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var l=Ne,h=Tn();if(Fe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),rt===null)throw Error(s(349));(ze&124)!==0||f_(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,x_(p_.bind(null,l,d,n),[n]),l.flags|=2048,lo(9,Qc(),d_.bind(null,l,d,a,i),null),a},useId:function(){var n=Tn(),i=rt.identifierPrefix;if(Fe){var a=ni,l=ti;a=(l&~(1<<32-on(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Fc++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=SA++,i="«"+i+"r"+a.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:op,useFormState:w_,useActionState:w_,useOptimistic:function(n){var i=Tn();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=lp.bind(null,Ne,!0,a),a.dispatch=i,[n,i]},useMemoCache:Jd,useCacheRefresh:function(){return Tn().memoizedState=IA.bind(null,Ne)}},$_={readContext:ln,use:Gc,useCallback:V_,useContext:ln,useEffect:C_,useImperativeHandle:M_,useInsertionEffect:D_,useLayoutEffect:N_,useMemo:P_,useReducer:$c,useRef:I_,useState:function(){return $c(si)},useDebugValue:ip,useDeferredValue:function(n,i){var a=At();return k_(a,Ze.memoizedState,n,i)},useTransition:function(){var n=$c(si)[0],i=At().memoizedState;return[typeof n=="boolean"?n:Hl(n),i]},useSyncExternalStore:h_,useId:z_,useHostTransitionStatus:op,useFormState:A_,useActionState:A_,useOptimistic:function(n,i){var a=At();return y_(a,Ze,n,i)},useMemoCache:Jd,useCacheRefresh:q_},CA={readContext:ln,use:Gc,useCallback:V_,useContext:ln,useEffect:C_,useImperativeHandle:M_,useInsertionEffect:D_,useLayoutEffect:N_,useMemo:P_,useReducer:tp,useRef:I_,useState:function(){return tp(si)},useDebugValue:ip,useDeferredValue:function(n,i){var a=At();return Ze===null?sp(a,n,i):k_(a,Ze.memoizedState,n,i)},useTransition:function(){var n=tp(si)[0],i=At().memoizedState;return[typeof n=="boolean"?n:Hl(n),i]},useSyncExternalStore:h_,useId:z_,useHostTransitionStatus:op,useFormState:R_,useActionState:R_,useOptimistic:function(n,i){var a=At();return Ze!==null?y_(a,Ze,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Jd,useCacheRefresh:q_},uo=null,$l=0;function Wc(n){var i=$l;return $l+=1,uo===null&&(uo=[]),r_(uo,n,i)}function Ql(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Zc(n,i){throw i.$$typeof===T?Error(s(525)):(n=Object.prototype.toString.call(i),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function Q_(n){var i=n._init;return i(n._payload)}function Y_(n){function i(k,M){if(n){var z=k.deletions;z===null?(k.deletions=[M],k.flags|=16):z.push(M)}}function a(k,M){if(!n)return null;for(;M!==null;)i(k,M),M=M.sibling;return null}function l(k){for(var M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function h(k,M){return k=ei(k,M),k.index=0,k.sibling=null,k}function d(k,M,z){return k.index=z,n?(z=k.alternate,z!==null?(z=z.index,z<M?(k.flags|=67108866,M):z):(k.flags|=67108866,M)):(k.flags|=1048576,M)}function E(k){return n&&k.alternate===null&&(k.flags|=67108866),k}function w(k,M,z,W){return M===null||M.tag!==6?(M=Cd(z,k.mode,W),M.return=k,M):(M=h(M,z),M.return=k,M)}function x(k,M,z,W){var pe=z.type;return pe===U?K(k,M,z.props.children,W,z.key):M!==null&&(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===R&&Q_(pe)===M.type)?(M=h(M,z.props),Ql(M,z),M.return=k,M):(M=Vc(z.type,z.key,z.props,null,k.mode,W),Ql(M,z),M.return=k,M)}function q(k,M,z,W){return M===null||M.tag!==4||M.stateNode.containerInfo!==z.containerInfo||M.stateNode.implementation!==z.implementation?(M=Dd(z,k.mode,W),M.return=k,M):(M=h(M,z.children||[]),M.return=k,M)}function K(k,M,z,W,pe){return M===null||M.tag!==7?(M=Zs(z,k.mode,W,pe),M.return=k,M):(M=h(M,z),M.return=k,M)}function ee(k,M,z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Cd(""+M,k.mode,z),M.return=k,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case A:return z=Vc(M.type,M.key,M.props,null,k.mode,z),Ql(z,M),z.return=k,z;case N:return M=Dd(M,k.mode,z),M.return=k,M;case R:var W=M._init;return M=W(M._payload),ee(k,M,z)}if(at(M)||L(M))return M=Zs(M,k.mode,z,null),M.return=k,M;if(typeof M.then=="function")return ee(k,Wc(M),z);if(M.$$typeof===re)return ee(k,Uc(k,M),z);Zc(k,M)}return null}function H(k,M,z,W){var pe=M!==null?M.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return pe!==null?null:w(k,M,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case A:return z.key===pe?x(k,M,z,W):null;case N:return z.key===pe?q(k,M,z,W):null;case R:return pe=z._init,z=pe(z._payload),H(k,M,z,W)}if(at(z)||L(z))return pe!==null?null:K(k,M,z,W,null);if(typeof z.then=="function")return H(k,M,Wc(z),W);if(z.$$typeof===re)return H(k,M,Uc(k,z),W);Zc(k,z)}return null}function G(k,M,z,W,pe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return k=k.get(z)||null,w(M,k,""+W,pe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case A:return k=k.get(W.key===null?z:W.key)||null,x(M,k,W,pe);case N:return k=k.get(W.key===null?z:W.key)||null,q(M,k,W,pe);case R:var Oe=W._init;return W=Oe(W._payload),G(k,M,z,W,pe)}if(at(W)||L(W))return k=k.get(z)||null,K(M,k,W,pe,null);if(typeof W.then=="function")return G(k,M,z,Wc(W),pe);if(W.$$typeof===re)return G(k,M,z,Uc(M,W),pe);Zc(M,W)}return null}function Ae(k,M,z,W){for(var pe=null,Oe=null,ye=M,Te=M=0,Ht=null;ye!==null&&Te<z.length;Te++){ye.index>Te?(Ht=ye,ye=null):Ht=ye.sibling;var He=H(k,ye,z[Te],W);if(He===null){ye===null&&(ye=Ht);break}n&&ye&&He.alternate===null&&i(k,ye),M=d(He,M,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He,ye=Ht}if(Te===z.length)return a(k,ye),Fe&&ea(k,Te),pe;if(ye===null){for(;Te<z.length;Te++)ye=ee(k,z[Te],W),ye!==null&&(M=d(ye,M,Te),Oe===null?pe=ye:Oe.sibling=ye,Oe=ye);return Fe&&ea(k,Te),pe}for(ye=l(ye);Te<z.length;Te++)Ht=G(ye,k,Te,z[Te],W),Ht!==null&&(n&&Ht.alternate!==null&&ye.delete(Ht.key===null?Te:Ht.key),M=d(Ht,M,Te),Oe===null?pe=Ht:Oe.sibling=Ht,Oe=Ht);return n&&ye.forEach(function(ns){return i(k,ns)}),Fe&&ea(k,Te),pe}function Ee(k,M,z,W){if(z==null)throw Error(s(151));for(var pe=null,Oe=null,ye=M,Te=M=0,Ht=null,He=z.next();ye!==null&&!He.done;Te++,He=z.next()){ye.index>Te?(Ht=ye,ye=null):Ht=ye.sibling;var ns=H(k,ye,He.value,W);if(ns===null){ye===null&&(ye=Ht);break}n&&ye&&ns.alternate===null&&i(k,ye),M=d(ns,M,Te),Oe===null?pe=ns:Oe.sibling=ns,Oe=ns,ye=Ht}if(He.done)return a(k,ye),Fe&&ea(k,Te),pe;if(ye===null){for(;!He.done;Te++,He=z.next())He=ee(k,He.value,W),He!==null&&(M=d(He,M,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He);return Fe&&ea(k,Te),pe}for(ye=l(ye);!He.done;Te++,He=z.next())He=G(ye,k,Te,He.value,W),He!==null&&(n&&He.alternate!==null&&ye.delete(He.key===null?Te:He.key),M=d(He,M,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He);return n&&ye.forEach(function(Db){return i(k,Db)}),Fe&&ea(k,Te),pe}function et(k,M,z,W){if(typeof z=="object"&&z!==null&&z.type===U&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case A:e:{for(var pe=z.key;M!==null;){if(M.key===pe){if(pe=z.type,pe===U){if(M.tag===7){a(k,M.sibling),W=h(M,z.props.children),W.return=k,k=W;break e}}else if(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===R&&Q_(pe)===M.type){a(k,M.sibling),W=h(M,z.props),Ql(W,z),W.return=k,k=W;break e}a(k,M);break}else i(k,M);M=M.sibling}z.type===U?(W=Zs(z.props.children,k.mode,W,z.key),W.return=k,k=W):(W=Vc(z.type,z.key,z.props,null,k.mode,W),Ql(W,z),W.return=k,k=W)}return E(k);case N:e:{for(pe=z.key;M!==null;){if(M.key===pe)if(M.tag===4&&M.stateNode.containerInfo===z.containerInfo&&M.stateNode.implementation===z.implementation){a(k,M.sibling),W=h(M,z.children||[]),W.return=k,k=W;break e}else{a(k,M);break}else i(k,M);M=M.sibling}W=Dd(z,k.mode,W),W.return=k,k=W}return E(k);case R:return pe=z._init,z=pe(z._payload),et(k,M,z,W)}if(at(z))return Ae(k,M,z,W);if(L(z)){if(pe=L(z),typeof pe!="function")throw Error(s(150));return z=pe.call(z),Ee(k,M,z,W)}if(typeof z.then=="function")return et(k,M,Wc(z),W);if(z.$$typeof===re)return et(k,M,Uc(k,z),W);Zc(k,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,M!==null&&M.tag===6?(a(k,M.sibling),W=h(M,z),W.return=k,k=W):(a(k,M),W=Cd(z,k.mode,W),W.return=k,k=W),E(k)):a(k,M)}return function(k,M,z,W){try{$l=0;var pe=et(k,M,z,W);return uo=null,pe}catch(ye){if(ye===Ll||ye===zc)throw ye;var Oe=Cn(29,ye,null,k.mode);return Oe.lanes=W,Oe.return=k,Oe}finally{}}}var co=Y_(!0),K_=Y_(!1),Kn=ne(null),xr=null;function qi(n){var i=n.alternate;se(Pt,Pt.current&1),se(Kn,n),xr===null&&(i===null||so.current!==null||i.memoizedState!==null)&&(xr=n)}function X_(n){if(n.tag===22){if(se(Pt,Pt.current),se(Kn,n),xr===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(xr=n)}}else Bi()}function Bi(){se(Pt,Pt.current),se(Kn,Kn.current)}function ai(n){ae(Kn),xr===n&&(xr=null),ae(Pt)}var Pt=ne(0);function Jc(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Zp(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function up(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:_({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var cp={enqueueSetState:function(n,i,a){n=n._reactInternals;var l=Mn(),h=Ui(l);h.payload=i,a!=null&&(h.callback=a),i=ji(n,h,l),i!==null&&(Vn(i,n,l),jl(i,n,l))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=Mn(),h=Ui(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=ji(n,h,l),i!==null&&(Vn(i,n,l),jl(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Mn(),l=Ui(a);l.tag=2,i!=null&&(l.callback=i),i=ji(n,l,a),i!==null&&(Vn(i,n,a),jl(i,n,a))}};function W_(n,i,a,l,h,d,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!Cl(a,l)||!Cl(h,d):!0}function Z_(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&cp.enqueueReplaceState(i,i.state,null)}function oa(n,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(n=n.defaultProps){a===i&&(a=_({},a));for(var h in n)a[h]===void 0&&(a[h]=n[h])}return a}var eh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function J_(n){eh(n)}function ev(n){console.error(n)}function tv(n){eh(n)}function th(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function nv(n,i,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function hp(n,i,a){return a=Ui(a),a.tag=3,a.payload={element:null},a.callback=function(){th(n,i)},a}function rv(n){return n=Ui(n),n.tag=3,n}function iv(n,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;n.payload=function(){return h(d)},n.callback=function(){nv(i,a,l)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){nv(i,a,l),typeof h!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function DA(n,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Vl(i,a,h,!0),a=Kn.current,a!==null){switch(a.tag){case 13:return xr===null?Pp():a.alternate===null&&mt===0&&(mt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===zd?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Lp(n,l,h)),!1;case 22:return a.flags|=65536,l===zd?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Lp(n,l,h)),!1}throw Error(s(435,a.tag))}return Lp(n,l,h),Pp(),!1}if(Fe)return i=Kn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Md&&(n=Error(s(422),{cause:l}),Ml(Gn(n,a)))):(l!==Md&&(i=Error(s(423),{cause:l}),Ml(Gn(i,a))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,l=Gn(l,a),h=hp(n.stateNode,l,h),Hd(n,h),mt!==4&&(mt=2)),!1;var d=Error(s(520),{cause:l});if(d=Gn(d,a),eu===null?eu=[d]:eu.push(d),mt!==4&&(mt=2),i===null)return!0;l=Gn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=h&-h,a.lanes|=n,n=hp(a.stateNode,l,n),Hd(a,n),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Yi===null||!Yi.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=rv(h),iv(h,n,a,l),Hd(a,h),!1}a=a.return}while(a!==null);return!1}var sv=Error(s(461)),qt=!1;function Kt(n,i,a,l){i.child=n===null?K_(i,null,a,l):co(i,n.child,a,l)}function av(n,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var E={};for(var w in l)w!=="ref"&&(E[w]=l[w])}else E=l;return ia(i),l=Yd(n,i,a,E,d,h),w=Kd(),n!==null&&!qt?(Xd(n,i,h),oi(n,i,h)):(Fe&&w&&Nd(i),i.flags|=1,Kt(n,i,l,h),i.child)}function ov(n,i,a,l,h){if(n===null){var d=a.type;return typeof d=="function"&&!xd(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,lv(n,i,d,l,h)):(n=Vc(a.type,null,l,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(d=n.child,!vp(n,h)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:Cl,a(E,l)&&n.ref===i.ref)return oi(n,i,h)}return i.flags|=1,n=ei(d,l),n.ref=i.ref,n.return=i,i.child=n}function lv(n,i,a,l,h){if(n!==null){var d=n.memoizedProps;if(Cl(d,l)&&n.ref===i.ref)if(qt=!1,i.pendingProps=l=d,vp(n,h))(n.flags&131072)!==0&&(qt=!0);else return i.lanes=n.lanes,oi(n,i,h)}return fp(n,i,a,l,h)}function uv(n,i,a){var l=i.pendingProps,h=l.children,d=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,n!==null){for(h=i.child=n.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return cv(n,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&jc(i,d!==null?d.cachePool:null),d!==null?l_(i,d):Gd(),X_(i);else return i.lanes=i.childLanes=536870912,cv(n,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(jc(i,d.cachePool),l_(i,d),Bi(),i.memoizedState=null):(n!==null&&jc(i,null),Gd(),Bi());return Kt(n,i,h,a),i.child}function cv(n,i,a,l){var h=jd();return h=h===null?null:{parent:Vt._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},n!==null&&jc(i,null),Gd(),X_(i),n!==null&&Vl(n,i,l,!0),null}function nh(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function fp(n,i,a,l,h){return ia(i),a=Yd(n,i,a,l,void 0,h),l=Kd(),n!==null&&!qt?(Xd(n,i,h),oi(n,i,h)):(Fe&&l&&Nd(i),i.flags|=1,Kt(n,i,a,h),i.child)}function hv(n,i,a,l,h,d){return ia(i),i.updateQueue=null,a=c_(i,l,a,h),u_(n),l=Kd(),n!==null&&!qt?(Xd(n,i,d),oi(n,i,d)):(Fe&&l&&Nd(i),i.flags|=1,Kt(n,i,a,d),i.child)}function fv(n,i,a,l,h){if(ia(i),i.stateNode===null){var d=eo,E=a.contextType;typeof E=="object"&&E!==null&&(d=ln(E)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=cp,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},qd(i),E=a.contextType,d.context=typeof E=="object"&&E!==null?ln(E):eo,d.state=i.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(up(i,a,E,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&cp.enqueueReplaceState(d,d.state,null),ql(i,l,d,h),zl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){d=i.stateNode;var w=i.memoizedProps,x=oa(a,w);d.props=x;var q=d.context,K=a.contextType;E=eo,typeof K=="object"&&K!==null&&(E=ln(K));var ee=a.getDerivedStateFromProps;K=typeof ee=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||q!==E)&&Z_(i,d,l,E),Li=!1;var H=i.memoizedState;d.state=H,ql(i,l,d,h),zl(),q=i.memoizedState,w||H!==q||Li?(typeof ee=="function"&&(up(i,a,ee,l),q=i.memoizedState),(x=Li||W_(i,a,x,l,H,q,E))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=q),d.props=l,d.state=q,d.context=E,l=x):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Bd(n,i),E=i.memoizedProps,K=oa(a,E),d.props=K,ee=i.pendingProps,H=d.context,q=a.contextType,x=eo,typeof q=="object"&&q!==null&&(x=ln(q)),w=a.getDerivedStateFromProps,(q=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==ee||H!==x)&&Z_(i,d,l,x),Li=!1,H=i.memoizedState,d.state=H,ql(i,l,d,h),zl();var G=i.memoizedState;E!==ee||H!==G||Li||n!==null&&n.dependencies!==null&&Lc(n.dependencies)?(typeof w=="function"&&(up(i,a,w,l),G=i.memoizedState),(K=Li||W_(i,a,K,l,H,G,x)||n!==null&&n.dependencies!==null&&Lc(n.dependencies))?(q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,G,x),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,G,x)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=G),d.props=l,d.state=G,d.context=x,l=K):(typeof d.componentDidUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),l=!1)}return d=l,nh(n,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,n!==null&&l?(i.child=co(i,n.child,null,h),i.child=co(i,null,a,h)):Kt(n,i,a,h),i.memoizedState=d.state,n=i.child):n=oi(n,i,h),n}function dv(n,i,a,l){return Ol(),i.flags|=256,Kt(n,i,a,l),i.child}var dp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pp(n){return{baseLanes:n,cachePool:e_()}}function mp(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=Xn),n}function pv(n,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=n!==null&&n.memoizedState===null?!1:(Pt.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,n===null){if(Fe){if(h?qi(i):Bi(),Fe){var w=pt,x;if(x=w){e:{for(x=w,w=Ir;x.nodeType!==8;){if(!w){w=null;break e}if(x=ar(x.nextSibling),x===null){w=null;break e}}w=x}w!==null?(i.memoizedState={dehydrated:w,treeContext:Js!==null?{id:ti,overflow:ni}:null,retryLane:536870912,hydrationErrors:null},x=Cn(18,null,null,0),x.stateNode=w,x.return=i,i.child=x,vn=i,pt=null,x=!0):x=!1}x||na(i)}if(w=i.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Zp(w)?i.lanes=32:i.lanes=536870912,null;ai(i)}return w=l.children,l=l.fallback,h?(Bi(),h=i.mode,w=rh({mode:"hidden",children:w},h),l=Zs(l,h,a,null),w.return=i,l.return=i,w.sibling=l,i.child=w,h=i.child,h.memoizedState=pp(a),h.childLanes=mp(n,E,a),i.memoizedState=dp,l):(qi(i),gp(i,w))}if(x=n.memoizedState,x!==null&&(w=x.dehydrated,w!==null)){if(d)i.flags&256?(qi(i),i.flags&=-257,i=yp(n,i,a)):i.memoizedState!==null?(Bi(),i.child=n.child,i.flags|=128,i=null):(Bi(),h=l.fallback,w=i.mode,l=rh({mode:"visible",children:l.children},w),h=Zs(h,w,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,co(i,n.child,null,a),l=i.child,l.memoizedState=pp(a),l.childLanes=mp(n,E,a),i.memoizedState=dp,i=h);else if(qi(i),Zp(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var q=E.dgst;E=q,l=Error(s(419)),l.stack="",l.digest=E,Ml({value:l,source:null,stack:null}),i=yp(n,i,a)}else if(qt||Vl(n,i,a,!1),E=(a&n.childLanes)!==0,qt||E){if(E=rt,E!==null&&(l=a&-a,l=(l&42)!==0?1:Ci(l),l=(l&(E.suspendedLanes|a))!==0?0:l,l!==0&&l!==x.retryLane))throw x.retryLane=l,Ja(n,l),Vn(E,n,l),sv;w.data==="$?"||Pp(),i=yp(n,i,a)}else w.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=x.treeContext,pt=ar(w.nextSibling),vn=i,Fe=!0,ta=null,Ir=!1,n!==null&&(Qn[Yn++]=ti,Qn[Yn++]=ni,Qn[Yn++]=Js,ti=n.id,ni=n.overflow,Js=i),i=gp(i,l.children),i.flags|=4096);return i}return h?(Bi(),h=l.fallback,w=i.mode,x=n.child,q=x.sibling,l=ei(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,q!==null?h=ei(q,h):(h=Zs(h,w,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,w=n.child.memoizedState,w===null?w=pp(a):(x=w.cachePool,x!==null?(q=Vt._currentValue,x=x.parent!==q?{parent:q,pool:q}:x):x=e_(),w={baseLanes:w.baseLanes|a,cachePool:x}),h.memoizedState=w,h.childLanes=mp(n,E,a),i.memoizedState=dp,l):(qi(i),a=n.child,n=a.sibling,a=ei(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,n!==null&&(E=i.deletions,E===null?(i.deletions=[n],i.flags|=16):E.push(n)),i.child=a,i.memoizedState=null,a)}function gp(n,i){return i=rh({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function rh(n,i){return n=Cn(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function yp(n,i,a){return co(i,n.child,null,a),n=gp(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function mv(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Pd(n.return,i,a)}function _p(n,i,a,l,h){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function gv(n,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Kt(n,i,l.children,a),l=Pt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&mv(n,a,i);else if(n.tag===19)mv(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(se(Pt,l),h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Jc(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),_p(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Jc(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}_p(i,!0,a,null,d);break;case"together":_p(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function oi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Qi|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(Vl(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(s(153));if(i.child!==null){for(n=i.child,a=ei(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ei(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function vp(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Lc(n)))}function NA(n,i,a){switch(i.tag){case 3:Be(i,i.stateNode.containerInfo),ki(i,Vt,n.memoizedState.cache),Ol();break;case 27:case 5:Un(i);break;case 4:Be(i,i.stateNode.containerInfo);break;case 10:ki(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(qi(i),i.flags|=128,null):(a&i.child.childLanes)!==0?pv(n,i,a):(qi(i),n=oi(n,i,a),n!==null?n.sibling:null);qi(i);break;case 19:var h=(n.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Vl(n,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return gv(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),se(Pt,Pt.current),l)break;return null;case 22:case 23:return i.lanes=0,uv(n,i,a);case 24:ki(i,Vt,n.memoizedState.cache)}return oi(n,i,a)}function yv(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)qt=!0;else{if(!vp(n,a)&&(i.flags&128)===0)return qt=!1,NA(n,i,a);qt=(n.flags&131072)!==0}else qt=!1,Fe&&(i.flags&1048576)!==0&&Qy(i,kc,i.index);switch(i.lanes=0,i.tag){case 16:e:{n=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")xd(l)?(n=oa(l,n),i.tag=1,i=fv(null,i,l,n,a)):(i.tag=0,i=fp(null,i,l,n,a));else{if(l!=null){if(h=l.$$typeof,h===he){i.tag=11,i=av(null,i,l,n,a);break e}else if(h===C){i.tag=14,i=ov(null,i,l,n,a);break e}}throw i=Dt(l)||l,Error(s(306,i,""))}}return i;case 0:return fp(n,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=oa(l,i.pendingProps),fv(n,i,l,h,a);case 3:e:{if(Be(i,i.stateNode.containerInfo),n===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Bd(n,i),ql(i,l,null,a);var E=i.memoizedState;if(l=E.cache,ki(i,Vt,l),l!==d.cache&&kd(i,[Vt],a,!0),zl(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=dv(n,i,l,a);break e}else if(l!==h){h=Gn(Error(s(424)),i),Ml(h),i=dv(n,i,l,a);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(pt=ar(n.firstChild),vn=i,Fe=!0,ta=null,Ir=!0,a=K_(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ol(),l===h){i=oi(n,i,a);break e}Kt(n,i,l,a)}i=i.child}return i;case 26:return nh(n,i),n===null?(a=TE(i.type,null,i.pendingProps,null))?i.memoizedState=a:Fe||(a=i.type,n=i.pendingProps,l=yh(ve.current).createElement(a),l[Nt]=i,l[Tt]=n,Wt(l,a,n),yt(l),i.stateNode=l):i.memoizedState=TE(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Un(i),n===null&&Fe&&(l=i.stateNode=_E(i.type,i.pendingProps,ve.current),vn=i,Ir=!0,h=pt,Wi(i.type)?(Jp=h,pt=ar(l.firstChild)):pt=h),Kt(n,i,i.pendingProps.children,a),nh(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Fe&&((h=l=pt)&&(l=sb(l,i.type,i.pendingProps,Ir),l!==null?(i.stateNode=l,vn=i,pt=ar(l.firstChild),Ir=!1,h=!0):h=!1),h||na(i)),Un(i),h=i.type,d=i.pendingProps,E=n!==null?n.memoizedProps:null,l=d.children,Kp(h,d)?l=null:E!==null&&Kp(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=Yd(n,i,wA,null,null,a),uu._currentValue=h),nh(n,i),Kt(n,i,l,a),i.child;case 6:return n===null&&Fe&&((n=a=pt)&&(a=ab(a,i.pendingProps,Ir),a!==null?(i.stateNode=a,vn=i,pt=null,n=!0):n=!1),n||na(i)),null;case 13:return pv(n,i,a);case 4:return Be(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=co(i,null,l,a):Kt(n,i,l,a),i.child;case 11:return av(n,i,i.type,i.pendingProps,a);case 7:return Kt(n,i,i.pendingProps,a),i.child;case 8:return Kt(n,i,i.pendingProps.children,a),i.child;case 12:return Kt(n,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,ki(i,i.type,l.value),Kt(n,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,ia(i),h=ln(h),l=l(h),i.flags|=1,Kt(n,i,l,a),i.child;case 14:return ov(n,i,i.type,i.pendingProps,a);case 15:return lv(n,i,i.type,i.pendingProps,a);case 19:return gv(n,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},n===null?(a=rh(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=ei(n.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return uv(n,i,a);case 24:return ia(i),l=ln(Vt),n===null?(h=jd(),h===null&&(h=rt,d=Ld(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},qd(i),ki(i,Vt,h)):((n.lanes&a)!==0&&(Bd(n,i),ql(i,null,null,a),zl()),h=n.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),ki(i,Vt,l)):(l=d.cache,ki(i,Vt,l),l!==h.cache&&kd(i,[Vt],a,!0))),Kt(n,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function li(n){n.flags|=4}function _v(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!RE(i)){if(i=Kn.current,i!==null&&((ze&4194048)===ze?xr!==null:(ze&62914560)!==ze&&(ze&536870912)===0||i!==xr))throw Ul=zd,t_;n.flags|=8192}}function ih(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?hl():536870912,n.lanes|=i,mo|=i)}function Yl(n,i){if(!Fe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function ht(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function OA(n,i,a){var l=i.pendingProps;switch(Od(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(i),null;case 1:return ht(i),null;case 3:return a=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ii(Vt),Ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Nl(i)?li(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Xy())),ht(i),null;case 26:return a=i.memoizedState,n===null?(li(i),a!==null?(ht(i),_v(i,a)):(ht(i),i.flags&=-16777217)):a?a!==n.memoizedState?(li(i),ht(i),_v(i,a)):(ht(i),i.flags&=-16777217):(n.memoizedProps!==l&&li(i),ht(i),i.flags&=-16777217),null;case 27:En(i),a=ve.current;var h=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==l&&li(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}n=ge.current,Nl(i)?Yy(i):(n=_E(h,l,a),i.stateNode=n,li(i))}return ht(i),null;case 5:if(En(i),a=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&li(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}if(n=ge.current,Nl(i))Yy(i);else{switch(h=yh(ve.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}n[Nt]=i,n[Tt]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=n;e:switch(Wt(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&li(i)}}return ht(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&li(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(n=ve.current,Nl(i)){if(n=i.stateNode,a=i.memoizedProps,l=null,h=vn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}n[Nt]=i,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||hE(n.nodeValue,a)),n||na(i)}else n=yh(n).createTextNode(l),n[Nt]=i,i.stateNode=n}return ht(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=Nl(i),l!==null&&l.dehydrated!==null){if(n===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Nt]=i}else Ol(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ht(i),h=!1}else h=Xy(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ai(i),i):(ai(i),null)}if(ai(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==n&&a&&(i.child.flags|=8192),ih(i,i.updateQueue),ht(i),null;case 4:return Ut(),n===null&&Fp(i.stateNode.containerInfo),ht(i),null;case 10:return ii(i.type),ht(i),null;case 19:if(ae(Pt),h=i.memoizedState,h===null)return ht(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Yl(h,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(d=Jc(n),d!==null){for(i.flags|=128,Yl(h,!1),n=d.updateQueue,i.updateQueue=n,ih(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)$y(a,n),a=a.sibling;return se(Pt,Pt.current&1|2),i.child}n=n.sibling}h.tail!==null&&jn()>oh&&(i.flags|=128,l=!0,Yl(h,!1),i.lanes=4194304)}else{if(!l)if(n=Jc(d),n!==null){if(i.flags|=128,l=!0,n=n.updateQueue,i.updateQueue=n,ih(i,n),Yl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Fe)return ht(i),null}else 2*jn()-h.renderingStartTime>oh&&a!==536870912&&(i.flags|=128,l=!0,Yl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(n=h.last,n!==null?n.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=jn(),i.sibling=null,n=Pt.current,se(Pt,l?n&1|2:n&1),i):(ht(i),null);case 22:case 23:return ai(i),$d(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ht(i),i.subtreeFlags&6&&(i.flags|=8192)):ht(i),a=i.updateQueue,a!==null&&ih(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),n!==null&&ae(sa),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ii(Vt),ht(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function MA(n,i){switch(Od(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ii(Vt),Ut(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return En(i),null;case 13:if(ai(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Ol()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ae(Pt),null;case 4:return Ut(),null;case 10:return ii(i.type),null;case 22:case 23:return ai(i),$d(),n!==null&&ae(sa),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return ii(Vt),null;case 25:return null;default:return null}}function vv(n,i){switch(Od(i),i.tag){case 3:ii(Vt),Ut();break;case 26:case 27:case 5:En(i);break;case 4:Ut();break;case 13:ai(i);break;case 19:ae(Pt);break;case 10:ii(i.type);break;case 22:case 23:ai(i),$d(),n!==null&&ae(sa);break;case 24:ii(Vt)}}function Kl(n,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&n)===n){l=void 0;var d=a.create,E=a.inst;l=d(),E.destroy=l}a=a.next}while(a!==h)}}catch(w){tt(i,i.return,w)}}function Hi(n,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&n)===n){var E=l.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,h=i;var x=a,q=w;try{q()}catch(K){tt(h,x,K)}}}l=l.next}while(l!==d)}}catch(K){tt(i,i.return,K)}}function Ev(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{o_(i,a)}catch(l){tt(n,n.return,l)}}}function Tv(n,i,a){a.props=oa(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){tt(n,i,l)}}function Xl(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(h){tt(n,i,h)}}function Cr(n,i){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){tt(n,i,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){tt(n,i,h)}else a.current=null}function Sv(n){var i=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){tt(n,n.return,h)}}function Ep(n,i,a){try{var l=n.stateNode;eb(l,n.type,a,i),l[Tt]=i}catch(h){tt(n,n.return,h)}}function wv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Wi(n.type)||n.tag===4}function Tp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||wv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Wi(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sp(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(n),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=gh));else if(l!==4&&(l===27&&Wi(n.type)&&(a=n.stateNode,i=null),n=n.child,n!==null))for(Sp(n,i,a),n=n.sibling;n!==null;)Sp(n,i,a),n=n.sibling}function sh(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(l!==4&&(l===27&&Wi(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(sh(n,i,a),n=n.sibling;n!==null;)sh(n,i,a),n=n.sibling}function Av(n){var i=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Wt(i,l,a),i[Nt]=n,i[Tt]=a}catch(d){tt(n,n.return,d)}}var ui=!1,vt=!1,wp=!1,bv=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function VA(n,i){if(n=n.containerInfo,Qp=wh,n=ky(n),Td(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,w=-1,x=-1,q=0,K=0,ee=n,H=null;t:for(;;){for(var G;ee!==a||h!==0&&ee.nodeType!==3||(w=E+h),ee!==d||l!==0&&ee.nodeType!==3||(x=E+l),ee.nodeType===3&&(E+=ee.nodeValue.length),(G=ee.firstChild)!==null;)H=ee,ee=G;for(;;){if(ee===n)break t;if(H===a&&++q===h&&(w=E),H===d&&++K===l&&(x=E),(G=ee.nextSibling)!==null)break;ee=H,H=ee.parentNode}ee=G}a=w===-1||x===-1?null:{start:w,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yp={focusedElem:n,selectionRange:a},wh=!1,Bt=i;Bt!==null;)if(i=Bt,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,Bt=n;else for(;Bt!==null;){switch(i=Bt,d=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Ae=oa(a.type,h,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(Ae,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(Ee){tt(a,a.return,Ee)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,a=n.nodeType,a===9)Wp(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Wp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=i.sibling,n!==null){n.return=i.return,Bt=n;break}Bt=i.return}}function Rv(n,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(n,a),l&4&&Kl(5,a);break;case 1:if(Fi(n,a),l&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(E){tt(a,a.return,E)}else{var h=oa(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(h,i,n.__reactInternalSnapshotBeforeUpdate)}catch(E){tt(a,a.return,E)}}l&64&&Ev(a),l&512&&Xl(a,a.return);break;case 3:if(Fi(n,a),l&64&&(n=a.updateQueue,n!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{o_(n,i)}catch(E){tt(a,a.return,E)}}break;case 27:i===null&&l&4&&Av(a);case 26:case 5:Fi(n,a),i===null&&l&4&&Sv(a),l&512&&Xl(a,a.return);break;case 12:Fi(n,a);break;case 13:Fi(n,a),l&4&&Cv(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=HA.bind(null,a),ob(n,a))));break;case 22:if(l=a.memoizedState!==null||ui,!l){i=i!==null&&i.memoizedState!==null||vt,h=ui;var d=vt;ui=l,(vt=i)&&!d?Gi(n,a,(a.subtreeFlags&8772)!==0):Fi(n,a),ui=h,vt=d}break;case 30:break;default:Fi(n,a)}}function Iv(n){var i=n.alternate;i!==null&&(n.alternate=null,Iv(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Oi(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var lt=null,Sn=!1;function ci(n,i,a){for(a=a.child;a!==null;)xv(n,i,a),a=a.sibling}function xv(n,i,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:vt||Cr(a,i),ci(n,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vt||Cr(a,i);var l=lt,h=Sn;Wi(a.type)&&(lt=a.stateNode,Sn=!1),ci(n,i,a),su(a.stateNode),lt=l,Sn=h;break;case 5:vt||Cr(a,i);case 6:if(l=lt,h=Sn,lt=null,ci(n,i,a),lt=l,Sn=h,lt!==null)if(Sn)try{(lt.nodeType===9?lt.body:lt.nodeName==="HTML"?lt.ownerDocument.body:lt).removeChild(a.stateNode)}catch(d){tt(a,i,d)}else try{lt.removeChild(a.stateNode)}catch(d){tt(a,i,d)}break;case 18:lt!==null&&(Sn?(n=lt,gE(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),du(n)):gE(lt,a.stateNode));break;case 4:l=lt,h=Sn,lt=a.stateNode.containerInfo,Sn=!0,ci(n,i,a),lt=l,Sn=h;break;case 0:case 11:case 14:case 15:vt||Hi(2,a,i),vt||Hi(4,a,i),ci(n,i,a);break;case 1:vt||(Cr(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Tv(a,i,l)),ci(n,i,a);break;case 21:ci(n,i,a);break;case 22:vt=(l=vt)||a.memoizedState!==null,ci(n,i,a),vt=l;break;default:ci(n,i,a)}}function Cv(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{du(n)}catch(a){tt(i,i.return,a)}}function PA(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new bv),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new bv),i;default:throw Error(s(435,n.tag))}}function Ap(n,i){var a=PA(n);i.forEach(function(l){var h=FA.bind(null,n,l);a.has(l)||(a.add(l),l.then(h,h))})}function Dn(n,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=n,E=i,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(Wi(w.type)){lt=w.stateNode,Sn=!1;break e}break;case 5:lt=w.stateNode,Sn=!1;break e;case 3:case 4:lt=w.stateNode.containerInfo,Sn=!0;break e}w=w.return}if(lt===null)throw Error(s(160));xv(d,E,h),lt=null,Sn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Dv(i,n),i=i.sibling}var sr=null;function Dv(n,i){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Dn(i,n),Nn(n),l&4&&(Hi(3,n,n.return),Kl(3,n),Hi(5,n,n.return));break;case 1:Dn(i,n),Nn(n),l&512&&(vt||a===null||Cr(a,a.return)),l&64&&ui&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=sr;if(Dn(i,n),Nn(n),l&512&&(vt||a===null||Cr(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ks]||d[Nt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Wt(d,l,a),d[Nt]=n,yt(d),l=d;break e;case"link":var E=AE("link","href",h).get(l+(a.href||""));if(E){for(var w=0;w<E.length;w++)if(d=E[w],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(w,1);break t}}d=h.createElement(l),Wt(d,l,a),h.head.appendChild(d);break;case"meta":if(E=AE("meta","content",h).get(l+(a.content||""))){for(w=0;w<E.length;w++)if(d=E[w],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(w,1);break t}}d=h.createElement(l),Wt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Nt]=n,yt(d),l=d}n.stateNode=l}else bE(h,n.type,n.stateNode);else n.stateNode=wE(h,l,n.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?bE(h,n.type,n.stateNode):wE(h,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Ep(n,n.memoizedProps,a.memoizedProps)}break;case 27:Dn(i,n),Nn(n),l&512&&(vt||a===null||Cr(a,a.return)),a!==null&&l&4&&Ep(n,n.memoizedProps,a.memoizedProps);break;case 5:if(Dn(i,n),Nn(n),l&512&&(vt||a===null||Cr(a,a.return)),n.flags&32){h=n.stateNode;try{qn(h,"")}catch(G){tt(n,n.return,G)}}l&4&&n.stateNode!=null&&(h=n.memoizedProps,Ep(n,h,a!==null?a.memoizedProps:h)),l&1024&&(wp=!0);break;case 6:if(Dn(i,n),Nn(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(G){tt(n,n.return,G)}}break;case 3:if(Eh=null,h=sr,sr=_h(i.containerInfo),Dn(i,n),sr=h,Nn(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{du(i.containerInfo)}catch(G){tt(n,n.return,G)}wp&&(wp=!1,Nv(n));break;case 4:l=sr,sr=_h(n.stateNode.containerInfo),Dn(i,n),Nn(n),sr=l;break;case 12:Dn(i,n),Nn(n);break;case 13:Dn(i,n),Nn(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dp=jn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Ap(n,l)));break;case 22:h=n.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,q=ui,K=vt;if(ui=q||h,vt=K||x,Dn(i,n),vt=K,ui=q,Nn(n),l&8192)e:for(i=n.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||x||ui||vt||la(n)),a=null,i=n;;){if(i.tag===5||i.tag===26){if(a===null){x=a=i;try{if(d=x.stateNode,h)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=x.stateNode;var ee=x.memoizedProps.style,H=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;w.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(G){tt(x,x.return,G)}}}else if(i.tag===6){if(a===null){x=i;try{x.stateNode.nodeValue=h?"":x.memoizedProps}catch(G){tt(x,x.return,G)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ap(n,a))));break;case 19:Dn(i,n),Nn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Ap(n,l)));break;case 30:break;case 21:break;default:Dn(i,n),Nn(n)}}function Nn(n){var i=n.flags;if(i&2){try{for(var a,l=n.return;l!==null;){if(wv(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Tp(n);sh(n,d,h);break;case 5:var E=a.stateNode;a.flags&32&&(qn(E,""),a.flags&=-33);var w=Tp(n);sh(n,w,E);break;case 3:case 4:var x=a.stateNode.containerInfo,q=Tp(n);Sp(n,q,x);break;default:throw Error(s(161))}}catch(K){tt(n,n.return,K)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Nv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Nv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Fi(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Rv(n,i.alternate,i),i=i.sibling}function la(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:Hi(4,i,i.return),la(i);break;case 1:Cr(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Tv(i,i.return,a),la(i);break;case 27:su(i.stateNode);case 26:case 5:Cr(i,i.return),la(i);break;case 22:i.memoizedState===null&&la(i);break;case 30:la(i);break;default:la(i)}n=n.sibling}}function Gi(n,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=n,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:Gi(h,d,a),Kl(4,d);break;case 1:if(Gi(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(q){tt(l,l.return,q)}if(l=d,h=l.updateQueue,h!==null){var w=l.stateNode;try{var x=h.shared.hiddenCallbacks;if(x!==null)for(h.shared.hiddenCallbacks=null,h=0;h<x.length;h++)a_(x[h],w)}catch(q){tt(l,l.return,q)}}a&&E&64&&Ev(d),Xl(d,d.return);break;case 27:Av(d);case 26:case 5:Gi(h,d,a),a&&l===null&&E&4&&Sv(d),Xl(d,d.return);break;case 12:Gi(h,d,a);break;case 13:Gi(h,d,a),a&&E&4&&Cv(h,d);break;case 22:d.memoizedState===null&&Gi(h,d,a),Xl(d,d.return);break;case 30:break;default:Gi(h,d,a)}i=i.sibling}}function bp(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Pl(a))}function Rp(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Pl(n))}function Dr(n,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ov(n,i,a,l),i=i.sibling}function Ov(n,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Dr(n,i,a,l),h&2048&&Kl(9,i);break;case 1:Dr(n,i,a,l);break;case 3:Dr(n,i,a,l),h&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Pl(n)));break;case 12:if(h&2048){Dr(n,i,a,l),n=i.stateNode;try{var d=i.memoizedProps,E=d.id,w=d.onPostCommit;typeof w=="function"&&w(E,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(x){tt(i,i.return,x)}}else Dr(n,i,a,l);break;case 13:Dr(n,i,a,l);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?Dr(n,i,a,l):Wl(n,i):d._visibility&2?Dr(n,i,a,l):(d._visibility|=2,ho(n,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&bp(E,i);break;case 24:Dr(n,i,a,l),h&2048&&Rp(i.alternate,i);break;default:Dr(n,i,a,l)}}function ho(n,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=n,E=i,w=a,x=l,q=E.flags;switch(E.tag){case 0:case 11:case 15:ho(d,E,w,x,h),Kl(8,E);break;case 23:break;case 22:var K=E.stateNode;E.memoizedState!==null?K._visibility&2?ho(d,E,w,x,h):Wl(d,E):(K._visibility|=2,ho(d,E,w,x,h)),h&&q&2048&&bp(E.alternate,E);break;case 24:ho(d,E,w,x,h),h&&q&2048&&Rp(E.alternate,E);break;default:ho(d,E,w,x,h)}i=i.sibling}}function Wl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,l=i,h=l.flags;switch(l.tag){case 22:Wl(a,l),h&2048&&bp(l.alternate,l);break;case 24:Wl(a,l),h&2048&&Rp(l.alternate,l);break;default:Wl(a,l)}i=i.sibling}}var Zl=8192;function fo(n){if(n.subtreeFlags&Zl)for(n=n.child;n!==null;)Mv(n),n=n.sibling}function Mv(n){switch(n.tag){case 26:fo(n),n.flags&Zl&&n.memoizedState!==null&&Eb(sr,n.memoizedState,n.memoizedProps);break;case 5:fo(n);break;case 3:case 4:var i=sr;sr=_h(n.stateNode.containerInfo),fo(n),sr=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Zl,Zl=16777216,fo(n),Zl=i):fo(n));break;default:fo(n)}}function Vv(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Jl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Bt=l,kv(l,n)}Vv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pv(n),n=n.sibling}function Pv(n){switch(n.tag){case 0:case 11:case 15:Jl(n),n.flags&2048&&Hi(9,n,n.return);break;case 3:Jl(n);break;case 12:Jl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,ah(n)):Jl(n);break;default:Jl(n)}}function ah(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Bt=l,kv(l,n)}Vv(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:Hi(8,i,i.return),ah(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ah(i));break;default:ah(i)}n=n.sibling}}function kv(n,i){for(;Bt!==null;){var a=Bt;switch(a.tag){case 0:case 11:case 15:Hi(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Pl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Bt=l;else e:for(a=n;Bt!==null;){l=Bt;var h=l.sibling,d=l.return;if(Iv(l),l===a){Bt=null;break e}if(h!==null){h.return=d,Bt=h;break e}Bt=d}}}var kA={getCacheForType:function(n){var i=ln(Vt),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a}},LA=typeof WeakMap=="function"?WeakMap:Map,Ke=0,rt=null,Me=null,ze=0,Xe=0,On=null,$i=!1,po=!1,Ip=!1,hi=0,mt=0,Qi=0,ua=0,xp=0,Xn=0,mo=0,eu=null,wn=null,Cp=!1,Dp=0,oh=1/0,lh=null,Yi=null,Xt=0,Ki=null,go=null,yo=0,Np=0,Op=null,Lv=null,tu=0,Mp=null;function Mn(){if((Ke&2)!==0&&ze!==0)return ze&-ze;if(Y.T!==null){var n=ro;return n!==0?n:zp()}return Di()}function Uv(){Xn===0&&(Xn=(ze&536870912)===0||Fe?cl():536870912);var n=Kn.current;return n!==null&&(n.flags|=32),Xn}function Vn(n,i,a){(n===rt&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(_o(n,0),Xi(n,ze,Xn,!1)),Hr(n,a),((Ke&2)===0||n!==rt)&&(n===rt&&((Ke&2)===0&&(ua|=a),mt===4&&Xi(n,ze,Xn,!1)),Nr(n))}function jv(n,i,a){if((Ke&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&n.expiredLanes)===0||Ps(n,i),h=l?zA(n,i):kp(n,i,!0),d=l;do{if(h===0){po&&!l&&Xi(n,i,0,!1);break}else{if(a=n.current.alternate,d&&!UA(a)){h=kp(n,i,!1),d=!1;continue}if(h===2){if(d=i,n.errorRecoveryDisabledLanes&d)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var w=n;h=eu;var x=w.current.memoizedState.isDehydrated;if(x&&(_o(w,E).flags|=256),E=kp(w,E,!1),E!==2){if(Ip&&!x){w.errorRecoveryDisabledLanes|=d,ua|=d,h=4;break e}d=wn,wn=h,d!==null&&(wn===null?wn=d:wn.push.apply(wn,d))}h=E}if(d=!1,h!==2)continue}}if(h===1){_o(n,0),Xi(n,i,0,!0);break}e:{switch(l=n,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Xi(l,i,Xn,!$i);break e;case 2:wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Dp+300-jn(),10<h)){if(Xi(l,i,Xn,!$i),Va(l,0,!0)!==0)break e;l.timeoutHandle=pE(zv.bind(null,l,a,wn,lh,Cp,i,Xn,ua,mo,$i,d,2,-0,0),h);break e}zv(l,a,wn,lh,Cp,i,Xn,ua,mo,$i,d,0,-0,0)}}break}while(!0);Nr(n)}function zv(n,i,a,l,h,d,E,w,x,q,K,ee,H,G){if(n.timeoutHandle=-1,ee=i.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(lu={stylesheets:null,count:0,unsuspend:vb},Mv(i),ee=Tb(),ee!==null)){n.cancelPendingCommit=ee(Qv.bind(null,n,i,d,a,l,h,E,w,x,K,1,H,G)),Xi(n,d,E,!q);return}Qv(n,i,d,a,l,h,E,w,x)}function UA(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!xn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Xi(n,i,a,l){i&=~xp,i&=~ua,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var h=i;0<h;){var d=31-on(h),E=1<<d;l[d]=-1,h&=~E}a!==0&&gr(n,a,i)}function uh(){return(Ke&6)===0?(nu(0),!1):!0}function Vp(){if(Me!==null){if(Xe===0)var n=Me.return;else n=Me,ri=ra=null,Wd(n),uo=null,$l=0,n=Me;for(;n!==null;)vv(n.alternate,n),n=n.return;Me=null}}function _o(n,i){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,nb(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Vp(),rt=n,Me=a=ei(n.current,null),ze=i,Xe=0,On=null,$i=!1,po=Ps(n,i),Ip=!1,mo=Xn=xp=ua=Qi=mt=0,wn=eu=null,Cp=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var h=31-on(l),d=1<<h;i|=n[h],l&=~d}return hi=i,Nc(),a}function qv(n,i){Ne=null,Y.H=Xc,i===Ll||i===zc?(i=i_(),Xe=3):i===t_?(i=i_(),Xe=4):Xe=i===sv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,On=i,Me===null&&(mt=1,th(n,Gn(i,n.current)))}function Bv(){var n=Y.H;return Y.H=Xc,n===null?Xc:n}function Hv(){var n=Y.A;return Y.A=kA,n}function Pp(){mt=4,$i||(ze&4194048)!==ze&&Kn.current!==null||(po=!0),(Qi&134217727)===0&&(ua&134217727)===0||rt===null||Xi(rt,ze,Xn,!1)}function kp(n,i,a){var l=Ke;Ke|=2;var h=Bv(),d=Hv();(rt!==n||ze!==i)&&(lh=null,_o(n,i)),i=!1;var E=mt;e:do try{if(Xe!==0&&Me!==null){var w=Me,x=On;switch(Xe){case 8:Vp(),E=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(i=!0);var q=Xe;if(Xe=0,On=null,vo(n,w,x,q),a&&po){E=0;break e}break;default:q=Xe,Xe=0,On=null,vo(n,w,x,q)}}jA(),E=mt;break}catch(K){qv(n,K)}while(!0);return i&&n.shellSuspendCounter++,ri=ra=null,Ke=l,Y.H=h,Y.A=d,Me===null&&(rt=null,ze=0,Nc()),E}function jA(){for(;Me!==null;)Fv(Me)}function zA(n,i){var a=Ke;Ke|=2;var l=Bv(),h=Hv();rt!==n||ze!==i?(lh=null,oh=jn()+500,_o(n,i)):po=Ps(n,i);e:do try{if(Xe!==0&&Me!==null){i=Me;var d=On;t:switch(Xe){case 1:Xe=0,On=null,vo(n,i,d,1);break;case 2:case 9:if(n_(d)){Xe=0,On=null,Gv(i);break}i=function(){Xe!==2&&Xe!==9||rt!==n||(Xe=7),Nr(n)},d.then(i,i);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:n_(d)?(Xe=0,On=null,Gv(i)):(Xe=0,On=null,vo(n,i,d,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var w=Me;if(!E||RE(E)){Xe=0,On=null;var x=w.sibling;if(x!==null)Me=x;else{var q=w.return;q!==null?(Me=q,ch(q)):Me=null}break t}}Xe=0,On=null,vo(n,i,d,5);break;case 6:Xe=0,On=null,vo(n,i,d,6);break;case 8:Vp(),mt=6;break e;default:throw Error(s(462))}}qA();break}catch(K){qv(n,K)}while(!0);return ri=ra=null,Y.H=l,Y.A=h,Ke=a,Me!==null?0:(rt=null,ze=0,Nc(),mt)}function qA(){for(;Me!==null&&!al();)Fv(Me)}function Fv(n){var i=yv(n.alternate,n,hi);n.memoizedProps=n.pendingProps,i===null?ch(n):Me=i}function Gv(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=hv(a,i,i.pendingProps,i.type,void 0,ze);break;case 11:i=hv(a,i,i.pendingProps,i.type.render,i.ref,ze);break;case 5:Wd(i);default:vv(a,i),i=Me=$y(i,hi),i=yv(a,i,hi)}n.memoizedProps=n.pendingProps,i===null?ch(n):Me=i}function vo(n,i,a,l){ri=ra=null,Wd(i),uo=null,$l=0;var h=i.return;try{if(DA(n,h,i,a,ze)){mt=1,th(n,Gn(a,n.current)),Me=null;return}}catch(d){if(h!==null)throw Me=h,d;mt=1,th(n,Gn(a,n.current)),Me=null;return}i.flags&32768?(Fe||l===1?n=!0:po||(ze&536870912)!==0?n=!1:($i=n=!0,(l===2||l===9||l===3||l===6)&&(l=Kn.current,l!==null&&l.tag===13&&(l.flags|=16384))),$v(i,n)):ch(i)}function ch(n){var i=n;do{if((i.flags&32768)!==0){$v(i,$i);return}n=i.return;var a=OA(i.alternate,i,hi);if(a!==null){Me=a;return}if(i=i.sibling,i!==null){Me=i;return}Me=i=n}while(i!==null);mt===0&&(mt=5)}function $v(n,i){do{var a=MA(n.alternate,n);if(a!==null){a.flags&=32767,Me=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){Me=n;return}Me=n=a}while(n!==null);mt=6,Me=null}function Qv(n,i,a,l,h,d,E,w,x){n.cancelPendingCommit=null;do hh();while(Xt!==0);if((Ke&6)!==0)throw Error(s(327));if(i!==null){if(i===n.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Rd,fl(n,a,d,E,w,x),n===rt&&(Me=rt=null,ze=0),go=i,Ki=n,yo=a,Np=d,Op=h,Lv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,GA(Ns,function(){return Zv(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Y.T,Y.T=null,h=le.p,le.p=2,E=Ke,Ke|=4;try{VA(n,i,a)}finally{Ke=E,le.p=h,Y.T=l}}Xt=1,Yv(),Kv(),Xv()}}function Yv(){if(Xt===1){Xt=0;var n=Ki,i=go,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=Y.T,Y.T=null;var l=le.p;le.p=2;var h=Ke;Ke|=4;try{Dv(i,n);var d=Yp,E=ky(n.containerInfo),w=d.focusedElem,x=d.selectionRange;if(E!==w&&w&&w.ownerDocument&&Py(w.ownerDocument.documentElement,w)){if(x!==null&&Td(w)){var q=x.start,K=x.end;if(K===void 0&&(K=q),"selectionStart"in w)w.selectionStart=q,w.selectionEnd=Math.min(K,w.value.length);else{var ee=w.ownerDocument||document,H=ee&&ee.defaultView||window;if(H.getSelection){var G=H.getSelection(),Ae=w.textContent.length,Ee=Math.min(x.start,Ae),et=x.end===void 0?Ee:Math.min(x.end,Ae);!G.extend&&Ee>et&&(E=et,et=Ee,Ee=E);var k=Vy(w,Ee),M=Vy(w,et);if(k&&M&&(G.rangeCount!==1||G.anchorNode!==k.node||G.anchorOffset!==k.offset||G.focusNode!==M.node||G.focusOffset!==M.offset)){var z=ee.createRange();z.setStart(k.node,k.offset),G.removeAllRanges(),Ee>et?(G.addRange(z),G.extend(M.node,M.offset)):(z.setEnd(M.node,M.offset),G.addRange(z))}}}}for(ee=[],G=w;G=G.parentNode;)G.nodeType===1&&ee.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ee.length;w++){var W=ee[w];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}wh=!!Qp,Yp=Qp=null}finally{Ke=h,le.p=l,Y.T=a}}n.current=i,Xt=2}}function Kv(){if(Xt===2){Xt=0;var n=Ki,i=go,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=Y.T,Y.T=null;var l=le.p;le.p=2;var h=Ke;Ke|=4;try{Rv(n,i.alternate,i)}finally{Ke=h,le.p=l,Y.T=a}}Xt=3}}function Xv(){if(Xt===4||Xt===3){Xt=0,ac();var n=Ki,i=go,a=yo,l=Lv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Xt=5:(Xt=0,go=Ki=null,Wv(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Yi=null),Pa(a),i=i.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Y.T,h=le.p,le.p=2,Y.T=null;try{for(var d=n.onRecoverableError,E=0;E<l.length;E++){var w=l[E];d(w.value,{componentStack:w.stack})}}finally{Y.T=i,le.p=h}}(yo&3)!==0&&hh(),Nr(n),h=n.pendingLanes,(a&4194090)!==0&&(h&42)!==0?n===Mp?tu++:(tu=0,Mp=n):tu=0,nu(0)}}function Wv(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Pl(i)))}function hh(n){return Yv(),Kv(),Xv(),Zv()}function Zv(){if(Xt!==5)return!1;var n=Ki,i=Np;Np=0;var a=Pa(yo),l=Y.T,h=le.p;try{le.p=32>a?32:a,Y.T=null,a=Op,Op=null;var d=Ki,E=yo;if(Xt=0,go=Ki=null,yo=0,(Ke&6)!==0)throw Error(s(331));var w=Ke;if(Ke|=4,Pv(d.current),Ov(d,d.current,E,a),Ke=w,nu(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{le.p=h,Y.T=l,Wv(n,i)}}function Jv(n,i,a){i=Gn(a,i),i=hp(n.stateNode,i,2),n=ji(n,i,2),n!==null&&(Hr(n,2),Nr(n))}function tt(n,i,a){if(n.tag===3)Jv(n,n,a);else for(;i!==null;){if(i.tag===3){Jv(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Yi===null||!Yi.has(l))){n=Gn(a,n),a=rv(2),l=ji(i,a,2),l!==null&&(iv(a,l,i,n),Hr(l,2),Nr(l));break}}i=i.return}}function Lp(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new LA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Ip=!0,h.add(a),n=BA.bind(null,n,i,a),i.then(n,n))}function BA(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,rt===n&&(ze&a)===a&&(mt===4||mt===3&&(ze&62914560)===ze&&300>jn()-Dp?(Ke&2)===0&&_o(n,0):xp|=a,mo===ze&&(mo=0)),Nr(n)}function eE(n,i){i===0&&(i=hl()),n=Ja(n,i),n!==null&&(Hr(n,i),Nr(n))}function HA(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),eE(n,a)}function FA(n,i){var a=0;switch(n.tag){case 13:var l=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),eE(n,a)}function GA(n,i){return Cs(n,i)}var fh=null,Eo=null,Up=!1,dh=!1,jp=!1,ca=0;function Nr(n){n!==Eo&&n.next===null&&(Eo===null?fh=Eo=n:Eo=Eo.next=n),dh=!0,Up||(Up=!0,QA())}function nu(n,i){if(!jp&&dh){jp=!0;do for(var a=!1,l=fh;l!==null;){if(n!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var E=l.suspendedLanes,w=l.pingedLanes;d=(1<<31-on(42|n)+1)-1,d&=h&~(E&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,iE(l,d))}else d=ze,d=Va(l,l===rt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ps(l,d)||(a=!0,iE(l,d));l=l.next}while(a);jp=!1}}function $A(){tE()}function tE(){dh=Up=!1;var n=0;ca!==0&&(tb()&&(n=ca),ca=0);for(var i=jn(),a=null,l=fh;l!==null;){var h=l.next,d=nE(l,i);d===0?(l.next=null,a===null?fh=h:a.next=h,h===null&&(Eo=a)):(a=l,(n!==0||(d&3)!==0)&&(dh=!0)),l=h}nu(n)}function nE(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,h=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var E=31-on(d),w=1<<E,x=h[E];x===-1?((w&a)===0||(w&l)!==0)&&(h[E]=ul(w,i)):x<=i&&(n.expiredLanes|=w),d&=~w}if(i=rt,a=ze,a=Va(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===i&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Ds(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||Ps(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(l!==null&&Ds(l),Pa(a)){case 2:case 8:a=Oa;break;case 32:a=Ns;break;case 268435456:a=Ma;break;default:a=Ns}return l=rE.bind(null,n),a=Cs(a,l),n.callbackPriority=i,n.callbackNode=a,i}return l!==null&&l!==null&&Ds(l),n.callbackPriority=2,n.callbackNode=null,2}function rE(n,i){if(Xt!==0&&Xt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(hh()&&n.callbackNode!==a)return null;var l=ze;return l=Va(n,n===rt?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(jv(n,l,i),nE(n,jn()),n.callbackNode!=null&&n.callbackNode===a?rE.bind(null,n):null)}function iE(n,i){if(hh())return null;jv(n,i,!0)}function QA(){rb(function(){(Ke&6)!==0?Cs(ol,$A):tE()})}function zp(){return ca===0&&(ca=cl()),ca}function sE(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:qa(""+n)}function aE(n,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,n.id&&a.setAttribute("form",n.id),i.parentNode.insertBefore(a,i),n=new FormData(n),a.parentNode.removeChild(a),n}function YA(n,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=sE((h[Tt]||null).action),E=l.submitter;E&&(i=(i=E[Tt]||null)?sE(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var w=new Ba("action","action",null,l,h);n.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ca!==0){var x=E?aE(h,E):new FormData(h);ap(a,{pending:!0,data:x,method:h.method,action:d},null,x)}}else typeof d=="function"&&(w.preventDefault(),x=E?aE(h,E):new FormData(h),ap(a,{pending:!0,data:x,method:h.method,action:d},d,x))},currentTarget:h}]})}}for(var qp=0;qp<bd.length;qp++){var Bp=bd[qp],KA=Bp.toLowerCase(),XA=Bp[0].toUpperCase()+Bp.slice(1);ir(KA,"on"+XA)}ir(jy,"onAnimationEnd"),ir(zy,"onAnimationIteration"),ir(qy,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(dA,"onTransitionRun"),ir(pA,"onTransitionStart"),ir(mA,"onTransitionCancel"),ir(By,"onTransitionEnd"),Gr("onMouseEnter",["mouseout","mouseover"]),Gr("onMouseLeave",["mouseout","mouseover"]),Gr("onPointerEnter",["pointerout","pointerover"]),Gr("onPointerLeave",["pointerout","pointerover"]),nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nr("onBeforeInput",["compositionend","keypress","textInput","paste"]),nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ru));function oE(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var w=l[E],x=w.instance,q=w.currentTarget;if(w=w.listener,x!==d&&h.isPropagationStopped())break e;d=w,h.currentTarget=q;try{d(h)}catch(K){eh(K)}h.currentTarget=null,d=x}else for(E=0;E<l.length;E++){if(w=l[E],x=w.instance,q=w.currentTarget,w=w.listener,x!==d&&h.isPropagationStopped())break e;d=w,h.currentTarget=q;try{d(h)}catch(K){eh(K)}h.currentTarget=null,d=x}}}}function Ve(n,i){var a=i[pl];a===void 0&&(a=i[pl]=new Set);var l=n+"__bubble";a.has(l)||(lE(i,n,2,!1),a.add(l))}function Hp(n,i,a){var l=0;i&&(l|=4),lE(a,n,l,i)}var ph="_reactListening"+Math.random().toString(36).slice(2);function Fp(n){if(!n[ph]){n[ph]=!0,ml.forEach(function(a){a!=="selectionchange"&&(WA.has(a)||Hp(a,!1,n),Hp(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ph]||(i[ph]=!0,Hp("selectionchange",!1,i))}}function lE(n,i,a,l){switch(OE(i)){case 2:var h=Ab;break;case 8:h=bb;break;default:h=im}a=h.bind(null,i,a,n),h=void 0,!Hn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Gp(n,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var w=l.stateNode.containerInfo;if(w===h)break;if(E===4)for(E=l.return;E!==null;){var x=E.tag;if((x===3||x===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;w!==null;){if(E=Fr(w),E===null)return;if(x=E.tag,x===5||x===6||x===26||x===27){l=d=E;continue e}w=w.parentNode}}l=l.return}gc(function(){var q=d,K=Bn(a),ee=[];e:{var H=Hy.get(n);if(H!==void 0){var G=Ba,Ae=n;switch(n){case"keypress":if(Sr(a)===0)break e;case"keydown":case"keyup":G=Ya;break;case"focusin":Ae="focus",G=Ga;break;case"focusout":Ae="blur",G=Ga;break;case"beforeblur":case"afterblur":G=Ga;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Ac;break;case jy:case zy:case qy:G=$a;break;case By:G=Rc;break;case"scroll":case"scrollend":G=yc;break;case"wheel":G=Ka;break;case"copy":case"cut":case"paste":G=Qa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Il;break;case"toggle":case"beforetoggle":G=xc}var Ee=(i&4)!==0,et=!Ee&&(n==="scroll"||n==="scrollend"),k=Ee?H!==null?H+"Capture":null:H;Ee=[];for(var M=q,z;M!==null;){var W=M;if(z=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||z===null||k===null||(W=Hs(M,k),W!=null&&Ee.push(iu(M,W,z))),et)break;M=M.return}0<Ee.length&&(H=new G(H,Ae,null,a,K),ee.push({event:H,listeners:Ee}))}}if((i&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",G=n==="mouseout"||n==="pointerout",H&&a!==Yr&&(Ae=a.relatedTarget||a.fromElement)&&(Fr(Ae)||Ae[zn]))break e;if((G||H)&&(H=K.window===K?K:(H=K.ownerDocument)?H.defaultView||H.parentWindow:window,G?(Ae=a.relatedTarget||a.toElement,G=q,Ae=Ae?Fr(Ae):null,Ae!==null&&(et=u(Ae),Ee=Ae.tag,Ae!==et||Ee!==5&&Ee!==27&&Ee!==6)&&(Ae=null)):(G=null,Ae=q),G!==Ae)){if(Ee=Fn,W="onMouseLeave",k="onMouseEnter",M="mouse",(n==="pointerout"||n==="pointerover")&&(Ee=Il,W="onPointerLeave",k="onPointerEnter",M="pointer"),et=G==null?H:_r(G),z=Ae==null?H:_r(Ae),H=new Ee(W,M+"leave",G,a,K),H.target=et,H.relatedTarget=z,W=null,Fr(K)===q&&(Ee=new Ee(k,M+"enter",Ae,a,K),Ee.target=z,Ee.relatedTarget=et,W=Ee),et=W,G&&Ae)t:{for(Ee=G,k=Ae,M=0,z=Ee;z;z=To(z))M++;for(z=0,W=k;W;W=To(W))z++;for(;0<M-z;)Ee=To(Ee),M--;for(;0<z-M;)k=To(k),z--;for(;M--;){if(Ee===k||k!==null&&Ee===k.alternate)break t;Ee=To(Ee),k=To(k)}Ee=null}else Ee=null;G!==null&&uE(ee,H,G,Ee,!1),Ae!==null&&et!==null&&uE(ee,et,Ae,Ee,!0)}}e:{if(H=q?_r(q):window,G=H.nodeName&&H.nodeName.toLowerCase(),G==="select"||G==="input"&&H.type==="file")var pe=xy;else if(Mt(H))if(Cy)pe=cA;else{pe=lA;var Oe=oA}else G=H.nodeName,!G||G.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?q&&El(q.elementType)&&(pe=xy):pe=uA;if(pe&&(pe=pe(n,q))){Jr(ee,pe,a,K);break e}Oe&&Oe(n,H,q),n==="focusout"&&q&&H.type==="number"&&q.memoizedProps.value!=null&&Vi(H,"number",H.value)}switch(Oe=q?_r(q):window,n){case"focusin":(Mt(Oe)||Oe.contentEditable==="true")&&(Xa=Oe,Sd=q,Dl=null);break;case"focusout":Dl=Sd=Xa=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,Ly(ee,a,K);break;case"selectionchange":if(fA)break;case"keydown":case"keyup":Ly(ee,a,K)}var ye;if(br)e:{switch(n){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Ue?Q(n,a)&&(Te="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(v&&a.locale!=="ko"&&(Ue||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ue&&(ye=Sl()):(Tr=K,Pi="value"in Tr?Tr.value:Tr.textContent,Ue=!0)),Oe=mh(q,Te),0<Oe.length&&(Te=new bl(Te,n,null,a,K),ee.push({event:Te,listeners:Oe}),ye?Te.data=ye:(ye=oe(a),ye!==null&&(Te.data=ye)))),(ye=y?Ot(n,a):je(n,a))&&(Te=mh(q,"onBeforeInput"),0<Te.length&&(Oe=new bl("onBeforeInput","beforeinput",null,a,K),ee.push({event:Oe,listeners:Te}),Oe.data=ye)),YA(ee,n,q,a,K)}oE(ee,i)})}function iu(n,i,a){return{instance:n,listener:i,currentTarget:a}}function mh(n,i){for(var a=i+"Capture",l=[];n!==null;){var h=n,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Hs(n,a),h!=null&&l.unshift(iu(n,h,d)),h=Hs(n,i),h!=null&&l.push(iu(n,h,d))),n.tag===3)return l;n=n.return}return[]}function To(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function uE(n,i,a,l,h){for(var d=i._reactName,E=[];a!==null&&a!==l;){var w=a,x=w.alternate,q=w.stateNode;if(w=w.tag,x!==null&&x===l)break;w!==5&&w!==26&&w!==27||q===null||(x=q,h?(q=Hs(a,d),q!=null&&E.unshift(iu(a,q,x))):h||(q=Hs(a,d),q!=null&&E.push(iu(a,q,x)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var ZA=/\r\n?/g,JA=/\u0000|\uFFFD/g;function cE(n){return(typeof n=="string"?n:""+n).replace(ZA,`
`).replace(JA,"")}function hE(n,i){return i=cE(i),cE(n)===i}function gh(){}function Je(n,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||qn(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&qn(n,""+l);break;case"className":vr(n,"class",l);break;case"tabIndex":vr(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":vr(n,a,l);break;case"style":vl(n,l,d);break;case"data":if(i!=="object"){vr(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=qa(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Je(n,i,"name",h.name,h,null),Je(n,i,"formEncType",h.formEncType,h,null),Je(n,i,"formMethod",h.formMethod,h,null),Je(n,i,"formTarget",h.formTarget,h,null)):(Je(n,i,"encType",h.encType,h,null),Je(n,i,"method",h.method,h,null),Je(n,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=qa(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=gh);break;case"onScroll":l!=null&&Ve("scroll",n);break;case"onScrollEnd":l!=null&&Ve("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=qa(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":Ve("beforetoggle",n),Ve("toggle",n),Mi(n,"popover",l);break;case"xlinkActuate":Qt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Mi(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=md.get(a)||a,Mi(n,a,l))}}function $p(n,i,a,l,h,d){switch(a){case"style":vl(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?qn(n,l):(typeof l=="number"||typeof l=="bigint")&&qn(n,""+l);break;case"onScroll":l!=null&&Ve("scroll",n);break;case"onScrollEnd":l!=null&&Ve("scrollend",n);break;case"onClick":l!=null&&(n.onclick=gh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ka.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=n[Tt]||null,d=d!=null?d[a]:null,typeof d=="function"&&n.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,l,h);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):Mi(n,a,l)}}}function Wt(n,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",n),Ve("load",n);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Je(n,i,d,E,a,null)}}h&&Je(n,i,"srcSet",a.srcSet,a,null),l&&Je(n,i,"src",a.src,a,null);return;case"input":Ve("invalid",n);var w=d=E=h=null,x=null,q=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":h=K;break;case"type":E=K;break;case"checked":x=K;break;case"defaultChecked":q=K;break;case"value":d=K;break;case"defaultValue":w=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:Je(n,i,l,K,a,null)}}zs(n,d,w,x,q,E,h,!1),za(n);return;case"select":Ve("invalid",n),l=E=d=null;for(h in a)if(a.hasOwnProperty(h)&&(w=a[h],w!=null))switch(h){case"value":d=w;break;case"defaultValue":E=w;break;case"multiple":l=w;default:Je(n,i,h,w,a,null)}i=d,a=E,n.multiple=!!l,i!=null?Qr(n,!!l,i,!1):a!=null&&Qr(n,!!l,a,!0);return;case"textarea":Ve("invalid",n),d=h=l=null;for(E in a)if(a.hasOwnProperty(E)&&(w=a[E],w!=null))switch(E){case"value":l=w;break;case"defaultValue":h=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Je(n,i,E,w,a,null)}qs(n,l,h,d),za(n);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(l=a[x],l!=null))switch(x){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Je(n,i,x,l,a,null)}return;case"dialog":Ve("beforetoggle",n),Ve("toggle",n),Ve("cancel",n),Ve("close",n);break;case"iframe":case"object":Ve("load",n);break;case"video":case"audio":for(l=0;l<ru.length;l++)Ve(ru[l],n);break;case"image":Ve("error",n),Ve("load",n);break;case"details":Ve("toggle",n);break;case"embed":case"source":case"link":Ve("error",n),Ve("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in a)if(a.hasOwnProperty(q)&&(l=a[q],l!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Je(n,i,q,l,a,null)}return;default:if(El(i)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&$p(n,i,K,l,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(l=a[w],l!=null&&Je(n,i,w,l,a,null))}function eb(n,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,E=null,w=null,x=null,q=null,K=null;for(G in a){var ee=a[G];if(a.hasOwnProperty(G)&&ee!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":x=ee;default:l.hasOwnProperty(G)||Je(n,i,G,null,l,ee)}}for(var H in l){var G=l[H];if(ee=a[H],l.hasOwnProperty(H)&&(G!=null||ee!=null))switch(H){case"type":d=G;break;case"name":h=G;break;case"checked":q=G;break;case"defaultChecked":K=G;break;case"value":E=G;break;case"defaultValue":w=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:G!==ee&&Je(n,i,H,G,l,ee)}}In(n,E,w,x,q,K,d,h);return;case"select":G=E=w=H=null;for(d in a)if(x=a[d],a.hasOwnProperty(d)&&x!=null)switch(d){case"value":break;case"multiple":G=x;default:l.hasOwnProperty(d)||Je(n,i,d,null,l,x)}for(h in l)if(d=l[h],x=a[h],l.hasOwnProperty(h)&&(d!=null||x!=null))switch(h){case"value":H=d;break;case"defaultValue":w=d;break;case"multiple":E=d;default:d!==x&&Je(n,i,h,d,l,x)}i=w,a=E,l=G,H!=null?Qr(n,!!a,H,!1):!!l!=!!a&&(i!=null?Qr(n,!!a,i,!0):Qr(n,!!a,a?[]:"",!1));return;case"textarea":G=H=null;for(w in a)if(h=a[w],a.hasOwnProperty(w)&&h!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Je(n,i,w,null,l,h)}for(E in l)if(h=l[E],d=a[E],l.hasOwnProperty(E)&&(h!=null||d!=null))switch(E){case"value":H=h;break;case"defaultValue":G=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Je(n,i,E,h,l,d)}We(n,H,G);return;case"option":for(var Ae in a)if(H=a[Ae],a.hasOwnProperty(Ae)&&H!=null&&!l.hasOwnProperty(Ae))switch(Ae){case"selected":n.selected=!1;break;default:Je(n,i,Ae,null,l,H)}for(x in l)if(H=l[x],G=a[x],l.hasOwnProperty(x)&&H!==G&&(H!=null||G!=null))switch(x){case"selected":n.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Je(n,i,x,H,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in a)H=a[Ee],a.hasOwnProperty(Ee)&&H!=null&&!l.hasOwnProperty(Ee)&&Je(n,i,Ee,null,l,H);for(q in l)if(H=l[q],G=a[q],l.hasOwnProperty(q)&&H!==G&&(H!=null||G!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:Je(n,i,q,H,l,G)}return;default:if(El(i)){for(var et in a)H=a[et],a.hasOwnProperty(et)&&H!==void 0&&!l.hasOwnProperty(et)&&$p(n,i,et,void 0,l,H);for(K in l)H=l[K],G=a[K],!l.hasOwnProperty(K)||H===G||H===void 0&&G===void 0||$p(n,i,K,H,l,G);return}}for(var k in a)H=a[k],a.hasOwnProperty(k)&&H!=null&&!l.hasOwnProperty(k)&&Je(n,i,k,null,l,H);for(ee in l)H=l[ee],G=a[ee],!l.hasOwnProperty(ee)||H===G||H==null&&G==null||Je(n,i,ee,H,l,G)}var Qp=null,Yp=null;function yh(n){return n.nodeType===9?n:n.ownerDocument}function fE(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dE(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Kp(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xp=null;function tb(){var n=window.event;return n&&n.type==="popstate"?n===Xp?!1:(Xp=n,!0):(Xp=null,!1)}var pE=typeof setTimeout=="function"?setTimeout:void 0,nb=typeof clearTimeout=="function"?clearTimeout:void 0,mE=typeof Promise=="function"?Promise:void 0,rb=typeof queueMicrotask=="function"?queueMicrotask:typeof mE<"u"?function(n){return mE.resolve(null).then(n).catch(ib)}:pE;function ib(n){setTimeout(function(){throw n})}function Wi(n){return n==="head"}function gE(n,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var E=n.ownerDocument;if(a&1&&su(E.documentElement),a&2&&su(E.body),a&4)for(a=E.head,su(a),E=a.firstChild;E;){var w=E.nextSibling,x=E.nodeName;E[ks]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=w}}if(h===0){n.removeChild(d),du(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);du(i)}function Wp(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wp(a),Oi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function sb(n,i,a,l){for(;n.nodeType===1;){var h=a;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[ks])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=ar(n.nextSibling),n===null)break}return null}function ab(n,i,a){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=ar(n.nextSibling),n===null))return null;return n}function Zp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function ob(n,i){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Jp=null;function yE(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}function _E(n,i,a){switch(i=yh(a),n){case"html":if(n=i.documentElement,!n)throw Error(s(452));return n;case"head":if(n=i.head,!n)throw Error(s(453));return n;case"body":if(n=i.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function su(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Oi(n)}var Wn=new Map,vE=new Set;function _h(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var fi=le.d;le.d={f:lb,r:ub,D:cb,C:hb,L:fb,m:db,X:mb,S:pb,M:gb};function lb(){var n=fi.f(),i=uh();return n||i}function ub(n){var i=yr(n);i!==null&&i.tag===5&&i.type==="form"?j_(i):fi.r(n)}var So=typeof document>"u"?null:document;function EE(n,i,a){var l=So;if(l&&typeof i=="string"&&i){var h=St(i);h='link[rel="'+n+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),vE.has(h)||(vE.add(h),n={rel:n,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Wt(i,"link",n),yt(i),l.head.appendChild(i)))}}function cb(n){fi.D(n),EE("dns-prefetch",n,null)}function hb(n,i){fi.C(n,i),EE("preconnect",n,i)}function fb(n,i,a){fi.L(n,i,a);var l=So;if(l&&n&&i){var h='link[rel="preload"][as="'+St(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+St(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+St(a.imageSizes)+'"]')):h+='[href="'+St(n)+'"]';var d=h;switch(i){case"style":d=wo(n);break;case"script":d=Ao(n)}Wn.has(d)||(n=_({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:n,as:i},a),Wn.set(d,n),l.querySelector(h)!==null||i==="style"&&l.querySelector(au(d))||i==="script"&&l.querySelector(ou(d))||(i=l.createElement("link"),Wt(i,"link",n),yt(i),l.head.appendChild(i)))}}function db(n,i){fi.m(n,i);var a=So;if(a&&n){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+St(l)+'"][href="'+St(n)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ao(n)}if(!Wn.has(d)&&(n=_({rel:"modulepreload",href:n},i),Wn.set(d,n),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ou(d)))return}l=a.createElement("link"),Wt(l,"link",n),yt(l),a.head.appendChild(l)}}}function pb(n,i,a){fi.S(n,i,a);var l=So;if(l&&n){var h=gn(l).hoistableStyles,d=wo(n);i=i||"default";var E=h.get(d);if(!E){var w={loading:0,preload:null};if(E=l.querySelector(au(d)))w.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":i},a),(a=Wn.get(d))&&em(n,a);var x=E=l.createElement("link");yt(x),Wt(x,"link",n),x._p=new Promise(function(q,K){x.onload=q,x.onerror=K}),x.addEventListener("load",function(){w.loading|=1}),x.addEventListener("error",function(){w.loading|=2}),w.loading|=4,vh(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:w},h.set(d,E)}}}function mb(n,i){fi.X(n,i);var a=So;if(a&&n){var l=gn(a).hoistableScripts,h=Ao(n),d=l.get(h);d||(d=a.querySelector(ou(h)),d||(n=_({src:n,async:!0},i),(i=Wn.get(h))&&tm(n,i),d=a.createElement("script"),yt(d),Wt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function gb(n,i){fi.M(n,i);var a=So;if(a&&n){var l=gn(a).hoistableScripts,h=Ao(n),d=l.get(h);d||(d=a.querySelector(ou(h)),d||(n=_({src:n,async:!0,type:"module"},i),(i=Wn.get(h))&&tm(n,i),d=a.createElement("script"),yt(d),Wt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function TE(n,i,a,l){var h=(h=ve.current)?_h(h):null;if(!h)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=wo(a.href),a=gn(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=wo(a.href);var d=gn(h).hoistableStyles,E=d.get(n);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,E),(d=h.querySelector(au(n)))&&!d._p&&(E.instance=d,E.state.loading=5),Wn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Wn.set(n,a),d||yb(h,n,a,E.state))),i&&l===null)throw Error(s(528,""));return E}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ao(a),a=gn(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function wo(n){return'href="'+St(n)+'"'}function au(n){return'link[rel="stylesheet"]['+n+"]"}function SE(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function yb(n,i,a,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Wt(i,"link",a),yt(i),n.head.appendChild(i))}function Ao(n){return'[src="'+St(n)+'"]'}function ou(n){return"script[async]"+n}function wE(n,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+St(a.href)+'"]');if(l)return i.instance=l,yt(l),l;var h=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),yt(l),Wt(l,"style",h),vh(l,a.precedence,n),i.instance=l;case"stylesheet":h=wo(a.href);var d=n.querySelector(au(h));if(d)return i.state.loading|=4,i.instance=d,yt(d),d;l=SE(a),(h=Wn.get(h))&&em(l,h),d=(n.ownerDocument||n).createElement("link"),yt(d);var E=d;return E._p=new Promise(function(w,x){E.onload=w,E.onerror=x}),Wt(d,"link",l),i.state.loading|=4,vh(d,a.precedence,n),i.instance=d;case"script":return d=Ao(a.src),(h=n.querySelector(ou(d)))?(i.instance=h,yt(h),h):(l=a,(h=Wn.get(d))&&(l=_({},a),tm(l,h)),n=n.ownerDocument||n,h=n.createElement("script"),yt(h),Wt(h,"link",l),n.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,vh(l,a.precedence,n));return i.instance}function vh(n,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,E=0;E<l.length;E++){var w=l[E];if(w.dataset.precedence===i)d=w;else if(d!==h)break}d?d.parentNode.insertBefore(n,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(n,i.firstChild))}function em(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function tm(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Eh=null;function AE(n,i,a){if(Eh===null){var l=new Map,h=Eh=new Map;h.set(a,l)}else h=Eh,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),h=0;h<a.length;h++){var d=a[h];if(!(d[ks]||d[Nt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=n+E;var w=l.get(E);w?w.push(d):l.set(E,[d])}}return l}function bE(n,i,a){n=n.ownerDocument||n,n.head.insertBefore(a,i==="title"?n.querySelector("head > title"):null)}function _b(n,i,a){if(a===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function RE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var lu=null;function vb(){}function Eb(n,i,a){if(lu===null)throw Error(s(475));var l=lu;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=wo(a.href),d=n.querySelector(au(h));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=Th.bind(l),n.then(l,l)),i.state.loading|=4,i.instance=d,yt(d);return}d=n.ownerDocument||n,a=SE(a),(h=Wn.get(h))&&em(a,h),d=d.createElement("link"),yt(d);var E=d;E._p=new Promise(function(w,x){E.onload=w,E.onerror=x}),Wt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Th.bind(l),n.addEventListener("load",i),n.addEventListener("error",i))}}function Tb(){if(lu===null)throw Error(s(475));var n=lu;return n.stylesheets&&n.count===0&&nm(n,n.stylesheets),0<n.count?function(i){var a=setTimeout(function(){if(n.stylesheets&&nm(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(a)}}:null}function Th(){if(this.count--,this.count===0){if(this.stylesheets)nm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Sh=null;function nm(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Sh=new Map,i.forEach(Sb,n),Sh=null,Th.call(n))}function Sb(n,i){if(!(i.state.loading&4)){var a=Sh.get(n);if(a)var l=a.get(null);else{a=new Map,Sh.set(n,a);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var E=h[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),l=E)}l&&a.set(null,l)}h=i.instance,E=h.getAttribute("data-precedence"),d=a.get(E)||l,d===l&&a.set(null,h),a.set(E,h),this.count++,l=Th.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),i.state.loading|=4}}var uu={$$typeof:re,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function wb(n,i,a,l,h,d,E,w){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.hiddenUpdates=Br(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function IE(n,i,a,l,h,d,E,w,x,q,K,ee){return n=new wb(n,i,a,E,w,x,q,ee),i=1,d===!0&&(i|=24),d=Cn(3,null,null,i),n.current=d,d.stateNode=n,i=Ld(),i.refCount++,n.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},qd(d),n}function xE(n){return n?(n=eo,n):eo}function CE(n,i,a,l,h,d){h=xE(h),l.context===null?l.context=h:l.pendingContext=h,l=Ui(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=ji(n,l,i),a!==null&&(Vn(a,n,i),jl(a,n,i))}function DE(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function rm(n,i){DE(n,i),(n=n.alternate)&&DE(n,i)}function NE(n){if(n.tag===13){var i=Ja(n,67108864);i!==null&&Vn(i,n,67108864),rm(n,67108864)}}var wh=!0;function Ab(n,i,a,l){var h=Y.T;Y.T=null;var d=le.p;try{le.p=2,im(n,i,a,l)}finally{le.p=d,Y.T=h}}function bb(n,i,a,l){var h=Y.T;Y.T=null;var d=le.p;try{le.p=8,im(n,i,a,l)}finally{le.p=d,Y.T=h}}function im(n,i,a,l){if(wh){var h=sm(l);if(h===null)Gp(n,i,l,Ah,a),ME(n,l);else if(Ib(h,n,i,a,l))l.stopPropagation();else if(ME(n,l),i&4&&-1<Rb.indexOf(n)){for(;h!==null;){var d=yr(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=tr(d.pendingLanes);if(E!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var x=1<<31-on(E);w.entanglements[1]|=x,E&=~x}Nr(d),(Ke&6)===0&&(oh=jn()+500,nu(0))}}break;case 13:w=Ja(d,2),w!==null&&Vn(w,d,2),uh(),rm(d,2)}if(d=sm(l),d===null&&Gp(n,i,l,Ah,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Gp(n,i,l,null,a)}}function sm(n){return n=Bn(n),am(n)}var Ah=null;function am(n){if(Ah=null,n=Fr(n),n!==null){var i=u(n);if(i===null)n=null;else{var a=i.tag;if(a===13){if(n=f(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Ah=n,null}function OE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ud()){case ol:return 2;case Oa:return 8;case Ns:case cd:return 32;case Ma:return 268435456;default:return 32}default:return 32}}var om=!1,Zi=null,Ji=null,es=null,cu=new Map,hu=new Map,ts=[],Rb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ME(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":cu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":hu.delete(i.pointerId)}}function fu(n,i,a,l,h,d){return n===null||n.nativeEvent!==d?(n={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=yr(i),i!==null&&NE(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Ib(n,i,a,l,h){switch(i){case"focusin":return Zi=fu(Zi,n,i,a,l,h),!0;case"dragenter":return Ji=fu(Ji,n,i,a,l,h),!0;case"mouseover":return es=fu(es,n,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return cu.set(d,fu(cu.get(d)||null,n,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,hu.set(d,fu(hu.get(d)||null,n,i,a,l,h)),!0}return!1}function VE(n){var i=Fr(n.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){n.blockedOn=i,uc(n.priority,function(){if(a.tag===13){var l=Mn();l=Ci(l);var h=Ja(a,l);h!==null&&Vn(h,a,l),rm(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bh(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=sm(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Yr=l,a.target.dispatchEvent(l),Yr=null}else return i=yr(a),i!==null&&NE(i),n.blockedOn=a,!1;i.shift()}return!0}function PE(n,i,a){bh(n)&&a.delete(i)}function xb(){om=!1,Zi!==null&&bh(Zi)&&(Zi=null),Ji!==null&&bh(Ji)&&(Ji=null),es!==null&&bh(es)&&(es=null),cu.forEach(PE),hu.forEach(PE)}function Rh(n,i){n.blockedOn===i&&(n.blockedOn=null,om||(om=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,xb)))}var Ih=null;function kE(n){Ih!==n&&(Ih=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ih===n&&(Ih=null);for(var i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],h=n[i+2];if(typeof l!="function"){if(am(l||a)===null)continue;break}var d=yr(a);d!==null&&(n.splice(i,3),i-=3,ap(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function du(n){function i(x){return Rh(x,n)}Zi!==null&&Rh(Zi,n),Ji!==null&&Rh(Ji,n),es!==null&&Rh(es,n),cu.forEach(i),hu.forEach(i);for(var a=0;a<ts.length;a++){var l=ts[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<ts.length&&(a=ts[0],a.blockedOn===null);)VE(a),a.blockedOn===null&&ts.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],E=h[Tt]||null;if(typeof d=="function")E||kE(a);else if(E){var w=null;if(d&&d.hasAttribute("formAction")){if(h=d,E=d[Tt]||null)w=E.formAction;else if(am(h)!==null)continue}else w=E.action;typeof w=="function"?a[l+1]=w:(a.splice(l,3),l-=3),kE(a)}}}function lm(n){this._internalRoot=n}xh.prototype.render=lm.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=Mn();CE(a,l,n,i,null,null)},xh.prototype.unmount=lm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;CE(n.current,2,null,n,null,null),uh(),i[zn]=null}};function xh(n){this._internalRoot=n}xh.prototype.unstable_scheduleHydration=function(n){if(n){var i=Di();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ts.length&&i!==0&&i<ts[a].priority;a++);ts.splice(a,0,n),a===0&&VE(n)}};var LE=e.version;if(LE!=="19.1.0")throw Error(s(527,LE,"19.1.0"));le.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=m(i),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var Cb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ch=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ch.isDisabled&&Ch.supportsFiber)try{dt=Ch.inject(Cb),Ye=Ch}catch{}}return mu.createRoot=function(n,i){if(!o(n))throw Error(s(299));var a=!1,l="",h=J_,d=ev,E=tv,w=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks)),i=IE(n,1,!1,null,null,a,l,h,d,E,w,null),n[zn]=i.current,Fp(n),new lm(i)},mu.hydrateRoot=function(n,i,a){if(!o(n))throw Error(s(299));var l=!1,h="",d=J_,E=ev,w=tv,x=null,q=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(x=a.unstable_transitionCallbacks),a.formState!==void 0&&(q=a.formState)),i=IE(n,1,!0,i,a??null,l,h,d,E,w,x,q),i.context=xE(null),a=i.current,l=Mn(),l=Ci(l),h=Ui(l),h.callback=null,ji(a,h,l),a=l,i.current.lanes=a,Hr(i,a),Nr(i),n[zn]=i.current,Fp(n),new xh(i)},mu.version="19.1.0",mu}var QE;function zb(){if(QE)return hm.exports;QE=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hm.exports=jb(),hm.exports}var qb=zb();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var YE="popstate";function Bb(r={}){function e(s,o){let{pathname:u,search:f,hash:p}=s.location;return Vm("",{pathname:u,search:f,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Nu(o)}return Fb(e,t,null,r)}function ut(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function fr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Hb(){return Math.random().toString(36).substring(2,10)}function KE(r,e){return{usr:r.state,key:r.key,idx:e}}function Vm(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Yo(e):e,state:t,key:e&&e.key||s||Hb()}}function Nu({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Yo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function Fb(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,p="POP",m=null,g=_();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function _(){return(f.state||{idx:null}).idx}function T(){p="POP";let B=_(),J=B==null?null:B-g;g=B,m&&m({action:p,location:$.location,delta:J})}function A(B,J){p="PUSH";let X=Vm($.location,B,J);g=_()+1;let re=KE(X,g),he=$.createHref(X);try{f.pushState(re,"",he)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;o.location.assign(he)}u&&m&&m({action:p,location:$.location,delta:1})}function N(B,J){p="REPLACE";let X=Vm($.location,B,J);g=_();let re=KE(X,g),he=$.createHref(X);f.replaceState(re,"",he),u&&m&&m({action:p,location:$.location,delta:0})}function U(B){return Gb(B)}let $={get action(){return p},get location(){return r(o,f)},listen(B){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(YE,T),m=B,()=>{o.removeEventListener(YE,T),m=null}},createHref(B){return e(o,B)},createURL:U,encodeLocation(B){let J=U(B);return{pathname:J.pathname,search:J.search,hash:J.hash}},push:A,replace:N,go(B){return f.go(B)}};return $}function Gb(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),ut(t,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Nu(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function $T(r,e,t="/"){return $b(r,e,t,!1)}function $b(r,e,t,s){let o=typeof e=="string"?Yo(e):e,u=Si(o.pathname||"/",t);if(u==null)return null;let f=QT(r);Qb(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let g=iR(u);p=nR(f[m],g,s)}return p}function QT(r,e=[],t=[],s=""){let o=(u,f,p)=>{let m={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};m.relativePath.startsWith("/")&&(ut(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=_i([s,m.relativePath]),_=t.concat(m);u.children&&u.children.length>0&&(ut(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),QT(u.children,e,_,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:eR(g,u.index),routesMeta:_})};return r.forEach((u,f)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))o(u,f);else for(let m of YT(u.path))o(u,f,m)}),e}function YT(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=YT(s.join("/")),p=[];return p.push(...f.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function Qb(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:tR(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Yb=/^:[\w-]+$/,Kb=3,Xb=2,Wb=1,Zb=10,Jb=-2,XE=r=>r==="*";function eR(r,e){let t=r.split("/"),s=t.length;return t.some(XE)&&(s+=Jb),e&&(s+=Xb),t.filter(o=>!XE(o)).reduce((o,u)=>o+(Yb.test(u)?Kb:u===""?Wb:Zb),s)}function tR(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function nR(r,e,t=!1){let{routesMeta:s}=r,o={},u="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],g=p===s.length-1,_=u==="/"?e:e.slice(u.length)||"/",T=rf({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},_),A=m.route;if(!T&&g&&t&&!s[s.length-1].route.index&&(T=rf({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!T)return null;Object.assign(o,T.params),f.push({params:o,pathname:_i([u,T.pathname]),pathnameBase:lR(_i([u,T.pathnameBase])),route:A}),T.pathnameBase!=="/"&&(u=_i([u,T.pathnameBase]))}return f}function rf(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=rR(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((g,{paramName:_,isOptional:T},A)=>{if(_==="*"){let U=p[A]||"";f=u.slice(0,u.length-U.length).replace(/(.)\/+$/,"$1")}const N=p[A];return T&&!N?g[_]=void 0:g[_]=(N||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:f,pattern:r}}function rR(r,e=!1,t=!0){fr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function iR(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fr(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Si(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function sR(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Yo(r):r;return{pathname:t?t.startsWith("/")?t:aR(t,e):e,search:uR(s),hash:cR(o)}}function aR(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function mm(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oR(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function vg(r){let e=oR(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Eg(r,e,t,s=!1){let o;typeof r=="string"?o=Yo(r):(o={...r},ut(!o.pathname||!o.pathname.includes("?"),mm("?","pathname","search",o)),ut(!o.pathname||!o.pathname.includes("#"),mm("#","pathname","hash",o)),ut(!o.search||!o.search.includes("#"),mm("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,p;if(f==null)p=t;else{let T=e.length-1;if(!s&&f.startsWith("..")){let A=f.split("/");for(;A[0]==="..";)A.shift(),T-=1;o.pathname=A.join("/")}p=T>=0?e[T]:"/"}let m=sR(o,p),g=f&&f!=="/"&&f.endsWith("/"),_=(u||f===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||_)&&(m.pathname+="/"),m}var _i=r=>r.join("/").replace(/\/\/+/g,"/"),lR=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),uR=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,cR=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function hR(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var KT=["POST","PUT","PATCH","DELETE"];new Set(KT);var fR=["GET",...KT];new Set(fR);var Ko=F.createContext(null);Ko.displayName="DataRouter";var xf=F.createContext(null);xf.displayName="DataRouterState";F.createContext(!1);var XT=F.createContext({isTransitioning:!1});XT.displayName="ViewTransition";var dR=F.createContext(new Map);dR.displayName="Fetchers";var pR=F.createContext(null);pR.displayName="Await";var mr=F.createContext(null);mr.displayName="Navigation";var Gu=F.createContext(null);Gu.displayName="Location";var qr=F.createContext({outlet:null,matches:[],isDataRoute:!1});qr.displayName="Route";var Tg=F.createContext(null);Tg.displayName="RouteError";function mR(r,{relative:e}={}){ut(Xo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=F.useContext(mr),{hash:o,pathname:u,search:f}=Qu(r,{relative:e}),p=u;return t!=="/"&&(p=u==="/"?t:_i([t,u])),s.createHref({pathname:p,search:f,hash:o})}function Xo(){return F.useContext(Gu)!=null}function As(){return ut(Xo(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(Gu).location}var WT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ZT(r){F.useContext(mr).static||F.useLayoutEffect(r)}function $u(){let{isDataRoute:r}=F.useContext(qr);return r?xR():gR()}function gR(){ut(Xo(),"useNavigate() may be used only in the context of a <Router> component.");let r=F.useContext(Ko),{basename:e,navigator:t}=F.useContext(mr),{matches:s}=F.useContext(qr),{pathname:o}=As(),u=JSON.stringify(vg(s)),f=F.useRef(!1);return ZT(()=>{f.current=!0}),F.useCallback((m,g={})=>{if(fr(f.current,WT),!f.current)return;if(typeof m=="number"){t.go(m);return}let _=Eg(m,JSON.parse(u),o,g.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:_i([e,_.pathname])),(g.replace?t.replace:t.push)(_,g.state,g)},[e,t,u,o,r])}F.createContext(null);function Qu(r,{relative:e}={}){let{matches:t}=F.useContext(qr),{pathname:s}=As(),o=JSON.stringify(vg(t));return F.useMemo(()=>Eg(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function yR(r,e){return JT(r,e)}function JT(r,e,t,s){var J;ut(Xo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=F.useContext(mr),{matches:u}=F.useContext(qr),f=u[u.length-1],p=f?f.params:{},m=f?f.pathname:"/",g=f?f.pathnameBase:"/",_=f&&f.route;{let X=_&&_.path||"";e1(m,!_||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let T=As(),A;if(e){let X=typeof e=="string"?Yo(e):e;ut(g==="/"||((J=X.pathname)==null?void 0:J.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${X.pathname}" was given in the \`location\` prop.`),A=X}else A=T;let N=A.pathname||"/",U=N;if(g!=="/"){let X=g.replace(/^\//,"").split("/");U="/"+N.replace(/^\//,"").split("/").slice(X.length).join("/")}let $=$T(r,{pathname:U});fr(_||$!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),fr($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=SR($&&$.map(X=>Object.assign({},X,{params:Object.assign({},p,X.params),pathname:_i([g,o.encodeLocation?o.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?g:_i([g,o.encodeLocation?o.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),u,t,s);return e&&B?F.createElement(Gu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},B):B}function _R(){let r=IR(),e=hR(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:u},"ErrorBoundary")," or"," ",F.createElement("code",{style:u},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),t?F.createElement("pre",{style:o},t):null,f)}var vR=F.createElement(_R,null),ER=class extends F.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?F.createElement(qr.Provider,{value:this.props.routeContext},F.createElement(Tg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function TR({routeContext:r,match:e,children:t}){let s=F.useContext(Ko);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(qr.Provider,{value:r},t)}function SR(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,u=t==null?void 0:t.errors;if(u!=null){let m=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);ut(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let f=!1,p=-1;if(t)for(let m=0;m<o.length;m++){let g=o[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:_,errors:T}=t,A=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||A){f=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,g,_)=>{let T,A=!1,N=null,U=null;t&&(T=u&&g.route.id?u[g.route.id]:void 0,N=g.route.errorElement||vR,f&&(p<0&&_===0?(e1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,U=null):p===_&&(A=!0,U=g.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,_+1)),B=()=>{let J;return T?J=N:A?J=U:g.route.Component?J=F.createElement(g.route.Component,null):g.route.element?J=g.route.element:J=m,F.createElement(TR,{match:g,routeContext:{outlet:m,matches:$,isDataRoute:t!=null},children:J})};return t&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?F.createElement(ER,{location:t.location,revalidation:t.revalidation,component:N,error:T,children:B(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):B()},null)}function Sg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wR(r){let e=F.useContext(Ko);return ut(e,Sg(r)),e}function AR(r){let e=F.useContext(xf);return ut(e,Sg(r)),e}function bR(r){let e=F.useContext(qr);return ut(e,Sg(r)),e}function wg(r){let e=bR(r),t=e.matches[e.matches.length-1];return ut(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function RR(){return wg("useRouteId")}function IR(){var s;let r=F.useContext(Tg),e=AR("useRouteError"),t=wg("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function xR(){let{router:r}=wR("useNavigate"),e=wg("useNavigate"),t=F.useRef(!1);return ZT(()=>{t.current=!0}),F.useCallback(async(o,u={})=>{fr(t.current,WT),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var WE={};function e1(r,e,t){!e&&!WE[r]&&(WE[r]=!0,fr(!1,t))}F.memo(CR);function CR({routes:r,future:e,state:t}){return JT(r,void 0,t,e)}function DR({to:r,replace:e,state:t,relative:s}){ut(Xo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=F.useContext(mr);fr(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=F.useContext(qr),{pathname:f}=As(),p=$u(),m=Eg(r,vg(u),f,s==="path"),g=JSON.stringify(m);return F.useEffect(()=>{p(JSON.parse(g),{replace:e,state:t,relative:s})},[p,g,s,e,t]),null}function jh(r){ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function NR({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){ut(!Xo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),p=F.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof t=="string"&&(t=Yo(t));let{pathname:m="/",search:g="",hash:_="",state:T=null,key:A="default"}=t,N=F.useMemo(()=>{let U=Si(m,f);return U==null?null:{location:{pathname:U,search:g,hash:_,state:T,key:A},navigationType:s}},[f,m,g,_,T,A,s]);return fr(N!=null,`<Router basename="${f}"> is not able to match the URL "${m}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:F.createElement(mr.Provider,{value:p},F.createElement(Gu.Provider,{children:e,value:N}))}function OR({children:r,location:e}){return yR(Pm(r),e)}function Pm(r,e=[]){let t=[];return F.Children.forEach(r,(s,o)=>{if(!F.isValidElement(s))return;let u=[...e,o];if(s.type===F.Fragment){t.push.apply(t,Pm(s.props.children,u));return}ut(s.type===jh,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ut(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Pm(s.props.children,u)),t.push(f)}),t}var zh="get",qh="application/x-www-form-urlencoded";function Cf(r){return r!=null&&typeof r.tagName=="string"}function MR(r){return Cf(r)&&r.tagName.toLowerCase()==="button"}function VR(r){return Cf(r)&&r.tagName.toLowerCase()==="form"}function PR(r){return Cf(r)&&r.tagName.toLowerCase()==="input"}function kR(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function LR(r,e){return r.button===0&&(!e||e==="_self")&&!kR(r)}var Dh=null;function UR(){if(Dh===null)try{new FormData(document.createElement("form"),0),Dh=!1}catch{Dh=!0}return Dh}var jR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gm(r){return r!=null&&!jR.has(r)?(fr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qh}"`),null):r}function zR(r,e){let t,s,o,u,f;if(VR(r)){let p=r.getAttribute("action");s=p?Si(p,e):null,t=r.getAttribute("method")||zh,o=gm(r.getAttribute("enctype"))||qh,u=new FormData(r)}else if(MR(r)||PR(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?Si(m,e):null,t=r.getAttribute("formmethod")||p.getAttribute("method")||zh,o=gm(r.getAttribute("formenctype"))||gm(p.getAttribute("enctype"))||qh,u=new FormData(p,r),!UR()){let{name:g,type:_,value:T}=r;if(_==="image"){let A=g?`${g}.`:"";u.append(`${A}x`,"0"),u.append(`${A}y`,"0")}else g&&u.append(g,T)}}else{if(Cf(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=zh,s=null,o=qh,f=r}return u&&o==="text/plain"&&(f=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ag(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function qR(r,e,t){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&Si(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function BR(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function HR(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function FR(r,e,t){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await BR(u,t);return f.links?f.links():[]}return[]}));return YR(s.flat(1).filter(HR).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function ZE(r,e,t,s,o,u){let f=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,p=(m,g)=>{var _;return t[g].pathname!==m.pathname||((_=t[g].route.path)==null?void 0:_.endsWith("*"))&&t[g].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,g)=>f(m,g)||p(m,g)):u==="data"?e.filter((m,g)=>{var T;let _=s.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let A=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function GR(r,e,{includeHydrateFallback:t}={}){return $R(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function $R(r){return[...new Set(r)]}function QR(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function YR(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(QR(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}function t1(){let r=F.useContext(Ko);return Ag(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function KR(){let r=F.useContext(xf);return Ag(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var bg=F.createContext(void 0);bg.displayName="FrameworkContext";function n1(){let r=F.useContext(bg);return Ag(r,"You must render this element inside a <HydratedRouter> element"),r}function XR(r,e){let t=F.useContext(bg),[s,o]=F.useState(!1),[u,f]=F.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:_,onTouchStart:T}=e,A=F.useRef(null);F.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let $=J=>{J.forEach(X=>{f(X.isIntersecting)})},B=new IntersectionObserver($,{threshold:.5});return A.current&&B.observe(A.current),()=>{B.disconnect()}}},[r]),F.useEffect(()=>{if(s){let $=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout($)}}},[s]);let N=()=>{o(!0)},U=()=>{o(!1),f(!1)};return t?r!=="intent"?[u,A,{}]:[u,A,{onFocus:gu(p,N),onBlur:gu(m,U),onMouseEnter:gu(g,N),onMouseLeave:gu(_,U),onTouchStart:gu(T,N)}]:[!1,A,{}]}function gu(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function WR({page:r,...e}){let{router:t}=t1(),s=F.useMemo(()=>$T(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?F.createElement(JR,{page:r,matches:s,...e}):null}function ZR(r){let{manifest:e,routeModules:t}=n1(),[s,o]=F.useState([]);return F.useEffect(()=>{let u=!1;return FR(r,e,t).then(f=>{u||o(f)}),()=>{u=!0}},[r,e,t]),s}function JR({page:r,matches:e,...t}){let s=As(),{manifest:o,routeModules:u}=n1(),{basename:f}=t1(),{loaderData:p,matches:m}=KR(),g=F.useMemo(()=>ZE(r,e,m,o,s,"data"),[r,e,m,o,s]),_=F.useMemo(()=>ZE(r,e,m,o,s,"assets"),[r,e,m,o,s]),T=F.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let U=new Set,$=!1;if(e.forEach(J=>{var re;let X=o.routes[J.route.id];!X||!X.hasLoader||(!g.some(he=>he.route.id===J.route.id)&&J.route.id in p&&((re=u[J.route.id])!=null&&re.shouldRevalidate)||X.hasClientLoader?$=!0:U.add(J.route.id))}),U.size===0)return[];let B=qR(r,f,"data");return $&&U.size>0&&B.searchParams.set("_routes",e.filter(J=>U.has(J.route.id)).map(J=>J.route.id).join(",")),[B.pathname+B.search]},[f,p,s,o,g,e,r,u]),A=F.useMemo(()=>GR(_,o),[_,o]),N=ZR(_);return F.createElement(F.Fragment,null,T.map(U=>F.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...t})),A.map(U=>F.createElement("link",{key:U,rel:"modulepreload",href:U,...t})),N.map(({key:U,link:$})=>F.createElement("link",{key:U,...$})))}function eI(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var r1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{r1&&(window.__reactRouterVersion="7.7.0")}catch{}function tI({basename:r,children:e,window:t}){let s=F.useRef();s.current==null&&(s.current=Bb({window:t,v5Compat:!0}));let o=s.current,[u,f]=F.useState({action:o.action,location:o.location}),p=F.useCallback(m=>{F.startTransition(()=>f(m))},[f]);return F.useLayoutEffect(()=>o.listen(p),[o,p]),F.createElement(NR,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var i1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s1=F.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:f,state:p,target:m,to:g,preventScrollReset:_,viewTransition:T,...A},N){let{basename:U}=F.useContext(mr),$=typeof g=="string"&&i1.test(g),B,J=!1;if(typeof g=="string"&&$&&(B=g,r1))try{let I=new URL(window.location.href),V=g.startsWith("//")?new URL(I.protocol+g):new URL(g),P=Si(V.pathname,U);V.origin===I.origin&&P!=null?g=P+V.search+V.hash:J=!0}catch{fr(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=mR(g,{relative:o}),[re,he,ue]=XR(s,A),de=sI(g,{replace:f,state:p,target:m,preventScrollReset:_,relative:o,viewTransition:T});function C(I){e&&e(I),I.defaultPrevented||de(I)}let R=F.createElement("a",{...A,...ue,href:B||X,onClick:J||u?e:C,ref:eI(N,he),target:m,"data-discover":!$&&t==="render"?"true":void 0});return re&&!$?F.createElement(F.Fragment,null,R,F.createElement(WR,{page:X})):R});s1.displayName="Link";var nI=F.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:f,viewTransition:p,children:m,...g},_){let T=Qu(f,{relative:g.relative}),A=As(),N=F.useContext(xf),{navigator:U,basename:$}=F.useContext(mr),B=N!=null&&cI(T)&&p===!0,J=U.encodeLocation?U.encodeLocation(T).pathname:T.pathname,X=A.pathname,re=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(X=X.toLowerCase(),re=re?re.toLowerCase():null,J=J.toLowerCase()),re&&$&&(re=Si(re,$)||re);const he=J!=="/"&&J.endsWith("/")?J.length-1:J.length;let ue=X===J||!o&&X.startsWith(J)&&X.charAt(he)==="/",de=re!=null&&(re===J||!o&&re.startsWith(J)&&re.charAt(J.length)==="/"),C={isActive:ue,isPending:de,isTransitioning:B},R=ue?e:void 0,I;typeof s=="function"?I=s(C):I=[s,ue?"active":null,de?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let V=typeof u=="function"?u(C):u;return F.createElement(s1,{...g,"aria-current":R,className:I,ref:_,style:V,to:f,viewTransition:p},typeof m=="function"?m(C):m)});nI.displayName="NavLink";var rI=F.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:f=zh,action:p,onSubmit:m,relative:g,preventScrollReset:_,viewTransition:T,...A},N)=>{let U=lI(),$=uI(p,{relative:g}),B=f.toLowerCase()==="get"?"get":"post",J=typeof p=="string"&&i1.test(p),X=re=>{if(m&&m(re),re.defaultPrevented)return;re.preventDefault();let he=re.nativeEvent.submitter,ue=(he==null?void 0:he.getAttribute("formmethod"))||f;U(he||re.currentTarget,{fetcherKey:e,method:ue,navigate:t,replace:o,state:u,relative:g,preventScrollReset:_,viewTransition:T})};return F.createElement("form",{ref:N,method:B,action:$,onSubmit:s?m:X,...A,"data-discover":!J&&r==="render"?"true":void 0})});rI.displayName="Form";function iI(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function a1(r){let e=F.useContext(Ko);return ut(e,iI(r)),e}function sI(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:f}={}){let p=$u(),m=As(),g=Qu(r,{relative:u});return F.useCallback(_=>{if(LR(_,e)){_.preventDefault();let T=t!==void 0?t:Nu(m)===Nu(g);p(r,{replace:T,state:s,preventScrollReset:o,relative:u,viewTransition:f})}},[m,p,g,t,s,e,r,o,u,f])}var aI=0,oI=()=>`__${String(++aI)}__`;function lI(){let{router:r}=a1("useSubmit"),{basename:e}=F.useContext(mr),t=RR();return F.useCallback(async(s,o={})=>{let{action:u,method:f,encType:p,formData:m,body:g}=zR(s,e);if(o.navigate===!1){let _=o.fetcherKey||oI();await r.fetch(_,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||f,formEncType:o.encType||p,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||f,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function uI(r,{relative:e}={}){let{basename:t}=F.useContext(mr),s=F.useContext(qr);ut(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Qu(r||".",{relative:e})},f=As();if(r==null){u.search=f.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(_=>_==="")){p.delete("index"),m.filter(T=>T).forEach(T=>p.append("index",T));let _=p.toString();u.search=_?`?${_}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:_i([t,u.pathname])),Nu(u)}function cI(r,e={}){let t=F.useContext(XT);ut(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=a1("useViewTransitionState"),o=Qu(r,{relative:e.relative});if(!t.isTransitioning)return!1;let u=Si(t.currentLocation.pathname,s)||t.currentLocation.pathname,f=Si(t.nextLocation.pathname,s)||t.nextLocation.pathname;return rf(o.pathname,f)!=null||rf(o.pathname,u)!=null}var $t=function(){return $t=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},$t.apply(this,arguments)};function Ou(r,e,t){if(t||arguments.length===2)for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return r.concat(u||Array.prototype.slice.call(e))}var st="-ms-",Au="-moz-",$e="-webkit-",o1="comm",Df="rule",Rg="decl",hI="@import",l1="@keyframes",fI="@layer",u1=Math.abs,Ig=String.fromCharCode,km=Object.assign;function dI(r,e){return Gt(r,0)^45?(((e<<2^Gt(r,0))<<2^Gt(r,1))<<2^Gt(r,2))<<2^Gt(r,3):0}function c1(r){return r.trim()}function mi(r,e){return(r=e.exec(r))?r[0]:r}function De(r,e,t){return r.replace(e,t)}function Bh(r,e,t){return r.indexOf(e,t)}function Gt(r,e){return r.charCodeAt(e)|0}function ko(r,e,t){return r.slice(e,t)}function Mr(r){return r.length}function h1(r){return r.length}function yu(r,e){return e.push(r),r}function pI(r,e){return r.map(e).join("")}function JE(r,e){return r.filter(function(t){return!mi(t,e)})}var Nf=1,Lo=1,f1=0,er=0,Rt=0,Wo="";function Of(r,e,t,s,o,u,f,p){return{value:r,root:e,parent:t,type:s,props:o,children:u,line:Nf,column:Lo,length:f,return:"",siblings:p}}function ss(r,e){return km(Of("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function bo(r){for(;r.root;)r=ss(r.root,{children:[r]});yu(r,r.siblings)}function mI(){return Rt}function gI(){return Rt=er>0?Gt(Wo,--er):0,Lo--,Rt===10&&(Lo=1,Nf--),Rt}function ur(){return Rt=er<f1?Gt(Wo,er++):0,Lo++,Rt===10&&(Lo=1,Nf++),Rt}function pa(){return Gt(Wo,er)}function Hh(){return er}function Mf(r,e){return ko(Wo,r,e)}function Lm(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yI(r){return Nf=Lo=1,f1=Mr(Wo=r),er=0,[]}function _I(r){return Wo="",r}function ym(r){return c1(Mf(er-1,Um(r===91?r+2:r===40?r+1:r)))}function vI(r){for(;(Rt=pa())&&Rt<33;)ur();return Lm(r)>2||Lm(Rt)>3?"":" "}function EI(r,e){for(;--e&&ur()&&!(Rt<48||Rt>102||Rt>57&&Rt<65||Rt>70&&Rt<97););return Mf(r,Hh()+(e<6&&pa()==32&&ur()==32))}function Um(r){for(;ur();)switch(Rt){case r:return er;case 34:case 39:r!==34&&r!==39&&Um(Rt);break;case 40:r===41&&Um(r);break;case 92:ur();break}return er}function TI(r,e){for(;ur()&&r+Rt!==57;)if(r+Rt===84&&pa()===47)break;return"/*"+Mf(e,er-1)+"*"+Ig(r===47?r:ur())}function SI(r){for(;!Lm(pa());)ur();return Mf(r,er)}function wI(r){return _I(Fh("",null,null,null,[""],r=yI(r),0,[0],r))}function Fh(r,e,t,s,o,u,f,p,m){for(var g=0,_=0,T=f,A=0,N=0,U=0,$=1,B=1,J=1,X=0,re="",he=o,ue=u,de=s,C=re;B;)switch(U=X,X=ur()){case 40:if(U!=108&&Gt(C,T-1)==58){Bh(C+=De(ym(X),"&","&\f"),"&\f",u1(g?p[g-1]:0))!=-1&&(J=-1);break}case 34:case 39:case 91:C+=ym(X);break;case 9:case 10:case 13:case 32:C+=vI(U);break;case 92:C+=EI(Hh()-1,7);continue;case 47:switch(pa()){case 42:case 47:yu(AI(TI(ur(),Hh()),e,t,m),m);break;default:C+="/"}break;case 123*$:p[g++]=Mr(C)*J;case 125*$:case 59:case 0:switch(X){case 0:case 125:B=0;case 59+_:J==-1&&(C=De(C,/\f/g,"")),N>0&&Mr(C)-T&&yu(N>32?t0(C+";",s,t,T-1,m):t0(De(C," ","")+";",s,t,T-2,m),m);break;case 59:C+=";";default:if(yu(de=e0(C,e,t,g,_,o,p,re,he=[],ue=[],T,u),u),X===123)if(_===0)Fh(C,e,de,de,he,u,T,p,ue);else switch(A===99&&Gt(C,3)===110?100:A){case 100:case 108:case 109:case 115:Fh(r,de,de,s&&yu(e0(r,de,de,0,0,o,p,re,o,he=[],T,ue),ue),o,ue,T,p,s?he:ue);break;default:Fh(C,de,de,de,[""],ue,0,p,ue)}}g=_=N=0,$=J=1,re=C="",T=f;break;case 58:T=1+Mr(C),N=U;default:if($<1){if(X==123)--$;else if(X==125&&$++==0&&gI()==125)continue}switch(C+=Ig(X),X*$){case 38:J=_>0?1:(C+="\f",-1);break;case 44:p[g++]=(Mr(C)-1)*J,J=1;break;case 64:pa()===45&&(C+=ym(ur())),A=pa(),_=T=Mr(re=C+=SI(Hh())),X++;break;case 45:U===45&&Mr(C)==2&&($=0)}}return u}function e0(r,e,t,s,o,u,f,p,m,g,_,T){for(var A=o-1,N=o===0?u:[""],U=h1(N),$=0,B=0,J=0;$<s;++$)for(var X=0,re=ko(r,A+1,A=u1(B=f[$])),he=r;X<U;++X)(he=c1(B>0?N[X]+" "+re:De(re,/&\f/g,N[X])))&&(m[J++]=he);return Of(r,e,t,o===0?Df:p,m,g,_,T)}function AI(r,e,t,s){return Of(r,e,t,o1,Ig(mI()),ko(r,2,-2),0,s)}function t0(r,e,t,s,o){return Of(r,e,t,Rg,ko(r,0,s),ko(r,s+1,-1),s,o)}function d1(r,e,t){switch(dI(r,e)){case 5103:return $e+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $e+r+r;case 4789:return Au+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return $e+r+Au+r+st+r+r;case 5936:switch(Gt(r,e+11)){case 114:return $e+r+st+De(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return $e+r+st+De(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return $e+r+st+De(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return $e+r+st+r+r;case 6165:return $e+r+st+"flex-"+r+r;case 5187:return $e+r+De(r,/(\w+).+(:[^]+)/,$e+"box-$1$2"+st+"flex-$1$2")+r;case 5443:return $e+r+st+"flex-item-"+De(r,/flex-|-self/g,"")+(mi(r,/flex-|baseline/)?"":st+"grid-row-"+De(r,/flex-|-self/g,""))+r;case 4675:return $e+r+st+"flex-line-pack"+De(r,/align-content|flex-|-self/g,"")+r;case 5548:return $e+r+st+De(r,"shrink","negative")+r;case 5292:return $e+r+st+De(r,"basis","preferred-size")+r;case 6060:return $e+"box-"+De(r,"-grow","")+$e+r+st+De(r,"grow","positive")+r;case 4554:return $e+De(r,/([^-])(transform)/g,"$1"+$e+"$2")+r;case 6187:return De(De(De(r,/(zoom-|grab)/,$e+"$1"),/(image-set)/,$e+"$1"),r,"")+r;case 5495:case 3959:return De(r,/(image-set\([^]*)/,$e+"$1$`$1");case 4968:return De(De(r,/(.+:)(flex-)?(.*)/,$e+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$e+r+r;case 4200:if(!mi(r,/flex-|baseline/))return st+"grid-column-align"+ko(r,e)+r;break;case 2592:case 3360:return st+De(r,"template-","")+r;case 4384:case 3616:return t&&t.some(function(s,o){return e=o,mi(s.props,/grid-\w+-end/)})?~Bh(r+(t=t[e].value),"span",0)?r:st+De(r,"-start","")+r+st+"grid-row-span:"+(~Bh(t,"span",0)?mi(t,/\d+/):+mi(t,/\d+/)-+mi(r,/\d+/))+";":st+De(r,"-start","")+r;case 4896:case 4128:return t&&t.some(function(s){return mi(s.props,/grid-\w+-start/)})?r:st+De(De(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return De(r,/(.+)-inline(.+)/,$e+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mr(r)-1-e>6)switch(Gt(r,e+1)){case 109:if(Gt(r,e+4)!==45)break;case 102:return De(r,/(.+:)(.+)-([^]+)/,"$1"+$e+"$2-$3$1"+Au+(Gt(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Bh(r,"stretch",0)?d1(De(r,"stretch","fill-available"),e,t)+r:r}break;case 5152:case 5920:return De(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,u,f,p,m,g){return st+o+":"+u+g+(f?st+o+"-span:"+(p?m:+m-+u)+g:"")+r});case 4949:if(Gt(r,e+6)===121)return De(r,":",":"+$e)+r;break;case 6444:switch(Gt(r,Gt(r,14)===45?18:11)){case 120:return De(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$e+(Gt(r,14)===45?"inline-":"")+"box$3$1"+$e+"$2$3$1"+st+"$2box$3")+r;case 100:return De(r,":",":"+st)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return De(r,"scroll-","scroll-snap-")+r}return r}function sf(r,e){for(var t="",s=0;s<r.length;s++)t+=e(r[s],s,r,e)||"";return t}function bI(r,e,t,s){switch(r.type){case fI:if(r.children.length)break;case hI:case Rg:return r.return=r.return||r.value;case o1:return"";case l1:return r.return=r.value+"{"+sf(r.children,s)+"}";case Df:if(!Mr(r.value=r.props.join(",")))return""}return Mr(t=sf(r.children,s))?r.return=r.value+"{"+t+"}":""}function RI(r){var e=h1(r);return function(t,s,o,u){for(var f="",p=0;p<e;p++)f+=r[p](t,s,o,u)||"";return f}}function II(r){return function(e){e.root||(e=e.return)&&r(e)}}function xI(r,e,t,s){if(r.length>-1&&!r.return)switch(r.type){case Rg:r.return=d1(r.value,r.length,t);return;case l1:return sf([ss(r,{value:De(r.value,"@","@"+$e)})],s);case Df:if(r.length)return pI(t=r.props,function(o){switch(mi(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":bo(ss(r,{props:[De(o,/:(read-\w+)/,":"+Au+"$1")]})),bo(ss(r,{props:[o]})),km(r,{props:JE(t,s)});break;case"::placeholder":bo(ss(r,{props:[De(o,/:(plac\w+)/,":"+$e+"input-$1")]})),bo(ss(r,{props:[De(o,/:(plac\w+)/,":"+Au+"$1")]})),bo(ss(r,{props:[De(o,/:(plac\w+)/,st+"input-$1")]})),bo(ss(r,{props:[o]})),km(r,{props:JE(t,s)});break}return""})}}var CI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pn={},Uo=typeof process<"u"&&Pn!==void 0&&(Pn.REACT_APP_SC_ATTR||Pn.SC_ATTR)||"data-styled",p1="active",m1="data-styled-version",Vf="6.1.19",xg=`/*!sc*/
`,af=typeof window<"u"&&typeof document<"u",DI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Pn!==void 0&&Pn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pn.REACT_APP_SC_DISABLE_SPEEDY!==""?Pn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Pn!==void 0&&Pn.SC_DISABLE_SPEEDY!==void 0&&Pn.SC_DISABLE_SPEEDY!==""&&Pn.SC_DISABLE_SPEEDY!=="false"&&Pn.SC_DISABLE_SPEEDY),NI={},Pf=Object.freeze([]),jo=Object.freeze({});function g1(r,e,t){return t===void 0&&(t=jo),r.theme!==t.theme&&r.theme||e||t.theme}var y1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),OI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,MI=/(^-|-$)/g;function n0(r){return r.replace(OI,"-").replace(MI,"")}var VI=/(a)(d)/gi,Nh=52,r0=function(r){return String.fromCharCode(r+(r>25?39:97))};function jm(r){var e,t="";for(e=Math.abs(r);e>Nh;e=e/Nh|0)t=r0(e%Nh)+t;return(r0(e%Nh)+t).replace(VI,"$1-$2")}var _m,_1=5381,Do=function(r,e){for(var t=e.length;t;)r=33*r^e.charCodeAt(--t);return r},v1=function(r){return Do(_1,r)};function E1(r){return jm(v1(r)>>>0)}function PI(r){return r.displayName||r.name||"Component"}function vm(r){return typeof r=="string"&&!0}var T1=typeof Symbol=="function"&&Symbol.for,S1=T1?Symbol.for("react.memo"):60115,kI=T1?Symbol.for("react.forward_ref"):60112,LI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},UI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},w1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jI=((_m={})[kI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_m[S1]=w1,_m);function i0(r){return("type"in(e=r)&&e.type.$$typeof)===S1?w1:"$$typeof"in r?jI[r.$$typeof]:LI;var e}var zI=Object.defineProperty,qI=Object.getOwnPropertyNames,s0=Object.getOwnPropertySymbols,BI=Object.getOwnPropertyDescriptor,HI=Object.getPrototypeOf,a0=Object.prototype;function A1(r,e,t){if(typeof e!="string"){if(a0){var s=HI(e);s&&s!==a0&&A1(r,s,t)}var o=qI(e);s0&&(o=o.concat(s0(e)));for(var u=i0(r),f=i0(e),p=0;p<o.length;++p){var m=o[p];if(!(m in UI||t&&t[m]||f&&m in f||u&&m in u)){var g=BI(e,m);try{zI(r,m,g)}catch{}}}}return r}function _a(r){return typeof r=="function"}function Cg(r){return typeof r=="object"&&"styledComponentId"in r}function fa(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function zm(r,e){if(r.length===0)return"";for(var t=r[0],s=1;s<r.length;s++)t+=r[s];return t}function Mu(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function qm(r,e,t){if(t===void 0&&(t=!1),!t&&!Mu(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)r[s]=qm(r[s],e[s]);else if(Mu(e))for(var s in e)r[s]=qm(r[s],e[s]);return r}function Dg(r,e){Object.defineProperty(r,"toString",{value:e})}function va(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var FI=function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},r.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,u=o;e>=u;)if((u<<=1)<0)throw va(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var f=o;f<u;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(e+1),m=(f=0,t.length);f<m;f++)this.tag.insertRule(p,t[f])&&(this.groupSizes[e]++,p++)},r.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),o=s+t;this.groupSizes[e]=0;for(var u=s;u<o;u++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),u=o+s,f=o;f<u;f++)t+="".concat(this.tag.getRule(f)).concat(xg);return t},r}(),Gh=new Map,of=new Map,$h=1,Oh=function(r){if(Gh.has(r))return Gh.get(r);for(;of.has($h);)$h++;var e=$h++;return Gh.set(r,e),of.set(e,r),e},GI=function(r,e){$h=e+1,Gh.set(r,e),of.set(e,r)},$I="style[".concat(Uo,"][").concat(m1,'="').concat(Vf,'"]'),QI=new RegExp("^".concat(Uo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),YI=function(r,e,t){for(var s,o=t.split(","),u=0,f=o.length;u<f;u++)(s=o[u])&&r.registerName(e,s)},KI=function(r,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(xg),o=[],u=0,f=s.length;u<f;u++){var p=s[u].trim();if(p){var m=p.match(QI);if(m){var g=0|parseInt(m[1],10),_=m[2];g!==0&&(GI(_,g),YI(r,_,m[3]),r.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},o0=function(r){for(var e=document.querySelectorAll($I),t=0,s=e.length;t<s;t++){var o=e[t];o&&o.getAttribute(Uo)!==p1&&(KI(r,o),o.parentNode&&o.parentNode.removeChild(o))}};function XI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var b1=function(r){var e=document.head,t=r||e,s=document.createElement("style"),o=function(p){var m=Array.from(p.querySelectorAll("style[".concat(Uo,"]")));return m[m.length-1]}(t),u=o!==void 0?o.nextSibling:null;s.setAttribute(Uo,p1),s.setAttribute(m1,Vf);var f=XI();return f&&s.setAttribute("nonce",f),t.insertBefore(s,u),s},WI=function(){function r(e){this.element=b1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,o=0,u=s.length;o<u;o++){var f=s[o];if(f.ownerNode===t)return f}throw va(17)}(this.element),this.length=0}return r.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},r}(),ZI=function(){function r(e){this.element=b1(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r}(),JI=function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r}(),l0=af,ex={isServer:!af,useCSSOMInjection:!DI},lf=function(){function r(e,t,s){e===void 0&&(e=jo),t===void 0&&(t={});var o=this;this.options=$t($t({},ex),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&af&&l0&&(l0=!1,o0(this)),Dg(this,function(){return function(u){for(var f=u.getTag(),p=f.length,m="",g=function(T){var A=function(J){return of.get(J)}(T);if(A===void 0)return"continue";var N=u.names.get(A),U=f.getGroup(T);if(N===void 0||!N.size||U.length===0)return"continue";var $="".concat(Uo,".g").concat(T,'[id="').concat(A,'"]'),B="";N!==void 0&&N.forEach(function(J){J.length>0&&(B+="".concat(J,","))}),m+="".concat(U).concat($,'{content:"').concat(B,'"}').concat(xg)},_=0;_<p;_++)g(_);return m}(o)})}return r.registerId=function(e){return Oh(e)},r.prototype.rehydrate=function(){!this.server&&af&&o0(this)},r.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new r($t($t({},this.options),e),this.gs,t&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,o=t.target;return t.isServer?new JI(o):s?new WI(o):new ZI(o)}(this.options),new FI(e)));var e},r.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},r.prototype.registerName=function(e,t){if(Oh(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},r.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(Oh(e),s)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(Oh(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r}(),tx=/&/g,nx=/^\s*\/\/.*$/gm;function R1(r,e){return r.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=R1(t.children,e)),t})}function rx(r){var e,t,s,o=jo,u=o.options,f=u===void 0?jo:u,p=o.plugins,m=p===void 0?Pf:p,g=function(A,N,U){return U.startsWith(t)&&U.endsWith(t)&&U.replaceAll(t,"").length>0?".".concat(e):A},_=m.slice();_.push(function(A){A.type===Df&&A.value.includes("&")&&(A.props[0]=A.props[0].replace(tx,t).replace(s,g))}),f.prefix&&_.push(xI),_.push(bI);var T=function(A,N,U,$){N===void 0&&(N=""),U===void 0&&(U=""),$===void 0&&($="&"),e=$,t=N,s=new RegExp("\\".concat(t,"\\b"),"g");var B=A.replace(nx,""),J=wI(U||N?"".concat(U," ").concat(N," { ").concat(B," }"):B);f.namespace&&(J=R1(J,f.namespace));var X=[];return sf(J,RI(_.concat(II(function(re){return X.push(re)})))),X};return T.hash=m.length?m.reduce(function(A,N){return N.name||va(15),Do(A,N.name)},_1).toString():"",T}var ix=new lf,Bm=rx(),I1=or.createContext({shouldForwardProp:void 0,styleSheet:ix,stylis:Bm});I1.Consumer;or.createContext(void 0);function Hm(){return F.useContext(I1)}var sx=function(){function r(e,t){var s=this;this.inject=function(o,u){u===void 0&&(u=Bm);var f=s.name+u.hash;o.hasNameForId(s.id,f)||o.insertRules(s.id,f,u(s.rules,f,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Dg(this,function(){throw va(12,String(s.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=Bm),this.name+e.hash},r}(),ax=function(r){return r>="A"&&r<="Z"};function u0(r){for(var e="",t=0;t<r.length;t++){var s=r[t];if(t===1&&s==="-"&&r[0]==="-")return r;ax(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var x1=function(r){return r==null||r===!1||r===""},C1=function(r){var e,t,s=[];for(var o in r){var u=r[o];r.hasOwnProperty(o)&&!x1(u)&&(Array.isArray(u)&&u.isCss||_a(u)?s.push("".concat(u0(o),":"),u,";"):Mu(u)?s.push.apply(s,Ou(Ou(["".concat(o," {")],C1(u),!1),["}"],!1)):s.push("".concat(u0(o),": ").concat((e=o,(t=u)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in CI||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function hs(r,e,t,s){if(x1(r))return[];if(Cg(r))return[".".concat(r.styledComponentId)];if(_a(r)){if(!_a(u=r)||u.prototype&&u.prototype.isReactComponent||!e)return[r];var o=r(e);return hs(o,e,t,s)}var u;return r instanceof sx?t?(r.inject(t,s),[r.getName(s)]):[r]:Mu(r)?C1(r):Array.isArray(r)?Array.prototype.concat.apply(Pf,r.map(function(f){return hs(f,e,t,s)})):[r.toString()]}function D1(r){for(var e=0;e<r.length;e+=1){var t=r[e];if(_a(t)&&!Cg(t))return!1}return!0}var ox=v1(Vf),lx=function(){function r(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&D1(e),this.componentId=t,this.baseHash=Do(ox,t),this.baseStyle=s,lf.registerId(t)}return r.prototype.generateAndInjectStyles=function(e,t,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=fa(o,this.staticRulesId);else{var u=zm(hs(this.rules,e,t,s)),f=jm(Do(this.baseHash,u)>>>0);if(!t.hasNameForId(this.componentId,f)){var p=s(u,".".concat(f),void 0,this.componentId);t.insertRules(this.componentId,f,p)}o=fa(o,f),this.staticRulesId=f}else{for(var m=Do(this.baseHash,s.hash),g="",_=0;_<this.rules.length;_++){var T=this.rules[_];if(typeof T=="string")g+=T;else if(T){var A=zm(hs(T,e,t,s));m=Do(m,A+_),g+=A}}if(g){var N=jm(m>>>0);t.hasNameForId(this.componentId,N)||t.insertRules(this.componentId,N,s(g,".".concat(N),void 0,this.componentId)),o=fa(o,N)}}return o},r}(),Vu=or.createContext(void 0);Vu.Consumer;function ux(r){var e=or.useContext(Vu),t=F.useMemo(function(){return function(s,o){if(!s)throw va(14);if(_a(s)){var u=s(o);return u}if(Array.isArray(s)||typeof s!="object")throw va(8);return o?$t($t({},o),s):s}(r.theme,e)},[r.theme,e]);return r.children?or.createElement(Vu.Provider,{value:t},r.children):null}var Em={};function cx(r,e,t){var s=Cg(r),o=r,u=!vm(r),f=e.attrs,p=f===void 0?Pf:f,m=e.componentId,g=m===void 0?function(he,ue){var de=typeof he!="string"?"sc":n0(he);Em[de]=(Em[de]||0)+1;var C="".concat(de,"-").concat(E1(Vf+de+Em[de]));return ue?"".concat(ue,"-").concat(C):C}(e.displayName,e.parentComponentId):m,_=e.displayName,T=_===void 0?function(he){return vm(he)?"styled.".concat(he):"Styled(".concat(PI(he),")")}(r):_,A=e.displayName&&e.componentId?"".concat(n0(e.displayName),"-").concat(e.componentId):e.componentId||g,N=s&&o.attrs?o.attrs.concat(p).filter(Boolean):p,U=e.shouldForwardProp;if(s&&o.shouldForwardProp){var $=o.shouldForwardProp;if(e.shouldForwardProp){var B=e.shouldForwardProp;U=function(he,ue){return $(he,ue)&&B(he,ue)}}else U=$}var J=new lx(t,A,s?o.componentStyle:void 0);function X(he,ue){return function(de,C,R){var I=de.attrs,V=de.componentStyle,P=de.defaultProps,L=de.foldedComponentIds,D=de.styledComponentId,Dt=de.target,at=or.useContext(Vu),Y=Hm(),le=de.shouldForwardProp||Y.shouldForwardProp,me=g1(C,at,P)||jo,xe=function(Ie,ve,ct){for(var Be,Ut=$t($t({},ve),{className:void 0,theme:ct}),Un=0;Un<Ie.length;Un+=1){var En=_a(Be=Ie[Un])?Be(Ut):Be;for(var an in En)Ut[an]=an==="className"?fa(Ut[an],En[an]):an==="style"?$t($t({},Ut[an]),En[an]):En[an]}return ve.className&&(Ut.className=fa(Ut.className,ve.className)),Ut}(I,C,me),O=xe.as||Dt,ne={};for(var ae in xe)xe[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&xe.theme===me||(ae==="forwardedAs"?ne.as=xe.forwardedAs:le&&!le(ae,O)||(ne[ae]=xe[ae]));var se=function(Ie,ve){var ct=Hm(),Be=Ie.generateAndInjectStyles(ve,ct.styleSheet,ct.stylis);return Be}(V,xe),ge=fa(L,D);return se&&(ge+=" "+se),xe.className&&(ge+=" "+xe.className),ne[vm(O)&&!y1.has(O)?"class":"className"]=ge,R&&(ne.ref=R),F.createElement(O,ne)}(re,he,ue)}X.displayName=T;var re=or.forwardRef(X);return re.attrs=N,re.componentStyle=J,re.displayName=T,re.shouldForwardProp=U,re.foldedComponentIds=s?fa(o.foldedComponentIds,o.styledComponentId):"",re.styledComponentId=A,re.target=s?o.target:r,Object.defineProperty(re,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(he){this._foldedDefaultProps=s?function(ue){for(var de=[],C=1;C<arguments.length;C++)de[C-1]=arguments[C];for(var R=0,I=de;R<I.length;R++)qm(ue,I[R],!0);return ue}({},o.defaultProps,he):he}}),Dg(re,function(){return".".concat(re.styledComponentId)}),u&&A1(re,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),re}function c0(r,e){for(var t=[r[0]],s=0,o=e.length;s<o;s+=1)t.push(e[s],r[s+1]);return t}var h0=function(r){return Object.assign(r,{isCss:!0})};function N1(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(_a(r)||Mu(r))return h0(hs(c0(Pf,Ou([r],e,!0))));var s=r;return e.length===0&&s.length===1&&typeof s[0]=="string"?hs(s):h0(hs(c0(s,e)))}function Fm(r,e,t){if(t===void 0&&(t=jo),!e)throw va(1,e);var s=function(o){for(var u=[],f=1;f<arguments.length;f++)u[f-1]=arguments[f];return r(e,t,N1.apply(void 0,Ou([o],u,!1)))};return s.attrs=function(o){return Fm(r,e,$t($t({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return Fm(r,e,$t($t({},t),o))},s}var O1=function(r){return Fm(cx,r)},ie=O1;y1.forEach(function(r){ie[r]=O1(r)});var hx=function(){function r(e,t){this.rules=e,this.componentId=t,this.isStatic=D1(e),lf.registerId(this.componentId+1)}return r.prototype.createStyles=function(e,t,s,o){var u=o(zm(hs(this.rules,t,s,o)),""),f=this.componentId+e;s.insertRules(f,f,u)},r.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},r.prototype.renderStyles=function(e,t,s,o){e>2&&lf.registerId(this.componentId+e),this.removeStyles(e,s),this.createStyles(e,t,s,o)},r}();function fx(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var s=N1.apply(void 0,Ou([r],e,!1)),o="sc-global-".concat(E1(JSON.stringify(s))),u=new hx(s,o),f=function(m){var g=Hm(),_=or.useContext(Vu),T=or.useRef(g.styleSheet.allocateGSInstance(o)).current;return g.styleSheet.server&&p(T,m,g.styleSheet,_,g.stylis),or.useLayoutEffect(function(){if(!g.styleSheet.server)return p(T,m,g.styleSheet,_,g.stylis),function(){return u.removeStyles(T,g.styleSheet)}},[T,m,g.styleSheet,_,g.stylis]),null};function p(m,g,_,T,A){if(u.isStatic)u.renderStyles(m,NI,_,A);else{var N=$t($t({},g),{theme:g1(g,T,f.defaultProps)});u.renderStyles(m,N,_,A)}}return or.memo(f)}/**
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
 */const dx=()=>{};var f0={};/**
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
 */const M1=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},px=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],f=r[t++],p=r[t++],m=((o&7)<<18|(u&63)<<12|(f&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=r[t++],f=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},V1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,p=f?r[o+1]:0,m=o+2<r.length,g=m?r[o+2]:0,_=u>>2,T=(u&3)<<4|p>>4;let A=(p&15)<<2|g>>6,N=g&63;m||(N=64,f||(A=64)),s.push(t[_],t[T],t[A],t[N])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(M1(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):px(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const g=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||p==null||g==null||T==null)throw new mx;const A=u<<2|p>>4;if(s.push(A),g!==64){const N=p<<4&240|g>>2;if(s.push(N),T!==64){const U=g<<6&192|T;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class mx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gx=function(r){const e=M1(r);return V1.encodeByteArray(e,!0)},uf=function(r){return gx(r).replace(/\./g,"")},P1=function(r){try{return V1.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _x=()=>yx().__FIREBASE_DEFAULTS__,vx=()=>{if(typeof process>"u"||typeof f0>"u")return;const r=f0.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ex=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&P1(r[1]);return e&&JSON.parse(e)},kf=()=>{try{return dx()||_x()||vx()||Ex()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},k1=r=>{var e,t;return(t=(e=kf())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},Tx=r=>{const e=k1(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},L1=()=>{var r;return(r=kf())==null?void 0:r.config},U1=r=>{var e;return(e=kf())==null?void 0:e[`_${r}`]};/**
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
 */class Sx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Zo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function j1(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function wx(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[uf(JSON.stringify(t)),uf(JSON.stringify(f)),""].join(".")}const bu={};function Ax(){const r={prod:[],emulator:[]};for(const e of Object.keys(bu))bu[e]?r.emulator.push(e):r.prod.push(e);return r}function bx(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let d0=!1;function z1(r,e){if(typeof window>"u"||typeof document>"u"||!Zo(window.location.host)||bu[r]===e||bu[r]||d0)return;bu[r]=e;function t(A){return`__firebase__banner__${A}`}const s="__firebase__banner",u=Ax().prod.length>0;function f(){const A=document.getElementById(s);A&&A.remove()}function p(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function m(A,N){A.setAttribute("width","24"),A.setAttribute("id",N),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function g(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{d0=!0,f()},A}function _(A,N){A.setAttribute("id",N),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function T(){const A=bx(s),N=t("text"),U=document.getElementById(N)||document.createElement("span"),$=t("learnmore"),B=document.getElementById($)||document.createElement("a"),J=t("preprendIcon"),X=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const re=A.element;p(re),_(B,$);const he=g();m(X,J),re.append(X,U,B,he),document.body.appendChild(re)}u?(U.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(X.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function Ix(){var e;const r=(e=kf())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cx(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Dx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nx(){const r=mn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Ox(){return!Ix()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mx(){try{return typeof indexedDB=="object"}catch{return!1}}function Vx(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const Px="FirebaseError";class Ii extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Px,Object.setPrototypeOf(this,Ii.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yu.prototype.create)}}class Yu{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?kx(u,s):"Error",p=`${this.serviceName}: ${f} (${o}).`;return new Ii(o,p,s)}}function kx(r,e){return r.replace(Lx,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Lx=/\{\$([^}]+)}/g;function Ux(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ea(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(p0(u)&&p0(f)){if(!Ea(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function p0(r){return r!==null&&typeof r=="object"}/**
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
 */function Ku(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _u(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function vu(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function jx(r,e){const t=new zx(r,e);return t.subscribe.bind(t)}class zx{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");qx(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Tm),o.error===void 0&&(o.error=Tm),o.complete===void 0&&(o.complete=Tm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qx(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Tm(){}/**
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
 */class Bx{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Sx;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fx(e))try{this.getOrInitializeService({instanceIdentifier:ha})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ha){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ha){return this.instances.has(e)}getOptions(e=ha){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&f.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Hx(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ha){return this.component?this.component.multipleInstances?e:ha:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hx(r){return r===ha?void 0:r}function Fx(r){return r.instantiationMode==="EAGER"}/**
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
 */class Gx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Bx(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const $x={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},Qx=Pe.INFO,Yx={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},Kx=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=Yx[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ng{constructor(e){this.name=e,this._logLevel=Qx,this._logHandler=Kx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$x[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const Xx=(r,e)=>e.some(t=>r instanceof t);let m0,g0;function Wx(){return m0||(m0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zx(){return g0||(g0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q1=new WeakMap,Gm=new WeakMap,B1=new WeakMap,Sm=new WeakMap,Og=new WeakMap;function Jx(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{t(fs(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(t=>{t instanceof IDBCursor&&q1.set(t,r)}).catch(()=>{}),Og.set(e,r),e}function eC(r){if(Gm.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{t(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Gm.set(r,e)}let $m={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Gm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||B1.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fs(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function tC(r){$m=r($m)}function nC(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(wm(this),e,...t);return B1.set(s,e.sort?e.sort():[e]),fs(s)}:Zx().includes(r)?function(...e){return r.apply(wm(this),e),fs(q1.get(this))}:function(...e){return fs(r.apply(wm(this),e))}}function rC(r){return typeof r=="function"?nC(r):(r instanceof IDBTransaction&&eC(r),Xx(r,Wx())?new Proxy(r,$m):r)}function fs(r){if(r instanceof IDBRequest)return Jx(r);if(Sm.has(r))return Sm.get(r);const e=rC(r);return e!==r&&(Sm.set(r,e),Og.set(e,r)),e}const wm=r=>Og.get(r);function iC(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),p=fs(f);return s&&f.addEventListener("upgradeneeded",m=>{s(fs(f.result),m.oldVersion,m.newVersion,fs(f.transaction),m)}),t&&f.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const sC=["get","getKey","getAll","getAllKeys","count"],aC=["put","add","delete","clear"],Am=new Map;function y0(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Am.get(e))return Am.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=aC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||sC.includes(t)))return;const u=async function(f,...p){const m=this.transaction(f,o?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(p.shift())),(await Promise.all([g[t](...p),o&&m.done]))[0]};return Am.set(e,u),u}tC(r=>({...r,get:(e,t,s)=>y0(e,t)||r.get(e,t,s),has:(e,t)=>!!y0(e,t)||r.has(e,t)}));/**
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
 */class oC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function lC(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qm="@firebase/app",_0="0.14.0";/**
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
 */const wi=new Ng("@firebase/app"),uC="@firebase/app-compat",cC="@firebase/analytics-compat",hC="@firebase/analytics",fC="@firebase/app-check-compat",dC="@firebase/app-check",pC="@firebase/auth",mC="@firebase/auth-compat",gC="@firebase/database",yC="@firebase/data-connect",_C="@firebase/database-compat",vC="@firebase/functions",EC="@firebase/functions-compat",TC="@firebase/installations",SC="@firebase/installations-compat",wC="@firebase/messaging",AC="@firebase/messaging-compat",bC="@firebase/performance",RC="@firebase/performance-compat",IC="@firebase/remote-config",xC="@firebase/remote-config-compat",CC="@firebase/storage",DC="@firebase/storage-compat",NC="@firebase/firestore",OC="@firebase/ai",MC="@firebase/firestore-compat",VC="firebase",PC="12.0.0";/**
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
 */const Ym="[DEFAULT]",kC={[Qm]:"fire-core",[uC]:"fire-core-compat",[hC]:"fire-analytics",[cC]:"fire-analytics-compat",[dC]:"fire-app-check",[fC]:"fire-app-check-compat",[pC]:"fire-auth",[mC]:"fire-auth-compat",[gC]:"fire-rtdb",[yC]:"fire-data-connect",[_C]:"fire-rtdb-compat",[vC]:"fire-fn",[EC]:"fire-fn-compat",[TC]:"fire-iid",[SC]:"fire-iid-compat",[wC]:"fire-fcm",[AC]:"fire-fcm-compat",[bC]:"fire-perf",[RC]:"fire-perf-compat",[IC]:"fire-rc",[xC]:"fire-rc-compat",[CC]:"fire-gcs",[DC]:"fire-gcs-compat",[NC]:"fire-fst",[MC]:"fire-fst-compat",[OC]:"fire-vertex","fire-js":"fire-js",[VC]:"fire-js-all"};/**
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
 */const cf=new Map,LC=new Map,Km=new Map;function v0(r,e){try{r.container.addComponent(e)}catch(t){wi.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function zo(r){const e=r.name;if(Km.has(e))return wi.debug(`There were multiple attempts to register component ${e}.`),!1;Km.set(e,r);for(const t of cf.values())v0(t,r);for(const t of LC.values())v0(t,r);return!0}function Mg(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Zn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const UC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ds=new Yu("app","Firebase",UC);/**
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
 */class jC{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ta("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ds.create("app-deleted",{appName:this._name})}}/**
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
 */const Jo=PC;function H1(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Ym,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ds.create("bad-app-name",{appName:String(o)});if(t||(t=L1()),!t)throw ds.create("no-options");const u=cf.get(o);if(u){if(Ea(t,u.options)&&Ea(s,u.config))return u;throw ds.create("duplicate-app",{appName:o})}const f=new Gx(o);for(const m of Km.values())f.addComponent(m);const p=new jC(t,s,f);return cf.set(o,p),p}function F1(r=Ym){const e=cf.get(r);if(!e&&r===Ym&&L1())return H1();if(!e)throw ds.create("no-app",{appName:r});return e}function ps(r,e,t){let s=kC[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wi.warn(f.join(" "));return}zo(new Ta(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zC="firebase-heartbeat-database",qC=1,Pu="firebase-heartbeat-store";let bm=null;function G1(){return bm||(bm=iC(zC,qC,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Pu)}catch(t){console.warn(t)}}}}).catch(r=>{throw ds.create("idb-open",{originalErrorMessage:r.message})})),bm}async function BC(r){try{const t=(await G1()).transaction(Pu),s=await t.objectStore(Pu).get($1(r));return await t.done,s}catch(e){if(e instanceof Ii)wi.warn(e.message);else{const t=ds.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wi.warn(t.message)}}}async function E0(r,e){try{const s=(await G1()).transaction(Pu,"readwrite");await s.objectStore(Pu).put(e,$1(r)),await s.done}catch(t){if(t instanceof Ii)wi.warn(t.message);else{const s=ds.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wi.warn(s.message)}}}function $1(r){return`${r.name}!${r.options.appId}`}/**
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
 */const HC=1024,FC=30;class GC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new QC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=T0();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>FC){const f=YC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){wi.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=T0(),{heartbeatsToSend:s,unsentEntries:o}=$C(this._heartbeatsCache.heartbeats),u=uf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return wi.warn(t),""}}}function T0(){return new Date().toISOString().substring(0,10)}function $C(r,e=HC){const t=[];let s=r.slice();for(const o of r){const u=t.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),S0(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),S0(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class QC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mx()?Vx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await BC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return E0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return E0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function S0(r){return uf(JSON.stringify({version:2,heartbeats:r})).length}function YC(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function KC(r){zo(new Ta("platform-logger",e=>new oC(e),"PRIVATE")),zo(new Ta("heartbeat",e=>new GC(e),"PRIVATE")),ps(Qm,_0,r),ps(Qm,_0,"esm2020"),ps("fire-js","")}KC("");function Q1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XC=Q1,Y1=new Yu("auth","Firebase",Q1());/**
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
 */const hf=new Ng("@firebase/auth");function WC(r,...e){hf.logLevel<=Pe.WARN&&hf.warn(`Auth (${Jo}): ${r}`,...e)}function Qh(r,...e){hf.logLevel<=Pe.ERROR&&hf.error(`Auth (${Jo}): ${r}`,...e)}/**
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
 */function dr(r,...e){throw Vg(r,...e)}function Vr(r,...e){return Vg(r,...e)}function K1(r,e,t){const s={...XC(),[e]:t};return new Yu("auth","Firebase",s).create(e,{appName:r.name})}function vi(r){return K1(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vg(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Y1.create(r,...e)}function Se(r,e,...t){if(!r)throw Vg(e,...t)}function gi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Qh(e),new Error(e)}function Ai(r,e){r||gi(e)}/**
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
 */function Xm(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function ZC(){return w0()==="http:"||w0()==="https:"}function w0(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function JC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZC()||Cx()||"connection"in navigator)?navigator.onLine:!0}function eD(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Xu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ai(t>e,"Short delay should be less than long delay!"),this.isMobile=Rx()||Dx()}get(){return JC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pg(r,e){Ai(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class X1{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rD=new Xu(3e4,6e4);function bs(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function xi(r,e,t,s,o={}){return W1(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const p=Ku({key:r.config.apiKey,...f}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:m,...u};return xx()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&Zo(r.emulatorConfig.host)&&(g.credentials="include"),X1.fetch()(await Z1(r,r.config.apiHost,t,p),g)})}async function W1(r,e,t){r._canInitEmulator=!1;const s={...tD,...e};try{const o=new sD(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Mh(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const p=u.ok?f.errorMessage:f.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mh(r,"credential-already-in-use",f);if(m==="EMAIL_EXISTS")throw Mh(r,"email-already-in-use",f);if(m==="USER_DISABLED")throw Mh(r,"user-disabled",f);const _=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw K1(r,_,g);dr(r,_)}}catch(o){if(o instanceof Ii)throw o;dr(r,"network-request-failed",{message:String(o)})}}async function Wu(r,e,t,s,o={}){const u=await xi(r,e,t,s,o);return"mfaPendingCredential"in u&&dr(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function Z1(r,e,t,s){const o=`${e}${t}?${s}`,u=r,f=u.config.emulator?Pg(r.config,o):`${r.config.apiScheme}://${o}`;return nD.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function iD(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Vr(this.auth,"network-request-failed")),rD.get())})}}function Mh(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Vr(r,e,s);return o.customData._tokenResponse=t,o}function A0(r){return r!==void 0&&r.enterprise!==void 0}class aD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return iD(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function oD(r,e){return xi(r,"GET","/v2/recaptchaConfig",bs(r,e))}/**
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
 */async function lD(r,e){return xi(r,"POST","/v1/accounts:delete",e)}async function ff(r,e){return xi(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ru(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uD(r,e=!1){const t=Ct(r),s=await t.getIdToken(e),o=kg(s);Se(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ru(Rm(o.auth_time)),issuedAtTime:Ru(Rm(o.iat)),expirationTime:Ru(Rm(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Rm(r){return Number(r)*1e3}function kg(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Qh("JWT malformed, contained fewer than 3 sections"),null;try{const o=P1(t);return o?JSON.parse(o):(Qh("Failed to decode base64 JWT payload"),null)}catch(o){return Qh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function b0(r){const e=kg(r);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qo(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ii&&cD(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function cD({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class hD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function df(r){var T;const e=r.auth,t=await r.getIdToken(),s=await qo(r,ff(e,{idToken:t}));Se(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(T=o.providerUserInfo)!=null&&T.length?J1(o.providerUserInfo):[],f=dD(r.providerData,u),p=r.isAnonymous,m=!(r.email&&o.passwordHash)&&!(f!=null&&f.length),g=p?m:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Wm(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(r,_)}async function fD(r){const e=Ct(r);await df(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dD(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function J1(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function pD(r,e){const t=await W1(r,{},async()=>{const s=Ku({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await Z1(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:s};return r.emulatorConfig&&Zo(r.emulatorConfig.host)&&(m.credentials="include"),X1.fetch()(f,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function mD(r,e){return xi(r,"POST","/v2/accounts:revokeToken",bs(r,e))}/**
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
 */class Oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):b0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=b0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await pD(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,f=new Oo;return s&&(Se(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(Se(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(Se(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oo,this.toJSON())}_performRefresh(){return gi("not implemented")}}/**
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
 */function rs(r,e){Se(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class lr{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new hD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Wm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await qo(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uD(this,e)}reload(){return fD(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new lr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await df(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(vi(this.auth));const e=await this.getIdToken();return await qo(this,lD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,f=t.photoURL??void 0,p=t.tenantId??void 0,m=t._redirectEventId??void 0,g=t.createdAt??void 0,_=t.lastLoginAt??void 0,{uid:T,emailVerified:A,isAnonymous:N,providerData:U,stsTokenManager:$}=t;Se(T&&$,e,"internal-error");const B=Oo.fromJSON(this.name,$);Se(typeof T=="string",e,"internal-error"),rs(s,e.name),rs(o,e.name),Se(typeof A=="boolean",e,"internal-error"),Se(typeof N=="boolean",e,"internal-error"),rs(u,e.name),rs(f,e.name),rs(p,e.name),rs(m,e.name),rs(g,e.name),rs(_,e.name);const J=new lr({uid:T,auth:e,email:o,emailVerified:A,displayName:s,isAnonymous:N,photoURL:f,phoneNumber:u,tenantId:p,stsTokenManager:B,createdAt:g,lastLoginAt:_});return U&&Array.isArray(U)&&(J.providerData=U.map(X=>({...X}))),m&&(J._redirectEventId=m),J}static async _fromIdTokenResponse(e,t,s=!1){const o=new Oo;o.updateFromServerResponse(t);const u=new lr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await df(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Se(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?J1(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new Oo;p.updateFromIdToken(s);const m=new lr({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:f}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Wm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
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
 */const R0=new Map;function yi(r){Ai(r instanceof Function,"Expected a class definition");let e=R0.get(r);return e?(Ai(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,R0.set(r,e),e)}/**
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
 */class eS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}eS.type="NONE";const I0=eS;/**
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
 */function Yh(r,e,t){return`firebase:${r}:${e}:${t}`}class Mo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Yh(this.userKey,o.apiKey,u),this.fullPersistenceKey=Yh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ff(this.auth,{idToken:e}).catch(()=>{});return t?lr._fromGetAccountInfoResponse(this.auth,t,e):null}return lr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Mo(yi(I0),e,s);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||yi(I0);const f=Yh(s,e.config.apiKey,e.name);let p=null;for(const g of t)try{const _=await g._get(f);if(_){let T;if(typeof _=="string"){const A=await ff(e,{idToken:_}).catch(()=>{});if(!A)break;T=await lr._fromGetAccountInfoResponse(e,A,_)}else T=lr._fromJSON(e,_);g!==u&&(p=T),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new Mo(u,e,s):(u=m[0],p&&await u._set(f,p.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(f)}catch{}})),new Mo(u,e,s))}}/**
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
 */function x0(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(aS(e))return"Blackberry";if(oS(e))return"Webos";if(nS(e))return"Safari";if((e.includes("chrome/")||rS(e))&&!e.includes("edge/"))return"Chrome";if(sS(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function tS(r=mn()){return/firefox\//i.test(r)}function nS(r=mn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rS(r=mn()){return/crios\//i.test(r)}function iS(r=mn()){return/iemobile/i.test(r)}function sS(r=mn()){return/android/i.test(r)}function aS(r=mn()){return/blackberry/i.test(r)}function oS(r=mn()){return/webos/i.test(r)}function Lg(r=mn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function gD(r=mn()){var e;return Lg(r)&&!!((e=window.navigator)!=null&&e.standalone)}function yD(){return Nx()&&document.documentMode===10}function lS(r=mn()){return Lg(r)||sS(r)||oS(r)||aS(r)||/windows phone/i.test(r)||iS(r)}/**
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
 */function uS(r,e=[]){let t;switch(r){case"Browser":t=x0(mn());break;case"Worker":t=`${x0(mn())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Jo}/${s}`}/**
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
 */class _D{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((f,p)=>{try{const m=e(u);f(m)}catch(m){p(m)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function vD(r,e={}){return xi(r,"GET","/v2/passwordPolicy",bs(r,e))}/**
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
 */const ED=6;class TD{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ED,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class SD{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new C0(this),this.idTokenSubscription=new C0(this),this.beforeStateQueue=new _D(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Y1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yi(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Mo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ff(this,{idToken:e}),s=await lr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Zn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(p,p))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,p=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!f||f===p)&&(m!=null&&m.user)&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(f){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await df(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(vi(this));const t=e?Ct(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vD(this),t=new TD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Yu("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await mD(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yi(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await Mo.create(this,[yi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(p,this,"internal-error"),p.then(()=>{f||u(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,o);return()=>{f=!0,m()}}else{const m=e.addObserver(t);return()=>{f=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&WC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ca(r){return Ct(r)}class C0{constructor(e){this.auth=e,this.observer=null,this.addObserver=jx(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wD(r){Lf=r}function cS(r){return Lf.loadJS(r)}function AD(){return Lf.recaptchaEnterpriseScript}function bD(){return Lf.gapiScript}function RD(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class ID{constructor(){this.enterprise=new xD}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class xD{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const CD="recaptcha-enterprise",hS="NO_RECAPTCHA";class DD{constructor(e){this.type=CD,this.auth=Ca(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,p)=>{oD(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new aD(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,f(g.siteKey)}}).catch(m=>{p(m)})})}function o(u,f,p){const m=window.grecaptcha;A0(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(g=>{f(g)}).catch(()=>{f(hS)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ID().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(p=>{if(!t&&A0(window.grecaptcha))o(p,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let m=AD();m.length!==0&&(m+=p),cS(m).then(()=>{o(p,u,f)}).catch(g=>{f(g)})}}).catch(p=>{f(p)})})}}async function D0(r,e,t,s=!1,o=!1){const u=new DD(r);let f;if(o)f=hS;else try{f=await u.verify(t)}catch{f=await u.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Zm(r,e,t,s,o){var u;if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await D0(r,e,t,t==="getOobCode");return s(r,f)}else return s(r,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await D0(r,e,t,t==="getOobCode");return s(r,p)}else return Promise.reject(f)})}/**
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
 */function ND(r,e){const t=Mg(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Ea(u,e??{}))return o;dr(o,"already-initialized")}return t.initialize({options:e})}function OD(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(yi);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function MD(r,e,t){const s=Ca(r);Se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=fS(e),{host:f,port:p}=VD(e),m=p===null?"":`:${p}`,g={url:`${u}//${f}${m}/`},_=Object.freeze({host:f,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Se(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Se(Ea(g,s.config.emulator)&&Ea(_,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=_,s.settings.appVerificationDisabledForTesting=!0,Zo(f)?(j1(`${u}//${f}${m}`),z1("Auth",!0)):PD()}function fS(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function VD(r){const e=fS(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:N0(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:N0(f)}}}function N0(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function PD(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Ug{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gi("not implemented")}_getIdTokenResponse(e){return gi("not implemented")}_linkToIdToken(e,t){return gi("not implemented")}_getReauthenticationResolver(e){return gi("not implemented")}}async function kD(r,e){return xi(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function LD(r,e){return Wu(r,"POST","/v1/accounts:signInWithPassword",bs(r,e))}/**
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
 */async function UD(r,e){return Wu(r,"POST","/v1/accounts:signInWithEmailLink",bs(r,e))}async function jD(r,e){return Wu(r,"POST","/v1/accounts:signInWithEmailLink",bs(r,e))}/**
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
 */class ku extends Ug{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ku(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ku(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zm(e,t,"signInWithPassword",LD);case"emailLink":return UD(e,{email:this._email,oobCode:this._password});default:dr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zm(e,s,"signUpPassword",kD);case"emailLink":return jD(e,{idToken:t,email:this._email,oobCode:this._password});default:dr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vo(r,e){return Wu(r,"POST","/v1/accounts:signInWithIdp",bs(r,e))}/**
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
 */const zD="http://localhost";class Sa extends Ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Sa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const f=new Sa(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const t=this.buildRequest();return Vo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Vo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vo(e,t)}buildRequest(){const e={requestUri:zD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ku(t)}return e}}/**
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
 */function qD(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BD(r){const e=_u(vu(r)).link,t=e?_u(vu(e)).deep_link_id:null,s=_u(vu(r)).deep_link_id;return(s?_u(vu(s)).link:null)||s||t||e||r}class jg{constructor(e){const t=_u(vu(e)),s=t.apiKey??null,o=t.oobCode??null,u=qD(t.mode??null);Se(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=BD(e);try{return new jg(t)}catch{return null}}}/**
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
 */class el{constructor(){this.providerId=el.PROVIDER_ID}static credential(e,t){return ku._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=jg.parseLink(t);return Se(s,"argument-error"),ku._fromEmailAndCode(e,s.code,s.tenantId)}}el.PROVIDER_ID="password";el.EMAIL_PASSWORD_SIGN_IN_METHOD="password";el.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class dS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zu extends dS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class as extends Zu{constructor(){super("facebook.com")}static credential(e){return Sa._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.FACEBOOK_SIGN_IN_METHOD="facebook.com";as.PROVIDER_ID="facebook.com";/**
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
 */class os extends Zu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Sa._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return os.credential(t,s)}catch{return null}}}os.GOOGLE_SIGN_IN_METHOD="google.com";os.PROVIDER_ID="google.com";/**
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
 */class ls extends Zu{constructor(){super("github.com")}static credential(e){return Sa._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ls.credential(e.oauthAccessToken)}catch{return null}}}ls.GITHUB_SIGN_IN_METHOD="github.com";ls.PROVIDER_ID="github.com";/**
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
 */class us extends Zu{constructor(){super("twitter.com")}static credential(e,t){return Sa._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return us.credential(t,s)}catch{return null}}}us.TWITTER_SIGN_IN_METHOD="twitter.com";us.PROVIDER_ID="twitter.com";/**
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
 */async function HD(r,e){return Wu(r,"POST","/v1/accounts:signUp",bs(r,e))}/**
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
 */class wa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await lr._fromIdTokenResponse(e,s,o),f=O0(s);return new wa({user:u,providerId:f,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=O0(s);return new wa({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function O0(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class pf extends Ii{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,pf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new pf(e,t,s,o)}}function pS(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?pf._fromErrorAndOperation(r,u,e,s):u})}async function FD(r,e,t=!1){const s=await qo(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return wa._forOperation(r,"link",s)}/**
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
 */async function GD(r,e,t=!1){const{auth:s}=r;if(Zn(s.app))return Promise.reject(vi(s));const o="reauthenticate";try{const u=await qo(r,pS(s,o,e,r),t);Se(u.idToken,s,"internal-error");const f=kg(u.idToken);Se(f,s,"internal-error");const{sub:p}=f;return Se(r.uid===p,s,"user-mismatch"),wa._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&dr(s,"user-mismatch"),u}}/**
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
 */async function mS(r,e,t=!1){if(Zn(r.app))return Promise.reject(vi(r));const s="signIn",o=await pS(r,s,e),u=await wa._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function $D(r,e){return mS(Ca(r),e)}/**
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
 */async function gS(r){const e=Ca(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QD(r,e,t){if(Zn(r.app))return Promise.reject(vi(r));const s=Ca(r),f=await Zm(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HD).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&gS(r),m}),p=await wa._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(p.user),p}function YD(r,e,t){return Zn(r.app)?Promise.reject(vi(r)):$D(Ct(r),el.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&gS(r),s})}/**
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
 */async function KD(r,e){return xi(r,"POST","/v1/accounts:update",e)}/**
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
 */async function XD(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Ct(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},f=await qo(s,KD(s.auth,u));s.displayName=f.displayName||null,s.photoURL=f.photoUrl||null;const p=s.providerData.find(({providerId:m})=>m==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(f)}function WD(r,e,t,s){return Ct(r).onIdTokenChanged(e,t,s)}function ZD(r,e,t){return Ct(r).beforeAuthStateChanged(e,t)}function Uf(r,e,t,s){return Ct(r).onAuthStateChanged(e,t,s)}function JD(r){return Ct(r).signOut()}const mf="__sak";/**
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
 */class yS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mf,"1"),this.storage.removeItem(mf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const eN=1e3,tN=10;class _S extends yS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((f,p,m)=>{this.notifyListeners(f,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!t&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);yD()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,tN):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},eN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_S.type="LOCAL";const nN=_S;/**
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
 */class vS extends yS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vS.type="SESSION";const ES=vS;/**
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
 */function rN(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class jf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new jf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(f).map(async g=>g(t.origin,u)),m=await rN(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jf.receivers=[];/**
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
 */class iN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((p,m)=>{const g=zg("",20);o.port1.start();const _=setTimeout(()=>{m(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(T){const A=T;if(A.data.eventId===g)switch(A.data.status){case"ack":clearTimeout(_),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(A.data.response);break;default:clearTimeout(_),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function Pr(){return window}function sN(r){Pr().location.href=r}/**
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
 */function TS(){return typeof Pr().WorkerGlobalScope<"u"&&typeof Pr().importScripts=="function"}async function aN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oN(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function lN(){return TS()?self:null}/**
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
 */const SS="firebaseLocalStorageDb",uN=1,gf="firebaseLocalStorage",wS="fbase_key";class Ju{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zf(r,e){return r.transaction([gf],e?"readwrite":"readonly").objectStore(gf)}function cN(){const r=indexedDB.deleteDatabase(SS);return new Ju(r).toPromise()}function Jm(){const r=indexedDB.open(SS,uN);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(gf,{keyPath:wS})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(gf)?e(s):(s.close(),await cN(),e(await Jm()))})})}async function M0(r,e,t){const s=zf(r,!0).put({[wS]:e,value:t});return new Ju(s).toPromise()}async function hN(r,e){const t=zf(r,!1).get(e),s=await new Ju(t).toPromise();return s===void 0?null:s.value}function V0(r,e){const t=zf(r,!0).delete(e);return new Ju(t).toPromise()}const fN=800,dN=3;class AS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>dN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return TS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jf._getInstance(lN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await aN(),!this.activeServiceWorker)return;this.sender=new iN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jm();return await M0(e,mf,"1"),await V0(e,mf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>M0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>hN(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>V0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=zf(o,!1).getAll();return new Ju(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}AS.type="LOCAL";const pN=AS;new Xu(3e4,6e4);/**
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
 */function mN(r,e){return e?yi(e):(Se(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class qg extends Ug{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gN(r){return mS(r.auth,new qg(r),r.bypassAuthState)}function yN(r){const{auth:e,user:t}=r;return Se(t,e,"internal-error"),GD(t,new qg(r),r.bypassAuthState)}async function _N(r){const{auth:e,user:t}=r;return Se(t,e,"internal-error"),FD(t,new qg(r),r.bypassAuthState)}/**
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
 */class bS{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:f,type:p}=e;if(f){this.reject(f);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gN;case"linkViaPopup":case"linkViaRedirect":return _N;case"reauthViaPopup":case"reauthViaRedirect":return yN;default:dr(this.auth,"internal-error")}}resolve(e){Ai(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ai(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vN=new Xu(2e3,1e4);class No extends bS{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,No.currentPopupAction&&No.currentPopupAction.cancel(),No.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){Ai(this.filter.length===1,"Popup operations only handle one event");const e=zg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Vr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Vr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,No.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vN.get())};e()}}No.currentPopupAction=null;/**
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
 */const EN="pendingRedirect",Kh=new Map;class TN extends bS{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Kh.get(this.auth._key());if(!e){try{const s=await SN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Kh.set(this.auth._key(),e)}return this.bypassAuthState||Kh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SN(r,e){const t=bN(e),s=AN(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function wN(r,e){Kh.set(r._key(),e)}function AN(r){return yi(r._redirectPersistence)}function bN(r){return Yh(EN,r.config.apiKey,r.name)}async function RN(r,e,t=!1){if(Zn(r.app))return Promise.reject(vi(r));const s=Ca(r),o=mN(s,e),f=await new TN(s,o,t).execute();return f&&!t&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
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
 */const IN=600*1e3;class xN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!RS(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Vr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IN&&this.cachedEventUids.clear(),this.cachedEventUids.has(P0(e))}saveEventToCache(e){this.cachedEventUids.add(P0(e)),this.lastProcessedEventTime=Date.now()}}function P0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function RS({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CN(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RS(r);default:return!1}}/**
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
 */async function DN(r,e={}){return xi(r,"GET","/v1/projects",e)}/**
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
 */const NN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ON=/^https?/;async function MN(r){if(r.config.emulator)return;const{authorizedDomains:e}=await DN(r);for(const t of e)try{if(VN(t))return}catch{}dr(r,"unauthorized-domain")}function VN(r){const e=Xm(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&f.hostname===s}if(!ON.test(t))return!1;if(NN.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const PN=new Xu(3e4,6e4);function k0(){const r=Pr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function kN(r){return new Promise((e,t)=>{var o,u,f;function s(){k0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{k0(),t(Vr(r,"network-request-failed"))},timeout:PN.get()})}if((u=(o=Pr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((f=Pr().gapi)!=null&&f.load)s();else{const p=RD("iframefcb");return Pr()[p]=()=>{gapi.load?s():t(Vr(r,"network-request-failed"))},cS(`${bD()}?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw Xh=null,e})}let Xh=null;function LN(r){return Xh=Xh||kN(r),Xh}/**
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
 */const UN=new Xu(5e3,15e3),jN="__/auth/iframe",zN="emulator/auth/iframe",qN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HN(r){const e=r.config;Se(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Pg(e,zN):`https://${r.config.authDomain}/${jN}`,s={apiKey:e.apiKey,appName:r.name,v:Jo},o=BN.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ku(s).slice(1)}`}async function FN(r){const e=await LN(r),t=Pr().gapi;return Se(t,r,"internal-error"),e.open({where:document.body,url:HN(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qN,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Vr(r,"network-request-failed"),p=Pr().setTimeout(()=>{u(f)},UN.get());function m(){Pr().clearTimeout(p),o(s)}s.ping(m).then(m,()=>{u(f)})}))}/**
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
 */const GN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$N=500,QN=600,YN="_blank",KN="http://localhost";class L0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XN(r,e,t,s=$N,o=QN){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m={...GN,width:s.toString(),height:o.toString(),top:u,left:f},g=mn().toLowerCase();t&&(p=rS(g)?YN:t),tS(g)&&(e=e||KN,m.scrollbars="yes");const _=Object.entries(m).reduce((A,[N,U])=>`${A}${N}=${U},`,"");if(gD(g)&&p!=="_self")return WN(e||"",p),new L0(null);const T=window.open(e||"",p,_);Se(T,r,"popup-blocked");try{T.focus()}catch{}return new L0(T)}function WN(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const ZN="__/auth/handler",JN="emulator/auth/handler",e2=encodeURIComponent("fac");async function U0(r,e,t,s,o,u){Se(r.config.authDomain,r,"auth-domain-config-required"),Se(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Jo,eventId:o};if(e instanceof dS){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",Ux(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,T]of Object.entries({}))f[_]=T}if(e instanceof Zu){const _=e.getScopes().filter(T=>T!=="");_.length>0&&(f.scopes=_.join(","))}r.tenantId&&(f.tid=r.tenantId);const p=f;for(const _ of Object.keys(p))p[_]===void 0&&delete p[_];const m=await r._getAppCheckToken(),g=m?`#${e2}=${encodeURIComponent(m)}`:"";return`${t2(r)}?${Ku(p).slice(1)}${g}`}function t2({config:r}){return r.emulator?Pg(r,JN):`https://${r.authDomain}/${ZN}`}/**
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
 */const Im="webStorageSupport";class n2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ES,this._completeRedirectFn=RN,this._overrideRedirectResult=wN}async _openPopup(e,t,s,o){var f;Ai((f=this.eventManagers[e._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await U0(e,t,s,Xm(),o);return XN(e,u,zg())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await U0(e,t,s,Xm(),o);return sN(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ai(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await FN(e),s=new xN(e);return t.register("authEvent",o=>(Se(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Im,{type:Im},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[Im];u!==void 0&&t(!!u),dr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=MN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return lS()||nS()||Lg()}}const r2=n2;var j0="@firebase/auth",z0="1.11.0";/**
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
 */class i2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function s2(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function a2(r){zo(new Ta("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=s.options;Se(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:f,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uS(r)},g=new SD(s,o,u,m);return OD(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),zo(new Ta("auth-internal",e=>{const t=Ca(e.getProvider("auth").getImmediate());return(s=>new i2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ps(j0,z0,s2(r)),ps(j0,z0,"esm2020")}/**
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
 */const o2=300,l2=U1("authIdTokenMaxAge")||o2;let q0=null;const u2=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>l2)return;const o=t==null?void 0:t.token;q0!==o&&(q0=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function c2(r=F1()){const e=Mg(r,"auth");if(e.isInitialized())return e.getImmediate();const t=ND(r,{popupRedirectResolver:r2,persistence:[pN,nN,ES]}),s=U1("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=u2(u.toString());ZD(t,f,()=>f(t.currentUser)),WD(t,p=>f(p))}}const o=k1("auth");return o&&MD(t,`http://${o}`),t}function h2(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}wD({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Vr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",h2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});a2("Browser");var f2="firebase",d2="12.0.0";/**
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
 */ps(f2,d2,"app");var B0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ms,IS;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,R){function I(){}I.prototype=R.prototype,C.D=R.prototype,C.prototype=new I,C.prototype.constructor=C,C.C=function(V,P,L){for(var D=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)D[Dt-2]=arguments[Dt];return R.prototype[P].apply(V,D)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,R,I){I||(I=0);var V=Array(16);if(typeof R=="string")for(var P=0;16>P;++P)V[P]=R.charCodeAt(I++)|R.charCodeAt(I++)<<8|R.charCodeAt(I++)<<16|R.charCodeAt(I++)<<24;else for(P=0;16>P;++P)V[P]=R[I++]|R[I++]<<8|R[I++]<<16|R[I++]<<24;R=C.g[0],I=C.g[1],P=C.g[2];var L=C.g[3],D=R+(L^I&(P^L))+V[0]+3614090360&4294967295;R=I+(D<<7&4294967295|D>>>25),D=L+(P^R&(I^P))+V[1]+3905402710&4294967295,L=R+(D<<12&4294967295|D>>>20),D=P+(I^L&(R^I))+V[2]+606105819&4294967295,P=L+(D<<17&4294967295|D>>>15),D=I+(R^P&(L^R))+V[3]+3250441966&4294967295,I=P+(D<<22&4294967295|D>>>10),D=R+(L^I&(P^L))+V[4]+4118548399&4294967295,R=I+(D<<7&4294967295|D>>>25),D=L+(P^R&(I^P))+V[5]+1200080426&4294967295,L=R+(D<<12&4294967295|D>>>20),D=P+(I^L&(R^I))+V[6]+2821735955&4294967295,P=L+(D<<17&4294967295|D>>>15),D=I+(R^P&(L^R))+V[7]+4249261313&4294967295,I=P+(D<<22&4294967295|D>>>10),D=R+(L^I&(P^L))+V[8]+1770035416&4294967295,R=I+(D<<7&4294967295|D>>>25),D=L+(P^R&(I^P))+V[9]+2336552879&4294967295,L=R+(D<<12&4294967295|D>>>20),D=P+(I^L&(R^I))+V[10]+4294925233&4294967295,P=L+(D<<17&4294967295|D>>>15),D=I+(R^P&(L^R))+V[11]+2304563134&4294967295,I=P+(D<<22&4294967295|D>>>10),D=R+(L^I&(P^L))+V[12]+1804603682&4294967295,R=I+(D<<7&4294967295|D>>>25),D=L+(P^R&(I^P))+V[13]+4254626195&4294967295,L=R+(D<<12&4294967295|D>>>20),D=P+(I^L&(R^I))+V[14]+2792965006&4294967295,P=L+(D<<17&4294967295|D>>>15),D=I+(R^P&(L^R))+V[15]+1236535329&4294967295,I=P+(D<<22&4294967295|D>>>10),D=R+(P^L&(I^P))+V[1]+4129170786&4294967295,R=I+(D<<5&4294967295|D>>>27),D=L+(I^P&(R^I))+V[6]+3225465664&4294967295,L=R+(D<<9&4294967295|D>>>23),D=P+(R^I&(L^R))+V[11]+643717713&4294967295,P=L+(D<<14&4294967295|D>>>18),D=I+(L^R&(P^L))+V[0]+3921069994&4294967295,I=P+(D<<20&4294967295|D>>>12),D=R+(P^L&(I^P))+V[5]+3593408605&4294967295,R=I+(D<<5&4294967295|D>>>27),D=L+(I^P&(R^I))+V[10]+38016083&4294967295,L=R+(D<<9&4294967295|D>>>23),D=P+(R^I&(L^R))+V[15]+3634488961&4294967295,P=L+(D<<14&4294967295|D>>>18),D=I+(L^R&(P^L))+V[4]+3889429448&4294967295,I=P+(D<<20&4294967295|D>>>12),D=R+(P^L&(I^P))+V[9]+568446438&4294967295,R=I+(D<<5&4294967295|D>>>27),D=L+(I^P&(R^I))+V[14]+3275163606&4294967295,L=R+(D<<9&4294967295|D>>>23),D=P+(R^I&(L^R))+V[3]+4107603335&4294967295,P=L+(D<<14&4294967295|D>>>18),D=I+(L^R&(P^L))+V[8]+1163531501&4294967295,I=P+(D<<20&4294967295|D>>>12),D=R+(P^L&(I^P))+V[13]+2850285829&4294967295,R=I+(D<<5&4294967295|D>>>27),D=L+(I^P&(R^I))+V[2]+4243563512&4294967295,L=R+(D<<9&4294967295|D>>>23),D=P+(R^I&(L^R))+V[7]+1735328473&4294967295,P=L+(D<<14&4294967295|D>>>18),D=I+(L^R&(P^L))+V[12]+2368359562&4294967295,I=P+(D<<20&4294967295|D>>>12),D=R+(I^P^L)+V[5]+4294588738&4294967295,R=I+(D<<4&4294967295|D>>>28),D=L+(R^I^P)+V[8]+2272392833&4294967295,L=R+(D<<11&4294967295|D>>>21),D=P+(L^R^I)+V[11]+1839030562&4294967295,P=L+(D<<16&4294967295|D>>>16),D=I+(P^L^R)+V[14]+4259657740&4294967295,I=P+(D<<23&4294967295|D>>>9),D=R+(I^P^L)+V[1]+2763975236&4294967295,R=I+(D<<4&4294967295|D>>>28),D=L+(R^I^P)+V[4]+1272893353&4294967295,L=R+(D<<11&4294967295|D>>>21),D=P+(L^R^I)+V[7]+4139469664&4294967295,P=L+(D<<16&4294967295|D>>>16),D=I+(P^L^R)+V[10]+3200236656&4294967295,I=P+(D<<23&4294967295|D>>>9),D=R+(I^P^L)+V[13]+681279174&4294967295,R=I+(D<<4&4294967295|D>>>28),D=L+(R^I^P)+V[0]+3936430074&4294967295,L=R+(D<<11&4294967295|D>>>21),D=P+(L^R^I)+V[3]+3572445317&4294967295,P=L+(D<<16&4294967295|D>>>16),D=I+(P^L^R)+V[6]+76029189&4294967295,I=P+(D<<23&4294967295|D>>>9),D=R+(I^P^L)+V[9]+3654602809&4294967295,R=I+(D<<4&4294967295|D>>>28),D=L+(R^I^P)+V[12]+3873151461&4294967295,L=R+(D<<11&4294967295|D>>>21),D=P+(L^R^I)+V[15]+530742520&4294967295,P=L+(D<<16&4294967295|D>>>16),D=I+(P^L^R)+V[2]+3299628645&4294967295,I=P+(D<<23&4294967295|D>>>9),D=R+(P^(I|~L))+V[0]+4096336452&4294967295,R=I+(D<<6&4294967295|D>>>26),D=L+(I^(R|~P))+V[7]+1126891415&4294967295,L=R+(D<<10&4294967295|D>>>22),D=P+(R^(L|~I))+V[14]+2878612391&4294967295,P=L+(D<<15&4294967295|D>>>17),D=I+(L^(P|~R))+V[5]+4237533241&4294967295,I=P+(D<<21&4294967295|D>>>11),D=R+(P^(I|~L))+V[12]+1700485571&4294967295,R=I+(D<<6&4294967295|D>>>26),D=L+(I^(R|~P))+V[3]+2399980690&4294967295,L=R+(D<<10&4294967295|D>>>22),D=P+(R^(L|~I))+V[10]+4293915773&4294967295,P=L+(D<<15&4294967295|D>>>17),D=I+(L^(P|~R))+V[1]+2240044497&4294967295,I=P+(D<<21&4294967295|D>>>11),D=R+(P^(I|~L))+V[8]+1873313359&4294967295,R=I+(D<<6&4294967295|D>>>26),D=L+(I^(R|~P))+V[15]+4264355552&4294967295,L=R+(D<<10&4294967295|D>>>22),D=P+(R^(L|~I))+V[6]+2734768916&4294967295,P=L+(D<<15&4294967295|D>>>17),D=I+(L^(P|~R))+V[13]+1309151649&4294967295,I=P+(D<<21&4294967295|D>>>11),D=R+(P^(I|~L))+V[4]+4149444226&4294967295,R=I+(D<<6&4294967295|D>>>26),D=L+(I^(R|~P))+V[11]+3174756917&4294967295,L=R+(D<<10&4294967295|D>>>22),D=P+(R^(L|~I))+V[2]+718787259&4294967295,P=L+(D<<15&4294967295|D>>>17),D=I+(L^(P|~R))+V[9]+3951481745&4294967295,C.g[0]=C.g[0]+R&4294967295,C.g[1]=C.g[1]+(P+(D<<21&4294967295|D>>>11))&4294967295,C.g[2]=C.g[2]+P&4294967295,C.g[3]=C.g[3]+L&4294967295}s.prototype.u=function(C,R){R===void 0&&(R=C.length);for(var I=R-this.blockSize,V=this.B,P=this.h,L=0;L<R;){if(P==0)for(;L<=I;)o(this,C,L),L+=this.blockSize;if(typeof C=="string"){for(;L<R;)if(V[P++]=C.charCodeAt(L++),P==this.blockSize){o(this,V),P=0;break}}else for(;L<R;)if(V[P++]=C[L++],P==this.blockSize){o(this,V),P=0;break}}this.h=P,this.o+=R},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var R=1;R<C.length-8;++R)C[R]=0;var I=8*this.o;for(R=C.length-8;R<C.length;++R)C[R]=I&255,I/=256;for(this.u(C),C=Array(16),R=I=0;4>R;++R)for(var V=0;32>V;V+=8)C[I++]=this.g[R]>>>V&255;return C};function u(C,R){var I=p;return Object.prototype.hasOwnProperty.call(I,C)?I[C]:I[C]=R(C)}function f(C,R){this.h=R;for(var I=[],V=!0,P=C.length-1;0<=P;P--){var L=C[P]|0;V&&L==R||(I[P]=L,V=!1)}this.g=I}var p={};function m(C){return-128<=C&&128>C?u(C,function(R){return new f([R|0],0>R?-1:0)}):new f([C|0],0>C?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return T;if(0>C)return B(g(-C));for(var R=[],I=1,V=0;C>=I;V++)R[V]=C/I|0,I*=4294967296;return new f(R,0)}function _(C,R){if(C.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(C.charAt(0)=="-")return B(_(C.substring(1),R));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(R,8)),V=T,P=0;P<C.length;P+=8){var L=Math.min(8,C.length-P),D=parseInt(C.substring(P,P+L),R);8>L?(L=g(Math.pow(R,L)),V=V.j(L).add(g(D))):(V=V.j(I),V=V.add(g(D)))}return V}var T=m(0),A=m(1),N=m(16777216);r=f.prototype,r.m=function(){if($(this))return-B(this).m();for(var C=0,R=1,I=0;I<this.g.length;I++){var V=this.i(I);C+=(0<=V?V:4294967296+V)*R,R*=4294967296}return C},r.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(U(this))return"0";if($(this))return"-"+B(this).toString(C);for(var R=g(Math.pow(C,6)),I=this,V="";;){var P=he(I,R).g;I=J(I,P.j(R));var L=((0<I.g.length?I.g[0]:I.h)>>>0).toString(C);if(I=P,U(I))return L+V;for(;6>L.length;)L="0"+L;V=L+V}},r.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function U(C){if(C.h!=0)return!1;for(var R=0;R<C.g.length;R++)if(C.g[R]!=0)return!1;return!0}function $(C){return C.h==-1}r.l=function(C){return C=J(this,C),$(C)?-1:U(C)?0:1};function B(C){for(var R=C.g.length,I=[],V=0;V<R;V++)I[V]=~C.g[V];return new f(I,~C.h).add(A)}r.abs=function(){return $(this)?B(this):this},r.add=function(C){for(var R=Math.max(this.g.length,C.g.length),I=[],V=0,P=0;P<=R;P++){var L=V+(this.i(P)&65535)+(C.i(P)&65535),D=(L>>>16)+(this.i(P)>>>16)+(C.i(P)>>>16);V=D>>>16,L&=65535,D&=65535,I[P]=D<<16|L}return new f(I,I[I.length-1]&-2147483648?-1:0)};function J(C,R){return C.add(B(R))}r.j=function(C){if(U(this)||U(C))return T;if($(this))return $(C)?B(this).j(B(C)):B(B(this).j(C));if($(C))return B(this.j(B(C)));if(0>this.l(N)&&0>C.l(N))return g(this.m()*C.m());for(var R=this.g.length+C.g.length,I=[],V=0;V<2*R;V++)I[V]=0;for(V=0;V<this.g.length;V++)for(var P=0;P<C.g.length;P++){var L=this.i(V)>>>16,D=this.i(V)&65535,Dt=C.i(P)>>>16,at=C.i(P)&65535;I[2*V+2*P]+=D*at,X(I,2*V+2*P),I[2*V+2*P+1]+=L*at,X(I,2*V+2*P+1),I[2*V+2*P+1]+=D*Dt,X(I,2*V+2*P+1),I[2*V+2*P+2]+=L*Dt,X(I,2*V+2*P+2)}for(V=0;V<R;V++)I[V]=I[2*V+1]<<16|I[2*V];for(V=R;V<2*R;V++)I[V]=0;return new f(I,0)};function X(C,R){for(;(C[R]&65535)!=C[R];)C[R+1]+=C[R]>>>16,C[R]&=65535,R++}function re(C,R){this.g=C,this.h=R}function he(C,R){if(U(R))throw Error("division by zero");if(U(C))return new re(T,T);if($(C))return R=he(B(C),R),new re(B(R.g),B(R.h));if($(R))return R=he(C,B(R)),new re(B(R.g),R.h);if(30<C.g.length){if($(C)||$(R))throw Error("slowDivide_ only works with positive integers.");for(var I=A,V=R;0>=V.l(C);)I=ue(I),V=ue(V);var P=de(I,1),L=de(V,1);for(V=de(V,2),I=de(I,2);!U(V);){var D=L.add(V);0>=D.l(C)&&(P=P.add(I),L=D),V=de(V,1),I=de(I,1)}return R=J(C,P.j(R)),new re(P,R)}for(P=T;0<=C.l(R);){for(I=Math.max(1,Math.floor(C.m()/R.m())),V=Math.ceil(Math.log(I)/Math.LN2),V=48>=V?1:Math.pow(2,V-48),L=g(I),D=L.j(R);$(D)||0<D.l(C);)I-=V,L=g(I),D=L.j(R);U(L)&&(L=A),P=P.add(L),C=J(C,D)}return new re(P,C)}r.A=function(C){return he(this,C).h},r.and=function(C){for(var R=Math.max(this.g.length,C.g.length),I=[],V=0;V<R;V++)I[V]=this.i(V)&C.i(V);return new f(I,this.h&C.h)},r.or=function(C){for(var R=Math.max(this.g.length,C.g.length),I=[],V=0;V<R;V++)I[V]=this.i(V)|C.i(V);return new f(I,this.h|C.h)},r.xor=function(C){for(var R=Math.max(this.g.length,C.g.length),I=[],V=0;V<R;V++)I[V]=this.i(V)^C.i(V);return new f(I,this.h^C.h)};function ue(C){for(var R=C.g.length+1,I=[],V=0;V<R;V++)I[V]=C.i(V)<<1|C.i(V-1)>>>31;return new f(I,C.h)}function de(C,R){var I=R>>5;R%=32;for(var V=C.g.length-I,P=[],L=0;L<V;L++)P[L]=0<R?C.i(L+I)>>>R|C.i(L+I+1)<<32-R:C.i(L+I);return new f(P,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,IS=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=_,ms=f}).apply(typeof B0<"u"?B0:typeof self<"u"?self:typeof window<"u"?window:{});var Vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xS,Eu,CS,Wh,eg,DS,NS,OS;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,v){return c==Array.prototype||c==Object.prototype||(c[y]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vh=="object"&&Vh];for(var y=0;y<c.length;++y){var v=c[y];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function o(c,y){if(y)e:{var v=s;c=c.split(".");for(var b=0;b<c.length-1;b++){var j=c[b];if(!(j in v))break e;v=v[j]}c=c[c.length-1],b=v[c],y=y(b),y!=b&&y!=null&&e(v,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var v=0,b=!1,j={next:function(){if(!b&&v<c.length){var Q=v++;return{value:y(Q,c[Q]),done:!1}}return b=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},p=this||self;function m(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function _(c,y,v){return c.call.apply(c.bind,arguments)}function T(c,y,v){if(!c)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,b),c.apply(y,j)}}return function(){return c.apply(y,arguments)}}function A(c,y,v){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:T,A.apply(null,arguments)}function N(c,y){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function U(c,y){function v(){}v.prototype=y.prototype,c.aa=y.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(b,j,Q){for(var oe=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)oe[Ue-2]=arguments[Ue];return y.prototype[j].apply(b,oe)}}function $(c){const y=c.length;if(0<y){const v=Array(y);for(let b=0;b<y;b++)v[b]=c[b];return v}return[]}function B(c,y){for(let v=1;v<arguments.length;v++){const b=arguments[v];if(m(b)){const j=c.length||0,Q=b.length||0;c.length=j+Q;for(let oe=0;oe<Q;oe++)c[j+oe]=b[oe]}else c.push(b)}}class J{constructor(y,v){this.i=y,this.j=v,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function X(c){return/^[\s\xa0]*$/.test(c)}function re(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function he(c){return he[" "](c),c}he[" "]=function(){};var ue=re().indexOf("Gecko")!=-1&&!(re().toLowerCase().indexOf("webkit")!=-1&&re().indexOf("Edge")==-1)&&!(re().indexOf("Trident")!=-1||re().indexOf("MSIE")!=-1)&&re().indexOf("Edge")==-1;function de(c,y,v){for(const b in c)y.call(v,c[b],b,c)}function C(c,y){for(const v in c)y.call(void 0,c[v],v,c)}function R(c){const y={};for(const v in c)y[v]=c[v];return y}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(c,y){let v,b;for(let j=1;j<arguments.length;j++){b=arguments[j];for(v in b)c[v]=b[v];for(let Q=0;Q<I.length;Q++)v=I[Q],Object.prototype.hasOwnProperty.call(b,v)&&(c[v]=b[v])}}function P(c){var y=1;c=c.split(":");const v=[];for(;0<y&&c.length;)v.push(c.shift()),y--;return c.length&&v.push(c.join(":")),v}function L(c){p.setTimeout(()=>{throw c},0)}function D(){var c=xe;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Dt{constructor(){this.h=this.g=null}add(y,v){const b=at.get();b.set(y,v),this.h?this.h.next=b:this.g=b,this.h=b}}var at=new J(()=>new Y,c=>c.reset());class Y{constructor(){this.next=this.g=this.h=null}set(y,v){this.h=y,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let le,me=!1,xe=new Dt,O=()=>{const c=p.Promise.resolve(void 0);le=()=>{c.then(ne)}};var ne=()=>{for(var c;c=D();){try{c.h.call(c.g)}catch(v){L(v)}var y=at;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}me=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};p.addEventListener("test",v,y),p.removeEventListener("test",v,y)}catch{}return c}();function Ie(c,y){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(ue){e:{try{he(y.nodeName);var j=!0;break e}catch{}j=!1}j||(y=null)}}else v=="mouseover"?y=c.fromElement:v=="mouseout"&&(y=c.toElement);this.relatedTarget=y,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ie.aa.h.call(this)}}U(Ie,se);var ve={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),Be=0;function Ut(c,y,v,b,j){this.listener=c,this.proxy=null,this.src=y,this.type=v,this.capture=!!b,this.ha=j,this.key=++Be,this.da=this.fa=!1}function Un(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function En(c){this.src=c,this.g={},this.h=0}En.prototype.add=function(c,y,v,b,j){var Q=c.toString();c=this.g[Q],c||(c=this.g[Q]=[],this.h++);var oe=Cs(c,y,b,j);return-1<oe?(y=c[oe],v||(y.fa=!1)):(y=new Ut(y,this.src,Q,!!b,j),y.fa=v,c.push(y)),y};function an(c,y){var v=y.type;if(v in c.g){var b=c.g[v],j=Array.prototype.indexOf.call(b,y,void 0),Q;(Q=0<=j)&&Array.prototype.splice.call(b,j,1),Q&&(Un(y),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Cs(c,y,v,b){for(var j=0;j<c.length;++j){var Q=c[j];if(!Q.da&&Q.listener==y&&Q.capture==!!v&&Q.ha==b)return j}return-1}var Ds="closure_lm_"+(1e6*Math.random()|0),al={};function ac(c,y,v,b,j){if(Array.isArray(y)){for(var Q=0;Q<y.length;Q++)ac(c,y[Q],v,b,j);return null}return v=oc(v),c&&c[ct]?c.K(y,v,g(b)?!!b.capture:!1,j):jn(c,y,v,!1,b,j)}function jn(c,y,v,b,j,Q){if(!y)throw Error("Invalid event type");var oe=g(j)?!!j.capture:!!j,Ue=Ma(c);if(Ue||(c[Ds]=Ue=new En(c)),v=Ue.add(y,v,b,oe,Q),v.proxy)return v;if(b=ud(),v.proxy=b,b.src=c,b.listener=v,c.addEventListener)ge||(j=oe),j===void 0&&(j=!1),c.addEventListener(y.toString(),b,j);else if(c.attachEvent)c.attachEvent(Ns(y.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ud(){function c(v){return y.call(c.src,c.listener,v)}const y=cd;return c}function ol(c,y,v,b,j){if(Array.isArray(y))for(var Q=0;Q<y.length;Q++)ol(c,y[Q],v,b,j);else b=g(b)?!!b.capture:!!b,v=oc(v),c&&c[ct]?(c=c.i,y=String(y).toString(),y in c.g&&(Q=c.g[y],v=Cs(Q,v,b,j),-1<v&&(Un(Q[v]),Array.prototype.splice.call(Q,v,1),Q.length==0&&(delete c.g[y],c.h--)))):c&&(c=Ma(c))&&(y=c.g[y.toString()],c=-1,y&&(c=Cs(y,v,b,j)),(v=-1<c?y[c]:null)&&Oa(v))}function Oa(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[ct])an(y.i,c);else{var v=c.type,b=c.proxy;y.removeEventListener?y.removeEventListener(v,b,c.capture):y.detachEvent?y.detachEvent(Ns(v),b):y.addListener&&y.removeListener&&y.removeListener(b),(v=Ma(y))?(an(v,c),v.h==0&&(v.src=null,y[Ds]=null)):Un(c)}}}function Ns(c){return c in al?al[c]:al[c]="on"+c}function cd(c,y){if(c.da)c=!0;else{y=new Ie(y,this);var v=c.listener,b=c.ha||c.src;c.fa&&Oa(c),c=v.call(b,y)}return c}function Ma(c){return c=c[Ds],c instanceof En?c:null}var ll="__closure_events_fn_"+(1e9*Math.random()>>>0);function oc(c){return typeof c=="function"?c:(c[ll]||(c[ll]=function(y){return c.handleEvent(y)}),c[ll])}function dt(){ae.call(this),this.i=new En(this),this.M=this,this.F=null}U(dt,ae),dt.prototype[ct]=!0,dt.prototype.removeEventListener=function(c,y,v,b){ol(this,c,y,v,b)};function Ye(c,y){var v,b=c.F;if(b)for(v=[];b;b=b.F)v.push(b);if(c=c.M,b=y.type||y,typeof y=="string")y=new se(y,c);else if(y instanceof se)y.target=y.target||c;else{var j=y;y=new se(b,c),V(y,j)}if(j=!0,v)for(var Q=v.length-1;0<=Q;Q--){var oe=y.g=v[Q];j=Rn(oe,b,!0,y)&&j}if(oe=y.g=c,j=Rn(oe,b,!0,y)&&j,j=Rn(oe,b,!1,y)&&j,v)for(Q=0;Q<v.length;Q++)oe=y.g=v[Q],j=Rn(oe,b,!1,y)&&j}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var v=c.g[y],b=0;b<v.length;b++)Un(v[b]);delete c.g[y],c.h--}}this.F=null},dt.prototype.K=function(c,y,v,b){return this.i.add(String(c),y,!1,v,b)},dt.prototype.L=function(c,y,v,b){return this.i.add(String(c),y,!0,v,b)};function Rn(c,y,v,b){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var j=!0,Q=0;Q<y.length;++Q){var oe=y[Q];if(oe&&!oe.da&&oe.capture==v){var Ue=oe.listener,Ot=oe.ha||oe.src;oe.fa&&an(c.i,oe),j=Ue.call(Ot,b)!==!1&&j}}return j&&!b.defaultPrevented}function on(c,y,v){if(typeof c=="function")v&&(c=A(c,v));else if(c&&typeof c.handleEvent=="function")c=A(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:p.setTimeout(c,y||0)}function lc(c){c.g=on(()=>{c.g=null,c.i&&(c.i=!1,lc(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class hd extends ae{constructor(y,v){super(),this.m=y,this.l=v,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:lc(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Os(c){ae.call(this),this.h=c,this.g={}}U(Os,ae);var Ms=[];function Vs(c){de(c.g,function(y,v){this.g.hasOwnProperty(v)&&Oa(y)},c),c.g={}}Os.prototype.N=function(){Os.aa.N.call(this),Vs(this)},Os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tr=p.JSON.stringify,Va=p.JSON.parse,Ps=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function ul(){}ul.prototype.h=null;function cl(c){return c.h||(c.h=c.i())}function hl(){}var Br={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hr(){se.call(this,"d")}U(Hr,se);function fl(){se.call(this,"c")}U(fl,se);var gr={},dl=null;function Ci(){return dl=dl||new dt}gr.La="serverreachability";function Pa(c){se.call(this,gr.La,c)}U(Pa,se);function Di(c){const y=Ci();Ye(y,new Pa(y))}gr.STAT_EVENT="statevent";function uc(c,y){se.call(this,gr.STAT_EVENT,c),this.stat=y}U(uc,se);function ot(c){const y=Ci();Ye(y,new uc(y,c))}gr.Ma="timingevent";function Nt(c,y){se.call(this,gr.Ma,c),this.size=y}U(Nt,se);function Tt(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},y)}function zn(){this.g=!0}zn.prototype.xa=function(){this.g=!1};function pl(c,y,v,b,j,Q){c.info(function(){if(c.g)if(Q)for(var oe="",Ue=Q.split("&"),Ot=0;Ot<Ue.length;Ot++){var je=Ue[Ot].split("=");if(1<je.length){var zt=je[0];je=je[1];var Mt=zt.split("_");oe=2<=Mt.length&&Mt[1]=="type"?oe+(zt+"="+je+"&"):oe+(zt+"=redacted&")}}else oe=null;else oe=Q;return"XMLHTTP REQ ("+b+") [attempt "+j+"]: "+y+`
`+v+`
`+oe})}function fd(c,y,v,b,j,Q,oe){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+j+"]: "+y+`
`+v+`
`+Q+" "+oe})}function Ni(c,y,v,b){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+ks(c,v)+(b?" "+b:"")})}function cc(c,y){c.info(function(){return"TIMEOUT: "+y})}zn.prototype.info=function(){};function ks(c,y){if(!c.g)return y;if(!y)return null;try{var v=JSON.parse(y);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var b=v[c];if(!(2>b.length)){var j=b[1];if(Array.isArray(j)&&!(1>j.length)){var Q=j[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var oe=1;oe<j.length;oe++)j[oe]=""}}}}return tr(v)}catch{return y}}var Oi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yr;function _r(){}U(_r,ul),_r.prototype.g=function(){return new XMLHttpRequest},_r.prototype.i=function(){return{}},yr=new _r;function gn(c,y,v,b){this.j=c,this.i=y,this.l=v,this.R=b||1,this.U=new Os(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}var ml={},ka={};function nr(c,y,v){c.L=1,c.v=qs(In(y)),c.m=v,c.P=!0,Gr(c,null)}function Gr(c,y){c.F=Date.now(),Ls(c),c.A=In(c.v);var v=c.A,b=c.R;Array.isArray(b)||(b=[String(b)]),Tl(v.i,"t",b),c.C=0,v=c.j.J,c.h=new yt,c.g=Rc(c.j,v?y:null,!c.m),0<c.O&&(c.M=new hd(A(c.Y,c,c.g),c.O)),y=c.U,v=c.g,b=c.ca;var j="readystatechange";Array.isArray(j)||(j&&(Ms[0]=j.toString()),j=Ms);for(var Q=0;Q<j.length;Q++){var oe=ac(v,j[Q],b||y.handleEvent,!1,y.h||y);if(!oe)break;y.g[oe.key]=oe}y=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),Di(),pl(c.i,c.u,c.A,c.l,c.R,c.m)}gn.prototype.ca=function(c){c=c.target;const y=this.M;y&&Fn(c)==3?y.j():this.Y(c)},gn.prototype.Y=function(c){try{if(c==this.g)e:{const Mt=Fn(this.g);var y=this.g.Ba();const Jr=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||_c(this.g)))){this.J||Mt!=4||y==7||(y==8||0>=Jr?Di(3):Di(2)),Mi(this);var v=this.g.Z();this.X=v;t:if(hc(this)){var b=_c(this.g);c="";var j=b.length,Q=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),vr(this);var oe="";break t}this.h.i=new p.TextDecoder}for(y=0;y<j;y++)this.h.h=!0,c+=this.h.i.decode(b[y],{stream:!(Q&&y==j-1)});b.length=0,this.h.g+=c,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=v==200,fd(this.i,this.u,this.A,this.l,this.R,Mt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,Ot=this.g;if((Ue=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(Ue)){var je=Ue;break t}}je=null}if(v=je)Ni(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Us(this,v);else{this.o=!1,this.s=3,ot(12),Qt(this),vr(this);break e}}if(this.P){v=!0;let Yt;for(;!this.J&&this.C<oe.length;)if(Yt=fc(this,oe),Yt==ka){Mt==4&&(this.s=4,ot(14),v=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==ml){this.s=4,ot(15),Ni(this.i,this.l,oe,"[Invalid Chunk]"),v=!1;break}else Ni(this.i,this.l,Yt,null),Us(this,Yt);if(hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||oe.length!=0||this.h.h||(this.s=1,ot(16),v=!1),this.o=this.o&&v,!v)Ni(this.i,this.l,oe,"[Invalid Chunked Response]"),Qt(this),vr(this);else if(0<oe.length&&!this.W){this.W=!0;var zt=this.j;zt.g==this&&zt.ba&&!zt.M&&(zt.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),Ks(zt),zt.M=!0,ot(11))}}else Ni(this.i,this.l,oe,null),Us(this,oe);Mt==4&&Qt(this),this.o&&!this.J&&(Mt==4?wc(this.j,this):(this.o=!1,Ls(this)))}else yd(this.g),v==400&&0<oe.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),Qt(this),vr(this)}}}catch{}finally{}};function hc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function fc(c,y){var v=c.C,b=y.indexOf(`
`,v);return b==-1?ka:(v=Number(y.substring(v,b)),isNaN(v)?ml:(b+=1,b+v>y.length?ka:(y=y.slice(b,b+v),c.C=b+v,y)))}gn.prototype.cancel=function(){this.J=!0,Qt(this)};function Ls(c){c.S=Date.now()+c.I,dc(c,c.I)}function dc(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Tt(A(c.ba,c),y)}function Mi(c){c.B&&(p.clearTimeout(c.B),c.B=null)}gn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(cc(this.i,this.A),this.L!=2&&(Di(),ot(17)),Qt(this),this.s=2,vr(this)):dc(this,this.S-c)};function vr(c){c.j.G==0||c.J||wc(c.j,c)}function Qt(c){Mi(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,Vs(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function Us(c,y){try{var v=c.j;if(v.G!=0&&(v.g==c||gl(v.h,c))){if(!c.K&&gl(v.h,c)&&v.G==3){try{var b=v.Da.g.parse(y)}catch{b=null}if(Array.isArray(b)&&b.length==3){var j=b;if(j[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)Ya(v),$a(v);else break e;Rl(v),ot(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=Tt(A(v.Za,v),6e3));if(1>=Ua(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Zr(v,11)}else if((c.K||v.g==c)&&Ya(v),!X(y))for(j=v.Da.g.parse(y),y=0;y<j.length;y++){let je=j[y];if(v.T=je[0],je=je[1],v.G==2)if(je[0]=="c"){v.K=je[1],v.ia=je[2];const zt=je[3];zt!=null&&(v.la=zt,v.j.info("VER="+v.la));const Mt=je[4];Mt!=null&&(v.Aa=Mt,v.j.info("SVER="+v.Aa));const Jr=je[5];Jr!=null&&typeof Jr=="number"&&0<Jr&&(b=1.5*Jr,v.L=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const Yt=c.g;if(Yt){const Rr=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rr){var Q=b.h;Q.g||Rr.indexOf("spdy")==-1&&Rr.indexOf("quic")==-1&&Rr.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(ja(Q,Q.h),Q.h=null))}if(b.D){const xl=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;xl&&(b.ya=xl,We(b.I,b.D,xl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),b=v;var oe=c;if(b.qa=bc(b,b.J?b.ia:null,b.W),oe.K){yn(b.h,oe);var Ue=oe,Ot=b.L;Ot&&(Ue.I=Ot),Ue.B&&(Mi(Ue),Ls(Ue)),b.g=oe}else Tc(b);0<v.i.length&&Qa(v)}else je[0]!="stop"&&je[0]!="close"||Zr(v,7);else v.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?Zr(v,7):Al(v):je[0]!="noop"&&v.l&&v.l.ta(je),v.v=0)}}Di(4)}catch{}}var pc=class{constructor(c,y){this.g=c,this.map=y}};function $r(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function La(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ua(c){return c.h?1:c.g?c.g.size:0}function gl(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function ja(c,y){c.g?c.g.add(y):c.h=y}function yn(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}$r.prototype.cancel=function(){if(this.i=yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function yl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const v of c.g.values())y=y.concat(v.D);return y}return $(c.i)}function dd(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var y=[],v=c.length,b=0;b<v;b++)y.push(c[b]);return y}y=[],v=0;for(b in c)y[v++]=c[b];return y}function za(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var y=[];c=c.length;for(var v=0;v<c;v++)y.push(v);return y}y=[],v=0;for(const b in c)y[v++]=b;return y}}}function _l(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var v=za(c),b=dd(c),j=b.length,Q=0;Q<j;Q++)y.call(void 0,b[Q],v&&v[Q],c)}var js=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pd(c,y){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var b=c[v].indexOf("="),j=null;if(0<=b){var Q=c[v].substring(0,b);j=c[v].substring(b+1)}else Q=c[v];y(Q,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function St(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof St){this.h=c.h,zs(this,c.j),this.o=c.o,this.g=c.g,Vi(this,c.s),this.l=c.l;var y=c.i,v=new Yr;v.i=y.i,y.g&&(v.g=new Map(y.g),v.h=y.h),Qr(this,v),this.m=c.m}else c&&(y=String(c).match(js))?(this.h=!1,zs(this,y[1]||"",!0),this.o=qn(y[2]||""),this.g=qn(y[3]||"",!0),Vi(this,y[4]),this.l=qn(y[5]||"",!0),Qr(this,y[6]||"",!0),this.m=qn(y[7]||"")):(this.h=!1,this.i=new Yr(null,this.h))}St.prototype.toString=function(){var c=[],y=this.j;y&&c.push(Bs(y,vl,!0),":");var v=this.g;return(v||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Bs(y,vl,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Bs(v,v.charAt(0)=="/"?md:El,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Bs(v,qa)),c.join("")};function In(c){return new St(c)}function zs(c,y,v){c.j=v?qn(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Vi(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function Qr(c,y,v){y instanceof Yr?(c.i=y,gc(c.i,c.h)):(v||(y=Bs(y,gd)),c.i=new Yr(y,c.h))}function We(c,y,v){c.i.set(y,v)}function qs(c){return We(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function qn(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Bs(c,y,v){return typeof c=="string"?(c=encodeURI(c).replace(y,mc),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function mc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var vl=/[#\/\?@]/g,El=/[#\?:]/g,md=/[#\?]/g,gd=/[#\?@]/g,qa=/#/g;function Yr(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Bn(c){c.g||(c.g=new Map,c.h=0,c.i&&pd(c.i,function(y,v){c.add(decodeURIComponent(y.replace(/\+/g," ")),v)}))}r=Yr.prototype,r.add=function(c,y){Bn(this),this.i=null,c=Er(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(y),this.h+=1,this};function Kr(c,y){Bn(c),y=Er(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Xr(c,y){return Bn(c),y=Er(c,y),c.g.has(y)}r.forEach=function(c,y){Bn(this),this.g.forEach(function(v,b){v.forEach(function(j){c.call(y,j,b,this)},this)},this)},r.na=function(){Bn(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),v=[];for(let b=0;b<y.length;b++){const j=c[b];for(let Q=0;Q<j.length;Q++)v.push(y[b])}return v},r.V=function(c){Bn(this);let y=[];if(typeof c=="string")Xr(this,c)&&(y=y.concat(this.g.get(Er(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)y=y.concat(c[v])}return y},r.set=function(c,y){return Bn(this),this.i=null,c=Er(this,c),Xr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},r.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function Tl(c,y,v){Kr(c,y),0<v.length&&(c.i=null,c.g.set(Er(c,y),$(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var v=0;v<y.length;v++){var b=y[v];const Q=encodeURIComponent(String(b)),oe=this.V(b);for(b=0;b<oe.length;b++){var j=Q;oe[b]!==""&&(j+="="+encodeURIComponent(String(oe[b]))),c.push(j)}}return this.i=c.join("&")};function Er(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function gc(c,y){y&&!c.j&&(Bn(c),c.i=null,c.g.forEach(function(v,b){var j=b.toLowerCase();b!=j&&(Kr(this,b),Tl(this,j,v))},c)),c.j=y}function Hs(c,y){const v=new zn;if(p.Image){const b=new Image;b.onload=N(Hn,v,"TestLoadImage: loaded",!0,y,b),b.onerror=N(Hn,v,"TestLoadImage: error",!1,y,b),b.onabort=N(Hn,v,"TestLoadImage: abort",!1,y,b),b.ontimeout=N(Hn,v,"TestLoadImage: timeout",!1,y,b),p.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else y(!1)}function rr(c,y){const v=new zn,b=new AbortController,j=setTimeout(()=>{b.abort(),Hn(v,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:b.signal}).then(Q=>{clearTimeout(j),Q.ok?Hn(v,"TestPingServer: ok",!0,y):Hn(v,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(j),Hn(v,"TestPingServer: error",!1,y)})}function Hn(c,y,v,b,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),b(v)}catch{}}function Fs(){this.g=new Ps}function Tr(c,y,v){const b=v||"";try{_l(c,function(j,Q){let oe=j;g(j)&&(oe=tr(j)),y.push(b+Q+"="+encodeURIComponent(oe))})}catch(j){throw y.push(b+"type="+encodeURIComponent("_badmap")),j}}function Pi(c){this.l=c.Ub||null,this.j=c.eb||!1}U(Pi,ul),Pi.prototype.g=function(){return new Wr(this.l,this.j)},Pi.prototype.i=function(c){return function(){return c}}({});function Wr(c,y){dt.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(Wr,dt),r=Wr.prototype,r.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,wr(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||p).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sr(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,wr(this)),this.g&&(this.readyState=3,wr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?Sr(this):wr(this),this.readyState==3&&Sl(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Sr(this))},r.Qa=function(c){this.g&&(this.response=c,Sr(this))},r.ga=function(){this.g&&Sr(this)};function Sr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,wr(c)}r.setRequestHeader=function(c,y){this.u.append(c,y)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var v=y.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=y.next();return c.join(`\r
`)};function wr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function wl(c){let y="";return de(c,function(v,b){y+=b,y+=":",y+=v,y+=`\r
`}),y}function jt(c,y,v){e:{for(b in v){var b=!1;break e}b=!0}b||(v=wl(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):We(c,y,v))}function Ge(c){dt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Ge,dt);var Ba=/^https?$/i,Gs=["POST","PUT"];r=Ge.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,y,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yr.g(),this.v=this.o?cl(this.o):cl(yr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(Q){yc(this,Q);return}if(c=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var j in b)v.set(j,b[j]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const Q of b.keys())v.set(Q,b.get(Q));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(Q=>Q.toLowerCase()=="content-type"),j=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Gs,y,void 0))||b||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,oe]of v)this.g.setRequestHeader(Q,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$s(this),this.u=!0,this.g.send(c),this.u=!1}catch(Q){yc(this,Q)}};function yc(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,Ha(c),Ar(c)}function Ha(c){c.A||(c.A=!0,Ye(c,"complete"),Ye(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ye(this,"complete"),Ye(this,"abort"),Ar(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ar(this,!0)),Ge.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Fa(this):this.bb())},r.bb=function(){Fa(this)};function Fa(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Fn(c)!=4||c.Z()!=2)){if(c.u&&Fn(c)==4)on(c.Ea,0,c);else if(Ye(c,"readystatechange"),Fn(c)==4){c.h=!1;try{const oe=c.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var v;if(!(v=y)){var b;if(b=oe===0){var j=String(c.D).match(js)[1]||null;!j&&p.self&&p.self.location&&(j=p.self.location.protocol.slice(0,-1)),b=!Ba.test(j?j.toLowerCase():"")}v=b}if(v)Ye(c,"complete"),Ye(c,"success");else{c.m=6;try{var Q=2<Fn(c)?c.g.statusText:""}catch{Q=""}c.l=Q+" ["+c.Z()+"]",Ha(c)}}finally{Ar(c)}}}}function Ar(c,y){if(c.g){$s(c);const v=c.g,b=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Ye(c,"ready");try{v.onreadystatechange=b}catch{}}}function $s(c){c.I&&(p.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Fn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),Va(y)}};function _c(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function yd(c){const y={};c=(c.g&&2<=Fn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(X(c[b]))continue;var v=P(c[b]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Q=y[j]||[];y[j]=Q,Q.push(v)}C(y,function(b){return b.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(c,y,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||y}function Ga(c){this.Aa=0,this.i=[],this.j=new zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,c),this.cb=Qs("retryDelaySeedMs",1e4,c),this.Wa=Qs("forwardChannelMaxRetries",2,c),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new $r(c&&c.concurrentRequestLimit),this.Da=new Fs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ga.prototype,r.la=8,r.G=1,r.connect=function(c,y,v,b){ot(0),this.W=c,this.H=y||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.I=bc(this,null,this.W),Qa(this)};function Al(c){if(vc(c),c.G==3){var y=c.U++,v=In(c.I);if(We(v,"SID",c.K),We(v,"RID",y),We(v,"TYPE","terminate"),Ys(c,v),y=new gn(c,c.j,y),y.L=2,y.v=qs(In(v)),v=!1,p.navigator&&p.navigator.sendBeacon)try{v=p.navigator.sendBeacon(y.v.toString(),"")}catch{}!v&&p.Image&&(new Image().src=y.v,v=!0),v||(y.g=Rc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),Ls(y)}Ac(c)}function $a(c){c.g&&(Ks(c),c.g.cancel(),c.g=null)}function vc(c){$a(c),c.u&&(p.clearTimeout(c.u),c.u=null),Ya(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function Qa(c){if(!La(c.h)&&!c.s){c.s=!0;var y=c.Ga;le||O(),me||(le(),me=!0),xe.add(y,c),c.B=0}}function _d(c,y){return Ua(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Tt(A(c.Ga,c,y),Il(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const j=new gn(this,this.j,c);let Q=this.o;if(this.S&&(Q?(Q=R(Q),V(Q,this.S)):Q=this.S),this.m!==null||this.O||(j.H=Q,Q=null),this.P)e:{for(var y=0,v=0;v<this.i.length;v++){t:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(y+=b,4096<y){y=v;break e}if(y===4096||v===this.i.length-1){y=v+1;break e}}y=1e3}else y=1e3;y=Ec(this,j,y),v=In(this.I),We(v,"RID",c),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),Ys(this,v),Q&&(this.O?y="headers="+encodeURIComponent(String(wl(Q)))+"&"+y:this.m&&jt(v,this.m,Q)),ja(this.h,j),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",y),We(v,"SID","null"),j.T=!0,nr(j,v,null)):nr(j,v,y),this.G=2}}else this.G==3&&(c?bl(this,c):this.i.length==0||La(this.h)||bl(this))};function bl(c,y){var v;y?v=y.l:v=c.U++;const b=In(c.I);We(b,"SID",c.K),We(b,"RID",v),We(b,"AID",c.T),Ys(c,b),c.m&&c.o&&jt(b,c.m,c.o),v=new gn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),y&&(c.i=y.D.concat(c.i)),y=Ec(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ja(c.h,v),nr(v,b,y)}function Ys(c,y){c.H&&de(c.H,function(v,b){We(y,b,v)}),c.l&&_l({},function(v,b){We(y,b,v)})}function Ec(c,y,v){v=Math.min(c.i.length,v);var b=c.l?A(c.l.Na,c.l,c):null;e:{var j=c.i;let Q=-1;for(;;){const oe=["count="+v];Q==-1?0<v?(Q=j[0].g,oe.push("ofs="+Q)):Q=0:oe.push("ofs="+Q);let Ue=!0;for(let Ot=0;Ot<v;Ot++){let je=j[Ot].g;const zt=j[Ot].map;if(je-=Q,0>je)Q=Math.max(0,j[Ot].g-100),Ue=!1;else try{Tr(zt,oe,"req"+je+"_")}catch{b&&b(zt)}}if(Ue){b=oe.join("&");break e}}}return c=c.i.splice(0,v),y.D=c,b}function Tc(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;le||O(),me||(le(),me=!0),xe.add(y,c),c.v=0}}function Rl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Tt(A(c.Fa,c),Il(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Sc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Tt(A(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),$a(this),Sc(this))};function Ks(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function Sc(c){c.g=new gn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=In(c.qa);We(y,"RID","rpc"),We(y,"SID",c.K),We(y,"AID",c.T),We(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&We(y,"TO",c.ja),We(y,"TYPE","xmlhttp"),Ys(c,y),c.m&&c.o&&jt(y,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=qs(In(y)),v.m=null,v.P=!0,Gr(v,c)}r.Za=function(){this.C!=null&&(this.C=null,$a(this),Rl(this),ot(19))};function Ya(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function wc(c,y){var v=null;if(c.g==y){Ya(c),Ks(c),c.g=null;var b=2}else if(gl(c.h,y))v=y.D,yn(c.h,y),b=1;else return;if(c.G!=0){if(y.o)if(b==1){v=y.m?y.m.length:0,y=Date.now()-y.F;var j=c.B;b=Ci(),Ye(b,new Nt(b,v)),Qa(c)}else Tc(c);else if(j=y.s,j==3||j==0&&0<y.X||!(b==1&&_d(c,y)||b==2&&Rl(c)))switch(v&&0<v.length&&(y=c.h,y.i=y.i.concat(v)),j){case 1:Zr(c,5);break;case 4:Zr(c,10);break;case 3:Zr(c,6);break;default:Zr(c,2)}}}function Il(c,y){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*y}function Zr(c,y){if(c.j.info("Error code "+y),y==2){var v=A(c.fb,c),b=c.Xa;const j=!b;b=new St(b||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||zs(b,"https"),qs(b),j?Hs(b.toString(),v):rr(b.toString(),v)}else ot(2);c.G=0,c.l&&c.l.sa(y),Ac(c),vc(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Ac(c){if(c.G=0,c.ka=[],c.l){const y=yl(c.h);(y.length!=0||c.i.length!=0)&&(B(c.ka,y),B(c.ka,c.i),c.h.i.length=0,$(c.i),c.i.length=0),c.l.ra()}}function bc(c,y,v){var b=v instanceof St?In(v):new St(v);if(b.g!="")y&&(b.g=y+"."+b.g),Vi(b,b.s);else{var j=p.location;b=j.protocol,y=y?y+"."+j.hostname:j.hostname,j=+j.port;var Q=new St(null);b&&zs(Q,b),y&&(Q.g=y),j&&Vi(Q,j),v&&(Q.l=v),b=Q}return v=c.D,y=c.ya,v&&y&&We(b,v,y),We(b,"VER",c.la),Ys(c,b),b}function Rc(c,y,v){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new Ge(new Pi({eb:v})):new Ge(c.pa),y.Ha(c.J),y}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ic(){}r=Ic.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ka(){}Ka.prototype.g=function(c,y){return new _n(c,y)};function _n(c,y){dt.call(this),this.g=new Ga(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!X(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!X(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new br(this)}U(_n,dt),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){Al(this.g)},_n.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=tr(c),c=v);y.i.push(new pc(y.Ya++,c)),y.G==3&&Qa(y)},_n.prototype.N=function(){this.g.l=null,delete this.j,Al(this.g),delete this.g,_n.aa.N.call(this)};function xc(c){Hr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const v in y){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}U(xc,Hr);function Cc(){fl.call(this),this.status=1}U(Cc,fl);function br(c){this.g=c}U(br,Ic),br.prototype.ua=function(){Ye(this.g,"a")},br.prototype.ta=function(c){Ye(this.g,new xc(c))},br.prototype.sa=function(c){Ye(this.g,new Cc)},br.prototype.ra=function(){Ye(this.g,"b")},Ka.prototype.createWebChannel=Ka.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,OS=function(){return new Ka},NS=function(){return Ci()},DS=gr,eg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,Wh=Oi,Fr.COMPLETE="complete",CS=Fr,hl.EventType=Br,Br.OPEN="a",Br.CLOSE="b",Br.ERROR="c",Br.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Eu=hl,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,xS=Ge}).apply(typeof Vh<"u"?Vh:typeof self<"u"?self:typeof window<"u"?window:{});const H0="@firebase/firestore",F0="4.9.0";/**
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
 */const Aa=new Ng("@firebase/firestore");function Ro(){return Aa.logLevel}function fe(r,...e){if(Aa.logLevel<=Pe.DEBUG){const t=e.map(Bg);Aa.debug(`Firestore (${tl}): ${r}`,...t)}}function bi(r,...e){if(Aa.logLevel<=Pe.ERROR){const t=e.map(Bg);Aa.error(`Firestore (${tl}): ${r}`,...t)}}function Bo(r,...e){if(Aa.logLevel<=Pe.WARN){const t=e.map(Bg);Aa.warn(`Firestore (${tl}): ${r}`,...t)}}function Bg(r){if(typeof r=="string")return r;try{/**
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
 */function we(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,MS(r,s,t)}function MS(r,e,t){let s=`FIRESTORE (${tl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw bi(s),new Error(s)}function Qe(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||MS(e,o,s)}function Re(r,e){return r}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Ii{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class VS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class p2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(dn.UNAUTHENTICATED))}shutdown(){}}class m2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class g2{constructor(e){this.t=e,this.currentUser=dn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Qe(this.o===void 0,42304);let s=this.i;const o=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let u=new Ei;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ei,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const m=u;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},p=m=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ei)}},0),f()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qe(typeof s.accessToken=="string",31837,{l:s}),new VS(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new dn(e)}}class y2{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=dn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _2{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new y2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(dn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class G0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class v2{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Qe(this.o===void 0,3512);const s=u=>{u.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,fe("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new G0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new G0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function E2(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Hg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=E2(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function ke(r,e){return r<e?-1:r>e?1:0}function tg(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return xm(o)===xm(u)?ke(o,u):xm(o)?1:-1}return ke(r.length,e.length)}const T2=55296,S2=57343;function xm(r){const e=r.charCodeAt(0);return e>=T2&&e<=S2}function Ho(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */const $0="__name__";class Or{constructor(e,t,s){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&we(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Or?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Or.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return ke(e.length,t.length)}static compareSegments(e,t){const s=Or.isNumericId(e),o=Or.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Or.extractNumericId(e).compare(Or.extractNumericId(t)):tg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ms.fromString(e.substring(4,e.length-2))}}class it extends Or{construct(e,t,s){return new it(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new it(t)}static emptyPath(){return new it([])}}const w2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Or{construct(e,t,s){return new rn(e,t,s)}static isValidIdentifier(e){return w2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$0}static keyField(){return new rn([$0])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ce(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let f=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ce(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ce(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else p==="`"?(f=!f,o++):p!=="."||f?(s+=p,o++):(u(),o++)}if(u(),f)throw new ce(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rn(t)}static emptyPath(){return new rn([])}}/**
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
 */function PS(r,e,t){if(!t)throw new ce(Z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function A2(r,e,t,s){if(e===!0&&s===!0)throw new ce(Z.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Q0(r){if(!_e.isDocumentKey(r))throw new ce(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Y0(r){if(_e.isDocumentKey(r))throw new ce(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function kS(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function qf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":we(12329,{type:typeof r})}function Ln(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ce(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qf(r);throw new ce(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function xt(r,e){const t={typeString:r};return e&&(t.value=e),t}function ec(r,e){if(!kS(r))throw new ce(Z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ce(Z.INVALID_ARGUMENT,t);return!0}/**
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
 */const K0=-62135596800,X0=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*X0);return new nt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<K0)throw new ce(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/X0}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ec(e,nt._jsonSchema))return new nt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-K0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:xt("string",nt._jsonSchemaVersion),seconds:xt("number"),nanoseconds:xt("number")};/**
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
 */class be{static fromTimestamp(e){return new be(e)}static min(){return new be(new nt(0,0))}static max(){return new be(new nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Lu=-1;function b2(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=be.fromTimestamp(s===1e9?new nt(t+1,0):new nt(t,s));return new ys(o,_e.empty(),e)}function R2(r){return new ys(r.readTime,r.key,Lu)}class ys{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ys(be.min(),_e.empty(),Lu)}static max(){return new ys(be.max(),_e.empty(),Lu)}}function I2(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(r.documentKey,e.documentKey),t!==0?t:ke(r.largestBatchId,e.largestBatchId))}/**
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
 */const x2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class C2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function nl(r){if(r.code!==Z.FAILED_PRECONDITION||r.message!==x2)throw r;fe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class te{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new te((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof te?t:te.resolve(t)}catch(t){return te.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):te.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):te.reject(t)}static resolve(e){return new te((t,s)=>{t(e)})}static reject(e){return new te((t,s)=>{s(e)})}static waitFor(e){return new te((t,s)=>{let o=0,u=0,f=!1;e.forEach(p=>{++o,p.next(()=>{++u,f&&u===o&&t()},m=>s(m))}),f=!0,u===o&&t()})}static or(e){let t=te.resolve(!1);for(const s of e)t=t.next(o=>o?te.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new te((s,o)=>{const u=e.length,f=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;t(e[g]).next(_=>{f[g]=_,++p,p===u&&s(f)},_=>o(_))}})}static doWhile(e,t){return new te((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function D2(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rl(r){return r.name==="IndexedDbTransactionError"}/**
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
 */const Fg=-1;function Hf(r){return r==null}function yf(r){return r===0&&1/r==-1/0}function N2(r){return typeof r=="number"&&Number.isInteger(r)&&!yf(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const LS="";function O2(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=W0(e)),e=M2(r.get(t),e);return W0(e)}function M2(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case LS:t+="";break;default:t+=u}}return t}function W0(r){return r+LS+""}/**
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
 */function Z0(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Rs(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function US(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ft{constructor(e,t){this.comparator=e,this.root=t||nn.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nn.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ph(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ph(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ph(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ph(this.root,e,this.comparator,!0)}}class Ph{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nn{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??nn.RED,this.left=o??nn.EMPTY,this.right=u??nn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new nn(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return nn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return nn.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}nn.EMPTY=null,nn.RED=!0,nn.BLACK=!1;nn.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new nn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Lt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new J0(this.data.getIterator())}getIteratorFrom(e){return new J0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Lt(this.comparator);return t.data=e,t}}class J0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kn{constructor(e){this.fields=e,e.sort(rn.comparator)}static empty(){return new kn([])}unionWith(e){let t=new Lt(rn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new kn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ho(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class jS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class sn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new jS("Invalid base64 string: "+u):u}}(e);return new sn(t)}static fromUint8Array(e){const t=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new sn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sn.EMPTY_BYTE_STRING=new sn("");const V2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _s(r){if(Qe(!!r,39018),typeof r=="string"){let e=0;const t=V2.exec(r);if(Qe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Et(r.seconds),nanos:Et(r.nanos)}}function Et(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function vs(r){return typeof r=="string"?sn.fromBase64String(r):sn.fromUint8Array(r)}/**
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
 */const zS="server_timestamp",qS="__type__",BS="__previous_value__",HS="__local_write_time__";function Gg(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[qS])==null?void 0:s.stringValue)===zS}function Ff(r){const e=r.mapValue.fields[BS];return Gg(e)?Ff(e):e}function Uu(r){const e=_s(r.mapValue.fields[HS].timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class P2{constructor(e,t,s,o,u,f,p,m,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=_}}const _f="(default)";class ju{constructor(e,t){this.projectId=e,this.database=t||_f}static empty(){return new ju("","")}get isDefaultDatabase(){return this.database===_f}isEqual(e){return e instanceof ju&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const FS="__type__",k2="__max__",kh={mapValue:{}},GS="__vector__",vf="value";function Es(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Gg(r)?4:U2(r)?9007199254740991:L2(r)?10:11:we(28295,{value:r})}function zr(r,e){if(r===e)return!0;const t=Es(r);if(t!==Es(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Uu(r).isEqual(Uu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=_s(o.timestampValue),p=_s(u.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return vs(o.bytesValue).isEqual(vs(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return Et(o.geoPointValue.latitude)===Et(u.geoPointValue.latitude)&&Et(o.geoPointValue.longitude)===Et(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Et(o.integerValue)===Et(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=Et(o.doubleValue),p=Et(u.doubleValue);return f===p?yf(f)===yf(p):isNaN(f)&&isNaN(p)}return!1}(r,e);case 9:return Ho(r.arrayValue.values||[],e.arrayValue.values||[],zr);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},p=u.mapValue.fields||{};if(Z0(f)!==Z0(p))return!1;for(const m in f)if(f.hasOwnProperty(m)&&(p[m]===void 0||!zr(f[m],p[m])))return!1;return!0}(r,e);default:return we(52216,{left:r})}}function zu(r,e){return(r.values||[]).find(t=>zr(t,e))!==void 0}function Fo(r,e){if(r===e)return 0;const t=Es(r),s=Es(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(r.booleanValue,e.booleanValue);case 2:return function(u,f){const p=Et(u.integerValue||u.doubleValue),m=Et(f.integerValue||f.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(r,e);case 3:return eT(r.timestampValue,e.timestampValue);case 4:return eT(Uu(r),Uu(e));case 5:return tg(r.stringValue,e.stringValue);case 6:return function(u,f){const p=vs(u),m=vs(f);return p.compareTo(m)}(r.bytesValue,e.bytesValue);case 7:return function(u,f){const p=u.split("/"),m=f.split("/");for(let g=0;g<p.length&&g<m.length;g++){const _=ke(p[g],m[g]);if(_!==0)return _}return ke(p.length,m.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,f){const p=ke(Et(u.latitude),Et(f.latitude));return p!==0?p:ke(Et(u.longitude),Et(f.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return tT(r.arrayValue,e.arrayValue);case 10:return function(u,f){var A,N,U,$;const p=u.fields||{},m=f.fields||{},g=(A=p[vf])==null?void 0:A.arrayValue,_=(N=m[vf])==null?void 0:N.arrayValue,T=ke(((U=g==null?void 0:g.values)==null?void 0:U.length)||0,(($=_==null?void 0:_.values)==null?void 0:$.length)||0);return T!==0?T:tT(g,_)}(r.mapValue,e.mapValue);case 11:return function(u,f){if(u===kh.mapValue&&f===kh.mapValue)return 0;if(u===kh.mapValue)return 1;if(f===kh.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=f.fields||{},_=Object.keys(g);m.sort(),_.sort();for(let T=0;T<m.length&&T<_.length;++T){const A=tg(m[T],_[T]);if(A!==0)return A;const N=Fo(p[m[T]],g[_[T]]);if(N!==0)return N}return ke(m.length,_.length)}(r.mapValue,e.mapValue);default:throw we(23264,{he:t})}}function eT(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ke(r,e);const t=_s(r),s=_s(e),o=ke(t.seconds,s.seconds);return o!==0?o:ke(t.nanos,s.nanos)}function tT(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Fo(t[o],s[o]);if(u)return u}return ke(t.length,s.length)}function Go(r){return ng(r)}function ng(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=_s(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return vs(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return _e.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=ng(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${ng(t.fields[f])}`;return o+"}"}(r.mapValue):we(61005,{value:r})}function Zh(r){switch(Es(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ff(r);return e?16+Zh(e):16;case 5:return 2*r.stringValue.length;case 6:return vs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Zh(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Rs(s.fields,(u,f)=>{o+=u.length+Zh(f)}),o}(r.mapValue);default:throw we(13486,{value:r})}}function nT(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function rg(r){return!!r&&"integerValue"in r}function $g(r){return!!r&&"arrayValue"in r}function rT(r){return!!r&&"nullValue"in r}function iT(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Jh(r){return!!r&&"mapValue"in r}function L2(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[FS])==null?void 0:s.stringValue)===GS}function Iu(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Rs(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Iu(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Iu(r.arrayValue.values[t]);return e}return{...r}}function U2(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===k2}/**
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
 */class bn{constructor(e){this.value=e}static empty(){return new bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Jh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Iu(t)}setAll(e){let t=rn.emptyPath(),s={},o=[];e.forEach((f,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,s,o),s={},o=[],t=p.popLast()}f?s[p.lastSegment()]=Iu(f):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Jh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Jh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Rs(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new bn(Iu(this.value))}}function $S(r){const e=[];return Rs(r.fields,(t,s)=>{const o=new rn([t]);if(Jh(s)){const u=$S(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)}),new kn(e)}/**
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
 */class pn{constructor(e,t,s,o,u,f,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=p}static newInvalidDocument(e){return new pn(e,0,be.min(),be.min(),be.min(),bn.empty(),0)}static newFoundDocument(e,t,s,o){return new pn(e,1,t,be.min(),s,o,0)}static newNoDocument(e,t){return new pn(e,2,t,be.min(),be.min(),bn.empty(),0)}static newUnknownDocument(e,t){return new pn(e,3,t,be.min(),be.min(),bn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ef{constructor(e,t){this.position=e,this.inclusive=t}}function sT(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=_e.comparator(_e.fromName(f.referenceValue),t.key):s=Fo(f,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function aT(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!zr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class qu{constructor(e,t="asc"){this.field=e,this.dir=t}}function j2(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class QS{}class It extends QS{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new q2(e,t,s):t==="array-contains"?new F2(e,s):t==="in"?new G2(e,s):t==="not-in"?new $2(e,s):t==="array-contains-any"?new Q2(e,s):new It(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new B2(e,s):new H2(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Fo(t,this.value)):t!==null&&Es(this.value)===Es(t)&&this.matchesComparison(Fo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pr extends QS{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new pr(e,t)}matches(e){return YS(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function YS(r){return r.op==="and"}function KS(r){return z2(r)&&YS(r)}function z2(r){for(const e of r.filters)if(e instanceof pr)return!1;return!0}function ig(r){if(r instanceof It)return r.field.canonicalString()+r.op.toString()+Go(r.value);if(KS(r))return r.filters.map(e=>ig(e)).join(",");{const e=r.filters.map(t=>ig(t)).join(",");return`${r.op}(${e})`}}function XS(r,e){return r instanceof It?function(s,o){return o instanceof It&&s.op===o.op&&s.field.isEqual(o.field)&&zr(s.value,o.value)}(r,e):r instanceof pr?function(s,o){return o instanceof pr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,p)=>u&&XS(f,o.filters[p]),!0):!1}(r,e):void we(19439)}function WS(r){return r instanceof It?function(t){return`${t.field.canonicalString()} ${t.op} ${Go(t.value)}`}(r):r instanceof pr?function(t){return t.op.toString()+" {"+t.getFilters().map(WS).join(" ,")+"}"}(r):"Filter"}class q2 extends It{constructor(e,t,s){super(e,t,s),this.key=_e.fromName(s.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class B2 extends It{constructor(e,t){super(e,"in",t),this.keys=ZS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class H2 extends It{constructor(e,t){super(e,"not-in",t),this.keys=ZS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ZS(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>_e.fromName(s.referenceValue))}class F2 extends It{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $g(t)&&zu(t.arrayValue,this.value)}}class G2 extends It{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zu(this.value.arrayValue,t)}}class $2 extends It{constructor(e,t){super(e,"not-in",t)}matches(e){if(zu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!zu(this.value.arrayValue,t)}}class Q2 extends It{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$g(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>zu(this.value.arrayValue,s))}}/**
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
 */class Y2{constructor(e,t=null,s=[],o=[],u=null,f=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=p,this.Te=null}}function oT(r,e=null,t=[],s=[],o=null,u=null,f=null){return new Y2(r,e,t,s,o,u,f)}function Qg(r){const e=Re(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>ig(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Hf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Go(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Go(s)).join(",")),e.Te=t}return e.Te}function Yg(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!j2(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!XS(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!aT(r.startAt,e.startAt)&&aT(r.endAt,e.endAt)}function sg(r){return _e.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class il{constructor(e,t=null,s=[],o=[],u=null,f="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function K2(r,e,t,s,o,u,f,p){return new il(r,e,t,s,o,u,f,p)}function Gf(r){return new il(r)}function lT(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function JS(r){return r.collectionGroup!==null}function xu(r){const e=Re(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new Lt(rn.comparator);return f.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new qu(u,s))}),t.has(rn.keyField().canonicalString())||e.Ie.push(new qu(rn.keyField(),s))}return e.Ie}function kr(r){const e=Re(r);return e.Ee||(e.Ee=X2(e,xu(r))),e.Ee}function X2(r,e){if(r.limitType==="F")return oT(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new qu(o.field,u)});const t=r.endAt?new Ef(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Ef(r.startAt.position,r.startAt.inclusive):null;return oT(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function ag(r,e){const t=r.filters.concat([e]);return new il(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function og(r,e,t){return new il(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function $f(r,e){return Yg(kr(r),kr(e))&&r.limitType===e.limitType}function ew(r){return`${Qg(kr(r))}|lt:${r.limitType}`}function Io(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>WS(o)).join(", ")}]`),Hf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Go(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Go(o)).join(",")),`Target(${s})`}(kr(r))}; limitType=${r.limitType})`}function Qf(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):_e.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of xu(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(f,p,m){const g=sT(f,p,m);return f.inclusive?g<=0:g<0}(s.startAt,xu(s),o)||s.endAt&&!function(f,p,m){const g=sT(f,p,m);return f.inclusive?g>=0:g>0}(s.endAt,xu(s),o))}(r,e)}function W2(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function tw(r){return(e,t)=>{let s=!1;for(const o of xu(r)){const u=Z2(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function Z2(r,e,t){const s=r.field.isKeyField()?_e.comparator(e.key,t.key):function(u,f,p){const m=f.data.field(u),g=p.data.field(u);return m!==null&&g!==null?Fo(m,g):we(42886)}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return we(19790,{direction:r.dir})}}/**
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
 */class Da{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return US(this.inner)}size(){return this.innerSize}}/**
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
 */const J2=new ft(_e.comparator);function Ri(){return J2}const nw=new ft(_e.comparator);function Tu(...r){let e=nw;for(const t of r)e=e.insert(t.key,t);return e}function rw(r){let e=nw;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function da(){return Cu()}function iw(){return Cu()}function Cu(){return new Da(r=>r.toString(),(r,e)=>r.isEqual(e))}const eO=new ft(_e.comparator),tO=new Lt(_e.comparator);function Le(...r){let e=tO;for(const t of r)e=e.add(t);return e}const nO=new Lt(ke);function rO(){return nO}/**
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
 */function Kg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yf(e)?"-0":e}}function sw(r){return{integerValue:""+r}}function iO(r,e){return N2(e)?sw(e):Kg(r,e)}/**
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
 */class Yf{constructor(){this._=void 0}}function sO(r,e,t){return r instanceof Bu?function(o,u){const f={fields:{[qS]:{stringValue:zS},[HS]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Gg(u)&&(u=Ff(u)),u&&(f.fields[BS]=u),{mapValue:f}}(t,e):r instanceof Hu?ow(r,e):r instanceof Fu?lw(r,e):function(o,u){const f=aw(o,u),p=uT(f)+uT(o.Ae);return rg(f)&&rg(o.Ae)?sw(p):Kg(o.serializer,p)}(r,e)}function aO(r,e,t){return r instanceof Hu?ow(r,e):r instanceof Fu?lw(r,e):t}function aw(r,e){return r instanceof Tf?function(s){return rg(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Bu extends Yf{}class Hu extends Yf{constructor(e){super(),this.elements=e}}function ow(r,e){const t=uw(e);for(const s of r.elements)t.some(o=>zr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Fu extends Yf{constructor(e){super(),this.elements=e}}function lw(r,e){let t=uw(e);for(const s of r.elements)t=t.filter(o=>!zr(o,s));return{arrayValue:{values:t}}}class Tf extends Yf{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function uT(r){return Et(r.integerValue||r.doubleValue)}function uw(r){return $g(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class oO{constructor(e,t){this.field=e,this.transform=t}}function lO(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Hu&&o instanceof Hu||s instanceof Fu&&o instanceof Fu?Ho(s.elements,o.elements,zr):s instanceof Tf&&o instanceof Tf?zr(s.Ae,o.Ae):s instanceof Bu&&o instanceof Bu}(r.transform,e.transform)}class uO{constructor(e,t){this.version=e,this.transformResults=t}}class cr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new cr}static exists(e){return new cr(void 0,e)}static updateTime(e){return new cr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ef(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Kf{}function cw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new fw(r.key,cr.none()):new tc(r.key,r.data,cr.none());{const t=r.data,s=bn.empty();let o=new Lt(rn.comparator);for(let u of e.fields)if(!o.has(u)){let f=t.field(u);f===null&&u.length>1&&(u=u.popLast(),f=t.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Is(r.key,s,new kn(o.toArray()),cr.none())}}function cO(r,e,t){r instanceof tc?function(o,u,f){const p=o.value.clone(),m=hT(o.fieldTransforms,u,f.transformResults);p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,e,t):r instanceof Is?function(o,u,f){if(!ef(o.precondition,u))return void u.convertToUnknownDocument(f.version);const p=hT(o.fieldTransforms,u,f.transformResults),m=u.data;m.setAll(hw(o)),m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,e,t):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,t)}function Du(r,e,t,s){return r instanceof tc?function(u,f,p,m){if(!ef(u.precondition,f))return p;const g=u.value.clone(),_=fT(u.fieldTransforms,m,f);return g.setAll(_),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null}(r,e,t,s):r instanceof Is?function(u,f,p,m){if(!ef(u.precondition,f))return p;const g=fT(u.fieldTransforms,m,f),_=f.data;return _.setAll(hw(u)),_.setAll(g),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(T=>T.field))}(r,e,t,s):function(u,f,p){return ef(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p}(r,e,t)}function hO(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=aw(s.transform,o||null);u!=null&&(t===null&&(t=bn.empty()),t.set(s.field,u))}return t||null}function cT(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ho(s,o,(u,f)=>lO(u,f))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class tc extends Kf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Is extends Kf{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function hw(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function hT(r,e,t){const s=new Map;Qe(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const u=r[o],f=u.transform,p=e.data.field(u.field);s.set(u.field,aO(f,p,t[o]))}return s}function fT(r,e,t){const s=new Map;for(const o of r){const u=o.transform,f=t.data.field(o.field);s.set(o.field,sO(u,f,e))}return s}class fw extends Kf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fO extends Kf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dO{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&cO(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Du(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Du(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=iw();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let p=this.applyToLocalView(f,u.mutatedFields);p=t.has(o.key)?null:p;const m=cw(f,p);m!==null&&s.set(o.key,m),f.isValidDocument()||f.convertToNoDocument(be.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&Ho(this.mutations,e.mutations,(t,s)=>cT(t,s))&&Ho(this.baseMutations,e.baseMutations,(t,s)=>cT(t,s))}}class Xg{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Qe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return eO}();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Xg(e,t,s,o)}}/**
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
 */class pO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var bt,qe;function gO(r){switch(r){case Z.OK:return we(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return we(15467,{code:r})}}function dw(r){if(r===void 0)return bi("GRPC error has no .code"),Z.UNKNOWN;switch(r){case bt.OK:return Z.OK;case bt.CANCELLED:return Z.CANCELLED;case bt.UNKNOWN:return Z.UNKNOWN;case bt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case bt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case bt.INTERNAL:return Z.INTERNAL;case bt.UNAVAILABLE:return Z.UNAVAILABLE;case bt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case bt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case bt.NOT_FOUND:return Z.NOT_FOUND;case bt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case bt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case bt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case bt.ABORTED:return Z.ABORTED;case bt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case bt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case bt.DATA_LOSS:return Z.DATA_LOSS;default:return we(39323,{code:r})}}(qe=bt||(bt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yO(){return new TextEncoder}/**
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
 */const _O=new ms([4294967295,4294967295],0);function dT(r){const e=yO().encode(r),t=new IS;return t.update(e),new Uint8Array(t.digest())}function pT(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ms([t,s],0),new ms([o,u],0)]}class Wg{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Su(`Invalid padding: ${t}`);if(s<0)throw new Su(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Su(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Su(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ms.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(ms.fromNumber(s)));return o.compare(_O)===1&&(o=new ms([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=dT(e),[s,o]=pT(t);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new Wg(u,o,t);return s.forEach(p=>f.insert(p)),f}insert(e){if(this.ge===0)return;const t=dT(e),[s,o]=pT(t);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Su extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xf{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,nc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Xf(be.min(),o,new ft(ke),Ri(),Le())}}class nc{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new nc(s,t,Le(),Le(),Le())}}/**
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
 */class tf{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class pw{constructor(e,t){this.targetId=e,this.Ce=t}}class mw{constructor(e,t,s=sn.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class mT{constructor(){this.ve=0,this.Fe=gT(),this.Me=sn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),t=Le(),s=Le();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:we(38017,{changeType:u})}}),new nc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=gT()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Qe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class vO{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ri(),this.Je=Lh(),this.He=Lh(),this.Ye=new ft(ke)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:we(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,o)=>{this.rt(o)&&t(o)})}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(sg(u))if(s===0){const f=new _e(u.path);this.et(t,f,pn.newNoDocument(f,be.min()))}else Qe(s===1,20013,{expectedCount:s});else{const f=this._t(t);if(f!==s){const p=this.ut(e),m=p?this.ct(p,e,f):1;if(m!==0){this.it(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let f,p;try{f=vs(s).toUint8Array()}catch(m){if(m instanceof jS)return Bo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new Wg(f,o,u)}catch(m){return Bo(m instanceof Su?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const f=this.Ge.ht(),p=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.et(t,u,null),o++)}),o}Tt(e){const t=new Map;this.ze.forEach((u,f)=>{const p=this.ot(f);if(p){if(u.current&&sg(p.target)){const m=new _e(p.target.path);this.It(m).has(f)||this.Et(f,m)||this.et(f,m,pn.newNoDocument(m,e))}u.Be&&(t.set(f,u.ke()),u.qe())}});let s=Le();this.He.forEach((u,f)=>{let p=!0;f.forEachWhile(m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.je.forEach((u,f)=>f.setReadTime(e));const o=new Xf(e,t,this.Ye,this.je,s);return this.je=Ri(),this.Je=Lh(),this.He=Lh(),this.Ye=new ft(ke),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new mT,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Lt(ke),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Lt(ke),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new mT),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Lh(){return new ft(_e.comparator)}function gT(){return new ft(_e.comparator)}const EO={asc:"ASCENDING",desc:"DESCENDING"},TO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SO={and:"AND",or:"OR"};class wO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lg(r,e){return r.useProto3Json||Hf(e)?e:{value:e}}function Sf(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function AO(r,e){return Sf(r,e.toTimestamp())}function Lr(r){return Qe(!!r,49232),be.fromTimestamp(function(t){const s=_s(t);return new nt(s.seconds,s.nanos)}(r))}function Zg(r,e){return ug(r,e).canonicalString()}function ug(r,e){const t=function(o){return new it(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function yw(r){const e=it.fromString(r);return Qe(Sw(e),10190,{key:e.toString()}),e}function cg(r,e){return Zg(r.databaseId,e.path)}function Cm(r,e){const t=yw(e);if(t.get(1)!==r.databaseId.projectId)throw new ce(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ce(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new _e(vw(t))}function _w(r,e){return Zg(r.databaseId,e)}function bO(r){const e=yw(r);return e.length===4?it.emptyPath():vw(e)}function hg(r){return new it(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function vw(r){return Qe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function yT(r,e,t){return{name:cg(r,e),fields:t.value.mapValue.fields}}function RO(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:we(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,_){return g.useProto3Json?(Qe(_===void 0||typeof _=="string",58123),sn.fromBase64String(_||"")):(Qe(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),sn.fromUint8Array(_||new Uint8Array))}(r,e.targetChange.resumeToken),f=e.targetChange.cause,p=f&&function(g){const _=g.code===void 0?Z.UNKNOWN:dw(g.code);return new ce(_,g.message||"")}(f);t=new mw(s,o,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Cm(r,s.document.name),u=Lr(s.document.updateTime),f=s.document.createTime?Lr(s.document.createTime):be.min(),p=new bn({mapValue:{fields:s.document.fields}}),m=pn.newFoundDocument(o,u,f,p),g=s.targetIds||[],_=s.removedTargetIds||[];t=new tf(g,_,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Cm(r,s.document),u=s.readTime?Lr(s.readTime):be.min(),f=pn.newNoDocument(o,u),p=s.removedTargetIds||[];t=new tf([],p,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Cm(r,s.document),u=s.removedTargetIds||[];t=new tf([],u,o,null)}else{if(!("filter"in e))return we(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new mO(o,u),p=s.targetId;t=new pw(p,f)}}return t}function IO(r,e){let t;if(e instanceof tc)t={update:yT(r,e.key,e.value)};else if(e instanceof fw)t={delete:cg(r,e.key)};else if(e instanceof Is)t={update:yT(r,e.key,e.data),updateMask:kO(e.fieldMask)};else{if(!(e instanceof fO))return we(16599,{Vt:e.type});t={verify:cg(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,f){const p=f.transform;if(p instanceof Bu)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Hu)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Fu)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Tf)return{fieldPath:f.field.canonicalString(),increment:p.Ae};throw we(20930,{transform:f.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:AO(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:we(27497)}(r,e.precondition)),t}function xO(r,e){return r&&r.length>0?(Qe(e!==void 0,14353),r.map(t=>function(o,u){let f=o.updateTime?Lr(o.updateTime):Lr(u);return f.isEqual(be.min())&&(f=Lr(u)),new uO(f,o.transformResults||[])}(t,e))):[]}function CO(r,e){return{documents:[_w(r,e.path)]}}function DO(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=_w(r,o);const u=function(g){if(g.length!==0)return Tw(pr.create(g,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const f=function(g){if(g.length!==0)return g.map(_=>function(A){return{field:xo(A.field),direction:MO(A.dir)}}(_))}(e.orderBy);f&&(t.structuredQuery.orderBy=f);const p=lg(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:t,parent:o}}function NO(r){let e=bO(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Qe(s===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let u=[];t.where&&(u=function(T){const A=Ew(T);return A instanceof pr&&KS(A)?A.getFilters():[A]}(t.where));let f=[];t.orderBy&&(f=function(T){return T.map(A=>function(U){return new qu(Co(U.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(A))}(t.orderBy));let p=null;t.limit&&(p=function(T){let A;return A=typeof T=="object"?T.value:T,Hf(A)?null:A}(t.limit));let m=null;t.startAt&&(m=function(T){const A=!!T.before,N=T.values||[];return new Ef(N,A)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const A=!T.before,N=T.values||[];return new Ef(N,A)}(t.endAt)),K2(e,o,f,u,p,"F",m,g)}function OO(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ew(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Co(t.unaryFilter.field);return It.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Co(t.unaryFilter.field);return It.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Co(t.unaryFilter.field);return It.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Co(t.unaryFilter.field);return It.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}}(r):r.fieldFilter!==void 0?function(t){return It.create(Co(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return pr.create(t.compositeFilter.filters.map(s=>Ew(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}}(t.compositeFilter.op))}(r):we(30097,{filter:r})}function MO(r){return EO[r]}function VO(r){return TO[r]}function PO(r){return SO[r]}function xo(r){return{fieldPath:r.canonicalString()}}function Co(r){return rn.fromServerFormat(r.fieldPath)}function Tw(r){return r instanceof It?function(t){if(t.op==="=="){if(iT(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NAN"}};if(rT(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(iT(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NAN"}};if(rT(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xo(t.field),op:VO(t.op),value:t.value}}}(r):r instanceof pr?function(t){const s=t.getFilters().map(o=>Tw(o));return s.length===1?s[0]:{compositeFilter:{op:PO(t.op),filters:s}}}(r):we(54877,{filter:r})}function kO(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Sw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class cs{constructor(e,t,s,o,u=be.min(),f=be.min(),p=sn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class LO{constructor(e){this.yt=e}}function UO(r){const e=NO({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?og(e,e.limit,"L"):e}/**
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
 */class jO{constructor(){this.Cn=new zO}addToCollectionParentIndex(e,t){return this.Cn.add(t),te.resolve()}getCollectionParents(e,t){return te.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return te.resolve()}deleteFieldIndex(e,t){return te.resolve()}deleteAllFieldIndexes(e){return te.resolve()}createTargetIndexes(e,t){return te.resolve()}getDocumentsMatchingTarget(e,t){return te.resolve(null)}getIndexType(e,t){return te.resolve(0)}getFieldIndexes(e,t){return te.resolve([])}getNextCollectionGroupToUpdate(e){return te.resolve(null)}getMinOffset(e,t){return te.resolve(ys.min())}getMinOffsetFromCollectionGroup(e,t){return te.resolve(ys.min())}updateCollectionGroup(e,t,s){return te.resolve()}updateIndexEntries(e,t){return te.resolve()}}class zO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Lt(it.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Lt(it.comparator)).toArray()}}/**
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
 */const _T={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ww=41943040;class An{static withCacheSize(e){return new An(e,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */An.DEFAULT_COLLECTION_PERCENTILE=10,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,An.DEFAULT=new An(ww,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),An.DISABLED=new An(-1,0,0);/**
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
 */class $o{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new $o(0)}static cr(){return new $o(-1)}}/**
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
 */const vT="LruGarbageCollector",qO=1048576;function ET([r,e],[t,s]){const o=ke(r,t);return o===0?ke(e,s):o}class BO{constructor(e){this.Ir=e,this.buffer=new Lt(ET),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ET(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class HO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){fe(vT,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rl(t)?fe(vT,"Ignoring IndexedDB error during garbage collection: ",t):await nl(t)}await this.Vr(3e5)})}}class FO{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return te.resolve(Bf.ce);const s=new BO(t);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),te.resolve(_T)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_T):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,f,p,m,g;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,f=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(s=T,p=Date.now(),this.removeTargets(e,s,t))).next(T=>(u=T,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(g=Date.now(),Ro()<=Pe.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-_}ms
	Determined least recently used ${o} in `+(p-f)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-_}ms`),te.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:T})))}}function GO(r,e){return new FO(r,e)}/**
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
 */class $O{constructor(){this.changes=new Da(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?te.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class QO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class YO{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Du(s.mutation,o,kn.empty(),nt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const o=da();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let f=Tu();return u.forEach((p,m)=>{f=f.insert(p,m.overlayedDocument)}),f}))}getOverlayedDocuments(e,t){const s=da();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,p)=>{t.set(f,p)})})}computeViews(e,t,s,o){let u=Ri();const f=Cu(),p=function(){return Cu()}();return t.forEach((m,g)=>{const _=s.get(g.key);o.has(g.key)&&(_===void 0||_.mutation instanceof Is)?u=u.insert(g.key,g):_!==void 0?(f.set(g.key,_.mutation.getFieldMask()),Du(_.mutation,g,_.mutation.getFieldMask(),nt.now())):f.set(g.key,kn.empty())}),this.recalculateAndSaveOverlays(e,u).next(m=>(m.forEach((g,_)=>f.set(g,_)),t.forEach((g,_)=>p.set(g,new QO(_,f.get(g)??null))),p))}recalculateAndSaveOverlays(e,t){const s=Cu();let o=new ft((f,p)=>f-p),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(f=>{for(const p of f)p.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let _=s.get(m)||kn.empty();_=p.applyToLocalView(g,_),s.set(m,_);const T=(o.get(p.batchId)||Le()).add(m);o=o.insert(p.batchId,T)})}).next(()=>{const f=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,_=m.value,T=iw();_.forEach(A=>{if(!u.has(A)){const N=cw(t.get(A),s.get(A));N!==null&&T.set(A,N),u=u.add(A)}}),f.push(this.documentOverlayCache.saveOverlays(e,g,T))}return te.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(f){return _e.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):JS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):te.resolve(da());let p=Lu,m=u;return f.next(g=>te.forEach(g,(_,T)=>(p<T.largestBatchId&&(p=T.largestBatchId),u.get(_)?te.resolve():this.remoteDocumentCache.getEntry(e,_).next(A=>{m=m.insert(_,A)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,m,g,Le())).next(_=>({batchId:p,changes:rw(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(s=>{let o=Tu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let f=Tu();return this.indexManager.getCollectionParents(e,u).next(p=>te.forEach(p,m=>{const g=function(T,A){return new il(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(_=>{_.forEach((T,A)=>{f=f.insert(T,A)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(f=>{u.forEach((m,g)=>{const _=g.getKey();f.get(_)===null&&(f=f.insert(_,pn.newInvalidDocument(_)))});let p=Tu();return f.forEach((m,g)=>{const _=u.get(m);_!==void 0&&Du(_.mutation,g,kn.empty(),nt.now()),Qf(t,g)&&(p=p.insert(m,g))}),p})}}/**
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
 */class KO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return te.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Lr(o.createTime)}}(t)),te.resolve()}getNamedQuery(e,t){return te.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(o){return{name:o.name,query:UO(o.bundledQuery),readTime:Lr(o.readTime)}}(t)),te.resolve()}}/**
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
 */class XO{constructor(){this.overlays=new ft(_e.comparator),this.qr=new Map}getOverlay(e,t){return te.resolve(this.overlays.get(t))}getOverlays(e,t){const s=da();return te.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),te.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),te.resolve()}getOverlaysForCollection(e,t,s){const o=da(),u=t.length+1,f=new _e(t.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>s&&o.set(m.getKey(),m)}return te.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new ft((g,_)=>g-_);const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let _=u.get(g.largestBatchId);_===null&&(_=da(),u=u.insert(g.largestBatchId,_)),_.set(g.getKey(),g)}}const p=da(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,_)=>p.set(g,_)),!(p.size()>=o)););return te.resolve(p)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new pO(t,s));let u=this.qr.get(t);u===void 0&&(u=Le(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class WO{constructor(){this.sessionToken=sn.EMPTY_BYTE_STRING}getSessionToken(e){return te.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,te.resolve()}}/**
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
 */class Jg{constructor(){this.Qr=new Lt(Ft.$r),this.Ur=new Lt(Ft.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Ft(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new Ft(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new _e(new it([])),s=new Ft(t,e),o=new Ft(t,e+1),u=[];return this.Ur.forEachInRange([s,o],f=>{this.Gr(f),u.push(f.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new _e(new it([])),s=new Ft(t,e),o=new Ft(t,e+1);let u=Le();return this.Ur.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const t=new Ft(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ft{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return _e.comparator(e.key,t.key)||ke(e.Yr,t.Yr)}static Kr(e,t){return ke(e.Yr,t.Yr)||_e.comparator(e.key,t.key)}}/**
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
 */class ZO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Lt(Ft.$r)}checkEmpty(e){return te.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new dO(u,t,s,o);this.mutationQueue.push(f);for(const p of o)this.Zr=this.Zr.add(new Ft(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return te.resolve(f)}lookupMutationBatch(e,t){return te.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return te.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return te.resolve(this.mutationQueue.length===0?Fg:this.tr-1)}getAllMutationBatches(e){return te.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ft(t,0),o=new Ft(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],f=>{const p=this.Xr(f.Yr);u.push(p)}),te.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Lt(ke);return t.forEach(o=>{const u=new Ft(o,0),f=new Ft(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],p=>{s=s.add(p.Yr)})}),te.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;_e.isDocumentKey(u)||(u=u.child(""));const f=new Ft(new _e(u),0);let p=new Lt(ke);return this.Zr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Yr)),!0)},f),te.resolve(this.ti(p))}ti(e){const t=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Qe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return te.forEach(t.mutations,o=>{const u=new Ft(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new Ft(t,0),o=this.Zr.firstAfterOrEqual(s);return te.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,te.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class JO{constructor(e){this.ri=e,this.docs=function(){return new ft(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return te.resolve(s?s.document.mutableCopy():pn.newInvalidDocument(t))}getEntries(e,t){let s=Ri();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():pn.newInvalidDocument(o))}),te.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ri();const f=t.path,p=new _e(f.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:_}}=m.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||I2(R2(_),s)<=0||(o.has(_.key)||Qf(t,_))&&(u=u.insert(_.key,_.mutableCopy()))}return te.resolve(u)}getAllFromCollectionGroup(e,t,s,o){we(9500)}ii(e,t){return te.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new e4(this)}getSize(e){return te.resolve(this.size)}}class e4 extends $O{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),te.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class t4{constructor(e){this.persistence=e,this.si=new Da(t=>Qg(t),Yg),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.oi=0,this._i=new Jg,this.targetCount=0,this.ai=$o.ur()}forEachTarget(e,t){return this.si.forEach((s,o)=>t(o)),te.resolve()}getLastRemoteSnapshotVersion(e){return te.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return te.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),te.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),te.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new $o(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,te.resolve()}updateTargetData(e,t){return this.Pr(t),te.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,te.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach((f,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),te.waitFor(u).next(()=>o)}getTargetCount(e){return te.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return te.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),te.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),te.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),te.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return te.resolve(s)}containsKey(e,t){return te.resolve(this._i.containsKey(t))}}/**
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
 */class Aw{constructor(e,t){this.ui={},this.overlays={},this.ci=new Bf(0),this.li=!1,this.li=!0,this.hi=new WO,this.referenceDelegate=e(this),this.Pi=new t4(this),this.indexManager=new jO,this.remoteDocumentCache=function(o){return new JO(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new LO(t),this.Ii=new KO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new XO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new ZO(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){fe("MemoryPersistence","Starting transaction:",e);const o=new n4(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,t){return te.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class n4 extends C2{constructor(e){super(),this.currentSequenceNumber=e}}class ey{constructor(e){this.persistence=e,this.Ri=new Jg,this.Vi=null}static mi(e){return new ey(e)}get fi(){if(this.Vi)return this.Vi;throw we(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),te.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),te.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),te.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return te.forEach(this.fi,s=>{const o=_e.fromPath(s);return this.gi(e,o).next(u=>{u||t.removeEntry(o,be.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return te.or([()=>te.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class wf{constructor(e,t){this.persistence=e,this.pi=new Da(s=>O2(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=GO(this,t)}static mi(e,t){return new wf(e,t)}Ei(){}di(e){return te.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return te.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?te.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,f=>this.br(e,f,t).next(p=>{p||(s++,u.removeEntry(f,be.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),te.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),te.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),te.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),te.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zh(e.data.value)),t}br(e,t,s){return te.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return te.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class r4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class i4{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Ox()?8:D2(mn())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ws(e,t,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new r4;return this.Ss(e,t,f).next(p=>{if(u.result=p,this.Vs)return this.bs(e,t,f,p.size)})}).next(()=>u.result)}bs(e,t,s,o){return s.documentReadCount<this.fs?(Ro()<=Pe.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",Io(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),te.resolve()):(Ro()<=Pe.DEBUG&&fe("QueryEngine","Query:",Io(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Ro()<=Pe.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",Io(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kr(t))):te.resolve())}ys(e,t){if(lT(t))return te.resolve(null);let s=kr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=og(t,null,"F"),s=kr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=Le(...u);return this.ps.getDocuments(e,f).next(p=>this.indexManager.getMinOffset(e,s).next(m=>{const g=this.Ds(t,p);return this.Cs(t,g,f,m.readTime)?this.ys(e,og(t,null,"F")):this.vs(e,g,t,m)}))})))}ws(e,t,s,o){return lT(t)||o.isEqual(be.min())?te.resolve(null):this.ps.getDocuments(e,s).next(u=>{const f=this.Ds(t,u);return this.Cs(t,f,s,o)?te.resolve(null):(Ro()<=Pe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Io(t)),this.vs(e,f,t,b2(o,Lu)).next(p=>p))})}Ds(e,t){let s=new Lt(tw(e));return t.forEach((o,u)=>{Qf(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return Ro()<=Pe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Io(t)),this.ps.getDocumentsMatchingQuery(e,t,ys.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
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
 */const ny="LocalStore",s4=3e8;class a4{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new ft(ke),this.xs=new Da(u=>Qg(u),Yg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function o4(r,e,t,s){return new a4(r,e,t,s)}async function bw(r,e){const t=Re(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],p=[];let m=Le();for(const g of o){f.push(g.batchId);for(const _ of g.mutations)m=m.add(_.key)}for(const g of u){p.push(g.batchId);for(const _ of g.mutations)m=m.add(_.key)}return t.localDocuments.getDocuments(s,m).next(g=>({Ls:g,removedBatchIds:f,addedBatchIds:p}))})})}function l4(r,e){const t=Re(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return function(p,m,g,_){const T=g.batch,A=T.keys();let N=te.resolve();return A.forEach(U=>{N=N.next(()=>_.getEntry(m,U)).next($=>{const B=g.docVersions.get(U);Qe(B!==null,48541),$.version.compareTo(B)<0&&(T.applyToRemoteDocument($,g),$.isValidDocument()&&($.setReadTime(g.commitVersion),_.addEntry($)))})}),N.next(()=>p.mutationQueue.removeMutationBatch(m,T))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let m=Le();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Rw(r){const e=Re(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function u4(r,e){const t=Re(r),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const p=[];e.targetChanges.forEach((_,T)=>{const A=o.get(T);if(!A)return;p.push(t.Pi.removeMatchingKeys(u,_.removedDocuments,T).next(()=>t.Pi.addMatchingKeys(u,_.addedDocuments,T)));let N=A.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(T)!==null?N=N.withResumeToken(sn.EMPTY_BYTE_STRING,be.min()).withLastLimboFreeSnapshotVersion(be.min()):_.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(_.resumeToken,s)),o=o.insert(T,N),function($,B,J){return $.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=s4?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(A,N,_)&&p.push(t.Pi.updateTargetData(u,N))});let m=Ri(),g=Le();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,_))}),p.push(c4(u,f,e.documentUpdates).next(_=>{m=_.ks,g=_.qs})),!s.isEqual(be.min())){const _=t.Pi.getLastRemoteSnapshotVersion(u).next(T=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(_)}return te.waitFor(p).next(()=>f.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,m,g)).next(()=>m)}).then(u=>(t.Ms=o,u))}function c4(r,e,t){let s=Le(),o=Le();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let f=Ri();return t.forEach((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(be.min())?(e.removeEntry(p,m.readTime),f=f.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),f=f.insert(p,m)):fe(ny,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)}),{ks:f,qs:o}})}function h4(r,e){const t=Re(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Fg),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function f4(r,e){const t=Re(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Pi.getTargetData(s,e).next(u=>u?(o=u,te.resolve(o)):t.Pi.allocateTargetId(s).next(f=>(o=new cs(e,f,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function fg(r,e,t){const s=Re(r),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!rl(f))throw f;fe(ny,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function TT(r,e,t){const s=Re(r);let o=be.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",f=>function(m,g,_){const T=Re(m),A=T.xs.get(_);return A!==void 0?te.resolve(T.Ms.get(A)):T.Pi.getTargetData(g,_)}(s,f,kr(e)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,p.targetId).next(m=>{u=m})}).next(()=>s.Fs.getDocumentsMatchingQuery(f,e,t?o:be.min(),t?u:Le())).next(p=>(d4(s,W2(e),p),{documents:p,Qs:u})))}function d4(r,e,t){let s=r.Os.get(e)||be.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Os.set(e,s)}class ST{constructor(){this.activeTargetIds=rO()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class p4{constructor(){this.Mo=new ST,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ST,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class m4{Oo(e){}shutdown(){}}/**
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
 */const wT="ConnectivityMonitor";class AT{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){fe(wT,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){fe(wT,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Dm="RestConnection",g4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class y4{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===_f?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const f=dg(),p=this.zo(e,t.toUriEncodedString());fe(Dm,`Sending RPC '${e}' ${f}:`,p,s);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:g}=new URL(p),_=Zo(g);return this.Jo(e,p,m,s,_).then(T=>(fe(Dm,`Received RPC '${e}' ${f}: `,T),T),T=>{throw Bo(Dm,`RPC '${e}' ${f} failed with error: `,T,"url: ",p,"request:",s),T})}Ho(e,t,s,o,u,f){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,t){const s=g4[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class _4{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const cn="WebChannelConnection";class v4 extends y4{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const f=dg();return new Promise((p,m)=>{const g=new xS;g.setWithCredentials(!0),g.listenOnce(CS.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Wh.NO_ERROR:const T=g.getResponseJson();fe(cn,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(T)),p(T);break;case Wh.TIMEOUT:fe(cn,`RPC '${e}' ${f} timed out`),m(new ce(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Wh.HTTP_ERROR:const A=g.getStatus();if(fe(cn,`RPC '${e}' ${f} failed with status:`,A,"response text:",g.getResponseText()),A>0){let N=g.getResponseJson();Array.isArray(N)&&(N=N[0]);const U=N==null?void 0:N.error;if(U&&U.status&&U.message){const $=function(J){const X=J.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(X)>=0?X:Z.UNKNOWN}(U.status);m(new ce($,U.message))}else m(new ce(Z.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ce(Z.UNAVAILABLE,"Connection failed."));break;default:we(9055,{l_:e,streamId:f,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{fe(cn,`RPC '${e}' ${f} completed.`)}});const _=JSON.stringify(o);fe(cn,`RPC '${e}' ${f} sending request:`,o),g.send(t,"POST",_,s,15)})}T_(e,t,s){const o=dg(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=OS(),p=NS(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=u.join("");fe(cn,`Creating RPC '${e}' stream ${o}: ${_}`,m);const T=f.createWebChannel(_,m);this.I_(T);let A=!1,N=!1;const U=new _4({Yo:B=>{N?fe(cn,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(A||(fe(cn,`Opening RPC '${e}' stream ${o} transport.`),T.open(),A=!0),fe(cn,`RPC '${e}' stream ${o} sending:`,B),T.send(B))},Zo:()=>T.close()}),$=(B,J,X)=>{B.listen(J,re=>{try{X(re)}catch(he){setTimeout(()=>{throw he},0)}})};return $(T,Eu.EventType.OPEN,()=>{N||(fe(cn,`RPC '${e}' stream ${o} transport opened.`),U.o_())}),$(T,Eu.EventType.CLOSE,()=>{N||(N=!0,fe(cn,`RPC '${e}' stream ${o} transport closed`),U.a_(),this.E_(T))}),$(T,Eu.EventType.ERROR,B=>{N||(N=!0,Bo(cn,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),U.a_(new ce(Z.UNAVAILABLE,"The operation could not be completed")))}),$(T,Eu.EventType.MESSAGE,B=>{var J;if(!N){const X=B.data[0];Qe(!!X,16349);const re=X,he=(re==null?void 0:re.error)||((J=re[0])==null?void 0:J.error);if(he){fe(cn,`RPC '${e}' stream ${o} received error:`,he);const ue=he.status;let de=function(I){const V=bt[I];if(V!==void 0)return dw(V)}(ue),C=he.message;de===void 0&&(de=Z.INTERNAL,C="Unknown error status: "+ue+" with message "+he.message),N=!0,U.a_(new ce(de,C)),T.close()}else fe(cn,`RPC '${e}' stream ${o} received:`,X),U.u_(X)}}),$(p,DS.STAT_EVENT,B=>{B.stat===eg.PROXY?fe(cn,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===eg.NOPROXY&&fe(cn,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{U.__()},0),U}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Nm(){return typeof document<"u"?document:null}/**
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
 */function Wf(r){return new wO(r,!0)}/**
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
 */class Iw{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const bT="PersistentStream";class xw{constructor(e,t,s,o,u,f,p,m){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Iw(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(bi(t.toString()),bi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===t&&this.G_(s,o)},s=>{e(()=>{const o=new ce(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return fe(bT,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(fe(bT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E4 extends xw{constructor(e,t,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,f),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=RO(this.serializer,e),s=function(u){if(!("targetChange"in u))return be.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?be.min():f.readTime?Lr(f.readTime):be.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=hg(this.serializer),t.addTarget=function(u,f){let p;const m=f.target;if(p=sg(m)?{documents:CO(u,m)}:{query:DO(u,m).ft},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=gw(u,f.resumeToken);const g=lg(u,f.expectedCount);g!==null&&(p.expectedCount=g)}else if(f.snapshotVersion.compareTo(be.min())>0){p.readTime=Sf(u,f.snapshotVersion.toTimestamp());const g=lg(u,f.expectedCount);g!==null&&(p.expectedCount=g)}return p}(this.serializer,e);const s=OO(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=hg(this.serializer),t.removeTarget=e,this.q_(t)}}class T4 extends xw{constructor(e,t,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=xO(e.writeResults,e.commitTime),s=Lr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=hg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>IO(this.serializer,s))};this.q_(t)}}/**
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
 */class S4{}class w4 extends S4{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ce(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Go(e,ug(t,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ce(Z.UNKNOWN,u.toString())})}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,p])=>this.connection.Ho(e,ug(t,s),o,f,p,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ce(Z.UNKNOWN,f.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class A4{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(bi(t),this.aa=!1):fe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ba="RemoteStore";class b4{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(f=>{s.enqueueAndForget(async()=>{Na(this)&&(fe(ba,"Restarting streams for network reachability change."),await async function(m){const g=Re(m);g.Ea.add(4),await rc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Zf(g)}(this))})}),this.Ra=new A4(s,o)}}async function Zf(r){if(Na(r))for(const e of r.da)await e(!0)}async function rc(r){for(const e of r.da)await e(!1)}function Cw(r,e){const t=Re(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ay(t)?sy(t):sl(t).O_()&&iy(t,e))}function ry(r,e){const t=Re(r),s=sl(t);t.Ia.delete(e),s.O_()&&Dw(t,e),t.Ia.size===0&&(s.O_()?s.L_():Na(t)&&t.Ra.set("Unknown"))}function iy(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(be.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}sl(r).Y_(e)}function Dw(r,e){r.Va.Ue(e),sl(r).Z_(e)}function sy(r){r.Va=new vO({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),sl(r).start(),r.Ra.ua()}function ay(r){return Na(r)&&!sl(r).x_()&&r.Ia.size>0}function Na(r){return Re(r).Ea.size===0}function Nw(r){r.Va=void 0}async function R4(r){r.Ra.set("Online")}async function I4(r){r.Ia.forEach((e,t)=>{iy(r,e)})}async function x4(r,e){Nw(r),ay(r)?(r.Ra.ha(e),sy(r)):r.Ra.set("Unknown")}async function C4(r,e,t){if(r.Ra.set("Online"),e instanceof mw&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,f),o.Ia.delete(p),o.Va.removeTarget(p))}(r,e)}catch(s){fe(ba,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Af(r,s)}else if(e instanceof tf?r.Va.Ze(e):e instanceof pw?r.Va.st(e):r.Va.tt(e),!t.isEqual(be.min()))try{const s=await Rw(r.localStore);t.compareTo(s)>=0&&await function(u,f){const p=u.Va.Tt(f);return p.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const _=u.Ia.get(g);_&&u.Ia.set(g,_.withResumeToken(m.resumeToken,f))}}),p.targetMismatches.forEach((m,g)=>{const _=u.Ia.get(m);if(!_)return;u.Ia.set(m,_.withResumeToken(sn.EMPTY_BYTE_STRING,_.snapshotVersion)),Dw(u,m);const T=new cs(_.target,m,g,_.sequenceNumber);iy(u,T)}),u.remoteSyncer.applyRemoteEvent(p)}(r,t)}catch(s){fe(ba,"Failed to raise snapshot:",s),await Af(r,s)}}async function Af(r,e,t){if(!rl(e))throw e;r.Ea.add(1),await rc(r),r.Ra.set("Offline"),t||(t=()=>Rw(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{fe(ba,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Zf(r)})}function Ow(r,e){return e().catch(t=>Af(r,t,e))}async function Jf(r){const e=Re(r),t=Ts(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Fg;for(;D4(e);)try{const o=await h4(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,N4(e,o)}catch(o){await Af(e,o)}Mw(e)&&Vw(e)}function D4(r){return Na(r)&&r.Ta.length<10}function N4(r,e){r.Ta.push(e);const t=Ts(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Mw(r){return Na(r)&&!Ts(r).x_()&&r.Ta.length>0}function Vw(r){Ts(r).start()}async function O4(r){Ts(r).ra()}async function M4(r){const e=Ts(r);for(const t of r.Ta)e.ea(t.mutations)}async function V4(r,e,t){const s=r.Ta.shift(),o=Xg.from(s,e,t);await Ow(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Jf(r)}async function P4(r,e){e&&Ts(r).X_&&await async function(s,o){if(function(f){return gO(f)&&f!==Z.ABORTED}(o.code)){const u=s.Ta.shift();Ts(s).B_(),await Ow(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Jf(s)}}(r,e),Mw(r)&&Vw(r)}async function RT(r,e){const t=Re(r);t.asyncQueue.verifyOperationInProgress(),fe(ba,"RemoteStore received new credentials");const s=Na(t);t.Ea.add(3),await rc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Zf(t)}async function k4(r,e){const t=Re(r);e?(t.Ea.delete(2),await Zf(t)):e||(t.Ea.add(2),await rc(t),t.Ra.set("Unknown"))}function sl(r){return r.ma||(r.ma=function(t,s,o){const u=Re(t);return u.sa(),new E4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:R4.bind(null,r),t_:I4.bind(null,r),r_:x4.bind(null,r),H_:C4.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),ay(r)?sy(r):r.Ra.set("Unknown")):(await r.ma.stop(),Nw(r))})),r.ma}function Ts(r){return r.fa||(r.fa=function(t,s,o){const u=Re(t);return u.sa(),new T4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:O4.bind(null,r),r_:P4.bind(null,r),ta:M4.bind(null,r),na:V4.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await Jf(r)):(await r.fa.stop(),r.Ta.length>0&&(fe(ba,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class oy{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const f=Date.now()+s,p=new oy(e,t,f,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ly(r,e){if(bi("AsyncQueue",`${e}: ${r}`),rl(r))return new ce(Z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class IT{constructor(){this.ga=new ft(_e.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):we(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class Qo{constructor(e,t,s,o,u,f,p,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,o,u){const f=[];return t.forEach(p=>{f.push({type:0,doc:p})}),new Qo(e,t,Po.emptySet(t),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$f(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class L4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class U4{constructor(){this.queries=xT(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Re(t),u=o.queries;o.queries=xT(),u.forEach((f,p)=>{for(const m of p.Sa)m.onError(s)})})(this,new ce(Z.ABORTED,"Firestore shutting down"))}}function xT(){return new Da(r=>ew(r),$f)}async function uy(r,e){const t=Re(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new L4,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(f){const p=ly(f,`Initialization of query '${Io(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&hy(t)}async function cy(r,e){const t=Re(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const f=u.Sa.indexOf(e);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function j4(r,e){const t=Re(r);let s=!1;for(const o of e){const u=o.query,f=t.queries.get(u);if(f){for(const p of f.Sa)p.Fa(o)&&(s=!0);f.wa=o}}s&&hy(t)}function z4(r,e,t){const s=Re(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function hy(r){r.Ca.forEach(e=>{e.next()})}var pg,CT;(CT=pg||(pg={})).Ma="default",CT.Cache="cache";class fy{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Qo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Qo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==pg.Cache}}/**
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
 */class Pw{constructor(e){this.key=e}}class kw{constructor(e){this.key=e}}class q4{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Le(),this.mutatedKeys=Le(),this.eu=tw(e),this.tu=new Po(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new IT,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,f=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((_,T)=>{const A=o.get(_),N=Qf(this.query,T)?T:null,U=!!A&&this.mutatedKeys.has(A.key),$=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let B=!1;A&&N?A.data.isEqual(N.data)?U!==$&&(s.track({type:3,doc:N}),B=!0):this.su(A,N)||(s.track({type:2,doc:N}),B=!0,(m&&this.eu(N,m)>0||g&&this.eu(N,g)<0)&&(p=!0)):!A&&N?(s.track({type:0,doc:N}),B=!0):A&&!N&&(s.track({type:1,doc:A}),B=!0,(m||g)&&(p=!0)),B&&(N?(f=f.add(N),u=$?u.add(_):u.delete(_)):(f=f.delete(_),u=u.delete(_)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const _=this.query.limitType==="F"?f.last():f.first();f=f.delete(_.key),u=u.delete(_.key),s.track({type:1,doc:_})}return{tu:f,iu:s,Cs:p,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort((_,T)=>function(N,U){const $=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{Rt:B})}};return $(N)-$(U)}(_.type,T.type)||this.eu(_.doc,T.doc)),this.ou(s),o=o??!1;const p=t&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,g=m!==this.Za;return this.Za=m,f.length!==0||g?{snapshot:new Qo(this.query,e.tu,u,f,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new IT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Le(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new kw(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new Pw(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=Le();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Qo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const dy="SyncEngine";class B4{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class H4{constructor(e){this.key=e,this.hu=!1}}class F4{constructor(e,t,s,o,u,f){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new Da(p=>ew(p),$f),this.Iu=new Map,this.Eu=new Set,this.du=new ft(_e.comparator),this.Au=new Map,this.Ru=new Jg,this.Vu={},this.mu=new Map,this.fu=$o.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function G4(r,e,t=!0){const s=Bw(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Lw(s,e,t,!0),o}async function $4(r,e){const t=Bw(r);await Lw(t,e,!0,!1)}async function Lw(r,e,t,s){const o=await f4(r.localStore,kr(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,t);let p;return s&&(p=await Q4(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&t&&Cw(r.remoteStore,o),p}async function Q4(r,e,t,s,o){r.pu=(T,A,N)=>async function($,B,J,X){let re=B.view.ru(J);re.Cs&&(re=await TT($.localStore,B.query,!1).then(({documents:C})=>B.view.ru(C,re)));const he=X&&X.targetChanges.get(B.targetId),ue=X&&X.targetMismatches.get(B.targetId)!=null,de=B.view.applyChanges(re,$.isPrimaryClient,he,ue);return NT($,B.targetId,de.au),de.snapshot}(r,T,A,N);const u=await TT(r.localStore,e,!0),f=new q4(e,u.Qs),p=f.ru(u.documents),m=nc.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),g=f.applyChanges(p,r.isPrimaryClient,m);NT(r,t,g.au);const _=new B4(e,t,f);return r.Tu.set(e,_),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),g.snapshot}async function Y4(r,e,t){const s=Re(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(f=>!$f(f,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await fg(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&ry(s.remoteStore,o.targetId),mg(s,o.targetId)}).catch(nl)):(mg(s,o.targetId),await fg(s.localStore,o.targetId,!0))}async function K4(r,e){const t=Re(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ry(t.remoteStore,s.targetId))}async function X4(r,e,t){const s=rM(r);try{const o=await function(f,p){const m=Re(f),g=nt.now(),_=p.reduce((N,U)=>N.add(U.key),Le());let T,A;return m.persistence.runTransaction("Locally write mutations","readwrite",N=>{let U=Ri(),$=Le();return m.Ns.getEntries(N,_).next(B=>{U=B,U.forEach((J,X)=>{X.isValidDocument()||($=$.add(J))})}).next(()=>m.localDocuments.getOverlayedDocuments(N,U)).next(B=>{T=B;const J=[];for(const X of p){const re=hO(X,T.get(X.key).overlayedDocument);re!=null&&J.push(new Is(X.key,re,$S(re.value.mapValue),cr.exists(!0)))}return m.mutationQueue.addMutationBatch(N,g,J,p)}).next(B=>{A=B;const J=B.applyToLocalDocumentSet(T,$);return m.documentOverlayCache.saveOverlays(N,B.batchId,J)})}).then(()=>({batchId:A.batchId,changes:rw(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(f,p,m){let g=f.Vu[f.currentUser.toKey()];g||(g=new ft(ke)),g=g.insert(p,m),f.Vu[f.currentUser.toKey()]=g}(s,o.batchId,t),await ic(s,o.changes),await Jf(s.remoteStore)}catch(o){const u=ly(o,"Failed to persist write");t.reject(u)}}async function Uw(r,e){const t=Re(r);try{const s=await u4(t.localStore,e);e.targetChanges.forEach((o,u)=>{const f=t.Au.get(u);f&&(Qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Qe(f.hu,14607):o.removedDocuments.size>0&&(Qe(f.hu,42227),f.hu=!1))}),await ic(t,s,e)}catch(s){await nl(s)}}function DT(r,e,t){const s=Re(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach((u,f)=>{const p=f.view.va(e);p.snapshot&&o.push(p.snapshot)}),function(f,p){const m=Re(f);m.onlineState=p;let g=!1;m.queries.forEach((_,T)=>{for(const A of T.Sa)A.va(p)&&(g=!0)}),g&&hy(m)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function W4(r,e,t){const s=Re(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let f=new ft(_e.comparator);f=f.insert(u,pn.newNoDocument(u,be.min()));const p=Le().add(u),m=new Xf(be.min(),new Map,new ft(ke),f,p);await Uw(s,m),s.du=s.du.remove(u),s.Au.delete(e),py(s)}else await fg(s.localStore,e,!1).then(()=>mg(s,e,t)).catch(nl)}async function Z4(r,e){const t=Re(r),s=e.batch.batchId;try{const o=await l4(t.localStore,e);zw(t,s,null),jw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ic(t,o)}catch(o){await nl(o)}}async function J4(r,e,t){const s=Re(r);try{const o=await function(f,p){const m=Re(f);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let _;return m.mutationQueue.lookupMutationBatch(g,p).next(T=>(Qe(T!==null,37113),_=T.keys(),m.mutationQueue.removeMutationBatch(g,T))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,_,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_)).next(()=>m.localDocuments.getDocuments(g,_))})}(s.localStore,e);zw(s,e,t),jw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ic(s,o)}catch(o){await nl(o)}}function jw(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function zw(r,e,t){const s=Re(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function mg(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(s=>{r.Ru.containsKey(s)||qw(r,s)})}function qw(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(ry(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),py(r))}function NT(r,e,t){for(const s of t)s instanceof Pw?(r.Ru.addReference(s.key,e),eM(r,s)):s instanceof kw?(fe(dy,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||qw(r,s.key)):we(19791,{wu:s})}function eM(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Eu.has(s)||(fe(dy,"New document in limbo: "+t),r.Eu.add(s),py(r))}function py(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new _e(it.fromString(e)),s=r.fu.next();r.Au.set(s,new H4(t)),r.du=r.du.insert(t,s),Cw(r.remoteStore,new cs(kr(Gf(t.path)),s,"TargetPurposeLimboResolution",Bf.ce))}}async function ic(r,e,t){const s=Re(r),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach((p,m)=>{f.push(s.pu(m,e,t).then(g=>{var _;if((g||t)&&s.isPrimaryClient){const T=g?!g.fromCache:(_=t==null?void 0:t.targetChanges.get(m.targetId))==null?void 0:_.current;s.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(g){o.push(g);const T=ty.As(m.targetId,g);u.push(T)}}))}),await Promise.all(f),s.Pu.H_(o),await async function(m,g){const _=Re(m);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>te.forEach(g,A=>te.forEach(A.Es,N=>_.persistence.referenceDelegate.addReference(T,A.targetId,N)).next(()=>te.forEach(A.ds,N=>_.persistence.referenceDelegate.removeReference(T,A.targetId,N)))))}catch(T){if(!rl(T))throw T;fe(ny,"Failed to update sequence numbers: "+T)}for(const T of g){const A=T.targetId;if(!T.fromCache){const N=_.Ms.get(A),U=N.snapshotVersion,$=N.withLastLimboFreeSnapshotVersion(U);_.Ms=_.Ms.insert(A,$)}}}(s.localStore,u))}async function tM(r,e){const t=Re(r);if(!t.currentUser.isEqual(e)){fe(dy,"User change. New user:",e.toKey());const s=await bw(t.localStore,e);t.currentUser=e,function(u,f){u.mu.forEach(p=>{p.forEach(m=>{m.reject(new ce(Z.CANCELLED,f))})}),u.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ic(t,s.Ls)}}function nM(r,e){const t=Re(r),s=t.Au.get(e);if(s&&s.hu)return Le().add(s.key);{let o=Le();const u=t.Iu.get(e);if(!u)return o;for(const f of u){const p=t.Tu.get(f);o=o.unionWith(p.view.nu)}return o}}function Bw(r){const e=Re(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=W4.bind(null,e),e.Pu.H_=j4.bind(null,e.eventManager),e.Pu.yu=z4.bind(null,e.eventManager),e}function rM(r){const e=Re(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Z4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=J4.bind(null,e),e}class bf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return o4(this.persistence,new i4,e.initialUser,this.serializer)}Cu(e){return new Aw(ey.mi,this.serializer)}Du(e){return new p4}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bf.provider={build:()=>new bf};class iM extends bf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Qe(this.persistence.referenceDelegate instanceof wf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new HO(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?An.withCacheSize(this.cacheSizeBytes):An.DEFAULT;return new Aw(s=>wf.mi(s,t),this.serializer)}}class gg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>DT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tM.bind(null,this.syncEngine),await k4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new U4}()}createDatastore(e){const t=Wf(e.databaseInfo.databaseId),s=function(u){return new v4(u)}(e.databaseInfo);return function(u,f,p,m){return new w4(u,f,p,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,f,p){return new b4(s,o,u,f,p)}(this.localStore,this.datastore,e.asyncQueue,t=>DT(this.syncEngine,t,0),function(){return AT.v()?new AT:new m4}())}createSyncEngine(e,t){return function(o,u,f,p,m,g,_){const T=new F4(o,u,f,p,m,g);return _&&(T.gu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Re(o);fe(ba,"RemoteStore shutting down."),u.Ea.add(5),await rc(u),u.Aa.shutdown(),u.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}gg.provider={build:()=>new gg};/**
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
 */class my{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):bi("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Ss="FirestoreClient";class sM{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=dn.UNAUTHENTICATED,this.clientId=Hg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{fe(Ss,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(fe(Ss,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ly(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Om(r,e){r.asyncQueue.verifyOperationInProgress(),fe(Ss,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await bw(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function OT(r,e){r.asyncQueue.verifyOperationInProgress();const t=await aM(r);fe(Ss,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>RT(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>RT(e.remoteStore,o)),r._onlineComponents=e}async function aM(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){fe(Ss,"Using user provided OfflineComponentProvider");try{await Om(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Bo("Error using user provided cache. Falling back to memory cache: "+t),await Om(r,new bf)}}else fe(Ss,"Using default OfflineComponentProvider"),await Om(r,new iM(void 0));return r._offlineComponents}async function Hw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(fe(Ss,"Using user provided OnlineComponentProvider"),await OT(r,r._uninitializedComponentsProvider._online)):(fe(Ss,"Using default OnlineComponentProvider"),await OT(r,new gg))),r._onlineComponents}function oM(r){return Hw(r).then(e=>e.syncEngine)}async function Rf(r){const e=await Hw(r),t=e.eventManager;return t.onListen=G4.bind(null,e.syncEngine),t.onUnlisten=Y4.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$4.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=K4.bind(null,e.syncEngine),t}function lM(r,e,t={}){const s=new Ei;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,p,m,g){const _=new my({next:A=>{_.Nu(),f.enqueueAndForget(()=>cy(u,T));const N=A.docs.has(p);!N&&A.fromCache?g.reject(new ce(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&A.fromCache&&m&&m.source==="server"?g.reject(new ce(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(A)},error:A=>g.reject(A)}),T=new fy(Gf(p.path),_,{includeMetadataChanges:!0,qa:!0});return uy(u,T)}(await Rf(r),r.asyncQueue,e,t,s)),s.promise}function uM(r,e,t={}){const s=new Ei;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,p,m,g){const _=new my({next:A=>{_.Nu(),f.enqueueAndForget(()=>cy(u,T)),A.fromCache&&m.source==="server"?g.reject(new ce(Z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(A)},error:A=>g.reject(A)}),T=new fy(p,_,{includeMetadataChanges:!0,qa:!0});return uy(u,T)}(await Rf(r),r.asyncQueue,e,t,s)),s.promise}/**
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
 */function Fw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const MT=new Map;/**
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
 */const Gw="firestore.googleapis.com",VT=!0;class PT{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ce(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gw,this.ssl=VT}else this.host=e.host,this.ssl=e.ssl??VT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ww;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qO)throw new ce(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}A2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fw(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ce(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ce(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ce(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ed{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new PT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new PT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new p2;switch(s.type){case"firstParty":return new _2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=MT.get(t);s&&(fe("ComponentProvider","Removing Datastore"),MT.delete(t),s.terminate())}(this),Promise.resolve()}}function cM(r,e,t,s={}){var g;r=Ln(r,ed);const o=Zo(e),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${t}`;o&&(j1(`https://${p}`),z1("Firestore",!0)),u.host!==Gw&&u.host!==p&&Bo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:s};if(!Ea(m,f)&&(r._setSettings(m),s.mockUserToken)){let _,T;if(typeof s.mockUserToken=="string")_=s.mockUserToken,T=dn.MOCK_USER;else{_=wx(s.mockUserToken,(g=r._app)==null?void 0:g.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new ce(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new dn(A)}r._authCredentials=new m2(new VS(_,T))}}/**
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
 */class xs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new xs(this.firestore,e,this._query)}}class gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ec(t,gt._jsonSchema))return new gt(e,s||null,new _e(it.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:xt("string",gt._jsonSchemaVersion),referencePath:xt("string")};class gs extends xs{constructor(e,t,s){super(e,t,Gf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new _e(e))}withConverter(e){return new gs(this.firestore,e,this._path)}}function Ti(r,e,...t){if(r=Ct(r),PS("collection","path",e),r instanceof ed){const s=it.fromString(e,...t);return Y0(s),new gs(r,null,s)}{if(!(r instanceof gt||r instanceof gs))throw new ce(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...t));return Y0(s),new gs(r.firestore,null,s)}}function hr(r,e,...t){if(r=Ct(r),arguments.length===1&&(e=Hg.newId()),PS("doc","path",e),r instanceof ed){const s=it.fromString(e,...t);return Q0(s),new gt(r,null,new _e(s))}{if(!(r instanceof gt||r instanceof gs))throw new ce(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...t));return Q0(s),new gt(r.firestore,r instanceof gs?r.converter:null,new _e(s))}}/**
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
 */const kT="AsyncQueue";class LT{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Iw(this,"async_queue_retry"),this._c=()=>{const s=Nm();s&&fe(kT,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Nm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Nm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Ei;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!rl(e))throw e;fe(kT,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,bi("INTERNAL UNHANDLED ERROR: ",UT(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=oy.createAndSchedule(this,e,t,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&we(47125,{Pc:UT(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function UT(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function jT(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class ws extends ed{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new LT,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new LT(e),this._firestoreClient=void 0,await e}}}function $w(r,e){const t=typeof r=="object"?r:F1(),s=typeof r=="string"?r:_f,o=Mg(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Tx("firestore");u&&cM(o,...u)}return o}function td(r){if(r._terminated)throw new ce(Z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||hM(r),r._firestoreClient}function hM(r){var s,o,u;const e=r._freezeSettings(),t=function(p,m,g,_){return new P2(p,m,g,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Fw(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new sM(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(p){const m=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(m),_online:m}}(r._componentsProvider))}/**
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
 */class Jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jn(sn.fromBase64String(e))}catch(t){throw new ce(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Jn(sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ec(e,Jn._jsonSchema))return Jn.fromBase64String(e.bytes)}}Jn._jsonSchemaVersion="firestore/bytes/1.0",Jn._jsonSchema={type:xt("string",Jn._jsonSchemaVersion),bytes:xt("string")};/**
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
 */class nd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ur{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ur._jsonSchemaVersion}}static fromJSON(e){if(ec(e,Ur._jsonSchema))return new Ur(e.latitude,e.longitude)}}Ur._jsonSchemaVersion="firestore/geoPoint/1.0",Ur._jsonSchema={type:xt("string",Ur._jsonSchemaVersion),latitude:xt("number"),longitude:xt("number")};/**
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
 */class jr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:jr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ec(e,jr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new jr(e.vectorValues);throw new ce(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}jr._jsonSchemaVersion="firestore/vectorValue/1.0",jr._jsonSchema={type:xt("string",jr._jsonSchemaVersion),vectorValues:xt("object")};/**
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
 */const fM=/^__.*__$/;class dM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Is(e,this.data,this.fieldMask,t,this.fieldTransforms):new tc(e,this.data,t,this.fieldTransforms)}}class Qw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Is(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Yw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ac:r})}}class gy{constructor(e,t,s,o,u,f){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new gy({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return If(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Yw(this.Ac)&&fM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class pM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Wf(e)}Cc(e,t,s,o=!1){return new gy({Ac:e,methodName:t,Dc:s,path:rn.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function id(r){const e=r._freezeSettings(),t=Wf(r._databaseId);return new pM(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Kw(r,e,t,s,o,u={}){const f=r.Cc(u.merge||u.mergeFields?2:0,e,t,o);_y("Data must be an object, but it was:",f,s);const p=Xw(s,f);let m,g;if(u.merge)m=new kn(f.fieldMask),g=f.fieldTransforms;else if(u.mergeFields){const _=[];for(const T of u.mergeFields){const A=yg(e,T,t);if(!f.contains(A))throw new ce(Z.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Zw(_,A)||_.push(A)}m=new kn(_),g=f.fieldTransforms.filter(T=>m.covers(T.field))}else m=null,g=f.fieldTransforms;return new dM(new bn(p),m,g)}class sd extends rd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sd}}class yy extends rd{_toFieldTransform(e){return new oO(e.path,new Bu)}isEqual(e){return e instanceof yy}}function mM(r,e,t,s){const o=r.Cc(1,e,t);_y("Data must be an object, but it was:",o,s);const u=[],f=bn.empty();Rs(s,(m,g)=>{const _=vy(e,m,t);g=Ct(g);const T=o.yc(_);if(g instanceof sd)u.push(_);else{const A=sc(g,T);A!=null&&(u.push(_),f.set(_,A))}});const p=new kn(u);return new Qw(f,p,o.fieldTransforms)}function gM(r,e,t,s,o,u){const f=r.Cc(1,e,t),p=[yg(e,s,t)],m=[o];if(u.length%2!=0)throw new ce(Z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<u.length;A+=2)p.push(yg(e,u[A])),m.push(u[A+1]);const g=[],_=bn.empty();for(let A=p.length-1;A>=0;--A)if(!Zw(g,p[A])){const N=p[A];let U=m[A];U=Ct(U);const $=f.yc(N);if(U instanceof sd)g.push(N);else{const B=sc(U,$);B!=null&&(g.push(N),_.set(N,B))}}const T=new kn(g);return new Qw(_,T,f.fieldTransforms)}function yM(r,e,t,s=!1){return sc(t,r.Cc(s?4:3,e))}function sc(r,e){if(Ww(r=Ct(r)))return _y("Unsupported field value:",e,r),Xw(r,e);if(r instanceof rd)return function(s,o){if(!Yw(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const p of s){let m=sc(p,o.wc(f));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),f++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=Ct(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return iO(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=nt.fromDate(s);return{timestampValue:Sf(o.serializer,u)}}if(s instanceof nt){const u=new nt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Sf(o.serializer,u)}}if(s instanceof Ur)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Jn)return{bytesValue:gw(o.serializer,s._byteString)};if(s instanceof gt){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Zg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof jr)return function(f,p){return{mapValue:{fields:{[FS]:{stringValue:GS},[vf]:{arrayValue:{values:f.toArray().map(g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return Kg(p.serializer,g)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${qf(s)}`)}(r,e)}function Xw(r,e){const t={};return US(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(r,(s,o)=>{const u=sc(o,e.mc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Ww(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof nt||r instanceof Ur||r instanceof Jn||r instanceof gt||r instanceof rd||r instanceof jr)}function _y(r,e,t){if(!Ww(t)||!kS(t)){const s=qf(t);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function yg(r,e,t){if((e=Ct(e))instanceof nd)return e._internalPath;if(typeof e=="string")return vy(r,e);throw If("Field path arguments must be of type string or ",r,!1,void 0,t)}const _M=new RegExp("[~\\*/\\[\\]]");function vy(r,e,t){if(e.search(_M)>=0)throw If(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new nd(...e.split("."))._internalPath}catch{throw If(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function If(r,e,t,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||f)&&(m+=" (found",u&&(m+=` in field ${s}`),f&&(m+=` in document ${o}`),m+=")"),new ce(Z.INVALID_ARGUMENT,p+r+m)}function Zw(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class Jw{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ad("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class vM extends Jw{data(){return super.data()}}function ad(r,e){return typeof e=="string"?vy(r,e):e instanceof nd?e._internalPath:e._delegate._internalPath}/**
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
 */function eA(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ce(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ey{}class tA extends Ey{}function Ra(r,e,...t){let s=[];e instanceof Ey&&s.push(e),s=s.concat(t),function(u){const f=u.filter(m=>m instanceof Ty).length,p=u.filter(m=>m instanceof od).length;if(f>1||f>0&&p>0)throw new ce(Z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class od extends tA{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new od(e,t,s)}_apply(e){const t=this._parse(e);return nA(e._query,t),new xs(e.firestore,e.converter,ag(e._query,t))}_parse(e){const t=id(e.firestore);return function(u,f,p,m,g,_,T){let A;if(g.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new ce(Z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){qT(T,_);const U=[];for(const $ of T)U.push(zT(m,u,$));A={arrayValue:{values:U}}}else A=zT(m,u,T)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||qT(T,_),A=yM(p,f,T,_==="in"||_==="not-in");return It.create(g,_,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ia(r,e,t){const s=e,o=ad("where",r);return od._create(o,s,t)}class Ty extends Ey{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ty(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:pr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let f=o;const p=u.getFlattenedFilters();for(const m of p)nA(f,m),f=ag(f,m)}(e._query,t),new xs(e.firestore,e.converter,ag(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sy extends tA{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Sy(e,t)}_apply(e){const t=function(o,u,f){if(o.startAt!==null)throw new ce(Z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ce(Z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qu(u,f)}(e._query,this._field,this._direction);return new xs(e.firestore,e.converter,function(o,u){const f=o.explicitOrderBy.concat([u]);return new il(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function wy(r,e="asc"){const t=e,s=ad("orderBy",r);return Sy._create(s,t)}function zT(r,e,t){if(typeof(t=Ct(t))=="string"){if(t==="")throw new ce(Z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!JS(e)&&t.indexOf("/")!==-1)throw new ce(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(it.fromString(t));if(!_e.isDocumentKey(s))throw new ce(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return nT(r,new _e(s))}if(t instanceof gt)return nT(r,t._key);throw new ce(Z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qf(t)}.`)}function qT(r,e){if(!Array.isArray(r)||r.length===0)throw new ce(Z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function nA(r,e){const t=function(o,u){for(const f of o)for(const p of f.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ce(Z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(Z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class EM{convertValue(e,t="none"){switch(Es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Rs(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[vf].arrayValue)==null?void 0:o.values)==null?void 0:u.map(f=>Et(f.doubleValue));return new jr(t)}convertGeoPoint(e){return new Ur(Et(e.latitude),Et(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ff(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Uu(e));default:return null}}convertTimestamp(e){const t=_s(e);return new nt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=it.fromString(e);Qe(Sw(s),9688,{name:e});const o=new ju(s.get(1),s.get(3)),u=new _e(s.popFirst(5));return o.isEqual(t)||bi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function rA(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class wu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ma extends Jw{constructor(e,t,s,o,u,f){super(e,t,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new nf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ad("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ma._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ma._jsonSchemaVersion="firestore/documentSnapshot/1.0",ma._jsonSchema={type:xt("string",ma._jsonSchemaVersion),bundleSource:xt("string","DocumentSnapshot"),bundleName:xt("string"),bundle:xt("string")};class nf extends ma{data(e={}){return super.data(e)}}class ga{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new wu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new nf(this._firestore,this._userDataWriter,s.key,s,new wu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(p=>{const m=new nf(o._firestore,o._userDataWriter,p.doc.key,p.doc,new wu(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const m=new nf(o._firestore,o._userDataWriter,p.doc.key,p.doc,new wu(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,_=-1;return p.type!==0&&(g=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),_=f.indexOf(p.doc.key)),{type:TM(p.type),doc:m,oldIndex:g,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ga._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function TM(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:r})}}/**
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
 */function Ay(r){r=Ln(r,gt);const e=Ln(r.firestore,ws);return lM(td(e),r._key).then(t=>sA(e,r,t))}ga._jsonSchemaVersion="firestore/querySnapshot/1.0",ga._jsonSchema={type:xt("string",ga._jsonSchemaVersion),bundleSource:xt("string","QuerySnapshot"),bundleName:xt("string"),bundle:xt("string")};class by extends EM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}function iA(r){r=Ln(r,xs);const e=Ln(r.firestore,ws),t=td(e),s=new by(e);return eA(r._query),uM(t,r._query).then(o=>new ga(e,s,r,o))}function SM(r,e,t){r=Ln(r,gt);const s=Ln(r.firestore,ws),o=rA(r.converter,e);return Ry(s,[Kw(id(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,cr.none())])}function ya(r,e,t,...s){r=Ln(r,gt);const o=Ln(r.firestore,ws),u=id(o);let f;return f=typeof(e=Ct(e))=="string"||e instanceof nd?gM(u,"updateDoc",r._key,e,t,s):mM(u,"updateDoc",r._key,e),Ry(o,[f.toMutation(r._key,cr.exists(!0))])}function wM(r,e){const t=Ln(r.firestore,ws),s=hr(r),o=rA(r.converter,e);return Ry(t,[Kw(id(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,cr.exists(!1))]).then(()=>s)}function ld(r,...e){var m,g,_;r=Ct(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||jT(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(jT(e[s])){const T=e[s];e[s]=(m=T.next)==null?void 0:m.bind(T),e[s+1]=(g=T.error)==null?void 0:g.bind(T),e[s+2]=(_=T.complete)==null?void 0:_.bind(T)}let u,f,p;if(r instanceof gt)f=Ln(r.firestore,ws),p=Gf(r._key.path),u={next:T=>{e[s]&&e[s](sA(f,r,T))},error:e[s+1],complete:e[s+2]};else{const T=Ln(r,xs);f=Ln(T.firestore,ws),p=T._query;const A=new by(f);u={next:N=>{e[s]&&e[s](new ga(f,A,T,N))},error:e[s+1],complete:e[s+2]},eA(r._query)}return function(A,N,U,$){const B=new my($),J=new fy(N,B,U);return A.asyncQueue.enqueueAndForget(async()=>uy(await Rf(A),J)),()=>{B.Nu(),A.asyncQueue.enqueueAndForget(async()=>cy(await Rf(A),J))}}(td(f),p,o,u)}function Ry(r,e){return function(s,o){const u=new Ei;return s.asyncQueue.enqueueAndForget(async()=>X4(await oM(s),o,u)),u.promise}(td(r),e)}function sA(r,e,t){const s=t.docs.get(e._key),o=new by(r);return new ma(r,o,e._key,s,new wu(t.hasPendingWrites,t.fromCache),e.converter)}function BT(){return new yy("serverTimestamp")}(function(e,t=!0){(function(o){tl=o})(Jo),zo(new Ta("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),p=new ws(new g2(s.getProvider("auth-internal")),new v2(f,s.getProvider("app-check-internal")),function(g,_){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ce(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ju(g.options.projectId,_)}(f,o),f);return u={useFetchStreams:t,...u},p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),ps(H0,F0,e),ps(H0,F0,"esm2020")})();const AM={apiKey:"AIzaSyB5aFUQbtG1rShW-1O88aZjCG7uErNxmgQ",authDomain:"pdms-test-8a5cc.firebaseapp.com",projectId:"pdms-test-8a5cc",storageBucket:"pdms-test-8a5cc.firebasestorage.app",messagingSenderId:"631678861167",appId:"1:631678861167:web:5cd775b77e53535700329a"},Iy=H1(AM);$w(Iy);const kt=$w(Iy),xa=c2(Iy);function bM({onLoginSuccess:r}){const[e,t]=F.useState(""),[s,o]=F.useState(""),u=$u(),f=()=>{u("/signup")},p=()=>{YD(xa,e,s).then(()=>{r(),u("/dashboard")}).catch(m=>{alert("로그인 실패: "+m.message)})};return S.jsxs(RM,{children:[S.jsxs(IM,{children:[S.jsxs(xM,{children:[S.jsx(CM,{children:"PDMS"}),S.jsx(DM,{children:"Pushcomz Design Management System"})]}),S.jsxs(NM,{children:[S.jsx(OM,{type:"text",value:e,onChange:m=>t(m.target.value),placeholder:"이메일을 입력해주세요."}),S.jsx(MM,{type:"password",value:s,onChange:m=>o(m.target.value),placeholder:"비밀번호를 입력해주세요."})]}),S.jsx(VM,{onClick:p,children:"로그인"}),S.jsxs(kM,{children:[S.jsx(LM,{children:"계정이 없습니까?"}),S.jsx(UM,{onClick:f,children:"등록하기"})]})]}),S.jsx(PM,{children:"© Pushcomz Corp."})]})}const RM=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:r})=>r.colors.gray01};
`,IM=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:r})=>r.colors.white01};
`,xM=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,CM=ie.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.navy};
`,DM=ie.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,NM=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
`,OM=ie.input`
  width: 460px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,MM=ie.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,VM=ie.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:r})=>r.colors.white01};
`,PM=ie.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`,kM=ie.div`
  
`,LM=ie.span`
  margin-right: 10px;
  font-size: 13px;
`,UM=ie.button`
  font-size: 13px;
  color: ${({theme:r})=>r.colors.navy};
`,aA="./assets/logo-NEcdCz8m.svg";function jM(){const[r,e]=F.useState(""),[t,s]=F.useState(null),o=$u();F.useEffect(()=>{const p=Uf(xa,async m=>{if(m){m.displayName&&e(m.displayName);const g=await Ay(hr(kt,"users",m.uid));g.exists()?s(g.data().role):s(null)}else e(""),s(null)});return()=>p()},[]);const u=()=>{JD(xa).then(()=>{o("/")}).catch(p=>{alert("로그아웃 중 오류가 발생했습니다: "+p.message)})},f=p=>{switch(p){case 1:return"요청자";case 2:return"디자이너";case 3:return"담당자";default:return"역할 없음"}};return S.jsxs(zM,{children:[S.jsx(qM,{src:aA}),S.jsxs(BM,{children:[S.jsxs(HM,{children:[S.jsx(FM,{children:r}),"님(",f(t),") 환영합니다."]}),S.jsx(GM,{onClick:u,children:"로그아웃"}),S.jsx($M,{})]})]})}const zM=ie.header`
  ${({theme:r})=>r.mixin.flex("center","space-between")};
  padding: 12px 48px;
  font-family: 'Pretendard';
  background-color: ${({theme:r})=>r.colors.black};
`,qM=ie.img``,BM=ie.div``,HM=ie.span`
  margin-right: 24px;
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`,FM=ie.span`
  font-weight: 700;
`,GM=ie.button`
  padding: 5px 10px;
  border: 1px solid ${({theme:r})=>r.colors.white01};
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`,$M=ie.span`
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`;function QM({item:r,index:e,onReviewComplete:t,onCancel:s,onEditClick:o}){const u=f=>{if(!f)return"-";if(f.toDate){const p=f.toDate();return`${p.getMonth()+1}/${p.getDate()}`}return f};return S.jsxs(ZM,{isCanceled:r.status==="취소",children:[S.jsx(Zt,{children:e}),S.jsx(Zt,{children:r.design_request_id}),S.jsx(Zt,{children:u(r.request_date)}),S.jsx(Zt,{children:r.requester}),S.jsx(Zt,{children:u(r.completion_dt)}),S.jsx(Zt,{children:u(r.open_dt)}),S.jsx(Zt,{children:r.task_form}),S.jsx(Zt,{children:r.task_type}),S.jsxs(Zt,{children:[r.emergency?S.jsx(JM,{children:"긴급"}):"",r.requirement]}),S.jsx(Zt,{children:r.url}),S.jsx(Zt,{children:r.note}),S.jsx(Zt,{children:r.status==="검수요청"?"진행중":r.status==="검수중"?"검수 요청":r.status||"대기"}),S.jsx(Zt,{children:r.assigned_designer||"미배정"}),S.jsx(Zt,{children:r.manager_review_status==="검수완료"&&r.url||""}),S.jsx(Zt,{children:S.jsx(WM,{onClick:()=>s(r.id),children:"취소"})}),S.jsx(Zt,{children:S.jsx(XM,{onClick:()=>o(r.id),children:"수정"})}),S.jsx(Zt,{children:r.manager_review_status==="검수완료"?r.status!=="완료"?S.jsx(YM,{onClick:()=>t(r.id),children:"검수완료"}):S.jsx(KM,{children:"완료"}):""})]})}const YM=ie.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: ${({theme:r})=>r.colors.navy};
`,KM=ie.span`
  color: green;
  font-weight: bold;
`,XM=ie.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: ${({theme:r})=>r.colors.navy};
`,WM=ie.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: ${({theme:r})=>r.colors.navy};
`,ZM=ie.tr`
  ${({isCanceled:r})=>r&&`
      td {
        text-decoration: line-through;
        color: gray;
      }
    `}
`,Zt=ie.td`
  padding: 5px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
`,JM=ie.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
`;function eV({data:r,onReviewComplete:e,onCancel:t,onEditClick:s}){return S.jsx(tV,{children:S.jsxs(nV,{children:[S.jsx(rV,{children:"요청 리스트"}),S.jsxs("colgroup",{children:[S.jsx("col",{style:{width:"50px"}}),S.jsx("col",{style:{width:"80px"}}),S.jsx("col",{style:{width:"60px"}}),S.jsx("col",{style:{width:"60px"}}),S.jsx("col",{style:{width:"60px"}}),S.jsx("col",{style:{width:"60px"}}),S.jsx("col",{style:{width:"80px"}}),S.jsx("col",{style:{width:"120px"}}),S.jsx("col",{}),S.jsx("col",{}),S.jsx("col",{}),S.jsx("col",{style:{width:"100px"}}),S.jsx("col",{style:{width:"80px"}}),S.jsx("col",{}),S.jsx("col",{style:{width:"60px"}}),S.jsx("col",{style:{width:"80px"}}),S.jsx("col",{style:{width:"80px"}})]}),S.jsx("thead",{children:S.jsxs("tr",{children:[S.jsx(Jt,{children:"NO"}),S.jsx(Jt,{children:"문서번호"}),S.jsx(Jt,{children:"요청일"}),S.jsx(Jt,{children:"요청자"}),S.jsxs(Jt,{children:["완료",S.jsx("br",{}),"요청일"]}),S.jsx(Jt,{children:"오픈일"}),S.jsx(Jt,{children:"업무형태"}),S.jsx(Jt,{children:"업무타입"}),S.jsx(Jt,{children:"작업항목"}),S.jsx(Jt,{children:"기획안 URL"}),S.jsx(Jt,{children:"메모"}),S.jsx(Jt,{children:"진행상태"}),S.jsxs(Jt,{children:["담당",S.jsx("br",{}),"디자이너"]}),S.jsx(Jt,{children:"산출물 URL"}),S.jsx(Jt,{children:"취소"}),S.jsx(Jt,{children:"수정"}),S.jsx(Jt,{children:"검수"})]})}),S.jsx("tbody",{children:r.length>0?r.map((o,u)=>S.jsx(QM,{index:u+1,item:o,onReviewComplete:e,onCancel:t,onEditClick:s},o.id)):S.jsx("tr",{children:S.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const tV=ie.div`
  padding: 0 48px;
`,nV=ie.table`
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
`,rV=ie.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Jt=ie.th`
  border-bottom: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.white02};
`;function iV(){const r=new Date,e=r.getFullYear(),t=r.getMonth()+1,s=r.getDate();return S.jsx(sV,{children:S.jsxs(aV,{children:[e,"년 ",t,"월 ",s,"일 디자인 편성 요청 스케줄"]})})}const sV=ie.div`
  padding: 30px 48px;
  background-color: ${({theme:r})=>r.colors.gray04};
`,aV=ie.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`;function oV({setIsDrawerOpen:r,setEditData:e}){const[t,s]=F.useState(""),[o,u]=F.useState([]);F.useEffect(()=>{const g=Uf(xa,_=>{_&&_.displayName&&s(_.displayName)});return()=>g()},[]),F.useEffect(()=>{if(!t)return;const g=Ra(Ti(kt,"design_request"),Ia("requester","==",t),wy("design_request_id","asc")),_=ld(g,T=>{const A=T.docs.map(N=>({id:N.id,...N.data()}));u(A)});return()=>_()},[t]);const f=async g=>{await ya(hr(kt,"design_request",g),{status:"완료",requester_review_status:"검수완료"}),u(_=>_.map(T=>T.id===g?{...T,status:"완료",requester_review_status:"검수완료"}:T)),alert("완료 처리되었습니다.")},p=async g=>{const _=hr(kt,"design_request",g);await ya(_,{requester_edit_state:!0});const T=await Ay(_);if(T.exists()){const A={id:T.id,...T.data()};e(A),r(!0)}},m=async g=>{await ya(hr(kt,"design_request",g),{status:"취소"}),u(_=>_.map(T=>T.id===g?{...T,status:"취소"}:T))};return S.jsxs(S.Fragment,{children:[S.jsx(iV,{}),S.jsx(eV,{data:o,onReviewComplete:f,onCancel:m,onEditClick:p})]})}function lV({index:r,item:e,onChange:t,onSave:s}){const o=u=>{if(!u)return"-";if(u.toDate){const f=u.toDate();return`${f.getMonth()+1}/${f.getDate()}`}return u};return S.jsxs(cV,{isCanceled:e.status==="취소",children:[S.jsx(hn,{children:r}),S.jsx(hn,{children:e.design_request_id}),S.jsx(hn,{children:o(e.request_date)}),S.jsx(hn,{children:e.requester}),S.jsx(hn,{children:o(e.completion_dt)}),S.jsx(hn,{children:o(e.open_dt)}),S.jsx(hn,{children:e.task_form}),S.jsx(hn,{children:e.task_type}),S.jsxs(hn,{children:[e.emergency?S.jsx(hV,{children:"긴급"}):"",e.requirement]}),S.jsx(hn,{children:e.url?S.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.url}):""}),S.jsx(hn,{children:e.note||""}),S.jsx(hn,{children:S.jsx("input",{type:"date",onChange:u=>t(e.id,"start_dt",u.target.value),disabled:e.status==="취소"})}),S.jsx(hn,{children:S.jsx("input",{type:"date",onChange:u=>t(e.id,"end_dt",u.target.value),disabled:e.status==="취소"})}),S.jsx(hn,{children:S.jsx("input",{type:"text",placeholder:"산출물 URL을 입력해주세요.",onChange:u=>t(e.id,"result_url",u.target.value),disabled:e.status==="취소"})}),S.jsx(hn,{children:S.jsxs("select",{onChange:u=>t(e.id,"status",u.target.value),disabled:e.status==="취소",children:[S.jsx("option",{value:"대기중",children:"대기"}),S.jsx("option",{value:"진행중",children:"진행중"}),S.jsx("option",{value:"검수요청",children:"검수요청"})]})}),S.jsx(hn,{children:S.jsx(uV,{onClick:()=>s(e.id),disabled:e.status==="취소",children:"저장"})})]})}const uV=ie.button`
  padding: 6px 10px;
  background: #073863;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`,cV=ie.tr`
  ${({isCanceled:r})=>r&&`
      td {
        text-decoration: line-through;
        color: gray;
      }
    `}
`,hn=ie.td`
  padding: 5px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
`,hV=ie.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
`;function fV({requests:r,onChange:e,onSave:t}){return S.jsxs(dV,{children:[S.jsxs("colgroup",{children:[S.jsx("col",{style:{width:"50px"}}),S.jsx("col",{style:{width:"80px"}}),S.jsx("col",{style:{width:"60px"}}),S.jsx("col",{style:{width:"80px"}}),S.jsx("col",{style:{width:"80px"}}),S.jsx("col",{style:{width:"70px"}}),S.jsx("col",{style:{width:"90px"}}),S.jsx("col",{style:{width:"120px"}}),S.jsx("col",{}),S.jsx("col",{}),S.jsx("col",{}),S.jsx("col",{style:{width:"80px"}}),S.jsx("col",{style:{width:"80px"}}),S.jsx("col",{}),S.jsx("col",{style:{width:"60px"}}),S.jsx("col",{style:{width:"100px"}})]}),S.jsx("thead",{children:S.jsxs("tr",{children:[S.jsx(fn,{children:"NO"}),S.jsx(fn,{children:"문서번호"}),S.jsx(fn,{children:"요청일"}),S.jsx(fn,{children:"요청자"}),S.jsxs(fn,{children:["완료",S.jsx("br",{}),"요청일"]}),S.jsx(fn,{children:"오픈일"}),S.jsx(fn,{children:"업무형태"}),S.jsx(fn,{children:"업무타입"}),S.jsx(fn,{children:"작업항목"}),S.jsx(fn,{children:"기획안 URL"}),S.jsx(fn,{children:"메모"}),S.jsx(fn,{children:"디자인 시작일"}),S.jsx(fn,{children:"디자인 종료일"}),S.jsx(fn,{children:"산출물 링크"}),S.jsx(fn,{children:"진행상태"}),S.jsx(fn,{children:"저장"})]})}),S.jsx("tbody",{children:r.length>0?r.map((s,o)=>S.jsx(lV,{index:o+1,item:s,onChange:e,onSave:t},s.id)):S.jsx("tr",{children:S.jsx("td",{colSpan:16,style:{textAlign:"center"},children:"배정된 요청이 없습니다."})})})]})}const dV=ie.table`
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
`,fn=ie.th`
  border-bottom: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.white02};
`;function pV(){const[r,e]=F.useState([]),[t,s]=F.useState(""),[o,u]=F.useState({});F.useEffect(()=>{const g=Uf(xa,_=>{_&&_.displayName&&s(_.displayName)});return()=>g()},[]),F.useEffect(()=>{if(!t)return;const g=Ra(Ti(kt,"design_request"),Ia("assigned_designer","==",t),wy("design_request_id","asc")),_=ld(g,T=>{const A=T.docs.map(N=>({id:N.id,...N.data()}));e(A)});return()=>_()},[t]);const f=(g,_,T)=>{u(A=>({...A,[g]:{...A[g],[_]:T}}))},p=g=>g?nt.fromDate(new Date(g)):null,m=async g=>{const _=hr(kt,"design_request",g),T=o[g];if(!T){alert("변경된 내용이 없습니다.");return}await ya(_,{designer_start_date:p(T.start_dt),designer_end_date:p(T.end_dt),result_url:T.result_url||"",status:T.status}),alert("저장되었습니다.")};return S.jsxs(mV,{children:[S.jsx(gV,{children:"디자이너 화면"}),S.jsx(fV,{requests:r,formData:o,onChange:f,onSave:m})]})}const mV=ie.div``,gV=ie.h2`
  margin-bottom: 20px;
`;function yV({index:r,item:e,designerList:t,selectedDesigner:s,onDesignerSelect:o,onAssignDesigner:u,onSendToRequester:f}){const p=m=>{if(!m)return"-";if(m.toDate){const g=m.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return m};return S.jsxs(TV,{isCanceled:e.status==="취소",children:[S.jsx(en,{children:r}),S.jsx(en,{children:e.design_request_id}),S.jsx(en,{children:p(e.request_date)}),S.jsx(en,{children:e.requester}),S.jsx(en,{children:p(e.completion_dt)}),S.jsx(en,{children:p(e.open_dt)}),S.jsx(en,{children:e.task_form}),S.jsx(en,{children:e.task_type}),S.jsxs(en,{children:[e.emergency?S.jsx(wV,{children:"긴급"}):"",e.requirement]}),S.jsx(en,{children:e.url||""}),S.jsx(en,{children:e.note||""}),S.jsx(en,{children:e.status==="검수요청"?"검수중":e.status||"대기"}),S.jsx(en,{children:e.result_url||""}),S.jsx(en,{children:p(e.designer_start_date)}),S.jsx(en,{children:p(e.designer_end_date)}),S.jsxs(en,{children:[S.jsxs(vV,{value:s,onChange:m=>o(m.target.value),disabled:e.status==="취소",children:[S.jsx("option",{value:"",children:"디자이너 선택"}),t.map(m=>S.jsx("option",{value:m.name,children:m.name},m.id))]}),S.jsx(_V,{onClick:u,disabled:e.status==="취소",children:"배정"})]}),S.jsx(en,{children:e.status==="검수요청"&&e.manager_review_status!=="검수완료"?S.jsx(EV,{onClick:f,children:"완료"}):e.manager_review_status==="검수완료"?S.jsx(SV,{children:"완료"}):""})]})}const _V=ie.button`
  margin-left: 10px;
  margin-top: 6px;
  padding: 6px 10px;
  background: #073863;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`,vV=ie.select`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,EV=ie.button`
  padding: 6px 12px;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`,TV=ie.tr`
  ${({isCanceled:r})=>r&&`
      td {
        text-decoration: line-through;
        color: gray;
      }
    `}
`,en=ie.td`
  padding: 5px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
`,SV=ie.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`,wV=ie.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
`;function AV({data:r,designerList:e,selectedDesigners:t,designerSelect:s,assignDesigner:o,sendToRequester:u}){return S.jsxs(bV,{children:[S.jsx(RV,{children:"매니저 요청 리스트"}),S.jsxs("colgroup",{children:[S.jsx("col",{style:{width:"50px"}}),S.jsx("col",{style:{width:"80px"}}),S.jsx("col",{style:{width:"60px"}}),S.jsx("col",{style:{width:"60px"}}),S.jsx("col",{style:{width:"60px"}}),S.jsx("col",{style:{width:"60px"}}),S.jsx("col",{style:{width:"80px"}}),S.jsx("col",{style:{width:"120px"}}),S.jsx("col",{}),S.jsx("col",{}),S.jsx("col",{}),S.jsx("col",{style:{width:"80px"}}),S.jsx("col",{}),S.jsx("col",{style:{width:"60px"}}),S.jsx("col",{style:{width:"60px"}}),S.jsx("col",{style:{width:"180px"}}),S.jsx("col",{style:{width:"60px"}})]}),S.jsx("thead",{children:S.jsxs("tr",{children:[S.jsx(tn,{children:"NO"}),S.jsx(tn,{children:"문서번호"}),S.jsx(tn,{children:"요청일"}),S.jsx(tn,{children:"요청자"}),S.jsxs(tn,{children:["완료",S.jsx("br",{}),"요청일"]}),S.jsx(tn,{children:"오픈일"}),S.jsx(tn,{children:"업무형태"}),S.jsx(tn,{children:"업무타입"}),S.jsx(tn,{children:"작업항목"}),S.jsx(tn,{children:"기획안 URL"}),S.jsx(tn,{children:"메모"}),S.jsx(tn,{children:"진행상태"}),S.jsx(tn,{children:"산출물 URL"}),S.jsxs(tn,{children:["디자인",S.jsx("br",{}),"시작일"]}),S.jsxs(tn,{children:["디자인",S.jsx("br",{}),"종료일"]}),S.jsx(tn,{children:"배정"}),S.jsx(tn,{children:"검수"})]})}),S.jsx("tbody",{children:r.length>0?r.map((f,p)=>S.jsx(yV,{index:p+1,item:f,designerList:e,selectedDesigner:t[f.id]||"",onDesignerSelect:m=>s(f.id,m),onAssignDesigner:()=>o(f.id),onSendToRequester:()=>u(f.id)},f.id)):S.jsx("tr",{children:S.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})}const bV=ie.table`
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
`,RV=ie.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,tn=ie.th`
  border-bottom: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.white02};
`;function IV(){const[r,e]=F.useState([]),[t,s]=F.useState([]),[o,u]=F.useState({});F.useEffect(()=>{const g=Ra(Ti(kt,"design_request"),wy("design_request_id","asc")),_=ld(g,T=>{const A=T.docs.map(N=>({id:N.id,...N.data()}));e(A)});return()=>_()},[]),F.useEffect(()=>{(async()=>{const _=Ra(Ti(kt,"users"),Ia("role","==",2)),A=(await iA(_)).docs.map(N=>({id:N.id,...N.data()}));s(A)})()},[]);const f=(g,_)=>{u(T=>({...T,[g]:_}))},p=async g=>{const _=o[g];if(!_){alert("디자이너를 선택하세요.");return}const T=hr(kt,"design_request",g);await ya(T,{assigned_designer:_}),alert("디자이너가 배정되었습니다!"),e(A=>A.map(N=>N.id===g?{...N,assigned_designer:_}:N))},m=async g=>{await ya(hr(kt,"design_request",g),{manager_review_status:"검수완료",status:"검수중"}),e(_=>_.map(T=>T.id===g?{...T,manager_review_status:"검수완료",status:"검수중"}:T)),alert("요청자에게 전달되었습니다.")};return S.jsxs(xV,{children:[S.jsx(CV,{children:"매니저 요청리스트"}),S.jsx(AV,{data:r,designerList:t,selectedDesigners:o,designerSelect:f,assignDesigner:p,sendToRequester:m})]})}const xV=ie.div``,CV=ie.h2`
  margin-bottom: 20px;
`;function DV({userRole:r,setIsDrawerOpen:e,setEditData:t}){const s=()=>{if(r===1)return S.jsx(oV,{setIsDrawerOpen:e,setEditData:t});if(r===2)return S.jsx(pV,{});if(r===3)return S.jsx(IV,{})};return S.jsx(NV,{children:s()})}const NV=ie.main``,OV="./assets/aside-logo-DoEwMgfJ.svg",MV="./assets/myrequest-icon-DhmqrZY6.svg";function VV({item:r}){return S.jsxs(PV,{status:r.status,children:[S.jsx(kV,{children:r.status}),S.jsx(LV,{status:r.status,children:r.count})]})}const PV=ie.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20.5px 44px 20.5px 28px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-family: 'Pretendard';
  color: ${({theme:r})=>r.colors.black};

  background-color: ${({status:r,theme:e})=>{switch(r){case"대기중":return e.colors.beige;case"작업중":return e.colors.lightpupple;case"완료":return e.colors.gray04;default:return"#f9f9f9"}}};
`,kV=ie.span`
  font-size: 16px;
  font-weight: 500;
`,LV=ie.span`
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

    background-color: ${({status:r,theme:e})=>{switch(r){case"대기중":return e.colors.orange;case"작업중":return e.colors.blue;case"완료":return e.colors.gray02;default:return e.colors.gray03}}};
  }
`;function UV({requests:r,role:e,onRequestButtonClick:t}){const s=[{status:"대기중",count:r.filter(u=>u.status==="대기").length},{status:"작업중",count:r.filter(u=>u.status==="진행중").length},{status:"완료",count:r.filter(u=>u.status==="완료").length}],o=u=>{switch(u){case 1:return"나의 요청";case 2:return"나의 작업 현황";case 3:return"전체 요청 현황";default:return"요청 현황"}};return S.jsxs(jV,{children:[S.jsxs(zV,{children:[S.jsx(qV,{src:OV}),S.jsx(BV,{children:"업무 관리시스템"})]}),e===1&&S.jsx(HV,{children:S.jsx(FV,{onClick:t,children:"디자인 요청 등록"})}),S.jsxs(GV,{children:[S.jsxs($V,{children:[S.jsx(QV,{src:MV}),S.jsx(YV,{children:o(e)})]}),S.jsx(KV,{children:s.map(u=>S.jsx(VV,{item:u},u.status))})]})]})}const jV=ie.aside`
  height: 100%;
  border-right: 1px solid ${({theme:r})=>r.colors.black};
`,zV=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  padding: 19.5px 23px;
  border-bottom: 1px solid ${({theme:r})=>r.colors.gray02};
`,qV=ie.img`
  margin-right: 8px;
`,BV=ie.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
  white-space: nowrap;
`,HV=ie.div`
  padding: 32px 20px;
  border-bottom: 1px solid ${({theme:r})=>r.colors.gray02};
`,FV=ie.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
  white-space: nowrap;
`,GV=ie.div`
  padding: 0 24px;
`,$V=ie.div`
  ${({theme:r})=>r.mixin.flex("center")};
  gap: 12px;
  padding: 30px 0;
`,QV=ie.img``,YV=ie.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
`,KV=ie.ul`
  ${({theme:r})=>r.mixin.flex("center")};
  flex-direction: column;
`;function XV({isOpen:r,onClose:e,children:t}){return S.jsxs(S.Fragment,{children:[S.jsx(WV,{isVisible:r,onClick:e}),S.jsx(ZV,{isVisible:r,onClick:s=>s.stopPropagation(),children:t})]})}const WV=ie.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({isVisible:r})=>r?1:0};
  pointer-events: ${({isVisible:r})=>r?"auto":"none"};
  transition: opacity 0.3s ease;
`,ZV=ie.div`
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
`,JV="./assets/requestformexit-button-BcAG546a.svg",eP="./assets/checkbox-checked-eOVFoR8b.svg",tP="./assets/selectbox-arrow-BwC8UGU0.svg",Mm={completion_dt:"",open_dt:"",task_form:"GHS",task_type:"프론트테마",requirement:"",url:"",note:"",emergency:!1};function nP({userName:r,editData:e,isDrawerOpen:t,onClose:s}){const o=(e==null?void 0:e.requester_edit_state)===!0,[u,f]=F.useState(Mm),p=(T,A)=>{f(N=>({...N,[T]:A}))},m=T=>T?nt.fromDate(new Date(T)):null,g=async()=>{const T=new Date,A=T.getFullYear().toString().slice(2),N=(T.getMonth()+1).toString().padStart(2,"0"),U=Ra(Ti(kt,"design_request"),Ia("design_request_id",">=",`H${A}${N}000`),Ia("design_request_id","<",`H${A}${N}999`)),B=(await iA(U)).size+1;return`H${A}${N}${B.toString().padStart(3,"0")}`},_=async T=>{if(T.preventDefault(),!u.requirement){alert("요청 내용을 입력하세요.");return}if(o&&(e!=null&&e.id)){await ya(hr(kt,"design_request",e.id),{completion_dt:m(u.completion_dt),open_dt:m(u.open_dt),task_form:u.task_form,task_type:u.task_type,requirement:u.requirement,url:u.url,note:u.note,emergency:u.emergency,requester_edit_state:!1,updated_at:BT()}),alert("요청이 수정되었습니다!"),s();return}const A=new Date;wM(Ti(kt,"design_request"),{design_request_id:await g(),request_date:m(A.toISOString()),requester:r,completion_dt:m(u.completion_dt),open_dt:m(u.open_dt),task_form:u.task_form,task_type:u.task_type,requirement:u.requirement,url:u.url,note:u.note,status:"대기",assigned_designer:"미배정",requester_review_status:"검수대기",manager_review_status:"",result_url:"",designer_start_date:null,designer_end_date:null,emergency:u.emergency,requester_edit_state:!1,designer_edit_state:!1,created_at:BT(),updated_at:null,delete_at:null}).then(()=>{alert("요청이 등록되었습니다!"),f(Mm),s()}).catch(N=>{alert("등록 중 오류가 발생했습니다: "+N.message)})};return F.useEffect(()=>{o&&e&&f({completion_dt:e.completion_dt?e.completion_dt.toDate().toISOString().slice(0,10):"",open_dt:e.open_dt?e.open_dt.toDate().toISOString().slice(0,10):"",task_form:e.task_form??"GHS",task_type:e.task_type??"프론트테마",requirement:e.requirement??"",url:e.url??"",note:e.note??"",emergency:e.emergency??!1})},[o,e]),F.useEffect(()=>{!t||o||f(Mm)},[t]),S.jsxs(S.Fragment,{children:[S.jsxs(iP,{children:[S.jsx(sP,{children:o?"디자인 요청 수정":"디자인 요청 등록"}),S.jsx(aP,{type:"button",onClick:s})]}),S.jsxs(rP,{onSubmit:_,children:[S.jsxs(oP,{children:[S.jsx(lP,{children:"디자인 요청 등록"}),S.jsx("colgroup",{children:S.jsx("col",{style:{width:"120px"}})}),S.jsxs("tbody",{children:[S.jsxs("tr",{children:[S.jsx(di,{children:"문서번호"}),S.jsx(pi,{children:o?e==null?void 0:e.design_request_id:""})]}),S.jsxs("tr",{children:[S.jsx(di,{children:S.jsx(is,{htmlFor:"completion_dt",children:"완료 요청일"})}),S.jsx(pi,{children:S.jsx(HT,{type:"date",id:"completion_dt",value:u.completion_dt,onChange:T=>p("completion_dt",T.target.value)})})]}),S.jsxs("tr",{children:[S.jsx(di,{children:S.jsx(is,{htmlFor:"open_dt",children:"오픈일"})}),S.jsx(pi,{children:S.jsx(HT,{type:"date",id:"open_dt",value:u.open_dt,onChange:T=>p("open_dt",T.target.value)})})]}),S.jsxs("tr",{children:[S.jsx(di,{children:S.jsx(is,{htmlFor:"task_form",children:"업무 형태"})}),S.jsx(pi,{children:S.jsxs(GT,{id:"task_form",value:u.task_form,onChange:T=>p("task_form",T.target.value),children:[S.jsx("option",{value:"GHS",children:"GHS"}),S.jsx("option",{value:"MHC",children:"MHC"}),S.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),S.jsxs("tr",{children:[S.jsx(di,{children:S.jsx(is,{htmlFor:"task_type",children:"업무 유형"})}),S.jsx(pi,{children:S.jsxs(GT,{id:"task_type",value:u.task_type,onChange:T=>p("task_type",T.target.value),children:[S.jsx("option",{value:"프론트테마",children:"프론트테마"}),S.jsx("option",{value:"별도기획전",children:"별도기획전"}),S.jsx("option",{value:"일자별배너",children:"일자별배너"}),S.jsx("option",{value:"핫새배너",children:"핫새배너"}),S.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),S.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),S.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),S.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),S.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),S.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),S.jsx("option",{value:"상품상세",children:"상품상세"}),S.jsx("option",{value:"제휴",children:"제휴"}),S.jsx("option",{value:"클럽",children:"클럽"}),S.jsx("option",{value:"팝업",children:"팝업"}),S.jsx("option",{value:"푸시",children:"푸시"}),S.jsx("option",{value:"홈테마",children:"홈테마"}),S.jsx("option",{value:"즉시배송",children:"즉시배송"}),S.jsx("option",{value:"트레이딩",children:"트레이딩"}),S.jsx("option",{value:"이벤트",children:"이벤트"}),S.jsx("option",{value:"기타",children:"기타"})]})})]}),S.jsxs("tr",{children:[S.jsx(di,{children:S.jsx(is,{htmlFor:"requirement",children:"작업 항목"})}),S.jsx(pi,{children:S.jsx(FT,{type:"text",id:"requirement",value:u.requirement,onChange:T=>p("requirement",T.target.value),placeholder:"작업 항목을 입력하세요."})})]}),S.jsxs("tr",{children:[S.jsx(di,{children:S.jsx(is,{htmlFor:"emergency",children:"긴급 일정"})}),S.jsx(pi,{children:S.jsx(cP,{children:S.jsxs(hP,{htmlFor:"emergency",children:[S.jsx(fP,{type:"checkbox",id:"emergency",checked:u.emergency,onChange:T=>p("emergency",T.target.checked)}),S.jsx(dP,{}),S.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),S.jsxs("tr",{children:[S.jsx(di,{children:S.jsx(is,{htmlFor:"url",children:"요청서 URL"})}),S.jsx(pi,{children:S.jsx(uP,{id:"url",value:u.url,onChange:T=>p("url",T.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),S.jsxs("tr",{children:[S.jsx(di,{children:S.jsx(is,{htmlFor:"note",children:"메모"})}),S.jsx(pi,{children:S.jsx(FT,{type:"input",id:"note",value:u.note,onChange:T=>p("note",T.target.value),placeholder:"메모를 입력하세요."})})]})]})]}),S.jsx(pP,{children:S.jsx(mP,{type:"submit",children:o?"수정 완료":"등록하기"})})]})]})}const rP=ie.form`
  font-family: 'Pretendard';
`,iP=ie.div`
  ${({theme:r})=>r.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,sP=ie.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
  letter-spacing: -0.48px;
`,aP=ie.button`
  width: 24px;
  height: 24px;
  background: url(${JV}) no-repeat center;
  background-size: contain;
`,oP=ie.table`
  width: 100%;
  color: ${({theme:r})=>r.colors.black};
  border-top: 1px solid ${({theme:r})=>r.colors.black};
`,lP=ie.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,di=ie.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-left: none;
  background-color: ${({theme:r})=>r.colors.gray04};
`,pi=ie.td`
  padding: 12px 24px;
  border-right: none;
`,is=ie.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`,HT=ie.input`
  width: 168px;
  padding: 6px 12px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,FT=ie.input`
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,uP=ie.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,cP=ie.div`
  ${({theme:r})=>r.mixin.flex("center")};
  gap: 5px;
`,hP=ie.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,fP=ie.input`
  display: none;

  &:checked + span {
    background-color: ${({theme:r})=>r.colors.black};
    background-image: url(${eP}); // 체크 이미지 경로
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`,dP=ie.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-radius: 2px;
`,GT=ie.select`
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
  background-image: url(${tP}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:r})=>r.colors.black};
  }
`,pP=ie.div`
  text-align: center;
`,mP=ie.button`
  margin-top: 24px;
  padding: 13.5px 32.5px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 15px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
`;function gP(){const[r,e]=F.useState(0),[t,s]=F.useState([]),[o,u]=F.useState(""),[f,p]=F.useState(!1),[m,g]=F.useState();return F.useEffect(()=>{const _=Uf(xa,async T=>{if(T){u(T.displayName||"");const A=await Ay(hr(kt,"users",T.uid));if(A.exists()){const U=A.data().role,$=T.displayName;e(U);let B;U===1?B=Ra(Ti(kt,"design_request"),Ia("requester","==",$)):U===2?B=Ra(Ti(kt,"design_request"),Ia("assigned_designer","==",$)):B=Ti(kt,"design_request"),ld(B,J=>{const X=J.docs.map(re=>({status:re.data().status||"대기중"}));s(X)})}}else e(0),u(""),s([])});return()=>_()},[]),S.jsxs(yP,{children:[S.jsx(UV,{requests:t,role:r,onRequestButtonClick:()=>p(!0)}),S.jsxs(_P,{children:[S.jsx(jM,{}),S.jsx(DV,{userRole:r,setIsDrawerOpen:p,setEditData:g})]}),S.jsx(XV,{isOpen:f,onClose:()=>{g(void 0),p(!1)},children:S.jsx(nP,{userName:o,isDrawerOpen:f,onClose:()=>{g(void 0),p(!1)},editData:m})})]})}const yP=ie.div`
  ${({theme:r})=>r.mixin.flex()};
  width: 100%;
  height: 100%;
`,_P=ie.div`
  flex: 1;
`;function vP(){const[r,e]=F.useState(""),[t,s]=F.useState(""),[o,u]=F.useState(""),[f,p]=F.useState(""),m=$u(),g=async()=>{if(o!==f){alert("비밀번호가 일치하지 않습니다.");return}QD(xa,t,o).then(async _=>{const T=_.user;await XD(T,{displayName:r}),await SM(hr(kt,"users",T.uid),{name:r,role:2,createdAt:new Date})}).then(()=>{alert("회원가입이 완료되었습니다!"),m("/")}).catch(_=>{alert("회원가입 중 오류 발생: "+_.message)})};return S.jsx(EP,{children:S.jsxs(TP,{children:[S.jsxs(SP,{children:[S.jsx(wP,{children:"PDMS"}),S.jsx(AP,{children:"Pushcomz Design Management System"})]}),S.jsx(bP,{children:S.jsx(RP,{src:aA})}),S.jsxs(IP,{children:[S.jsx(xP,{type:"text",value:r,onChange:_=>e(_.target.value),placeholder:"이름을 입력해주세요."}),S.jsx(CP,{type:"text",value:t,onChange:_=>s(_.target.value),placeholder:"이메일을 입력해주세요."}),S.jsx(DP,{type:"password",value:o,onChange:_=>u(_.target.value),placeholder:"비밀번호를 입력해주세요."}),S.jsx(NP,{type:"password",value:f,onChange:_=>p(_.target.value),placeholder:"비밀번호 확인을 입력해주세요."})]}),S.jsx(OP,{onClick:g,children:"등록하기"})]})})}const EP=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:r})=>r.colors.gray01};
`,TP=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:r})=>r.colors.white01};
`,SP=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,wP=ie.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.navy};
`,AP=ie.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,bP=ie.div`
  margin-right: auto;
`,RP=ie.img`
  
`,IP=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  gap: 10px;
`,xP=ie.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,CP=ie.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,DP=ie.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,NP=ie.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,OP=ie.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:r})=>r.colors.white01};
`;function MP(){const[r,e]=F.useState(!1);return S.jsx(tI,{basename:"/pdms-test",children:S.jsxs(OR,{children:[S.jsx(jh,{path:"/",element:S.jsx(bM,{onLoginSuccess:()=>e(!0)})}),S.jsx(jh,{path:"/dashboard",element:r?S.jsx(gP,{}):S.jsx(DR,{to:"/"})}),S.jsx(jh,{path:"/signup",element:S.jsx(vP,{})})]})})}const VP="/assets/Pretendard-Bold-C0IAtCzs.woff2",PP="/assets/Pretendard-Medium-BCuOcOjL.woff2",kP="/assets/Pretendard-Regular-BnvhP503.woff2",LP=fx`
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
    src: url(${VP}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PP}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${kP}) format('woff2');
    font-weight: 400;
  }

`,UP={white01:"#fff",white02:"#f4f4f4",red:"#eb193a",navy:"#073863",beige:"#fff4ea",orange:"#f88017",lightpupple:"#eaedfa",blue:"#4f76ff",gray01:"#ECEDF0",gray02:"#ccc",gray03:"#bdbdbd",gray04:"#f4f4f4",black:"#212121"},jP={flex:(r="flex-start",e="flex-start")=>`
    display: flex;
    align-items: ${r};
    justify-content: ${e}
  `},zP={colors:UP,mixin:jP};qb.createRoot(document.getElementById("root")).render(S.jsx(F.StrictMode,{children:S.jsxs(ux,{theme:zP,children:[S.jsx(MP,{}),S.jsx(LP,{})]})}));
