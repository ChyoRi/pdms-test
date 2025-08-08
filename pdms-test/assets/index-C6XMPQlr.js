(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Ib(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var um={exports:{}},du={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LE;function Cb(){if(LE)return du;LE=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:h,ref:o!==void 0?o:null,props:u}}return du.Fragment=e,du.jsx=t,du.jsxs=t,du}var UE;function xb(){return UE||(UE=1,um.exports=Cb()),um.exports}var T=xb(),cm={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jE;function Db(){if(jE)return xe;jE=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function A(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,$={};function H(O,ne,ae){this.props=O,this.context=ne,this.refs=$,this.updater=ae||N}H.prototype.isReactComponent={},H.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},H.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function J(){}J.prototype=H.prototype;function X(O,ne,ae){this.props=O,this.context=ne,this.refs=$,this.updater=ae||N}var re=X.prototype=new J;re.constructor=X,U(re,H.prototype),re.isPureReactComponent=!0;var he=Array.isArray,ue={H:null,A:null,T:null,S:null,V:null},de=Object.prototype.hasOwnProperty;function x(O,ne,ae,se,ge,Ie){return ae=Ie.ref,{$$typeof:r,type:O,key:ne,ref:ae!==void 0?ae:null,props:Ie}}function R(O,ne){return x(O.type,ne,void 0,void 0,void 0,O.props)}function I(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function V(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return ne[ae]})}var P=/\/+/g;function L(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):ne.toString(36)}function D(){}function Dt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(D,D):(O.status="pending",O.then(function(ne){O.status==="pending"&&(O.status="fulfilled",O.value=ne)},function(ne){O.status==="pending"&&(O.status="rejected",O.reason=ne)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function at(O,ne,ae,se,ge){var Ie=typeof O;(Ie==="undefined"||Ie==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(Ie){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case r:case e:ve=!0;break;case _:return ve=O._init,at(ve(O._payload),ne,ae,se,ge)}}if(ve)return ge=ge(O),ve=se===""?"."+L(O,0):se,he(ge)?(ae="",ve!=null&&(ae=ve.replace(P,"$&/")+"/"),at(ge,ne,ae,"",function(Lt){return Lt})):ge!=null&&(I(ge)&&(ge=R(ge,ae+(ge.key==null||O&&O.key===ge.key?"":(""+ge.key).replace(P,"$&/")+"/")+ve)),ne.push(ge)),1;ve=0;var ct=se===""?".":se+":";if(he(O))for(var Be=0;Be<O.length;Be++)se=O[Be],Ie=ct+L(se,Be),ve+=at(se,ne,ae,Ie,ge);else if(Be=A(O),typeof Be=="function")for(O=Be.call(O),Be=0;!(se=O.next()).done;)se=se.value,Ie=ct+L(se,Be++),ve+=at(se,ne,ae,Ie,ge);else if(Ie==="object"){if(typeof O.then=="function")return at(Dt(O),ne,ae,se,ge);throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Q(O,ne,ae){if(O==null)return O;var se=[],ge=0;return at(O,se,"","",function(Ie){return ne.call(ae,Ie,ge++)}),se}function le(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var me=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ce(){}return xe.Children={map:Q,forEach:function(O,ne,ae){Q(O,function(){ne.apply(this,arguments)},ae)},count:function(O){var ne=0;return Q(O,function(){ne++}),ne},toArray:function(O){return Q(O,function(ne){return ne})||[]},only:function(O){if(!I(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},xe.Component=H,xe.Fragment=t,xe.Profiler=o,xe.PureComponent=X,xe.StrictMode=s,xe.Suspense=m,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ue,xe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return ue.H.useMemoCache(O)}},xe.cache=function(O){return function(){return O.apply(null,arguments)}},xe.cloneElement=function(O,ne,ae){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var se=U({},O.props),ge=O.key,Ie=void 0;if(ne!=null)for(ve in ne.ref!==void 0&&(Ie=void 0),ne.key!==void 0&&(ge=""+ne.key),ne)!de.call(ne,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&ne.ref===void 0||(se[ve]=ne[ve]);var ve=arguments.length-2;if(ve===1)se.children=ae;else if(1<ve){for(var ct=Array(ve),Be=0;Be<ve;Be++)ct[Be]=arguments[Be+2];se.children=ct}return x(O.type,ge,void 0,void 0,Ie,se)},xe.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},xe.createElement=function(O,ne,ae){var se,ge={},Ie=null;if(ne!=null)for(se in ne.key!==void 0&&(Ie=""+ne.key),ne)de.call(ne,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ge[se]=ne[se]);var ve=arguments.length-2;if(ve===1)ge.children=ae;else if(1<ve){for(var ct=Array(ve),Be=0;Be<ve;Be++)ct[Be]=arguments[Be+2];ge.children=ct}if(O&&O.defaultProps)for(se in ve=O.defaultProps,ve)ge[se]===void 0&&(ge[se]=ve[se]);return x(O,Ie,void 0,void 0,null,ge)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(O){return{$$typeof:p,render:O}},xe.isValidElement=I,xe.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:le}},xe.memo=function(O,ne){return{$$typeof:g,type:O,compare:ne===void 0?null:ne}},xe.startTransition=function(O){var ne=ue.T,ae={};ue.T=ae;try{var se=O(),ge=ue.S;ge!==null&&ge(ae,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(Ce,me)}catch(Ie){me(Ie)}finally{ue.T=ne}},xe.unstable_useCacheRefresh=function(){return ue.H.useCacheRefresh()},xe.use=function(O){return ue.H.use(O)},xe.useActionState=function(O,ne,ae){return ue.H.useActionState(O,ne,ae)},xe.useCallback=function(O,ne){return ue.H.useCallback(O,ne)},xe.useContext=function(O){return ue.H.useContext(O)},xe.useDebugValue=function(){},xe.useDeferredValue=function(O,ne){return ue.H.useDeferredValue(O,ne)},xe.useEffect=function(O,ne,ae){var se=ue.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(O,ne)},xe.useId=function(){return ue.H.useId()},xe.useImperativeHandle=function(O,ne,ae){return ue.H.useImperativeHandle(O,ne,ae)},xe.useInsertionEffect=function(O,ne){return ue.H.useInsertionEffect(O,ne)},xe.useLayoutEffect=function(O,ne){return ue.H.useLayoutEffect(O,ne)},xe.useMemo=function(O,ne){return ue.H.useMemo(O,ne)},xe.useOptimistic=function(O,ne){return ue.H.useOptimistic(O,ne)},xe.useReducer=function(O,ne,ae){return ue.H.useReducer(O,ne,ae)},xe.useRef=function(O){return ue.H.useRef(O)},xe.useState=function(O){return ue.H.useState(O)},xe.useSyncExternalStore=function(O,ne,ae){return ue.H.useSyncExternalStore(O,ne,ae)},xe.useTransition=function(){return ue.H.useTransition()},xe.version="19.1.0",xe}var zE;function _g(){return zE||(zE=1,cm.exports=Db()),cm.exports}var G=_g();const or=Ib(G);var hm={exports:{}},pu={},fm={exports:{}},dm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qE;function Nb(){return qE||(qE=1,function(r){function e(Q,le){var me=Q.length;Q.push(le);e:for(;0<me;){var Ce=me-1>>>1,O=Q[Ce];if(0<o(O,le))Q[Ce]=le,Q[me]=O,me=Ce;else break e}}function t(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var le=Q[0],me=Q.pop();if(me!==le){Q[0]=me;e:for(var Ce=0,O=Q.length,ne=O>>>1;Ce<ne;){var ae=2*(Ce+1)-1,se=Q[ae],ge=ae+1,Ie=Q[ge];if(0>o(se,me))ge<O&&0>o(Ie,se)?(Q[Ce]=Ie,Q[ge]=me,Ce=ge):(Q[Ce]=se,Q[ae]=me,Ce=ae);else if(ge<O&&0>o(Ie,me))Q[Ce]=Ie,Q[ge]=me,Ce=ge;else break e}}return le}function o(Q,le){var me=Q.sortIndex-le.sortIndex;return me!==0?me:Q.id-le.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],g=[],_=1,S=null,A=3,N=!1,U=!1,$=!1,H=!1,J=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function he(Q){for(var le=t(g);le!==null;){if(le.callback===null)s(g);else if(le.startTime<=Q)s(g),le.sortIndex=le.expirationTime,e(m,le);else break;le=t(g)}}function ue(Q){if($=!1,he(Q),!U)if(t(m)!==null)U=!0,de||(de=!0,L());else{var le=t(g);le!==null&&at(ue,le.startTime-Q)}}var de=!1,x=-1,R=5,I=-1;function V(){return H?!0:!(r.unstable_now()-I<R)}function P(){if(H=!1,de){var Q=r.unstable_now();I=Q;var le=!0;try{e:{U=!1,$&&($=!1,X(x),x=-1),N=!0;var me=A;try{t:{for(he(Q),S=t(m);S!==null&&!(S.expirationTime>Q&&V());){var Ce=S.callback;if(typeof Ce=="function"){S.callback=null,A=S.priorityLevel;var O=Ce(S.expirationTime<=Q);if(Q=r.unstable_now(),typeof O=="function"){S.callback=O,he(Q),le=!0;break t}S===t(m)&&s(m),he(Q)}else s(m);S=t(m)}if(S!==null)le=!0;else{var ne=t(g);ne!==null&&at(ue,ne.startTime-Q),le=!1}}break e}finally{S=null,A=me,N=!1}le=void 0}}finally{le?L():de=!1}}}var L;if(typeof re=="function")L=function(){re(P)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,Dt=D.port2;D.port1.onmessage=P,L=function(){Dt.postMessage(null)}}else L=function(){J(P,0)};function at(Q,le){x=J(function(){Q(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Q){Q.callback=null},r.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Q?Math.floor(1e3/Q):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_next=function(Q){switch(A){case 1:case 2:case 3:var le=3;break;default:le=A}var me=A;A=le;try{return Q()}finally{A=me}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(Q,le){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var me=A;A=Q;try{return le()}finally{A=me}},r.unstable_scheduleCallback=function(Q,le,me){var Ce=r.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Ce+me:Ce):me=Ce,Q){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=me+O,Q={id:_++,callback:le,priorityLevel:Q,startTime:me,expirationTime:O,sortIndex:-1},me>Ce?(Q.sortIndex=me,e(g,Q),t(m)===null&&Q===t(g)&&($?(X(x),x=-1):$=!0,at(ue,me-Ce))):(Q.sortIndex=O,e(m,Q),U||N||(U=!0,de||(de=!0,L()))),Q},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(Q){var le=A;return function(){var me=A;A=le;try{return Q.apply(this,arguments)}finally{A=me}}}}(dm)),dm}var BE;function Ob(){return BE||(BE=1,fm.exports=Nb()),fm.exports}var pm={exports:{}},un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HE;function Mb(){if(HE)return un;HE=1;var r=_g();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:m,containerInfo:g,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,un.createPortal=function(m,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,_)},un.flushSync=function(m){var g=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=g,s.p=_,s.d.f()}},un.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},un.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var _=g.as,S=p(_,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,N=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:A,fetchPriority:N}):_==="script"&&s.d.X(m,{crossOrigin:S,integrity:A,fetchPriority:N,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},un.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=p(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},un.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,S=p(_,g.crossOrigin);s.d.L(m,_,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},un.preloadModule=function(m,g){if(typeof m=="string")if(g){var _=p(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},un.requestFormReset=function(m){s.d.r(m)},un.unstable_batchedUpdates=function(m,g){return m(g)},un.useFormState=function(m,g,_){return h.H.useFormState(m,g,_)},un.useFormStatus=function(){return h.H.useHostTransitionStatus()},un.version="19.1.0",un}var FE;function Vb(){if(FE)return pm.exports;FE=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pm.exports=Mb(),pm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GE;function Pb(){if(GE)return pu;GE=1;var r=Ob(),e=_g(),t=Vb();function s(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function h(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(u(n)!==n)throw Error(s(188))}function m(n){var i=n.alternate;if(!i){if(i=u(n),i===null)throw Error(s(188));return i!==n?null:n}for(var a=n,l=i;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return p(f),n;if(d===l)return p(f),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=d;else{for(var E=!1,w=f.child;w;){if(w===a){E=!0,a=f,l=d;break}if(w===l){E=!0,l=f,a=d;break}w=w.sibling}if(!E){for(w=d.child;w;){if(w===a){E=!0,a=d,l=f;break}if(w===l){E=!0,l=d,a=f;break}w=w.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:i}function g(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=g(n),i!==null)return i;n=n.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),re=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function L(n){return n===null||typeof n!="object"?null:(n=P&&n[P]||n["@@iterator"],typeof n=="function"?n:null)}var D=Symbol.for("react.client.reference");function Dt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===D?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case H:return"Profiler";case $:return"StrictMode";case ue:return"Suspense";case de:return"SuspenseList";case I:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case N:return"Portal";case re:return(n.displayName||"Context")+".Provider";case X:return(n._context.displayName||"Context")+".Consumer";case he:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case x:return i=n.displayName||null,i!==null?i:Dt(n.type)||"Memo";case R:i=n._payload,n=n._init;try{return Dt(n(i))}catch{}}return null}var at=Array.isArray,Q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Ce=[],O=-1;function ne(n){return{current:n}}function ae(n){0>O||(n.current=Ce[O],Ce[O]=null,O--)}function se(n,i){O++,Ce[O]=n.current,n.current=i}var ge=ne(null),Ie=ne(null),ve=ne(null),ct=ne(null);function Be(n,i){switch(se(ve,i),se(Ie,n),se(ge,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?hE(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=hE(i),n=fE(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ae(ge),se(ge,n)}function Lt(){ae(ge),ae(Ie),ae(ve)}function Un(n){n.memoizedState!==null&&se(ct,n);var i=ge.current,a=fE(i,n.type);i!==a&&(se(Ie,n),se(ge,a))}function En(n){Ie.current===n&&(ae(ge),ae(Ie)),ct.current===n&&(ae(ct),lu._currentValue=me)}var an=Object.prototype.hasOwnProperty,xs=r.unstable_scheduleCallback,Ds=r.unstable_cancelCallback,sl=r.unstable_shouldYield,ac=r.unstable_requestPaint,jn=r.unstable_now,ud=r.unstable_getCurrentPriorityLevel,al=r.unstable_ImmediatePriority,Na=r.unstable_UserBlockingPriority,Ns=r.unstable_NormalPriority,cd=r.unstable_LowPriority,Oa=r.unstable_IdlePriority,ol=r.log,oc=r.unstable_setDisableYieldValue,dt=null,Qe=null;function Rn(n){if(typeof ol=="function"&&oc(n),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(dt,n)}catch{}}var on=Math.clz32?Math.clz32:Os,lc=Math.log,hd=Math.LN2;function Os(n){return n>>>=0,n===0?32:31-(lc(n)/hd|0)|0}var Ms=256,Vs=4194304;function tr(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ma(n,i,a){var l=n.pendingLanes;if(l===0)return 0;var f=0,d=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var w=l&134217727;return w!==0?(l=w&~d,l!==0?f=tr(l):(E&=w,E!==0?f=tr(E):a||(a=w&~n,a!==0&&(f=tr(a))))):(w=l&~d,w!==0?f=tr(w):E!==0?f=tr(E):a||(a=l&~n,a!==0&&(f=tr(a)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:f}function Ps(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function ll(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ul(){var n=Ms;return Ms<<=1,(Ms&4194048)===0&&(Ms=256),n}function cl(){var n=Vs;return Vs<<=1,(Vs&62914560)===0&&(Vs=4194304),n}function qr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Br(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function hl(n,i,a,l,f,d){var E=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var w=n.entanglements,C=n.expirationTimes,q=n.hiddenUpdates;for(a=E&~a;0<a;){var K=31-on(a),ee=1<<K;w[K]=0,C[K]=-1;var B=q[K];if(B!==null)for(q[K]=null,K=0;K<B.length;K++){var F=B[K];F!==null&&(F.lane&=-536870913)}a&=~ee}l!==0&&mr(n,l,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(E&~i))}function mr(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-on(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function fl(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-on(a),f=1<<l;f&i|n[l]&i&&(n[l]|=i),a&=~f}}function xi(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Va(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Di(){var n=le.p;return n!==0?n:(n=window.event,n===void 0?32:NE(n.type))}function uc(n,i){var a=le.p;try{return le.p=n,i()}finally{le.p=a}}var ot=Math.random().toString(36).slice(2),Nt="__reactFiber$"+ot,Tt="__reactProps$"+ot,zn="__reactContainer$"+ot,dl="__reactEvents$"+ot,fd="__reactListeners$"+ot,Ni="__reactHandles$"+ot,cc="__reactResources$"+ot,ks="__reactMarker$"+ot;function Oi(n){delete n[Nt],delete n[Tt],delete n[dl],delete n[fd],delete n[Ni]}function Hr(n){var i=n[Nt];if(i)return i;for(var a=n.parentNode;a;){if(i=a[zn]||a[Nt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=gE(n);n!==null;){if(a=n[Nt])return a;n=gE(n)}return i}n=a,a=n.parentNode}return null}function gr(n){if(n=n[Nt]||n[zn]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function yr(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(s(33))}function gn(n){var i=n[cc];return i||(i=n[cc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function yt(n){n[ks]=!0}var pl=new Set,Pa={};function nr(n,i){Fr(n,i),Fr(n+"Capture",i)}function Fr(n,i){for(Pa[n]=i,n=0;n<i.length;n++)pl.add(i[n])}var hc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fc={},Ls={};function dc(n){return an.call(Ls,n)?!0:an.call(fc,n)?!1:hc.test(n)?Ls[n]=!0:(fc[n]=!0,!1)}function Mi(n,i,a){if(dc(i))if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+a)}}function _r(n,i,a){if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+a)}}function $t(n,i,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(i,a,""+l)}}var Us,pc;function Gr(n){if(Us===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Us=i&&i[1]||"",pc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Us+n+pc}var ka=!1;function La(n,i){if(!n||ka)return"";ka=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(F){var B=F}Reflect.construct(n,[],ee)}else{try{ee.call()}catch(F){B=F}n.call(ee.prototype)}}else{try{throw Error()}catch(F){B=F}(ee=n())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(F){if(F&&B&&typeof F.stack=="string")return[F.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],w=d[1];if(E&&w){var C=E.split(`
`),q=w.split(`
`);for(f=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(l===C.length||f===q.length)for(l=C.length-1,f=q.length-1;1<=l&&0<=f&&C[l]!==q[f];)f--;for(;1<=l&&0<=f;l--,f--)if(C[l]!==q[f]){if(l!==1||f!==1)do if(l--,f--,0>f||C[l]!==q[f]){var K=`
`+C[l].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=l&&0<=f);break}}}finally{ka=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Gr(a):""}function ml(n){switch(n.tag){case 26:case 27:case 5:return Gr(n.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 15:return La(n.type,!1);case 11:return La(n.type.render,!1);case 1:return La(n.type,!0);case 31:return Gr("Activity");default:return""}}function Ua(n){try{var i="";do i+=ml(n),n=n.return;while(n);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function yn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function gl(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function dd(n){var i=gl(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ja(n){n._valueTracker||(n._valueTracker=dd(n))}function yl(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return n&&(l=gl(n)?n.checked?"true":"false":n.value),n=l,n!==a?(i.setValue(n),!0):!1}function js(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var pd=/[\n"\\]/g;function St(n){return n.replace(pd,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function In(n,i,a,l,f,d,E,w){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),i!=null?E==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+yn(i)):n.value!==""+yn(i)&&(n.value=""+yn(i)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),i!=null?Vi(n,E,yn(i)):a!=null?Vi(n,E,yn(a)):l!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+yn(w):n.removeAttribute("name")}function zs(n,i,a,l,f,d,E,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+yn(a):"",i=i!=null?""+yn(i):a,w||i===n.value||(n.value=i),n.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=w?n.checked:!!l,n.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Vi(n,i,a){i==="number"&&js(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function $r(n,i,a,l){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+yn(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function We(n,i,a){if(i!=null&&(i=""+yn(i),i!==n.value&&(n.value=i),a==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=a!=null?""+yn(a):""}function qs(n,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(at(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=yn(i),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function qn(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Bs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mc(n,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,a):typeof a!="number"||a===0||Bs.has(i)?i==="float"?n.cssFloat=a:n[i]=(""+a).trim():n[i]=a+"px"}function _l(n,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&a[f]!==l&&mc(n,f,l)}else for(var d in i)i.hasOwnProperty(d)&&mc(n,d,i[d])}function vl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var md=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function za(n){return gd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Yr=null;function Bn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Qr=null,Kr=null;function El(n){var i=gr(n);if(i&&(n=i.stateNode)){var a=n[Tt]||null;e:switch(n=i.stateNode,i.type){case"input":if(In(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+St(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==n&&l.form===n.form){var f=l[Tt]||null;if(!f)throw Error(s(90));In(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===n.form&&yl(l)}break e;case"textarea":We(n,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&$r(n,!!a.multiple,i,!1)}}}var vr=!1;function gc(n,i,a){if(vr)return n(i,a);vr=!0;try{var l=n(i);return l}finally{if(vr=!1,(Qr!==null||Kr!==null)&&(uh(),Qr&&(i=Qr,n=Kr,Kr=Qr=null,El(i),n)))for(i=0;i<n.length;i++)El(n[i])}}function Hs(n,i){var a=n.stateNode;if(a===null)return null;var l=a[Tt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hn=!1;if(rr)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){Hn=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{Hn=!1}var Er=null,Pi=null,Xr=null;function Tl(){if(Xr)return Xr;var n,i=Pi,a=i.length,l,f="value"in Er?Er.value:Er.textContent,d=f.length;for(n=0;n<a&&i[n]===f[n];n++);var E=a-n;for(l=1;l<=E&&i[a-l]===f[d-l];l++);return Xr=f.slice(n,1<l?1-l:void 0)}function Tr(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Sr(){return!0}function Sl(){return!1}function Ut(n){function i(a,l,f,d,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(a=n[w],this[w]=a?a(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Sr:Sl,this.isPropagationStopped=Sl,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),i}var Ge={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qa=Ut(Ge),Gs=_({},Ge,{view:0,detail:0}),yc=Ut(Gs),Ba,Ha,wr,$s=_({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ks,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wr&&(wr&&n.type==="mousemove"?(Ba=n.screenX-wr.screenX,Ha=n.screenY-wr.screenY):Ha=Ba=0,wr=n),Ba)},movementY:function(n){return"movementY"in n?n.movementY:Ha}}),Fn=Ut($s),_c=_({},$s,{dataTransfer:0}),yd=Ut(_c),Ys=_({},Gs,{relatedTarget:0}),Fa=Ut(Ys),wl=_({},Ge,{animationName:0,elapsedTime:0,pseudoElement:0}),Ga=Ut(wl),vc=_({},Ge,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),$a=Ut(vc),_d=_({},Ge,{data:0}),Al=Ut(_d),Qs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ec={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Tc[n])?!!i[n]:!1}function Ks(){return bl}var Sc=_({},Gs,{key:function(n){if(n.key){var i=Qs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Tr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ec[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ks,charCode:function(n){return n.type==="keypress"?Tr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Tr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ya=Ut(Sc),wc=_({},$s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rl=Ut(wc),Wr=_({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ks}),Ac=Ut(Wr),bc=_({},Ge,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rc=Ut(bc),Ic=_({},$s,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qa=Ut(Ic),_n=_({},Ge,{newState:0,oldState:0}),Cc=Ut(_n),xc=[9,13,27,32],Ar=rr&&"CompositionEvent"in window,c=null;rr&&"documentMode"in document&&(c=document.documentMode);var y=rr&&"TextEvent"in window&&!c,v=rr&&(!Ar||c&&8<c&&11>=c),b=" ",j=!1;function Y(n,i){switch(n){case"keyup":return xc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ue=!1;function Ot(n,i){switch(n){case"compositionend":return oe(i);case"keypress":return i.which!==32?null:(j=!0,b);case"textInput":return n=i.data,n===b&&j?null:n;default:return null}}function je(n,i){if(Ue)return n==="compositionend"||!Ar&&Y(n,i)?(n=Tl(),Xr=Pi=Er=null,Ue=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v&&i.locale!=="ko"?null:i.data;default:return null}}var jt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mt(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!jt[n.type]:i==="textarea"}function Zr(n,i,a,l){Qr?Kr?Kr.push(l):Kr=[l]:Qr=l,i=mh(i,"onChange"),0<i.length&&(a=new qa("onChange","change",null,a,l),n.push({event:a,listeners:i}))}var Yt=null,br=null;function Il(n){aE(n,0)}function Dc(n){var i=yr(n);if(yl(i))return n}function Iy(n,i){if(n==="change")return i}var Cy=!1;if(rr){var vd;if(rr){var Ed="oninput"in document;if(!Ed){var xy=document.createElement("div");xy.setAttribute("oninput","return;"),Ed=typeof xy.oninput=="function"}vd=Ed}else vd=!1;Cy=vd&&(!document.documentMode||9<document.documentMode)}function Dy(){Yt&&(Yt.detachEvent("onpropertychange",Ny),br=Yt=null)}function Ny(n){if(n.propertyName==="value"&&Dc(br)){var i=[];Zr(i,br,n,Bn(n)),gc(Il,i)}}function rA(n,i,a){n==="focusin"?(Dy(),Yt=i,br=a,Yt.attachEvent("onpropertychange",Ny)):n==="focusout"&&Dy()}function iA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Dc(br)}function sA(n,i){if(n==="click")return Dc(i)}function aA(n,i){if(n==="input"||n==="change")return Dc(i)}function oA(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Cn=typeof Object.is=="function"?Object.is:oA;function Cl(n,i){if(Cn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!an.call(i,f)||!Cn(n[f],i[f]))return!1}return!0}function Oy(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function My(n,i){var a=Oy(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=i&&l>=i)return{node:a,offset:i-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Oy(a)}}function Vy(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Vy(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Py(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=js(n.document);i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=js(n.document)}return i}function Td(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var lA=rr&&"documentMode"in document&&11>=document.documentMode,Ka=null,Sd=null,xl=null,wd=!1;function ky(n,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wd||Ka==null||Ka!==js(l)||(l=Ka,"selectionStart"in l&&Td(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),xl&&Cl(xl,l)||(xl=l,l=mh(Sd,"onSelect"),0<l.length&&(i=new qa("onSelect","select",null,i,a),n.push({event:i,listeners:l}),i.target=Ka)))}function Xs(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Xa={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionrun:Xs("Transition","TransitionRun"),transitionstart:Xs("Transition","TransitionStart"),transitioncancel:Xs("Transition","TransitionCancel"),transitionend:Xs("Transition","TransitionEnd")},Ad={},Ly={};rr&&(Ly=document.createElement("div").style,"AnimationEvent"in window||(delete Xa.animationend.animation,delete Xa.animationiteration.animation,delete Xa.animationstart.animation),"TransitionEvent"in window||delete Xa.transitionend.transition);function Ws(n){if(Ad[n])return Ad[n];if(!Xa[n])return n;var i=Xa[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ly)return Ad[n]=i[a];return n}var Uy=Ws("animationend"),jy=Ws("animationiteration"),zy=Ws("animationstart"),uA=Ws("transitionrun"),cA=Ws("transitionstart"),hA=Ws("transitioncancel"),qy=Ws("transitionend"),By=new Map,bd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bd.push("scrollEnd");function ir(n,i){By.set(n,i),nr(i,[n])}var Hy=new WeakMap;function Gn(n,i){if(typeof n=="object"&&n!==null){var a=Hy.get(n);return a!==void 0?a:(i={value:n,source:i,stack:Ua(i)},Hy.set(n,i),i)}return{value:n,source:i,stack:Ua(i)}}var $n=[],Wa=0,Rd=0;function Nc(){for(var n=Wa,i=Rd=Wa=0;i<n;){var a=$n[i];$n[i++]=null;var l=$n[i];$n[i++]=null;var f=$n[i];$n[i++]=null;var d=$n[i];if($n[i++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}d!==0&&Fy(a,f,d)}}function Oc(n,i,a,l){$n[Wa++]=n,$n[Wa++]=i,$n[Wa++]=a,$n[Wa++]=l,Rd|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Id(n,i,a,l){return Oc(n,i,a,l),Mc(n)}function Za(n,i){return Oc(n,null,null,i),Mc(n)}function Fy(n,i,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,d=n.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&i!==null&&(f=31-on(a),n=d.hiddenUpdates,l=n[f],l===null?n[f]=[i]:l.push(i),i.lane=a|536870912),d):null}function Mc(n){if(50<eu)throw eu=0,Mp=null,Error(s(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Ja={};function fA(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(n,i,a,l){return new fA(n,i,a,l)}function Cd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Jr(n,i){var a=n.alternate;return a===null?(a=xn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Gy(n,i){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Vc(n,i,a,l,f,d){var E=0;if(l=n,typeof n=="function")Cd(n)&&(E=1);else if(typeof n=="string")E=pb(n,a,ge.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case I:return n=xn(31,a,i,f),n.elementType=I,n.lanes=d,n;case U:return Zs(a.children,f,d,i);case $:E=8,f|=24;break;case H:return n=xn(12,a,i,f|2),n.elementType=H,n.lanes=d,n;case ue:return n=xn(13,a,i,f),n.elementType=ue,n.lanes=d,n;case de:return n=xn(19,a,i,f),n.elementType=de,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case J:case re:E=10;break e;case X:E=9;break e;case he:E=11;break e;case x:E=14;break e;case R:E=16,l=null;break e}E=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return i=xn(E,a,i,f),i.elementType=n,i.type=l,i.lanes=d,i}function Zs(n,i,a,l){return n=xn(7,n,l,i),n.lanes=a,n}function xd(n,i,a){return n=xn(6,n,null,i),n.lanes=a,n}function Dd(n,i,a){return i=xn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var eo=[],to=0,Pc=null,kc=0,Yn=[],Qn=0,Js=null,ei=1,ti="";function ea(n,i){eo[to++]=kc,eo[to++]=Pc,Pc=n,kc=i}function $y(n,i,a){Yn[Qn++]=ei,Yn[Qn++]=ti,Yn[Qn++]=Js,Js=n;var l=ei;n=ti;var f=32-on(l)-1;l&=~(1<<f),a+=1;var d=32-on(i)+f;if(30<d){var E=f-f%5;d=(l&(1<<E)-1).toString(32),l>>=E,f-=E,ei=1<<32-on(i)+f|a<<f|l,ti=d+n}else ei=1<<d|a<<f|l,ti=n}function Nd(n){n.return!==null&&(ea(n,1),$y(n,1,0))}function Od(n){for(;n===Pc;)Pc=eo[--to],eo[to]=null,kc=eo[--to],eo[to]=null;for(;n===Js;)Js=Yn[--Qn],Yn[Qn]=null,ti=Yn[--Qn],Yn[Qn]=null,ei=Yn[--Qn],Yn[Qn]=null}var vn=null,pt=null,Fe=!1,ta=null,Rr=!1,Md=Error(s(519));function na(n){var i=Error(s(418,""));throw Ol(Gn(i,n)),Md}function Yy(n){var i=n.stateNode,a=n.type,l=n.memoizedProps;switch(i[Nt]=n,i[Tt]=l,a){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(a=0;a<nu.length;a++)Ve(nu[a],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":Ve("invalid",i),zs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ja(i);break;case"select":Ve("invalid",i);break;case"textarea":Ve("invalid",i),qs(i,l.value,l.defaultValue,l.children),ja(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||cE(i.textContent,a)?(l.popover!=null&&(Ve("beforetoggle",i),Ve("toggle",i)),l.onScroll!=null&&Ve("scroll",i),l.onScrollEnd!=null&&Ve("scrollend",i),l.onClick!=null&&(i.onclick=gh),i=!0):i=!1,i||na(n)}function Qy(n){for(vn=n.return;vn;)switch(vn.tag){case 5:case 13:Rr=!1;return;case 27:case 3:Rr=!0;return;default:vn=vn.return}}function Dl(n){if(n!==vn)return!1;if(!Fe)return Qy(n),Fe=!0,!1;var i=n.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Kp(n.type,n.memoizedProps)),a=!a),a&&pt&&na(n),Qy(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(i===0){pt=ar(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;n=n.nextSibling}pt=null}}else i===27?(i=pt,Wi(n.type)?(n=Jp,Jp=null,pt=n):pt=i):pt=vn?ar(n.stateNode.nextSibling):null;return!0}function Nl(){pt=vn=null,Fe=!1}function Ky(){var n=ta;return n!==null&&(wn===null?wn=n:wn.push.apply(wn,n),ta=null),n}function Ol(n){ta===null?ta=[n]:ta.push(n)}var Vd=ne(null),ra=null,ni=null;function ki(n,i,a){se(Vd,i._currentValue),i._currentValue=a}function ri(n){n._currentValue=Vd.current,ae(Vd)}function Pd(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function kd(n,i,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var E=f.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=f;for(var C=0;C<i.length;C++)if(w.context===i[C]){d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),Pd(d.return,a,n),l||(E=null);break e}d=w.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),Pd(E,a,n),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===n){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Ml(n,i,a,l){n=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var w=f.type;Cn(f.pendingProps.value,E.value)||(n!==null?n.push(w):n=[w])}}else if(f===ct.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(lu):n=[lu])}f=f.return}n!==null&&kd(i,n,a,l),i.flags|=262144}function Lc(n){for(n=n.firstContext;n!==null;){if(!Cn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ia(n){ra=n,ni=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ln(n){return Xy(ra,n)}function Uc(n,i){return ra===null&&ia(n),Xy(n,i)}function Xy(n,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ni===null){if(n===null)throw Error(s(308));ni=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else ni=ni.next=i;return a}var dA=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},pA=r.unstable_scheduleCallback,mA=r.unstable_NormalPriority,Vt={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ld(){return{controller:new dA,data:new Map,refCount:0}}function Vl(n){n.refCount--,n.refCount===0&&pA(mA,function(){n.controller.abort()})}var Pl=null,Ud=0,no=0,ro=null;function gA(n,i){if(Pl===null){var a=Pl=[];Ud=0,no=zp(),ro={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ud++,i.then(Wy,Wy),i}function Wy(){if(--Ud===0&&Pl!==null){ro!==null&&(ro.status="fulfilled");var n=Pl;Pl=null,no=0,ro=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function yA(n,i){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var Zy=Q.S;Q.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&gA(n,i),Zy!==null&&Zy(n,i)};var sa=ne(null);function jd(){var n=sa.current;return n!==null?n:rt.pooledCache}function jc(n,i){i===null?se(sa,sa.current):se(sa,i.pool)}function Jy(){var n=jd();return n===null?null:{parent:Vt._currentValue,pool:n}}var kl=Error(s(460)),e_=Error(s(474)),zc=Error(s(542)),zd={then:function(){}};function t_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function qc(){}function n_(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(qc,qc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,i_(n),n;default:if(typeof i.status=="string")i.then(qc,qc);else{if(n=rt,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,i_(n),n}throw Ll=i,kl}}var Ll=null;function r_(){if(Ll===null)throw Error(s(459));var n=Ll;return Ll=null,n}function i_(n){if(n===kl||n===zc)throw Error(s(483))}var Li=!1;function qd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ui(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ji(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ke&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Mc(n),Fy(n,null,a),i}return Oc(n,l,i,a),Mc(n)}function Ul(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,fl(n,a)}}function Hd(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?f=d=i:d=d.next=i}else f=d=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}var Fd=!1;function jl(){if(Fd){var n=ro;if(n!==null)throw n}}function zl(n,i,a,l){Fd=!1;var f=n.updateQueue;Li=!1;var d=f.firstBaseUpdate,E=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var C=w,q=C.next;C.next=null,E===null?d=q:E.next=q,E=C;var K=n.alternate;K!==null&&(K=K.updateQueue,w=K.lastBaseUpdate,w!==E&&(w===null?K.firstBaseUpdate=q:w.next=q,K.lastBaseUpdate=C))}if(d!==null){var ee=f.baseState;E=0,K=q=C=null,w=d;do{var B=w.lane&-536870913,F=B!==w.lane;if(F?(ze&B)===B:(l&B)===B){B!==0&&B===no&&(Fd=!0),K!==null&&(K=K.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ae=n,Ee=w;B=i;var et=a;switch(Ee.tag){case 1:if(Ae=Ee.payload,typeof Ae=="function"){ee=Ae.call(et,ee,B);break e}ee=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=Ee.payload,B=typeof Ae=="function"?Ae.call(et,ee,B):Ae,B==null)break e;ee=_({},ee,B);break e;case 2:Li=!0}}B=w.callback,B!==null&&(n.flags|=64,F&&(n.flags|=8192),F=f.callbacks,F===null?f.callbacks=[B]:F.push(B))}else F={lane:B,tag:w.tag,payload:w.payload,callback:w.callback,next:null},K===null?(q=K=F,C=ee):K=K.next=F,E|=B;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;F=w,w=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);K===null&&(C=ee),f.baseState=C,f.firstBaseUpdate=q,f.lastBaseUpdate=K,d===null&&(f.shared.lanes=0),Yi|=E,n.lanes=E,n.memoizedState=ee}}function s_(n,i){if(typeof n!="function")throw Error(s(191,n));n.call(i)}function a_(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)s_(a[n],i)}var io=ne(null),Bc=ne(0);function o_(n,i){n=ci,se(Bc,n),se(io,i),ci=n|i.baseLanes}function Gd(){se(Bc,ci),se(io,io.current)}function $d(){ci=Bc.current,ae(io),ae(Bc)}var zi=0,Ne=null,Ze=null,wt=null,Hc=!1,so=!1,aa=!1,Fc=0,ql=0,ao=null,_A=0;function _t(){throw Error(s(321))}function Yd(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Cn(n[a],i[a]))return!1;return!0}function Qd(n,i,a,l,f,d){return zi=d,Ne=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Q.H=n===null||n.memoizedState===null?F_:G_,aa=!1,d=a(l,f),aa=!1,so&&(d=u_(i,a,l,f)),l_(n),d}function l_(n){Q.H=Xc;var i=Ze!==null&&Ze.next!==null;if(zi=0,wt=Ze=Ne=null,Hc=!1,ql=0,ao=null,i)throw Error(s(300));n===null||zt||(n=n.dependencies,n!==null&&Lc(n)&&(zt=!0))}function u_(n,i,a,l){Ne=n;var f=0;do{if(so&&(ao=null),ql=0,so=!1,25<=f)throw Error(s(301));if(f+=1,wt=Ze=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Q.H=bA,d=i(a,l)}while(so);return d}function vA(){var n=Q.H,i=n.useState()[0];return i=typeof i.then=="function"?Bl(i):i,n=n.useState()[0],(Ze!==null?Ze.memoizedState:null)!==n&&(Ne.flags|=1024),i}function Kd(){var n=Fc!==0;return Fc=0,n}function Xd(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function Wd(n){if(Hc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Hc=!1}zi=0,wt=Ze=Ne=null,so=!1,ql=Fc=0,ao=null}function Tn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ne.memoizedState=wt=n:wt=wt.next=n,wt}function At(){if(Ze===null){var n=Ne.alternate;n=n!==null?n.memoizedState:null}else n=Ze.next;var i=wt===null?Ne.memoizedState:wt.next;if(i!==null)wt=i,Ze=n;else{if(n===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));Ze=n,n={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},wt===null?Ne.memoizedState=wt=n:wt=wt.next=n}return wt}function Zd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bl(n){var i=ql;return ql+=1,ao===null&&(ao=[]),n=n_(ao,n,i),i=Ne,(wt===null?i.memoizedState:wt.next)===null&&(i=i.alternate,Q.H=i===null||i.memoizedState===null?F_:G_),n}function Gc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Bl(n);if(n.$$typeof===re)return ln(n)}throw Error(s(438,String(n)))}function Jd(n){var i=null,a=Ne.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Zd(),Ne.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),l=0;l<n;l++)a[l]=V;return i.index++,a}function ii(n,i){return typeof i=="function"?i(n):i}function $c(n){var i=At();return ep(i,Ze,n)}function ep(n,i,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=n.baseQueue,d=l.pending;if(d!==null){if(f!==null){var E=f.next;f.next=d.next,d.next=E}i.baseQueue=f=d,l.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{i=f.next;var w=E=null,C=null,q=i,K=!1;do{var ee=q.lane&-536870913;if(ee!==q.lane?(ze&ee)===ee:(zi&ee)===ee){var B=q.revertLane;if(B===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),ee===no&&(K=!0);else if((zi&B)===B){q=q.next,B===no&&(K=!0);continue}else ee={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(w=C=ee,E=d):C=C.next=ee,Ne.lanes|=B,Yi|=B;ee=q.action,aa&&a(d,ee),d=q.hasEagerState?q.eagerState:a(d,ee)}else B={lane:ee,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(w=C=B,E=d):C=C.next=B,Ne.lanes|=ee,Yi|=ee;q=q.next}while(q!==null&&q!==i);if(C===null?E=d:C.next=w,!Cn(d,n.memoizedState)&&(zt=!0,K&&(a=ro,a!==null)))throw a;n.memoizedState=d,n.baseState=E,n.baseQueue=C,l.lastRenderedState=d}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function tp(n){var i=At(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,d=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do d=n(d,E.action),E=E.next;while(E!==f);Cn(d,i.memoizedState)||(zt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function c_(n,i,a){var l=Ne,f=At(),d=Fe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var E=!Cn((Ze||f).memoizedState,a);E&&(f.memoizedState=a,zt=!0),f=f.queue;var w=d_.bind(null,l,f,n);if(Hl(2048,8,w,[n]),f.getSnapshot!==i||E||wt!==null&&wt.memoizedState.tag&1){if(l.flags|=2048,oo(9,Yc(),f_.bind(null,l,f,a,i),null),rt===null)throw Error(s(349));d||(zi&124)!==0||h_(l,i,a)}return a}function h_(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ne.updateQueue,i===null?(i=Zd(),Ne.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function f_(n,i,a,l){i.value=a,i.getSnapshot=l,p_(i)&&m_(n)}function d_(n,i,a){return a(function(){p_(i)&&m_(n)})}function p_(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Cn(n,a)}catch{return!0}}function m_(n){var i=Za(n,2);i!==null&&Vn(i,n,2)}function np(n){var i=Tn();if(typeof n=="function"){var a=n;if(n=a(),aa){Rn(!0);try{a()}finally{Rn(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:n},i}function g_(n,i,a,l){return n.baseState=a,ep(n,Ze,typeof l=="function"?l:ii)}function EA(n,i,a,l,f){if(Kc(n))throw Error(s(485));if(n=i.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};Q.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,y_(i,d)):(d.next=a.next,i.pending=a.next=d)}}function y_(n,i){var a=i.action,l=i.payload,f=n.state;if(i.isTransition){var d=Q.T,E={};Q.T=E;try{var w=a(f,l),C=Q.S;C!==null&&C(E,w),__(n,i,w)}catch(q){rp(n,i,q)}finally{Q.T=d}}else try{d=a(f,l),__(n,i,d)}catch(q){rp(n,i,q)}}function __(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){v_(n,i,l)},function(l){return rp(n,i,l)}):v_(n,i,a)}function v_(n,i,a){i.status="fulfilled",i.value=a,E_(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,y_(n,a)))}function rp(n,i,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,E_(i),i=i.next;while(i!==l)}n.action=null}function E_(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function T_(n,i){return i}function S_(n,i){if(Fe){var a=rt.formState;if(a!==null){e:{var l=Ne;if(Fe){if(pt){t:{for(var f=pt,d=Rr;f.nodeType!==8;){if(!d){f=null;break t}if(f=ar(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){pt=ar(f.nextSibling),l=f.data==="F!";break e}}na(l)}l=!1}l&&(i=a[0])}}return a=Tn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:T_,lastRenderedState:i},a.queue=l,a=q_.bind(null,Ne,l),l.dispatch=a,l=np(!1),d=lp.bind(null,Ne,!1,l.queue),l=Tn(),f={state:i,dispatch:null,action:n,pending:null},l.queue=f,a=EA.bind(null,Ne,f,d,a),f.dispatch=a,l.memoizedState=n,[i,a,!1]}function w_(n){var i=At();return A_(i,Ze,n)}function A_(n,i,a){if(i=ep(n,i,T_)[0],n=$c(ii)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Bl(i)}catch(E){throw E===kl?zc:E}else l=i;i=At();var f=i.queue,d=f.dispatch;return a!==i.memoizedState&&(Ne.flags|=2048,oo(9,Yc(),TA.bind(null,f,a),null)),[l,d,n]}function TA(n,i){n.action=i}function b_(n){var i=At(),a=Ze;if(a!==null)return A_(i,a,n);At(),i=i.memoizedState,a=At();var l=a.queue.dispatch;return a.memoizedState=n,[i,l,!1]}function oo(n,i,a,l){return n={tag:n,create:a,deps:l,inst:i,next:null},i=Ne.updateQueue,i===null&&(i=Zd(),Ne.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n),n}function Yc(){return{destroy:void 0,resource:void 0}}function R_(){return At().memoizedState}function Qc(n,i,a,l){var f=Tn();l=l===void 0?null:l,Ne.flags|=n,f.memoizedState=oo(1|i,Yc(),a,l)}function Hl(n,i,a,l){var f=At();l=l===void 0?null:l;var d=f.memoizedState.inst;Ze!==null&&l!==null&&Yd(l,Ze.memoizedState.deps)?f.memoizedState=oo(i,d,a,l):(Ne.flags|=n,f.memoizedState=oo(1|i,d,a,l))}function I_(n,i){Qc(8390656,8,n,i)}function C_(n,i){Hl(2048,8,n,i)}function x_(n,i){return Hl(4,2,n,i)}function D_(n,i){return Hl(4,4,n,i)}function N_(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function O_(n,i,a){a=a!=null?a.concat([n]):null,Hl(4,4,N_.bind(null,i,n),a)}function ip(){}function M_(n,i){var a=At();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Yd(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function V_(n,i){var a=At();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Yd(i,l[1]))return l[0];if(l=n(),aa){Rn(!0);try{n()}finally{Rn(!1)}}return a.memoizedState=[l,i],l}function sp(n,i,a){return a===void 0||(zi&1073741824)!==0?n.memoizedState=i:(n.memoizedState=a,n=Lv(),Ne.lanes|=n,Yi|=n,a)}function P_(n,i,a,l){return Cn(a,i)?a:io.current!==null?(n=sp(n,a,l),Cn(n,i)||(zt=!0),n):(zi&42)===0?(zt=!0,n.memoizedState=a):(n=Lv(),Ne.lanes|=n,Yi|=n,i)}function k_(n,i,a,l,f){var d=le.p;le.p=d!==0&&8>d?d:8;var E=Q.T,w={};Q.T=w,lp(n,!1,i,a);try{var C=f(),q=Q.S;if(q!==null&&q(w,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var K=yA(C,l);Fl(n,i,K,Mn(n))}else Fl(n,i,l,Mn(n))}catch(ee){Fl(n,i,{then:function(){},status:"rejected",reason:ee},Mn())}finally{le.p=d,Q.T=E}}function SA(){}function ap(n,i,a,l){if(n.tag!==5)throw Error(s(476));var f=L_(n).queue;k_(n,f,i,me,a===null?SA:function(){return U_(n),a(l)})}function L_(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:me},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function U_(n){var i=L_(n).next.queue;Fl(n,i,{},Mn())}function op(){return ln(lu)}function j_(){return At().memoizedState}function z_(){return At().memoizedState}function wA(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=Mn();n=Ui(a);var l=ji(i,n,a);l!==null&&(Vn(l,i,a),Ul(l,i,a)),i={cache:Ld()},n.payload=i;return}i=i.return}}function AA(n,i,a){var l=Mn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Kc(n)?B_(i,a):(a=Id(n,i,a,l),a!==null&&(Vn(a,n,l),H_(a,i,l)))}function q_(n,i,a){var l=Mn();Fl(n,i,a,l)}function Fl(n,i,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Kc(n))B_(i,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,w=d(E,a);if(f.hasEagerState=!0,f.eagerState=w,Cn(w,E))return Oc(n,i,f,0),rt===null&&Nc(),!1}catch{}finally{}if(a=Id(n,i,f,l),a!==null)return Vn(a,n,l),H_(a,i,l),!0}return!1}function lp(n,i,a,l){if(l={lane:2,revertLane:zp(),action:l,hasEagerState:!1,eagerState:null,next:null},Kc(n)){if(i)throw Error(s(479))}else i=Id(n,a,l,2),i!==null&&Vn(i,n,2)}function Kc(n){var i=n.alternate;return n===Ne||i!==null&&i===Ne}function B_(n,i){so=Hc=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function H_(n,i,a){if((a&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,fl(n,a)}}var Xc={readContext:ln,use:Gc,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t},F_={readContext:ln,use:Gc,useCallback:function(n,i){return Tn().memoizedState=[n,i===void 0?null:i],n},useContext:ln,useEffect:I_,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,Qc(4194308,4,N_.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Qc(4194308,4,n,i)},useInsertionEffect:function(n,i){Qc(4,2,n,i)},useMemo:function(n,i){var a=Tn();i=i===void 0?null:i;var l=n();if(aa){Rn(!0);try{n()}finally{Rn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(n,i,a){var l=Tn();if(a!==void 0){var f=a(i);if(aa){Rn(!0);try{a(i)}finally{Rn(!1)}}}else f=i;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=AA.bind(null,Ne,n),[l.memoizedState,n]},useRef:function(n){var i=Tn();return n={current:n},i.memoizedState=n},useState:function(n){n=np(n);var i=n.queue,a=q_.bind(null,Ne,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:ip,useDeferredValue:function(n,i){var a=Tn();return sp(a,n,i)},useTransition:function(){var n=np(!1);return n=k_.bind(null,Ne,n.queue,!0,!1),Tn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var l=Ne,f=Tn();if(Fe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),rt===null)throw Error(s(349));(ze&124)!==0||h_(l,i,a)}f.memoizedState=a;var d={value:a,getSnapshot:i};return f.queue=d,I_(d_.bind(null,l,d,n),[n]),l.flags|=2048,oo(9,Yc(),f_.bind(null,l,d,a,i),null),a},useId:function(){var n=Tn(),i=rt.identifierPrefix;if(Fe){var a=ti,l=ei;a=(l&~(1<<32-on(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Fc++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=_A++,i="«"+i+"r"+a.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:op,useFormState:S_,useActionState:S_,useOptimistic:function(n){var i=Tn();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=lp.bind(null,Ne,!0,a),a.dispatch=i,[n,i]},useMemoCache:Jd,useCacheRefresh:function(){return Tn().memoizedState=wA.bind(null,Ne)}},G_={readContext:ln,use:Gc,useCallback:M_,useContext:ln,useEffect:C_,useImperativeHandle:O_,useInsertionEffect:x_,useLayoutEffect:D_,useMemo:V_,useReducer:$c,useRef:R_,useState:function(){return $c(ii)},useDebugValue:ip,useDeferredValue:function(n,i){var a=At();return P_(a,Ze.memoizedState,n,i)},useTransition:function(){var n=$c(ii)[0],i=At().memoizedState;return[typeof n=="boolean"?n:Bl(n),i]},useSyncExternalStore:c_,useId:j_,useHostTransitionStatus:op,useFormState:w_,useActionState:w_,useOptimistic:function(n,i){var a=At();return g_(a,Ze,n,i)},useMemoCache:Jd,useCacheRefresh:z_},bA={readContext:ln,use:Gc,useCallback:M_,useContext:ln,useEffect:C_,useImperativeHandle:O_,useInsertionEffect:x_,useLayoutEffect:D_,useMemo:V_,useReducer:tp,useRef:R_,useState:function(){return tp(ii)},useDebugValue:ip,useDeferredValue:function(n,i){var a=At();return Ze===null?sp(a,n,i):P_(a,Ze.memoizedState,n,i)},useTransition:function(){var n=tp(ii)[0],i=At().memoizedState;return[typeof n=="boolean"?n:Bl(n),i]},useSyncExternalStore:c_,useId:j_,useHostTransitionStatus:op,useFormState:b_,useActionState:b_,useOptimistic:function(n,i){var a=At();return Ze!==null?g_(a,Ze,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Jd,useCacheRefresh:z_},lo=null,Gl=0;function Wc(n){var i=Gl;return Gl+=1,lo===null&&(lo=[]),n_(lo,n,i)}function $l(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Zc(n,i){throw i.$$typeof===S?Error(s(525)):(n=Object.prototype.toString.call(i),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function $_(n){var i=n._init;return i(n._payload)}function Y_(n){function i(k,M){if(n){var z=k.deletions;z===null?(k.deletions=[M],k.flags|=16):z.push(M)}}function a(k,M){if(!n)return null;for(;M!==null;)i(k,M),M=M.sibling;return null}function l(k){for(var M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function f(k,M){return k=Jr(k,M),k.index=0,k.sibling=null,k}function d(k,M,z){return k.index=z,n?(z=k.alternate,z!==null?(z=z.index,z<M?(k.flags|=67108866,M):z):(k.flags|=67108866,M)):(k.flags|=1048576,M)}function E(k){return n&&k.alternate===null&&(k.flags|=67108866),k}function w(k,M,z,W){return M===null||M.tag!==6?(M=xd(z,k.mode,W),M.return=k,M):(M=f(M,z),M.return=k,M)}function C(k,M,z,W){var pe=z.type;return pe===U?K(k,M,z.props.children,W,z.key):M!==null&&(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===R&&$_(pe)===M.type)?(M=f(M,z.props),$l(M,z),M.return=k,M):(M=Vc(z.type,z.key,z.props,null,k.mode,W),$l(M,z),M.return=k,M)}function q(k,M,z,W){return M===null||M.tag!==4||M.stateNode.containerInfo!==z.containerInfo||M.stateNode.implementation!==z.implementation?(M=Dd(z,k.mode,W),M.return=k,M):(M=f(M,z.children||[]),M.return=k,M)}function K(k,M,z,W,pe){return M===null||M.tag!==7?(M=Zs(z,k.mode,W,pe),M.return=k,M):(M=f(M,z),M.return=k,M)}function ee(k,M,z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=xd(""+M,k.mode,z),M.return=k,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case A:return z=Vc(M.type,M.key,M.props,null,k.mode,z),$l(z,M),z.return=k,z;case N:return M=Dd(M,k.mode,z),M.return=k,M;case R:var W=M._init;return M=W(M._payload),ee(k,M,z)}if(at(M)||L(M))return M=Zs(M,k.mode,z,null),M.return=k,M;if(typeof M.then=="function")return ee(k,Wc(M),z);if(M.$$typeof===re)return ee(k,Uc(k,M),z);Zc(k,M)}return null}function B(k,M,z,W){var pe=M!==null?M.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return pe!==null?null:w(k,M,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case A:return z.key===pe?C(k,M,z,W):null;case N:return z.key===pe?q(k,M,z,W):null;case R:return pe=z._init,z=pe(z._payload),B(k,M,z,W)}if(at(z)||L(z))return pe!==null?null:K(k,M,z,W,null);if(typeof z.then=="function")return B(k,M,Wc(z),W);if(z.$$typeof===re)return B(k,M,Uc(k,z),W);Zc(k,z)}return null}function F(k,M,z,W,pe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return k=k.get(z)||null,w(M,k,""+W,pe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case A:return k=k.get(W.key===null?z:W.key)||null,C(M,k,W,pe);case N:return k=k.get(W.key===null?z:W.key)||null,q(M,k,W,pe);case R:var Oe=W._init;return W=Oe(W._payload),F(k,M,z,W,pe)}if(at(W)||L(W))return k=k.get(z)||null,K(M,k,W,pe,null);if(typeof W.then=="function")return F(k,M,z,Wc(W),pe);if(W.$$typeof===re)return F(k,M,z,Uc(M,W),pe);Zc(M,W)}return null}function Ae(k,M,z,W){for(var pe=null,Oe=null,ye=M,Te=M=0,Bt=null;ye!==null&&Te<z.length;Te++){ye.index>Te?(Bt=ye,ye=null):Bt=ye.sibling;var He=B(k,ye,z[Te],W);if(He===null){ye===null&&(ye=Bt);break}n&&ye&&He.alternate===null&&i(k,ye),M=d(He,M,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He,ye=Bt}if(Te===z.length)return a(k,ye),Fe&&ea(k,Te),pe;if(ye===null){for(;Te<z.length;Te++)ye=ee(k,z[Te],W),ye!==null&&(M=d(ye,M,Te),Oe===null?pe=ye:Oe.sibling=ye,Oe=ye);return Fe&&ea(k,Te),pe}for(ye=l(ye);Te<z.length;Te++)Bt=F(ye,k,Te,z[Te],W),Bt!==null&&(n&&Bt.alternate!==null&&ye.delete(Bt.key===null?Te:Bt.key),M=d(Bt,M,Te),Oe===null?pe=Bt:Oe.sibling=Bt,Oe=Bt);return n&&ye.forEach(function(ns){return i(k,ns)}),Fe&&ea(k,Te),pe}function Ee(k,M,z,W){if(z==null)throw Error(s(151));for(var pe=null,Oe=null,ye=M,Te=M=0,Bt=null,He=z.next();ye!==null&&!He.done;Te++,He=z.next()){ye.index>Te?(Bt=ye,ye=null):Bt=ye.sibling;var ns=B(k,ye,He.value,W);if(ns===null){ye===null&&(ye=Bt);break}n&&ye&&ns.alternate===null&&i(k,ye),M=d(ns,M,Te),Oe===null?pe=ns:Oe.sibling=ns,Oe=ns,ye=Bt}if(He.done)return a(k,ye),Fe&&ea(k,Te),pe;if(ye===null){for(;!He.done;Te++,He=z.next())He=ee(k,He.value,W),He!==null&&(M=d(He,M,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He);return Fe&&ea(k,Te),pe}for(ye=l(ye);!He.done;Te++,He=z.next())He=F(ye,k,Te,He.value,W),He!==null&&(n&&He.alternate!==null&&ye.delete(He.key===null?Te:He.key),M=d(He,M,Te),Oe===null?pe=He:Oe.sibling=He,Oe=He);return n&&ye.forEach(function(Rb){return i(k,Rb)}),Fe&&ea(k,Te),pe}function et(k,M,z,W){if(typeof z=="object"&&z!==null&&z.type===U&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case A:e:{for(var pe=z.key;M!==null;){if(M.key===pe){if(pe=z.type,pe===U){if(M.tag===7){a(k,M.sibling),W=f(M,z.props.children),W.return=k,k=W;break e}}else if(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===R&&$_(pe)===M.type){a(k,M.sibling),W=f(M,z.props),$l(W,z),W.return=k,k=W;break e}a(k,M);break}else i(k,M);M=M.sibling}z.type===U?(W=Zs(z.props.children,k.mode,W,z.key),W.return=k,k=W):(W=Vc(z.type,z.key,z.props,null,k.mode,W),$l(W,z),W.return=k,k=W)}return E(k);case N:e:{for(pe=z.key;M!==null;){if(M.key===pe)if(M.tag===4&&M.stateNode.containerInfo===z.containerInfo&&M.stateNode.implementation===z.implementation){a(k,M.sibling),W=f(M,z.children||[]),W.return=k,k=W;break e}else{a(k,M);break}else i(k,M);M=M.sibling}W=Dd(z,k.mode,W),W.return=k,k=W}return E(k);case R:return pe=z._init,z=pe(z._payload),et(k,M,z,W)}if(at(z))return Ae(k,M,z,W);if(L(z)){if(pe=L(z),typeof pe!="function")throw Error(s(150));return z=pe.call(z),Ee(k,M,z,W)}if(typeof z.then=="function")return et(k,M,Wc(z),W);if(z.$$typeof===re)return et(k,M,Uc(k,z),W);Zc(k,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,M!==null&&M.tag===6?(a(k,M.sibling),W=f(M,z),W.return=k,k=W):(a(k,M),W=xd(z,k.mode,W),W.return=k,k=W),E(k)):a(k,M)}return function(k,M,z,W){try{Gl=0;var pe=et(k,M,z,W);return lo=null,pe}catch(ye){if(ye===kl||ye===zc)throw ye;var Oe=xn(29,ye,null,k.mode);return Oe.lanes=W,Oe.return=k,Oe}finally{}}}var uo=Y_(!0),Q_=Y_(!1),Kn=ne(null),Ir=null;function qi(n){var i=n.alternate;se(Pt,Pt.current&1),se(Kn,n),Ir===null&&(i===null||io.current!==null||i.memoizedState!==null)&&(Ir=n)}function K_(n){if(n.tag===22){if(se(Pt,Pt.current),se(Kn,n),Ir===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Ir=n)}}else Bi()}function Bi(){se(Pt,Pt.current),se(Kn,Kn.current)}function si(n){ae(Kn),Ir===n&&(Ir=null),ae(Pt)}var Pt=ne(0);function Jc(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Zp(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function up(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:_({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var cp={enqueueSetState:function(n,i,a){n=n._reactInternals;var l=Mn(),f=Ui(l);f.payload=i,a!=null&&(f.callback=a),i=ji(n,f,l),i!==null&&(Vn(i,n,l),Ul(i,n,l))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=Mn(),f=Ui(l);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=ji(n,f,l),i!==null&&(Vn(i,n,l),Ul(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Mn(),l=Ui(a);l.tag=2,i!=null&&(l.callback=i),i=ji(n,l,a),i!==null&&(Vn(i,n,a),Ul(i,n,a))}};function X_(n,i,a,l,f,d,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!Cl(a,l)||!Cl(f,d):!0}function W_(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&cp.enqueueReplaceState(i,i.state,null)}function oa(n,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(n=n.defaultProps){a===i&&(a=_({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var eh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Z_(n){eh(n)}function J_(n){console.error(n)}function ev(n){eh(n)}function th(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function tv(n,i,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function hp(n,i,a){return a=Ui(a),a.tag=3,a.payload={element:null},a.callback=function(){th(n,i)},a}function nv(n){return n=Ui(n),n.tag=3,n}function rv(n,i,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;n.payload=function(){return f(d)},n.callback=function(){tv(i,a,l)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){tv(i,a,l),typeof f!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function RA(n,i,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Ml(i,a,f,!0),a=Kn.current,a!==null){switch(a.tag){case 13:return Ir===null?Pp():a.alternate===null&&mt===0&&(mt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===zd?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Lp(n,l,f)),!1;case 22:return a.flags|=65536,l===zd?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Lp(n,l,f)),!1}throw Error(s(435,a.tag))}return Lp(n,l,f),Pp(),!1}if(Fe)return i=Kn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Md&&(n=Error(s(422),{cause:l}),Ol(Gn(n,a)))):(l!==Md&&(i=Error(s(423),{cause:l}),Ol(Gn(i,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=Gn(l,a),f=hp(n.stateNode,l,f),Hd(n,f),mt!==4&&(mt=2)),!1;var d=Error(s(520),{cause:l});if(d=Gn(d,a),Jl===null?Jl=[d]:Jl.push(d),mt!==4&&(mt=2),i===null)return!0;l=Gn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=hp(a.stateNode,l,n),Hd(a,n),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Qi===null||!Qi.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=nv(f),rv(f,n,a,l),Hd(a,f),!1}a=a.return}while(a!==null);return!1}var iv=Error(s(461)),zt=!1;function Qt(n,i,a,l){i.child=n===null?Q_(i,null,a,l):uo(i,n.child,a,l)}function sv(n,i,a,l,f){a=a.render;var d=i.ref;if("ref"in l){var E={};for(var w in l)w!=="ref"&&(E[w]=l[w])}else E=l;return ia(i),l=Qd(n,i,a,E,d,f),w=Kd(),n!==null&&!zt?(Xd(n,i,f),ai(n,i,f)):(Fe&&w&&Nd(i),i.flags|=1,Qt(n,i,l,f),i.child)}function av(n,i,a,l,f){if(n===null){var d=a.type;return typeof d=="function"&&!Cd(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,ov(n,i,d,l,f)):(n=Vc(a.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(d=n.child,!vp(n,f)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:Cl,a(E,l)&&n.ref===i.ref)return ai(n,i,f)}return i.flags|=1,n=Jr(d,l),n.ref=i.ref,n.return=i,i.child=n}function ov(n,i,a,l,f){if(n!==null){var d=n.memoizedProps;if(Cl(d,l)&&n.ref===i.ref)if(zt=!1,i.pendingProps=l=d,vp(n,f))(n.flags&131072)!==0&&(zt=!0);else return i.lanes=n.lanes,ai(n,i,f)}return fp(n,i,a,l,f)}function lv(n,i,a){var l=i.pendingProps,f=l.children,d=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,n!==null){for(f=i.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return uv(n,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&jc(i,d!==null?d.cachePool:null),d!==null?o_(i,d):Gd(),K_(i);else return i.lanes=i.childLanes=536870912,uv(n,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(jc(i,d.cachePool),o_(i,d),Bi(),i.memoizedState=null):(n!==null&&jc(i,null),Gd(),Bi());return Qt(n,i,f,a),i.child}function uv(n,i,a,l){var f=jd();return f=f===null?null:{parent:Vt._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},n!==null&&jc(i,null),Gd(),K_(i),n!==null&&Ml(n,i,l,!0),null}function nh(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function fp(n,i,a,l,f){return ia(i),a=Qd(n,i,a,l,void 0,f),l=Kd(),n!==null&&!zt?(Xd(n,i,f),ai(n,i,f)):(Fe&&l&&Nd(i),i.flags|=1,Qt(n,i,a,f),i.child)}function cv(n,i,a,l,f,d){return ia(i),i.updateQueue=null,a=u_(i,l,a,f),l_(n),l=Kd(),n!==null&&!zt?(Xd(n,i,d),ai(n,i,d)):(Fe&&l&&Nd(i),i.flags|=1,Qt(n,i,a,d),i.child)}function hv(n,i,a,l,f){if(ia(i),i.stateNode===null){var d=Ja,E=a.contextType;typeof E=="object"&&E!==null&&(d=ln(E)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=cp,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},qd(i),E=a.contextType,d.context=typeof E=="object"&&E!==null?ln(E):Ja,d.state=i.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(up(i,a,E,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&cp.enqueueReplaceState(d,d.state,null),zl(i,l,d,f),jl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){d=i.stateNode;var w=i.memoizedProps,C=oa(a,w);d.props=C;var q=d.context,K=a.contextType;E=Ja,typeof K=="object"&&K!==null&&(E=ln(K));var ee=a.getDerivedStateFromProps;K=typeof ee=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||q!==E)&&W_(i,d,l,E),Li=!1;var B=i.memoizedState;d.state=B,zl(i,l,d,f),jl(),q=i.memoizedState,w||B!==q||Li?(typeof ee=="function"&&(up(i,a,ee,l),q=i.memoizedState),(C=Li||X_(i,a,C,l,B,q,E))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=q),d.props=l,d.state=q,d.context=E,l=C):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Bd(n,i),E=i.memoizedProps,K=oa(a,E),d.props=K,ee=i.pendingProps,B=d.context,q=a.contextType,C=Ja,typeof q=="object"&&q!==null&&(C=ln(q)),w=a.getDerivedStateFromProps,(q=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==ee||B!==C)&&W_(i,d,l,C),Li=!1,B=i.memoizedState,d.state=B,zl(i,l,d,f),jl();var F=i.memoizedState;E!==ee||B!==F||Li||n!==null&&n.dependencies!==null&&Lc(n.dependencies)?(typeof w=="function"&&(up(i,a,w,l),F=i.memoizedState),(K=Li||X_(i,a,K,l,B,F,C)||n!==null&&n.dependencies!==null&&Lc(n.dependencies))?(q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,F,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,F,C)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=F),d.props=l,d.state=F,d.context=C,l=K):(typeof d.componentDidUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(i.flags|=1024),l=!1)}return d=l,nh(n,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,n!==null&&l?(i.child=uo(i,n.child,null,f),i.child=uo(i,null,a,f)):Qt(n,i,a,f),i.memoizedState=d.state,n=i.child):n=ai(n,i,f),n}function fv(n,i,a,l){return Nl(),i.flags|=256,Qt(n,i,a,l),i.child}var dp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pp(n){return{baseLanes:n,cachePool:Jy()}}function mp(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=Xn),n}function dv(n,i,a){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=n!==null&&n.memoizedState===null?!1:(Pt.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,n===null){if(Fe){if(f?qi(i):Bi(),Fe){var w=pt,C;if(C=w){e:{for(C=w,w=Rr;C.nodeType!==8;){if(!w){w=null;break e}if(C=ar(C.nextSibling),C===null){w=null;break e}}w=C}w!==null?(i.memoizedState={dehydrated:w,treeContext:Js!==null?{id:ei,overflow:ti}:null,retryLane:536870912,hydrationErrors:null},C=xn(18,null,null,0),C.stateNode=w,C.return=i,i.child=C,vn=i,pt=null,C=!0):C=!1}C||na(i)}if(w=i.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Zp(w)?i.lanes=32:i.lanes=536870912,null;si(i)}return w=l.children,l=l.fallback,f?(Bi(),f=i.mode,w=rh({mode:"hidden",children:w},f),l=Zs(l,f,a,null),w.return=i,l.return=i,w.sibling=l,i.child=w,f=i.child,f.memoizedState=pp(a),f.childLanes=mp(n,E,a),i.memoizedState=dp,l):(qi(i),gp(i,w))}if(C=n.memoizedState,C!==null&&(w=C.dehydrated,w!==null)){if(d)i.flags&256?(qi(i),i.flags&=-257,i=yp(n,i,a)):i.memoizedState!==null?(Bi(),i.child=n.child,i.flags|=128,i=null):(Bi(),f=l.fallback,w=i.mode,l=rh({mode:"visible",children:l.children},w),f=Zs(f,w,a,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,uo(i,n.child,null,a),l=i.child,l.memoizedState=pp(a),l.childLanes=mp(n,E,a),i.memoizedState=dp,i=f);else if(qi(i),Zp(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var q=E.dgst;E=q,l=Error(s(419)),l.stack="",l.digest=E,Ol({value:l,source:null,stack:null}),i=yp(n,i,a)}else if(zt||Ml(n,i,a,!1),E=(a&n.childLanes)!==0,zt||E){if(E=rt,E!==null&&(l=a&-a,l=(l&42)!==0?1:xi(l),l=(l&(E.suspendedLanes|a))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,Za(n,l),Vn(E,n,l),iv;w.data==="$?"||Pp(),i=yp(n,i,a)}else w.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=C.treeContext,pt=ar(w.nextSibling),vn=i,Fe=!0,ta=null,Rr=!1,n!==null&&(Yn[Qn++]=ei,Yn[Qn++]=ti,Yn[Qn++]=Js,ei=n.id,ti=n.overflow,Js=i),i=gp(i,l.children),i.flags|=4096);return i}return f?(Bi(),f=l.fallback,w=i.mode,C=n.child,q=C.sibling,l=Jr(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,q!==null?f=Jr(q,f):(f=Zs(f,w,a,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,w=n.child.memoizedState,w===null?w=pp(a):(C=w.cachePool,C!==null?(q=Vt._currentValue,C=C.parent!==q?{parent:q,pool:q}:C):C=Jy(),w={baseLanes:w.baseLanes|a,cachePool:C}),f.memoizedState=w,f.childLanes=mp(n,E,a),i.memoizedState=dp,l):(qi(i),a=n.child,n=a.sibling,a=Jr(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,n!==null&&(E=i.deletions,E===null?(i.deletions=[n],i.flags|=16):E.push(n)),i.child=a,i.memoizedState=null,a)}function gp(n,i){return i=rh({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function rh(n,i){return n=xn(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function yp(n,i,a){return uo(i,n.child,null,a),n=gp(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function pv(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Pd(n.return,i,a)}function _p(n,i,a,l,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function mv(n,i,a){var l=i.pendingProps,f=l.revealOrder,d=l.tail;if(Qt(n,i,l.children,a),l=Pt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&pv(n,a,i);else if(n.tag===19)pv(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(se(Pt,l),f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Jc(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),_p(i,!1,f,a,d);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Jc(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}_p(i,!0,a,null,d);break;case"together":_p(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ai(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Yi|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(Ml(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(s(153));if(i.child!==null){for(n=i.child,a=Jr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Jr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function vp(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Lc(n)))}function IA(n,i,a){switch(i.tag){case 3:Be(i,i.stateNode.containerInfo),ki(i,Vt,n.memoizedState.cache),Nl();break;case 27:case 5:Un(i);break;case 4:Be(i,i.stateNode.containerInfo);break;case 10:ki(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(qi(i),i.flags|=128,null):(a&i.child.childLanes)!==0?dv(n,i,a):(qi(i),n=ai(n,i,a),n!==null?n.sibling:null);qi(i);break;case 19:var f=(n.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Ml(n,i,a,!1),l=(a&i.childLanes)!==0),f){if(l)return mv(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Pt,Pt.current),l)break;return null;case 22:case 23:return i.lanes=0,lv(n,i,a);case 24:ki(i,Vt,n.memoizedState.cache)}return ai(n,i,a)}function gv(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)zt=!0;else{if(!vp(n,a)&&(i.flags&128)===0)return zt=!1,IA(n,i,a);zt=(n.flags&131072)!==0}else zt=!1,Fe&&(i.flags&1048576)!==0&&$y(i,kc,i.index);switch(i.lanes=0,i.tag){case 16:e:{n=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")Cd(l)?(n=oa(l,n),i.tag=1,i=hv(null,i,l,n,a)):(i.tag=0,i=fp(null,i,l,n,a));else{if(l!=null){if(f=l.$$typeof,f===he){i.tag=11,i=sv(null,i,l,n,a);break e}else if(f===x){i.tag=14,i=av(null,i,l,n,a);break e}}throw i=Dt(l)||l,Error(s(306,i,""))}}return i;case 0:return fp(n,i,i.type,i.pendingProps,a);case 1:return l=i.type,f=oa(l,i.pendingProps),hv(n,i,l,f,a);case 3:e:{if(Be(i,i.stateNode.containerInfo),n===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Bd(n,i),zl(i,l,null,a);var E=i.memoizedState;if(l=E.cache,ki(i,Vt,l),l!==d.cache&&kd(i,[Vt],a,!0),jl(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=fv(n,i,l,a);break e}else if(l!==f){f=Gn(Error(s(424)),i),Ol(f),i=fv(n,i,l,a);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(pt=ar(n.firstChild),vn=i,Fe=!0,ta=null,Rr=!0,a=Q_(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Nl(),l===f){i=ai(n,i,a);break e}Qt(n,i,l,a)}i=i.child}return i;case 26:return nh(n,i),n===null?(a=EE(i.type,null,i.pendingProps,null))?i.memoizedState=a:Fe||(a=i.type,n=i.pendingProps,l=yh(ve.current).createElement(a),l[Nt]=i,l[Tt]=n,Xt(l,a,n),yt(l),i.stateNode=l):i.memoizedState=EE(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Un(i),n===null&&Fe&&(l=i.stateNode=yE(i.type,i.pendingProps,ve.current),vn=i,Rr=!0,f=pt,Wi(i.type)?(Jp=f,pt=ar(l.firstChild)):pt=f),Qt(n,i,i.pendingProps.children,a),nh(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Fe&&((f=l=pt)&&(l=tb(l,i.type,i.pendingProps,Rr),l!==null?(i.stateNode=l,vn=i,pt=ar(l.firstChild),Rr=!1,f=!0):f=!1),f||na(i)),Un(i),f=i.type,d=i.pendingProps,E=n!==null?n.memoizedProps:null,l=d.children,Kp(f,d)?l=null:E!==null&&Kp(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=Qd(n,i,vA,null,null,a),lu._currentValue=f),nh(n,i),Qt(n,i,l,a),i.child;case 6:return n===null&&Fe&&((n=a=pt)&&(a=nb(a,i.pendingProps,Rr),a!==null?(i.stateNode=a,vn=i,pt=null,n=!0):n=!1),n||na(i)),null;case 13:return dv(n,i,a);case 4:return Be(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=uo(i,null,l,a):Qt(n,i,l,a),i.child;case 11:return sv(n,i,i.type,i.pendingProps,a);case 7:return Qt(n,i,i.pendingProps,a),i.child;case 8:return Qt(n,i,i.pendingProps.children,a),i.child;case 12:return Qt(n,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,ki(i,i.type,l.value),Qt(n,i,l.children,a),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,ia(i),f=ln(f),l=l(f),i.flags|=1,Qt(n,i,l,a),i.child;case 14:return av(n,i,i.type,i.pendingProps,a);case 15:return ov(n,i,i.type,i.pendingProps,a);case 19:return mv(n,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},n===null?(a=rh(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Jr(n.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return lv(n,i,a);case 24:return ia(i),l=ln(Vt),n===null?(f=jd(),f===null&&(f=rt,d=Ld(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),i.memoizedState={parent:l,cache:f},qd(i),ki(i,Vt,f)):((n.lanes&a)!==0&&(Bd(n,i),zl(i,null,null,a),jl()),f=n.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ki(i,Vt,l)):(l=d.cache,ki(i,Vt,l),l!==f.cache&&kd(i,[Vt],a,!0))),Qt(n,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function oi(n){n.flags|=4}function yv(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!bE(i)){if(i=Kn.current,i!==null&&((ze&4194048)===ze?Ir!==null:(ze&62914560)!==ze&&(ze&536870912)===0||i!==Ir))throw Ll=zd,e_;n.flags|=8192}}function ih(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?cl():536870912,n.lanes|=i,po|=i)}function Yl(n,i){if(!Fe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function ht(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function CA(n,i,a){var l=i.pendingProps;switch(Od(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(i),null;case 1:return ht(i),null;case 3:return a=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ri(Vt),Lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Dl(i)?oi(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ky())),ht(i),null;case 26:return a=i.memoizedState,n===null?(oi(i),a!==null?(ht(i),yv(i,a)):(ht(i),i.flags&=-16777217)):a?a!==n.memoizedState?(oi(i),ht(i),yv(i,a)):(ht(i),i.flags&=-16777217):(n.memoizedProps!==l&&oi(i),ht(i),i.flags&=-16777217),null;case 27:En(i),a=ve.current;var f=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==l&&oi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}n=ge.current,Dl(i)?Yy(i):(n=yE(f,l,a),i.stateNode=n,oi(i))}return ht(i),null;case 5:if(En(i),a=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&oi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}if(n=ge.current,Dl(i))Yy(i);else{switch(f=yh(ve.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}n[Nt]=i,n[Tt]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=n;e:switch(Xt(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&oi(i)}}return ht(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&oi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(n=ve.current,Dl(i)){if(n=i.stateNode,a=i.memoizedProps,l=null,f=vn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[Nt]=i,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||cE(n.nodeValue,a)),n||na(i)}else n=yh(n).createTextNode(l),n[Nt]=i,i.stateNode=n}return ht(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Dl(i),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Nt]=i}else Nl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ht(i),f=!1}else f=Ky(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(si(i),i):(si(i),null)}if(si(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return a!==n&&a&&(i.child.flags|=8192),ih(i,i.updateQueue),ht(i),null;case 4:return Lt(),n===null&&Fp(i.stateNode.containerInfo),ht(i),null;case 10:return ri(i.type),ht(i),null;case 19:if(ae(Pt),f=i.memoizedState,f===null)return ht(i),null;if(l=(i.flags&128)!==0,d=f.rendering,d===null)if(l)Yl(f,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(d=Jc(n),d!==null){for(i.flags|=128,Yl(f,!1),n=d.updateQueue,i.updateQueue=n,ih(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)Gy(a,n),a=a.sibling;return se(Pt,Pt.current&1|2),i.child}n=n.sibling}f.tail!==null&&jn()>oh&&(i.flags|=128,l=!0,Yl(f,!1),i.lanes=4194304)}else{if(!l)if(n=Jc(d),n!==null){if(i.flags|=128,l=!0,n=n.updateQueue,i.updateQueue=n,ih(i,n),Yl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!Fe)return ht(i),null}else 2*jn()-f.renderingStartTime>oh&&a!==536870912&&(i.flags|=128,l=!0,Yl(f,!1),i.lanes=4194304);f.isBackwards?(d.sibling=i.child,i.child=d):(n=f.last,n!==null?n.sibling=d:i.child=d,f.last=d)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=jn(),i.sibling=null,n=Pt.current,se(Pt,l?n&1|2:n&1),i):(ht(i),null);case 22:case 23:return si(i),$d(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ht(i),i.subtreeFlags&6&&(i.flags|=8192)):ht(i),a=i.updateQueue,a!==null&&ih(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),n!==null&&ae(sa),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ri(Vt),ht(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function xA(n,i){switch(Od(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ri(Vt),Lt(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return En(i),null;case 13:if(si(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Nl()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ae(Pt),null;case 4:return Lt(),null;case 10:return ri(i.type),null;case 22:case 23:return si(i),$d(),n!==null&&ae(sa),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return ri(Vt),null;case 25:return null;default:return null}}function _v(n,i){switch(Od(i),i.tag){case 3:ri(Vt),Lt();break;case 26:case 27:case 5:En(i);break;case 4:Lt();break;case 13:si(i);break;case 19:ae(Pt);break;case 10:ri(i.type);break;case 22:case 23:si(i),$d(),n!==null&&ae(sa);break;case 24:ri(Vt)}}function Ql(n,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var d=a.create,E=a.inst;l=d(),E.destroy=l}a=a.next}while(a!==f)}}catch(w){tt(i,i.return,w)}}function Hi(n,i,a){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&n)===n){var E=l.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,f=i;var C=a,q=w;try{q()}catch(K){tt(f,C,K)}}}l=l.next}while(l!==d)}}catch(K){tt(i,i.return,K)}}function vv(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{a_(i,a)}catch(l){tt(n,n.return,l)}}}function Ev(n,i,a){a.props=oa(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){tt(n,i,l)}}function Kl(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(f){tt(n,i,f)}}function Cr(n,i){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){tt(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){tt(n,i,f)}else a.current=null}function Tv(n){var i=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){tt(n,n.return,f)}}function Ep(n,i,a){try{var l=n.stateNode;XA(l,n.type,a,i),l[Tt]=i}catch(f){tt(n,n.return,f)}}function Sv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Wi(n.type)||n.tag===4}function Tp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Wi(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sp(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(n),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=gh));else if(l!==4&&(l===27&&Wi(n.type)&&(a=n.stateNode,i=null),n=n.child,n!==null))for(Sp(n,i,a),n=n.sibling;n!==null;)Sp(n,i,a),n=n.sibling}function sh(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(l!==4&&(l===27&&Wi(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(sh(n,i,a),n=n.sibling;n!==null;)sh(n,i,a),n=n.sibling}function wv(n){var i=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Xt(i,l,a),i[Nt]=n,i[Tt]=a}catch(d){tt(n,n.return,d)}}var li=!1,vt=!1,wp=!1,Av=typeof WeakSet=="function"?WeakSet:Set,qt=null;function DA(n,i){if(n=n.containerInfo,Yp=wh,n=Py(n),Td(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,w=-1,C=-1,q=0,K=0,ee=n,B=null;t:for(;;){for(var F;ee!==a||f!==0&&ee.nodeType!==3||(w=E+f),ee!==d||l!==0&&ee.nodeType!==3||(C=E+l),ee.nodeType===3&&(E+=ee.nodeValue.length),(F=ee.firstChild)!==null;)B=ee,ee=F;for(;;){if(ee===n)break t;if(B===a&&++q===f&&(w=E),B===d&&++K===l&&(C=E),(F=ee.nextSibling)!==null)break;ee=B,B=ee.parentNode}ee=F}a=w===-1||C===-1?null:{start:w,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qp={focusedElem:n,selectionRange:a},wh=!1,qt=i;qt!==null;)if(i=qt,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,qt=n;else for(;qt!==null;){switch(i=qt,d=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,a=i,f=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Ae=oa(a.type,f,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(Ae,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(Ee){tt(a,a.return,Ee)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,a=n.nodeType,a===9)Wp(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Wp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=i.sibling,n!==null){n.return=i.return,qt=n;break}qt=i.return}}function bv(n,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(n,a),l&4&&Ql(5,a);break;case 1:if(Fi(n,a),l&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(E){tt(a,a.return,E)}else{var f=oa(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(E){tt(a,a.return,E)}}l&64&&vv(a),l&512&&Kl(a,a.return);break;case 3:if(Fi(n,a),l&64&&(n=a.updateQueue,n!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{a_(n,i)}catch(E){tt(a,a.return,E)}}break;case 27:i===null&&l&4&&wv(a);case 26:case 5:Fi(n,a),i===null&&l&4&&Tv(a),l&512&&Kl(a,a.return);break;case 12:Fi(n,a);break;case 13:Fi(n,a),l&4&&Cv(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=jA.bind(null,a),rb(n,a))));break;case 22:if(l=a.memoizedState!==null||li,!l){i=i!==null&&i.memoizedState!==null||vt,f=li;var d=vt;li=l,(vt=i)&&!d?Gi(n,a,(a.subtreeFlags&8772)!==0):Fi(n,a),li=f,vt=d}break;case 30:break;default:Fi(n,a)}}function Rv(n){var i=n.alternate;i!==null&&(n.alternate=null,Rv(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Oi(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var lt=null,Sn=!1;function ui(n,i,a){for(a=a.child;a!==null;)Iv(n,i,a),a=a.sibling}function Iv(n,i,a){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:vt||Cr(a,i),ui(n,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vt||Cr(a,i);var l=lt,f=Sn;Wi(a.type)&&(lt=a.stateNode,Sn=!1),ui(n,i,a),iu(a.stateNode),lt=l,Sn=f;break;case 5:vt||Cr(a,i);case 6:if(l=lt,f=Sn,lt=null,ui(n,i,a),lt=l,Sn=f,lt!==null)if(Sn)try{(lt.nodeType===9?lt.body:lt.nodeName==="HTML"?lt.ownerDocument.body:lt).removeChild(a.stateNode)}catch(d){tt(a,i,d)}else try{lt.removeChild(a.stateNode)}catch(d){tt(a,i,d)}break;case 18:lt!==null&&(Sn?(n=lt,mE(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),fu(n)):mE(lt,a.stateNode));break;case 4:l=lt,f=Sn,lt=a.stateNode.containerInfo,Sn=!0,ui(n,i,a),lt=l,Sn=f;break;case 0:case 11:case 14:case 15:vt||Hi(2,a,i),vt||Hi(4,a,i),ui(n,i,a);break;case 1:vt||(Cr(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ev(a,i,l)),ui(n,i,a);break;case 21:ui(n,i,a);break;case 22:vt=(l=vt)||a.memoizedState!==null,ui(n,i,a),vt=l;break;default:ui(n,i,a)}}function Cv(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{fu(n)}catch(a){tt(i,i.return,a)}}function NA(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Av),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Av),i;default:throw Error(s(435,n.tag))}}function Ap(n,i){var a=NA(n);i.forEach(function(l){var f=zA.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}function Dn(n,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],d=n,E=i,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(Wi(w.type)){lt=w.stateNode,Sn=!1;break e}break;case 5:lt=w.stateNode,Sn=!1;break e;case 3:case 4:lt=w.stateNode.containerInfo,Sn=!0;break e}w=w.return}if(lt===null)throw Error(s(160));Iv(d,E,f),lt=null,Sn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)xv(i,n),i=i.sibling}var sr=null;function xv(n,i){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Dn(i,n),Nn(n),l&4&&(Hi(3,n,n.return),Ql(3,n),Hi(5,n,n.return));break;case 1:Dn(i,n),Nn(n),l&512&&(vt||a===null||Cr(a,a.return)),l&64&&li&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=sr;if(Dn(i,n),Nn(n),l&512&&(vt||a===null||Cr(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[ks]||d[Nt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Xt(d,l,a),d[Nt]=n,yt(d),l=d;break e;case"link":var E=wE("link","href",f).get(l+(a.href||""));if(E){for(var w=0;w<E.length;w++)if(d=E[w],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(w,1);break t}}d=f.createElement(l),Xt(d,l,a),f.head.appendChild(d);break;case"meta":if(E=wE("meta","content",f).get(l+(a.content||""))){for(w=0;w<E.length;w++)if(d=E[w],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(w,1);break t}}d=f.createElement(l),Xt(d,l,a),f.head.appendChild(d);break;default:throw Error(s(468,l))}d[Nt]=n,yt(d),l=d}n.stateNode=l}else AE(f,n.type,n.stateNode);else n.stateNode=SE(f,l,n.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?AE(f,n.type,n.stateNode):SE(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Ep(n,n.memoizedProps,a.memoizedProps)}break;case 27:Dn(i,n),Nn(n),l&512&&(vt||a===null||Cr(a,a.return)),a!==null&&l&4&&Ep(n,n.memoizedProps,a.memoizedProps);break;case 5:if(Dn(i,n),Nn(n),l&512&&(vt||a===null||Cr(a,a.return)),n.flags&32){f=n.stateNode;try{qn(f,"")}catch(F){tt(n,n.return,F)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,Ep(n,f,a!==null?a.memoizedProps:f)),l&1024&&(wp=!0);break;case 6:if(Dn(i,n),Nn(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(F){tt(n,n.return,F)}}break;case 3:if(Eh=null,f=sr,sr=_h(i.containerInfo),Dn(i,n),sr=f,Nn(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{fu(i.containerInfo)}catch(F){tt(n,n.return,F)}wp&&(wp=!1,Dv(n));break;case 4:l=sr,sr=_h(n.stateNode.containerInfo),Dn(i,n),Nn(n),sr=l;break;case 12:Dn(i,n),Nn(n);break;case 13:Dn(i,n),Nn(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dp=jn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Ap(n,l)));break;case 22:f=n.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,q=li,K=vt;if(li=q||f,vt=K||C,Dn(i,n),vt=K,li=q,Nn(n),l&8192)e:for(i=n.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||C||li||vt||la(n)),a=null,i=n;;){if(i.tag===5||i.tag===26){if(a===null){C=a=i;try{if(d=C.stateNode,f)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=C.stateNode;var ee=C.memoizedProps.style,B=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;w.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(F){tt(C,C.return,F)}}}else if(i.tag===6){if(a===null){C=i;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(F){tt(C,C.return,F)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ap(n,a))));break;case 19:Dn(i,n),Nn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Ap(n,l)));break;case 30:break;case 21:break;default:Dn(i,n),Nn(n)}}function Nn(n){var i=n.flags;if(i&2){try{for(var a,l=n.return;l!==null;){if(Sv(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,d=Tp(n);sh(n,d,f);break;case 5:var E=a.stateNode;a.flags&32&&(qn(E,""),a.flags&=-33);var w=Tp(n);sh(n,w,E);break;case 3:case 4:var C=a.stateNode.containerInfo,q=Tp(n);Sp(n,q,C);break;default:throw Error(s(161))}}catch(K){tt(n,n.return,K)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Dv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Dv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Fi(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)bv(n,i.alternate,i),i=i.sibling}function la(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:Hi(4,i,i.return),la(i);break;case 1:Cr(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Ev(i,i.return,a),la(i);break;case 27:iu(i.stateNode);case 26:case 5:Cr(i,i.return),la(i);break;case 22:i.memoizedState===null&&la(i);break;case 30:la(i);break;default:la(i)}n=n.sibling}}function Gi(n,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=n,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:Gi(f,d,a),Ql(4,d);break;case 1:if(Gi(f,d,a),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){tt(l,l.return,q)}if(l=d,f=l.updateQueue,f!==null){var w=l.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)s_(C[f],w)}catch(q){tt(l,l.return,q)}}a&&E&64&&vv(d),Kl(d,d.return);break;case 27:wv(d);case 26:case 5:Gi(f,d,a),a&&l===null&&E&4&&Tv(d),Kl(d,d.return);break;case 12:Gi(f,d,a);break;case 13:Gi(f,d,a),a&&E&4&&Cv(f,d);break;case 22:d.memoizedState===null&&Gi(f,d,a),Kl(d,d.return);break;case 30:break;default:Gi(f,d,a)}i=i.sibling}}function bp(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Vl(a))}function Rp(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Vl(n))}function xr(n,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Nv(n,i,a,l),i=i.sibling}function Nv(n,i,a,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:xr(n,i,a,l),f&2048&&Ql(9,i);break;case 1:xr(n,i,a,l);break;case 3:xr(n,i,a,l),f&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Vl(n)));break;case 12:if(f&2048){xr(n,i,a,l),n=i.stateNode;try{var d=i.memoizedProps,E=d.id,w=d.onPostCommit;typeof w=="function"&&w(E,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(C){tt(i,i.return,C)}}else xr(n,i,a,l);break;case 13:xr(n,i,a,l);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?xr(n,i,a,l):Xl(n,i):d._visibility&2?xr(n,i,a,l):(d._visibility|=2,co(n,i,a,l,(i.subtreeFlags&10256)!==0)),f&2048&&bp(E,i);break;case 24:xr(n,i,a,l),f&2048&&Rp(i.alternate,i);break;default:xr(n,i,a,l)}}function co(n,i,a,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=n,E=i,w=a,C=l,q=E.flags;switch(E.tag){case 0:case 11:case 15:co(d,E,w,C,f),Ql(8,E);break;case 23:break;case 22:var K=E.stateNode;E.memoizedState!==null?K._visibility&2?co(d,E,w,C,f):Xl(d,E):(K._visibility|=2,co(d,E,w,C,f)),f&&q&2048&&bp(E.alternate,E);break;case 24:co(d,E,w,C,f),f&&q&2048&&Rp(E.alternate,E);break;default:co(d,E,w,C,f)}i=i.sibling}}function Xl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,l=i,f=l.flags;switch(l.tag){case 22:Xl(a,l),f&2048&&bp(l.alternate,l);break;case 24:Xl(a,l),f&2048&&Rp(l.alternate,l);break;default:Xl(a,l)}i=i.sibling}}var Wl=8192;function ho(n){if(n.subtreeFlags&Wl)for(n=n.child;n!==null;)Ov(n),n=n.sibling}function Ov(n){switch(n.tag){case 26:ho(n),n.flags&Wl&&n.memoizedState!==null&&gb(sr,n.memoizedState,n.memoizedProps);break;case 5:ho(n);break;case 3:case 4:var i=sr;sr=_h(n.stateNode.containerInfo),ho(n),sr=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Wl,Wl=16777216,ho(n),Wl=i):ho(n));break;default:ho(n)}}function Mv(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Zl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];qt=l,Pv(l,n)}Mv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Vv(n),n=n.sibling}function Vv(n){switch(n.tag){case 0:case 11:case 15:Zl(n),n.flags&2048&&Hi(9,n,n.return);break;case 3:Zl(n);break;case 12:Zl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,ah(n)):Zl(n);break;default:Zl(n)}}function ah(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];qt=l,Pv(l,n)}Mv(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:Hi(8,i,i.return),ah(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ah(i));break;default:ah(i)}n=n.sibling}}function Pv(n,i){for(;qt!==null;){var a=qt;switch(a.tag){case 0:case 11:case 15:Hi(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Vl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,qt=l;else e:for(a=n;qt!==null;){l=qt;var f=l.sibling,d=l.return;if(Rv(l),l===a){qt=null;break e}if(f!==null){f.return=d,qt=f;break e}qt=d}}}var OA={getCacheForType:function(n){var i=ln(Vt),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a}},MA=typeof WeakMap=="function"?WeakMap:Map,Ke=0,rt=null,Me=null,ze=0,Xe=0,On=null,$i=!1,fo=!1,Ip=!1,ci=0,mt=0,Yi=0,ua=0,Cp=0,Xn=0,po=0,Jl=null,wn=null,xp=!1,Dp=0,oh=1/0,lh=null,Qi=null,Kt=0,Ki=null,mo=null,go=0,Np=0,Op=null,kv=null,eu=0,Mp=null;function Mn(){if((Ke&2)!==0&&ze!==0)return ze&-ze;if(Q.T!==null){var n=no;return n!==0?n:zp()}return Di()}function Lv(){Xn===0&&(Xn=(ze&536870912)===0||Fe?ul():536870912);var n=Kn.current;return n!==null&&(n.flags|=32),Xn}function Vn(n,i,a){(n===rt&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(yo(n,0),Xi(n,ze,Xn,!1)),Br(n,a),((Ke&2)===0||n!==rt)&&(n===rt&&((Ke&2)===0&&(ua|=a),mt===4&&Xi(n,ze,Xn,!1)),Dr(n))}function Uv(n,i,a){if((Ke&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&n.expiredLanes)===0||Ps(n,i),f=l?kA(n,i):kp(n,i,!0),d=l;do{if(f===0){fo&&!l&&Xi(n,i,0,!1);break}else{if(a=n.current.alternate,d&&!VA(a)){f=kp(n,i,!1),d=!1;continue}if(f===2){if(d=i,n.errorRecoveryDisabledLanes&d)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var w=n;f=Jl;var C=w.current.memoizedState.isDehydrated;if(C&&(yo(w,E).flags|=256),E=kp(w,E,!1),E!==2){if(Ip&&!C){w.errorRecoveryDisabledLanes|=d,ua|=d,f=4;break e}d=wn,wn=f,d!==null&&(wn===null?wn=d:wn.push.apply(wn,d))}f=E}if(d=!1,f!==2)continue}}if(f===1){yo(n,0),Xi(n,i,0,!0);break}e:{switch(l=n,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Xi(l,i,Xn,!$i);break e;case 2:wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=Dp+300-jn(),10<f)){if(Xi(l,i,Xn,!$i),Ma(l,0,!0)!==0)break e;l.timeoutHandle=dE(jv.bind(null,l,a,wn,lh,xp,i,Xn,ua,po,$i,d,2,-0,0),f);break e}jv(l,a,wn,lh,xp,i,Xn,ua,po,$i,d,0,-0,0)}}break}while(!0);Dr(n)}function jv(n,i,a,l,f,d,E,w,C,q,K,ee,B,F){if(n.timeoutHandle=-1,ee=i.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(ou={stylesheets:null,count:0,unsuspend:mb},Ov(i),ee=yb(),ee!==null)){n.cancelPendingCommit=ee($v.bind(null,n,i,d,a,l,f,E,w,C,K,1,B,F)),Xi(n,d,E,!q);return}$v(n,i,d,a,l,f,E,w,C)}function VA(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!Cn(d(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Xi(n,i,a,l){i&=~Cp,i&=~ua,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var f=i;0<f;){var d=31-on(f),E=1<<d;l[d]=-1,f&=~E}a!==0&&mr(n,a,i)}function uh(){return(Ke&6)===0?(tu(0),!1):!0}function Vp(){if(Me!==null){if(Xe===0)var n=Me.return;else n=Me,ni=ra=null,Wd(n),lo=null,Gl=0,n=Me;for(;n!==null;)_v(n.alternate,n),n=n.return;Me=null}}function yo(n,i){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,ZA(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Vp(),rt=n,Me=a=Jr(n.current,null),ze=i,Xe=0,On=null,$i=!1,fo=Ps(n,i),Ip=!1,po=Xn=Cp=ua=Yi=mt=0,wn=Jl=null,xp=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var f=31-on(l),d=1<<f;i|=n[f],l&=~d}return ci=i,Nc(),a}function zv(n,i){Ne=null,Q.H=Xc,i===kl||i===zc?(i=r_(),Xe=3):i===e_?(i=r_(),Xe=4):Xe=i===iv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,On=i,Me===null&&(mt=1,th(n,Gn(i,n.current)))}function qv(){var n=Q.H;return Q.H=Xc,n===null?Xc:n}function Bv(){var n=Q.A;return Q.A=OA,n}function Pp(){mt=4,$i||(ze&4194048)!==ze&&Kn.current!==null||(fo=!0),(Yi&134217727)===0&&(ua&134217727)===0||rt===null||Xi(rt,ze,Xn,!1)}function kp(n,i,a){var l=Ke;Ke|=2;var f=qv(),d=Bv();(rt!==n||ze!==i)&&(lh=null,yo(n,i)),i=!1;var E=mt;e:do try{if(Xe!==0&&Me!==null){var w=Me,C=On;switch(Xe){case 8:Vp(),E=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(i=!0);var q=Xe;if(Xe=0,On=null,_o(n,w,C,q),a&&fo){E=0;break e}break;default:q=Xe,Xe=0,On=null,_o(n,w,C,q)}}PA(),E=mt;break}catch(K){zv(n,K)}while(!0);return i&&n.shellSuspendCounter++,ni=ra=null,Ke=l,Q.H=f,Q.A=d,Me===null&&(rt=null,ze=0,Nc()),E}function PA(){for(;Me!==null;)Hv(Me)}function kA(n,i){var a=Ke;Ke|=2;var l=qv(),f=Bv();rt!==n||ze!==i?(lh=null,oh=jn()+500,yo(n,i)):fo=Ps(n,i);e:do try{if(Xe!==0&&Me!==null){i=Me;var d=On;t:switch(Xe){case 1:Xe=0,On=null,_o(n,i,d,1);break;case 2:case 9:if(t_(d)){Xe=0,On=null,Fv(i);break}i=function(){Xe!==2&&Xe!==9||rt!==n||(Xe=7),Dr(n)},d.then(i,i);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:t_(d)?(Xe=0,On=null,Fv(i)):(Xe=0,On=null,_o(n,i,d,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var w=Me;if(!E||bE(E)){Xe=0,On=null;var C=w.sibling;if(C!==null)Me=C;else{var q=w.return;q!==null?(Me=q,ch(q)):Me=null}break t}}Xe=0,On=null,_o(n,i,d,5);break;case 6:Xe=0,On=null,_o(n,i,d,6);break;case 8:Vp(),mt=6;break e;default:throw Error(s(462))}}LA();break}catch(K){zv(n,K)}while(!0);return ni=ra=null,Q.H=l,Q.A=f,Ke=a,Me!==null?0:(rt=null,ze=0,Nc(),mt)}function LA(){for(;Me!==null&&!sl();)Hv(Me)}function Hv(n){var i=gv(n.alternate,n,ci);n.memoizedProps=n.pendingProps,i===null?ch(n):Me=i}function Fv(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=cv(a,i,i.pendingProps,i.type,void 0,ze);break;case 11:i=cv(a,i,i.pendingProps,i.type.render,i.ref,ze);break;case 5:Wd(i);default:_v(a,i),i=Me=Gy(i,ci),i=gv(a,i,ci)}n.memoizedProps=n.pendingProps,i===null?ch(n):Me=i}function _o(n,i,a,l){ni=ra=null,Wd(i),lo=null,Gl=0;var f=i.return;try{if(RA(n,f,i,a,ze)){mt=1,th(n,Gn(a,n.current)),Me=null;return}}catch(d){if(f!==null)throw Me=f,d;mt=1,th(n,Gn(a,n.current)),Me=null;return}i.flags&32768?(Fe||l===1?n=!0:fo||(ze&536870912)!==0?n=!1:($i=n=!0,(l===2||l===9||l===3||l===6)&&(l=Kn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Gv(i,n)):ch(i)}function ch(n){var i=n;do{if((i.flags&32768)!==0){Gv(i,$i);return}n=i.return;var a=CA(i.alternate,i,ci);if(a!==null){Me=a;return}if(i=i.sibling,i!==null){Me=i;return}Me=i=n}while(i!==null);mt===0&&(mt=5)}function Gv(n,i){do{var a=xA(n.alternate,n);if(a!==null){a.flags&=32767,Me=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){Me=n;return}Me=n=a}while(n!==null);mt=6,Me=null}function $v(n,i,a,l,f,d,E,w,C){n.cancelPendingCommit=null;do hh();while(Kt!==0);if((Ke&6)!==0)throw Error(s(327));if(i!==null){if(i===n.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Rd,hl(n,a,d,E,w,C),n===rt&&(Me=rt=null,ze=0),mo=i,Ki=n,go=a,Np=d,Op=f,kv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,qA(Ns,function(){return Wv(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Q.T,Q.T=null,f=le.p,le.p=2,E=Ke,Ke|=4;try{DA(n,i,a)}finally{Ke=E,le.p=f,Q.T=l}}Kt=1,Yv(),Qv(),Kv()}}function Yv(){if(Kt===1){Kt=0;var n=Ki,i=mo,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=Q.T,Q.T=null;var l=le.p;le.p=2;var f=Ke;Ke|=4;try{xv(i,n);var d=Qp,E=Py(n.containerInfo),w=d.focusedElem,C=d.selectionRange;if(E!==w&&w&&w.ownerDocument&&Vy(w.ownerDocument.documentElement,w)){if(C!==null&&Td(w)){var q=C.start,K=C.end;if(K===void 0&&(K=q),"selectionStart"in w)w.selectionStart=q,w.selectionEnd=Math.min(K,w.value.length);else{var ee=w.ownerDocument||document,B=ee&&ee.defaultView||window;if(B.getSelection){var F=B.getSelection(),Ae=w.textContent.length,Ee=Math.min(C.start,Ae),et=C.end===void 0?Ee:Math.min(C.end,Ae);!F.extend&&Ee>et&&(E=et,et=Ee,Ee=E);var k=My(w,Ee),M=My(w,et);if(k&&M&&(F.rangeCount!==1||F.anchorNode!==k.node||F.anchorOffset!==k.offset||F.focusNode!==M.node||F.focusOffset!==M.offset)){var z=ee.createRange();z.setStart(k.node,k.offset),F.removeAllRanges(),Ee>et?(F.addRange(z),F.extend(M.node,M.offset)):(z.setEnd(M.node,M.offset),F.addRange(z))}}}}for(ee=[],F=w;F=F.parentNode;)F.nodeType===1&&ee.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ee.length;w++){var W=ee[w];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}wh=!!Yp,Qp=Yp=null}finally{Ke=f,le.p=l,Q.T=a}}n.current=i,Kt=2}}function Qv(){if(Kt===2){Kt=0;var n=Ki,i=mo,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=Q.T,Q.T=null;var l=le.p;le.p=2;var f=Ke;Ke|=4;try{bv(n,i.alternate,i)}finally{Ke=f,le.p=l,Q.T=a}}Kt=3}}function Kv(){if(Kt===4||Kt===3){Kt=0,ac();var n=Ki,i=mo,a=go,l=kv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Kt=5:(Kt=0,mo=Ki=null,Xv(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Qi=null),Va(a),i=i.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Q.T,f=le.p,le.p=2,Q.T=null;try{for(var d=n.onRecoverableError,E=0;E<l.length;E++){var w=l[E];d(w.value,{componentStack:w.stack})}}finally{Q.T=i,le.p=f}}(go&3)!==0&&hh(),Dr(n),f=n.pendingLanes,(a&4194090)!==0&&(f&42)!==0?n===Mp?eu++:(eu=0,Mp=n):eu=0,tu(0)}}function Xv(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Vl(i)))}function hh(n){return Yv(),Qv(),Kv(),Wv()}function Wv(){if(Kt!==5)return!1;var n=Ki,i=Np;Np=0;var a=Va(go),l=Q.T,f=le.p;try{le.p=32>a?32:a,Q.T=null,a=Op,Op=null;var d=Ki,E=go;if(Kt=0,mo=Ki=null,go=0,(Ke&6)!==0)throw Error(s(331));var w=Ke;if(Ke|=4,Vv(d.current),Nv(d,d.current,E,a),Ke=w,tu(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{le.p=f,Q.T=l,Xv(n,i)}}function Zv(n,i,a){i=Gn(a,i),i=hp(n.stateNode,i,2),n=ji(n,i,2),n!==null&&(Br(n,2),Dr(n))}function tt(n,i,a){if(n.tag===3)Zv(n,n,a);else for(;i!==null;){if(i.tag===3){Zv(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Qi===null||!Qi.has(l))){n=Gn(a,n),a=nv(2),l=ji(i,a,2),l!==null&&(rv(a,l,i,n),Br(l,2),Dr(l));break}}i=i.return}}function Lp(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new MA;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(Ip=!0,f.add(a),n=UA.bind(null,n,i,a),i.then(n,n))}function UA(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,rt===n&&(ze&a)===a&&(mt===4||mt===3&&(ze&62914560)===ze&&300>jn()-Dp?(Ke&2)===0&&yo(n,0):Cp|=a,po===ze&&(po=0)),Dr(n)}function Jv(n,i){i===0&&(i=cl()),n=Za(n,i),n!==null&&(Br(n,i),Dr(n))}function jA(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Jv(n,a)}function zA(n,i){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Jv(n,a)}function qA(n,i){return xs(n,i)}var fh=null,vo=null,Up=!1,dh=!1,jp=!1,ca=0;function Dr(n){n!==vo&&n.next===null&&(vo===null?fh=vo=n:vo=vo.next=n),dh=!0,Up||(Up=!0,HA())}function tu(n,i){if(!jp&&dh){jp=!0;do for(var a=!1,l=fh;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var E=l.suspendedLanes,w=l.pingedLanes;d=(1<<31-on(42|n)+1)-1,d&=f&~(E&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,rE(l,d))}else d=ze,d=Ma(l,l===rt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ps(l,d)||(a=!0,rE(l,d));l=l.next}while(a);jp=!1}}function BA(){eE()}function eE(){dh=Up=!1;var n=0;ca!==0&&(WA()&&(n=ca),ca=0);for(var i=jn(),a=null,l=fh;l!==null;){var f=l.next,d=tE(l,i);d===0?(l.next=null,a===null?fh=f:a.next=f,f===null&&(vo=a)):(a=l,(n!==0||(d&3)!==0)&&(dh=!0)),l=f}tu(n)}function tE(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var E=31-on(d),w=1<<E,C=f[E];C===-1?((w&a)===0||(w&l)!==0)&&(f[E]=ll(w,i)):C<=i&&(n.expiredLanes|=w),d&=~w}if(i=rt,a=ze,a=Ma(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===i&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Ds(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||Ps(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(l!==null&&Ds(l),Va(a)){case 2:case 8:a=Na;break;case 32:a=Ns;break;case 268435456:a=Oa;break;default:a=Ns}return l=nE.bind(null,n),a=xs(a,l),n.callbackPriority=i,n.callbackNode=a,i}return l!==null&&l!==null&&Ds(l),n.callbackPriority=2,n.callbackNode=null,2}function nE(n,i){if(Kt!==0&&Kt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(hh()&&n.callbackNode!==a)return null;var l=ze;return l=Ma(n,n===rt?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Uv(n,l,i),tE(n,jn()),n.callbackNode!=null&&n.callbackNode===a?nE.bind(null,n):null)}function rE(n,i){if(hh())return null;Uv(n,i,!0)}function HA(){JA(function(){(Ke&6)!==0?xs(al,BA):eE()})}function zp(){return ca===0&&(ca=ul()),ca}function iE(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:za(""+n)}function sE(n,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,n.id&&a.setAttribute("form",n.id),i.parentNode.insertBefore(a,i),n=new FormData(n),a.parentNode.removeChild(a),n}function FA(n,i,a,l,f){if(i==="submit"&&a&&a.stateNode===f){var d=iE((f[Tt]||null).action),E=l.submitter;E&&(i=(i=E[Tt]||null)?iE(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var w=new qa("action","action",null,l,f);n.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ca!==0){var C=E?sE(f,E):new FormData(f);ap(a,{pending:!0,data:C,method:f.method,action:d},null,C)}}else typeof d=="function"&&(w.preventDefault(),C=E?sE(f,E):new FormData(f),ap(a,{pending:!0,data:C,method:f.method,action:d},d,C))},currentTarget:f}]})}}for(var qp=0;qp<bd.length;qp++){var Bp=bd[qp],GA=Bp.toLowerCase(),$A=Bp[0].toUpperCase()+Bp.slice(1);ir(GA,"on"+$A)}ir(Uy,"onAnimationEnd"),ir(jy,"onAnimationIteration"),ir(zy,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(uA,"onTransitionRun"),ir(cA,"onTransitionStart"),ir(hA,"onTransitionCancel"),ir(qy,"onTransitionEnd"),Fr("onMouseEnter",["mouseout","mouseover"]),Fr("onMouseLeave",["mouseout","mouseover"]),Fr("onPointerEnter",["pointerout","pointerover"]),Fr("onPointerLeave",["pointerout","pointerover"]),nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nr("onBeforeInput",["compositionend","keypress","textInput","paste"]),nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nu));function aE(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var w=l[E],C=w.instance,q=w.currentTarget;if(w=w.listener,C!==d&&f.isPropagationStopped())break e;d=w,f.currentTarget=q;try{d(f)}catch(K){eh(K)}f.currentTarget=null,d=C}else for(E=0;E<l.length;E++){if(w=l[E],C=w.instance,q=w.currentTarget,w=w.listener,C!==d&&f.isPropagationStopped())break e;d=w,f.currentTarget=q;try{d(f)}catch(K){eh(K)}f.currentTarget=null,d=C}}}}function Ve(n,i){var a=i[dl];a===void 0&&(a=i[dl]=new Set);var l=n+"__bubble";a.has(l)||(oE(i,n,2,!1),a.add(l))}function Hp(n,i,a){var l=0;i&&(l|=4),oE(a,n,l,i)}var ph="_reactListening"+Math.random().toString(36).slice(2);function Fp(n){if(!n[ph]){n[ph]=!0,pl.forEach(function(a){a!=="selectionchange"&&(YA.has(a)||Hp(a,!1,n),Hp(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ph]||(i[ph]=!0,Hp("selectionchange",!1,i))}}function oE(n,i,a,l){switch(NE(i)){case 2:var f=Eb;break;case 8:f=Tb;break;default:f=im}a=f.bind(null,i,a,n),f=void 0,!Hn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Gp(n,i,a,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var w=l.stateNode.containerInfo;if(w===f)break;if(E===4)for(E=l.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;w!==null;){if(E=Hr(w),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){l=d=E;continue e}w=w.parentNode}}l=l.return}gc(function(){var q=d,K=Bn(a),ee=[];e:{var B=By.get(n);if(B!==void 0){var F=qa,Ae=n;switch(n){case"keypress":if(Tr(a)===0)break e;case"keydown":case"keyup":F=Ya;break;case"focusin":Ae="focus",F=Fa;break;case"focusout":Ae="blur",F=Fa;break;case"beforeblur":case"afterblur":F=Fa;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Ac;break;case Uy:case jy:case zy:F=Ga;break;case qy:F=Rc;break;case"scroll":case"scrollend":F=yc;break;case"wheel":F=Qa;break;case"copy":case"cut":case"paste":F=$a;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Rl;break;case"toggle":case"beforetoggle":F=Cc}var Ee=(i&4)!==0,et=!Ee&&(n==="scroll"||n==="scrollend"),k=Ee?B!==null?B+"Capture":null:B;Ee=[];for(var M=q,z;M!==null;){var W=M;if(z=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||z===null||k===null||(W=Hs(M,k),W!=null&&Ee.push(ru(M,W,z))),et)break;M=M.return}0<Ee.length&&(B=new F(B,Ae,null,a,K),ee.push({event:B,listeners:Ee}))}}if((i&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",F=n==="mouseout"||n==="pointerout",B&&a!==Yr&&(Ae=a.relatedTarget||a.fromElement)&&(Hr(Ae)||Ae[zn]))break e;if((F||B)&&(B=K.window===K?K:(B=K.ownerDocument)?B.defaultView||B.parentWindow:window,F?(Ae=a.relatedTarget||a.toElement,F=q,Ae=Ae?Hr(Ae):null,Ae!==null&&(et=u(Ae),Ee=Ae.tag,Ae!==et||Ee!==5&&Ee!==27&&Ee!==6)&&(Ae=null)):(F=null,Ae=q),F!==Ae)){if(Ee=Fn,W="onMouseLeave",k="onMouseEnter",M="mouse",(n==="pointerout"||n==="pointerover")&&(Ee=Rl,W="onPointerLeave",k="onPointerEnter",M="pointer"),et=F==null?B:yr(F),z=Ae==null?B:yr(Ae),B=new Ee(W,M+"leave",F,a,K),B.target=et,B.relatedTarget=z,W=null,Hr(K)===q&&(Ee=new Ee(k,M+"enter",Ae,a,K),Ee.target=z,Ee.relatedTarget=et,W=Ee),et=W,F&&Ae)t:{for(Ee=F,k=Ae,M=0,z=Ee;z;z=Eo(z))M++;for(z=0,W=k;W;W=Eo(W))z++;for(;0<M-z;)Ee=Eo(Ee),M--;for(;0<z-M;)k=Eo(k),z--;for(;M--;){if(Ee===k||k!==null&&Ee===k.alternate)break t;Ee=Eo(Ee),k=Eo(k)}Ee=null}else Ee=null;F!==null&&lE(ee,B,F,Ee,!1),Ae!==null&&et!==null&&lE(ee,et,Ae,Ee,!0)}}e:{if(B=q?yr(q):window,F=B.nodeName&&B.nodeName.toLowerCase(),F==="select"||F==="input"&&B.type==="file")var pe=Iy;else if(Mt(B))if(Cy)pe=aA;else{pe=iA;var Oe=rA}else F=B.nodeName,!F||F.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?q&&vl(q.elementType)&&(pe=Iy):pe=sA;if(pe&&(pe=pe(n,q))){Zr(ee,pe,a,K);break e}Oe&&Oe(n,B,q),n==="focusout"&&q&&B.type==="number"&&q.memoizedProps.value!=null&&Vi(B,"number",B.value)}switch(Oe=q?yr(q):window,n){case"focusin":(Mt(Oe)||Oe.contentEditable==="true")&&(Ka=Oe,Sd=q,xl=null);break;case"focusout":xl=Sd=Ka=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,ky(ee,a,K);break;case"selectionchange":if(lA)break;case"keydown":case"keyup":ky(ee,a,K)}var ye;if(Ar)e:{switch(n){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Ue?Y(n,a)&&(Te="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(v&&a.locale!=="ko"&&(Ue||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ue&&(ye=Tl()):(Er=K,Pi="value"in Er?Er.value:Er.textContent,Ue=!0)),Oe=mh(q,Te),0<Oe.length&&(Te=new Al(Te,n,null,a,K),ee.push({event:Te,listeners:Oe}),ye?Te.data=ye:(ye=oe(a),ye!==null&&(Te.data=ye)))),(ye=y?Ot(n,a):je(n,a))&&(Te=mh(q,"onBeforeInput"),0<Te.length&&(Oe=new Al("onBeforeInput","beforeinput",null,a,K),ee.push({event:Oe,listeners:Te}),Oe.data=ye)),FA(ee,n,q,a,K)}aE(ee,i)})}function ru(n,i,a){return{instance:n,listener:i,currentTarget:a}}function mh(n,i){for(var a=i+"Capture",l=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Hs(n,a),f!=null&&l.unshift(ru(n,f,d)),f=Hs(n,i),f!=null&&l.push(ru(n,f,d))),n.tag===3)return l;n=n.return}return[]}function Eo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function lE(n,i,a,l,f){for(var d=i._reactName,E=[];a!==null&&a!==l;){var w=a,C=w.alternate,q=w.stateNode;if(w=w.tag,C!==null&&C===l)break;w!==5&&w!==26&&w!==27||q===null||(C=q,f?(q=Hs(a,d),q!=null&&E.unshift(ru(a,q,C))):f||(q=Hs(a,d),q!=null&&E.push(ru(a,q,C)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var QA=/\r\n?/g,KA=/\u0000|\uFFFD/g;function uE(n){return(typeof n=="string"?n:""+n).replace(QA,`
`).replace(KA,"")}function cE(n,i){return i=uE(i),uE(n)===i}function gh(){}function Je(n,i,a,l,f,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||qn(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&qn(n,""+l);break;case"className":_r(n,"class",l);break;case"tabIndex":_r(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":_r(n,a,l);break;case"style":_l(n,l,d);break;case"data":if(i!=="object"){_r(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=za(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Je(n,i,"name",f.name,f,null),Je(n,i,"formEncType",f.formEncType,f,null),Je(n,i,"formMethod",f.formMethod,f,null),Je(n,i,"formTarget",f.formTarget,f,null)):(Je(n,i,"encType",f.encType,f,null),Je(n,i,"method",f.method,f,null),Je(n,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=za(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=gh);break;case"onScroll":l!=null&&Ve("scroll",n);break;case"onScrollEnd":l!=null&&Ve("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=za(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":Ve("beforetoggle",n),Ve("toggle",n),Mi(n,"popover",l);break;case"xlinkActuate":$t(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":$t(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":$t(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":$t(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":$t(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":$t(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":$t(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":$t(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":$t(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Mi(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=md.get(a)||a,Mi(n,a,l))}}function $p(n,i,a,l,f,d){switch(a){case"style":_l(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?qn(n,l):(typeof l=="number"||typeof l=="bigint")&&qn(n,""+l);break;case"onScroll":l!=null&&Ve("scroll",n);break;case"onScrollEnd":l!=null&&Ve("scrollend",n);break;case"onClick":l!=null&&(n.onclick=gh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pa.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),d=n[Tt]||null,d=d!=null?d[a]:null,typeof d=="function"&&n.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,l,f);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):Mi(n,a,l)}}}function Xt(n,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",n),Ve("load",n);var l=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Je(n,i,d,E,a,null)}}f&&Je(n,i,"srcSet",a.srcSet,a,null),l&&Je(n,i,"src",a.src,a,null);return;case"input":Ve("invalid",n);var w=d=E=f=null,C=null,q=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":f=K;break;case"type":E=K;break;case"checked":C=K;break;case"defaultChecked":q=K;break;case"value":d=K;break;case"defaultValue":w=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:Je(n,i,l,K,a,null)}}zs(n,d,w,C,q,E,f,!1),ja(n);return;case"select":Ve("invalid",n),l=E=d=null;for(f in a)if(a.hasOwnProperty(f)&&(w=a[f],w!=null))switch(f){case"value":d=w;break;case"defaultValue":E=w;break;case"multiple":l=w;default:Je(n,i,f,w,a,null)}i=d,a=E,n.multiple=!!l,i!=null?$r(n,!!l,i,!1):a!=null&&$r(n,!!l,a,!0);return;case"textarea":Ve("invalid",n),d=f=l=null;for(E in a)if(a.hasOwnProperty(E)&&(w=a[E],w!=null))switch(E){case"value":l=w;break;case"defaultValue":f=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Je(n,i,E,w,a,null)}qs(n,l,f,d),ja(n);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Je(n,i,C,l,a,null)}return;case"dialog":Ve("beforetoggle",n),Ve("toggle",n),Ve("cancel",n),Ve("close",n);break;case"iframe":case"object":Ve("load",n);break;case"video":case"audio":for(l=0;l<nu.length;l++)Ve(nu[l],n);break;case"image":Ve("error",n),Ve("load",n);break;case"details":Ve("toggle",n);break;case"embed":case"source":case"link":Ve("error",n),Ve("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in a)if(a.hasOwnProperty(q)&&(l=a[q],l!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Je(n,i,q,l,a,null)}return;default:if(vl(i)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&$p(n,i,K,l,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(l=a[w],l!=null&&Je(n,i,w,l,a,null))}function XA(n,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,E=null,w=null,C=null,q=null,K=null;for(F in a){var ee=a[F];if(a.hasOwnProperty(F)&&ee!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":C=ee;default:l.hasOwnProperty(F)||Je(n,i,F,null,l,ee)}}for(var B in l){var F=l[B];if(ee=a[B],l.hasOwnProperty(B)&&(F!=null||ee!=null))switch(B){case"type":d=F;break;case"name":f=F;break;case"checked":q=F;break;case"defaultChecked":K=F;break;case"value":E=F;break;case"defaultValue":w=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:F!==ee&&Je(n,i,B,F,l,ee)}}In(n,E,w,C,q,K,d,f);return;case"select":F=E=w=B=null;for(d in a)if(C=a[d],a.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":F=C;default:l.hasOwnProperty(d)||Je(n,i,d,null,l,C)}for(f in l)if(d=l[f],C=a[f],l.hasOwnProperty(f)&&(d!=null||C!=null))switch(f){case"value":B=d;break;case"defaultValue":w=d;break;case"multiple":E=d;default:d!==C&&Je(n,i,f,d,l,C)}i=w,a=E,l=F,B!=null?$r(n,!!a,B,!1):!!l!=!!a&&(i!=null?$r(n,!!a,i,!0):$r(n,!!a,a?[]:"",!1));return;case"textarea":F=B=null;for(w in a)if(f=a[w],a.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Je(n,i,w,null,l,f)}for(E in l)if(f=l[E],d=a[E],l.hasOwnProperty(E)&&(f!=null||d!=null))switch(E){case"value":B=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&Je(n,i,E,f,l,d)}We(n,B,F);return;case"option":for(var Ae in a)if(B=a[Ae],a.hasOwnProperty(Ae)&&B!=null&&!l.hasOwnProperty(Ae))switch(Ae){case"selected":n.selected=!1;break;default:Je(n,i,Ae,null,l,B)}for(C in l)if(B=l[C],F=a[C],l.hasOwnProperty(C)&&B!==F&&(B!=null||F!=null))switch(C){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Je(n,i,C,B,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in a)B=a[Ee],a.hasOwnProperty(Ee)&&B!=null&&!l.hasOwnProperty(Ee)&&Je(n,i,Ee,null,l,B);for(q in l)if(B=l[q],F=a[q],l.hasOwnProperty(q)&&B!==F&&(B!=null||F!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:Je(n,i,q,B,l,F)}return;default:if(vl(i)){for(var et in a)B=a[et],a.hasOwnProperty(et)&&B!==void 0&&!l.hasOwnProperty(et)&&$p(n,i,et,void 0,l,B);for(K in l)B=l[K],F=a[K],!l.hasOwnProperty(K)||B===F||B===void 0&&F===void 0||$p(n,i,K,B,l,F);return}}for(var k in a)B=a[k],a.hasOwnProperty(k)&&B!=null&&!l.hasOwnProperty(k)&&Je(n,i,k,null,l,B);for(ee in l)B=l[ee],F=a[ee],!l.hasOwnProperty(ee)||B===F||B==null&&F==null||Je(n,i,ee,B,l,F)}var Yp=null,Qp=null;function yh(n){return n.nodeType===9?n:n.ownerDocument}function hE(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fE(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Kp(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xp=null;function WA(){var n=window.event;return n&&n.type==="popstate"?n===Xp?!1:(Xp=n,!0):(Xp=null,!1)}var dE=typeof setTimeout=="function"?setTimeout:void 0,ZA=typeof clearTimeout=="function"?clearTimeout:void 0,pE=typeof Promise=="function"?Promise:void 0,JA=typeof queueMicrotask=="function"?queueMicrotask:typeof pE<"u"?function(n){return pE.resolve(null).then(n).catch(eb)}:dE;function eb(n){setTimeout(function(){throw n})}function Wi(n){return n==="head"}function mE(n,i){var a=i,l=0,f=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var E=n.ownerDocument;if(a&1&&iu(E.documentElement),a&2&&iu(E.body),a&4)for(a=E.head,iu(a),E=a.firstChild;E;){var w=E.nextSibling,C=E.nodeName;E[ks]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=w}}if(f===0){n.removeChild(d),fu(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);fu(i)}function Wp(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wp(a),Oi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function tb(n,i,a,l){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[ks])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=ar(n.nextSibling),n===null)break}return null}function nb(n,i,a){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=ar(n.nextSibling),n===null))return null;return n}function Zp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function rb(n,i){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Jp=null;function gE(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}function yE(n,i,a){switch(i=yh(a),n){case"html":if(n=i.documentElement,!n)throw Error(s(452));return n;case"head":if(n=i.head,!n)throw Error(s(453));return n;case"body":if(n=i.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function iu(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Oi(n)}var Wn=new Map,_E=new Set;function _h(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var hi=le.d;le.d={f:ib,r:sb,D:ab,C:ob,L:lb,m:ub,X:hb,S:cb,M:fb};function ib(){var n=hi.f(),i=uh();return n||i}function sb(n){var i=gr(n);i!==null&&i.tag===5&&i.type==="form"?U_(i):hi.r(n)}var To=typeof document>"u"?null:document;function vE(n,i,a){var l=To;if(l&&typeof i=="string"&&i){var f=St(i);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),_E.has(f)||(_E.add(f),n={rel:n,crossOrigin:a,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Xt(i,"link",n),yt(i),l.head.appendChild(i)))}}function ab(n){hi.D(n),vE("dns-prefetch",n,null)}function ob(n,i){hi.C(n,i),vE("preconnect",n,i)}function lb(n,i,a){hi.L(n,i,a);var l=To;if(l&&n&&i){var f='link[rel="preload"][as="'+St(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+St(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+St(a.imageSizes)+'"]')):f+='[href="'+St(n)+'"]';var d=f;switch(i){case"style":d=So(n);break;case"script":d=wo(n)}Wn.has(d)||(n=_({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:n,as:i},a),Wn.set(d,n),l.querySelector(f)!==null||i==="style"&&l.querySelector(su(d))||i==="script"&&l.querySelector(au(d))||(i=l.createElement("link"),Xt(i,"link",n),yt(i),l.head.appendChild(i)))}}function ub(n,i){hi.m(n,i);var a=To;if(a&&n){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+St(l)+'"][href="'+St(n)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=wo(n)}if(!Wn.has(d)&&(n=_({rel:"modulepreload",href:n},i),Wn.set(d,n),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(au(d)))return}l=a.createElement("link"),Xt(l,"link",n),yt(l),a.head.appendChild(l)}}}function cb(n,i,a){hi.S(n,i,a);var l=To;if(l&&n){var f=gn(l).hoistableStyles,d=So(n);i=i||"default";var E=f.get(d);if(!E){var w={loading:0,preload:null};if(E=l.querySelector(su(d)))w.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":i},a),(a=Wn.get(d))&&em(n,a);var C=E=l.createElement("link");yt(C),Xt(C,"link",n),C._p=new Promise(function(q,K){C.onload=q,C.onerror=K}),C.addEventListener("load",function(){w.loading|=1}),C.addEventListener("error",function(){w.loading|=2}),w.loading|=4,vh(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:w},f.set(d,E)}}}function hb(n,i){hi.X(n,i);var a=To;if(a&&n){var l=gn(a).hoistableScripts,f=wo(n),d=l.get(f);d||(d=a.querySelector(au(f)),d||(n=_({src:n,async:!0},i),(i=Wn.get(f))&&tm(n,i),d=a.createElement("script"),yt(d),Xt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function fb(n,i){hi.M(n,i);var a=To;if(a&&n){var l=gn(a).hoistableScripts,f=wo(n),d=l.get(f);d||(d=a.querySelector(au(f)),d||(n=_({src:n,async:!0,type:"module"},i),(i=Wn.get(f))&&tm(n,i),d=a.createElement("script"),yt(d),Xt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function EE(n,i,a,l){var f=(f=ve.current)?_h(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=So(a.href),a=gn(f).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=So(a.href);var d=gn(f).hoistableStyles,E=d.get(n);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,E),(d=f.querySelector(su(n)))&&!d._p&&(E.instance=d,E.state.loading=5),Wn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Wn.set(n,a),d||db(f,n,a,E.state))),i&&l===null)throw Error(s(528,""));return E}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=wo(a),a=gn(f).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function So(n){return'href="'+St(n)+'"'}function su(n){return'link[rel="stylesheet"]['+n+"]"}function TE(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function db(n,i,a,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Xt(i,"link",a),yt(i),n.head.appendChild(i))}function wo(n){return'[src="'+St(n)+'"]'}function au(n){return"script[async]"+n}function SE(n,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+St(a.href)+'"]');if(l)return i.instance=l,yt(l),l;var f=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),yt(l),Xt(l,"style",f),vh(l,a.precedence,n),i.instance=l;case"stylesheet":f=So(a.href);var d=n.querySelector(su(f));if(d)return i.state.loading|=4,i.instance=d,yt(d),d;l=TE(a),(f=Wn.get(f))&&em(l,f),d=(n.ownerDocument||n).createElement("link"),yt(d);var E=d;return E._p=new Promise(function(w,C){E.onload=w,E.onerror=C}),Xt(d,"link",l),i.state.loading|=4,vh(d,a.precedence,n),i.instance=d;case"script":return d=wo(a.src),(f=n.querySelector(au(d)))?(i.instance=f,yt(f),f):(l=a,(f=Wn.get(d))&&(l=_({},a),tm(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),yt(f),Xt(f,"link",l),n.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,vh(l,a.precedence,n));return i.instance}function vh(n,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,E=0;E<l.length;E++){var w=l[E];if(w.dataset.precedence===i)d=w;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(n,i.firstChild))}function em(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function tm(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Eh=null;function wE(n,i,a){if(Eh===null){var l=new Map,f=Eh=new Map;f.set(a,l)}else f=Eh,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var d=a[f];if(!(d[ks]||d[Nt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=n+E;var w=l.get(E);w?w.push(d):l.set(E,[d])}}return l}function AE(n,i,a){n=n.ownerDocument||n,n.head.insertBefore(a,i==="title"?n.querySelector("head > title"):null)}function pb(n,i,a){if(a===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function bE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ou=null;function mb(){}function gb(n,i,a){if(ou===null)throw Error(s(475));var l=ou;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=So(a.href),d=n.querySelector(su(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=Th.bind(l),n.then(l,l)),i.state.loading|=4,i.instance=d,yt(d);return}d=n.ownerDocument||n,a=TE(a),(f=Wn.get(f))&&em(a,f),d=d.createElement("link"),yt(d);var E=d;E._p=new Promise(function(w,C){E.onload=w,E.onerror=C}),Xt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Th.bind(l),n.addEventListener("load",i),n.addEventListener("error",i))}}function yb(){if(ou===null)throw Error(s(475));var n=ou;return n.stylesheets&&n.count===0&&nm(n,n.stylesheets),0<n.count?function(i){var a=setTimeout(function(){if(n.stylesheets&&nm(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(a)}}:null}function Th(){if(this.count--,this.count===0){if(this.stylesheets)nm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Sh=null;function nm(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Sh=new Map,i.forEach(_b,n),Sh=null,Th.call(n))}function _b(n,i){if(!(i.state.loading&4)){var a=Sh.get(n);if(a)var l=a.get(null);else{a=new Map,Sh.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var E=f[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),l=E)}l&&a.set(null,l)}f=i.instance,E=f.getAttribute("data-precedence"),d=a.get(E)||l,d===l&&a.set(null,f),a.set(E,f),this.count++,l=Th.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),i.state.loading|=4}}var lu={$$typeof:re,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function vb(n,i,a,l,f,d,E,w){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qr(0),this.hiddenUpdates=qr(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function RE(n,i,a,l,f,d,E,w,C,q,K,ee){return n=new vb(n,i,a,E,w,C,q,ee),i=1,d===!0&&(i|=24),d=xn(3,null,null,i),n.current=d,d.stateNode=n,i=Ld(),i.refCount++,n.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},qd(d),n}function IE(n){return n?(n=Ja,n):Ja}function CE(n,i,a,l,f,d){f=IE(f),l.context===null?l.context=f:l.pendingContext=f,l=Ui(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=ji(n,l,i),a!==null&&(Vn(a,n,i),Ul(a,n,i))}function xE(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function rm(n,i){xE(n,i),(n=n.alternate)&&xE(n,i)}function DE(n){if(n.tag===13){var i=Za(n,67108864);i!==null&&Vn(i,n,67108864),rm(n,67108864)}}var wh=!0;function Eb(n,i,a,l){var f=Q.T;Q.T=null;var d=le.p;try{le.p=2,im(n,i,a,l)}finally{le.p=d,Q.T=f}}function Tb(n,i,a,l){var f=Q.T;Q.T=null;var d=le.p;try{le.p=8,im(n,i,a,l)}finally{le.p=d,Q.T=f}}function im(n,i,a,l){if(wh){var f=sm(l);if(f===null)Gp(n,i,l,Ah,a),OE(n,l);else if(wb(f,n,i,a,l))l.stopPropagation();else if(OE(n,l),i&4&&-1<Sb.indexOf(n)){for(;f!==null;){var d=gr(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=tr(d.pendingLanes);if(E!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var C=1<<31-on(E);w.entanglements[1]|=C,E&=~C}Dr(d),(Ke&6)===0&&(oh=jn()+500,tu(0))}}break;case 13:w=Za(d,2),w!==null&&Vn(w,d,2),uh(),rm(d,2)}if(d=sm(l),d===null&&Gp(n,i,l,Ah,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else Gp(n,i,l,null,a)}}function sm(n){return n=Bn(n),am(n)}var Ah=null;function am(n){if(Ah=null,n=Hr(n),n!==null){var i=u(n);if(i===null)n=null;else{var a=i.tag;if(a===13){if(n=h(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Ah=n,null}function NE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ud()){case al:return 2;case Na:return 8;case Ns:case cd:return 32;case Oa:return 268435456;default:return 32}default:return 32}}var om=!1,Zi=null,Ji=null,es=null,uu=new Map,cu=new Map,ts=[],Sb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function OE(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":uu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cu.delete(i.pointerId)}}function hu(n,i,a,l,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=gr(i),i!==null&&DE(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function wb(n,i,a,l,f){switch(i){case"focusin":return Zi=hu(Zi,n,i,a,l,f),!0;case"dragenter":return Ji=hu(Ji,n,i,a,l,f),!0;case"mouseover":return es=hu(es,n,i,a,l,f),!0;case"pointerover":var d=f.pointerId;return uu.set(d,hu(uu.get(d)||null,n,i,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,cu.set(d,hu(cu.get(d)||null,n,i,a,l,f)),!0}return!1}function ME(n){var i=Hr(n.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){n.blockedOn=i,uc(n.priority,function(){if(a.tag===13){var l=Mn();l=xi(l);var f=Za(a,l);f!==null&&Vn(f,a,l),rm(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bh(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=sm(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Yr=l,a.target.dispatchEvent(l),Yr=null}else return i=gr(a),i!==null&&DE(i),n.blockedOn=a,!1;i.shift()}return!0}function VE(n,i,a){bh(n)&&a.delete(i)}function Ab(){om=!1,Zi!==null&&bh(Zi)&&(Zi=null),Ji!==null&&bh(Ji)&&(Ji=null),es!==null&&bh(es)&&(es=null),uu.forEach(VE),cu.forEach(VE)}function Rh(n,i){n.blockedOn===i&&(n.blockedOn=null,om||(om=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ab)))}var Ih=null;function PE(n){Ih!==n&&(Ih=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ih===n&&(Ih=null);for(var i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],f=n[i+2];if(typeof l!="function"){if(am(l||a)===null)continue;break}var d=gr(a);d!==null&&(n.splice(i,3),i-=3,ap(d,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function fu(n){function i(C){return Rh(C,n)}Zi!==null&&Rh(Zi,n),Ji!==null&&Rh(Ji,n),es!==null&&Rh(es,n),uu.forEach(i),cu.forEach(i);for(var a=0;a<ts.length;a++){var l=ts[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<ts.length&&(a=ts[0],a.blockedOn===null);)ME(a),a.blockedOn===null&&ts.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],d=a[l+1],E=f[Tt]||null;if(typeof d=="function")E||PE(a);else if(E){var w=null;if(d&&d.hasAttribute("formAction")){if(f=d,E=d[Tt]||null)w=E.formAction;else if(am(f)!==null)continue}else w=E.action;typeof w=="function"?a[l+1]=w:(a.splice(l,3),l-=3),PE(a)}}}function lm(n){this._internalRoot=n}Ch.prototype.render=lm.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=Mn();CE(a,l,n,i,null,null)},Ch.prototype.unmount=lm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;CE(n.current,2,null,n,null,null),uh(),i[zn]=null}};function Ch(n){this._internalRoot=n}Ch.prototype.unstable_scheduleHydration=function(n){if(n){var i=Di();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ts.length&&i!==0&&i<ts[a].priority;a++);ts.splice(a,0,n),a===0&&ME(n)}};var kE=e.version;if(kE!=="19.1.0")throw Error(s(527,kE,"19.1.0"));le.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=m(i),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var bb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xh.isDisabled&&xh.supportsFiber)try{dt=xh.inject(bb),Qe=xh}catch{}}return pu.createRoot=function(n,i){if(!o(n))throw Error(s(299));var a=!1,l="",f=Z_,d=J_,E=ev,w=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks)),i=RE(n,1,!1,null,null,a,l,f,d,E,w,null),n[zn]=i.current,Fp(n),new lm(i)},pu.hydrateRoot=function(n,i,a){if(!o(n))throw Error(s(299));var l=!1,f="",d=Z_,E=J_,w=ev,C=null,q=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(C=a.unstable_transitionCallbacks),a.formState!==void 0&&(q=a.formState)),i=RE(n,1,!0,i,a??null,l,f,d,E,w,C,q),i.context=IE(null),a=i.current,l=Mn(),l=xi(l),f=Ui(l),f.callback=null,ji(a,f,l),a=l,i.current.lanes=a,Br(i,a),Dr(i),n[zn]=i.current,Fp(n),new Ch(i)},pu.version="19.1.0",pu}var $E;function kb(){if($E)return hm.exports;$E=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hm.exports=Pb(),hm.exports}var Lb=kb();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var YE="popstate";function Ub(r={}){function e(s,o){let{pathname:u,search:h,hash:p}=s.location;return Vm("",{pathname:u,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Du(o)}return zb(e,t,null,r)}function ut(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function hr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jb(){return Math.random().toString(36).substring(2,10)}function QE(r,e){return{usr:r.state,key:r.key,idx:e}}function Vm(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Yo(e):e,state:t,key:e&&e.key||s||jb()}}function Du({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Yo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function zb(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,p="POP",m=null,g=_();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function _(){return(h.state||{idx:null}).idx}function S(){p="POP";let H=_(),J=H==null?null:H-g;g=H,m&&m({action:p,location:$.location,delta:J})}function A(H,J){p="PUSH";let X=Vm($.location,H,J);g=_()+1;let re=QE(X,g),he=$.createHref(X);try{h.pushState(re,"",he)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;o.location.assign(he)}u&&m&&m({action:p,location:$.location,delta:1})}function N(H,J){p="REPLACE";let X=Vm($.location,H,J);g=_();let re=QE(X,g),he=$.createHref(X);h.replaceState(re,"",he),u&&m&&m({action:p,location:$.location,delta:0})}function U(H){return qb(H)}let $={get action(){return p},get location(){return r(o,h)},listen(H){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(YE,S),m=H,()=>{o.removeEventListener(YE,S),m=null}},createHref(H){return e(o,H)},createURL:U,encodeLocation(H){let J=U(H);return{pathname:J.pathname,search:J.search,hash:J.hash}},push:A,replace:N,go(H){return h.go(H)}};return $}function qb(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),ut(t,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Du(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function qT(r,e,t="/"){return Bb(r,e,t,!1)}function Bb(r,e,t,s){let o=typeof e=="string"?Yo(e):e,u=Ti(o.pathname||"/",t);if(u==null)return null;let h=BT(r);Hb(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let g=eR(u);p=Zb(h[m],g,s)}return p}function BT(r,e=[],t=[],s=""){let o=(u,h,p)=>{let m={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(ut(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=yi([s,m.relativePath]),_=t.concat(m);u.children&&u.children.length>0&&(ut(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),BT(u.children,e,_,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:Xb(g,u.index),routesMeta:_})};return r.forEach((u,h)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))o(u,h);else for(let m of HT(u.path))o(u,h,m)}),e}function HT(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=HT(s.join("/")),p=[];return p.push(...h.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...h),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function Hb(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Wb(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Fb=/^:[\w-]+$/,Gb=3,$b=2,Yb=1,Qb=10,Kb=-2,KE=r=>r==="*";function Xb(r,e){let t=r.split("/"),s=t.length;return t.some(KE)&&(s+=Kb),e&&(s+=$b),t.filter(o=>!KE(o)).reduce((o,u)=>o+(Fb.test(u)?Gb:u===""?Yb:Qb),s)}function Wb(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function Zb(r,e,t=!1){let{routesMeta:s}=r,o={},u="/",h=[];for(let p=0;p<s.length;++p){let m=s[p],g=p===s.length-1,_=u==="/"?e:e.slice(u.length)||"/",S=rf({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},_),A=m.route;if(!S&&g&&t&&!s[s.length-1].route.index&&(S=rf({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!S)return null;Object.assign(o,S.params),h.push({params:o,pathname:yi([u,S.pathname]),pathnameBase:iR(yi([u,S.pathnameBase])),route:A}),S.pathnameBase!=="/"&&(u=yi([u,S.pathnameBase]))}return h}function rf(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=Jb(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((g,{paramName:_,isOptional:S},A)=>{if(_==="*"){let U=p[A]||"";h=u.slice(0,u.length-U.length).replace(/(.)\/+$/,"$1")}const N=p[A];return S&&!N?g[_]=void 0:g[_]=(N||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:r}}function Jb(r,e=!1,t=!0){hr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function eR(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hr(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Ti(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function tR(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Yo(r):r;return{pathname:t?t.startsWith("/")?t:nR(t,e):e,search:sR(s),hash:aR(o)}}function nR(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function mm(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rR(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function vg(r){let e=rR(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Eg(r,e,t,s=!1){let o;typeof r=="string"?o=Yo(r):(o={...r},ut(!o.pathname||!o.pathname.includes("?"),mm("?","pathname","search",o)),ut(!o.pathname||!o.pathname.includes("#"),mm("#","pathname","hash",o)),ut(!o.search||!o.search.includes("#"),mm("#","search","hash",o)));let u=r===""||o.pathname==="",h=u?"/":o.pathname,p;if(h==null)p=t;else{let S=e.length-1;if(!s&&h.startsWith("..")){let A=h.split("/");for(;A[0]==="..";)A.shift(),S-=1;o.pathname=A.join("/")}p=S>=0?e[S]:"/"}let m=tR(o,p),g=h&&h!=="/"&&h.endsWith("/"),_=(u||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||_)&&(m.pathname+="/"),m}var yi=r=>r.join("/").replace(/\/\/+/g,"/"),iR=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),sR=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,aR=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function oR(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var FT=["POST","PUT","PATCH","DELETE"];new Set(FT);var lR=["GET",...FT];new Set(lR);var Qo=G.createContext(null);Qo.displayName="DataRouter";var Cf=G.createContext(null);Cf.displayName="DataRouterState";G.createContext(!1);var GT=G.createContext({isTransitioning:!1});GT.displayName="ViewTransition";var uR=G.createContext(new Map);uR.displayName="Fetchers";var cR=G.createContext(null);cR.displayName="Await";var pr=G.createContext(null);pr.displayName="Navigation";var Gu=G.createContext(null);Gu.displayName="Location";var zr=G.createContext({outlet:null,matches:[],isDataRoute:!1});zr.displayName="Route";var Tg=G.createContext(null);Tg.displayName="RouteError";function hR(r,{relative:e}={}){ut(Ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=G.useContext(pr),{hash:o,pathname:u,search:h}=Yu(r,{relative:e}),p=u;return t!=="/"&&(p=u==="/"?t:yi([t,u])),s.createHref({pathname:p,search:h,hash:o})}function Ko(){return G.useContext(Gu)!=null}function As(){return ut(Ko(),"useLocation() may be used only in the context of a <Router> component."),G.useContext(Gu).location}var $T="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function YT(r){G.useContext(pr).static||G.useLayoutEffect(r)}function $u(){let{isDataRoute:r}=G.useContext(zr);return r?AR():fR()}function fR(){ut(Ko(),"useNavigate() may be used only in the context of a <Router> component.");let r=G.useContext(Qo),{basename:e,navigator:t}=G.useContext(pr),{matches:s}=G.useContext(zr),{pathname:o}=As(),u=JSON.stringify(vg(s)),h=G.useRef(!1);return YT(()=>{h.current=!0}),G.useCallback((m,g={})=>{if(hr(h.current,$T),!h.current)return;if(typeof m=="number"){t.go(m);return}let _=Eg(m,JSON.parse(u),o,g.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:yi([e,_.pathname])),(g.replace?t.replace:t.push)(_,g.state,g)},[e,t,u,o,r])}G.createContext(null);function Yu(r,{relative:e}={}){let{matches:t}=G.useContext(zr),{pathname:s}=As(),o=JSON.stringify(vg(t));return G.useMemo(()=>Eg(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function dR(r,e){return QT(r,e)}function QT(r,e,t,s){var J;ut(Ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=G.useContext(pr),{matches:u}=G.useContext(zr),h=u[u.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",_=h&&h.route;{let X=_&&_.path||"";KT(m,!_||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let S=As(),A;if(e){let X=typeof e=="string"?Yo(e):e;ut(g==="/"||((J=X.pathname)==null?void 0:J.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${X.pathname}" was given in the \`location\` prop.`),A=X}else A=S;let N=A.pathname||"/",U=N;if(g!=="/"){let X=g.replace(/^\//,"").split("/");U="/"+N.replace(/^\//,"").split("/").slice(X.length).join("/")}let $=qT(r,{pathname:U});hr(_||$!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),hr($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=_R($&&$.map(X=>Object.assign({},X,{params:Object.assign({},p,X.params),pathname:yi([g,o.encodeLocation?o.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?g:yi([g,o.encodeLocation?o.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),u,t,s);return e&&H?G.createElement(Gu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},H):H}function pR(){let r=wR(),e=oR(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=G.createElement(G.Fragment,null,G.createElement("p",null,"💿 Hey developer 👋"),G.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",G.createElement("code",{style:u},"ErrorBoundary")," or"," ",G.createElement("code",{style:u},"errorElement")," prop on your route.")),G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},e),t?G.createElement("pre",{style:o},t):null,h)}var mR=G.createElement(pR,null),gR=class extends G.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?G.createElement(zr.Provider,{value:this.props.routeContext},G.createElement(Tg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function yR({routeContext:r,match:e,children:t}){let s=G.useContext(Qo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),G.createElement(zr.Provider,{value:r},t)}function _R(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,u=t==null?void 0:t.errors;if(u!=null){let m=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);ut(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let h=!1,p=-1;if(t)for(let m=0;m<o.length;m++){let g=o[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:_,errors:S}=t,A=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||A){h=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,g,_)=>{let S,A=!1,N=null,U=null;t&&(S=u&&g.route.id?u[g.route.id]:void 0,N=g.route.errorElement||mR,h&&(p<0&&_===0?(KT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,U=null):p===_&&(A=!0,U=g.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,_+1)),H=()=>{let J;return S?J=N:A?J=U:g.route.Component?J=G.createElement(g.route.Component,null):g.route.element?J=g.route.element:J=m,G.createElement(yR,{match:g,routeContext:{outlet:m,matches:$,isDataRoute:t!=null},children:J})};return t&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?G.createElement(gR,{location:t.location,revalidation:t.revalidation,component:N,error:S,children:H(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):H()},null)}function Sg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vR(r){let e=G.useContext(Qo);return ut(e,Sg(r)),e}function ER(r){let e=G.useContext(Cf);return ut(e,Sg(r)),e}function TR(r){let e=G.useContext(zr);return ut(e,Sg(r)),e}function wg(r){let e=TR(r),t=e.matches[e.matches.length-1];return ut(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function SR(){return wg("useRouteId")}function wR(){var s;let r=G.useContext(Tg),e=ER("useRouteError"),t=wg("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function AR(){let{router:r}=vR("useNavigate"),e=wg("useNavigate"),t=G.useRef(!1);return YT(()=>{t.current=!0}),G.useCallback(async(o,u={})=>{hr(t.current,$T),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var XE={};function KT(r,e,t){!e&&!XE[r]&&(XE[r]=!0,hr(!1,t))}G.memo(bR);function bR({routes:r,future:e,state:t}){return QT(r,void 0,t,e)}function RR({to:r,replace:e,state:t,relative:s}){ut(Ko(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=G.useContext(pr);hr(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=G.useContext(zr),{pathname:h}=As(),p=$u(),m=Eg(r,vg(u),h,s==="path"),g=JSON.stringify(m);return G.useEffect(()=>{p(JSON.parse(g),{replace:e,state:t,relative:s})},[p,g,s,e,t]),null}function jh(r){ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function IR({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){ut(!Ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=G.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=Yo(t));let{pathname:m="/",search:g="",hash:_="",state:S=null,key:A="default"}=t,N=G.useMemo(()=>{let U=Ti(m,h);return U==null?null:{location:{pathname:U,search:g,hash:_,state:S,key:A},navigationType:s}},[h,m,g,_,S,A,s]);return hr(N!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:G.createElement(pr.Provider,{value:p},G.createElement(Gu.Provider,{children:e,value:N}))}function CR({children:r,location:e}){return dR(Pm(r),e)}function Pm(r,e=[]){let t=[];return G.Children.forEach(r,(s,o)=>{if(!G.isValidElement(s))return;let u=[...e,o];if(s.type===G.Fragment){t.push.apply(t,Pm(s.props.children,u));return}ut(s.type===jh,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ut(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Pm(s.props.children,u)),t.push(h)}),t}var zh="get",qh="application/x-www-form-urlencoded";function xf(r){return r!=null&&typeof r.tagName=="string"}function xR(r){return xf(r)&&r.tagName.toLowerCase()==="button"}function DR(r){return xf(r)&&r.tagName.toLowerCase()==="form"}function NR(r){return xf(r)&&r.tagName.toLowerCase()==="input"}function OR(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function MR(r,e){return r.button===0&&(!e||e==="_self")&&!OR(r)}var Dh=null;function VR(){if(Dh===null)try{new FormData(document.createElement("form"),0),Dh=!1}catch{Dh=!0}return Dh}var PR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gm(r){return r!=null&&!PR.has(r)?(hr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qh}"`),null):r}function kR(r,e){let t,s,o,u,h;if(DR(r)){let p=r.getAttribute("action");s=p?Ti(p,e):null,t=r.getAttribute("method")||zh,o=gm(r.getAttribute("enctype"))||qh,u=new FormData(r)}else if(xR(r)||NR(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?Ti(m,e):null,t=r.getAttribute("formmethod")||p.getAttribute("method")||zh,o=gm(r.getAttribute("formenctype"))||gm(p.getAttribute("enctype"))||qh,u=new FormData(p,r),!VR()){let{name:g,type:_,value:S}=r;if(_==="image"){let A=g?`${g}.`:"";u.append(`${A}x`,"0"),u.append(`${A}y`,"0")}else g&&u.append(g,S)}}else{if(xf(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=zh,s=null,o=qh,h=r}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ag(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function LR(r,e,t){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&Ti(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function UR(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jR(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function zR(r,e,t){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await UR(u,t);return h.links?h.links():[]}return[]}));return FR(s.flat(1).filter(jR).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function WE(r,e,t,s,o,u){let h=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,p=(m,g)=>{var _;return t[g].pathname!==m.pathname||((_=t[g].route.path)==null?void 0:_.endsWith("*"))&&t[g].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,g)=>h(m,g)||p(m,g)):u==="data"?e.filter((m,g)=>{var S;let _=s.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(h(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let A=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((S=t[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function qR(r,e,{includeHydrateFallback:t}={}){return BR(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function BR(r){return[...new Set(r)]}function HR(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function FR(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(HR(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}function XT(){let r=G.useContext(Qo);return Ag(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function GR(){let r=G.useContext(Cf);return Ag(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var bg=G.createContext(void 0);bg.displayName="FrameworkContext";function WT(){let r=G.useContext(bg);return Ag(r,"You must render this element inside a <HydratedRouter> element"),r}function $R(r,e){let t=G.useContext(bg),[s,o]=G.useState(!1),[u,h]=G.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:_,onTouchStart:S}=e,A=G.useRef(null);G.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let $=J=>{J.forEach(X=>{h(X.isIntersecting)})},H=new IntersectionObserver($,{threshold:.5});return A.current&&H.observe(A.current),()=>{H.disconnect()}}},[r]),G.useEffect(()=>{if(s){let $=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout($)}}},[s]);let N=()=>{o(!0)},U=()=>{o(!1),h(!1)};return t?r!=="intent"?[u,A,{}]:[u,A,{onFocus:mu(p,N),onBlur:mu(m,U),onMouseEnter:mu(g,N),onMouseLeave:mu(_,U),onTouchStart:mu(S,N)}]:[!1,A,{}]}function mu(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function YR({page:r,...e}){let{router:t}=XT(),s=G.useMemo(()=>qT(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?G.createElement(KR,{page:r,matches:s,...e}):null}function QR(r){let{manifest:e,routeModules:t}=WT(),[s,o]=G.useState([]);return G.useEffect(()=>{let u=!1;return zR(r,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[r,e,t]),s}function KR({page:r,matches:e,...t}){let s=As(),{manifest:o,routeModules:u}=WT(),{basename:h}=XT(),{loaderData:p,matches:m}=GR(),g=G.useMemo(()=>WE(r,e,m,o,s,"data"),[r,e,m,o,s]),_=G.useMemo(()=>WE(r,e,m,o,s,"assets"),[r,e,m,o,s]),S=G.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let U=new Set,$=!1;if(e.forEach(J=>{var re;let X=o.routes[J.route.id];!X||!X.hasLoader||(!g.some(he=>he.route.id===J.route.id)&&J.route.id in p&&((re=u[J.route.id])!=null&&re.shouldRevalidate)||X.hasClientLoader?$=!0:U.add(J.route.id))}),U.size===0)return[];let H=LR(r,h,"data");return $&&U.size>0&&H.searchParams.set("_routes",e.filter(J=>U.has(J.route.id)).map(J=>J.route.id).join(",")),[H.pathname+H.search]},[h,p,s,o,g,e,r,u]),A=G.useMemo(()=>qR(_,o),[_,o]),N=QR(_);return G.createElement(G.Fragment,null,S.map(U=>G.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...t})),A.map(U=>G.createElement("link",{key:U,rel:"modulepreload",href:U,...t})),N.map(({key:U,link:$})=>G.createElement("link",{key:U,...$})))}function XR(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var ZT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ZT&&(window.__reactRouterVersion="7.7.0")}catch{}function WR({basename:r,children:e,window:t}){let s=G.useRef();s.current==null&&(s.current=Ub({window:t,v5Compat:!0}));let o=s.current,[u,h]=G.useState({action:o.action,location:o.location}),p=G.useCallback(m=>{G.startTransition(()=>h(m))},[h]);return G.useLayoutEffect(()=>o.listen(p),[o,p]),G.createElement(IR,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var JT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e1=G.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:p,target:m,to:g,preventScrollReset:_,viewTransition:S,...A},N){let{basename:U}=G.useContext(pr),$=typeof g=="string"&&JT.test(g),H,J=!1;if(typeof g=="string"&&$&&(H=g,ZT))try{let I=new URL(window.location.href),V=g.startsWith("//")?new URL(I.protocol+g):new URL(g),P=Ti(V.pathname,U);V.origin===I.origin&&P!=null?g=P+V.search+V.hash:J=!0}catch{hr(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=hR(g,{relative:o}),[re,he,ue]=$R(s,A),de=tI(g,{replace:h,state:p,target:m,preventScrollReset:_,relative:o,viewTransition:S});function x(I){e&&e(I),I.defaultPrevented||de(I)}let R=G.createElement("a",{...A,...ue,href:H||X,onClick:J||u?e:x,ref:XR(N,he),target:m,"data-discover":!$&&t==="render"?"true":void 0});return re&&!$?G.createElement(G.Fragment,null,R,G.createElement(YR,{page:X})):R});e1.displayName="Link";var ZR=G.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:p,children:m,...g},_){let S=Yu(h,{relative:g.relative}),A=As(),N=G.useContext(Cf),{navigator:U,basename:$}=G.useContext(pr),H=N!=null&&aI(S)&&p===!0,J=U.encodeLocation?U.encodeLocation(S).pathname:S.pathname,X=A.pathname,re=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(X=X.toLowerCase(),re=re?re.toLowerCase():null,J=J.toLowerCase()),re&&$&&(re=Ti(re,$)||re);const he=J!=="/"&&J.endsWith("/")?J.length-1:J.length;let ue=X===J||!o&&X.startsWith(J)&&X.charAt(he)==="/",de=re!=null&&(re===J||!o&&re.startsWith(J)&&re.charAt(J.length)==="/"),x={isActive:ue,isPending:de,isTransitioning:H},R=ue?e:void 0,I;typeof s=="function"?I=s(x):I=[s,ue?"active":null,de?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let V=typeof u=="function"?u(x):u;return G.createElement(e1,{...g,"aria-current":R,className:I,ref:_,style:V,to:h,viewTransition:p},typeof m=="function"?m(x):m)});ZR.displayName="NavLink";var JR=G.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=zh,action:p,onSubmit:m,relative:g,preventScrollReset:_,viewTransition:S,...A},N)=>{let U=iI(),$=sI(p,{relative:g}),H=h.toLowerCase()==="get"?"get":"post",J=typeof p=="string"&&JT.test(p),X=re=>{if(m&&m(re),re.defaultPrevented)return;re.preventDefault();let he=re.nativeEvent.submitter,ue=(he==null?void 0:he.getAttribute("formmethod"))||h;U(he||re.currentTarget,{fetcherKey:e,method:ue,navigate:t,replace:o,state:u,relative:g,preventScrollReset:_,viewTransition:S})};return G.createElement("form",{ref:N,method:H,action:$,onSubmit:s?m:X,...A,"data-discover":!J&&r==="render"?"true":void 0})});JR.displayName="Form";function eI(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function t1(r){let e=G.useContext(Qo);return ut(e,eI(r)),e}function tI(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let p=$u(),m=As(),g=Yu(r,{relative:u});return G.useCallback(_=>{if(MR(_,e)){_.preventDefault();let S=t!==void 0?t:Du(m)===Du(g);p(r,{replace:S,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[m,p,g,t,s,e,r,o,u,h])}var nI=0,rI=()=>`__${String(++nI)}__`;function iI(){let{router:r}=t1("useSubmit"),{basename:e}=G.useContext(pr),t=SR();return G.useCallback(async(s,o={})=>{let{action:u,method:h,encType:p,formData:m,body:g}=kR(s,e);if(o.navigate===!1){let _=o.fetcherKey||rI();await r.fetch(_,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function sI(r,{relative:e}={}){let{basename:t}=G.useContext(pr),s=G.useContext(zr);ut(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Yu(r||".",{relative:e})},h=As();if(r==null){u.search=h.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(_=>_==="")){p.delete("index"),m.filter(S=>S).forEach(S=>p.append("index",S));let _=p.toString();u.search=_?`?${_}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:yi([t,u.pathname])),Du(u)}function aI(r,e={}){let t=G.useContext(GT);ut(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=t1("useViewTransitionState"),o=Yu(r,{relative:e.relative});if(!t.isTransitioning)return!1;let u=Ti(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=Ti(t.nextLocation.pathname,s)||t.nextLocation.pathname;return rf(o.pathname,h)!=null||rf(o.pathname,u)!=null}var Gt=function(){return Gt=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},Gt.apply(this,arguments)};function Nu(r,e,t){if(t||arguments.length===2)for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return r.concat(u||Array.prototype.slice.call(e))}var st="-ms-",wu="-moz-",$e="-webkit-",n1="comm",Df="rule",Rg="decl",oI="@import",r1="@keyframes",lI="@layer",i1=Math.abs,Ig=String.fromCharCode,km=Object.assign;function uI(r,e){return Ft(r,0)^45?(((e<<2^Ft(r,0))<<2^Ft(r,1))<<2^Ft(r,2))<<2^Ft(r,3):0}function s1(r){return r.trim()}function pi(r,e){return(r=e.exec(r))?r[0]:r}function De(r,e,t){return r.replace(e,t)}function Bh(r,e,t){return r.indexOf(e,t)}function Ft(r,e){return r.charCodeAt(e)|0}function Po(r,e,t){return r.slice(e,t)}function Or(r){return r.length}function a1(r){return r.length}function gu(r,e){return e.push(r),r}function cI(r,e){return r.map(e).join("")}function ZE(r,e){return r.filter(function(t){return!pi(t,e)})}var Nf=1,ko=1,o1=0,er=0,Rt=0,Xo="";function Of(r,e,t,s,o,u,h,p){return{value:r,root:e,parent:t,type:s,props:o,children:u,line:Nf,column:ko,length:h,return:"",siblings:p}}function ss(r,e){return km(Of("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function Ao(r){for(;r.root;)r=ss(r.root,{children:[r]});gu(r,r.siblings)}function hI(){return Rt}function fI(){return Rt=er>0?Ft(Xo,--er):0,ko--,Rt===10&&(ko=1,Nf--),Rt}function ur(){return Rt=er<o1?Ft(Xo,er++):0,ko++,Rt===10&&(ko=1,Nf++),Rt}function pa(){return Ft(Xo,er)}function Hh(){return er}function Mf(r,e){return Po(Xo,r,e)}function Lm(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dI(r){return Nf=ko=1,o1=Or(Xo=r),er=0,[]}function pI(r){return Xo="",r}function ym(r){return s1(Mf(er-1,Um(r===91?r+2:r===40?r+1:r)))}function mI(r){for(;(Rt=pa())&&Rt<33;)ur();return Lm(r)>2||Lm(Rt)>3?"":" "}function gI(r,e){for(;--e&&ur()&&!(Rt<48||Rt>102||Rt>57&&Rt<65||Rt>70&&Rt<97););return Mf(r,Hh()+(e<6&&pa()==32&&ur()==32))}function Um(r){for(;ur();)switch(Rt){case r:return er;case 34:case 39:r!==34&&r!==39&&Um(Rt);break;case 40:r===41&&Um(r);break;case 92:ur();break}return er}function yI(r,e){for(;ur()&&r+Rt!==57;)if(r+Rt===84&&pa()===47)break;return"/*"+Mf(e,er-1)+"*"+Ig(r===47?r:ur())}function _I(r){for(;!Lm(pa());)ur();return Mf(r,er)}function vI(r){return pI(Fh("",null,null,null,[""],r=dI(r),0,[0],r))}function Fh(r,e,t,s,o,u,h,p,m){for(var g=0,_=0,S=h,A=0,N=0,U=0,$=1,H=1,J=1,X=0,re="",he=o,ue=u,de=s,x=re;H;)switch(U=X,X=ur()){case 40:if(U!=108&&Ft(x,S-1)==58){Bh(x+=De(ym(X),"&","&\f"),"&\f",i1(g?p[g-1]:0))!=-1&&(J=-1);break}case 34:case 39:case 91:x+=ym(X);break;case 9:case 10:case 13:case 32:x+=mI(U);break;case 92:x+=gI(Hh()-1,7);continue;case 47:switch(pa()){case 42:case 47:gu(EI(yI(ur(),Hh()),e,t,m),m);break;default:x+="/"}break;case 123*$:p[g++]=Or(x)*J;case 125*$:case 59:case 0:switch(X){case 0:case 125:H=0;case 59+_:J==-1&&(x=De(x,/\f/g,"")),N>0&&Or(x)-S&&gu(N>32?e0(x+";",s,t,S-1,m):e0(De(x," ","")+";",s,t,S-2,m),m);break;case 59:x+=";";default:if(gu(de=JE(x,e,t,g,_,o,p,re,he=[],ue=[],S,u),u),X===123)if(_===0)Fh(x,e,de,de,he,u,S,p,ue);else switch(A===99&&Ft(x,3)===110?100:A){case 100:case 108:case 109:case 115:Fh(r,de,de,s&&gu(JE(r,de,de,0,0,o,p,re,o,he=[],S,ue),ue),o,ue,S,p,s?he:ue);break;default:Fh(x,de,de,de,[""],ue,0,p,ue)}}g=_=N=0,$=J=1,re=x="",S=h;break;case 58:S=1+Or(x),N=U;default:if($<1){if(X==123)--$;else if(X==125&&$++==0&&fI()==125)continue}switch(x+=Ig(X),X*$){case 38:J=_>0?1:(x+="\f",-1);break;case 44:p[g++]=(Or(x)-1)*J,J=1;break;case 64:pa()===45&&(x+=ym(ur())),A=pa(),_=S=Or(re=x+=_I(Hh())),X++;break;case 45:U===45&&Or(x)==2&&($=0)}}return u}function JE(r,e,t,s,o,u,h,p,m,g,_,S){for(var A=o-1,N=o===0?u:[""],U=a1(N),$=0,H=0,J=0;$<s;++$)for(var X=0,re=Po(r,A+1,A=i1(H=h[$])),he=r;X<U;++X)(he=s1(H>0?N[X]+" "+re:De(re,/&\f/g,N[X])))&&(m[J++]=he);return Of(r,e,t,o===0?Df:p,m,g,_,S)}function EI(r,e,t,s){return Of(r,e,t,n1,Ig(hI()),Po(r,2,-2),0,s)}function e0(r,e,t,s,o){return Of(r,e,t,Rg,Po(r,0,s),Po(r,s+1,-1),s,o)}function l1(r,e,t){switch(uI(r,e)){case 5103:return $e+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $e+r+r;case 4789:return wu+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return $e+r+wu+r+st+r+r;case 5936:switch(Ft(r,e+11)){case 114:return $e+r+st+De(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return $e+r+st+De(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return $e+r+st+De(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return $e+r+st+r+r;case 6165:return $e+r+st+"flex-"+r+r;case 5187:return $e+r+De(r,/(\w+).+(:[^]+)/,$e+"box-$1$2"+st+"flex-$1$2")+r;case 5443:return $e+r+st+"flex-item-"+De(r,/flex-|-self/g,"")+(pi(r,/flex-|baseline/)?"":st+"grid-row-"+De(r,/flex-|-self/g,""))+r;case 4675:return $e+r+st+"flex-line-pack"+De(r,/align-content|flex-|-self/g,"")+r;case 5548:return $e+r+st+De(r,"shrink","negative")+r;case 5292:return $e+r+st+De(r,"basis","preferred-size")+r;case 6060:return $e+"box-"+De(r,"-grow","")+$e+r+st+De(r,"grow","positive")+r;case 4554:return $e+De(r,/([^-])(transform)/g,"$1"+$e+"$2")+r;case 6187:return De(De(De(r,/(zoom-|grab)/,$e+"$1"),/(image-set)/,$e+"$1"),r,"")+r;case 5495:case 3959:return De(r,/(image-set\([^]*)/,$e+"$1$`$1");case 4968:return De(De(r,/(.+:)(flex-)?(.*)/,$e+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$e+r+r;case 4200:if(!pi(r,/flex-|baseline/))return st+"grid-column-align"+Po(r,e)+r;break;case 2592:case 3360:return st+De(r,"template-","")+r;case 4384:case 3616:return t&&t.some(function(s,o){return e=o,pi(s.props,/grid-\w+-end/)})?~Bh(r+(t=t[e].value),"span",0)?r:st+De(r,"-start","")+r+st+"grid-row-span:"+(~Bh(t,"span",0)?pi(t,/\d+/):+pi(t,/\d+/)-+pi(r,/\d+/))+";":st+De(r,"-start","")+r;case 4896:case 4128:return t&&t.some(function(s){return pi(s.props,/grid-\w+-start/)})?r:st+De(De(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return De(r,/(.+)-inline(.+)/,$e+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Or(r)-1-e>6)switch(Ft(r,e+1)){case 109:if(Ft(r,e+4)!==45)break;case 102:return De(r,/(.+:)(.+)-([^]+)/,"$1"+$e+"$2-$3$1"+wu+(Ft(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Bh(r,"stretch",0)?l1(De(r,"stretch","fill-available"),e,t)+r:r}break;case 5152:case 5920:return De(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,u,h,p,m,g){return st+o+":"+u+g+(h?st+o+"-span:"+(p?m:+m-+u)+g:"")+r});case 4949:if(Ft(r,e+6)===121)return De(r,":",":"+$e)+r;break;case 6444:switch(Ft(r,Ft(r,14)===45?18:11)){case 120:return De(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$e+(Ft(r,14)===45?"inline-":"")+"box$3$1"+$e+"$2$3$1"+st+"$2box$3")+r;case 100:return De(r,":",":"+st)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return De(r,"scroll-","scroll-snap-")+r}return r}function sf(r,e){for(var t="",s=0;s<r.length;s++)t+=e(r[s],s,r,e)||"";return t}function TI(r,e,t,s){switch(r.type){case lI:if(r.children.length)break;case oI:case Rg:return r.return=r.return||r.value;case n1:return"";case r1:return r.return=r.value+"{"+sf(r.children,s)+"}";case Df:if(!Or(r.value=r.props.join(",")))return""}return Or(t=sf(r.children,s))?r.return=r.value+"{"+t+"}":""}function SI(r){var e=a1(r);return function(t,s,o,u){for(var h="",p=0;p<e;p++)h+=r[p](t,s,o,u)||"";return h}}function wI(r){return function(e){e.root||(e=e.return)&&r(e)}}function AI(r,e,t,s){if(r.length>-1&&!r.return)switch(r.type){case Rg:r.return=l1(r.value,r.length,t);return;case r1:return sf([ss(r,{value:De(r.value,"@","@"+$e)})],s);case Df:if(r.length)return cI(t=r.props,function(o){switch(pi(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ao(ss(r,{props:[De(o,/:(read-\w+)/,":"+wu+"$1")]})),Ao(ss(r,{props:[o]})),km(r,{props:ZE(t,s)});break;case"::placeholder":Ao(ss(r,{props:[De(o,/:(plac\w+)/,":"+$e+"input-$1")]})),Ao(ss(r,{props:[De(o,/:(plac\w+)/,":"+wu+"$1")]})),Ao(ss(r,{props:[De(o,/:(plac\w+)/,st+"input-$1")]})),Ao(ss(r,{props:[o]})),km(r,{props:ZE(t,s)});break}return""})}}var bI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pn={},Lo=typeof process<"u"&&Pn!==void 0&&(Pn.REACT_APP_SC_ATTR||Pn.SC_ATTR)||"data-styled",u1="active",c1="data-styled-version",Vf="6.1.19",Cg=`/*!sc*/
`,af=typeof window<"u"&&typeof document<"u",RI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Pn!==void 0&&Pn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pn.REACT_APP_SC_DISABLE_SPEEDY!==""?Pn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Pn!==void 0&&Pn.SC_DISABLE_SPEEDY!==void 0&&Pn.SC_DISABLE_SPEEDY!==""&&Pn.SC_DISABLE_SPEEDY!=="false"&&Pn.SC_DISABLE_SPEEDY),II={},Pf=Object.freeze([]),Uo=Object.freeze({});function h1(r,e,t){return t===void 0&&(t=Uo),r.theme!==t.theme&&r.theme||e||t.theme}var f1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),CI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xI=/(^-|-$)/g;function t0(r){return r.replace(CI,"-").replace(xI,"")}var DI=/(a)(d)/gi,Nh=52,n0=function(r){return String.fromCharCode(r+(r>25?39:97))};function jm(r){var e,t="";for(e=Math.abs(r);e>Nh;e=e/Nh|0)t=n0(e%Nh)+t;return(n0(e%Nh)+t).replace(DI,"$1-$2")}var _m,d1=5381,xo=function(r,e){for(var t=e.length;t;)r=33*r^e.charCodeAt(--t);return r},p1=function(r){return xo(d1,r)};function m1(r){return jm(p1(r)>>>0)}function NI(r){return r.displayName||r.name||"Component"}function vm(r){return typeof r=="string"&&!0}var g1=typeof Symbol=="function"&&Symbol.for,y1=g1?Symbol.for("react.memo"):60115,OI=g1?Symbol.for("react.forward_ref"):60112,MI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},VI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},PI=((_m={})[OI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_m[y1]=_1,_m);function r0(r){return("type"in(e=r)&&e.type.$$typeof)===y1?_1:"$$typeof"in r?PI[r.$$typeof]:MI;var e}var kI=Object.defineProperty,LI=Object.getOwnPropertyNames,i0=Object.getOwnPropertySymbols,UI=Object.getOwnPropertyDescriptor,jI=Object.getPrototypeOf,s0=Object.prototype;function v1(r,e,t){if(typeof e!="string"){if(s0){var s=jI(e);s&&s!==s0&&v1(r,s,t)}var o=LI(e);i0&&(o=o.concat(i0(e)));for(var u=r0(r),h=r0(e),p=0;p<o.length;++p){var m=o[p];if(!(m in VI||t&&t[m]||h&&m in h||u&&m in u)){var g=UI(e,m);try{kI(r,m,g)}catch{}}}}return r}function ya(r){return typeof r=="function"}function xg(r){return typeof r=="object"&&"styledComponentId"in r}function fa(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function zm(r,e){if(r.length===0)return"";for(var t=r[0],s=1;s<r.length;s++)t+=r[s];return t}function Ou(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function qm(r,e,t){if(t===void 0&&(t=!1),!t&&!Ou(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)r[s]=qm(r[s],e[s]);else if(Ou(e))for(var s in e)r[s]=qm(r[s],e[s]);return r}function Dg(r,e){Object.defineProperty(r,"toString",{value:e})}function _a(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var zI=function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},r.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,u=o;e>=u;)if((u<<=1)<0)throw _a(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var h=o;h<u;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(e+1),m=(h=0,t.length);h<m;h++)this.tag.insertRule(p,t[h])&&(this.groupSizes[e]++,p++)},r.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),o=s+t;this.groupSizes[e]=0;for(var u=s;u<o;u++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),u=o+s,h=o;h<u;h++)t+="".concat(this.tag.getRule(h)).concat(Cg);return t},r}(),Gh=new Map,of=new Map,$h=1,Oh=function(r){if(Gh.has(r))return Gh.get(r);for(;of.has($h);)$h++;var e=$h++;return Gh.set(r,e),of.set(e,r),e},qI=function(r,e){$h=e+1,Gh.set(r,e),of.set(e,r)},BI="style[".concat(Lo,"][").concat(c1,'="').concat(Vf,'"]'),HI=new RegExp("^".concat(Lo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),FI=function(r,e,t){for(var s,o=t.split(","),u=0,h=o.length;u<h;u++)(s=o[u])&&r.registerName(e,s)},GI=function(r,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(Cg),o=[],u=0,h=s.length;u<h;u++){var p=s[u].trim();if(p){var m=p.match(HI);if(m){var g=0|parseInt(m[1],10),_=m[2];g!==0&&(qI(_,g),FI(r,_,m[3]),r.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},a0=function(r){for(var e=document.querySelectorAll(BI),t=0,s=e.length;t<s;t++){var o=e[t];o&&o.getAttribute(Lo)!==u1&&(GI(r,o),o.parentNode&&o.parentNode.removeChild(o))}};function $I(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var E1=function(r){var e=document.head,t=r||e,s=document.createElement("style"),o=function(p){var m=Array.from(p.querySelectorAll("style[".concat(Lo,"]")));return m[m.length-1]}(t),u=o!==void 0?o.nextSibling:null;s.setAttribute(Lo,u1),s.setAttribute(c1,Vf);var h=$I();return h&&s.setAttribute("nonce",h),t.insertBefore(s,u),s},YI=function(){function r(e){this.element=E1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,o=0,u=s.length;o<u;o++){var h=s[o];if(h.ownerNode===t)return h}throw _a(17)}(this.element),this.length=0}return r.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},r}(),QI=function(){function r(e){this.element=E1(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r}(),KI=function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r}(),o0=af,XI={isServer:!af,useCSSOMInjection:!RI},lf=function(){function r(e,t,s){e===void 0&&(e=Uo),t===void 0&&(t={});var o=this;this.options=Gt(Gt({},XI),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&af&&o0&&(o0=!1,a0(this)),Dg(this,function(){return function(u){for(var h=u.getTag(),p=h.length,m="",g=function(S){var A=function(J){return of.get(J)}(S);if(A===void 0)return"continue";var N=u.names.get(A),U=h.getGroup(S);if(N===void 0||!N.size||U.length===0)return"continue";var $="".concat(Lo,".g").concat(S,'[id="').concat(A,'"]'),H="";N!==void 0&&N.forEach(function(J){J.length>0&&(H+="".concat(J,","))}),m+="".concat(U).concat($,'{content:"').concat(H,'"}').concat(Cg)},_=0;_<p;_++)g(_);return m}(o)})}return r.registerId=function(e){return Oh(e)},r.prototype.rehydrate=function(){!this.server&&af&&a0(this)},r.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new r(Gt(Gt({},this.options),e),this.gs,t&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,o=t.target;return t.isServer?new KI(o):s?new YI(o):new QI(o)}(this.options),new zI(e)));var e},r.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},r.prototype.registerName=function(e,t){if(Oh(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},r.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(Oh(e),s)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(Oh(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r}(),WI=/&/g,ZI=/^\s*\/\/.*$/gm;function T1(r,e){return r.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=T1(t.children,e)),t})}function JI(r){var e,t,s,o=Uo,u=o.options,h=u===void 0?Uo:u,p=o.plugins,m=p===void 0?Pf:p,g=function(A,N,U){return U.startsWith(t)&&U.endsWith(t)&&U.replaceAll(t,"").length>0?".".concat(e):A},_=m.slice();_.push(function(A){A.type===Df&&A.value.includes("&")&&(A.props[0]=A.props[0].replace(WI,t).replace(s,g))}),h.prefix&&_.push(AI),_.push(TI);var S=function(A,N,U,$){N===void 0&&(N=""),U===void 0&&(U=""),$===void 0&&($="&"),e=$,t=N,s=new RegExp("\\".concat(t,"\\b"),"g");var H=A.replace(ZI,""),J=vI(U||N?"".concat(U," ").concat(N," { ").concat(H," }"):H);h.namespace&&(J=T1(J,h.namespace));var X=[];return sf(J,SI(_.concat(wI(function(re){return X.push(re)})))),X};return S.hash=m.length?m.reduce(function(A,N){return N.name||_a(15),xo(A,N.name)},d1).toString():"",S}var eC=new lf,Bm=JI(),S1=or.createContext({shouldForwardProp:void 0,styleSheet:eC,stylis:Bm});S1.Consumer;or.createContext(void 0);function Hm(){return G.useContext(S1)}var tC=function(){function r(e,t){var s=this;this.inject=function(o,u){u===void 0&&(u=Bm);var h=s.name+u.hash;o.hasNameForId(s.id,h)||o.insertRules(s.id,h,u(s.rules,h,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Dg(this,function(){throw _a(12,String(s.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=Bm),this.name+e.hash},r}(),nC=function(r){return r>="A"&&r<="Z"};function l0(r){for(var e="",t=0;t<r.length;t++){var s=r[t];if(t===1&&s==="-"&&r[0]==="-")return r;nC(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var w1=function(r){return r==null||r===!1||r===""},A1=function(r){var e,t,s=[];for(var o in r){var u=r[o];r.hasOwnProperty(o)&&!w1(u)&&(Array.isArray(u)&&u.isCss||ya(u)?s.push("".concat(l0(o),":"),u,";"):Ou(u)?s.push.apply(s,Nu(Nu(["".concat(o," {")],A1(u),!1),["}"],!1)):s.push("".concat(l0(o),": ").concat((e=o,(t=u)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in bI||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function hs(r,e,t,s){if(w1(r))return[];if(xg(r))return[".".concat(r.styledComponentId)];if(ya(r)){if(!ya(u=r)||u.prototype&&u.prototype.isReactComponent||!e)return[r];var o=r(e);return hs(o,e,t,s)}var u;return r instanceof tC?t?(r.inject(t,s),[r.getName(s)]):[r]:Ou(r)?A1(r):Array.isArray(r)?Array.prototype.concat.apply(Pf,r.map(function(h){return hs(h,e,t,s)})):[r.toString()]}function b1(r){for(var e=0;e<r.length;e+=1){var t=r[e];if(ya(t)&&!xg(t))return!1}return!0}var rC=p1(Vf),iC=function(){function r(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&b1(e),this.componentId=t,this.baseHash=xo(rC,t),this.baseStyle=s,lf.registerId(t)}return r.prototype.generateAndInjectStyles=function(e,t,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=fa(o,this.staticRulesId);else{var u=zm(hs(this.rules,e,t,s)),h=jm(xo(this.baseHash,u)>>>0);if(!t.hasNameForId(this.componentId,h)){var p=s(u,".".concat(h),void 0,this.componentId);t.insertRules(this.componentId,h,p)}o=fa(o,h),this.staticRulesId=h}else{for(var m=xo(this.baseHash,s.hash),g="",_=0;_<this.rules.length;_++){var S=this.rules[_];if(typeof S=="string")g+=S;else if(S){var A=zm(hs(S,e,t,s));m=xo(m,A+_),g+=A}}if(g){var N=jm(m>>>0);t.hasNameForId(this.componentId,N)||t.insertRules(this.componentId,N,s(g,".".concat(N),void 0,this.componentId)),o=fa(o,N)}}return o},r}(),Mu=or.createContext(void 0);Mu.Consumer;function sC(r){var e=or.useContext(Mu),t=G.useMemo(function(){return function(s,o){if(!s)throw _a(14);if(ya(s)){var u=s(o);return u}if(Array.isArray(s)||typeof s!="object")throw _a(8);return o?Gt(Gt({},o),s):s}(r.theme,e)},[r.theme,e]);return r.children?or.createElement(Mu.Provider,{value:t},r.children):null}var Em={};function aC(r,e,t){var s=xg(r),o=r,u=!vm(r),h=e.attrs,p=h===void 0?Pf:h,m=e.componentId,g=m===void 0?function(he,ue){var de=typeof he!="string"?"sc":t0(he);Em[de]=(Em[de]||0)+1;var x="".concat(de,"-").concat(m1(Vf+de+Em[de]));return ue?"".concat(ue,"-").concat(x):x}(e.displayName,e.parentComponentId):m,_=e.displayName,S=_===void 0?function(he){return vm(he)?"styled.".concat(he):"Styled(".concat(NI(he),")")}(r):_,A=e.displayName&&e.componentId?"".concat(t0(e.displayName),"-").concat(e.componentId):e.componentId||g,N=s&&o.attrs?o.attrs.concat(p).filter(Boolean):p,U=e.shouldForwardProp;if(s&&o.shouldForwardProp){var $=o.shouldForwardProp;if(e.shouldForwardProp){var H=e.shouldForwardProp;U=function(he,ue){return $(he,ue)&&H(he,ue)}}else U=$}var J=new iC(t,A,s?o.componentStyle:void 0);function X(he,ue){return function(de,x,R){var I=de.attrs,V=de.componentStyle,P=de.defaultProps,L=de.foldedComponentIds,D=de.styledComponentId,Dt=de.target,at=or.useContext(Mu),Q=Hm(),le=de.shouldForwardProp||Q.shouldForwardProp,me=h1(x,at,P)||Uo,Ce=function(Ie,ve,ct){for(var Be,Lt=Gt(Gt({},ve),{className:void 0,theme:ct}),Un=0;Un<Ie.length;Un+=1){var En=ya(Be=Ie[Un])?Be(Lt):Be;for(var an in En)Lt[an]=an==="className"?fa(Lt[an],En[an]):an==="style"?Gt(Gt({},Lt[an]),En[an]):En[an]}return ve.className&&(Lt.className=fa(Lt.className,ve.className)),Lt}(I,x,me),O=Ce.as||Dt,ne={};for(var ae in Ce)Ce[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&Ce.theme===me||(ae==="forwardedAs"?ne.as=Ce.forwardedAs:le&&!le(ae,O)||(ne[ae]=Ce[ae]));var se=function(Ie,ve){var ct=Hm(),Be=Ie.generateAndInjectStyles(ve,ct.styleSheet,ct.stylis);return Be}(V,Ce),ge=fa(L,D);return se&&(ge+=" "+se),Ce.className&&(ge+=" "+Ce.className),ne[vm(O)&&!f1.has(O)?"class":"className"]=ge,R&&(ne.ref=R),G.createElement(O,ne)}(re,he,ue)}X.displayName=S;var re=or.forwardRef(X);return re.attrs=N,re.componentStyle=J,re.displayName=S,re.shouldForwardProp=U,re.foldedComponentIds=s?fa(o.foldedComponentIds,o.styledComponentId):"",re.styledComponentId=A,re.target=s?o.target:r,Object.defineProperty(re,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(he){this._foldedDefaultProps=s?function(ue){for(var de=[],x=1;x<arguments.length;x++)de[x-1]=arguments[x];for(var R=0,I=de;R<I.length;R++)qm(ue,I[R],!0);return ue}({},o.defaultProps,he):he}}),Dg(re,function(){return".".concat(re.styledComponentId)}),u&&v1(re,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),re}function u0(r,e){for(var t=[r[0]],s=0,o=e.length;s<o;s+=1)t.push(e[s],r[s+1]);return t}var c0=function(r){return Object.assign(r,{isCss:!0})};function R1(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(ya(r)||Ou(r))return c0(hs(u0(Pf,Nu([r],e,!0))));var s=r;return e.length===0&&s.length===1&&typeof s[0]=="string"?hs(s):c0(hs(u0(s,e)))}function Fm(r,e,t){if(t===void 0&&(t=Uo),!e)throw _a(1,e);var s=function(o){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return r(e,t,R1.apply(void 0,Nu([o],u,!1)))};return s.attrs=function(o){return Fm(r,e,Gt(Gt({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return Fm(r,e,Gt(Gt({},t),o))},s}var I1=function(r){return Fm(aC,r)},ie=I1;f1.forEach(function(r){ie[r]=I1(r)});var oC=function(){function r(e,t){this.rules=e,this.componentId=t,this.isStatic=b1(e),lf.registerId(this.componentId+1)}return r.prototype.createStyles=function(e,t,s,o){var u=o(zm(hs(this.rules,t,s,o)),""),h=this.componentId+e;s.insertRules(h,h,u)},r.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},r.prototype.renderStyles=function(e,t,s,o){e>2&&lf.registerId(this.componentId+e),this.removeStyles(e,s),this.createStyles(e,t,s,o)},r}();function lC(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var s=R1.apply(void 0,Nu([r],e,!1)),o="sc-global-".concat(m1(JSON.stringify(s))),u=new oC(s,o),h=function(m){var g=Hm(),_=or.useContext(Mu),S=or.useRef(g.styleSheet.allocateGSInstance(o)).current;return g.styleSheet.server&&p(S,m,g.styleSheet,_,g.stylis),or.useLayoutEffect(function(){if(!g.styleSheet.server)return p(S,m,g.styleSheet,_,g.stylis),function(){return u.removeStyles(S,g.styleSheet)}},[S,m,g.styleSheet,_,g.stylis]),null};function p(m,g,_,S,A){if(u.isStatic)u.renderStyles(m,II,_,A);else{var N=Gt(Gt({},g),{theme:h1(g,S,h.defaultProps)});u.renderStyles(m,N,_,A)}}return or.memo(h)}/**
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
 */const uC=()=>{};var h0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},cC=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],p=r[t++],m=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},x1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,p=h?r[o+1]:0,m=o+2<r.length,g=m?r[o+2]:0,_=u>>2,S=(u&3)<<4|p>>4;let A=(p&15)<<2|g>>6,N=g&63;m||(N=64,h||(A=64)),s.push(t[_],t[S],t[A],t[N])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(C1(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):cC(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const g=o<r.length?t[r.charAt(o)]:64;++o;const S=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||p==null||g==null||S==null)throw new hC;const A=u<<2|p>>4;if(s.push(A),g!==64){const N=p<<4&240|g>>2;if(s.push(N),S!==64){const U=g<<6&192|S;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class hC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fC=function(r){const e=C1(r);return x1.encodeByteArray(e,!0)},uf=function(r){return fC(r).replace(/\./g,"")},D1=function(r){try{return x1.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pC=()=>dC().__FIREBASE_DEFAULTS__,mC=()=>{if(typeof process>"u"||typeof h0>"u")return;const r=h0.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},gC=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&D1(r[1]);return e&&JSON.parse(e)},kf=()=>{try{return uC()||pC()||mC()||gC()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},N1=r=>{var e,t;return(t=(e=kf())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},yC=r=>{const e=N1(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},O1=()=>{var r;return(r=kf())==null?void 0:r.config},M1=r=>{var e;return(e=kf())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Wo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function V1(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function vC(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[uf(JSON.stringify(t)),uf(JSON.stringify(h)),""].join(".")}const Au={};function EC(){const r={prod:[],emulator:[]};for(const e of Object.keys(Au))Au[e]?r.emulator.push(e):r.prod.push(e);return r}function TC(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let f0=!1;function P1(r,e){if(typeof window>"u"||typeof document>"u"||!Wo(window.location.host)||Au[r]===e||Au[r]||f0)return;Au[r]=e;function t(A){return`__firebase__banner__${A}`}const s="__firebase__banner",u=EC().prod.length>0;function h(){const A=document.getElementById(s);A&&A.remove()}function p(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function m(A,N){A.setAttribute("width","24"),A.setAttribute("id",N),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function g(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{f0=!0,h()},A}function _(A,N){A.setAttribute("id",N),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function S(){const A=TC(s),N=t("text"),U=document.getElementById(N)||document.createElement("span"),$=t("learnmore"),H=document.getElementById($)||document.createElement("a"),J=t("preprendIcon"),X=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const re=A.element;p(re),_(H,$);const he=g();m(X,J),re.append(X,U,H,he),document.body.appendChild(re)}u?(U.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function wC(){var e;const r=(e=kf())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bC(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function RC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IC(){const r=mn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function CC(){return!wC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xC(){try{return typeof indexedDB=="object"}catch{return!1}}function DC(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="FirebaseError";class Ii extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=NC,Object.setPrototypeOf(this,Ii.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qu.prototype.create)}}class Qu{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?OC(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Ii(o,p,s)}}function OC(r,e){return r.replace(MC,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const MC=/\{\$([^}]+)}/g;function VC(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function va(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(d0(u)&&d0(h)){if(!va(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function d0(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function yu(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function _u(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function PC(r,e){const t=new kC(r,e);return t.subscribe.bind(t)}class kC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");LC(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Tm),o.error===void 0&&(o.error=Tm),o.complete===void 0&&(o.complete=Tm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LC(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Tm(){}/**
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
 */function xt(r){return r&&r._delegate?r._delegate:r}class Ea{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class UC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new _C;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zC(e))try{this.getOrInitializeService({instanceIdentifier:ha})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ha){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ha){return this.instances.has(e)}getOptions(e=ha){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jC(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ha){return this.component?this.component.multipleInstances?e:ha:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jC(r){return r===ha?void 0:r}function zC(r){return r.instantiationMode==="EAGER"}/**
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
 */class qC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new UC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const BC={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},HC=Pe.INFO,FC={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},GC=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=FC[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ng{constructor(e){this.name=e,this._logLevel=HC,this._logHandler=GC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const $C=(r,e)=>e.some(t=>r instanceof t);let p0,m0;function YC(){return p0||(p0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QC(){return m0||(m0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const k1=new WeakMap,Gm=new WeakMap,L1=new WeakMap,Sm=new WeakMap,Og=new WeakMap;function KC(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(fs(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&k1.set(t,r)}).catch(()=>{}),Og.set(e,r),e}function XC(r){if(Gm.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Gm.set(r,e)}let $m={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Gm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||L1.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fs(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function WC(r){$m=r($m)}function ZC(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(wm(this),e,...t);return L1.set(s,e.sort?e.sort():[e]),fs(s)}:QC().includes(r)?function(...e){return r.apply(wm(this),e),fs(k1.get(this))}:function(...e){return fs(r.apply(wm(this),e))}}function JC(r){return typeof r=="function"?ZC(r):(r instanceof IDBTransaction&&XC(r),$C(r,YC())?new Proxy(r,$m):r)}function fs(r){if(r instanceof IDBRequest)return KC(r);if(Sm.has(r))return Sm.get(r);const e=JC(r);return e!==r&&(Sm.set(r,e),Og.set(e,r)),e}const wm=r=>Og.get(r);function ex(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),p=fs(h);return s&&h.addEventListener("upgradeneeded",m=>{s(fs(h.result),m.oldVersion,m.newVersion,fs(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const tx=["get","getKey","getAll","getAllKeys","count"],nx=["put","add","delete","clear"],Am=new Map;function g0(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Am.get(e))return Am.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=nx.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||tx.includes(t)))return;const u=async function(h,...p){const m=this.transaction(h,o?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(p.shift())),(await Promise.all([g[t](...p),o&&m.done]))[0]};return Am.set(e,u),u}WC(r=>({...r,get:(e,t,s)=>g0(e,t)||r.get(e,t,s),has:(e,t)=>!!g0(e,t)||r.has(e,t)}));/**
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
 */class rx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ix(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function ix(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ym="@firebase/app",y0="0.14.0";/**
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
 */const Si=new Ng("@firebase/app"),sx="@firebase/app-compat",ax="@firebase/analytics-compat",ox="@firebase/analytics",lx="@firebase/app-check-compat",ux="@firebase/app-check",cx="@firebase/auth",hx="@firebase/auth-compat",fx="@firebase/database",dx="@firebase/data-connect",px="@firebase/database-compat",mx="@firebase/functions",gx="@firebase/functions-compat",yx="@firebase/installations",_x="@firebase/installations-compat",vx="@firebase/messaging",Ex="@firebase/messaging-compat",Tx="@firebase/performance",Sx="@firebase/performance-compat",wx="@firebase/remote-config",Ax="@firebase/remote-config-compat",bx="@firebase/storage",Rx="@firebase/storage-compat",Ix="@firebase/firestore",Cx="@firebase/ai",xx="@firebase/firestore-compat",Dx="firebase",Nx="12.0.0";/**
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
 */const Qm="[DEFAULT]",Ox={[Ym]:"fire-core",[sx]:"fire-core-compat",[ox]:"fire-analytics",[ax]:"fire-analytics-compat",[ux]:"fire-app-check",[lx]:"fire-app-check-compat",[cx]:"fire-auth",[hx]:"fire-auth-compat",[fx]:"fire-rtdb",[dx]:"fire-data-connect",[px]:"fire-rtdb-compat",[mx]:"fire-fn",[gx]:"fire-fn-compat",[yx]:"fire-iid",[_x]:"fire-iid-compat",[vx]:"fire-fcm",[Ex]:"fire-fcm-compat",[Tx]:"fire-perf",[Sx]:"fire-perf-compat",[wx]:"fire-rc",[Ax]:"fire-rc-compat",[bx]:"fire-gcs",[Rx]:"fire-gcs-compat",[Ix]:"fire-fst",[xx]:"fire-fst-compat",[Cx]:"fire-vertex","fire-js":"fire-js",[Dx]:"fire-js-all"};/**
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
 */const cf=new Map,Mx=new Map,Km=new Map;function _0(r,e){try{r.container.addComponent(e)}catch(t){Si.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function jo(r){const e=r.name;if(Km.has(e))return Si.debug(`There were multiple attempts to register component ${e}.`),!1;Km.set(e,r);for(const t of cf.values())_0(t,r);for(const t of Mx.values())_0(t,r);return!0}function Mg(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Zn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Vx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ds=new Qu("app","Firebase",Vx);/**
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
 */class Px{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ea("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ds.create("app-deleted",{appName:this._name})}}/**
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
 */const Zo=Nx;function U1(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Qm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ds.create("bad-app-name",{appName:String(o)});if(t||(t=O1()),!t)throw ds.create("no-options");const u=cf.get(o);if(u){if(va(t,u.options)&&va(s,u.config))return u;throw ds.create("duplicate-app",{appName:o})}const h=new qC(o);for(const m of Km.values())h.addComponent(m);const p=new Px(t,s,h);return cf.set(o,p),p}function j1(r=Qm){const e=cf.get(r);if(!e&&r===Qm&&O1())return U1();if(!e)throw ds.create("no-app",{appName:r});return e}function ps(r,e,t){let s=Ox[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Si.warn(h.join(" "));return}jo(new Ea(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const kx="firebase-heartbeat-database",Lx=1,Vu="firebase-heartbeat-store";let bm=null;function z1(){return bm||(bm=ex(kx,Lx,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Vu)}catch(t){console.warn(t)}}}}).catch(r=>{throw ds.create("idb-open",{originalErrorMessage:r.message})})),bm}async function Ux(r){try{const t=(await z1()).transaction(Vu),s=await t.objectStore(Vu).get(q1(r));return await t.done,s}catch(e){if(e instanceof Ii)Si.warn(e.message);else{const t=ds.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Si.warn(t.message)}}}async function v0(r,e){try{const s=(await z1()).transaction(Vu,"readwrite");await s.objectStore(Vu).put(e,q1(r)),await s.done}catch(t){if(t instanceof Ii)Si.warn(t.message);else{const s=ds.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Si.warn(s.message)}}}function q1(r){return`${r.name}!${r.options.appId}`}/**
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
 */const jx=1024,zx=30;class qx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Hx(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=E0();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>zx){const h=Fx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Si.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=E0(),{heartbeatsToSend:s,unsentEntries:o}=Bx(this._heartbeatsCache.heartbeats),u=uf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Si.warn(t),""}}}function E0(){return new Date().toISOString().substring(0,10)}function Bx(r,e=jx){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),T0(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),T0(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Hx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xC()?DC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ux(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return v0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return v0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function T0(r){return uf(JSON.stringify({version:2,heartbeats:r})).length}function Fx(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function Gx(r){jo(new Ea("platform-logger",e=>new rx(e),"PRIVATE")),jo(new Ea("heartbeat",e=>new qx(e),"PRIVATE")),ps(Ym,y0,r),ps(Ym,y0,"esm2020"),ps("fire-js","")}Gx("");function B1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $x=B1,H1=new Qu("auth","Firebase",B1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Ng("@firebase/auth");function Yx(r,...e){hf.logLevel<=Pe.WARN&&hf.warn(`Auth (${Zo}): ${r}`,...e)}function Yh(r,...e){hf.logLevel<=Pe.ERROR&&hf.error(`Auth (${Zo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(r,...e){throw Vg(r,...e)}function Mr(r,...e){return Vg(r,...e)}function F1(r,e,t){const s={...$x(),[e]:t};return new Qu("auth","Firebase",s).create(e,{appName:r.name})}function _i(r){return F1(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vg(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return H1.create(r,...e)}function Se(r,e,...t){if(!r)throw Vg(e,...t)}function mi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Yh(e),new Error(e)}function wi(r,e){r||mi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function Qx(){return S0()==="http:"||S0()==="https:"}function S0(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qx()||bC()||"connection"in navigator)?navigator.onLine:!0}function Xx(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t){this.shortDelay=e,this.longDelay=t,wi(t>e,"Short delay should be less than long delay!"),this.isMobile=SC()||RC()}get(){return Kx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(r,e){wi(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Jx=new Xu(3e4,6e4);function bs(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Ci(r,e,t,s,o={}){return $1(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=Ku({key:r.config.apiKey,...h}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:m,...u};return AC()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&Wo(r.emulatorConfig.host)&&(g.credentials="include"),G1.fetch()(await Y1(r,r.config.apiHost,t,p),g)})}async function $1(r,e,t){r._canInitEmulator=!1;const s={...Wx,...e};try{const o=new tD(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Mh(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mh(r,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Mh(r,"email-already-in-use",h);if(m==="USER_DISABLED")throw Mh(r,"user-disabled",h);const _=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw F1(r,_,g);fr(r,_)}}catch(o){if(o instanceof Ii)throw o;fr(r,"network-request-failed",{message:String(o)})}}async function Wu(r,e,t,s,o={}){const u=await Ci(r,e,t,s,o);return"mfaPendingCredential"in u&&fr(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function Y1(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?Pg(r.config,o):`${r.config.apiScheme}://${o}`;return Zx.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function eD(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Mr(this.auth,"network-request-failed")),Jx.get())})}}function Mh(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Mr(r,e,s);return o.customData._tokenResponse=t,o}function w0(r){return r!==void 0&&r.enterprise!==void 0}class nD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return eD(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rD(r,e){return Ci(r,"GET","/v2/recaptchaConfig",bs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iD(r,e){return Ci(r,"POST","/v1/accounts:delete",e)}async function ff(r,e){return Ci(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sD(r,e=!1){const t=xt(r),s=await t.getIdToken(e),o=kg(s);Se(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:bu(Rm(o.auth_time)),issuedAtTime:bu(Rm(o.iat)),expirationTime:bu(Rm(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Rm(r){return Number(r)*1e3}function kg(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Yh("JWT malformed, contained fewer than 3 sections"),null;try{const o=D1(t);return o?JSON.parse(o):(Yh("Failed to decode base64 JWT payload"),null)}catch(o){return Yh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function A0(r){const e=kg(r);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ii&&aD(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function aD({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=bu(this.lastLoginAt),this.creationTime=bu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function df(r){var S;const e=r.auth,t=await r.getIdToken(),s=await zo(r,ff(e,{idToken:t}));Se(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(S=o.providerUserInfo)!=null&&S.length?Q1(o.providerUserInfo):[],h=uD(r.providerData,u),p=r.isAnonymous,m=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),g=p?m:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Wm(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(r,_)}async function lD(r){const e=xt(r);await df(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uD(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Q1(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cD(r,e){const t=await $1(r,{},async()=>{const s=Ku({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await Y1(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:s};return r.emulatorConfig&&Wo(r.emulatorConfig.host)&&(m.credentials="include"),G1.fetch()(h,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hD(r,e){return Ci(r,"POST","/v2/accounts:revokeToken",bs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):A0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=A0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await cD(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new No;return s&&(Se(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Se(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Se(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new No,this.toJSON())}_performRefresh(){return mi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(r,e){Se(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class lr{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new oD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Wm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await zo(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sD(this,e)}reload(){return lD(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new lr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await df(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(_i(this.auth));const e=await this.getIdToken();return await zo(this,iD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,p=t.tenantId??void 0,m=t._redirectEventId??void 0,g=t.createdAt??void 0,_=t.lastLoginAt??void 0,{uid:S,emailVerified:A,isAnonymous:N,providerData:U,stsTokenManager:$}=t;Se(S&&$,e,"internal-error");const H=No.fromJSON(this.name,$);Se(typeof S=="string",e,"internal-error"),rs(s,e.name),rs(o,e.name),Se(typeof A=="boolean",e,"internal-error"),Se(typeof N=="boolean",e,"internal-error"),rs(u,e.name),rs(h,e.name),rs(p,e.name),rs(m,e.name),rs(g,e.name),rs(_,e.name);const J=new lr({uid:S,auth:e,email:o,emailVerified:A,displayName:s,isAnonymous:N,photoURL:h,phoneNumber:u,tenantId:p,stsTokenManager:H,createdAt:g,lastLoginAt:_});return U&&Array.isArray(U)&&(J.providerData=U.map(X=>({...X}))),m&&(J._redirectEventId=m),J}static async _fromIdTokenResponse(e,t,s=!1){const o=new No;o.updateFromServerResponse(t);const u=new lr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await df(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Se(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Q1(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new No;p.updateFromIdToken(s);const m=new lr({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Wm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=new Map;function gi(r){wi(r instanceof Function,"Expected a class definition");let e=b0.get(r);return e?(wi(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,b0.set(r,e),e)}/**
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
 */class K1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}K1.type="NONE";const R0=K1;/**
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
 */function Qh(r,e,t){return`firebase:${r}:${e}:${t}`}class Oo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Qh(this.userKey,o.apiKey,u),this.fullPersistenceKey=Qh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ff(this.auth,{idToken:e}).catch(()=>{});return t?lr._fromGetAccountInfoResponse(this.auth,t,e):null}return lr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Oo(gi(R0),e,s);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||gi(R0);const h=Qh(s,e.config.apiKey,e.name);let p=null;for(const g of t)try{const _=await g._get(h);if(_){let S;if(typeof _=="string"){const A=await ff(e,{idToken:_}).catch(()=>{});if(!A)break;S=await lr._fromGetAccountInfoResponse(e,A,_)}else S=lr._fromJSON(e,_);g!==u&&(p=S),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new Oo(u,e,s):(u=m[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new Oo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(J1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(X1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tS(e))return"Blackberry";if(nS(e))return"Webos";if(W1(e))return"Safari";if((e.includes("chrome/")||Z1(e))&&!e.includes("edge/"))return"Chrome";if(eS(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function X1(r=mn()){return/firefox\//i.test(r)}function W1(r=mn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Z1(r=mn()){return/crios\//i.test(r)}function J1(r=mn()){return/iemobile/i.test(r)}function eS(r=mn()){return/android/i.test(r)}function tS(r=mn()){return/blackberry/i.test(r)}function nS(r=mn()){return/webos/i.test(r)}function Lg(r=mn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function fD(r=mn()){var e;return Lg(r)&&!!((e=window.navigator)!=null&&e.standalone)}function dD(){return IC()&&document.documentMode===10}function rS(r=mn()){return Lg(r)||eS(r)||nS(r)||tS(r)||/windows phone/i.test(r)||J1(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(r,e=[]){let t;switch(r){case"Browser":t=I0(mn());break;case"Worker":t=`${I0(mn())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zo}/${s}`}/**
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
 */class pD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,p)=>{try{const m=e(u);h(m)}catch(m){p(m)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function mD(r,e={}){return Ci(r,"GET","/v2/passwordPolicy",bs(r,e))}/**
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
 */const gD=6;class yD{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??gD,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new C0(this),this.idTokenSubscription=new C0(this),this.beforeStateQueue=new pD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=H1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gi(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Oo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ff(this,{idToken:e}),s=await lr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Zn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,p=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===p)&&(m!=null&&m.user)&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await df(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(_i(this));const t=e?xt(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(_i(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(_i(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mD(this),t=new yD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qu("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await hD(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gi(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await Oo.create(this,[gi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Yx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ca(r){return xt(r)}class C0{constructor(e){this.auth=e,this.observer=null,this.addObserver=PC(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vD(r){Lf=r}function sS(r){return Lf.loadJS(r)}function ED(){return Lf.recaptchaEnterpriseScript}function TD(){return Lf.gapiScript}function SD(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class wD{constructor(){this.enterprise=new AD}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class AD{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const bD="recaptcha-enterprise",aS="NO_RECAPTCHA";class RD{constructor(e){this.type=bD,this.auth=Ca(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{rD(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new nD(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(m=>{p(m)})})}function o(u,h,p){const m=window.grecaptcha;w0(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(g=>{h(g)}).catch(()=>{h(aS)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wD().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!t&&w0(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=ED();m.length!==0&&(m+=p),sS(m).then(()=>{o(p,u,h)}).catch(g=>{h(g)})}}).catch(p=>{h(p)})})}}async function x0(r,e,t,s=!1,o=!1){const u=new RD(r);let h;if(o)h=aS;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Zm(r,e,t,s,o){var u;if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await x0(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await x0(r,e,t,t==="getOobCode");return s(r,p)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(r,e){const t=Mg(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(va(u,e??{}))return o;fr(o,"already-initialized")}return t.initialize({options:e})}function CD(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(gi);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function xD(r,e,t){const s=Ca(r);Se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=oS(e),{host:h,port:p}=DD(e),m=p===null?"":`:${p}`,g={url:`${u}//${h}${m}/`},_=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Se(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Se(va(g,s.config.emulator)&&va(_,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=_,s.settings.appVerificationDisabledForTesting=!0,Wo(h)?(V1(`${u}//${h}${m}`),P1("Auth",!0)):ND()}function oS(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function DD(r){const e=oS(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:D0(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:D0(h)}}}function D0(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ND(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mi("not implemented")}_getIdTokenResponse(e){return mi("not implemented")}_linkToIdToken(e,t){return mi("not implemented")}_getReauthenticationResolver(e){return mi("not implemented")}}async function OD(r,e){return Ci(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MD(r,e){return Wu(r,"POST","/v1/accounts:signInWithPassword",bs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(r,e){return Wu(r,"POST","/v1/accounts:signInWithEmailLink",bs(r,e))}async function PD(r,e){return Wu(r,"POST","/v1/accounts:signInWithEmailLink",bs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends Ug{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Pu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Pu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zm(e,t,"signInWithPassword",MD);case"emailLink":return VD(e,{email:this._email,oobCode:this._password});default:fr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zm(e,s,"signUpPassword",OD);case"emailLink":return PD(e,{idToken:t,email:this._email,oobCode:this._password});default:fr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(r,e){return Wu(r,"POST","/v1/accounts:signInWithIdp",bs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD="http://localhost";class Ta extends Ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ta(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new Ta(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Mo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Mo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mo(e,t)}buildRequest(){const e={requestUri:kD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ku(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UD(r){const e=yu(_u(r)).link,t=e?yu(_u(e)).deep_link_id:null,s=yu(_u(r)).deep_link_id;return(s?yu(_u(s)).link:null)||s||t||e||r}class jg{constructor(e){const t=yu(_u(e)),s=t.apiKey??null,o=t.oobCode??null,u=LD(t.mode??null);Se(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=UD(e);try{return new jg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.providerId=Jo.PROVIDER_ID}static credential(e,t){return Pu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=jg.parseLink(t);return Se(s,"argument-error"),Pu._fromEmailAndCode(e,s.code,s.tenantId)}}Jo.PROVIDER_ID="password";Jo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zu extends lS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Zu{constructor(){super("facebook.com")}static credential(e){return Ta._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.FACEBOOK_SIGN_IN_METHOD="facebook.com";as.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Zu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ta._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return os.credential(t,s)}catch{return null}}}os.GOOGLE_SIGN_IN_METHOD="google.com";os.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Zu{constructor(){super("github.com")}static credential(e){return Ta._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ls.credential(e.oauthAccessToken)}catch{return null}}}ls.GITHUB_SIGN_IN_METHOD="github.com";ls.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Zu{constructor(){super("twitter.com")}static credential(e,t){return Ta._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return us.credential(t,s)}catch{return null}}}us.TWITTER_SIGN_IN_METHOD="twitter.com";us.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD(r,e){return Wu(r,"POST","/v1/accounts:signUp",bs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await lr._fromIdTokenResponse(e,s,o),h=N0(s);return new Sa({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=N0(s);return new Sa({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function N0(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends Ii{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,pf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new pf(e,t,s,o)}}function uS(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?pf._fromErrorAndOperation(r,u,e,s):u})}async function zD(r,e,t=!1){const s=await zo(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Sa._forOperation(r,"link",s)}/**
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
 */async function qD(r,e,t=!1){const{auth:s}=r;if(Zn(s.app))return Promise.reject(_i(s));const o="reauthenticate";try{const u=await zo(r,uS(s,o,e,r),t);Se(u.idToken,s,"internal-error");const h=kg(u.idToken);Se(h,s,"internal-error");const{sub:p}=h;return Se(r.uid===p,s,"user-mismatch"),Sa._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&fr(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cS(r,e,t=!1){if(Zn(r.app))return Promise.reject(_i(r));const s="signIn",o=await uS(r,s,e),u=await Sa._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function BD(r,e){return cS(Ca(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(r){const e=Ca(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HD(r,e,t){if(Zn(r.app))return Promise.reject(_i(r));const s=Ca(r),h=await Zm(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jD).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&hS(r),m}),p=await Sa._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function FD(r,e,t){return Zn(r.app)?Promise.reject(_i(r)):BD(xt(r),Jo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&hS(r),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GD(r,e){return Ci(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $D(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=xt(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await zo(s,GD(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const p=s.providerData.find(({providerId:m})=>m==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function YD(r,e,t,s){return xt(r).onIdTokenChanged(e,t,s)}function QD(r,e,t){return xt(r).beforeAuthStateChanged(e,t)}function Uf(r,e,t,s){return xt(r).onAuthStateChanged(e,t,s)}function KD(r){return xt(r).signOut()}const mf="__sak";/**
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
 */class fS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mf,"1"),this.storage.removeItem(mf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=1e3,WD=10;class dS extends fS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,m)=>{this.notifyListeners(h,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);dD()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,WD):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},XD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dS.type="LOCAL";const ZD=dS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS extends fS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pS.type="SESSION";const mS=pS;/**
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
 */function JD(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class jf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new jf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async g=>g(t.origin,u)),m=await JD(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,m)=>{const g=zg("",20);o.port1.start();const _=setTimeout(()=>{m(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const A=S;if(A.data.eventId===g)switch(A.data.status){case"ack":clearTimeout(_),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(A.data.response);break;default:clearTimeout(_),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(){return window}function tN(r){Vr().location.href=r}/**
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
 */function gS(){return typeof Vr().WorkerGlobalScope<"u"&&typeof Vr().importScripts=="function"}async function nN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rN(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function iN(){return gS()?self:null}/**
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
 */const yS="firebaseLocalStorageDb",sN=1,gf="firebaseLocalStorage",_S="fbase_key";class Ju{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zf(r,e){return r.transaction([gf],e?"readwrite":"readonly").objectStore(gf)}function aN(){const r=indexedDB.deleteDatabase(yS);return new Ju(r).toPromise()}function Jm(){const r=indexedDB.open(yS,sN);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(gf,{keyPath:_S})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(gf)?e(s):(s.close(),await aN(),e(await Jm()))})})}async function O0(r,e,t){const s=zf(r,!0).put({[_S]:e,value:t});return new Ju(s).toPromise()}async function oN(r,e){const t=zf(r,!1).get(e),s=await new Ju(t).toPromise();return s===void 0?null:s.value}function M0(r,e){const t=zf(r,!0).delete(e);return new Ju(t).toPromise()}const lN=800,uN=3;class vS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>uN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jf._getInstance(iN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await nN(),!this.activeServiceWorker)return;this.sender=new eN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jm();return await O0(e,mf,"1"),await M0(e,mf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>O0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>oN(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>M0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=zf(o,!1).getAll();return new Ju(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vS.type="LOCAL";const cN=vS;new Xu(3e4,6e4);/**
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
 */function hN(r,e){return e?gi(e):(Se(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class qg extends Ug{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fN(r){return cS(r.auth,new qg(r),r.bypassAuthState)}function dN(r){const{auth:e,user:t}=r;return Se(t,e,"internal-error"),qD(t,new qg(r),r.bypassAuthState)}async function pN(r){const{auth:e,user:t}=r;return Se(t,e,"internal-error"),zD(t,new qg(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fN;case"linkViaPopup":case"linkViaRedirect":return pN;case"reauthViaPopup":case"reauthViaRedirect":return dN;default:fr(this.auth,"internal-error")}}resolve(e){wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=new Xu(2e3,1e4);class Do extends ES{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Do.currentPopupAction&&Do.currentPopupAction.cancel(),Do.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){wi(this.filter.length===1,"Popup operations only handle one event");const e=zg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Do.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mN.get())};e()}}Do.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN="pendingRedirect",Kh=new Map;class yN extends ES{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Kh.get(this.auth._key());if(!e){try{const s=await _N(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Kh.set(this.auth._key(),e)}return this.bypassAuthState||Kh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _N(r,e){const t=TN(e),s=EN(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function vN(r,e){Kh.set(r._key(),e)}function EN(r){return gi(r._redirectPersistence)}function TN(r){return Qh(gN,r.config.apiKey,r.name)}async function SN(r,e,t=!1){if(Zn(r.app))return Promise.reject(_i(r));const s=Ca(r),o=hN(s,e),h=await new yN(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=600*1e3;class AN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!TS(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Mr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wN&&this.cachedEventUids.clear(),this.cachedEventUids.has(V0(e))}saveEventToCache(e){this.cachedEventUids.add(V0(e)),this.lastProcessedEventTime=Date.now()}}function V0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function TS({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bN(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return TS(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN(r,e={}){return Ci(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CN=/^https?/;async function xN(r){if(r.config.emulator)return;const{authorizedDomains:e}=await RN(r);for(const t of e)try{if(DN(t))return}catch{}fr(r,"unauthorized-domain")}function DN(r){const e=Xm(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!CN.test(t))return!1;if(IN.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const NN=new Xu(3e4,6e4);function P0(){const r=Vr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function ON(r){return new Promise((e,t)=>{var o,u,h;function s(){P0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{P0(),t(Mr(r,"network-request-failed"))},timeout:NN.get()})}if((u=(o=Vr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=Vr().gapi)!=null&&h.load)s();else{const p=SD("iframefcb");return Vr()[p]=()=>{gapi.load?s():t(Mr(r,"network-request-failed"))},sS(`${TD()}?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw Xh=null,e})}let Xh=null;function MN(r){return Xh=Xh||ON(r),Xh}/**
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
 */const VN=new Xu(5e3,15e3),PN="__/auth/iframe",kN="emulator/auth/iframe",LN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jN(r){const e=r.config;Se(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Pg(e,kN):`https://${r.config.authDomain}/${PN}`,s={apiKey:e.apiKey,appName:r.name,v:Zo},o=UN.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ku(s).slice(1)}`}async function zN(r){const e=await MN(r),t=Vr().gapi;return Se(t,r,"internal-error"),e.open({where:document.body,url:jN(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LN,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Mr(r,"network-request-failed"),p=Vr().setTimeout(()=>{u(h)},VN.get());function m(){Vr().clearTimeout(p),o(s)}s.ping(m).then(m,()=>{u(h)})}))}/**
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
 */const qN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BN=500,HN=600,FN="_blank",GN="http://localhost";class k0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $N(r,e,t,s=BN,o=HN){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m={...qN,width:s.toString(),height:o.toString(),top:u,left:h},g=mn().toLowerCase();t&&(p=Z1(g)?FN:t),X1(g)&&(e=e||GN,m.scrollbars="yes");const _=Object.entries(m).reduce((A,[N,U])=>`${A}${N}=${U},`,"");if(fD(g)&&p!=="_self")return YN(e||"",p),new k0(null);const S=window.open(e||"",p,_);Se(S,r,"popup-blocked");try{S.focus()}catch{}return new k0(S)}function YN(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const QN="__/auth/handler",KN="emulator/auth/handler",XN=encodeURIComponent("fac");async function L0(r,e,t,s,o,u){Se(r.config.authDomain,r,"auth-domain-config-required"),Se(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Zo,eventId:o};if(e instanceof lS){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",VC(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,S]of Object.entries({}))h[_]=S}if(e instanceof Zu){const _=e.getScopes().filter(S=>S!=="");_.length>0&&(h.scopes=_.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const _ of Object.keys(p))p[_]===void 0&&delete p[_];const m=await r._getAppCheckToken(),g=m?`#${XN}=${encodeURIComponent(m)}`:"";return`${WN(r)}?${Ku(p).slice(1)}${g}`}function WN({config:r}){return r.emulator?Pg(r,KN):`https://${r.authDomain}/${QN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="webStorageSupport";class ZN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mS,this._completeRedirectFn=SN,this._overrideRedirectResult=vN}async _openPopup(e,t,s,o){var h;wi((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await L0(e,t,s,Xm(),o);return $N(e,u,zg())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await L0(e,t,s,Xm(),o);return tN(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(wi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await zN(e),s=new AN(e);return t.register("authEvent",o=>(Se(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Im,{type:Im},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[Im];u!==void 0&&t(!!u),fr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rS()||W1()||Lg()}}const JN=ZN;var U0="@firebase/auth",j0="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function n2(r){jo(new Ea("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;Se(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iS(r)},g=new _D(s,o,u,m);return CD(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),jo(new Ea("auth-internal",e=>{const t=Ca(e.getProvider("auth").getImmediate());return(s=>new e2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ps(U0,j0,t2(r)),ps(U0,j0,"esm2020")}/**
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
 */const r2=300,i2=M1("authIdTokenMaxAge")||r2;let z0=null;const s2=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>i2)return;const o=t==null?void 0:t.token;z0!==o&&(z0=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function a2(r=j1()){const e=Mg(r,"auth");if(e.isInitialized())return e.getImmediate();const t=ID(r,{popupRedirectResolver:JN,persistence:[cN,ZD,mS]}),s=M1("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=s2(u.toString());QD(t,h,()=>h(t.currentUser)),YD(t,p=>h(p))}}const o=N1("auth");return o&&xD(t,`http://${o}`),t}function o2(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}vD({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Mr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",o2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});n2("Browser");var l2="firebase",u2="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ps(l2,u2,"app");var q0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ms,SS;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,R){function I(){}I.prototype=R.prototype,x.D=R.prototype,x.prototype=new I,x.prototype.constructor=x,x.C=function(V,P,L){for(var D=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)D[Dt-2]=arguments[Dt];return R.prototype[P].apply(V,D)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,R,I){I||(I=0);var V=Array(16);if(typeof R=="string")for(var P=0;16>P;++P)V[P]=R.charCodeAt(I++)|R.charCodeAt(I++)<<8|R.charCodeAt(I++)<<16|R.charCodeAt(I++)<<24;else for(P=0;16>P;++P)V[P]=R[I++]|R[I++]<<8|R[I++]<<16|R[I++]<<24;R=x.g[0],I=x.g[1],P=x.g[2];var L=x.g[3],D=R+(L^I&(P^L))+V[0]+3614090360&4294967295;R=I+(D<<7&4294967295|D>>>25),D=L+(P^R&(I^P))+V[1]+3905402710&4294967295,L=R+(D<<12&4294967295|D>>>20),D=P+(I^L&(R^I))+V[2]+606105819&4294967295,P=L+(D<<17&4294967295|D>>>15),D=I+(R^P&(L^R))+V[3]+3250441966&4294967295,I=P+(D<<22&4294967295|D>>>10),D=R+(L^I&(P^L))+V[4]+4118548399&4294967295,R=I+(D<<7&4294967295|D>>>25),D=L+(P^R&(I^P))+V[5]+1200080426&4294967295,L=R+(D<<12&4294967295|D>>>20),D=P+(I^L&(R^I))+V[6]+2821735955&4294967295,P=L+(D<<17&4294967295|D>>>15),D=I+(R^P&(L^R))+V[7]+4249261313&4294967295,I=P+(D<<22&4294967295|D>>>10),D=R+(L^I&(P^L))+V[8]+1770035416&4294967295,R=I+(D<<7&4294967295|D>>>25),D=L+(P^R&(I^P))+V[9]+2336552879&4294967295,L=R+(D<<12&4294967295|D>>>20),D=P+(I^L&(R^I))+V[10]+4294925233&4294967295,P=L+(D<<17&4294967295|D>>>15),D=I+(R^P&(L^R))+V[11]+2304563134&4294967295,I=P+(D<<22&4294967295|D>>>10),D=R+(L^I&(P^L))+V[12]+1804603682&4294967295,R=I+(D<<7&4294967295|D>>>25),D=L+(P^R&(I^P))+V[13]+4254626195&4294967295,L=R+(D<<12&4294967295|D>>>20),D=P+(I^L&(R^I))+V[14]+2792965006&4294967295,P=L+(D<<17&4294967295|D>>>15),D=I+(R^P&(L^R))+V[15]+1236535329&4294967295,I=P+(D<<22&4294967295|D>>>10),D=R+(P^L&(I^P))+V[1]+4129170786&4294967295,R=I+(D<<5&4294967295|D>>>27),D=L+(I^P&(R^I))+V[6]+3225465664&4294967295,L=R+(D<<9&4294967295|D>>>23),D=P+(R^I&(L^R))+V[11]+643717713&4294967295,P=L+(D<<14&4294967295|D>>>18),D=I+(L^R&(P^L))+V[0]+3921069994&4294967295,I=P+(D<<20&4294967295|D>>>12),D=R+(P^L&(I^P))+V[5]+3593408605&4294967295,R=I+(D<<5&4294967295|D>>>27),D=L+(I^P&(R^I))+V[10]+38016083&4294967295,L=R+(D<<9&4294967295|D>>>23),D=P+(R^I&(L^R))+V[15]+3634488961&4294967295,P=L+(D<<14&4294967295|D>>>18),D=I+(L^R&(P^L))+V[4]+3889429448&4294967295,I=P+(D<<20&4294967295|D>>>12),D=R+(P^L&(I^P))+V[9]+568446438&4294967295,R=I+(D<<5&4294967295|D>>>27),D=L+(I^P&(R^I))+V[14]+3275163606&4294967295,L=R+(D<<9&4294967295|D>>>23),D=P+(R^I&(L^R))+V[3]+4107603335&4294967295,P=L+(D<<14&4294967295|D>>>18),D=I+(L^R&(P^L))+V[8]+1163531501&4294967295,I=P+(D<<20&4294967295|D>>>12),D=R+(P^L&(I^P))+V[13]+2850285829&4294967295,R=I+(D<<5&4294967295|D>>>27),D=L+(I^P&(R^I))+V[2]+4243563512&4294967295,L=R+(D<<9&4294967295|D>>>23),D=P+(R^I&(L^R))+V[7]+1735328473&4294967295,P=L+(D<<14&4294967295|D>>>18),D=I+(L^R&(P^L))+V[12]+2368359562&4294967295,I=P+(D<<20&4294967295|D>>>12),D=R+(I^P^L)+V[5]+4294588738&4294967295,R=I+(D<<4&4294967295|D>>>28),D=L+(R^I^P)+V[8]+2272392833&4294967295,L=R+(D<<11&4294967295|D>>>21),D=P+(L^R^I)+V[11]+1839030562&4294967295,P=L+(D<<16&4294967295|D>>>16),D=I+(P^L^R)+V[14]+4259657740&4294967295,I=P+(D<<23&4294967295|D>>>9),D=R+(I^P^L)+V[1]+2763975236&4294967295,R=I+(D<<4&4294967295|D>>>28),D=L+(R^I^P)+V[4]+1272893353&4294967295,L=R+(D<<11&4294967295|D>>>21),D=P+(L^R^I)+V[7]+4139469664&4294967295,P=L+(D<<16&4294967295|D>>>16),D=I+(P^L^R)+V[10]+3200236656&4294967295,I=P+(D<<23&4294967295|D>>>9),D=R+(I^P^L)+V[13]+681279174&4294967295,R=I+(D<<4&4294967295|D>>>28),D=L+(R^I^P)+V[0]+3936430074&4294967295,L=R+(D<<11&4294967295|D>>>21),D=P+(L^R^I)+V[3]+3572445317&4294967295,P=L+(D<<16&4294967295|D>>>16),D=I+(P^L^R)+V[6]+76029189&4294967295,I=P+(D<<23&4294967295|D>>>9),D=R+(I^P^L)+V[9]+3654602809&4294967295,R=I+(D<<4&4294967295|D>>>28),D=L+(R^I^P)+V[12]+3873151461&4294967295,L=R+(D<<11&4294967295|D>>>21),D=P+(L^R^I)+V[15]+530742520&4294967295,P=L+(D<<16&4294967295|D>>>16),D=I+(P^L^R)+V[2]+3299628645&4294967295,I=P+(D<<23&4294967295|D>>>9),D=R+(P^(I|~L))+V[0]+4096336452&4294967295,R=I+(D<<6&4294967295|D>>>26),D=L+(I^(R|~P))+V[7]+1126891415&4294967295,L=R+(D<<10&4294967295|D>>>22),D=P+(R^(L|~I))+V[14]+2878612391&4294967295,P=L+(D<<15&4294967295|D>>>17),D=I+(L^(P|~R))+V[5]+4237533241&4294967295,I=P+(D<<21&4294967295|D>>>11),D=R+(P^(I|~L))+V[12]+1700485571&4294967295,R=I+(D<<6&4294967295|D>>>26),D=L+(I^(R|~P))+V[3]+2399980690&4294967295,L=R+(D<<10&4294967295|D>>>22),D=P+(R^(L|~I))+V[10]+4293915773&4294967295,P=L+(D<<15&4294967295|D>>>17),D=I+(L^(P|~R))+V[1]+2240044497&4294967295,I=P+(D<<21&4294967295|D>>>11),D=R+(P^(I|~L))+V[8]+1873313359&4294967295,R=I+(D<<6&4294967295|D>>>26),D=L+(I^(R|~P))+V[15]+4264355552&4294967295,L=R+(D<<10&4294967295|D>>>22),D=P+(R^(L|~I))+V[6]+2734768916&4294967295,P=L+(D<<15&4294967295|D>>>17),D=I+(L^(P|~R))+V[13]+1309151649&4294967295,I=P+(D<<21&4294967295|D>>>11),D=R+(P^(I|~L))+V[4]+4149444226&4294967295,R=I+(D<<6&4294967295|D>>>26),D=L+(I^(R|~P))+V[11]+3174756917&4294967295,L=R+(D<<10&4294967295|D>>>22),D=P+(R^(L|~I))+V[2]+718787259&4294967295,P=L+(D<<15&4294967295|D>>>17),D=I+(L^(P|~R))+V[9]+3951481745&4294967295,x.g[0]=x.g[0]+R&4294967295,x.g[1]=x.g[1]+(P+(D<<21&4294967295|D>>>11))&4294967295,x.g[2]=x.g[2]+P&4294967295,x.g[3]=x.g[3]+L&4294967295}s.prototype.u=function(x,R){R===void 0&&(R=x.length);for(var I=R-this.blockSize,V=this.B,P=this.h,L=0;L<R;){if(P==0)for(;L<=I;)o(this,x,L),L+=this.blockSize;if(typeof x=="string"){for(;L<R;)if(V[P++]=x.charCodeAt(L++),P==this.blockSize){o(this,V),P=0;break}}else for(;L<R;)if(V[P++]=x[L++],P==this.blockSize){o(this,V),P=0;break}}this.h=P,this.o+=R},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var R=1;R<x.length-8;++R)x[R]=0;var I=8*this.o;for(R=x.length-8;R<x.length;++R)x[R]=I&255,I/=256;for(this.u(x),x=Array(16),R=I=0;4>R;++R)for(var V=0;32>V;V+=8)x[I++]=this.g[R]>>>V&255;return x};function u(x,R){var I=p;return Object.prototype.hasOwnProperty.call(I,x)?I[x]:I[x]=R(x)}function h(x,R){this.h=R;for(var I=[],V=!0,P=x.length-1;0<=P;P--){var L=x[P]|0;V&&L==R||(I[P]=L,V=!1)}this.g=I}var p={};function m(x){return-128<=x&&128>x?u(x,function(R){return new h([R|0],0>R?-1:0)}):new h([x|0],0>x?-1:0)}function g(x){if(isNaN(x)||!isFinite(x))return S;if(0>x)return H(g(-x));for(var R=[],I=1,V=0;x>=I;V++)R[V]=x/I|0,I*=4294967296;return new h(R,0)}function _(x,R){if(x.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(x.charAt(0)=="-")return H(_(x.substring(1),R));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(R,8)),V=S,P=0;P<x.length;P+=8){var L=Math.min(8,x.length-P),D=parseInt(x.substring(P,P+L),R);8>L?(L=g(Math.pow(R,L)),V=V.j(L).add(g(D))):(V=V.j(I),V=V.add(g(D)))}return V}var S=m(0),A=m(1),N=m(16777216);r=h.prototype,r.m=function(){if($(this))return-H(this).m();for(var x=0,R=1,I=0;I<this.g.length;I++){var V=this.i(I);x+=(0<=V?V:4294967296+V)*R,R*=4294967296}return x},r.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(U(this))return"0";if($(this))return"-"+H(this).toString(x);for(var R=g(Math.pow(x,6)),I=this,V="";;){var P=he(I,R).g;I=J(I,P.j(R));var L=((0<I.g.length?I.g[0]:I.h)>>>0).toString(x);if(I=P,U(I))return L+V;for(;6>L.length;)L="0"+L;V=L+V}},r.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function U(x){if(x.h!=0)return!1;for(var R=0;R<x.g.length;R++)if(x.g[R]!=0)return!1;return!0}function $(x){return x.h==-1}r.l=function(x){return x=J(this,x),$(x)?-1:U(x)?0:1};function H(x){for(var R=x.g.length,I=[],V=0;V<R;V++)I[V]=~x.g[V];return new h(I,~x.h).add(A)}r.abs=function(){return $(this)?H(this):this},r.add=function(x){for(var R=Math.max(this.g.length,x.g.length),I=[],V=0,P=0;P<=R;P++){var L=V+(this.i(P)&65535)+(x.i(P)&65535),D=(L>>>16)+(this.i(P)>>>16)+(x.i(P)>>>16);V=D>>>16,L&=65535,D&=65535,I[P]=D<<16|L}return new h(I,I[I.length-1]&-2147483648?-1:0)};function J(x,R){return x.add(H(R))}r.j=function(x){if(U(this)||U(x))return S;if($(this))return $(x)?H(this).j(H(x)):H(H(this).j(x));if($(x))return H(this.j(H(x)));if(0>this.l(N)&&0>x.l(N))return g(this.m()*x.m());for(var R=this.g.length+x.g.length,I=[],V=0;V<2*R;V++)I[V]=0;for(V=0;V<this.g.length;V++)for(var P=0;P<x.g.length;P++){var L=this.i(V)>>>16,D=this.i(V)&65535,Dt=x.i(P)>>>16,at=x.i(P)&65535;I[2*V+2*P]+=D*at,X(I,2*V+2*P),I[2*V+2*P+1]+=L*at,X(I,2*V+2*P+1),I[2*V+2*P+1]+=D*Dt,X(I,2*V+2*P+1),I[2*V+2*P+2]+=L*Dt,X(I,2*V+2*P+2)}for(V=0;V<R;V++)I[V]=I[2*V+1]<<16|I[2*V];for(V=R;V<2*R;V++)I[V]=0;return new h(I,0)};function X(x,R){for(;(x[R]&65535)!=x[R];)x[R+1]+=x[R]>>>16,x[R]&=65535,R++}function re(x,R){this.g=x,this.h=R}function he(x,R){if(U(R))throw Error("division by zero");if(U(x))return new re(S,S);if($(x))return R=he(H(x),R),new re(H(R.g),H(R.h));if($(R))return R=he(x,H(R)),new re(H(R.g),R.h);if(30<x.g.length){if($(x)||$(R))throw Error("slowDivide_ only works with positive integers.");for(var I=A,V=R;0>=V.l(x);)I=ue(I),V=ue(V);var P=de(I,1),L=de(V,1);for(V=de(V,2),I=de(I,2);!U(V);){var D=L.add(V);0>=D.l(x)&&(P=P.add(I),L=D),V=de(V,1),I=de(I,1)}return R=J(x,P.j(R)),new re(P,R)}for(P=S;0<=x.l(R);){for(I=Math.max(1,Math.floor(x.m()/R.m())),V=Math.ceil(Math.log(I)/Math.LN2),V=48>=V?1:Math.pow(2,V-48),L=g(I),D=L.j(R);$(D)||0<D.l(x);)I-=V,L=g(I),D=L.j(R);U(L)&&(L=A),P=P.add(L),x=J(x,D)}return new re(P,x)}r.A=function(x){return he(this,x).h},r.and=function(x){for(var R=Math.max(this.g.length,x.g.length),I=[],V=0;V<R;V++)I[V]=this.i(V)&x.i(V);return new h(I,this.h&x.h)},r.or=function(x){for(var R=Math.max(this.g.length,x.g.length),I=[],V=0;V<R;V++)I[V]=this.i(V)|x.i(V);return new h(I,this.h|x.h)},r.xor=function(x){for(var R=Math.max(this.g.length,x.g.length),I=[],V=0;V<R;V++)I[V]=this.i(V)^x.i(V);return new h(I,this.h^x.h)};function ue(x){for(var R=x.g.length+1,I=[],V=0;V<R;V++)I[V]=x.i(V)<<1|x.i(V-1)>>>31;return new h(I,x.h)}function de(x,R){var I=R>>5;R%=32;for(var V=x.g.length-I,P=[],L=0;L<V;L++)P[L]=0<R?x.i(L+I)>>>R|x.i(L+I+1)<<32-R:x.i(L+I);return new h(P,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,SS=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=_,ms=h}).apply(typeof q0<"u"?q0:typeof self<"u"?self:typeof window<"u"?window:{});var Vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wS,vu,AS,Wh,eg,bS,RS,IS;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,v){return c==Array.prototype||c==Object.prototype||(c[y]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vh=="object"&&Vh];for(var y=0;y<c.length;++y){var v=c[y];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function o(c,y){if(y)e:{var v=s;c=c.split(".");for(var b=0;b<c.length-1;b++){var j=c[b];if(!(j in v))break e;v=v[j]}c=c[c.length-1],b=v[c],y=y(b),y!=b&&y!=null&&e(v,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var v=0,b=!1,j={next:function(){if(!b&&v<c.length){var Y=v++;return{value:y(Y,c[Y]),done:!1}}return b=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function m(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function _(c,y,v){return c.call.apply(c.bind,arguments)}function S(c,y,v){if(!c)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,b),c.apply(y,j)}}return function(){return c.apply(y,arguments)}}function A(c,y,v){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:S,A.apply(null,arguments)}function N(c,y){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function U(c,y){function v(){}v.prototype=y.prototype,c.aa=y.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(b,j,Y){for(var oe=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)oe[Ue-2]=arguments[Ue];return y.prototype[j].apply(b,oe)}}function $(c){const y=c.length;if(0<y){const v=Array(y);for(let b=0;b<y;b++)v[b]=c[b];return v}return[]}function H(c,y){for(let v=1;v<arguments.length;v++){const b=arguments[v];if(m(b)){const j=c.length||0,Y=b.length||0;c.length=j+Y;for(let oe=0;oe<Y;oe++)c[j+oe]=b[oe]}else c.push(b)}}class J{constructor(y,v){this.i=y,this.j=v,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function X(c){return/^[\s\xa0]*$/.test(c)}function re(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function he(c){return he[" "](c),c}he[" "]=function(){};var ue=re().indexOf("Gecko")!=-1&&!(re().toLowerCase().indexOf("webkit")!=-1&&re().indexOf("Edge")==-1)&&!(re().indexOf("Trident")!=-1||re().indexOf("MSIE")!=-1)&&re().indexOf("Edge")==-1;function de(c,y,v){for(const b in c)y.call(v,c[b],b,c)}function x(c,y){for(const v in c)y.call(void 0,c[v],v,c)}function R(c){const y={};for(const v in c)y[v]=c[v];return y}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(c,y){let v,b;for(let j=1;j<arguments.length;j++){b=arguments[j];for(v in b)c[v]=b[v];for(let Y=0;Y<I.length;Y++)v=I[Y],Object.prototype.hasOwnProperty.call(b,v)&&(c[v]=b[v])}}function P(c){var y=1;c=c.split(":");const v=[];for(;0<y&&c.length;)v.push(c.shift()),y--;return c.length&&v.push(c.join(":")),v}function L(c){p.setTimeout(()=>{throw c},0)}function D(){var c=Ce;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Dt{constructor(){this.h=this.g=null}add(y,v){const b=at.get();b.set(y,v),this.h?this.h.next=b:this.g=b,this.h=b}}var at=new J(()=>new Q,c=>c.reset());class Q{constructor(){this.next=this.g=this.h=null}set(y,v){this.h=y,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let le,me=!1,Ce=new Dt,O=()=>{const c=p.Promise.resolve(void 0);le=()=>{c.then(ne)}};var ne=()=>{for(var c;c=D();){try{c.h.call(c.g)}catch(v){L(v)}var y=at;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}me=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};p.addEventListener("test",v,y),p.removeEventListener("test",v,y)}catch{}return c}();function Ie(c,y){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(ue){e:{try{he(y.nodeName);var j=!0;break e}catch{}j=!1}j||(y=null)}}else v=="mouseover"?y=c.fromElement:v=="mouseout"&&(y=c.toElement);this.relatedTarget=y,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ie.aa.h.call(this)}}U(Ie,se);var ve={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),Be=0;function Lt(c,y,v,b,j){this.listener=c,this.proxy=null,this.src=y,this.type=v,this.capture=!!b,this.ha=j,this.key=++Be,this.da=this.fa=!1}function Un(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function En(c){this.src=c,this.g={},this.h=0}En.prototype.add=function(c,y,v,b,j){var Y=c.toString();c=this.g[Y],c||(c=this.g[Y]=[],this.h++);var oe=xs(c,y,b,j);return-1<oe?(y=c[oe],v||(y.fa=!1)):(y=new Lt(y,this.src,Y,!!b,j),y.fa=v,c.push(y)),y};function an(c,y){var v=y.type;if(v in c.g){var b=c.g[v],j=Array.prototype.indexOf.call(b,y,void 0),Y;(Y=0<=j)&&Array.prototype.splice.call(b,j,1),Y&&(Un(y),c.g[v].length==0&&(delete c.g[v],c.h--))}}function xs(c,y,v,b){for(var j=0;j<c.length;++j){var Y=c[j];if(!Y.da&&Y.listener==y&&Y.capture==!!v&&Y.ha==b)return j}return-1}var Ds="closure_lm_"+(1e6*Math.random()|0),sl={};function ac(c,y,v,b,j){if(Array.isArray(y)){for(var Y=0;Y<y.length;Y++)ac(c,y[Y],v,b,j);return null}return v=oc(v),c&&c[ct]?c.K(y,v,g(b)?!!b.capture:!1,j):jn(c,y,v,!1,b,j)}function jn(c,y,v,b,j,Y){if(!y)throw Error("Invalid event type");var oe=g(j)?!!j.capture:!!j,Ue=Oa(c);if(Ue||(c[Ds]=Ue=new En(c)),v=Ue.add(y,v,b,oe,Y),v.proxy)return v;if(b=ud(),v.proxy=b,b.src=c,b.listener=v,c.addEventListener)ge||(j=oe),j===void 0&&(j=!1),c.addEventListener(y.toString(),b,j);else if(c.attachEvent)c.attachEvent(Ns(y.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ud(){function c(v){return y.call(c.src,c.listener,v)}const y=cd;return c}function al(c,y,v,b,j){if(Array.isArray(y))for(var Y=0;Y<y.length;Y++)al(c,y[Y],v,b,j);else b=g(b)?!!b.capture:!!b,v=oc(v),c&&c[ct]?(c=c.i,y=String(y).toString(),y in c.g&&(Y=c.g[y],v=xs(Y,v,b,j),-1<v&&(Un(Y[v]),Array.prototype.splice.call(Y,v,1),Y.length==0&&(delete c.g[y],c.h--)))):c&&(c=Oa(c))&&(y=c.g[y.toString()],c=-1,y&&(c=xs(y,v,b,j)),(v=-1<c?y[c]:null)&&Na(v))}function Na(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[ct])an(y.i,c);else{var v=c.type,b=c.proxy;y.removeEventListener?y.removeEventListener(v,b,c.capture):y.detachEvent?y.detachEvent(Ns(v),b):y.addListener&&y.removeListener&&y.removeListener(b),(v=Oa(y))?(an(v,c),v.h==0&&(v.src=null,y[Ds]=null)):Un(c)}}}function Ns(c){return c in sl?sl[c]:sl[c]="on"+c}function cd(c,y){if(c.da)c=!0;else{y=new Ie(y,this);var v=c.listener,b=c.ha||c.src;c.fa&&Na(c),c=v.call(b,y)}return c}function Oa(c){return c=c[Ds],c instanceof En?c:null}var ol="__closure_events_fn_"+(1e9*Math.random()>>>0);function oc(c){return typeof c=="function"?c:(c[ol]||(c[ol]=function(y){return c.handleEvent(y)}),c[ol])}function dt(){ae.call(this),this.i=new En(this),this.M=this,this.F=null}U(dt,ae),dt.prototype[ct]=!0,dt.prototype.removeEventListener=function(c,y,v,b){al(this,c,y,v,b)};function Qe(c,y){var v,b=c.F;if(b)for(v=[];b;b=b.F)v.push(b);if(c=c.M,b=y.type||y,typeof y=="string")y=new se(y,c);else if(y instanceof se)y.target=y.target||c;else{var j=y;y=new se(b,c),V(y,j)}if(j=!0,v)for(var Y=v.length-1;0<=Y;Y--){var oe=y.g=v[Y];j=Rn(oe,b,!0,y)&&j}if(oe=y.g=c,j=Rn(oe,b,!0,y)&&j,j=Rn(oe,b,!1,y)&&j,v)for(Y=0;Y<v.length;Y++)oe=y.g=v[Y],j=Rn(oe,b,!1,y)&&j}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var v=c.g[y],b=0;b<v.length;b++)Un(v[b]);delete c.g[y],c.h--}}this.F=null},dt.prototype.K=function(c,y,v,b){return this.i.add(String(c),y,!1,v,b)},dt.prototype.L=function(c,y,v,b){return this.i.add(String(c),y,!0,v,b)};function Rn(c,y,v,b){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var j=!0,Y=0;Y<y.length;++Y){var oe=y[Y];if(oe&&!oe.da&&oe.capture==v){var Ue=oe.listener,Ot=oe.ha||oe.src;oe.fa&&an(c.i,oe),j=Ue.call(Ot,b)!==!1&&j}}return j&&!b.defaultPrevented}function on(c,y,v){if(typeof c=="function")v&&(c=A(c,v));else if(c&&typeof c.handleEvent=="function")c=A(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:p.setTimeout(c,y||0)}function lc(c){c.g=on(()=>{c.g=null,c.i&&(c.i=!1,lc(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class hd extends ae{constructor(y,v){super(),this.m=y,this.l=v,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:lc(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Os(c){ae.call(this),this.h=c,this.g={}}U(Os,ae);var Ms=[];function Vs(c){de(c.g,function(y,v){this.g.hasOwnProperty(v)&&Na(y)},c),c.g={}}Os.prototype.N=function(){Os.aa.N.call(this),Vs(this)},Os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tr=p.JSON.stringify,Ma=p.JSON.parse,Ps=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function ll(){}ll.prototype.h=null;function ul(c){return c.h||(c.h=c.i())}function cl(){}var qr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Br(){se.call(this,"d")}U(Br,se);function hl(){se.call(this,"c")}U(hl,se);var mr={},fl=null;function xi(){return fl=fl||new dt}mr.La="serverreachability";function Va(c){se.call(this,mr.La,c)}U(Va,se);function Di(c){const y=xi();Qe(y,new Va(y))}mr.STAT_EVENT="statevent";function uc(c,y){se.call(this,mr.STAT_EVENT,c),this.stat=y}U(uc,se);function ot(c){const y=xi();Qe(y,new uc(y,c))}mr.Ma="timingevent";function Nt(c,y){se.call(this,mr.Ma,c),this.size=y}U(Nt,se);function Tt(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},y)}function zn(){this.g=!0}zn.prototype.xa=function(){this.g=!1};function dl(c,y,v,b,j,Y){c.info(function(){if(c.g)if(Y)for(var oe="",Ue=Y.split("&"),Ot=0;Ot<Ue.length;Ot++){var je=Ue[Ot].split("=");if(1<je.length){var jt=je[0];je=je[1];var Mt=jt.split("_");oe=2<=Mt.length&&Mt[1]=="type"?oe+(jt+"="+je+"&"):oe+(jt+"=redacted&")}}else oe=null;else oe=Y;return"XMLHTTP REQ ("+b+") [attempt "+j+"]: "+y+`
`+v+`
`+oe})}function fd(c,y,v,b,j,Y,oe){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+j+"]: "+y+`
`+v+`
`+Y+" "+oe})}function Ni(c,y,v,b){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+ks(c,v)+(b?" "+b:"")})}function cc(c,y){c.info(function(){return"TIMEOUT: "+y})}zn.prototype.info=function(){};function ks(c,y){if(!c.g)return y;if(!y)return null;try{var v=JSON.parse(y);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var b=v[c];if(!(2>b.length)){var j=b[1];if(Array.isArray(j)&&!(1>j.length)){var Y=j[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var oe=1;oe<j.length;oe++)j[oe]=""}}}}return tr(v)}catch{return y}}var Oi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gr;function yr(){}U(yr,ll),yr.prototype.g=function(){return new XMLHttpRequest},yr.prototype.i=function(){return{}},gr=new yr;function gn(c,y,v,b){this.j=c,this.i=y,this.l=v,this.R=b||1,this.U=new Os(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}var pl={},Pa={};function nr(c,y,v){c.L=1,c.v=qs(In(y)),c.m=v,c.P=!0,Fr(c,null)}function Fr(c,y){c.F=Date.now(),Ls(c),c.A=In(c.v);var v=c.A,b=c.R;Array.isArray(b)||(b=[String(b)]),El(v.i,"t",b),c.C=0,v=c.j.J,c.h=new yt,c.g=Rc(c.j,v?y:null,!c.m),0<c.O&&(c.M=new hd(A(c.Y,c,c.g),c.O)),y=c.U,v=c.g,b=c.ca;var j="readystatechange";Array.isArray(j)||(j&&(Ms[0]=j.toString()),j=Ms);for(var Y=0;Y<j.length;Y++){var oe=ac(v,j[Y],b||y.handleEvent,!1,y.h||y);if(!oe)break;y.g[oe.key]=oe}y=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),Di(),dl(c.i,c.u,c.A,c.l,c.R,c.m)}gn.prototype.ca=function(c){c=c.target;const y=this.M;y&&Fn(c)==3?y.j():this.Y(c)},gn.prototype.Y=function(c){try{if(c==this.g)e:{const Mt=Fn(this.g);var y=this.g.Ba();const Zr=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||_c(this.g)))){this.J||Mt!=4||y==7||(y==8||0>=Zr?Di(3):Di(2)),Mi(this);var v=this.g.Z();this.X=v;t:if(hc(this)){var b=_c(this.g);c="";var j=b.length,Y=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),_r(this);var oe="";break t}this.h.i=new p.TextDecoder}for(y=0;y<j;y++)this.h.h=!0,c+=this.h.i.decode(b[y],{stream:!(Y&&y==j-1)});b.length=0,this.h.g+=c,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=v==200,fd(this.i,this.u,this.A,this.l,this.R,Mt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,Ot=this.g;if((Ue=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(Ue)){var je=Ue;break t}}je=null}if(v=je)Ni(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Us(this,v);else{this.o=!1,this.s=3,ot(12),$t(this),_r(this);break e}}if(this.P){v=!0;let Yt;for(;!this.J&&this.C<oe.length;)if(Yt=fc(this,oe),Yt==Pa){Mt==4&&(this.s=4,ot(14),v=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==pl){this.s=4,ot(15),Ni(this.i,this.l,oe,"[Invalid Chunk]"),v=!1;break}else Ni(this.i,this.l,Yt,null),Us(this,Yt);if(hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||oe.length!=0||this.h.h||(this.s=1,ot(16),v=!1),this.o=this.o&&v,!v)Ni(this.i,this.l,oe,"[Invalid Chunked Response]"),$t(this),_r(this);else if(0<oe.length&&!this.W){this.W=!0;var jt=this.j;jt.g==this&&jt.ba&&!jt.M&&(jt.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),Ks(jt),jt.M=!0,ot(11))}}else Ni(this.i,this.l,oe,null),Us(this,oe);Mt==4&&$t(this),this.o&&!this.J&&(Mt==4?wc(this.j,this):(this.o=!1,Ls(this)))}else yd(this.g),v==400&&0<oe.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),$t(this),_r(this)}}}catch{}finally{}};function hc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function fc(c,y){var v=c.C,b=y.indexOf(`
`,v);return b==-1?Pa:(v=Number(y.substring(v,b)),isNaN(v)?pl:(b+=1,b+v>y.length?Pa:(y=y.slice(b,b+v),c.C=b+v,y)))}gn.prototype.cancel=function(){this.J=!0,$t(this)};function Ls(c){c.S=Date.now()+c.I,dc(c,c.I)}function dc(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Tt(A(c.ba,c),y)}function Mi(c){c.B&&(p.clearTimeout(c.B),c.B=null)}gn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(cc(this.i,this.A),this.L!=2&&(Di(),ot(17)),$t(this),this.s=2,_r(this)):dc(this,this.S-c)};function _r(c){c.j.G==0||c.J||wc(c.j,c)}function $t(c){Mi(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,Vs(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function Us(c,y){try{var v=c.j;if(v.G!=0&&(v.g==c||ml(v.h,c))){if(!c.K&&ml(v.h,c)&&v.G==3){try{var b=v.Da.g.parse(y)}catch{b=null}if(Array.isArray(b)&&b.length==3){var j=b;if(j[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)Ya(v),Ga(v);else break e;bl(v),ot(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=Tt(A(v.Za,v),6e3));if(1>=La(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Wr(v,11)}else if((c.K||v.g==c)&&Ya(v),!X(y))for(j=v.Da.g.parse(y),y=0;y<j.length;y++){let je=j[y];if(v.T=je[0],je=je[1],v.G==2)if(je[0]=="c"){v.K=je[1],v.ia=je[2];const jt=je[3];jt!=null&&(v.la=jt,v.j.info("VER="+v.la));const Mt=je[4];Mt!=null&&(v.Aa=Mt,v.j.info("SVER="+v.Aa));const Zr=je[5];Zr!=null&&typeof Zr=="number"&&0<Zr&&(b=1.5*Zr,v.L=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const Yt=c.g;if(Yt){const br=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(br){var Y=b.h;Y.g||br.indexOf("spdy")==-1&&br.indexOf("quic")==-1&&br.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(Ua(Y,Y.h),Y.h=null))}if(b.D){const Il=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Il&&(b.ya=Il,We(b.I,b.D,Il))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),b=v;var oe=c;if(b.qa=bc(b,b.J?b.ia:null,b.W),oe.K){yn(b.h,oe);var Ue=oe,Ot=b.L;Ot&&(Ue.I=Ot),Ue.B&&(Mi(Ue),Ls(Ue)),b.g=oe}else Tc(b);0<v.i.length&&$a(v)}else je[0]!="stop"&&je[0]!="close"||Wr(v,7);else v.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?Wr(v,7):wl(v):je[0]!="noop"&&v.l&&v.l.ta(je),v.v=0)}}Di(4)}catch{}}var pc=class{constructor(c,y){this.g=c,this.map=y}};function Gr(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ka(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function La(c){return c.h?1:c.g?c.g.size:0}function ml(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Ua(c,y){c.g?c.g.add(y):c.h=y}function yn(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Gr.prototype.cancel=function(){if(this.i=gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function gl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const v of c.g.values())y=y.concat(v.D);return y}return $(c.i)}function dd(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var y=[],v=c.length,b=0;b<v;b++)y.push(c[b]);return y}y=[],v=0;for(b in c)y[v++]=c[b];return y}function ja(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var y=[];c=c.length;for(var v=0;v<c;v++)y.push(v);return y}y=[],v=0;for(const b in c)y[v++]=b;return y}}}function yl(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var v=ja(c),b=dd(c),j=b.length,Y=0;Y<j;Y++)y.call(void 0,b[Y],v&&v[Y],c)}var js=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pd(c,y){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var b=c[v].indexOf("="),j=null;if(0<=b){var Y=c[v].substring(0,b);j=c[v].substring(b+1)}else Y=c[v];y(Y,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function St(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof St){this.h=c.h,zs(this,c.j),this.o=c.o,this.g=c.g,Vi(this,c.s),this.l=c.l;var y=c.i,v=new Yr;v.i=y.i,y.g&&(v.g=new Map(y.g),v.h=y.h),$r(this,v),this.m=c.m}else c&&(y=String(c).match(js))?(this.h=!1,zs(this,y[1]||"",!0),this.o=qn(y[2]||""),this.g=qn(y[3]||"",!0),Vi(this,y[4]),this.l=qn(y[5]||"",!0),$r(this,y[6]||"",!0),this.m=qn(y[7]||"")):(this.h=!1,this.i=new Yr(null,this.h))}St.prototype.toString=function(){var c=[],y=this.j;y&&c.push(Bs(y,_l,!0),":");var v=this.g;return(v||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Bs(y,_l,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Bs(v,v.charAt(0)=="/"?md:vl,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Bs(v,za)),c.join("")};function In(c){return new St(c)}function zs(c,y,v){c.j=v?qn(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Vi(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function $r(c,y,v){y instanceof Yr?(c.i=y,gc(c.i,c.h)):(v||(y=Bs(y,gd)),c.i=new Yr(y,c.h))}function We(c,y,v){c.i.set(y,v)}function qs(c){return We(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function qn(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Bs(c,y,v){return typeof c=="string"?(c=encodeURI(c).replace(y,mc),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function mc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var _l=/[#\/\?@]/g,vl=/[#\?:]/g,md=/[#\?]/g,gd=/[#\?@]/g,za=/#/g;function Yr(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Bn(c){c.g||(c.g=new Map,c.h=0,c.i&&pd(c.i,function(y,v){c.add(decodeURIComponent(y.replace(/\+/g," ")),v)}))}r=Yr.prototype,r.add=function(c,y){Bn(this),this.i=null,c=vr(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(y),this.h+=1,this};function Qr(c,y){Bn(c),y=vr(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Kr(c,y){return Bn(c),y=vr(c,y),c.g.has(y)}r.forEach=function(c,y){Bn(this),this.g.forEach(function(v,b){v.forEach(function(j){c.call(y,j,b,this)},this)},this)},r.na=function(){Bn(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),v=[];for(let b=0;b<y.length;b++){const j=c[b];for(let Y=0;Y<j.length;Y++)v.push(y[b])}return v},r.V=function(c){Bn(this);let y=[];if(typeof c=="string")Kr(this,c)&&(y=y.concat(this.g.get(vr(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)y=y.concat(c[v])}return y},r.set=function(c,y){return Bn(this),this.i=null,c=vr(this,c),Kr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},r.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function El(c,y,v){Qr(c,y),0<v.length&&(c.i=null,c.g.set(vr(c,y),$(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var v=0;v<y.length;v++){var b=y[v];const Y=encodeURIComponent(String(b)),oe=this.V(b);for(b=0;b<oe.length;b++){var j=Y;oe[b]!==""&&(j+="="+encodeURIComponent(String(oe[b]))),c.push(j)}}return this.i=c.join("&")};function vr(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function gc(c,y){y&&!c.j&&(Bn(c),c.i=null,c.g.forEach(function(v,b){var j=b.toLowerCase();b!=j&&(Qr(this,b),El(this,j,v))},c)),c.j=y}function Hs(c,y){const v=new zn;if(p.Image){const b=new Image;b.onload=N(Hn,v,"TestLoadImage: loaded",!0,y,b),b.onerror=N(Hn,v,"TestLoadImage: error",!1,y,b),b.onabort=N(Hn,v,"TestLoadImage: abort",!1,y,b),b.ontimeout=N(Hn,v,"TestLoadImage: timeout",!1,y,b),p.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else y(!1)}function rr(c,y){const v=new zn,b=new AbortController,j=setTimeout(()=>{b.abort(),Hn(v,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:b.signal}).then(Y=>{clearTimeout(j),Y.ok?Hn(v,"TestPingServer: ok",!0,y):Hn(v,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(j),Hn(v,"TestPingServer: error",!1,y)})}function Hn(c,y,v,b,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),b(v)}catch{}}function Fs(){this.g=new Ps}function Er(c,y,v){const b=v||"";try{yl(c,function(j,Y){let oe=j;g(j)&&(oe=tr(j)),y.push(b+Y+"="+encodeURIComponent(oe))})}catch(j){throw y.push(b+"type="+encodeURIComponent("_badmap")),j}}function Pi(c){this.l=c.Ub||null,this.j=c.eb||!1}U(Pi,ll),Pi.prototype.g=function(){return new Xr(this.l,this.j)},Pi.prototype.i=function(c){return function(){return c}}({});function Xr(c,y){dt.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(Xr,dt),r=Xr.prototype,r.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,Sr(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||p).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Sr(this)),this.g&&(this.readyState=3,Sr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?Tr(this):Sr(this),this.readyState==3&&Tl(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Tr(this))},r.Qa=function(c){this.g&&(this.response=c,Tr(this))},r.ga=function(){this.g&&Tr(this)};function Tr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Sr(c)}r.setRequestHeader=function(c,y){this.u.append(c,y)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var v=y.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=y.next();return c.join(`\r
`)};function Sr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Sl(c){let y="";return de(c,function(v,b){y+=b,y+=":",y+=v,y+=`\r
`}),y}function Ut(c,y,v){e:{for(b in v){var b=!1;break e}b=!0}b||(v=Sl(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):We(c,y,v))}function Ge(c){dt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Ge,dt);var qa=/^https?$/i,Gs=["POST","PUT"];r=Ge.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,y,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gr.g(),this.v=this.o?ul(this.o):ul(gr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(Y){yc(this,Y);return}if(c=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var j in b)v.set(j,b[j]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const Y of b.keys())v.set(Y,b.get(Y));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(Y=>Y.toLowerCase()=="content-type"),j=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Gs,y,void 0))||b||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,oe]of v)this.g.setRequestHeader(Y,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$s(this),this.u=!0,this.g.send(c),this.u=!1}catch(Y){yc(this,Y)}};function yc(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,Ba(c),wr(c)}function Ba(c){c.A||(c.A=!0,Qe(c,"complete"),Qe(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Qe(this,"complete"),Qe(this,"abort"),wr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wr(this,!0)),Ge.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ha(this):this.bb())},r.bb=function(){Ha(this)};function Ha(c){if(c.h&&typeof h<"u"&&(!c.v[1]||Fn(c)!=4||c.Z()!=2)){if(c.u&&Fn(c)==4)on(c.Ea,0,c);else if(Qe(c,"readystatechange"),Fn(c)==4){c.h=!1;try{const oe=c.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var v;if(!(v=y)){var b;if(b=oe===0){var j=String(c.D).match(js)[1]||null;!j&&p.self&&p.self.location&&(j=p.self.location.protocol.slice(0,-1)),b=!qa.test(j?j.toLowerCase():"")}v=b}if(v)Qe(c,"complete"),Qe(c,"success");else{c.m=6;try{var Y=2<Fn(c)?c.g.statusText:""}catch{Y=""}c.l=Y+" ["+c.Z()+"]",Ba(c)}}finally{wr(c)}}}}function wr(c,y){if(c.g){$s(c);const v=c.g,b=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Qe(c,"ready");try{v.onreadystatechange=b}catch{}}}function $s(c){c.I&&(p.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Fn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),Ma(y)}};function _c(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function yd(c){const y={};c=(c.g&&2<=Fn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(X(c[b]))continue;var v=P(c[b]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Y=y[j]||[];y[j]=Y,Y.push(v)}x(y,function(b){return b.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ys(c,y,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||y}function Fa(c){this.Aa=0,this.i=[],this.j=new zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ys("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ys("baseRetryDelayMs",5e3,c),this.cb=Ys("retryDelaySeedMs",1e4,c),this.Wa=Ys("forwardChannelMaxRetries",2,c),this.wa=Ys("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Gr(c&&c.concurrentRequestLimit),this.Da=new Fs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Fa.prototype,r.la=8,r.G=1,r.connect=function(c,y,v,b){ot(0),this.W=c,this.H=y||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.I=bc(this,null,this.W),$a(this)};function wl(c){if(vc(c),c.G==3){var y=c.U++,v=In(c.I);if(We(v,"SID",c.K),We(v,"RID",y),We(v,"TYPE","terminate"),Qs(c,v),y=new gn(c,c.j,y),y.L=2,y.v=qs(In(v)),v=!1,p.navigator&&p.navigator.sendBeacon)try{v=p.navigator.sendBeacon(y.v.toString(),"")}catch{}!v&&p.Image&&(new Image().src=y.v,v=!0),v||(y.g=Rc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),Ls(y)}Ac(c)}function Ga(c){c.g&&(Ks(c),c.g.cancel(),c.g=null)}function vc(c){Ga(c),c.u&&(p.clearTimeout(c.u),c.u=null),Ya(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function $a(c){if(!ka(c.h)&&!c.s){c.s=!0;var y=c.Ga;le||O(),me||(le(),me=!0),Ce.add(y,c),c.B=0}}function _d(c,y){return La(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Tt(A(c.Ga,c,y),Rl(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const j=new gn(this,this.j,c);let Y=this.o;if(this.S&&(Y?(Y=R(Y),V(Y,this.S)):Y=this.S),this.m!==null||this.O||(j.H=Y,Y=null),this.P)e:{for(var y=0,v=0;v<this.i.length;v++){t:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(y+=b,4096<y){y=v;break e}if(y===4096||v===this.i.length-1){y=v+1;break e}}y=1e3}else y=1e3;y=Ec(this,j,y),v=In(this.I),We(v,"RID",c),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),Qs(this,v),Y&&(this.O?y="headers="+encodeURIComponent(String(Sl(Y)))+"&"+y:this.m&&Ut(v,this.m,Y)),Ua(this.h,j),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",y),We(v,"SID","null"),j.T=!0,nr(j,v,null)):nr(j,v,y),this.G=2}}else this.G==3&&(c?Al(this,c):this.i.length==0||ka(this.h)||Al(this))};function Al(c,y){var v;y?v=y.l:v=c.U++;const b=In(c.I);We(b,"SID",c.K),We(b,"RID",v),We(b,"AID",c.T),Qs(c,b),c.m&&c.o&&Ut(b,c.m,c.o),v=new gn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),y&&(c.i=y.D.concat(c.i)),y=Ec(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ua(c.h,v),nr(v,b,y)}function Qs(c,y){c.H&&de(c.H,function(v,b){We(y,b,v)}),c.l&&yl({},function(v,b){We(y,b,v)})}function Ec(c,y,v){v=Math.min(c.i.length,v);var b=c.l?A(c.l.Na,c.l,c):null;e:{var j=c.i;let Y=-1;for(;;){const oe=["count="+v];Y==-1?0<v?(Y=j[0].g,oe.push("ofs="+Y)):Y=0:oe.push("ofs="+Y);let Ue=!0;for(let Ot=0;Ot<v;Ot++){let je=j[Ot].g;const jt=j[Ot].map;if(je-=Y,0>je)Y=Math.max(0,j[Ot].g-100),Ue=!1;else try{Er(jt,oe,"req"+je+"_")}catch{b&&b(jt)}}if(Ue){b=oe.join("&");break e}}}return c=c.i.splice(0,v),y.D=c,b}function Tc(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;le||O(),me||(le(),me=!0),Ce.add(y,c),c.v=0}}function bl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Tt(A(c.Fa,c),Rl(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Sc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Tt(A(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Ga(this),Sc(this))};function Ks(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function Sc(c){c.g=new gn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=In(c.qa);We(y,"RID","rpc"),We(y,"SID",c.K),We(y,"AID",c.T),We(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&We(y,"TO",c.ja),We(y,"TYPE","xmlhttp"),Qs(c,y),c.m&&c.o&&Ut(y,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=qs(In(y)),v.m=null,v.P=!0,Fr(v,c)}r.Za=function(){this.C!=null&&(this.C=null,Ga(this),bl(this),ot(19))};function Ya(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function wc(c,y){var v=null;if(c.g==y){Ya(c),Ks(c),c.g=null;var b=2}else if(ml(c.h,y))v=y.D,yn(c.h,y),b=1;else return;if(c.G!=0){if(y.o)if(b==1){v=y.m?y.m.length:0,y=Date.now()-y.F;var j=c.B;b=xi(),Qe(b,new Nt(b,v)),$a(c)}else Tc(c);else if(j=y.s,j==3||j==0&&0<y.X||!(b==1&&_d(c,y)||b==2&&bl(c)))switch(v&&0<v.length&&(y=c.h,y.i=y.i.concat(v)),j){case 1:Wr(c,5);break;case 4:Wr(c,10);break;case 3:Wr(c,6);break;default:Wr(c,2)}}}function Rl(c,y){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*y}function Wr(c,y){if(c.j.info("Error code "+y),y==2){var v=A(c.fb,c),b=c.Xa;const j=!b;b=new St(b||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||zs(b,"https"),qs(b),j?Hs(b.toString(),v):rr(b.toString(),v)}else ot(2);c.G=0,c.l&&c.l.sa(y),Ac(c),vc(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Ac(c){if(c.G=0,c.ka=[],c.l){const y=gl(c.h);(y.length!=0||c.i.length!=0)&&(H(c.ka,y),H(c.ka,c.i),c.h.i.length=0,$(c.i),c.i.length=0),c.l.ra()}}function bc(c,y,v){var b=v instanceof St?In(v):new St(v);if(b.g!="")y&&(b.g=y+"."+b.g),Vi(b,b.s);else{var j=p.location;b=j.protocol,y=y?y+"."+j.hostname:j.hostname,j=+j.port;var Y=new St(null);b&&zs(Y,b),y&&(Y.g=y),j&&Vi(Y,j),v&&(Y.l=v),b=Y}return v=c.D,y=c.ya,v&&y&&We(b,v,y),We(b,"VER",c.la),Qs(c,b),b}function Rc(c,y,v){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new Ge(new Pi({eb:v})):new Ge(c.pa),y.Ha(c.J),y}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ic(){}r=Ic.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Qa(){}Qa.prototype.g=function(c,y){return new _n(c,y)};function _n(c,y){dt.call(this),this.g=new Fa(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!X(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!X(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Ar(this)}U(_n,dt),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){wl(this.g)},_n.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=tr(c),c=v);y.i.push(new pc(y.Ya++,c)),y.G==3&&$a(y)},_n.prototype.N=function(){this.g.l=null,delete this.j,wl(this.g),delete this.g,_n.aa.N.call(this)};function Cc(c){Br.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const v in y){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}U(Cc,Br);function xc(){hl.call(this),this.status=1}U(xc,hl);function Ar(c){this.g=c}U(Ar,Ic),Ar.prototype.ua=function(){Qe(this.g,"a")},Ar.prototype.ta=function(c){Qe(this.g,new Cc(c))},Ar.prototype.sa=function(c){Qe(this.g,new xc)},Ar.prototype.ra=function(){Qe(this.g,"b")},Qa.prototype.createWebChannel=Qa.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,IS=function(){return new Qa},RS=function(){return xi()},bS=mr,eg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,Wh=Oi,Hr.COMPLETE="complete",AS=Hr,cl.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",dt.prototype.listen=dt.prototype.K,vu=cl,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,wS=Ge}).apply(typeof Vh<"u"?Vh:typeof self<"u"?self:typeof window<"u"?window:{});const B0="@firebase/firestore",H0="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let el="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Ng("@firebase/firestore");function bo(){return wa.logLevel}function fe(r,...e){if(wa.logLevel<=Pe.DEBUG){const t=e.map(Bg);wa.debug(`Firestore (${el}): ${r}`,...t)}}function Ai(r,...e){if(wa.logLevel<=Pe.ERROR){const t=e.map(Bg);wa.error(`Firestore (${el}): ${r}`,...t)}}function qo(r,...e){if(wa.logLevel<=Pe.WARN){const t=e.map(Bg);wa.warn(`Firestore (${el}): ${r}`,...t)}}function Bg(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function we(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,CS(r,s,t)}function CS(r,e,t){let s=`FIRESTORE (${el}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ai(s),new Error(s)}function Ye(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||CS(e,o,s)}function Re(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class c2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(dn.UNAUTHENTICATED))}shutdown(){}}class h2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class f2{constructor(e){this.t=e,this.currentUser=dn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ye(this.o===void 0,42304);let s=this.i;const o=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let u=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new vi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=u;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},p=m=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new vi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ye(typeof s.accessToken=="string",31837,{l:s}),new xS(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string",2055,{h:e}),new dn(e)}}class d2{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=dn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class p2{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new d2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(dn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class m2{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ye(this.o===void 0,3512);const s=u=>{u.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,fe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new F0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new F0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=g2(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function ke(r,e){return r<e?-1:r>e?1:0}function tg(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return Cm(o)===Cm(u)?ke(o,u):Cm(o)?1:-1}return ke(r.length,e.length)}const y2=55296,_2=57343;function Cm(r){const e=r.charCodeAt(0);return e>=y2&&e<=_2}function Bo(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="__name__";class Nr{constructor(e,t,s){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&we(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Nr?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Nr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return ke(e.length,t.length)}static compareSegments(e,t){const s=Nr.isNumericId(e),o=Nr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Nr.extractNumericId(e).compare(Nr.extractNumericId(t)):tg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ms.fromString(e.substring(4,e.length-2))}}class it extends Nr{construct(e,t,s){return new it(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new it(t)}static emptyPath(){return new it([])}}const v2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nn extends Nr{construct(e,t,s){return new nn(e,t,s)}static isValidIdentifier(e){return v2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===G0}static keyField(){return new nn([G0])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ce(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ce(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ce(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new ce(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nn(t)}static emptyPath(){return new nn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function DS(r,e,t){if(!t)throw new ce(Z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function E2(r,e,t,s){if(e===!0&&s===!0)throw new ce(Z.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function $0(r){if(!_e.isDocumentKey(r))throw new ce(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Y0(r){if(_e.isDocumentKey(r))throw new ce(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function NS(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function qf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":we(12329,{type:typeof r})}function Ln(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ce(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qf(r);throw new ce(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function Ct(r,e){const t={typeString:r};return e&&(t.value=e),t}function ec(r,e){if(!NS(r))throw new ce(Z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ce(Z.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=-62135596800,K0=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*K0);return new nt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Q0)throw new ce(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/K0}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ec(e,nt._jsonSchema))return new nt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Q0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:Ct("string",nt._jsonSchemaVersion),seconds:Ct("number"),nanoseconds:Ct("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ku=-1;function T2(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=be.fromTimestamp(s===1e9?new nt(t+1,0):new nt(t,s));return new ys(o,_e.empty(),e)}function S2(r){return new ys(r.readTime,r.key,ku)}class ys{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ys(be.min(),_e.empty(),ku)}static max(){return new ys(be.max(),_e.empty(),ku)}}function w2(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(r.documentKey,e.documentKey),t!==0?t:ke(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class b2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(r){if(r.code!==Z.FAILED_PRECONDITION||r.message!==A2)throw r;fe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new te((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof te?t:te.resolve(t)}catch(t){return te.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):te.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):te.reject(t)}static resolve(e){return new te((t,s)=>{t(e)})}static reject(e){return new te((t,s)=>{s(e)})}static waitFor(e){return new te((t,s)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&t()},m=>s(m))}),h=!0,u===o&&t()})}static or(e){let t=te.resolve(!1);for(const s of e)t=t.next(o=>o?te.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new te((s,o)=>{const u=e.length,h=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;t(e[g]).next(_=>{h[g]=_,++p,p===u&&s(h)},_=>o(_))}})}static doWhile(e,t){return new te((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function R2(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function nl(r){return r.name==="IndexedDbTransactionError"}/**
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
 */const Fg=-1;function Hf(r){return r==null}function yf(r){return r===0&&1/r==-1/0}function I2(r){return typeof r=="number"&&Number.isInteger(r)&&!yf(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="";function C2(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=X0(e)),e=x2(r.get(t),e);return X0(e)}function x2(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case OS:t+="";break;default:t+=u}}return t}function X0(r){return r+OS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Rs(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function MS(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.comparator=e,this.root=t||tn.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ph(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ph(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ph(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ph(this.root,e,this.comparator,!0)}}class Ph{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tn{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??tn.RED,this.left=o??tn.EMPTY,this.right=u??tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new tn(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return tn.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new tn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Z0(this.data.getIterator())}getIteratorFrom(e){return new Z0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new kt(this.comparator);return t.data=e,t}}class Z0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.fields=e,e.sort(nn.comparator)}static empty(){return new kn([])}unionWith(e){let t=new kt(nn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new kn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class VS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new VS("Invalid base64 string: "+u):u}}(e);return new sn(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new sn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sn.EMPTY_BYTE_STRING=new sn("");const D2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _s(r){if(Ye(!!r,39018),typeof r=="string"){let e=0;const t=D2.exec(r);if(Ye(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Et(r.seconds),nanos:Et(r.nanos)}}function Et(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function vs(r){return typeof r=="string"?sn.fromBase64String(r):sn.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="server_timestamp",kS="__type__",LS="__previous_value__",US="__local_write_time__";function Gg(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[kS])==null?void 0:s.stringValue)===PS}function Ff(r){const e=r.mapValue.fields[LS];return Gg(e)?Ff(e):e}function Lu(r){const e=_s(r.mapValue.fields[US].timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,t,s,o,u,h,p,m,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=_}}const _f="(default)";class Uu{constructor(e,t){this.projectId=e,this.database=t||_f}static empty(){return new Uu("","")}get isDefaultDatabase(){return this.database===_f}isEqual(e){return e instanceof Uu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="__type__",O2="__max__",kh={mapValue:{}},zS="__vector__",vf="value";function Es(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Gg(r)?4:V2(r)?9007199254740991:M2(r)?10:11:we(28295,{value:r})}function jr(r,e){if(r===e)return!0;const t=Es(r);if(t!==Es(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Lu(r).isEqual(Lu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=_s(o.timestampValue),p=_s(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return vs(o.bytesValue).isEqual(vs(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return Et(o.geoPointValue.latitude)===Et(u.geoPointValue.latitude)&&Et(o.geoPointValue.longitude)===Et(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Et(o.integerValue)===Et(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=Et(o.doubleValue),p=Et(u.doubleValue);return h===p?yf(h)===yf(p):isNaN(h)&&isNaN(p)}return!1}(r,e);case 9:return Bo(r.arrayValue.values||[],e.arrayValue.values||[],jr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(W0(h)!==W0(p))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(p[m]===void 0||!jr(h[m],p[m])))return!1;return!0}(r,e);default:return we(52216,{left:r})}}function ju(r,e){return(r.values||[]).find(t=>jr(t,e))!==void 0}function Ho(r,e){if(r===e)return 0;const t=Es(r),s=Es(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(r.booleanValue,e.booleanValue);case 2:return function(u,h){const p=Et(u.integerValue||u.doubleValue),m=Et(h.integerValue||h.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(r,e);case 3:return J0(r.timestampValue,e.timestampValue);case 4:return J0(Lu(r),Lu(e));case 5:return tg(r.stringValue,e.stringValue);case 6:return function(u,h){const p=vs(u),m=vs(h);return p.compareTo(m)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),m=h.split("/");for(let g=0;g<p.length&&g<m.length;g++){const _=ke(p[g],m[g]);if(_!==0)return _}return ke(p.length,m.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const p=ke(Et(u.latitude),Et(h.latitude));return p!==0?p:ke(Et(u.longitude),Et(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return eT(r.arrayValue,e.arrayValue);case 10:return function(u,h){var A,N,U,$;const p=u.fields||{},m=h.fields||{},g=(A=p[vf])==null?void 0:A.arrayValue,_=(N=m[vf])==null?void 0:N.arrayValue,S=ke(((U=g==null?void 0:g.values)==null?void 0:U.length)||0,(($=_==null?void 0:_.values)==null?void 0:$.length)||0);return S!==0?S:eT(g,_)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===kh.mapValue&&h===kh.mapValue)return 0;if(u===kh.mapValue)return 1;if(h===kh.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=h.fields||{},_=Object.keys(g);m.sort(),_.sort();for(let S=0;S<m.length&&S<_.length;++S){const A=tg(m[S],_[S]);if(A!==0)return A;const N=Ho(p[m[S]],g[_[S]]);if(N!==0)return N}return ke(m.length,_.length)}(r.mapValue,e.mapValue);default:throw we(23264,{he:t})}}function J0(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ke(r,e);const t=_s(r),s=_s(e),o=ke(t.seconds,s.seconds);return o!==0?o:ke(t.nanos,s.nanos)}function eT(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Ho(t[o],s[o]);if(u)return u}return ke(t.length,s.length)}function Fo(r){return ng(r)}function ng(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=_s(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return vs(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return _e.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=ng(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${ng(t.fields[h])}`;return o+"}"}(r.mapValue):we(61005,{value:r})}function Zh(r){switch(Es(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ff(r);return e?16+Zh(e):16;case 5:return 2*r.stringValue.length;case 6:return vs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Zh(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Rs(s.fields,(u,h)=>{o+=u.length+Zh(h)}),o}(r.mapValue);default:throw we(13486,{value:r})}}function tT(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function rg(r){return!!r&&"integerValue"in r}function $g(r){return!!r&&"arrayValue"in r}function nT(r){return!!r&&"nullValue"in r}function rT(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Jh(r){return!!r&&"mapValue"in r}function M2(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[jS])==null?void 0:s.stringValue)===zS}function Ru(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Rs(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ru(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ru(r.arrayValue.values[t]);return e}return{...r}}function V2(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===O2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.value=e}static empty(){return new bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Jh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ru(t)}setAll(e){let t=nn.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=Ru(h):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Jh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return jr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Jh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Rs(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new bn(Ru(this.value))}}function qS(r){const e=[];return Rs(r.fields,(t,s)=>{const o=new nn([t]);if(Jh(s)){const u=qS(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new kn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,s,o,u,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new pn(e,0,be.min(),be.min(),be.min(),bn.empty(),0)}static newFoundDocument(e,t,s,o){return new pn(e,1,t,be.min(),s,o,0)}static newNoDocument(e,t){return new pn(e,2,t,be.min(),be.min(),bn.empty(),0)}static newUnknownDocument(e,t){return new pn(e,3,t,be.min(),be.min(),bn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ef{constructor(e,t){this.position=e,this.inclusive=t}}function iT(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=_e.comparator(_e.fromName(h.referenceValue),t.key):s=Ho(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function sT(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!jr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class zu{constructor(e,t="asc"){this.field=e,this.dir=t}}function P2(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class BS{}class It extends BS{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new L2(e,t,s):t==="array-contains"?new z2(e,s):t==="in"?new q2(e,s):t==="not-in"?new B2(e,s):t==="array-contains-any"?new H2(e,s):new It(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new U2(e,s):new j2(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ho(t,this.value)):t!==null&&Es(this.value)===Es(t)&&this.matchesComparison(Ho(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends BS{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new dr(e,t)}matches(e){return HS(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function HS(r){return r.op==="and"}function FS(r){return k2(r)&&HS(r)}function k2(r){for(const e of r.filters)if(e instanceof dr)return!1;return!0}function ig(r){if(r instanceof It)return r.field.canonicalString()+r.op.toString()+Fo(r.value);if(FS(r))return r.filters.map(e=>ig(e)).join(",");{const e=r.filters.map(t=>ig(t)).join(",");return`${r.op}(${e})`}}function GS(r,e){return r instanceof It?function(s,o){return o instanceof It&&s.op===o.op&&s.field.isEqual(o.field)&&jr(s.value,o.value)}(r,e):r instanceof dr?function(s,o){return o instanceof dr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&GS(h,o.filters[p]),!0):!1}(r,e):void we(19439)}function $S(r){return r instanceof It?function(t){return`${t.field.canonicalString()} ${t.op} ${Fo(t.value)}`}(r):r instanceof dr?function(t){return t.op.toString()+" {"+t.getFilters().map($S).join(" ,")+"}"}(r):"Filter"}class L2 extends It{constructor(e,t,s){super(e,t,s),this.key=_e.fromName(s.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class U2 extends It{constructor(e,t){super(e,"in",t),this.keys=YS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class j2 extends It{constructor(e,t){super(e,"not-in",t),this.keys=YS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function YS(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>_e.fromName(s.referenceValue))}class z2 extends It{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $g(t)&&ju(t.arrayValue,this.value)}}class q2 extends It{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ju(this.value.arrayValue,t)}}class B2 extends It{constructor(e,t){super(e,"not-in",t)}matches(e){if(ju(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ju(this.value.arrayValue,t)}}class H2 extends It{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$g(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ju(this.value.arrayValue,s))}}/**
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
 */class F2{constructor(e,t=null,s=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.Te=null}}function aT(r,e=null,t=[],s=[],o=null,u=null,h=null){return new F2(r,e,t,s,o,u,h)}function Yg(r){const e=Re(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>ig(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Hf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Fo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Fo(s)).join(",")),e.Te=t}return e.Te}function Qg(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!P2(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!GS(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!sT(r.startAt,e.startAt)&&sT(r.endAt,e.endAt)}function sg(r){return _e.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t=null,s=[],o=[],u=null,h="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function G2(r,e,t,s,o,u,h,p){return new rl(r,e,t,s,o,u,h,p)}function Gf(r){return new rl(r)}function oT(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function QS(r){return r.collectionGroup!==null}function Iu(r){const e=Re(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new kt(nn.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new zu(u,s))}),t.has(nn.keyField().canonicalString())||e.Ie.push(new zu(nn.keyField(),s))}return e.Ie}function Pr(r){const e=Re(r);return e.Ee||(e.Ee=$2(e,Iu(r))),e.Ee}function $2(r,e){if(r.limitType==="F")return aT(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new zu(o.field,u)});const t=r.endAt?new Ef(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Ef(r.startAt.position,r.startAt.inclusive):null;return aT(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function ag(r,e){const t=r.filters.concat([e]);return new rl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function og(r,e,t){return new rl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function $f(r,e){return Qg(Pr(r),Pr(e))&&r.limitType===e.limitType}function KS(r){return`${Yg(Pr(r))}|lt:${r.limitType}`}function Ro(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>$S(o)).join(", ")}]`),Hf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Fo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Fo(o)).join(",")),`Target(${s})`}(Pr(r))}; limitType=${r.limitType})`}function Yf(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):_e.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Iu(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,p,m){const g=iT(h,p,m);return h.inclusive?g<=0:g<0}(s.startAt,Iu(s),o)||s.endAt&&!function(h,p,m){const g=iT(h,p,m);return h.inclusive?g>=0:g>0}(s.endAt,Iu(s),o))}(r,e)}function Y2(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function XS(r){return(e,t)=>{let s=!1;for(const o of Iu(r)){const u=Q2(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function Q2(r,e,t){const s=r.field.isKeyField()?_e.comparator(e.key,t.key):function(u,h,p){const m=h.data.field(u),g=p.data.field(u);return m!==null&&g!==null?Ho(m,g):we(42886)}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return we(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return MS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=new ft(_e.comparator);function bi(){return K2}const WS=new ft(_e.comparator);function Eu(...r){let e=WS;for(const t of r)e=e.insert(t.key,t);return e}function ZS(r){let e=WS;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function da(){return Cu()}function JS(){return Cu()}function Cu(){return new xa(r=>r.toString(),(r,e)=>r.isEqual(e))}const X2=new ft(_e.comparator),W2=new kt(_e.comparator);function Le(...r){let e=W2;for(const t of r)e=e.add(t);return e}const Z2=new kt(ke);function J2(){return Z2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yf(e)?"-0":e}}function ew(r){return{integerValue:""+r}}function eO(r,e){return I2(e)?ew(e):Kg(r,e)}/**
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
 */class Qf{constructor(){this._=void 0}}function tO(r,e,t){return r instanceof qu?function(o,u){const h={fields:{[kS]:{stringValue:PS},[US]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Gg(u)&&(u=Ff(u)),u&&(h.fields[LS]=u),{mapValue:h}}(t,e):r instanceof Bu?nw(r,e):r instanceof Hu?rw(r,e):function(o,u){const h=tw(o,u),p=lT(h)+lT(o.Ae);return rg(h)&&rg(o.Ae)?ew(p):Kg(o.serializer,p)}(r,e)}function nO(r,e,t){return r instanceof Bu?nw(r,e):r instanceof Hu?rw(r,e):t}function tw(r,e){return r instanceof Tf?function(s){return rg(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class qu extends Qf{}class Bu extends Qf{constructor(e){super(),this.elements=e}}function nw(r,e){const t=iw(e);for(const s of r.elements)t.some(o=>jr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Hu extends Qf{constructor(e){super(),this.elements=e}}function rw(r,e){let t=iw(e);for(const s of r.elements)t=t.filter(o=>!jr(o,s));return{arrayValue:{values:t}}}class Tf extends Qf{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function lT(r){return Et(r.integerValue||r.doubleValue)}function iw(r){return $g(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,t){this.field=e,this.transform=t}}function iO(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Bu&&o instanceof Bu||s instanceof Hu&&o instanceof Hu?Bo(s.elements,o.elements,jr):s instanceof Tf&&o instanceof Tf?jr(s.Ae,o.Ae):s instanceof qu&&o instanceof qu}(r.transform,e.transform)}class sO{constructor(e,t){this.version=e,this.transformResults=t}}class cr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new cr}static exists(e){return new cr(void 0,e)}static updateTime(e){return new cr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ef(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Kf{}function sw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new ow(r.key,cr.none()):new tc(r.key,r.data,cr.none());{const t=r.data,s=bn.empty();let o=new kt(nn.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Is(r.key,s,new kn(o.toArray()),cr.none())}}function aO(r,e,t){r instanceof tc?function(o,u,h){const p=o.value.clone(),m=cT(o.fieldTransforms,u,h.transformResults);p.setAll(m),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(r,e,t):r instanceof Is?function(o,u,h){if(!ef(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=cT(o.fieldTransforms,u,h.transformResults),m=u.data;m.setAll(aw(o)),m.setAll(p),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function xu(r,e,t,s){return r instanceof tc?function(u,h,p,m){if(!ef(u.precondition,h))return p;const g=u.value.clone(),_=hT(u.fieldTransforms,m,h);return g.setAll(_),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(r,e,t,s):r instanceof Is?function(u,h,p,m){if(!ef(u.precondition,h))return p;const g=hT(u.fieldTransforms,m,h),_=h.data;return _.setAll(aw(u)),_.setAll(g),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(r,e,t,s):function(u,h,p){return ef(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(r,e,t)}function oO(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=tw(s.transform,o||null);u!=null&&(t===null&&(t=bn.empty()),t.set(s.field,u))}return t||null}function uT(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Bo(s,o,(u,h)=>iO(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class tc extends Kf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Is extends Kf{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function aw(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function cT(r,e,t){const s=new Map;Ye(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,p=e.data.field(u.field);s.set(u.field,nO(h,p,t[o]))}return s}function hT(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,tO(u,h,e))}return s}class ow extends Kf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lO extends Kf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&aO(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=xu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=xu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=JS();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const m=sw(h,p);m!==null&&s.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(be.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&Bo(this.mutations,e.mutations,(t,s)=>uT(t,s))&&Bo(this.baseMutations,e.baseMutations,(t,s)=>uT(t,s))}}class Xg{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ye(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return X2}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Xg(e,t,s,o)}}/**
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
 */class cO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class hO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt,qe;function fO(r){switch(r){case Z.OK:return we(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return we(15467,{code:r})}}function lw(r){if(r===void 0)return Ai("GRPC error has no .code"),Z.UNKNOWN;switch(r){case bt.OK:return Z.OK;case bt.CANCELLED:return Z.CANCELLED;case bt.UNKNOWN:return Z.UNKNOWN;case bt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case bt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case bt.INTERNAL:return Z.INTERNAL;case bt.UNAVAILABLE:return Z.UNAVAILABLE;case bt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case bt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case bt.NOT_FOUND:return Z.NOT_FOUND;case bt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case bt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case bt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case bt.ABORTED:return Z.ABORTED;case bt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case bt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case bt.DATA_LOSS:return Z.DATA_LOSS;default:return we(39323,{code:r})}}(qe=bt||(bt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function dO(){return new TextEncoder}/**
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
 */const pO=new ms([4294967295,4294967295],0);function fT(r){const e=dO().encode(r),t=new SS;return t.update(e),new Uint8Array(t.digest())}function dT(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ms([t,s],0),new ms([o,u],0)]}class Wg{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Tu(`Invalid padding: ${t}`);if(s<0)throw new Tu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Tu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Tu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ms.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(ms.fromNumber(s)));return o.compare(pO)===1&&(o=new ms([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=fT(e),[s,o]=dT(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Wg(u,o,t);return s.forEach(p=>h.insert(p)),h}insert(e){if(this.ge===0)return;const t=fT(e),[s,o]=dT(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Tu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,nc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Xf(be.min(),o,new ft(ke),bi(),Le())}}class nc{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new nc(s,t,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class uw{constructor(e,t){this.targetId=e,this.Ce=t}}class cw{constructor(e,t,s=sn.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class pT{constructor(){this.ve=0,this.Fe=mT(),this.Me=sn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),t=Le(),s=Le();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:we(38017,{changeType:u})}}),new nc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=mT()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ye(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class mO{constructor(e){this.Ge=e,this.ze=new Map,this.je=bi(),this.Je=Lh(),this.He=Lh(),this.Ye=new ft(ke)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:we(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,o)=>{this.rt(o)&&t(o)})}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(sg(u))if(s===0){const h=new _e(u.path);this.et(t,h,pn.newNoDocument(h,be.min()))}else Ye(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const p=this.ut(e),m=p?this.ct(p,e,h):1;if(m!==0){this.it(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,p;try{h=vs(s).toUint8Array()}catch(m){if(m instanceof VS)return qo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new Wg(h,o,u)}catch(m){return qo(m instanceof Tu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Ge.ht(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.et(t,u,null),o++)}),o}Tt(e){const t=new Map;this.ze.forEach((u,h)=>{const p=this.ot(h);if(p){if(u.current&&sg(p.target)){const m=new _e(p.target.path);this.It(m).has(h)||this.Et(h,m)||this.et(h,m,pn.newNoDocument(m,e))}u.Be&&(t.set(h,u.ke()),u.qe())}});let s=Le();this.He.forEach((u,h)=>{let p=!0;h.forEachWhile(m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.je.forEach((u,h)=>h.setReadTime(e));const o=new Xf(e,t,this.Ye,this.je,s);return this.je=bi(),this.Je=Lh(),this.He=Lh(),this.Ye=new ft(ke),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new pT,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new kt(ke),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new kt(ke),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new pT),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Lh(){return new ft(_e.comparator)}function mT(){return new ft(_e.comparator)}const gO={asc:"ASCENDING",desc:"DESCENDING"},yO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_O={and:"AND",or:"OR"};class vO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lg(r,e){return r.useProto3Json||Hf(e)?e:{value:e}}function Sf(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function EO(r,e){return Sf(r,e.toTimestamp())}function kr(r){return Ye(!!r,49232),be.fromTimestamp(function(t){const s=_s(t);return new nt(s.seconds,s.nanos)}(r))}function Zg(r,e){return ug(r,e).canonicalString()}function ug(r,e){const t=function(o){return new it(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function fw(r){const e=it.fromString(r);return Ye(yw(e),10190,{key:e.toString()}),e}function cg(r,e){return Zg(r.databaseId,e.path)}function xm(r,e){const t=fw(e);if(t.get(1)!==r.databaseId.projectId)throw new ce(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ce(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new _e(pw(t))}function dw(r,e){return Zg(r.databaseId,e)}function TO(r){const e=fw(r);return e.length===4?it.emptyPath():pw(e)}function hg(r){return new it(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function pw(r){return Ye(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function gT(r,e,t){return{name:cg(r,e),fields:t.value.mapValue.fields}}function SO(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:we(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,_){return g.useProto3Json?(Ye(_===void 0||typeof _=="string",58123),sn.fromBase64String(_||"")):(Ye(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),sn.fromUint8Array(_||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&function(g){const _=g.code===void 0?Z.UNKNOWN:lw(g.code);return new ce(_,g.message||"")}(h);t=new cw(s,o,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=xm(r,s.document.name),u=kr(s.document.updateTime),h=s.document.createTime?kr(s.document.createTime):be.min(),p=new bn({mapValue:{fields:s.document.fields}}),m=pn.newFoundDocument(o,u,h,p),g=s.targetIds||[],_=s.removedTargetIds||[];t=new tf(g,_,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=xm(r,s.document),u=s.readTime?kr(s.readTime):be.min(),h=pn.newNoDocument(o,u),p=s.removedTargetIds||[];t=new tf([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=xm(r,s.document),u=s.removedTargetIds||[];t=new tf([],u,o,null)}else{if(!("filter"in e))return we(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new hO(o,u),p=s.targetId;t=new uw(p,h)}}return t}function wO(r,e){let t;if(e instanceof tc)t={update:gT(r,e.key,e.value)};else if(e instanceof ow)t={delete:cg(r,e.key)};else if(e instanceof Is)t={update:gT(r,e.key,e.data),updateMask:OO(e.fieldMask)};else{if(!(e instanceof lO))return we(16599,{Vt:e.type});t={verify:cg(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof qu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Bu)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Hu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Tf)return{fieldPath:h.field.canonicalString(),increment:p.Ae};throw we(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:EO(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:we(27497)}(r,e.precondition)),t}function AO(r,e){return r&&r.length>0?(Ye(e!==void 0,14353),r.map(t=>function(o,u){let h=o.updateTime?kr(o.updateTime):kr(u);return h.isEqual(be.min())&&(h=kr(u)),new sO(h,o.transformResults||[])}(t,e))):[]}function bO(r,e){return{documents:[dw(r,e.path)]}}function RO(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=dw(r,o);const u=function(g){if(g.length!==0)return gw(dr.create(g,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(g){if(g.length!==0)return g.map(_=>function(A){return{field:Io(A.field),direction:xO(A.dir)}}(_))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=lg(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:t,parent:o}}function IO(r){let e=TO(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ye(s===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let u=[];t.where&&(u=function(S){const A=mw(S);return A instanceof dr&&FS(A)?A.getFilters():[A]}(t.where));let h=[];t.orderBy&&(h=function(S){return S.map(A=>function(U){return new zu(Co(U.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(A))}(t.orderBy));let p=null;t.limit&&(p=function(S){let A;return A=typeof S=="object"?S.value:S,Hf(A)?null:A}(t.limit));let m=null;t.startAt&&(m=function(S){const A=!!S.before,N=S.values||[];return new Ef(N,A)}(t.startAt));let g=null;return t.endAt&&(g=function(S){const A=!S.before,N=S.values||[];return new Ef(N,A)}(t.endAt)),G2(e,o,h,u,p,"F",m,g)}function CO(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mw(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Co(t.unaryFilter.field);return It.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Co(t.unaryFilter.field);return It.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Co(t.unaryFilter.field);return It.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Co(t.unaryFilter.field);return It.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}}(r):r.fieldFilter!==void 0?function(t){return It.create(Co(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return dr.create(t.compositeFilter.filters.map(s=>mw(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}}(t.compositeFilter.op))}(r):we(30097,{filter:r})}function xO(r){return gO[r]}function DO(r){return yO[r]}function NO(r){return _O[r]}function Io(r){return{fieldPath:r.canonicalString()}}function Co(r){return nn.fromServerFormat(r.fieldPath)}function gw(r){return r instanceof It?function(t){if(t.op==="=="){if(rT(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NAN"}};if(nT(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(rT(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NOT_NAN"}};if(nT(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Io(t.field),op:DO(t.op),value:t.value}}}(r):r instanceof dr?function(t){const s=t.getFilters().map(o=>gw(o));return s.length===1?s[0]:{compositeFilter:{op:NO(t.op),filters:s}}}(r):we(54877,{filter:r})}function OO(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t,s,o,u=be.min(),h=be.min(),p=sn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e){this.yt=e}}function VO(r){const e=IO({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?og(e,e.limit,"L"):e}/**
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
 */class PO{constructor(){this.Cn=new kO}addToCollectionParentIndex(e,t){return this.Cn.add(t),te.resolve()}getCollectionParents(e,t){return te.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return te.resolve()}deleteFieldIndex(e,t){return te.resolve()}deleteAllFieldIndexes(e){return te.resolve()}createTargetIndexes(e,t){return te.resolve()}getDocumentsMatchingTarget(e,t){return te.resolve(null)}getIndexType(e,t){return te.resolve(0)}getFieldIndexes(e,t){return te.resolve([])}getNextCollectionGroupToUpdate(e){return te.resolve(null)}getMinOffset(e,t){return te.resolve(ys.min())}getMinOffsetFromCollectionGroup(e,t){return te.resolve(ys.min())}updateCollectionGroup(e,t,s){return te.resolve()}updateIndexEntries(e,t){return te.resolve()}}class kO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new kt(it.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new kt(it.comparator)).toArray()}}/**
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
 */const yT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_w=41943040;class An{static withCacheSize(e){return new An(e,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An.DEFAULT_COLLECTION_PERCENTILE=10,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,An.DEFAULT=new An(_w,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),An.DISABLED=new An(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _T="LruGarbageCollector",LO=1048576;function vT([r,e],[t,s]){const o=ke(r,t);return o===0?ke(e,s):o}class UO{constructor(e){this.Ir=e,this.buffer=new kt(vT),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();vT(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class jO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){fe(_T,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){nl(t)?fe(_T,"Ignoring IndexedDB error during garbage collection: ",t):await tl(t)}await this.Vr(3e5)})}}class zO{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return te.resolve(Bf.ce);const s=new UO(t);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),te.resolve(yT)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yT):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,p,m,g;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(s=S,p=Date.now(),this.removeTargets(e,s,t))).next(S=>(u=S,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(g=Date.now(),bo()<=Pe.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-_}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${S} documents in `+(g-m)+`ms
Total Duration: ${g-_}ms`),te.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function qO(r,e){return new zO(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(){this.changes=new xa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?te.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class HO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&xu(s.mutation,o,kn.empty(),nt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const o=da();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Eu();return u.forEach((p,m)=>{h=h.insert(p,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=da();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,o){let u=bi();const h=Cu(),p=function(){return Cu()}();return t.forEach((m,g)=>{const _=s.get(g.key);o.has(g.key)&&(_===void 0||_.mutation instanceof Is)?u=u.insert(g.key,g):_!==void 0?(h.set(g.key,_.mutation.getFieldMask()),xu(_.mutation,g,_.mutation.getFieldMask(),nt.now())):h.set(g.key,kn.empty())}),this.recalculateAndSaveOverlays(e,u).next(m=>(m.forEach((g,_)=>h.set(g,_)),t.forEach((g,_)=>p.set(g,new HO(_,h.get(g)??null))),p))}recalculateAndSaveOverlays(e,t){const s=Cu();let o=new ft((h,p)=>h-p),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let _=s.get(m)||kn.empty();_=p.applyToLocalView(g,_),s.set(m,_);const S=(o.get(p.batchId)||Le()).add(m);o=o.insert(p.batchId,S)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,_=m.value,S=JS();_.forEach(A=>{if(!u.has(A)){const N=sw(t.get(A),s.get(A));N!==null&&S.set(A,N),u=u.add(A)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,S))}return te.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return _e.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):QS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):te.resolve(da());let p=ku,m=u;return h.next(g=>te.forEach(g,(_,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),u.get(_)?te.resolve():this.remoteDocumentCache.getEntry(e,_).next(A=>{m=m.insert(_,A)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,m,g,Le())).next(_=>({batchId:p,changes:ZS(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(s=>{let o=Eu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Eu();return this.indexManager.getCollectionParents(e,u).next(p=>te.forEach(p,m=>{const g=function(S,A){return new rl(A,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(_=>{_.forEach((S,A)=>{h=h.insert(S,A)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((m,g)=>{const _=g.getKey();h.get(_)===null&&(h=h.insert(_,pn.newInvalidDocument(_)))});let p=Eu();return h.forEach((m,g)=>{const _=u.get(m);_!==void 0&&xu(_.mutation,g,kn.empty(),nt.now()),Yf(t,g)&&(p=p.insert(m,g))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return te.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:kr(o.createTime)}}(t)),te.resolve()}getNamedQuery(e,t){return te.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(o){return{name:o.name,query:VO(o.bundledQuery),readTime:kr(o.readTime)}}(t)),te.resolve()}}/**
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
 */class $O{constructor(){this.overlays=new ft(_e.comparator),this.qr=new Map}getOverlay(e,t){return te.resolve(this.overlays.get(t))}getOverlays(e,t){const s=da();return te.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),te.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),te.resolve()}getOverlaysForCollection(e,t,s){const o=da(),u=t.length+1,h=new _e(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>s&&o.set(m.getKey(),m)}return te.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new ft((g,_)=>g-_);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let _=u.get(g.largestBatchId);_===null&&(_=da(),u=u.insert(g.largestBatchId,_)),_.set(g.getKey(),g)}}const p=da(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,_)=>p.set(g,_)),!(p.size()>=o)););return te.resolve(p)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new cO(t,s));let u=this.qr.get(t);u===void 0&&(u=Le(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class YO{constructor(){this.sessionToken=sn.EMPTY_BYTE_STRING}getSessionToken(e){return te.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,te.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(){this.Qr=new kt(Ht.$r),this.Ur=new kt(Ht.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Ht(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new Ht(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new _e(new it([])),s=new Ht(t,e),o=new Ht(t,e+1),u=[];return this.Ur.forEachInRange([s,o],h=>{this.Gr(h),u.push(h.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new _e(new it([])),s=new Ht(t,e),o=new Ht(t,e+1);let u=Le();return this.Ur.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Ht(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ht{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return _e.comparator(e.key,t.key)||ke(e.Yr,t.Yr)}static Kr(e,t){return ke(e.Yr,t.Yr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new kt(Ht.$r)}checkEmpty(e){return te.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new uO(u,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Zr=this.Zr.add(new Ht(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return te.resolve(h)}lookupMutationBatch(e,t){return te.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return te.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return te.resolve(this.mutationQueue.length===0?Fg:this.tr-1)}getAllMutationBatches(e){return te.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ht(t,0),o=new Ht(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],h=>{const p=this.Xr(h.Yr);u.push(p)}),te.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new kt(ke);return t.forEach(o=>{const u=new Ht(o,0),h=new Ht(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],p=>{s=s.add(p.Yr)})}),te.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;_e.isDocumentKey(u)||(u=u.child(""));const h=new Ht(new _e(u),0);let p=new kt(ke);return this.Zr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Yr)),!0)},h),te.resolve(this.ti(p))}ti(e){const t=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ye(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return te.forEach(t.mutations,o=>{const u=new Ht(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new Ht(t,0),o=this.Zr.firstAfterOrEqual(s);return te.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,te.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e){this.ri=e,this.docs=function(){return new ft(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return te.resolve(s?s.document.mutableCopy():pn.newInvalidDocument(t))}getEntries(e,t){let s=bi();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():pn.newInvalidDocument(o))}),te.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=bi();const h=t.path,p=new _e(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:_}}=m.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||w2(S2(_),s)<=0||(o.has(_.key)||Yf(t,_))&&(u=u.insert(_.key,_.mutableCopy()))}return te.resolve(u)}getAllFromCollectionGroup(e,t,s,o){we(9500)}ii(e,t){return te.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new XO(this)}getSize(e){return te.resolve(this.size)}}class XO extends BO{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),te.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.persistence=e,this.si=new xa(t=>Yg(t),Qg),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.oi=0,this._i=new Jg,this.targetCount=0,this.ai=Go.ur()}forEachTarget(e,t){return this.si.forEach((s,o)=>t(o)),te.resolve()}getLastRemoteSnapshotVersion(e){return te.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return te.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),te.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),te.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Go(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,te.resolve()}updateTargetData(e,t){return this.Pr(t),te.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,te.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),te.waitFor(u).next(()=>o)}getTargetCount(e){return te.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return te.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),te.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),te.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),te.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return te.resolve(s)}containsKey(e,t){return te.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,t){this.ui={},this.overlays={},this.ci=new Bf(0),this.li=!1,this.li=!0,this.hi=new YO,this.referenceDelegate=e(this),this.Pi=new WO(this),this.indexManager=new PO,this.remoteDocumentCache=function(o){return new KO(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new MO(t),this.Ii=new GO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $O,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new QO(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){fe("MemoryPersistence","Starting transaction:",e);const o=new ZO(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,t){return te.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class ZO extends b2{constructor(e){super(),this.currentSequenceNumber=e}}class ey{constructor(e){this.persistence=e,this.Ri=new Jg,this.Vi=null}static mi(e){return new ey(e)}get fi(){if(this.Vi)return this.Vi;throw we(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),te.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),te.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),te.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return te.forEach(this.fi,s=>{const o=_e.fromPath(s);return this.gi(e,o).next(u=>{u||t.removeEntry(o,be.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return te.or([()=>te.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class wf{constructor(e,t){this.persistence=e,this.pi=new xa(s=>C2(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=qO(this,t)}static mi(e,t){return new wf(e,t)}Ei(){}di(e){return te.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return te.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?te.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,h=>this.br(e,h,t).next(p=>{p||(s++,u.removeEntry(h,be.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),te.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),te.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),te.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),te.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zh(e.data.value)),t}br(e,t,s){return te.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return te.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class JO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class e4{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return CC()?8:R2(mn())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ws(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new JO;return this.Ss(e,t,h).next(p=>{if(u.result=p,this.Vs)return this.bs(e,t,h,p.size)})}).next(()=>u.result)}bs(e,t,s,o){return s.documentReadCount<this.fs?(bo()<=Pe.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",Ro(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),te.resolve()):(bo()<=Pe.DEBUG&&fe("QueryEngine","Query:",Ro(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(bo()<=Pe.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",Ro(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pr(t))):te.resolve())}ys(e,t){if(oT(t))return te.resolve(null);let s=Pr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=og(t,null,"F"),s=Pr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Le(...u);return this.ps.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(m=>{const g=this.Ds(t,p);return this.Cs(t,g,h,m.readTime)?this.ys(e,og(t,null,"F")):this.vs(e,g,t,m)}))})))}ws(e,t,s,o){return oT(t)||o.isEqual(be.min())?te.resolve(null):this.ps.getDocuments(e,s).next(u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?te.resolve(null):(bo()<=Pe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ro(t)),this.vs(e,h,t,T2(o,ku)).next(p=>p))})}Ds(e,t){let s=new kt(XS(e));return t.forEach((o,u)=>{Yf(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return bo()<=Pe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Ro(t)),this.ps.getDocumentsMatchingQuery(e,t,ys.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="LocalStore",t4=3e8;class n4{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new ft(ke),this.xs=new xa(u=>Yg(u),Qg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function r4(r,e,t,s){return new n4(r,e,t,s)}async function Ew(r,e){const t=Re(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let m=Le();for(const g of o){h.push(g.batchId);for(const _ of g.mutations)m=m.add(_.key)}for(const g of u){p.push(g.batchId);for(const _ of g.mutations)m=m.add(_.key)}return t.localDocuments.getDocuments(s,m).next(g=>({Ls:g,removedBatchIds:h,addedBatchIds:p}))})})}function i4(r,e){const t=Re(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return function(p,m,g,_){const S=g.batch,A=S.keys();let N=te.resolve();return A.forEach(U=>{N=N.next(()=>_.getEntry(m,U)).next($=>{const H=g.docVersions.get(U);Ye(H!==null,48541),$.version.compareTo(H)<0&&(S.applyToRemoteDocument($,g),$.isValidDocument()&&($.setReadTime(g.commitVersion),_.addEntry($)))})}),N.next(()=>p.mutationQueue.removeMutationBatch(m,S))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let m=Le();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Tw(r){const e=Re(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function s4(r,e){const t=Re(r),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const p=[];e.targetChanges.forEach((_,S)=>{const A=o.get(S);if(!A)return;p.push(t.Pi.removeMatchingKeys(u,_.removedDocuments,S).next(()=>t.Pi.addMatchingKeys(u,_.addedDocuments,S)));let N=A.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?N=N.withResumeToken(sn.EMPTY_BYTE_STRING,be.min()).withLastLimboFreeSnapshotVersion(be.min()):_.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(_.resumeToken,s)),o=o.insert(S,N),function($,H,J){return $.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=t4?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(A,N,_)&&p.push(t.Pi.updateTargetData(u,N))});let m=bi(),g=Le();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,_))}),p.push(a4(u,h,e.documentUpdates).next(_=>{m=_.ks,g=_.qs})),!s.isEqual(be.min())){const _=t.Pi.getLastRemoteSnapshotVersion(u).next(S=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(_)}return te.waitFor(p).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,m,g)).next(()=>m)}).then(u=>(t.Ms=o,u))}function a4(r,e,t){let s=Le(),o=Le();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=bi();return t.forEach((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(be.min())?(e.removeEntry(p,m.readTime),h=h.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),h=h.insert(p,m)):fe(ny,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)}),{ks:h,qs:o}})}function o4(r,e){const t=Re(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Fg),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function l4(r,e){const t=Re(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Pi.getTargetData(s,e).next(u=>u?(o=u,te.resolve(o)):t.Pi.allocateTargetId(s).next(h=>(o=new cs(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function fg(r,e,t){const s=Re(r),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!nl(h))throw h;fe(ny,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function ET(r,e,t){const s=Re(r);let o=be.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",h=>function(m,g,_){const S=Re(m),A=S.xs.get(_);return A!==void 0?te.resolve(S.Ms.get(A)):S.Pi.getTargetData(g,_)}(s,h,Pr(e)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,p.targetId).next(m=>{u=m})}).next(()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:be.min(),t?u:Le())).next(p=>(u4(s,Y2(e),p),{documents:p,Qs:u})))}function u4(r,e,t){let s=r.Os.get(e)||be.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Os.set(e,s)}class TT{constructor(){this.activeTargetIds=J2()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class c4{constructor(){this.Mo=new TT,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new TT,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class h4{Oo(e){}shutdown(){}}/**
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
 */const ST="ConnectivityMonitor";class wT{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){fe(ST,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){fe(ST,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Dm="RestConnection",f4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class d4{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===_f?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=dg(),p=this.zo(e,t.toUriEncodedString());fe(Dm,`Sending RPC '${e}' ${h}:`,p,s);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:g}=new URL(p),_=Wo(g);return this.Jo(e,p,m,s,_).then(S=>(fe(Dm,`Received RPC '${e}' ${h}: `,S),S),S=>{throw qo(Dm,`RPC '${e}' ${h} failed with error: `,S,"url: ",p,"request:",s),S})}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+el}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,t){const s=f4[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="WebChannelConnection";class m4 extends d4{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=dg();return new Promise((p,m)=>{const g=new wS;g.setWithCredentials(!0),g.listenOnce(AS.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Wh.NO_ERROR:const S=g.getResponseJson();fe(cn,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(S)),p(S);break;case Wh.TIMEOUT:fe(cn,`RPC '${e}' ${h} timed out`),m(new ce(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Wh.HTTP_ERROR:const A=g.getStatus();if(fe(cn,`RPC '${e}' ${h} failed with status:`,A,"response text:",g.getResponseText()),A>0){let N=g.getResponseJson();Array.isArray(N)&&(N=N[0]);const U=N==null?void 0:N.error;if(U&&U.status&&U.message){const $=function(J){const X=J.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(X)>=0?X:Z.UNKNOWN}(U.status);m(new ce($,U.message))}else m(new ce(Z.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ce(Z.UNAVAILABLE,"Connection failed."));break;default:we(9055,{l_:e,streamId:h,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{fe(cn,`RPC '${e}' ${h} completed.`)}});const _=JSON.stringify(o);fe(cn,`RPC '${e}' ${h} sending request:`,o),g.send(t,"POST",_,s,15)})}T_(e,t,s){const o=dg(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=IS(),p=RS(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=u.join("");fe(cn,`Creating RPC '${e}' stream ${o}: ${_}`,m);const S=h.createWebChannel(_,m);this.I_(S);let A=!1,N=!1;const U=new p4({Yo:H=>{N?fe(cn,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(A||(fe(cn,`Opening RPC '${e}' stream ${o} transport.`),S.open(),A=!0),fe(cn,`RPC '${e}' stream ${o} sending:`,H),S.send(H))},Zo:()=>S.close()}),$=(H,J,X)=>{H.listen(J,re=>{try{X(re)}catch(he){setTimeout(()=>{throw he},0)}})};return $(S,vu.EventType.OPEN,()=>{N||(fe(cn,`RPC '${e}' stream ${o} transport opened.`),U.o_())}),$(S,vu.EventType.CLOSE,()=>{N||(N=!0,fe(cn,`RPC '${e}' stream ${o} transport closed`),U.a_(),this.E_(S))}),$(S,vu.EventType.ERROR,H=>{N||(N=!0,qo(cn,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),U.a_(new ce(Z.UNAVAILABLE,"The operation could not be completed")))}),$(S,vu.EventType.MESSAGE,H=>{var J;if(!N){const X=H.data[0];Ye(!!X,16349);const re=X,he=(re==null?void 0:re.error)||((J=re[0])==null?void 0:J.error);if(he){fe(cn,`RPC '${e}' stream ${o} received error:`,he);const ue=he.status;let de=function(I){const V=bt[I];if(V!==void 0)return lw(V)}(ue),x=he.message;de===void 0&&(de=Z.INTERNAL,x="Unknown error status: "+ue+" with message "+he.message),N=!0,U.a_(new ce(de,x)),S.close()}else fe(cn,`RPC '${e}' stream ${o} received:`,X),U.u_(X)}}),$(p,bS.STAT_EVENT,H=>{H.stat===eg.PROXY?fe(cn,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===eg.NOPROXY&&fe(cn,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{U.__()},0),U}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Nm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(r){return new vO(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="PersistentStream";class ww{constructor(e,t,s,o,u,h,p,m){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Sw(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(Ai(t.toString()),Ai("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===t&&this.G_(s,o)},s=>{e(()=>{const o=new ce(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return fe(AT,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(fe(AT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class g4 extends ww{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=SO(this.serializer,e),s=function(u){if(!("targetChange"in u))return be.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?be.min():h.readTime?kr(h.readTime):be.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=hg(this.serializer),t.addTarget=function(u,h){let p;const m=h.target;if(p=sg(m)?{documents:bO(u,m)}:{query:RO(u,m).ft},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=hw(u,h.resumeToken);const g=lg(u,h.expectedCount);g!==null&&(p.expectedCount=g)}else if(h.snapshotVersion.compareTo(be.min())>0){p.readTime=Sf(u,h.snapshotVersion.toTimestamp());const g=lg(u,h.expectedCount);g!==null&&(p.expectedCount=g)}return p}(this.serializer,e);const s=CO(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=hg(this.serializer),t.removeTarget=e,this.q_(t)}}class y4 extends ww{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=AO(e.writeResults,e.commitTime),s=kr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=hg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>wO(this.serializer,s))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{}class v4 extends _4{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ce(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Go(e,ug(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ce(Z.UNKNOWN,u.toString())})}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Ho(e,ug(t,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ce(Z.UNKNOWN,h.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class E4{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Aa="RemoteStore";class T4{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(h=>{s.enqueueAndForget(async()=>{Da(this)&&(fe(Aa,"Restarting streams for network reachability change."),await async function(m){const g=Re(m);g.Ea.add(4),await rc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Zf(g)}(this))})}),this.Ra=new E4(s,o)}}async function Zf(r){if(Da(r))for(const e of r.da)await e(!0)}async function rc(r){for(const e of r.da)await e(!1)}function Aw(r,e){const t=Re(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ay(t)?sy(t):il(t).O_()&&iy(t,e))}function ry(r,e){const t=Re(r),s=il(t);t.Ia.delete(e),s.O_()&&bw(t,e),t.Ia.size===0&&(s.O_()?s.L_():Da(t)&&t.Ra.set("Unknown"))}function iy(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(be.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}il(r).Y_(e)}function bw(r,e){r.Va.Ue(e),il(r).Z_(e)}function sy(r){r.Va=new mO({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),il(r).start(),r.Ra.ua()}function ay(r){return Da(r)&&!il(r).x_()&&r.Ia.size>0}function Da(r){return Re(r).Ea.size===0}function Rw(r){r.Va=void 0}async function S4(r){r.Ra.set("Online")}async function w4(r){r.Ia.forEach((e,t)=>{iy(r,e)})}async function A4(r,e){Rw(r),ay(r)?(r.Ra.ha(e),sy(r)):r.Ra.set("Unknown")}async function b4(r,e,t){if(r.Ra.set("Online"),e instanceof cw&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ia.delete(p),o.Va.removeTarget(p))}(r,e)}catch(s){fe(Aa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Af(r,s)}else if(e instanceof tf?r.Va.Ze(e):e instanceof uw?r.Va.st(e):r.Va.tt(e),!t.isEqual(be.min()))try{const s=await Tw(r.localStore);t.compareTo(s)>=0&&await function(u,h){const p=u.Va.Tt(h);return p.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const _=u.Ia.get(g);_&&u.Ia.set(g,_.withResumeToken(m.resumeToken,h))}}),p.targetMismatches.forEach((m,g)=>{const _=u.Ia.get(m);if(!_)return;u.Ia.set(m,_.withResumeToken(sn.EMPTY_BYTE_STRING,_.snapshotVersion)),bw(u,m);const S=new cs(_.target,m,g,_.sequenceNumber);iy(u,S)}),u.remoteSyncer.applyRemoteEvent(p)}(r,t)}catch(s){fe(Aa,"Failed to raise snapshot:",s),await Af(r,s)}}async function Af(r,e,t){if(!nl(e))throw e;r.Ea.add(1),await rc(r),r.Ra.set("Offline"),t||(t=()=>Tw(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{fe(Aa,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Zf(r)})}function Iw(r,e){return e().catch(t=>Af(r,t,e))}async function Jf(r){const e=Re(r),t=Ts(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Fg;for(;R4(e);)try{const o=await o4(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,I4(e,o)}catch(o){await Af(e,o)}Cw(e)&&xw(e)}function R4(r){return Da(r)&&r.Ta.length<10}function I4(r,e){r.Ta.push(e);const t=Ts(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Cw(r){return Da(r)&&!Ts(r).x_()&&r.Ta.length>0}function xw(r){Ts(r).start()}async function C4(r){Ts(r).ra()}async function x4(r){const e=Ts(r);for(const t of r.Ta)e.ea(t.mutations)}async function D4(r,e,t){const s=r.Ta.shift(),o=Xg.from(s,e,t);await Iw(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Jf(r)}async function N4(r,e){e&&Ts(r).X_&&await async function(s,o){if(function(h){return fO(h)&&h!==Z.ABORTED}(o.code)){const u=s.Ta.shift();Ts(s).B_(),await Iw(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Jf(s)}}(r,e),Cw(r)&&xw(r)}async function bT(r,e){const t=Re(r);t.asyncQueue.verifyOperationInProgress(),fe(Aa,"RemoteStore received new credentials");const s=Da(t);t.Ea.add(3),await rc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Zf(t)}async function O4(r,e){const t=Re(r);e?(t.Ea.delete(2),await Zf(t)):e||(t.Ea.add(2),await rc(t),t.Ra.set("Unknown"))}function il(r){return r.ma||(r.ma=function(t,s,o){const u=Re(t);return u.sa(),new g4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:S4.bind(null,r),t_:w4.bind(null,r),r_:A4.bind(null,r),H_:b4.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),ay(r)?sy(r):r.Ra.set("Unknown")):(await r.ma.stop(),Rw(r))})),r.ma}function Ts(r){return r.fa||(r.fa=function(t,s,o){const u=Re(t);return u.sa(),new y4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:C4.bind(null,r),r_:N4.bind(null,r),ta:x4.bind(null,r),na:D4.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await Jf(r)):(await r.fa.stop(),r.Ta.length>0&&(fe(Aa,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,p=new oy(e,t,h,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ly(r,e){if(Ai("AsyncQueue",`${e}: ${r}`),nl(r))return new ce(Z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{static emptySet(e){return new Vo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||_e.comparator(t.key,s.key):(t,s)=>_e.comparator(t.key,s.key),this.keyedMap=Eu(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Vo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(){this.ga=new ft(_e.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):we(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class $o{constructor(e,t,s,o,u,h,p,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(p=>{h.push({type:0,doc:p})}),new $o(e,t,Vo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$f(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class V4{constructor(){this.queries=IT(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Re(t),u=o.queries;o.queries=IT(),u.forEach((h,p)=>{for(const m of p.Sa)m.onError(s)})})(this,new ce(Z.ABORTED,"Firestore shutting down"))}}function IT(){return new xa(r=>KS(r),$f)}async function uy(r,e){const t=Re(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new M4,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=ly(h,`Initialization of query '${Ro(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&hy(t)}async function cy(r,e){const t=Re(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function P4(r,e){const t=Re(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const p of h.Sa)p.Fa(o)&&(s=!0);h.wa=o}}s&&hy(t)}function k4(r,e,t){const s=Re(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function hy(r){r.Ca.forEach(e=>{e.next()})}var pg,CT;(CT=pg||(pg={})).Ma="default",CT.Cache="cache";class fy{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new $o(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=$o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==pg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.key=e}}class Nw{constructor(e){this.key=e}}class L4{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Le(),this.mutatedKeys=Le(),this.eu=XS(e),this.tu=new Vo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new RT,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((_,S)=>{const A=o.get(_),N=Yf(this.query,S)?S:null,U=!!A&&this.mutatedKeys.has(A.key),$=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let H=!1;A&&N?A.data.isEqual(N.data)?U!==$&&(s.track({type:3,doc:N}),H=!0):this.su(A,N)||(s.track({type:2,doc:N}),H=!0,(m&&this.eu(N,m)>0||g&&this.eu(N,g)<0)&&(p=!0)):!A&&N?(s.track({type:0,doc:N}),H=!0):A&&!N&&(s.track({type:1,doc:A}),H=!0,(m||g)&&(p=!0)),H&&(N?(h=h.add(N),u=$?u.add(_):u.delete(_)):(h=h.delete(_),u=u.delete(_)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const _=this.query.limitType==="F"?h.last():h.first();h=h.delete(_.key),u=u.delete(_.key),s.track({type:1,doc:_})}return{tu:h,iu:s,Cs:p,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort((_,S)=>function(N,U){const $=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{Rt:H})}};return $(N)-$(U)}(_.type,S.type)||this.eu(_.doc,S.doc)),this.ou(s),o=o??!1;const p=t&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,g=m!==this.Za;return this.Za=m,h.length!==0||g?{snapshot:new $o(this.query,e.tu,u,h,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new RT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Le(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new Nw(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new Dw(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=Le();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return $o.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const dy="SyncEngine";class U4{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class j4{constructor(e){this.key=e,this.hu=!1}}class z4{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new xa(p=>KS(p),$f),this.Iu=new Map,this.Eu=new Set,this.du=new ft(_e.comparator),this.Au=new Map,this.Ru=new Jg,this.Vu={},this.mu=new Map,this.fu=Go.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function q4(r,e,t=!0){const s=Lw(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Ow(s,e,t,!0),o}async function B4(r,e){const t=Lw(r);await Ow(t,e,!0,!1)}async function Ow(r,e,t,s){const o=await l4(r.localStore,Pr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let p;return s&&(p=await H4(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Aw(r.remoteStore,o),p}async function H4(r,e,t,s,o){r.pu=(S,A,N)=>async function($,H,J,X){let re=H.view.ru(J);re.Cs&&(re=await ET($.localStore,H.query,!1).then(({documents:x})=>H.view.ru(x,re)));const he=X&&X.targetChanges.get(H.targetId),ue=X&&X.targetMismatches.get(H.targetId)!=null,de=H.view.applyChanges(re,$.isPrimaryClient,he,ue);return DT($,H.targetId,de.au),de.snapshot}(r,S,A,N);const u=await ET(r.localStore,e,!0),h=new L4(e,u.Qs),p=h.ru(u.documents),m=nc.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),g=h.applyChanges(p,r.isPrimaryClient,m);DT(r,t,g.au);const _=new U4(e,t,h);return r.Tu.set(e,_),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),g.snapshot}async function F4(r,e,t){const s=Re(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(h=>!$f(h,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await fg(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&ry(s.remoteStore,o.targetId),mg(s,o.targetId)}).catch(tl)):(mg(s,o.targetId),await fg(s.localStore,o.targetId,!0))}async function G4(r,e){const t=Re(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ry(t.remoteStore,s.targetId))}async function $4(r,e,t){const s=J4(r);try{const o=await function(h,p){const m=Re(h),g=nt.now(),_=p.reduce((N,U)=>N.add(U.key),Le());let S,A;return m.persistence.runTransaction("Locally write mutations","readwrite",N=>{let U=bi(),$=Le();return m.Ns.getEntries(N,_).next(H=>{U=H,U.forEach((J,X)=>{X.isValidDocument()||($=$.add(J))})}).next(()=>m.localDocuments.getOverlayedDocuments(N,U)).next(H=>{S=H;const J=[];for(const X of p){const re=oO(X,S.get(X.key).overlayedDocument);re!=null&&J.push(new Is(X.key,re,qS(re.value.mapValue),cr.exists(!0)))}return m.mutationQueue.addMutationBatch(N,g,J,p)}).next(H=>{A=H;const J=H.applyToLocalDocumentSet(S,$);return m.documentOverlayCache.saveOverlays(N,H.batchId,J)})}).then(()=>({batchId:A.batchId,changes:ZS(S)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,m){let g=h.Vu[h.currentUser.toKey()];g||(g=new ft(ke)),g=g.insert(p,m),h.Vu[h.currentUser.toKey()]=g}(s,o.batchId,t),await ic(s,o.changes),await Jf(s.remoteStore)}catch(o){const u=ly(o,"Failed to persist write");t.reject(u)}}async function Mw(r,e){const t=Re(r);try{const s=await s4(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Au.get(u);h&&(Ye(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Ye(h.hu,14607):o.removedDocuments.size>0&&(Ye(h.hu,42227),h.hu=!1))}),await ic(t,s,e)}catch(s){await tl(s)}}function xT(r,e,t){const s=Re(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach((u,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const m=Re(h);m.onlineState=p;let g=!1;m.queries.forEach((_,S)=>{for(const A of S.Sa)A.va(p)&&(g=!0)}),g&&hy(m)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Y4(r,e,t){const s=Re(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new ft(_e.comparator);h=h.insert(u,pn.newNoDocument(u,be.min()));const p=Le().add(u),m=new Xf(be.min(),new Map,new ft(ke),h,p);await Mw(s,m),s.du=s.du.remove(u),s.Au.delete(e),py(s)}else await fg(s.localStore,e,!1).then(()=>mg(s,e,t)).catch(tl)}async function Q4(r,e){const t=Re(r),s=e.batch.batchId;try{const o=await i4(t.localStore,e);Pw(t,s,null),Vw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ic(t,o)}catch(o){await tl(o)}}async function K4(r,e,t){const s=Re(r);try{const o=await function(h,p){const m=Re(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let _;return m.mutationQueue.lookupMutationBatch(g,p).next(S=>(Ye(S!==null,37113),_=S.keys(),m.mutationQueue.removeMutationBatch(g,S))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,_,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_)).next(()=>m.localDocuments.getDocuments(g,_))})}(s.localStore,e);Pw(s,e,t),Vw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ic(s,o)}catch(o){await tl(o)}}function Vw(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function Pw(r,e,t){const s=Re(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function mg(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(s=>{r.Ru.containsKey(s)||kw(r,s)})}function kw(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(ry(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),py(r))}function DT(r,e,t){for(const s of t)s instanceof Dw?(r.Ru.addReference(s.key,e),X4(r,s)):s instanceof Nw?(fe(dy,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||kw(r,s.key)):we(19791,{wu:s})}function X4(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Eu.has(s)||(fe(dy,"New document in limbo: "+t),r.Eu.add(s),py(r))}function py(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new _e(it.fromString(e)),s=r.fu.next();r.Au.set(s,new j4(t)),r.du=r.du.insert(t,s),Aw(r.remoteStore,new cs(Pr(Gf(t.path)),s,"TargetPurposeLimboResolution",Bf.ce))}}async function ic(r,e,t){const s=Re(r),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach((p,m)=>{h.push(s.pu(m,e,t).then(g=>{var _;if((g||t)&&s.isPrimaryClient){const S=g?!g.fromCache:(_=t==null?void 0:t.targetChanges.get(m.targetId))==null?void 0:_.current;s.sharedClientState.updateQueryState(m.targetId,S?"current":"not-current")}if(g){o.push(g);const S=ty.As(m.targetId,g);u.push(S)}}))}),await Promise.all(h),s.Pu.H_(o),await async function(m,g){const _=Re(m);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>te.forEach(g,A=>te.forEach(A.Es,N=>_.persistence.referenceDelegate.addReference(S,A.targetId,N)).next(()=>te.forEach(A.ds,N=>_.persistence.referenceDelegate.removeReference(S,A.targetId,N)))))}catch(S){if(!nl(S))throw S;fe(ny,"Failed to update sequence numbers: "+S)}for(const S of g){const A=S.targetId;if(!S.fromCache){const N=_.Ms.get(A),U=N.snapshotVersion,$=N.withLastLimboFreeSnapshotVersion(U);_.Ms=_.Ms.insert(A,$)}}}(s.localStore,u))}async function W4(r,e){const t=Re(r);if(!t.currentUser.isEqual(e)){fe(dy,"User change. New user:",e.toKey());const s=await Ew(t.localStore,e);t.currentUser=e,function(u,h){u.mu.forEach(p=>{p.forEach(m=>{m.reject(new ce(Z.CANCELLED,h))})}),u.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ic(t,s.Ls)}}function Z4(r,e){const t=Re(r),s=t.Au.get(e);if(s&&s.hu)return Le().add(s.key);{let o=Le();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const p=t.Tu.get(h);o=o.unionWith(p.view.nu)}return o}}function Lw(r){const e=Re(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Z4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Y4.bind(null,e),e.Pu.H_=P4.bind(null,e.eventManager),e.Pu.yu=k4.bind(null,e.eventManager),e}function J4(r){const e=Re(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Q4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=K4.bind(null,e),e}class bf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return r4(this.persistence,new e4,e.initialUser,this.serializer)}Cu(e){return new vw(ey.mi,this.serializer)}Du(e){return new c4}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bf.provider={build:()=>new bf};class eM extends bf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ye(this.persistence.referenceDelegate instanceof wf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new jO(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?An.withCacheSize(this.cacheSizeBytes):An.DEFAULT;return new vw(s=>wf.mi(s,t),this.serializer)}}class gg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>xT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=W4.bind(null,this.syncEngine),await O4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new V4}()}createDatastore(e){const t=Wf(e.databaseInfo.databaseId),s=function(u){return new m4(u)}(e.databaseInfo);return function(u,h,p,m){return new v4(u,h,p,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,p){return new T4(s,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>xT(this.syncEngine,t,0),function(){return wT.v()?new wT:new h4}())}createSyncEngine(e,t){return function(o,u,h,p,m,g,_){const S=new z4(o,u,h,p,m,g);return _&&(S.gu=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Re(o);fe(Aa,"RemoteStore shutting down."),u.Ea.add(5),await rc(u),u.Aa.shutdown(),u.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}gg.provider={build:()=>new gg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ss="FirestoreClient";class tM{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=dn.UNAUTHENTICATED,this.clientId=Hg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{fe(Ss,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(fe(Ss,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ly(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Om(r,e){r.asyncQueue.verifyOperationInProgress(),fe(Ss,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Ew(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function NT(r,e){r.asyncQueue.verifyOperationInProgress();const t=await nM(r);fe(Ss,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>bT(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>bT(e.remoteStore,o)),r._onlineComponents=e}async function nM(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){fe(Ss,"Using user provided OfflineComponentProvider");try{await Om(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;qo("Error using user provided cache. Falling back to memory cache: "+t),await Om(r,new bf)}}else fe(Ss,"Using default OfflineComponentProvider"),await Om(r,new eM(void 0));return r._offlineComponents}async function Uw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(fe(Ss,"Using user provided OnlineComponentProvider"),await NT(r,r._uninitializedComponentsProvider._online)):(fe(Ss,"Using default OnlineComponentProvider"),await NT(r,new gg))),r._onlineComponents}function rM(r){return Uw(r).then(e=>e.syncEngine)}async function Rf(r){const e=await Uw(r),t=e.eventManager;return t.onListen=q4.bind(null,e.syncEngine),t.onUnlisten=F4.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=B4.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=G4.bind(null,e.syncEngine),t}function iM(r,e,t={}){const s=new vi;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const _=new my({next:A=>{_.Nu(),h.enqueueAndForget(()=>cy(u,S));const N=A.docs.has(p);!N&&A.fromCache?g.reject(new ce(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&A.fromCache&&m&&m.source==="server"?g.reject(new ce(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(A)},error:A=>g.reject(A)}),S=new fy(Gf(p.path),_,{includeMetadataChanges:!0,qa:!0});return uy(u,S)}(await Rf(r),r.asyncQueue,e,t,s)),s.promise}function sM(r,e,t={}){const s=new vi;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const _=new my({next:A=>{_.Nu(),h.enqueueAndForget(()=>cy(u,S)),A.fromCache&&m.source==="server"?g.reject(new ce(Z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(A)},error:A=>g.reject(A)}),S=new fy(p,_,{includeMetadataChanges:!0,qa:!0});return uy(u,S)}(await Rf(r),r.asyncQueue,e,t,s)),s.promise}/**
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
 */function jw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="firestore.googleapis.com",MT=!0;class VT{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ce(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zw,this.ssl=MT}else this.host=e.host,this.ssl=e.ssl??MT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_w;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<LO)throw new ce(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}E2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jw(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ce(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ce(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ce(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ed{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new VT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new VT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new c2;switch(s.type){case"firstParty":return new p2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=OT.get(t);s&&(fe("ComponentProvider","Removing Datastore"),OT.delete(t),s.terminate())}(this),Promise.resolve()}}function aM(r,e,t,s={}){var g;r=Ln(r,ed);const o=Wo(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${t}`;o&&(V1(`https://${p}`),P1("Firestore",!0)),u.host!==zw&&u.host!==p&&qo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:s};if(!va(m,h)&&(r._setSettings(m),s.mockUserToken)){let _,S;if(typeof s.mockUserToken=="string")_=s.mockUserToken,S=dn.MOCK_USER;else{_=vC(s.mockUserToken,(g=r._app)==null?void 0:g.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new ce(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new dn(A)}r._authCredentials=new h2(new xS(_,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Cs(this.firestore,e,this._query)}}class gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ec(t,gt._jsonSchema))return new gt(e,s||null,new _e(it.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:Ct("string",gt._jsonSchemaVersion),referencePath:Ct("string")};class gs extends Cs{constructor(e,t,s){super(e,t,Gf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new _e(e))}withConverter(e){return new gs(this.firestore,e,this._path)}}function Ei(r,e,...t){if(r=xt(r),DS("collection","path",e),r instanceof ed){const s=it.fromString(e,...t);return Y0(s),new gs(r,null,s)}{if(!(r instanceof gt||r instanceof gs))throw new ce(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...t));return Y0(s),new gs(r.firestore,null,s)}}function Ri(r,e,...t){if(r=xt(r),arguments.length===1&&(e=Hg.newId()),DS("doc","path",e),r instanceof ed){const s=it.fromString(e,...t);return $0(s),new gt(r,null,new _e(s))}{if(!(r instanceof gt||r instanceof gs))throw new ce(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...t));return $0(s),new gt(r.firestore,r instanceof gs?r.converter:null,new _e(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="AsyncQueue";class kT{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Sw(this,"async_queue_retry"),this._c=()=>{const s=Nm();s&&fe(PT,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Nm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Nm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new vi;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!nl(e))throw e;fe(PT,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Ai("INTERNAL UNHANDLED ERROR: ",LT(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=oy.createAndSchedule(this,e,t,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&we(47125,{Pc:LT(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function LT(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function UT(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class ws extends ed{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new kT,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kT(e),this._firestoreClient=void 0,await e}}}function qw(r,e){const t=typeof r=="object"?r:j1(),s=typeof r=="string"?r:_f,o=Mg(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=yC("firestore");u&&aM(o,...u)}return o}function td(r){if(r._terminated)throw new ce(Z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||oM(r),r._firestoreClient}function oM(r){var s,o,u;const e=r._freezeSettings(),t=function(p,m,g,_){return new N2(p,m,g,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,jw(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new tM(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(p){const m=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(m),_online:m}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jn(sn.fromBase64String(e))}catch(t){throw new ce(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Jn(sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ec(e,Jn._jsonSchema))return Jn.fromBase64String(e.bytes)}}Jn._jsonSchemaVersion="firestore/bytes/1.0",Jn._jsonSchema={type:Ct("string",Jn._jsonSchemaVersion),bytes:Ct("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Lr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Lr._jsonSchemaVersion}}static fromJSON(e){if(ec(e,Lr._jsonSchema))return new Lr(e.latitude,e.longitude)}}Lr._jsonSchemaVersion="firestore/geoPoint/1.0",Lr._jsonSchema={type:Ct("string",Lr._jsonSchemaVersion),latitude:Ct("number"),longitude:Ct("number")};/**
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
 */class Ur{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ur._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ec(e,Ur._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ur(e.vectorValues);throw new ce(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ur._jsonSchemaVersion="firestore/vectorValue/1.0",Ur._jsonSchema={type:Ct("string",Ur._jsonSchemaVersion),vectorValues:Ct("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=/^__.*__$/;class uM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Is(e,this.data,this.fieldMask,t,this.fieldTransforms):new tc(e,this.data,t,this.fieldTransforms)}}class Bw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Is(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ac:r})}}class gy{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new gy({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return If(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Hw(this.Ac)&&lM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class cM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Wf(e)}Cc(e,t,s,o=!1){return new gy({Ac:e,methodName:t,Dc:s,path:nn.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function id(r){const e=r._freezeSettings(),t=Wf(r._databaseId);return new cM(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Fw(r,e,t,s,o,u={}){const h=r.Cc(u.merge||u.mergeFields?2:0,e,t,o);_y("Data must be an object, but it was:",h,s);const p=Gw(s,h);let m,g;if(u.merge)m=new kn(h.fieldMask),g=h.fieldTransforms;else if(u.mergeFields){const _=[];for(const S of u.mergeFields){const A=yg(e,S,t);if(!h.contains(A))throw new ce(Z.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Yw(_,A)||_.push(A)}m=new kn(_),g=h.fieldTransforms.filter(S=>m.covers(S.field))}else m=null,g=h.fieldTransforms;return new uM(new bn(p),m,g)}class sd extends rd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sd}}class yy extends rd{_toFieldTransform(e){return new rO(e.path,new qu)}isEqual(e){return e instanceof yy}}function hM(r,e,t,s){const o=r.Cc(1,e,t);_y("Data must be an object, but it was:",o,s);const u=[],h=bn.empty();Rs(s,(m,g)=>{const _=vy(e,m,t);g=xt(g);const S=o.yc(_);if(g instanceof sd)u.push(_);else{const A=sc(g,S);A!=null&&(u.push(_),h.set(_,A))}});const p=new kn(u);return new Bw(h,p,o.fieldTransforms)}function fM(r,e,t,s,o,u){const h=r.Cc(1,e,t),p=[yg(e,s,t)],m=[o];if(u.length%2!=0)throw new ce(Z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<u.length;A+=2)p.push(yg(e,u[A])),m.push(u[A+1]);const g=[],_=bn.empty();for(let A=p.length-1;A>=0;--A)if(!Yw(g,p[A])){const N=p[A];let U=m[A];U=xt(U);const $=h.yc(N);if(U instanceof sd)g.push(N);else{const H=sc(U,$);H!=null&&(g.push(N),_.set(N,H))}}const S=new kn(g);return new Bw(_,S,h.fieldTransforms)}function dM(r,e,t,s=!1){return sc(t,r.Cc(s?4:3,e))}function sc(r,e){if($w(r=xt(r)))return _y("Unsupported field value:",e,r),Gw(r,e);if(r instanceof rd)return function(s,o){if(!Hw(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let m=sc(p,o.wc(h));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=xt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return eO(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=nt.fromDate(s);return{timestampValue:Sf(o.serializer,u)}}if(s instanceof nt){const u=new nt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Sf(o.serializer,u)}}if(s instanceof Lr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Jn)return{bytesValue:hw(o.serializer,s._byteString)};if(s instanceof gt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Zg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ur)return function(h,p){return{mapValue:{fields:{[jS]:{stringValue:zS},[vf]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return Kg(p.serializer,g)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${qf(s)}`)}(r,e)}function Gw(r,e){const t={};return MS(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(r,(s,o)=>{const u=sc(o,e.mc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function $w(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof nt||r instanceof Lr||r instanceof Jn||r instanceof gt||r instanceof rd||r instanceof Ur)}function _y(r,e,t){if(!$w(t)||!NS(t)){const s=qf(t);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function yg(r,e,t){if((e=xt(e))instanceof nd)return e._internalPath;if(typeof e=="string")return vy(r,e);throw If("Field path arguments must be of type string or ",r,!1,void 0,t)}const pM=new RegExp("[~\\*/\\[\\]]");function vy(r,e,t){if(e.search(pM)>=0)throw If(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new nd(...e.split("."))._internalPath}catch{throw If(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function If(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||h)&&(m+=" (found",u&&(m+=` in field ${s}`),h&&(m+=` in document ${o}`),m+=")"),new ce(Z.INVALID_ARGUMENT,p+r+m)}function Yw(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ad("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mM extends Qw{data(){return super.data()}}function ad(r,e){return typeof e=="string"?vy(r,e):e instanceof nd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ce(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ey{}class Xw extends Ey{}function ba(r,e,...t){let s=[];e instanceof Ey&&s.push(e),s=s.concat(t),function(u){const h=u.filter(m=>m instanceof Ty).length,p=u.filter(m=>m instanceof od).length;if(h>1||h>0&&p>0)throw new ce(Z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class od extends Xw{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new od(e,t,s)}_apply(e){const t=this._parse(e);return Ww(e._query,t),new Cs(e.firestore,e.converter,ag(e._query,t))}_parse(e){const t=id(e.firestore);return function(u,h,p,m,g,_,S){let A;if(g.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new ce(Z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){zT(S,_);const U=[];for(const $ of S)U.push(jT(m,u,$));A={arrayValue:{values:U}}}else A=jT(m,u,S)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||zT(S,_),A=dM(p,h,S,_==="in"||_==="not-in");return It.create(g,_,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ra(r,e,t){const s=e,o=ad("where",r);return od._create(o,s,t)}class Ty extends Ey{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ty(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:dr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const p=u.getFlattenedFilters();for(const m of p)Ww(h,m),h=ag(h,m)}(e._query,t),new Cs(e.firestore,e.converter,ag(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sy extends Xw{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Sy(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new ce(Z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ce(Z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zu(u,h)}(e._query,this._field,this._direction);return new Cs(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new rl(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function wy(r,e="asc"){const t=e,s=ad("orderBy",r);return Sy._create(s,t)}function jT(r,e,t){if(typeof(t=xt(t))=="string"){if(t==="")throw new ce(Z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!QS(e)&&t.indexOf("/")!==-1)throw new ce(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(it.fromString(t));if(!_e.isDocumentKey(s))throw new ce(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return tT(r,new _e(s))}if(t instanceof gt)return tT(r,t._key);throw new ce(Z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qf(t)}.`)}function zT(r,e){if(!Array.isArray(r)||r.length===0)throw new ce(Z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ww(r,e){const t=function(o,u){for(const h of o)for(const p of h.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ce(Z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(Z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class gM{convertValue(e,t="none"){switch(Es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Rs(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[vf].arrayValue)==null?void 0:o.values)==null?void 0:u.map(h=>Et(h.doubleValue));return new Ur(t)}convertGeoPoint(e){return new Lr(Et(e.latitude),Et(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ff(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Lu(e));default:return null}}convertTimestamp(e){const t=_s(e);return new nt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=it.fromString(e);Ye(yw(s),9688,{name:e});const o=new Uu(s.get(1),s.get(3)),u=new _e(s.popFirst(5));return o.isEqual(t)||Ai(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Su{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ma extends Qw{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new nf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ad("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ma._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ma._jsonSchemaVersion="firestore/documentSnapshot/1.0",ma._jsonSchema={type:Ct("string",ma._jsonSchemaVersion),bundleSource:Ct("string","DocumentSnapshot"),bundleName:Ct("string"),bundle:Ct("string")};class nf extends ma{data(e={}){return super.data(e)}}class ga{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Su(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new nf(this._firestore,this._userDataWriter,s.key,s,new Su(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(p=>{const m=new nf(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Su(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const m=new nf(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Su(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,_=-1;return p.type!==0&&(g=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),_=h.indexOf(p.doc.key)),{type:yM(p.type),doc:m,oldIndex:g,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ga._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function yM(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(r){r=Ln(r,gt);const e=Ln(r.firestore,ws);return iM(td(e),r._key).then(t=>tA(e,r,t))}ga._jsonSchemaVersion="firestore/querySnapshot/1.0",ga._jsonSchema={type:Ct("string",ga._jsonSchemaVersion),bundleSource:Ct("string","QuerySnapshot"),bundleName:Ct("string"),bundle:Ct("string")};class Ay extends gM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}function eA(r){r=Ln(r,Cs);const e=Ln(r.firestore,ws),t=td(e),s=new Ay(e);return Kw(r._query),sM(t,r._query).then(o=>new ga(e,s,r,o))}function _M(r,e,t){r=Ln(r,gt);const s=Ln(r.firestore,ws),o=Zw(r.converter,e);return by(s,[Fw(id(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,cr.none())])}function Fu(r,e,t,...s){r=Ln(r,gt);const o=Ln(r.firestore,ws),u=id(o);let h;return h=typeof(e=xt(e))=="string"||e instanceof nd?fM(u,"updateDoc",r._key,e,t,s):hM(u,"updateDoc",r._key,e),by(o,[h.toMutation(r._key,cr.exists(!0))])}function vM(r,e){const t=Ln(r.firestore,ws),s=Ri(r),o=Zw(r.converter,e);return by(t,[Fw(id(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,cr.exists(!1))]).then(()=>s)}function ld(r,...e){var m,g,_;r=xt(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||UT(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(UT(e[s])){const S=e[s];e[s]=(m=S.next)==null?void 0:m.bind(S),e[s+1]=(g=S.error)==null?void 0:g.bind(S),e[s+2]=(_=S.complete)==null?void 0:_.bind(S)}let u,h,p;if(r instanceof gt)h=Ln(r.firestore,ws),p=Gf(r._key.path),u={next:S=>{e[s]&&e[s](tA(h,r,S))},error:e[s+1],complete:e[s+2]};else{const S=Ln(r,Cs);h=Ln(S.firestore,ws),p=S._query;const A=new Ay(h);u={next:N=>{e[s]&&e[s](new ga(h,A,S,N))},error:e[s+1],complete:e[s+2]},Kw(r._query)}return function(A,N,U,$){const H=new my($),J=new fy(N,H,U);return A.asyncQueue.enqueueAndForget(async()=>uy(await Rf(A),J)),()=>{H.Nu(),A.asyncQueue.enqueueAndForget(async()=>cy(await Rf(A),J))}}(td(h),p,o,u)}function by(r,e){return function(s,o){const u=new vi;return s.asyncQueue.enqueueAndForget(async()=>$4(await rM(s),o,u)),u.promise}(td(r),e)}function tA(r,e,t){const s=t.docs.get(e._key),o=new Ay(r);return new ma(r,o,e._key,s,new Su(t.hasPendingWrites,t.fromCache),e.converter)}function EM(){return new yy("serverTimestamp")}(function(e,t=!0){(function(o){el=o})(Zo),jo(new Ea("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new ws(new f2(s.getProvider("auth-internal")),new m2(h,s.getProvider("app-check-internal")),function(g,_){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ce(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Uu(g.options.projectId,_)}(h,o),h);return u={useFetchStreams:t,...u},p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),ps(B0,H0,e),ps(B0,H0,"esm2020")})();const TM={apiKey:"AIzaSyB5aFUQbtG1rShW-1O88aZjCG7uErNxmgQ",authDomain:"pdms-test-8a5cc.firebaseapp.com",projectId:"pdms-test-8a5cc",storageBucket:"pdms-test-8a5cc.firebasestorage.app",messagingSenderId:"631678861167",appId:"1:631678861167:web:5cd775b77e53535700329a"},Ry=U1(TM);qw(Ry);const rn=qw(Ry),Ia=a2(Ry);function SM({onLoginSuccess:r}){const[e,t]=G.useState(""),[s,o]=G.useState(""),u=$u(),h=()=>{u("/signup")},p=()=>{FD(Ia,e,s).then(()=>{r(),u("/dashboard")}).catch(m=>{alert("로그인 실패: "+m.message)})};return T.jsxs(wM,{children:[T.jsxs(AM,{children:[T.jsxs(bM,{children:[T.jsx(RM,{children:"PDMS"}),T.jsx(IM,{children:"Pushcomz Design Management System"})]}),T.jsxs(CM,{children:[T.jsx(xM,{type:"text",value:e,onChange:m=>t(m.target.value),placeholder:"이메일을 입력해주세요."}),T.jsx(DM,{type:"password",value:s,onChange:m=>o(m.target.value),placeholder:"비밀번호를 입력해주세요."})]}),T.jsx(NM,{onClick:p,children:"로그인"}),T.jsxs(MM,{children:[T.jsx(VM,{children:"계정이 없습니까?"}),T.jsx(PM,{onClick:h,children:"등록하기"})]})]}),T.jsx(OM,{children:"© Pushcomz Corp."})]})}const wM=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:r})=>r.colors.gray01};
`,AM=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:r})=>r.colors.white01};
`,bM=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,RM=ie.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.navy};
`,IM=ie.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,CM=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
`,xM=ie.input`
  width: 460px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,DM=ie.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,NM=ie.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:r})=>r.colors.white01};
`,OM=ie.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`,MM=ie.div`
  
`,VM=ie.span`
  margin-right: 10px;
  font-size: 13px;
`,PM=ie.button`
  font-size: 13px;
  color: ${({theme:r})=>r.colors.navy};
`,nA="./assets/logo-NEcdCz8m.svg";function kM(){const[r,e]=G.useState(""),[t,s]=G.useState(null),o=$u();G.useEffect(()=>{const p=Uf(Ia,async m=>{if(m){m.displayName&&e(m.displayName);const g=await Jw(Ri(rn,"users",m.uid));g.exists()?s(g.data().role):s(null)}else e(""),s(null)});return()=>p()},[]);const u=()=>{KD(Ia).then(()=>{o("/")}).catch(p=>{alert("로그아웃 중 오류가 발생했습니다: "+p.message)})},h=p=>{switch(p){case 1:return"요청자";case 2:return"디자이너";case 3:return"담당자";default:return"역할 없음"}};return T.jsxs(LM,{children:[T.jsx(UM,{src:nA}),T.jsxs(jM,{children:[T.jsxs(zM,{children:[T.jsx(qM,{children:r}),"님(",h(t),") 환영합니다."]}),T.jsx(BM,{onClick:u,children:"로그아웃"}),T.jsx(HM,{})]})]})}const LM=ie.header`
  ${({theme:r})=>r.mixin.flex("center","space-between")};
  padding: 12px 48px;
  font-family: 'Pretendard';
  background-color: ${({theme:r})=>r.colors.black};
`,UM=ie.img``,jM=ie.div``,zM=ie.span`
  margin-right: 24px;
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`,qM=ie.span`
  font-weight: 700;
`,BM=ie.button`
  padding: 5px 10px;
  border: 1px solid ${({theme:r})=>r.colors.white01};
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`,HM=ie.span`
  color: ${({theme:r})=>r.colors.white01};
  font-size: 16px;
`;function FM({item:r,index:e,onReviewComplete:t,onCancel:s}){const o=u=>{if(!u)return"-";if(u.toDate){const h=u.toDate();return`${h.getMonth()+1}/${h.getDate()}`}return u};return T.jsxs(KM,{isCanceled:r.status==="취소",children:[T.jsx(Wt,{children:e}),T.jsx(Wt,{children:r.design_request_id}),T.jsx(Wt,{children:o(r.request_date)}),T.jsx(Wt,{children:r.requester}),T.jsx(Wt,{children:o(r.completion_dt)}),T.jsx(Wt,{children:o(r.open_dt)}),T.jsx(Wt,{children:r.task_form}),T.jsx(Wt,{children:r.task_type}),T.jsxs(Wt,{children:[r.emergency?T.jsx(XM,{children:"긴급"}):"",r.requirement]}),T.jsx(Wt,{children:r.url}),T.jsx(Wt,{children:r.note}),T.jsx(Wt,{children:r.status==="검수요청"?"진행중":r.status==="검수중"?"검수 요청":r.status||"대기"}),T.jsx(Wt,{children:r.assigned_designer||"미배정"}),T.jsx(Wt,{children:r.manager_review_status==="검수완료"&&r.url||""}),T.jsx(Wt,{children:T.jsx(QM,{onClick:()=>s(r.id),children:"취소"})}),T.jsx(Wt,{children:T.jsx(YM,{children:"수정"})}),T.jsx(Wt,{children:r.manager_review_status==="검수완료"?r.status!=="완료"?T.jsx(GM,{onClick:()=>t(r.id),children:"검수완료"}):T.jsx($M,{children:"완료"}):""})]})}const GM=ie.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: ${({theme:r})=>r.colors.navy};
`,$M=ie.span`
  color: green;
  font-weight: bold;
`,YM=ie.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: ${({theme:r})=>r.colors.navy};
`,QM=ie.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.white01};
  background-color: ${({theme:r})=>r.colors.navy};
`,KM=ie.tr`
  ${({isCanceled:r})=>r&&`
      td {
        text-decoration: line-through;
        color: gray;
      }
    `}
`,Wt=ie.td`
  padding: 5px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
`,XM=ie.span`
  margin-right: 5px;
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
`;function WM({data:r,onReviewComplete:e,onCancel:t}){return T.jsx(ZM,{children:T.jsxs(JM,{children:[T.jsx(eV,{children:"요청 리스트"}),T.jsxs("colgroup",{children:[T.jsx("col",{style:{width:"50px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"120px"}}),T.jsx("col",{}),T.jsx("col",{}),T.jsx("col",{}),T.jsx("col",{style:{width:"100px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"80px"}})]}),T.jsx("thead",{children:T.jsxs("tr",{children:[T.jsx(Zt,{children:"NO"}),T.jsx(Zt,{children:"문서번호"}),T.jsx(Zt,{children:"요청일"}),T.jsx(Zt,{children:"요청자"}),T.jsxs(Zt,{children:["완료",T.jsx("br",{}),"요청일"]}),T.jsx(Zt,{children:"오픈일"}),T.jsx(Zt,{children:"업무형태"}),T.jsx(Zt,{children:"업무타입"}),T.jsx(Zt,{children:"작업항목"}),T.jsx(Zt,{children:"기획안 URL"}),T.jsx(Zt,{children:"메모"}),T.jsx(Zt,{children:"진행상태"}),T.jsxs(Zt,{children:["담당",T.jsx("br",{}),"디자이너"]}),T.jsx(Zt,{children:"산출물 URL"}),T.jsx(Zt,{children:"취소"}),T.jsx(Zt,{children:"수정"}),T.jsx(Zt,{children:"검수"})]})}),T.jsx("tbody",{children:r.length>0?r.map((s,o)=>T.jsx(FM,{index:o+1,item:s,onReviewComplete:e,onCancel:t},s.id)):T.jsx("tr",{children:T.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const ZM=ie.div`
  padding: 0 48px;
`,JM=ie.table`
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
`,eV=ie.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Zt=ie.th`
  border-bottom: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.white02};
`;function tV(){const r=new Date,e=r.getFullYear(),t=r.getMonth()+1;return T.jsx(nV,{children:T.jsxs(rV,{children:[e,"년 ",t,"월 디자인 편성 요청 스케줄"]})})}const nV=ie.div`
  padding: 35.5px 48px;
  background-color: ${({theme:r})=>r.colors.gray04};
`,rV=ie.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`;function iV(){const[r,e]=G.useState(""),[t,s]=G.useState([]);G.useEffect(()=>{const h=Uf(Ia,p=>{p&&p.displayName&&e(p.displayName)});return()=>h()},[]),G.useEffect(()=>{if(!r)return;const h=ba(Ei(rn,"design_request"),Ra("requester","==",r),wy("design_request_id","asc")),p=ld(h,m=>{const g=m.docs.map(_=>({id:_.id,..._.data()}));s(g)});return()=>p()},[r]);const o=async h=>{await Fu(Ri(rn,"design_request",h),{status:"완료",requester_review_status:"검수완료"}),s(p=>p.map(m=>m.id===h?{...m,status:"완료",requester_review_status:"검수완료"}:m)),alert("완료 처리되었습니다.")},u=async h=>{await Fu(Ri(rn,"design_request",h),{status:"취소"}),s(p=>p.map(m=>m.id===h?{...m,status:"취소"}:m))};return T.jsxs(T.Fragment,{children:[T.jsx(tV,{}),T.jsx(WM,{data:t,onReviewComplete:o,onCancel:u})]})}function sV({index:r,item:e,onChange:t,onSave:s}){const o=u=>{if(!u)return"-";if(u.toDate){const h=u.toDate();return`${h.getMonth()+1}/${h.getDate()}`}return u};return T.jsxs(oV,{isCanceled:e.status==="취소",children:[T.jsx(hn,{children:r}),T.jsx(hn,{children:e.design_request_id}),T.jsx(hn,{children:o(e.request_date)}),T.jsx(hn,{children:e.requester}),T.jsx(hn,{children:o(e.completion_dt)}),T.jsx(hn,{children:o(e.open_dt)}),T.jsx(hn,{children:e.task_form}),T.jsx(hn,{children:e.task_type}),T.jsxs(hn,{children:[e.emergency?T.jsx(lV,{children:"긴급"}):"",e.requirement]}),T.jsx(hn,{children:e.url?T.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.url}):""}),T.jsx(hn,{children:e.note||""}),T.jsx(hn,{children:T.jsx("input",{type:"date",onChange:u=>t(e.id,"start_dt",u.target.value),disabled:e.status==="취소"})}),T.jsx(hn,{children:T.jsx("input",{type:"date",onChange:u=>t(e.id,"end_dt",u.target.value),disabled:e.status==="취소"})}),T.jsx(hn,{children:T.jsx("input",{type:"text",placeholder:"산출물 URL을 입력해주세요.",onChange:u=>t(e.id,"result_url",u.target.value),disabled:e.status==="취소"})}),T.jsx(hn,{children:T.jsxs("select",{onChange:u=>t(e.id,"status",u.target.value),disabled:e.status==="취소",children:[T.jsx("option",{value:"대기중",children:"대기"}),T.jsx("option",{value:"진행중",children:"진행중"}),T.jsx("option",{value:"검수요청",children:"검수요청"})]})}),T.jsx(hn,{children:T.jsx(aV,{onClick:()=>s(e.id),disabled:e.status==="취소",children:"저장"})})]})}const aV=ie.button`
  padding: 6px 10px;
  background: #073863;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`,oV=ie.tr`
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
`,lV=ie.span`
  margin-right: 5px;
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
`;function uV({requests:r,onChange:e,onSave:t}){return T.jsxs(cV,{children:[T.jsxs("colgroup",{children:[T.jsx("col",{style:{width:"50px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"70px"}}),T.jsx("col",{style:{width:"90px"}}),T.jsx("col",{style:{width:"120px"}}),T.jsx("col",{}),T.jsx("col",{}),T.jsx("col",{}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"100px"}})]}),T.jsx("thead",{children:T.jsxs("tr",{children:[T.jsx(fn,{children:"NO"}),T.jsx(fn,{children:"문서번호"}),T.jsx(fn,{children:"요청일"}),T.jsx(fn,{children:"요청자"}),T.jsxs(fn,{children:["완료",T.jsx("br",{}),"요청일"]}),T.jsx(fn,{children:"오픈일"}),T.jsx(fn,{children:"업무형태"}),T.jsx(fn,{children:"업무타입"}),T.jsx(fn,{children:"작업항목"}),T.jsx(fn,{children:"기획안 URL"}),T.jsx(fn,{children:"메모"}),T.jsx(fn,{children:"디자인 시작일"}),T.jsx(fn,{children:"디자인 종료일"}),T.jsx(fn,{children:"산출물 링크"}),T.jsx(fn,{children:"진행상태"}),T.jsx(fn,{children:"저장"})]})}),T.jsx("tbody",{children:r.length>0?r.map((s,o)=>T.jsx(sV,{index:o+1,item:s,onChange:e,onSave:t},s.id)):T.jsx("tr",{children:T.jsx("td",{colSpan:16,style:{textAlign:"center"},children:"배정된 요청이 없습니다."})})})]})}const cV=ie.table`
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
`,fn=ie.th`
  border-bottom: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.white02};
`;function hV(){const[r,e]=G.useState([]),[t,s]=G.useState(""),[o,u]=G.useState({});G.useEffect(()=>{const g=Uf(Ia,_=>{_&&_.displayName&&s(_.displayName)});return()=>g()},[]),G.useEffect(()=>{if(!t)return;const g=ba(Ei(rn,"design_request"),Ra("assigned_designer","==",t),wy("design_request_id","asc")),_=ld(g,S=>{const A=S.docs.map(N=>({id:N.id,...N.data()}));e(A)});return()=>_()},[t]);const h=(g,_,S)=>{u(A=>({...A,[g]:{...A[g],[_]:S}}))},p=g=>g?nt.fromDate(new Date(g)):null,m=async g=>{const _=Ri(rn,"design_request",g),S=o[g];if(!S){alert("변경된 내용이 없습니다.");return}await Fu(_,{designer_start_date:p(S.start_dt),designer_end_date:p(S.end_dt),result_url:S.result_url||"",status:S.status}),alert("저장되었습니다.")};return T.jsxs(fV,{children:[T.jsx(dV,{children:"디자이너 화면"}),T.jsx(uV,{requests:r,formData:o,onChange:h,onSave:m})]})}const fV=ie.div``,dV=ie.h2`
  margin-bottom: 20px;
`;function pV({index:r,item:e,designerList:t,selectedDesigner:s,onDesignerSelect:o,onAssignDesigner:u,onSendToRequester:h}){const p=m=>{if(!m)return"-";if(m.toDate){const g=m.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return m};return T.jsxs(_V,{isCanceled:e.status==="취소",children:[T.jsx(Jt,{children:r}),T.jsx(Jt,{children:e.design_request_id}),T.jsx(Jt,{children:p(e.request_date)}),T.jsx(Jt,{children:e.requester}),T.jsx(Jt,{children:p(e.completion_dt)}),T.jsx(Jt,{children:p(e.open_dt)}),T.jsx(Jt,{children:e.task_form}),T.jsx(Jt,{children:e.task_type}),T.jsxs(Jt,{children:[e.emergency?T.jsx(EV,{children:"긴급"}):"",e.requirement]}),T.jsx(Jt,{children:e.url||""}),T.jsx(Jt,{children:e.note||""}),T.jsx(Jt,{children:e.status==="검수요청"?"검수중":e.status||"대기"}),T.jsx(Jt,{children:e.result_url||""}),T.jsx(Jt,{children:p(e.designer_start_date)}),T.jsx(Jt,{children:p(e.designer_end_date)}),T.jsxs(Jt,{children:[T.jsxs(gV,{value:s,onChange:m=>o(m.target.value),disabled:e.status==="취소",children:[T.jsx("option",{value:"",children:"디자이너 선택"}),t.map(m=>T.jsx("option",{value:m.name,children:m.name},m.id))]}),T.jsx(mV,{onClick:u,disabled:e.status==="취소",children:"배정"})]}),T.jsx(Jt,{children:e.status==="검수요청"&&e.manager_review_status!=="검수완료"?T.jsx(yV,{onClick:h,children:"완료"}):e.manager_review_status==="검수완료"?T.jsx(vV,{children:"완료"}):""})]})}const mV=ie.button`
  margin-left: 10px;
  margin-top: 6px;
  padding: 6px 10px;
  background: #073863;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`,gV=ie.select`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,yV=ie.button`
  padding: 6px 12px;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`,_V=ie.tr`
  ${({isCanceled:r})=>r&&`
      td {
        text-decoration: line-through;
        color: gray;
      }
    `}
`,Jt=ie.td`
  padding: 5px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
`,vV=ie.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`,EV=ie.span`
  margin-right: 5px;
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.red};
  color: ${({theme:r})=>r.colors.white01};
`;function TV({data:r,designerList:e,selectedDesigners:t,designerSelect:s,assignDesigner:o,sendToRequester:u}){return T.jsxs(SV,{children:[T.jsx(wV,{children:"매니저 요청 리스트"}),T.jsxs("colgroup",{children:[T.jsx("col",{style:{width:"50px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{style:{width:"120px"}}),T.jsx("col",{}),T.jsx("col",{}),T.jsx("col",{}),T.jsx("col",{style:{width:"80px"}}),T.jsx("col",{}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"60px"}}),T.jsx("col",{style:{width:"180px"}}),T.jsx("col",{style:{width:"60px"}})]}),T.jsx("thead",{children:T.jsxs("tr",{children:[T.jsx(en,{children:"NO"}),T.jsx(en,{children:"문서번호"}),T.jsx(en,{children:"요청일"}),T.jsx(en,{children:"요청자"}),T.jsxs(en,{children:["완료",T.jsx("br",{}),"요청일"]}),T.jsx(en,{children:"오픈일"}),T.jsx(en,{children:"업무형태"}),T.jsx(en,{children:"업무타입"}),T.jsx(en,{children:"작업항목"}),T.jsx(en,{children:"기획안 URL"}),T.jsx(en,{children:"메모"}),T.jsx(en,{children:"진행상태"}),T.jsx(en,{children:"산출물 URL"}),T.jsxs(en,{children:["디자인",T.jsx("br",{}),"시작일"]}),T.jsxs(en,{children:["디자인",T.jsx("br",{}),"종료일"]}),T.jsx(en,{children:"배정"}),T.jsx(en,{children:"검수"})]})}),T.jsx("tbody",{children:r.length>0?r.map((h,p)=>T.jsx(pV,{index:p+1,item:h,designerList:e,selectedDesigner:t[h.id]||"",onDesignerSelect:m=>s(h.id,m),onAssignDesigner:()=>o(h.id),onSendToRequester:()=>u(h.id)},h.id)):T.jsx("tr",{children:T.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})}const SV=ie.table`
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:r})=>r.colors.black};
`,wV=ie.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,en=ie.th`
  border-bottom: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({theme:r})=>r.colors.white02};
`;function AV(){const[r,e]=G.useState([]),[t,s]=G.useState([]),[o,u]=G.useState({});G.useEffect(()=>{const g=ba(Ei(rn,"design_request"),wy("design_request_id","asc")),_=ld(g,S=>{const A=S.docs.map(N=>({id:N.id,...N.data()}));e(A)});return()=>_()},[]),G.useEffect(()=>{(async()=>{const _=ba(Ei(rn,"users"),Ra("role","==",2)),A=(await eA(_)).docs.map(N=>({id:N.id,...N.data()}));s(A)})()},[]);const h=(g,_)=>{u(S=>({...S,[g]:_}))},p=async g=>{const _=o[g];if(!_){alert("디자이너를 선택하세요.");return}const S=Ri(rn,"design_request",g);await Fu(S,{assigned_designer:_}),alert("디자이너가 배정되었습니다!"),e(A=>A.map(N=>N.id===g?{...N,assigned_designer:_}:N))},m=async g=>{await Fu(Ri(rn,"design_request",g),{manager_review_status:"검수완료",status:"검수중"}),e(_=>_.map(S=>S.id===g?{...S,manager_review_status:"검수완료",status:"검수중"}:S)),alert("요청자에게 전달되었습니다.")};return T.jsxs(bV,{children:[T.jsx(RV,{children:"매니저 요청리스트"}),T.jsx(TV,{data:r,designerList:t,selectedDesigners:o,designerSelect:h,assignDesigner:p,sendToRequester:m})]})}const bV=ie.div``,RV=ie.h2`
  margin-bottom: 20px;
`;function IV({userRole:r}){const e=()=>{if(r===1)return T.jsx(iV,{});if(r===2)return T.jsx(hV,{});if(r===3)return T.jsx(AV,{})};return T.jsx(CV,{children:e()})}const CV=ie.main``,xV="./assets/aside-logo-DoEwMgfJ.svg",DV="./assets/myrequest-icon-DhmqrZY6.svg";function NV({item:r}){return T.jsxs(OV,{status:r.status,children:[T.jsx(MV,{children:r.status}),T.jsx(VV,{status:r.status,children:r.count})]})}const OV=ie.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20.5px 44px 20.5px 28px;
  margin-bottom: 8px;
  font-family: 'Pretendard';
  color: ${({theme:r})=>r.colors.black};

  background-color: ${({status:r,theme:e})=>{switch(r){case"대기중":return e.colors.beige;case"작업중":return e.colors.lightpupple;case"완료":return e.colors.gray04;default:return"#f9f9f9"}}};
`,MV=ie.span`
  font-size: 16px;
  font-weight: 400;
`,VV=ie.span`
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
`;function PV({requests:r,role:e,onRequestButtonClick:t}){const s=[{status:"대기중",count:r.filter(u=>u.status==="대기").length},{status:"작업중",count:r.filter(u=>u.status==="진행중").length},{status:"완료",count:r.filter(u=>u.status==="완료").length}],o=u=>{switch(u){case 1:return"나의 요청";case 2:return"나의 작업 현황";case 3:return"전체 요청 현황";default:return"요청 현황"}};return T.jsxs(kV,{children:[T.jsxs(LV,{children:[T.jsx(UV,{src:xV}),T.jsx(jV,{children:"업무 관리시스템"})]}),e===1&&T.jsx(zV,{children:T.jsx(qV,{onClick:t,children:"디자인 요청 등록"})}),T.jsxs(BV,{children:[T.jsxs(HV,{children:[T.jsx(FV,{src:DV}),T.jsx(GV,{children:o(e)})]}),T.jsx($V,{children:s.map(u=>T.jsx(NV,{item:u},u.status))})]})]})}const kV=ie.aside`
  max-width: 240px;
  height: 100%;
  border-right: 1px solid ${({theme:r})=>r.colors.black};
`,LV=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  padding: 20px 24px;
  border-bottom: 1px solid ${({theme:r})=>r.colors.gray02};
`,UV=ie.img`
  margin-right: 8px;
`,jV=ie.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
  white-space: nowrap;
`,zV=ie.div`
  padding: 32.5px 20px;
  border-bottom: 1px solid ${({theme:r})=>r.colors.gray02};
`,qV=ie.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
  white-space: nowrap;
`,BV=ie.div`
  padding: 0 24px;
`,HV=ie.div`
  ${({theme:r})=>r.mixin.flex("center")};
  gap: 12px;
  padding: 30px 0;
`,FV=ie.img``,GV=ie.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
`,$V=ie.ul`
  ${({theme:r})=>r.mixin.flex("center")};
  flex-direction: column;
`;function YV({isOpen:r,onClose:e,children:t}){return T.jsxs(T.Fragment,{children:[T.jsx(QV,{isVisible:r,onClick:e}),T.jsx(KV,{isVisible:r,onClick:s=>s.stopPropagation(),children:t})]})}const QV=ie.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({isVisible:r})=>r?1:0};
  pointer-events: ${({isVisible:r})=>r?"auto":"none"};
  transition: opacity 0.3s ease;
`,KV=ie.div`
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
`,XV="/assets/requestformexit-button-BcAG546a.svg";function WV({userName:r,onClose:e}){const[t,s]=G.useState({completionDt:"",openDt:"",taskForm:"GHS",taskType:"프론트테마",requirement:"",url:"",note:"",emergency:!1}),o=(h,p)=>{s(m=>({...m,[h]:p}))},u=async h=>{if(h.preventDefault(),!t.requirement){alert("요청 내용을 입력하세요.");return}const p=new Date,m=_=>_?nt.fromDate(new Date(_)):null,g=async()=>{const _=new Date,S=_.getFullYear().toString().slice(2),A=(_.getMonth()+1).toString().padStart(2,"0"),N=ba(Ei(rn,"design_request"),Ra("design_request_id",">=",`H${S}${A}000`),Ra("design_request_id","<",`H${S}${A}999`)),$=(await eA(N)).size+1;return`H${S}${A}${$.toString().padStart(3,"0")}`};vM(Ei(rn,"design_request"),{design_request_id:await g(),request_date:m(p.toISOString()),requester:r,completion_dt:m(t.completionDt),open_dt:m(t.openDt),task_form:t.taskForm,task_type:t.taskType,requirement:t.requirement,url:t.url,note:t.note,status:"대기",assigned_designer:"미배정",requester_review_status:"검수대기",manager_review_status:"",result_url:"",designer_start_date:null,designer_end_date:null,emergency:t.emergency,requester_edit_state:!1,designer_edit_state:!1,created_at:EM(),updated_at:null,delete_at:null}).then(()=>{alert("요청이 등록되었습니다!"),s({completionDt:"",openDt:"",taskForm:"GHS",taskType:"프론트테마",requirement:"",url:"",note:"",emergency:!1})}).catch(_=>{alert("등록 중 오류가 발생했습니다: "+_.message)})};return T.jsxs(T.Fragment,{children:[T.jsxs(JV,{children:[T.jsx(eP,{children:"디자인 요청 등록"}),T.jsx(tP,{type:"button",onClick:e})]}),T.jsxs(ZV,{onSubmit:u,children:[T.jsxs(nP,{children:[T.jsx(rP,{children:"디자인 요청 등록"}),T.jsx("colgroup",{children:T.jsx("col",{style:{width:"120px"}})}),T.jsxs("tbody",{children:[T.jsxs("tr",{children:[T.jsx(fi,{children:"문서번호"}),T.jsx(di,{})]}),T.jsxs("tr",{children:[T.jsx(fi,{children:T.jsx(is,{htmlFor:"completionDt",children:"요청 완료일"})}),T.jsx(di,{children:T.jsx("input",{type:"date",id:"completionDt",value:t.completionDt,onChange:h=>o("completionDt",h.target.value)})})]}),T.jsxs("tr",{children:[T.jsx(fi,{children:T.jsx(is,{htmlFor:"openDt",children:"오픈일"})}),T.jsx(di,{children:T.jsx("input",{type:"date",id:"openDt",value:t.openDt,onChange:h=>o("openDt",h.target.value)})})]}),T.jsxs("tr",{children:[T.jsx(fi,{children:T.jsx(is,{htmlFor:"taskForm",children:"업무형태"})}),T.jsx(di,{children:T.jsxs("select",{id:"taskForm",value:t.taskForm,onChange:h=>o("taskForm",h.target.value),children:[T.jsx("option",{value:"GHS",children:"GHS"}),T.jsx("option",{value:"MHC",children:"MHC"}),T.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),T.jsxs("tr",{children:[T.jsx(fi,{children:T.jsx(is,{htmlFor:"taskType",children:"업무타입"})}),T.jsx(di,{children:T.jsxs("select",{id:"taskType",value:t.taskType,onChange:h=>o("taskType",h.target.value),children:[T.jsx("option",{value:"프론트테마",children:"프론트테마"}),T.jsx("option",{value:"별도기획전",children:"별도기획전"}),T.jsx("option",{value:"일자별배너",children:"일자별배너"}),T.jsx("option",{value:"핫새배너",children:"핫새배너"}),T.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),T.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),T.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),T.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),T.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),T.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),T.jsx("option",{value:"상품상세",children:"상품상세"}),T.jsx("option",{value:"제휴",children:"제휴"}),T.jsx("option",{value:"클럽",children:"클럽"}),T.jsx("option",{value:"팝업",children:"팝업"}),T.jsx("option",{value:"푸시",children:"푸시"}),T.jsx("option",{value:"홈테마",children:"홈테마"}),T.jsx("option",{value:"즉시배송",children:"즉시배송"}),T.jsx("option",{value:"트레이딩",children:"트레이딩"}),T.jsx("option",{value:"이벤트",children:"이벤트"}),T.jsx("option",{value:"기타",children:"기타"})]})})]}),T.jsxs("tr",{children:[T.jsx(fi,{children:T.jsx(is,{htmlFor:"requirement",children:"작업 항목"})}),T.jsx(di,{children:T.jsx(Mm,{id:"requirement",value:t.requirement,onChange:h=>o("requirement",h.target.value),placeholder:"작업 항목을 입력하세요."})})]}),T.jsxs("tr",{children:[T.jsx(fi,{children:T.jsx(is,{htmlFor:"url",children:"요청 기획안 URL"})}),T.jsx(di,{children:T.jsx(Mm,{id:"url",value:t.url,onChange:h=>o("url",h.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),T.jsxs("tr",{children:[T.jsx(fi,{children:T.jsx(is,{htmlFor:"note",children:"메모"})}),T.jsx(di,{children:T.jsx(Mm,{id:"note",value:t.note,onChange:h=>o("note",h.target.value),placeholder:"메모를 입력하세요."})})]}),T.jsxs("tr",{children:[T.jsx(fi,{children:T.jsx(is,{htmlFor:"emergency",children:"긴급 일정"})}),T.jsx(di,{children:T.jsxs(aP,{children:[T.jsx("input",{type:"checkbox",id:"emergency",checked:t.emergency,onChange:h=>o("emergency",h.target.checked)}),T.jsx("span",{children:"긴급으로 설정"})]})})]})]})]}),T.jsx(iP,{children:T.jsx(sP,{type:"submit",children:"등록하기"})})]})]})}const ZV=ie.form`
  font-family: 'Pretendard';
`,JV=ie.div`
  ${({theme:r})=>r.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,eP=ie.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.black};
  letter-spacing: -2%;
`,tP=ie.button`
  width: 24px;
  height: 24px;
  background: url(${XV}) no-repeat center;
  background-size: contain;
`,nP=ie.table`
  width: 100%;
  color: ${({theme:r})=>r.colors.black};
`,rP=ie.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,fi=ie.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:r})=>r.colors.gray02};
  border-left: none;
  background-color: ${({theme:r})=>r.colors.gray04};
`,di=ie.td`
  padding: 16px;
`,is=ie.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`,iP=ie.div`
  text-align: center;
`,sP=ie.button`
  margin-top: 24px;
  padding: 13.5px 32.5px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 15px;
  background-color: ${({theme:r})=>r.colors.black};
  color: ${({theme:r})=>r.colors.white01};
`,Mm=ie.textarea`
  min-width: 200px;
  resize: none;
`,aP=ie.div`
  ${({theme:r})=>r.mixin.flex("center")};
  gap: 5px;
`;function oP(){const[r,e]=G.useState(null),[t,s]=G.useState([]),[o,u]=G.useState(""),[h,p]=G.useState(!1);return G.useEffect(()=>{const m=Uf(Ia,async g=>{if(g){u(g.displayName||"");const _=await Jw(Ri(rn,"users",g.uid));if(_.exists()){const A=_.data().role,N=g.displayName;e(A);let U;A===1?U=ba(Ei(rn,"design_request"),Ra("requester","==",N)):A===2?U=ba(Ei(rn,"design_request"),Ra("assigned_designer","==",N)):U=Ei(rn,"design_request"),ld(U,$=>{const H=$.docs.map(J=>({status:J.data().status||"대기중"}));s(H)})}}else e(null),u(""),s([])});return()=>m()},[]),T.jsxs(lP,{children:[T.jsx(PV,{requests:t,role:r,onRequestButtonClick:()=>p(!0)}),T.jsxs(uP,{children:[T.jsx(kM,{}),T.jsx(IV,{userRole:r})]}),T.jsx(YV,{isOpen:h,onClose:()=>p(!1),children:T.jsx(WV,{userName:o,onClose:()=>p(!1)})})]})}const lP=ie.div`
  ${({theme:r})=>r.mixin.flex()};
  width: 100%;
  height: 100%;
`,uP=ie.div`
  flex: 1;
`;function cP(){const[r,e]=G.useState(""),[t,s]=G.useState(""),[o,u]=G.useState(""),[h,p]=G.useState(""),m=$u(),g=async()=>{if(o!==h){alert("비밀번호가 일치하지 않습니다.");return}HD(Ia,t,o).then(async _=>{const S=_.user;await $D(S,{displayName:r}),await _M(Ri(rn,"users",S.uid),{name:r,role:2,createdAt:new Date})}).then(()=>{alert("회원가입이 완료되었습니다!"),m("/")}).catch(_=>{alert("회원가입 중 오류 발생: "+_.message)})};return T.jsx(hP,{children:T.jsxs(fP,{children:[T.jsxs(dP,{children:[T.jsx(pP,{children:"PDMS"}),T.jsx(mP,{children:"Pushcomz Design Management System"})]}),T.jsx(gP,{children:T.jsx(yP,{src:nA})}),T.jsxs(_P,{children:[T.jsx(vP,{type:"text",value:r,onChange:_=>e(_.target.value),placeholder:"이름을 입력해주세요."}),T.jsx(EP,{type:"text",value:t,onChange:_=>s(_.target.value),placeholder:"이메일을 입력해주세요."}),T.jsx(TP,{type:"password",value:o,onChange:_=>u(_.target.value),placeholder:"비밀번호를 입력해주세요."}),T.jsx(SP,{type:"password",value:h,onChange:_=>p(_.target.value),placeholder:"비밀번호 확인을 입력해주세요."})]}),T.jsx(wP,{onClick:g,children:"등록하기"})]})})}const hP=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:r})=>r.colors.gray01};
`,fP=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:r})=>r.colors.white01};
`,dP=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,pP=ie.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:r})=>r.colors.navy};
`,mP=ie.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,gP=ie.div`
  margin-right: auto;
`,yP=ie.img`
  
`,_P=ie.div`
  ${({theme:r})=>r.mixin.flex("center","center")};
  flex-direction: column;
  gap: 10px;
`,vP=ie.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,EP=ie.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,TP=ie.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,SP=ie.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,wP=ie.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:r})=>r.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:r})=>r.colors.white01};
`;function AP(){const[r,e]=G.useState(!1);return T.jsx(WR,{basename:"/pdms-test",children:T.jsxs(CR,{children:[T.jsx(jh,{path:"/",element:T.jsx(SM,{onLoginSuccess:()=>e(!0)})}),T.jsx(jh,{path:"/dashboard",element:r?T.jsx(oP,{}):T.jsx(RR,{to:"/"})}),T.jsx(jh,{path:"/signup",element:T.jsx(cP,{})})]})})}const bP="/assets/Pretendard-Regular-B2kfZGS5.ttf",RP="/assets/Pretendard-Bold-BIECnYSa.ttf",IP=lC`
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

  @font-face {
    font-family: 'Pretendard';
    src: url(${bP}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${RP}) format('truetype');
    font-weight: 700;
  }

`,CP={white01:"#fff",white02:"#f4f4f4",red:"#eb193a",navy:"#073863",beige:"#fff4ea",orange:"#f88017",lightpupple:"#eaedfa",blue:"#4f76ff",gray01:"#ECEDF0",gray02:"#ccc",gray03:"#bdbdbd",gray04:"#f4f4f4",black:"#212121"},xP={flex:(r="flex-start",e="flex-start")=>`
    display: flex;
    align-items: ${r};
    justify-content: ${e}
  `},DP={colors:CP,mixin:xP};Lb.createRoot(document.getElementById("root")).render(T.jsx(G.StrictMode,{children:T.jsxs(sC,{theme:DP,children:[T.jsx(AP,{}),T.jsx(IP,{})]})}));
