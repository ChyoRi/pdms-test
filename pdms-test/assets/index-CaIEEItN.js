(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function ax(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var pm={exports:{}},gu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function ox(){if(F0)return gu;F0=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:t,type:s,key:h,ref:o!==void 0?o:null,props:u}}return gu.Fragment=e,gu.jsx=n,gu.jsxs=n,gu}var G0;function lx(){return G0||(G0=1,pm.exports=ox()),pm.exports}var _=lx(),mm={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function ux(){if(Y0)return Ce;Y0=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,F={};function V(O,ie,oe){this.props=O,this.context=ie,this.refs=F,this.updater=oe||D}V.prototype.isReactComponent={},V.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},V.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function z(){}z.prototype=V.prototype;function j(O,ie,oe){this.props=O,this.context=ie,this.refs=F,this.updater=oe||D}var X=j.prototype=new z;X.constructor=j,P(X,V.prototype),X.isPureReactComponent=!0;var ae=Array.isArray,le={H:null,A:null,T:null,S:null,V:null},fe=Object.prototype.hasOwnProperty;function C(O,ie,oe,se,ge,Re){return oe=Re.ref,{$$typeof:t,type:O,key:ie,ref:oe!==void 0?oe:null,props:Re}}function x(O,ie){return C(O.type,ie,void 0,void 0,void 0,O.props)}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===t}function k(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(oe){return ie[oe]})}var L=/\/+/g;function q(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):ie.toString(36)}function N(){}function Dt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function at(O,ie,oe,se,ge){var Re=typeof O;(Re==="undefined"||Re==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(Re){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case t:case e:ve=!0;break;case E:return ve=O._init,at(ve(O._payload),ie,oe,se,ge)}}if(ve)return ge=ge(O),ve=se===""?"."+q(O,0):se,ae(ge)?(oe="",ve!=null&&(oe=ve.replace(L,"$&/")+"/"),at(ge,ie,oe,"",function(jt){return jt})):ge!=null&&(R(ge)&&(ge=x(ge,oe+(ge.key==null||O&&O.key===ge.key?"":(""+ge.key).replace(L,"$&/")+"/")+ve)),ie.push(ge)),1;ve=0;var ct=se===""?".":se+":";if(ae(O))for(var Be=0;Be<O.length;Be++)se=O[Be],Re=ct+q(se,Be),ve+=at(se,ie,oe,Re,ge);else if(Be=w(O),typeof Be=="function")for(O=Be.call(O),Be=0;!(se=O.next()).done;)se=se.value,Re=ct+q(se,Be++),ve+=at(se,ie,oe,Re,ge);else if(Re==="object"){if(typeof O.then=="function")return at(Dt(O),ie,oe,se,ge);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Z(O,ie,oe){if(O==null)return O;var se=[],ge=0;return at(O,se,"","",function(Re){return ie.call(oe,Re,ge++)}),se}function ce(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(oe){(O._status===0||O._status===-1)&&(O._status=1,O._result=oe)},function(oe){(O._status===0||O._status===-1)&&(O._status=2,O._result=oe)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var me=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ie(){}return Ce.Children={map:Z,forEach:function(O,ie,oe){Z(O,function(){ie.apply(this,arguments)},oe)},count:function(O){var ie=0;return Z(O,function(){ie++}),ie},toArray:function(O){return Z(O,function(ie){return ie})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ce.Component=V,Ce.Fragment=n,Ce.Profiler=o,Ce.PureComponent=j,Ce.StrictMode=s,Ce.Suspense=m,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(O){return le.H.useMemoCache(O)}},Ce.cache=function(O){return function(){return O.apply(null,arguments)}},Ce.cloneElement=function(O,ie,oe){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var se=P({},O.props),ge=O.key,Re=void 0;if(ie!=null)for(ve in ie.ref!==void 0&&(Re=void 0),ie.key!==void 0&&(ge=""+ie.key),ie)!fe.call(ie,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&ie.ref===void 0||(se[ve]=ie[ve]);var ve=arguments.length-2;if(ve===1)se.children=oe;else if(1<ve){for(var ct=Array(ve),Be=0;Be<ve;Be++)ct[Be]=arguments[Be+2];se.children=ct}return C(O.type,ge,void 0,void 0,Re,se)},Ce.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},Ce.createElement=function(O,ie,oe){var se,ge={},Re=null;if(ie!=null)for(se in ie.key!==void 0&&(Re=""+ie.key),ie)fe.call(ie,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ge[se]=ie[se]);var ve=arguments.length-2;if(ve===1)ge.children=oe;else if(1<ve){for(var ct=Array(ve),Be=0;Be<ve;Be++)ct[Be]=arguments[Be+2];ge.children=ct}if(O&&O.defaultProps)for(se in ve=O.defaultProps,ve)ge[se]===void 0&&(ge[se]=ve[se]);return C(O,Re,void 0,void 0,null,ge)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(O){return{$$typeof:p,render:O}},Ce.isValidElement=R,Ce.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:ce}},Ce.memo=function(O,ie){return{$$typeof:g,type:O,compare:ie===void 0?null:ie}},Ce.startTransition=function(O){var ie=le.T,oe={};le.T=oe;try{var se=O(),ge=le.S;ge!==null&&ge(oe,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(Ie,me)}catch(Re){me(Re)}finally{le.T=ie}},Ce.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},Ce.use=function(O){return le.H.use(O)},Ce.useActionState=function(O,ie,oe){return le.H.useActionState(O,ie,oe)},Ce.useCallback=function(O,ie){return le.H.useCallback(O,ie)},Ce.useContext=function(O){return le.H.useContext(O)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(O,ie){return le.H.useDeferredValue(O,ie)},Ce.useEffect=function(O,ie,oe){var se=le.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(O,ie)},Ce.useId=function(){return le.H.useId()},Ce.useImperativeHandle=function(O,ie,oe){return le.H.useImperativeHandle(O,ie,oe)},Ce.useInsertionEffect=function(O,ie){return le.H.useInsertionEffect(O,ie)},Ce.useLayoutEffect=function(O,ie){return le.H.useLayoutEffect(O,ie)},Ce.useMemo=function(O,ie){return le.H.useMemo(O,ie)},Ce.useOptimistic=function(O,ie){return le.H.useOptimistic(O,ie)},Ce.useReducer=function(O,ie,oe){return le.H.useReducer(O,ie,oe)},Ce.useRef=function(O){return le.H.useRef(O)},Ce.useState=function(O){return le.H.useState(O)},Ce.useSyncExternalStore=function(O,ie,oe){return le.H.useSyncExternalStore(O,ie,oe)},Ce.useTransition=function(){return le.H.useTransition()},Ce.version="19.1.0",Ce}var Q0;function wg(){return Q0||(Q0=1,mm.exports=ux()),mm.exports}var Y=wg();const ur=ax(Y);var gm={exports:{}},yu={},ym={exports:{}},_m={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function cx(){return K0||(K0=1,function(t){function e(Z,ce){var me=Z.length;Z.push(ce);e:for(;0<me;){var Ie=me-1>>>1,O=Z[Ie];if(0<o(O,ce))Z[Ie]=ce,Z[me]=O,me=Ie;else break e}}function n(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ce=Z[0],me=Z.pop();if(me!==ce){Z[0]=me;e:for(var Ie=0,O=Z.length,ie=O>>>1;Ie<ie;){var oe=2*(Ie+1)-1,se=Z[oe],ge=oe+1,Re=Z[ge];if(0>o(se,me))ge<O&&0>o(Re,se)?(Z[Ie]=Re,Z[ge]=me,Ie=ge):(Z[Ie]=se,Z[oe]=me,Ie=oe);else if(ge<O&&0>o(Re,me))Z[Ie]=Re,Z[ge]=me,Ie=ge;else break e}}return ce}function o(Z,ce){var me=Z.sortIndex-ce.sortIndex;return me!==0?me:Z.id-ce.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();t.unstable_now=function(){return h.now()-p}}var m=[],g=[],E=1,S=null,w=3,D=!1,P=!1,F=!1,V=!1,z=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function ae(Z){for(var ce=n(g);ce!==null;){if(ce.callback===null)s(g);else if(ce.startTime<=Z)s(g),ce.sortIndex=ce.expirationTime,e(m,ce);else break;ce=n(g)}}function le(Z){if(F=!1,ae(Z),!P)if(n(m)!==null)P=!0,fe||(fe=!0,q());else{var ce=n(g);ce!==null&&at(le,ce.startTime-Z)}}var fe=!1,C=-1,x=5,R=-1;function k(){return V?!0:!(t.unstable_now()-R<x)}function L(){if(V=!1,fe){var Z=t.unstable_now();R=Z;var ce=!0;try{e:{P=!1,F&&(F=!1,j(C),C=-1),D=!0;var me=w;try{t:{for(ae(Z),S=n(m);S!==null&&!(S.expirationTime>Z&&k());){var Ie=S.callback;if(typeof Ie=="function"){S.callback=null,w=S.priorityLevel;var O=Ie(S.expirationTime<=Z);if(Z=t.unstable_now(),typeof O=="function"){S.callback=O,ae(Z),ce=!0;break t}S===n(m)&&s(m),ae(Z)}else s(m);S=n(m)}if(S!==null)ce=!0;else{var ie=n(g);ie!==null&&at(le,ie.startTime-Z),ce=!1}}break e}finally{S=null,w=me,D=!1}ce=void 0}}finally{ce?q():fe=!1}}}var q;if(typeof X=="function")q=function(){X(L)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,Dt=N.port2;N.port1.onmessage=L,q=function(){Dt.postMessage(null)}}else q=function(){z(L,0)};function at(Z,ce){C=z(function(){Z(t.unstable_now())},ce)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Z){Z.callback=null},t.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<Z?Math.floor(1e3/Z):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_next=function(Z){switch(w){case 1:case 2:case 3:var ce=3;break;default:ce=w}var me=w;w=ce;try{return Z()}finally{w=me}},t.unstable_requestPaint=function(){V=!0},t.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var me=w;w=Z;try{return ce()}finally{w=me}},t.unstable_scheduleCallback=function(Z,ce,me){var Ie=t.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Ie+me:Ie):me=Ie,Z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=me+O,Z={id:E++,callback:ce,priorityLevel:Z,startTime:me,expirationTime:O,sortIndex:-1},me>Ie?(Z.sortIndex=me,e(g,Z),n(m)===null&&Z===n(g)&&(F?(j(C),C=-1):F=!0,at(le,me-Ie))):(Z.sortIndex=O,e(m,Z),P||D||(P=!0,fe||(fe=!0,q()))),Z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(Z){var ce=w;return function(){var me=w;w=ce;try{return Z.apply(this,arguments)}finally{w=me}}}}(_m)),_m}var X0;function hx(){return X0||(X0=1,ym.exports=cx()),ym.exports}var vm={exports:{}},ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function fx(){if(W0)return ln;W0=1;var t=wg();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:m,containerInfo:g,implementation:E}}var h=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ln.createPortal=function(m,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,E)},ln.flushSync=function(m){var g=h.T,E=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=g,s.p=E,s.d.f()}},ln.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},ln.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var E=g.as,S=p(E,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:D}):E==="script"&&s.d.X(m,{crossOrigin:S,integrity:w,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ln.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=p(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},ln.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,S=p(E,g.crossOrigin);s.d.L(m,E,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ln.preloadModule=function(m,g){if(typeof m=="string")if(g){var E=p(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},ln.requestFormReset=function(m){s.d.r(m)},ln.unstable_batchedUpdates=function(m,g){return m(g)},ln.useFormState=function(m,g,E){return h.H.useFormState(m,g,E)},ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},ln.version="19.1.0",ln}var Z0;function dx(){if(Z0)return vm.exports;Z0=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),vm.exports=fx(),vm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function px(){if(J0)return yu;J0=1;var t=hx(),e=wg(),n=dx();function s(r){var i="https://react.dev/errors/"+r;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function u(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function h(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function p(r){if(u(r)!==r)throw Error(s(188))}function m(r){var i=r.alternate;if(!i){if(i=u(r),i===null)throw Error(s(188));return i!==r?null:r}for(var a=r,l=i;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return p(f),r;if(d===l)return p(f),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=d;else{for(var T=!1,b=f.child;b;){if(b===a){T=!0,a=f,l=d;break}if(b===l){T=!0,l=f,a=d;break}b=b.sibling}if(!T){for(b=d.child;b;){if(b===a){T=!0,a=d,l=f;break}if(b===l){T=!0,l=d,a=f;break}b=b.sibling}if(!T)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?r:i}function g(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r;for(r=r.child;r!==null;){if(i=g(r),i!==null)return i;r=r.sibling}return null}var E=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),j=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),L=Symbol.iterator;function q(r){return r===null||typeof r!="object"?null:(r=L&&r[L]||r["@@iterator"],typeof r=="function"?r:null)}var N=Symbol.for("react.client.reference");function Dt(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===N?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case V:return"Profiler";case F:return"StrictMode";case le:return"Suspense";case fe:return"SuspenseList";case R:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case D:return"Portal";case X:return(r.displayName||"Context")+".Provider";case j:return(r._context.displayName||"Context")+".Consumer";case ae:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case C:return i=r.displayName||null,i!==null?i:Dt(r.type)||"Memo";case x:i=r._payload,r=r._init;try{return Dt(r(i))}catch{}}return null}var at=Array.isArray,Z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Ie=[],O=-1;function ie(r){return{current:r}}function oe(r){0>O||(r.current=Ie[O],Ie[O]=null,O--)}function se(r,i){O++,Ie[O]=r.current,r.current=i}var ge=ie(null),Re=ie(null),ve=ie(null),ct=ie(null);function Be(r,i){switch(se(ve,i),se(Re,r),se(ge,null),i.nodeType){case 9:case 11:r=(r=i.documentElement)&&(r=r.namespaceURI)?v0(r):0;break;default:if(r=i.tagName,i=i.namespaceURI)i=v0(i),r=E0(i,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}oe(ge),se(ge,r)}function jt(){oe(ge),oe(Re),oe(ve)}function jn(r){r.memoizedState!==null&&se(ct,r);var i=ge.current,a=E0(i,r.type);i!==a&&(se(Re,r),se(ge,a))}function En(r){Re.current===r&&(oe(ge),oe(Re)),ct.current===r&&(oe(ct),hu._currentValue=me)}var sn=Object.prototype.hasOwnProperty,Ds=t.unstable_scheduleCallback,Ns=t.unstable_cancelCallback,ll=t.unstable_shouldYield,lc=t.unstable_requestPaint,Un=t.unstable_now,pd=t.unstable_getCurrentPriorityLevel,ul=t.unstable_ImmediatePriority,Ma=t.unstable_UserBlockingPriority,Os=t.unstable_NormalPriority,md=t.unstable_LowPriority,Pa=t.unstable_IdlePriority,cl=t.log,uc=t.unstable_setDisableYieldValue,dt=null,Qe=null;function xn(r){if(typeof cl=="function"&&uc(r),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(dt,r)}catch{}}var an=Math.clz32?Math.clz32:ks,cc=Math.log,gd=Math.LN2;function ks(r){return r>>>=0,r===0?32:31-(cc(r)/gd|0)|0}var Ms=256,Ps=4194304;function nr(r){var i=r&42;if(i!==0)return i;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Va(r,i,a){var l=r.pendingLanes;if(l===0)return 0;var f=0,d=r.suspendedLanes,T=r.pingedLanes;r=r.warmLanes;var b=l&134217727;return b!==0?(l=b&~d,l!==0?f=nr(l):(T&=b,T!==0?f=nr(T):a||(a=b&~r,a!==0&&(f=nr(a))))):(b=l&~d,b!==0?f=nr(b):T!==0?f=nr(T):a||(a=l&~r,a!==0&&(f=nr(a)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:f}function Vs(r,i){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&i)===0}function hl(r,i){switch(r){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fl(){var r=Ms;return Ms<<=1,(Ms&4194048)===0&&(Ms=256),r}function dl(){var r=Ps;return Ps<<=1,(Ps&62914560)===0&&(Ps=4194304),r}function Fr(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function Gr(r,i){r.pendingLanes|=i,i!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function pl(r,i,a,l,f,d){var T=r.pendingLanes;r.pendingLanes=a,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=a,r.entangledLanes&=a,r.errorRecoveryDisabledLanes&=a,r.shellSuspendCounter=0;var b=r.entanglements,I=r.expirationTimes,G=r.hiddenUpdates;for(a=T&~a;0<a;){var J=31-an(a),ne=1<<J;b[J]=0,I[J]=-1;var Q=G[J];if(Q!==null)for(G[J]=null,J=0;J<Q.length;J++){var K=Q[J];K!==null&&(K.lane&=-536870913)}a&=~ne}l!==0&&_r(r,l,0),d!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=d&~(T&~i))}function _r(r,i,a){r.pendingLanes|=i,r.suspendedLanes&=~i;var l=31-an(i);r.entangledLanes|=i,r.entanglements[l]=r.entanglements[l]|1073741824|a&4194090}function ml(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var l=31-an(a),f=1<<l;f&i|r[l]&i&&(r[l]|=i),a&=~f}}function Ni(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function La(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function Oi(){var r=ce.p;return r!==0?r:(r=window.event,r===void 0?32:U0(r.type))}function hc(r,i){var a=ce.p;try{return ce.p=r,i()}finally{ce.p=a}}var ot=Math.random().toString(36).slice(2),Nt="__reactFiber$"+ot,Tt="__reactProps$"+ot,qn="__reactContainer$"+ot,gl="__reactEvents$"+ot,yd="__reactListeners$"+ot,ki="__reactHandles$"+ot,fc="__reactResources$"+ot,Ls="__reactMarker$"+ot;function Mi(r){delete r[Nt],delete r[Tt],delete r[gl],delete r[yd],delete r[ki]}function Yr(r){var i=r[Nt];if(i)return i;for(var a=r.parentNode;a;){if(i=a[qn]||a[Nt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=S0(r);r!==null;){if(a=r[Nt])return a;r=S0(r)}return i}r=a,a=r.parentNode}return null}function vr(r){if(r=r[Nt]||r[qn]){var i=r.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return r}return null}function Er(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r.stateNode;throw Error(s(33))}function gn(r){var i=r[fc];return i||(i=r[fc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function yt(r){r[Ls]=!0}var yl=new Set,ja={};function rr(r,i){Qr(r,i),Qr(r+"Capture",i)}function Qr(r,i){for(ja[r]=i,r=0;r<i.length;r++)yl.add(i[r])}var dc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pc={},js={};function mc(r){return sn.call(js,r)?!0:sn.call(pc,r)?!1:dc.test(r)?js[r]=!0:(pc[r]=!0,!1)}function Pi(r,i,a){if(mc(i))if(a===null)r.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":r.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){r.removeAttribute(i);return}}r.setAttribute(i,""+a)}}function Tr(r,i,a){if(a===null)r.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(i);return}r.setAttribute(i,""+a)}}function Kt(r,i,a,l){if(l===null)r.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttributeNS(i,a,""+l)}}var Us,gc;function Kr(r){if(Us===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Us=i&&i[1]||"",gc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Us+r+gc}var Ua=!1;function qa(r,i){if(!r||Ua)return"";Ua=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(K){var Q=K}Reflect.construct(r,[],ne)}else{try{ne.call()}catch(K){Q=K}r.call(ne.prototype)}}else{try{throw Error()}catch(K){Q=K}(ne=r())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(K){if(K&&Q&&typeof K.stack=="string")return[K.stack,Q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),T=d[0],b=d[1];if(T&&b){var I=T.split(`
`),G=b.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<G.length&&!G[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===G.length)for(l=I.length-1,f=G.length-1;1<=l&&0<=f&&I[l]!==G[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==G[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==G[f]){var J=`
`+I[l].replace(" at new "," at ");return r.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",r.displayName)),J}while(1<=l&&0<=f);break}}}finally{Ua=!1,Error.prepareStackTrace=a}return(a=r?r.displayName||r.name:"")?Kr(a):""}function _l(r){switch(r.tag){case 26:case 27:case 5:return Kr(r.type);case 16:return Kr("Lazy");case 13:return Kr("Suspense");case 19:return Kr("SuspenseList");case 0:case 15:return qa(r.type,!1);case 11:return qa(r.type.render,!1);case 1:return qa(r.type,!0);case 31:return Kr("Activity");default:return""}}function za(r){try{var i="";do i+=_l(r),r=r.return;while(r);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function yn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function vl(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _d(r){var i=vl(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),l=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){l=""+T,d.call(this,T)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(T){l=""+T},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function Ba(r){r._valueTracker||(r._valueTracker=_d(r))}function El(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return r&&(l=vl(r)?r.checked?"true":"false":r.value),r=l,r!==a?(i.setValue(r),!0):!1}function qs(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var vd=/[\n"\\]/g;function bt(r){return r.replace(vd,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Rn(r,i,a,l,f,d,T,b){r.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?r.type=T:r.removeAttribute("type"),i!=null?T==="number"?(i===0&&r.value===""||r.value!=i)&&(r.value=""+yn(i)):r.value!==""+yn(i)&&(r.value=""+yn(i)):T!=="submit"&&T!=="reset"||r.removeAttribute("value"),i!=null?Vi(r,T,yn(i)):a!=null?Vi(r,T,yn(a)):l!=null&&r.removeAttribute("value"),f==null&&d!=null&&(r.defaultChecked=!!d),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?r.name=""+yn(b):r.removeAttribute("name")}function zs(r,i,a,l,f,d,T,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(r.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+yn(a):"",i=i!=null?""+yn(i):a,b||i===r.value||(r.value=i),r.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,r.checked=b?r.checked:!!l,r.defaultChecked=!!l,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(r.name=T)}function Vi(r,i,a){i==="number"&&qs(r.ownerDocument)===r||r.defaultValue===""+a||(r.defaultValue=""+a)}function Xr(r,i,a,l){if(r=r.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=i.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&l&&(r[a].defaultSelected=!0)}else{for(a=""+yn(a),i=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,l&&(r[f].defaultSelected=!0);return}i!==null||r[f].disabled||(i=r[f])}i!==null&&(i.selected=!0)}}function We(r,i,a){if(i!=null&&(i=""+yn(i),i!==r.value&&(r.value=i),a==null)){r.defaultValue!==i&&(r.defaultValue=i);return}r.defaultValue=a!=null?""+yn(a):""}function Bs(r,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(at(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=yn(i),r.defaultValue=a,l=r.textContent,l===a&&l!==""&&l!==null&&(r.value=l)}function zn(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var $s=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yc(r,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?r.setProperty(i,""):i==="float"?r.cssFloat="":r[i]="":l?r.setProperty(i,a):typeof a!="number"||a===0||$s.has(i)?i==="float"?r.cssFloat=a:r[i]=(""+a).trim():r[i]=a+"px"}function Tl(r,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(r=r.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?r.setProperty(l,""):l==="float"?r.cssFloat="":r[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&a[f]!==l&&yc(r,f,l)}else for(var d in i)i.hasOwnProperty(d)&&yc(r,d,i[d])}function bl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ed=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Td=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $a(r){return Td.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Wr=null;function Bn(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Zr=null,Jr=null;function wl(r){var i=vr(r);if(i&&(r=i.stateNode)){var a=r[Tt]||null;e:switch(r=i.stateNode,i.type){case"input":if(Rn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==r&&l.form===r.form){var f=l[Tt]||null;if(!f)throw Error(s(90));Rn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===r.form&&El(l)}break e;case"textarea":We(r,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Xr(r,!!a.multiple,i,!1)}}}var br=!1;function _c(r,i,a){if(br)return r(i,a);br=!0;try{var l=r(i);return l}finally{if(br=!1,(Zr!==null||Jr!==null)&&(hh(),Zr&&(i=Zr,r=Jr,Jr=Zr=null,wl(i),r)))for(i=0;i<r.length;i++)wl(r[i])}}function Hs(r,i){var a=r.stateNode;if(a===null)return null;var l=a[Tt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$n=!1;if(ir)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){$n=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{$n=!1}var wr=null,Li=null,ei=null;function Sl(){if(ei)return ei;var r,i=Li,a=i.length,l,f="value"in wr?wr.value:wr.textContent,d=f.length;for(r=0;r<a&&i[r]===f[r];r++);var T=a-r;for(l=1;l<=T&&i[a-l]===f[d-l];l++);return ei=f.slice(r,1<l?1-l:void 0)}function Sr(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Ar(){return!0}function Al(){return!1}function Ut(r){function i(a,l,f,d,T){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=T,this.currentTarget=null;for(var b in r)r.hasOwnProperty(b)&&(a=r[b],this[b]=a?a(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ar:Al,this.isPropagationStopped=Al,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),i}var Fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ha=Ut(Fe),Gs=E({},Fe,{view:0,detail:0}),vc=Ut(Gs),Fa,Ga,xr,Ys=E({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==xr&&(xr&&r.type==="mousemove"?(Fa=r.screenX-xr.screenX,Ga=r.screenY-xr.screenY):Ga=Fa=0,xr=r),Fa)},movementY:function(r){return"movementY"in r?r.movementY:Ga}}),Hn=Ut(Ys),Ec=E({},Ys,{dataTransfer:0}),bd=Ut(Ec),Qs=E({},Gs,{relatedTarget:0}),Ya=Ut(Qs),xl=E({},Fe,{animationName:0,elapsedTime:0,pseudoElement:0}),Qa=Ut(xl),Tc=E({},Fe,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Ka=Ut(Tc),wd=E({},Fe,{data:0}),Rl=Ut(wd),Ks={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Il(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=wc[r])?!!i[r]:!1}function Xs(){return Il}var Sc=E({},Gs,{key:function(r){if(r.key){var i=Ks[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Sr(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?bc[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(r){return r.type==="keypress"?Sr(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Sr(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Xa=Ut(Sc),Ac=E({},Ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cl=Ut(Ac),ti=E({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),xc=Ut(ti),Rc=E({},Fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ic=Ut(Rc),Cc=E({},Ys,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Wa=Ut(Cc),_n=E({},Fe,{newState:0,oldState:0}),Dc=Ut(_n),Nc=[9,13,27,32],Rr=ir&&"CompositionEvent"in window,c=null;ir&&"documentMode"in document&&(c=document.documentMode);var y=ir&&"TextEvent"in window&&!c,v=ir&&(!Rr||c&&8<c&&11>=c),A=" ",B=!1;function W(r,i){switch(r){case"keyup":return Nc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ue(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var je=!1;function Ot(r,i){switch(r){case"compositionend":return ue(i);case"keypress":return i.which!==32?null:(B=!0,A);case"textInput":return r=i.data,r===A&&B?null:r;default:return null}}function Ue(r,i){if(je)return r==="compositionend"||!Rr&&W(r,i)?(r=Sl(),ei=Li=wr=null,je=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v&&i.locale!=="ko"?null:i.data;default:return null}}var qt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kt(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!qt[r.type]:i==="textarea"}function ni(r,i,a,l){Zr?Jr?Jr.push(l):Jr=[l]:Zr=l,i=yh(i,"onChange"),0<i.length&&(a=new Ha("onChange","change",null,a,l),r.push({event:a,listeners:i}))}var Xt=null,Ir=null;function Dl(r){p0(r,0)}function Oc(r){var i=Er(r);if(El(i))return r}function Py(r,i){if(r==="change")return i}var Vy=!1;if(ir){var Sd;if(ir){var Ad="oninput"in document;if(!Ad){var Ly=document.createElement("div");Ly.setAttribute("oninput","return;"),Ad=typeof Ly.oninput=="function"}Sd=Ad}else Sd=!1;Vy=Sd&&(!document.documentMode||9<document.documentMode)}function jy(){Xt&&(Xt.detachEvent("onpropertychange",Uy),Ir=Xt=null)}function Uy(r){if(r.propertyName==="value"&&Oc(Ir)){var i=[];ni(i,Ir,r,Bn(r)),_c(Dl,i)}}function VS(r,i,a){r==="focusin"?(jy(),Xt=i,Ir=a,Xt.attachEvent("onpropertychange",Uy)):r==="focusout"&&jy()}function LS(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Oc(Ir)}function jS(r,i){if(r==="click")return Oc(i)}function US(r,i){if(r==="input"||r==="change")return Oc(i)}function qS(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var In=typeof Object.is=="function"?Object.is:qS;function Nl(r,i){if(In(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!sn.call(i,f)||!In(r[f],i[f]))return!1}return!0}function qy(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function zy(r,i){var a=qy(r);r=0;for(var l;a;){if(a.nodeType===3){if(l=r+a.textContent.length,r<=i&&l>=i)return{node:a,offset:i-r};r=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qy(a)}}function By(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?By(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function $y(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var i=qs(r.document);i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=qs(r.document)}return i}function xd(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}var zS=ir&&"documentMode"in document&&11>=document.documentMode,Za=null,Rd=null,Ol=null,Id=!1;function Hy(r,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Id||Za==null||Za!==qs(l)||(l=Za,"selectionStart"in l&&xd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ol&&Nl(Ol,l)||(Ol=l,l=yh(Rd,"onSelect"),0<l.length&&(i=new Ha("onSelect","select",null,i,a),r.push({event:i,listeners:l}),i.target=Za)))}function Ws(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var Ja={animationend:Ws("Animation","AnimationEnd"),animationiteration:Ws("Animation","AnimationIteration"),animationstart:Ws("Animation","AnimationStart"),transitionrun:Ws("Transition","TransitionRun"),transitionstart:Ws("Transition","TransitionStart"),transitioncancel:Ws("Transition","TransitionCancel"),transitionend:Ws("Transition","TransitionEnd")},Cd={},Fy={};ir&&(Fy=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function Zs(r){if(Cd[r])return Cd[r];if(!Ja[r])return r;var i=Ja[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in Fy)return Cd[r]=i[a];return r}var Gy=Zs("animationend"),Yy=Zs("animationiteration"),Qy=Zs("animationstart"),BS=Zs("transitionrun"),$S=Zs("transitionstart"),HS=Zs("transitioncancel"),Ky=Zs("transitionend"),Xy=new Map,Dd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dd.push("scrollEnd");function sr(r,i){Xy.set(r,i),rr(i,[r])}var Wy=new WeakMap;function Fn(r,i){if(typeof r=="object"&&r!==null){var a=Wy.get(r);return a!==void 0?a:(i={value:r,source:i,stack:za(i)},Wy.set(r,i),i)}return{value:r,source:i,stack:za(i)}}var Gn=[],eo=0,Nd=0;function kc(){for(var r=eo,i=Nd=eo=0;i<r;){var a=Gn[i];Gn[i++]=null;var l=Gn[i];Gn[i++]=null;var f=Gn[i];Gn[i++]=null;var d=Gn[i];if(Gn[i++]=null,l!==null&&f!==null){var T=l.pending;T===null?f.next=f:(f.next=T.next,T.next=f),l.pending=f}d!==0&&Zy(a,f,d)}}function Mc(r,i,a,l){Gn[eo++]=r,Gn[eo++]=i,Gn[eo++]=a,Gn[eo++]=l,Nd|=l,r.lanes|=l,r=r.alternate,r!==null&&(r.lanes|=l)}function Od(r,i,a,l){return Mc(r,i,a,l),Pc(r)}function to(r,i){return Mc(r,null,null,i),Pc(r)}function Zy(r,i,a){r.lanes|=a;var l=r.alternate;l!==null&&(l.lanes|=a);for(var f=!1,d=r.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(r=d.stateNode,r===null||r._visibility&1||(f=!0)),r=d,d=d.return;return r.tag===3?(d=r.stateNode,f&&i!==null&&(f=31-an(a),r=d.hiddenUpdates,l=r[f],l===null?r[f]=[i]:l.push(i),i.lane=a|536870912),d):null}function Pc(r){if(50<ru)throw ru=0,jp=null,Error(s(185));for(var i=r.return;i!==null;)r=i,i=r.return;return r.tag===3?r.stateNode:null}var no={};function FS(r,i,a,l){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(r,i,a,l){return new FS(r,i,a,l)}function kd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function ri(r,i){var a=r.alternate;return a===null?(a=Cn(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&65011712,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a.refCleanup=r.refCleanup,a}function Jy(r,i){r.flags&=65011714;var a=r.alternate;return a===null?(r.childLanes=0,r.lanes=i,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,i=a.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),r}function Vc(r,i,a,l,f,d){var T=0;if(l=r,typeof r=="function")kd(r)&&(T=1);else if(typeof r=="string")T=YA(r,a,ge.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case R:return r=Cn(31,a,i,f),r.elementType=R,r.lanes=d,r;case P:return Js(a.children,f,d,i);case F:T=8,f|=24;break;case V:return r=Cn(12,a,i,f|2),r.elementType=V,r.lanes=d,r;case le:return r=Cn(13,a,i,f),r.elementType=le,r.lanes=d,r;case fe:return r=Cn(19,a,i,f),r.elementType=fe,r.lanes=d,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case z:case X:T=10;break e;case j:T=9;break e;case ae:T=11;break e;case C:T=14;break e;case x:T=16,l=null;break e}T=29,a=Error(s(130,r===null?"null":typeof r,"")),l=null}return i=Cn(T,a,i,f),i.elementType=r,i.type=l,i.lanes=d,i}function Js(r,i,a,l){return r=Cn(7,r,l,i),r.lanes=a,r}function Md(r,i,a){return r=Cn(6,r,null,i),r.lanes=a,r}function Pd(r,i,a){return i=Cn(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}var ro=[],io=0,Lc=null,jc=0,Yn=[],Qn=0,ea=null,ii=1,si="";function ta(r,i){ro[io++]=jc,ro[io++]=Lc,Lc=r,jc=i}function e_(r,i,a){Yn[Qn++]=ii,Yn[Qn++]=si,Yn[Qn++]=ea,ea=r;var l=ii;r=si;var f=32-an(l)-1;l&=~(1<<f),a+=1;var d=32-an(i)+f;if(30<d){var T=f-f%5;d=(l&(1<<T)-1).toString(32),l>>=T,f-=T,ii=1<<32-an(i)+f|a<<f|l,si=d+r}else ii=1<<d|a<<f|l,si=r}function Vd(r){r.return!==null&&(ta(r,1),e_(r,1,0))}function Ld(r){for(;r===Lc;)Lc=ro[--io],ro[io]=null,jc=ro[--io],ro[io]=null;for(;r===ea;)ea=Yn[--Qn],Yn[Qn]=null,si=Yn[--Qn],Yn[Qn]=null,ii=Yn[--Qn],Yn[Qn]=null}var vn=null,pt=null,He=!1,na=null,Cr=!1,jd=Error(s(519));function ra(r){var i=Error(s(418,""));throw Pl(Fn(i,r)),jd}function t_(r){var i=r.stateNode,a=r.type,l=r.memoizedProps;switch(i[Nt]=r,i[Tt]=l,a){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(a=0;a<su.length;a++)Me(su[a],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),zs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ba(i);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),Bs(i,l.value,l.defaultValue,l.children),Ba(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||_0(i.textContent,a)?(l.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),l.onScroll!=null&&Me("scroll",i),l.onScrollEnd!=null&&Me("scrollend",i),l.onClick!=null&&(i.onclick=_h),i=!0):i=!1,i||ra(r)}function n_(r){for(vn=r.return;vn;)switch(vn.tag){case 5:case 13:Cr=!1;return;case 27:case 3:Cr=!0;return;default:vn=vn.return}}function kl(r){if(r!==vn)return!1;if(!He)return n_(r),He=!0,!1;var i=r.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=r.type,a=!(a!=="form"&&a!=="button")||em(r.type,r.memoizedProps)),a=!a),a&&pt&&ra(r),n_(r),i===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8)if(a=r.data,a==="/$"){if(i===0){pt=or(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;r=r.nextSibling}pt=null}}else i===27?(i=pt,Ji(r.type)?(r=im,im=null,pt=r):pt=i):pt=vn?or(r.stateNode.nextSibling):null;return!0}function Ml(){pt=vn=null,He=!1}function r_(){var r=na;return r!==null&&(wn===null?wn=r:wn.push.apply(wn,r),na=null),r}function Pl(r){na===null?na=[r]:na.push(r)}var Ud=ie(null),ia=null,ai=null;function ji(r,i,a){se(Ud,i._currentValue),i._currentValue=a}function oi(r){r._currentValue=Ud.current,oe(Ud)}function qd(r,i,a){for(;r!==null;){var l=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),r===a)break;r=r.return}}function zd(r,i,a,l){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var d=f.dependencies;if(d!==null){var T=f.child;d=d.firstContext;e:for(;d!==null;){var b=d;d=f;for(var I=0;I<i.length;I++)if(b.context===i[I]){d.lanes|=a,b=d.alternate,b!==null&&(b.lanes|=a),qd(d.return,a,r),l||(T=null);break e}d=b.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(s(341));T.lanes|=a,d=T.alternate,d!==null&&(d.lanes|=a),qd(T,a,r),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===r){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function Vl(r,i,a,l){r=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(s(387));if(T=T.memoizedProps,T!==null){var b=f.type;In(f.pendingProps.value,T.value)||(r!==null?r.push(b):r=[b])}}else if(f===ct.current){if(T=f.alternate,T===null)throw Error(s(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(hu):r=[hu])}f=f.return}r!==null&&zd(i,r,a,l),i.flags|=262144}function Uc(r){for(r=r.firstContext;r!==null;){if(!In(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function sa(r){ia=r,ai=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function on(r){return i_(ia,r)}function qc(r,i){return ia===null&&sa(r),i_(r,i)}function i_(r,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ai===null){if(r===null)throw Error(s(308));ai=i,r.dependencies={lanes:0,firstContext:i},r.flags|=524288}else ai=ai.next=i;return a}var GS=typeof AbortController<"u"?AbortController:function(){var r=[],i=this.signal={aborted:!1,addEventListener:function(a,l){r.push(l)}};this.abort=function(){i.aborted=!0,r.forEach(function(a){return a()})}},YS=t.unstable_scheduleCallback,QS=t.unstable_NormalPriority,Mt={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bd(){return{controller:new GS,data:new Map,refCount:0}}function Ll(r){r.refCount--,r.refCount===0&&YS(QS,function(){r.controller.abort()})}var jl=null,$d=0,so=0,ao=null;function KS(r,i){if(jl===null){var a=jl=[];$d=0,so=Fp(),ao={status:"pending",value:void 0,then:function(l){a.push(l)}}}return $d++,i.then(s_,s_),i}function s_(){if(--$d===0&&jl!==null){ao!==null&&(ao.status="fulfilled");var r=jl;jl=null,so=0,ao=null;for(var i=0;i<r.length;i++)(0,r[i])()}}function XS(r,i){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return r.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var a_=Z.S;Z.S=function(r,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&KS(r,i),a_!==null&&a_(r,i)};var aa=ie(null);function Hd(){var r=aa.current;return r!==null?r:rt.pooledCache}function zc(r,i){i===null?se(aa,aa.current):se(aa,i.pool)}function o_(){var r=Hd();return r===null?null:{parent:Mt._currentValue,pool:r}}var Ul=Error(s(460)),l_=Error(s(474)),Bc=Error(s(542)),Fd={then:function(){}};function u_(r){return r=r.status,r==="fulfilled"||r==="rejected"}function $c(){}function c_(r,i,a){switch(a=r[a],a===void 0?r.push(i):a!==i&&(i.then($c,$c),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,f_(r),r;default:if(typeof i.status=="string")i.then($c,$c);else{if(r=rt,r!==null&&100<r.shellSuspendCounter)throw Error(s(482));r=i,r.status="pending",r.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,f_(r),r}throw ql=i,Ul}}var ql=null;function h_(){if(ql===null)throw Error(s(459));var r=ql;return ql=null,r}function f_(r){if(r===Ul||r===Bc)throw Error(s(483))}var Ui=!1;function Gd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yd(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function qi(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function zi(r,i,a){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,(Ke&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Pc(r),Zy(r,null,a),i}return Mc(r,l,i,a),Pc(r)}function zl(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=r.pendingLanes,a|=l,i.lanes=a,ml(r,a)}}function Qd(r,i){var a=r.updateQueue,l=r.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var T={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=T:d=d.next=T,a=a.next}while(a!==null);d===null?f=d=i:d=d.next=i}else f=d=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}var Kd=!1;function Bl(){if(Kd){var r=ao;if(r!==null)throw r}}function $l(r,i,a,l){Kd=!1;var f=r.updateQueue;Ui=!1;var d=f.firstBaseUpdate,T=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var I=b,G=I.next;I.next=null,T===null?d=G:T.next=G,T=I;var J=r.alternate;J!==null&&(J=J.updateQueue,b=J.lastBaseUpdate,b!==T&&(b===null?J.firstBaseUpdate=G:b.next=G,J.lastBaseUpdate=I))}if(d!==null){var ne=f.baseState;T=0,J=G=I=null,b=d;do{var Q=b.lane&-536870913,K=Q!==b.lane;if(K?(qe&Q)===Q:(l&Q)===Q){Q!==0&&Q===so&&(Kd=!0),J!==null&&(J=J.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Se=r,Ee=b;Q=i;var et=a;switch(Ee.tag){case 1:if(Se=Ee.payload,typeof Se=="function"){ne=Se.call(et,ne,Q);break e}ne=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=Ee.payload,Q=typeof Se=="function"?Se.call(et,ne,Q):Se,Q==null)break e;ne=E({},ne,Q);break e;case 2:Ui=!0}}Q=b.callback,Q!==null&&(r.flags|=64,K&&(r.flags|=8192),K=f.callbacks,K===null?f.callbacks=[Q]:K.push(Q))}else K={lane:Q,tag:b.tag,payload:b.payload,callback:b.callback,next:null},J===null?(G=J=K,I=ne):J=J.next=K,T|=Q;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;K=b,b=K.next,K.next=null,f.lastBaseUpdate=K,f.shared.pending=null}}while(!0);J===null&&(I=ne),f.baseState=I,f.firstBaseUpdate=G,f.lastBaseUpdate=J,d===null&&(f.shared.lanes=0),Ki|=T,r.lanes=T,r.memoizedState=ne}}function d_(r,i){if(typeof r!="function")throw Error(s(191,r));r.call(i)}function p_(r,i){var a=r.callbacks;if(a!==null)for(r.callbacks=null,r=0;r<a.length;r++)d_(a[r],i)}var oo=ie(null),Hc=ie(0);function m_(r,i){r=pi,se(Hc,r),se(oo,i),pi=r|i.baseLanes}function Xd(){se(Hc,pi),se(oo,oo.current)}function Wd(){pi=Hc.current,oe(oo),oe(Hc)}var Bi=0,Ne=null,Ze=null,wt=null,Fc=!1,lo=!1,oa=!1,Gc=0,Hl=0,uo=null,WS=0;function _t(){throw Error(s(321))}function Zd(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!In(r[a],i[a]))return!1;return!0}function Jd(r,i,a,l,f,d){return Bi=d,Ne=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Z.H=r===null||r.memoizedState===null?Z_:J_,oa=!1,d=a(l,f),oa=!1,lo&&(d=y_(i,a,l,f)),g_(r),d}function g_(r){Z.H=Zc;var i=Ze!==null&&Ze.next!==null;if(Bi=0,wt=Ze=Ne=null,Fc=!1,Hl=0,uo=null,i)throw Error(s(300));r===null||zt||(r=r.dependencies,r!==null&&Uc(r)&&(zt=!0))}function y_(r,i,a,l){Ne=r;var f=0;do{if(lo&&(uo=null),Hl=0,lo=!1,25<=f)throw Error(s(301));if(f+=1,wt=Ze=null,r.updateQueue!=null){var d=r.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Z.H=iA,d=i(a,l)}while(lo);return d}function ZS(){var r=Z.H,i=r.useState()[0];return i=typeof i.then=="function"?Fl(i):i,r=r.useState()[0],(Ze!==null?Ze.memoizedState:null)!==r&&(Ne.flags|=1024),i}function ep(){var r=Gc!==0;return Gc=0,r}function tp(r,i,a){i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~a}function np(r){if(Fc){for(r=r.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fc=!1}Bi=0,wt=Ze=Ne=null,lo=!1,Hl=Gc=0,uo=null}function Tn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ne.memoizedState=wt=r:wt=wt.next=r,wt}function St(){if(Ze===null){var r=Ne.alternate;r=r!==null?r.memoizedState:null}else r=Ze.next;var i=wt===null?Ne.memoizedState:wt.next;if(i!==null)wt=i,Ze=r;else{if(r===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));Ze=r,r={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},wt===null?Ne.memoizedState=wt=r:wt=wt.next=r}return wt}function rp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(r){var i=Hl;return Hl+=1,uo===null&&(uo=[]),r=c_(uo,r,i),i=Ne,(wt===null?i.memoizedState:wt.next)===null&&(i=i.alternate,Z.H=i===null||i.memoizedState===null?Z_:J_),r}function Yc(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Fl(r);if(r.$$typeof===X)return on(r)}throw Error(s(438,String(r)))}function ip(r){var i=null,a=Ne.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=rp(),Ne.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(r),l=0;l<r;l++)a[l]=k;return i.index++,a}function li(r,i){return typeof i=="function"?i(r):i}function Qc(r){var i=St();return sp(i,Ze,r)}function sp(r,i,a){var l=r.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=r.baseQueue,d=l.pending;if(d!==null){if(f!==null){var T=f.next;f.next=d.next,d.next=T}i.baseQueue=f=d,l.pending=null}if(d=r.baseState,f===null)r.memoizedState=d;else{i=f.next;var b=T=null,I=null,G=i,J=!1;do{var ne=G.lane&-536870913;if(ne!==G.lane?(qe&ne)===ne:(Bi&ne)===ne){var Q=G.revertLane;if(Q===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),ne===so&&(J=!0);else if((Bi&Q)===Q){G=G.next,Q===so&&(J=!0);continue}else ne={lane:0,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},I===null?(b=I=ne,T=d):I=I.next=ne,Ne.lanes|=Q,Ki|=Q;ne=G.action,oa&&a(d,ne),d=G.hasEagerState?G.eagerState:a(d,ne)}else Q={lane:ne,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},I===null?(b=I=Q,T=d):I=I.next=Q,Ne.lanes|=ne,Ki|=ne;G=G.next}while(G!==null&&G!==i);if(I===null?T=d:I.next=b,!In(d,r.memoizedState)&&(zt=!0,J&&(a=ao,a!==null)))throw a;r.memoizedState=d,r.baseState=T,r.baseQueue=I,l.lastRenderedState=d}return f===null&&(l.lanes=0),[r.memoizedState,l.dispatch]}function ap(r){var i=St(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=r;var l=a.dispatch,f=a.pending,d=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do d=r(d,T.action),T=T.next;while(T!==f);In(d,i.memoizedState)||(zt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function __(r,i,a){var l=Ne,f=St(),d=He;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var T=!In((Ze||f).memoizedState,a);T&&(f.memoizedState=a,zt=!0),f=f.queue;var b=T_.bind(null,l,f,r);if(Gl(2048,8,b,[r]),f.getSnapshot!==i||T||wt!==null&&wt.memoizedState.tag&1){if(l.flags|=2048,co(9,Kc(),E_.bind(null,l,f,a,i),null),rt===null)throw Error(s(349));d||(Bi&124)!==0||v_(l,i,a)}return a}function v_(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=Ne.updateQueue,i===null?(i=rp(),Ne.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function E_(r,i,a,l){i.value=a,i.getSnapshot=l,b_(i)&&w_(r)}function T_(r,i,a){return a(function(){b_(i)&&w_(r)})}function b_(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!In(r,a)}catch{return!0}}function w_(r){var i=to(r,2);i!==null&&Mn(i,r,2)}function op(r){var i=Tn();if(typeof r=="function"){var a=r;if(r=a(),oa){xn(!0);try{a()}finally{xn(!1)}}}return i.memoizedState=i.baseState=r,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:r},i}function S_(r,i,a,l){return r.baseState=a,sp(r,Ze,typeof l=="function"?l:li)}function JS(r,i,a,l,f){if(Wc(r))throw Error(s(485));if(r=i.action,r!==null){var d={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){d.listeners.push(T)}};Z.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,A_(i,d)):(d.next=a.next,i.pending=a.next=d)}}function A_(r,i){var a=i.action,l=i.payload,f=r.state;if(i.isTransition){var d=Z.T,T={};Z.T=T;try{var b=a(f,l),I=Z.S;I!==null&&I(T,b),x_(r,i,b)}catch(G){lp(r,i,G)}finally{Z.T=d}}else try{d=a(f,l),x_(r,i,d)}catch(G){lp(r,i,G)}}function x_(r,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){R_(r,i,l)},function(l){return lp(r,i,l)}):R_(r,i,a)}function R_(r,i,a){i.status="fulfilled",i.value=a,I_(i),r.state=a,i=r.pending,i!==null&&(a=i.next,a===i?r.pending=null:(a=a.next,i.next=a,A_(r,a)))}function lp(r,i,a){var l=r.pending;if(r.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,I_(i),i=i.next;while(i!==l)}r.action=null}function I_(r){r=r.listeners;for(var i=0;i<r.length;i++)(0,r[i])()}function C_(r,i){return i}function D_(r,i){if(He){var a=rt.formState;if(a!==null){e:{var l=Ne;if(He){if(pt){t:{for(var f=pt,d=Cr;f.nodeType!==8;){if(!d){f=null;break t}if(f=or(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){pt=or(f.nextSibling),l=f.data==="F!";break e}}ra(l)}l=!1}l&&(i=a[0])}}return a=Tn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:C_,lastRenderedState:i},a.queue=l,a=K_.bind(null,Ne,l),l.dispatch=a,l=op(!1),d=dp.bind(null,Ne,!1,l.queue),l=Tn(),f={state:i,dispatch:null,action:r,pending:null},l.queue=f,a=JS.bind(null,Ne,f,d,a),f.dispatch=a,l.memoizedState=r,[i,a,!1]}function N_(r){var i=St();return O_(i,Ze,r)}function O_(r,i,a){if(i=sp(r,i,C_)[0],r=Qc(li)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Fl(i)}catch(T){throw T===Ul?Bc:T}else l=i;i=St();var f=i.queue,d=f.dispatch;return a!==i.memoizedState&&(Ne.flags|=2048,co(9,Kc(),eA.bind(null,f,a),null)),[l,d,r]}function eA(r,i){r.action=i}function k_(r){var i=St(),a=Ze;if(a!==null)return O_(i,a,r);St(),i=i.memoizedState,a=St();var l=a.queue.dispatch;return a.memoizedState=r,[i,l,!1]}function co(r,i,a,l){return r={tag:r,create:a,deps:l,inst:i,next:null},i=Ne.updateQueue,i===null&&(i=rp(),Ne.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=r.next=r:(l=a.next,a.next=r,r.next=l,i.lastEffect=r),r}function Kc(){return{destroy:void 0,resource:void 0}}function M_(){return St().memoizedState}function Xc(r,i,a,l){var f=Tn();l=l===void 0?null:l,Ne.flags|=r,f.memoizedState=co(1|i,Kc(),a,l)}function Gl(r,i,a,l){var f=St();l=l===void 0?null:l;var d=f.memoizedState.inst;Ze!==null&&l!==null&&Zd(l,Ze.memoizedState.deps)?f.memoizedState=co(i,d,a,l):(Ne.flags|=r,f.memoizedState=co(1|i,d,a,l))}function P_(r,i){Xc(8390656,8,r,i)}function V_(r,i){Gl(2048,8,r,i)}function L_(r,i){return Gl(4,2,r,i)}function j_(r,i){return Gl(4,4,r,i)}function U_(r,i){if(typeof i=="function"){r=r();var a=i(r);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function q_(r,i,a){a=a!=null?a.concat([r]):null,Gl(4,4,U_.bind(null,i,r),a)}function up(){}function z_(r,i){var a=St();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Zd(i,l[1])?l[0]:(a.memoizedState=[r,i],r)}function B_(r,i){var a=St();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Zd(i,l[1]))return l[0];if(l=r(),oa){xn(!0);try{r()}finally{xn(!1)}}return a.memoizedState=[l,i],l}function cp(r,i,a){return a===void 0||(Bi&1073741824)!==0?r.memoizedState=i:(r.memoizedState=a,r=Fv(),Ne.lanes|=r,Ki|=r,a)}function $_(r,i,a,l){return In(a,i)?a:oo.current!==null?(r=cp(r,a,l),In(r,i)||(zt=!0),r):(Bi&42)===0?(zt=!0,r.memoizedState=a):(r=Fv(),Ne.lanes|=r,Ki|=r,i)}function H_(r,i,a,l,f){var d=ce.p;ce.p=d!==0&&8>d?d:8;var T=Z.T,b={};Z.T=b,dp(r,!1,i,a);try{var I=f(),G=Z.S;if(G!==null&&G(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var J=XS(I,l);Yl(r,i,J,kn(r))}else Yl(r,i,l,kn(r))}catch(ne){Yl(r,i,{then:function(){},status:"rejected",reason:ne},kn())}finally{ce.p=d,Z.T=T}}function tA(){}function hp(r,i,a,l){if(r.tag!==5)throw Error(s(476));var f=F_(r).queue;H_(r,f,i,me,a===null?tA:function(){return G_(r),a(l)})}function F_(r){var i=r.memoizedState;if(i!==null)return i;i={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:me},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:a},next:null},r.memoizedState=i,r=r.alternate,r!==null&&(r.memoizedState=i),i}function G_(r){var i=F_(r).next.queue;Yl(r,i,{},kn())}function fp(){return on(hu)}function Y_(){return St().memoizedState}function Q_(){return St().memoizedState}function nA(r){for(var i=r.return;i!==null;){switch(i.tag){case 24:case 3:var a=kn();r=qi(a);var l=zi(i,r,a);l!==null&&(Mn(l,i,a),zl(l,i,a)),i={cache:Bd()},r.payload=i;return}i=i.return}}function rA(r,i,a){var l=kn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Wc(r)?X_(i,a):(a=Od(r,i,a,l),a!==null&&(Mn(a,r,l),W_(a,i,l)))}function K_(r,i,a){var l=kn();Yl(r,i,a,l)}function Yl(r,i,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wc(r))X_(i,f);else{var d=r.alternate;if(r.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var T=i.lastRenderedState,b=d(T,a);if(f.hasEagerState=!0,f.eagerState=b,In(b,T))return Mc(r,i,f,0),rt===null&&kc(),!1}catch{}finally{}if(a=Od(r,i,f,l),a!==null)return Mn(a,r,l),W_(a,i,l),!0}return!1}function dp(r,i,a,l){if(l={lane:2,revertLane:Fp(),action:l,hasEagerState:!1,eagerState:null,next:null},Wc(r)){if(i)throw Error(s(479))}else i=Od(r,a,l,2),i!==null&&Mn(i,r,2)}function Wc(r){var i=r.alternate;return r===Ne||i!==null&&i===Ne}function X_(r,i){lo=Fc=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function W_(r,i,a){if((a&4194048)!==0){var l=i.lanes;l&=r.pendingLanes,a|=l,i.lanes=a,ml(r,a)}}var Zc={readContext:on,use:Yc,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t},Z_={readContext:on,use:Yc,useCallback:function(r,i){return Tn().memoizedState=[r,i===void 0?null:i],r},useContext:on,useEffect:P_,useImperativeHandle:function(r,i,a){a=a!=null?a.concat([r]):null,Xc(4194308,4,U_.bind(null,i,r),a)},useLayoutEffect:function(r,i){return Xc(4194308,4,r,i)},useInsertionEffect:function(r,i){Xc(4,2,r,i)},useMemo:function(r,i){var a=Tn();i=i===void 0?null:i;var l=r();if(oa){xn(!0);try{r()}finally{xn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(r,i,a){var l=Tn();if(a!==void 0){var f=a(i);if(oa){xn(!0);try{a(i)}finally{xn(!1)}}}else f=i;return l.memoizedState=l.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},l.queue=r,r=r.dispatch=rA.bind(null,Ne,r),[l.memoizedState,r]},useRef:function(r){var i=Tn();return r={current:r},i.memoizedState=r},useState:function(r){r=op(r);var i=r.queue,a=K_.bind(null,Ne,i);return i.dispatch=a,[r.memoizedState,a]},useDebugValue:up,useDeferredValue:function(r,i){var a=Tn();return cp(a,r,i)},useTransition:function(){var r=op(!1);return r=H_.bind(null,Ne,r.queue,!0,!1),Tn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,i,a){var l=Ne,f=Tn();if(He){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),rt===null)throw Error(s(349));(qe&124)!==0||v_(l,i,a)}f.memoizedState=a;var d={value:a,getSnapshot:i};return f.queue=d,P_(T_.bind(null,l,d,r),[r]),l.flags|=2048,co(9,Kc(),E_.bind(null,l,d,a,i),null),a},useId:function(){var r=Tn(),i=rt.identifierPrefix;if(He){var a=si,l=ii;a=(l&~(1<<32-an(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Gc++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=WS++,i="«"+i+"r"+a.toString(32)+"»";return r.memoizedState=i},useHostTransitionStatus:fp,useFormState:D_,useActionState:D_,useOptimistic:function(r){var i=Tn();i.memoizedState=i.baseState=r;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=dp.bind(null,Ne,!0,a),a.dispatch=i,[r,i]},useMemoCache:ip,useCacheRefresh:function(){return Tn().memoizedState=nA.bind(null,Ne)}},J_={readContext:on,use:Yc,useCallback:z_,useContext:on,useEffect:V_,useImperativeHandle:q_,useInsertionEffect:L_,useLayoutEffect:j_,useMemo:B_,useReducer:Qc,useRef:M_,useState:function(){return Qc(li)},useDebugValue:up,useDeferredValue:function(r,i){var a=St();return $_(a,Ze.memoizedState,r,i)},useTransition:function(){var r=Qc(li)[0],i=St().memoizedState;return[typeof r=="boolean"?r:Fl(r),i]},useSyncExternalStore:__,useId:Y_,useHostTransitionStatus:fp,useFormState:N_,useActionState:N_,useOptimistic:function(r,i){var a=St();return S_(a,Ze,r,i)},useMemoCache:ip,useCacheRefresh:Q_},iA={readContext:on,use:Yc,useCallback:z_,useContext:on,useEffect:V_,useImperativeHandle:q_,useInsertionEffect:L_,useLayoutEffect:j_,useMemo:B_,useReducer:ap,useRef:M_,useState:function(){return ap(li)},useDebugValue:up,useDeferredValue:function(r,i){var a=St();return Ze===null?cp(a,r,i):$_(a,Ze.memoizedState,r,i)},useTransition:function(){var r=ap(li)[0],i=St().memoizedState;return[typeof r=="boolean"?r:Fl(r),i]},useSyncExternalStore:__,useId:Y_,useHostTransitionStatus:fp,useFormState:k_,useActionState:k_,useOptimistic:function(r,i){var a=St();return Ze!==null?S_(a,Ze,r,i):(a.baseState=r,[r,a.queue.dispatch])},useMemoCache:ip,useCacheRefresh:Q_},ho=null,Ql=0;function Jc(r){var i=Ql;return Ql+=1,ho===null&&(ho=[]),c_(ho,r,i)}function Kl(r,i){i=i.props.ref,r.ref=i!==void 0?i:null}function eh(r,i){throw i.$$typeof===S?Error(s(525)):(r=Object.prototype.toString.call(i),Error(s(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r)))}function ev(r){var i=r._init;return i(r._payload)}function tv(r){function i(U,M){if(r){var $=U.deletions;$===null?(U.deletions=[M],U.flags|=16):$.push(M)}}function a(U,M){if(!r)return null;for(;M!==null;)i(U,M),M=M.sibling;return null}function l(U){for(var M=new Map;U!==null;)U.key!==null?M.set(U.key,U):M.set(U.index,U),U=U.sibling;return M}function f(U,M){return U=ri(U,M),U.index=0,U.sibling=null,U}function d(U,M,$){return U.index=$,r?($=U.alternate,$!==null?($=$.index,$<M?(U.flags|=67108866,M):$):(U.flags|=67108866,M)):(U.flags|=1048576,M)}function T(U){return r&&U.alternate===null&&(U.flags|=67108866),U}function b(U,M,$,ee){return M===null||M.tag!==6?(M=Md($,U.mode,ee),M.return=U,M):(M=f(M,$),M.return=U,M)}function I(U,M,$,ee){var pe=$.type;return pe===P?J(U,M,$.props.children,ee,$.key):M!==null&&(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===x&&ev(pe)===M.type)?(M=f(M,$.props),Kl(M,$),M.return=U,M):(M=Vc($.type,$.key,$.props,null,U.mode,ee),Kl(M,$),M.return=U,M)}function G(U,M,$,ee){return M===null||M.tag!==4||M.stateNode.containerInfo!==$.containerInfo||M.stateNode.implementation!==$.implementation?(M=Pd($,U.mode,ee),M.return=U,M):(M=f(M,$.children||[]),M.return=U,M)}function J(U,M,$,ee,pe){return M===null||M.tag!==7?(M=Js($,U.mode,ee,pe),M.return=U,M):(M=f(M,$),M.return=U,M)}function ne(U,M,$){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Md(""+M,U.mode,$),M.return=U,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case w:return $=Vc(M.type,M.key,M.props,null,U.mode,$),Kl($,M),$.return=U,$;case D:return M=Pd(M,U.mode,$),M.return=U,M;case x:var ee=M._init;return M=ee(M._payload),ne(U,M,$)}if(at(M)||q(M))return M=Js(M,U.mode,$,null),M.return=U,M;if(typeof M.then=="function")return ne(U,Jc(M),$);if(M.$$typeof===X)return ne(U,qc(U,M),$);eh(U,M)}return null}function Q(U,M,$,ee){var pe=M!==null?M.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return pe!==null?null:b(U,M,""+$,ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case w:return $.key===pe?I(U,M,$,ee):null;case D:return $.key===pe?G(U,M,$,ee):null;case x:return pe=$._init,$=pe($._payload),Q(U,M,$,ee)}if(at($)||q($))return pe!==null?null:J(U,M,$,ee,null);if(typeof $.then=="function")return Q(U,M,Jc($),ee);if($.$$typeof===X)return Q(U,M,qc(U,$),ee);eh(U,$)}return null}function K(U,M,$,ee,pe){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return U=U.get($)||null,b(M,U,""+ee,pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:return U=U.get(ee.key===null?$:ee.key)||null,I(M,U,ee,pe);case D:return U=U.get(ee.key===null?$:ee.key)||null,G(M,U,ee,pe);case x:var Oe=ee._init;return ee=Oe(ee._payload),K(U,M,$,ee,pe)}if(at(ee)||q(ee))return U=U.get($)||null,J(M,U,ee,pe,null);if(typeof ee.then=="function")return K(U,M,$,Jc(ee),pe);if(ee.$$typeof===X)return K(U,M,$,qc(M,ee),pe);eh(M,ee)}return null}function Se(U,M,$,ee){for(var pe=null,Oe=null,ye=M,Te=M=0,$t=null;ye!==null&&Te<$.length;Te++){ye.index>Te?($t=ye,ye=null):$t=ye.sibling;var $e=Q(U,ye,$[Te],ee);if($e===null){ye===null&&(ye=$t);break}r&&ye&&$e.alternate===null&&i(U,ye),M=d($e,M,Te),Oe===null?pe=$e:Oe.sibling=$e,Oe=$e,ye=$t}if(Te===$.length)return a(U,ye),He&&ta(U,Te),pe;if(ye===null){for(;Te<$.length;Te++)ye=ne(U,$[Te],ee),ye!==null&&(M=d(ye,M,Te),Oe===null?pe=ye:Oe.sibling=ye,Oe=ye);return He&&ta(U,Te),pe}for(ye=l(ye);Te<$.length;Te++)$t=K(ye,U,Te,$[Te],ee),$t!==null&&(r&&$t.alternate!==null&&ye.delete($t.key===null?Te:$t.key),M=d($t,M,Te),Oe===null?pe=$t:Oe.sibling=$t,Oe=$t);return r&&ye.forEach(function(is){return i(U,is)}),He&&ta(U,Te),pe}function Ee(U,M,$,ee){if($==null)throw Error(s(151));for(var pe=null,Oe=null,ye=M,Te=M=0,$t=null,$e=$.next();ye!==null&&!$e.done;Te++,$e=$.next()){ye.index>Te?($t=ye,ye=null):$t=ye.sibling;var is=Q(U,ye,$e.value,ee);if(is===null){ye===null&&(ye=$t);break}r&&ye&&is.alternate===null&&i(U,ye),M=d(is,M,Te),Oe===null?pe=is:Oe.sibling=is,Oe=is,ye=$t}if($e.done)return a(U,ye),He&&ta(U,Te),pe;if(ye===null){for(;!$e.done;Te++,$e=$.next())$e=ne(U,$e.value,ee),$e!==null&&(M=d($e,M,Te),Oe===null?pe=$e:Oe.sibling=$e,Oe=$e);return He&&ta(U,Te),pe}for(ye=l(ye);!$e.done;Te++,$e=$.next())$e=K(ye,U,Te,$e.value,ee),$e!==null&&(r&&$e.alternate!==null&&ye.delete($e.key===null?Te:$e.key),M=d($e,M,Te),Oe===null?pe=$e:Oe.sibling=$e,Oe=$e);return r&&ye.forEach(function(sx){return i(U,sx)}),He&&ta(U,Te),pe}function et(U,M,$,ee){if(typeof $=="object"&&$!==null&&$.type===P&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case w:e:{for(var pe=$.key;M!==null;){if(M.key===pe){if(pe=$.type,pe===P){if(M.tag===7){a(U,M.sibling),ee=f(M,$.props.children),ee.return=U,U=ee;break e}}else if(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===x&&ev(pe)===M.type){a(U,M.sibling),ee=f(M,$.props),Kl(ee,$),ee.return=U,U=ee;break e}a(U,M);break}else i(U,M);M=M.sibling}$.type===P?(ee=Js($.props.children,U.mode,ee,$.key),ee.return=U,U=ee):(ee=Vc($.type,$.key,$.props,null,U.mode,ee),Kl(ee,$),ee.return=U,U=ee)}return T(U);case D:e:{for(pe=$.key;M!==null;){if(M.key===pe)if(M.tag===4&&M.stateNode.containerInfo===$.containerInfo&&M.stateNode.implementation===$.implementation){a(U,M.sibling),ee=f(M,$.children||[]),ee.return=U,U=ee;break e}else{a(U,M);break}else i(U,M);M=M.sibling}ee=Pd($,U.mode,ee),ee.return=U,U=ee}return T(U);case x:return pe=$._init,$=pe($._payload),et(U,M,$,ee)}if(at($))return Se(U,M,$,ee);if(q($)){if(pe=q($),typeof pe!="function")throw Error(s(150));return $=pe.call($),Ee(U,M,$,ee)}if(typeof $.then=="function")return et(U,M,Jc($),ee);if($.$$typeof===X)return et(U,M,qc(U,$),ee);eh(U,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,M!==null&&M.tag===6?(a(U,M.sibling),ee=f(M,$),ee.return=U,U=ee):(a(U,M),ee=Md($,U.mode,ee),ee.return=U,U=ee),T(U)):a(U,M)}return function(U,M,$,ee){try{Ql=0;var pe=et(U,M,$,ee);return ho=null,pe}catch(ye){if(ye===Ul||ye===Bc)throw ye;var Oe=Cn(29,ye,null,U.mode);return Oe.lanes=ee,Oe.return=U,Oe}finally{}}}var fo=tv(!0),nv=tv(!1),Kn=ie(null),Dr=null;function $i(r){var i=r.alternate;se(Pt,Pt.current&1),se(Kn,r),Dr===null&&(i===null||oo.current!==null||i.memoizedState!==null)&&(Dr=r)}function rv(r){if(r.tag===22){if(se(Pt,Pt.current),se(Kn,r),Dr===null){var i=r.alternate;i!==null&&i.memoizedState!==null&&(Dr=r)}}else Hi()}function Hi(){se(Pt,Pt.current),se(Kn,Kn.current)}function ui(r){oe(Kn),Dr===r&&(Dr=null),oe(Pt)}var Pt=ie(0);function th(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||rm(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function pp(r,i,a,l){i=r.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var mp={enqueueSetState:function(r,i,a){r=r._reactInternals;var l=kn(),f=qi(l);f.payload=i,a!=null&&(f.callback=a),i=zi(r,f,l),i!==null&&(Mn(i,r,l),zl(i,r,l))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var l=kn(),f=qi(l);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=zi(r,f,l),i!==null&&(Mn(i,r,l),zl(i,r,l))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=kn(),l=qi(a);l.tag=2,i!=null&&(l.callback=i),i=zi(r,l,a),i!==null&&(Mn(i,r,a),zl(i,r,a))}};function iv(r,i,a,l,f,d,T){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(l,d,T):i.prototype&&i.prototype.isPureReactComponent?!Nl(a,l)||!Nl(f,d):!0}function sv(r,i,a,l){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==r&&mp.enqueueReplaceState(i,i.state,null)}function la(r,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(r=r.defaultProps){a===i&&(a=E({},a));for(var f in r)a[f]===void 0&&(a[f]=r[f])}return a}var nh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function av(r){nh(r)}function ov(r){console.error(r)}function lv(r){nh(r)}function rh(r,i){try{var a=r.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function uv(r,i,a){try{var l=r.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function gp(r,i,a){return a=qi(a),a.tag=3,a.payload={element:null},a.callback=function(){rh(r,i)},a}function cv(r){return r=qi(r),r.tag=3,r}function hv(r,i,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;r.payload=function(){return f(d)},r.callback=function(){uv(i,a,l)}}var T=a.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(r.callback=function(){uv(i,a,l),typeof f!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function sA(r,i,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Vl(i,a,f,!0),a=Kn.current,a!==null){switch(a.tag){case 13:return Dr===null?qp():a.alternate===null&&mt===0&&(mt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===Fd?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Bp(r,l,f)),!1;case 22:return a.flags|=65536,l===Fd?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Bp(r,l,f)),!1}throw Error(s(435,a.tag))}return Bp(r,l,f),qp(),!1}if(He)return i=Kn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==jd&&(r=Error(s(422),{cause:l}),Pl(Fn(r,a)))):(l!==jd&&(i=Error(s(423),{cause:l}),Pl(Fn(i,a))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,l=Fn(l,a),f=gp(r.stateNode,l,f),Qd(r,f),mt!==4&&(mt=2)),!1;var d=Error(s(520),{cause:l});if(d=Fn(d,a),nu===null?nu=[d]:nu.push(d),mt!==4&&(mt=2),i===null)return!0;l=Fn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,r=f&-f,a.lanes|=r,r=gp(a.stateNode,l,r),Qd(a,r),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Xi===null||!Xi.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=cv(f),hv(f,r,a,l),Qd(a,f),!1}a=a.return}while(a!==null);return!1}var fv=Error(s(461)),zt=!1;function Wt(r,i,a,l){i.child=r===null?nv(i,null,a,l):fo(i,r.child,a,l)}function dv(r,i,a,l,f){a=a.render;var d=i.ref;if("ref"in l){var T={};for(var b in l)b!=="ref"&&(T[b]=l[b])}else T=l;return sa(i),l=Jd(r,i,a,T,d,f),b=ep(),r!==null&&!zt?(tp(r,i,f),ci(r,i,f)):(He&&b&&Vd(i),i.flags|=1,Wt(r,i,l,f),i.child)}function pv(r,i,a,l,f){if(r===null){var d=a.type;return typeof d=="function"&&!kd(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,mv(r,i,d,l,f)):(r=Vc(a.type,null,l,i,i.mode,f),r.ref=i.ref,r.return=i,i.child=r)}if(d=r.child,!Sp(r,f)){var T=d.memoizedProps;if(a=a.compare,a=a!==null?a:Nl,a(T,l)&&r.ref===i.ref)return ci(r,i,f)}return i.flags|=1,r=ri(d,l),r.ref=i.ref,r.return=i,i.child=r}function mv(r,i,a,l,f){if(r!==null){var d=r.memoizedProps;if(Nl(d,l)&&r.ref===i.ref)if(zt=!1,i.pendingProps=l=d,Sp(r,f))(r.flags&131072)!==0&&(zt=!0);else return i.lanes=r.lanes,ci(r,i,f)}return yp(r,i,a,l,f)}function gv(r,i,a){var l=i.pendingProps,f=l.children,d=r!==null?r.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,r!==null){for(f=i.child=r.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return yv(r,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},r!==null&&zc(i,d!==null?d.cachePool:null),d!==null?m_(i,d):Xd(),rv(i);else return i.lanes=i.childLanes=536870912,yv(r,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(zc(i,d.cachePool),m_(i,d),Hi(),i.memoizedState=null):(r!==null&&zc(i,null),Xd(),Hi());return Wt(r,i,f,a),i.child}function yv(r,i,a,l){var f=Hd();return f=f===null?null:{parent:Mt._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},r!==null&&zc(i,null),Xd(),rv(i),r!==null&&Vl(r,i,l,!0),null}function ih(r,i){var a=i.ref;if(a===null)r!==null&&r.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(r===null||r.ref!==a)&&(i.flags|=4194816)}}function yp(r,i,a,l,f){return sa(i),a=Jd(r,i,a,l,void 0,f),l=ep(),r!==null&&!zt?(tp(r,i,f),ci(r,i,f)):(He&&l&&Vd(i),i.flags|=1,Wt(r,i,a,f),i.child)}function _v(r,i,a,l,f,d){return sa(i),i.updateQueue=null,a=y_(i,l,a,f),g_(r),l=ep(),r!==null&&!zt?(tp(r,i,d),ci(r,i,d)):(He&&l&&Vd(i),i.flags|=1,Wt(r,i,a,d),i.child)}function vv(r,i,a,l,f){if(sa(i),i.stateNode===null){var d=no,T=a.contextType;typeof T=="object"&&T!==null&&(d=on(T)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=mp,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Gd(i),T=a.contextType,d.context=typeof T=="object"&&T!==null?on(T):no,d.state=i.memoizedState,T=a.getDerivedStateFromProps,typeof T=="function"&&(pp(i,a,T,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(T=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),T!==d.state&&mp.enqueueReplaceState(d,d.state,null),$l(i,l,d,f),Bl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(r===null){d=i.stateNode;var b=i.memoizedProps,I=la(a,b);d.props=I;var G=d.context,J=a.contextType;T=no,typeof J=="object"&&J!==null&&(T=on(J));var ne=a.getDerivedStateFromProps;J=typeof ne=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,J||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||G!==T)&&sv(i,d,l,T),Ui=!1;var Q=i.memoizedState;d.state=Q,$l(i,l,d,f),Bl(),G=i.memoizedState,b||Q!==G||Ui?(typeof ne=="function"&&(pp(i,a,ne,l),G=i.memoizedState),(I=Ui||iv(i,a,I,l,Q,G,T))?(J||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=G),d.props=l,d.state=G,d.context=T,l=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Yd(r,i),T=i.memoizedProps,J=la(a,T),d.props=J,ne=i.pendingProps,Q=d.context,G=a.contextType,I=no,typeof G=="object"&&G!==null&&(I=on(G)),b=a.getDerivedStateFromProps,(G=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T!==ne||Q!==I)&&sv(i,d,l,I),Ui=!1,Q=i.memoizedState,d.state=Q,$l(i,l,d,f),Bl();var K=i.memoizedState;T!==ne||Q!==K||Ui||r!==null&&r.dependencies!==null&&Uc(r.dependencies)?(typeof b=="function"&&(pp(i,a,b,l),K=i.memoizedState),(J=Ui||iv(i,a,J,l,Q,K,I)||r!==null&&r.dependencies!==null&&Uc(r.dependencies))?(G||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,K,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,K,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||T===r.memoizedProps&&Q===r.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&Q===r.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=K),d.props=l,d.state=K,d.context=I,l=J):(typeof d.componentDidUpdate!="function"||T===r.memoizedProps&&Q===r.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&Q===r.memoizedState||(i.flags|=1024),l=!1)}return d=l,ih(r,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,r!==null&&l?(i.child=fo(i,r.child,null,f),i.child=fo(i,null,a,f)):Wt(r,i,a,f),i.memoizedState=d.state,r=i.child):r=ci(r,i,f),r}function Ev(r,i,a,l){return Ml(),i.flags|=256,Wt(r,i,a,l),i.child}var _p={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vp(r){return{baseLanes:r,cachePool:o_()}}function Ep(r,i,a){return r=r!==null?r.childLanes&~a:0,i&&(r|=Xn),r}function Tv(r,i,a){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,T;if((T=d)||(T=r!==null&&r.memoizedState===null?!1:(Pt.current&2)!==0),T&&(f=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,r===null){if(He){if(f?$i(i):Hi(),He){var b=pt,I;if(I=b){e:{for(I=b,b=Cr;I.nodeType!==8;){if(!b){b=null;break e}if(I=or(I.nextSibling),I===null){b=null;break e}}b=I}b!==null?(i.memoizedState={dehydrated:b,treeContext:ea!==null?{id:ii,overflow:si}:null,retryLane:536870912,hydrationErrors:null},I=Cn(18,null,null,0),I.stateNode=b,I.return=i,i.child=I,vn=i,pt=null,I=!0):I=!1}I||ra(i)}if(b=i.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return rm(b)?i.lanes=32:i.lanes=536870912,null;ui(i)}return b=l.children,l=l.fallback,f?(Hi(),f=i.mode,b=sh({mode:"hidden",children:b},f),l=Js(l,f,a,null),b.return=i,l.return=i,b.sibling=l,i.child=b,f=i.child,f.memoizedState=vp(a),f.childLanes=Ep(r,T,a),i.memoizedState=_p,l):($i(i),Tp(i,b))}if(I=r.memoizedState,I!==null&&(b=I.dehydrated,b!==null)){if(d)i.flags&256?($i(i),i.flags&=-257,i=bp(r,i,a)):i.memoizedState!==null?(Hi(),i.child=r.child,i.flags|=128,i=null):(Hi(),f=l.fallback,b=i.mode,l=sh({mode:"visible",children:l.children},b),f=Js(f,b,a,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,fo(i,r.child,null,a),l=i.child,l.memoizedState=vp(a),l.childLanes=Ep(r,T,a),i.memoizedState=_p,i=f);else if($i(i),rm(b)){if(T=b.nextSibling&&b.nextSibling.dataset,T)var G=T.dgst;T=G,l=Error(s(419)),l.stack="",l.digest=T,Pl({value:l,source:null,stack:null}),i=bp(r,i,a)}else if(zt||Vl(r,i,a,!1),T=(a&r.childLanes)!==0,zt||T){if(T=rt,T!==null&&(l=a&-a,l=(l&42)!==0?1:Ni(l),l=(l&(T.suspendedLanes|a))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,to(r,l),Mn(T,r,l),fv;b.data==="$?"||qp(),i=bp(r,i,a)}else b.data==="$?"?(i.flags|=192,i.child=r.child,i=null):(r=I.treeContext,pt=or(b.nextSibling),vn=i,He=!0,na=null,Cr=!1,r!==null&&(Yn[Qn++]=ii,Yn[Qn++]=si,Yn[Qn++]=ea,ii=r.id,si=r.overflow,ea=i),i=Tp(i,l.children),i.flags|=4096);return i}return f?(Hi(),f=l.fallback,b=i.mode,I=r.child,G=I.sibling,l=ri(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,G!==null?f=ri(G,f):(f=Js(f,b,a,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,b=r.child.memoizedState,b===null?b=vp(a):(I=b.cachePool,I!==null?(G=Mt._currentValue,I=I.parent!==G?{parent:G,pool:G}:I):I=o_(),b={baseLanes:b.baseLanes|a,cachePool:I}),f.memoizedState=b,f.childLanes=Ep(r,T,a),i.memoizedState=_p,l):($i(i),a=r.child,r=a.sibling,a=ri(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,r!==null&&(T=i.deletions,T===null?(i.deletions=[r],i.flags|=16):T.push(r)),i.child=a,i.memoizedState=null,a)}function Tp(r,i){return i=sh({mode:"visible",children:i},r.mode),i.return=r,r.child=i}function sh(r,i){return r=Cn(22,r,null,i),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function bp(r,i,a){return fo(i,r.child,null,a),r=Tp(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function bv(r,i,a){r.lanes|=i;var l=r.alternate;l!==null&&(l.lanes|=i),qd(r.return,i,a)}function wp(r,i,a,l,f){var d=r.memoizedState;d===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function wv(r,i,a){var l=i.pendingProps,f=l.revealOrder,d=l.tail;if(Wt(r,i,l.children,a),l=Pt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&bv(r,a,i);else if(r.tag===19)bv(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}l&=1}switch(se(Pt,l),f){case"forwards":for(a=i.child,f=null;a!==null;)r=a.alternate,r!==null&&th(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),wp(i,!1,f,a,d);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(r=f.alternate,r!==null&&th(r)===null){i.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}wp(i,!0,a,null,d);break;case"together":wp(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ci(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),Ki|=i.lanes,(a&i.childLanes)===0)if(r!==null){if(Vl(r,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(r!==null&&i.child!==r.child)throw Error(s(153));if(i.child!==null){for(r=i.child,a=ri(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=ri(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function Sp(r,i){return(r.lanes&i)!==0?!0:(r=r.dependencies,!!(r!==null&&Uc(r)))}function aA(r,i,a){switch(i.tag){case 3:Be(i,i.stateNode.containerInfo),ji(i,Mt,r.memoizedState.cache),Ml();break;case 27:case 5:jn(i);break;case 4:Be(i,i.stateNode.containerInfo);break;case 10:ji(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?($i(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Tv(r,i,a):($i(i),r=ci(r,i,a),r!==null?r.sibling:null);$i(i);break;case 19:var f=(r.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Vl(r,i,a,!1),l=(a&i.childLanes)!==0),f){if(l)return wv(r,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Pt,Pt.current),l)break;return null;case 22:case 23:return i.lanes=0,gv(r,i,a);case 24:ji(i,Mt,r.memoizedState.cache)}return ci(r,i,a)}function Sv(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps)zt=!0;else{if(!Sp(r,a)&&(i.flags&128)===0)return zt=!1,aA(r,i,a);zt=(r.flags&131072)!==0}else zt=!1,He&&(i.flags&1048576)!==0&&e_(i,jc,i.index);switch(i.lanes=0,i.tag){case 16:e:{r=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")kd(l)?(r=la(l,r),i.tag=1,i=vv(null,i,l,r,a)):(i.tag=0,i=yp(null,i,l,r,a));else{if(l!=null){if(f=l.$$typeof,f===ae){i.tag=11,i=dv(null,i,l,r,a);break e}else if(f===C){i.tag=14,i=pv(null,i,l,r,a);break e}}throw i=Dt(l)||l,Error(s(306,i,""))}}return i;case 0:return yp(r,i,i.type,i.pendingProps,a);case 1:return l=i.type,f=la(l,i.pendingProps),vv(r,i,l,f,a);case 3:e:{if(Be(i,i.stateNode.containerInfo),r===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Yd(r,i),$l(i,l,null,a);var T=i.memoizedState;if(l=T.cache,ji(i,Mt,l),l!==d.cache&&zd(i,[Mt],a,!0),Bl(),l=T.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Ev(r,i,l,a);break e}else if(l!==f){f=Fn(Error(s(424)),i),Pl(f),i=Ev(r,i,l,a);break e}else{switch(r=i.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(pt=or(r.firstChild),vn=i,He=!0,na=null,Cr=!0,a=nv(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ml(),l===f){i=ci(r,i,a);break e}Wt(r,i,l,a)}i=i.child}return i;case 26:return ih(r,i),r===null?(a=I0(i.type,null,i.pendingProps,null))?i.memoizedState=a:He||(a=i.type,r=i.pendingProps,l=vh(ve.current).createElement(a),l[Nt]=i,l[Tt]=r,Jt(l,a,r),yt(l),i.stateNode=l):i.memoizedState=I0(i.type,r.memoizedProps,i.pendingProps,r.memoizedState),null;case 27:return jn(i),r===null&&He&&(l=i.stateNode=A0(i.type,i.pendingProps,ve.current),vn=i,Cr=!0,f=pt,Ji(i.type)?(im=f,pt=or(l.firstChild)):pt=f),Wt(r,i,i.pendingProps.children,a),ih(r,i),r===null&&(i.flags|=4194304),i.child;case 5:return r===null&&He&&((f=l=pt)&&(l=MA(l,i.type,i.pendingProps,Cr),l!==null?(i.stateNode=l,vn=i,pt=or(l.firstChild),Cr=!1,f=!0):f=!1),f||ra(i)),jn(i),f=i.type,d=i.pendingProps,T=r!==null?r.memoizedProps:null,l=d.children,em(f,d)?l=null:T!==null&&em(f,T)&&(i.flags|=32),i.memoizedState!==null&&(f=Jd(r,i,ZS,null,null,a),hu._currentValue=f),ih(r,i),Wt(r,i,l,a),i.child;case 6:return r===null&&He&&((r=a=pt)&&(a=PA(a,i.pendingProps,Cr),a!==null?(i.stateNode=a,vn=i,pt=null,r=!0):r=!1),r||ra(i)),null;case 13:return Tv(r,i,a);case 4:return Be(i,i.stateNode.containerInfo),l=i.pendingProps,r===null?i.child=fo(i,null,l,a):Wt(r,i,l,a),i.child;case 11:return dv(r,i,i.type,i.pendingProps,a);case 7:return Wt(r,i,i.pendingProps,a),i.child;case 8:return Wt(r,i,i.pendingProps.children,a),i.child;case 12:return Wt(r,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,ji(i,i.type,l.value),Wt(r,i,l.children,a),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,sa(i),f=on(f),l=l(f),i.flags|=1,Wt(r,i,l,a),i.child;case 14:return pv(r,i,i.type,i.pendingProps,a);case 15:return mv(r,i,i.type,i.pendingProps,a);case 19:return wv(r,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},r===null?(a=sh(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=ri(r.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return gv(r,i,a);case 24:return sa(i),l=on(Mt),r===null?(f=Hd(),f===null&&(f=rt,d=Bd(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),i.memoizedState={parent:l,cache:f},Gd(i),ji(i,Mt,f)):((r.lanes&a)!==0&&(Yd(r,i),$l(i,null,null,a),Bl()),f=r.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ji(i,Mt,l)):(l=d.cache,ji(i,Mt,l),l!==f.cache&&zd(i,[Mt],a,!0))),Wt(r,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function hi(r){r.flags|=4}function Av(r,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!k0(i)){if(i=Kn.current,i!==null&&((qe&4194048)===qe?Dr!==null:(qe&62914560)!==qe&&(qe&536870912)===0||i!==Dr))throw ql=Fd,l_;r.flags|=8192}}function ah(r,i){i!==null&&(r.flags|=4),r.flags&16384&&(i=r.tag!==22?dl():536870912,r.lanes|=i,yo|=i)}function Xl(r,i){if(!He)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function ht(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,l=0;if(i)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=l,r.childLanes=a,i}function oA(r,i,a){var l=i.pendingProps;switch(Ld(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(i),null;case 1:return ht(i),null;case 3:return a=i.stateNode,l=null,r!==null&&(l=r.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),oi(Mt),jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(r===null||r.child===null)&&(kl(i)?hi(i):r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,r_())),ht(i),null;case 26:return a=i.memoizedState,r===null?(hi(i),a!==null?(ht(i),Av(i,a)):(ht(i),i.flags&=-16777217)):a?a!==r.memoizedState?(hi(i),ht(i),Av(i,a)):(ht(i),i.flags&=-16777217):(r.memoizedProps!==l&&hi(i),ht(i),i.flags&=-16777217),null;case 27:En(i),a=ve.current;var f=i.type;if(r!==null&&i.stateNode!=null)r.memoizedProps!==l&&hi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}r=ge.current,kl(i)?t_(i):(r=A0(f,l,a),i.stateNode=r,hi(i))}return ht(i),null;case 5:if(En(i),a=i.type,r!==null&&i.stateNode!=null)r.memoizedProps!==l&&hi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}if(r=ge.current,kl(i))t_(i);else{switch(f=vh(ve.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}r[Nt]=i,r[Tt]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=r;e:switch(Jt(r,a,l),a){case"button":case"input":case"select":case"textarea":r=!!l.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&hi(i)}}return ht(i),i.flags&=-16777217,null;case 6:if(r&&i.stateNode!=null)r.memoizedProps!==l&&hi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(r=ve.current,kl(i)){if(r=i.stateNode,a=i.memoizedProps,l=null,f=vn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}r[Nt]=i,r=!!(r.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||_0(r.nodeValue,a)),r||ra(i)}else r=vh(r).createTextNode(l),r[Nt]=i,i.stateNode=r}return ht(i),null;case 13:if(l=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=kl(i),l!==null&&l.dehydrated!==null){if(r===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Nt]=i}else Ml(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ht(i),f=!1}else f=r_(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ui(i),i):(ui(i),null)}if(ui(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,r=r!==null&&r.memoizedState!==null,a){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return a!==r&&a&&(i.child.flags|=8192),ah(i,i.updateQueue),ht(i),null;case 4:return jt(),r===null&&Kp(i.stateNode.containerInfo),ht(i),null;case 10:return oi(i.type),ht(i),null;case 19:if(oe(Pt),f=i.memoizedState,f===null)return ht(i),null;if(l=(i.flags&128)!==0,d=f.rendering,d===null)if(l)Xl(f,!1);else{if(mt!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(d=th(r),d!==null){for(i.flags|=128,Xl(f,!1),r=d.updateQueue,i.updateQueue=r,ah(i,r),i.subtreeFlags=0,r=a,a=i.child;a!==null;)Jy(a,r),a=a.sibling;return se(Pt,Pt.current&1|2),i.child}r=r.sibling}f.tail!==null&&Un()>uh&&(i.flags|=128,l=!0,Xl(f,!1),i.lanes=4194304)}else{if(!l)if(r=th(d),r!==null){if(i.flags|=128,l=!0,r=r.updateQueue,i.updateQueue=r,ah(i,r),Xl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!He)return ht(i),null}else 2*Un()-f.renderingStartTime>uh&&a!==536870912&&(i.flags|=128,l=!0,Xl(f,!1),i.lanes=4194304);f.isBackwards?(d.sibling=i.child,i.child=d):(r=f.last,r!==null?r.sibling=d:i.child=d,f.last=d)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Un(),i.sibling=null,r=Pt.current,se(Pt,l?r&1|2:r&1),i):(ht(i),null);case 22:case 23:return ui(i),Wd(),l=i.memoizedState!==null,r!==null?r.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ht(i),i.subtreeFlags&6&&(i.flags|=8192)):ht(i),a=i.updateQueue,a!==null&&ah(i,a.retryQueue),a=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),r!==null&&oe(aa),null;case 24:return a=null,r!==null&&(a=r.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),oi(Mt),ht(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function lA(r,i){switch(Ld(i),i.tag){case 1:return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return oi(Mt),jt(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 26:case 27:case 5:return En(i),null;case 13:if(ui(i),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Ml()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return oe(Pt),null;case 4:return jt(),null;case 10:return oi(i.type),null;case 22:case 23:return ui(i),Wd(),r!==null&&oe(aa),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 24:return oi(Mt),null;case 25:return null;default:return null}}function xv(r,i){switch(Ld(i),i.tag){case 3:oi(Mt),jt();break;case 26:case 27:case 5:En(i);break;case 4:jt();break;case 13:ui(i);break;case 19:oe(Pt);break;case 10:oi(i.type);break;case 22:case 23:ui(i),Wd(),r!==null&&oe(aa);break;case 24:oi(Mt)}}function Wl(r,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&r)===r){l=void 0;var d=a.create,T=a.inst;l=d(),T.destroy=l}a=a.next}while(a!==f)}}catch(b){tt(i,i.return,b)}}function Fi(r,i,a){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&r)===r){var T=l.inst,b=T.destroy;if(b!==void 0){T.destroy=void 0,f=i;var I=a,G=b;try{G()}catch(J){tt(f,I,J)}}}l=l.next}while(l!==d)}}catch(J){tt(i,i.return,J)}}function Rv(r){var i=r.updateQueue;if(i!==null){var a=r.stateNode;try{p_(i,a)}catch(l){tt(r,r.return,l)}}}function Iv(r,i,a){a.props=la(r.type,r.memoizedProps),a.state=r.memoizedState;try{a.componentWillUnmount()}catch(l){tt(r,i,l)}}function Zl(r,i){try{var a=r.ref;if(a!==null){switch(r.tag){case 26:case 27:case 5:var l=r.stateNode;break;case 30:l=r.stateNode;break;default:l=r.stateNode}typeof a=="function"?r.refCleanup=a(l):a.current=l}}catch(f){tt(r,i,f)}}function Nr(r,i){var a=r.ref,l=r.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){tt(r,i,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){tt(r,i,f)}else a.current=null}function Cv(r){var i=r.type,a=r.memoizedProps,l=r.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){tt(r,r.return,f)}}function Ap(r,i,a){try{var l=r.stateNode;CA(l,r.type,a,i),l[Tt]=i}catch(f){tt(r,r.return,f)}}function Dv(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Ji(r.type)||r.tag===4}function xp(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Dv(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Ji(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Rp(r,i,a){var l=r.tag;if(l===5||l===6)r=r.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(r,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(r),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=_h));else if(l!==4&&(l===27&&Ji(r.type)&&(a=r.stateNode,i=null),r=r.child,r!==null))for(Rp(r,i,a),r=r.sibling;r!==null;)Rp(r,i,a),r=r.sibling}function oh(r,i,a){var l=r.tag;if(l===5||l===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(l!==4&&(l===27&&Ji(r.type)&&(a=r.stateNode),r=r.child,r!==null))for(oh(r,i,a),r=r.sibling;r!==null;)oh(r,i,a),r=r.sibling}function Nv(r){var i=r.stateNode,a=r.memoizedProps;try{for(var l=r.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Jt(i,l,a),i[Nt]=r,i[Tt]=a}catch(d){tt(r,r.return,d)}}var fi=!1,vt=!1,Ip=!1,Ov=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function uA(r,i){if(r=r.containerInfo,Zp=Ah,r=$y(r),xd(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var T=0,b=-1,I=-1,G=0,J=0,ne=r,Q=null;t:for(;;){for(var K;ne!==a||f!==0&&ne.nodeType!==3||(b=T+f),ne!==d||l!==0&&ne.nodeType!==3||(I=T+l),ne.nodeType===3&&(T+=ne.nodeValue.length),(K=ne.firstChild)!==null;)Q=ne,ne=K;for(;;){if(ne===r)break t;if(Q===a&&++G===f&&(b=T),Q===d&&++J===l&&(I=T),(K=ne.nextSibling)!==null)break;ne=Q,Q=ne.parentNode}ne=K}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jp={focusedElem:r,selectionRange:a},Ah=!1,Bt=i;Bt!==null;)if(i=Bt,r=i.child,(i.subtreeFlags&1024)!==0&&r!==null)r.return=i,Bt=r;else for(;Bt!==null;){switch(i=Bt,d=i.alternate,r=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&d!==null){r=void 0,a=i,f=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Se=la(a.type,f,a.elementType===a.type);r=l.getSnapshotBeforeUpdate(Se,d),l.__reactInternalSnapshotBeforeUpdate=r}catch(Ee){tt(a,a.return,Ee)}}break;case 3:if((r&1024)!==0){if(r=i.stateNode.containerInfo,a=r.nodeType,a===9)nm(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":nm(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(s(163))}if(r=i.sibling,r!==null){r.return=i.return,Bt=r;break}Bt=i.return}}function kv(r,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Gi(r,a),l&4&&Wl(5,a);break;case 1:if(Gi(r,a),l&4)if(r=a.stateNode,i===null)try{r.componentDidMount()}catch(T){tt(a,a.return,T)}else{var f=la(a.type,i.memoizedProps);i=i.memoizedState;try{r.componentDidUpdate(f,i,r.__reactInternalSnapshotBeforeUpdate)}catch(T){tt(a,a.return,T)}}l&64&&Rv(a),l&512&&Zl(a,a.return);break;case 3:if(Gi(r,a),l&64&&(r=a.updateQueue,r!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{p_(r,i)}catch(T){tt(a,a.return,T)}}break;case 27:i===null&&l&4&&Nv(a);case 26:case 5:Gi(r,a),i===null&&l&4&&Cv(a),l&512&&Zl(a,a.return);break;case 12:Gi(r,a);break;case 13:Gi(r,a),l&4&&Vv(r,a),l&64&&(r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(a=_A.bind(null,a),VA(r,a))));break;case 22:if(l=a.memoizedState!==null||fi,!l){i=i!==null&&i.memoizedState!==null||vt,f=fi;var d=vt;fi=l,(vt=i)&&!d?Yi(r,a,(a.subtreeFlags&8772)!==0):Gi(r,a),fi=f,vt=d}break;case 30:break;default:Gi(r,a)}}function Mv(r){var i=r.alternate;i!==null&&(r.alternate=null,Mv(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&Mi(i)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var lt=null,bn=!1;function di(r,i,a){for(a=a.child;a!==null;)Pv(r,i,a),a=a.sibling}function Pv(r,i,a){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:vt||Nr(a,i),di(r,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vt||Nr(a,i);var l=lt,f=bn;Ji(a.type)&&(lt=a.stateNode,bn=!1),di(r,i,a),ou(a.stateNode),lt=l,bn=f;break;case 5:vt||Nr(a,i);case 6:if(l=lt,f=bn,lt=null,di(r,i,a),lt=l,bn=f,lt!==null)if(bn)try{(lt.nodeType===9?lt.body:lt.nodeName==="HTML"?lt.ownerDocument.body:lt).removeChild(a.stateNode)}catch(d){tt(a,i,d)}else try{lt.removeChild(a.stateNode)}catch(d){tt(a,i,d)}break;case 18:lt!==null&&(bn?(r=lt,w0(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.stateNode),mu(r)):w0(lt,a.stateNode));break;case 4:l=lt,f=bn,lt=a.stateNode.containerInfo,bn=!0,di(r,i,a),lt=l,bn=f;break;case 0:case 11:case 14:case 15:vt||Fi(2,a,i),vt||Fi(4,a,i),di(r,i,a);break;case 1:vt||(Nr(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Iv(a,i,l)),di(r,i,a);break;case 21:di(r,i,a);break;case 22:vt=(l=vt)||a.memoizedState!==null,di(r,i,a),vt=l;break;default:di(r,i,a)}}function Vv(r,i){if(i.memoizedState===null&&(r=i.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{mu(r)}catch(a){tt(i,i.return,a)}}function cA(r){switch(r.tag){case 13:case 19:var i=r.stateNode;return i===null&&(i=r.stateNode=new Ov),i;case 22:return r=r.stateNode,i=r._retryCache,i===null&&(i=r._retryCache=new Ov),i;default:throw Error(s(435,r.tag))}}function Cp(r,i){var a=cA(r);i.forEach(function(l){var f=vA.bind(null,r,l);a.has(l)||(a.add(l),l.then(f,f))})}function Dn(r,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],d=r,T=i,b=T;e:for(;b!==null;){switch(b.tag){case 27:if(Ji(b.type)){lt=b.stateNode,bn=!1;break e}break;case 5:lt=b.stateNode,bn=!1;break e;case 3:case 4:lt=b.stateNode.containerInfo,bn=!0;break e}b=b.return}if(lt===null)throw Error(s(160));Pv(d,T,f),lt=null,bn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Lv(i,r),i=i.sibling}var ar=null;function Lv(r,i){var a=r.alternate,l=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Dn(i,r),Nn(r),l&4&&(Fi(3,r,r.return),Wl(3,r),Fi(5,r,r.return));break;case 1:Dn(i,r),Nn(r),l&512&&(vt||a===null||Nr(a,a.return)),l&64&&fi&&(r=r.updateQueue,r!==null&&(l=r.callbacks,l!==null&&(a=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=ar;if(Dn(i,r),Nn(r),l&512&&(vt||a===null||Nr(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=r.memoizedState,a===null)if(l===null)if(r.stateNode===null){e:{l=r.type,a=r.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Ls]||d[Nt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Jt(d,l,a),d[Nt]=r,yt(d),l=d;break e;case"link":var T=N0("link","href",f).get(l+(a.href||""));if(T){for(var b=0;b<T.length;b++)if(d=T[b],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){T.splice(b,1);break t}}d=f.createElement(l),Jt(d,l,a),f.head.appendChild(d);break;case"meta":if(T=N0("meta","content",f).get(l+(a.content||""))){for(b=0;b<T.length;b++)if(d=T[b],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){T.splice(b,1);break t}}d=f.createElement(l),Jt(d,l,a),f.head.appendChild(d);break;default:throw Error(s(468,l))}d[Nt]=r,yt(d),l=d}r.stateNode=l}else O0(f,r.type,r.stateNode);else r.stateNode=D0(f,l,r.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?O0(f,r.type,r.stateNode):D0(f,l,r.memoizedProps)):l===null&&r.stateNode!==null&&Ap(r,r.memoizedProps,a.memoizedProps)}break;case 27:Dn(i,r),Nn(r),l&512&&(vt||a===null||Nr(a,a.return)),a!==null&&l&4&&Ap(r,r.memoizedProps,a.memoizedProps);break;case 5:if(Dn(i,r),Nn(r),l&512&&(vt||a===null||Nr(a,a.return)),r.flags&32){f=r.stateNode;try{zn(f,"")}catch(K){tt(r,r.return,K)}}l&4&&r.stateNode!=null&&(f=r.memoizedProps,Ap(r,f,a!==null?a.memoizedProps:f)),l&1024&&(Ip=!0);break;case 6:if(Dn(i,r),Nn(r),l&4){if(r.stateNode===null)throw Error(s(162));l=r.memoizedProps,a=r.stateNode;try{a.nodeValue=l}catch(K){tt(r,r.return,K)}}break;case 3:if(bh=null,f=ar,ar=Eh(i.containerInfo),Dn(i,r),ar=f,Nn(r),l&4&&a!==null&&a.memoizedState.isDehydrated)try{mu(i.containerInfo)}catch(K){tt(r,r.return,K)}Ip&&(Ip=!1,jv(r));break;case 4:l=ar,ar=Eh(r.stateNode.containerInfo),Dn(i,r),Nn(r),ar=l;break;case 12:Dn(i,r),Nn(r);break;case 13:Dn(i,r),Nn(r),r.child.flags&8192&&r.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pp=Un()),l&4&&(l=r.updateQueue,l!==null&&(r.updateQueue=null,Cp(r,l)));break;case 22:f=r.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,G=fi,J=vt;if(fi=G||f,vt=J||I,Dn(i,r),vt=J,fi=G,Nn(r),l&8192)e:for(i=r.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||I||fi||vt||ua(r)),a=null,i=r;;){if(i.tag===5||i.tag===26){if(a===null){I=a=i;try{if(d=I.stateNode,f)T=d.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{b=I.stateNode;var ne=I.memoizedProps.style,Q=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;b.style.display=Q==null||typeof Q=="boolean"?"":(""+Q).trim()}}catch(K){tt(I,I.return,K)}}}else if(i.tag===6){if(a===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(K){tt(I,I.return,K)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===r)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=r.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Cp(r,a))));break;case 19:Dn(i,r),Nn(r),l&4&&(l=r.updateQueue,l!==null&&(r.updateQueue=null,Cp(r,l)));break;case 30:break;case 21:break;default:Dn(i,r),Nn(r)}}function Nn(r){var i=r.flags;if(i&2){try{for(var a,l=r.return;l!==null;){if(Dv(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,d=xp(r);oh(r,d,f);break;case 5:var T=a.stateNode;a.flags&32&&(zn(T,""),a.flags&=-33);var b=xp(r);oh(r,b,T);break;case 3:case 4:var I=a.stateNode.containerInfo,G=xp(r);Rp(r,G,I);break;default:throw Error(s(161))}}catch(J){tt(r,r.return,J)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function jv(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var i=r;jv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),r=r.sibling}}function Gi(r,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)kv(r,i.alternate,i),i=i.sibling}function ua(r){for(r=r.child;r!==null;){var i=r;switch(i.tag){case 0:case 11:case 14:case 15:Fi(4,i,i.return),ua(i);break;case 1:Nr(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Iv(i,i.return,a),ua(i);break;case 27:ou(i.stateNode);case 26:case 5:Nr(i,i.return),ua(i);break;case 22:i.memoizedState===null&&ua(i);break;case 30:ua(i);break;default:ua(i)}r=r.sibling}}function Yi(r,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=r,d=i,T=d.flags;switch(d.tag){case 0:case 11:case 15:Yi(f,d,a),Wl(4,d);break;case 1:if(Yi(f,d,a),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(G){tt(l,l.return,G)}if(l=d,f=l.updateQueue,f!==null){var b=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)d_(I[f],b)}catch(G){tt(l,l.return,G)}}a&&T&64&&Rv(d),Zl(d,d.return);break;case 27:Nv(d);case 26:case 5:Yi(f,d,a),a&&l===null&&T&4&&Cv(d),Zl(d,d.return);break;case 12:Yi(f,d,a);break;case 13:Yi(f,d,a),a&&T&4&&Vv(f,d);break;case 22:d.memoizedState===null&&Yi(f,d,a),Zl(d,d.return);break;case 30:break;default:Yi(f,d,a)}i=i.sibling}}function Dp(r,i){var a=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(r!=null&&r.refCount++,a!=null&&Ll(a))}function Np(r,i){r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&Ll(r))}function Or(r,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Uv(r,i,a,l),i=i.sibling}function Uv(r,i,a,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Or(r,i,a,l),f&2048&&Wl(9,i);break;case 1:Or(r,i,a,l);break;case 3:Or(r,i,a,l),f&2048&&(r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&Ll(r)));break;case 12:if(f&2048){Or(r,i,a,l),r=i.stateNode;try{var d=i.memoizedProps,T=d.id,b=d.onPostCommit;typeof b=="function"&&b(T,i.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(I){tt(i,i.return,I)}}else Or(r,i,a,l);break;case 13:Or(r,i,a,l);break;case 23:break;case 22:d=i.stateNode,T=i.alternate,i.memoizedState!==null?d._visibility&2?Or(r,i,a,l):Jl(r,i):d._visibility&2?Or(r,i,a,l):(d._visibility|=2,po(r,i,a,l,(i.subtreeFlags&10256)!==0)),f&2048&&Dp(T,i);break;case 24:Or(r,i,a,l),f&2048&&Np(i.alternate,i);break;default:Or(r,i,a,l)}}function po(r,i,a,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=r,T=i,b=a,I=l,G=T.flags;switch(T.tag){case 0:case 11:case 15:po(d,T,b,I,f),Wl(8,T);break;case 23:break;case 22:var J=T.stateNode;T.memoizedState!==null?J._visibility&2?po(d,T,b,I,f):Jl(d,T):(J._visibility|=2,po(d,T,b,I,f)),f&&G&2048&&Dp(T.alternate,T);break;case 24:po(d,T,b,I,f),f&&G&2048&&Np(T.alternate,T);break;default:po(d,T,b,I,f)}i=i.sibling}}function Jl(r,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=r,l=i,f=l.flags;switch(l.tag){case 22:Jl(a,l),f&2048&&Dp(l.alternate,l);break;case 24:Jl(a,l),f&2048&&Np(l.alternate,l);break;default:Jl(a,l)}i=i.sibling}}var eu=8192;function mo(r){if(r.subtreeFlags&eu)for(r=r.child;r!==null;)qv(r),r=r.sibling}function qv(r){switch(r.tag){case 26:mo(r),r.flags&eu&&r.memoizedState!==null&&KA(ar,r.memoizedState,r.memoizedProps);break;case 5:mo(r);break;case 3:case 4:var i=ar;ar=Eh(r.stateNode.containerInfo),mo(r),ar=i;break;case 22:r.memoizedState===null&&(i=r.alternate,i!==null&&i.memoizedState!==null?(i=eu,eu=16777216,mo(r),eu=i):mo(r));break;default:mo(r)}}function zv(r){var i=r.alternate;if(i!==null&&(r=i.child,r!==null)){i.child=null;do i=r.sibling,r.sibling=null,r=i;while(r!==null)}}function tu(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Bt=l,$v(l,r)}zv(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Bv(r),r=r.sibling}function Bv(r){switch(r.tag){case 0:case 11:case 15:tu(r),r.flags&2048&&Fi(9,r,r.return);break;case 3:tu(r);break;case 12:tu(r);break;case 22:var i=r.stateNode;r.memoizedState!==null&&i._visibility&2&&(r.return===null||r.return.tag!==13)?(i._visibility&=-3,lh(r)):tu(r);break;default:tu(r)}}function lh(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Bt=l,$v(l,r)}zv(r)}for(r=r.child;r!==null;){switch(i=r,i.tag){case 0:case 11:case 15:Fi(8,i,i.return),lh(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,lh(i));break;default:lh(i)}r=r.sibling}}function $v(r,i){for(;Bt!==null;){var a=Bt;switch(a.tag){case 0:case 11:case 15:Fi(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ll(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Bt=l;else e:for(a=r;Bt!==null;){l=Bt;var f=l.sibling,d=l.return;if(Mv(l),l===a){Bt=null;break e}if(f!==null){f.return=d,Bt=f;break e}Bt=d}}}var hA={getCacheForType:function(r){var i=on(Mt),a=i.data.get(r);return a===void 0&&(a=r(),i.data.set(r,a)),a}},fA=typeof WeakMap=="function"?WeakMap:Map,Ke=0,rt=null,ke=null,qe=0,Xe=0,On=null,Qi=!1,go=!1,Op=!1,pi=0,mt=0,Ki=0,ca=0,kp=0,Xn=0,yo=0,nu=null,wn=null,Mp=!1,Pp=0,uh=1/0,ch=null,Xi=null,Zt=0,Wi=null,_o=null,vo=0,Vp=0,Lp=null,Hv=null,ru=0,jp=null;function kn(){if((Ke&2)!==0&&qe!==0)return qe&-qe;if(Z.T!==null){var r=so;return r!==0?r:Fp()}return Oi()}function Fv(){Xn===0&&(Xn=(qe&536870912)===0||He?fl():536870912);var r=Kn.current;return r!==null&&(r.flags|=32),Xn}function Mn(r,i,a){(r===rt&&(Xe===2||Xe===9)||r.cancelPendingCommit!==null)&&(Eo(r,0),Zi(r,qe,Xn,!1)),Gr(r,a),((Ke&2)===0||r!==rt)&&(r===rt&&((Ke&2)===0&&(ca|=a),mt===4&&Zi(r,qe,Xn,!1)),kr(r))}function Gv(r,i,a){if((Ke&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&r.expiredLanes)===0||Vs(r,i),f=l?mA(r,i):zp(r,i,!0),d=l;do{if(f===0){go&&!l&&Zi(r,i,0,!1);break}else{if(a=r.current.alternate,d&&!dA(a)){f=zp(r,i,!1),d=!1;continue}if(f===2){if(d=i,r.errorRecoveryDisabledLanes&d)var T=0;else T=r.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;e:{var b=r;f=nu;var I=b.current.memoizedState.isDehydrated;if(I&&(Eo(b,T).flags|=256),T=zp(b,T,!1),T!==2){if(Op&&!I){b.errorRecoveryDisabledLanes|=d,ca|=d,f=4;break e}d=wn,wn=f,d!==null&&(wn===null?wn=d:wn.push.apply(wn,d))}f=T}if(d=!1,f!==2)continue}}if(f===1){Eo(r,0),Zi(r,i,0,!0);break}e:{switch(l=r,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Zi(l,i,Xn,!Qi);break e;case 2:wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=Pp+300-Un(),10<f)){if(Zi(l,i,Xn,!Qi),Va(l,0,!0)!==0)break e;l.timeoutHandle=T0(Yv.bind(null,l,a,wn,ch,Mp,i,Xn,ca,yo,Qi,d,2,-0,0),f);break e}Yv(l,a,wn,ch,Mp,i,Xn,ca,yo,Qi,d,0,-0,0)}}break}while(!0);kr(r)}function Yv(r,i,a,l,f,d,T,b,I,G,J,ne,Q,K){if(r.timeoutHandle=-1,ne=i.subtreeFlags,(ne&8192||(ne&16785408)===16785408)&&(cu={stylesheets:null,count:0,unsuspend:QA},qv(i),ne=XA(),ne!==null)){r.cancelPendingCommit=ne(e0.bind(null,r,i,d,a,l,f,T,b,I,J,1,Q,K)),Zi(r,d,T,!G);return}e0(r,i,d,a,l,f,T,b,I)}function dA(r){for(var i=r;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!In(d(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Zi(r,i,a,l){i&=~kp,i&=~ca,r.suspendedLanes|=i,r.pingedLanes&=~i,l&&(r.warmLanes|=i),l=r.expirationTimes;for(var f=i;0<f;){var d=31-an(f),T=1<<d;l[d]=-1,f&=~T}a!==0&&_r(r,a,i)}function hh(){return(Ke&6)===0?(iu(0),!1):!0}function Up(){if(ke!==null){if(Xe===0)var r=ke.return;else r=ke,ai=ia=null,np(r),ho=null,Ql=0,r=ke;for(;r!==null;)xv(r.alternate,r),r=r.return;ke=null}}function Eo(r,i){var a=r.timeoutHandle;a!==-1&&(r.timeoutHandle=-1,NA(a)),a=r.cancelPendingCommit,a!==null&&(r.cancelPendingCommit=null,a()),Up(),rt=r,ke=a=ri(r.current,null),qe=i,Xe=0,On=null,Qi=!1,go=Vs(r,i),Op=!1,yo=Xn=kp=ca=Ki=mt=0,wn=nu=null,Mp=!1,(i&8)!==0&&(i|=i&32);var l=r.entangledLanes;if(l!==0)for(r=r.entanglements,l&=i;0<l;){var f=31-an(l),d=1<<f;i|=r[f],l&=~d}return pi=i,kc(),a}function Qv(r,i){Ne=null,Z.H=Zc,i===Ul||i===Bc?(i=h_(),Xe=3):i===l_?(i=h_(),Xe=4):Xe=i===fv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,On=i,ke===null&&(mt=1,rh(r,Fn(i,r.current)))}function Kv(){var r=Z.H;return Z.H=Zc,r===null?Zc:r}function Xv(){var r=Z.A;return Z.A=hA,r}function qp(){mt=4,Qi||(qe&4194048)!==qe&&Kn.current!==null||(go=!0),(Ki&134217727)===0&&(ca&134217727)===0||rt===null||Zi(rt,qe,Xn,!1)}function zp(r,i,a){var l=Ke;Ke|=2;var f=Kv(),d=Xv();(rt!==r||qe!==i)&&(ch=null,Eo(r,i)),i=!1;var T=mt;e:do try{if(Xe!==0&&ke!==null){var b=ke,I=On;switch(Xe){case 8:Up(),T=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(i=!0);var G=Xe;if(Xe=0,On=null,To(r,b,I,G),a&&go){T=0;break e}break;default:G=Xe,Xe=0,On=null,To(r,b,I,G)}}pA(),T=mt;break}catch(J){Qv(r,J)}while(!0);return i&&r.shellSuspendCounter++,ai=ia=null,Ke=l,Z.H=f,Z.A=d,ke===null&&(rt=null,qe=0,kc()),T}function pA(){for(;ke!==null;)Wv(ke)}function mA(r,i){var a=Ke;Ke|=2;var l=Kv(),f=Xv();rt!==r||qe!==i?(ch=null,uh=Un()+500,Eo(r,i)):go=Vs(r,i);e:do try{if(Xe!==0&&ke!==null){i=ke;var d=On;t:switch(Xe){case 1:Xe=0,On=null,To(r,i,d,1);break;case 2:case 9:if(u_(d)){Xe=0,On=null,Zv(i);break}i=function(){Xe!==2&&Xe!==9||rt!==r||(Xe=7),kr(r)},d.then(i,i);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:u_(d)?(Xe=0,On=null,Zv(i)):(Xe=0,On=null,To(r,i,d,7));break;case 5:var T=null;switch(ke.tag){case 26:T=ke.memoizedState;case 5:case 27:var b=ke;if(!T||k0(T)){Xe=0,On=null;var I=b.sibling;if(I!==null)ke=I;else{var G=b.return;G!==null?(ke=G,fh(G)):ke=null}break t}}Xe=0,On=null,To(r,i,d,5);break;case 6:Xe=0,On=null,To(r,i,d,6);break;case 8:Up(),mt=6;break e;default:throw Error(s(462))}}gA();break}catch(J){Qv(r,J)}while(!0);return ai=ia=null,Z.H=l,Z.A=f,Ke=a,ke!==null?0:(rt=null,qe=0,kc(),mt)}function gA(){for(;ke!==null&&!ll();)Wv(ke)}function Wv(r){var i=Sv(r.alternate,r,pi);r.memoizedProps=r.pendingProps,i===null?fh(r):ke=i}function Zv(r){var i=r,a=i.alternate;switch(i.tag){case 15:case 0:i=_v(a,i,i.pendingProps,i.type,void 0,qe);break;case 11:i=_v(a,i,i.pendingProps,i.type.render,i.ref,qe);break;case 5:np(i);default:xv(a,i),i=ke=Jy(i,pi),i=Sv(a,i,pi)}r.memoizedProps=r.pendingProps,i===null?fh(r):ke=i}function To(r,i,a,l){ai=ia=null,np(i),ho=null,Ql=0;var f=i.return;try{if(sA(r,f,i,a,qe)){mt=1,rh(r,Fn(a,r.current)),ke=null;return}}catch(d){if(f!==null)throw ke=f,d;mt=1,rh(r,Fn(a,r.current)),ke=null;return}i.flags&32768?(He||l===1?r=!0:go||(qe&536870912)!==0?r=!1:(Qi=r=!0,(l===2||l===9||l===3||l===6)&&(l=Kn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Jv(i,r)):fh(i)}function fh(r){var i=r;do{if((i.flags&32768)!==0){Jv(i,Qi);return}r=i.return;var a=oA(i.alternate,i,pi);if(a!==null){ke=a;return}if(i=i.sibling,i!==null){ke=i;return}ke=i=r}while(i!==null);mt===0&&(mt=5)}function Jv(r,i){do{var a=lA(r.alternate,r);if(a!==null){a.flags&=32767,ke=a;return}if(a=r.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(r=r.sibling,r!==null)){ke=r;return}ke=r=a}while(r!==null);mt=6,ke=null}function e0(r,i,a,l,f,d,T,b,I){r.cancelPendingCommit=null;do dh();while(Zt!==0);if((Ke&6)!==0)throw Error(s(327));if(i!==null){if(i===r.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Nd,pl(r,a,d,T,b,I),r===rt&&(ke=rt=null,qe=0),_o=i,Wi=r,vo=a,Vp=d,Lp=f,Hv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,EA(Os,function(){return s0(),null})):(r.callbackNode=null,r.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Z.T,Z.T=null,f=ce.p,ce.p=2,T=Ke,Ke|=4;try{uA(r,i,a)}finally{Ke=T,ce.p=f,Z.T=l}}Zt=1,t0(),n0(),r0()}}function t0(){if(Zt===1){Zt=0;var r=Wi,i=_o,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=Z.T,Z.T=null;var l=ce.p;ce.p=2;var f=Ke;Ke|=4;try{Lv(i,r);var d=Jp,T=$y(r.containerInfo),b=d.focusedElem,I=d.selectionRange;if(T!==b&&b&&b.ownerDocument&&By(b.ownerDocument.documentElement,b)){if(I!==null&&xd(b)){var G=I.start,J=I.end;if(J===void 0&&(J=G),"selectionStart"in b)b.selectionStart=G,b.selectionEnd=Math.min(J,b.value.length);else{var ne=b.ownerDocument||document,Q=ne&&ne.defaultView||window;if(Q.getSelection){var K=Q.getSelection(),Se=b.textContent.length,Ee=Math.min(I.start,Se),et=I.end===void 0?Ee:Math.min(I.end,Se);!K.extend&&Ee>et&&(T=et,et=Ee,Ee=T);var U=zy(b,Ee),M=zy(b,et);if(U&&M&&(K.rangeCount!==1||K.anchorNode!==U.node||K.anchorOffset!==U.offset||K.focusNode!==M.node||K.focusOffset!==M.offset)){var $=ne.createRange();$.setStart(U.node,U.offset),K.removeAllRanges(),Ee>et?(K.addRange($),K.extend(M.node,M.offset)):($.setEnd(M.node,M.offset),K.addRange($))}}}}for(ne=[],K=b;K=K.parentNode;)K.nodeType===1&&ne.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ne.length;b++){var ee=ne[b];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}Ah=!!Zp,Jp=Zp=null}finally{Ke=f,ce.p=l,Z.T=a}}r.current=i,Zt=2}}function n0(){if(Zt===2){Zt=0;var r=Wi,i=_o,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=Z.T,Z.T=null;var l=ce.p;ce.p=2;var f=Ke;Ke|=4;try{kv(r,i.alternate,i)}finally{Ke=f,ce.p=l,Z.T=a}}Zt=3}}function r0(){if(Zt===4||Zt===3){Zt=0,lc();var r=Wi,i=_o,a=vo,l=Hv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Zt=5:(Zt=0,_o=Wi=null,i0(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(Xi=null),La(a),i=i.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Z.T,f=ce.p,ce.p=2,Z.T=null;try{for(var d=r.onRecoverableError,T=0;T<l.length;T++){var b=l[T];d(b.value,{componentStack:b.stack})}}finally{Z.T=i,ce.p=f}}(vo&3)!==0&&dh(),kr(r),f=r.pendingLanes,(a&4194090)!==0&&(f&42)!==0?r===jp?ru++:(ru=0,jp=r):ru=0,iu(0)}}function i0(r,i){(r.pooledCacheLanes&=i)===0&&(i=r.pooledCache,i!=null&&(r.pooledCache=null,Ll(i)))}function dh(r){return t0(),n0(),r0(),s0()}function s0(){if(Zt!==5)return!1;var r=Wi,i=Vp;Vp=0;var a=La(vo),l=Z.T,f=ce.p;try{ce.p=32>a?32:a,Z.T=null,a=Lp,Lp=null;var d=Wi,T=vo;if(Zt=0,_o=Wi=null,vo=0,(Ke&6)!==0)throw Error(s(331));var b=Ke;if(Ke|=4,Bv(d.current),Uv(d,d.current,T,a),Ke=b,iu(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{ce.p=f,Z.T=l,i0(r,i)}}function a0(r,i,a){i=Fn(a,i),i=gp(r.stateNode,i,2),r=zi(r,i,2),r!==null&&(Gr(r,2),kr(r))}function tt(r,i,a){if(r.tag===3)a0(r,r,a);else for(;i!==null;){if(i.tag===3){a0(i,r,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xi===null||!Xi.has(l))){r=Fn(a,r),a=cv(2),l=zi(i,a,2),l!==null&&(hv(a,l,i,r),Gr(l,2),kr(l));break}}i=i.return}}function Bp(r,i,a){var l=r.pingCache;if(l===null){l=r.pingCache=new fA;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(Op=!0,f.add(a),r=yA.bind(null,r,i,a),i.then(r,r))}function yA(r,i,a){var l=r.pingCache;l!==null&&l.delete(i),r.pingedLanes|=r.suspendedLanes&a,r.warmLanes&=~a,rt===r&&(qe&a)===a&&(mt===4||mt===3&&(qe&62914560)===qe&&300>Un()-Pp?(Ke&2)===0&&Eo(r,0):kp|=a,yo===qe&&(yo=0)),kr(r)}function o0(r,i){i===0&&(i=dl()),r=to(r,i),r!==null&&(Gr(r,i),kr(r))}function _A(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),o0(r,a)}function vA(r,i){var a=0;switch(r.tag){case 13:var l=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=r.stateNode;break;case 22:l=r.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),o0(r,a)}function EA(r,i){return Ds(r,i)}var ph=null,bo=null,$p=!1,mh=!1,Hp=!1,ha=0;function kr(r){r!==bo&&r.next===null&&(bo===null?ph=bo=r:bo=bo.next=r),mh=!0,$p||($p=!0,bA())}function iu(r,i){if(!Hp&&mh){Hp=!0;do for(var a=!1,l=ph;l!==null;){if(r!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var T=l.suspendedLanes,b=l.pingedLanes;d=(1<<31-an(42|r)+1)-1,d&=f&~(T&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,h0(l,d))}else d=qe,d=Va(l,l===rt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Vs(l,d)||(a=!0,h0(l,d));l=l.next}while(a);Hp=!1}}function TA(){l0()}function l0(){mh=$p=!1;var r=0;ha!==0&&(DA()&&(r=ha),ha=0);for(var i=Un(),a=null,l=ph;l!==null;){var f=l.next,d=u0(l,i);d===0?(l.next=null,a===null?ph=f:a.next=f,f===null&&(bo=a)):(a=l,(r!==0||(d&3)!==0)&&(mh=!0)),l=f}iu(r)}function u0(r,i){for(var a=r.suspendedLanes,l=r.pingedLanes,f=r.expirationTimes,d=r.pendingLanes&-62914561;0<d;){var T=31-an(d),b=1<<T,I=f[T];I===-1?((b&a)===0||(b&l)!==0)&&(f[T]=hl(b,i)):I<=i&&(r.expiredLanes|=b),d&=~b}if(i=rt,a=qe,a=Va(r,r===i?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),l=r.callbackNode,a===0||r===i&&(Xe===2||Xe===9)||r.cancelPendingCommit!==null)return l!==null&&l!==null&&Ns(l),r.callbackNode=null,r.callbackPriority=0;if((a&3)===0||Vs(r,a)){if(i=a&-a,i===r.callbackPriority)return i;switch(l!==null&&Ns(l),La(a)){case 2:case 8:a=Ma;break;case 32:a=Os;break;case 268435456:a=Pa;break;default:a=Os}return l=c0.bind(null,r),a=Ds(a,l),r.callbackPriority=i,r.callbackNode=a,i}return l!==null&&l!==null&&Ns(l),r.callbackPriority=2,r.callbackNode=null,2}function c0(r,i){if(Zt!==0&&Zt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var a=r.callbackNode;if(dh()&&r.callbackNode!==a)return null;var l=qe;return l=Va(r,r===rt?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),l===0?null:(Gv(r,l,i),u0(r,Un()),r.callbackNode!=null&&r.callbackNode===a?c0.bind(null,r):null)}function h0(r,i){if(dh())return null;Gv(r,i,!0)}function bA(){OA(function(){(Ke&6)!==0?Ds(ul,TA):l0()})}function Fp(){return ha===0&&(ha=fl()),ha}function f0(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:$a(""+r)}function d0(r,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,r.id&&a.setAttribute("form",r.id),i.parentNode.insertBefore(a,i),r=new FormData(r),a.parentNode.removeChild(a),r}function wA(r,i,a,l,f){if(i==="submit"&&a&&a.stateNode===f){var d=f0((f[Tt]||null).action),T=l.submitter;T&&(i=(i=T[Tt]||null)?f0(i.formAction):T.getAttribute("formAction"),i!==null&&(d=i,T=null));var b=new Ha("action","action",null,l,f);r.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ha!==0){var I=T?d0(f,T):new FormData(f);hp(a,{pending:!0,data:I,method:f.method,action:d},null,I)}}else typeof d=="function"&&(b.preventDefault(),I=T?d0(f,T):new FormData(f),hp(a,{pending:!0,data:I,method:f.method,action:d},d,I))},currentTarget:f}]})}}for(var Gp=0;Gp<Dd.length;Gp++){var Yp=Dd[Gp],SA=Yp.toLowerCase(),AA=Yp[0].toUpperCase()+Yp.slice(1);sr(SA,"on"+AA)}sr(Gy,"onAnimationEnd"),sr(Yy,"onAnimationIteration"),sr(Qy,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(BS,"onTransitionRun"),sr($S,"onTransitionStart"),sr(HS,"onTransitionCancel"),sr(Ky,"onTransitionEnd"),Qr("onMouseEnter",["mouseout","mouseover"]),Qr("onMouseLeave",["mouseout","mouseover"]),Qr("onPointerEnter",["pointerout","pointerover"]),Qr("onPointerLeave",["pointerout","pointerover"]),rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rr("onBeforeInput",["compositionend","keypress","textInput","paste"]),rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function p0(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var l=r[a],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var T=l.length-1;0<=T;T--){var b=l[T],I=b.instance,G=b.currentTarget;if(b=b.listener,I!==d&&f.isPropagationStopped())break e;d=b,f.currentTarget=G;try{d(f)}catch(J){nh(J)}f.currentTarget=null,d=I}else for(T=0;T<l.length;T++){if(b=l[T],I=b.instance,G=b.currentTarget,b=b.listener,I!==d&&f.isPropagationStopped())break e;d=b,f.currentTarget=G;try{d(f)}catch(J){nh(J)}f.currentTarget=null,d=I}}}}function Me(r,i){var a=i[gl];a===void 0&&(a=i[gl]=new Set);var l=r+"__bubble";a.has(l)||(m0(i,r,2,!1),a.add(l))}function Qp(r,i,a){var l=0;i&&(l|=4),m0(a,r,l,i)}var gh="_reactListening"+Math.random().toString(36).slice(2);function Kp(r){if(!r[gh]){r[gh]=!0,yl.forEach(function(a){a!=="selectionchange"&&(xA.has(a)||Qp(a,!1,r),Qp(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[gh]||(i[gh]=!0,Qp("selectionchange",!1,i))}}function m0(r,i,a,l){switch(U0(i)){case 2:var f=JA;break;case 8:f=ex;break;default:f=um}a=f.bind(null,i,a,r),f=void 0,!$n||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?r.addEventListener(i,a,{capture:!0,passive:f}):r.addEventListener(i,a,!0):f!==void 0?r.addEventListener(i,a,{passive:f}):r.addEventListener(i,a,!1)}function Xp(r,i,a,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var T=l.tag;if(T===3||T===4){var b=l.stateNode.containerInfo;if(b===f)break;if(T===4)for(T=l.return;T!==null;){var I=T.tag;if((I===3||I===4)&&T.stateNode.containerInfo===f)return;T=T.return}for(;b!==null;){if(T=Yr(b),T===null)return;if(I=T.tag,I===5||I===6||I===26||I===27){l=d=T;continue e}b=b.parentNode}}l=l.return}_c(function(){var G=d,J=Bn(a),ne=[];e:{var Q=Xy.get(r);if(Q!==void 0){var K=Ha,Se=r;switch(r){case"keypress":if(Sr(a)===0)break e;case"keydown":case"keyup":K=Xa;break;case"focusin":Se="focus",K=Ya;break;case"focusout":Se="blur",K=Ya;break;case"beforeblur":case"afterblur":K=Ya;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=bd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=xc;break;case Gy:case Yy:case Qy:K=Qa;break;case Ky:K=Ic;break;case"scroll":case"scrollend":K=vc;break;case"wheel":K=Wa;break;case"copy":case"cut":case"paste":K=Ka;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Cl;break;case"toggle":case"beforetoggle":K=Dc}var Ee=(i&4)!==0,et=!Ee&&(r==="scroll"||r==="scrollend"),U=Ee?Q!==null?Q+"Capture":null:Q;Ee=[];for(var M=G,$;M!==null;){var ee=M;if($=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||$===null||U===null||(ee=Hs(M,U),ee!=null&&Ee.push(au(M,ee,$))),et)break;M=M.return}0<Ee.length&&(Q=new K(Q,Se,null,a,J),ne.push({event:Q,listeners:Ee}))}}if((i&7)===0){e:{if(Q=r==="mouseover"||r==="pointerover",K=r==="mouseout"||r==="pointerout",Q&&a!==Wr&&(Se=a.relatedTarget||a.fromElement)&&(Yr(Se)||Se[qn]))break e;if((K||Q)&&(Q=J.window===J?J:(Q=J.ownerDocument)?Q.defaultView||Q.parentWindow:window,K?(Se=a.relatedTarget||a.toElement,K=G,Se=Se?Yr(Se):null,Se!==null&&(et=u(Se),Ee=Se.tag,Se!==et||Ee!==5&&Ee!==27&&Ee!==6)&&(Se=null)):(K=null,Se=G),K!==Se)){if(Ee=Hn,ee="onMouseLeave",U="onMouseEnter",M="mouse",(r==="pointerout"||r==="pointerover")&&(Ee=Cl,ee="onPointerLeave",U="onPointerEnter",M="pointer"),et=K==null?Q:Er(K),$=Se==null?Q:Er(Se),Q=new Ee(ee,M+"leave",K,a,J),Q.target=et,Q.relatedTarget=$,ee=null,Yr(J)===G&&(Ee=new Ee(U,M+"enter",Se,a,J),Ee.target=$,Ee.relatedTarget=et,ee=Ee),et=ee,K&&Se)t:{for(Ee=K,U=Se,M=0,$=Ee;$;$=wo($))M++;for($=0,ee=U;ee;ee=wo(ee))$++;for(;0<M-$;)Ee=wo(Ee),M--;for(;0<$-M;)U=wo(U),$--;for(;M--;){if(Ee===U||U!==null&&Ee===U.alternate)break t;Ee=wo(Ee),U=wo(U)}Ee=null}else Ee=null;K!==null&&g0(ne,Q,K,Ee,!1),Se!==null&&et!==null&&g0(ne,et,Se,Ee,!0)}}e:{if(Q=G?Er(G):window,K=Q.nodeName&&Q.nodeName.toLowerCase(),K==="select"||K==="input"&&Q.type==="file")var pe=Py;else if(kt(Q))if(Vy)pe=US;else{pe=LS;var Oe=VS}else K=Q.nodeName,!K||K.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?G&&bl(G.elementType)&&(pe=Py):pe=jS;if(pe&&(pe=pe(r,G))){ni(ne,pe,a,J);break e}Oe&&Oe(r,Q,G),r==="focusout"&&G&&Q.type==="number"&&G.memoizedProps.value!=null&&Vi(Q,"number",Q.value)}switch(Oe=G?Er(G):window,r){case"focusin":(kt(Oe)||Oe.contentEditable==="true")&&(Za=Oe,Rd=G,Ol=null);break;case"focusout":Ol=Rd=Za=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,Hy(ne,a,J);break;case"selectionchange":if(zS)break;case"keydown":case"keyup":Hy(ne,a,J)}var ye;if(Rr)e:{switch(r){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else je?W(r,a)&&(Te="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(v&&a.locale!=="ko"&&(je||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&je&&(ye=Sl()):(wr=J,Li="value"in wr?wr.value:wr.textContent,je=!0)),Oe=yh(G,Te),0<Oe.length&&(Te=new Rl(Te,r,null,a,J),ne.push({event:Te,listeners:Oe}),ye?Te.data=ye:(ye=ue(a),ye!==null&&(Te.data=ye)))),(ye=y?Ot(r,a):Ue(r,a))&&(Te=yh(G,"onBeforeInput"),0<Te.length&&(Oe=new Rl("onBeforeInput","beforeinput",null,a,J),ne.push({event:Oe,listeners:Te}),Oe.data=ye)),wA(ne,r,G,a,J)}p0(ne,i)})}function au(r,i,a){return{instance:r,listener:i,currentTarget:a}}function yh(r,i){for(var a=i+"Capture",l=[];r!==null;){var f=r,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Hs(r,a),f!=null&&l.unshift(au(r,f,d)),f=Hs(r,i),f!=null&&l.push(au(r,f,d))),r.tag===3)return l;r=r.return}return[]}function wo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function g0(r,i,a,l,f){for(var d=i._reactName,T=[];a!==null&&a!==l;){var b=a,I=b.alternate,G=b.stateNode;if(b=b.tag,I!==null&&I===l)break;b!==5&&b!==26&&b!==27||G===null||(I=G,f?(G=Hs(a,d),G!=null&&T.unshift(au(a,G,I))):f||(G=Hs(a,d),G!=null&&T.push(au(a,G,I)))),a=a.return}T.length!==0&&r.push({event:i,listeners:T})}var RA=/\r\n?/g,IA=/\u0000|\uFFFD/g;function y0(r){return(typeof r=="string"?r:""+r).replace(RA,`
`).replace(IA,"")}function _0(r,i){return i=y0(i),y0(r)===i}function _h(){}function Je(r,i,a,l,f,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||zn(r,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&zn(r,""+l);break;case"className":Tr(r,"class",l);break;case"tabIndex":Tr(r,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Tr(r,a,l);break;case"style":Tl(r,l,d);break;case"data":if(i!=="object"){Tr(r,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){r.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){r.removeAttribute(a);break}l=$a(""+l),r.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){r.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Je(r,i,"name",f.name,f,null),Je(r,i,"formEncType",f.formEncType,f,null),Je(r,i,"formMethod",f.formMethod,f,null),Je(r,i,"formTarget",f.formTarget,f,null)):(Je(r,i,"encType",f.encType,f,null),Je(r,i,"method",f.method,f,null),Je(r,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){r.removeAttribute(a);break}l=$a(""+l),r.setAttribute(a,l);break;case"onClick":l!=null&&(r.onclick=_h);break;case"onScroll":l!=null&&Me("scroll",r);break;case"onScrollEnd":l!=null&&Me("scrollend",r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));r.innerHTML=a}}break;case"multiple":r.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":r.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){r.removeAttribute("xlink:href");break}a=$a(""+l),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?r.setAttribute(a,""+l):r.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?r.setAttribute(a,""):r.removeAttribute(a);break;case"capture":case"download":l===!0?r.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?r.setAttribute(a,l):r.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?r.setAttribute(a,l):r.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?r.removeAttribute(a):r.setAttribute(a,l);break;case"popover":Me("beforetoggle",r),Me("toggle",r),Pi(r,"popover",l);break;case"xlinkActuate":Kt(r,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Kt(r,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Kt(r,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Kt(r,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Kt(r,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Kt(r,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Kt(r,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Kt(r,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Kt(r,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pi(r,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ed.get(a)||a,Pi(r,a,l))}}function Wp(r,i,a,l,f,d){switch(a){case"style":Tl(r,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));r.innerHTML=a}}break;case"children":typeof l=="string"?zn(r,l):(typeof l=="number"||typeof l=="bigint")&&zn(r,""+l);break;case"onScroll":l!=null&&Me("scroll",r);break;case"onScrollEnd":l!=null&&Me("scrollend",r);break;case"onClick":l!=null&&(r.onclick=_h);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ja.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),d=r[Tt]||null,d=d!=null?d[a]:null,typeof d=="function"&&r.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(a in r?r[a]=null:r.hasAttribute(a)&&r.removeAttribute(a)),r.addEventListener(i,l,f);break e}a in r?r[a]=l:l===!0?r.setAttribute(a,""):Pi(r,a,l)}}}function Jt(r,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",r),Me("load",r);var l=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var T=a[d];if(T!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Je(r,i,d,T,a,null)}}f&&Je(r,i,"srcSet",a.srcSet,a,null),l&&Je(r,i,"src",a.src,a,null);return;case"input":Me("invalid",r);var b=d=T=f=null,I=null,G=null;for(l in a)if(a.hasOwnProperty(l)){var J=a[l];if(J!=null)switch(l){case"name":f=J;break;case"type":T=J;break;case"checked":I=J;break;case"defaultChecked":G=J;break;case"value":d=J;break;case"defaultValue":b=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(s(137,i));break;default:Je(r,i,l,J,a,null)}}zs(r,d,b,I,G,T,f,!1),Ba(r);return;case"select":Me("invalid",r),l=T=d=null;for(f in a)if(a.hasOwnProperty(f)&&(b=a[f],b!=null))switch(f){case"value":d=b;break;case"defaultValue":T=b;break;case"multiple":l=b;default:Je(r,i,f,b,a,null)}i=d,a=T,r.multiple=!!l,i!=null?Xr(r,!!l,i,!1):a!=null&&Xr(r,!!l,a,!0);return;case"textarea":Me("invalid",r),d=f=l=null;for(T in a)if(a.hasOwnProperty(T)&&(b=a[T],b!=null))switch(T){case"value":l=b;break;case"defaultValue":f=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Je(r,i,T,b,a,null)}Bs(r,l,f,d),Ba(r);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":r.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Je(r,i,I,l,a,null)}return;case"dialog":Me("beforetoggle",r),Me("toggle",r),Me("cancel",r),Me("close",r);break;case"iframe":case"object":Me("load",r);break;case"video":case"audio":for(l=0;l<su.length;l++)Me(su[l],r);break;case"image":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"embed":case"source":case"link":Me("error",r),Me("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in a)if(a.hasOwnProperty(G)&&(l=a[G],l!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Je(r,i,G,l,a,null)}return;default:if(bl(i)){for(J in a)a.hasOwnProperty(J)&&(l=a[J],l!==void 0&&Wp(r,i,J,l,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!=null&&Je(r,i,b,l,a,null))}function CA(r,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,T=null,b=null,I=null,G=null,J=null;for(K in a){var ne=a[K];if(a.hasOwnProperty(K)&&ne!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":I=ne;default:l.hasOwnProperty(K)||Je(r,i,K,null,l,ne)}}for(var Q in l){var K=l[Q];if(ne=a[Q],l.hasOwnProperty(Q)&&(K!=null||ne!=null))switch(Q){case"type":d=K;break;case"name":f=K;break;case"checked":G=K;break;case"defaultChecked":J=K;break;case"value":T=K;break;case"defaultValue":b=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:K!==ne&&Je(r,i,Q,K,l,ne)}}Rn(r,T,b,I,G,J,d,f);return;case"select":K=T=b=Q=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":K=I;default:l.hasOwnProperty(d)||Je(r,i,d,null,l,I)}for(f in l)if(d=l[f],I=a[f],l.hasOwnProperty(f)&&(d!=null||I!=null))switch(f){case"value":Q=d;break;case"defaultValue":b=d;break;case"multiple":T=d;default:d!==I&&Je(r,i,f,d,l,I)}i=b,a=T,l=K,Q!=null?Xr(r,!!a,Q,!1):!!l!=!!a&&(i!=null?Xr(r,!!a,i,!0):Xr(r,!!a,a?[]:"",!1));return;case"textarea":K=Q=null;for(b in a)if(f=a[b],a.hasOwnProperty(b)&&f!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Je(r,i,b,null,l,f)}for(T in l)if(f=l[T],d=a[T],l.hasOwnProperty(T)&&(f!=null||d!=null))switch(T){case"value":Q=f;break;case"defaultValue":K=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&Je(r,i,T,f,l,d)}We(r,Q,K);return;case"option":for(var Se in a)if(Q=a[Se],a.hasOwnProperty(Se)&&Q!=null&&!l.hasOwnProperty(Se))switch(Se){case"selected":r.selected=!1;break;default:Je(r,i,Se,null,l,Q)}for(I in l)if(Q=l[I],K=a[I],l.hasOwnProperty(I)&&Q!==K&&(Q!=null||K!=null))switch(I){case"selected":r.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:Je(r,i,I,Q,l,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in a)Q=a[Ee],a.hasOwnProperty(Ee)&&Q!=null&&!l.hasOwnProperty(Ee)&&Je(r,i,Ee,null,l,Q);for(G in l)if(Q=l[G],K=a[G],l.hasOwnProperty(G)&&Q!==K&&(Q!=null||K!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,i));break;default:Je(r,i,G,Q,l,K)}return;default:if(bl(i)){for(var et in a)Q=a[et],a.hasOwnProperty(et)&&Q!==void 0&&!l.hasOwnProperty(et)&&Wp(r,i,et,void 0,l,Q);for(J in l)Q=l[J],K=a[J],!l.hasOwnProperty(J)||Q===K||Q===void 0&&K===void 0||Wp(r,i,J,Q,l,K);return}}for(var U in a)Q=a[U],a.hasOwnProperty(U)&&Q!=null&&!l.hasOwnProperty(U)&&Je(r,i,U,null,l,Q);for(ne in l)Q=l[ne],K=a[ne],!l.hasOwnProperty(ne)||Q===K||Q==null&&K==null||Je(r,i,ne,Q,l,K)}var Zp=null,Jp=null;function vh(r){return r.nodeType===9?r:r.ownerDocument}function v0(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E0(r,i){if(r===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&i==="foreignObject"?0:r}function em(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tm=null;function DA(){var r=window.event;return r&&r.type==="popstate"?r===tm?!1:(tm=r,!0):(tm=null,!1)}var T0=typeof setTimeout=="function"?setTimeout:void 0,NA=typeof clearTimeout=="function"?clearTimeout:void 0,b0=typeof Promise=="function"?Promise:void 0,OA=typeof queueMicrotask=="function"?queueMicrotask:typeof b0<"u"?function(r){return b0.resolve(null).then(r).catch(kA)}:T0;function kA(r){setTimeout(function(){throw r})}function Ji(r){return r==="head"}function w0(r,i){var a=i,l=0,f=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var T=r.ownerDocument;if(a&1&&ou(T.documentElement),a&2&&ou(T.body),a&4)for(a=T.head,ou(a),T=a.firstChild;T;){var b=T.nextSibling,I=T.nodeName;T[Ls]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&T.rel.toLowerCase()==="stylesheet"||a.removeChild(T),T=b}}if(f===0){r.removeChild(d),mu(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);mu(i)}function nm(r){var i=r.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nm(a),Mi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}r.removeChild(a)}}function MA(r,i,a,l){for(;r.nodeType===1;){var f=a;if(r.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(l){if(!r[Ls])switch(i){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(d=r.getAttribute("rel"),d==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(d!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(d=r.getAttribute("src"),(d!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(i==="input"&&r.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===d)return r}else return r;if(r=or(r.nextSibling),r===null)break}return null}function PA(r,i,a){if(i==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!a||(r=or(r.nextSibling),r===null))return null;return r}function rm(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function VA(r,i){var a=r.ownerDocument;if(r.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),r._reactRetry=l}}function or(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return r}var im=null;function S0(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}function A0(r,i,a){switch(i=vh(a),r){case"html":if(r=i.documentElement,!r)throw Error(s(452));return r;case"head":if(r=i.head,!r)throw Error(s(453));return r;case"body":if(r=i.body,!r)throw Error(s(454));return r;default:throw Error(s(451))}}function ou(r){for(var i=r.attributes;i.length;)r.removeAttributeNode(i[0]);Mi(r)}var Wn=new Map,x0=new Set;function Eh(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var mi=ce.d;ce.d={f:LA,r:jA,D:UA,C:qA,L:zA,m:BA,X:HA,S:$A,M:FA};function LA(){var r=mi.f(),i=hh();return r||i}function jA(r){var i=vr(r);i!==null&&i.tag===5&&i.type==="form"?G_(i):mi.r(r)}var So=typeof document>"u"?null:document;function R0(r,i,a){var l=So;if(l&&typeof i=="string"&&i){var f=bt(i);f='link[rel="'+r+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),x0.has(f)||(x0.add(f),r={rel:r,crossOrigin:a,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Jt(i,"link",r),yt(i),l.head.appendChild(i)))}}function UA(r){mi.D(r),R0("dns-prefetch",r,null)}function qA(r,i){mi.C(r,i),R0("preconnect",r,i)}function zA(r,i,a){mi.L(r,i,a);var l=So;if(l&&r&&i){var f='link[rel="preload"][as="'+bt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+bt(a.imageSizes)+'"]')):f+='[href="'+bt(r)+'"]';var d=f;switch(i){case"style":d=Ao(r);break;case"script":d=xo(r)}Wn.has(d)||(r=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:r,as:i},a),Wn.set(d,r),l.querySelector(f)!==null||i==="style"&&l.querySelector(lu(d))||i==="script"&&l.querySelector(uu(d))||(i=l.createElement("link"),Jt(i,"link",r),yt(i),l.head.appendChild(i)))}}function BA(r,i){mi.m(r,i);var a=So;if(a&&r){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+bt(l)+'"][href="'+bt(r)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=xo(r)}if(!Wn.has(d)&&(r=E({rel:"modulepreload",href:r},i),Wn.set(d,r),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(uu(d)))return}l=a.createElement("link"),Jt(l,"link",r),yt(l),a.head.appendChild(l)}}}function $A(r,i,a){mi.S(r,i,a);var l=So;if(l&&r){var f=gn(l).hoistableStyles,d=Ao(r);i=i||"default";var T=f.get(d);if(!T){var b={loading:0,preload:null};if(T=l.querySelector(lu(d)))b.loading=5;else{r=E({rel:"stylesheet",href:r,"data-precedence":i},a),(a=Wn.get(d))&&sm(r,a);var I=T=l.createElement("link");yt(I),Jt(I,"link",r),I._p=new Promise(function(G,J){I.onload=G,I.onerror=J}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Th(T,i,l)}T={type:"stylesheet",instance:T,count:1,state:b},f.set(d,T)}}}function HA(r,i){mi.X(r,i);var a=So;if(a&&r){var l=gn(a).hoistableScripts,f=xo(r),d=l.get(f);d||(d=a.querySelector(uu(f)),d||(r=E({src:r,async:!0},i),(i=Wn.get(f))&&am(r,i),d=a.createElement("script"),yt(d),Jt(d,"link",r),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function FA(r,i){mi.M(r,i);var a=So;if(a&&r){var l=gn(a).hoistableScripts,f=xo(r),d=l.get(f);d||(d=a.querySelector(uu(f)),d||(r=E({src:r,async:!0,type:"module"},i),(i=Wn.get(f))&&am(r,i),d=a.createElement("script"),yt(d),Jt(d,"link",r),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function I0(r,i,a,l){var f=(f=ve.current)?Eh(f):null;if(!f)throw Error(s(446));switch(r){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ao(a.href),a=gn(f).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){r=Ao(a.href);var d=gn(f).hoistableStyles,T=d.get(r);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(r,T),(d=f.querySelector(lu(r)))&&!d._p&&(T.instance=d,T.state.loading=5),Wn.has(r)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Wn.set(r,a),d||GA(f,r,a,T.state))),i&&l===null)throw Error(s(528,""));return T}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=xo(a),a=gn(f).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,r))}}function Ao(r){return'href="'+bt(r)+'"'}function lu(r){return'link[rel="stylesheet"]['+r+"]"}function C0(r){return E({},r,{"data-precedence":r.precedence,precedence:null})}function GA(r,i,a,l){r.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=r.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Jt(i,"link",a),yt(i),r.head.appendChild(i))}function xo(r){return'[src="'+bt(r)+'"]'}function uu(r){return"script[async]"+r}function D0(r,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=r.querySelector('style[data-href~="'+bt(a.href)+'"]');if(l)return i.instance=l,yt(l),l;var f=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(r.ownerDocument||r).createElement("style"),yt(l),Jt(l,"style",f),Th(l,a.precedence,r),i.instance=l;case"stylesheet":f=Ao(a.href);var d=r.querySelector(lu(f));if(d)return i.state.loading|=4,i.instance=d,yt(d),d;l=C0(a),(f=Wn.get(f))&&sm(l,f),d=(r.ownerDocument||r).createElement("link"),yt(d);var T=d;return T._p=new Promise(function(b,I){T.onload=b,T.onerror=I}),Jt(d,"link",l),i.state.loading|=4,Th(d,a.precedence,r),i.instance=d;case"script":return d=xo(a.src),(f=r.querySelector(uu(d)))?(i.instance=f,yt(f),f):(l=a,(f=Wn.get(d))&&(l=E({},a),am(l,f)),r=r.ownerDocument||r,f=r.createElement("script"),yt(f),Jt(f,"link",l),r.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Th(l,a.precedence,r));return i.instance}function Th(r,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,T=0;T<l.length;T++){var b=l[T];if(b.dataset.precedence===i)d=b;else if(d!==f)break}d?d.parentNode.insertBefore(r,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(r,i.firstChild))}function sm(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.title==null&&(r.title=i.title)}function am(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.integrity==null&&(r.integrity=i.integrity)}var bh=null;function N0(r,i,a){if(bh===null){var l=new Map,f=bh=new Map;f.set(a,l)}else f=bh,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(r))return l;for(l.set(r,null),a=a.getElementsByTagName(r),f=0;f<a.length;f++){var d=a[f];if(!(d[Ls]||d[Nt]||r==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var T=d.getAttribute(i)||"";T=r+T;var b=l.get(T);b?b.push(d):l.set(T,[d])}}return l}function O0(r,i,a){r=r.ownerDocument||r,r.head.insertBefore(a,i==="title"?r.querySelector("head > title"):null)}function YA(r,i,a){if(a===1||i.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return r=i.disabled,typeof i.precedence=="string"&&r==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function k0(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var cu=null;function QA(){}function KA(r,i,a){if(cu===null)throw Error(s(475));var l=cu;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Ao(a.href),d=r.querySelector(lu(f));if(d){r=d._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(l.count++,l=wh.bind(l),r.then(l,l)),i.state.loading|=4,i.instance=d,yt(d);return}d=r.ownerDocument||r,a=C0(a),(f=Wn.get(f))&&sm(a,f),d=d.createElement("link"),yt(d);var T=d;T._p=new Promise(function(b,I){T.onload=b,T.onerror=I}),Jt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,r),(r=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=wh.bind(l),r.addEventListener("load",i),r.addEventListener("error",i))}}function XA(){if(cu===null)throw Error(s(475));var r=cu;return r.stylesheets&&r.count===0&&om(r,r.stylesheets),0<r.count?function(i){var a=setTimeout(function(){if(r.stylesheets&&om(r,r.stylesheets),r.unsuspend){var l=r.unsuspend;r.unsuspend=null,l()}},6e4);return r.unsuspend=i,function(){r.unsuspend=null,clearTimeout(a)}}:null}function wh(){if(this.count--,this.count===0){if(this.stylesheets)om(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Sh=null;function om(r,i){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Sh=new Map,i.forEach(WA,r),Sh=null,wh.call(r))}function WA(r,i){if(!(i.state.loading&4)){var a=Sh.get(r);if(a)var l=a.get(null);else{a=new Map,Sh.set(r,a);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var T=f[d];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(a.set(T.dataset.precedence,T),l=T)}l&&a.set(null,l)}f=i.instance,T=f.getAttribute("data-precedence"),d=a.get(T)||l,d===l&&a.set(null,f),a.set(T,f),this.count++,l=wh.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),i.state.loading|=4}}var hu={$$typeof:X,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function ZA(r,i,a,l,f,d,T,b){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fr(0),this.hiddenUpdates=Fr(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function M0(r,i,a,l,f,d,T,b,I,G,J,ne){return r=new ZA(r,i,a,T,b,I,G,ne),i=1,d===!0&&(i|=24),d=Cn(3,null,null,i),r.current=d,d.stateNode=r,i=Bd(),i.refCount++,r.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Gd(d),r}function P0(r){return r?(r=no,r):no}function V0(r,i,a,l,f,d){f=P0(f),l.context===null?l.context=f:l.pendingContext=f,l=qi(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=zi(r,l,i),a!==null&&(Mn(a,r,i),zl(a,r,i))}function L0(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function lm(r,i){L0(r,i),(r=r.alternate)&&L0(r,i)}function j0(r){if(r.tag===13){var i=to(r,67108864);i!==null&&Mn(i,r,67108864),lm(r,67108864)}}var Ah=!0;function JA(r,i,a,l){var f=Z.T;Z.T=null;var d=ce.p;try{ce.p=2,um(r,i,a,l)}finally{ce.p=d,Z.T=f}}function ex(r,i,a,l){var f=Z.T;Z.T=null;var d=ce.p;try{ce.p=8,um(r,i,a,l)}finally{ce.p=d,Z.T=f}}function um(r,i,a,l){if(Ah){var f=cm(l);if(f===null)Xp(r,i,l,xh,a),q0(r,l);else if(nx(f,r,i,a,l))l.stopPropagation();else if(q0(r,l),i&4&&-1<tx.indexOf(r)){for(;f!==null;){var d=vr(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var T=nr(d.pendingLanes);if(T!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;T;){var I=1<<31-an(T);b.entanglements[1]|=I,T&=~I}kr(d),(Ke&6)===0&&(uh=Un()+500,iu(0))}}break;case 13:b=to(d,2),b!==null&&Mn(b,d,2),hh(),lm(d,2)}if(d=cm(l),d===null&&Xp(r,i,l,xh,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else Xp(r,i,l,null,a)}}function cm(r){return r=Bn(r),hm(r)}var xh=null;function hm(r){if(xh=null,r=Yr(r),r!==null){var i=u(r);if(i===null)r=null;else{var a=i.tag;if(a===13){if(r=h(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null)}}return xh=r,null}function U0(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pd()){case ul:return 2;case Ma:return 8;case Os:case md:return 32;case Pa:return 268435456;default:return 32}default:return 32}}var fm=!1,es=null,ts=null,ns=null,fu=new Map,du=new Map,rs=[],tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(r,i){switch(r){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":fu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":du.delete(i.pointerId)}}function pu(r,i,a,l,f,d){return r===null||r.nativeEvent!==d?(r={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=vr(i),i!==null&&j0(i)),r):(r.eventSystemFlags|=l,i=r.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),r)}function nx(r,i,a,l,f){switch(i){case"focusin":return es=pu(es,r,i,a,l,f),!0;case"dragenter":return ts=pu(ts,r,i,a,l,f),!0;case"mouseover":return ns=pu(ns,r,i,a,l,f),!0;case"pointerover":var d=f.pointerId;return fu.set(d,pu(fu.get(d)||null,r,i,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,du.set(d,pu(du.get(d)||null,r,i,a,l,f)),!0}return!1}function z0(r){var i=Yr(r.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){r.blockedOn=i,hc(r.priority,function(){if(a.tag===13){var l=kn();l=Ni(l);var f=to(a,l);f!==null&&Mn(f,a,l),lm(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Rh(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=cm(r.nativeEvent);if(a===null){a=r.nativeEvent;var l=new a.constructor(a.type,a);Wr=l,a.target.dispatchEvent(l),Wr=null}else return i=vr(a),i!==null&&j0(i),r.blockedOn=a,!1;i.shift()}return!0}function B0(r,i,a){Rh(r)&&a.delete(i)}function rx(){fm=!1,es!==null&&Rh(es)&&(es=null),ts!==null&&Rh(ts)&&(ts=null),ns!==null&&Rh(ns)&&(ns=null),fu.forEach(B0),du.forEach(B0)}function Ih(r,i){r.blockedOn===i&&(r.blockedOn=null,fm||(fm=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,rx)))}var Ch=null;function $0(r){Ch!==r&&(Ch=r,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Ch===r&&(Ch=null);for(var i=0;i<r.length;i+=3){var a=r[i],l=r[i+1],f=r[i+2];if(typeof l!="function"){if(hm(l||a)===null)continue;break}var d=vr(a);d!==null&&(r.splice(i,3),i-=3,hp(d,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function mu(r){function i(I){return Ih(I,r)}es!==null&&Ih(es,r),ts!==null&&Ih(ts,r),ns!==null&&Ih(ns,r),fu.forEach(i),du.forEach(i);for(var a=0;a<rs.length;a++){var l=rs[a];l.blockedOn===r&&(l.blockedOn=null)}for(;0<rs.length&&(a=rs[0],a.blockedOn===null);)z0(a),a.blockedOn===null&&rs.shift();if(a=(r.ownerDocument||r).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],d=a[l+1],T=f[Tt]||null;if(typeof d=="function")T||$0(a);else if(T){var b=null;if(d&&d.hasAttribute("formAction")){if(f=d,T=d[Tt]||null)b=T.formAction;else if(hm(f)!==null)continue}else b=T.action;typeof b=="function"?a[l+1]=b:(a.splice(l,3),l-=3),$0(a)}}}function dm(r){this._internalRoot=r}Dh.prototype.render=dm.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=kn();V0(a,l,r,i,null,null)},Dh.prototype.unmount=dm.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;V0(r.current,2,null,r,null,null),hh(),i[qn]=null}};function Dh(r){this._internalRoot=r}Dh.prototype.unstable_scheduleHydration=function(r){if(r){var i=Oi();r={blockedOn:null,target:r,priority:i};for(var a=0;a<rs.length&&i!==0&&i<rs[a].priority;a++);rs.splice(a,0,r),a===0&&z0(r)}};var H0=e.version;if(H0!=="19.1.0")throw Error(s(527,H0,"19.1.0"));ce.findDOMNode=function(r){var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(s(188)):(r=Object.keys(r).join(","),Error(s(268,r)));return r=m(i),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var ix={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nh.isDisabled&&Nh.supportsFiber)try{dt=Nh.inject(ix),Qe=Nh}catch{}}return yu.createRoot=function(r,i){if(!o(r))throw Error(s(299));var a=!1,l="",f=av,d=ov,T=lv,b=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(b=i.unstable_transitionCallbacks)),i=M0(r,1,!1,null,null,a,l,f,d,T,b,null),r[qn]=i.current,Kp(r),new dm(i)},yu.hydrateRoot=function(r,i,a){if(!o(r))throw Error(s(299));var l=!1,f="",d=av,T=ov,b=lv,I=null,G=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(T=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(G=a.formState)),i=M0(r,1,!0,i,a??null,l,f,d,T,b,I,G),i.context=P0(null),a=i.current,l=kn(),l=Ni(l),f=qi(l),f.callback=null,zi(a,f,l),a=l,i.current.lanes=a,Gr(i,a),kr(i),r[qn]=i.current,Kp(r),new Dh(i)},yu.version="19.1.0",yu}var eE;function mx(){if(eE)return gm.exports;eE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),gm.exports=px(),gm.exports}var gx=mx();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var tE="popstate";function yx(t={}){function e(s,o){let{pathname:u,search:h,hash:p}=s.location;return Um("",{pathname:u,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:ku(o)}return vx(e,n,null,t)}function ut(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _x(){return Math.random().toString(36).substring(2,10)}function nE(t,e){return{usr:t.state,key:t.key,idx:e}}function Um(t,e,n=null,s){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Xo(e):e,state:n,key:e&&e.key||s||_x()}}function ku({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Xo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let s=t.indexOf("?");s>=0&&(e.search=t.substring(s),t=t.substring(0,s)),t&&(e.pathname=t)}return e}function vx(t,e,n,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,p="POP",m=null,g=E();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function E(){return(h.state||{idx:null}).idx}function S(){p="POP";let V=E(),z=V==null?null:V-g;g=V,m&&m({action:p,location:F.location,delta:z})}function w(V,z){p="PUSH";let j=Um(F.location,V,z);g=E()+1;let X=nE(j,g),ae=F.createHref(j);try{h.pushState(X,"",ae)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;o.location.assign(ae)}u&&m&&m({action:p,location:F.location,delta:1})}function D(V,z){p="REPLACE";let j=Um(F.location,V,z);g=E();let X=nE(j,g),ae=F.createHref(j);h.replaceState(X,"",ae),u&&m&&m({action:p,location:F.location,delta:0})}function P(V){return Ex(V)}let F={get action(){return p},get location(){return t(o,h)},listen(V){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(tE,S),m=V,()=>{o.removeEventListener(tE,S),m=null}},createHref(V){return e(o,V)},createURL:P,encodeLocation(V){let z=P(V);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:w,replace:D,go(V){return h.go(V)}};return F}function Ex(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ut(n,"No window.location.(origin|href) available to create URL");let s=typeof t=="string"?t:ku(t);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function c1(t,e,n="/"){return Tx(t,e,n,!1)}function Tx(t,e,n,s){let o=typeof e=="string"?Xo(e):e,u=Si(o.pathname||"/",n);if(u==null)return null;let h=h1(t);bx(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let g=kx(u);p=Nx(h[m],g,s)}return p}function h1(t,e=[],n=[],s=""){let o=(u,h,p)=>{let m={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(ut(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=Ei([s,m.relativePath]),E=n.concat(m);u.children&&u.children.length>0&&(ut(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),h1(u.children,e,E,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:Cx(g,u.index),routesMeta:E})};return t.forEach((u,h)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))o(u,h);else for(let m of f1(u.path))o(u,h,m)}),e}function f1(t){let e=t.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=f1(s.join("/")),p=[];return p.push(...h.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...h),p.map(m=>t.startsWith("/")&&m===""?"/":m)}function bx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Dx(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var wx=/^:[\w-]+$/,Sx=3,Ax=2,xx=1,Rx=10,Ix=-2,rE=t=>t==="*";function Cx(t,e){let n=t.split("/"),s=n.length;return n.some(rE)&&(s+=Ix),e&&(s+=Ax),n.filter(o=>!rE(o)).reduce((o,u)=>o+(wx.test(u)?Sx:u===""?xx:Rx),s)}function Dx(t,e){return t.length===e.length&&t.slice(0,-1).every((s,o)=>s===e[o])?t[t.length-1]-e[e.length-1]:0}function Nx(t,e,n=!1){let{routesMeta:s}=t,o={},u="/",h=[];for(let p=0;p<s.length;++p){let m=s[p],g=p===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",S=uf({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},E),w=m.route;if(!S&&g&&n&&!s[s.length-1].route.index&&(S=uf({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},E)),!S)return null;Object.assign(o,S.params),h.push({params:o,pathname:Ei([u,S.pathname]),pathnameBase:Lx(Ei([u,S.pathnameBase])),route:w}),S.pathnameBase!=="/"&&(u=Ei([u,S.pathnameBase]))}return h}function uf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,s]=Ox(t.path,t.caseSensitive,t.end),o=e.match(n);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((g,{paramName:E,isOptional:S},w)=>{if(E==="*"){let P=p[w]||"";h=u.slice(0,u.length-P.length).replace(/(.)\/+$/,"$1")}const D=p[w];return S&&!D?g[E]=void 0:g[E]=(D||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:t}}function Ox(t,e=!1,n=!0){pr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let s=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(s.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function kx(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return pr(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Si(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=t.charAt(n);return s&&s!=="/"?null:t.slice(n)||"/"}function Mx(t,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof t=="string"?Xo(t):t;return{pathname:n?n.startsWith("/")?n:Px(n,e):e,search:jx(s),hash:Ux(o)}}function Px(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Em(t,e,n,s){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Vx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Sg(t){let e=Vx(t);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function Ag(t,e,n,s=!1){let o;typeof t=="string"?o=Xo(t):(o={...t},ut(!o.pathname||!o.pathname.includes("?"),Em("?","pathname","search",o)),ut(!o.pathname||!o.pathname.includes("#"),Em("#","pathname","hash",o)),ut(!o.search||!o.search.includes("#"),Em("#","search","hash",o)));let u=t===""||o.pathname==="",h=u?"/":o.pathname,p;if(h==null)p=n;else{let S=e.length-1;if(!s&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),S-=1;o.pathname=w.join("/")}p=S>=0?e[S]:"/"}let m=Mx(o,p),g=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(g||E)&&(m.pathname+="/"),m}var Ei=t=>t.join("/").replace(/\/\/+/g,"/"),Lx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),jx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ux=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function qx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var d1=["POST","PUT","PATCH","DELETE"];new Set(d1);var zx=["GET",...d1];new Set(zx);var Wo=Y.createContext(null);Wo.displayName="DataRouter";var kf=Y.createContext(null);kf.displayName="DataRouterState";Y.createContext(!1);var p1=Y.createContext({isTransitioning:!1});p1.displayName="ViewTransition";var Bx=Y.createContext(new Map);Bx.displayName="Fetchers";var $x=Y.createContext(null);$x.displayName="Await";var yr=Y.createContext(null);yr.displayName="Navigation";var Yu=Y.createContext(null);Yu.displayName="Location";var Hr=Y.createContext({outlet:null,matches:[],isDataRoute:!1});Hr.displayName="Route";var xg=Y.createContext(null);xg.displayName="RouteError";function Hx(t,{relative:e}={}){ut(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=Y.useContext(yr),{hash:o,pathname:u,search:h}=Ku(t,{relative:e}),p=u;return n!=="/"&&(p=u==="/"?n:Ei([n,u])),s.createHref({pathname:p,search:h,hash:o})}function Zo(){return Y.useContext(Yu)!=null}function As(){return ut(Zo(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(Yu).location}var m1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function g1(t){Y.useContext(yr).static||Y.useLayoutEffect(t)}function Qu(){let{isDataRoute:t}=Y.useContext(Hr);return t?rR():Fx()}function Fx(){ut(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let t=Y.useContext(Wo),{basename:e,navigator:n}=Y.useContext(yr),{matches:s}=Y.useContext(Hr),{pathname:o}=As(),u=JSON.stringify(Sg(s)),h=Y.useRef(!1);return g1(()=>{h.current=!0}),Y.useCallback((m,g={})=>{if(pr(h.current,m1),!h.current)return;if(typeof m=="number"){n.go(m);return}let E=Ag(m,JSON.parse(u),o,g.relative==="path");t==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Ei([e,E.pathname])),(g.replace?n.replace:n.push)(E,g.state,g)},[e,n,u,o,t])}Y.createContext(null);function Ku(t,{relative:e}={}){let{matches:n}=Y.useContext(Hr),{pathname:s}=As(),o=JSON.stringify(Sg(n));return Y.useMemo(()=>Ag(t,JSON.parse(o),s,e==="path"),[t,o,s,e])}function Gx(t,e){return y1(t,e)}function y1(t,e,n,s){var z;ut(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=Y.useContext(yr),{matches:u}=Y.useContext(Hr),h=u[u.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",E=h&&h.route;{let j=E&&E.path||"";_1(m,!E||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let S=As(),w;if(e){let j=typeof e=="string"?Xo(e):e;ut(g==="/"||((z=j.pathname)==null?void 0:z.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${j.pathname}" was given in the \`location\` prop.`),w=j}else w=S;let D=w.pathname||"/",P=D;if(g!=="/"){let j=g.replace(/^\//,"").split("/");P="/"+D.replace(/^\//,"").split("/").slice(j.length).join("/")}let F=c1(t,{pathname:P});pr(E||F!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),pr(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=Wx(F&&F.map(j=>Object.assign({},j,{params:Object.assign({},p,j.params),pathname:Ei([g,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?g:Ei([g,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),u,n,s);return e&&V?Y.createElement(Yu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},V):V}function Yx(){let t=nR(),e=qx(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",t),h=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:u},"ErrorBoundary")," or"," ",Y.createElement("code",{style:u},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),n?Y.createElement("pre",{style:o},n):null,h)}var Qx=Y.createElement(Yx,null),Kx=class extends Y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?Y.createElement(Hr.Provider,{value:this.props.routeContext},Y.createElement(xg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Xx({routeContext:t,match:e,children:n}){let s=Y.useContext(Wo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(Hr.Provider,{value:t},n)}function Wx(t,e=[],n=null,s=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,u=n==null?void 0:n.errors;if(u!=null){let m=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);ut(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let h=!1,p=-1;if(n)for(let m=0;m<o.length;m++){let g=o[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:E,errors:S}=n,w=g.route.loader&&!E.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||w){h=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,g,E)=>{let S,w=!1,D=null,P=null;n&&(S=u&&g.route.id?u[g.route.id]:void 0,D=g.route.errorElement||Qx,h&&(p<0&&E===0?(_1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,P=null):p===E&&(w=!0,P=g.route.hydrateFallbackElement||null)));let F=e.concat(o.slice(0,E+1)),V=()=>{let z;return S?z=D:w?z=P:g.route.Component?z=Y.createElement(g.route.Component,null):g.route.element?z=g.route.element:z=m,Y.createElement(Xx,{match:g,routeContext:{outlet:m,matches:F,isDataRoute:n!=null},children:z})};return n&&(g.route.ErrorBoundary||g.route.errorElement||E===0)?Y.createElement(Kx,{location:n.location,revalidation:n.revalidation,component:D,error:S,children:V(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):V()},null)}function Rg(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zx(t){let e=Y.useContext(Wo);return ut(e,Rg(t)),e}function Jx(t){let e=Y.useContext(kf);return ut(e,Rg(t)),e}function eR(t){let e=Y.useContext(Hr);return ut(e,Rg(t)),e}function Ig(t){let e=eR(t),n=e.matches[e.matches.length-1];return ut(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function tR(){return Ig("useRouteId")}function nR(){var s;let t=Y.useContext(xg),e=Jx("useRouteError"),n=Ig("useRouteError");return t!==void 0?t:(s=e.errors)==null?void 0:s[n]}function rR(){let{router:t}=Zx("useNavigate"),e=Ig("useNavigate"),n=Y.useRef(!1);return g1(()=>{n.current=!0}),Y.useCallback(async(o,u={})=>{pr(n.current,m1),n.current&&(typeof o=="number"?t.navigate(o):await t.navigate(o,{fromRouteId:e,...u}))},[t,e])}var iE={};function _1(t,e,n){!e&&!iE[t]&&(iE[t]=!0,pr(!1,n))}Y.memo(iR);function iR({routes:t,future:e,state:n}){return y1(t,void 0,n,e)}function sR({to:t,replace:e,state:n,relative:s}){ut(Zo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=Y.useContext(yr);pr(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=Y.useContext(Hr),{pathname:h}=As(),p=Qu(),m=Ag(t,Sg(u),h,s==="path"),g=JSON.stringify(m);return Y.useEffect(()=>{p(JSON.parse(g),{replace:e,state:n,relative:s})},[p,g,s,e,n]),null}function Hh(t){ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function aR({basename:t="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:u=!1}){ut(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=t.replace(/^\/*/,"/"),p=Y.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof n=="string"&&(n=Xo(n));let{pathname:m="/",search:g="",hash:E="",state:S=null,key:w="default"}=n,D=Y.useMemo(()=>{let P=Si(m,h);return P==null?null:{location:{pathname:P,search:g,hash:E,state:S,key:w},navigationType:s}},[h,m,g,E,S,w,s]);return pr(D!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:Y.createElement(yr.Provider,{value:p},Y.createElement(Yu.Provider,{children:e,value:D}))}function oR({children:t,location:e}){return Gx(qm(t),e)}function qm(t,e=[]){let n=[];return Y.Children.forEach(t,(s,o)=>{if(!Y.isValidElement(s))return;let u=[...e,o];if(s.type===Y.Fragment){n.push.apply(n,qm(s.props.children,u));return}ut(s.type===Hh,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ut(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=qm(s.props.children,u)),n.push(h)}),n}var Fh="get",Gh="application/x-www-form-urlencoded";function Mf(t){return t!=null&&typeof t.tagName=="string"}function lR(t){return Mf(t)&&t.tagName.toLowerCase()==="button"}function uR(t){return Mf(t)&&t.tagName.toLowerCase()==="form"}function cR(t){return Mf(t)&&t.tagName.toLowerCase()==="input"}function hR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function fR(t,e){return t.button===0&&(!e||e==="_self")&&!hR(t)}var Oh=null;function dR(){if(Oh===null)try{new FormData(document.createElement("form"),0),Oh=!1}catch{Oh=!0}return Oh}var pR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tm(t){return t!=null&&!pR.has(t)?(pr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gh}"`),null):t}function mR(t,e){let n,s,o,u,h;if(uR(t)){let p=t.getAttribute("action");s=p?Si(p,e):null,n=t.getAttribute("method")||Fh,o=Tm(t.getAttribute("enctype"))||Gh,u=new FormData(t)}else if(lR(t)||cR(t)&&(t.type==="submit"||t.type==="image")){let p=t.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||p.getAttribute("action");if(s=m?Si(m,e):null,n=t.getAttribute("formmethod")||p.getAttribute("method")||Fh,o=Tm(t.getAttribute("formenctype"))||Tm(p.getAttribute("enctype"))||Gh,u=new FormData(p,t),!dR()){let{name:g,type:E,value:S}=t;if(E==="image"){let w=g?`${g}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else g&&u.append(g,S)}}else{if(Mf(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Fh,s=null,o=Gh,h=t}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Cg(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gR(t,e,n){let s=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return s.pathname==="/"?s.pathname=`_root.${n}`:e&&Si(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function yR(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _R(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function vR(t,e,n){let s=await Promise.all(t.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await yR(u,n);return h.links?h.links():[]}return[]}));return wR(s.flat(1).filter(_R).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function sE(t,e,n,s,o,u){let h=(m,g)=>n[g]?m.route.id!==n[g].route.id:!0,p=(m,g)=>{var E;return n[g].pathname!==m.pathname||((E=n[g].route.path)==null?void 0:E.endsWith("*"))&&n[g].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,g)=>h(m,g)||p(m,g)):u==="data"?e.filter((m,g)=>{var S;let E=s.routes[m.route.id];if(!E||!E.hasLoader)return!1;if(h(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((S=n[0])==null?void 0:S.params)||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function ER(t,e,{includeHydrateFallback:n}={}){return TR(t.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function TR(t){return[...new Set(t)]}function bR(t){let e={},n=Object.keys(t).sort();for(let s of n)e[s]=t[s];return e}function wR(t,e){let n=new Set;return new Set(e),t.reduce((s,o)=>{let u=JSON.stringify(bR(o));return n.has(u)||(n.add(u),s.push({key:u,link:o})),s},[])}function v1(){let t=Y.useContext(Wo);return Cg(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function SR(){let t=Y.useContext(kf);return Cg(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Dg=Y.createContext(void 0);Dg.displayName="FrameworkContext";function E1(){let t=Y.useContext(Dg);return Cg(t,"You must render this element inside a <HydratedRouter> element"),t}function AR(t,e){let n=Y.useContext(Dg),[s,o]=Y.useState(!1),[u,h]=Y.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:E,onTouchStart:S}=e,w=Y.useRef(null);Y.useEffect(()=>{if(t==="render"&&h(!0),t==="viewport"){let F=z=>{z.forEach(j=>{h(j.isIntersecting)})},V=new IntersectionObserver(F,{threshold:.5});return w.current&&V.observe(w.current),()=>{V.disconnect()}}},[t]),Y.useEffect(()=>{if(s){let F=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(F)}}},[s]);let D=()=>{o(!0)},P=()=>{o(!1),h(!1)};return n?t!=="intent"?[u,w,{}]:[u,w,{onFocus:_u(p,D),onBlur:_u(m,P),onMouseEnter:_u(g,D),onMouseLeave:_u(E,P),onTouchStart:_u(S,D)}]:[!1,w,{}]}function _u(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function xR({page:t,...e}){let{router:n}=v1(),s=Y.useMemo(()=>c1(n.routes,t,n.basename),[n.routes,t,n.basename]);return s?Y.createElement(IR,{page:t,matches:s,...e}):null}function RR(t){let{manifest:e,routeModules:n}=E1(),[s,o]=Y.useState([]);return Y.useEffect(()=>{let u=!1;return vR(t,e,n).then(h=>{u||o(h)}),()=>{u=!0}},[t,e,n]),s}function IR({page:t,matches:e,...n}){let s=As(),{manifest:o,routeModules:u}=E1(),{basename:h}=v1(),{loaderData:p,matches:m}=SR(),g=Y.useMemo(()=>sE(t,e,m,o,s,"data"),[t,e,m,o,s]),E=Y.useMemo(()=>sE(t,e,m,o,s,"assets"),[t,e,m,o,s]),S=Y.useMemo(()=>{if(t===s.pathname+s.search+s.hash)return[];let P=new Set,F=!1;if(e.forEach(z=>{var X;let j=o.routes[z.route.id];!j||!j.hasLoader||(!g.some(ae=>ae.route.id===z.route.id)&&z.route.id in p&&((X=u[z.route.id])!=null&&X.shouldRevalidate)||j.hasClientLoader?F=!0:P.add(z.route.id))}),P.size===0)return[];let V=gR(t,h,"data");return F&&P.size>0&&V.searchParams.set("_routes",e.filter(z=>P.has(z.route.id)).map(z=>z.route.id).join(",")),[V.pathname+V.search]},[h,p,s,o,g,e,t,u]),w=Y.useMemo(()=>ER(E,o),[E,o]),D=RR(E);return Y.createElement(Y.Fragment,null,S.map(P=>Y.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...n})),w.map(P=>Y.createElement("link",{key:P,rel:"modulepreload",href:P,...n})),D.map(({key:P,link:F})=>Y.createElement("link",{key:P,...F})))}function CR(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var T1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{T1&&(window.__reactRouterVersion="7.7.0")}catch{}function DR({basename:t,children:e,window:n}){let s=Y.useRef();s.current==null&&(s.current=yx({window:n,v5Compat:!0}));let o=s.current,[u,h]=Y.useState({action:o.action,location:o.location}),p=Y.useCallback(m=>{Y.startTransition(()=>h(m))},[h]);return Y.useLayoutEffect(()=>o.listen(p),[o,p]),Y.createElement(aR,{basename:t,children:e,location:u.location,navigationType:u.action,navigator:o})}var b1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w1=Y.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:p,target:m,to:g,preventScrollReset:E,viewTransition:S,...w},D){let{basename:P}=Y.useContext(yr),F=typeof g=="string"&&b1.test(g),V,z=!1;if(typeof g=="string"&&F&&(V=g,T1))try{let R=new URL(window.location.href),k=g.startsWith("//")?new URL(R.protocol+g):new URL(g),L=Si(k.pathname,P);k.origin===R.origin&&L!=null?g=L+k.search+k.hash:z=!0}catch{pr(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=Hx(g,{relative:o}),[X,ae,le]=AR(s,w),fe=MR(g,{replace:h,state:p,target:m,preventScrollReset:E,relative:o,viewTransition:S});function C(R){e&&e(R),R.defaultPrevented||fe(R)}let x=Y.createElement("a",{...w,...le,href:V||j,onClick:z||u?e:C,ref:CR(D,ae),target:m,"data-discover":!F&&n==="render"?"true":void 0});return X&&!F?Y.createElement(Y.Fragment,null,x,Y.createElement(xR,{page:j})):x});w1.displayName="Link";var NR=Y.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:p,children:m,...g},E){let S=Ku(h,{relative:g.relative}),w=As(),D=Y.useContext(kf),{navigator:P,basename:F}=Y.useContext(yr),V=D!=null&&UR(S)&&p===!0,z=P.encodeLocation?P.encodeLocation(S).pathname:S.pathname,j=w.pathname,X=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;n||(j=j.toLowerCase(),X=X?X.toLowerCase():null,z=z.toLowerCase()),X&&F&&(X=Si(X,F)||X);const ae=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let le=j===z||!o&&j.startsWith(z)&&j.charAt(ae)==="/",fe=X!=null&&(X===z||!o&&X.startsWith(z)&&X.charAt(z.length)==="/"),C={isActive:le,isPending:fe,isTransitioning:V},x=le?e:void 0,R;typeof s=="function"?R=s(C):R=[s,le?"active":null,fe?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let k=typeof u=="function"?u(C):u;return Y.createElement(w1,{...g,"aria-current":x,className:R,ref:E,style:k,to:h,viewTransition:p},typeof m=="function"?m(C):m)});NR.displayName="NavLink";var OR=Y.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:u,method:h=Fh,action:p,onSubmit:m,relative:g,preventScrollReset:E,viewTransition:S,...w},D)=>{let P=LR(),F=jR(p,{relative:g}),V=h.toLowerCase()==="get"?"get":"post",z=typeof p=="string"&&b1.test(p),j=X=>{if(m&&m(X),X.defaultPrevented)return;X.preventDefault();let ae=X.nativeEvent.submitter,le=(ae==null?void 0:ae.getAttribute("formmethod"))||h;P(ae||X.currentTarget,{fetcherKey:e,method:le,navigate:n,replace:o,state:u,relative:g,preventScrollReset:E,viewTransition:S})};return Y.createElement("form",{ref:D,method:V,action:F,onSubmit:s?m:j,...w,"data-discover":!z&&t==="render"?"true":void 0})});OR.displayName="Form";function kR(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function S1(t){let e=Y.useContext(Wo);return ut(e,kR(t)),e}function MR(t,{target:e,replace:n,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let p=Qu(),m=As(),g=Ku(t,{relative:u});return Y.useCallback(E=>{if(fR(E,e)){E.preventDefault();let S=n!==void 0?n:ku(m)===ku(g);p(t,{replace:S,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[m,p,g,n,s,e,t,o,u,h])}var PR=0,VR=()=>`__${String(++PR)}__`;function LR(){let{router:t}=S1("useSubmit"),{basename:e}=Y.useContext(yr),n=tR();return Y.useCallback(async(s,o={})=>{let{action:u,method:h,encType:p,formData:m,body:g}=mR(s,e);if(o.navigate===!1){let E=o.fetcherKey||VR();await t.fetch(E,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,flushSync:o.flushSync})}else await t.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[t,e,n])}function jR(t,{relative:e}={}){let{basename:n}=Y.useContext(yr),s=Y.useContext(Hr);ut(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Ku(t||".",{relative:e})},h=As();if(t==null){u.search=h.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(E=>E==="")){p.delete("index"),m.filter(S=>S).forEach(S=>p.append("index",S));let E=p.toString();u.search=E?`?${E}`:""}}return(!t||t===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:Ei([n,u.pathname])),ku(u)}function UR(t,e={}){let n=Y.useContext(p1);ut(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=S1("useViewTransitionState"),o=Ku(t,{relative:e.relative});if(!n.isTransitioning)return!1;let u=Si(n.currentLocation.pathname,s)||n.currentLocation.pathname,h=Si(n.nextLocation.pathname,s)||n.nextLocation.pathname;return uf(o.pathname,h)!=null||uf(o.pathname,u)!=null}var Qt=function(){return Qt=Object.assign||function(e){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},Qt.apply(this,arguments)};function Mu(t,e,n){if(n||arguments.length===2)for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return t.concat(u||Array.prototype.slice.call(e))}var st="-ms-",xu="-moz-",Ge="-webkit-",A1="comm",Pf="rule",Ng="decl",qR="@import",x1="@keyframes",zR="@layer",R1=Math.abs,Og=String.fromCharCode,zm=Object.assign;function BR(t,e){return Yt(t,0)^45?(((e<<2^Yt(t,0))<<2^Yt(t,1))<<2^Yt(t,2))<<2^Yt(t,3):0}function I1(t){return t.trim()}function yi(t,e){return(t=e.exec(t))?t[0]:t}function De(t,e,n){return t.replace(e,n)}function Yh(t,e,n){return t.indexOf(e,n)}function Yt(t,e){return t.charCodeAt(e)|0}function jo(t,e,n){return t.slice(e,n)}function Vr(t){return t.length}function C1(t){return t.length}function vu(t,e){return e.push(t),t}function $R(t,e){return t.map(e).join("")}function aE(t,e){return t.filter(function(n){return!yi(n,e)})}var Vf=1,Uo=1,D1=0,tr=0,xt=0,Jo="";function Lf(t,e,n,s,o,u,h,p){return{value:t,root:e,parent:n,type:s,props:o,children:u,line:Vf,column:Uo,length:h,return:"",siblings:p}}function as(t,e){return zm(Lf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ro(t){for(;t.root;)t=as(t.root,{children:[t]});vu(t,t.siblings)}function HR(){return xt}function FR(){return xt=tr>0?Yt(Jo,--tr):0,Uo--,xt===10&&(Uo=1,Vf--),xt}function hr(){return xt=tr<D1?Yt(Jo,tr++):0,Uo++,xt===10&&(Uo=1,Vf++),xt}function ga(){return Yt(Jo,tr)}function Qh(){return tr}function jf(t,e){return jo(Jo,t,e)}function Bm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function GR(t){return Vf=Uo=1,D1=Vr(Jo=t),tr=0,[]}function YR(t){return Jo="",t}function bm(t){return I1(jf(tr-1,$m(t===91?t+2:t===40?t+1:t)))}function QR(t){for(;(xt=ga())&&xt<33;)hr();return Bm(t)>2||Bm(xt)>3?"":" "}function KR(t,e){for(;--e&&hr()&&!(xt<48||xt>102||xt>57&&xt<65||xt>70&&xt<97););return jf(t,Qh()+(e<6&&ga()==32&&hr()==32))}function $m(t){for(;hr();)switch(xt){case t:return tr;case 34:case 39:t!==34&&t!==39&&$m(xt);break;case 40:t===41&&$m(t);break;case 92:hr();break}return tr}function XR(t,e){for(;hr()&&t+xt!==57;)if(t+xt===84&&ga()===47)break;return"/*"+jf(e,tr-1)+"*"+Og(t===47?t:hr())}function WR(t){for(;!Bm(ga());)hr();return jf(t,tr)}function ZR(t){return YR(Kh("",null,null,null,[""],t=GR(t),0,[0],t))}function Kh(t,e,n,s,o,u,h,p,m){for(var g=0,E=0,S=h,w=0,D=0,P=0,F=1,V=1,z=1,j=0,X="",ae=o,le=u,fe=s,C=X;V;)switch(P=j,j=hr()){case 40:if(P!=108&&Yt(C,S-1)==58){Yh(C+=De(bm(j),"&","&\f"),"&\f",R1(g?p[g-1]:0))!=-1&&(z=-1);break}case 34:case 39:case 91:C+=bm(j);break;case 9:case 10:case 13:case 32:C+=QR(P);break;case 92:C+=KR(Qh()-1,7);continue;case 47:switch(ga()){case 42:case 47:vu(JR(XR(hr(),Qh()),e,n,m),m);break;default:C+="/"}break;case 123*F:p[g++]=Vr(C)*z;case 125*F:case 59:case 0:switch(j){case 0:case 125:V=0;case 59+E:z==-1&&(C=De(C,/\f/g,"")),D>0&&Vr(C)-S&&vu(D>32?lE(C+";",s,n,S-1,m):lE(De(C," ","")+";",s,n,S-2,m),m);break;case 59:C+=";";default:if(vu(fe=oE(C,e,n,g,E,o,p,X,ae=[],le=[],S,u),u),j===123)if(E===0)Kh(C,e,fe,fe,ae,u,S,p,le);else switch(w===99&&Yt(C,3)===110?100:w){case 100:case 108:case 109:case 115:Kh(t,fe,fe,s&&vu(oE(t,fe,fe,0,0,o,p,X,o,ae=[],S,le),le),o,le,S,p,s?ae:le);break;default:Kh(C,fe,fe,fe,[""],le,0,p,le)}}g=E=D=0,F=z=1,X=C="",S=h;break;case 58:S=1+Vr(C),D=P;default:if(F<1){if(j==123)--F;else if(j==125&&F++==0&&FR()==125)continue}switch(C+=Og(j),j*F){case 38:z=E>0?1:(C+="\f",-1);break;case 44:p[g++]=(Vr(C)-1)*z,z=1;break;case 64:ga()===45&&(C+=bm(hr())),w=ga(),E=S=Vr(X=C+=WR(Qh())),j++;break;case 45:P===45&&Vr(C)==2&&(F=0)}}return u}function oE(t,e,n,s,o,u,h,p,m,g,E,S){for(var w=o-1,D=o===0?u:[""],P=C1(D),F=0,V=0,z=0;F<s;++F)for(var j=0,X=jo(t,w+1,w=R1(V=h[F])),ae=t;j<P;++j)(ae=I1(V>0?D[j]+" "+X:De(X,/&\f/g,D[j])))&&(m[z++]=ae);return Lf(t,e,n,o===0?Pf:p,m,g,E,S)}function JR(t,e,n,s){return Lf(t,e,n,A1,Og(HR()),jo(t,2,-2),0,s)}function lE(t,e,n,s,o){return Lf(t,e,n,Ng,jo(t,0,s),jo(t,s+1,-1),s,o)}function N1(t,e,n){switch(BR(t,e)){case 5103:return Ge+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ge+t+t;case 4789:return xu+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ge+t+xu+t+st+t+t;case 5936:switch(Yt(t,e+11)){case 114:return Ge+t+st+De(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ge+t+st+De(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ge+t+st+De(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ge+t+st+t+t;case 6165:return Ge+t+st+"flex-"+t+t;case 5187:return Ge+t+De(t,/(\w+).+(:[^]+)/,Ge+"box-$1$2"+st+"flex-$1$2")+t;case 5443:return Ge+t+st+"flex-item-"+De(t,/flex-|-self/g,"")+(yi(t,/flex-|baseline/)?"":st+"grid-row-"+De(t,/flex-|-self/g,""))+t;case 4675:return Ge+t+st+"flex-line-pack"+De(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ge+t+st+De(t,"shrink","negative")+t;case 5292:return Ge+t+st+De(t,"basis","preferred-size")+t;case 6060:return Ge+"box-"+De(t,"-grow","")+Ge+t+st+De(t,"grow","positive")+t;case 4554:return Ge+De(t,/([^-])(transform)/g,"$1"+Ge+"$2")+t;case 6187:return De(De(De(t,/(zoom-|grab)/,Ge+"$1"),/(image-set)/,Ge+"$1"),t,"")+t;case 5495:case 3959:return De(t,/(image-set\([^]*)/,Ge+"$1$`$1");case 4968:return De(De(t,/(.+:)(flex-)?(.*)/,Ge+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ge+t+t;case 4200:if(!yi(t,/flex-|baseline/))return st+"grid-column-align"+jo(t,e)+t;break;case 2592:case 3360:return st+De(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(s,o){return e=o,yi(s.props,/grid-\w+-end/)})?~Yh(t+(n=n[e].value),"span",0)?t:st+De(t,"-start","")+t+st+"grid-row-span:"+(~Yh(n,"span",0)?yi(n,/\d+/):+yi(n,/\d+/)-+yi(t,/\d+/))+";":st+De(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(s){return yi(s.props,/grid-\w+-start/)})?t:st+De(De(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return De(t,/(.+)-inline(.+)/,Ge+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Vr(t)-1-e>6)switch(Yt(t,e+1)){case 109:if(Yt(t,e+4)!==45)break;case 102:return De(t,/(.+:)(.+)-([^]+)/,"$1"+Ge+"$2-$3$1"+xu+(Yt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Yh(t,"stretch",0)?N1(De(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return De(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,u,h,p,m,g){return st+o+":"+u+g+(h?st+o+"-span:"+(p?m:+m-+u)+g:"")+t});case 4949:if(Yt(t,e+6)===121)return De(t,":",":"+Ge)+t;break;case 6444:switch(Yt(t,Yt(t,14)===45?18:11)){case 120:return De(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ge+(Yt(t,14)===45?"inline-":"")+"box$3$1"+Ge+"$2$3$1"+st+"$2box$3")+t;case 100:return De(t,":",":"+st)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return De(t,"scroll-","scroll-snap-")+t}return t}function cf(t,e){for(var n="",s=0;s<t.length;s++)n+=e(t[s],s,t,e)||"";return n}function eI(t,e,n,s){switch(t.type){case zR:if(t.children.length)break;case qR:case Ng:return t.return=t.return||t.value;case A1:return"";case x1:return t.return=t.value+"{"+cf(t.children,s)+"}";case Pf:if(!Vr(t.value=t.props.join(",")))return""}return Vr(n=cf(t.children,s))?t.return=t.value+"{"+n+"}":""}function tI(t){var e=C1(t);return function(n,s,o,u){for(var h="",p=0;p<e;p++)h+=t[p](n,s,o,u)||"";return h}}function nI(t){return function(e){e.root||(e=e.return)&&t(e)}}function rI(t,e,n,s){if(t.length>-1&&!t.return)switch(t.type){case Ng:t.return=N1(t.value,t.length,n);return;case x1:return cf([as(t,{value:De(t.value,"@","@"+Ge)})],s);case Pf:if(t.length)return $R(n=t.props,function(o){switch(yi(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ro(as(t,{props:[De(o,/:(read-\w+)/,":"+xu+"$1")]})),Ro(as(t,{props:[o]})),zm(t,{props:aE(n,s)});break;case"::placeholder":Ro(as(t,{props:[De(o,/:(plac\w+)/,":"+Ge+"input-$1")]})),Ro(as(t,{props:[De(o,/:(plac\w+)/,":"+xu+"$1")]})),Ro(as(t,{props:[De(o,/:(plac\w+)/,st+"input-$1")]})),Ro(as(t,{props:[o]})),zm(t,{props:aE(n,s)});break}return""})}}var iI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pn={},qo=typeof process<"u"&&Pn!==void 0&&(Pn.REACT_APP_SC_ATTR||Pn.SC_ATTR)||"data-styled",O1="active",k1="data-styled-version",Uf="6.1.19",kg=`/*!sc*/
`,hf=typeof window<"u"&&typeof document<"u",sI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Pn!==void 0&&Pn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pn.REACT_APP_SC_DISABLE_SPEEDY!==""?Pn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Pn!==void 0&&Pn.SC_DISABLE_SPEEDY!==void 0&&Pn.SC_DISABLE_SPEEDY!==""&&Pn.SC_DISABLE_SPEEDY!=="false"&&Pn.SC_DISABLE_SPEEDY),aI={},qf=Object.freeze([]),zo=Object.freeze({});function M1(t,e,n){return n===void 0&&(n=zo),t.theme!==n.theme&&t.theme||e||n.theme}var P1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),oI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lI=/(^-|-$)/g;function uE(t){return t.replace(oI,"-").replace(lI,"")}var uI=/(a)(d)/gi,kh=52,cE=function(t){return String.fromCharCode(t+(t>25?39:97))};function Hm(t){var e,n="";for(e=Math.abs(t);e>kh;e=e/kh|0)n=cE(e%kh)+n;return(cE(e%kh)+n).replace(uI,"$1-$2")}var wm,V1=5381,Oo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},L1=function(t){return Oo(V1,t)};function j1(t){return Hm(L1(t)>>>0)}function cI(t){return t.displayName||t.name||"Component"}function Sm(t){return typeof t=="string"&&!0}var U1=typeof Symbol=="function"&&Symbol.for,q1=U1?Symbol.for("react.memo"):60115,hI=U1?Symbol.for("react.forward_ref"):60112,fI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},dI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},z1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pI=((wm={})[hI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wm[q1]=z1,wm);function hE(t){return("type"in(e=t)&&e.type.$$typeof)===q1?z1:"$$typeof"in t?pI[t.$$typeof]:fI;var e}var mI=Object.defineProperty,gI=Object.getOwnPropertyNames,fE=Object.getOwnPropertySymbols,yI=Object.getOwnPropertyDescriptor,_I=Object.getPrototypeOf,dE=Object.prototype;function B1(t,e,n){if(typeof e!="string"){if(dE){var s=_I(e);s&&s!==dE&&B1(t,s,n)}var o=gI(e);fE&&(o=o.concat(fE(e)));for(var u=hE(t),h=hE(e),p=0;p<o.length;++p){var m=o[p];if(!(m in dI||n&&n[m]||h&&m in h||u&&m in u)){var g=yI(e,m);try{mI(t,m,g)}catch{}}}}return t}function Ea(t){return typeof t=="function"}function Mg(t){return typeof t=="object"&&"styledComponentId"in t}function pa(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Fm(t,e){if(t.length===0)return"";for(var n=t[0],s=1;s<t.length;s++)n+=t[s];return n}function Pu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Gm(t,e,n){if(n===void 0&&(n=!1),!n&&!Pu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)t[s]=Gm(t[s],e[s]);else if(Pu(e))for(var s in e)t[s]=Gm(t[s],e[s]);return t}function Pg(t,e){Object.defineProperty(t,"toString",{value:e})}function Ta(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var vI=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,s=0;s<e;s++)n+=this.groupSizes[s];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,u=o;e>=u;)if((u<<=1)<0)throw Ta(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var h=o;h<u;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(e+1),m=(h=0,n.length);h<m;h++)this.tag.insertRule(p,n[h])&&(this.groupSizes[e]++,p++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],s=this.indexOfGroup(e),o=s+n;this.groupSizes[e]=0;for(var u=s;u<o;u++)this.tag.deleteRule(s)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),u=o+s,h=o;h<u;h++)n+="".concat(this.tag.getRule(h)).concat(kg);return n},t}(),Xh=new Map,ff=new Map,Wh=1,Mh=function(t){if(Xh.has(t))return Xh.get(t);for(;ff.has(Wh);)Wh++;var e=Wh++;return Xh.set(t,e),ff.set(e,t),e},EI=function(t,e){Wh=e+1,Xh.set(t,e),ff.set(e,t)},TI="style[".concat(qo,"][").concat(k1,'="').concat(Uf,'"]'),bI=new RegExp("^".concat(qo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),wI=function(t,e,n){for(var s,o=n.split(","),u=0,h=o.length;u<h;u++)(s=o[u])&&t.registerName(e,s)},SI=function(t,e){for(var n,s=((n=e.textContent)!==null&&n!==void 0?n:"").split(kg),o=[],u=0,h=s.length;u<h;u++){var p=s[u].trim();if(p){var m=p.match(bI);if(m){var g=0|parseInt(m[1],10),E=m[2];g!==0&&(EI(E,g),wI(t,E,m[3]),t.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},pE=function(t){for(var e=document.querySelectorAll(TI),n=0,s=e.length;n<s;n++){var o=e[n];o&&o.getAttribute(qo)!==O1&&(SI(t,o),o.parentNode&&o.parentNode.removeChild(o))}};function AI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $1=function(t){var e=document.head,n=t||e,s=document.createElement("style"),o=function(p){var m=Array.from(p.querySelectorAll("style[".concat(qo,"]")));return m[m.length-1]}(n),u=o!==void 0?o.nextSibling:null;s.setAttribute(qo,O1),s.setAttribute(k1,Uf);var h=AI();return h&&s.setAttribute("nonce",h),n.insertBefore(s,u),s},xI=function(){function t(e){this.element=$1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var s=document.styleSheets,o=0,u=s.length;o<u;o++){var h=s[o];if(h.ownerNode===n)return h}throw Ta(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),RI=function(){function t(e){this.element=$1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var s=document.createTextNode(n);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),II=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),mE=hf,CI={isServer:!hf,useCSSOMInjection:!sI},df=function(){function t(e,n,s){e===void 0&&(e=zo),n===void 0&&(n={});var o=this;this.options=Qt(Qt({},CI),e),this.gs=n,this.names=new Map(s),this.server=!!e.isServer,!this.server&&hf&&mE&&(mE=!1,pE(this)),Pg(this,function(){return function(u){for(var h=u.getTag(),p=h.length,m="",g=function(S){var w=function(z){return ff.get(z)}(S);if(w===void 0)return"continue";var D=u.names.get(w),P=h.getGroup(S);if(D===void 0||!D.size||P.length===0)return"continue";var F="".concat(qo,".g").concat(S,'[id="').concat(w,'"]'),V="";D!==void 0&&D.forEach(function(z){z.length>0&&(V+="".concat(z,","))}),m+="".concat(P).concat(F,'{content:"').concat(V,'"}').concat(kg)},E=0;E<p;E++)g(E);return m}(o)})}return t.registerId=function(e){return Mh(e)},t.prototype.rehydrate=function(){!this.server&&hf&&pE(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Qt(Qt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var s=n.useCSSOMInjection,o=n.target;return n.isServer?new II(o):s?new xI(o):new RI(o)}(this.options),new vI(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Mh(e),this.names.has(e))this.names.get(e).add(n);else{var s=new Set;s.add(n),this.names.set(e,s)}},t.prototype.insertRules=function(e,n,s){this.registerName(e,n),this.getTag().insertRules(Mh(e),s)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Mh(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),DI=/&/g,NI=/^\s*\/\/.*$/gm;function H1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=H1(n.children,e)),n})}function OI(t){var e,n,s,o=zo,u=o.options,h=u===void 0?zo:u,p=o.plugins,m=p===void 0?qf:p,g=function(w,D,P){return P.startsWith(n)&&P.endsWith(n)&&P.replaceAll(n,"").length>0?".".concat(e):w},E=m.slice();E.push(function(w){w.type===Pf&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(DI,n).replace(s,g))}),h.prefix&&E.push(rI),E.push(eI);var S=function(w,D,P,F){D===void 0&&(D=""),P===void 0&&(P=""),F===void 0&&(F="&"),e=F,n=D,s=new RegExp("\\".concat(n,"\\b"),"g");var V=w.replace(NI,""),z=ZR(P||D?"".concat(P," ").concat(D," { ").concat(V," }"):V);h.namespace&&(z=H1(z,h.namespace));var j=[];return cf(z,tI(E.concat(nI(function(X){return j.push(X)})))),j};return S.hash=m.length?m.reduce(function(w,D){return D.name||Ta(15),Oo(w,D.name)},V1).toString():"",S}var kI=new df,Ym=OI(),F1=ur.createContext({shouldForwardProp:void 0,styleSheet:kI,stylis:Ym});F1.Consumer;ur.createContext(void 0);function Qm(){return Y.useContext(F1)}var MI=function(){function t(e,n){var s=this;this.inject=function(o,u){u===void 0&&(u=Ym);var h=s.name+u.hash;o.hasNameForId(s.id,h)||o.insertRules(s.id,h,u(s.rules,h,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Pg(this,function(){throw Ta(12,String(s.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Ym),this.name+e.hash},t}(),PI=function(t){return t>="A"&&t<="Z"};function gE(t){for(var e="",n=0;n<t.length;n++){var s=t[n];if(n===1&&s==="-"&&t[0]==="-")return t;PI(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var G1=function(t){return t==null||t===!1||t===""},Y1=function(t){var e,n,s=[];for(var o in t){var u=t[o];t.hasOwnProperty(o)&&!G1(u)&&(Array.isArray(u)&&u.isCss||Ea(u)?s.push("".concat(gE(o),":"),u,";"):Pu(u)?s.push.apply(s,Mu(Mu(["".concat(o," {")],Y1(u),!1),["}"],!1)):s.push("".concat(gE(o),": ").concat((e=o,(n=u)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in iI||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return s};function fs(t,e,n,s){if(G1(t))return[];if(Mg(t))return[".".concat(t.styledComponentId)];if(Ea(t)){if(!Ea(u=t)||u.prototype&&u.prototype.isReactComponent||!e)return[t];var o=t(e);return fs(o,e,n,s)}var u;return t instanceof MI?n?(t.inject(n,s),[t.getName(s)]):[t]:Pu(t)?Y1(t):Array.isArray(t)?Array.prototype.concat.apply(qf,t.map(function(h){return fs(h,e,n,s)})):[t.toString()]}function Q1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ea(n)&&!Mg(n))return!1}return!0}var VI=L1(Uf),LI=function(){function t(e,n,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Q1(e),this.componentId=n,this.baseHash=Oo(VI,n),this.baseStyle=s,df.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=pa(o,this.staticRulesId);else{var u=Fm(fs(this.rules,e,n,s)),h=Hm(Oo(this.baseHash,u)>>>0);if(!n.hasNameForId(this.componentId,h)){var p=s(u,".".concat(h),void 0,this.componentId);n.insertRules(this.componentId,h,p)}o=pa(o,h),this.staticRulesId=h}else{for(var m=Oo(this.baseHash,s.hash),g="",E=0;E<this.rules.length;E++){var S=this.rules[E];if(typeof S=="string")g+=S;else if(S){var w=Fm(fs(S,e,n,s));m=Oo(m,w+E),g+=w}}if(g){var D=Hm(m>>>0);n.hasNameForId(this.componentId,D)||n.insertRules(this.componentId,D,s(g,".".concat(D),void 0,this.componentId)),o=pa(o,D)}}return o},t}(),Vu=ur.createContext(void 0);Vu.Consumer;function jI(t){var e=ur.useContext(Vu),n=Y.useMemo(function(){return function(s,o){if(!s)throw Ta(14);if(Ea(s)){var u=s(o);return u}if(Array.isArray(s)||typeof s!="object")throw Ta(8);return o?Qt(Qt({},o),s):s}(t.theme,e)},[t.theme,e]);return t.children?ur.createElement(Vu.Provider,{value:n},t.children):null}var Am={};function UI(t,e,n){var s=Mg(t),o=t,u=!Sm(t),h=e.attrs,p=h===void 0?qf:h,m=e.componentId,g=m===void 0?function(ae,le){var fe=typeof ae!="string"?"sc":uE(ae);Am[fe]=(Am[fe]||0)+1;var C="".concat(fe,"-").concat(j1(Uf+fe+Am[fe]));return le?"".concat(le,"-").concat(C):C}(e.displayName,e.parentComponentId):m,E=e.displayName,S=E===void 0?function(ae){return Sm(ae)?"styled.".concat(ae):"Styled(".concat(cI(ae),")")}(t):E,w=e.displayName&&e.componentId?"".concat(uE(e.displayName),"-").concat(e.componentId):e.componentId||g,D=s&&o.attrs?o.attrs.concat(p).filter(Boolean):p,P=e.shouldForwardProp;if(s&&o.shouldForwardProp){var F=o.shouldForwardProp;if(e.shouldForwardProp){var V=e.shouldForwardProp;P=function(ae,le){return F(ae,le)&&V(ae,le)}}else P=F}var z=new LI(n,w,s?o.componentStyle:void 0);function j(ae,le){return function(fe,C,x){var R=fe.attrs,k=fe.componentStyle,L=fe.defaultProps,q=fe.foldedComponentIds,N=fe.styledComponentId,Dt=fe.target,at=ur.useContext(Vu),Z=Qm(),ce=fe.shouldForwardProp||Z.shouldForwardProp,me=M1(C,at,L)||zo,Ie=function(Re,ve,ct){for(var Be,jt=Qt(Qt({},ve),{className:void 0,theme:ct}),jn=0;jn<Re.length;jn+=1){var En=Ea(Be=Re[jn])?Be(jt):Be;for(var sn in En)jt[sn]=sn==="className"?pa(jt[sn],En[sn]):sn==="style"?Qt(Qt({},jt[sn]),En[sn]):En[sn]}return ve.className&&(jt.className=pa(jt.className,ve.className)),jt}(R,C,me),O=Ie.as||Dt,ie={};for(var oe in Ie)Ie[oe]===void 0||oe[0]==="$"||oe==="as"||oe==="theme"&&Ie.theme===me||(oe==="forwardedAs"?ie.as=Ie.forwardedAs:ce&&!ce(oe,O)||(ie[oe]=Ie[oe]));var se=function(Re,ve){var ct=Qm(),Be=Re.generateAndInjectStyles(ve,ct.styleSheet,ct.stylis);return Be}(k,Ie),ge=pa(q,N);return se&&(ge+=" "+se),Ie.className&&(ge+=" "+Ie.className),ie[Sm(O)&&!P1.has(O)?"class":"className"]=ge,x&&(ie.ref=x),Y.createElement(O,ie)}(X,ae,le)}j.displayName=S;var X=ur.forwardRef(j);return X.attrs=D,X.componentStyle=z,X.displayName=S,X.shouldForwardProp=P,X.foldedComponentIds=s?pa(o.foldedComponentIds,o.styledComponentId):"",X.styledComponentId=w,X.target=s?o.target:t,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=s?function(le){for(var fe=[],C=1;C<arguments.length;C++)fe[C-1]=arguments[C];for(var x=0,R=fe;x<R.length;x++)Gm(le,R[x],!0);return le}({},o.defaultProps,ae):ae}}),Pg(X,function(){return".".concat(X.styledComponentId)}),u&&B1(X,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function yE(t,e){for(var n=[t[0]],s=0,o=e.length;s<o;s+=1)n.push(e[s],t[s+1]);return n}var _E=function(t){return Object.assign(t,{isCss:!0})};function K1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ea(t)||Pu(t))return _E(fs(yE(qf,Mu([t],e,!0))));var s=t;return e.length===0&&s.length===1&&typeof s[0]=="string"?fs(s):_E(fs(yE(s,e)))}function Km(t,e,n){if(n===void 0&&(n=zo),!e)throw Ta(1,e);var s=function(o){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return t(e,n,K1.apply(void 0,Mu([o],u,!1)))};return s.attrs=function(o){return Km(t,e,Qt(Qt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return Km(t,e,Qt(Qt({},n),o))},s}var X1=function(t){return Km(UI,t)},H=X1;P1.forEach(function(t){H[t]=X1(t)});var qI=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=Q1(e),df.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,s,o){var u=o(Fm(fs(this.rules,n,s,o)),""),h=this.componentId+e;s.insertRules(h,h,u)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,s,o){e>2&&df.registerId(this.componentId+e),this.removeStyles(e,s),this.createStyles(e,n,s,o)},t}();function zI(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var s=K1.apply(void 0,Mu([t],e,!1)),o="sc-global-".concat(j1(JSON.stringify(s))),u=new qI(s,o),h=function(m){var g=Qm(),E=ur.useContext(Vu),S=ur.useRef(g.styleSheet.allocateGSInstance(o)).current;return g.styleSheet.server&&p(S,m,g.styleSheet,E,g.stylis),ur.useLayoutEffect(function(){if(!g.styleSheet.server)return p(S,m,g.styleSheet,E,g.stylis),function(){return u.removeStyles(S,g.styleSheet)}},[S,m,g.styleSheet,E,g.stylis]),null};function p(m,g,E,S,w){if(u.isStatic)u.renderStyles(m,aI,E,w);else{var D=Qt(Qt({},g),{theme:M1(g,S,h.defaultProps)});u.renderStyles(m,D,E,w)}}return ur.memo(h)}/**
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
 */const BI=()=>{};var vE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let o=t.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},$I=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const o=t[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=t[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=t[n++],h=t[n++],p=t[n++],m=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=t[n++],h=t[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Z1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<t.length;o+=3){const u=t[o],h=o+1<t.length,p=h?t[o+1]:0,m=o+2<t.length,g=m?t[o+2]:0,E=u>>2,S=(u&3)<<4|p>>4;let w=(p&15)<<2|g>>6,D=g&63;m||(D=64,h||(w=64)),s.push(n[E],n[S],n[w],n[D])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(W1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$I(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<t.length;){const u=n[t.charAt(o++)],p=o<t.length?n[t.charAt(o)]:0;++o;const g=o<t.length?n[t.charAt(o)]:64;++o;const S=o<t.length?n[t.charAt(o)]:64;if(++o,u==null||p==null||g==null||S==null)throw new HI;const w=u<<2|p>>4;if(s.push(w),g!==64){const D=p<<4&240|g>>2;if(s.push(D),S!==64){const P=g<<6&192|S;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FI=function(t){const e=W1(t);return Z1.encodeByteArray(e,!0)},pf=function(t){return FI(t).replace(/\./g,"")},J1=function(t){try{return Z1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const YI=()=>GI().__FIREBASE_DEFAULTS__,QI=()=>{if(typeof process>"u"||typeof vE>"u")return;const t=vE.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&J1(t[1]);return e&&JSON.parse(e)},zf=()=>{try{return BI()||YI()||QI()||KI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eb=t=>{var e,n;return(n=(e=zf())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},XI=t=>{const e=eb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},tb=()=>{var t;return(t=zf())==null?void 0:t.config},nb=t=>{var e;return(e=zf())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function el(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rb(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function ZI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=t.iat||0,u=t.sub||t.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...t};return[pf(JSON.stringify(n)),pf(JSON.stringify(h)),""].join(".")}const Ru={};function JI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ru))Ru[e]?t.emulator.push(e):t.prod.push(e);return t}function eC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let EE=!1;function ib(t,e){if(typeof window>"u"||typeof document>"u"||!el(window.location.host)||Ru[t]===e||Ru[t]||EE)return;Ru[t]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",u=JI().prod.length>0;function h(){const w=document.getElementById(s);w&&w.remove()}function p(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,D){w.setAttribute("width","24"),w.setAttribute("id",D),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{EE=!0,h()},w}function E(w,D){w.setAttribute("id",D),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function S(){const w=eC(s),D=n("text"),P=document.getElementById(D)||document.createElement("span"),F=n("learnmore"),V=document.getElementById(F)||document.createElement("a"),z=n("preprendIcon"),j=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const X=w.element;p(X),E(V,F);const ae=g();m(j,z),X.append(j,P,V,ae),document.body.appendChild(X)}u?(P.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function nC(){var e;const t=(e=zf())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aC(){const t=mn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oC(){return!nC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lC(){try{return typeof indexedDB=="object"}catch{return!1}}function uC(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="FirebaseError";class Ci extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=cC,Object.setPrototypeOf(this,Ci.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xu.prototype.create)}}class Xu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?hC(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Ci(o,p,s)}}function hC(t,e){return t.replace(fC,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const fC=/\{\$([^}]+)}/g;function dC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ba(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=t[o],h=e[o];if(TE(u)&&TE(h)){if(!ba(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function TE(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Eu(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Tu(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pC(t,e){const n=new mC(t,e);return n.subscribe.bind(n)}class mC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gC(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=xm),o.error===void 0&&(o.error=xm),o.complete===void 0&&(o.complete=xm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xm(){}/**
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
 */function Ct(t){return t&&t._delegate?t._delegate:t}class wa{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class yC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new WI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vC(e))try{this.getOrInitializeService({instanceIdentifier:da})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=da){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=da){return this.instances.has(e)}getOptions(e=da){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_C(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=da){return this.component?this.component.multipleInstances?e:da:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _C(t){return t===da?void 0:t}function vC(t){return t.instantiationMode==="EAGER"}/**
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
 */class EC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Pe||(Pe={}));const TC={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},bC=Pe.INFO,wC={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},SC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),o=wC[e];if(o)console[o](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vg{constructor(e){this.name=e,this._logLevel=bC,this._logHandler=SC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const AC=(t,e)=>e.some(n=>t instanceof n);let bE,wE;function xC(){return bE||(bE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RC(){return wE||(wE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sb=new WeakMap,Xm=new WeakMap,ab=new WeakMap,Rm=new WeakMap,Lg=new WeakMap;function IC(t){const e=new Promise((n,s)=>{const o=()=>{t.removeEventListener("success",u),t.removeEventListener("error",h)},u=()=>{n(ds(t.result)),o()},h=()=>{s(t.error),o()};t.addEventListener("success",u),t.addEventListener("error",h)});return e.then(n=>{n instanceof IDBCursor&&sb.set(n,t)}).catch(()=>{}),Lg.set(e,t),e}function CC(t){if(Xm.has(t))return;const e=new Promise((n,s)=>{const o=()=>{t.removeEventListener("complete",u),t.removeEventListener("error",h),t.removeEventListener("abort",h)},u=()=>{n(),o()},h=()=>{s(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",u),t.addEventListener("error",h),t.addEventListener("abort",h)});Xm.set(t,e)}let Wm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ab.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ds(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DC(t){Wm=t(Wm)}function NC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Im(this),e,...n);return ab.set(s,e.sort?e.sort():[e]),ds(s)}:RC().includes(t)?function(...e){return t.apply(Im(this),e),ds(sb.get(this))}:function(...e){return ds(t.apply(Im(this),e))}}function OC(t){return typeof t=="function"?NC(t):(t instanceof IDBTransaction&&CC(t),AC(t,xC())?new Proxy(t,Wm):t)}function ds(t){if(t instanceof IDBRequest)return IC(t);if(Rm.has(t))return Rm.get(t);const e=OC(t);return e!==t&&(Rm.set(t,e),Lg.set(e,t)),e}const Im=t=>Lg.get(t);function kC(t,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(t,e),p=ds(h);return s&&h.addEventListener("upgradeneeded",m=>{s(ds(h.result),m.oldVersion,m.newVersion,ds(h.transaction),m)}),n&&h.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const MC=["get","getKey","getAll","getAllKeys","count"],PC=["put","add","delete","clear"],Cm=new Map;function SE(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cm.get(e))return Cm.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=PC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||MC.includes(n)))return;const u=async function(h,...p){const m=this.transaction(h,o?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(p.shift())),(await Promise.all([g[n](...p),o&&m.done]))[0]};return Cm.set(e,u),u}DC(t=>({...t,get:(e,n,s)=>SE(e,n)||t.get(e,n,s),has:(e,n)=>!!SE(e,n)||t.has(e,n)}));/**
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
 */class VC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function LC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zm="@firebase/app",AE="0.14.0";/**
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
 */const Ai=new Vg("@firebase/app"),jC="@firebase/app-compat",UC="@firebase/analytics-compat",qC="@firebase/analytics",zC="@firebase/app-check-compat",BC="@firebase/app-check",$C="@firebase/auth",HC="@firebase/auth-compat",FC="@firebase/database",GC="@firebase/data-connect",YC="@firebase/database-compat",QC="@firebase/functions",KC="@firebase/functions-compat",XC="@firebase/installations",WC="@firebase/installations-compat",ZC="@firebase/messaging",JC="@firebase/messaging-compat",eD="@firebase/performance",tD="@firebase/performance-compat",nD="@firebase/remote-config",rD="@firebase/remote-config-compat",iD="@firebase/storage",sD="@firebase/storage-compat",aD="@firebase/firestore",oD="@firebase/ai",lD="@firebase/firestore-compat",uD="firebase",cD="12.0.0";/**
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
 */const Jm="[DEFAULT]",hD={[Zm]:"fire-core",[jC]:"fire-core-compat",[qC]:"fire-analytics",[UC]:"fire-analytics-compat",[BC]:"fire-app-check",[zC]:"fire-app-check-compat",[$C]:"fire-auth",[HC]:"fire-auth-compat",[FC]:"fire-rtdb",[GC]:"fire-data-connect",[YC]:"fire-rtdb-compat",[QC]:"fire-fn",[KC]:"fire-fn-compat",[XC]:"fire-iid",[WC]:"fire-iid-compat",[ZC]:"fire-fcm",[JC]:"fire-fcm-compat",[eD]:"fire-perf",[tD]:"fire-perf-compat",[nD]:"fire-rc",[rD]:"fire-rc-compat",[iD]:"fire-gcs",[sD]:"fire-gcs-compat",[aD]:"fire-fst",[lD]:"fire-fst-compat",[oD]:"fire-vertex","fire-js":"fire-js",[uD]:"fire-js-all"};/**
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
 */const mf=new Map,fD=new Map,eg=new Map;function xE(t,e){try{t.container.addComponent(e)}catch(n){Ai.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bo(t){const e=t.name;if(eg.has(e))return Ai.debug(`There were multiple attempts to register component ${e}.`),!1;eg.set(e,t);for(const n of mf.values())xE(n,t);for(const n of fD.values())xE(n,t);return!0}function jg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const dD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ps=new Xu("app","Firebase",dD);/**
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
 */class pD{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wa("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ps.create("app-deleted",{appName:this._name})}}/**
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
 */const tl=cD;function ob(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Jm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ps.create("bad-app-name",{appName:String(o)});if(n||(n=tb()),!n)throw ps.create("no-options");const u=mf.get(o);if(u){if(ba(n,u.options)&&ba(s,u.config))return u;throw ps.create("duplicate-app",{appName:o})}const h=new EC(o);for(const m of eg.values())h.addComponent(m);const p=new pD(n,s,h);return mf.set(o,p),p}function lb(t=Jm){const e=mf.get(t);if(!e&&t===Jm&&tb())return ob();if(!e)throw ps.create("no-app",{appName:t});return e}function ms(t,e,n){let s=hD[t]??t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ai.warn(h.join(" "));return}Bo(new wa(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mD="firebase-heartbeat-database",gD=1,Lu="firebase-heartbeat-store";let Dm=null;function ub(){return Dm||(Dm=kC(mD,gD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Lu)}catch(n){console.warn(n)}}}}).catch(t=>{throw ps.create("idb-open",{originalErrorMessage:t.message})})),Dm}async function yD(t){try{const n=(await ub()).transaction(Lu),s=await n.objectStore(Lu).get(cb(t));return await n.done,s}catch(e){if(e instanceof Ci)Ai.warn(e.message);else{const n=ps.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ai.warn(n.message)}}}async function RE(t,e){try{const s=(await ub()).transaction(Lu,"readwrite");await s.objectStore(Lu).put(e,cb(t)),await s.done}catch(n){if(n instanceof Ci)Ai.warn(n.message);else{const s=ps.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ai.warn(s.message)}}}function cb(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _D=1024,vD=30;class ED{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bD(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=IE();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>vD){const h=wD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ai.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=IE(),{heartbeatsToSend:s,unsentEntries:o}=TD(this._heartbeatsCache.heartbeats),u=pf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Ai.warn(n),""}}}function IE(){return new Date().toISOString().substring(0,10)}function TD(t,e=_D){const n=[];let s=t.slice();for(const o of t){const u=n.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),CE(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),CE(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class bD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lC()?uC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return RE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return RE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function CE(t){return pf(JSON.stringify({version:2,heartbeats:t})).length}function wD(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function SD(t){Bo(new wa("platform-logger",e=>new VC(e),"PRIVATE")),Bo(new wa("heartbeat",e=>new ED(e),"PRIVATE")),ms(Zm,AE,t),ms(Zm,AE,"esm2020"),ms("fire-js","")}SD("");function hb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AD=hb,fb=new Xu("auth","Firebase",hb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Vg("@firebase/auth");function xD(t,...e){gf.logLevel<=Pe.WARN&&gf.warn(`Auth (${tl}): ${t}`,...e)}function Zh(t,...e){gf.logLevel<=Pe.ERROR&&gf.error(`Auth (${tl}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,...e){throw Ug(t,...e)}function Lr(t,...e){return Ug(t,...e)}function db(t,e,n){const s={...AD(),[e]:n};return new Xu("auth","Firebase",s).create(e,{appName:t.name})}function Ti(t){return db(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ug(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return fb.create(t,...e)}function be(t,e,...n){if(!t)throw Ug(e,...n)}function _i(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zh(e),new Error(e)}function xi(t,e){t||_i(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function RD(){return DE()==="http:"||DE()==="https:"}function DE(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RD()||iC()||"connection"in navigator)?navigator.onLine:!0}function CD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n){this.shortDelay=e,this.longDelay=n,xi(n>e,"Short delay should be less than long delay!"),this.isMobile=tC()||sC()}get(){return ID()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e){xi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_i("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_i("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_i("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],OD=new Zu(3e4,6e4);function xs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Di(t,e,n,s,o={}){return mb(t,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=Wu({key:t.config.apiKey,...h}).slice(1),m=await t._getAdditionalHeaders();m["Content-Type"]="application/json",t.languageCode&&(m["X-Firebase-Locale"]=t.languageCode);const g={method:e,headers:m,...u};return rC()||(g.referrerPolicy="no-referrer"),t.emulatorConfig&&el(t.emulatorConfig.host)&&(g.credentials="include"),pb.fetch()(await gb(t,t.config.apiHost,n,p),g)})}async function mb(t,e,n){t._canInitEmulator=!1;const s={...DD,...e};try{const o=new MD(t),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Ph(t,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ph(t,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Ph(t,"email-already-in-use",h);if(m==="USER_DISABLED")throw Ph(t,"user-disabled",h);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw db(t,E,g);mr(t,E)}}catch(o){if(o instanceof Ci)throw o;mr(t,"network-request-failed",{message:String(o)})}}async function Ju(t,e,n,s,o={}){const u=await Di(t,e,n,s,o);return"mfaPendingCredential"in u&&mr(t,"multi-factor-auth-required",{_serverResponse:u}),u}async function gb(t,e,n,s){const o=`${e}${n}?${s}`,u=t,h=u.config.emulator?qg(t.config,o):`${t.config.apiScheme}://${o}`;return ND.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function kD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Lr(this.auth,"network-request-failed")),OD.get())})}}function Ph(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Lr(t,e,s);return o.customData._tokenResponse=n,o}function NE(t){return t!==void 0&&t.enterprise!==void 0}class PD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function VD(t,e){return Di(t,"GET","/v2/recaptchaConfig",xs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LD(t,e){return Di(t,"POST","/v1/accounts:delete",e)}async function yf(t,e){return Di(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jD(t,e=!1){const n=Ct(t),s=await n.getIdToken(e),o=zg(s);be(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Iu(Nm(o.auth_time)),issuedAtTime:Iu(Nm(o.iat)),expirationTime:Iu(Nm(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Nm(t){return Number(t)*1e3}function zg(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Zh("JWT malformed, contained fewer than 3 sections"),null;try{const o=J1(n);return o?JSON.parse(o):(Zh("Failed to decode base64 JWT payload"),null)}catch(o){return Zh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function OE(t){const e=zg(t);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ci&&UD(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function UD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Iu(this.lastLoginAt),this.creationTime=Iu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _f(t){var S;const e=t.auth,n=await t.getIdToken(),s=await $o(t,yf(e,{idToken:n}));be(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const u=(S=o.providerUserInfo)!=null&&S.length?yb(o.providerUserInfo):[],h=BD(t.providerData,u),p=t.isAnonymous,m=!(t.email&&o.passwordHash)&&!(h!=null&&h.length),g=p?m:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new ng(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(t,E)}async function zD(t){const e=Ct(t);await _f(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BD(t,e){return[...t.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function yb(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $D(t,e){const n=await mb(t,{},async()=>{const s=Wu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=t.config,h=await gb(t,o,"/v1/token",`key=${u}`),p=await t._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:s};return t.emulatorConfig&&el(t.emulatorConfig.host)&&(m.credentials="include"),pb.fetch()(h,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HD(t,e){return Di(t,"POST","/v2/accounts:revokeToken",xs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):OE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){be(e.length!==0,"internal-error");const n=OE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await $D(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,h=new Mo;return s&&(be(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(be(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(be(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return _i("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,e){be(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cr{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new qD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ng(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await $o(this,this.stsTokenManager.getToken(this.auth,e));return be(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jD(this,e)}reload(){return zD(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await _f(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jn(this.auth.app))return Promise.reject(Ti(this.auth));const e=await this.getIdToken();return await $o(this,LD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,h=n.photoURL??void 0,p=n.tenantId??void 0,m=n._redirectEventId??void 0,g=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:S,emailVerified:w,isAnonymous:D,providerData:P,stsTokenManager:F}=n;be(S&&F,e,"internal-error");const V=Mo.fromJSON(this.name,F);be(typeof S=="string",e,"internal-error"),ss(s,e.name),ss(o,e.name),be(typeof w=="boolean",e,"internal-error"),be(typeof D=="boolean",e,"internal-error"),ss(u,e.name),ss(h,e.name),ss(p,e.name),ss(m,e.name),ss(g,e.name),ss(E,e.name);const z=new cr({uid:S,auth:e,email:o,emailVerified:w,displayName:s,isAnonymous:D,photoURL:h,phoneNumber:u,tenantId:p,stsTokenManager:V,createdAt:g,lastLoginAt:E});return P&&Array.isArray(P)&&(z.providerData=P.map(j=>({...j}))),m&&(z._redirectEventId=m),z}static async _fromIdTokenResponse(e,n,s=!1){const o=new Mo;o.updateFromServerResponse(n);const u=new cr({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await _f(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];be(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?yb(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new Mo;p.updateFromIdToken(s);const m=new cr({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new ng(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=new Map;function vi(t){xi(t instanceof Function,"Expected a class definition");let e=kE.get(t);return e?(xi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kE.set(t,e),e)}/**
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
 */class _b{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_b.type="NONE";const ME=_b;/**
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
 */function Jh(t,e,n){return`firebase:${t}:${e}:${n}`}class Po{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Jh(this.userKey,o.apiKey,u),this.fullPersistenceKey=Jh("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await yf(this.auth,{idToken:e}).catch(()=>{});return n?cr._fromGetAccountInfoResponse(this.auth,n,e):null}return cr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Po(vi(ME),e,s);const o=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||vi(ME);const h=Jh(s,e.config.apiKey,e.name);let p=null;for(const g of n)try{const E=await g._get(h);if(E){let S;if(typeof E=="string"){const w=await yf(e,{idToken:E}).catch(()=>{});if(!w)break;S=await cr._fromGetAccountInfoResponse(e,w,E)}else S=cr._fromJSON(e,E);g!==u&&(p=S),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new Po(u,e,s):(u=m[0],p&&await u._set(h,p.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new Po(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sb(e))return"Blackberry";if(Ab(e))return"Webos";if(Eb(e))return"Safari";if((e.includes("chrome/")||Tb(e))&&!e.includes("edge/"))return"Chrome";if(wb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function vb(t=mn()){return/firefox\//i.test(t)}function Eb(t=mn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tb(t=mn()){return/crios\//i.test(t)}function bb(t=mn()){return/iemobile/i.test(t)}function wb(t=mn()){return/android/i.test(t)}function Sb(t=mn()){return/blackberry/i.test(t)}function Ab(t=mn()){return/webos/i.test(t)}function Bg(t=mn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FD(t=mn()){var e;return Bg(t)&&!!((e=window.navigator)!=null&&e.standalone)}function GD(){return aC()&&document.documentMode===10}function xb(t=mn()){return Bg(t)||wb(t)||Ab(t)||Sb(t)||/windows phone/i.test(t)||bb(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t,e=[]){let n;switch(t){case"Browser":n=PE(mn());break;case"Worker":n=`${PE(mn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${tl}/${s}`}/**
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
 */class YD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((h,p)=>{try{const m=e(u);h(m)}catch(m){p(m)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function QD(t,e={}){return Di(t,"GET","/v2/passwordPolicy",xs(t,e))}/**
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
 */const KD=6;class XD{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??KD,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new VE(this),this.idTokenSubscription=new VE(this),this.beforeStateQueue=new YD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vi(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Po.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yf(this,{idToken:e}),s=await cr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Jn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,p=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===p)&&(m!=null&&m.user)&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _f(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jn(this.app))return Promise.reject(Ti(this));const n=e?Ct(e):null;return n&&be(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jn(this.app)?Promise.reject(Ti(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jn(this.app)?Promise.reject(Ti(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QD(this),n=new XD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xu("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await HD(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vi(e)||this._popupRedirectResolver;be(n,this,"argument-error"),this.redirectPersistenceManager=await Po.create(this,[vi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,o);return()=>{h=!0,m()}}else{const m=e.addObserver(n);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&xD(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Na(t){return Ct(t)}class VE{constructor(e){this.auth=e,this.observer=null,this.addObserver=pC(n=>this.observer=n)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZD(t){Bf=t}function Ib(t){return Bf.loadJS(t)}function JD(){return Bf.recaptchaEnterpriseScript}function e2(){return Bf.gapiScript}function t2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class n2{constructor(){this.enterprise=new r2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class r2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const i2="recaptcha-enterprise",Cb="NO_RECAPTCHA";class s2{constructor(e){this.type=i2,this.auth=Na(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{VD(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new PD(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(m=>{p(m)})})}function o(u,h,p){const m=window.grecaptcha;NE(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(g=>{h(g)}).catch(()=>{h(Cb)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new n2().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!n&&NE(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=JD();m.length!==0&&(m+=p),Ib(m).then(()=>{o(p,u,h)}).catch(g=>{h(g)})}}).catch(p=>{h(p)})})}}async function LE(t,e,n,s=!1,o=!1){const u=new s2(t);let h;if(o)h=Cb;else try{h=await u.verify(n)}catch{h=await u.verify(n,!0)}const p={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function rg(t,e,n,s,o){var u;if((u=t._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await LE(t,e,n,n==="getOobCode");return s(t,h)}else return s(t,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await LE(t,e,n,n==="getOobCode");return s(t,p)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(t,e){const n=jg(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(ba(u,e??{}))return o;mr(o,"already-initialized")}return n.initialize({options:e})}function o2(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(vi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function l2(t,e,n){const s=Na(t);be(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Db(e),{host:h,port:p}=u2(e),m=p===null?"":`:${p}`,g={url:`${u}//${h}${m}/`},E=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){be(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),be(ba(g,s.config.emulator)&&ba(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,el(h)?(rb(`${u}//${h}${m}`),ib("Auth",!0)):c2()}function Db(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function u2(t){const e=Db(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:jE(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:jE(h)}}}function jE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function c2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _i("not implemented")}_getIdTokenResponse(e){return _i("not implemented")}_linkToIdToken(e,n){return _i("not implemented")}_getReauthenticationResolver(e){return _i("not implemented")}}async function h2(t,e){return Di(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f2(t,e){return Ju(t,"POST","/v1/accounts:signInWithPassword",xs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(t,e){return Ju(t,"POST","/v1/accounts:signInWithEmailLink",xs(t,e))}async function p2(t,e){return Ju(t,"POST","/v1/accounts:signInWithEmailLink",xs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends $g{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new ju(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ju(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rg(e,n,"signInWithPassword",f2);case"emailLink":return d2(e,{email:this._email,oobCode:this._password});default:mr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rg(e,s,"signUpPassword",h2);case"emailLink":return p2(e,{idToken:n,email:this._email,oobCode:this._password});default:mr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t,e){return Ju(t,"POST","/v1/accounts:signInWithIdp",xs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2="http://localhost";class Sa extends $g{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const h=new Sa(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const n=this.buildRequest();return Vo(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Vo(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vo(e,n)}buildRequest(){const e={requestUri:m2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function y2(t){const e=Eu(Tu(t)).link,n=e?Eu(Tu(e)).deep_link_id:null,s=Eu(Tu(t)).deep_link_id;return(s?Eu(Tu(s)).link:null)||s||n||e||t}class Hg{constructor(e){const n=Eu(Tu(e)),s=n.apiKey??null,o=n.oobCode??null,u=g2(n.mode??null);be(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=y2(e);try{return new Hg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.providerId=nl.PROVIDER_ID}static credential(e,n){return ju._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Hg.parseLink(n);return be(s,"argument-error"),ju._fromEmailAndCode(e,s.code,s.tenantId)}}nl.PROVIDER_ID="password";nl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ec extends Nb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ls extends ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sa._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ls.credential(n,s)}catch{return null}}}ls.GOOGLE_SIGN_IN_METHOD="google.com";ls.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cs extends ec{constructor(){super("twitter.com")}static credential(e,n){return Sa._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return cs.credential(n,s)}catch{return null}}}cs.TWITTER_SIGN_IN_METHOD="twitter.com";cs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _2(t,e){return Ju(t,"POST","/v1/accounts:signUp",xs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await cr._fromIdTokenResponse(e,s,o),h=UE(s);return new Aa({user:u,providerId:h,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=UE(s);return new Aa({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function UE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends Ci{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,vf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new vf(e,n,s,o)}}function Ob(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?vf._fromErrorAndOperation(t,u,e,s):u})}async function v2(t,e,n=!1){const s=await $o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Aa._forOperation(t,"link",s)}/**
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
 */async function E2(t,e,n=!1){const{auth:s}=t;if(Jn(s.app))return Promise.reject(Ti(s));const o="reauthenticate";try{const u=await $o(t,Ob(s,o,e,t),n);be(u.idToken,s,"internal-error");const h=zg(u.idToken);be(h,s,"internal-error");const{sub:p}=h;return be(t.uid===p,s,"user-mismatch"),Aa._forOperation(t,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&mr(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(t,e,n=!1){if(Jn(t.app))return Promise.reject(Ti(t));const s="signIn",o=await Ob(t,s,e),u=await Aa._fromIdTokenResponse(t,s,o);return n||await t._updateCurrentUser(u.user),u}async function T2(t,e){return kb(Na(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mb(t){const e=Na(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function b2(t,e,n){if(Jn(t.app))return Promise.reject(Ti(t));const s=Na(t),h=await rg(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_2).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Mb(t),m}),p=await Aa._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function w2(t,e,n){return Jn(t.app)?Promise.reject(Ti(t)):T2(Ct(t),nl.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Mb(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S2(t,e){return Di(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ct(t),u={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},h=await $o(s,S2(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const p=s.providerData.find(({providerId:m})=>m==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function x2(t,e,n,s){return Ct(t).onIdTokenChanged(e,n,s)}function R2(t,e,n){return Ct(t).beforeAuthStateChanged(e,n)}function $f(t,e,n,s){return Ct(t).onAuthStateChanged(e,n,s)}function I2(t){return Ct(t).signOut()}const Ef="__sak";/**
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
 */class Pb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ef,"1"),this.storage.removeItem(Ef),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=1e3,D2=10;class Vb extends Pb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((h,p,m)=>{this.notifyListeners(h,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!n&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);GD()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,D2):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},C2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vb.type="LOCAL";const N2=Vb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb extends Pb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lb.type="SESSION";const jb=Lb;/**
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
 */function O2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Hf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Hf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async g=>g(n.origin,u)),m=await O2(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class k2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,m)=>{const g=Fg("",20);o.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const w=S;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(w.data.response);break;default:clearTimeout(E),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){return window}function M2(t){jr().location.href=t}/**
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
 */function Ub(){return typeof jr().WorkerGlobalScope<"u"&&typeof jr().importScripts=="function"}async function P2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function L2(){return Ub()?self:null}/**
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
 */const qb="firebaseLocalStorageDb",j2=1,Tf="firebaseLocalStorage",zb="fbase_key";class tc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ff(t,e){return t.transaction([Tf],e?"readwrite":"readonly").objectStore(Tf)}function U2(){const t=indexedDB.deleteDatabase(qb);return new tc(t).toPromise()}function ig(){const t=indexedDB.open(qb,j2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Tf,{keyPath:zb})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Tf)?e(s):(s.close(),await U2(),e(await ig()))})})}async function qE(t,e,n){const s=Ff(t,!0).put({[zb]:e,value:n});return new tc(s).toPromise()}async function q2(t,e){const n=Ff(t,!1).get(e),s=await new tc(n).toPromise();return s===void 0?null:s.value}function zE(t,e){const n=Ff(t,!0).delete(e);return new tc(n).toPromise()}const z2=800,B2=3;class Bb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ig(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>B2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ub()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hf._getInstance(L2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await P2(),!this.activeServiceWorker)return;this.sender=new k2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||V2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ig();return await qE(e,Ef,"1"),await zE(e,Ef),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>qE(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>q2(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Ff(o,!1).getAll();return new tc(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),z2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bb.type="LOCAL";const $2=Bb;new Zu(3e4,6e4);/**
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
 */function H2(t,e){return e?vi(e):(be(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gg extends $g{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function F2(t){return kb(t.auth,new Gg(t),t.bypassAuthState)}function G2(t){const{auth:e,user:n}=t;return be(n,e,"internal-error"),E2(n,new Gg(t),t.bypassAuthState)}async function Y2(t){const{auth:e,user:n}=t;return be(n,e,"internal-error"),v2(n,new Gg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return F2;case"linkViaPopup":case"linkViaRedirect":return Y2;case"reauthViaPopup":case"reauthViaRedirect":return G2;default:mr(this.auth,"internal-error")}}resolve(e){xi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=new Zu(2e3,1e4);class ko extends $b{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ko.currentPopupAction&&ko.currentPopupAction.cancel(),ko.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){xi(this.filter.length===1,"Popup operations only handle one event");const e=Fg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Lr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ko.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Q2.get())};e()}}ko.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2="pendingRedirect",ef=new Map;class X2 extends $b{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ef.get(this.auth._key());if(!e){try{const s=await W2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ef.set(this.auth._key(),e)}return this.bypassAuthState||ef.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W2(t,e){const n=eN(e),s=J2(t);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function Z2(t,e){ef.set(t._key(),e)}function J2(t){return vi(t._redirectPersistence)}function eN(t){return Jh(K2,t.config.apiKey,t.name)}async function tN(t,e,n=!1){if(Jn(t.app))return Promise.reject(Ti(t));const s=Na(t),o=H2(s,e),h=await new X2(s,o,n).execute();return h&&!n&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=600*1e3;class rN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Hb(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(Lr(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nN&&this.cachedEventUids.clear(),this.cachedEventUids.has(BE(e))}saveEventToCache(e){this.cachedEventUids.add(BE(e)),this.lastProcessedEventTime=Date.now()}}function BE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hb(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(t,e={}){return Di(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oN=/^https?/;async function lN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sN(t);for(const n of e)try{if(uN(n))return}catch{}mr(t,"unauthorized-domain")}function uN(t){const e=tg(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const h=new URL(t);return h.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===s}if(!oN.test(n))return!1;if(aN.test(t))return s===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const cN=new Zu(3e4,6e4);function $E(){const t=jr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hN(t){return new Promise((e,n)=>{var o,u,h;function s(){$E(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$E(),n(Lr(t,"network-request-failed"))},timeout:cN.get()})}if((u=(o=jr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=jr().gapi)!=null&&h.load)s();else{const p=t2("iframefcb");return jr()[p]=()=>{gapi.load?s():n(Lr(t,"network-request-failed"))},Ib(`${e2()}?onload=${p}`).catch(m=>n(m))}}).catch(e=>{throw tf=null,e})}let tf=null;function fN(t){return tf=tf||hN(t),tf}/**
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
 */const dN=new Zu(5e3,15e3),pN="__/auth/iframe",mN="emulator/auth/iframe",gN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _N(t){const e=t.config;be(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qg(e,mN):`https://${t.config.authDomain}/${pN}`,s={apiKey:e.apiKey,appName:t.name,v:tl},o=yN.get(t.config.apiHost);o&&(s.eid=o);const u=t._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Wu(s).slice(1)}`}async function vN(t){const e=await fN(t),n=jr().gapi;return be(n,t,"internal-error"),e.open({where:document.body,url:_N(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gN,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Lr(t,"network-request-failed"),p=jr().setTimeout(()=>{u(h)},dN.get());function m(){jr().clearTimeout(p),o(s)}s.ping(m).then(m,()=>{u(h)})}))}/**
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
 */const EN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TN=500,bN=600,wN="_blank",SN="http://localhost";class HE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AN(t,e,n,s=TN,o=bN){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m={...EN,width:s.toString(),height:o.toString(),top:u,left:h},g=mn().toLowerCase();n&&(p=Tb(g)?wN:n),vb(g)&&(e=e||SN,m.scrollbars="yes");const E=Object.entries(m).reduce((w,[D,P])=>`${w}${D}=${P},`,"");if(FD(g)&&p!=="_self")return xN(e||"",p),new HE(null);const S=window.open(e||"",p,E);be(S,t,"popup-blocked");try{S.focus()}catch{}return new HE(S)}function xN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const RN="__/auth/handler",IN="emulator/auth/handler",CN=encodeURIComponent("fac");async function FE(t,e,n,s,o,u){be(t.config.authDomain,t,"auth-domain-config-required"),be(t.config.apiKey,t,"invalid-api-key");const h={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:tl,eventId:o};if(e instanceof Nb){e.setDefaultLanguage(t.languageCode),h.providerId=e.providerId||"",dC(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))h[E]=S}if(e instanceof ec){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(h.scopes=E.join(","))}t.tenantId&&(h.tid=t.tenantId);const p=h;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const m=await t._getAppCheckToken(),g=m?`#${CN}=${encodeURIComponent(m)}`:"";return`${DN(t)}?${Wu(p).slice(1)}${g}`}function DN({config:t}){return t.emulator?qg(t,IN):`https://${t.authDomain}/${RN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="webStorageSupport";class NN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jb,this._completeRedirectFn=tN,this._overrideRedirectResult=Z2}async _openPopup(e,n,s,o){var h;xi((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await FE(e,n,s,tg(),o);return AN(e,u,Fg())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await FE(e,n,s,tg(),o);return M2(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(xi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await vN(e),s=new rN(e);return n.register("authEvent",o=>(be(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Om,{type:Om},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[Om];u!==void 0&&n(!!u),mr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xb()||Eb()||Bg()}}const ON=NN;var GE="@firebase/auth",YE="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PN(t){Bo(new wa("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;be(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:h,authDomain:p,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rb(t)},g=new WD(s,o,u,m);return o2(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Bo(new wa("auth-internal",e=>{const n=Na(e.getProvider("auth").getImmediate());return(s=>new kN(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ms(GE,YE,MN(t)),ms(GE,YE,"esm2020")}/**
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
 */const VN=300,LN=nb("authIdTokenMaxAge")||VN;let QE=null;const jN=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>LN)return;const o=n==null?void 0:n.token;QE!==o&&(QE=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function UN(t=lb()){const e=jg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=a2(t,{popupRedirectResolver:ON,persistence:[$2,N2,jb]}),s=nb("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=jN(u.toString());R2(n,h,()=>h(n.currentUser)),x2(n,p=>h(p))}}const o=eb("auth");return o&&l2(n,`http://${o}`),n}function qN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}ZD({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=o=>{const u=Lr("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",qN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PN("Browser");var zN="firebase",BN="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ms(zN,BN,"app");var KE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gs,Fb;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,x){function R(){}R.prototype=x.prototype,C.D=x.prototype,C.prototype=new R,C.prototype.constructor=C,C.C=function(k,L,q){for(var N=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)N[Dt-2]=arguments[Dt];return x.prototype[L].apply(k,N)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,x,R){R||(R=0);var k=Array(16);if(typeof x=="string")for(var L=0;16>L;++L)k[L]=x.charCodeAt(R++)|x.charCodeAt(R++)<<8|x.charCodeAt(R++)<<16|x.charCodeAt(R++)<<24;else for(L=0;16>L;++L)k[L]=x[R++]|x[R++]<<8|x[R++]<<16|x[R++]<<24;x=C.g[0],R=C.g[1],L=C.g[2];var q=C.g[3],N=x+(q^R&(L^q))+k[0]+3614090360&4294967295;x=R+(N<<7&4294967295|N>>>25),N=q+(L^x&(R^L))+k[1]+3905402710&4294967295,q=x+(N<<12&4294967295|N>>>20),N=L+(R^q&(x^R))+k[2]+606105819&4294967295,L=q+(N<<17&4294967295|N>>>15),N=R+(x^L&(q^x))+k[3]+3250441966&4294967295,R=L+(N<<22&4294967295|N>>>10),N=x+(q^R&(L^q))+k[4]+4118548399&4294967295,x=R+(N<<7&4294967295|N>>>25),N=q+(L^x&(R^L))+k[5]+1200080426&4294967295,q=x+(N<<12&4294967295|N>>>20),N=L+(R^q&(x^R))+k[6]+2821735955&4294967295,L=q+(N<<17&4294967295|N>>>15),N=R+(x^L&(q^x))+k[7]+4249261313&4294967295,R=L+(N<<22&4294967295|N>>>10),N=x+(q^R&(L^q))+k[8]+1770035416&4294967295,x=R+(N<<7&4294967295|N>>>25),N=q+(L^x&(R^L))+k[9]+2336552879&4294967295,q=x+(N<<12&4294967295|N>>>20),N=L+(R^q&(x^R))+k[10]+4294925233&4294967295,L=q+(N<<17&4294967295|N>>>15),N=R+(x^L&(q^x))+k[11]+2304563134&4294967295,R=L+(N<<22&4294967295|N>>>10),N=x+(q^R&(L^q))+k[12]+1804603682&4294967295,x=R+(N<<7&4294967295|N>>>25),N=q+(L^x&(R^L))+k[13]+4254626195&4294967295,q=x+(N<<12&4294967295|N>>>20),N=L+(R^q&(x^R))+k[14]+2792965006&4294967295,L=q+(N<<17&4294967295|N>>>15),N=R+(x^L&(q^x))+k[15]+1236535329&4294967295,R=L+(N<<22&4294967295|N>>>10),N=x+(L^q&(R^L))+k[1]+4129170786&4294967295,x=R+(N<<5&4294967295|N>>>27),N=q+(R^L&(x^R))+k[6]+3225465664&4294967295,q=x+(N<<9&4294967295|N>>>23),N=L+(x^R&(q^x))+k[11]+643717713&4294967295,L=q+(N<<14&4294967295|N>>>18),N=R+(q^x&(L^q))+k[0]+3921069994&4294967295,R=L+(N<<20&4294967295|N>>>12),N=x+(L^q&(R^L))+k[5]+3593408605&4294967295,x=R+(N<<5&4294967295|N>>>27),N=q+(R^L&(x^R))+k[10]+38016083&4294967295,q=x+(N<<9&4294967295|N>>>23),N=L+(x^R&(q^x))+k[15]+3634488961&4294967295,L=q+(N<<14&4294967295|N>>>18),N=R+(q^x&(L^q))+k[4]+3889429448&4294967295,R=L+(N<<20&4294967295|N>>>12),N=x+(L^q&(R^L))+k[9]+568446438&4294967295,x=R+(N<<5&4294967295|N>>>27),N=q+(R^L&(x^R))+k[14]+3275163606&4294967295,q=x+(N<<9&4294967295|N>>>23),N=L+(x^R&(q^x))+k[3]+4107603335&4294967295,L=q+(N<<14&4294967295|N>>>18),N=R+(q^x&(L^q))+k[8]+1163531501&4294967295,R=L+(N<<20&4294967295|N>>>12),N=x+(L^q&(R^L))+k[13]+2850285829&4294967295,x=R+(N<<5&4294967295|N>>>27),N=q+(R^L&(x^R))+k[2]+4243563512&4294967295,q=x+(N<<9&4294967295|N>>>23),N=L+(x^R&(q^x))+k[7]+1735328473&4294967295,L=q+(N<<14&4294967295|N>>>18),N=R+(q^x&(L^q))+k[12]+2368359562&4294967295,R=L+(N<<20&4294967295|N>>>12),N=x+(R^L^q)+k[5]+4294588738&4294967295,x=R+(N<<4&4294967295|N>>>28),N=q+(x^R^L)+k[8]+2272392833&4294967295,q=x+(N<<11&4294967295|N>>>21),N=L+(q^x^R)+k[11]+1839030562&4294967295,L=q+(N<<16&4294967295|N>>>16),N=R+(L^q^x)+k[14]+4259657740&4294967295,R=L+(N<<23&4294967295|N>>>9),N=x+(R^L^q)+k[1]+2763975236&4294967295,x=R+(N<<4&4294967295|N>>>28),N=q+(x^R^L)+k[4]+1272893353&4294967295,q=x+(N<<11&4294967295|N>>>21),N=L+(q^x^R)+k[7]+4139469664&4294967295,L=q+(N<<16&4294967295|N>>>16),N=R+(L^q^x)+k[10]+3200236656&4294967295,R=L+(N<<23&4294967295|N>>>9),N=x+(R^L^q)+k[13]+681279174&4294967295,x=R+(N<<4&4294967295|N>>>28),N=q+(x^R^L)+k[0]+3936430074&4294967295,q=x+(N<<11&4294967295|N>>>21),N=L+(q^x^R)+k[3]+3572445317&4294967295,L=q+(N<<16&4294967295|N>>>16),N=R+(L^q^x)+k[6]+76029189&4294967295,R=L+(N<<23&4294967295|N>>>9),N=x+(R^L^q)+k[9]+3654602809&4294967295,x=R+(N<<4&4294967295|N>>>28),N=q+(x^R^L)+k[12]+3873151461&4294967295,q=x+(N<<11&4294967295|N>>>21),N=L+(q^x^R)+k[15]+530742520&4294967295,L=q+(N<<16&4294967295|N>>>16),N=R+(L^q^x)+k[2]+3299628645&4294967295,R=L+(N<<23&4294967295|N>>>9),N=x+(L^(R|~q))+k[0]+4096336452&4294967295,x=R+(N<<6&4294967295|N>>>26),N=q+(R^(x|~L))+k[7]+1126891415&4294967295,q=x+(N<<10&4294967295|N>>>22),N=L+(x^(q|~R))+k[14]+2878612391&4294967295,L=q+(N<<15&4294967295|N>>>17),N=R+(q^(L|~x))+k[5]+4237533241&4294967295,R=L+(N<<21&4294967295|N>>>11),N=x+(L^(R|~q))+k[12]+1700485571&4294967295,x=R+(N<<6&4294967295|N>>>26),N=q+(R^(x|~L))+k[3]+2399980690&4294967295,q=x+(N<<10&4294967295|N>>>22),N=L+(x^(q|~R))+k[10]+4293915773&4294967295,L=q+(N<<15&4294967295|N>>>17),N=R+(q^(L|~x))+k[1]+2240044497&4294967295,R=L+(N<<21&4294967295|N>>>11),N=x+(L^(R|~q))+k[8]+1873313359&4294967295,x=R+(N<<6&4294967295|N>>>26),N=q+(R^(x|~L))+k[15]+4264355552&4294967295,q=x+(N<<10&4294967295|N>>>22),N=L+(x^(q|~R))+k[6]+2734768916&4294967295,L=q+(N<<15&4294967295|N>>>17),N=R+(q^(L|~x))+k[13]+1309151649&4294967295,R=L+(N<<21&4294967295|N>>>11),N=x+(L^(R|~q))+k[4]+4149444226&4294967295,x=R+(N<<6&4294967295|N>>>26),N=q+(R^(x|~L))+k[11]+3174756917&4294967295,q=x+(N<<10&4294967295|N>>>22),N=L+(x^(q|~R))+k[2]+718787259&4294967295,L=q+(N<<15&4294967295|N>>>17),N=R+(q^(L|~x))+k[9]+3951481745&4294967295,C.g[0]=C.g[0]+x&4294967295,C.g[1]=C.g[1]+(L+(N<<21&4294967295|N>>>11))&4294967295,C.g[2]=C.g[2]+L&4294967295,C.g[3]=C.g[3]+q&4294967295}s.prototype.u=function(C,x){x===void 0&&(x=C.length);for(var R=x-this.blockSize,k=this.B,L=this.h,q=0;q<x;){if(L==0)for(;q<=R;)o(this,C,q),q+=this.blockSize;if(typeof C=="string"){for(;q<x;)if(k[L++]=C.charCodeAt(q++),L==this.blockSize){o(this,k),L=0;break}}else for(;q<x;)if(k[L++]=C[q++],L==this.blockSize){o(this,k),L=0;break}}this.h=L,this.o+=x},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var x=1;x<C.length-8;++x)C[x]=0;var R=8*this.o;for(x=C.length-8;x<C.length;++x)C[x]=R&255,R/=256;for(this.u(C),C=Array(16),x=R=0;4>x;++x)for(var k=0;32>k;k+=8)C[R++]=this.g[x]>>>k&255;return C};function u(C,x){var R=p;return Object.prototype.hasOwnProperty.call(R,C)?R[C]:R[C]=x(C)}function h(C,x){this.h=x;for(var R=[],k=!0,L=C.length-1;0<=L;L--){var q=C[L]|0;k&&q==x||(R[L]=q,k=!1)}this.g=R}var p={};function m(C){return-128<=C&&128>C?u(C,function(x){return new h([x|0],0>x?-1:0)}):new h([C|0],0>C?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return S;if(0>C)return V(g(-C));for(var x=[],R=1,k=0;C>=R;k++)x[k]=C/R|0,R*=4294967296;return new h(x,0)}function E(C,x){if(C.length==0)throw Error("number format error: empty string");if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(C.charAt(0)=="-")return V(E(C.substring(1),x));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(x,8)),k=S,L=0;L<C.length;L+=8){var q=Math.min(8,C.length-L),N=parseInt(C.substring(L,L+q),x);8>q?(q=g(Math.pow(x,q)),k=k.j(q).add(g(N))):(k=k.j(R),k=k.add(g(N)))}return k}var S=m(0),w=m(1),D=m(16777216);t=h.prototype,t.m=function(){if(F(this))return-V(this).m();for(var C=0,x=1,R=0;R<this.g.length;R++){var k=this.i(R);C+=(0<=k?k:4294967296+k)*x,x*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(P(this))return"0";if(F(this))return"-"+V(this).toString(C);for(var x=g(Math.pow(C,6)),R=this,k="";;){var L=ae(R,x).g;R=z(R,L.j(x));var q=((0<R.g.length?R.g[0]:R.h)>>>0).toString(C);if(R=L,P(R))return q+k;for(;6>q.length;)q="0"+q;k=q+k}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function P(C){if(C.h!=0)return!1;for(var x=0;x<C.g.length;x++)if(C.g[x]!=0)return!1;return!0}function F(C){return C.h==-1}t.l=function(C){return C=z(this,C),F(C)?-1:P(C)?0:1};function V(C){for(var x=C.g.length,R=[],k=0;k<x;k++)R[k]=~C.g[k];return new h(R,~C.h).add(w)}t.abs=function(){return F(this)?V(this):this},t.add=function(C){for(var x=Math.max(this.g.length,C.g.length),R=[],k=0,L=0;L<=x;L++){var q=k+(this.i(L)&65535)+(C.i(L)&65535),N=(q>>>16)+(this.i(L)>>>16)+(C.i(L)>>>16);k=N>>>16,q&=65535,N&=65535,R[L]=N<<16|q}return new h(R,R[R.length-1]&-2147483648?-1:0)};function z(C,x){return C.add(V(x))}t.j=function(C){if(P(this)||P(C))return S;if(F(this))return F(C)?V(this).j(V(C)):V(V(this).j(C));if(F(C))return V(this.j(V(C)));if(0>this.l(D)&&0>C.l(D))return g(this.m()*C.m());for(var x=this.g.length+C.g.length,R=[],k=0;k<2*x;k++)R[k]=0;for(k=0;k<this.g.length;k++)for(var L=0;L<C.g.length;L++){var q=this.i(k)>>>16,N=this.i(k)&65535,Dt=C.i(L)>>>16,at=C.i(L)&65535;R[2*k+2*L]+=N*at,j(R,2*k+2*L),R[2*k+2*L+1]+=q*at,j(R,2*k+2*L+1),R[2*k+2*L+1]+=N*Dt,j(R,2*k+2*L+1),R[2*k+2*L+2]+=q*Dt,j(R,2*k+2*L+2)}for(k=0;k<x;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=x;k<2*x;k++)R[k]=0;return new h(R,0)};function j(C,x){for(;(C[x]&65535)!=C[x];)C[x+1]+=C[x]>>>16,C[x]&=65535,x++}function X(C,x){this.g=C,this.h=x}function ae(C,x){if(P(x))throw Error("division by zero");if(P(C))return new X(S,S);if(F(C))return x=ae(V(C),x),new X(V(x.g),V(x.h));if(F(x))return x=ae(C,V(x)),new X(V(x.g),x.h);if(30<C.g.length){if(F(C)||F(x))throw Error("slowDivide_ only works with positive integers.");for(var R=w,k=x;0>=k.l(C);)R=le(R),k=le(k);var L=fe(R,1),q=fe(k,1);for(k=fe(k,2),R=fe(R,2);!P(k);){var N=q.add(k);0>=N.l(C)&&(L=L.add(R),q=N),k=fe(k,1),R=fe(R,1)}return x=z(C,L.j(x)),new X(L,x)}for(L=S;0<=C.l(x);){for(R=Math.max(1,Math.floor(C.m()/x.m())),k=Math.ceil(Math.log(R)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),q=g(R),N=q.j(x);F(N)||0<N.l(C);)R-=k,q=g(R),N=q.j(x);P(q)&&(q=w),L=L.add(q),C=z(C,N)}return new X(L,C)}t.A=function(C){return ae(this,C).h},t.and=function(C){for(var x=Math.max(this.g.length,C.g.length),R=[],k=0;k<x;k++)R[k]=this.i(k)&C.i(k);return new h(R,this.h&C.h)},t.or=function(C){for(var x=Math.max(this.g.length,C.g.length),R=[],k=0;k<x;k++)R[k]=this.i(k)|C.i(k);return new h(R,this.h|C.h)},t.xor=function(C){for(var x=Math.max(this.g.length,C.g.length),R=[],k=0;k<x;k++)R[k]=this.i(k)^C.i(k);return new h(R,this.h^C.h)};function le(C){for(var x=C.g.length+1,R=[],k=0;k<x;k++)R[k]=C.i(k)<<1|C.i(k-1)>>>31;return new h(R,C.h)}function fe(C,x){var R=x>>5;x%=32;for(var k=C.g.length-R,L=[],q=0;q<k;q++)L[q]=0<x?C.i(q+R)>>>x|C.i(q+R+1)<<32-x:C.i(q+R);return new h(L,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Fb=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=E,gs=h}).apply(typeof KE<"u"?KE:typeof self<"u"?self:typeof window<"u"?window:{});var Vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gb,bu,Yb,nf,sg,Qb,Kb,Xb;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,v){return c==Array.prototype||c==Object.prototype||(c[y]=v.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vh=="object"&&Vh];for(var y=0;y<c.length;++y){var v=c[y];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function o(c,y){if(y)e:{var v=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var B=c[A];if(!(B in v))break e;v=v[B]}c=c[c.length-1],A=v[c],y=y(A),y!=A&&y!=null&&e(v,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var v=0,A=!1,B={next:function(){if(!A&&v<c.length){var W=v++;return{value:y(W,c[W]),done:!1}}return A=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function m(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function E(c,y,v){return c.call.apply(c.bind,arguments)}function S(c,y,v){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,A),c.apply(y,B)}}return function(){return c.apply(y,arguments)}}function w(c,y,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,w.apply(null,arguments)}function D(c,y){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function P(c,y){function v(){}v.prototype=y.prototype,c.aa=y.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(A,B,W){for(var ue=Array(arguments.length-2),je=2;je<arguments.length;je++)ue[je-2]=arguments[je];return y.prototype[B].apply(A,ue)}}function F(c){const y=c.length;if(0<y){const v=Array(y);for(let A=0;A<y;A++)v[A]=c[A];return v}return[]}function V(c,y){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(m(A)){const B=c.length||0,W=A.length||0;c.length=B+W;for(let ue=0;ue<W;ue++)c[B+ue]=A[ue]}else c.push(A)}}class z{constructor(y,v){this.i=y,this.j=v,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function j(c){return/^[\s\xa0]*$/.test(c)}function X(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function ae(c){return ae[" "](c),c}ae[" "]=function(){};var le=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function fe(c,y,v){for(const A in c)y.call(v,c[A],A,c)}function C(c,y){for(const v in c)y.call(void 0,c[v],v,c)}function x(c){const y={};for(const v in c)y[v]=c[v];return y}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(c,y){let v,A;for(let B=1;B<arguments.length;B++){A=arguments[B];for(v in A)c[v]=A[v];for(let W=0;W<R.length;W++)v=R[W],Object.prototype.hasOwnProperty.call(A,v)&&(c[v]=A[v])}}function L(c){var y=1;c=c.split(":");const v=[];for(;0<y&&c.length;)v.push(c.shift()),y--;return c.length&&v.push(c.join(":")),v}function q(c){p.setTimeout(()=>{throw c},0)}function N(){var c=Ie;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Dt{constructor(){this.h=this.g=null}add(y,v){const A=at.get();A.set(y,v),this.h?this.h.next=A:this.g=A,this.h=A}}var at=new z(()=>new Z,c=>c.reset());class Z{constructor(){this.next=this.g=this.h=null}set(y,v){this.h=y,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,me=!1,Ie=new Dt,O=()=>{const c=p.Promise.resolve(void 0);ce=()=>{c.then(ie)}};var ie=()=>{for(var c;c=N();){try{c.h.call(c.g)}catch(v){q(v)}var y=at;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}me=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};p.addEventListener("test",v,y),p.removeEventListener("test",v,y)}catch{}return c}();function Re(c,y){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(le){e:{try{ae(y.nodeName);var B=!0;break e}catch{}B=!1}B||(y=null)}}else v=="mouseover"?y=c.fromElement:v=="mouseout"&&(y=c.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Re.aa.h.call(this)}}P(Re,se);var ve={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),Be=0;function jt(c,y,v,A,B){this.listener=c,this.proxy=null,this.src=y,this.type=v,this.capture=!!A,this.ha=B,this.key=++Be,this.da=this.fa=!1}function jn(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function En(c){this.src=c,this.g={},this.h=0}En.prototype.add=function(c,y,v,A,B){var W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);var ue=Ds(c,y,A,B);return-1<ue?(y=c[ue],v||(y.fa=!1)):(y=new jt(y,this.src,W,!!A,B),y.fa=v,c.push(y)),y};function sn(c,y){var v=y.type;if(v in c.g){var A=c.g[v],B=Array.prototype.indexOf.call(A,y,void 0),W;(W=0<=B)&&Array.prototype.splice.call(A,B,1),W&&(jn(y),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Ds(c,y,v,A){for(var B=0;B<c.length;++B){var W=c[B];if(!W.da&&W.listener==y&&W.capture==!!v&&W.ha==A)return B}return-1}var Ns="closure_lm_"+(1e6*Math.random()|0),ll={};function lc(c,y,v,A,B){if(Array.isArray(y)){for(var W=0;W<y.length;W++)lc(c,y[W],v,A,B);return null}return v=uc(v),c&&c[ct]?c.K(y,v,g(A)?!!A.capture:!1,B):Un(c,y,v,!1,A,B)}function Un(c,y,v,A,B,W){if(!y)throw Error("Invalid event type");var ue=g(B)?!!B.capture:!!B,je=Pa(c);if(je||(c[Ns]=je=new En(c)),v=je.add(y,v,A,ue,W),v.proxy)return v;if(A=pd(),v.proxy=A,A.src=c,A.listener=v,c.addEventListener)ge||(B=ue),B===void 0&&(B=!1),c.addEventListener(y.toString(),A,B);else if(c.attachEvent)c.attachEvent(Os(y.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function pd(){function c(v){return y.call(c.src,c.listener,v)}const y=md;return c}function ul(c,y,v,A,B){if(Array.isArray(y))for(var W=0;W<y.length;W++)ul(c,y[W],v,A,B);else A=g(A)?!!A.capture:!!A,v=uc(v),c&&c[ct]?(c=c.i,y=String(y).toString(),y in c.g&&(W=c.g[y],v=Ds(W,v,A,B),-1<v&&(jn(W[v]),Array.prototype.splice.call(W,v,1),W.length==0&&(delete c.g[y],c.h--)))):c&&(c=Pa(c))&&(y=c.g[y.toString()],c=-1,y&&(c=Ds(y,v,A,B)),(v=-1<c?y[c]:null)&&Ma(v))}function Ma(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[ct])sn(y.i,c);else{var v=c.type,A=c.proxy;y.removeEventListener?y.removeEventListener(v,A,c.capture):y.detachEvent?y.detachEvent(Os(v),A):y.addListener&&y.removeListener&&y.removeListener(A),(v=Pa(y))?(sn(v,c),v.h==0&&(v.src=null,y[Ns]=null)):jn(c)}}}function Os(c){return c in ll?ll[c]:ll[c]="on"+c}function md(c,y){if(c.da)c=!0;else{y=new Re(y,this);var v=c.listener,A=c.ha||c.src;c.fa&&Ma(c),c=v.call(A,y)}return c}function Pa(c){return c=c[Ns],c instanceof En?c:null}var cl="__closure_events_fn_"+(1e9*Math.random()>>>0);function uc(c){return typeof c=="function"?c:(c[cl]||(c[cl]=function(y){return c.handleEvent(y)}),c[cl])}function dt(){oe.call(this),this.i=new En(this),this.M=this,this.F=null}P(dt,oe),dt.prototype[ct]=!0,dt.prototype.removeEventListener=function(c,y,v,A){ul(this,c,y,v,A)};function Qe(c,y){var v,A=c.F;if(A)for(v=[];A;A=A.F)v.push(A);if(c=c.M,A=y.type||y,typeof y=="string")y=new se(y,c);else if(y instanceof se)y.target=y.target||c;else{var B=y;y=new se(A,c),k(y,B)}if(B=!0,v)for(var W=v.length-1;0<=W;W--){var ue=y.g=v[W];B=xn(ue,A,!0,y)&&B}if(ue=y.g=c,B=xn(ue,A,!0,y)&&B,B=xn(ue,A,!1,y)&&B,v)for(W=0;W<v.length;W++)ue=y.g=v[W],B=xn(ue,A,!1,y)&&B}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var v=c.g[y],A=0;A<v.length;A++)jn(v[A]);delete c.g[y],c.h--}}this.F=null},dt.prototype.K=function(c,y,v,A){return this.i.add(String(c),y,!1,v,A)},dt.prototype.L=function(c,y,v,A){return this.i.add(String(c),y,!0,v,A)};function xn(c,y,v,A){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var B=!0,W=0;W<y.length;++W){var ue=y[W];if(ue&&!ue.da&&ue.capture==v){var je=ue.listener,Ot=ue.ha||ue.src;ue.fa&&sn(c.i,ue),B=je.call(Ot,A)!==!1&&B}}return B&&!A.defaultPrevented}function an(c,y,v){if(typeof c=="function")v&&(c=w(c,v));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:p.setTimeout(c,y||0)}function cc(c){c.g=an(()=>{c.g=null,c.i&&(c.i=!1,cc(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class gd extends oe{constructor(y,v){super(),this.m=y,this.l=v,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:cc(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ks(c){oe.call(this),this.h=c,this.g={}}P(ks,oe);var Ms=[];function Ps(c){fe(c.g,function(y,v){this.g.hasOwnProperty(v)&&Ma(y)},c),c.g={}}ks.prototype.N=function(){ks.aa.N.call(this),Ps(this)},ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nr=p.JSON.stringify,Va=p.JSON.parse,Vs=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function hl(){}hl.prototype.h=null;function fl(c){return c.h||(c.h=c.i())}function dl(){}var Fr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gr(){se.call(this,"d")}P(Gr,se);function pl(){se.call(this,"c")}P(pl,se);var _r={},ml=null;function Ni(){return ml=ml||new dt}_r.La="serverreachability";function La(c){se.call(this,_r.La,c)}P(La,se);function Oi(c){const y=Ni();Qe(y,new La(y))}_r.STAT_EVENT="statevent";function hc(c,y){se.call(this,_r.STAT_EVENT,c),this.stat=y}P(hc,se);function ot(c){const y=Ni();Qe(y,new hc(y,c))}_r.Ma="timingevent";function Nt(c,y){se.call(this,_r.Ma,c),this.size=y}P(Nt,se);function Tt(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},y)}function qn(){this.g=!0}qn.prototype.xa=function(){this.g=!1};function gl(c,y,v,A,B,W){c.info(function(){if(c.g)if(W)for(var ue="",je=W.split("&"),Ot=0;Ot<je.length;Ot++){var Ue=je[Ot].split("=");if(1<Ue.length){var qt=Ue[0];Ue=Ue[1];var kt=qt.split("_");ue=2<=kt.length&&kt[1]=="type"?ue+(qt+"="+Ue+"&"):ue+(qt+"=redacted&")}}else ue=null;else ue=W;return"XMLHTTP REQ ("+A+") [attempt "+B+"]: "+y+`
`+v+`
`+ue})}function yd(c,y,v,A,B,W,ue){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+B+"]: "+y+`
`+v+`
`+W+" "+ue})}function ki(c,y,v,A){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Ls(c,v)+(A?" "+A:"")})}function fc(c,y){c.info(function(){return"TIMEOUT: "+y})}qn.prototype.info=function(){};function Ls(c,y){if(!c.g)return y;if(!y)return null;try{var v=JSON.parse(y);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var A=v[c];if(!(2>A.length)){var B=A[1];if(Array.isArray(B)&&!(1>B.length)){var W=B[0];if(W!="noop"&&W!="stop"&&W!="close")for(var ue=1;ue<B.length;ue++)B[ue]=""}}}}return nr(v)}catch{return y}}var Mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vr;function Er(){}P(Er,hl),Er.prototype.g=function(){return new XMLHttpRequest},Er.prototype.i=function(){return{}},vr=new Er;function gn(c,y,v,A){this.j=c,this.i=y,this.l=v,this.R=A||1,this.U=new ks(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}var yl={},ja={};function rr(c,y,v){c.L=1,c.v=Bs(Rn(y)),c.m=v,c.P=!0,Qr(c,null)}function Qr(c,y){c.F=Date.now(),js(c),c.A=Rn(c.v);var v=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),wl(v.i,"t",A),c.C=0,v=c.j.J,c.h=new yt,c.g=Ic(c.j,v?y:null,!c.m),0<c.O&&(c.M=new gd(w(c.Y,c,c.g),c.O)),y=c.U,v=c.g,A=c.ca;var B="readystatechange";Array.isArray(B)||(B&&(Ms[0]=B.toString()),B=Ms);for(var W=0;W<B.length;W++){var ue=lc(v,B[W],A||y.handleEvent,!1,y.h||y);if(!ue)break;y.g[ue.key]=ue}y=c.H?x(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),Oi(),gl(c.i,c.u,c.A,c.l,c.R,c.m)}gn.prototype.ca=function(c){c=c.target;const y=this.M;y&&Hn(c)==3?y.j():this.Y(c)},gn.prototype.Y=function(c){try{if(c==this.g)e:{const kt=Hn(this.g);var y=this.g.Ba();const ni=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||Ec(this.g)))){this.J||kt!=4||y==7||(y==8||0>=ni?Oi(3):Oi(2)),Pi(this);var v=this.g.Z();this.X=v;t:if(dc(this)){var A=Ec(this.g);c="";var B=A.length,W=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),Tr(this);var ue="";break t}this.h.i=new p.TextDecoder}for(y=0;y<B;y++)this.h.h=!0,c+=this.h.i.decode(A[y],{stream:!(W&&y==B-1)});A.length=0,this.h.g+=c,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=v==200,yd(this.i,this.u,this.A,this.l,this.R,kt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Ot=this.g;if((je=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(je)){var Ue=je;break t}}Ue=null}if(v=Ue)ki(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Us(this,v);else{this.o=!1,this.s=3,ot(12),Kt(this),Tr(this);break e}}if(this.P){v=!0;let Xt;for(;!this.J&&this.C<ue.length;)if(Xt=pc(this,ue),Xt==ja){kt==4&&(this.s=4,ot(14),v=!1),ki(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==yl){this.s=4,ot(15),ki(this.i,this.l,ue,"[Invalid Chunk]"),v=!1;break}else ki(this.i,this.l,Xt,null),Us(this,Xt);if(dc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||ue.length!=0||this.h.h||(this.s=1,ot(16),v=!1),this.o=this.o&&v,!v)ki(this.i,this.l,ue,"[Invalid Chunked Response]"),Kt(this),Tr(this);else if(0<ue.length&&!this.W){this.W=!0;var qt=this.j;qt.g==this&&qt.ba&&!qt.M&&(qt.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),Xs(qt),qt.M=!0,ot(11))}}else ki(this.i,this.l,ue,null),Us(this,ue);kt==4&&Kt(this),this.o&&!this.J&&(kt==4?Ac(this.j,this):(this.o=!1,js(this)))}else bd(this.g),v==400&&0<ue.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),Kt(this),Tr(this)}}}catch{}finally{}};function dc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function pc(c,y){var v=c.C,A=y.indexOf(`
`,v);return A==-1?ja:(v=Number(y.substring(v,A)),isNaN(v)?yl:(A+=1,A+v>y.length?ja:(y=y.slice(A,A+v),c.C=A+v,y)))}gn.prototype.cancel=function(){this.J=!0,Kt(this)};function js(c){c.S=Date.now()+c.I,mc(c,c.I)}function mc(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Tt(w(c.ba,c),y)}function Pi(c){c.B&&(p.clearTimeout(c.B),c.B=null)}gn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(fc(this.i,this.A),this.L!=2&&(Oi(),ot(17)),Kt(this),this.s=2,Tr(this)):mc(this,this.S-c)};function Tr(c){c.j.G==0||c.J||Ac(c.j,c)}function Kt(c){Pi(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,Ps(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function Us(c,y){try{var v=c.j;if(v.G!=0&&(v.g==c||_l(v.h,c))){if(!c.K&&_l(v.h,c)&&v.G==3){try{var A=v.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var B=A;if(B[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)Xa(v),Qa(v);else break e;Il(v),ot(18)}}else v.za=B[1],0<v.za-v.T&&37500>B[2]&&v.F&&v.v==0&&!v.C&&(v.C=Tt(w(v.Za,v),6e3));if(1>=qa(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else ti(v,11)}else if((c.K||v.g==c)&&Xa(v),!j(y))for(B=v.Da.g.parse(y),y=0;y<B.length;y++){let Ue=B[y];if(v.T=Ue[0],Ue=Ue[1],v.G==2)if(Ue[0]=="c"){v.K=Ue[1],v.ia=Ue[2];const qt=Ue[3];qt!=null&&(v.la=qt,v.j.info("VER="+v.la));const kt=Ue[4];kt!=null&&(v.Aa=kt,v.j.info("SVER="+v.Aa));const ni=Ue[5];ni!=null&&typeof ni=="number"&&0<ni&&(A=1.5*ni,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const Xt=c.g;if(Xt){const Ir=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ir){var W=A.h;W.g||Ir.indexOf("spdy")==-1&&Ir.indexOf("quic")==-1&&Ir.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(za(W,W.h),W.h=null))}if(A.D){const Dl=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(A.ya=Dl,We(A.I,A.D,Dl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var ue=c;if(A.qa=Rc(A,A.J?A.ia:null,A.W),ue.K){yn(A.h,ue);var je=ue,Ot=A.L;Ot&&(je.I=Ot),je.B&&(Pi(je),js(je)),A.g=ue}else wc(A);0<v.i.length&&Ka(v)}else Ue[0]!="stop"&&Ue[0]!="close"||ti(v,7);else v.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?ti(v,7):xl(v):Ue[0]!="noop"&&v.l&&v.l.ta(Ue),v.v=0)}}Oi(4)}catch{}}var gc=class{constructor(c,y){this.g=c,this.map=y}};function Kr(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ua(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function qa(c){return c.h?1:c.g?c.g.size:0}function _l(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function za(c,y){c.g?c.g.add(y):c.h=y}function yn(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Kr.prototype.cancel=function(){if(this.i=vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function vl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const v of c.g.values())y=y.concat(v.D);return y}return F(c.i)}function _d(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var y=[],v=c.length,A=0;A<v;A++)y.push(c[A]);return y}y=[],v=0;for(A in c)y[v++]=c[A];return y}function Ba(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var y=[];c=c.length;for(var v=0;v<c;v++)y.push(v);return y}y=[],v=0;for(const A in c)y[v++]=A;return y}}}function El(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var v=Ba(c),A=_d(c),B=A.length,W=0;W<B;W++)y.call(void 0,A[W],v&&v[W],c)}var qs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vd(c,y){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var A=c[v].indexOf("="),B=null;if(0<=A){var W=c[v].substring(0,A);B=c[v].substring(A+1)}else W=c[v];y(W,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function bt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof bt){this.h=c.h,zs(this,c.j),this.o=c.o,this.g=c.g,Vi(this,c.s),this.l=c.l;var y=c.i,v=new Wr;v.i=y.i,y.g&&(v.g=new Map(y.g),v.h=y.h),Xr(this,v),this.m=c.m}else c&&(y=String(c).match(qs))?(this.h=!1,zs(this,y[1]||"",!0),this.o=zn(y[2]||""),this.g=zn(y[3]||"",!0),Vi(this,y[4]),this.l=zn(y[5]||"",!0),Xr(this,y[6]||"",!0),this.m=zn(y[7]||"")):(this.h=!1,this.i=new Wr(null,this.h))}bt.prototype.toString=function(){var c=[],y=this.j;y&&c.push($s(y,Tl,!0),":");var v=this.g;return(v||y=="file")&&(c.push("//"),(y=this.o)&&c.push($s(y,Tl,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push($s(v,v.charAt(0)=="/"?Ed:bl,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",$s(v,$a)),c.join("")};function Rn(c){return new bt(c)}function zs(c,y,v){c.j=v?zn(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Vi(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function Xr(c,y,v){y instanceof Wr?(c.i=y,_c(c.i,c.h)):(v||(y=$s(y,Td)),c.i=new Wr(y,c.h))}function We(c,y,v){c.i.set(y,v)}function Bs(c){return We(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function zn(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function $s(c,y,v){return typeof c=="string"?(c=encodeURI(c).replace(y,yc),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function yc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Tl=/[#\/\?@]/g,bl=/[#\?:]/g,Ed=/[#\?]/g,Td=/[#\?@]/g,$a=/#/g;function Wr(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Bn(c){c.g||(c.g=new Map,c.h=0,c.i&&vd(c.i,function(y,v){c.add(decodeURIComponent(y.replace(/\+/g," ")),v)}))}t=Wr.prototype,t.add=function(c,y){Bn(this),this.i=null,c=br(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(y),this.h+=1,this};function Zr(c,y){Bn(c),y=br(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Jr(c,y){return Bn(c),y=br(c,y),c.g.has(y)}t.forEach=function(c,y){Bn(this),this.g.forEach(function(v,A){v.forEach(function(B){c.call(y,B,A,this)},this)},this)},t.na=function(){Bn(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),v=[];for(let A=0;A<y.length;A++){const B=c[A];for(let W=0;W<B.length;W++)v.push(y[A])}return v},t.V=function(c){Bn(this);let y=[];if(typeof c=="string")Jr(this,c)&&(y=y.concat(this.g.get(br(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)y=y.concat(c[v])}return y},t.set=function(c,y){return Bn(this),this.i=null,c=br(this,c),Jr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},t.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function wl(c,y,v){Zr(c,y),0<v.length&&(c.i=null,c.g.set(br(c,y),F(v)),c.h+=v.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var v=0;v<y.length;v++){var A=y[v];const W=encodeURIComponent(String(A)),ue=this.V(A);for(A=0;A<ue.length;A++){var B=W;ue[A]!==""&&(B+="="+encodeURIComponent(String(ue[A]))),c.push(B)}}return this.i=c.join("&")};function br(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function _c(c,y){y&&!c.j&&(Bn(c),c.i=null,c.g.forEach(function(v,A){var B=A.toLowerCase();A!=B&&(Zr(this,A),wl(this,B,v))},c)),c.j=y}function Hs(c,y){const v=new qn;if(p.Image){const A=new Image;A.onload=D($n,v,"TestLoadImage: loaded",!0,y,A),A.onerror=D($n,v,"TestLoadImage: error",!1,y,A),A.onabort=D($n,v,"TestLoadImage: abort",!1,y,A),A.ontimeout=D($n,v,"TestLoadImage: timeout",!1,y,A),p.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else y(!1)}function ir(c,y){const v=new qn,A=new AbortController,B=setTimeout(()=>{A.abort(),$n(v,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:A.signal}).then(W=>{clearTimeout(B),W.ok?$n(v,"TestPingServer: ok",!0,y):$n(v,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(B),$n(v,"TestPingServer: error",!1,y)})}function $n(c,y,v,A,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),A(v)}catch{}}function Fs(){this.g=new Vs}function wr(c,y,v){const A=v||"";try{El(c,function(B,W){let ue=B;g(B)&&(ue=nr(B)),y.push(A+W+"="+encodeURIComponent(ue))})}catch(B){throw y.push(A+"type="+encodeURIComponent("_badmap")),B}}function Li(c){this.l=c.Ub||null,this.j=c.eb||!1}P(Li,hl),Li.prototype.g=function(){return new ei(this.l,this.j)},Li.prototype.i=function(c){return function(){return c}}({});function ei(c,y){dt.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ei,dt),t=ei.prototype,t.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,Ar(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||p).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sr(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ar(this)),this.g&&(this.readyState=3,Ar(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?Sr(this):Ar(this),this.readyState==3&&Sl(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Sr(this))},t.Qa=function(c){this.g&&(this.response=c,Sr(this))},t.ga=function(){this.g&&Sr(this)};function Sr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Ar(c)}t.setRequestHeader=function(c,y){this.u.append(c,y)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var v=y.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=y.next();return c.join(`\r
`)};function Ar(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Al(c){let y="";return fe(c,function(v,A){y+=A,y+=":",y+=v,y+=`\r
`}),y}function Ut(c,y,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Al(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):We(c,y,v))}function Fe(c){dt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Fe,dt);var Ha=/^https?$/i,Gs=["POST","PUT"];t=Fe.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,y,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vr.g(),this.v=this.o?fl(this.o):fl(vr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(W){vc(this,W);return}if(c=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var B in A)v.set(B,A[B]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const W of A.keys())v.set(W,A.get(W));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(W=>W.toLowerCase()=="content-type"),B=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Gs,y,void 0))||A||B||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ue]of v)this.g.setRequestHeader(W,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ys(this),this.u=!0,this.g.send(c),this.u=!1}catch(W){vc(this,W)}};function vc(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,Fa(c),xr(c)}function Fa(c){c.A||(c.A=!0,Qe(c,"complete"),Qe(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Qe(this,"complete"),Qe(this,"abort"),xr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xr(this,!0)),Fe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ga(this):this.bb())},t.bb=function(){Ga(this)};function Ga(c){if(c.h&&typeof h<"u"&&(!c.v[1]||Hn(c)!=4||c.Z()!=2)){if(c.u&&Hn(c)==4)an(c.Ea,0,c);else if(Qe(c,"readystatechange"),Hn(c)==4){c.h=!1;try{const ue=c.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var v;if(!(v=y)){var A;if(A=ue===0){var B=String(c.D).match(qs)[1]||null;!B&&p.self&&p.self.location&&(B=p.self.location.protocol.slice(0,-1)),A=!Ha.test(B?B.toLowerCase():"")}v=A}if(v)Qe(c,"complete"),Qe(c,"success");else{c.m=6;try{var W=2<Hn(c)?c.g.statusText:""}catch{W=""}c.l=W+" ["+c.Z()+"]",Fa(c)}}finally{xr(c)}}}}function xr(c,y){if(c.g){Ys(c);const v=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Qe(c,"ready");try{v.onreadystatechange=A}catch{}}}function Ys(c){c.I&&(p.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Hn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),Va(y)}};function Ec(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function bd(c){const y={};c=(c.g&&2<=Hn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(j(c[A]))continue;var v=L(c[A]);const B=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const W=y[B]||[];y[B]=W,W.push(v)}C(y,function(A){return A.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(c,y,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||y}function Ya(c){this.Aa=0,this.i=[],this.j=new qn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,c),this.cb=Qs("retryDelaySeedMs",1e4,c),this.Wa=Qs("forwardChannelMaxRetries",2,c),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Kr(c&&c.concurrentRequestLimit),this.Da=new Fs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ya.prototype,t.la=8,t.G=1,t.connect=function(c,y,v,A){ot(0),this.W=c,this.H=y||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=Rc(this,null,this.W),Ka(this)};function xl(c){if(Tc(c),c.G==3){var y=c.U++,v=Rn(c.I);if(We(v,"SID",c.K),We(v,"RID",y),We(v,"TYPE","terminate"),Ks(c,v),y=new gn(c,c.j,y),y.L=2,y.v=Bs(Rn(v)),v=!1,p.navigator&&p.navigator.sendBeacon)try{v=p.navigator.sendBeacon(y.v.toString(),"")}catch{}!v&&p.Image&&(new Image().src=y.v,v=!0),v||(y.g=Ic(y.j,null),y.g.ea(y.v)),y.F=Date.now(),js(y)}xc(c)}function Qa(c){c.g&&(Xs(c),c.g.cancel(),c.g=null)}function Tc(c){Qa(c),c.u&&(p.clearTimeout(c.u),c.u=null),Xa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function Ka(c){if(!Ua(c.h)&&!c.s){c.s=!0;var y=c.Ga;ce||O(),me||(ce(),me=!0),Ie.add(y,c),c.B=0}}function wd(c,y){return qa(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Tt(w(c.Ga,c,y),Cl(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const B=new gn(this,this.j,c);let W=this.o;if(this.S&&(W?(W=x(W),k(W,this.S)):W=this.S),this.m!==null||this.O||(B.H=W,W=null),this.P)e:{for(var y=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=v;break e}if(y===4096||v===this.i.length-1){y=v+1;break e}}y=1e3}else y=1e3;y=bc(this,B,y),v=Rn(this.I),We(v,"RID",c),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),Ks(this,v),W&&(this.O?y="headers="+encodeURIComponent(String(Al(W)))+"&"+y:this.m&&Ut(v,this.m,W)),za(this.h,B),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",y),We(v,"SID","null"),B.T=!0,rr(B,v,null)):rr(B,v,y),this.G=2}}else this.G==3&&(c?Rl(this,c):this.i.length==0||Ua(this.h)||Rl(this))};function Rl(c,y){var v;y?v=y.l:v=c.U++;const A=Rn(c.I);We(A,"SID",c.K),We(A,"RID",v),We(A,"AID",c.T),Ks(c,A),c.m&&c.o&&Ut(A,c.m,c.o),v=new gn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),y&&(c.i=y.D.concat(c.i)),y=bc(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),za(c.h,v),rr(v,A,y)}function Ks(c,y){c.H&&fe(c.H,function(v,A){We(y,A,v)}),c.l&&El({},function(v,A){We(y,A,v)})}function bc(c,y,v){v=Math.min(c.i.length,v);var A=c.l?w(c.l.Na,c.l,c):null;e:{var B=c.i;let W=-1;for(;;){const ue=["count="+v];W==-1?0<v?(W=B[0].g,ue.push("ofs="+W)):W=0:ue.push("ofs="+W);let je=!0;for(let Ot=0;Ot<v;Ot++){let Ue=B[Ot].g;const qt=B[Ot].map;if(Ue-=W,0>Ue)W=Math.max(0,B[Ot].g-100),je=!1;else try{wr(qt,ue,"req"+Ue+"_")}catch{A&&A(qt)}}if(je){A=ue.join("&");break e}}}return c=c.i.splice(0,v),y.D=c,A}function wc(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;ce||O(),me||(ce(),me=!0),Ie.add(y,c),c.v=0}}function Il(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Tt(w(c.Fa,c),Cl(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Sc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Tt(w(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Qa(this),Sc(this))};function Xs(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function Sc(c){c.g=new gn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=Rn(c.qa);We(y,"RID","rpc"),We(y,"SID",c.K),We(y,"AID",c.T),We(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&We(y,"TO",c.ja),We(y,"TYPE","xmlhttp"),Ks(c,y),c.m&&c.o&&Ut(y,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Bs(Rn(y)),v.m=null,v.P=!0,Qr(v,c)}t.Za=function(){this.C!=null&&(this.C=null,Qa(this),Il(this),ot(19))};function Xa(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function Ac(c,y){var v=null;if(c.g==y){Xa(c),Xs(c),c.g=null;var A=2}else if(_l(c.h,y))v=y.D,yn(c.h,y),A=1;else return;if(c.G!=0){if(y.o)if(A==1){v=y.m?y.m.length:0,y=Date.now()-y.F;var B=c.B;A=Ni(),Qe(A,new Nt(A,v)),Ka(c)}else wc(c);else if(B=y.s,B==3||B==0&&0<y.X||!(A==1&&wd(c,y)||A==2&&Il(c)))switch(v&&0<v.length&&(y=c.h,y.i=y.i.concat(v)),B){case 1:ti(c,5);break;case 4:ti(c,10);break;case 3:ti(c,6);break;default:ti(c,2)}}}function Cl(c,y){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*y}function ti(c,y){if(c.j.info("Error code "+y),y==2){var v=w(c.fb,c),A=c.Xa;const B=!A;A=new bt(A||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||zs(A,"https"),Bs(A),B?Hs(A.toString(),v):ir(A.toString(),v)}else ot(2);c.G=0,c.l&&c.l.sa(y),xc(c),Tc(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function xc(c){if(c.G=0,c.ka=[],c.l){const y=vl(c.h);(y.length!=0||c.i.length!=0)&&(V(c.ka,y),V(c.ka,c.i),c.h.i.length=0,F(c.i),c.i.length=0),c.l.ra()}}function Rc(c,y,v){var A=v instanceof bt?Rn(v):new bt(v);if(A.g!="")y&&(A.g=y+"."+A.g),Vi(A,A.s);else{var B=p.location;A=B.protocol,y=y?y+"."+B.hostname:B.hostname,B=+B.port;var W=new bt(null);A&&zs(W,A),y&&(W.g=y),B&&Vi(W,B),v&&(W.l=v),A=W}return v=c.D,y=c.ya,v&&y&&We(A,v,y),We(A,"VER",c.la),Ks(c,A),A}function Ic(c,y,v){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new Fe(new Li({eb:v})):new Fe(c.pa),y.Ha(c.J),y}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cc(){}t=Cc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Wa(){}Wa.prototype.g=function(c,y){return new _n(c,y)};function _n(c,y){dt.call(this),this.g=new Ya(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!j(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!j(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Rr(this)}P(_n,dt),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){xl(this.g)},_n.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=nr(c),c=v);y.i.push(new gc(y.Ya++,c)),y.G==3&&Ka(y)},_n.prototype.N=function(){this.g.l=null,delete this.j,xl(this.g),delete this.g,_n.aa.N.call(this)};function Dc(c){Gr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const v in y){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}P(Dc,Gr);function Nc(){pl.call(this),this.status=1}P(Nc,pl);function Rr(c){this.g=c}P(Rr,Cc),Rr.prototype.ua=function(){Qe(this.g,"a")},Rr.prototype.ta=function(c){Qe(this.g,new Dc(c))},Rr.prototype.sa=function(c){Qe(this.g,new Nc)},Rr.prototype.ra=function(){Qe(this.g,"b")},Wa.prototype.createWebChannel=Wa.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,Xb=function(){return new Wa},Kb=function(){return Ni()},Qb=_r,sg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mi.NO_ERROR=0,Mi.TIMEOUT=8,Mi.HTTP_ERROR=6,nf=Mi,Yr.COMPLETE="complete",Yb=Yr,dl.EventType=Fr,Fr.OPEN="a",Fr.CLOSE="b",Fr.ERROR="c",Fr.MESSAGE="d",dt.prototype.listen=dt.prototype.K,bu=dl,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,Gb=Fe}).apply(typeof Vh<"u"?Vh:typeof self<"u"?self:typeof window<"u"?window:{});const XE="@firebase/firestore",WE="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const xa=new Vg("@firebase/firestore");function Io(){return xa.logLevel}function de(t,...e){if(xa.logLevel<=Pe.DEBUG){const n=e.map(Yg);xa.debug(`Firestore (${rl}): ${t}`,...n)}}function Ri(t,...e){if(xa.logLevel<=Pe.ERROR){const n=e.map(Yg);xa.error(`Firestore (${rl}): ${t}`,...n)}}function Ho(t,...e){if(xa.logLevel<=Pe.WARN){const n=e.map(Yg);xa.warn(`Firestore (${rl}): ${t}`,...n)}}function Yg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Wb(t,s,n)}function Wb(t,e,n){let s=`FIRESTORE (${rl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Ri(s),new Error(s)}function Ye(t,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,t||Wb(e,o,s)}function xe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Ci{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $N{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dn.UNAUTHENTICATED))}shutdown(){}}class HN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FN{constructor(e){this.t=e,this.currentUser=dn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ye(this.o===void 0,42304);let s=this.i;const o=m=>this.i!==s?(s=this.i,n(m)):Promise.resolve();let u=new bi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new bi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=u;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},p=m=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new bi)}},0),h()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ye(typeof s.accessToken=="string",31837,{l:s}),new Zb(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string",2055,{h:e}),new dn(e)}}class GN{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=dn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class YN{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new GN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(dn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ye(this.o===void 0,3512);const s=u=>{u.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,de("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ZE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ye(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ZE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=KN(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function Ve(t,e){return t<e?-1:t>e?1:0}function ag(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=t.charAt(s),u=e.charAt(s);if(o!==u)return km(o)===km(u)?Ve(o,u):km(o)?1:-1}return Ve(t.length,e.length)}const XN=55296,WN=57343;function km(t){const e=t.charCodeAt(0);return e>=XN&&e<=WN}function Fo(t,e,n){return t.length===e.length&&t.every((s,o)=>n(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="__name__";class Pr{constructor(e,n,s){n===void 0?n=0:n>e.length&&we(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&we(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Pr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=Pr.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Ve(e.length,n.length)}static compareSegments(e,n){const s=Pr.isNumericId(e),o=Pr.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?Pr.extractNumericId(e).compare(Pr.extractNumericId(n)):ag(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gs.fromString(e.substring(4,e.length-2))}}class it extends Pr{construct(e,n,s){return new it(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new it(n)}static emptyPath(){return new it([])}}const ZN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nn extends Pr{construct(e,n,s){return new nn(e,n,s)}static isValidIdentifier(e){return ZN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===JE}static keyField(){return new nn([JE])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new he(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new he(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new he(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new he(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nn(n)}static emptyPath(){return new nn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(it.fromString(e))}static fromName(e){return new _e(it.fromString(e).popFirst(5))}static empty(){return new _e(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return it.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new it(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t,e,n){if(!n)throw new he(te.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JN(t,e,n,s){if(e===!0&&s===!0)throw new he(te.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function eT(t){if(!_e.isDocumentKey(t))throw new he(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function tT(t){if(_e.isDocumentKey(t))throw new he(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ew(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Gf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":we(12329,{type:typeof t})}function Ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new he(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gf(t);throw new he(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function It(t,e){const n={typeString:t};return e&&(n.value=e),n}function nc(t,e){if(!ew(t))throw new he(te.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const h=t[s];if(o&&typeof h!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new he(te.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=-62135596800,rT=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*rT);return new nt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<nT)throw new he(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rT}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(nc(e,nt._jsonSchema))return new nt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-nT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:It("string",nt._jsonSchemaVersion),seconds:It("number"),nanoseconds:It("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Uu=-1;function eO(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(s===1e9?new nt(n+1,0):new nt(n,s));return new _s(o,_e.empty(),e)}function tO(t){return new _s(t.readTime,t.key,Uu)}class _s{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new _s(Ae.min(),_e.empty(),Uu)}static max(){return new _s(Ae.max(),_e.empty(),Uu)}}function nO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=_e.comparator(t.documentKey,e.documentKey),n!==0?n:Ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t){if(t.code!==te.FAILED_PRECONDITION||t.message!==rO)throw t;de("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new re((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof re?n:re.resolve(n)}catch(n){return re.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):re.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):re.reject(n)}static resolve(e){return new re((n,s)=>{n(e)})}static reject(e){return new re((n,s)=>{s(e)})}static waitFor(e){return new re((n,s)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&n()},m=>s(m))}),h=!0,u===o&&n()})}static or(e){let n=re.resolve(!1);for(const s of e)n=n.next(o=>o?re.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new re((s,o)=>{const u=e.length,h=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;n(e[g]).next(E=>{h[g]=E,++p,p===u&&s(h)},E=>o(E))}})}static doWhile(e,n){return new re((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function sO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function sl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Yf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Yf.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=-1;function Qf(t){return t==null}function bf(t){return t===0&&1/t==-1/0}function aO(t){return typeof t=="number"&&Number.isInteger(t)&&!bf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="";function oO(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=iT(e)),e=lO(t.get(n),e);return iT(e)}function lO(t,e){let n=e;const s=t.length;for(let o=0;o<s;o++){const u=t.charAt(o);switch(u){case"\0":n+="";break;case tw:n+="";break;default:n+=u}}return n}function iT(t){return t+tw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this.comparator=e,this.root=n||tn.EMPTY}insert(e,n){return new ft(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lh(this.root,e,this.comparator,!0)}}class Lh{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tn{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??tn.RED,this.left=o??tn.EMPTY,this.right=u??tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new tn(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return tn.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new tn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new aT(this.data.getIterator())}getIteratorFrom(e){return new aT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Lt(this.comparator);return n.data=e,n}}class aT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.fields=e,e.sort(nn.comparator)}static empty(){return new Vn([])}unionWith(e){let n=new Lt(nn.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fo(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class rw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new rw("Invalid base64 string: "+u):u}}(e);return new rn(n)}static fromUint8Array(e){const n=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new rn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rn.EMPTY_BYTE_STRING=new rn("");const uO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vs(t){if(Ye(!!t,39018),typeof t=="string"){let e=0;const n=uO.exec(t);if(Ye(!!n,46558,{timestamp:t}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Et(t.seconds),nanos:Et(t.nanos)}}function Et(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Es(t){return typeof t=="string"?rn.fromBase64String(t):rn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="server_timestamp",sw="__type__",aw="__previous_value__",ow="__local_write_time__";function Xg(t){var n,s;return((s=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[sw])==null?void 0:s.stringValue)===iw}function Kf(t){const e=t.mapValue.fields[aw];return Xg(e)?Kf(e):e}function qu(t){const e=vs(t.mapValue.fields[ow].timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n,s,o,u,h,p,m,g,E){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=E}}const wf="(default)";class zu{constructor(e,n){this.projectId=e,this.database=n||wf}static empty(){return new zu("","")}get isDefaultDatabase(){return this.database===wf}isEqual(e){return e instanceof zu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="__type__",hO="__max__",jh={mapValue:{}},uw="__vector__",Sf="value";function Ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xg(t)?4:dO(t)?9007199254740991:fO(t)?10:11:we(28295,{value:t})}function $r(t,e){if(t===e)return!0;const n=Ts(t);if(n!==Ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qu(t).isEqual(qu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=vs(o.timestampValue),p=vs(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(o,u){return Es(o.bytesValue).isEqual(Es(u.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(o,u){return Et(o.geoPointValue.latitude)===Et(u.geoPointValue.latitude)&&Et(o.geoPointValue.longitude)===Et(u.geoPointValue.longitude)}(t,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Et(o.integerValue)===Et(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=Et(o.doubleValue),p=Et(u.doubleValue);return h===p?bf(h)===bf(p):isNaN(h)&&isNaN(p)}return!1}(t,e);case 9:return Fo(t.arrayValue.values||[],e.arrayValue.values||[],$r);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(sT(h)!==sT(p))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(p[m]===void 0||!$r(h[m],p[m])))return!1;return!0}(t,e);default:return we(52216,{left:t})}}function Bu(t,e){return(t.values||[]).find(n=>$r(n,e))!==void 0}function Go(t,e){if(t===e)return 0;const n=Ts(t),s=Ts(e);if(n!==s)return Ve(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ve(t.booleanValue,e.booleanValue);case 2:return function(u,h){const p=Et(u.integerValue||u.doubleValue),m=Et(h.integerValue||h.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(t,e);case 3:return oT(t.timestampValue,e.timestampValue);case 4:return oT(qu(t),qu(e));case 5:return ag(t.stringValue,e.stringValue);case 6:return function(u,h){const p=Es(u),m=Es(h);return p.compareTo(m)}(t.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),m=h.split("/");for(let g=0;g<p.length&&g<m.length;g++){const E=Ve(p[g],m[g]);if(E!==0)return E}return Ve(p.length,m.length)}(t.referenceValue,e.referenceValue);case 8:return function(u,h){const p=Ve(Et(u.latitude),Et(h.latitude));return p!==0?p:Ve(Et(u.longitude),Et(h.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return lT(t.arrayValue,e.arrayValue);case 10:return function(u,h){var w,D,P,F;const p=u.fields||{},m=h.fields||{},g=(w=p[Sf])==null?void 0:w.arrayValue,E=(D=m[Sf])==null?void 0:D.arrayValue,S=Ve(((P=g==null?void 0:g.values)==null?void 0:P.length)||0,((F=E==null?void 0:E.values)==null?void 0:F.length)||0);return S!==0?S:lT(g,E)}(t.mapValue,e.mapValue);case 11:return function(u,h){if(u===jh.mapValue&&h===jh.mapValue)return 0;if(u===jh.mapValue)return 1;if(h===jh.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=h.fields||{},E=Object.keys(g);m.sort(),E.sort();for(let S=0;S<m.length&&S<E.length;++S){const w=ag(m[S],E[S]);if(w!==0)return w;const D=Go(p[m[S]],g[E[S]]);if(D!==0)return D}return Ve(m.length,E.length)}(t.mapValue,e.mapValue);default:throw we(23264,{he:n})}}function oT(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ve(t,e);const n=vs(t),s=vs(e),o=Ve(n.seconds,s.seconds);return o!==0?o:Ve(n.nanos,s.nanos)}function lT(t,e){const n=t.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=Go(n[o],s[o]);if(u)return u}return Ve(n.length,s.length)}function Yo(t){return og(t)}function og(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=vs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return _e.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=og(u);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${og(n.fields[h])}`;return o+"}"}(t.mapValue):we(61005,{value:t})}function rf(t){switch(Ts(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kf(t);return e?16+rf(e):16;case 5:return 2*t.stringValue.length;case 6:return Es(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+rf(u),0)}(t.arrayValue);case 10:case 11:return function(s){let o=0;return Rs(s.fields,(u,h)=>{o+=u.length+rf(h)}),o}(t.mapValue);default:throw we(13486,{value:t})}}function uT(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function lg(t){return!!t&&"integerValue"in t}function Wg(t){return!!t&&"arrayValue"in t}function cT(t){return!!t&&"nullValue"in t}function hT(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sf(t){return!!t&&"mapValue"in t}function fO(t){var n,s;return((s=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[lw])==null?void 0:s.stringValue)===uw}function Cu(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Rs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Cu(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Cu(t.arrayValue.values[n]);return e}return{...t}}function dO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===hO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.value=e}static empty(){return new An({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!sf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cu(n)}setAll(e){let n=nn.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!n.isImmediateParentOf(p)){const m=this.getFieldsMap(n);this.applyChanges(m,s,o),s={},o=[],n=p.popLast()}h?s[p.lastSegment()]=Cu(h):o.push(p.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());sf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $r(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];sf(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){Rs(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new An(Cu(this.value))}}function cw(t){const e=[];return Rs(t.fields,(n,s)=>{const o=new nn([n]);if(sf(s)){const u=cw(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n,s,o,u,h,p){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new pn(e,0,Ae.min(),Ae.min(),Ae.min(),An.empty(),0)}static newFoundDocument(e,n,s,o){return new pn(e,1,n,Ae.min(),s,o,0)}static newNoDocument(e,n){return new pn(e,2,n,Ae.min(),Ae.min(),An.empty(),0)}static newUnknownDocument(e,n){return new pn(e,3,n,Ae.min(),Ae.min(),An.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=An.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=An.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Af{constructor(e,n){this.position=e,this.inclusive=n}}function fT(t,e,n){let s=0;for(let o=0;o<t.position.length;o++){const u=e[o],h=t.position[o];if(u.field.isKeyField()?s=_e.comparator(_e.fromName(h.referenceValue),n.key):s=Go(h,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function dT(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$r(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class $u{constructor(e,n="asc"){this.field=e,this.dir=n}}function pO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class hw{}class Rt extends hw{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new gO(e,n,s):n==="array-contains"?new vO(e,s):n==="in"?new EO(e,s):n==="not-in"?new TO(e,s):n==="array-contains-any"?new bO(e,s):new Rt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new yO(e,s):new _O(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Go(n,this.value)):n!==null&&Ts(this.value)===Ts(n)&&this.matchesComparison(Go(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gr extends hw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new gr(e,n)}matches(e){return fw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function fw(t){return t.op==="and"}function dw(t){return mO(t)&&fw(t)}function mO(t){for(const e of t.filters)if(e instanceof gr)return!1;return!0}function ug(t){if(t instanceof Rt)return t.field.canonicalString()+t.op.toString()+Yo(t.value);if(dw(t))return t.filters.map(e=>ug(e)).join(",");{const e=t.filters.map(n=>ug(n)).join(",");return`${t.op}(${e})`}}function pw(t,e){return t instanceof Rt?function(s,o){return o instanceof Rt&&s.op===o.op&&s.field.isEqual(o.field)&&$r(s.value,o.value)}(t,e):t instanceof gr?function(s,o){return o instanceof gr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&pw(h,o.filters[p]),!0):!1}(t,e):void we(19439)}function mw(t){return t instanceof Rt?function(n){return`${n.field.canonicalString()} ${n.op} ${Yo(n.value)}`}(t):t instanceof gr?function(n){return n.op.toString()+" {"+n.getFilters().map(mw).join(" ,")+"}"}(t):"Filter"}class gO extends Rt{constructor(e,n,s){super(e,n,s),this.key=_e.fromName(s.referenceValue)}matches(e){const n=_e.comparator(e.key,this.key);return this.matchesComparison(n)}}class yO extends Rt{constructor(e,n){super(e,"in",n),this.keys=gw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _O extends Rt{constructor(e,n){super(e,"not-in",n),this.keys=gw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(s=>_e.fromName(s.referenceValue))}class vO extends Rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wg(n)&&Bu(n.arrayValue,this.value)}}class EO extends Rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bu(this.value.arrayValue,n)}}class TO extends Rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Bu(this.value.arrayValue,n)}}class bO extends Rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Bu(this.value.arrayValue,s))}}/**
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
 */class wO{constructor(e,n=null,s=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.Te=null}}function pT(t,e=null,n=[],s=[],o=null,u=null,h=null){return new wO(t,e,n,s,o,u,h)}function Zg(t){const e=xe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ug(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Qf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Yo(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Yo(s)).join(",")),e.Te=n}return e.Te}function Jg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dT(t.startAt,e.startAt)&&dT(t.endAt,e.endAt)}function cg(t){return _e.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n=null,s=[],o=[],u=null,h="F",p=null,m=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function SO(t,e,n,s,o,u,h,p){return new al(t,e,n,s,o,u,h,p)}function Xf(t){return new al(t)}function mT(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yw(t){return t.collectionGroup!==null}function Du(t){const e=xe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Lt(nn.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new $u(u,s))}),n.has(nn.keyField().canonicalString())||e.Ie.push(new $u(nn.keyField(),s))}return e.Ie}function Ur(t){const e=xe(t);return e.Ee||(e.Ee=AO(e,Du(t))),e.Ee}function AO(t,e){if(t.limitType==="F")return pT(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new $u(o.field,u)});const n=t.endAt?new Af(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Af(t.startAt.position,t.startAt.inclusive):null;return pT(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function hg(t,e){const n=t.filters.concat([e]);return new al(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function fg(t,e,n){return new al(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wf(t,e){return Jg(Ur(t),Ur(e))&&t.limitType===e.limitType}function _w(t){return`${Zg(Ur(t))}|lt:${t.limitType}`}function Co(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>mw(o)).join(", ")}]`),Qf(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Yo(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Yo(o)).join(",")),`Target(${s})`}(Ur(t))}; limitType=${t.limitType})`}function Zf(t,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):_e.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(t,e)&&function(s,o){for(const u of Du(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(t,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(t,e)&&function(s,o){return!(s.startAt&&!function(h,p,m){const g=fT(h,p,m);return h.inclusive?g<=0:g<0}(s.startAt,Du(s),o)||s.endAt&&!function(h,p,m){const g=fT(h,p,m);return h.inclusive?g>=0:g>0}(s.endAt,Du(s),o))}(t,e)}function xO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vw(t){return(e,n)=>{let s=!1;for(const o of Du(t)){const u=RO(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function RO(t,e,n){const s=t.field.isKeyField()?_e.comparator(e.key,n.key):function(u,h,p){const m=h.data.field(u),g=p.data.field(u);return m!==null&&g!==null?Go(m,g):we(42886)}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return we(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return nw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=new ft(_e.comparator);function Ii(){return IO}const Ew=new ft(_e.comparator);function wu(...t){let e=Ew;for(const n of t)e=e.insert(n.key,n);return e}function Tw(t){let e=Ew;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ma(){return Nu()}function bw(){return Nu()}function Nu(){return new Oa(t=>t.toString(),(t,e)=>t.isEqual(e))}const CO=new ft(_e.comparator),DO=new Lt(_e.comparator);function Le(...t){let e=DO;for(const n of t)e=e.add(n);return e}const NO=new Lt(Ve);function OO(){return NO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bf(e)?"-0":e}}function ww(t){return{integerValue:""+t}}function kO(t,e){return aO(e)?ww(e):ey(t,e)}/**
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
 */class Jf{constructor(){this._=void 0}}function MO(t,e,n){return t instanceof Hu?function(o,u){const h={fields:{[sw]:{stringValue:iw},[ow]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Xg(u)&&(u=Kf(u)),u&&(h.fields[aw]=u),{mapValue:h}}(n,e):t instanceof Fu?Aw(t,e):t instanceof Gu?xw(t,e):function(o,u){const h=Sw(o,u),p=gT(h)+gT(o.Ae);return lg(h)&&lg(o.Ae)?ww(p):ey(o.serializer,p)}(t,e)}function PO(t,e,n){return t instanceof Fu?Aw(t,e):t instanceof Gu?xw(t,e):n}function Sw(t,e){return t instanceof xf?function(s){return lg(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Hu extends Jf{}class Fu extends Jf{constructor(e){super(),this.elements=e}}function Aw(t,e){const n=Rw(e);for(const s of t.elements)n.some(o=>$r(o,s))||n.push(s);return{arrayValue:{values:n}}}class Gu extends Jf{constructor(e){super(),this.elements=e}}function xw(t,e){let n=Rw(e);for(const s of t.elements)n=n.filter(o=>!$r(o,s));return{arrayValue:{values:n}}}class xf extends Jf{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function gT(t){return Et(t.integerValue||t.doubleValue)}function Rw(t){return Wg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,n){this.field=e,this.transform=n}}function LO(t,e){return t.field.isEqual(e.field)&&function(s,o){return s instanceof Fu&&o instanceof Fu||s instanceof Gu&&o instanceof Gu?Fo(s.elements,o.elements,$r):s instanceof xf&&o instanceof xf?$r(s.Ae,o.Ae):s instanceof Hu&&o instanceof Hu}(t.transform,e.transform)}class jO{constructor(e,n){this.version=e,this.transformResults=n}}class fr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fr}static exists(e){return new fr(void 0,e)}static updateTime(e){return new fr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function af(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ed{}function Iw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dw(t.key,fr.none()):new rc(t.key,t.data,fr.none());{const n=t.data,s=An.empty();let o=new Lt(nn.comparator);for(let u of e.fields)if(!o.has(u)){let h=n.field(u);h===null&&u.length>1&&(u=u.popLast(),h=n.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Is(t.key,s,new Vn(o.toArray()),fr.none())}}function UO(t,e,n){t instanceof rc?function(o,u,h){const p=o.value.clone(),m=_T(o.fieldTransforms,u,h.transformResults);p.setAll(m),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(t,e,n):t instanceof Is?function(o,u,h){if(!af(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=_T(o.fieldTransforms,u,h.transformResults),m=u.data;m.setAll(Cw(o)),m.setAll(p),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(t,e,n):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,n)}function Ou(t,e,n,s){return t instanceof rc?function(u,h,p,m){if(!af(u.precondition,h))return p;const g=u.value.clone(),E=vT(u.fieldTransforms,m,h);return g.setAll(E),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(t,e,n,s):t instanceof Is?function(u,h,p,m){if(!af(u.precondition,h))return p;const g=vT(u.fieldTransforms,m,h),E=h.data;return E.setAll(Cw(u)),E.setAll(g),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(t,e,n,s):function(u,h,p){return af(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(t,e,n)}function qO(t,e){let n=null;for(const s of t.fieldTransforms){const o=e.data.field(s.field),u=Sw(s.transform,o||null);u!=null&&(n===null&&(n=An.empty()),n.set(s.field,u))}return n||null}function yT(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Fo(s,o,(u,h)=>LO(u,h))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class rc extends ed{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Is extends ed{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Cw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function _T(t,e,n){const s=new Map;Ye(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let o=0;o<n.length;o++){const u=t[o],h=u.transform,p=e.data.field(u.field);s.set(u.field,PO(h,p,n[o]))}return s}function vT(t,e,n){const s=new Map;for(const o of t){const u=o.transform,h=n.data.field(o.field);s.set(o.field,MO(u,h,e))}return s}class Dw extends ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zO extends ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&UO(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ou(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ou(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=bw();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=n.has(o.key)?null:p;const m=Iw(h,p);m!==null&&s.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(Ae.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Le())}isEqual(e){return this.batchId===e.batchId&&Fo(this.mutations,e.mutations,(n,s)=>yT(n,s))&&Fo(this.baseMutations,e.baseMutations,(n,s)=>yT(n,s))}}class ty{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){Ye(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return CO}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new ty(e,n,s,o)}}/**
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
 */class $O{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class HO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At,ze;function FO(t){switch(t){case te.OK:return we(64938);case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0;default:return we(15467,{code:t})}}function Nw(t){if(t===void 0)return Ri("GRPC error has no .code"),te.UNKNOWN;switch(t){case At.OK:return te.OK;case At.CANCELLED:return te.CANCELLED;case At.UNKNOWN:return te.UNKNOWN;case At.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case At.INTERNAL:return te.INTERNAL;case At.UNAVAILABLE:return te.UNAVAILABLE;case At.UNAUTHENTICATED:return te.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case At.NOT_FOUND:return te.NOT_FOUND;case At.ALREADY_EXISTS:return te.ALREADY_EXISTS;case At.PERMISSION_DENIED:return te.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case At.ABORTED:return te.ABORTED;case At.OUT_OF_RANGE:return te.OUT_OF_RANGE;case At.UNIMPLEMENTED:return te.UNIMPLEMENTED;case At.DATA_LOSS:return te.DATA_LOSS;default:return we(39323,{code:t})}}(ze=At||(At={}))[ze.OK=0]="OK",ze[ze.CANCELLED=1]="CANCELLED",ze[ze.UNKNOWN=2]="UNKNOWN",ze[ze.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ze[ze.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ze[ze.NOT_FOUND=5]="NOT_FOUND",ze[ze.ALREADY_EXISTS=6]="ALREADY_EXISTS",ze[ze.PERMISSION_DENIED=7]="PERMISSION_DENIED",ze[ze.UNAUTHENTICATED=16]="UNAUTHENTICATED",ze[ze.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ze[ze.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ze[ze.ABORTED=10]="ABORTED",ze[ze.OUT_OF_RANGE=11]="OUT_OF_RANGE",ze[ze.UNIMPLEMENTED=12]="UNIMPLEMENTED",ze[ze.INTERNAL=13]="INTERNAL",ze[ze.UNAVAILABLE=14]="UNAVAILABLE",ze[ze.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function GO(){return new TextEncoder}/**
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
 */const YO=new gs([4294967295,4294967295],0);function ET(t){const e=GO().encode(t),n=new Fb;return n.update(e),new Uint8Array(n.digest())}function TT(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new gs([n,s],0),new gs([o,u],0)]}class ny{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Su(`Invalid padding: ${n}`);if(s<0)throw new Su(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Su(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Su(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=gs.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(gs.fromNumber(s)));return o.compare(YO)===1&&(o=new gs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=ET(e),[s,o]=TT(n);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new ny(u,o,n);return s.forEach(p=>h.insert(p)),h}insert(e){if(this.ge===0)return;const n=ET(e),[s,o]=TT(n);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Su extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,ic.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new td(Ae.min(),o,new ft(Ve),Ii(),Le())}}class ic{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ic(s,n,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class Ow{constructor(e,n){this.targetId=e,this.Ce=n}}class kw{constructor(e,n,s=rn.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class bT{constructor(){this.ve=0,this.Fe=wT(),this.Me=rn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),n=Le(),s=Le();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:we(38017,{changeType:u})}}),new ic(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=wT()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ye(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class QO{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ii(),this.Je=Uh(),this.He=Uh(),this.Ye=new ft(Ve)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:we(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((s,o)=>{this.rt(o)&&n(o)})}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const u=o.target;if(cg(u))if(s===0){const h=new _e(u.path);this.et(n,h,pn.newNoDocument(h,Ae.min()))}else Ye(s===1,20013,{expectedCount:s});else{const h=this._t(n);if(h!==s){const p=this.ut(e),m=p?this.ct(p,e,h):1;if(m!==0){this.it(n);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,g)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let h,p;try{h=Es(s).toUint8Array()}catch(m){if(m instanceof rw)return Ho("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new ny(h,o,u)}catch(m){return Ho(m instanceof Su?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const h=this.Ge.ht(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.et(n,u,null),o++)}),o}Tt(e){const n=new Map;this.ze.forEach((u,h)=>{const p=this.ot(h);if(p){if(u.current&&cg(p.target)){const m=new _e(p.target.path);this.It(m).has(h)||this.Et(h,m)||this.et(h,m,pn.newNoDocument(m,e))}u.Be&&(n.set(h,u.ke()),u.qe())}});let s=Le();this.He.forEach((u,h)=>{let p=!0;h.forEachWhile(m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.je.forEach((u,h)=>h.setReadTime(e));const o=new td(e,n,this.Ye,this.je,s);return this.je=Ii(),this.Je=Uh(),this.He=Uh(),this.Ye=new ft(Ve),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new bT,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Lt(Ve),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Lt(Ve),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||de("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new bT),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Uh(){return new ft(_e.comparator)}function wT(){return new ft(_e.comparator)}const KO={asc:"ASCENDING",desc:"DESCENDING"},XO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WO={and:"AND",or:"OR"};class ZO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dg(t,e){return t.useProto3Json||Qf(e)?e:{value:e}}function Rf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JO(t,e){return Rf(t,e.toTimestamp())}function qr(t){return Ye(!!t,49232),Ae.fromTimestamp(function(n){const s=vs(n);return new nt(s.seconds,s.nanos)}(t))}function ry(t,e){return pg(t,e).canonicalString()}function pg(t,e){const n=function(o){return new it(["projects",o.projectId,"databases",o.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Pw(t){const e=it.fromString(t);return Ye(qw(e),10190,{key:e.toString()}),e}function mg(t,e){return ry(t.databaseId,e.path)}function Mm(t,e){const n=Pw(e);if(n.get(1)!==t.databaseId.projectId)throw new he(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new he(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _e(Lw(n))}function Vw(t,e){return ry(t.databaseId,e)}function e4(t){const e=Pw(t);return e.length===4?it.emptyPath():Lw(e)}function gg(t){return new it(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lw(t){return Ye(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ST(t,e,n){return{name:mg(t,e),fields:n.value.mapValue.fields}}function t4(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:we(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,E){return g.useProto3Json?(Ye(E===void 0||typeof E=="string",58123),rn.fromBase64String(E||"")):(Ye(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),rn.fromUint8Array(E||new Uint8Array))}(t,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&function(g){const E=g.code===void 0?te.UNKNOWN:Nw(g.code);return new he(E,g.message||"")}(h);n=new kw(s,o,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Mm(t,s.document.name),u=qr(s.document.updateTime),h=s.document.createTime?qr(s.document.createTime):Ae.min(),p=new An({mapValue:{fields:s.document.fields}}),m=pn.newFoundDocument(o,u,h,p),g=s.targetIds||[],E=s.removedTargetIds||[];n=new of(g,E,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Mm(t,s.document),u=s.readTime?qr(s.readTime):Ae.min(),h=pn.newNoDocument(o,u),p=s.removedTargetIds||[];n=new of([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Mm(t,s.document),u=s.removedTargetIds||[];n=new of([],u,o,null)}else{if(!("filter"in e))return we(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new HO(o,u),p=s.targetId;n=new Ow(p,h)}}return n}function n4(t,e){let n;if(e instanceof rc)n={update:ST(t,e.key,e.value)};else if(e instanceof Dw)n={delete:mg(t,e.key)};else if(e instanceof Is)n={update:ST(t,e.key,e.data),updateMask:h4(e.fieldMask)};else{if(!(e instanceof zO))return we(16599,{Vt:e.type});n={verify:mg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof Hu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Fu)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Gu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof xf)return{fieldPath:h.field.canonicalString(),increment:p.Ae};throw we(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:JO(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:we(27497)}(t,e.precondition)),n}function r4(t,e){return t&&t.length>0?(Ye(e!==void 0,14353),t.map(n=>function(o,u){let h=o.updateTime?qr(o.updateTime):qr(u);return h.isEqual(Ae.min())&&(h=qr(u)),new jO(h,o.transformResults||[])}(n,e))):[]}function i4(t,e){return{documents:[Vw(t,e.path)]}}function s4(t,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Vw(t,o);const u=function(g){if(g.length!==0)return Uw(gr.create(g,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const h=function(g){if(g.length!==0)return g.map(E=>function(w){return{field:Do(w.field),direction:l4(w.dir)}}(E))}(e.orderBy);h&&(n.structuredQuery.orderBy=h);const p=dg(t,e.limit);return p!==null&&(n.structuredQuery.limit=p),e.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:n,parent:o}}function a4(t){let e=e4(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ye(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=function(S){const w=jw(S);return w instanceof gr&&dw(w)?w.getFilters():[w]}(n.where));let h=[];n.orderBy&&(h=function(S){return S.map(w=>function(P){return new $u(No(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(n.orderBy));let p=null;n.limit&&(p=function(S){let w;return w=typeof S=="object"?S.value:S,Qf(w)?null:w}(n.limit));let m=null;n.startAt&&(m=function(S){const w=!!S.before,D=S.values||[];return new Af(D,w)}(n.startAt));let g=null;return n.endAt&&(g=function(S){const w=!S.before,D=S.values||[];return new Af(D,w)}(n.endAt)),SO(e,o,h,u,p,"F",m,g)}function o4(t,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function jw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=No(n.unaryFilter.field);return Rt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=No(n.unaryFilter.field);return Rt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=No(n.unaryFilter.field);return Rt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=No(n.unaryFilter.field);return Rt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}}(t):t.fieldFilter!==void 0?function(n){return Rt.create(No(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gr.create(n.compositeFilter.filters.map(s=>jw(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}}(n.compositeFilter.op))}(t):we(30097,{filter:t})}function l4(t){return KO[t]}function u4(t){return XO[t]}function c4(t){return WO[t]}function Do(t){return{fieldPath:t.canonicalString()}}function No(t){return nn.fromServerFormat(t.fieldPath)}function Uw(t){return t instanceof Rt?function(n){if(n.op==="=="){if(hT(n.value))return{unaryFilter:{field:Do(n.field),op:"IS_NAN"}};if(cT(n.value))return{unaryFilter:{field:Do(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hT(n.value))return{unaryFilter:{field:Do(n.field),op:"IS_NOT_NAN"}};if(cT(n.value))return{unaryFilter:{field:Do(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Do(n.field),op:u4(n.op),value:n.value}}}(t):t instanceof gr?function(n){const s=n.getFilters().map(o=>Uw(o));return s.length===1?s[0]:{compositeFilter:{op:c4(n.op),filters:s}}}(t):we(54877,{filter:t})}function h4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,s,o,u=Ae.min(),h=Ae.min(),p=rn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new hs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e){this.yt=e}}function d4(t){const e=a4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fg(e,e.limit,"L"):e}/**
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
 */class p4{constructor(){this.Cn=new m4}addToCollectionParentIndex(e,n){return this.Cn.add(n),re.resolve()}getCollectionParents(e,n){return re.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return re.resolve()}deleteFieldIndex(e,n){return re.resolve()}deleteAllFieldIndexes(e){return re.resolve()}createTargetIndexes(e,n){return re.resolve()}getDocumentsMatchingTarget(e,n){return re.resolve(null)}getIndexType(e,n){return re.resolve(0)}getFieldIndexes(e,n){return re.resolve([])}getNextCollectionGroupToUpdate(e){return re.resolve(null)}getMinOffset(e,n){return re.resolve(_s.min())}getMinOffsetFromCollectionGroup(e,n){return re.resolve(_s.min())}updateCollectionGroup(e,n,s){return re.resolve()}updateIndexEntries(e,n){return re.resolve()}}class m4{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Lt(it.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Lt(it.comparator)).toArray()}}/**
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
 */const AT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zw=41943040;class Sn{static withCacheSize(e){return new Sn(e,Sn.DEFAULT_COLLECTION_PERCENTILE,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const xT="LruGarbageCollector",g4=1048576;function RT([t,e],[n,s]){const o=Ve(t,n);return o===0?Ve(e,s):o}class y4{constructor(e){this.Ir=e,this.buffer=new Lt(RT),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();RT(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class _4{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){de(xT,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){sl(n)?de(xT,"Ignoring IndexedDB error during garbage collection: ",n):await il(n)}await this.Vr(3e5)})}}class v4{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return re.resolve(Yf.ce);const s=new y4(n);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),re.resolve(AT)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),AT):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,u,h,p,m,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(s=S,p=Date.now(),this.removeTargets(e,s,n))).next(S=>(u=S,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(g=Date.now(),Io()<=Pe.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${S} documents in `+(g-m)+`ms
Total Duration: ${g-E}ms`),re.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function E4(t,e){return new v4(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(){this.changes=new Oa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?re.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class b4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&Ou(s.mutation,o,Vn.empty(),nt.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Le()){const o=ma();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let h=wu();return u.forEach((p,m)=>{h=h.insert(p,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,n){const s=ma();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Le()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{n.set(h,p)})})}computeViews(e,n,s,o){let u=Ii();const h=Nu(),p=function(){return Nu()}();return n.forEach((m,g)=>{const E=s.get(g.key);o.has(g.key)&&(E===void 0||E.mutation instanceof Is)?u=u.insert(g.key,g):E!==void 0?(h.set(g.key,E.mutation.getFieldMask()),Ou(E.mutation,g,E.mutation.getFieldMask(),nt.now())):h.set(g.key,Vn.empty())}),this.recalculateAndSaveOverlays(e,u).next(m=>(m.forEach((g,E)=>h.set(g,E)),n.forEach((g,E)=>p.set(g,new b4(E,h.get(g)??null))),p))}recalculateAndSaveOverlays(e,n){const s=Nu();let o=new ft((h,p)=>h-p),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(h=>{for(const p of h)p.keys().forEach(m=>{const g=n.get(m);if(g===null)return;let E=s.get(m)||Vn.empty();E=p.applyToLocalView(g,E),s.set(m,E);const S=(o.get(p.batchId)||Le()).add(m);o=o.insert(p.batchId,S)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,E=m.value,S=bw();E.forEach(w=>{if(!u.has(w)){const D=Iw(n.get(w),s.get(w));D!==null&&S.set(w,D),u=u.add(w)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,S))}return re.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(h){return _e.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):re.resolve(ma());let p=Uu,m=u;return h.next(g=>re.forEach(g,(E,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),u.get(E)?re.resolve():this.remoteDocumentCache.getEntry(e,E).next(w=>{m=m.insert(E,w)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,m,g,Le())).next(E=>({batchId:p,changes:Tw(E)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _e(n)).next(s=>{let o=wu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let h=wu();return this.indexManager.getCollectionParents(e,u).next(p=>re.forEach(p,m=>{const g=function(S,w){return new al(w,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(n,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(E=>{E.forEach((S,w)=>{h=h.insert(S,w)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(h=>{u.forEach((m,g)=>{const E=g.getKey();h.get(E)===null&&(h=h.insert(E,pn.newInvalidDocument(E)))});let p=wu();return h.forEach((m,g)=>{const E=u.get(m);E!==void 0&&Ou(E.mutation,g,Vn.empty(),nt.now()),Zf(n,g)&&(p=p.insert(m,g))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return re.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:qr(o.createTime)}}(n)),re.resolve()}getNamedQuery(e,n){return re.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(o){return{name:o.name,query:d4(o.bundledQuery),readTime:qr(o.readTime)}}(n)),re.resolve()}}/**
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
 */class A4{constructor(){this.overlays=new ft(_e.comparator),this.qr=new Map}getOverlay(e,n){return re.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ma();return re.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.St(e,n,u)}),re.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),re.resolve()}getOverlaysForCollection(e,n,s){const o=ma(),u=n.length+1,h=new _e(n.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>s&&o.set(m.getKey(),m)}return re.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new ft((g,E)=>g-E);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>s){let E=u.get(g.largestBatchId);E===null&&(E=ma(),u=u.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const p=ma(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,E)=>p.set(g,E)),!(p.size()>=o)););return re.resolve(p)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new $O(n,s));let u=this.qr.get(n);u===void 0&&(u=Le(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
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
 */class x4{constructor(){this.sessionToken=rn.EMPTY_BYTE_STRING}getSessionToken(e){return re.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,re.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this.Qr=new Lt(Gt.$r),this.Ur=new Lt(Gt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Gt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Gr(new Gt(e,n))}zr(e,n){e.forEach(s=>this.removeReference(s,n))}jr(e){const n=new _e(new it([])),s=new Gt(n,e),o=new Gt(n,e+1),u=[];return this.Ur.forEachInRange([s,o],h=>{this.Gr(h),u.push(h.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new _e(new it([])),s=new Gt(n,e),o=new Gt(n,e+1);let u=Le();return this.Ur.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const n=new Gt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Gt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return _e.comparator(e.key,n.key)||Ve(e.Yr,n.Yr)}static Kr(e,n){return Ve(e.Yr,n.Yr)||_e.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Lt(Gt.$r)}checkEmpty(e){return re.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new BO(u,n,s,o);this.mutationQueue.push(h);for(const p of o)this.Zr=this.Zr.add(new Gt(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return re.resolve(h)}lookupMutationBatch(e,n){return re.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return re.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return re.resolve(this.mutationQueue.length===0?Kg:this.tr-1)}getAllMutationBatches(e){return re.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Gt(n,0),o=new Gt(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],h=>{const p=this.Xr(h.Yr);u.push(p)}),re.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Lt(Ve);return n.forEach(o=>{const u=new Gt(o,0),h=new Gt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],p=>{s=s.add(p.Yr)})}),re.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;_e.isDocumentKey(u)||(u=u.child(""));const h=new Gt(new _e(u),0);let p=new Lt(Ve);return this.Zr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Yr)),!0)},h),re.resolve(this.ti(p))}ti(e){const n=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Ye(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return re.forEach(n.mutations,o=>{const u=new Gt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,n){const s=new Gt(n,0),o=this.Zr.firstAfterOrEqual(s);return re.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,re.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e){this.ri=e,this.docs=function(){return new ft(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return re.resolve(s?s.document.mutableCopy():pn.newInvalidDocument(n))}getEntries(e,n){let s=Ii();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():pn.newInvalidDocument(o))}),re.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=Ii();const h=n.path,p=new _e(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:E}}=m.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||nO(tO(E),s)<=0||(o.has(E.key)||Zf(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return re.resolve(u)}getAllFromCollectionGroup(e,n,s,o){we(9500)}ii(e,n){return re.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new C4(this)}getSize(e){return re.resolve(this.size)}}class C4 extends T4{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),re.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{constructor(e){this.persistence=e,this.si=new Oa(n=>Zg(n),Jg),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new iy,this.targetCount=0,this.ai=Qo.ur()}forEachTarget(e,n){return this.si.forEach((s,o)=>n(o)),re.resolve()}getLastRemoteSnapshotVersion(e){return re.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return re.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),re.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),re.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Qo(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,re.resolve()}updateTargetData(e,n){return this.Pr(n),re.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,re.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.si.forEach((h,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),re.waitFor(u).next(()=>o)}getTargetCount(e){return re.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return re.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),re.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),re.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),re.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return re.resolve(s)}containsKey(e,n){return re.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,n){this.ui={},this.overlays={},this.ci=new Yf(0),this.li=!1,this.li=!0,this.hi=new x4,this.referenceDelegate=e(this),this.Pi=new D4(this),this.indexManager=new p4,this.remoteDocumentCache=function(o){return new I4(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new f4(n),this.Ii=new S4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new A4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new R4(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){de("MemoryPersistence","Starting transaction:",e);const o=new N4(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,n){return re.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,n)))}}class N4 extends iO{constructor(e){super(),this.currentSequenceNumber=e}}class sy{constructor(e){this.persistence=e,this.Ri=new iy,this.Vi=null}static mi(e){return new sy(e)}get fi(){if(this.Vi)return this.Vi;throw we(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),re.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),re.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),re.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return re.forEach(this.fi,s=>{const o=_e.fromPath(s);return this.gi(e,o).next(u=>{u||n.removeEntry(o,Ae.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return re.or([()=>re.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class If{constructor(e,n){this.persistence=e,this.pi=new Oa(s=>oO(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=E4(this,n)}static mi(e,n){return new If(e,n)}Ei(){}di(e){return re.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}wr(e){let n=0;return this.pr(e,s=>{n++}).next(()=>n)}pr(e,n){return re.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?re.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,h=>this.br(e,h,n).next(p=>{p||(s++,u.removeEntry(h,Ae.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),re.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),re.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),re.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),re.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=rf(e.data.value)),n}br(e,n,s){return re.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return re.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=Le(),o=Le();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new ay(e,n.fromCache,s,o)}}/**
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
 */class O4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class k4{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return oC()?8:sO(mn())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.ys(e,n).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ws(e,n,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new O4;return this.Ss(e,n,h).next(p=>{if(u.result=p,this.Vs)return this.bs(e,n,h,p.size)})}).next(()=>u.result)}bs(e,n,s,o){return s.documentReadCount<this.fs?(Io()<=Pe.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",Co(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),re.resolve()):(Io()<=Pe.DEBUG&&de("QueryEngine","Query:",Co(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Io()<=Pe.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",Co(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ur(n))):re.resolve())}ys(e,n){if(mT(n))return re.resolve(null);let s=Ur(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=fg(n,null,"F"),s=Ur(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Le(...u);return this.ps.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(m=>{const g=this.Ds(n,p);return this.Cs(n,g,h,m.readTime)?this.ys(e,fg(n,null,"F")):this.vs(e,g,n,m)}))})))}ws(e,n,s,o){return mT(n)||o.isEqual(Ae.min())?re.resolve(null):this.ps.getDocuments(e,s).next(u=>{const h=this.Ds(n,u);return this.Cs(n,h,s,o)?re.resolve(null):(Io()<=Pe.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Co(n)),this.vs(e,h,n,eO(o,Uu)).next(p=>p))})}Ds(e,n){let s=new Lt(vw(e));return n.forEach((o,u)=>{Zf(e,u)&&(s=s.add(u))}),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,n,s){return Io()<=Pe.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",Co(n)),this.ps.getDocumentsMatchingQuery(e,n,_s.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="LocalStore",M4=3e8;class P4{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new ft(Ve),this.xs=new Oa(u=>Zg(u),Jg),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new w4(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function V4(t,e,n,s){return new P4(t,e,n,s)}async function $w(t,e){const n=xe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Bs(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let m=Le();for(const g of o){h.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}for(const g of u){p.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}return n.localDocuments.getDocuments(s,m).next(g=>({Ls:g,removedBatchIds:h,addedBatchIds:p}))})})}function L4(t,e){const n=xe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=n.Ns.newChangeBuffer({trackRemovals:!0});return function(p,m,g,E){const S=g.batch,w=S.keys();let D=re.resolve();return w.forEach(P=>{D=D.next(()=>E.getEntry(m,P)).next(F=>{const V=g.docVersions.get(P);Ye(V!==null,48541),F.version.compareTo(V)<0&&(S.applyToRemoteDocument(F,g),F.isValidDocument()&&(F.setReadTime(g.commitVersion),E.addEntry(F)))})}),D.next(()=>p.mutationQueue.removeMutationBatch(m,S))}(n,s,e,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let m=Le();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m}(e))).next(()=>n.localDocuments.getDocuments(s,o))})}function Hw(t){const e=xe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function j4(t,e){const n=xe(t),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const p=[];e.targetChanges.forEach((E,S)=>{const w=o.get(S);if(!w)return;p.push(n.Pi.removeMatchingKeys(u,E.removedDocuments,S).next(()=>n.Pi.addMatchingKeys(u,E.addedDocuments,S)));let D=w.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?D=D.withResumeToken(rn.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):E.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(E.resumeToken,s)),o=o.insert(S,D),function(F,V,z){return F.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=M4?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(w,D,E)&&p.push(n.Pi.updateTargetData(u,D))});let m=Ii(),g=Le();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),p.push(U4(u,h,e.documentUpdates).next(E=>{m=E.ks,g=E.qs})),!s.isEqual(Ae.min())){const E=n.Pi.getLastRemoteSnapshotVersion(u).next(S=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(E)}return re.waitFor(p).next(()=>h.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,m,g)).next(()=>m)}).then(u=>(n.Ms=o,u))}function U4(t,e,n){let s=Le(),o=Le();return n.forEach(u=>s=s.add(u)),e.getEntries(t,s).next(u=>{let h=Ii();return n.forEach((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(Ae.min())?(e.removeEntry(p,m.readTime),h=h.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),h=h.insert(p,m)):de(oy,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)}),{ks:h,qs:o}})}function q4(t,e){const n=xe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Kg),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function z4(t,e){const n=xe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Pi.getTargetData(s,e).next(u=>u?(o=u,re.resolve(o)):n.Pi.allocateTargetId(s).next(h=>(o=new hs(e,h,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s})}async function yg(t,e,n){const s=xe(t),o=s.Ms.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!sl(h))throw h;de(oy,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function IT(t,e,n){const s=xe(t);let o=Ae.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",h=>function(m,g,E){const S=xe(m),w=S.xs.get(E);return w!==void 0?re.resolve(S.Ms.get(w)):S.Pi.getTargetData(g,E)}(s,h,Ur(e)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,p.targetId).next(m=>{u=m})}).next(()=>s.Fs.getDocumentsMatchingQuery(h,e,n?o:Ae.min(),n?u:Le())).next(p=>(B4(s,xO(e),p),{documents:p,Qs:u})))}function B4(t,e,n){let s=t.Os.get(e)||Ae.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),t.Os.set(e,s)}class CT{constructor(){this.activeTargetIds=OO()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $4{constructor(){this.Mo=new CT,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new CT,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class H4{Oo(e){}shutdown(){}}/**
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
 */const DT="ConnectivityMonitor";class NT{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){de(DT,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){de(DT,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qh=null;function _g(){return qh===null?qh=function(){return 268435456+Math.round(2147483648*Math.random())}():qh++,"0x"+qh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="RestConnection",F4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class G4{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===wf?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,u){const h=_g(),p=this.zo(e,n.toUriEncodedString());de(Pm,`Sending RPC '${e}' ${h}:`,p,s);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:g}=new URL(p),E=el(g);return this.Jo(e,p,m,s,E).then(S=>(de(Pm,`Received RPC '${e}' ${h}: `,S),S),S=>{throw Ho(Pm,`RPC '${e}' ${h} failed with error: `,S,"url: ",p,"request:",s),S})}Ho(e,n,s,o,u,h){return this.Go(e,n,s,o,u)}jo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,n){const s=F4[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="WebChannelConnection";class Q4 extends G4{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,u){const h=_g();return new Promise((p,m)=>{const g=new Gb;g.setWithCredentials(!0),g.listenOnce(Yb.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case nf.NO_ERROR:const S=g.getResponseJson();de(un,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(S)),p(S);break;case nf.TIMEOUT:de(un,`RPC '${e}' ${h} timed out`),m(new he(te.DEADLINE_EXCEEDED,"Request time out"));break;case nf.HTTP_ERROR:const w=g.getStatus();if(de(un,`RPC '${e}' ${h} failed with status:`,w,"response text:",g.getResponseText()),w>0){let D=g.getResponseJson();Array.isArray(D)&&(D=D[0]);const P=D==null?void 0:D.error;if(P&&P.status&&P.message){const F=function(z){const j=z.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(j)>=0?j:te.UNKNOWN}(P.status);m(new he(F,P.message))}else m(new he(te.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new he(te.UNAVAILABLE,"Connection failed."));break;default:we(9055,{l_:e,streamId:h,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{de(un,`RPC '${e}' ${h} completed.`)}});const E=JSON.stringify(o);de(un,`RPC '${e}' ${h} sending request:`,o),g.send(n,"POST",E,s,15)})}T_(e,n,s){const o=_g(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Xb(),p=Kb(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,n,s),m.encodeInitMessageHeaders=!0;const E=u.join("");de(un,`Creating RPC '${e}' stream ${o}: ${E}`,m);const S=h.createWebChannel(E,m);this.I_(S);let w=!1,D=!1;const P=new Y4({Yo:V=>{D?de(un,`Not sending because RPC '${e}' stream ${o} is closed:`,V):(w||(de(un,`Opening RPC '${e}' stream ${o} transport.`),S.open(),w=!0),de(un,`RPC '${e}' stream ${o} sending:`,V),S.send(V))},Zo:()=>S.close()}),F=(V,z,j)=>{V.listen(z,X=>{try{j(X)}catch(ae){setTimeout(()=>{throw ae},0)}})};return F(S,bu.EventType.OPEN,()=>{D||(de(un,`RPC '${e}' stream ${o} transport opened.`),P.o_())}),F(S,bu.EventType.CLOSE,()=>{D||(D=!0,de(un,`RPC '${e}' stream ${o} transport closed`),P.a_(),this.E_(S))}),F(S,bu.EventType.ERROR,V=>{D||(D=!0,Ho(un,`RPC '${e}' stream ${o} transport errored. Name:`,V.name,"Message:",V.message),P.a_(new he(te.UNAVAILABLE,"The operation could not be completed")))}),F(S,bu.EventType.MESSAGE,V=>{var z;if(!D){const j=V.data[0];Ye(!!j,16349);const X=j,ae=(X==null?void 0:X.error)||((z=X[0])==null?void 0:z.error);if(ae){de(un,`RPC '${e}' stream ${o} received error:`,ae);const le=ae.status;let fe=function(R){const k=At[R];if(k!==void 0)return Nw(k)}(le),C=ae.message;fe===void 0&&(fe=te.INTERNAL,C="Unknown error status: "+le+" with message "+ae.message),D=!0,P.a_(new he(fe,C)),S.close()}else de(un,`RPC '${e}' stream ${o} received:`,j),P.u_(j)}}),F(p,Qb.STAT_EVENT,V=>{V.stat===sg.PROXY?de(un,`RPC '${e}' stream ${o} detected buffering proxy`):V.stat===sg.NOPROXY&&de(un,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Vm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){return new ZO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&de("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="PersistentStream";class Gw{constructor(e,n,s,o,u,h,p,m){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Fw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===te.RESOURCE_EXHAUSTED?(Ri(n.toString()),Ri("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===n&&this.G_(s,o)},s=>{e(()=>{const o=new he(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return de(OT,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(de(OT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class K4 extends Gw{constructor(e,n,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,h),this.serializer=u}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=t4(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ae.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ae.min():h.readTime?qr(h.readTime):Ae.min()}(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=gg(this.serializer),n.addTarget=function(u,h){let p;const m=h.target;if(p=cg(m)?{documents:i4(u,m)}:{query:s4(u,m).ft},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=Mw(u,h.resumeToken);const g=dg(u,h.expectedCount);g!==null&&(p.expectedCount=g)}else if(h.snapshotVersion.compareTo(Ae.min())>0){p.readTime=Rf(u,h.snapshotVersion.toTimestamp());const g=dg(u,h.expectedCount);g!==null&&(p.expectedCount=g)}return p}(this.serializer,e);const s=o4(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=gg(this.serializer),n.removeTarget=e,this.q_(n)}}class X4 extends Gw{constructor(e,n,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=r4(e.writeResults,e.commitTime),s=qr(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=gg(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>n4(this.serializer,s))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{}class Z4 extends W4{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new he(te.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Go(e,pg(n,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(te.UNKNOWN,u.toString())})}Ho(e,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Ho(e,pg(n,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new he(te.UNKNOWN,h.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class J4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ri(n),this.aa=!1):de("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="RemoteStore";class ek{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(h=>{s.enqueueAndForget(async()=>{ka(this)&&(de(Ra,"Restarting streams for network reachability change."),await async function(m){const g=xe(m);g.Ea.add(4),await sc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await rd(g)}(this))})}),this.Ra=new J4(s,o)}}async function rd(t){if(ka(t))for(const e of t.da)await e(!0)}async function sc(t){for(const e of t.da)await e(!1)}function Yw(t,e){const n=xe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),hy(n)?cy(n):ol(n).O_()&&uy(n,e))}function ly(t,e){const n=xe(t),s=ol(n);n.Ia.delete(e),s.O_()&&Qw(n,e),n.Ia.size===0&&(s.O_()?s.L_():ka(n)&&n.Ra.set("Unknown"))}function uy(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ol(t).Y_(e)}function Qw(t,e){t.Va.Ue(e),ol(t).Z_(e)}function cy(t){t.Va=new QO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ol(t).start(),t.Ra.ua()}function hy(t){return ka(t)&&!ol(t).x_()&&t.Ia.size>0}function ka(t){return xe(t).Ea.size===0}function Kw(t){t.Va=void 0}async function tk(t){t.Ra.set("Online")}async function nk(t){t.Ia.forEach((e,n)=>{uy(t,e)})}async function rk(t,e){Kw(t),hy(t)?(t.Ra.ha(e),cy(t)):t.Ra.set("Unknown")}async function ik(t,e,n){if(t.Ra.set("Online"),e instanceof kw&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ia.delete(p),o.Va.removeTarget(p))}(t,e)}catch(s){de(Ra,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Cf(t,s)}else if(e instanceof of?t.Va.Ze(e):e instanceof Ow?t.Va.st(e):t.Va.tt(e),!n.isEqual(Ae.min()))try{const s=await Hw(t.localStore);n.compareTo(s)>=0&&await function(u,h){const p=u.Va.Tt(h);return p.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const E=u.Ia.get(g);E&&u.Ia.set(g,E.withResumeToken(m.resumeToken,h))}}),p.targetMismatches.forEach((m,g)=>{const E=u.Ia.get(m);if(!E)return;u.Ia.set(m,E.withResumeToken(rn.EMPTY_BYTE_STRING,E.snapshotVersion)),Qw(u,m);const S=new hs(E.target,m,g,E.sequenceNumber);uy(u,S)}),u.remoteSyncer.applyRemoteEvent(p)}(t,n)}catch(s){de(Ra,"Failed to raise snapshot:",s),await Cf(t,s)}}async function Cf(t,e,n){if(!sl(e))throw e;t.Ea.add(1),await sc(t),t.Ra.set("Offline"),n||(n=()=>Hw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{de(Ra,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await rd(t)})}function Xw(t,e){return e().catch(n=>Cf(t,n,e))}async function id(t){const e=xe(t),n=bs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Kg;for(;sk(e);)try{const o=await q4(e.localStore,s);if(o===null){e.Ta.length===0&&n.L_();break}s=o.batchId,ak(e,o)}catch(o){await Cf(e,o)}Ww(e)&&Zw(e)}function sk(t){return ka(t)&&t.Ta.length<10}function ak(t,e){t.Ta.push(e);const n=bs(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Ww(t){return ka(t)&&!bs(t).x_()&&t.Ta.length>0}function Zw(t){bs(t).start()}async function ok(t){bs(t).ra()}async function lk(t){const e=bs(t);for(const n of t.Ta)e.ea(n.mutations)}async function uk(t,e,n){const s=t.Ta.shift(),o=ty.from(s,e,n);await Xw(t,()=>t.remoteSyncer.applySuccessfulWrite(o)),await id(t)}async function ck(t,e){e&&bs(t).X_&&await async function(s,o){if(function(h){return FO(h)&&h!==te.ABORTED}(o.code)){const u=s.Ta.shift();bs(s).B_(),await Xw(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await id(s)}}(t,e),Ww(t)&&Zw(t)}async function kT(t,e){const n=xe(t);n.asyncQueue.verifyOperationInProgress(),de(Ra,"RemoteStore received new credentials");const s=ka(n);n.Ea.add(3),await sc(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await rd(n)}async function hk(t,e){const n=xe(t);e?(n.Ea.delete(2),await rd(n)):e||(n.Ea.add(2),await sc(n),n.Ra.set("Unknown"))}function ol(t){return t.ma||(t.ma=function(n,s,o){const u=xe(n);return u.sa(),new K4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(t.datastore,t.asyncQueue,{Xo:tk.bind(null,t),t_:nk.bind(null,t),r_:rk.bind(null,t),H_:ik.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),hy(t)?cy(t):t.Ra.set("Unknown")):(await t.ma.stop(),Kw(t))})),t.ma}function bs(t){return t.fa||(t.fa=function(n,s,o){const u=xe(n);return u.sa(),new X4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:ok.bind(null,t),r_:ck.bind(null,t),ta:lk.bind(null,t),na:uk.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await id(t)):(await t.fa.stop(),t.Ta.length>0&&(de(Ra,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const h=Date.now()+s,p=new fy(e,n,h,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dy(t,e){if(Ri("AsyncQueue",`${e}: ${t}`),sl(t))return new he(te.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{static emptySet(e){return new Lo(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||_e.comparator(n.key,s.key):(n,s)=>_e.comparator(n.key,s.key),this.keyedMap=wu(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Lo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Lo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(){this.ga=new ft(_e.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):we(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ko{constructor(e,n,s,o,u,h,p,m,g){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,n,s,o,u){const h=[];return n.forEach(p=>{h.push({type:0,doc:p})}),new Ko(e,n,Lo.emptySet(n),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class dk{constructor(){this.queries=PT(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=xe(n),u=o.queries;o.queries=PT(),u.forEach((h,p)=>{for(const m of p.Sa)m.onError(s)})})(this,new he(te.ABORTED,"Firestore shutting down"))}}function PT(){return new Oa(t=>_w(t),Wf)}async function py(t,e){const n=xe(t);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new fk,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(h){const p=dy(h,`Initialization of query '${Co(e.query)}' failed`);return void e.onError(p)}n.queries.set(o,u),u.Sa.push(e),e.va(n.onlineState),u.wa&&e.Fa(u.wa)&&gy(n)}async function my(t,e){const n=xe(t),s=e.query;let o=3;const u=n.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function pk(t,e){const n=xe(t);let s=!1;for(const o of e){const u=o.query,h=n.queries.get(u);if(h){for(const p of h.Sa)p.Fa(o)&&(s=!0);h.wa=o}}s&&gy(n)}function mk(t,e,n){const s=xe(t),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(e)}function gy(t){t.Ca.forEach(e=>{e.next()})}var vg,VT;(VT=vg||(vg={})).Ma="default",VT.Cache="cache";class yy{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Ko(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==vg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.key=e}}class eS{constructor(e){this.key=e}}class gk{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Le(),this.mutatedKeys=Le(),this.eu=vw(e),this.tu=new Lo(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new MT,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,h=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,S)=>{const w=o.get(E),D=Zf(this.query,S)?S:null,P=!!w&&this.mutatedKeys.has(w.key),F=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let V=!1;w&&D?w.data.isEqual(D.data)?P!==F&&(s.track({type:3,doc:D}),V=!0):this.su(w,D)||(s.track({type:2,doc:D}),V=!0,(m&&this.eu(D,m)>0||g&&this.eu(D,g)<0)&&(p=!0)):!w&&D?(s.track({type:0,doc:D}),V=!0):w&&!D&&(s.track({type:1,doc:w}),V=!0,(m||g)&&(p=!0)),V&&(D?(h=h.add(D),u=F?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Cs:p,mutatedKeys:u}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort((E,S)=>function(D,P){const F=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{Rt:V})}};return F(D)-F(P)}(E.type,S.type)||this.eu(E.doc,S.doc)),this.ou(s),o=o??!1;const p=n&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,g=m!==this.Za;return this.Za=m,h.length!==0||g?{snapshot:new Ko(this.query,e.tu,u,h,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new MT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Le(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const n=[];return e.forEach(s=>{this.Xa.has(s)||n.push(new eS(s))}),this.Xa.forEach(s=>{e.has(s)||n.push(new Jw(s))}),n}cu(e){this.Ya=e.Qs,this.Xa=Le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ko.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const _y="SyncEngine";class yk{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class _k{constructor(e){this.key=e,this.hu=!1}}class vk{constructor(e,n,s,o,u,h){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Oa(p=>_w(p),Wf),this.Iu=new Map,this.Eu=new Set,this.du=new ft(_e.comparator),this.Au=new Map,this.Ru=new iy,this.Vu={},this.mu=new Map,this.fu=Qo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ek(t,e,n=!0){const s=aS(t);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await tS(s,e,n,!0),o}async function Tk(t,e){const n=aS(t);await tS(n,e,!0,!1)}async function tS(t,e,n,s){const o=await z4(t.localStore,Ur(e)),u=o.targetId,h=t.sharedClientState.addLocalQueryTarget(u,n);let p;return s&&(p=await bk(t,e,u,h==="current",o.resumeToken)),t.isPrimaryClient&&n&&Yw(t.remoteStore,o),p}async function bk(t,e,n,s,o){t.pu=(S,w,D)=>async function(F,V,z,j){let X=V.view.ru(z);X.Cs&&(X=await IT(F.localStore,V.query,!1).then(({documents:C})=>V.view.ru(C,X)));const ae=j&&j.targetChanges.get(V.targetId),le=j&&j.targetMismatches.get(V.targetId)!=null,fe=V.view.applyChanges(X,F.isPrimaryClient,ae,le);return jT(F,V.targetId,fe.au),fe.snapshot}(t,S,w,D);const u=await IT(t.localStore,e,!0),h=new gk(e,u.Qs),p=h.ru(u.documents),m=ic.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",o),g=h.applyChanges(p,t.isPrimaryClient,m);jT(t,n,g.au);const E=new yk(e,n,h);return t.Tu.set(e,E),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),g.snapshot}async function wk(t,e,n){const s=xe(t),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(h=>!Wf(h,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await yg(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&ly(s.remoteStore,o.targetId),Eg(s,o.targetId)}).catch(il)):(Eg(s,o.targetId),await yg(s.localStore,o.targetId,!0))}async function Sk(t,e){const n=xe(t),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),ly(n.remoteStore,s.targetId))}async function Ak(t,e,n){const s=Ok(t);try{const o=await function(h,p){const m=xe(h),g=nt.now(),E=p.reduce((D,P)=>D.add(P.key),Le());let S,w;return m.persistence.runTransaction("Locally write mutations","readwrite",D=>{let P=Ii(),F=Le();return m.Ns.getEntries(D,E).next(V=>{P=V,P.forEach((z,j)=>{j.isValidDocument()||(F=F.add(z))})}).next(()=>m.localDocuments.getOverlayedDocuments(D,P)).next(V=>{S=V;const z=[];for(const j of p){const X=qO(j,S.get(j.key).overlayedDocument);X!=null&&z.push(new Is(j.key,X,cw(X.value.mapValue),fr.exists(!0)))}return m.mutationQueue.addMutationBatch(D,g,z,p)}).next(V=>{w=V;const z=V.applyToLocalDocumentSet(S,F);return m.documentOverlayCache.saveOverlays(D,V.batchId,z)})}).then(()=>({batchId:w.batchId,changes:Tw(S)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,m){let g=h.Vu[h.currentUser.toKey()];g||(g=new ft(Ve)),g=g.insert(p,m),h.Vu[h.currentUser.toKey()]=g}(s,o.batchId,n),await ac(s,o.changes),await id(s.remoteStore)}catch(o){const u=dy(o,"Failed to persist write");n.reject(u)}}async function nS(t,e){const n=xe(t);try{const s=await j4(n.localStore,e);e.targetChanges.forEach((o,u)=>{const h=n.Au.get(u);h&&(Ye(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Ye(h.hu,14607):o.removedDocuments.size>0&&(Ye(h.hu,42227),h.hu=!1))}),await ac(n,s,e)}catch(s){await il(s)}}function LT(t,e,n){const s=xe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach((u,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const m=xe(h);m.onlineState=p;let g=!1;m.queries.forEach((E,S)=>{for(const w of S.Sa)w.va(p)&&(g=!0)}),g&&gy(m)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function xk(t,e,n){const s=xe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new ft(_e.comparator);h=h.insert(u,pn.newNoDocument(u,Ae.min()));const p=Le().add(u),m=new td(Ae.min(),new Map,new ft(Ve),h,p);await nS(s,m),s.du=s.du.remove(u),s.Au.delete(e),vy(s)}else await yg(s.localStore,e,!1).then(()=>Eg(s,e,n)).catch(il)}async function Rk(t,e){const n=xe(t),s=e.batch.batchId;try{const o=await L4(n.localStore,e);iS(n,s,null),rS(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ac(n,o)}catch(o){await il(o)}}async function Ik(t,e,n){const s=xe(t);try{const o=await function(h,p){const m=xe(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return m.mutationQueue.lookupMutationBatch(g,p).next(S=>(Ye(S!==null,37113),E=S.keys(),m.mutationQueue.removeMutationBatch(g,S))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,E,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>m.localDocuments.getDocuments(g,E))})}(s.localStore,e);iS(s,e,n),rS(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ac(s,o)}catch(o){await il(o)}}function rS(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function iS(t,e,n){const s=xe(t);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Eg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(s=>{t.Ru.containsKey(s)||sS(t,s)})}function sS(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(ly(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),vy(t))}function jT(t,e,n){for(const s of n)s instanceof Jw?(t.Ru.addReference(s.key,e),Ck(t,s)):s instanceof eS?(de(_y,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||sS(t,s.key)):we(19791,{wu:s})}function Ck(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(de(_y,"New document in limbo: "+n),t.Eu.add(s),vy(t))}function vy(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new _e(it.fromString(e)),s=t.fu.next();t.Au.set(s,new _k(n)),t.du=t.du.insert(n,s),Yw(t.remoteStore,new hs(Ur(Xf(n.path)),s,"TargetPurposeLimboResolution",Yf.ce))}}async function ac(t,e,n){const s=xe(t),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach((p,m)=>{h.push(s.pu(m,e,n).then(g=>{var E;if((g||n)&&s.isPrimaryClient){const S=g?!g.fromCache:(E=n==null?void 0:n.targetChanges.get(m.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(m.targetId,S?"current":"not-current")}if(g){o.push(g);const S=ay.As(m.targetId,g);u.push(S)}}))}),await Promise.all(h),s.Pu.H_(o),await async function(m,g){const E=xe(m);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>re.forEach(g,w=>re.forEach(w.Es,D=>E.persistence.referenceDelegate.addReference(S,w.targetId,D)).next(()=>re.forEach(w.ds,D=>E.persistence.referenceDelegate.removeReference(S,w.targetId,D)))))}catch(S){if(!sl(S))throw S;de(oy,"Failed to update sequence numbers: "+S)}for(const S of g){const w=S.targetId;if(!S.fromCache){const D=E.Ms.get(w),P=D.snapshotVersion,F=D.withLastLimboFreeSnapshotVersion(P);E.Ms=E.Ms.insert(w,F)}}}(s.localStore,u))}async function Dk(t,e){const n=xe(t);if(!n.currentUser.isEqual(e)){de(_y,"User change. New user:",e.toKey());const s=await $w(n.localStore,e);n.currentUser=e,function(u,h){u.mu.forEach(p=>{p.forEach(m=>{m.reject(new he(te.CANCELLED,h))})}),u.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ac(n,s.Ls)}}function Nk(t,e){const n=xe(t),s=n.Au.get(e);if(s&&s.hu)return Le().add(s.key);{let o=Le();const u=n.Iu.get(e);if(!u)return o;for(const h of u){const p=n.Tu.get(h);o=o.unionWith(p.view.nu)}return o}}function aS(t){const e=xe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xk.bind(null,e),e.Pu.H_=pk.bind(null,e.eventManager),e.Pu.yu=mk.bind(null,e.eventManager),e}function Ok(t){const e=xe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Rk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ik.bind(null,e),e}class Df{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return V4(this.persistence,new k4,e.initialUser,this.serializer)}Cu(e){return new Bw(sy.mi,this.serializer)}Du(e){return new $4}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Df.provider={build:()=>new Df};class kk extends Df{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ye(this.persistence.referenceDelegate instanceof If,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new _4(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Sn.withCacheSize(this.cacheSizeBytes):Sn.DEFAULT;return new Bw(s=>If.mi(s,n),this.serializer)}}class Tg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>LT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Dk.bind(null,this.syncEngine),await hk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dk}()}createDatastore(e){const n=nd(e.databaseInfo.databaseId),s=function(u){return new Q4(u)}(e.databaseInfo);return function(u,h,p,m){return new Z4(u,h,p,m)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,h,p){return new ek(s,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,n=>LT(this.syncEngine,n,0),function(){return NT.v()?new NT:new H4}())}createSyncEngine(e,n){return function(o,u,h,p,m,g,E){const S=new vk(o,u,h,p,m,g);return E&&(S.gu=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=xe(o);de(Ra,"RemoteStore shutting down."),u.Ea.add(5),await sc(u),u.Aa.shutdown(),u.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Tg.provider={build:()=>new Tg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ey{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ri("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="FirestoreClient";class Mk{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=dn.UNAUTHENTICATED,this.clientId=Qg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{de(ws,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(de(ws,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=dy(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Lm(t,e){t.asyncQueue.verifyOperationInProgress(),de(ws,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async o=>{s.isEqual(o)||(await $w(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function UT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Pk(t);de(ws,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>kT(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,o)=>kT(e.remoteStore,o)),t._onlineComponents=e}async function Pk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){de(ws,"Using user provided OfflineComponentProvider");try{await Lm(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===te.FAILED_PRECONDITION||o.code===te.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Ho("Error using user provided cache. Falling back to memory cache: "+n),await Lm(t,new Df)}}else de(ws,"Using default OfflineComponentProvider"),await Lm(t,new kk(void 0));return t._offlineComponents}async function oS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(de(ws,"Using user provided OnlineComponentProvider"),await UT(t,t._uninitializedComponentsProvider._online)):(de(ws,"Using default OnlineComponentProvider"),await UT(t,new Tg))),t._onlineComponents}function Vk(t){return oS(t).then(e=>e.syncEngine)}async function Nf(t){const e=await oS(t),n=e.eventManager;return n.onListen=Ek.bind(null,e.syncEngine),n.onUnlisten=wk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Tk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Sk.bind(null,e.syncEngine),n}function Lk(t,e,n={}){const s=new bi;return t.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const E=new Ey({next:w=>{E.Nu(),h.enqueueAndForget(()=>my(u,S));const D=w.docs.has(p);!D&&w.fromCache?g.reject(new he(te.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&w.fromCache&&m&&m.source==="server"?g.reject(new he(te.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),S=new yy(Xf(p.path),E,{includeMetadataChanges:!0,qa:!0});return py(u,S)}(await Nf(t),t.asyncQueue,e,n,s)),s.promise}function jk(t,e,n={}){const s=new bi;return t.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const E=new Ey({next:w=>{E.Nu(),h.enqueueAndForget(()=>my(u,S)),w.fromCache&&m.source==="server"?g.reject(new he(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),S=new yy(p,E,{includeMetadataChanges:!0,qa:!0});return py(u,S)}(await Nf(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function lS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="firestore.googleapis.com",zT=!0;class BT{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uS,this.ssl=zT}else this.host=e.host,this.ssl=e.ssl??zT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<g4)throw new he(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lS(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sd{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new BT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new BT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new $N;switch(s.type){case"firstParty":return new YN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=qT.get(n);s&&(de("ComponentProvider","Removing Datastore"),qT.delete(n),s.terminate())}(this),Promise.resolve()}}function Uk(t,e,n,s={}){var g;t=Ln(t,sd);const o=el(e),u=t._getSettings(),h={...u,emulatorOptions:t._getEmulatorOptions()},p=`${e}:${n}`;o&&(rb(`https://${p}`),ib("Firestore",!0)),u.host!==uS&&u.host!==p&&Ho("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:s};if(!ba(m,h)&&(t._setSettings(m),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=dn.MOCK_USER;else{E=ZI(s.mockUserToken,(g=t._app)==null?void 0:g.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new he(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new dn(w)}t._authCredentials=new HN(new Zb(E,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Cs(this.firestore,e,this._query)}}class gt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(nc(n,gt._jsonSchema))return new gt(e,s||null,new _e(it.fromString(n.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:It("string",gt._jsonSchemaVersion),referencePath:It("string")};class ys extends Cs{constructor(e,n,s){super(e,n,Xf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new _e(e))}withConverter(e){return new ys(this.firestore,e,this._path)}}function wi(t,e,...n){if(t=Ct(t),Jb("collection","path",e),t instanceof sd){const s=it.fromString(e,...n);return tT(s),new ys(t,null,s)}{if(!(t instanceof gt||t instanceof ys))throw new he(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(it.fromString(e,...n));return tT(s),new ys(t.firestore,null,s)}}function dr(t,e,...n){if(t=Ct(t),arguments.length===1&&(e=Qg.newId()),Jb("doc","path",e),t instanceof sd){const s=it.fromString(e,...n);return eT(s),new gt(t,null,new _e(s))}{if(!(t instanceof gt||t instanceof ys))throw new he(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(it.fromString(e,...n));return eT(s),new gt(t.firestore,t instanceof ys?t.converter:null,new _e(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T="AsyncQueue";class HT{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Fw(this,"async_queue_retry"),this._c=()=>{const s=Vm();s&&de($T,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Vm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Vm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new bi;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!sl(e))throw e;de($T,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Ri("INTERNAL UNHANDLED ERROR: ",FT(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=fy.createAndSchedule(this,e,n,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&we(47125,{Pc:FT(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function FT(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(t,["next","error","complete"])}class Ss extends sd{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new HT,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new HT(e),this._firestoreClient=void 0,await e}}}function cS(t,e){const n=typeof t=="object"?t:lb(),s=typeof t=="string"?t:wf,o=jg(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=XI("firestore");u&&Uk(o,...u)}return o}function ad(t){if(t._terminated)throw new he(te.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||qk(t),t._firestoreClient}function qk(t){var s,o,u;const e=t._freezeSettings(),n=function(p,m,g,E){return new cO(p,m,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,lS(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(t._databaseId,((s=t._app)==null?void 0:s.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Mk(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(p){const m=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(m),_online:m}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(rn.fromBase64String(e))}catch(n){throw new he(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new er(rn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:er._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(nc(e,er._jsonSchema))return er.fromBase64String(e.bytes)}}er._jsonSchemaVersion="firestore/bytes/1.0",er._jsonSchema={type:It("string",er._jsonSchemaVersion),bytes:It("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zr._jsonSchemaVersion}}static fromJSON(e){if(nc(e,zr._jsonSchema))return new zr(e.latitude,e.longitude)}}zr._jsonSchemaVersion="firestore/geoPoint/1.0",zr._jsonSchema={type:It("string",zr._jsonSchemaVersion),latitude:It("number"),longitude:It("number")};/**
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
 */class Br{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Br._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(nc(e,Br._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Br(e.vectorValues);throw new he(te.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Br._jsonSchemaVersion="firestore/vectorValue/1.0",Br._jsonSchema={type:It("string",Br._jsonSchemaVersion),vectorValues:It("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=/^__.*__$/;class Bk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Is(e,this.data,this.fieldMask,n,this.fieldTransforms):new rc(e,this.data,n,this.fieldTransforms)}}class hS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Is(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ac:t})}}class Ty{constructor(e,n,s,o,u,h){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ty({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const n=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){var o;const n=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Of(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(fS(this.Ac)&&zk.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class $k{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||nd(e)}Cc(e,n,s,o=!1){return new Ty({Ac:e,methodName:n,Dc:s,path:nn.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ud(t){const e=t._freezeSettings(),n=nd(t._databaseId);return new $k(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dS(t,e,n,s,o,u={}){const h=t.Cc(u.merge||u.mergeFields?2:0,e,n,o);wy("Data must be an object, but it was:",h,s);const p=pS(s,h);let m,g;if(u.merge)m=new Vn(h.fieldMask),g=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const w=bg(e,S,n);if(!h.contains(w))throw new he(te.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);gS(E,w)||E.push(w)}m=new Vn(E),g=h.fieldTransforms.filter(S=>m.covers(S.field))}else m=null,g=h.fieldTransforms;return new Bk(new An(p),m,g)}class cd extends ld{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cd}}class by extends ld{_toFieldTransform(e){return new VO(e.path,new Hu)}isEqual(e){return e instanceof by}}function Hk(t,e,n,s){const o=t.Cc(1,e,n);wy("Data must be an object, but it was:",o,s);const u=[],h=An.empty();Rs(s,(m,g)=>{const E=Sy(e,m,n);g=Ct(g);const S=o.yc(E);if(g instanceof cd)u.push(E);else{const w=oc(g,S);w!=null&&(u.push(E),h.set(E,w))}});const p=new Vn(u);return new hS(h,p,o.fieldTransforms)}function Fk(t,e,n,s,o,u){const h=t.Cc(1,e,n),p=[bg(e,s,n)],m=[o];if(u.length%2!=0)throw new he(te.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<u.length;w+=2)p.push(bg(e,u[w])),m.push(u[w+1]);const g=[],E=An.empty();for(let w=p.length-1;w>=0;--w)if(!gS(g,p[w])){const D=p[w];let P=m[w];P=Ct(P);const F=h.yc(D);if(P instanceof cd)g.push(D);else{const V=oc(P,F);V!=null&&(g.push(D),E.set(D,V))}}const S=new Vn(g);return new hS(E,S,h.fieldTransforms)}function Gk(t,e,n,s=!1){return oc(n,t.Cc(s?4:3,e))}function oc(t,e){if(mS(t=Ct(t)))return wy("Unsupported field value:",e,t),pS(t,e);if(t instanceof ld)return function(s,o){if(!fS(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let m=oc(p,o.wc(h));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),h++}return{arrayValue:{values:u}}}(t,e)}return function(s,o){if((s=Ct(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return kO(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=nt.fromDate(s);return{timestampValue:Rf(o.serializer,u)}}if(s instanceof nt){const u=new nt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Rf(o.serializer,u)}}if(s instanceof zr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof er)return{bytesValue:Mw(o.serializer,s._byteString)};if(s instanceof gt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:ry(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Br)return function(h,p){return{mapValue:{fields:{[lw]:{stringValue:uw},[Sf]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return ey(p.serializer,g)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${Gf(s)}`)}(t,e)}function pS(t,e){const n={};return nw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(t,(s,o)=>{const u=oc(o,e.mc(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function mS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof zr||t instanceof er||t instanceof gt||t instanceof ld||t instanceof Br)}function wy(t,e,n){if(!mS(n)||!ew(n)){const s=Gf(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function bg(t,e,n){if((e=Ct(e))instanceof od)return e._internalPath;if(typeof e=="string")return Sy(t,e);throw Of("Field path arguments must be of type string or ",t,!1,void 0,n)}const Yk=new RegExp("[~\\*/\\[\\]]");function Sy(t,e,n){if(e.search(Yk)>=0)throw Of(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new od(...e.split("."))._internalPath}catch{throw Of(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Of(t,e,n,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||h)&&(m+=" (found",u&&(m+=` in field ${s}`),h&&(m+=` in document ${o}`),m+=")"),new he(te.INVALID_ARGUMENT,p+t+m)}function gS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Qk extends yS{data(){return super.data()}}function hd(t,e){return typeof e=="string"?Sy(t,e):e instanceof od?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new he(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ay{}class vS extends Ay{}function Ia(t,e,...n){let s=[];e instanceof Ay&&s.push(e),s=s.concat(n),function(u){const h=u.filter(m=>m instanceof xy).length,p=u.filter(m=>m instanceof fd).length;if(h>1||h>0&&p>0)throw new he(te.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)t=o._apply(t);return t}class fd extends vS{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new fd(e,n,s)}_apply(e){const n=this._parse(e);return ES(e._query,n),new Cs(e.firestore,e.converter,hg(e._query,n))}_parse(e){const n=ud(e.firestore);return function(u,h,p,m,g,E,S){let w;if(g.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new he(te.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){QT(S,E);const P=[];for(const F of S)P.push(YT(m,u,F));w={arrayValue:{values:P}}}else w=YT(m,u,S)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||QT(S,E),w=Gk(p,h,S,E==="in"||E==="not-in");return Rt.create(g,E,w)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ca(t,e,n){const s=e,o=hd("where",t);return fd._create(o,s,n)}class xy extends Ay{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xy(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:gr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(o,u){let h=o;const p=u.getFlattenedFilters();for(const m of p)ES(h,m),h=hg(h,m)}(e._query,n),new Cs(e.firestore,e.converter,hg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ry extends vS{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ry(e,n)}_apply(e){const n=function(o,u,h){if(o.startAt!==null)throw new he(te.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new he(te.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $u(u,h)}(e._query,this._field,this._direction);return new Cs(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new al(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,n))}}function Iy(t,e="asc"){const n=e,s=hd("orderBy",t);return Ry._create(s,n)}function YT(t,e,n){if(typeof(n=Ct(n))=="string"){if(n==="")throw new he(te.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yw(e)&&n.indexOf("/")!==-1)throw new he(te.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(it.fromString(n));if(!_e.isDocumentKey(s))throw new he(te.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return uT(t,new _e(s))}if(n instanceof gt)return uT(t,n._key);throw new he(te.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gf(n)}.`)}function QT(t,e){if(!Array.isArray(t)||t.length===0)throw new he(te.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ES(t,e){const n=function(o,u){for(const h of o)for(const p of h.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null}(t.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new he(te.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(te.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Kk{convertValue(e,n="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Rs(e,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(e){var s,o,u;const n=(u=(o=(s=e.fields)==null?void 0:s[Sf].arrayValue)==null?void 0:o.values)==null?void 0:u.map(h=>Et(h.doubleValue));return new Br(n)}convertGeoPoint(e){return new zr(Et(e.latitude),Et(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Kf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(qu(e));default:return null}}convertTimestamp(e){const n=vs(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=it.fromString(e);Ye(qw(s),9688,{name:e});const o=new zu(s.get(1),s.get(3)),u=new _e(s.popFirst(5));return o.isEqual(n)||Ri(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t,e,n){let s;return s=t?t.toFirestore(e):e,s}class Au{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ya extends yS{constructor(e,n,s,o,u,h){super(e,n,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(hd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(te.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ya._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ya._jsonSchemaVersion="firestore/documentSnapshot/1.0",ya._jsonSchema={type:It("string",ya._jsonSchemaVersion),bundleSource:It("string","DocumentSnapshot"),bundleName:It("string"),bundle:It("string")};class lf extends ya{data(e={}){return super.data(e)}}class _a{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Au(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new lf(this._firestore,this._userDataWriter,s.key,s,new Au(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new he(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(p=>{const m=new lf(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Au(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const m=new lf(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Au(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,E=-1;return p.type!==0&&(g=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),E=h.indexOf(p.doc.key)),{type:Xk(p.type),doc:m,oldIndex:g,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(te.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_a._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Xk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t){t=Ln(t,gt);const e=Ln(t.firestore,Ss);return Lk(ad(e),t._key).then(n=>wS(e,t,n))}_a._jsonSchemaVersion="firestore/querySnapshot/1.0",_a._jsonSchema={type:It("string",_a._jsonSchemaVersion),bundleSource:It("string","QuerySnapshot"),bundleName:It("string"),bundle:It("string")};class Dy extends Kk{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function bS(t){t=Ln(t,Cs);const e=Ln(t.firestore,Ss),n=ad(e),s=new Dy(e);return _S(t._query),jk(n,t._query).then(o=>new _a(e,s,t,o))}function Wk(t,e,n){t=Ln(t,gt);const s=Ln(t.firestore,Ss),o=TS(t.converter,e);return Ny(s,[dS(ud(s),"setDoc",t._key,o,t.converter!==null,n).toMutation(t._key,fr.none())])}function va(t,e,n,...s){t=Ln(t,gt);const o=Ln(t.firestore,Ss),u=ud(o);let h;return h=typeof(e=Ct(e))=="string"||e instanceof od?Fk(u,"updateDoc",t._key,e,n,s):Hk(u,"updateDoc",t._key,e),Ny(o,[h.toMutation(t._key,fr.exists(!0))])}function Zk(t,e){const n=Ln(t.firestore,Ss),s=dr(t),o=TS(t.converter,e);return Ny(n,[dS(ud(t.firestore),"addDoc",s._key,o,t.converter!==null,{}).toMutation(s._key,fr.exists(!1))]).then(()=>s)}function dd(t,...e){var m,g,E;t=Ct(t);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||GT(e[s])||(n=e[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(GT(e[s])){const S=e[s];e[s]=(m=S.next)==null?void 0:m.bind(S),e[s+1]=(g=S.error)==null?void 0:g.bind(S),e[s+2]=(E=S.complete)==null?void 0:E.bind(S)}let u,h,p;if(t instanceof gt)h=Ln(t.firestore,Ss),p=Xf(t._key.path),u={next:S=>{e[s]&&e[s](wS(h,t,S))},error:e[s+1],complete:e[s+2]};else{const S=Ln(t,Cs);h=Ln(S.firestore,Ss),p=S._query;const w=new Dy(h);u={next:D=>{e[s]&&e[s](new _a(h,w,S,D))},error:e[s+1],complete:e[s+2]},_S(t._query)}return function(w,D,P,F){const V=new Ey(F),z=new yy(D,V,P);return w.asyncQueue.enqueueAndForget(async()=>py(await Nf(w),z)),()=>{V.Nu(),w.asyncQueue.enqueueAndForget(async()=>my(await Nf(w),z))}}(ad(h),p,o,u)}function Ny(t,e){return function(s,o){const u=new bi;return s.asyncQueue.enqueueAndForget(async()=>Ak(await Vk(s),o,u)),u.promise}(ad(t),e)}function wS(t,e,n){const s=n.docs.get(e._key),o=new Dy(t);return new ya(t,o,e._key,s,new Au(n.hasPendingWrites,n.fromCache),e.converter)}function KT(){return new by("serverTimestamp")}(function(e,n=!0){(function(o){rl=o})(tl),Bo(new wa("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new Ss(new FN(s.getProvider("auth-internal")),new QN(h,s.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new he(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zu(g.options.projectId,E)}(h,o),h);return u={useFetchStreams:n,...u},p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),ms(XE,WE,e),ms(XE,WE,"esm2020")})();const Jk={apiKey:"AIzaSyB5aFUQbtG1rShW-1O88aZjCG7uErNxmgQ",authDomain:"pdms-test-8a5cc.firebaseapp.com",projectId:"pdms-test-8a5cc",storageBucket:"pdms-test-8a5cc.firebasestorage.app",messagingSenderId:"631678861167",appId:"1:631678861167:web:5cd775b77e53535700329a"},Oy=ob(Jk);cS(Oy);const Vt=cS(Oy),Da=UN(Oy);function eM({onLoginSuccess:t}){const[e,n]=Y.useState(""),[s,o]=Y.useState(""),u=Qu(),h=()=>{u("/signup")},p=()=>{w2(Da,e,s).then(()=>{t(),u("/dashboard")}).catch(m=>{alert("로그인 실패: "+m.message)})};return _.jsxs(tM,{children:[_.jsxs(nM,{children:[_.jsxs(rM,{children:[_.jsx(iM,{children:"PDMS"}),_.jsx(sM,{children:"Pushcomz Design Management System"})]}),_.jsxs(aM,{children:[_.jsx(oM,{type:"text",value:e,onChange:m=>n(m.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(lM,{type:"password",value:s,onChange:m=>o(m.target.value),placeholder:"비밀번호를 입력해주세요."})]}),_.jsx(uM,{onClick:p,children:"로그인"}),_.jsxs(hM,{children:[_.jsx(fM,{children:"계정이 없습니까?"}),_.jsx(dM,{onClick:h,children:"등록하기"})]})]}),_.jsx(cM,{children:"© Pushcomz Corp."})]})}const tM=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,nM=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,rM=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,iM=H.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,sM=H.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,aM=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
`,oM=H.input`
  width: 460px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,lM=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,uM=H.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`,cM=H.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`,hM=H.div`
  
`,fM=H.span`
  margin-right: 10px;
  font-size: 13px;
`,dM=H.button`
  font-size: 13px;
  color: ${({theme:t})=>t.colors.navy};
`,SS="./assets/logo-NEcdCz8m.svg";function pM(){const[t,e]=Y.useState(""),[n,s]=Y.useState(null),o=Qu();Y.useEffect(()=>{const p=$f(Da,async m=>{if(m){m.displayName&&e(m.displayName);const g=await Cy(dr(Vt,"users",m.uid));g.exists()?s(g.data().role):s(null)}else e(""),s(null)});return()=>p()},[]);const u=()=>{I2(Da).then(()=>{o("/")}).catch(p=>{alert("로그아웃 중 오류가 발생했습니다: "+p.message)})},h=p=>{switch(p){case 1:return"요청자";case 2:return"디자이너";case 3:return"담당자";default:return"역할 없음"}};return _.jsxs(mM,{children:[_.jsx(gM,{src:SS}),_.jsxs(yM,{children:[_.jsxs(_M,{children:[_.jsx(vM,{children:t}),"님(",h(n),") 환영합니다."]}),_.jsx(EM,{onClick:u,children:"로그아웃"}),_.jsx(TM,{})]})]})}const mM=H.header`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 12px 48px;
  font-family: 'Pretendard';
  background-color: ${({theme:t})=>t.colors.black};
`,gM=H.img``,yM=H.div``,_M=H.span`
  margin-right: 24px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,vM=H.span`
  font-weight: 700;
`,EM=H.button`
  padding: 5px 10px;
  border: 1px solid ${({theme:t})=>t.colors.white01};
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,TM=H.span`
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,ky="./assets/url-icon-DJKri2bW.svg";function bM({item:t,index:e,onReviewComplete:n,onCancel:s,onEditClick:o,onDetailClick:u}){const h=m=>{if(!m)return"-";if(m.toDate){const g=m.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return m},p=m=>{m.stopPropagation(),u(t)};return _.jsxs(wM,{isCanceled:t.status==="취소",children:[_.jsx(lr,{children:e}),_.jsx(lr,{children:_.jsx(CM,{onClick:p,$hasUpdate:!!t.updated_at,children:t.design_request_id})}),_.jsx(lr,{children:h(t.request_date)}),_.jsx(SM,{children:h(t.completion_dt)}),_.jsx(AM,{children:h(t.open_dt)}),_.jsx(lr,{children:t.task_form}),_.jsx(xM,{children:t.task_type}),_.jsx(RM,{children:_.jsxs(DM,{children:[t.emergency?_.jsx(AS,{children:"긴급"}):"",_.jsx(NM,{onClick:p,children:t.requirement})]})}),_.jsx(lr,{children:_.jsx(XT,{href:t.url,target:"_blank"})}),_.jsx(IM,{children:_.jsx(OM,{onClick:p,children:t.note||""})}),_.jsx(lr,{children:_.jsx(kM,{status:t.status,children:t.status==="검수요청"?"진행중":t.status==="검수중"?"검수요청":t.status||"대기"})}),_.jsx(lr,{children:t.assigned_designer||"미배정"}),_.jsx(lr,{children:t.manager_review_status==="검수완료"&&t.result_url?_.jsx(XT,{href:t.result_url,target:"_blank"}):""}),_.jsx(lr,{children:t.manager_review_status==="검수완료"?t.status!=="완료"?_.jsx(xS,{onClick:()=>n(t.id),children:"검수완료"}):_.jsx(MM,{children:"검수완료"}):""}),_.jsx(lr,{children:_.jsx(RS,{onClick:()=>o(t.id),disabled:t.status==="취소",children:"수정"})}),_.jsx(lr,{children:_.jsx(IS,{onClick:()=>s(t.id),children:"취소"})})]})}const wM=H.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
    
  ${({isCanceled:t,theme:e})=>t&&`
      ${AS} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${xS}, ${RS}, ${IS} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
        border-color: ${e.colors.gray06};
        cursor: default;
        pointer-events: none;
      }
    `}
  &:hover {
    td {
      background-color: ${({theme:t})=>t.colors.gray04}
    }
  }

  & td {
    font-family: 'Pretendard';
    font-size: 14px;
    font-weight: 500;
  }
`,lr=H.td`
  padding: 15px 0;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(11) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,SM=H.td`
  color: ${({theme:t})=>t.colors.red};
`,AM=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,xM=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,RM=H.td`
  line-height: 15px;
  text-align: left;
`,IM=H.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,CM=H.span`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -5px;
    display: ${({$hasUpdate:t})=>t?"block":"none"};
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({theme:t})=>t.colors.red};
  }

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`,DM=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,NM=H.span`
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
`,AS=H.span`
  margin-right: 8px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,XT=H.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${ky}) no-repeat center / contain;
`,OM=H.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 1.4;
  overflow-wrap: anywhere;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: normal;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`,kM=H.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.blue02;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.lightpupple;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,xS=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: green;
`,MM=H.span`
  color: green;
  font-weight: bold;
`,RS=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: ${({theme:t})=>t.colors.black};
`,IS=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: ${({theme:t})=>t.colors.black};
`;function PM({data:t,onReviewComplete:e,onCancel:n,onEditClick:s,onDetailClick:o}){return _.jsx(VM,{children:_.jsxs(LM,{children:[_.jsx(jM,{children:"요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"220px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(cn,{children:"번호"}),_.jsx(cn,{children:"문서번호"}),_.jsx(cn,{children:"요청일"}),_.jsxs(cn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(cn,{children:"오픈일"}),_.jsx(cn,{children:"업무형태"}),_.jsx(cn,{children:"업무타입"}),_.jsx(cn,{children:"작업항목"}),_.jsx(cn,{children:"요청서 URL"}),_.jsx(cn,{children:"메모"}),_.jsx(cn,{children:"진행상태"}),_.jsx(cn,{children:"디자이너"}),_.jsx(cn,{children:"산출물 URL"}),_.jsx(cn,{children:"검수"}),_.jsx(cn,{children:"수정"}),_.jsx(cn,{children:"취소"})]})}),_.jsx("tbody",{children:t.length>0?t.map((u,h)=>_.jsx(bM,{index:h+1,item:u,onReviewComplete:e,onCancel:n,onEditClick:s,onDetailClick:o},u.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:16,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const VM=H.div`
  padding: 0 48px;
`,LM=H.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,jM=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,cn=H.th`
  line-height: 16px;
  padding: 13px 0;
  border-bottom: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.gray08};

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(11) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }

  &:nth-of-type(12), &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    border-right: 1px solid ${({theme:t})=>t.colors.pink02}
  }

  &:nth-of-type(12), &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    background-color: ${({theme:t})=>t.colors.pink01};
  }
`;function My(){const t=new Date,e=t.getFullYear(),n=t.getMonth()+1,s=t.getDate();return _.jsx(UM,{children:_.jsxs(qM,{children:[e,"년 ",n,"월 ",s,"일 디자인 편성 요청 스케줄"]})})}const UM=H.div`
  padding: 30px 48px;
  background-color: ${({theme:t})=>t.colors.gray08};
`,qM=H.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`,CS="./assets/selectbox-arrow-BwC8UGU0.svg";function zM({onApplyStatus:t}){const[e,n]=Y.useState("진행 상태 선택");return _.jsxs(BM,{children:[_.jsxs(jm,{"aria-label":"요청일 선택",children:[_.jsx("option",{children:"요청일 선택"}),_.jsx("option",{children:"2025-08-01"}),_.jsx("option",{children:"2025-08-02"}),_.jsx("option",{children:"2025-08-03"})]}),_.jsxs(jm,{"aria-label":"작업 담당자 선택",children:[_.jsx("option",{children:"작업 담당자 선택"}),_.jsx("option",{children:"이영철"}),_.jsx("option",{children:"홍길동"}),_.jsx("option",{children:"김디자이너"})]}),_.jsxs(jm,{value:e,onChange:s=>n(s.target.value),children:[_.jsx("option",{children:"진행 상태 선택"}),_.jsx("option",{value:"대기",children:"대기"}),_.jsx("option",{value:"진행중",children:"진행중"}),_.jsx("option",{value:"검수요청",children:"검수요청"}),_.jsx("option",{value:"완료",children:"완료"}),_.jsx("option",{value:"취소",children:"취소"})]}),_.jsx($M,{type:"button",onClick:()=>t(e),children:"필터 적용"})]})}const BM=H.div`
  
`,jm=H.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 200px;
  margin-right: 8px;
  padding: 13.5px 12px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:t})=>t.colors.black};
  background-color: ${({theme:t})=>t.colors.white01};
  background-image: url(${CS}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }
`,$M=H.button`
  padding: 11.5px 10px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01}
`,HM="./assets/search-icon-g0O6fOpZ.svg";function FM(){return _.jsxs(GM,{children:[_.jsx(YM,{placeholder:"검색어를 입력해 주세요."}),_.jsx(QM,{type:"button"})]})}const GM=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 11px 14.5px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 8px;
`,YM=H.input`
  width: 458px;
  margin-right: 12px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,QM=H.button`
  width: 24px;
  height: 24px;
  background-image: url(${HM});
`;function KM({onApplyStatus:t}){return _.jsxs(XM,{children:[_.jsx(zM,{onApplyStatus:t}),_.jsx(FM,{})]})}const XM=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 24px 48px 30px;
`;function WM({setIsDrawerOpen:t,setEditData:e,setDetailData:n}){const[s,o]=Y.useState(""),[u,h]=Y.useState([]),[p,m]=Y.useState("진행 상태 선택");Y.useEffect(()=>{const V=$f(Da,z=>{z&&z.displayName&&o(z.displayName)});return()=>V()},[]),Y.useEffect(()=>{if(!s)return;const V=Ia(wi(Vt,"design_request"),Ca("requester","==",s),Iy("design_request_id","desc")),z=dd(V,j=>{const X=j.docs.map(ae=>({id:ae.id,...ae.data()}));h(X)});return()=>z()},[s]);const g=V=>m(V),E=V=>V==="검수요청"?"진행중":V==="검수중"?"검수요청":V,S=Y.useMemo(()=>u.map(V=>({...V,displayStatus:E(V.status)})).filter(V=>!p||p==="진행 상태 선택"?!0:V.displayStatus===p),[u,p]),w=async V=>{await va(dr(Vt,"design_request",V),{status:"완료",requester_review_status:"검수완료"}),h(z=>z.map(j=>j.id===V?{...j,status:"완료",requester_review_status:"검수완료"}:j)),alert("완료 처리되었습니다.")},D=async V=>{const z=dr(Vt,"design_request",V);await va(z,{requester_edit_state:!0});const j=await Cy(z);if(j.exists()){const X={id:j.id,...j.data()};e(X),t(!0)}},P=V=>{n(V),t(!0)},F=async V=>{await va(dr(Vt,"design_request",V),{status:"취소"}),h(z=>z.map(j=>j.id===V?{...j,status:"취소"}:j))};return _.jsxs(_.Fragment,{children:[_.jsx(My,{}),_.jsx(KM,{onApplyStatus:g}),_.jsx(PM,{data:S,onReviewComplete:w,onCancel:F,onEditClick:D,onDetailClick:P})]})}function ZM({index:t,item:e,onChange:n,onSave:s,onDetailClick:o}){const u=p=>{if(!p)return"-";if(p.toDate){const m=p.toDate();return`${m.getMonth()+1}/${m.getDate()}`}return p},h=p=>{p.stopPropagation(),o(e)};return _.jsxs(JM,{isCanceled:e.status==="취소",children:[_.jsx(gi,{children:t}),_.jsx(gi,{children:_.jsx(sP,{onClick:h,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(gi,{children:u(e.request_date)}),_.jsx(gi,{children:e.requester}),_.jsx(eP,{children:u(e.completion_dt)}),_.jsx(tP,{children:u(e.open_dt)}),_.jsx(gi,{children:e.task_form}),_.jsx(nP,{children:e.task_type}),_.jsx(rP,{children:_.jsxs(aP,{children:[e.emergency?_.jsx(DS,{children:"긴급"}):"",_.jsx(oP,{onClick:h,children:e.requirement})]})}),_.jsx(gi,{children:_.jsx(lP,{href:e.url,target:"_blank"})}),_.jsx(iP,{children:_.jsx(uP,{onClick:h,children:e.note||""})}),_.jsx(WT,{children:_.jsx(ZT,{type:"date",onChange:p=>n(e.id,"start_dt",p.target.value),disabled:e.status==="취소"})}),_.jsx(WT,{children:_.jsx(ZT,{type:"date",onChange:p=>n(e.id,"end_dt",p.target.value),disabled:e.status==="취소"})}),_.jsx(gi,{children:_.jsx(cP,{type:"text",placeholder:"산출물 URL을 입력해주세요.",onChange:p=>n(e.id,"result_url",p.target.value),disabled:e.status==="취소"})}),_.jsx(gi,{children:_.jsxs("select",{onChange:p=>n(e.id,"status",p.target.value),disabled:e.status==="취소",children:[_.jsx("option",{value:"대기중",children:"대기"}),_.jsx("option",{value:"진행중",children:"진행중"}),_.jsx("option",{value:"검수요청",children:"검수요청"})]})}),_.jsx(gi,{children:_.jsx(NS,{onClick:()=>s(e.id),disabled:e.status==="취소",children:"저장"})})]})}const JM=H.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${DS} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${NS} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
        border-color: ${e.colors.gray06};
        cursor: default;
        pointer-events: none;
      }
    `}
  & td {
    font-family: 'Pretendard';
    font-size: 14px;
    font-weight: 500;
  }

  &:hover {
    td, input, select {
      background-color: ${({theme:t})=>t.colors.gray04}
    }
  }
`,gi=H.td`
  padding: 11px 0;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(11) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,eP=H.td`
  color: ${({theme:t})=>t.colors.red};
`,tP=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,nP=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,rP=H.td`
  line-height: 15px;
  text-align: left;
`,iP=H.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,WT=H.td`
  padding: 0 6px;
`,sP=H.span`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -5px;
    display: ${({$hasUpdate:t})=>t?"block":"none"};
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({theme:t})=>t.colors.red};
  }

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`,aP=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,DS=H.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,oP=H.span`
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
`,lP=H.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${ky}) no-repeat center / contain;
`,uP=H.span`
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
`,ZT=H.input.attrs({type:"date"})`
  width: 100%;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,cP=H.input`
  width: 100%;
  padding: 0 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,NS=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`;function hP({requests:t,onChange:e,onSave:n,onDetailClick:s}){return _.jsx(fP,{children:_.jsxs(dP,{children:[_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(hn,{children:"번호"}),_.jsx(hn,{children:"문서번호"}),_.jsx(hn,{children:"요청일"}),_.jsx(hn,{children:"요청자"}),_.jsxs(hn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(hn,{children:"오픈일"}),_.jsx(hn,{children:"업무형태"}),_.jsx(hn,{children:"업무타입"}),_.jsx(hn,{children:"작업항목"}),_.jsx(hn,{children:"요청서 URL"}),_.jsx(hn,{children:"메모"}),_.jsx(hn,{children:"디자인 시작일"}),_.jsx(hn,{children:"디자인 종료일"}),_.jsx(hn,{children:"산출물 링크"}),_.jsx(hn,{children:"진행상태"}),_.jsx(hn,{children:"저장"})]})}),_.jsx("tbody",{children:t.length>0?t.map((o,u)=>_.jsx(ZM,{index:u+1,item:o,onChange:e,onSave:n,onDetailClick:s},o.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:16,style:{textAlign:"center"},children:"배정된 요청이 없습니다."})})})]})})}const fP=H.div`
  padding: 0 48px;
`,dP=H.table`
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
`,hn=H.th`
  line-height: 16px;
  padding: 13px 0;
  border-bottom: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.gray08};

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(11) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }

  &:nth-of-type(12), &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15) {
    border-right: 1px solid ${({theme:t})=>t.colors.pink02}
  }

  &:nth-of-type(12), &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    background-color: ${({theme:t})=>t.colors.pink01};
  }
`;function pP({setIsDrawerOpen:t,setDetailData:e}){const[n,s]=Y.useState([]),[o,u]=Y.useState(""),[h,p]=Y.useState({});Y.useEffect(()=>{const w=$f(Da,D=>{D&&D.displayName&&u(D.displayName)});return()=>w()},[]),Y.useEffect(()=>{if(!o)return;const w=Ia(wi(Vt,"design_request"),Ca("assigned_designer","==",o),Iy("design_request_id","desc")),D=dd(w,P=>{const F=P.docs.map(V=>({id:V.id,...V.data()}));s(F)});return()=>D()},[o]);const m=(w,D,P)=>{p(F=>({...F,[w]:{...F[w],[D]:P}}))},g=w=>w?nt.fromDate(new Date(w)):null,E=async w=>{const D=dr(Vt,"design_request",w),P=h[w];if(!P){alert("변경된 내용이 없습니다.");return}await va(D,{designer_start_date:g(P.start_dt),designer_end_date:g(P.end_dt),result_url:P.result_url||"",status:P.status}),alert("저장되었습니다.")},S=w=>{e(w),t(!0)};return _.jsxs(mP,{children:[_.jsx(My,{}),_.jsx(gP,{children:"디자이너 화면"}),_.jsx(hP,{requests:n,formData:h,onChange:m,onSave:E,onDetailClick:S})]})}const mP=H.div``,gP=H.h2`
  margin-bottom: 20px;
  padding: 0 48px;
`;function yP({index:t,item:e,designerList:n,selectedDesigner:s,onDesignerSelect:o,onAssignDesigner:u,onSendToRequester:h,onDetailClick:p}){const m=E=>{if(!E)return"-";if(E.toDate){const S=E.toDate();return`${S.getMonth()+1}/${S.getDate()}`}return E},g=E=>{E.stopPropagation(),p(e)};return _.jsxs(_P,{isCanceled:e.status==="취소",children:[_.jsx(Zn,{children:t}),_.jsx(Zn,{children:_.jsx(SP,{onClick:g,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(Zn,{children:m(e.request_date)}),_.jsx(Zn,{children:e.requester}),_.jsx(vP,{children:m(e.completion_dt)}),_.jsx(EP,{children:m(e.open_dt)}),_.jsx(Zn,{children:e.task_form}),_.jsx(TP,{children:e.task_type}),_.jsx(bP,{children:_.jsxs(AP,{children:[e.emergency?_.jsx(OS,{children:"긴급"}):"",_.jsx(xP,{onClick:g,children:e.requirement})]})}),_.jsx(Zn,{children:_.jsx(JT,{href:e.url,target:"_blank"})}),_.jsx(wP,{children:_.jsx(RP,{onClick:g,children:e.note||""})}),_.jsx(Zn,{children:_.jsx(IP,{status:e.status,children:e.status==="검수요청"?"검수중":e.status||"대기"})}),_.jsx(Zn,{children:e.result_url?_.jsx(JT,{href:e.result_url,target:"_blank"}):""}),_.jsx(Zn,{children:m(e.designer_start_date)}),_.jsx(Zn,{children:m(e.designer_end_date)}),_.jsxs(Zn,{children:[_.jsxs(CP,{value:s,onChange:E=>o(E.target.value),disabled:e.status==="취소",children:[_.jsx("option",{value:"",children:"디자이너 선택"}),n.map(E=>_.jsx("option",{value:E.name,children:E.name},E.id))]}),_.jsx(kS,{onClick:u,disabled:e.status==="취소",children:"배정"})]}),_.jsx(Zn,{children:e.status==="검수요청"&&e.manager_review_status!=="검수완료"?_.jsx(MS,{onClick:h,children:"검수완료"}):e.manager_review_status==="검수완료"?_.jsx(DP,{children:"검수완료"}):""})]})}const _P=H.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${OS} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${MS}, ${kS} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
        border-color: ${e.colors.gray06};
        cursor: default;
        pointer-events: none;
      }
    `}
  & td {
    font-family: 'Pretendard';
    font-size: 14px;
    font-weight: 500;
  }

  &:hover {
    td {
      background-color: ${({theme:t})=>t.colors.gray04}
    }
  }
`,Zn=H.td`
  padding: 11px 0;
 
  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,vP=H.td`
  color: ${({theme:t})=>t.colors.red};
`,EP=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,TP=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,bP=H.td`
  line-height: 15px;
  text-align: left;
`,wP=H.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,SP=H.span`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -5px;
    display: ${({$hasUpdate:t})=>t?"block":"none"};
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({theme:t})=>t.colors.red};
  }

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`,AP=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,OS=H.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,xP=H.span`
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
`,JT=H.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${ky}) no-repeat center / contain;
`,RP=H.span`
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
`,IP=H.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.red;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.pink03;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,kS=H.button`
  margin: 6px 0 0 10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,CP=H.select`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,MS=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,DP=H.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`;function NP({data:t,designerList:e,selectedDesigners:n,designerSelect:s,assignDesigner:o,sendToRequester:u,onDetailClick:h}){return _.jsx(OP,{children:_.jsxs(kP,{children:[_.jsx(MP,{children:"매니저 요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"180px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(en,{children:"번호"}),_.jsx(en,{children:"문서번호"}),_.jsx(en,{children:"요청일"}),_.jsx(en,{children:"요청자"}),_.jsxs(en,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(en,{children:"오픈일"}),_.jsx(en,{children:"업무형태"}),_.jsx(en,{children:"업무타입"}),_.jsx(en,{children:"작업항목"}),_.jsx(en,{children:"요청서 URL"}),_.jsx(en,{children:"메모"}),_.jsx(en,{children:"진행상태"}),_.jsx(en,{children:"산출물 URL"}),_.jsxs(en,{children:["디자인",_.jsx("br",{}),"시작일"]}),_.jsxs(en,{children:["디자인",_.jsx("br",{}),"종료일"]}),_.jsx(en,{children:"배정"}),_.jsx(en,{children:"검수"})]})}),_.jsx("tbody",{children:t.length>0?t.map((p,m)=>_.jsx(yP,{index:m+1,item:p,designerList:e,selectedDesigner:n[p.id]||"",onDesignerSelect:g=>s(p.id,g),onAssignDesigner:()=>o(p.id),onSendToRequester:()=>u(p.id),onDetailClick:h},p.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const OP=H.div`
  padding: 0 48px;
`,kP=H.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,MP=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,en=H.th`
  line-height: 16px;
  padding: 13px 0;
  border-bottom: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.gray08};

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    border-right: 1px solid ${({theme:t})=>t.colors.pink02}
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17) {
    background-color: ${({theme:t})=>t.colors.pink01};
  }
`;function PP({setIsDrawerOpen:t,setDetailData:e}){const[n,s]=Y.useState([]),[o,u]=Y.useState([]),[h,p]=Y.useState({});Y.useEffect(()=>{const w=Ia(wi(Vt,"design_request"),Iy("design_request_id","desc")),D=dd(w,P=>{const F=P.docs.map(V=>({id:V.id,...V.data()}));s(F)});return()=>D()},[]),Y.useEffect(()=>{(async()=>{const D=Ia(wi(Vt,"users"),Ca("role","==",2)),F=(await bS(D)).docs.map(V=>({id:V.id,...V.data()}));u(F)})()},[]);const m=(w,D)=>{p(P=>({...P,[w]:D}))},g=async w=>{const D=h[w];if(!D){alert("디자이너를 선택하세요.");return}const P=dr(Vt,"design_request",w);await va(P,{assigned_designer:D}),alert("디자이너가 배정되었습니다!"),s(F=>F.map(V=>V.id===w?{...V,assigned_designer:D}:V))},E=async w=>{await va(dr(Vt,"design_request",w),{manager_review_status:"검수완료",status:"검수중"}),s(D=>D.map(P=>P.id===w?{...P,manager_review_status:"검수완료",status:"검수중"}:P)),alert("요청자에게 전달되었습니다.")},S=w=>{e(w),t(!0)};return _.jsxs(VP,{children:[_.jsx(My,{}),_.jsx(LP,{children:"매니저 요청리스트"}),_.jsx(NP,{data:n,designerList:o,selectedDesigners:h,designerSelect:m,assignDesigner:g,sendToRequester:E,onDetailClick:S})]})}const VP=H.div``,LP=H.h2`
  margin-bottom: 20px;
  padding: 0 48px;
`;function jP({userRole:t,setIsDrawerOpen:e,setEditData:n,setDetailData:s}){const o=()=>{if(t===1)return _.jsx(WM,{setIsDrawerOpen:e,setEditData:n,setDetailData:s});if(t===2)return _.jsx(pP,{setIsDrawerOpen:e,setDetailData:s});if(t===3)return _.jsx(PP,{setIsDrawerOpen:e,setDetailData:s})};return _.jsx(UP,{children:o()})}const UP=H.main``,qP="./assets/aside-logo-DoEwMgfJ.svg",zP="./assets/myrequest-icon-DhmqrZY6.svg";function BP({item:t}){return _.jsxs($P,{status:t.status,children:[_.jsx(HP,{children:t.status}),_.jsx(FP,{status:t.status,children:t.count})]})}const $P=H.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20.5px 44px 20.5px 28px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-family: 'Pretendard';
  color: ${({theme:t})=>t.colors.black};

  background-color: ${({status:t,theme:e})=>{switch(t){case"대기중":return e.colors.beige01;case"작업중":return e.colors.lightpupple;case"완료":return e.colors.gray04;default:return"#f9f9f9"}}};
`,HP=H.span`
  font-size: 16px;
  font-weight: 500;
`,FP=H.span`
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

    background-color: ${({status:t,theme:e})=>{switch(t){case"대기중":return e.colors.orange;case"작업중":return e.colors.blue01;case"완료":return e.colors.gray02;default:return e.colors.gray03}}};
  }
`;function GP({requests:t,role:e,userName:n,onRequestButtonClick:s}){const o=[{status:"대기중",count:t.filter(h=>h.status==="대기").length},{status:"작업중",count:t.filter(h=>h.status==="진행중").length},{status:"완료",count:t.filter(h=>h.status==="완료").length}],u=(h,p)=>{switch(h){case 1:return`${p}님의 요청`;case 2:return`${p}님의 작업 현황`;case 3:return"전체 요청 현황";default:return"요청 현황"}};return _.jsxs(YP,{children:[_.jsxs(QP,{children:[_.jsx(KP,{src:qP}),_.jsx(XP,{children:"업무 관리시스템"})]}),e===1&&_.jsx(WP,{children:_.jsx(ZP,{onClick:s,children:"디자인 요청 등록"})}),_.jsxs(JP,{children:[_.jsxs(eV,{children:[_.jsx(tV,{src:zP}),_.jsx(nV,{children:u(e,n)})]}),_.jsx(rV,{children:o.map(h=>_.jsx(BP,{item:h},h.status))})]})]})}const YP=H.aside`
  height: 100%;
  border-right: 1px solid ${({theme:t})=>t.colors.black};
`,QP=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  padding: 19.5px 23px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,KP=H.img`
  margin-right: 8px;
`,XP=H.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  white-space: nowrap;
`,WP=H.div`
  padding: 32px 20px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,ZP=H.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,JP=H.div`
  padding: 0 24px;
`,eV=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 12px;
  padding: 30px 0;
`,tV=H.img``,nV=H.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
`,rV=H.ul`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`;function iV({isOpen:t,onClose:e,children:n}){return _.jsxs(_.Fragment,{children:[_.jsx(sV,{isVisible:t,onClick:e}),_.jsx(aV,{isVisible:t,onClick:s=>s.stopPropagation(),children:n})]})}const sV=H.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({isVisible:t})=>t?1:0};
  pointer-events: ${({isVisible:t})=>t?"auto":"none"};
  transition: opacity 0.3s ease;
`,aV=H.div`
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
  transform: ${({isVisible:t})=>t?"translateX(0)":"translateX(100%)"};
  transition: transform 0.3s ease;
`,PS="./assets/requestformexit-button-BcAG546a.svg",oV="./assets/checkbox-checked-eOVFoR8b.svg",zh={completion_dt:"",open_dt:"",task_form:"GHS",task_type:"프론트테마",requirement:"",url:"",note:"",emergency:!1};function e1({userName:t,editData:e,isDrawerOpen:n,onClose:s}){const o=(e==null?void 0:e.requester_edit_state)===!0,[u,h]=Y.useState(zh),[p,m]=Y.useState([]),g=(z,j)=>{h(X=>({...X,[z]:j}))},E=()=>m(z=>[...z,{...zh}]),S=z=>m(j=>j.filter((X,ae)=>ae!==z)),w=(z,j,X)=>m(ae=>{const le=[...ae];return le[z]={...le[z],[j]:X},le}),D=z=>z?nt.fromDate(new Date(z)):null,P=async()=>{const z=new Date,j=z.getFullYear().toString().slice(2),X=(z.getMonth()+1).toString().padStart(2,"0"),ae=Ia(wi(Vt,"design_request"),Ca("design_request_id",">=",`H${j}${X}000`),Ca("design_request_id","<",`H${j}${X}999`)),le=await bS(ae);return{year:j,month:X,base:le.size}},F=(z,j,X)=>`H${z}${j}${X.toString().padStart(3,"0")}`,V=async z=>{if(z.preventDefault(),!u.requirement){alert("요청 내용을 입력하세요.");return}if(o&&(e!=null&&e.id)){await va(dr(Vt,"design_request",e.id),{completion_dt:D(u.completion_dt),open_dt:D(u.open_dt),task_form:u.task_form,task_type:u.task_type,requirement:u.requirement,url:u.url,note:u.note,emergency:u.emergency,requester_edit_state:!1,updated_at:KT()}),alert("요청이 수정되었습니다!"),s();return}const j=[u,...p],X=j.findIndex(R=>!R.requirement);if(X!==-1){alert(`${X+1}번째 폼의 "작업 항목"을 입력하세요.`);return}const{year:ae,month:le,base:fe}=await P();let C=fe;const x=new Date;for(const R of j){C+=1;const k=F(ae,le,C);await Zk(wi(Vt,"design_request"),{design_request_id:k,request_date:D(x.toISOString()),requester:t,completion_dt:D(R.completion_dt),open_dt:D(R.open_dt),task_form:R.task_form,task_type:R.task_type,requirement:R.requirement,url:R.url,note:R.note,status:"대기",assigned_designer:"미배정",requester_review_status:"검수대기",manager_review_status:"",result_url:"",designer_start_date:null,designer_end_date:null,emergency:R.emergency,requester_edit_state:!1,designer_edit_state:!1,created_at:KT(),updated_at:null,delete_at:null,work_hour:""})}alert(`${j.length}건이 등록되었습니다!`),m([]),h(zh),s()};return Y.useEffect(()=>{o&&e&&h({completion_dt:e.completion_dt?e.completion_dt.toDate().toISOString().slice(0,10):"",open_dt:e.open_dt?e.open_dt.toDate().toISOString().slice(0,10):"",task_form:e.task_form??"GHS",task_type:e.task_type??"프론트테마",requirement:e.requirement??"",url:e.url??"",note:e.note??"",emergency:e.emergency??!1})},[o,e]),Y.useEffect(()=>{!n||o||(h(zh),m([]))},[n]),_.jsxs(_.Fragment,{children:[_.jsxs(uV,{children:[_.jsx(cV,{children:o?"디자인 요청 수정":"디자인 요청 등록"}),_.jsx(hV,{type:"button",onClick:s})]}),_.jsxs(lV,{onSubmit:V,children:[_.jsxs(fV,{children:[!o&&p.map((z,j)=>_.jsxs("div",{style:{marginBottom:24},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"8px 0 4px"},children:[_.jsxs("strong",{children:["추가 요청 ",j+1]}),_.jsx("button",{type:"button",onClick:()=>S(j),children:"삭제"})]}),_.jsxs(t1,{children:[_.jsx(n1,{children:"디자인 요청 추가 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Ht,{children:"문서번호"}),_.jsx(Ft,{})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:`completion_dt_ex_${j}`,children:"완료 요청일"})}),_.jsx(Ft,{children:_.jsx(Bh,{id:`completion_dt_ex_${j}`,type:"date",value:z.completion_dt||"",onChange:X=>w(j,"completion_dt",X.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:`open_dt_ex_${j}`,children:"오픈일"})}),_.jsx(Ft,{children:_.jsx(Bh,{id:`open_dt_ex_${j}`,type:"date",value:z.open_dt||"",onChange:X=>w(j,"open_dt",X.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:`task_form_ex_${j}`,children:"업무 형태"})}),_.jsx(Ft,{children:_.jsxs($h,{id:`task_form_ex_${j}`,value:z.task_form||"GHS",onChange:X=>w(j,"task_form",X.target.value),children:[_.jsx("option",{value:"GHS",children:"GHS"}),_.jsx("option",{value:"MHC",children:"MHC"}),_.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:`task_type_ex_${j}`,children:"업무 유형"})}),_.jsx(Ft,{children:_.jsxs($h,{id:`task_type_ex_${j}`,value:z.task_type||"프론트테마",onChange:X=>w(j,"task_type",X.target.value),children:[_.jsx("option",{value:"프론트테마",children:"프론트테마"}),_.jsx("option",{value:"별도기획전",children:"별도기획전"}),_.jsx("option",{value:"일자별배너",children:"일자별배너"}),_.jsx("option",{value:"핫새배너",children:"핫새배너"}),_.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),_.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),_.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),_.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),_.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),_.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),_.jsx("option",{value:"상품상세",children:"상품상세"}),_.jsx("option",{value:"제휴",children:"제휴"}),_.jsx("option",{value:"클럽",children:"클럽"}),_.jsx("option",{value:"팝업",children:"팝업"}),_.jsx("option",{value:"푸시",children:"푸시"}),_.jsx("option",{value:"홈테마",children:"홈테마"}),_.jsx("option",{value:"즉시배송",children:"즉시배송"}),_.jsx("option",{value:"트레이딩",children:"트레이딩"}),_.jsx("option",{value:"이벤트",children:"이벤트"}),_.jsx("option",{value:"기타",children:"기타"})]})})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:`requirement_ex_${j}`,children:"작업 항목"})}),_.jsx(Ft,{children:_.jsx(r1,{id:`requirement_ex_${j}`,type:"text",value:z.requirement||"",onChange:X=>w(j,"requirement",X.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:`emergency_ex_${j}`,children:"긴급 일정"})}),_.jsx(Ft,{children:_.jsx(a1,{children:_.jsxs(o1,{htmlFor:`emergency_ex_${j}`,children:[_.jsx(l1,{id:`emergency_ex_${j}`,type:"checkbox",checked:!!z.emergency,onChange:X=>w(j,"emergency",X.target.checked)}),_.jsx(u1,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:`url_ex_${j}`,children:"요청서 URL"})}),_.jsx(Ft,{children:_.jsx(i1,{id:`url_ex_${j}`,value:z.url||"",onChange:X=>w(j,"url",X.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:`note_ex_${j}`,children:"메모"})}),_.jsx(Ft,{children:_.jsx(s1,{id:`note_ex_${j}`,rows:4,value:z.note||"",onChange:X=>w(j,"note",X.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]},j)),_.jsxs(t1,{children:[_.jsx(n1,{children:"디자인 요청 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Ht,{children:"문서번호"}),_.jsx(Ft,{children:o?e==null?void 0:e.design_request_id:""})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:"completion_dt",children:"완료 요청일"})}),_.jsx(Ft,{children:_.jsx(Bh,{type:"date",id:"completion_dt",value:u.completion_dt,onChange:z=>g("completion_dt",z.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:"open_dt",children:"오픈일"})}),_.jsx(Ft,{children:_.jsx(Bh,{type:"date",id:"open_dt",value:u.open_dt,onChange:z=>g("open_dt",z.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:"task_form",children:"업무 형태"})}),_.jsx(Ft,{children:_.jsxs($h,{id:"task_form",value:u.task_form,onChange:z=>g("task_form",z.target.value),children:[_.jsx("option",{value:"GHS",children:"GHS"}),_.jsx("option",{value:"MHC",children:"MHC"}),_.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:"task_type",children:"업무 유형"})}),_.jsx(Ft,{children:_.jsxs($h,{id:"task_type",value:u.task_type,onChange:z=>g("task_type",z.target.value),children:[_.jsx("option",{value:"프론트테마",children:"프론트테마"}),_.jsx("option",{value:"별도기획전",children:"별도기획전"}),_.jsx("option",{value:"일자별배너",children:"일자별배너"}),_.jsx("option",{value:"핫새배너",children:"핫새배너"}),_.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),_.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),_.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),_.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),_.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),_.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),_.jsx("option",{value:"상품상세",children:"상품상세"}),_.jsx("option",{value:"제휴",children:"제휴"}),_.jsx("option",{value:"클럽",children:"클럽"}),_.jsx("option",{value:"팝업",children:"팝업"}),_.jsx("option",{value:"푸시",children:"푸시"}),_.jsx("option",{value:"홈테마",children:"홈테마"}),_.jsx("option",{value:"즉시배송",children:"즉시배송"}),_.jsx("option",{value:"트레이딩",children:"트레이딩"}),_.jsx("option",{value:"이벤트",children:"이벤트"}),_.jsx("option",{value:"기타",children:"기타"})]})})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:"requirement",children:"작업 항목"})}),_.jsx(Ft,{children:_.jsx(r1,{type:"text",id:"requirement",value:u.requirement,onChange:z=>g("requirement",z.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:"emergency",children:"긴급 일정"})}),_.jsx(Ft,{children:_.jsx(a1,{children:_.jsxs(o1,{htmlFor:"emergency",children:[_.jsx(l1,{type:"checkbox",id:"emergency",checked:u.emergency,onChange:z=>g("emergency",z.target.checked)}),_.jsx(u1,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:"url",children:"요청서 URL"})}),_.jsx(Ft,{children:_.jsx(i1,{id:"url",value:u.url,onChange:z=>g("url",z.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Ht,{children:_.jsx(fn,{htmlFor:"note",children:"메모"})}),_.jsx(Ft,{children:_.jsx(s1,{id:"note",rows:4,value:u.note,onChange:z=>g("note",z.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]}),_.jsxs(dV,{children:[_.jsx(pV,{type:"submit",children:o?"수정 완료":"등록하기"}),!o&&_.jsx(mV,{type:"button",onClick:E,children:"추가 등록하기"})]})]})]})}const lV=H.form`
  font-family: 'Pretendard';
`,uV=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,cV=H.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,hV=H.button`
  width: 24px;
  height: 24px;
  background: url(${PS}) no-repeat center;
  background-size: contain;
`,t1=H.table`
  width: 100%;
  color: ${({theme:t})=>t.colors.black};
  border-top: 1px solid ${({theme:t})=>t.colors.black};
`,fV=H.div`
  max-height: 690px;
  overflow: auto;
`,n1=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Ht=H.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,Ft=H.td`
  padding: 12px 24px;
  border-right: none;
`,fn=H.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`,Bh=H.input`
  width: 168px;
  padding: 6px 12px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,r1=H.input`
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,i1=H.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,s1=H.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: #fffff1;
`,a1=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 5px;
`,o1=H.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,l1=H.input`
  display: none;

  &:checked + span {
    background-color: ${({theme:t})=>t.colors.red};
    background-image: url(${oV}); // 체크 이미지 경로
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`,u1=H.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 2px;
`,$h=H.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 168px;
  padding: 7.5px 32px 7.5px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:t})=>t.colors.white01};
  background-image: url(${CS}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }
`,dV=H.div`
  margin-top: 24px;
  text-align: center;
`,pV=H.button`
  margin-right: 12px;
  padding: 12.5px 32px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,mV=H.button`
  padding: 10.5px 31.5px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  border: 1px solid ${({theme:t})=>t.colors.black};
  background-color: ${({theme:t})=>t.colors.white01};
  color: ${({theme:t})=>t.colors.black};

  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.black};
  }
`;function gV({data:t,onClose:e}){const n=s=>{if(!s)return"-";if(s.toDate){const o=s.toDate();return`${o.getMonth()+1}/${o.getDate()}`}return s};return _.jsxs(_.Fragment,{children:[_.jsxs(yV,{children:[_.jsx(_V,{children:"디자인 요청 상세"}),_.jsx(vV,{type:"button",onClick:e})]}),_.jsxs(EV,{children:[_.jsx(TV,{children:"디자인 요청 상세"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Mr,{children:"문서번호"}),_.jsx(fa,{children:t==null?void 0:t.design_request_id})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"요청일"}),_.jsx(fa,{children:n(t==null?void 0:t.request_date)})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"완료 요청일"}),_.jsx(bV,{children:n(t==null?void 0:t.completion_dt)})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"오픈일"}),_.jsx(wV,{children:n(t==null?void 0:t.open_dt)})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"업무 형태"}),_.jsx(fa,{children:t==null?void 0:t.task_form})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"업무 유형"}),_.jsx(fa,{children:t==null?void 0:t.task_type})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"작업 항목"}),_.jsx(fa,{children:t==null?void 0:t.requirement})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"긴급 일정"}),_.jsx(fa,{children:t!=null&&t.emergency?"긴급 일정으로 설정":"긴급 일정으로 설정 안함"})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"요청서 URL"}),_.jsx(fa,{children:t!=null&&t.url?_.jsx(AV,{href:t==null?void 0:t.url,target:"_blank",rel:"noreferrer",children:t==null?void 0:t.url}):"-"})]}),_.jsxs("tr",{children:[_.jsx(Mr,{children:"메모"}),_.jsx(SV,{children:_.jsx(xV,{children:t.note})})]})]})]})]})}const yV=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,_V=H.h3`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,vV=H.button`
  width: 24px;
  height: 24px;
  background: url(${PS}) no-repeat center;
  background-size: contain;
`,EV=H.table`
  width: 100%;
  border-top: 1px solid ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.black};
  font-family: 'Pretendard';
`,TV=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Mr=H.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,fa=H.td`
  padding: 12px 24px;
  border-right: none;
`,bV=H.td`
  padding: 12px 24px;
  color: ${({theme:t})=>t.colors.red};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,wV=H.td`
  padding: 12px 24px;
  color: ${({theme:t})=>t.colors.blue02};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,SV=H.td`
  padding: 12px 24px;
  background-color: #fffff1;
`,AV=H.a`
  display: -webkit-box;
  min-height: 70px;
  max-height: 70px;
  overflow-y: auto;
  -webkit-box-orient: vertical;
  word-break: break-word;
`,xV=H.p`
  min-height: 165px;
  max-height: 165px;
  overflow-y: auto;
  word-break: break-word;
`;function RV(){const[t,e]=Y.useState(0),[n,s]=Y.useState([]),[o,u]=Y.useState(""),[h,p]=Y.useState(!1),[m,g]=Y.useState(void 0),[E,S]=Y.useState(null);Y.useEffect(()=>{const P=$f(Da,async F=>{if(F){u(F.displayName||"");const V=await Cy(dr(Vt,"users",F.uid));if(V.exists()){const j=V.data().role,X=F.displayName;e(j);let ae;j===1?ae=Ia(wi(Vt,"design_request"),Ca("requester","==",X)):j===2?ae=Ia(wi(Vt,"design_request"),Ca("assigned_designer","==",X)):ae=wi(Vt,"design_request"),dd(ae,le=>{const fe=le.docs.map(C=>{const x=C.data();return{id:C.id,status:x.status??"대기중"}});s(fe)})}}else e(0),u(""),s([])});return()=>P()},[]);const w=()=>{g(void 0),S("create"),p(!0)},D=()=>{p(!1),g(void 0)};return _.jsxs(IV,{children:[_.jsx(GP,{requests:n,userName:o,role:t,onRequestButtonClick:w}),_.jsxs(CV,{children:[_.jsx(pM,{}),_.jsx(jP,{userRole:t,setIsDrawerOpen:p,setEditData:P=>{g(P),S("edit")},setDetailData:P=>{g(P),S("detail")}})]}),_.jsxs(iV,{isOpen:h,onClose:D,children:[E==="create"&&_.jsx(e1,{userName:o,isDrawerOpen:h,onClose:D}),E==="edit"&&m&&_.jsx(e1,{userName:o,isDrawerOpen:h,editData:m,onClose:D}),E==="detail"&&m&&_.jsx(gV,{data:m,onClose:D})]})]})}const IV=H.div`
  ${({theme:t})=>t.mixin.flex()};
  width: 100%;
  height: 100%;
`,CV=H.div`
  flex: 1;
`;function DV(){const[t,e]=Y.useState(""),[n,s]=Y.useState(""),[o,u]=Y.useState(""),[h,p]=Y.useState(""),m=Qu(),g=async()=>{if(o!==h){alert("비밀번호가 일치하지 않습니다.");return}b2(Da,n,o).then(async E=>{const S=E.user;await A2(S,{displayName:t}),await Wk(dr(Vt,"users",S.uid),{name:t,role:2,createdAt:new Date})}).then(()=>{alert("회원가입이 완료되었습니다!"),m("/")}).catch(E=>{alert("회원가입 중 오류 발생: "+E.message)})};return _.jsx(NV,{children:_.jsxs(OV,{children:[_.jsxs(kV,{children:[_.jsx(MV,{children:"PDMS"}),_.jsx(PV,{children:"Pushcomz Design Management System"})]}),_.jsx(VV,{children:_.jsx(LV,{src:SS})}),_.jsxs(jV,{children:[_.jsx(UV,{type:"text",value:t,onChange:E=>e(E.target.value),placeholder:"이름을 입력해주세요."}),_.jsx(qV,{type:"text",value:n,onChange:E=>s(E.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(zV,{type:"password",value:o,onChange:E=>u(E.target.value),placeholder:"비밀번호를 입력해주세요."}),_.jsx(BV,{type:"password",value:h,onChange:E=>p(E.target.value),placeholder:"비밀번호 확인을 입력해주세요."})]}),_.jsx($V,{onClick:g,children:"등록하기"})]})})}const NV=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,OV=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,kV=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,MV=H.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,PV=H.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,VV=H.div`
  margin-right: auto;
`,LV=H.img`
  
`,jV=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  gap: 10px;
`,UV=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,qV=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,zV=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,BV=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,$V=H.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`;function HV(){const[t,e]=Y.useState(!1);return _.jsx(DR,{basename:"/pdms-test",children:_.jsxs(oR,{children:[_.jsx(Hh,{path:"/",element:_.jsx(eM,{onLoginSuccess:()=>e(!0)})}),_.jsx(Hh,{path:"/dashboard",element:t?_.jsx(RV,{}):_.jsx(sR,{to:"/"})}),_.jsx(Hh,{path:"/signup",element:_.jsx(DV,{})})]})})}const FV="/assets/Pretendard-Bold-C0IAtCzs.woff2",GV="/assets/Pretendard-SemiBold-bHEaYlbJ.woff2",YV="/assets/Pretendard-Medium-BCuOcOjL.woff2",QV="/assets/Pretendard-Regular-BnvhP503.woff2",KV=zI`
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
    src: url(${FV}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${GV}) format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${YV}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${QV}) format('woff2');
    font-weight: 400;
  }

`,XV={white01:"#fff",white02:"#f4f4f4",red:"#eb193a",navy:"#073863",beige01:"#fff4ea",beige02:"#FFEEDE",orange:"#f88017",lightpupple:"#eaedfa",blue01:"#4f76ff",blue02:"#0B1ABF",gray01:"#ECEDF0",gray02:"#ccc",gray03:"#bdbdbd",gray04:"#f4f4f4",gray05:"#888",gray06:"#666",gray07:"#e5e2e2",gray08:"#F0F3F9",black:"#212121",pink01:"#FFDDDD",pink02:"#F48193",pink03:"#FFEBEB"},WV={flex:(t="flex-start",e="flex-start")=>`
    display: flex;
    align-items: ${t};
    justify-content: ${e}
  `},ZV={colors:XV,mixin:WV};gx.createRoot(document.getElementById("root")).render(_.jsx(Y.StrictMode,{children:_.jsxs(jI,{theme:ZV,children:[_.jsx(HV,{}),_.jsx(KV,{})]})}));
